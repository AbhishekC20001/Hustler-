import { useState } from "react";

function TaskEdit({ task, onSaveTask }) {

  console.log("hyutyv")


  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [col, setCol] = useState("");

  const saveTask = (e) => {
    e.preventDefault();
    onSaveTask({ desc: desc, date: date, col: col });

    setDesc("");
    setDate("");
    setCol("");
  };
  return (
    <div className="card">
      <h3>Add Task</h3>
      <form>
        <label htmlFor="desc">Title</label>
        <input
          type="text"
          name="desc"
          id="desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <label htmlFor="date">Description</label>
        <input
          type="text"
          name="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label htmlFor="col">Column</label>
        <select
        name="col"
        id="col"
        value={col}
        onChange={(e) => setCol(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>

        </select>

        <p>
        </p>

        <div className="text-right">
          <button className="button dark" onClick={saveTask}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskEdit;
