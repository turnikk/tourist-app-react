import React from 'react';
import './index.css';

const Marker = ({ styles, pulse = false }) => {
    {
        return (
            <>
                <div className="pin" style={styles}></div>
                {pulse && <div className="pin pin-effect"></div>}
            </>
        );
    }
};

export default Marker;
