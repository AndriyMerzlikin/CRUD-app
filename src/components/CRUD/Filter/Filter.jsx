/* eslint-disable react/prop-types */
import { useState } from "react";

const Filter = ({ liftingNameFilter, liftingExpFilter }) => {
  const [nameFilter, setNameFilter] = useState("");
  const [expFilter, setExpFilter] = useState(0);
  //   const [status, setStatus] = useState({
  //     all: true,
  //     completed: false,
  //     uncompleted: false,
  //   });
  const DEFAULT_STATUS = {
    all: true,
    completed: false,
    uncompleted: false,
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    // liftingNameFilter(nameFilter);
  };

  const handleFilterByName = (e) => {
    setNameFilter(e.target.value);
    liftingNameFilter(e.target.value);
  };

  const handleFilterByExp = (e) => {
    setExpFilter(e.target.value);
    liftingExpFilter(e.target.value);
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <fieldset>
        <legend>Filter</legend>
        <label>
          Find name:{" "}
          <input
            type="text"
            defaultValue={nameFilter}
            onChange={handleFilterByName}
          />
        </label>
        <label>
          Experiense:{" "}
          <select defaultValue={expFilter} onChange={handleFilterByExp}>
            <option value="none">none</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </label>
        <div>
          <legend>Choose status</legend>
          <label>
            All:{" "}
            <input
              type="radio"
              name="status"
              defaultChecked={DEFAULT_STATUS.all}
            />
          </label>
          <label>
            Completed:{" "}
            <input
              type="radio"
              name="status"
              defaultChecked={DEFAULT_STATUS.completed}
            />
          </label>
          <label>
            Uncompleted:{" "}
            <input
              type="radio"
              name="status"
              defaultChecked={DEFAULT_STATUS.uncompleted}
            />
          </label>
        </div>
        <button>RESET</button>
      </fieldset>
    </form>
  );
};

export default Filter;
