import { put, takeEvery, all } from 'redux-saga/effects';
import {
    GET_PLACES_FETCH,
    GET_PLACES_SUCCESS,
    GET_PLACES_FAIL
} from '../actions';

const delay = (ms) => new Promise((res) => setTimeout(res, ms)); // TODO: подключить апи

function* fetchPlaces(action) {
    try {
        yield delay(1000);
        yield put({ type: GET_PLACES_SUCCESS, payload: { places: [1, 2, 3] } });
    } catch (err) {
        yield put({ type: GET_PLACES_FAIL, payload: err.message });
    }
}

function* watchfetchPlaces() {
    yield takeEvery(GET_PLACES_FETCH, fetchPlaces);
}

export default function* rootSaga() {
    yield all([watchfetchPlaces()]);
}
