import PropTypes from 'prop-types';

function List({arr}) {
  console.log(arr[1]);
  return (
    <div>
        {arr.length ?
          arr[0].map(([ico, value]) => {
            const difference = (100*(value.Value - value.Previous)).toFixed(2);
            const statusItem = `list-group-item ${/-/.test(difference) ? 'text-danger' : 'text-success'}`;
            return (
              <ul
                className="list-group list-group-horizontal hover"
                data-bs-toggle="tooltip"
                data-bs-html="true"
                title={ico}
                key={ico}
              >
                <li className="list-group-item text-primary">{value.CharCode}</li>
                <li className="list-group-item">{value.Value.toFixed(2)} &#8381;</li>
                <li className={statusItem}>{difference}%</li>
              </ul>
            );
          }
          )
          : <p>список пуст</p>
        }
    </div>
  )
}
List.propTypes = {
  arr: PropTypes.array,
};


export default List;
