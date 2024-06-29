import Form from "./Form/Form";
import Employees from "./Employees/Employees";
import { useState } from "react";
import Filter from "./Filter/Filter";

const CRUD = () => {
  const [newUser, setNewUser] = useState();
  const [newName, setNewName] = useState();
  const [newExp, setNewExp] = useState();
  const [newStatus, setNewStatus] = useState();

  return (
    <>
      <Form liftingNewUser={setNewUser} />
      <Filter
        liftingNameFilter={setNewName}
        liftingExpFilter={setNewExp}
        liftingStatusFilter={setNewStatus}
      />
      <Employees
        newUser={newUser}
        newName={newName}
        newExp={newExp}
        newStatus={newStatus}
      />
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default CRUD;
