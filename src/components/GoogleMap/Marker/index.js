import React, { useState } from 'react';
import './index.css';
import { renameCategory } from '../../../utils/helpers';
import { createPhotoURL } from '../../../api';

const Marker = ({
    place,
    isFavorite,
    saveToFavorites,
    removeFromFavorites
}) => {
    const [isClicked, setIsClicked] = useState(false);

    const toggle = () => {
        setIsClicked(!isClicked);
    };

    const favToggle = () => {
        return !isFavorite
            ? saveToFavorites({ newFavorite: place })
            : removeFromFavorites({ deletedId: place.place_id });
    };

    const {
        name,
        opening_hours: openingHours,
        photos,
        vicinity,
        rating,
        user_ratings_total: userRatingsTotal,
        types,
        icon
    } = place;

    const photoUrl =
        photos &&
        photos.length &&
        photos[0] &&
        createPhotoURL(photos[0].photo_reference);

    return (
        <>
            {isFavorite && (
                <span onClick={toggle} className="marker-fav">
                    💚
                </span>
            )}
            <img
                onClick={toggle}
                className="marker-img"
                src={icon}
                alt="Marker Icon"
            />
            {isClicked && (
                <>
                    <div className="info-block">
                        <div className="place">
                            <div className="place-info">
                                <div
                                    className={`place-info-top ${
                                        !photoUrl ? 'icon-only' : ''
                                    }`}
                                    style={{
                                        backgroundImage: `url("${
                                            photoUrl || icon
                                        }")`
                                    }}
                                />
                                <div className="place-info-bottom">
                                    <div className="header-name">{name}</div>
                                    <div className="place-info-header">
                                        <div className="category">
                                            {renameCategory(types[0] || '')}
                                        </div>
                                        {openingHours && (
                                            <div
                                                className={`header-open ${
                                                    openingHours.open_now
                                                        ? 'green'
                                                        : 'red'
                                                }`}
                                            >
                                                {openingHours.open_now
                                                    ? 'Open now'
                                                    : 'Closed now'}
                                            </div>
                                        )}
                                    </div>
                                    {rating && (
                                        <div
                                            className={`place-rating ${
                                                rating > 3.5 ? 'green' : 'red'
                                            }`}
                                        >
                                            Rating: {rating} ({userRatingsTotal}
                                            )
                                        </div>
                                    )}
                                    <div className="place-address">
                                        Address: {vicinity}
                                    </div>
                                </div>
                            </div>

                            <button onClick={favToggle} className="fav-button">
                                {!isFavorite ? 'Add to' : 'Remove from'}{' '}
                                Favorites
                            </button>
                        </div>

                        <div onClick={toggle} className="close">
                            x
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Marker;
