function createRichMenuDataB() {
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
          "uri": "https://github.com/Mx244xt/first_sudoku"
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
          "uri": "https://github.com/Mx244xt/cat-app"
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
          "label": "リッチメニュー作成",
          "uri": "https://github.com/Mx244xt/create_line_richmenu"
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
          "label": "Gmail→LINE通知",
          "uri": "https://github.com/Mx244xt/Send-Gmail-to-LINE-using-GAS"
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
          "label": "TODOアプリ",
          "uri": "https://github.com/Mx244xt/react-todoapp"
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
          "label": "Messaging API リファレンス",
          "uri": "https://developers.line.biz/ja/reference/messaging-api/"
        }
      },
    ]
  };

}
