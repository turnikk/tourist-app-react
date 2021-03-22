import React from 'react';
import './index.css';
import { categories } from '../../categories';

const renderCategory = (category, index) => {
    const catName = `${category[0].toUpperCase()}${category.replace(/_/g, ' ').substr(1)}`
    return (<option key={catName} value={category}>{catName}</option>)
}

const catOptions = categories.map(renderCategory);

const DropDownList = ({ onChangeCategory }) => {

    const handleChange = (ev) => {
        onChangeCategory(ev.currentTarget.value)
    };

    return (
        <div>
            <select onChange={handleChange} className="select-box" type="text" >
                <option disabled value="" selected>Choose a category</option>
                {catOptions}
            </select>
        </div>
    );
};

export default DropDownList;
