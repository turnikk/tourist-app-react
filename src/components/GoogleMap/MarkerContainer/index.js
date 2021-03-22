import React from 'react';
import { connect } from 'react-redux';
import Marker from '../Marker';
import { bindActionCreators } from 'redux';
import {
    saveToFavoritesAction,
    removeFromFavoritesAction
} from '../../../store/actions';

const MarkerContainer = ({
    place,
    saveToFavorites,
    removeFromFavorites,
    favorites
}) => {
    const { lat, lng } = place && place.geometry && place.geometry.location;
    const { place_id: placeId } = place;

    const isFavorite = !!favorites[placeId];

    return (
        <Marker
            lat={lat}
            lng={lng}
            key={placeId}
            place={place}
            isFavorite={isFavorite}
            saveToFavorites={saveToFavorites}
            removeFromFavorites={removeFromFavorites}
        />
    );
};

const mapStateToProps = (state) => ({
    favorites: state.places.favorites
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            saveToFavorites: saveToFavoritesAction,
            removeFromFavorites: removeFromFavoritesAction
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(MarkerContainer);
