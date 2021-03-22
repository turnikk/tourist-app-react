export const selectPlaces = (state) => {
    return state.places.collection;
};

export const selectFavorites = (state) => {
    return state.places.favorites;
};

export const selectIsPlacesLoading = (state) => {
    return state.places.isLoading;
};

export const selectLocation = (state) => {
    return state.location;
};
