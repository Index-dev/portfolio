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
/* harmony export */   "setIsPageChanging": function() { return /* binding */ setIsPageChanging; }
/* harmony export */ });
// init
const setIsEnd = 'setIsEnd'; // base

const setCurrentComponentNo = 'setCurrentComponentNo';
const setIsPageChanging = 'setIsPageChanging';

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
  titleArray: ['Main', 'Intro', 'Why It', 'Skills', 'Career', 'Projects', 'More'],
  backgroundColorArray: ['#757270', '#A5BAA8', '#6A9194', '#b79e6a', '#c68377', '#648ab9', '#C4E3D2'],
  isPageChanging: false
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vLi9tb2R1bGVzL2FjdGlvblR5cGUudHN4Iiwid2VicGFjazovL3N1bmdjaGFuX3BvcnRmb2xpby8uL21vZHVsZXMvYmFzZVJlZHVjZXIudHN4Iiwid2VicGFjazovL3N1bmdjaGFuX3BvcnRmb2xpby8uL21vZHVsZXMvaW5kZXhSZWR1Y2VyLnRzeCIsIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vLi9tb2R1bGVzL2luaXRSZWR1Y2VyLnRzeCIsIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3N1bmdjaGFuX3BvcnRmb2xpby9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiJdLCJuYW1lcyI6WyJzZXRJc0VuZCIsInNldEN1cnJlbnRDb21wb25lbnRObyIsInNldElzUGFnZUNoYW5naW5nIiwiYmFzZVN0YXRlIiwiY3VycmVudENvbXBvbmVudE5vIiwidGl0bGVBcnJheSIsImJhY2tncm91bmRDb2xvckFycmF5IiwiaXNQYWdlQ2hhbmdpbmciLCJiYXNlUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJpbmRleFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJpbml0UmVkdWNlciIsImluaXRTdGF0ZSIsImlzRW5kIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNPLE1BQU1BLFFBQVEsR0FBRyxVQUFqQixDLENBRVA7O0FBQ08sTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIUDtBQVNBLE1BQU1DLFNBQXFCLEdBQUc7QUFDMUJDLG9CQUFrQixFQUFFLENBRE07QUFFMUJDLFlBQVUsRUFBRSxDQUFDLE1BQUQsRUFBUyxPQUFULEVBQWtCLFFBQWxCLEVBQTRCLFFBQTVCLEVBQXNDLFFBQXRDLEVBQWdELFVBQWhELEVBQTRELE1BQTVELENBRmM7QUFHMUJDLHNCQUFvQixFQUFFLENBQUMsU0FBRCxFQUFZLFNBQVosRUFBdUIsU0FBdkIsRUFBa0MsU0FBbEMsRUFBNkMsU0FBN0MsRUFBd0QsU0FBeEQsRUFBbUUsU0FBbkUsQ0FISTtBQUkxQkMsZ0JBQWMsRUFBRTtBQUpVLENBQTlCLEMsQ0FPQTs7QUFDQSxNQUFNQyxXQUFXLEdBQUcsQ0FBQ0MsS0FBaUIsR0FBR04sU0FBckIsRUFBZ0NPLE1BQWhDLEtBQW9EO0FBQ3BFLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNJLFNBQUtWLDhEQUFMO0FBQTRCO0FBQ3hCLCtDQUNPUSxLQURQO0FBRUlMLDRCQUFrQixFQUFHTSxNQUFELENBQXlDRTtBQUZqRTtBQUlIOztBQUVELFNBQUtWLDBEQUFMO0FBQXdCO0FBQ3BCLCtDQUNPTyxLQURQO0FBRUlGLHdCQUFjLEVBQUdHLE1BQUQsQ0FBcUNFO0FBRnpEO0FBSUg7O0FBRUQ7QUFBUztBQUNMLGlDQUNPSCxLQURQO0FBR0g7QUFuQkw7QUFxQkgsQ0F0QkQ7O0FBd0JBLCtEQUFlRCxXQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0E7QUFDQTtBQUNBO0FBT0EsTUFBTUssWUFBWSxHQUFHQyxzREFBZSxDQUFDO0FBQ2pDQyxhQURpQztBQUVqQ1AsYUFBV0E7QUFGc0IsQ0FBRCxDQUFwQztBQUtBLCtEQUFlSyxZQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQU1BLE1BQU1HLFNBQXFCLEdBQUc7QUFDMUJDLE9BQUssRUFBRTtBQURtQixDQUE5QixDLENBSUE7O0FBQ0EsTUFBTUYsV0FBVyxHQUFHLENBQUNOLEtBQWlCLEdBQUdPLFNBQXJCLEVBQWdDTixNQUFoQyxLQUFvRDtBQUNwRSxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDSSxTQUFLWCxpREFBTDtBQUFlO0FBQ1gsK0NBQ09TLEtBRFA7QUFFSVEsZUFBSyxFQUFHUCxNQUFELENBQTRCRTtBQUZ2QztBQUlIOztBQUVEO0FBQVM7QUFDTCxpQ0FDT0gsS0FEUDtBQUdIO0FBWkw7QUFjSCxDQWZEOztBQWlCQSwrREFBZU0sV0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUcsS0FBSyxHQUFHQyxrREFBVyxDQUFDTiwwREFBRCxFQUFlTyw2RUFBbUIsRUFBbEMsQ0FBekI7O0FBRUEsTUFBTUMsR0FBRyxHQUFHLENBQUM7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQUQsS0FBcUQ7QUFDN0Qsc0JBQ0ksOERBQUMsaURBQUQ7QUFBVSxTQUFLLEVBQUVMLEtBQWpCO0FBQUEsMkJBQ0ksOERBQUMsU0FBRCxvQkFBZUssU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBS0gsQ0FORDs7QUFRQSwrREFBZUYsR0FBZixFOzs7Ozs7Ozs7OztBQ2pCQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzRCIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW5pdFxyXG5leHBvcnQgY29uc3Qgc2V0SXNFbmQgPSAnc2V0SXNFbmQnO1xyXG5cclxuLy8gYmFzZVxyXG5leHBvcnQgY29uc3Qgc2V0Q3VycmVudENvbXBvbmVudE5vID0gJ3NldEN1cnJlbnRDb21wb25lbnRObyc7XHJcbmV4cG9ydCBjb25zdCBzZXRJc1BhZ2VDaGFuZ2luZyA9ICdzZXRJc1BhZ2VDaGFuZ2luZyc7XHJcbiIsImltcG9ydCB7IElzZXRDdXJyZW50Q29tcG9uZW50Tm9BY3Rpb24sIElzZXRJc1BhZ2VDaGFuZ2luZ0FjdGlvbiB9IGZyb20gJy4vYWN0aW9uSW50ZXJmYWNlJztcclxuaW1wb3J0IHsgYWN0aW9ucyB9IGZyb20gJy4vYWN0aW9ucyc7XHJcbmltcG9ydCB7IHNldEN1cnJlbnRDb21wb25lbnRObywgc2V0SXNQYWdlQ2hhbmdpbmcgfSBmcm9tICcuL2FjdGlvblR5cGUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJYmFzZVN0YXRlIHtcclxuICAgIGN1cnJlbnRDb21wb25lbnRObzogbnVtYmVyO1xyXG4gICAgdGl0bGVBcnJheTogc3RyaW5nW107XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3JBcnJheTogc3RyaW5nW107XHJcbiAgICBpc1BhZ2VDaGFuZ2luZzogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgYmFzZVN0YXRlOiBJYmFzZVN0YXRlID0ge1xyXG4gICAgY3VycmVudENvbXBvbmVudE5vOiAwLFxyXG4gICAgdGl0bGVBcnJheTogWydNYWluJywgJ0ludHJvJywgJ1doeSBJdCcsICdTa2lsbHMnLCAnQ2FyZWVyJywgJ1Byb2plY3RzJywgJ01vcmUnXSxcclxuICAgIGJhY2tncm91bmRDb2xvckFycmF5OiBbJyM3NTcyNzAnLCAnI0E1QkFBOCcsICcjNkE5MTk0JywgJyNiNzllNmEnLCAnI2M2ODM3NycsICcjNjQ4YWI5JywgJyNDNEUzRDInXSxcclxuICAgIGlzUGFnZUNoYW5naW5nOiBmYWxzZSxcclxufTtcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtbW9kdWxlLWJvdW5kYXJ5LXR5cGVzXHJcbmNvbnN0IGJhc2VSZWR1Y2VyID0gKHN0YXRlOiBJYmFzZVN0YXRlID0gYmFzZVN0YXRlLCBhY3Rpb246IGFjdGlvbnMpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIHNldEN1cnJlbnRDb21wb25lbnRObzoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Q29tcG9uZW50Tm86IChhY3Rpb24gYXMgSXNldEN1cnJlbnRDb21wb25lbnROb0FjdGlvbikucGF5bG9hZCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhc2Ugc2V0SXNQYWdlQ2hhbmdpbmc6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaXNQYWdlQ2hhbmdpbmc6IChhY3Rpb24gYXMgSXNldElzUGFnZUNoYW5naW5nQWN0aW9uKS5wYXlsb2FkLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYmFzZVJlZHVjZXI7XHJcbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IGluaXRSZWR1Y2VyLCB7IElpbml0U3RhdGUgfSBmcm9tICcuL2luaXRSZWR1Y2VyJztcclxuaW1wb3J0IGJhc2VSZWR1Y2VyLCB7IEliYXNlU3RhdGUgfSBmcm9tICcuL2Jhc2VSZWR1Y2VyJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgaW5kZXhTdGF0ZSB7XHJcbiAgICBpbml0UmVkdWNlcjogSWluaXRTdGF0ZTtcclxuICAgIGJhc2VSZWR1Y2VyOiBJYmFzZVN0YXRlO1xyXG59XHJcblxyXG5jb25zdCBpbmRleFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgaW5pdFJlZHVjZXIsXHJcbiAgICBiYXNlUmVkdWNlcixcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleFJlZHVjZXI7XHJcbiIsImltcG9ydCB7IElzZXRJc0VuZEFjdGlvbiB9IGZyb20gJy4vYWN0aW9uSW50ZXJmYWNlJztcclxuaW1wb3J0IHsgYWN0aW9ucyB9IGZyb20gJy4vYWN0aW9ucyc7XHJcbmltcG9ydCB7IHNldElzRW5kIH0gZnJvbSAnLi9hY3Rpb25UeXBlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSWluaXRTdGF0ZSB7XHJcbiAgICBpc0VuZDogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgaW5pdFN0YXRlOiBJaW5pdFN0YXRlID0ge1xyXG4gICAgaXNFbmQ6IGZhbHNlLFxyXG59O1xyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1tb2R1bGUtYm91bmRhcnktdHlwZXNcclxuY29uc3QgaW5pdFJlZHVjZXIgPSAoc3RhdGU6IElpbml0U3RhdGUgPSBpbml0U3RhdGUsIGFjdGlvbjogYWN0aW9ucykgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2Ugc2V0SXNFbmQ6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaXNFbmQ6IChhY3Rpb24gYXMgSXNldElzRW5kQWN0aW9uKS5wYXlsb2FkLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdFJlZHVjZXI7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgaW5kZXhSZWR1Y2VyIGZyb20gJy4uL21vZHVsZXMvaW5kZXhSZWR1Y2VyJztcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShpbmRleFJlZHVjZXIsIGNvbXBvc2VXaXRoRGV2VG9vbHMoKSk7XHJcblxyXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7OyJdLCJzb3VyY2VSb290IjoiIn0=