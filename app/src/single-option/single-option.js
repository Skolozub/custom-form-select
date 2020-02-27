import PropTypes from 'prop-types'
import React from 'react'

import { Option, OptionWrapper } from './single-option.sc'

function SingleOption(props) {
  const {
    key,
    className,
    style,
    id,
    name,
    text,
    value,
    isChecked,
    optionHeight,
    handleClick,
    handleChange,
  } = props

  function changeValueHandler(event) {
    handleChange(event.currentTarget.value)
  }

  return (
    <OptionWrapper key={ key } className={ className } style={ style } onClick={ handleClick }>
      <Option
        className="custom-select__option"
        height={ optionHeight }
        htmlFor={ id }
        isChecked={ isChecked }
      >
        <input
          checked={ isChecked }
          id={ id }
          name={ name }
          type="radio"
          value={ value }
          onChange={ changeValueHandler }
        />
        {text}
      </Option>
    </OptionWrapper>
  )
}

SingleOption.propTypes = {
  key: PropTypes.oneOfType([
    PropTypes.string, PropTypes.number,
  ]),
  className: PropTypes.string,
  style    : PropTypes.object,
  id       : PropTypes.oneOfType([
    PropTypes.number, PropTypes.string,
  ]).isRequired,
  name : PropTypes.string.isRequired,
  text : PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number, PropTypes.string,
  ]).isRequired,
  isChecked   : PropTypes.bool,
  optionHeight: PropTypes.oneOfType([
    PropTypes.number, PropTypes.string,
  ]),
  handleClick : PropTypes.func,
  handleChange: PropTypes.func,
}

SingleOption.defaultProps = {
  key         : null,
  className   : '',
  style       : {},
  isChecked   : false,
  optionHeight: 40,
  handleClick : () => {},
  handleChange: () => {},
}

export default SingleOption
