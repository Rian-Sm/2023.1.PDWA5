import React, { useState } from 'react';
import "./App.css";
import Tasks from './Components/Tasks';
import AddTask from './Components/AddTask';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import TaskDetail from './Components/TaskDetail';


function App() {
  const [tasks, setTasks] = useState([
    {
      id:uuidv4(),
      title:"Teste",
      completed:true
    },  {
      id:uuidv4(),
      title:"Teste",
      completed:true
    }
  ])

  const handleTaskAddition = (taskTitle) => {
    console.log("TESTE", taskTitle)
    setTasks((oldTasks)=>[...oldTasks, {id:uuidv4(), title:taskTitle, completed:false}])
  }

  const handleTaskClick = (idTask) => {
    
    setTasks (e => e.map(task => {

      if (task.id === idTask){
        return ({...task, completed: !task.completed})
      } 
        return ({...task})
    })) 
  } 

  const handleRemoveTaskClick = (idTask) =>{
    setTasks (e => e.filter(task => task.id !== idTask))
  }

  return (
    <Router>
    <div className="App">
      <div className="Container">
      <h2 className='header'>Minhas Tarefas</h2>
      <Route
        path='/'
        exact
        render={()=>(
          <>
            <AddTask handleTaskAddition={handleTaskAddition}></AddTask> 
            <Tasks handleRemoveTaskClick={handleRemoveTaskClick} handleTaskClick={handleTaskClick} tasks={tasks}/>
          </>

        )}
      >
      </Route>
      <Route
        path='/:taskTitle'
        exact
        component={TaskDetail}
      ></Route>
      </div>
    </div>
    </Router>
  );
}

export default App;
