"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _filterInvalidDomProps = _interopRequireDefault(require("filter-invalid-dom-props"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function PseudoBtn(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, ["children", "onClick"]);

  function handleKeyPress(event) {
    if (event.keyCode === 13) {
      onClick(event);
    }
  }

  return _react["default"].createElement("div", _extends({}, (0, _filterInvalidDomProps["default"])(props), {
    "data-attr": "pseudo-btn",
    role: "button",
    tabIndex: 0,
    onClick: onClick,
    onKeyPress: handleKeyPress
  }), children);
}

PseudoBtn.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].func]).isRequired,
  onClick: _propTypes["default"].func
};
PseudoBtn.defaultProps = {
  onClick: function onClick() {}
};
var _default = PseudoBtn;
exports["default"] = _default;