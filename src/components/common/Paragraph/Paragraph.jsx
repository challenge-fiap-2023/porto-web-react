import React from 'react';
import PropTypes from 'prop-types';
import './Paragraph.css';

const Paragraph = ({ children }) => {
    return <p>{children}</p>;
};

Paragraph.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Paragraph;