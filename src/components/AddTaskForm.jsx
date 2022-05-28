import React, { useState } from "react";

const AddTaskForm = () => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setText("");
    setDay("");
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="task">Task</label>
          <input
            type="text"
            name="text"
            id="task"
            required
            placeholder="Add Task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="task">Day & Time</label>
          <input
            type="date"
            name="day"
            id="day"
            required
            placeholder="Day & Time"
            value={day}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Sublit</button>
        </div>
      </form>
    </div>
  );
};

export default AddTaskForm;
