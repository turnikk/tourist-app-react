import React from 'react';
import './index.css';
import { categories } from '../../categories';
import { renameCategory } from '../../utils/helpers';

const renderCategory = (category, index) => (
    <option key={`category${category}${index}`} value={category}>
        {renameCategory(category)}
    </option>
);

const catOptions = categories.map(renderCategory);

const DropDownList = ({ onChangeCategory }) => {
    const handleChange = (ev) => {
        onChangeCategory(ev.currentTarget.value);
    };

    return (
        <div>
            <select onChange={handleChange} defaultValue="" className="select-box" type="text">
                <option disabled value="">
                    Choose a category
                </option>
                {catOptions}
            </select>
        </div>
    );
};

export default DropDownList;
