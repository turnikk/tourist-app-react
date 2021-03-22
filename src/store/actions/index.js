import { createAction } from 'redux-actions';

export const GET_LOCATION_FETCH = 'GET_LOCATION_FETCH';
export const GET_LOCATION_SUCCESS = 'GET_LOCATION_SUCCESS';
export const GET_LOCATION_FAIL = 'GET_LOCATION_FAIL';

export const GET_PLACES_FETCH = 'GET_PLACES_FETCH';
export const GET_PLACES_SUCCESS = 'GET_PLACES_SUCCESS';
export const GET_PLACES_FAIL = 'GET_PLACES_FAIL';

export const GET_MORE_PLACES_FETCH = 'GET_MORE_PLACES_FETCH';
export const GET_MORE_PLACES_SUCCESS = 'GET_MORE_PLACES_SUCCESS';
export const GET_MORE_PLACES_FAIL = 'GET_MORE_PLACES_FAIL';


export const SAVE_TO_FAVORITES = 'SAVE_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

export const getLocationFetchAction = createAction(GET_LOCATION_FETCH);
export const getPlacesFetchAction = createAction(GET_PLACES_FETCH, (data) => data);
export const saveToFavoritesAction = createAction(SAVE_TO_FAVORITES, (data) => data);
export const removeFromFavoritesAction = createAction(REMOVE_FROM_FAVORITES, (data) => data);
