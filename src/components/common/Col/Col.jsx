import React from 'react';
import PropTypes from 'prop-types';
import './Col.css';

const Col = ({ col = 0, md = 0, xl = 0, lg = 0, sm = 0, children }) => {
    const getClass = () => {
        const colList = [
            { name: 'col', value: col },
            { name: 'col-md', value: md },
            { name: 'col-xl', value: xl },
            { name: 'col-lg', value: lg },
            { name: 'col-sm', value: sm },
        ];

        return colList
            .filter((cls) => cls.value !== 0)
            .map((cls) => `${cls.name}-${cls.value}`)
            .join(' ');
    };

    return <div className={getClass()}>{children}</div>;
};

Col.propTypes = {
    col: PropTypes.number,
    md: PropTypes.number,
    xl: PropTypes.number,
    lg: PropTypes.number,
    sm: PropTypes.number,
    children: PropTypes.node.isRequired,
};

export default Col;