import React from 'react';
import PropTypes from 'prop-types';
import './Padding.css';

const Padding = ({ pl = 0, pb = 0, pr = 0, pt = 0, py = 0, px = 0, p = 0, children }) => {
    const getClass = () => {
        const paddingList = [
            { name: 'pl', value: pl },
            { name: 'pb', value: pb },
            { name: 'pr', value: pr },
            { name: 'pt', value: pt },
            { name: 'py', value: py },
            { name: 'px', value: px },
            { name: 'p', value: p },
        ];

        return paddingList
            .filter((pad) => pad.value !== 0)
            .map((pad) => `${pad.name}-${pad.value}`)
            .join(' ');
    };

    return <div className={getClass()}>{children}</div>;
};

Padding.propTypes = {
    pl: PropTypes.number,
    pb: PropTypes.number,
    pr: PropTypes.number,
    pt: PropTypes.number,
    py: PropTypes.number,
    px: PropTypes.number,
    p: PropTypes.number,
    children: PropTypes.node.isRequired,
};

export default Padding;
