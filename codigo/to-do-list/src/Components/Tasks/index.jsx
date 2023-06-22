import React from 'react';
import "./styles.css"
import Task from '../Task';


function Tasks({handleRemoveTaskClick, handleTaskClick ,tasks}) {

    return (
    <>
        
        <div>
        {
            tasks.map((task) => (<Task handleRemoveTaskClick={handleRemoveTaskClick} handleTaskClick={handleTaskClick} key={task.id}task={task}></Task>))
            
        }         
        </div>
    </>
    );
}

export default Tasks;