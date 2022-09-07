// Action type
export const DISPATCH_CATEGORIES = 'DISPATCH_CATEGORIES';
export const DISPATCH_MAIN_CATEGORIES = 'DISPATCH_MAIN_CATEGORIES';
export const DISPATCH_CTG_MENU = 'DISPATCH_CTG_MENU';

// Action creators
export const dispatchCategories = (categories) => {
    return {
        type: DISPATCH_CATEGORIES,
        ctg: categories
    }
}

export const dispatchMainCategories = (mainCategories) => {
    return {
        type: DISPATCH_MAIN_CATEGORIES,
        ctg: mainCategories
    }
}

export const dispatchCtgMenu = (ctgMenu) => {
    return {
        type: DISPATCH_CTG_MENU,
        ctgMenu: ctgMenu
    }
}