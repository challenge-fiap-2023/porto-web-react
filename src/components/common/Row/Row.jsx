import React from 'react';
import PropTypes from 'prop-types'; // Importe o PropTypes
import './Row.css';

const Row = ({ children }) => {
    return <div className="row">{children}</div>;
};

Row.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Row;
