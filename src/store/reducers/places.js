import { Action } from 'redux-actions';

import { GET_PLACES_SUCCESS, GET_PLACES_FAIL } from '../actions';

const INITIAL_STATE = {
    collection: [],
    isLoaded: false,
};

const placesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_PLACES_SUCCESS:
            const { places } = action.payload;
            return {
                ...state,
                collection: places,
                isLoaded: true,
            };
        case GET_PLACES_FAIL:
            return {
                ...state,
                collection: [],
                isLoaded: false,
            };
        default:
            return state;
    }
};

export default placesReducer;
