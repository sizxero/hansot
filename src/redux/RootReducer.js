import { combineReducers } from "redux";
import { signupReducer, loginReducer, menuReducer, storeReducer, orderReducer } from "./reducers";

const rootReducer = combineReducers({
    signupReducer, loginReducer, menuReducer, storeReducer, orderReducer
});

export default rootReducer;