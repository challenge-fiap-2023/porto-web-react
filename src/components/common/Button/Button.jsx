import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ type = 'button', class: className = '', disabled = false, children }) => {
    return (
        <button className={`btn ${className}`} type={type} disabled={disabled}>
            {children}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.string,
    class: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

export default Button;
