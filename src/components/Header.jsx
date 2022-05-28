import React, { useState } from "react";
import AddTaskForm from "./AddTaskForm";

const Header = () => {
  const [show, setShow] = useState(false);
  const [btnStyle, setBtnStyle] = useState({
    name: "Show Add Task Bar",
    color: "purple",
  });
  const handleBtnClick = () => {
    setShow(!show);
    if (show) {
      setBtnStyle({ name: "Show Add Task Bar", clor: "purple" });
    } else {
      setBtnStyle({ name: "Close Add Task Bar", color: "red" });
    }
  };
  const { name, color } = btnStyle;
  return (
    <div>
      <h1>TASK TRACKER</h1>
      <button style={{ backgroundColor: color }} onClick={handleBtnClick}>
        {name}
      </button>

      {/* <button
        style={
          show ? { backgroundColor: "red" } : { backgroundColor: "purple" }
        }
        onClick={handleBtnClick}
      >
        {show ? "Closs Add Task Bar" : "Show task Bar"}
      </button> */}
      {show && <AddTaskForm />}
    </div>
  );
};

export default Header;
