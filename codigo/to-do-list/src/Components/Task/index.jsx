import React from 'react';
import "./styles.css"
import {AiOutlineInfoCircle, AiOutlineCloseCircle} from "react-icons/ai";  
import { useHistory } from 'react-router-dom';

function Task({handleRemoveTaskClick, handleTaskClick,task}) {
    const navigate = useHistory();

    const handleTaskDetails = () =>{
        navigate.push(`/${task.title}`)
    }

    return (
    <>
        <div 
        className="container-task  display-row"
        style={task.completed ? {borderLeft:"6px solid chartreuse"}: {}}
        >
            <div  className="title" onClick={() => handleTaskClick(task.id)}>
                <p >{task.title}</p>
            </div>
            <div className="button-container display-row">
                <button onClick={handleTaskDetails}className="button-display">
                    <AiOutlineInfoCircle cursor={"pointer"} color='chartreuse' fontSize={25}/>
                </button>
                <button className="button-display" onClick={()=> handleRemoveTaskClick(task.id)}>
                    <AiOutlineCloseCircle cursor={"pointer"}  color='chartreuse' fontSize={25}/>
                </button>
            </div>
        </div>  
    </>
    );
}

export default Task;