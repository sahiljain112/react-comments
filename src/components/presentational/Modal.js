import React, { Component, PropTypes } from 'react'
import Modal from 'react-modal'

const ModalPane = ({ isOpen, closeModal, contentLabel, children }) => {
  return(
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      contentLabel={contentLabel} >
      { children }
    </Modal>
  )
}

ModalPane.propTypes = {
  isModalVisible: PropTypes.bool,
  closeModal: PropTypes.func
}

export default ModalPane
