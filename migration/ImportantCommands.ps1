$keyword = "pcarlson"
write-host $keyword
SkySync-cli reports list --search $keyword --output-json
$reports = SkySync-cli reports list --search $keyword --output-json | ConvertFrom-Json
write-host $reports[0].id
skysync-cli reports stats $reports[0].id


