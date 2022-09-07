import * as Action from '../actions/MenuAction';

const initialState = {
    categories: null,
    mainCategories: null,
};

const reducers = (state=initialState, action) => {
    const { type } = action;

    switch (type) {
        case Action.DISPATCH_CATEGORIES: {
            return {
                ...state,
                categories: action.ctg
            }
        }
        case Action.DISPATCH_MAIN_CATEGORIES: {
            return {
                ...state,
                mainCategories: action.ctg
            }
        }
        default : {
            return state;
        }
    }
}

export default reducers;