import React from 'react';
import { connect } from 'react-redux';
import { deleteTask, getTasks, isDone, updateNewTaskBody, updateNewTaskBodyAction } from '../../redux/tasks-reducers';
import { Tasks } from './Tasks';

export class TasksContainer extends React.Component {
    componentDidMount() {
        this.props.getTasks();
    }
    render() {
        return <Tasks
            deleteTask={this.props.deleteTask}
            tasks={this.props.tasks}
            isDone={this.props.isDone}
            onNewTaskChange={this.props.updateNewTaskBodyAction}
            newTaskBody={this.props.updateNewTaskBody}
        />
    }
}
let mapStateToProps = (state) => {
    return {
        tasks: state.tasksPage.tasks,
    }
}
export default connect(mapStateToProps, { deleteTask, getTasks, isDone, updateNewTaskBody, updateNewTaskBodyAction })(TasksContainer);