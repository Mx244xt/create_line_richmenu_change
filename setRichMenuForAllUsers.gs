function setRichMenuForAllUsers(RICH_MENU_ID) {

  var options = {
    method: 'post',
    headers: {
      'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN
    }
  };
  var url = 'https://api.line.me/v2/bot/user/all/richmenu/' + RICH_MENU_ID;
  var response = UrlFetchApp.fetch(url, options);
  if (response.getResponseCode() === 200) {
    Logger.log('リッチメニューを公式チャンネルに設定しました。');
  }
}
