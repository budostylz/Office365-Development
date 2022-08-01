$userNames = ("jason.schwen")

foreach($userName in $userNames)
{

    $jobs = SkySync-cli jobs list --search $userName --output-json | ConvertFrom-Json
    $reportCmd = "skysync-cli reports add --name $userName  --simulation false "
    
    foreach ($job in $jobs)
    {
        
        $reportCmd += "--jobs " + $job.id + " "
    }
    Write-Host $reportCmd
    Invoke-Expression $reportCmd
}