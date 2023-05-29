import React from 'react';
import "./styles.css"
import Task from '../Task';

function Tasks({tasks}) {

    return (
    <>
        <h2 className='header'>Minhas Tarefas</h2>
        <div>

            <input type="text" className="task-input" />
            <button className="task-add-button"></button>
        </div>
        <div>
        {
            tasks.map((task) => (<Task key={task.id}task={task}></Task>))
            
        }
   
            
        </div>
    </>
    );
}

export default Tasks;