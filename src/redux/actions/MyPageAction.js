export const DISPATCH_MY_INFO = 'DISPATCH_MY_INFO';
export const DISPATCH_MY_HISTORY = 'DISPATCH_MY_HISTORY';

// Action creators
export const dispatchMember = (memberInfo) => {
    return {
        type: DISPATCH_MY_INFO,
        memberInfo: memberInfo
    }
}

export const dispatchMenu = (orderHistory) => {
    return {
        type: DISPATCH_MY_HISTORY,
        orderHistory: orderHistory
    }
}