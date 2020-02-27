import filterInvalidDOMProps from 'filter-invalid-dom-props';
import PropTypes from 'prop-types'
import React from 'react'

function PseudoBtn({ children, onClick, ...props }) {
  function handleKeyPress(event) {
    if (event.keyCode === 13) {
      onClick(event)
    }
  }

  return (
    <div
      { ...filterInvalidDOMProps(props) }
      data-attr="pseudo-btn"
      role="button"
      tabIndex={ 0 }
      onClick={ onClick }
      onKeyPress={ handleKeyPress }
    >
      {children}
    </div>
  )
}

PseudoBtn.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.node, PropTypes.func ]).isRequired,
  onClick : PropTypes.func,
}

PseudoBtn.defaultProps = {
  onClick: ()=>{},
}

export default PseudoBtn
