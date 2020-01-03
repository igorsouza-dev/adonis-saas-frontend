import React from 'react';
import PropTypes from 'prop-types';

import { Container, Content } from './styles';

function Modal({ children, size }) {
  return (
    <Container>
      <Content size={size}>{children}</Content>
    </Container>
  );
}

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  size: PropTypes.string,
};

Modal.defaultProps = {
  size: 'default',
};

export default Modal;
