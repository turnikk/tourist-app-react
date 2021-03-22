import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';
import { config } from '../../config';
import Marker from './Marker';
import {
    selectPlaces,
    selectLocation
} from '../../store/selectors';
import Spinner from '../Spinner';

const { GOOGLE_API_KEY } = config.api;

const renderMarkers = (places) =>
    places.map((place) => {
        const { lat, lng } = place && place.geometry && place.geometry.location;
        const { place_id, icon } = place;
        return <Marker lat={lat} lng={lng} icon={icon} key={place_id} />;
    });

const GoogleMap = ({ zoom = 15, location, places }) => {
    const { lat, lng, error: err, isLoading } = location;

    const [markers, setMarkers] = useState([]);

    useEffect(() => {
        setMarkers(renderMarkers(places));
    }, [places]);

    return (
        <div style={{ height: '60vh', width: '90%' }}>
            {isLoading && <Spinner/>}
            {!isLoading && !err && (
                <GoogleMapReact
                    bootstrapURLKeys={{ key: GOOGLE_API_KEY, language: 'en' }}
                    defaultCenter={location}
                    defaultZoom={zoom}
                >
                    <Marker lat={lat} lng={lng} pulse={true} />
                    {markers}
                </GoogleMapReact>
            )}
            {err && 'Please allow this website to use your location'}
        </div>
    );
};

const mapStateToProps = (state) => ({
    location: selectLocation(state),
    places: selectPlaces(state)
});

export default connect(mapStateToProps)(GoogleMap);
