export const DISPATCH_MEMBER = 'DISPATCH_MEMBER';
export const DISPATCH_MENU = 'DISPATCH_MENU';
export const DISPATCH_OPTION = 'DISPATCH_OPTION';

// Action creators
export const dispatchMember = (member) => {
    return {
        type: DISPATCH_MEMBER,
        member: member
    }
}

export const dispatchMenu = (menu) => {
    return {
        type: DISPATCH_MENU,
        menu: menu
    }
}

export const dispatchOption = (option) => {
    return {
        type: DISPATCH_OPTION,
        option: option
    }
}