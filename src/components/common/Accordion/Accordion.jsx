import React from 'react';
import PropTypes from 'prop-types';
import './Accordion.css'
import Paragraph from '../Paragraph/Paragraph';

const Accordion = ({ id = '', children }) => {

    const title = React.Children.toArray(children).find(
        (child) => child.props.className == 'title'
    );

    const content = React.Children.toArray(children).find(
        (child) => child.props.className === 'content'
    );

    return (
        <div className="tabs">
            <div className="tab">
                <input type="checkbox" id={id} />
                <label className="tab-label" htmlFor={id}>
                    {title}
                </label>
                <div className="tab-content">
                    <Paragraph>
                        {content?.props.children}
                    </Paragraph>
                </div>
            </div>
        </div>
    );
};

Accordion.propTypes = {
    id: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default Accordion;
