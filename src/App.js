import { useState, useEffect } from 'react';
import List from './components/List';
import Preloader from './components/Preloader/Preloader';
import { getUrlForRequest, getFormatDate } from './util/util';
import logo from './logo.svg';
import './App.css';

function App() {
  const date = Date.now();
  const [listCurrency, setListCurrency] = useState({});
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUrlForRequest()
      .then(result => {
        setListCurrency(result);
        setLoading(false);
        setStatus(true);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {loading && <Preloader />}
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{getFormatDate(date)}</h1>
        {status ?
          <List dataList={listCurrency} />
          : <p>Данные временно недоступны</p>
        }
      </header>
    </div>
  );
}

export default App;
