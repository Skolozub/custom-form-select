import cn from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { ButtonIcon, ButtonText, ButtonWrapper } from './select-buttom.sc'

function SelectButton(props) {
  const {
    className,
    style,
    activeOptionText,
    isOpened,
    isLoading,
    isError,
    isDisabled,
    handleToggle,
    iconComponent = () => {},
  } = props

  return (
    <ButtonWrapper
      className={ cn('custom-select__open-button', className) }
      isDisabled={ isDisabled }
      isError={ isError }
      isOpened={ isOpened }
      style={ style }
      onClick={ handleToggle }
    >
      <ButtonText className='custom-select__button-text'>
        {activeOptionText}
      </ButtonText>
      <ButtonIcon className='custom-select__button-icon' isOpened={ isOpened }>
        {iconComponent({ isOpened, isLoading, isError, isDisabled })}
      </ButtonIcon>
    </ButtonWrapper>
  )
}

SelectButton.propTypes = {
  className       : PropTypes.string,
  style           : PropTypes.object,
  activeOptionText: PropTypes.string,
  isOpened        : PropTypes.bool,
  isError         : PropTypes.bool,
  isDisabled      : PropTypes.bool,
  isLoading       : PropTypes.bool,
  handleToggle    : PropTypes.func,
  iconComponent   : PropTypes.func,
}

SelectButton.defaultProps = {
  className       : '',
  style           : {},
  activeOptionText: '',
  isOpened        : false,
  isError         : false,
  isDisabled      : false,
  isLoading       : false,
  handleToggle    : () => {},
  iconComponent   : ()=>{},
}

export default SelectButton
