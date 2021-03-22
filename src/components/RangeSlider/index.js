import React, { useState } from 'react';
import './index.css';

const RangeSlider = ({ onChangeRadius, val }) => {
    const [value, setValue] = useState(val);

    const handleChange = (ev) => {
        setValue(ev.currentTarget.value);
        onChangeRadius(ev.currentTarget.value);
    };

    return (
        <div className="slidecontainer">
            <input
                type="range"
                min="1"
                max="50"
                value={value}
                className="slider"
                id="myRange"
                onChange={handleChange}
            />
        </div>
    );
};

export default RangeSlider;
