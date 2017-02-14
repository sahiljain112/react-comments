import React, { Component } from 'react'

const inputStyle = {
  width: '150px',
  padding: '10px',
  borderRadius: '10px',
  lineHeight: '24px',
  fontSize: '16px',
  margin: '20px 20px',
  outline: 'none',
  border: '1px solid #dddddd',
}

class Input extends Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
  }

  onChange(event){
    this.setState({
      value: event.target.value
    })
  }

  render() {
    const { value } = this.state
    return (
      <input style={inputStyle} type="text" value={value} placeholder={'Enter text'} />
    )
 }
}

export default Input
