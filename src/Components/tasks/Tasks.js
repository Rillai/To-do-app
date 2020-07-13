import React from 'react';
import './Tasks.css';
import checkbox from '../../assets/img/checkbox.jpg'
import checkboxA from '../../assets/img/checkboxA.jpg'

export let Tasks = (props) => {
    let onNewTaskChange = (id, e) => {
        let text = e.target.value;
        props.onNewTaskChange(id, text);
    }
    let newTaskBody = (id, e) => {
        let text = e.target.value;
        props.newTaskBody(id, text);
    }
    return (<div>
        {
            props.tasks.map(t => <div className='task' key={t.id}>
                <div>{t.isDone
                    ? <img src={checkboxA} alt="Error"
                        className='completeButton'
                        onClick={() => { props.isDone(t.id, false) }} />
                    : <img src={checkbox} alt="Error"
                        className='completeButton'
                        onClick={() => { props.isDone(t.id, true) }} />}
                    <input maxLength="25" type='text' value={t.task} onChange={(e)=>{onNewTaskChange(t.id, e)}}  onBlur={(e)=>{newTaskBody(t.id, e)}}/>
                    <span className='deleteButton' onClick={() => { props.deleteTask(t.id) }}>X</span>
                </div>
            </div>)
        }
    </div>)
}
