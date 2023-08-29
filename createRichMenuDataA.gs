function createRichMenuDataA() {
  const width = 800;
  const height = 540;
  const section = width/3;
  const height1 = 108;
  const height2 = 216;
  const area = 216;

  return richMenuData = {
    size: {
      width: width,
      height: height
    },
    selected: true,
    name: 'リッチメニュー切り替え',
    chatBarText: 'メニューを開く',
    areas: [
      {
        bounds: {
          x: 0,
          y: 0,
          width: width/2,
          height: height1
        },
        action: {          
          "type": "richmenuswitch",
          "richMenuAliasId": "richmenu-alias-a",
          "data": "richmenu-changed-to-a"
        }
      },
      {
        bounds: {
          x: width/2,
          y: 0,
          width: width/2,
          height: height1
        },
        action: {          
          "type": "richmenuswitch",
          "richMenuAliasId": "richmenu-alias-b",
          "data": "richmenu-changed-to-b"
        }
      },
      {
        bounds: {
          x: 0,
          y: height1,
          width: section,
          height: area
        },
        action: {
          "type": "uri",
          "label": "数独アプリ",
          "uri": "https://www.mx244.com"
        }
      },
      {
        bounds: {
          x: section,
          y: height1,
          width: section,
          height: area
        },
        action: {
          "type": "uri",
          "label": "猫アプリ",
          "uri": "https://cat.mx244.com"
        }
      },
      {
        bounds: {
          x: section*2,
          y: height1,
          width: section,
          height: area
        },
        action: {
          "type": "uri",
          "label": "TODOアプリ",
          "uri": "https://todo.mx244.com"
        }
      },
      {
        bounds: {
          x: 0,
          y: height2,
          width: section,
          height: area
        },
        action: {
          "type": "uri",
          "label": "gmail→LINE",
          "uri": "https://line.me/R/ti/p/%40201chxyz"
        }
      },
      {
        bounds: {
          x: section,
          y: height2,
          width: section,
          height: area
        },
        action: {
          "type": "uri",
          "label": "ホームボタン",
          "uri": "https://github.com/Mx244xt"
        }
      },
      {
        bounds: {
          x: section*2,
          y: height2,
          width: section,
          height: area
        },
        action: {
          "type": "uri",
          "label": "リッチメニュー作成",
          "uri": "https://line.me/R/ti/p/%40797slcwe"
        }
      },
    ]
  };
}
