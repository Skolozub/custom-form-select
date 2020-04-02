import cn from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import Options from '../options/options'
import SelectButton from '../select-button/select-button'
import SingleOption from '../single-option/single-option'
import SelectArrow from '../svg/select-arrow';
import { Select } from './custom-form-select.sc'

function CustomFormSelect(props) {
  const {
    className,
    style,
    options,
    name,
    value,
    onChange,
    onBlur,
    isOpened,
    isValid,
    isLoading,
    isError,
    isDisabled,
    maxVisibleOptions,
    optionHeight,
    optionsPosition,
    buttonComponent,
    optionsComponent,
    optionComponent,
  } = props
  const checkedOption = options.find(option => option.value === value) || { text: '' }

  function opener(state) {
    return (
      <div ref={ state.refs.opener } className="custom-select__opener">
        {buttonComponent({
          activeOptionText: checkedOption.text,
          isOpened        : state.isOpened,
          isLoading,
          isValid,
          isError,
          isDisabled,
          handleOpen      : state.methods.open,
          handleClose     : state.methods.close,
          handleToggle    : state.methods.toggle,
          iconComponent   : SelectArrow,
        })}
      </div>
    )
  }

  function openable(state) {
    return (
      <div
        ref={ state.refs.openable }
        className="custom-select__openable"
        style={ {
          width   : state.openerCoords.width,
          position: optionsPosition,
          top     : optionsPosition === 'fixed' ? state.openerCoords.bottom : 0,
          left    : optionsPosition === 'fixed' ? state.openerCoords.left : 0,
          zIndex  : 999,
        } }
      >
        {optionsComponent({
          state,
          name,
          value,
          options,
          isLoading,
          isValid,
          isError,
          isDisabled,
          handleChange: onChange,
          handleClick : state.methods.close,
          maxVisibleOptions,
          optionHeight,
          optionComponent,
        })}
      </div>
    )
  }

  return (
    <Select
      className={ cn('custom-select', className) }
      isPortal={ optionsPosition === 'fixed' }
      openable={ openable }
      opened={ isOpened }
      opener={ opener }
      style={ style }
      onHandleClose={ onBlur }
    />
  )
}

CustomFormSelect.propTypes = {
  className: PropTypes.string,
  style    : PropTypes.object,
  options  : PropTypes.arrayOf(PropTypes.shape({
    id   : PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
    text : PropTypes.string,
    value: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  })),
  name : PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string, PropTypes.number,
  ]).isRequired,
  onChange         : PropTypes.func.isRequired,
  onBlur           : PropTypes.func,
  isLoading        : PropTypes.bool,
  isValid          : PropTypes.bool,
  isError          : PropTypes.bool,
  isOpened         : PropTypes.bool,
  isDisabled       : PropTypes.bool,
  maxVisibleOptions: PropTypes.number,
  optionHeight     : PropTypes.number,
  optionsPosition  : PropTypes.oneOf([ 'relative', 'absolute', 'fixed' ]),
  buttonComponent  : PropTypes.func,
  optionsComponent : PropTypes.func,
  optionComponent  : PropTypes.func,
}

CustomFormSelect.defaultProps = {
  options          : [ { id: 'default', text: 'Выберите значение', value: 'default' } ],
  className        : '',
  style            : {},
  onBlur           : ()=>{},
  isLoading        : false,
  isValid          : false,
  isError          : false,
  isOpened         : false,
  isDisabled       : false,
  maxVisibleOptions: 5,
  optionHeight     : 40,
  optionsPosition  : 'absolute',
  buttonComponent  : SelectButton,
  optionsComponent : Options,
  optionComponent  : SingleOption,
}

export default CustomFormSelect
