import PropTypes from 'prop-types'
import React from 'react'

function SelectArrow({ className, isOpened, fill = '#1D1F20' }) {
  const color = isOpened ? '#1aac50' : fill
  return (
    <svg className={ className } fill="none" height="8" viewBox="0 0 12 8" width="12">
      <path d="M6.0001 7.79999L11.5427 0.59999H0.457535L6.0001 7.79999Z" fill={ color } />
    </svg>
  )
}

SelectArrow.propTypes = {
  isOpened : PropTypes.bool,
  className: PropTypes.string,
  fill     : PropTypes.string,
}

SelectArrow.defaultProps = {
  isOpened : false,
  className: '',
  fill     : '#1D1F20',
}

export default SelectArrow
