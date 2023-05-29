import React from 'react';
import "./styles.css"

function Task({task}) {

    return (
    <>
        <div className="container display-row">
            <p className="title">{task.title}</p>
            <div className="actions display-row">
                <div className="icon-detalhe">ℹ</div>
                <div className="icon-delete">❌</div>
            </div>
        </div>  
    </>
    );
}

export default Task;