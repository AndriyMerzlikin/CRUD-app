/* eslint-disable react/prop-types */

import ListItem from "./ListItem/ListItem";

const List = ({ list = [], btns = [], filters = [] }) => {
  return (
    <ul className="scroll-list">
      {list.map((item) => (
        <ListItem key={item.id} item={item} btns={btns} filters={filters} />
      ))}
    </ul>
  );
};

export default List;
