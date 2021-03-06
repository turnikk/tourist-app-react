import React from 'react';
import './index.css';

const SearchBox = ({ onChangeSearch }) => {
    const handleChange = (ev) => {
        const { currentTarget } = ev;
        onChangeSearch(currentTarget.value);
    };

    return (
        <div>
            <input onChange={handleChange} className="search-box" type="text" />
        </div>
    );
};

export default SearchBox;
