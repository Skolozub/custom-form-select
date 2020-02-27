import PropTypes from 'prop-types'
import React, { useCallback, useEffect, useRef, useState } from 'react'

import OpenerTemplate from '../opener-template/opener-template'

function OpenerContainer({ opener, openable, isDefOpened, isPortal, className, onHandleClose }) {
  /* refs */
  const openerRef = useRef(null)
  const openableRef = useRef(null)
  const prevOpened = useRef(false)

  /* state */
  const [ isOpened, setIsOpened ] = useState(isDefOpened)
  const [ openerCoords, setOpenerCoords ] = useState({})
  const [ openableCoords, setOpenableCoords ] = useState({})

  /* coords func's */
  const getElementCoords = element => {
    if (!element) {
      return {}
    }
    const coords = element.getBoundingClientRect()

    return {
      top   : coords.top,
      bottom: coords.bottom,
      left  : coords.left,
      width : coords.width,
      height: coords.height,
    }
  }
  const setCoords = (ref, setStateCoordsFn, getCoordsFn) => {
    const coords = getCoordsFn(ref.current)
    setStateCoordsFn(coords)
  }
  const setElementsCoords = useCallback(() => {
    setCoords(openerRef, setOpenerCoords, getElementCoords)
    setCoords(openableRef, setOpenableCoords, getElementCoords)
  }, [])

  /* methods func's */
  const openOpenableElement = () => !isOpened && setIsOpened(true)
  const closeOpenableElement = () =>
    setTimeout(() => {
      setIsOpened(false)
      setOpenableCoords({})
    }, 0)
  const toggleOpenableElement = () => setIsOpened(!isOpened)

  /* useEffect hooks */
  useEffect(() => {
    if (isOpened) {
      setElementsCoords()
    }
  }, [ isOpened, setElementsCoords ])

  useEffect(() => {
    if (!isOpened && prevOpened.current !== isOpened) {
      onHandleClose()
    }
    prevOpened.current = isOpened
  }, [ isOpened, onHandleClose ])

  useEffect(() => {
    const closeOnClickOutsideComponent = event => {
      const { current: openableElement } = openableRef
      const { current: openerElement } = openerRef

      const isClickToOpenerElement =
        openerElement && openerElement.contains(event.target)
      const isClickToOpenableElement =
        openableElement && openableElement.contains(event.target)

      if (isClickToOpenerElement || isClickToOpenableElement) {
        return null
      }

      setIsOpened(false)
    }

    window.addEventListener('click', closeOnClickOutsideComponent, true)
    return () =>
      window.removeEventListener('click', closeOnClickOutsideComponent, true)
  }, [])

  useEffect(() => {
    if (isOpened) {
      window.addEventListener('scroll', setElementsCoords, true)
      return () => window.removeEventListener('scroll', setElementsCoords, true)
    }
  }, [ isOpened, setElementsCoords ])

  useEffect(() => {
    if (isOpened) {
      window.addEventListener('resize', setElementsCoords, true)
      return () => window.removeEventListener('resize', setElementsCoords, true)
    }
  }, [ isOpened, setElementsCoords ])

  const state = {
    isOpened,
    openerCoords,
    openableCoords,
    refs: {
      opener  : openerRef,
      openable: openableRef,
    },
    methods: {
      open  : openOpenableElement,
      close : closeOpenableElement,
      toggle: toggleOpenableElement,
    },
  }

  const hasOpenerComponent = Boolean(opener)
  const isOpenedOpenerComponent = (openable && isOpened) || isDefOpened

  return (
    <OpenerTemplate
      className={ className }
      isPortal={ isPortal }
      openable={ isOpenedOpenerComponent ? openable(state) : undefined }
      opener={ hasOpenerComponent && opener(state) }
    />
  )
}

export default OpenerContainer

OpenerContainer.propTypes = {
  opener       : PropTypes.func.isRequired,
  openable     : PropTypes.func.isRequired,
  isDefOpened  : PropTypes.bool,
  isPortal     : PropTypes.bool,
  className    : PropTypes.string,
  onHandleClose: PropTypes.func,
}

OpenerContainer.defaultProps = {
  isDefOpened  : false,
  isPortal     : false,
  className    : '',
  onHandleClose: () => {},
}
