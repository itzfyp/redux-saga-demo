import { INCREMENT_COUNT, DECREMENT_COUNT } from "./actions";

const initalState = {
    count: 0
}

export default (state = initalState, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            return { ...state, count: state.count + 1 };

        case DECREMENT_COUNT:
            return { ...state, count: state.count - 1 };

        default:
            return state;
    }
};