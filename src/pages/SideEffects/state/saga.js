import { put, takeEvery, all, call } from 'redux-saga/effects';
import { INIT_SIDE_EFFECTS, REQUEST_FAILED, REQUEST_SUCCESS, REQUEST_IN_PROGRESS, SIDE_EFFECTS_COMPLETED } from "./actions";

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
    yield put({ type: SIDE_EFFECTS_COMPLETED });

}

// watcher Saga
function* watchLoadImageAsync() {
    yield takeEvery(INIT_SIDE_EFFECTS, loadImageAsync);
}


export default function* sideEffectsSaga() {
    yield all([
        watchLoadImageAsync()
    ])
}