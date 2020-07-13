import { tasksApi } from "./../api/api";
const DELETE_TASK = "DELETE_TASK";
const SET_TASKS = "SET_TASKS";
const ADD_TASK = "ADD_TASK";
const IS_DONE = "IS_DONE";
const UPDATE_NEW_TASK_TEXT = "UPDATE_NEW_TASK_TEXT";
const UPDATE_NEW_TASK_BODY = "UPDATE_NEW_TASK_BODY";

let initialState = {
  newTaskText: "",
  tasks: [],
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASKS:
      return { ...state, tasks: action.tasks };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((t) => t.id !== action.taskId),
      };
    case ADD_TASK:
      let newTask = {
        id: action.taskId,
        task: state.newTaskText,
        isDone: false,
      };
      return {
        ...state,
        tasks: [...state.tasks, newTask],
        newTaskText: "",
      };
    case IS_DONE:
      return {
        ...state,
        tasks: state.tasks.map((t) => {
          if (t.id === action.taskId) {
            return { ...t, isDone: action.isDone };
          }
          return t;
        }),
      };
    case UPDATE_NEW_TASK_TEXT:
      return {
        ...state,
        newTaskText: action.text,
      };
    case UPDATE_NEW_TASK_BODY:
      return {
        ...state,
        tasks: state.tasks.map((t) => {
          if (t.id === action.taskId) {
            return { ...t, task: action.text }
          }
          return t;
        }),
      };
    default:
      return state;
  }
};

export const addTaskAction = (taskId) => ({ type: ADD_TASK, taskId });
export const setTasksAction = (tasks) => ({ type: SET_TASKS, tasks });
export const deleteTaskAction = (taskId) => ({ type: DELETE_TASK, taskId });
export const isDoneAction = (taskId, isDone) => ({ type: IS_DONE, taskId, isDone });
export const updateNewTaskTextAction = (text) => ({ type: UPDATE_NEW_TASK_TEXT, text });
export const updateNewTaskBodyAction = (taskId, text) => ({ type: UPDATE_NEW_TASK_BODY, taskId, text });

export const getTasks = () => {
  return (dispatch) => {
    tasksApi.getTasks().then((data) => {
      dispatch(setTasksAction(data));
    });
  };
};
export const addTask = (text) => {
  return (dispatch) => {
    if (text !== "") {
      tasksApi.addTask(text).then((response) => {
        if (response) {
          dispatch(addTaskAction(response.id));
        }
      });
    }
  };
};
export const deleteTask = (taskId) => {
  return (dispatch) => {
    tasksApi.deleteTask(taskId).then((response) => {
      if (response) {
        dispatch(deleteTaskAction(taskId));
      }
    });
  };
};
export const isDone = (taskId, isDone) => {
  return (dispatch) => {
    tasksApi.isDone(taskId, isDone).then((response) => {
      if (response) {
        dispatch(isDoneAction(taskId, isDone));
      }
    });
  };
};
export const updateNewTaskBody = (taskId, text) => {
  return () => {
    tasksApi.updateNewTaskBody(taskId, text)
  };
};

export default tasksReducer;
