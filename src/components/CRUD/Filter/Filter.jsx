/* eslint-disable react/prop-types */

import {
  STATUS_ALL,
  STATUS_COMPLETED,
  STATUS_UNCOMPLETED,
} from "../../../constants/constants";
import useFilters from "../../../hooks/useFilters";

const Filter = ({
  liftingNameFilter,
  liftingExpFilter,
  liftingStatusFilter,
}) => {
  const {
    nameFilter,
    expFilter,
    status,
    formRef,
    handleSubmitForm,
    handleResetForm,
    handleFilterByName,
    handleFilterByExp,
    handleFilterByStatus,
  } = useFilters(liftingNameFilter, liftingExpFilter, liftingStatusFilter);

  return (
    <form onSubmit={handleSubmitForm} ref={formRef}>
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
              value="all"
              checked={status === STATUS_ALL}
              onChange={handleFilterByStatus}
            />
          </label>
          <label>
            Completed:{" "}
            <input
              type="radio"
              name="status"
              value="completed"
              checked={status === STATUS_COMPLETED}
              onChange={handleFilterByStatus}
            />
          </label>
          <label>
            Uncompleted:{" "}
            <input
              type="radio"
              name="status"
              value="uncompleted"
              checked={status === STATUS_UNCOMPLETED}
              onChange={handleFilterByStatus}
            />
          </label>
        </div>
        <button onClick={handleResetForm}>RESET</button>
      </fieldset>
    </form>
  );
};

export default Filter;
