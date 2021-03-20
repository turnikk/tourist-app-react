import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { config } from '../../config';
import Marker from './Marker';

const { GOOGLE_API_KEY } = config.api;

const GoogleMap = ({
    center = {
        lat: 49.95,
        lng: 30.33
    },
    zoom = 15
}) => {
    const [location, setLocation] = useState();

    const locSuccess = (position) => {
        const { latitude: lat, longitude: lng } = position.coords;
        console.log(`lat ${lat} long ${lng}`);
        setLocation({
            lat,
            lng
        });
    };

    const locErr = (err) => {
        setLocation(center);
        console.log(`GEOLOCATION ERROR: ${err.message}`);
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(locSuccess, locErr, {
            enableHighAccuracy: false,
            timeout: 10000,
            maximumAge: Infinity
        });
    }, []);

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '80vh', width: '80%' }}>
            {location && (
                <GoogleMapReact
                    bootstrapURLKeys={{ key: GOOGLE_API_KEY, language: 'en' }}
                    defaultCenter={location}
                    defaultZoom={zoom}
                >
                    <Marker
                        lat={location.lat}
                        lng={location.lng}
                        pulse={true}
                    />
                </GoogleMapReact>
            )}
        </div>
    );
};

export default GoogleMap;
