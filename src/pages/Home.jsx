import React, { useState } from "react";
import Header from "../components/Header";
import ShowTasks from "../components/ShowTasks";
import AddTaskForm from "../components/AddTaskForm";
import data from "../helper/starterData";
const Home = () => {
  const [tasks, setTasks] = useState(data);
  // console.log(tasks);
  return (
    <div>
      <Header />
      <ShowTasks />
    </div>
  );
};

export default Home;
