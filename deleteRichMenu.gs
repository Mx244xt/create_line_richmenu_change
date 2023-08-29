function deleteRichMenu() {
  deleteRichMenuAlias()
  const richMenuId = getRichMenuList()
  if (richMenuId === undefined) return;
  richMenuId.map((richId) => {
    let options = {
      method: 'delete',
      headers: {
        'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN
      }
    };

    let url = 'https://api.line.me/v2/bot/richmenu/' + richId;

    let response = UrlFetchApp.fetch(url, options);

    if (response.getResponseCode() === 200) {
      console.log('リッチメニューを全て削除しました。');
    }
  });
}
