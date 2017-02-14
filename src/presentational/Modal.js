import React, { Component, PropTypes } from 'react'
import Modal from 'react-modal'

const ModalPane = ({ isVisible, closeModal, children }) => {
  return(
    <Modal
      isOpen={isVisible}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true} >
      { children }
    </Modal>
  )
}

ModalPane.propTypes = {
  
}

export default ModalPane
