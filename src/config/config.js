const getUrlForRequest = (howDate, num) => {
  const date = new Date(howDate);
  const day = date.getDate() - 1;
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const correctDate = (n) => n < 10 ? `0${n}` : n;
  const str = num ? `archive/${year}/${correctDate(month)}/${correctDate(day)}/` : '';
  const url = `https://www.cbr-xml-daily.ru/${str}daily_json.js`;
  console.log(year, month, day);
  return fetch(url)
    .then((res) => res.ok ? res.json() : new Error('ошибка запроса'))
}

export default getUrlForRequest;
