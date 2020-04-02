"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _options = _interopRequireDefault(require("../options/options"));

var _selectButton = _interopRequireDefault(require("../select-button/select-button"));

var _singleOption = _interopRequireDefault(require("../single-option/single-option"));

var _selectArrow = _interopRequireDefault(require("../svg/select-arrow"));

var _customFormSelect = require("./custom-form-select.sc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function CustomFormSelect(props) {
  var className = props.className,
      style = props.style,
      options = props.options,
      name = props.name,
      value = props.value,
      onChange = props.onChange,
      onBlur = props.onBlur,
      isOpened = props.isOpened,
      isValid = props.isValid,
      isLoading = props.isLoading,
      isError = props.isError,
      isDisabled = props.isDisabled,
      maxVisibleOptions = props.maxVisibleOptions,
      optionHeight = props.optionHeight,
      optionsPosition = props.optionsPosition,
      buttonComponent = props.buttonComponent,
      optionsComponent = props.optionsComponent,
      optionComponent = props.optionComponent;
  var checkedOption = options.find(function (option) {
    return option.value === value;
  }) || {
    text: ''
  };

  function opener(state) {
    return _react["default"].createElement("div", {
      ref: state.refs.opener,
      className: "custom-select__opener"
    }, buttonComponent({
      activeOptionText: checkedOption.text,
      isOpened: state.isOpened,
      isLoading: isLoading,
      isValid: isValid,
      isError: isError,
      isDisabled: isDisabled,
      handleOpen: state.methods.open,
      handleClose: state.methods.close,
      handleToggle: state.methods.toggle,
      iconComponent: _selectArrow["default"]
    }));
  }

  function openable(state) {
    return _react["default"].createElement("div", {
      ref: state.refs.openable,
      className: "custom-select__openable",
      style: {
        width: state.openerCoords.width,
        position: optionsPosition,
        top: optionsPosition === 'fixed' ? state.openerCoords.bottom : 0,
        left: optionsPosition === 'fixed' ? state.openerCoords.left : 0,
        zIndex: 999
      }
    }, optionsComponent({
      state: state,
      name: name,
      value: value,
      options: options,
      isLoading: isLoading,
      isValid: isValid,
      isError: isError,
      isDisabled: isDisabled,
      handleChange: onChange,
      handleClick: state.methods.close,
      maxVisibleOptions: maxVisibleOptions,
      optionHeight: optionHeight,
      optionComponent: optionComponent
    }));
  }

  return _react["default"].createElement(_customFormSelect.Select, {
    className: (0, _classnames["default"])('custom-select', className),
    isPortal: optionsPosition === 'fixed',
    openable: openable,
    opened: isOpened,
    opener: opener,
    style: style,
    onHandleClose: onBlur
  });
}

CustomFormSelect.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
    text: _propTypes["default"].string,
    value: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string])
  })),
  name: _propTypes["default"].string.isRequired,
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]).isRequired,
  onChange: _propTypes["default"].func.isRequired,
  onBlur: _propTypes["default"].func,
  isLoading: _propTypes["default"].bool,
  isValid: _propTypes["default"].bool,
  isError: _propTypes["default"].bool,
  isOpened: _propTypes["default"].bool,
  isDisabled: _propTypes["default"].bool,
  maxVisibleOptions: _propTypes["default"].number,
  optionHeight: _propTypes["default"].number,
  optionsPosition: _propTypes["default"].oneOf(['relative', 'absolute', 'fixed']),
  buttonComponent: _propTypes["default"].func,
  optionsComponent: _propTypes["default"].func,
  optionComponent: _propTypes["default"].func
};
CustomFormSelect.defaultProps = {
  options: [{
    id: 'default',
    text: 'Выберите значение',
    value: 'default'
  }],
  className: '',
  style: {},
  onBlur: function onBlur() {},
  isLoading: false,
  isValid: false,
  isError: false,
  isOpened: false,
  isDisabled: false,
  maxVisibleOptions: 5,
  optionHeight: 40,
  optionsPosition: 'absolute',
  buttonComponent: _selectButton["default"],
  optionsComponent: _options["default"],
  optionComponent: _singleOption["default"]
};
var _default = CustomFormSelect;
exports["default"] = _default;