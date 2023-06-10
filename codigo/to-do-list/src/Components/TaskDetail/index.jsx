import React from 'react';
import "./styles.css"
import Button from '../Button';
import { useHistory,useParams} from "react-router-dom";

function TaskDetail() {
    const params = useParams();
    const navigate = useHistory();


    const handleBack = () =>{
        navigate.goBack();
        
    }

    return (
    <>
        <div>
            
            <div className='button-container'>
                <Button onClick={handleBack}>
                    Voltar
                </Button>
            </div>
            <div  className="container">
            <div>
                <h2 className="title-taskdetail">{params.taskTitle}</h2>
            </div>
            <div className='content'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde qui quisquam fuga deserunt dolor veritatis consectetur ab vitae, aliquid sit nam corrupti enim, deleniti eius officiis porro voluptatem nostrum culpa.</p>
            </div>
            </div>

        </div>  
    </>
    );
}

export default TaskDetail;