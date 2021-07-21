self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./component/career.tsx":
/*!******************************!*\
  !*** ./component/career.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ "./component/base.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\component\\career.tsx",
    _this = undefined;




var Career = function Career(_ref) {
  var title = _ref.title;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_base__WEBPACK_IMPORTED_MODULE_2__.default, {
    title: title,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "career"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, _this);
};

_c = Career;
/* harmony default export */ __webpack_exports__["default"] = (Career);

var _c;

$RefreshReg$(_c, "Career");

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


/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_User_Desktop_study_portfolio_sungchan_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _component_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/main */ "./component/main.tsx");
/* harmony import */ var _component_intro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/intro */ "./component/intro.tsx");
/* harmony import */ var _component_whyIt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/whyIt */ "./component/whyIt.tsx");
/* harmony import */ var _component_skills__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/skills */ "./component/skills.tsx");
/* harmony import */ var _component_career__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../component/career */ "./component/career.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\pages\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();









var StyledDiv1 = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.div.withConfig({
  displayName: "pages__StyledDiv1",
  componentId: "sc-aoyeiy-0"
})([""]);
_c = StyledDiv1;

var Index = function Index() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__.useState(0),
      _React$useState2 = (0,C_Users_User_Desktop_study_portfolio_sungchan_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 2),
      innerWidth = _React$useState2[0],
      setInnerWidth = _React$useState2[1];

  var titleArray = ['Intro', 'Why It', 'Skills', 'Career', 'Projects', 'More'];
  react__WEBPACK_IMPORTED_MODULE_3__.useEffect(function () {
    var changeInnerWidth = function changeInnerWidth() {
      setInnerWidth(window.innerWidth);
    };

    setInnerWidth(window.innerWidth);
    window.addEventListener('resize', changeInnerWidth);
    return function () {
      window.removeEventListener('resize', changeInnerWidth);
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv1, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_main__WEBPACK_IMPORTED_MODULE_4__.default, {
        innerWidth: innerWidth,
        titleArray: titleArray
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_intro__WEBPACK_IMPORTED_MODULE_5__.default, {
        innerWidth: innerWidth,
        title: titleArray[0]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_whyIt__WEBPACK_IMPORTED_MODULE_6__.default, {
        title: titleArray[1]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_skills__WEBPACK_IMPORTED_MODULE_7__.default, {
        title: titleArray[2]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_career__WEBPACK_IMPORTED_MODULE_8__.default, {
        title: titleArray[3]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default()), {
      id: "3192114283",
      children: "body{margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcc3R1ZHlcXHBvcnRmb2xpb1xcc3VuZ2NoYW5cXHBhZ2VzXFxpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUNpQixBQUdrQyxTQUNDLFVBQ2QiLCJmaWxlIjoiQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxzdHVkeVxccG9ydGZvbGlvXFxzdW5nY2hhblxccGFnZXNcXGluZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBNYWluIGZyb20gJy4uL2NvbXBvbmVudC9tYWluJztcclxuaW1wb3J0IEludHJvIGZyb20gJy4uL2NvbXBvbmVudC9pbnRybyc7XHJcbmltcG9ydCBXaHlJdCBmcm9tICcuLi9jb21wb25lbnQvd2h5SXQnO1xyXG5pbXBvcnQgU2tpbGxzIGZyb20gJy4uL2NvbXBvbmVudC9za2lsbHMnO1xyXG5pbXBvcnQgQ2FyZWVyIGZyb20gJy4uL2NvbXBvbmVudC9jYXJlZXInO1xyXG5cclxuY29uc3QgU3R5bGVkRGl2MSA9IHN0eWxlZC5kaXZgYDtcclxuXHJcbmNvbnN0IEluZGV4ID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIGNvbnN0IFtpbm5lcldpZHRoLCBzZXRJbm5lcldpZHRoXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oMCk7XHJcblxyXG4gICAgY29uc3QgdGl0bGVBcnJheSA9IFsnSW50cm8nLCAnV2h5IEl0JywgJ1NraWxscycsICdDYXJlZXInLCAnUHJvamVjdHMnLCAnTW9yZSddO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2hhbmdlSW5uZXJXaWR0aCA9ICgpID0+IHtcclxuICAgICAgICAgICAgc2V0SW5uZXJXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc2V0SW5uZXJXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGNoYW5nZUlubmVyV2lkdGgpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgY2hhbmdlSW5uZXJXaWR0aCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxTdHlsZWREaXYxPlxyXG4gICAgICAgICAgICAgICAgPE1haW4gaW5uZXJXaWR0aD17aW5uZXJXaWR0aH0gdGl0bGVBcnJheT17dGl0bGVBcnJheX0gLz5cclxuICAgICAgICAgICAgICAgIDxJbnRybyBpbm5lcldpZHRoPXtpbm5lcldpZHRofSB0aXRsZT17dGl0bGVBcnJheVswXX0gLz5cclxuICAgICAgICAgICAgICAgIDxXaHlJdCB0aXRsZT17dGl0bGVBcnJheVsxXX0gLz5cclxuICAgICAgICAgICAgICAgIDxTa2lsbHMgdGl0bGU9e3RpdGxlQXJyYXlbMl19IC8+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZWVyIHRpdGxlPXt0aXRsZUFycmF5WzNdfSAvPlxyXG4gICAgICAgICAgICA8L1N0eWxlZERpdjE+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\User\\\\Desktop\\\\study\\\\portfolio\\\\sungchan\\\\pages\\\\index.tsx */"
    }, void 0, false, void 0, _this)]
  }, void 0, true);
};

_s(Index, "8hBOyrEruBy+CZlmgoH7qgxn3LY=");

_c2 = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c, _c2;

$RefreshReg$(_c, "StyledDiv1");
$RefreshReg$(_c2, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2NhcmVlci50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJDYXJlZXIiLCJ0aXRsZSIsIlN0eWxlZERpdjEiLCJzdHlsZWQiLCJJbmRleCIsIlJlYWN0IiwiaW5uZXJXaWR0aCIsInNldElubmVyV2lkdGgiLCJ0aXRsZUFycmF5IiwiY2hhbmdlSW5uZXJXaWR0aCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQU9BLElBQU1BLE1BQXlCLEdBQUcsU0FBNUJBLE1BQTRCLE9BQTRCO0FBQUEsTUFBekJDLEtBQXlCLFFBQXpCQSxLQUF5QjtBQUMxRCxzQkFDSSw4REFBQywwQ0FBRDtBQUFNLFNBQUssRUFBRUEsS0FBYjtBQUFBLDJCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBS0gsQ0FORDs7S0FBTUQsTTtBQVFOLCtEQUFlQSxNQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1FLFVBQVUsR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsUUFBaEI7S0FBTUQsVTs7QUFFTixJQUFNRSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFtQjtBQUFBOztBQUFBLHdCQUNPQywyQ0FBQSxDQUF1QixDQUF2QixDQURQO0FBQUE7QUFBQSxNQUN0QkMsVUFEc0I7QUFBQSxNQUNWQyxhQURVOztBQUc3QixNQUFNQyxVQUFVLEdBQUcsQ0FBQyxPQUFELEVBQVUsUUFBVixFQUFvQixRQUFwQixFQUE4QixRQUE5QixFQUF3QyxVQUF4QyxFQUFvRCxNQUFwRCxDQUFuQjtBQUVBSCw4Q0FBQSxDQUFnQixZQUFNO0FBQ2xCLFFBQU1JLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUMzQkYsbUJBQWEsQ0FBQ0csTUFBTSxDQUFDSixVQUFSLENBQWI7QUFDSCxLQUZEOztBQUlBQyxpQkFBYSxDQUFDRyxNQUFNLENBQUNKLFVBQVIsQ0FBYjtBQUNBSSxVQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDRixnQkFBbEM7QUFFQSxXQUFPLFlBQU07QUFDVEMsWUFBTSxDQUFDRSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ0gsZ0JBQXJDO0FBQ0gsS0FGRDtBQUdILEdBWEQsRUFXRyxFQVhIO0FBYUEsc0JBQ0k7QUFBQSw0QkFDSSw4REFBQyxVQUFEO0FBQUEsOEJBQ0ksOERBQUMsb0RBQUQ7QUFBTSxrQkFBVSxFQUFFSCxVQUFsQjtBQUE4QixrQkFBVSxFQUFFRTtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSSw4REFBQyxxREFBRDtBQUFPLGtCQUFVLEVBQUVGLFVBQW5CO0FBQStCLGFBQUssRUFBRUUsVUFBVSxDQUFDLENBQUQ7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLGVBR0ksOERBQUMscURBQUQ7QUFBTyxhQUFLLEVBQUVBLFVBQVUsQ0FBQyxDQUFEO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISixlQUlJLDhEQUFDLHNEQUFEO0FBQVEsYUFBSyxFQUFFQSxVQUFVLENBQUMsQ0FBRDtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkosZUFLSSw4REFBQyxzREFBRDtBQUFRLGFBQUssRUFBRUEsVUFBVSxDQUFDLENBQUQ7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREo7QUFvQkgsQ0F0Q0Q7O0dBQU1KLEs7O01BQUFBLEs7QUF3Q04sK0RBQWVBLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjZiMWI1NzllYWIyMmQwMzhjNzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbnRlcmZhY2UgSUNhcmVlciB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBDYXJlZXI6IFJlYWN0LkZDPElDYXJlZXI+ID0gKHsgdGl0bGUgfSk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJhc2UgdGl0bGU9e3RpdGxlfT5cclxuICAgICAgICAgICAgPHA+Y2FyZWVyPC9wPlxyXG4gICAgICAgIDwvQmFzZT5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJlZXI7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBNYWluIGZyb20gJy4uL2NvbXBvbmVudC9tYWluJztcclxuaW1wb3J0IEludHJvIGZyb20gJy4uL2NvbXBvbmVudC9pbnRybyc7XHJcbmltcG9ydCBXaHlJdCBmcm9tICcuLi9jb21wb25lbnQvd2h5SXQnO1xyXG5pbXBvcnQgU2tpbGxzIGZyb20gJy4uL2NvbXBvbmVudC9za2lsbHMnO1xyXG5pbXBvcnQgQ2FyZWVyIGZyb20gJy4uL2NvbXBvbmVudC9jYXJlZXInO1xyXG5cclxuY29uc3QgU3R5bGVkRGl2MSA9IHN0eWxlZC5kaXZgYDtcclxuXHJcbmNvbnN0IEluZGV4ID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIGNvbnN0IFtpbm5lcldpZHRoLCBzZXRJbm5lcldpZHRoXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oMCk7XHJcblxyXG4gICAgY29uc3QgdGl0bGVBcnJheSA9IFsnSW50cm8nLCAnV2h5IEl0JywgJ1NraWxscycsICdDYXJlZXInLCAnUHJvamVjdHMnLCAnTW9yZSddO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2hhbmdlSW5uZXJXaWR0aCA9ICgpID0+IHtcclxuICAgICAgICAgICAgc2V0SW5uZXJXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc2V0SW5uZXJXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGNoYW5nZUlubmVyV2lkdGgpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgY2hhbmdlSW5uZXJXaWR0aCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxTdHlsZWREaXYxPlxyXG4gICAgICAgICAgICAgICAgPE1haW4gaW5uZXJXaWR0aD17aW5uZXJXaWR0aH0gdGl0bGVBcnJheT17dGl0bGVBcnJheX0gLz5cclxuICAgICAgICAgICAgICAgIDxJbnRybyBpbm5lcldpZHRoPXtpbm5lcldpZHRofSB0aXRsZT17dGl0bGVBcnJheVswXX0gLz5cclxuICAgICAgICAgICAgICAgIDxXaHlJdCB0aXRsZT17dGl0bGVBcnJheVsxXX0gLz5cclxuICAgICAgICAgICAgICAgIDxTa2lsbHMgdGl0bGU9e3RpdGxlQXJyYXlbMl19IC8+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZWVyIHRpdGxlPXt0aXRsZUFycmF5WzNdfSAvPlxyXG4gICAgICAgICAgICA8L1N0eWxlZERpdjE+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9