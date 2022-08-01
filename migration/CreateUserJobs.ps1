Param(
    [String]$skysyncServer = 'http://localhost:9090/',
    [String]$skysyncAdminUser = 'svc-skysync01',
    [string]$skysyncAdminUserPassword = 'Th!si$Sky$yncp@ssword01!',
	[string]$sJobType = 'Individual' <# Individual or Territory #>
)

import-module Newtonsoft.json
#$asm = [Reflection.Assembly]::LoadFile("$PSScriptRoot\lib\Newtonsoft.Json.dll");

<# Get an access token that will be used to authenticate to SkySync V4#>
function get-skysync-access-token {
	param( [string] $skysyncServer, [string] $skysyncAdminUser, [string] $skysyncAdminUserPassword )
	$accessRequestUrl = $skysyncServer + "connect/token"

	$accessRequestBody = @{
		grant_type = "password"
		scope = "offline_access profile roles"
		resource = $skysyncServer
		username = $skysyncAdminUser
		password = $skysyncAdminUserPassword
	}

	$accessRequestResult = Invoke-RestMethod -Method 'Post' -Uri $accessRequestUrl -Body $accessRequestBody
	return $accessRequestResult.access_token
}

<# Build the request header and include the access token#>
function get-request-header {
	param( [string]$accessToken )
	$requestHeader = @{
		Authorization = "Bearer " + $accessToken
		Accept = "application/json"
	}
	return $requestHeader
}

<# Create the job(s) #>

<# 
	The connection information can be hardcoded like the below example or can be passed in 
	via the CSV for situations were multiple connections are used.
#>
$jobnameprefix = (" mydrive_Media ", " mydrive_NonMedia ", " sharewithme_Media "," sharewithme_NonMedia ", " unorganized_Media ", " unorganized_NonMedia ")
$jobtemplates =(".\IndividualAccounts\MyDriveTemplate-Media.json",".\IndividualAccounts\MyDriveTemplate-NonMedia.json",".\IndividualAccounts\ShareWithMeTemplate-Media.json",".\IndividualAccounts\ShareWithMeTemplate-NonMedia.json",".\IndividualAccounts\UnorganizedTemplate-Media.json",".\IndividualAccounts\UnorganizedTemplate-NonMedia.json")

if ($sJobType -eq "Territory")
{
	$jobtemplates =(".\TerritoryDrives\MyDriveTemplate-Media.json",".\IndividualAccounts\MyDriveTemplate-NonMedia.json",".\TerritoryDrives\ShareWithMeTemplate-Media.json",".\TerritoryDrives\ShareWithMeTemplate-NonMedia.json",".\TerritoryDrives\UnorganizedTemplate-Media.json",".\TerritoryDrives\UnorganizedTemplate-NonMedia.json")
}

# Get the parameters used to create the jobs
$users = Import-Csv -Path ".\CreateJobs1.csv" 

# Cycle through each row in the JobParameters.csv file, creating a job for each row in the CSV file
foreach ($user in $users)
{
	try {
		#$jobName = $jobNameTemplate
		$counter = 0;
		
        foreach($jobtemplate in $jobtemplates)
        {
            # Read in the json template used to create the job
            $json = Get-Content -Path $jobtemplate -Raw
            $jobConfigTemplate =   [Newtonsoft.Json.JsonConvert]::DeserializeObject($json, [Newtonsoft.Json.Linq.JObject]) #ConvertFrom-Json -Depth 1024 #Common Job Template
            
		    $jobName = ($user.sname +  $jobnameprefix[$counter] + $user.job_name_prefix  )
		    Write-Host "Processing:" $jobName
            $jobConfig = $jobConfigTemplate
			if($jobtemplate -like "*NonMedia.json")
			{
				$date = Get-Date "01/01/2019 00:00 AM"
				$date = [long] (Get-Date -Date (($date).ToUniversalTime()) -UFormat %s)
			}
			else {
				$date = Get-Date
				$date = $date.AddMonths(-18)
				$date = [long] (Get-Date -Date (($date).ToUniversalTime()) -UFormat %s)
			}
			$lastModifiedDateFilter = $date #1514788261 #1514788261 unix time
            # Apply the connection values to the json template
            #$jobConfig.transfer.source.connection.id = $sourceConnid.ToString()
            #$jobConfig.transfer.destination.connection.id = $destinationConnID.ToString()
            #$jobConfig.transfer.account_map.id = $accountMapId[$counter].ToString()
	        $jobConfig.transfer.source.impersonate_as.name = $user.impersonateName.ToString()
	        $jobConfig.transfer.source.impersonate_as.email = $user.impersonateEmail.ToString()
            $jobConfig.transfer.destination.impersonate_as.name = $user.d_impersonate_name.ToString()
            $jobConfig.transfer.destination.impersonate_as.email = $user.d_impersonate_email.ToString()
			#$jobConfig.transfer.filter.source.rules[2].filter.value = $user.impersonateEmail.ToString()
            $owner = '[owner] != "' + $user.impersonateEmail.ToString() +'"'
            $jobConfig.transfer.filter.source.rules[2].text = $owner
            $jobConfig.transfer.filter.source.rules[3].range.to = $lastModifiedDateFilter
            
		    # Apply the parameter values to the json template
		    #$jobConfig.transfer.source.target.path = $user.source_path.ToString()
		    #$jobConfig.transfer.destination.target.path = $destinationpath[$counter].ToString()
		    $jobConfig.name = $jobName.ToString()
		    $jobConfig.category.name = $user.job_category.ToString()
	
		    $jobConfig = [Newtonsoft.Json.JsonConvert]::SerializeObject($jobConfig) #$jobConfig | ConvertTo-Json -Depth 10
	
		    # Get the access token and save it to the variable
		    $accessToken = get-skysync-access-token $skysyncServer $skysyncAdminUser $skysyncAdminUserPassword
		
		    # Build the authorization header and incorporate the access token
		    $authHeader = get-request-header $accessToken
	
		    # Set the Rest endpoint path to the the SkySync V4 instance
		    $createJobMethod = $skysyncServer + "v1/jobs"

		    # Pass in the authorization header and job json configuration into the Rest endpoint
		    $createJobResponse = Invoke-RestMethod $createJobMethod -Headers $authHeader -Method Post -ContentType "application/json" -Body $jobConfig
	
		    # If the job was created successfully, it will return a job id and job name
		    Write-Host "Successfully created Job:" $createJobResponse.job.id "|" $createJobResponse.job.name
            $counter++
        }

        
	}
	catch {
		$exMsg = $_.Exception.Message
		$line = $_.Exception.InvocationInfo.ScriptLineNumber
		$st = $_.ScriptStackTrace
		Write-Host "An error occurred while creating the job :" $user.destination_username  " ${exMsg}. Line ${line}. ${st}"
		return
	}
}