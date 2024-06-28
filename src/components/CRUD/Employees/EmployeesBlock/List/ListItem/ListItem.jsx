import Button from "../../../Button/Button";

/* eslint-disable react/prop-types */
const ListItem = ({ item = {}, btns = [], filters = [] }) => {
  return (
    <li
      key={item.id}
      className={item.completed ? "item-active" : "item-not-active"}
    >
      <p className="truncated-text">{item.title}</p>

      {btns.map((btn, index) => (
        <Button key={index} btn={btn} item={item} />
      ))}

      {filters.map((filter, index) => (
        <input
          key={index}
          type="checkbox"
          checked={item.completed}
          onChange={() => filter.handleChangeStatus(item.id, item.completed)}
        />
      ))}
    </li>
  );
};

export default ListItem;
