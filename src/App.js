import { useState, useEffect } from 'react';
import List from './components/List';
// import info from './config/res.json';
import getUrlForRequest from './config/config.js';
import logo from './logo.svg';
import './App.css';
import ToolType from './components/ToolType';

function App() {
  const date = Date.now();
  const [listCurrency, setListCurrency] = useState([]);
  const getListCurrency = ({ Valute: value }) => Object.entries(value);

  // const getPrevUrl = (data) => `https:${data.PreviousURL}`;

  const formatDate = (date) => {
    return new Date(date).toLocaleString('ru', {
      day:   '2-digit',
      month: '2-digit',
      year:  '2-digit'
    });
  };


  useEffect(() => {
    getUrlForRequest(date)
      .then(result => {
        setListCurrency([...listCurrency, getListCurrency(result)]);
      })
      .catch((err) => console.error(err))
    // getListCurrency(JSON.parse(JSON.stringify(info)))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{formatDate(date)}</h1>
        {listCurrency.length ?
          <List arr={listCurrency} />
          : <p>Данные временно недоступны</p>
        }
      </header>
      <ToolType />
    </div>
  );
}

export default App;
