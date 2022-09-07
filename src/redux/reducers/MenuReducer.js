import * as Action from '../actions/MenuAction';

const initialState = {
    categories: null,
    mainCategories: null,
    ctgMenu: null,
    allMenu: null,
    targetMenu: null
};

const reducers = (state=initialState, action) => {
    const { type } = action;

    switch (type) {
        case Action.DISPATCH_INIT_MENU_DATA: {
            return {
                categories: action.ctg,
                mainCategories: action.mainctg,
                ctgMenu: action.menu
            }
        }
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
        case Action.DISPATCH_CTG_MENU: {
            return {
                ...state,
                ctgMenu: action.ctgMenu
            }
        }
        case Action.DISPATCH_ALL_MENU: {
            return {
                ...state,
                allMenu: action.menu
            }
        }
        case Action.DISPATCH_ONE_MENU: {
            return {
                ...state,
                targetMenu: action.targetmenu
            }
        }
        default : {
            return state;
        }
    }
}

export default reducers;