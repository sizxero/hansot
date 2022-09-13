import * as Action from '../actions/MyPageAction';

const initialState = {
    memberInfo: null,
    orderHistory: null,
};

const reducers = (state=initialState, action) => {
    const { type } = action;

    switch (type) {
        case Action.DISPATCH_MY_INFO: {
            return {
                ...state,
                memberInfo: action.memberInfo
            }
        }
        case Action.DISPATCH_MY_HISTORY: {
            return {
                ...state,
                orderHistory: action.orderHistory
            }
        }
        default : {
            return state;
        }
    }
}

export default reducers;