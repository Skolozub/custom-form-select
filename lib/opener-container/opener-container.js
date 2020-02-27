"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _openerTemplate = _interopRequireDefault(require("../opener-template/opener-template"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function OpenerContainer(_ref) {
  var opener = _ref.opener,
      openable = _ref.openable,
      isDefOpened = _ref.isDefOpened,
      isPortal = _ref.isPortal,
      className = _ref.className,
      onHandleClose = _ref.onHandleClose;

  /* refs */
  var openerRef = (0, _react.useRef)(null);
  var openableRef = (0, _react.useRef)(null);
  var prevOpened = (0, _react.useRef)(false);
  /* state */

  var _useState = (0, _react.useState)(isDefOpened),
      _useState2 = _slicedToArray(_useState, 2),
      isOpened = _useState2[0],
      setIsOpened = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
      _useState4 = _slicedToArray(_useState3, 2),
      openerCoords = _useState4[0],
      setOpenerCoords = _useState4[1];

  var _useState5 = (0, _react.useState)({}),
      _useState6 = _slicedToArray(_useState5, 2),
      openableCoords = _useState6[0],
      setOpenableCoords = _useState6[1];
  /* coords func's */


  var getElementCoords = function getElementCoords(element) {
    if (!element) {
      return {};
    }

    var coords = element.getBoundingClientRect();
    return {
      top: coords.top,
      bottom: coords.bottom,
      left: coords.left,
      width: coords.width,
      height: coords.height
    };
  };

  var setCoords = function setCoords(ref, setStateCoordsFn, getCoordsFn) {
    var coords = getCoordsFn(ref.current);
    setStateCoordsFn(coords);
  };

  var setElementsCoords = (0, _react.useCallback)(function () {
    setCoords(openerRef, setOpenerCoords, getElementCoords);
    setCoords(openableRef, setOpenableCoords, getElementCoords);
  }, []);
  /* methods func's */

  var openOpenableElement = function openOpenableElement() {
    return !isOpened && setIsOpened(true);
  };

  var closeOpenableElement = function closeOpenableElement() {
    return setTimeout(function () {
      setIsOpened(false);
      setOpenableCoords({});
    }, 0);
  };

  var toggleOpenableElement = function toggleOpenableElement() {
    return setIsOpened(!isOpened);
  };
  /* useEffect hooks */


  (0, _react.useEffect)(function () {
    if (isOpened) {
      setElementsCoords();
    }
  }, [isOpened, setElementsCoords]);
  (0, _react.useEffect)(function () {
    if (!isOpened && prevOpened.current !== isOpened) {
      onHandleClose();
    }

    prevOpened.current = isOpened;
  }, [isOpened, onHandleClose]);
  (0, _react.useEffect)(function () {
    var closeOnClickOutsideComponent = function closeOnClickOutsideComponent(event) {
      var openableElement = openableRef.current;
      var openerElement = openerRef.current;
      var isClickToOpenerElement = openerElement && openerElement.contains(event.target);
      var isClickToOpenableElement = openableElement && openableElement.contains(event.target);

      if (isClickToOpenerElement || isClickToOpenableElement) {
        return null;
      }

      setIsOpened(false);
    };

    window.addEventListener('click', closeOnClickOutsideComponent, true);
    return function () {
      return window.removeEventListener('click', closeOnClickOutsideComponent, true);
    };
  }, []);
  (0, _react.useEffect)(function () {
    if (isOpened) {
      window.addEventListener('scroll', setElementsCoords, true);
      return function () {
        return window.removeEventListener('scroll', setElementsCoords, true);
      };
    }
  }, [isOpened, setElementsCoords]);
  (0, _react.useEffect)(function () {
    if (isOpened) {
      window.addEventListener('resize', setElementsCoords, true);
      return function () {
        return window.removeEventListener('resize', setElementsCoords, true);
      };
    }
  }, [isOpened, setElementsCoords]);
  var state = {
    isOpened: isOpened,
    openerCoords: openerCoords,
    openableCoords: openableCoords,
    refs: {
      opener: openerRef,
      openable: openableRef
    },
    methods: {
      open: openOpenableElement,
      close: closeOpenableElement,
      toggle: toggleOpenableElement
    }
  };
  var hasOpenerComponent = Boolean(opener);
  var isOpenedOpenerComponent = openable && isOpened || isDefOpened;
  return _react["default"].createElement(_openerTemplate["default"], {
    className: className,
    isPortal: isPortal,
    openable: isOpenedOpenerComponent ? openable(state) : undefined,
    opener: hasOpenerComponent && opener(state)
  });
}

var _default = OpenerContainer;
exports["default"] = _default;
OpenerContainer.propTypes = {
  opener: _propTypes["default"].func.isRequired,
  openable: _propTypes["default"].func.isRequired,
  isDefOpened: _propTypes["default"].bool,
  isPortal: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  onHandleClose: _propTypes["default"].func
};
OpenerContainer.defaultProps = {
  isDefOpened: false,
  isPortal: false,
  className: '',
  onHandleClose: function onHandleClose() {}
};