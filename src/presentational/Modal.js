import React, { Component, PropTypes } from 'react'
import Modal from 'react-modal'

const ModalPane = ({ isModalVisible, closeModal, contentLabel, children }) => {
  return(
    <Modal
      isOpen={true}
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
