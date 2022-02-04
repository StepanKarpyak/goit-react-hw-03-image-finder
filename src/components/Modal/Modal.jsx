import React, { Component } from "react";
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { ModalContainer, ModalSection } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClosed();
    }
  }

  handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClosed();
  }
}
  render() {
    return createPortal(
      <ModalContainer onClick={this.handleOverlayClick}>
        <ModalSection>{this.props.children}</ModalSection>
      </ModalContainer>,
      modalRoot,
    );
  }
}

export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};