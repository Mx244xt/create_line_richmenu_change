function getRichAliasMenu(richAliasMenuId) {
  richAliasMenuId.map((richAliasId) => {
  let options = {
    method: 'get',
    headers: {
      'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN
    }
  };
  let url = 'https://api.line.me/v2/bot/richmenu/alias/' + richAliasId;

  let response = UrlFetchApp.fetch(url, options);
  let responseBody = response.getContentText();
  console.log(responseBody);
  });
}
