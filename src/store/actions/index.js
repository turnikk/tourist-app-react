import { createAction } from 'redux-actions';

export const CATEGORY_CHANGE = 'CATEGORY_CHANGE';
export const TEXT_CHANGE = 'TEXT_CHANGE';
export const RADIUS_CHANGE = 'RADIUS_CHANGE';


export const GET_LOCATION_FETCH = 'GET_LOCATION_FETCH';
export const GET_LOCATION_SUCCESS = 'GET_LOCATION_SUCCESS';
export const GET_LOCATION_FAIL = 'GET_LOCATION_FAIL';

export const GET_PLACES_FETCH = 'GET_PLACES_FETCH';
export const GET_PLACES_SUCCESS = 'GET_PLACES_SUCCESS';
export const GET_PLACES_FAIL = 'GET_PLACES_FAIL';

export const GET_MORE_PLACES_FETCH = 'GET_MORE_PLACES_FETCH';
export const GET_MORE_PLACES_SUCCESS = 'GET_MORE_PLACES_SUCCESS';
export const GET_MORE_PLACES_FAIL = 'GET_MORE_PLACES_FAIL';

export const categoryChangeAction = createAction(CATEGORY_CHANGE, (data) => data);
export const getLocationFetchAction = createAction(GET_LOCATION_FETCH);
export const textChangeAction = createAction(TEXT_CHANGE, (data) => data);
export const radiusChangeAction = createAction(RADIUS_CHANGE, (data) => data);
export const getPlacesFetchAction = createAction(GET_PLACES_FETCH, (data) => data);
