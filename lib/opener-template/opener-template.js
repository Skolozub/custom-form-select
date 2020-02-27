"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _openerTemplate = require("./opener-template.sc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function OpenerTemplate(_ref) {
  var opener = _ref.opener,
      openable = _ref.openable,
      isPortal = _ref.isPortal,
      className = _ref.className;

  var openableElement = _react["default"].createElement(_openerTemplate.OpenableElement, {
    className: "ui-openable-element"
  }, openable);

  var openableElementPortal = openable && (0, _reactDom.createPortal)(openableElement, document.body);
  return _react["default"].createElement("div", {
    className: className
  }, _react["default"].createElement("div", {
    className: "ui-opener-element"
  }, opener), isPortal ? openableElementPortal : openableElement);
}

var _default = OpenerTemplate;
exports["default"] = _default;
OpenerTemplate.propTypes = {
  opener: _propTypes["default"].object.isRequired,
  openable: _propTypes["default"].object,
  isPortal: _propTypes["default"].bool,
  className: _propTypes["default"].string
};
OpenerTemplate.defaultProps = {
  openable: null,
  isPortal: false,
  className: ''
};