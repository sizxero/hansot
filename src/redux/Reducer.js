import * as Action from './Action';

const initialState = {};

const reducers = (state=initialState, action) => {
    const { type } = action;

    switch (type) {
        default: {
            return state;
        }
    }
}

export default reducers;