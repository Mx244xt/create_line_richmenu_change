function uploadRichMenuImage(RICH_MENU_ID, images) {
  let image;
  while(images.hasNext()){
    const img = images.next();
    image = img.getBlob();
  }

  let options = {
    method: 'post',
    headers: {
      'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
      'Content-Type': 'image/jpeg'
    },
    payload: image
  };
  let url = 'https://api-data.line.me/v2/bot/richmenu/' + RICH_MENU_ID + '/content';

  let response = UrlFetchApp.fetch(url, options);

  if (response.getResponseCode() === 200) {
    console.log('リッチメニュー画像をアップロードしました。');
  }
}
