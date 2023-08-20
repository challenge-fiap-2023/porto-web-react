import React from 'react';
import PropTypes from 'prop-types';
import './Section.css';

const Section = ({ id = '', children }) => {
  return <section id={id}>{children}</section>;
};

Section.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;
