import { createStore, combineReducers } from "redux";
import {rootReducer} from "./reducers/root";
const store = createStore(
  combineReducers({...rootReducer})
);
export default store ;  
