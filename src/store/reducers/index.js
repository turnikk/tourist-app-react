import { combineReducers } from 'redux';
import placesReducer from './places';
import locationReducer from './location';

export default combineReducers({
    places: placesReducer,
    location: locationReducer
});
