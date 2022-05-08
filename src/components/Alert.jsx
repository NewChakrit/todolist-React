import React, { useEffect } from "react";

const Alert = ({ msg, type, setAlert, list }) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert({ show: false, msg: "", type: "" });
    }, 3000);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line
  }, [list]);

  return <p className={`alert ${type}`}>{msg}</p>;
};

export default Alert;
