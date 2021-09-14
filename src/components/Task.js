import TaskEdit from "./TaskEdit";
import { useState } from "react";
import { Button } from "react-bootstrap";

function Task({ task, onTglStatus }) {
  const [tasks, setTasks] = useState([
    {
      desc: "Learn React",
      id: 1,
      col: 1,
      date: "wow",
      complete: false,
    },
    {
      desc: "Profit",
      id: 2,
      col: 2,
      date: "yayyyyy",
      complete: false,
    },
    {
      desc: "Loss",
      id: 3,
      col: 3,
      date: "naaaaa",
      complete: false,
    },
  ]);

  const onSaveTask = ({ desc, date, col }) => {
    console.log("saving tasks");
    setTasks([
      { desc: desc, date: date, id: Date.now(), col: col, complete: false },

    ]);
  };

  const [showTaskEdit, setShowTaskEdit] = useState(false);


  return (
    <div className="card text-left" key={task.id}>
      <div className="row">
        <div className="col-10">
          <h4>{task.desc}</h4>
          <div className="task-meta">
            <img
              src="https://icongr.am/feather/link-2.svg?size=15&color=currentColor"
              alt="description"
            />
            {task.date}

          </div>
        </div>

        <div className="col-2 is-center">
          {task.complete}
          <button
            className="button icon-only clear"
            onClick={() => onTglStatus(task)}>
            {task.complete && "✅"}
            {!task.complete && "⬜"}
          </button>
        </div>
        <div className="col-12 text-right">
          <button
            className="button dark"
            onClick={() => setShowTaskEdit(!showTaskEdit)}>
            {!showTaskEdit && "Update"}
            {showTaskEdit && "➖"}
          </button>
            </div>
            {showTaskEdit && <TaskEdit task={{task}} onSaveTask={onSaveTask} />}



      </div>
    </div>
  );
}

export default Task;
