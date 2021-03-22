import { Action } from 'redux-actions';

import {
    GET_PLACES_FETCH,
    GET_PLACES_SUCCESS,
    GET_PLACES_FAIL,
    GET_MORE_PLACES_FETCH, GET_MORE_PLACES_SUCCESS, GET_MORE_PLACES_FAIL
} from '../actions';

const INITIAL_STATE = {
    collection: [],
    error: false,
    isLoading: false
};

const placesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_PLACES_FETCH:
            return {
                ...state,
                isLoading: true
            };
        case GET_PLACES_SUCCESS:
            const { places } = action.payload;
            return {
                ...state,
                collection: places,
                isLoading: false
            };
        case GET_PLACES_FAIL:
            return {
                ...state,
                collection: [],
                error: true,
                isLoading: false
            };
        case GET_MORE_PLACES_FETCH:
            return {
                ...state,
                isLoading: true
            };
        case GET_MORE_PLACES_SUCCESS:
            const { collection: prevPlaces } = state;
            const { places: morePlaces } = action.payload;
            return {
                ...state,
                collection: prevPlaces.concat(morePlaces),
                isLoading: false
            };
        case GET_MORE_PLACES_FAIL:
            return {
                ...state,
                error: true,
                isLoading: false
            };
        default:
            return state;
    }
};

export default placesReducer;
