function getRichMenu(richMenuId) {
  richMenuId.map((richId) => {
  let options = {
    method: 'get',
    headers: {
      'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN
    }
  };
  let url = 'https://api.line.me/v2/bot/richmenu/' + richId;

  let response = UrlFetchApp.fetch(url, options);
  let responseBody = response.getContentText();
  console.log(responseBody);
  });
}
