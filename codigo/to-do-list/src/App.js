import React, { useState } from 'react';
import "./App.css";
import Tasks from './Components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
      id:1,
      title:"Teste",
      status:true
    }
  ])

  return (
    <div className="App">
      <div className="Container">
      <Tasks tasks={tasks}/>
      </div>
    </div>
  );
}

export default App;
