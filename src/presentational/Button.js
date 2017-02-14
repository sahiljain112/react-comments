import React, { Component, PropTypes } from 'react'

const Button = ({ style, onClick, children }) => {
  return (
    <button style={style} onClick={onClick} >
      { children }
    </button>
  )
}

Button.propTypes = {
  style: PropTypes.object,
  onClick: PropTypes.func
}

export default Button
