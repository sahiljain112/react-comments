import React, { Component } from 'react';
import Button from '../presentational/Button'
import Modal from '../presentational/Modal'
import './App.css'

const Wrapper = (Component, comments = []) => class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isModalVisible: false
    }
  }

  toggleModal() {
    this.setState({
      isModalVisible: !this.state.isModalVisible
    })
  }

  render() {
    const { isModalVisible } = this.state
    const modalContent = comments.map(comment => {
      return (<li> {comment} </li>)
    })
    return (
      <div className="container">
        <Button onClick={() => this.toggleModal()} >
          <i className="fa fa-comment-o" aria-hidden="true"></i>
        </Button>
        <Modal isOpen={isModalVisible} closeModal={() => this.toggleModal()}>
          <div className="modal-header">
            <ul>
              { modalContent }
            </ul>
          </div>
        </Modal>
        <Component {...this.props} />
      </div>
    );
  }
}

export default Wrapper
