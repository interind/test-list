import PropTypes from 'prop-types';
import ListItem from './ListItem';
import { getFormatDate, diffValues } from '../util/util';

function ToolType({arr, close, title}) {
  return (
    <div className="modal d-flex bg-dark bg-opacity-75" tabIndex="-1" id="exampleModalScrollable" onClick={close}>
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <h5 className="modal-title">{title}</h5>
          {arr.length ? arr.map(([ico, value]) =>
            <ListItem
              key={ico+title}
              keys={ico}
              name={title}
              openList={()=>{}}
              oneCol={getFormatDate(ico)}
              twoCol={value.Value}
              threeCol={diffValues(value.Value, value.Previous)}
            />
          ) : <p>список пуст</p>
        }
        </div>
      </div>
    </div>
  )
}

ToolType.propTypes = {
  arr: PropTypes.array.isRequired,
  close: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default ToolType;
