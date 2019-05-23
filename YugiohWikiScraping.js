
javascript: (function () {
  const page_title_tmp = document.querySelector("#header > h1 > a").innerHTML;
  const page_title = encodeURIComponent(page_title_tmp.replace(/《/g, "").replace(/》/g, ""));
  let result = "[** TODO : カード画像を追加する。]\n\n";
  const card_text = document.querySelector("#body > pre").innerHTML;
  card_text.split("\n").forEach( function(value) {
    result += "> " + value + "\n"
  });
  result += "> [" + location.href + " 遊戯王Wikiより転載" + "]\n"
  location.href = "https://scrapbox.io/RutileYugioh/" + page_title + "?body=" + encodeURIComponent(result);
})();
