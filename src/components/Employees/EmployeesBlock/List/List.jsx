/* eslint-disable react/prop-types */

import ListItem from "./ListItem/ListItem";

const List = ({ list = [], btns = [] }) => {
  return (
    <ul className="scroll-list">
      {list.map((item) => (
        <ListItem key={item.id} item={item} btns={btns} />
      ))}
    </ul>
  );
};

export default List;
