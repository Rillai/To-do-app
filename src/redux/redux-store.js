import { combineReducers, createStore, applyMiddleware } from "redux";
import tasksReducer from "./tasks-reducers";
import thunkMiddleWare from "redux-thunk";
let reducers = combineReducers({
    tasksPage: tasksReducer,
});
let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store;