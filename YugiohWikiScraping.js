
javascript: (function () {
  const page_title = document.querySelector("#header > h1 > a").innerHTML;
  let result = page_title.replace(/《/g , "").replace(/》/g , "");
  location.href = "https://scrapbox.io/RutileYugioh/" + result;
})();