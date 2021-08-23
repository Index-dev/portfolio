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

var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const store = (0,redux__WEBPACK_IMPORTED_MODULE_2__.createStore)(_modules_indexReducer__WEBPACK_IMPORTED_MODULE_3__.default, (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4__.composeWithDevTools)());

const App = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_5__.Provider, {
    store: store,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (App);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vLi9tb2R1bGVzL2FjdGlvblR5cGUudHN4Iiwid2VicGFjazovL3N1bmdjaGFuX3BvcnRmb2xpby8uL21vZHVsZXMvYmFzZVJlZHVjZXIudHN4Iiwid2VicGFjazovL3N1bmdjaGFuX3BvcnRmb2xpby8uL21vZHVsZXMvaW5kZXhSZWR1Y2VyLnRzeCIsIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vLi9tb2R1bGVzL2luaXRSZWR1Y2VyLnRzeCIsIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3N1bmdjaGFuX3BvcnRmb2xpby9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiJdLCJuYW1lcyI6WyJzZXRJc0VuZCIsInNldEN1cnJlbnRDb21wb25lbnRObyIsInNldElzUGFnZUNoYW5naW5nIiwic2V0SW5uZXJXaWR0aCIsInNldEluZGV4U3ViQ29udGFpbmVyVHJhbnNsYXRlWCIsImJhc2VTdGF0ZSIsImN1cnJlbnRDb21wb25lbnRObyIsInRpdGxlQXJyYXkiLCJiYWNrZ3JvdW5kQ29sb3JBcnJheSIsImlzUGFnZUNoYW5naW5nIiwiaW5uZXJXaWR0aCIsImluZGV4U3ViQ29udGFpbmVyVHJhbnNsYXRlWCIsImJhc2VSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsImluZGV4UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImluaXRSZWR1Y2VyIiwiaW5pdFN0YXRlIiwiaXNFbmQiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDTyxNQUFNQSxRQUFRLEdBQUcsVUFBakIsQyxDQUVQOztBQUNPLE1BQU1DLHFCQUFxQixHQUFHLHVCQUE5QjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLE1BQU1DLGFBQWEsR0FBRyxlQUF0QjtBQUNBLE1BQU1DLDhCQUE4QixHQUFHLGdDQUF2QyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQVA7QUFXQSxNQUFNQyxTQUFxQixHQUFHO0FBQzFCQyxvQkFBa0IsRUFBRSxDQURNO0FBRTFCQyxZQUFVLEVBQUUsQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixRQUFuQixFQUE2QixRQUE3QixFQUF1QyxRQUF2QyxFQUFpRCxVQUFqRCxFQUE2RCxNQUE3RCxDQUZjO0FBRzFCQyxzQkFBb0IsRUFBRSxDQUFDLFNBQUQsRUFBWSxTQUFaLEVBQXVCLFNBQXZCLEVBQWtDLFNBQWxDLEVBQTZDLFNBQTdDLEVBQXdELFNBQXhELEVBQW1FLFNBQW5FLENBSEk7QUFJMUJDLGdCQUFjLEVBQUUsS0FKVTtBQUsxQkMsWUFBVSxFQUFFLENBTGM7QUFNMUJDLDZCQUEyQixFQUFFO0FBTkgsQ0FBOUIsQyxDQVNBOztBQUNBLE1BQU1DLFdBQVcsR0FBRyxDQUFDQyxLQUFpQixHQUFHUixTQUFyQixFQUFnQ1MsTUFBaEMsS0FBb0Q7QUFDcEUsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0ksU0FBS2QsOERBQUw7QUFBNEI7QUFDeEIsK0NBQ09ZLEtBRFA7QUFFSVAsNEJBQWtCLEVBQUdRLE1BQUQsQ0FBeUNFO0FBRmpFO0FBSUg7O0FBRUQsU0FBS2QsMERBQUw7QUFBd0I7QUFDcEIsK0NBQ09XLEtBRFA7QUFFSUosd0JBQWMsRUFBR0ssTUFBRCxDQUFxQ0U7QUFGekQ7QUFJSDs7QUFFRCxTQUFLYixzREFBTDtBQUFvQjtBQUNoQiwrQ0FDT1UsS0FEUDtBQUVJSCxvQkFBVSxFQUFHSSxNQUFELENBQWlDRTtBQUZqRDtBQUlIOztBQUVELFNBQUtaLHVFQUFMO0FBQXFDO0FBQ2pDLCtDQUNPUyxLQURQO0FBRUlGLHFDQUEyQixFQUFHRyxNQUFELENBQWtERTtBQUZuRjtBQUlIOztBQUVEO0FBQVM7QUFDTCxpQ0FDT0gsS0FEUDtBQUdIO0FBakNMO0FBbUNILENBcENEOztBQXNDQSwrREFBZUQsV0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEVBO0FBQ0E7QUFDQTtBQU9BLE1BQU1LLFlBQVksR0FBR0Msc0RBQWUsQ0FBQztBQUNqQ0MsYUFEaUM7QUFFakNQLGFBQVdBO0FBRnNCLENBQUQsQ0FBcEM7QUFLQSwrREFBZUssWUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFNQSxNQUFNRyxTQUFxQixHQUFHO0FBQzFCQyxPQUFLLEVBQUU7QUFEbUIsQ0FBOUIsQyxDQUlBOztBQUNBLE1BQU1GLFdBQVcsR0FBRyxDQUFDTixLQUFpQixHQUFHTyxTQUFyQixFQUFnQ04sTUFBaEMsS0FBb0Q7QUFDcEUsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0ksU0FBS2YsaURBQUw7QUFBZTtBQUNYLCtDQUNPYSxLQURQO0FBRUlRLGVBQUssRUFBR1AsTUFBRCxDQUE0QkU7QUFGdkM7QUFJSDs7QUFFRDtBQUFTO0FBQ0wsaUNBQ09ILEtBRFA7QUFHSDtBQVpMO0FBY0gsQ0FmRDs7QUFpQkEsK0RBQWVNLFdBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1HLEtBQUssR0FBR0Msa0RBQVcsQ0FBQ04sMERBQUQsRUFBZU8sNkVBQW1CLEVBQWxDLENBQXpCOztBQUVBLE1BQU1DLEdBQUcsR0FBRyxDQUFDO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFELEtBQXFEO0FBQzdELHNCQUNJLDhEQUFDLGlEQUFEO0FBQVUsU0FBSyxFQUFFTCxLQUFqQjtBQUFBLDJCQUNJLDhEQUFDLFNBQUQsb0JBQWVLLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQUtILENBTkQ7O0FBUUEsK0RBQWVGLEdBQWYsRTs7Ozs7Ozs7Ozs7QUNqQkEsbUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0QiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGluaXRcclxuZXhwb3J0IGNvbnN0IHNldElzRW5kID0gJ3NldElzRW5kJztcclxuXHJcbi8vIGJhc2VcclxuZXhwb3J0IGNvbnN0IHNldEN1cnJlbnRDb21wb25lbnRObyA9ICdzZXRDdXJyZW50Q29tcG9uZW50Tm8nO1xyXG5leHBvcnQgY29uc3Qgc2V0SXNQYWdlQ2hhbmdpbmcgPSAnc2V0SXNQYWdlQ2hhbmdpbmcnO1xyXG5leHBvcnQgY29uc3Qgc2V0SW5uZXJXaWR0aCA9ICdzZXRJbm5lcldpZHRoJztcclxuZXhwb3J0IGNvbnN0IHNldEluZGV4U3ViQ29udGFpbmVyVHJhbnNsYXRlWCA9ICdzZXRJbmRleFN1YkNvbnRhaW5lclRyYW5zbGF0ZVgnO1xyXG4iLCJpbXBvcnQge1xyXG4gICAgSXNldEN1cnJlbnRDb21wb25lbnROb0FjdGlvbixcclxuICAgIElzZXRJbmRleFN1YkNvbnRhaW5lclRyYW5zbGF0ZVhBY3Rpb24sXHJcbiAgICBJc2V0SW5uZXJXaWR0aEFjdGlvbixcclxuICAgIElzZXRJc1BhZ2VDaGFuZ2luZ0FjdGlvbixcclxufSBmcm9tICcuL2FjdGlvbkludGVyZmFjZSc7XHJcbmltcG9ydCB7IGFjdGlvbnMgfSBmcm9tICcuL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBzZXRDdXJyZW50Q29tcG9uZW50Tm8sIHNldEluZGV4U3ViQ29udGFpbmVyVHJhbnNsYXRlWCwgc2V0SW5uZXJXaWR0aCwgc2V0SXNQYWdlQ2hhbmdpbmcgfSBmcm9tICcuL2FjdGlvblR5cGUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJYmFzZVN0YXRlIHtcclxuICAgIGN1cnJlbnRDb21wb25lbnRObzogbnVtYmVyO1xyXG4gICAgdGl0bGVBcnJheTogc3RyaW5nW107XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3JBcnJheTogc3RyaW5nW107XHJcbiAgICBpc1BhZ2VDaGFuZ2luZzogYm9vbGVhbjtcclxuICAgIGlubmVyV2lkdGg6IG51bWJlcjtcclxuICAgIGluZGV4U3ViQ29udGFpbmVyVHJhbnNsYXRlWDogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBiYXNlU3RhdGU6IEliYXNlU3RhdGUgPSB7XHJcbiAgICBjdXJyZW50Q29tcG9uZW50Tm86IDAsXHJcbiAgICB0aXRsZUFycmF5OiBbJ0NvdmVyJywgJ0ludHJvJywgJ1doeSBJdCcsICdTa2lsbHMnLCAnQ2FyZWVyJywgJ1Byb2plY3RzJywgJ01vcmUnXSxcclxuICAgIGJhY2tncm91bmRDb2xvckFycmF5OiBbJyNFM0QwQjknLCAnI0UxQkM5MScsICcjQzE5Mjc3JywgJyM2Mjk1OUMnLCAnI0MxOTI3NycsICcjRTFCQzkxJywgJyNFM0QwQjknXSxcclxuICAgIGlzUGFnZUNoYW5naW5nOiBmYWxzZSxcclxuICAgIGlubmVyV2lkdGg6IDAsXHJcbiAgICBpbmRleFN1YkNvbnRhaW5lclRyYW5zbGF0ZVg6IDAsXHJcbn07XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LW1vZHVsZS1ib3VuZGFyeS10eXBlc1xyXG5jb25zdCBiYXNlUmVkdWNlciA9IChzdGF0ZTogSWJhc2VTdGF0ZSA9IGJhc2VTdGF0ZSwgYWN0aW9uOiBhY3Rpb25zKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBzZXRDdXJyZW50Q29tcG9uZW50Tm86IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudENvbXBvbmVudE5vOiAoYWN0aW9uIGFzIElzZXRDdXJyZW50Q29tcG9uZW50Tm9BY3Rpb24pLnBheWxvYWQsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIHNldElzUGFnZUNoYW5naW5nOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzUGFnZUNoYW5naW5nOiAoYWN0aW9uIGFzIElzZXRJc1BhZ2VDaGFuZ2luZ0FjdGlvbikucGF5bG9hZCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhc2Ugc2V0SW5uZXJXaWR0aDoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpbm5lcldpZHRoOiAoYWN0aW9uIGFzIElzZXRJbm5lcldpZHRoQWN0aW9uKS5wYXlsb2FkLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBzZXRJbmRleFN1YkNvbnRhaW5lclRyYW5zbGF0ZVg6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaW5kZXhTdWJDb250YWluZXJUcmFuc2xhdGVYOiAoYWN0aW9uIGFzIElzZXRJbmRleFN1YkNvbnRhaW5lclRyYW5zbGF0ZVhBY3Rpb24pLnBheWxvYWQsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBiYXNlUmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgaW5pdFJlZHVjZXIsIHsgSWluaXRTdGF0ZSB9IGZyb20gJy4vaW5pdFJlZHVjZXInO1xyXG5pbXBvcnQgYmFzZVJlZHVjZXIsIHsgSWJhc2VTdGF0ZSB9IGZyb20gJy4vYmFzZVJlZHVjZXInO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBpbmRleFN0YXRlIHtcclxuICAgIGluaXRSZWR1Y2VyOiBJaW5pdFN0YXRlO1xyXG4gICAgYmFzZVJlZHVjZXI6IEliYXNlU3RhdGU7XHJcbn1cclxuXHJcbmNvbnN0IGluZGV4UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBpbml0UmVkdWNlcixcclxuICAgIGJhc2VSZWR1Y2VyLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4UmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgSXNldElzRW5kQWN0aW9uIH0gZnJvbSAnLi9hY3Rpb25JbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBhY3Rpb25zIH0gZnJvbSAnLi9hY3Rpb25zJztcclxuaW1wb3J0IHsgc2V0SXNFbmQgfSBmcm9tICcuL2FjdGlvblR5cGUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJaW5pdFN0YXRlIHtcclxuICAgIGlzRW5kOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBpbml0U3RhdGU6IElpbml0U3RhdGUgPSB7XHJcbiAgICBpc0VuZDogZmFsc2UsXHJcbn07XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LW1vZHVsZS1ib3VuZGFyeS10eXBlc1xyXG5jb25zdCBpbml0UmVkdWNlciA9IChzdGF0ZTogSWluaXRTdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uOiBhY3Rpb25zKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBzZXRJc0VuZDoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpc0VuZDogKGFjdGlvbiBhcyBJc2V0SXNFbmRBY3Rpb24pLnBheWxvYWQsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0UmVkdWNlcjtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCBpbmRleFJlZHVjZXIgZnJvbSAnLi4vbW9kdWxlcy9pbmRleFJlZHVjZXInO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKGluZGV4UmVkdWNlciwgY29tcG9zZVdpdGhEZXZUb29scygpKTtcclxuXHJcbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==