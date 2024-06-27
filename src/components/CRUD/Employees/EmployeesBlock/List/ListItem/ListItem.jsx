import Button from "../../../Button/Button";

/* eslint-disable react/prop-types */
const ListItem = ({ item = {}, btns = [] }) => {
  return (
    <li key={item.id} className="item-dec">
      <p className="truncated-text">{item.title}</p>

      {btns.map((btn, index) => (
        <Button key={index} btn={btn} item={item} className="action-btn" />
      ))}
    </li>
  );
};

export default ListItem;
