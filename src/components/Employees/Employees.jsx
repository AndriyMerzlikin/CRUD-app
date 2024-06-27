import { useEffect, useState } from "react";
import serviceEmployees from "../../services/employees";
import EmployeesBlock from "./EmployeesBlock/EmployeesBlock";
import Form from "./Form/Form";

const Employees = () => {
  const [employeesList, setEmployeesList] = useState([]);
  // const [filteredByStatusList, setFilteredByStatusList] = useState([]);

  // const [filteredList, setFilteredList] = useState([]);

  const [employeesJuniors, setEmployeesJuniors] = useState([]);
  const [employeesMiddle, setEmployeesMiddle] = useState([]);
  const [employeesSeniors, setEmployeesSeniors] = useState([]);

  const getEmployees = async () => {
    const response = await serviceEmployees.get();
    setEmployeesList(response);
    // setFilteredByStatusList(response);
    console.log(response);
  };

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
    getEmployees();
  }, []);

  useEffect(() => {
    // const filteredByNameList = employeesList.filter((item) =>
    //   item.title.toLowerCase().includes(inputValue.toLowerCase())
    // );

    setEmployeesJuniors(
      employeesList.filter(
        (employee) => employee.userId >= 1 && employee.userId < 4
      )
    );
    setEmployeesMiddle(
      employeesList.filter(
        (employee) => employee.userId > 3 && employee.userId < 7
      )
    );
    setEmployeesSeniors(
      employeesList.filter((employee) => employee.userId > 6)
    );
  }, [employeesList]);

  // const filteredByNameList = employeesList.filter((item) =>
  //   item.title.toLowerCase().includes(inputValue.toLocaleLowerCase())
  // );

  // useEffect(() => {
  //   setEmployeesJuniors(
  //     filteredByNameList.filter(
  //       (employee) => employee.userId >= 1 && employee.userId < 4
  //     )
  //   );
  // }, [filteredByNameList]);

  // useEffect(() => {
  //   setEmployeesMiddle(
  //     filteredByNameList.filter(
  //       (employee) => employee.userId > 3 && employee.userId < 7
  //     )
  //   );
  // }, [filteredByNameList]);

  // useEffect(() => {
  //   setEmployeesSeniors(
  //     filteredByNameList.filter((employee) => employee.userId > 6)
  //   );
  // }, [filteredByNameList]);

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
      <Form />
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
