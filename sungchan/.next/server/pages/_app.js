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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined), ";"]
  }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vLi9tb2R1bGVzL2FjdGlvblR5cGUudHN4Iiwid2VicGFjazovL3N1bmdjaGFuX3BvcnRmb2xpby8uL21vZHVsZXMvYmFzZVJlZHVjZXIudHN4Iiwid2VicGFjazovL3N1bmdjaGFuX3BvcnRmb2xpby8uL21vZHVsZXMvaW5kZXhSZWR1Y2VyLnRzeCIsIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vLi9tb2R1bGVzL2luaXRSZWR1Y2VyLnRzeCIsIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3N1bmdjaGFuX3BvcnRmb2xpby9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiJdLCJuYW1lcyI6WyJzZXRJc0VuZCIsInNldEN1cnJlbnRDb21wb25lbnRObyIsInNldElzUGFnZUNoYW5naW5nIiwiYmFzZVN0YXRlIiwiY3VycmVudENvbXBvbmVudE5vIiwidGl0bGVBcnJheSIsImlzUGFnZUNoYW5naW5nIiwiYmFzZVJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwiaW5kZXhSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiaW5pdFJlZHVjZXIiLCJpbml0U3RhdGUiLCJpc0VuZCIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDTyxNQUFNQSxRQUFRLEdBQUcsVUFBakIsQyxDQUVQOztBQUNPLE1BQU1DLHFCQUFxQixHQUFHLHVCQUE5QjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSFA7QUFRQSxNQUFNQyxTQUFxQixHQUFHO0FBQzFCQyxvQkFBa0IsRUFBRSxDQURNO0FBRTFCQyxZQUFVLEVBQUUsQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixRQUFsQixFQUE0QixRQUE1QixFQUFzQyxRQUF0QyxFQUFnRCxVQUFoRCxFQUE0RCxNQUE1RCxDQUZjO0FBRzFCQyxnQkFBYyxFQUFFO0FBSFUsQ0FBOUIsQyxDQU1BOztBQUNBLE1BQU1DLFdBQVcsR0FBRyxDQUFDQyxLQUFpQixHQUFHTCxTQUFyQixFQUFnQ00sTUFBaEMsS0FBb0Q7QUFDcEUsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0ksU0FBS1QsOERBQUw7QUFBNEI7QUFDeEIsK0NBQ09PLEtBRFA7QUFFSUosNEJBQWtCLEVBQUdLLE1BQUQsQ0FBeUNFO0FBRmpFO0FBSUg7O0FBRUQsU0FBS1QsMERBQUw7QUFBd0I7QUFDcEIsK0NBQ09NLEtBRFA7QUFFSUYsd0JBQWMsRUFBR0csTUFBRCxDQUFxQ0U7QUFGekQ7QUFJSDs7QUFFRDtBQUFTO0FBQ0wsaUNBQ09ILEtBRFA7QUFHSDtBQW5CTDtBQXFCSCxDQXRCRDs7QUF3QkEsK0RBQWVELFdBQWYsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUNBO0FBQ0E7QUFPQSxNQUFNSyxZQUFZLEdBQUdDLHNEQUFlLENBQUM7QUFDakNDLGFBRGlDO0FBRWpDUCxhQUFXQTtBQUZzQixDQUFELENBQXBDO0FBS0EsK0RBQWVLLFlBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBTUEsTUFBTUcsU0FBcUIsR0FBRztBQUMxQkMsT0FBSyxFQUFFO0FBRG1CLENBQTlCLEMsQ0FJQTs7QUFDQSxNQUFNRixXQUFXLEdBQUcsQ0FBQ04sS0FBaUIsR0FBR08sU0FBckIsRUFBZ0NOLE1BQWhDLEtBQW9EO0FBQ3BFLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNJLFNBQUtWLGlEQUFMO0FBQWU7QUFDWCwrQ0FDT1EsS0FEUDtBQUVJUSxlQUFLLEVBQUdQLE1BQUQsQ0FBNEJFO0FBRnZDO0FBSUg7O0FBRUQ7QUFBUztBQUNMLGlDQUNPSCxLQURQO0FBR0g7QUFaTDtBQWNILENBZkQ7O0FBaUJBLCtEQUFlTSxXQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNRyxLQUFLLEdBQUdDLGtEQUFXLENBQUNOLDBEQUFELEVBQWVPLDZFQUFtQixFQUFsQyxDQUF6Qjs7QUFFQSxNQUFNQyxHQUFHLEdBQUcsQ0FBQztBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBRCxLQUFxRDtBQUM3RCxzQkFDSSw4REFBQyxpREFBRDtBQUFVLFNBQUssRUFBRUwsS0FBakI7QUFBQSw0QkFDSSw4REFBQyxTQUFELG9CQUFlSyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFLSCxDQU5EOztBQVFBLCtEQUFlRixHQUFmLEU7Ozs7Ozs7Ozs7O0FDakJBLG1DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNEIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbml0XHJcbmV4cG9ydCBjb25zdCBzZXRJc0VuZCA9ICdzZXRJc0VuZCc7XHJcblxyXG4vLyBiYXNlXHJcbmV4cG9ydCBjb25zdCBzZXRDdXJyZW50Q29tcG9uZW50Tm8gPSAnc2V0Q3VycmVudENvbXBvbmVudE5vJztcclxuZXhwb3J0IGNvbnN0IHNldElzUGFnZUNoYW5naW5nID0gJ3NldElzUGFnZUNoYW5naW5nJztcclxuIiwiaW1wb3J0IHsgSXNldEN1cnJlbnRDb21wb25lbnROb0FjdGlvbiwgSXNldElzUGFnZUNoYW5naW5nQWN0aW9uIH0gZnJvbSAnLi9hY3Rpb25JbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBhY3Rpb25zIH0gZnJvbSAnLi9hY3Rpb25zJztcclxuaW1wb3J0IHsgc2V0Q3VycmVudENvbXBvbmVudE5vLCBzZXRJc1BhZ2VDaGFuZ2luZyB9IGZyb20gJy4vYWN0aW9uVHlwZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEliYXNlU3RhdGUge1xyXG4gICAgY3VycmVudENvbXBvbmVudE5vOiBudW1iZXI7XHJcbiAgICB0aXRsZUFycmF5OiBzdHJpbmdbXTtcclxuICAgIGlzUGFnZUNoYW5naW5nOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBiYXNlU3RhdGU6IEliYXNlU3RhdGUgPSB7XHJcbiAgICBjdXJyZW50Q29tcG9uZW50Tm86IDAsXHJcbiAgICB0aXRsZUFycmF5OiBbJ01haW4nLCAnSW50cm8nLCAnV2h5IEl0JywgJ1NraWxscycsICdDYXJlZXInLCAnUHJvamVjdHMnLCAnTW9yZSddLFxyXG4gICAgaXNQYWdlQ2hhbmdpbmc6IGZhbHNlLFxyXG59O1xyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1tb2R1bGUtYm91bmRhcnktdHlwZXNcclxuY29uc3QgYmFzZVJlZHVjZXIgPSAoc3RhdGU6IEliYXNlU3RhdGUgPSBiYXNlU3RhdGUsIGFjdGlvbjogYWN0aW9ucykgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2Ugc2V0Q3VycmVudENvbXBvbmVudE5vOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRDb21wb25lbnRObzogKGFjdGlvbiBhcyBJc2V0Q3VycmVudENvbXBvbmVudE5vQWN0aW9uKS5wYXlsb2FkLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBzZXRJc1BhZ2VDaGFuZ2luZzoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpc1BhZ2VDaGFuZ2luZzogKGFjdGlvbiBhcyBJc2V0SXNQYWdlQ2hhbmdpbmdBY3Rpb24pLnBheWxvYWQsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBiYXNlUmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgaW5pdFJlZHVjZXIsIHsgSWluaXRTdGF0ZSB9IGZyb20gJy4vaW5pdFJlZHVjZXInO1xyXG5pbXBvcnQgYmFzZVJlZHVjZXIsIHsgSWJhc2VTdGF0ZSB9IGZyb20gJy4vYmFzZVJlZHVjZXInO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBpbmRleFN0YXRlIHtcclxuICAgIGluaXRSZWR1Y2VyOiBJaW5pdFN0YXRlO1xyXG4gICAgYmFzZVJlZHVjZXI6IEliYXNlU3RhdGU7XHJcbn1cclxuXHJcbmNvbnN0IGluZGV4UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBpbml0UmVkdWNlcixcclxuICAgIGJhc2VSZWR1Y2VyLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4UmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgSXNldElzRW5kQWN0aW9uIH0gZnJvbSAnLi9hY3Rpb25JbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBhY3Rpb25zIH0gZnJvbSAnLi9hY3Rpb25zJztcclxuaW1wb3J0IHsgc2V0SXNFbmQgfSBmcm9tICcuL2FjdGlvblR5cGUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJaW5pdFN0YXRlIHtcclxuICAgIGlzRW5kOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBpbml0U3RhdGU6IElpbml0U3RhdGUgPSB7XHJcbiAgICBpc0VuZDogZmFsc2UsXHJcbn07XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LW1vZHVsZS1ib3VuZGFyeS10eXBlc1xyXG5jb25zdCBpbml0UmVkdWNlciA9IChzdGF0ZTogSWluaXRTdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uOiBhY3Rpb25zKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBzZXRJc0VuZDoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpc0VuZDogKGFjdGlvbiBhcyBJc2V0SXNFbmRBY3Rpb24pLnBheWxvYWQsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0UmVkdWNlcjtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCBpbmRleFJlZHVjZXIgZnJvbSAnLi4vbW9kdWxlcy9pbmRleFJlZHVjZXInO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKGluZGV4UmVkdWNlciwgY29tcG9zZVdpdGhEZXZUb29scygpKTtcclxuXHJcbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPjtcclxuICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7OyJdLCJzb3VyY2VSb290IjoiIn0=