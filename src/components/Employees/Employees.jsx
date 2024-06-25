import { useEffect, useState } from "react";
import serviceEmployees from "../../services/employees";
import EmployeesBlock from "./EmployeesBlock/EmployeesBlock";

const Employees = () => {
  const [employeesList, setEmployeesList] = useState([]);

  const [employeesJuniors, setEmployeesJuniors] = useState([]);
  const [employeesMiddle, setEmployeesMiddle] = useState([]);
  const [employeesSeniors, setEmployeesSeniors] = useState([]);

  const getEmployees = async () => {
    const response = await serviceEmployees.get();
    setEmployeesList(response);
    console.log(response);
  };

  useEffect(() => {
    getEmployees();
  }, []);

  useEffect(() => {
    setEmployeesJuniors(
      employeesList.filter(
        (employee) => employee.userId >= 1 && employee.userId < 4
      )
    );
  }, [employeesList]);

  useEffect(() => {
    setEmployeesMiddle(
      employeesList.filter(
        (employee) => employee.userId > 3 && employee.userId < 7
      )
    );
  }, [employeesList]);

  useEffect(() => {
    setEmployeesSeniors(
      employeesList.filter((employee) => employee.userId > 6)
    );
  }, [employeesList]);

  const handleItemDelete = async (id) => {
    try {
      await serviceEmployees.delete(id);
      getEmployees();
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
      console.log(id, status);
    } catch (error) {
      console.log(error);
    }
  };

  const employeesBlock = [
    {
      title: "JUNIORS",
      list: employeesJuniors,
      btns: [
        { title: "delete", handleClick: handleItemDelete },
        { title: "completed", handleClick: handleItemUpdate },
      ],
    },
    {
      title: "MIDDLE",
      list: employeesMiddle,
      btns: [
        { title: "delete", handleClick: handleItemDelete },
        { title: "completed", handleClick: handleItemUpdate },
      ],
    },
    {
      title: "SENIORS",
      list: employeesSeniors,
      btns: [
        { title: "delete", handleClick: handleItemDelete },
        { title: "completed", handleClick: handleItemUpdate },
      ],
    },
  ];

  return (
    <>
      <button></button>
      <div className="block">
        {employeesBlock.map((item, index) => (
          <EmployeesBlock
            key={index}
            title={item.title}
            list={item.list}
            btns={item.btns}
          />
        ))}
      </div>
    </>
  );
};

export default Employees;
