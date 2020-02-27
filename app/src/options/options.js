import cn from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import SingleOption from '../single-option/single-option'
import { OptionsWrapper } from './options.sc'

function Options(props) {
  const {
    className,
    style,
    state,
    options,
    isLoading,
    isDisabled,
    name,
    value,
    handleChange,
    handleClick,
    maxVisibleOptions,
    optionHeight,
    optionComponent,
  } = props

  const numberOfOptions = Math.min(maxVisibleOptions, options.length)
  if (isLoading || isDisabled) {
    state.methods.close()
  }

  return (
    <OptionsWrapper
      className={ cn(
        'custom-select__options',
        className,
      ) }
      height={ optionHeight * numberOfOptions }
      style={ style }
    >
      {options.map(option => (
        optionComponent({
          key      : option.id,
          id       : option.id,
          name,
          text     : option.text,
          value    : option.value,
          handleClick,
          handleChange,
          isChecked: option.value === value,
          optionHeight,
        })
      ))}
    </OptionsWrapper>
  )
}

Options.propTypes = {
  className: PropTypes.string,
  style    : PropTypes.object,
  state    : PropTypes.object.isRequired,
  options  : PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string, PropTypes.number,
    ]).isRequired,
    text : PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string, PropTypes.number,
    ]).isRequired,
  })),
  isLoading : PropTypes.bool,
  isDisabled: PropTypes.bool,
  name      : PropTypes.string.isRequired,
  value     : PropTypes.oneOfType([
    PropTypes.string, PropTypes.number,
  ]).isRequired,
  handleChange     : PropTypes.func.isRequired,
  handleClick      : PropTypes.func,
  maxVisibleOptions: PropTypes.number,
  optionHeight     : PropTypes.oneOfType([
    PropTypes.string, PropTypes.number,
  ]),
  optionComponent: PropTypes.func,
}

Options.defaultProps = {
  className        : '',
  style            : {},
  isLoading        : false,
  isDisabled       : false,
  handleClick      : ()=>{},
  maxVisibleOptions: 5,
  optionHeight     : 40,
  options          : [ { id: 'default', text: 'Выберите значение', value: 'default' } ],
  optionComponent  : SingleOption,
}

export default Options
