import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tooltip from './ToolType';
import {getUrlForRequest, getListCurrency, diffValues} from '../util/util';
import ListItem from './ListItem';

function List({dataList}) {
  const [allListCurrency, setAllListCurrency] = useState([[]]);
  const [listForToolType, setListForToolType] = useState([]);
  const [status, setStatus] = useState(false);
  const [title, setTitle] = useState('');

  function closeToolType() {
    setStatus(false);
  }

  function info(ico, name) {
    const arrFilter = allListCurrency.map(({Date, Valute}) => [Date, Valute[ico]]);
    setListForToolType(arrFilter);
    setTitle(name);
    setStatus(true);
  }

  useEffect(() => {
    const {PreviousURL: prev} = dataList;
    const data = [];
    getUrlForRequest(prev)
      .then(result => {
        data.push(result);
        return getUrlForRequest(result.PreviousURL);
      })
      .then(result => {
        data.push(result);
        return getUrlForRequest(result.PreviousURL);
      })
      .then(result => {
        data.push(result);
        return getUrlForRequest(result.PreviousURL);
      })
      .then(result => {
        data.push(result);
        return getUrlForRequest(result.PreviousURL);
      })
      .then(result => {
        data.push(result);
        return getUrlForRequest(result.PreviousURL);
      })
      .then(result => {
        data.push(result);
        return getUrlForRequest(result.PreviousURL);
      })
      .then(result => {
        data.push(result);
        return getUrlForRequest(result.PreviousURL);
      })
      .then(result => {
        data.push(result);
        return getUrlForRequest(result.PreviousURL);
      })
      .then(result => {
        data.push(result);
        return getUrlForRequest(result.PreviousURL);
      })
      .then(result => {
        data.push(result);
        setAllListCurrency(data);
      })
      .catch((err) => console.error(err))
      .finally(() => setStatus(false));
    }, [dataList])

  return (
    <>
      {dataList["Date"] ?
        getListCurrency(dataList).map(([ico, value]) => {
          return (
          <div className="hover" key={`${ico}-hover`}>
            <ListItem
              keys={ico}
              name={value.Name}
              openList={info.bind(null, ico, value.Name)}
              oneCol={value.CharCode}
              twoCol={value.Value}
              threeCol={diffValues(value.Value, value.Previous)}
            />
          </div>
          );
        })
        : <p>список пуст</p>
      }
      {status && <Tooltip title={title} arr={listForToolType} close={closeToolType} />}
    </>
  )
}
List.propTypes = {
  dataList: PropTypes.object.isRequired,
};


export default List;
