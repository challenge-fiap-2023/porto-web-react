import React from 'react';
import PropTypes from 'prop-types';

const Logotipo = ({ width = 100, light = false }) => {
  const logoPath = light
    ? '../../../assets/images/logo/porto-logo-light.png'
    : '../../../assets/images/logo/porto-logo.png';

  return (
    <img
      src={logoPath}
      className="logo"
      width={width}
      alt={`Logotipo ${light ? 'Branco' : 'Azul'} Porto Seguro`}
    />
  );
};

Logotipo.propTypes = {
  with: PropTypes.number,
  light: PropTypes.bool,
};

export default Logotipo;
