/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import serviceEmployees from "../../../services/employees";
import EmployeesBlock from "./EmployeesBlock/EmployeesBlock";

const Employees = ({ newUser, newName, newExp }) => {
  const [employeesList, setEmployeesList] = useState([]);

  // const [filteredByStatusList, setFilteredByStatusList] = useState([]);

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

  // const filterEmployeesByStatus = (status) => {
  //   setEmployeesList(
  //     employeesList.filter((item) => item.completed === status.toString())
  //   );
  // };
  // const filterEmployeesByStatus = (status) => {
  //   if (status === "all") {
  //     setEmployeesList(employeesList);
  //   } else {
  //     const completedStatus =
  //       status === "true"
  //         ? setEmployeesList(
  //             employeesList.filter((item) => item.completed === completedStatus)
  //           )
  //         : setEmployeesList(
  //             employeesList.filter((item) => item.completed !== completedStatus)
  //           );
  //   }
  // };

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

    setFilteredList(filtered);
  }, [employeesList, newName, newExp]);

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

  // useEffect(() => {
  //   setFilteredList(
  //     employeesList.filter((item) =>
  //       item.title.toLowerCase().includes(newName.toLowerCase())
  //     )
  //   );
  // }, [employeesList, newName]);

  // useEffect(() => {
  //   setEmployeesJuniors(
  //     filteredList.filter(
  //       (employee) => employee.userId >= 1 && employee.userId < 4
  //     )
  //   );
  //   setEmployeesMiddle(
  //     filteredList.filter(
  //       (employee) => employee.userId > 3 && employee.userId < 7
  //     )
  //   );
  //   setEmployeesSeniors(filteredList.filter((employee) => employee.userId > 6));
  // }, [filteredList]);

  const handleItemDelete = async (id) => {
    try {
      await serviceEmployees.delete(id);
      getEmployees();
      alert("Candidate is deleted!!!");
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
      alert("status has changed!!!");
    } catch (error) {
      console.log(error);
    }
  };

  const employeesBlock = [
    {
      title: "JUNIORS",
      list: employeesJuniors,
      btns: [{ title: "delete", handleClick: handleItemDelete }],
      filters: [{ title: "status", handleChangeStatus: handleItemUpdate }],
    },
    {
      title: "MIDDLE",
      list: employeesMiddle,
      btns: [{ title: "delete", handleClick: handleItemDelete }],
      filters: [{ title: "status", handleChangeStatus: handleItemUpdate }],
    },
    {
      title: "SENIORS",
      list: employeesSeniors,
      btns: [{ title: "delete", handleClick: handleItemDelete }],
      filters: [{ title: "status", handleChangeStatus: handleItemUpdate }],
    },
  ];

  return (
    <div className="block">
      {employeesBlock.map((item, index) => (
        <EmployeesBlock
          key={index}
          title={item.title}
          list={item.list}
          btns={item.btns}
          filters={item.filters}
        />
      ))}
    </div>
  );
};

export default Employees;
