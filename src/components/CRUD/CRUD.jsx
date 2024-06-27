import Form from "./Form/Form";
import Employees from "./Employees/Employees";
import { useState } from "react";

const CRUD = () => {
  const [newUser, setNewUser] = useState();

  return (
    <>
      <Form liftingNewUser={setNewUser} />
      <Employees newUser={newUser} />
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default CRUD;
