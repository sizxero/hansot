import { combineReducers } from "redux";
import { signupReducer, loginReducer, menuReducer, storeReducer } from "./reducers";

const rootReducer = combineReducers({
    signupReducer, loginReducer, menuReducer, storeReducer
});

export default rootReducer;