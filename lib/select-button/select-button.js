"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _selectButtom = require("./select-buttom.sc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function SelectButton(props) {
  var className = props.className,
      style = props.style,
      activeOptionText = props.activeOptionText,
      isOpened = props.isOpened,
      isLoading = props.isLoading,
      isError = props.isError,
      isDisabled = props.isDisabled,
      isValid = props.isValid,
      handleToggle = props.handleToggle,
      _props$iconComponent = props.iconComponent,
      iconComponent = _props$iconComponent === void 0 ? function () {} : _props$iconComponent;
  return _react["default"].createElement(_selectButtom.ButtonWrapper, {
    className: (0, _classnames["default"])('custom-select__open-button', className, {
      isOpened: isOpened
    }, {
      isValid: isValid
    }, {
      isError: isError
    }, {
      isDisabled: isDisabled
    }),
    isDisabled: isDisabled,
    isError: isError,
    isOpened: isOpened,
    isValid: isValid,
    style: style,
    onClick: handleToggle
  }, _react["default"].createElement(_selectButtom.ButtonText, {
    className: "custom-select__button-text"
  }, activeOptionText), _react["default"].createElement(_selectButtom.ButtonIcon, {
    className: "custom-select__button-icon",
    isOpened: isOpened
  }, iconComponent({
    isOpened: isOpened,
    isLoading: isLoading,
    isError: isError,
    isDisabled: isDisabled
  })));
}

SelectButton.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  activeOptionText: _propTypes["default"].string,
  isOpened: _propTypes["default"].bool,
  isValid: _propTypes["default"].bool,
  isError: _propTypes["default"].bool,
  isDisabled: _propTypes["default"].bool,
  isLoading: _propTypes["default"].bool,
  handleToggle: _propTypes["default"].func,
  iconComponent: _propTypes["default"].func
};
SelectButton.defaultProps = {
  className: '',
  style: {},
  activeOptionText: '',
  isOpened: false,
  isValid: false,
  isError: false,
  isDisabled: false,
  isLoading: false,
  handleToggle: function handleToggle() {},
  iconComponent: function iconComponent() {}
};
var _default = SelectButton;
exports["default"] = _default;