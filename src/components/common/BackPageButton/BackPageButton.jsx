import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const BackPageButton = ({ children }) => {
    const navigate = useNavigate();

    return (
        <button className='btn p-0' onClick={() => navigate(-1)}>
            {children}
        </button>
    );
};

BackPageButton.propTypes = {
    children: PropTypes.node,
};

export default BackPageButton;
