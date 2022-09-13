import { combineReducers } from "redux";
import { signupReducer, loginReducer, menuReducer, storeReducer, orderReducer, myPageReducer } from "./reducers";

const rootReducer = combineReducers({
    signupReducer, loginReducer, menuReducer, storeReducer, orderReducer, myPageReducer
});

export default rootReducer;