import List from "./List/List";

/* eslint-disable react/prop-types */
const EmployeesBlock = ({ title = "", list = [], btns = [] }) => {
  return (
    <div className="list-block">
      <h2>{title}</h2>
      <p>{list.length}</p>

      {list.length ? (
        <List list={list} btns={btns} />
      ) : // <ul className="scroll-list">
      //   {list.map((item) => (
      //     <li key={item.id} className="item-dec">
      //       <p className="truncated-text">{item.title}</p>

      //       {btns.map((btn, index) => (
      //         <button
      //           key={index}
      //           className="action-btn"
      //           onClick={() => btn.handleClick(item.id, item.completed)}
      //         >
      //           {btn.title}
      //         </button>
      //       ))}
      //     </li>
      //   ))}
      // </ul>
      null}
    </div>
  );
};

export default EmployeesBlock;
