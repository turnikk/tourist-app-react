import { put, takeEvery, all, call } from 'redux-saga/effects';
import {
    GET_PLACES_FETCH,
    GET_PLACES_SUCCESS,
    GET_PLACES_FAIL,
    GET_LOCATION_FETCH,
    GET_LOCATION_SUCCESS,
    GET_LOCATION_FAIL,
    GET_MORE_PLACES_FETCH,
    GET_MORE_PLACES_SUCCESS,
    GET_MORE_PLACES_FAIL
} from '../actions';
import { searchPlacesApi } from '../../api';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const getUserLocation = () =>
    new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (location) => resolve(location),
            (error) => reject(error),
            {
                enableHighAccuracy: false,
                timeout: 10000,
                maximumAge: Infinity
            }
        );
    });

function* fetchLocation() {
    try {
        const { coords } = yield call(getUserLocation);
        yield put({
            type: GET_LOCATION_SUCCESS,
            payload: {
                location: { lng: coords.longitude, lat: coords.latitude }
            }
        });
    } catch (err) {
        yield put({ type: GET_LOCATION_FAIL, payload: err.message });
    }
}

function* watchFetchLocation() {
    yield takeEvery(GET_LOCATION_FETCH, fetchLocation);
}

function* fetchPlaces(action) {
    const { keyword, location, radius, category, type } = action.payload;

    try {
        const { data } = yield call(searchPlacesApi, {
            keyword,
            location,
            radius,
            category,
            type,
            language: 'en'
        });

        const { results, next_page_token: pagetoken } = data;

        yield put({ type: GET_PLACES_SUCCESS, payload: { places: results } });

        if (pagetoken) {
            yield put({ type: GET_MORE_PLACES_FETCH, payload: { pagetoken } });
        }
    } catch (err) {
        yield put({ type: GET_PLACES_FAIL, payload: err.message });
    }
}

function* watchfetchPlaces() {
    yield takeEvery(GET_PLACES_FETCH, fetchPlaces);
}

function* fetchMorePlaces(action) {
    const { pagetoken } = action.payload;

    try {
        yield delay(2000); // Google API limitation: https://developers.google.com/maps/documentation/places/web-service/search#PlaceSearchRequests

        const { data } = yield call(searchPlacesApi, {
            pagetoken
        });

        const { results, next_page_token: newPagetoken } = data;

        yield put({
            type: GET_MORE_PLACES_SUCCESS,
            payload: { places: results }
        });

        if (newPagetoken) {
            yield put({
                type: GET_MORE_PLACES_FETCH,
                payload: { pagetoken: newPagetoken }
            });
        }
    } catch (err) {
        yield put({ type: GET_MORE_PLACES_FAIL, payload: err.message });
    }
}

function* watchFetchMorePlaces() {
    yield takeEvery(GET_MORE_PLACES_FETCH, fetchMorePlaces);
}

export default function* rootSaga() {
    yield all([
        watchfetchPlaces(),
        watchFetchLocation(),
        watchFetchMorePlaces()
    ]);
}
