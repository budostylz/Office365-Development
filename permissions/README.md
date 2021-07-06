[Allow or prevent custom script](https://docs.microsoft.com/en-us/sharepoint/allow-or-prevent-custom-script)

[Removing Deny permission on Add and customize pages](https://www.infowisesolutions.com/documentation/?ID=253)

Connect-PnPOnline -Identity https://budoappsdev.sharepoint.com/ 

Set-PnPSite -Identity https://budoappsdev.sharepoint.com/ -DenyAddAndCustomizePages $false

[Working with Office Group sites](https://www.infowisesolutions.com/blog/working-with-office-group-sites)
