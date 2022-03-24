import {Tooltip as Title, OverlayTrigger} from 'react-bootstrap';
import PropTypes from 'prop-types';

const ListItem = ({
  keys,
  name,
  openList,
  oneCol,
  twoCol,
  threeCol,
}) => {
  const statusItem = `list-group-item ${/-/.test(threeCol) ? 'text-danger' : 'text-success'}`;
  return (
    <OverlayTrigger
      key={`${keys}-bottom`}
      placement="bottom"
      overlay={
        <Title id="tooltip-bottom">
          <strong>{name}</strong>.
        </Title>
      }
    >
      <ul
      className="list-group table-hover list-group-horizontal"
      key={keys}
      onClick={openList}
      >
      <li className="list-group-item text-primary">{oneCol}</li>
      <li className="list-group-item">{twoCol.toFixed(2)} &#8381;</li>
      <li className={statusItem}>{threeCol}%</li>
    </ul>
    </OverlayTrigger>
  )
};

ListItem.propTypes = {
  keys : PropTypes.string.isRequired,
  name : PropTypes.string.isRequired,
  openList : PropTypes.func,
  oneCol : PropTypes.string.isRequired,
  twoCol : PropTypes.number.isRequired,
  threeCol : PropTypes.string.isRequired,
};

export default ListItem;
