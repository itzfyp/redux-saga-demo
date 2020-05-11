import { combineReducers } from "redux";

import BasicReducer from "../pages/BasicActions/state/redeucer";
import sideEffectReducer from "../pages/SideEffects/state/redeucer";
import nonBlockingSideEffectReducer from "../pages/NonBlockingSideEffects/state/redeucer";

export default combineReducers({
    basic: BasicReducer,
    sideEffects: sideEffectReducer,
    nonBlockingSideEffects: nonBlockingSideEffectReducer
});