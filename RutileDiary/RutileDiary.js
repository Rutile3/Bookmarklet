(function () {
  const project_url = "RutileDiary";

  const date = new Date();
  const yy = (""   +  date.getFullYear()  ).slice(-2);
  const mm = ("00" + (date.getMonth() + 1)).slice(-2);
  const dd = ("00" +  date.getDate()      ).slice(-2);

  location.href = "https://scrapbox.io/" + project_url + "/" + yy + mm + dd;
})();
