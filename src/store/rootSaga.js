import { all } from "redux-saga/effects";
import BasicSaga from "../pages/BasicActions/state/saga";
import SideEffectsSaga from "../pages/SideEffects/state/saga";
import NonBlockingSideEffectsSaga from "../pages/NonBlockingSideEffects/state/saga";

export function* helloSaga() {
    console.log('Hello Sagas!')
}


export default function* rootSaga() {
    yield all([
        helloSaga(),
        BasicSaga(),
        SideEffectsSaga(),
        NonBlockingSideEffectsSaga()
    ])
}