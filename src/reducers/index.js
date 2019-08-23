import { combineReducers } from "redux";
import { timerReducer, sessionReducer, breakReducer } from "./reducer.js";

export default combineReducers({
  timer: timerReducer,
  session: sessionReducer,
  break: breakReducer
});
