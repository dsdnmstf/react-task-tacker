import React, { useState } from "react";
import Header from "../components/Header";
import ShowTasks from "../components/ShowTasks";
import AddTaskForm from "../components/AddTaskForm";
import data from "../helper/starterData";
const Home = () => {
  const [tasks, setTasks] = useState(data);

  const addTask = (newTask) => {
    const id = new Date().getTime();
    const addNewTask = { id, ...newTask };
    console.log(addNewTask);
    setTasks([...tasks, addNewTask]);
  };
  return (
    <div>
      <Header addTask={addTask} />
      <ShowTasks />
    </div>
  );
};

export default Home;
