import { useState, useRef } from "react";
import { STATUS_ALL } from "../constants/constants";
import { handleSubmitForm } from "../utils/filterHelpers";

export default function useFilters(
  liftingNameFilter,
  liftingExpFilter,
  liftingStatusFilter
) {
  const [nameFilter, setNameFilter] = useState("");
  const [expFilter, setExpFilter] = useState(0);
  const [status, setStatus] = useState(STATUS_ALL);

  const formRef = useRef();

  const handleResetForm = () => {
    setNameFilter("");
    setExpFilter(0);
    setStatus(STATUS_ALL);
    formRef.current.reset();
    liftingNameFilter("");
    liftingExpFilter(0);
    liftingStatusFilter(STATUS_ALL);
  };

  const handleFilterByName = (e) => {
    setNameFilter(e.target.value);
    liftingNameFilter(e.target.value);
  };

  const handleFilterByExp = (e) => {
    setExpFilter(e.target.value);
    liftingExpFilter(e.target.value);
  };

  const handleFilterByStatus = (e) => {
    setStatus(e.target.value);
    liftingStatusFilter(e.target.value);
  };

  return {
    nameFilter,
    expFilter,
    status,
    formRef,
    handleSubmitForm,
    handleResetForm,
    handleFilterByName,
    handleFilterByExp,
    handleFilterByStatus,
  };
}
