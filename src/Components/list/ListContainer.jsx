import { addTask, updateNewTaskText } from '../../redux/tasks-reducers';
import { connect } from 'react-redux';
import { List } from './List';

let mapStateToProps = (props) => {
    return {
        tasks: props.tasksPage.tasks,
        newTaskText: props.tasksPage.newTaskText,
    }
}
export const ListContainer = connect(mapStateToProps, {addTask, updateNewTaskText })(List);