import PropTypes from 'prop-types'
import React from 'react'
import { createPortal } from 'react-dom'

import { OpenableElement } from './opener-template.sc'

function OpenerTemplate({ opener, openable, isPortal, className }) {
  const openableElement = (
    <OpenableElement className='ui-openable-element'>
      {openable}
    </OpenableElement>
  )
  const openableElementPortal =
    openable && createPortal(openableElement, document.body)

  return (
    <div className={ className }>
      <div className='ui-opener-element'>
        {opener}
      </div>
      {isPortal ? openableElementPortal : openableElement}
    </div>
  )
}

export default OpenerTemplate

OpenerTemplate.propTypes = {
  opener   : PropTypes.object.isRequired,
  openable : PropTypes.object,
  isPortal : PropTypes.bool,
  className: PropTypes.string,
}

OpenerTemplate.defaultProps = {
  openable : null,
  isPortal : false,
  className: '',
}
