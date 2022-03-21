import { useState, useEffect } from 'react';
import { Badge, Button } from 'react-bootstrap';
// import { url } from './config/config.js';
import info from './config/res.json';
import logo from './logo.svg';
import './App.css';

function App() {
  const date = Date.now();
  const [listCurrency, setListCurrency] = useState(['dollars', 'euro', 'rub']);
  const getListCurrency = ({ Valute: value }) => {
    const arr = Object.entries(value);
    console.log(arr);
    setListCurrency(arr)
  };

  function formatDate(date) {
  return new Date(date).toLocaleString('ru', {
    day:   '2-digit',
    month: '2-digit',
    year:  '2-digit'
  });
}

  useEffect(() => {
    // fetch(url)
    //   .then(res => res.ok ? res.json() : new Error('Error connect'))
    //   .then(result => getListCurrency(result))
    //   .catch(err => console.error(err))
    getListCurrency(JSON.parse(JSON.stringify(info)))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <h1>{formatDate(date)}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <Button variant="outline-primary">Primary</Button>{' '}
        <ul className="list-group">
          {listCurrency.length ?
            listCurrency.map(([ico, value], id) =>
              <li className="list-group-item" key={id}>
                {value.Name}
                <Badge bg="primary">{ico}</Badge>
              </li>
            )
            : <li>список пуст</li>
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
