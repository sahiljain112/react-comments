import React, { Component } from 'react';
import Button from '../presentational/Button'
import Modal from '../presentational/Modal'
import './App.css'

const Wrapper = (Component) => class App extends Component {
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
    return (
      <div className="container">
        <Button onClick={() => this.toggleModal()} >
          <i className="fa fa-comment-o" aria-hidden="true"></i>
        </Button>
        <Component {...this.props} />
      </div>
    );
  }
}

export default Wrapper
