/* eslint-disable react/prop-types */
import useForm from "../../../hooks/useForm";

const Form = ({ liftingNewUser }) => {
  const {
    newUser,
    formRef,
    handleSubmitForm,
    handleUserTitle,
    handleUserCompleted,
    handleUserId,
  } = useForm(liftingNewUser);

  return (
    <form onSubmit={handleSubmitForm} ref={formRef}>
      <fieldset className="form-style">
        <legend>Add Candidate</legend>
        <label>
          Name:{" "}
          <input
            type="text"
            placeholder="type name"
            defaultValue={newUser.title}
            onChange={handleUserTitle}
          />
        </label>
        <label>
          Experience:{" "}
          <select defaultValue={newUser.userId} onChange={handleUserId}>
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
        <label>
          Completed:{" "}
          <input
            type="checkbox"
            defaultChecked={newUser.completed}
            onChange={handleUserCompleted}
          />
        </label>
        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
};

export default Form;
