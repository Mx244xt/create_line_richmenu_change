function createAlias(CHANNEL_ACCESS_TOKEN, RICH_MENU_ID, alias) {
  console.log(CHANNEL_ACCESS_TOKEN, RICH_MENU_ID, alias)

  const payload = {
    "richMenuAliasId": alias,
    "richMenuId": RICH_MENU_ID
  };

    let options = {
    method: 'post',
    headers: {
      'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
      'Content-Type': 'application/json'
    },
    payload: JSON.stringify(payload)
  };
  var url = 'https://api.line.me/v2/bot/richmenu/alias';
  var response = UrlFetchApp.fetch(url, options);
  if (response.getResponseCode() === 200) {
    Logger.log('エイリアス['+ alias + "]を設定しました。");
  }
}
