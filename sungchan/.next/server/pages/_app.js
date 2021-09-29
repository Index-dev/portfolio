(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./modules/actionType.tsx":
/*!********************************!*\
  !*** ./modules/actionType.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setIsEnd": function() { return /* binding */ setIsEnd; },
/* harmony export */   "setCurrentComponentNo": function() { return /* binding */ setCurrentComponentNo; },
/* harmony export */   "setIsPageChanging": function() { return /* binding */ setIsPageChanging; },
/* harmony export */   "setInnerWidth": function() { return /* binding */ setInnerWidth; },
/* harmony export */   "setIndexSubContainerTranslateX": function() { return /* binding */ setIndexSubContainerTranslateX; }
/* harmony export */ });
// init
const setIsEnd = 'setIsEnd'; // base

const setCurrentComponentNo = 'setCurrentComponentNo';
const setIsPageChanging = 'setIsPageChanging';
const setInnerWidth = 'setInnerWidth';
const setIndexSubContainerTranslateX = 'setIndexSubContainerTranslateX';

/***/ }),

/***/ "./modules/baseReducer.tsx":
/*!*********************************!*\
  !*** ./modules/baseReducer.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionType */ "./modules/actionType.tsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const baseState = {
  currentComponentNo: 0,
  titleArray: ['Cover', 'Intro', 'Why It', 'Skills', 'Career', 'Projects', 'More'],
  backgroundColorArray: ['#E3D0B9', '#E1BC91', '#C19277', '#62959C', '#C19277', '#E1BC91', '#E3D0B9'],
  isPageChanging: false,
  innerWidth: 0,
  indexSubContainerTranslateX: 0
}; // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

const baseReducer = (state = baseState, action) => {
  switch (action.type) {
    case _actionType__WEBPACK_IMPORTED_MODULE_0__.setCurrentComponentNo:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          currentComponentNo: action.payload
        });
      }

    case _actionType__WEBPACK_IMPORTED_MODULE_0__.setIsPageChanging:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isPageChanging: action.payload
        });
      }

    case _actionType__WEBPACK_IMPORTED_MODULE_0__.setInnerWidth:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          innerWidth: action.payload
        });
      }

    case _actionType__WEBPACK_IMPORTED_MODULE_0__.setIndexSubContainerTranslateX:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          indexSubContainerTranslateX: action.payload
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (baseReducer);

/***/ }),

/***/ "./modules/indexReducer.tsx":
/*!**********************************!*\
  !*** ./modules/indexReducer.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _initReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initReducer */ "./modules/initReducer.tsx");
/* harmony import */ var _baseReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./baseReducer */ "./modules/baseReducer.tsx");



const indexReducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  initReducer: _initReducer__WEBPACK_IMPORTED_MODULE_1__.default,
  baseReducer: _baseReducer__WEBPACK_IMPORTED_MODULE_2__.default
});
/* harmony default export */ __webpack_exports__["default"] = (indexReducer);

/***/ }),

/***/ "./modules/initReducer.tsx":
/*!*********************************!*\
  !*** ./modules/initReducer.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionType */ "./modules/actionType.tsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initState = {
  isEnd: false
}; // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

const initReducer = (state = initState, action) => {
  switch (action.type) {
    case _actionType__WEBPACK_IMPORTED_MODULE_0__.setIsEnd:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isEnd: action.payload
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (initReducer);

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_indexReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/indexReducer */ "./modules/indexReducer.tsx");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const store = (0,redux__WEBPACK_IMPORTED_MODULE_2__.createStore)(_modules_indexReducer__WEBPACK_IMPORTED_MODULE_3__.default, (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4__.composeWithDevTools)());

const App = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "\uAE40\uC131\uCC2C\uC758 Portfolio"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        type: "image/x-icon",
        href: "/image/favicon.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        type: "text/css",
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_5__.Provider, {
      store: store,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-devtools-extension");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vLi9tb2R1bGVzL2FjdGlvblR5cGUudHN4Iiwid2VicGFjazovL3N1bmdjaGFuX3BvcnRmb2xpby8uL21vZHVsZXMvYmFzZVJlZHVjZXIudHN4Iiwid2VicGFjazovL3N1bmdjaGFuX3BvcnRmb2xpby8uL21vZHVsZXMvaW5kZXhSZWR1Y2VyLnRzeCIsIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vLi9tb2R1bGVzL2luaXRSZWR1Y2VyLnRzeCIsIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3N1bmdjaGFuX3BvcnRmb2xpby9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiJdLCJuYW1lcyI6WyJzZXRJc0VuZCIsInNldEN1cnJlbnRDb21wb25lbnRObyIsInNldElzUGFnZUNoYW5naW5nIiwic2V0SW5uZXJXaWR0aCIsInNldEluZGV4U3ViQ29udGFpbmVyVHJhbnNsYXRlWCIsImJhc2VTdGF0ZSIsImN1cnJlbnRDb21wb25lbnRObyIsInRpdGxlQXJyYXkiLCJiYWNrZ3JvdW5kQ29sb3JBcnJheSIsImlzUGFnZUNoYW5naW5nIiwiaW5uZXJXaWR0aCIsImluZGV4U3ViQ29udGFpbmVyVHJhbnNsYXRlWCIsImJhc2VSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsImluZGV4UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImluaXRSZWR1Y2VyIiwiaW5pdFN0YXRlIiwiaXNFbmQiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDTyxNQUFNQSxRQUFRLEdBQUcsVUFBakIsQyxDQUVQOztBQUNPLE1BQU1DLHFCQUFxQixHQUFHLHVCQUE5QjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLE1BQU1DLGFBQWEsR0FBRyxlQUF0QjtBQUNBLE1BQU1DLDhCQUE4QixHQUFHLGdDQUF2QyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQVA7QUFXQSxNQUFNQyxTQUFxQixHQUFHO0FBQzFCQyxvQkFBa0IsRUFBRSxDQURNO0FBRTFCQyxZQUFVLEVBQUUsQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixRQUFuQixFQUE2QixRQUE3QixFQUF1QyxRQUF2QyxFQUFpRCxVQUFqRCxFQUE2RCxNQUE3RCxDQUZjO0FBRzFCQyxzQkFBb0IsRUFBRSxDQUFDLFNBQUQsRUFBWSxTQUFaLEVBQXVCLFNBQXZCLEVBQWtDLFNBQWxDLEVBQTZDLFNBQTdDLEVBQXdELFNBQXhELEVBQW1FLFNBQW5FLENBSEk7QUFJMUJDLGdCQUFjLEVBQUUsS0FKVTtBQUsxQkMsWUFBVSxFQUFFLENBTGM7QUFNMUJDLDZCQUEyQixFQUFFO0FBTkgsQ0FBOUIsQyxDQVNBOztBQUNBLE1BQU1DLFdBQVcsR0FBRyxDQUFDQyxLQUFpQixHQUFHUixTQUFyQixFQUFnQ1MsTUFBaEMsS0FBb0Q7QUFDcEUsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0ksU0FBS2QsOERBQUw7QUFBNEI7QUFDeEIsK0NBQ09ZLEtBRFA7QUFFSVAsNEJBQWtCLEVBQUdRLE1BQUQsQ0FBeUNFO0FBRmpFO0FBSUg7O0FBRUQsU0FBS2QsMERBQUw7QUFBd0I7QUFDcEIsK0NBQ09XLEtBRFA7QUFFSUosd0JBQWMsRUFBR0ssTUFBRCxDQUFxQ0U7QUFGekQ7QUFJSDs7QUFFRCxTQUFLYixzREFBTDtBQUFvQjtBQUNoQiwrQ0FDT1UsS0FEUDtBQUVJSCxvQkFBVSxFQUFHSSxNQUFELENBQWlDRTtBQUZqRDtBQUlIOztBQUVELFNBQUtaLHVFQUFMO0FBQXFDO0FBQ2pDLCtDQUNPUyxLQURQO0FBRUlGLHFDQUEyQixFQUFHRyxNQUFELENBQWtERTtBQUZuRjtBQUlIOztBQUVEO0FBQVM7QUFDTCxpQ0FDT0gsS0FEUDtBQUdIO0FBakNMO0FBbUNILENBcENEOztBQXNDQSwrREFBZUQsV0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEVBO0FBQ0E7QUFDQTtBQU9BLE1BQU1LLFlBQVksR0FBR0Msc0RBQWUsQ0FBQztBQUNqQ0MsYUFEaUM7QUFFakNQLGFBQVdBO0FBRnNCLENBQUQsQ0FBcEM7QUFLQSwrREFBZUssWUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFNQSxNQUFNRyxTQUFxQixHQUFHO0FBQzFCQyxPQUFLLEVBQUU7QUFEbUIsQ0FBOUIsQyxDQUlBOztBQUNBLE1BQU1GLFdBQVcsR0FBRyxDQUFDTixLQUFpQixHQUFHTyxTQUFyQixFQUFnQ04sTUFBaEMsS0FBb0Q7QUFDcEUsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0ksU0FBS2YsaURBQUw7QUFBZTtBQUNYLCtDQUNPYSxLQURQO0FBRUlRLGVBQUssRUFBR1AsTUFBRCxDQUE0QkU7QUFGdkM7QUFJSDs7QUFFRDtBQUFTO0FBQ0wsaUNBQ09ILEtBRFA7QUFHSDtBQVpMO0FBY0gsQ0FmRDs7QUFpQkEsK0RBQWVNLFdBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUcsS0FBSyxHQUFHQyxrREFBVyxDQUFDTiwwREFBRCxFQUFlTyw2RUFBbUIsRUFBbEMsQ0FBekI7O0FBRUEsTUFBTUMsR0FBRyxHQUFHLENBQUM7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQUQsS0FBcUQ7QUFDN0Qsc0JBQ0k7QUFBQSw0QkFDSSw4REFBQyxrREFBRDtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUMsY0FBdEI7QUFBcUMsWUFBSSxFQUFDO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFHSTtBQUNJLFlBQUksRUFBQyxVQURUO0FBRUksV0FBRyxFQUFDLFlBRlI7QUFHSSxZQUFJLEVBQUM7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhKLGVBUUk7QUFDSSxZQUFJLEVBQUMsVUFEVDtBQUVJLGVBQU8sRUFBQztBQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBY0ksOERBQUMsaURBQUQ7QUFBVSxXQUFLLEVBQUVMLEtBQWpCO0FBQUEsNkJBQ0ksOERBQUMsU0FBRCxvQkFBZUssU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFkSjtBQUFBLGtCQURKO0FBb0JILENBckJEOztBQXVCQSwrREFBZUYsR0FBZixFOzs7Ozs7Ozs7OztBQ2pDQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzRCIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW5pdFxyXG5leHBvcnQgY29uc3Qgc2V0SXNFbmQgPSAnc2V0SXNFbmQnO1xyXG5cclxuLy8gYmFzZVxyXG5leHBvcnQgY29uc3Qgc2V0Q3VycmVudENvbXBvbmVudE5vID0gJ3NldEN1cnJlbnRDb21wb25lbnRObyc7XHJcbmV4cG9ydCBjb25zdCBzZXRJc1BhZ2VDaGFuZ2luZyA9ICdzZXRJc1BhZ2VDaGFuZ2luZyc7XHJcbmV4cG9ydCBjb25zdCBzZXRJbm5lcldpZHRoID0gJ3NldElubmVyV2lkdGgnO1xyXG5leHBvcnQgY29uc3Qgc2V0SW5kZXhTdWJDb250YWluZXJUcmFuc2xhdGVYID0gJ3NldEluZGV4U3ViQ29udGFpbmVyVHJhbnNsYXRlWCc7XHJcbiIsImltcG9ydCB7XHJcbiAgICBJc2V0Q3VycmVudENvbXBvbmVudE5vQWN0aW9uLFxyXG4gICAgSXNldEluZGV4U3ViQ29udGFpbmVyVHJhbnNsYXRlWEFjdGlvbixcclxuICAgIElzZXRJbm5lcldpZHRoQWN0aW9uLFxyXG4gICAgSXNldElzUGFnZUNoYW5naW5nQWN0aW9uLFxyXG59IGZyb20gJy4vYWN0aW9uSW50ZXJmYWNlJztcclxuaW1wb3J0IHsgYWN0aW9ucyB9IGZyb20gJy4vYWN0aW9ucyc7XHJcbmltcG9ydCB7IHNldEN1cnJlbnRDb21wb25lbnRObywgc2V0SW5kZXhTdWJDb250YWluZXJUcmFuc2xhdGVYLCBzZXRJbm5lcldpZHRoLCBzZXRJc1BhZ2VDaGFuZ2luZyB9IGZyb20gJy4vYWN0aW9uVHlwZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEliYXNlU3RhdGUge1xyXG4gICAgY3VycmVudENvbXBvbmVudE5vOiBudW1iZXI7XHJcbiAgICB0aXRsZUFycmF5OiBzdHJpbmdbXTtcclxuICAgIGJhY2tncm91bmRDb2xvckFycmF5OiBzdHJpbmdbXTtcclxuICAgIGlzUGFnZUNoYW5naW5nOiBib29sZWFuO1xyXG4gICAgaW5uZXJXaWR0aDogbnVtYmVyO1xyXG4gICAgaW5kZXhTdWJDb250YWluZXJUcmFuc2xhdGVYOiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IGJhc2VTdGF0ZTogSWJhc2VTdGF0ZSA9IHtcclxuICAgIGN1cnJlbnRDb21wb25lbnRObzogMCxcclxuICAgIHRpdGxlQXJyYXk6IFsnQ292ZXInLCAnSW50cm8nLCAnV2h5IEl0JywgJ1NraWxscycsICdDYXJlZXInLCAnUHJvamVjdHMnLCAnTW9yZSddLFxyXG4gICAgYmFja2dyb3VuZENvbG9yQXJyYXk6IFsnI0UzRDBCOScsICcjRTFCQzkxJywgJyNDMTkyNzcnLCAnIzYyOTU5QycsICcjQzE5Mjc3JywgJyNFMUJDOTEnLCAnI0UzRDBCOSddLFxyXG4gICAgaXNQYWdlQ2hhbmdpbmc6IGZhbHNlLFxyXG4gICAgaW5uZXJXaWR0aDogMCxcclxuICAgIGluZGV4U3ViQ29udGFpbmVyVHJhbnNsYXRlWDogMCxcclxufTtcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtbW9kdWxlLWJvdW5kYXJ5LXR5cGVzXHJcbmNvbnN0IGJhc2VSZWR1Y2VyID0gKHN0YXRlOiBJYmFzZVN0YXRlID0gYmFzZVN0YXRlLCBhY3Rpb246IGFjdGlvbnMpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIHNldEN1cnJlbnRDb21wb25lbnRObzoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Q29tcG9uZW50Tm86IChhY3Rpb24gYXMgSXNldEN1cnJlbnRDb21wb25lbnROb0FjdGlvbikucGF5bG9hZCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhc2Ugc2V0SXNQYWdlQ2hhbmdpbmc6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaXNQYWdlQ2hhbmdpbmc6IChhY3Rpb24gYXMgSXNldElzUGFnZUNoYW5naW5nQWN0aW9uKS5wYXlsb2FkLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBzZXRJbm5lcldpZHRoOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlubmVyV2lkdGg6IChhY3Rpb24gYXMgSXNldElubmVyV2lkdGhBY3Rpb24pLnBheWxvYWQsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIHNldEluZGV4U3ViQ29udGFpbmVyVHJhbnNsYXRlWDoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpbmRleFN1YkNvbnRhaW5lclRyYW5zbGF0ZVg6IChhY3Rpb24gYXMgSXNldEluZGV4U3ViQ29udGFpbmVyVHJhbnNsYXRlWEFjdGlvbikucGF5bG9hZCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJhc2VSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCBpbml0UmVkdWNlciwgeyBJaW5pdFN0YXRlIH0gZnJvbSAnLi9pbml0UmVkdWNlcic7XHJcbmltcG9ydCBiYXNlUmVkdWNlciwgeyBJYmFzZVN0YXRlIH0gZnJvbSAnLi9iYXNlUmVkdWNlcic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGluZGV4U3RhdGUge1xyXG4gICAgaW5pdFJlZHVjZXI6IElpbml0U3RhdGU7XHJcbiAgICBiYXNlUmVkdWNlcjogSWJhc2VTdGF0ZTtcclxufVxyXG5cclxuY29uc3QgaW5kZXhSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgIGluaXRSZWR1Y2VyLFxyXG4gICAgYmFzZVJlZHVjZXIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXhSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBJc2V0SXNFbmRBY3Rpb24gfSBmcm9tICcuL2FjdGlvbkludGVyZmFjZSc7XHJcbmltcG9ydCB7IGFjdGlvbnMgfSBmcm9tICcuL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBzZXRJc0VuZCB9IGZyb20gJy4vYWN0aW9uVHlwZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElpbml0U3RhdGUge1xyXG4gICAgaXNFbmQ6IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IGluaXRTdGF0ZTogSWluaXRTdGF0ZSA9IHtcclxuICAgIGlzRW5kOiBmYWxzZSxcclxufTtcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtbW9kdWxlLWJvdW5kYXJ5LXR5cGVzXHJcbmNvbnN0IGluaXRSZWR1Y2VyID0gKHN0YXRlOiBJaW5pdFN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb246IGFjdGlvbnMpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIHNldElzRW5kOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzRW5kOiAoYWN0aW9uIGFzIElzZXRJc0VuZEFjdGlvbikucGF5bG9hZCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXRSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IGluZGV4UmVkdWNlciBmcm9tICcuLi9tb2R1bGVzL2luZGV4UmVkdWNlcic7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoaW5kZXhSZWR1Y2VyLCBjb21wb3NlV2l0aERldlRvb2xzKCkpO1xyXG5cclxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPuq5gOyEseywrOydmCBQb3J0Zm9saW88L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS94LWljb25cIiBocmVmPVwiL2ltYWdlL2Zhdmljb24ucG5nXCI+PC9saW5rPlxyXG4gICAgICAgICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCwgbWF4aW11bS1zY2FsZT0xLCBtaW5pbXVtLXNjYWxlPTFcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7OyJdLCJzb3VyY2VSb290IjoiIn0=