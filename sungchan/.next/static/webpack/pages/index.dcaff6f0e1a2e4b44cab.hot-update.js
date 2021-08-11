self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./component/more.tsx":
/*!****************************!*\
  !*** ./component/more.tsx ***!
  \****************************/
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


var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\component\\more.tsx",
    _this = undefined;




var MoreContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "more__MoreContainer",
  componentId: "sc-16793nn-0"
})(["display:flex;align-items:center;"]);
_c = MoreContainer;
var HeaderSection = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.section.withConfig({
  displayName: "more__HeaderSection",
  componentId: "sc-16793nn-1"
})([""]);
_c2 = HeaderSection;
var UrlSection = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.section.withConfig({
  displayName: "more__UrlSection",
  componentId: "sc-16793nn-2"
})([""]);
_c3 = UrlSection;
var FooterSection = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.section.withConfig({
  displayName: "more__FooterSection",
  componentId: "sc-16793nn-3"
})([""]);
_c4 = FooterSection;

var More = function More(_ref) {
  var componentNo = _ref.componentNo;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_base__WEBPACK_IMPORTED_MODULE_2__.default, {
    componentNo: componentNo,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MoreContainer, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderSection, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "\uAE40\uC131\uCC2C\uC758 Portfolio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UrlSection, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FooterSection, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }, _this);
};

_c5 = More;
/* harmony default export */ __webpack_exports__["default"] = (More);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "MoreContainer");
$RefreshReg$(_c2, "HeaderSection");
$RefreshReg$(_c3, "UrlSection");
$RefreshReg$(_c4, "FooterSection");
$RefreshReg$(_c5, "More");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L21vcmUudHN4Il0sIm5hbWVzIjpbIk1vcmVDb250YWluZXIiLCJzdHlsZWQiLCJIZWFkZXJTZWN0aW9uIiwiVXJsU2VjdGlvbiIsIkZvb3RlclNlY3Rpb24iLCJNb3JlIiwiY29tcG9uZW50Tm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHdDQUFuQjtLQUFNRCxhO0FBS04sSUFBTUUsYUFBYSxHQUFHRCx5RUFBSDtBQUFBO0FBQUE7QUFBQSxRQUFuQjtNQUFNQyxhO0FBRU4sSUFBTUMsVUFBVSxHQUFHRix5RUFBSDtBQUFBO0FBQUE7QUFBQSxRQUFoQjtNQUFNRSxVO0FBRU4sSUFBTUMsYUFBYSxHQUFHSCx5RUFBSDtBQUFBO0FBQUE7QUFBQSxRQUFuQjtNQUFNRyxhOztBQU1OLElBQU1DLElBQXFCLEdBQUcsU0FBeEJBLElBQXdCLE9BQWtDO0FBQUEsTUFBL0JDLFdBQStCLFFBQS9CQSxXQUErQjtBQUM1RCxzQkFDSSw4REFBQywwQ0FBRDtBQUFNLGVBQVcsRUFBRUEsV0FBbkI7QUFBQSwyQkFDSSw4REFBQyxhQUFEO0FBQUEsOEJBQ0ksOERBQUMsYUFBRDtBQUFBLCtCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBS0ksOERBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEosZUFPSSw4REFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFhSCxDQWREOztNQUFNRCxJO0FBZ0JOLCtEQUFlQSxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmRjYWZmNmYwZTFhMmU0YjQ0Y2FiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgTW9yZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IEhlYWRlclNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBgO1xyXG5cclxuY29uc3QgVXJsU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYGA7XHJcblxyXG5jb25zdCBGb290ZXJTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gYDtcclxuXHJcbmludGVyZmFjZSBJTW9yZSB7XHJcbiAgICBjb21wb25lbnRObzogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBNb3JlOiBSZWFjdC5GQzxJTW9yZT4gPSAoeyBjb21wb25lbnRObyB9KTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QmFzZSBjb21wb25lbnRObz17Y29tcG9uZW50Tm99PlxyXG4gICAgICAgICAgICA8TW9yZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXJTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPuq5gOyEseywrOydmCBQb3J0Zm9saW88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWRlclNlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgPFVybFNlY3Rpb24+PC9VcmxTZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDxGb290ZXJTZWN0aW9uPjwvRm9vdGVyU2VjdGlvbj5cclxuICAgICAgICAgICAgPC9Nb3JlQ29udGFpbmVyPlxyXG4gICAgICAgIDwvQmFzZT5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3JlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9