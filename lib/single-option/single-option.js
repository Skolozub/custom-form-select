"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _singleOption = require("./single-option.sc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function SingleOption(props) {
  var key = props.key,
      className = props.className,
      style = props.style,
      id = props.id,
      name = props.name,
      text = props.text,
      value = props.value,
      isChecked = props.isChecked,
      optionHeight = props.optionHeight,
      handleClick = props.handleClick,
      handleChange = props.handleChange;

  function changeValueHandler(event) {
    handleChange(event.currentTarget.value);
  }

  return _react["default"].createElement(_singleOption.OptionWrapper, {
    key: key,
    className: className,
    style: style,
    onClick: handleClick
  }, _react["default"].createElement(_singleOption.Option, {
    className: "custom-select__option",
    height: optionHeight,
    htmlFor: id,
    isChecked: isChecked
  }, _react["default"].createElement("input", {
    checked: isChecked,
    id: id,
    name: name,
    type: "radio",
    value: value,
    onChange: changeValueHandler
  }), text));
}

SingleOption.propTypes = {
  key: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  id: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]).isRequired,
  name: _propTypes["default"].string.isRequired,
  text: _propTypes["default"].string.isRequired,
  value: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]).isRequired,
  isChecked: _propTypes["default"].bool,
  optionHeight: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  handleClick: _propTypes["default"].func,
  handleChange: _propTypes["default"].func
};
SingleOption.defaultProps = {
  key: null,
  className: '',
  style: {},
  isChecked: false,
  optionHeight: 40,
  handleClick: function handleClick() {},
  handleChange: function handleChange() {}
};
var _default = SingleOption;
exports["default"] = _default;