function getLastWeek() {
  let d = new Date();
  d.setDate(d.getDate() - 5);
  const lastweek = new Date(d);
  let dd = String(lastweek.getDate()).padStart(2, "0");
  let mm = String(lastweek.getMonth() + 1).padStart(2, "0");
  let yyyy = lastweek.getFullYear();
  var week = new Array();

  const date = new Date(yyyy, mm, dd);
  date.setDate(date.getDate() - date.getDay() + 1);
  for (var i = 0; i < 7; i++) {
    const localDate = new Date(date);
    week.push(
      `${localDate.getDay()}/${localDate.getMonth()}/${localDate.getFullYear()}`
    );
    date.setDate(date.getDate() + 1);
  }

  return week;
}

export default getLastWeek;
