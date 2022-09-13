import * as Action from '../actions/StoreAction';

const initialState = {
    allSido: null,
    gugun: null,
    allStore: null,
};

const reducers = (state=initialState, action) => {
    const { type } = action;

    switch (type) {
        case Action.DISPATCH_ALL_SIDO: {
            return {
                ...state,
                allSido: action.allSido
            }
        }
        case Action.DISPATCH_GUGUN: {
            return {
                ...state,
                gugun: action.gugun
            }
        }
        case Action.DISPATCH_ALL_STORE: {
            return {
                ...state,
                allStore: action.allStore
            }
        }
        default : {
            return state;
        }
    }
}

export default reducers;