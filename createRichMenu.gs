function createRichMenu(plan) {

let richMenuData;
let images;
let alias;
if (plan === "A") {
  richMenuData = createRichMenuDataA();
  alias = "richmenu-alias-a";
  images = DriveApp.getFilesByName("Richmenu_WEB_APP.jpg");
} else if (plan === "B") { 
  richMenuData = createRichMenuDataB();
  alias = "richmenu-alias-b";
  images = DriveApp.getFilesByName("Richmenu_Git_Ref.jpg");
}

  let options = {
    method: 'post',
    headers: {
      'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
      'Content-Type': 'application/json'
    },
    payload: JSON.stringify(richMenuData)
  };

  let response = UrlFetchApp.fetch('https://api.line.me/v2/bot/richmenu', options);

  if (response.getResponseCode() === 200) {
    const json = JSON.parse(response);
    const setRichMenuId = json.richMenuId;
    uploadRichMenuImage(setRichMenuId, images);
    createAlias(CHANNEL_ACCESS_TOKEN, setRichMenuId, alias);
    
    PropertiesService.getScriptProperties().setProperty('RICH_MENU_ID_'+plan,setRichMenuId);
  }
}
