javascript: (function () {
  // 「《」と「》」を取り除いたページタイトルを取得
  const page_title_tmp = document.querySelector("#header > h1 > a").innerHTML;
  const page_title = encodeURIComponent(page_title_tmp.replace(/《/g, "").replace(/》/g, ""));

  let result = "[** TODO : カード画像を追加する。]\n\n";

  // カードのステータスや効果テキストを取得
  for (elem of document.querySelector("#body > pre").childNodes) {
    if (elem.nodeName === "#text") {
      elem.nodeValue.split("\n").forEach( function(value) {
        result += "> " + value + "\n"; // 改行されるたびに引用記法を付与
      });
    }
  }

  result += "> [" + location.href + " 遊戯王Wikiより転載" + "]\n";
  location.href = "https://scrapbox.io/RutileYugioh/" + page_title + "?body=" + encodeURIComponent(result);
})();
