import { createStore, applyMiddleware, combineReducers } from "redux";
import Reducer from "./reducers/reducer";
const thunkMiddleware = require("redux-thunk").default;
const mainReducer = combineReducers({
  main: Reducer
});
const store = createStore(mainReducer, applyMiddleware(thunkMiddleware));

export default store;
