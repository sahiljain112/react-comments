import React, { Component, PropTypes } from 'react'
import _ from 'lodash'
import Modal from 'react-modal'

const ModalPane = ({ isOpen, closeModal, contentLabel, children }) => {

  const styles = {
    overlay: {
      minWidth: '50px',
      minHeight: '50px',
      width: 'auto',
      height: 'auto',
      maxHeight: '300px',
      maxWidth: '300px',
      position: 'fixed',
    },
    content: {
      overflow: 'scroll',
      position: 'absolute',
      padding: '5px',
    }
  }

  return(
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      style={ _.merge(Modal.defaultStyle, styles) }
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
