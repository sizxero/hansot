import * as Action from './Action';

const initialState = {
    id: '',
    pw: '',
    pwre: '',
    name: '',
    email: '',
    phone: ''
};

const reducers = (state=initialState, action) => {
    const { type } = action;

    switch (type) {
        case Action.SIGNUP: {
            
            return state
        }
        case Action.WRITE_ID: {
            return {
                ...state,
                id: action.id
            }
        }
        case Action.WRITE_PW: {
            return {
                ...state,
                pw: action.pw
            }
        }
        case Action.WRITE_PW_RE: {
            return {
                ...state,
                pwre: action.pwre
            }
        }
        case Action.WRITE_NAME: {
            return {
                ...state,
                name: action.name
            }
        }
        case Action.WRITE_EMAIL: {
            return {
                ...state,
                email: action.email
            }
        }
        case Action.WRITE_PHONE: {
            return {
                ...state,
                phone: action.phone
            }
        }
        case Action.SAME_PW_CHECK: {
            let flag = state.pw === state.pwre;
            console.log(flag);
            return {
                ...state,
                samepwchk: flag
            }
        }
        default: {
            return state;
        }
    }
}

export default reducers;