import {
    INIT_SIDE_EFFECTS,
    REQUEST_SUCCESS,
    REQUEST_FAILED,
    REQUEST_IN_PROGRESS,
    SIDE_EFFECTS_COMPLETED
} from "./actions";

const initalState = {
    url: null,
    apiProgress: []
}

export default (state = initalState, action) => {
    switch (action.type) {
        case INIT_SIDE_EFFECTS:
        case REQUEST_IN_PROGRESS:
        case REQUEST_SUCCESS:
        case REQUEST_FAILED:
        case SIDE_EFFECTS_COMPLETED:
            console.log('inside reducer :: action ==>', action.type, " :: data ===>", action.data);
            let cState = { ...state };
            if (action.data)
                cState = { ...cState, url: action.data.message }
            if (action.type === INIT_SIDE_EFFECTS)
                cState.apiProgress = [];
            const apiState = [...cState.apiProgress];
            apiState.push(action.type);
            return { ...cState, apiProgress: apiState };

        default:
            return state;
    }
};