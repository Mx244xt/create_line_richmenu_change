function getRichMenuList() {
  let options = {
    method: 'get',
    headers: {
      'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN
    }
  };

  let url = 'https://api.line.me/v2/bot/richmenu/list';

  let response = UrlFetchApp.fetch(url, options);
  if (response.getResponseCode() === 200) {
    let richMenus = JSON.parse(response);
    const richMenuId = richMenus.richmenus.map((id) => {
      return id.richMenuId
    });
    if (richMenuId.length === 0){
      Logger.log("リッチメニューが存在しません。")
      return
    }
    getRichMenu(richMenuId);
  return richMenuId;
  }
}
