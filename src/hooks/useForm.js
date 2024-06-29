import { useRef, useState } from "react";
import employees from "../services/employees";

export default function useForm(liftingNewUser) {
  const [newUser, setNewUser] = useState({
    userId: 0,
    title: "",
    completed: true,
  });

  const formRef = useRef();

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await employees.post(newUser);
      liftingNewUser(response);
      handleResetForm();
      console.log("new user is added!!!", response);
      alert("POST: new user is added!!!");
    } catch (error) {
      console.log(error);
    }
  };

  const handleResetForm = () => {
    setNewUser({ userId: 0, title: "", completed: true });
    formRef.current.reset();
  };

  const handleUserTitle = (e) => {
    setNewUser((prevState) => ({ ...prevState, title: e.target.value }));
  };

  const handleUserCompleted = (e) => {
    setNewUser((prevState) => ({
      ...prevState,
      completed: e.target.checked,
    }));
  };

  const handleUserId = (e) => {
    setNewUser((prevState) => ({
      ...prevState,
      userId: +e.target.value,
    }));
  };

  return {
    newUser,
    formRef,
    handleSubmitForm,
    handleUserTitle,
    handleUserCompleted,
    handleUserId,
  };
}
