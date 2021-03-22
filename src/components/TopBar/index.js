import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DropDownList from '../DropDownList';
import SearchBox from '../SearchBox';
import RangeSlider from '../RangeSlider';
import {
    getPlacesFetchAction,
    getLocationFetchAction
} from '../../store/actions';
import { selectLocation, selectIsPlacesLoading } from '../../store/selectors';
import './index.css';
import Spinner from '../Spinner';

const TopBar = ({ placesFetch, locationFetch, location, isPlacesLoading }) => {
    const [categoryName, setCategoryName] = useState('');
    const [searchText, setSearchText] = useState('');
    const [radius, setRadius] = useState(2);

    const { lat, lng, error: err, isLoading } = location;

    useEffect(() => {
        locationFetch();
    }, [locationFetch]);

    const onChangeCatName = (catName) => {
        setCategoryName(catName);
    };

    const onChangeSearchText = (text) => {
        setSearchText(text);
    };

    const onChangeRadius = (val) => {
        setRadius(val);
    };

    const onSearchClick = () => {
        placesFetch({
            keyword: searchText,
            location: `${lat},${lng}`,
            radius: radius * 1000,
            type: categoryName
        });
    };

    return (
        <React.Fragment>
            <span>I want to find</span>
            <DropDownList onChangeCategory={onChangeCatName} />
            <span>name or a keyword</span>
            <SearchBox onChangeSearch={onChangeSearchText} />
            <span>within a {radius} km range</span>
            <RangeSlider val={radius} onChangeRadius={onChangeRadius} />
            <div className="button-wrapper">
                {isPlacesLoading ? (
                    <Spinner small />
                ) : (
                    <button
                        disabled={err || isLoading}
                        onClick={onSearchClick}
                        className="search-button"
                    >
                        Search
                    </button>
                )}
            </div>
        </React.Fragment>
    );
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            placesFetch: getPlacesFetchAction,
            locationFetch: getLocationFetchAction
        },
        dispatch
    );

const mapStateToProps = (state) => ({
    location: selectLocation(state),
    isPlacesLoading: selectIsPlacesLoading(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
