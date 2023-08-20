import React from 'react';
import PropTypes from 'prop-types';
import './Container.css';

const Container = ({ type, children }) => {
    return (
        <div className={`container ${type ? `container-${type?.toLowerCase()}` : 'container'}`}>
            {children}
        </div>
    );
};

Container.propTypes = {
    type: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Container;
