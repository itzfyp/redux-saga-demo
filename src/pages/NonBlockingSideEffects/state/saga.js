import { put, takeEvery, all, call, fork, take } from 'redux-saga/effects';
import {
    INIT_SIDE_EFFECTS,
    REQUEST_FAILED,
    REQUEST_SUCCESS,
    REQUEST_IN_PROGRESS,
    SIDE_EFFECTS_COMPLETED,
    START_LOOP,
    INIT_STOP_LOOP,
    STOP_LOOP
} from "./actions";

// Worker Saga
function* loadImageAsync() {
    yield put({ type: REQUEST_IN_PROGRESS });
    try {
        const response = yield call(fetch, 'https://dog.ceo/api/breeds/image/random');
        const data = yield response.json();

        yield put({ type: REQUEST_SUCCESS, data })
    } catch (error) {
        yield put({ type: REQUEST_FAILED, error });
    }
    yield put({ type: INIT_STOP_LOOP });
    yield put({ type: SIDE_EFFECTS_COMPLETED });

}

function* initNonBlockingFeature() {
    yield fork(loadImageAsync);

    yield put({ type: START_LOOP });
    yield take(INIT_STOP_LOOP)
    yield put({ type: STOP_LOOP });
}

// watcher Saga
function* watchLoadImageAsync() {
    yield takeEvery(INIT_SIDE_EFFECTS, initNonBlockingFeature);
}


export default function* sideEffectsSaga() {
    yield all([
        watchLoadImageAsync()
    ])
}