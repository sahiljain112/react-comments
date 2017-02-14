import React, { Component } from 'react';
import Button from '../presentational/Button'
import ModalPane from '../presentational/Modal'
import './App.css'

const Wrapper = (Component, comments = []) => class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isModalVisible: false
    }
    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal() {
    this.setState({
      isModalVisible: !this.state.isModalVisible
    })
  }

  render() {
    const { isModalVisible } = this.state
    const modalContent = comments.map((comment, key) => {
      return (<li key={key}> {comment} </li>)
    })
    return (
      <div className="container">
        <Button onClick={this.toggleModal} >
          <i className="fa fa-comment-o" aria-hidden="true"></i>
        </Button>
        <ModalPane isOpen={isModalVisible} closeModal={this.toggleModal} contentLabel={'Todo list'}>
          <div className="modal-header">
            <ul>
              { modalContent }
            </ul>
          </div>
        </ModalPane>
        <Component {...this.props} />
      </div>
    );
  }
}

export default Wrapper
