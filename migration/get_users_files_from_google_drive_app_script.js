const _ = LodashGS.load();
let reportData = [['Asset', 'Asset ID', 'MIME Type', 'Shared', 'Link', 'File Owners', 'File Owner Emails','Created Date', 'Modified Date', 'Size(Bytes)', 'Viewed By Me']];
let currentUserName = 'Betty Hamilton';
let currentUserEmail = 'bhamilton@lifetouch.com';
let serviceAccount = {
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCwkqxu/UsSDr2I\nZXBzx7I2F/jV5rb+cjMqjwbXxPqIAb3ix6UMwqxMpCKon4DCuA6BKa8IhZ0ShvM8\nUReiDhOCnkW4hfpAC8n8gTZYNkr0LLOYYCmP6iGCmyCR/DQ0ImHPZCgkZAGywQfh\nkhozgIM+eQugUOzmVENW2gf/FKFDEL5gjPalwBe+9SnrVuZOH0xr/K5M8e56gHGF\nxzn6TcgulBe9k8YOOTOcYxfQK49BjwMoaY9ydDzYXQxJY/Bv5eC4SF0EbFr5YX84\n9KaGd14m5rXqgjyXWwADH1ippwQdXioPY2agOlUQVGVcYTQN94NF9K/n77Xn90Pt\nNIeR297fAgMBAAECggEANnXOvF7gaB3mxGpxICzAISIMrEDAQUOM13wMwsEs+oT7\nAbbNB94FUZAwZmznxGcLhjgKlejMFPpNjFWAogmQZ/GUFIEyOc3JC1n5HoUEYkJl\nVEKYnxw6ILPi/FPa8BeIrnQ4U10LDwytdxvee/MPx9WCyfwbzUDBEkkmPT0qLeo5\nFq2TxkOn/Vg7q0v70ytI5IOZhhx8xX/CKxgUVq1Npnlkdo44yX3nIsY1UGHVjsSy\nMlOjgWQlVX49HHwS6jAg/Aq3tZ4udD+QDNUz7aNtMLDlO8E2pGZvxo9TR/8AemkA\nXjVyXi/vYnFULQ6Gl2HpotRj2EvE8L7qIqzuWI0iAQKBgQDmCeO8+U5F9QcWUNL7\nk8kq0zGgz9JgnDTDdIi7vg745HBqRFRPCkNsTrYIjKOZu4VNdlXCgm0u5e/yqRMo\nSVojTy/kZvcM9DQx0ETFH0uqOeJwvylDYX3hZZf5kYP1UmjLpmHmpYVgqKd8Uhhc\nFxe5/O9D4JtZ/CalAPTACdV6AQKBgQDEgBeC0Jp+4O7Kvhn5asf2MnYvc/3mISi5\nFM5dulWW7X7sCDZSqi7myS9l+OOiTuYDsqY7raMBikA71L7YubkVgtWQ7v7gElXi\nCb38WxCj7CEKDFHH+xq5rUny/WKiqwy8+CIV4nMt3EPQ90DMsZ97AeH1VOzidyrn\nQbkaBHaY3wKBgQCotf4ZvXpjolZFTpe+POAgEW5nc6PmiQnFg7U4hCa08c1kkqKG\nqY9TYtLsqEDgYgBdFHnHQyLSb38wqEHNnSaHmO8WA1ITZRLWqdmV/OLggL2LVRft\nPBY3dewk9E0kYgFLwsYwg5qzjl3vtsH44FLdbB0K2jL1pxGsmGvoYA36AQKBgQCE\nj7VMttXDCpONirmTHYpQeLJqSOHcQjpqwbKGYJIlA4tASDn9gnmpj8e+Dy3h7UAW\n9opWcEkrXM0AkAE/y+skq+LPp6uiFjyCBPh6KiULsNyJHs59DtV0tYbRuka0Xph1\nUyALi30QTywg6Ox6Ksnf/eEl1GkKTkJPSHNLLf+kGQKBgEiBEJlFjwoRiHrR7xjQ\nZ/tCOCLG1T0Xn7T+T+/lhicxkrYuPfSQQW4cGGSkQTuYm3k7vdCrntFoOywvOWyL\nZsCmn7GjzVnZG67PMb91x0t14WKLik5APyyCyCYOoIkXUdkOeEVJcG/GA75CG1Ed\n6H9dREO8ZSCA3EVQAOIDxDXd\n-----END PRIVATE KEY-----\n",
  "client_email": "google-drive-reporting@igneous-thunder-347010.iam.gserviceaccount.com",
  "client_id": "112387410693797537468",
  "user_email":"bhamilton@lifetouch.com",
  "api_key": "AIzaSyBMCOJTBWw0RbCGO_AM84MVmn33pdovRNc"
  
}

  function getUsers() {

    let values = [],
          users = [],
          userListQuery = {},
          nextPageToken = '',
          listObject = {
              customer: 'my_customer',
              maxResults: 500,
              
          },
          i = 0,
          spreadsheetID = '1JLDD2wm0_udmTn9ZHvdKhL_Ok3SvKYFqkBeiA1GdnYc';


    do{

      if (nextPageToken && nextPageToken !== '') {
        listObject.pageToken = nextPageToken;
        //console.log('listObject.pageToken: ', listObject.pageToken);
      }  

        userListQuery = AdminDirectory.Users.list(listObject);
        //console.log('userListQuery: ', userListQuery);
        
        // if there are more users than fit in the query a nextPageToken is returned
        nextPageToken = userListQuery.nextPageToken;
        //console.log('nextPageToken: ', nextPageToken);

        // Add the query results to the users array
        users = users.concat(userListQuery.users);

    }while(nextPageToken)

    console.log('user count: ', users.length);
    for (i = 0; i <= 1000; i += 1) {
      try{
        //console.log('Count: ', i)
        //if(!users[i].suspended){
        console.log('USER: ', users[i]);
        currentUserName = users[i].name.fullName;
        currentUserEmail = users[i].primaryEmail;
        console.log(currentUserName, currentUserEmail, users[i].suspended); 
        serviceAccount.user_email = users[i].primaryEmail;
        //console.log('service account email: ', serviceAccount.user_email);  
        //getUserFiles();
      //}

      }
      catch(e){
        console.log('error: ', e);
      }
      
      
    }

    createReport(reportData);


}


function getOAuthService() {
  return OAuth2.createService('Service Account')
    .setTokenUrl('https://accounts.google.com/o/oauth2/token')
    .setPrivateKey(serviceAccount.private_key)
    .setIssuer(serviceAccount.client_email)
    .setSubject(serviceAccount.user_email)
    .setPropertyStore(PropertiesService.getScriptProperties())
    .setParam('access_type', 'offline')
    .setScope('https://www.googleapis.com/auth/drive');
}


function getUserFiles() {


  //console.log('current user: ', currentUserName);
  //console.log('current user email: ', currentUserEmail);
  //console.log('service.hasAccess(): ', service.hasAccess());
  //console.log('service.getAccessToken(): ', service.getAccessToken());
  //console.log('service.getLastError(): ', service.getLastError());
  let fields = "nextPageToken,files(id,name,trashed,mimeType,owners,shared,webViewLink,createdTime,modifiedTime,permissions,size,viewedByMeTime)";
  let nextPageToken = null;
  let assetCount = 0;
  do{

      try{

          //console.log('IMPERSONATED USER EMAIL: ', serviceAccount.user_email);
          let service = getOAuthService();
          service.reset();

        if (service.hasAccess()) { 
          let url = (nextPageToken) ? 
          "https://www.googleapis.com/drive/v3/files?pageSize=100&fields="+fields+"&q=%27me%27%20in%20owners&pageToken="+nextPageToken+"" 
          : "https://www.googleapis.com/drive/v3/files?pageSize=100&fields="+fields+"&q=%27me%27%20in%20owners";

         //console.log('URL: ', url);


          let response = UrlFetchApp.fetch(url, {
            headers: {
              Authorization: 'Bearer ' + service.getAccessToken(),
            },
          });

          if(response.getResponseCode()){
            assetCount+=1;
            let result = JSON.parse(response.getContentText());
            nextPageToken = (result.nextPageToken) ? result.nextPageToken : null;
            //console.log('RESULT: ', result);
            //console.log('ASSET COUNT: ', result.files.length);
            //console.log('NextPageToken: ', result.nextPageToken);





          _.filter(result.files, function(asset) {//drive asset
              //console.log('Asset: ', asset);

              if(!asset.trashed){

                    let assetArr = [];
                    let assetName = '';
                    let assetType = '';
                    let shared = '';
                    let link = '';
                    let ownerNames = '';
                    let ownerEmails = '';
                    let createdDate = '';
                    let modifiedDate = '';



                    //console.log(asset.name);
                    //console.log('ITEM: ',asset);


                

                
                    //console.log('ASSET COUNT: ', assetCount);
                    //console.log('TEST: ', test);
                    //console.log(asset.name);

                    //console.log('Asset Next Page Token: ', asset.nextPageToken); 
                    //console.log('asset type: ', asset.mimeType);
                    //console.log('shared: ', asset.shared);
                    //console.log('link: ', asset.alternateLink);
                    //console.log('created date: ', asset.createdDate);
                    //console.log('modified date: ', asset.modifiedDate);

                  _.filter(asset.owners, function(owner) {//asset owner
                      ownerNames = currentUserName;
                      ownerEmails = currentUserEmail;

                      //console.log('Owner Names: ', owner.displayName)
                      //console.log('owners email address: ', owner.emailAddress) 
            
                    });

                    assetArr.push(asset.name);
                    assetArr.push(asset.id);
                    assetArr.push(asset.mimeType);
                    assetArr.push(asset.shared);
                    //(asset.sharedWithMeDate) ?  assetArr.push(currentUserName) : assetArr.push('');
                    //(asset.sharedWithMeDate) ?  assetArr.push(currentUserEmail) : assetArr.push('');
                    assetArr.push(asset.webViewLink);
                    assetArr.push(ownerNames);
                    assetArr.push(ownerEmails);

                    //console.log('OWNERS: ', ownerNames, ownerEmails)
                    assetArr.push(asset.createdTime);
                    assetArr.push(asset.modifiedTime);
                    assetArr.push(asset.size);
                    assetArr.push(asset.viewedByMeTime);
                    //(asset.driveId) ? assetArr.push(asset.driveId) : 'MY DRIVE';
                    reportData.push(assetArr);

              }
                
          });

          //console.log('REPORT DATA: ', reportData);



        }

      //console.log('response: ', response.getContent());
      }

      //break;


      }
      catch(e){
        console.log('ERROR: ', e)
      }

}while(nextPageToken)


  //console.log('reportData: ', reportData);
  createReport(reportData); //- single report test







  
  
}



function createReport(rowValues){
 try {
    let sheet = Sheets.newSpreadsheet();
    sheet.properties = Sheets.newSpreadsheetProperties();
    sheet.properties.title = 'GOOGLE DRIVE BJ REPORT';
    const spreadsheet = Sheets.Spreadsheets.create(sheet);
    updateReport(spreadsheet.spreadsheetId, rowValues);
  } catch (err) {
    // TODO (developer) - Handle exception
    Logger.log('Failed with error %s', err.message);
  }
}

function updateReport(spreadsheetId, rowValues) {

  let request = {
    'valueInputOption': 'USER_ENTERED',
    'data': [
      {
        'range': 'Sheet1!A1:K1000000',
        'majorDimension': 'ROWS',
        'values': rowValues
      }
    ]
  };

  var response = Sheets.Spreadsheets.Values.batchUpdate(request, spreadsheetId);
  Logger.log(response);
}


function reset() {
  var service = getOAuthService();
  service.reset();
}
