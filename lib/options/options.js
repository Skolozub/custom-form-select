"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _singleOption = _interopRequireDefault(require("../single-option/single-option"));

var _options = require("./options.sc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Options(props) {
  var className = props.className,
      style = props.style,
      state = props.state,
      options = props.options,
      isLoading = props.isLoading,
      isDisabled = props.isDisabled,
      name = props.name,
      value = props.value,
      handleChange = props.handleChange,
      handleClick = props.handleClick,
      maxVisibleOptions = props.maxVisibleOptions,
      optionHeight = props.optionHeight,
      optionComponent = props.optionComponent;
  var numberOfOptions = Math.min(maxVisibleOptions, options.length);

  if (isLoading || isDisabled) {
    state.methods.close();
  }

  return _react["default"].createElement(_options.OptionsWrapper, {
    className: (0, _classnames["default"])('custom-select__options', className),
    height: optionHeight * numberOfOptions,
    style: style
  }, options.map(function (option) {
    return optionComponent({
      key: option.id,
      id: option.id,
      name: name,
      text: option.text,
      value: option.value,
      handleClick: handleClick,
      handleChange: handleChange,
      isChecked: option.value === value,
      optionHeight: optionHeight
    });
  }));
}

Options.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  state: _propTypes["default"].object.isRequired,
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]).isRequired,
    text: _propTypes["default"].string.isRequired,
    value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]).isRequired
  })),
  isLoading: _propTypes["default"].bool,
  isDisabled: _propTypes["default"].bool,
  name: _propTypes["default"].string.isRequired,
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]).isRequired,
  handleChange: _propTypes["default"].func.isRequired,
  handleClick: _propTypes["default"].func,
  maxVisibleOptions: _propTypes["default"].number,
  optionHeight: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  optionComponent: _propTypes["default"].func
};
Options.defaultProps = {
  className: '',
  style: {},
  isLoading: false,
  isDisabled: false,
  handleClick: function handleClick() {},
  maxVisibleOptions: 5,
  optionHeight: 40,
  options: [{
    id: 'default',
    text: 'Выберите значение',
    value: 'default'
  }],
  optionComponent: _singleOption["default"]
};
var _default = Options;
exports["default"] = _default;