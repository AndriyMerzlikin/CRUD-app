import Form from "./Form/Form";
import Employees from "./Employees/Employees";
import { useState } from "react";
import Filter from "./Filter/Filter";

const CRUD = () => {
  const [newUser, setNewUser] = useState();
  const [newName, setNewName] = useState("");
  const [newExp, setNewExp] = useState();

  return (
    <>
      <Form liftingNewUser={setNewUser} />
      <Filter liftingNameFilter={setNewName} liftingExpFilter={setNewExp} />
      <Employees newUser={newUser} newName={newName} newExp={newExp} />
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default CRUD;
