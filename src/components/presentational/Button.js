import React, { Component, PropTypes } from 'react'

const Button = ({ onClick, children }) => {

  const buttonStyles = {
    borderRadius: '50%',
    position: 'absolute',
    left: '0',
    top: '0',
    outline: 'none',
    background: 'transparent'
  }

  return (
    <button style={buttonStyles} onClick={onClick} >
      { children }
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func
}

export default Button
