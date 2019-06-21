(function () {
  switch (document.domain) {
    case "yugioh-wiki.net": // Wiki => Scrapbox
      CreatePage();
      break;
    case "scrapbox.io":     // Scrapbox => Wiki
      ViewWiki();
      break;
  }

  function CreatePage() {
    // 「《」と「》」を取り除いたページタイトルを取得
    const page_title_tmp = document.querySelector("#header > h1 > a").innerHTML;
    const page_title = encodeURIComponent(page_title_tmp.replace(/《/g, "").replace(/》/g, ""));

    let result = "[** TODO : カード画像を追加する。]\n\n";

    // カードのステータスや効果テキストを取得
    for (elem of document.querySelector("#body > pre").childNodes) {
      if (elem.nodeName === "#text") {
        elem.nodeValue.split("\n").forEach(function (value) {
          result += "> " + value + "\n"; // 改行されるたびに引用記法を付与
        });
      }
    }

    result += "> [" + location.href + " 遊戯王Wikiより転載" + "]\n";
    location.href = "https://scrapbox.io/RutileYugioh/" + page_title + "?body=" + encodeURIComponent(result);
  }

  function ViewWiki() {
    // 「《」と「》」を付与したページタイトルを取得
    const page_title_tmp = location.href.split('/').pop();
    const page_title = "《" + decodeURIComponent(page_title_tmp) + "》";
    const url = "https://rutile3.github.io/Bookmarklet/Scrapbox/RutileYugioh/WikiScraping/WikiScraping.html?";
    location.href = url + encodeURIComponent(page_title);
  }
})();
