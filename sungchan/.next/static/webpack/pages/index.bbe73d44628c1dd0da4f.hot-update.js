self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./component/skills.tsx":
/*!******************************!*\
  !*** ./component/skills.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ "./component/base.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\component\\skills.tsx",
    _this = undefined;




var StyledDiv1 = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "skills__StyledDiv1",
  componentId: "sc-9hegbj-0"
})(["display:flex;flex-direction:column;flex-wrap:wrap;height:240px;text-align:center;"]);
_c = StyledDiv1;
var StyledDiv2 = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "skills__StyledDiv2",
  componentId: "sc-9hegbj-1"
})(["border:1px solid black;width:300px;margin:0 32px;"]);
_c2 = StyledDiv2;

var Skills = function Skills(_ref) {
  var title = _ref.title;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_base__WEBPACK_IMPORTED_MODULE_2__.default, {
    title: title,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv1, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv2, {
        style: {
          height: '80px'
        },
        children: "\u314E\u3147"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv2, {
        style: {
          height: '200px'
        },
        children: "\u314E\u3147"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv2, {
        style: {
          height: '60px'
        },
        children: "\u314E\u3147"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv2, {
        style: {
          height: '100px'
        },
        children: "\u314E\u3147"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, _this);
};

_c3 = Skills;
/* harmony default export */ __webpack_exports__["default"] = (Skills);

var _c, _c2, _c3;

$RefreshReg$(_c, "StyledDiv1");
$RefreshReg$(_c2, "StyledDiv2");
$RefreshReg$(_c3, "Skills");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L3NraWxscy50c3giXSwibmFtZXMiOlsiU3R5bGVkRGl2MSIsInN0eWxlZCIsIlN0eWxlZERpdjIiLCJTa2lsbHMiLCJ0aXRsZSIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQU1BLElBQU1BLFVBQVUsR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEseUZBQWhCO0tBQU1ELFU7QUFRTixJQUFNRSxVQUFVLEdBQUdELHFFQUFIO0FBQUE7QUFBQTtBQUFBLHlEQUFoQjtNQUFNQyxVOztBQU1OLElBQU1DLE1BQXdCLEdBQUcsU0FBM0JBLE1BQTJCLE9BQTRCO0FBQUEsTUFBekJDLEtBQXlCLFFBQXpCQSxLQUF5QjtBQUN6RCxzQkFDSSw4REFBQywwQ0FBRDtBQUFNLFNBQUssRUFBRUEsS0FBYjtBQUFBLDJCQUNJLDhEQUFDLFVBQUQ7QUFBQSw4QkFDSSw4REFBQyxVQUFEO0FBQVksYUFBSyxFQUFFO0FBQUVDLGdCQUFNLEVBQUU7QUFBVixTQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUksOERBQUMsVUFBRDtBQUFZLGFBQUssRUFBRTtBQUFFQSxnQkFBTSxFQUFFO0FBQVYsU0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixlQUdJLDhEQUFDLFVBQUQ7QUFBWSxhQUFLLEVBQUU7QUFBRUEsZ0JBQU0sRUFBRTtBQUFWLFNBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEosZUFJSSw4REFBQyxVQUFEO0FBQVksYUFBSyxFQUFFO0FBQUVBLGdCQUFNLEVBQUU7QUFBVixTQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVVILENBWEQ7O01BQU1GLE07QUFhTiwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iYmU3M2Q0NDYyOGMxZGQwZGE0Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmludGVyZmFjZSBJU2tpbGwge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgU3R5bGVkRGl2MSA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGhlaWdodDogMjQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWREaXYyID0gc3R5bGVkLmRpdmBcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgbWFyZ2luOiAwIDMycHg7XHJcbmA7XHJcblxyXG5jb25zdCBTa2lsbHM6IFJlYWN0LkZDPElTa2lsbD4gPSAoeyB0aXRsZSB9KTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QmFzZSB0aXRsZT17dGl0bGV9PlxyXG4gICAgICAgICAgICA8U3R5bGVkRGl2MT5cclxuICAgICAgICAgICAgICAgIDxTdHlsZWREaXYyIHN0eWxlPXt7IGhlaWdodDogJzgwcHgnIH19PuOFjuOFhzwvU3R5bGVkRGl2Mj5cclxuICAgICAgICAgICAgICAgIDxTdHlsZWREaXYyIHN0eWxlPXt7IGhlaWdodDogJzIwMHB4JyB9fT7jhY7jhYc8L1N0eWxlZERpdjI+XHJcbiAgICAgICAgICAgICAgICA8U3R5bGVkRGl2MiBzdHlsZT17eyBoZWlnaHQ6ICc2MHB4JyB9fT7jhY7jhYc8L1N0eWxlZERpdjI+XHJcbiAgICAgICAgICAgICAgICA8U3R5bGVkRGl2MiBzdHlsZT17eyBoZWlnaHQ6ICcxMDBweCcgfX0+44WO44WHPC9TdHlsZWREaXYyPlxyXG4gICAgICAgICAgICA8L1N0eWxlZERpdjE+XHJcbiAgICAgICAgPC9CYXNlPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNraWxscztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==