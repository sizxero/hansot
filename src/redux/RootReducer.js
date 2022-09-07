import { combineReducers } from "redux";
import { signupReducer, loginReducer, menuReducer } from "./reducers";

const rootReducer = combineReducers({
    signupReducer, loginReducer, menuReducer
});

export default rootReducer;