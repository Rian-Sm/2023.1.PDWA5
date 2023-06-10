import React, { useState } from 'react';
import Button from '../Button';
import "./styles.css"

function AddTask({handleTaskAddition}) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleAddTaskClick = () => {
        if (inputValue.length > 0){
            handleTaskAddition(inputValue)
            setInputValue('');
        }
    }

    return (
    <div className="add-task-container">
        <input type="text" value={inputValue} onChange={handleInputChange} className="add-task-input" />  
        <div className="add-task-button">
        <Button onClick={handleAddTaskClick}>Adicionar</Button>
        </div>
    </div>
    );
}

export default AddTask;