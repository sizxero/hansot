export const DISPATCH_ALL_SIDO = 'DISPATCH_ALL_SIDO';
export const DISPATCH_GUGUN = 'DISPATCH_GUGUN';
export const DISPATCH_ALL_STORE = 'DISPATCH_ALL_STORE';
// Action creators
export const dispatchAllSido = (allSido) => {
    return {
        type: DISPATCH_ALL_SIDO,
        allSido: allSido
    }
}

export const dispatchGugun = (gugun) => {
    return {
        type: DISPATCH_GUGUN,
        gugun: gugun
    }
}

export const dispatchAllStore = (allStore) => {
    return {
        type: DISPATCH_ALL_STORE,
        allStore: allStore
    }
}