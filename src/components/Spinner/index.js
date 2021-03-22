import React from 'react';
import './index.css';

const Spinner = ({ small = false }) => {
    const size = small ? 'small' : '';
    return <div className={`loader ${size}`} />;
};

export default Spinner;
