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




var MainSection = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.section.withConfig({
  displayName: "skills__MainSection",
  componentId: "sc-9hegbj-0"
})(["width:100%;display:flex;flex-direction:column;align-items:center;padding:0 22px;@media screen and (min-width:570px){height:1080px;flex-wrap:wrap;}@media screen and (min-width:840px){height:720px;flex-wrap:wrap;}"]);
_c = MainSection;
var BoxCotainer = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "skills__BoxCotainer",
  componentId: "sc-9hegbj-1"
})(["width:240px;text-align:center;margin-bottom:54px;"]);
_c2 = BoxCotainer;
var TitleDiv = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "skills__TitleDiv",
  componentId: "sc-9hegbj-2"
})(["padding:8px 0;"]);
_c3 = TitleDiv;
var ImageDiv = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "skills__ImageDiv",
  componentId: "sc-9hegbj-3"
})(["background-color:#fff;border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-left-radius:10px;border-bottom-right-radius:10px;padding:8px;box-shadow:2px 4px 4px #c8c8c8 inset,-2px -4px 4px #c8c8c8 inset;"]);
_c4 = ImageDiv;
var BoxTitle = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.span.withConfig({
  displayName: "skills__BoxTitle",
  componentId: "sc-9hegbj-4"
})(["font-weight:bold;font-size:1.6em;color:#fff;"]);
_c5 = BoxTitle;
var BoxImage = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.img.withConfig({
  displayName: "skills__BoxImage",
  componentId: "sc-9hegbj-5"
})([""]);
_c6 = BoxImage;

var Skills = function Skills() {
  var skillsArray = [{
    title: 'FE',
    src: '/image/fe.PNG'
  }, {
    title: 'Devops',
    src: '/image/devops.PNG'
  }, {
    title: 'Development',
    src: '/image/development.PNG'
  }, {
    title: 'BE',
    src: '/image/be.PNG'
  }];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_base__WEBPACK_IMPORTED_MODULE_2__.default, {
    containerNo: 3,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainSection, {
      children: skillsArray.map(function (skill) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxCotainer, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleDiv, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxTitle, {
              children: skill.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 29
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageDiv, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxImage, {
              src: skill.src
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 29
          }, _this)]
        }, skill.title, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 25
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 9
  }, _this);
};

_c7 = Skills;
/* harmony default export */ __webpack_exports__["default"] = (Skills);

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "MainSection");
$RefreshReg$(_c2, "BoxCotainer");
$RefreshReg$(_c3, "TitleDiv");
$RefreshReg$(_c4, "ImageDiv");
$RefreshReg$(_c5, "BoxTitle");
$RefreshReg$(_c6, "BoxImage");
$RefreshReg$(_c7, "Skills");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L3NraWxscy50c3giXSwibmFtZXMiOlsiTWFpblNlY3Rpb24iLCJzdHlsZWQiLCJCb3hDb3RhaW5lciIsIlRpdGxlRGl2IiwiSW1hZ2VEaXYiLCJCb3hUaXRsZSIsIkJveEltYWdlIiwiU2tpbGxzIiwic2tpbGxzQXJyYXkiLCJ0aXRsZSIsInNyYyIsIm1hcCIsInNraWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHQyx5RUFBSDtBQUFBO0FBQUE7QUFBQSwyTkFBakI7S0FBTUQsVztBQWtCTixJQUFNRSxXQUFXLEdBQUdELHFFQUFIO0FBQUE7QUFBQTtBQUFBLHlEQUFqQjtNQUFNQyxXO0FBTU4sSUFBTUMsUUFBUSxHQUFHRixxRUFBSDtBQUFBO0FBQUE7QUFBQSxzQkFBZDtNQUFNRSxRO0FBSU4sSUFBTUMsUUFBUSxHQUFHSCxxRUFBSDtBQUFBO0FBQUE7QUFBQSxtT0FBZDtNQUFNRyxRO0FBVU4sSUFBTUMsUUFBUSxHQUFHSixzRUFBSDtBQUFBO0FBQUE7QUFBQSxvREFBZDtNQUFNSSxRO0FBTU4sSUFBTUMsUUFBUSxHQUFHTCxxRUFBSDtBQUFBO0FBQUE7QUFBQSxRQUFkO01BQU1LLFE7O0FBRU4sSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBbUI7QUFDOUIsTUFBTUMsV0FBVyxHQUFHLENBQ2hCO0FBQ0lDLFNBQUssRUFBRSxJQURYO0FBRUlDLE9BQUcsRUFBRTtBQUZULEdBRGdCLEVBS2hCO0FBQ0lELFNBQUssRUFBRSxRQURYO0FBRUlDLE9BQUcsRUFBRTtBQUZULEdBTGdCLEVBU2hCO0FBQ0lELFNBQUssRUFBRSxhQURYO0FBRUlDLE9BQUcsRUFBRTtBQUZULEdBVGdCLEVBYWhCO0FBQ0lELFNBQUssRUFBRSxJQURYO0FBRUlDLE9BQUcsRUFBRTtBQUZULEdBYmdCLENBQXBCO0FBbUJBLHNCQUNJLDhEQUFDLDBDQUFEO0FBQU0sZUFBVyxFQUFFLENBQW5CO0FBQUEsMkJBQ0ksOERBQUMsV0FBRDtBQUFBLGdCQUNLRixXQUFXLENBQUNHLEdBQVosQ0FBZ0IsVUFBQ0MsS0FBRCxFQUFXO0FBQ3hCLDRCQUNJLDhEQUFDLFdBQUQ7QUFBQSxrQ0FDSSw4REFBQyxRQUFEO0FBQUEsbUNBQ0ksOERBQUMsUUFBRDtBQUFBLHdCQUFXQSxLQUFLLENBQUNIO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBSUksOERBQUMsUUFBRDtBQUFBLG1DQUNJLDhEQUFDLFFBQUQ7QUFBVSxpQkFBRyxFQUFFRyxLQUFLLENBQUNGO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKO0FBQUEsV0FBa0JFLEtBQUssQ0FBQ0gsS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESjtBQVVILE9BWEE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBa0JILENBdENEOztNQUFNRixNO0FBd0NOLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjI0ZDdlZWQ5YTI2ZWE0NzU1OGYwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgTWFpblNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMCAyMnB4O1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3MHB4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDgwcHg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDg0MHB4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiA3MjBweDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBCb3hDb3RhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogMjQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1NHB4O1xyXG5gO1xyXG5cclxuY29uc3QgVGl0bGVEaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgcGFkZGluZzogOHB4IDA7XHJcbmA7XHJcblxyXG5jb25zdCBJbWFnZURpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDRweCA0cHggI2M4YzhjOCBpbnNldCwgLTJweCAtNHB4IDRweCAjYzhjOGM4IGluc2V0O1xyXG5gO1xyXG5cclxuY29uc3QgQm94VGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxLjZlbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG5gO1xyXG5cclxuY29uc3QgQm94SW1hZ2UgPSBzdHlsZWQuaW1nYGA7XHJcblxyXG5jb25zdCBTa2lsbHMgPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgY29uc3Qgc2tpbGxzQXJyYXkgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0ZFJyxcclxuICAgICAgICAgICAgc3JjOiAnL2ltYWdlL2ZlLlBORycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnRGV2b3BzJyxcclxuICAgICAgICAgICAgc3JjOiAnL2ltYWdlL2Rldm9wcy5QTkcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0RldmVsb3BtZW50JyxcclxuICAgICAgICAgICAgc3JjOiAnL2ltYWdlL2RldmVsb3BtZW50LlBORycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQkUnLFxyXG4gICAgICAgICAgICBzcmM6ICcvaW1hZ2UvYmUuUE5HJyxcclxuICAgICAgICB9LFxyXG4gICAgXTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCYXNlIGNvbnRhaW5lck5vPXszfT5cclxuICAgICAgICAgICAgPE1haW5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAge3NraWxsc0FycmF5Lm1hcCgoc2tpbGwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94Q290YWluZXIga2V5PXtza2lsbC50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGl0bGVEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveFRpdGxlPntza2lsbC50aXRsZX08L0JveFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UaXRsZURpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZURpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94SW1hZ2Ugc3JjPXtza2lsbC5zcmN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ltYWdlRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveENvdGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9NYWluU2VjdGlvbj5cclxuICAgICAgICA8L0Jhc2U+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2tpbGxzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9