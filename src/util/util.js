const getUrlForRequest = (url) => {
  return fetch(url ? `https:${url}` : 'https://www.cbr-xml-daily.ru/daily_json.js')
    .then((res) => res.ok ? res.json() : new Error('ошибка запроса'))
};

const diffValues = (a, b) => (((a - b) / a) * 100).toFixed(2);

const getFormatDate = (date) => {
    return new Date(date).toLocaleString('ru', {
      day:   '2-digit',
      month: '2-digit',
      year:  '2-digit'
    });
};

const getListCurrency = ({ Valute: value }) => Object.entries(value);

export {getUrlForRequest, getListCurrency, getFormatDate, diffValues};
