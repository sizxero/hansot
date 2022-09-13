import * as Action from '../actions/OrderAction';

const initialState = {
    options: null,
    menu: null,
    member: null,
};

const reducers = (state=initialState, action) => {
    const { type } = action;

    switch (type) {
        case Action.DISPATCH_MEMBER: {
            return {
                ...state,
                member: action.member
            }
        }
        case Action.DISPATCH_MENU: {
            return {
                ...state,
                menu: action.menu
            }
        }
        case Action.DISPATCH_OPTION: {
            return {
                ...state,
                options: action.option
            }
        }
        default : {
            return state;
        }
    }
}

export default reducers;