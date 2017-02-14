import React, { Component, PropTypes } from 'react'
import _ from 'lodash'
import Modal from 'react-modal'

const ModalPane = ({ isOpen, closeModal, contentLabel, children }) => {

  const contentStyle = {
    content: {
      right: '50px',
      top: '50px',
      left: '50px',
      bottom: '50px',
    }
  }

  return(
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      style={_.merge(Modal.defaultStyles, contentStyle)}
      contentLabel={contentLabel} >
      { children }
    </Modal>
  )
}

ModalPane.propTypes = {
  isModalVisible: PropTypes.bool,
  closeModal: PropTypes.func,
  contentLabel: PropTypes.string,
}

export default ModalPane
