import React from 'react';
import './Tasks.css';
import checkbox from '../../assets/img/checkbox.jpg'
import checkboxA from '../../assets/img/checkboxA.jpg'

export let Tasks = (props) => {
    let newTaskBody = React.createRef();
    let onNewTaskChange = (id) => {
        let text = newTaskBody.current.value;
        props.updateNewTaskBody(id, text);
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
                    <input maxLength="25" type='text' value={t.task} ref={newTaskBody} onChange={() => onNewTaskChange(t.id)} />
                    <span className='deleteButton' onClick={() => { props.deleteTask(t.id) }}>X</span>
                </div>
            </div>)
        }
    </div>)
}
