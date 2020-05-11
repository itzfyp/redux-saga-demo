import { put, takeEvery, all } from 'redux-saga/effects';
import { INCREMENT_COUNT, DECREMENT_COUNT, INCREMENT_COUNT_ASYNC, DECREMENT_COUNT_ASYNC } from "./actions";

const delay = (ms) => new Promise(res => setTimeout(res, ms))

// Worker Saga
function* incrementAsync() {
    yield delay(1000)
    yield put({ type: INCREMENT_COUNT })
}

function* decrementAsync() {
    yield delay(1000)
    yield put({ type: DECREMENT_COUNT })
}

// watcher Saga
function* watchIncrementAsync() {
    yield takeEvery(INCREMENT_COUNT_ASYNC, incrementAsync)
}

function* watchDecrementAsync() {
    yield takeEvery(DECREMENT_COUNT_ASYNC, decrementAsync)
}


export default function* basicSaga() {
    yield all([
        watchIncrementAsync(),
        watchDecrementAsync()
    ])
}