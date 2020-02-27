import PropTypes from 'prop-types'
import React from 'react'
import CustomScrollbar from 'react-scrollbars-custom'

function ScrollWrapper(props) {
  const { className, style, children, height } = props

  return (
    <CustomScrollbar className={ className } style={ { ...style, height, position: '' } }>
      {children}
    </CustomScrollbar>
  )
}

ScrollWrapper.propTypes = {
  className: PropTypes.string,
  style    : PropTypes.object,
  children : PropTypes.oneOfType([
    PropTypes.node, PropTypes.func,
  ]).isRequired,
  height: PropTypes.oneOfType([
    PropTypes.string, PropTypes.number,
  ]),
}

ScrollWrapper.defaultProps = {
  className: '',
  style    : {},
  height   : 0,
}

export default ScrollWrapper
