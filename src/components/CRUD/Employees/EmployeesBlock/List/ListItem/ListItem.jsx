import Button from "../../../Button/Button";
import {
  ACTIVE_STYLE,
  INACTIVE_STYLE,
} from "../../../../../../constants/constants";

/* eslint-disable react/prop-types */
const ListItem = ({ item = {}, btns = [], filters = [] }) => {
  return (
    <li
      key={item.id}
      className={item.completed ? ACTIVE_STYLE : INACTIVE_STYLE}
    >
      <p className="truncated-text">{item.title}</p>

      {btns.map((btn, index) => (
        <Button key={index} btn={btn} item={item} className="item-btn-styled" />
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
