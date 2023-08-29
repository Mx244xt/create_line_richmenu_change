function deleteRichMenuAlias() {
  const richMenuAliasId = getRichMenuAliasList()
  if (richMenuAliasId === undefined) return;
  richMenuAliasId.map((richAliasId) => {
    let options = {
      method: 'delete',
      headers: {
        'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN
      }
    };

    let url = 'https://api.line.me/v2/bot/richmenu/alias/' + richAliasId;

    let response = UrlFetchApp.fetch(url, options);

    if (response.getResponseCode() === 200) {
      console.log('リッチメニューを全て削除しました。');
    }
  });
}
