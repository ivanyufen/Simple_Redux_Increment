import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux"; //untuk combine beberapa reducers

const allReducers = combineReducers({
  //combinenya kaya gini
  counterReducer,
  loggedReducer
});

export default allReducers;
