import React from "react";
import "./list.css";

export let List = (props) => {
  let newTaskEl = React.createRef();
  let onAddTask = () => {
    let text = newTaskEl.current.value;
    props.addTask(text);
  };
  let onNewTaskChange = (e) => {
    let text = e.target.value;
    props.updateNewTaskTextAction(text);
  };
  return (
    <div className="to-do-form">
      <div className="h_task">
        <span>Task</span>
      </div>
      <input
        maxLength="25"
        type="text"
        onChange={onNewTaskChange}
        ref={newTaskEl}
        value={props.newTaskText}
        placeholder="Enter Task"
      />
      <div>
        <button type="submit" onClick={onAddTask}>
          ADD
        </button>
      </div>
    </div>
  );
};
