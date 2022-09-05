import { combineReducers } from "redux";
import { signupReducer, loginReducer } from "./reducers";

const rootReducer = combineReducers({
    signupReducer, loginReducer
});

export default rootReducer;