"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactScrollbarsCustom = _interopRequireDefault(require("react-scrollbars-custom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function ScrollWrapper(props) {
  var className = props.className,
      style = props.style,
      children = props.children,
      height = props.height;
  return _react["default"].createElement(_reactScrollbarsCustom["default"], {
    className: className,
    style: _objectSpread({}, style, {
      height: height,
      position: ''
    })
  }, children);
}

ScrollWrapper.propTypes = {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  children: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].func]).isRequired,
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
};
ScrollWrapper.defaultProps = {
  className: '',
  style: {},
  height: 0
};
var _default = ScrollWrapper;
exports["default"] = _default;