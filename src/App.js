import React from 'react';
import './App.css';
import TasksContainer from './Components/tasks/TasksContainer';
import { ListContainer } from './Components/list/ListContainer';

const App = (props) => {
  return (<div className='appWrapper'>
    <ListContainer />
    <TasksContainer />
  </div>)
}

export default App;