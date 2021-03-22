import React from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';
import { config } from '../../config';
import MarkerContainer from './MarkerContainer';
import UserPin from './UserPin';
import {
    selectPlaces,
    selectLocation,
    selectFavorites
} from '../../store/selectors';
import Spinner from '../Spinner';

const { GOOGLE_API_KEY } = config.api;

const renderMarkers = (places) =>
    places.map((place) => {
        return (
            <MarkerContainer
                lat={place.geometry.location.lat}
                lng={place.geometry.location.lng}
                key={place.place_id}
                place={place}
            />
        );
    });

const GoogleMap = ({ zoom = 15, location, places, favorites }) => {
    const { lat, lng, error: err, isLoading } = location;

    const placesObj = (places || []).reduce((obj, place) => {
        obj[place.place_id] = place;
        return obj;
    }, {});

    const placesUniqueObj = Object.assign({}, placesObj, favorites);

    const placesUniqueArr = Object.keys(placesUniqueObj).map(
        (place) => placesUniqueObj[place]
    );
    const markers = renderMarkers([...placesUniqueArr]);
    return (
        <div style={{ height: '60vh', width: '90%' }}>
            {isLoading && <Spinner />}
            {!isLoading && !err && (
                <GoogleMapReact
                    bootstrapURLKeys={{ key: GOOGLE_API_KEY, language: 'en' }}
                    defaultCenter={location}
                    defaultZoom={zoom}
                >
                    <UserPin lat={lat} lng={lng} />
                    {markers}
                </GoogleMapReact>
            )}
            {err && 'Please allow this website to use your location'}
        </div>
    );
};

const mapStateToProps = (state) => ({
    location: selectLocation(state),
    places: selectPlaces(state),
    favorites: selectFavorites(state)
});

export default connect(mapStateToProps)(GoogleMap);
