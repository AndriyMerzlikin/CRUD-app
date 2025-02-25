import List from "./List/List";

/* eslint-disable react/prop-types */
const EmployeesBlock = ({ item = {} }) => {
const {title = "", list = [], btns = [], filters = []} = item

  return (
    <div className="list-block">
      <h2>{title}</h2>
      <p>{list.length}</p>

      {list.length ? <List list={list} btns={btns} filters={filters} /> : null}
    </div>
  );
};

export default EmployeesBlock;
