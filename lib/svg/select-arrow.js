"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function SelectArrow(_ref) {
  var className = _ref.className,
      isOpened = _ref.isOpened,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? '#1D1F20' : _ref$fill;
  var color = isOpened ? '#1aac50' : fill;
  return _react["default"].createElement("svg", {
    className: className,
    fill: "none",
    height: "8",
    viewBox: "0 0 12 8",
    width: "12"
  }, _react["default"].createElement("path", {
    d: "M6.0001 7.79999L11.5427 0.59999H0.457535L6.0001 7.79999Z",
    fill: color
  }));
}

SelectArrow.propTypes = {
  isOpened: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  fill: _propTypes["default"].string
};
SelectArrow.defaultProps = {
  isOpened: false,
  className: '',
  fill: '#1D1F20'
};
var _default = SelectArrow;
exports["default"] = _default;