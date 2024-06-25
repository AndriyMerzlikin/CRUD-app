/* eslint-disable react/prop-types */
const EmployeesBlock = ({ title = "", list = [], btns = [] }) => {
  return (
    <div className="list-block">
      <h2>{title}</h2>
      <p>{list.length}</p>

      {list.length ? (
        <ul>
          {list.map((item) => (
            <li key={item.id} className="item-dec">
              <p className="truncated-text">{item.title}</p>

              {btns.map((btn, index) => (
                <button
                  key={index}
                  onClick={() => btn.handleClick(item.id, item.completed)}
                >
                  {btn.title}
                </button>
              ))}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default EmployeesBlock;
