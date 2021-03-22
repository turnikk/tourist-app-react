import { Action } from 'redux-actions';

import { GET_LOCATION_SUCCESS, GET_LOCATION_FAIL } from '../actions';

const INITIAL_STATE = {
    lat: null,
    lng: null,
    error: false,
    isLoading: true,
};

const locationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_LOCATION_SUCCESS:
            const { lng, lat } = action.payload && action.payload.location;
            return {
                ...state,
                lng,
                lat,
                isLoading: false,
                error: false,
            };
        case GET_LOCATION_FAIL:
            return {
                ...state,
                lat: null,
                lng: null,
                isLoading: false,
                error: true
            };
        default:
            return state;
    }
};

export default locationReducer;
