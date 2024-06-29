/* eslint-disable react/prop-types */
import EmployeesBlock from "./EmployeesBlock/EmployeesBlock";
import useEmployees from "../../../hooks/useEmployees";

const Employees = ({ newUser, newName, newExp, newStatus }) => {
  const { defaultEmployeesBlock } = useEmployees(
    newUser,
    newName,
    newExp,
    newStatus
  );

  return (
    <div className="block">
      {defaultEmployeesBlock.map((item, index) => (
        <EmployeesBlock
          key={index}
          item={item}        
        />
      ))}
    </div>
  );
};

export default Employees;
