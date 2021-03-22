import React from 'react';
import './index.css';

const Marker = ({ styles, pulse = false, icon }) => {
    {
        return (
            <>
                {icon ? (
                    <img className="marker-img" src={icon} alt="Marker Icon" />
                ) : (
                    <div className="pin" style={styles} />
                )}
                {pulse && <div className="pin pin-effect" />}
            </>
        );
    }
};

export default Marker;
