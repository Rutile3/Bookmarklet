(function () {
  const project_url = "RutileDiary";

  const day_of_week = [ "日", "月", "火", "水", "木", "金", "土" ]
  function getDayOfWeek(day) {return day_of_week[day] }
  function getYY(date) { return (""  + (date.getFullYear() )).slice(-2); }
  function getMM(date) { return ("0" + (date.getMonth() + 1)).slice(-2); }
  function getYYMM(date) { return getYY(date) + getMM(date)}

  //今月
  const today = new Date();
  const today_yy = getYY(today);
  const today_mm = getMM(today);
  const today_yymm = today_yy + today_mm;

  //先月の翌月
  const prev_month = new Date();
  const next_month = new Date();
  prev_month.setMonth(today.getMonth() - 1);
  next_month.setMonth(today.getMonth() + 1);
  const prev_and_next_month = "[" + getYYMM(prev_month) +"]←→[" + getYYMM(next_month) + "]";
  let body = prev_and_next_month + "\n\n";

  //カレンダー
  body += "[*** 20" + today_yy + "年" + today_mm + "月]\n"
  for (let i = 1; i <= new Date(today_yy, today_mm, 0).getDate(); i++) {
      const tmp_date = new Date(today_yy, today_mm, i);
      body += "[" + today_yymm + ("0" + i).slice(-2) + "] ";
      body += getDayOfWeek(tmp_date.getDay()) + " \n";
  }

  body += "\n" + prev_and_next_month + "\n\n";
  body += "#月予定表"

  location.href = "https://scrapbox.io/" + project_url + "/" + today_yymm + "?body=" + encodeURIComponent(body);
})();
