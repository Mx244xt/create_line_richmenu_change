function getRichMenuAliasList() {
  let options = {
    method: 'get',
    headers: {
      'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN
    }
  };

  let url = 'https://api.line.me/v2/bot/richmenu/alias/list';

  let response = UrlFetchApp.fetch(url, options);
  if (response.getResponseCode() === 200) {
    let richMenusAlias = JSON.parse(response);
    Logger.log(richMenusAlias)
    const richMenuAliasId = richMenusAlias.aliases.map((id) => {
      return id.richMenuAliasId
    });
    if (richMenuAliasId.length === 0){
      Logger.log("リッチメニューが存在しません。")
      return
    }
    getRichAliasMenu(richMenuAliasId);
  return richMenuAliasId;
  }
}
