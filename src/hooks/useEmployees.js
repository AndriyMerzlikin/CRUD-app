import { useEffect, useState } from "react";
import serviceEmployees from "../services/employees";
import { STATUS_ALL, STATUS_COMPLETED } from "../constants/constants";
import {
  TITLE_JUNIORS,
  TITLE_MIDDLE,
  TITLE_SENIORS,
} from "../constants/constants";

export default function useEmployees(newUser, newName, newExp, newStatus) {
  const [employeesList, setEmployeesList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [employeesJuniors, setEmployeesJuniors] = useState([]);
  const [employeesMiddle, setEmployeesMiddle] = useState([]);
  const [employeesSeniors, setEmployeesSeniors] = useState([]);

  const getEmployees = async () => {
    const response = await serviceEmployees.get();
    setEmployeesList(response);
    setFilteredList(response);
    console.log(response);
  };

  useEffect(() => {
    getEmployees();
  }, []);

  useEffect(() => {
    if (newUser) {
      getEmployees();
    }
  }, [newUser]);

  useEffect(() => {
    let filtered = employeesList;

    if (newName) {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(newName.toLowerCase())
      );
    }

    if (newExp && newExp !== "none") {
      filtered = filtered.filter((item) => item.userId === parseInt(newExp));
    }

    if (newStatus && newStatus !== STATUS_ALL) {
      const isCompleted = newStatus === STATUS_COMPLETED;
      filtered = filtered.filter((item) => item.completed === isCompleted);
    }

    setFilteredList(filtered);
  }, [employeesList, newName, newExp, newStatus]);

  useEffect(() => {
    setEmployeesJuniors(
      filteredList.filter(
        (employee) => employee.userId >= 1 && employee.userId < 4
      )
    );
    setEmployeesMiddle(
      filteredList.filter(
        (employee) => employee.userId > 3 && employee.userId < 7
      )
    );
    setEmployeesSeniors(filteredList.filter((employee) => employee.userId > 6));
  }, [filteredList]);

  const handleItemDelete = async (id) => {
    try {
      await serviceEmployees.delete(id);
      getEmployees();
      alert("DELETE: Candidate is deleted!!!");
    } catch (error) {
      console.log(error);
    }
  };

  const handleItemUpdate = async (id, status) => {
    try {
      const response = await serviceEmployees.patch(id, { completed: !status });
      setEmployeesList((prevState) =>
        prevState.map((item) =>
          item.id === response.id
            ? { ...item, completed: !item.completed }
            : item
        )
      );
      alert("PATCH: status has changed!!!");
    } catch (error) {
      console.log(error);
    }
  };

  const defaultEmployeesBlock = [
    {
      title: TITLE_JUNIORS,
      list: employeesJuniors,
      btns: [{ title: "delete", handleClick: handleItemDelete }],
      filters: [{ title: "status", handleChangeStatus: handleItemUpdate }],
    },
    {
      title: TITLE_MIDDLE,
      list: employeesMiddle,
      btns: [{ title: "delete", handleClick: handleItemDelete }],
      filters: [{ title: "status", handleChangeStatus: handleItemUpdate }],
    },
    {
      title: TITLE_SENIORS,
      list: employeesSeniors,
      btns: [{ title: "delete", handleClick: handleItemDelete }],
      filters: [{ title: "status", handleChangeStatus: handleItemUpdate }],
    },
  ];

  return { defaultEmployeesBlock };
}
