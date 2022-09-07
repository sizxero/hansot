// Action type
export const DISPATCH_INIT_MENU_DATA = 'DISPATCH_INIT_MENU_DATA';
export const DISPATCH_ALL_MENU = 'DISPATCH_ALL_MENU';
export const DISPATCH_CATEGORIES = 'DISPATCH_CATEGORIES';
export const DISPATCH_MAIN_CATEGORIES = 'DISPATCH_MAIN_CATEGORIES';
export const DISPATCH_CTG_MENU = 'DISPATCH_CTG_MENU';
export const DISPATCH_ONE_MENU = 'DISPATCH_ONE_MENU';

// Action creators
export const dispatchInitMenuData = (categories, mainCategories, menu) => {
    return {
        type: DISPATCH_INIT_MENU_DATA,
        ctg: categories,
        mainctg: mainCategories,
        menu: menu
    }

}
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

export const dispatchAllMenu = (menu) => {
    return {
        type: DISPATCH_ALL_MENU,
        menu: menu
    }
}

export const dispatchOneMenu = (target) => {
    return {
        type: DISPATCH_ONE_MENU,
        targetmenu: target
    }
}