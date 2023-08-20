import React from 'react';
import PropTypes from 'prop-types';
import './Title.css';

const Title = ({ type = '', bold = false, children }) => {
    const titleClass = `title-${type} ${bold ? 'bold' : ''}`;

    return <div className={titleClass}>{children}</div>;
};

Title.propTypes = {
    type: PropTypes.string,
    bold: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

export default Title;
