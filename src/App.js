import react, {useState} from "react";
import "./App.css";

function App() {

const [tasks, setTasks] = useState([]);
const [task, setTask] = useState("");

const addTask = ()=>{

  if (task.trim()) {
    setTasks([
      ...tasks,
      {text: task, 
       completed: false
      }
    ]);
    setTask("")
  }

};

const toggleTask = (index) => {
  const updatedTasks = tasks.map((t, i) =>
    i === index ? { ...t, completed: !t.completed } : t
  );
  setTasks(updatedTasks);
};

return (
  <div className="main">
       <div className="todo-container">
  <h2>To-Do List</h2>
  <div className="input-section">
    <input
      type="text"
      value={task}
      onChange={(e) => setTask(e.target.value)}
      placeholder="Enter task..."
    />
    <button onClick={addTask}>Add</button>
  </div>
  <ul>
    {tasks.map((t, index) => (
      <li key={index} className={t.completed ? "completed" : ""}>
        <input
          type="checkbox"
          checked={t.completed}
          onChange={() => toggleTask(index)}
        />
        {t.text}
      </li>
    ))}
  </ul>
</div>
  </div>
 
);

}

export default App;