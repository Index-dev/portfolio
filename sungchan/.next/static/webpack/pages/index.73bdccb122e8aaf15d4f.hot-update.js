self["webpackHotUpdate_N_E"]("pages/index",{

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _component_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/main */ "./component/main.tsx");
/* harmony import */ var _component_whoAmI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/whoAmI */ "./component/whoAmI.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\pages\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();






var StyledDiv1 = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.div.withConfig({
  displayName: "pages__StyledDiv1",
  componentId: "sc-aoyeiy-0"
})(["display:flex;width:", "px;height:100%;overflow:hidden;"], function (props) {
  return props.innerWidth * props.count;
});
_c = StyledDiv1;

var Index = function Index() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__.useState(0),
      _React$useState2 = (0,C_Users_User_Desktop_study_portfolio_sungchan_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 2),
      innerWidth = _React$useState2[0],
      setInnerWidth = _React$useState2[1];

  var div1Ref = react__WEBPACK_IMPORTED_MODULE_3__.useRef();
  var count = 2;
  var mousePress = false;
  var clientX = 0;
  react__WEBPACK_IMPORTED_MODULE_3__.useEffect(function () {
    setInnerWidth(window.innerWidth);

    var resizeAction = function resizeAction() {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener('resize', resizeAction);
    return function () {
      window.removeEventListener('resize', resizeAction);
    };
  }, []);

  var onMouseDown = function onMouseDown(e) {
    mousePress = true;
    clientX = e.clientX;
  };

  var onMouseUp = function onMouseUp() {
    mousePress = false;

    if (div1Ref.current) {
      div1Ref.current.style.transform = "translateX(0px)";
    }
  };

  var onMouseMove = function onMouseMove(e) {
    if (mousePress) {
      if (div1Ref.current) {
        div1Ref.current.style.transform = "translateX(".concat(e.clientX - clientX, "px)");
      }
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv1, {
      innerWidth: innerWidth,
      count: count,
      onMouseDown: onMouseDown,
      onMouseUp: onMouseUp,
      onMouseMove: onMouseMove,
      ref: div1Ref,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_main__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_whoAmI__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default()), {
      id: "3475621668",
      children: "body{margin:0;padding:0;overflow-x:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcc3R1ZHlcXHBvcnRmb2xpb1xcc3VuZ2NoYW5cXHBhZ2VzXFxpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkVpQixBQUdrQyxTQUNDLFVBQ1Esa0JBQ3RCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcc3R1ZHlcXHBvcnRmb2xpb1xcc3VuZ2NoYW5cXHBhZ2VzXFxpbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgTWFpbiBmcm9tICcuLi9jb21wb25lbnQvbWFpbic7XHJcbmltcG9ydCBXaG9BbUkgZnJvbSAnLi4vY29tcG9uZW50L3dob0FtSSc7XHJcblxyXG5pbnRlcmZhY2UgSVN0eWxlZERpdjEge1xyXG4gICAgaW5uZXJXaWR0aDogbnVtYmVyO1xyXG4gICAgY291bnQ6IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgU3R5bGVkRGl2MSA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6ICR7KHByb3BzOiBJU3R5bGVkRGl2MSkgPT4gcHJvcHMuaW5uZXJXaWR0aCAqIHByb3BzLmNvdW50fXB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuYDtcclxuXHJcbmNvbnN0IEluZGV4ID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIGNvbnN0IFtpbm5lcldpZHRoLCBzZXRJbm5lcldpZHRoXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oMCk7XHJcblxyXG4gICAgY29uc3QgZGl2MVJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuXHJcbiAgICBjb25zdCBjb3VudCA9IDI7XHJcbiAgICBsZXQgbW91c2VQcmVzcyA9IGZhbHNlO1xyXG4gICAgbGV0IGNsaWVudFggPSAwO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0SW5uZXJXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc2l6ZUFjdGlvbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgc2V0SW5uZXJXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUFjdGlvbik7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVBY3Rpb24pO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3Qgb25Nb3VzZURvd24gPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcclxuICAgICAgICBtb3VzZVByZXNzID0gdHJ1ZTtcclxuICAgICAgICBjbGllbnRYID0gZS5jbGllbnRYO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvbk1vdXNlVXAgPSAoKSA9PiB7XHJcbiAgICAgICAgbW91c2VQcmVzcyA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChkaXYxUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgZGl2MVJlZi5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKDBweClgO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25Nb3VzZU1vdmUgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcclxuICAgICAgICBpZiAobW91c2VQcmVzcykge1xyXG4gICAgICAgICAgICBpZiAoZGl2MVJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtlLmNsaWVudFggLSBjbGllbnRYfXB4KWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFN0eWxlZERpdjFcclxuICAgICAgICAgICAgICAgIGlubmVyV2lkdGg9e2lubmVyV2lkdGh9XHJcbiAgICAgICAgICAgICAgICBjb3VudD17Y291bnR9XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17b25Nb3VzZURvd259XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlVXA9e29uTW91c2VVcH1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VNb3ZlPXtvbk1vdXNlTW92ZX1cclxuICAgICAgICAgICAgICAgIHJlZj17ZGl2MVJlZn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPE1haW4gLz5cclxuICAgICAgICAgICAgICAgIDxXaG9BbUkgLz5cclxuICAgICAgICAgICAgPC9TdHlsZWREaXYxPlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\User\\\\Desktop\\\\study\\\\portfolio\\\\sungchan\\\\pages\\\\index.tsx */"
    }, void 0, false, void 0, _this)]
  }, void 0, true);
};

_s(Index, "oQL+OfcRYhsJHIb6qwZM/jK+bIE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlN0eWxlZERpdjEiLCJzdHlsZWQiLCJwcm9wcyIsImlubmVyV2lkdGgiLCJjb3VudCIsIkluZGV4IiwiUmVhY3QiLCJzZXRJbm5lcldpZHRoIiwiZGl2MVJlZiIsIm1vdXNlUHJlc3MiLCJjbGllbnRYIiwid2luZG93IiwicmVzaXplQWN0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvbk1vdXNlRG93biIsImUiLCJvbk1vdXNlVXAiLCJjdXJyZW50Iiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJvbk1vdXNlTW92ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFPQSxJQUFNQSxVQUFVLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLCtEQUVILFVBQUNDLEtBQUQ7QUFBQSxTQUF3QkEsS0FBSyxDQUFDQyxVQUFOLEdBQW1CRCxLQUFLLENBQUNFLEtBQWpEO0FBQUEsQ0FGRyxDQUFoQjtLQUFNSixVOztBQU9OLElBQU1LLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQW1CO0FBQUE7O0FBQUEsd0JBQ09DLDJDQUFBLENBQXVCLENBQXZCLENBRFA7QUFBQTtBQUFBLE1BQ3RCSCxVQURzQjtBQUFBLE1BQ1ZJLGFBRFU7O0FBRzdCLE1BQU1DLE9BQU8sR0FBR0YseUNBQUEsRUFBaEI7QUFFQSxNQUFNRixLQUFLLEdBQUcsQ0FBZDtBQUNBLE1BQUlLLFVBQVUsR0FBRyxLQUFqQjtBQUNBLE1BQUlDLE9BQU8sR0FBRyxDQUFkO0FBRUFKLDhDQUFBLENBQWdCLFlBQU07QUFDbEJDLGlCQUFhLENBQUNJLE1BQU0sQ0FBQ1IsVUFBUixDQUFiOztBQUVBLFFBQU1TLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDdkJMLG1CQUFhLENBQUNJLE1BQU0sQ0FBQ1IsVUFBUixDQUFiO0FBQ0gsS0FGRDs7QUFJQVEsVUFBTSxDQUFDRSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0QsWUFBbEM7QUFFQSxXQUFPLFlBQU07QUFDVEQsWUFBTSxDQUFDRyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ0YsWUFBckM7QUFDSCxLQUZEO0FBR0gsR0FaRCxFQVlHLEVBWkg7O0FBY0EsTUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsQ0FBRCxFQUF5QztBQUN6RFAsY0FBVSxHQUFHLElBQWI7QUFDQUMsV0FBTyxHQUFHTSxDQUFDLENBQUNOLE9BQVo7QUFDSCxHQUhEOztBQUtBLE1BQU1PLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDcEJSLGNBQVUsR0FBRyxLQUFiOztBQUNBLFFBQUlELE9BQU8sQ0FBQ1UsT0FBWixFQUFxQjtBQUNqQlYsYUFBTyxDQUFDVSxPQUFSLENBQWdCQyxLQUFoQixDQUFzQkMsU0FBdEI7QUFDSDtBQUNKLEdBTEQ7O0FBT0EsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0wsQ0FBRCxFQUF5QztBQUN6RCxRQUFJUCxVQUFKLEVBQWdCO0FBQ1osVUFBSUQsT0FBTyxDQUFDVSxPQUFaLEVBQXFCO0FBQ2pCVixlQUFPLENBQUNVLE9BQVIsQ0FBZ0JDLEtBQWhCLENBQXNCQyxTQUF0Qix3QkFBZ0RKLENBQUMsQ0FBQ04sT0FBRixHQUFZQSxPQUE1RDtBQUNIO0FBQ0o7QUFDSixHQU5EOztBQVFBLHNCQUNJO0FBQUEsNEJBQ0ksOERBQUMsVUFBRDtBQUNJLGdCQUFVLEVBQUVQLFVBRGhCO0FBRUksV0FBSyxFQUFFQyxLQUZYO0FBR0ksaUJBQVcsRUFBRVcsV0FIakI7QUFJSSxlQUFTLEVBQUVFLFNBSmY7QUFLSSxpQkFBVyxFQUFFSSxXQUxqQjtBQU1JLFNBQUcsRUFBRWIsT0FOVDtBQUFBLDhCQVFJLDhEQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSSixlQVNJLDhEQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKO0FBeUJILENBcEVEOztHQUFNSCxLOztNQUFBQSxLO0FBc0VOLCtEQUFlQSxLQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjczYmRjY2IxMjJlOGFhZjE1ZDRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgTWFpbiBmcm9tICcuLi9jb21wb25lbnQvbWFpbic7XHJcbmltcG9ydCBXaG9BbUkgZnJvbSAnLi4vY29tcG9uZW50L3dob0FtSSc7XHJcblxyXG5pbnRlcmZhY2UgSVN0eWxlZERpdjEge1xyXG4gICAgaW5uZXJXaWR0aDogbnVtYmVyO1xyXG4gICAgY291bnQ6IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgU3R5bGVkRGl2MSA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6ICR7KHByb3BzOiBJU3R5bGVkRGl2MSkgPT4gcHJvcHMuaW5uZXJXaWR0aCAqIHByb3BzLmNvdW50fXB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuYDtcclxuXHJcbmNvbnN0IEluZGV4ID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIGNvbnN0IFtpbm5lcldpZHRoLCBzZXRJbm5lcldpZHRoXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oMCk7XHJcblxyXG4gICAgY29uc3QgZGl2MVJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuXHJcbiAgICBjb25zdCBjb3VudCA9IDI7XHJcbiAgICBsZXQgbW91c2VQcmVzcyA9IGZhbHNlO1xyXG4gICAgbGV0IGNsaWVudFggPSAwO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0SW5uZXJXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc2l6ZUFjdGlvbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgc2V0SW5uZXJXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUFjdGlvbik7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVBY3Rpb24pO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3Qgb25Nb3VzZURvd24gPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcclxuICAgICAgICBtb3VzZVByZXNzID0gdHJ1ZTtcclxuICAgICAgICBjbGllbnRYID0gZS5jbGllbnRYO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvbk1vdXNlVXAgPSAoKSA9PiB7XHJcbiAgICAgICAgbW91c2VQcmVzcyA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChkaXYxUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgZGl2MVJlZi5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKDBweClgO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25Nb3VzZU1vdmUgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcclxuICAgICAgICBpZiAobW91c2VQcmVzcykge1xyXG4gICAgICAgICAgICBpZiAoZGl2MVJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtlLmNsaWVudFggLSBjbGllbnRYfXB4KWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFN0eWxlZERpdjFcclxuICAgICAgICAgICAgICAgIGlubmVyV2lkdGg9e2lubmVyV2lkdGh9XHJcbiAgICAgICAgICAgICAgICBjb3VudD17Y291bnR9XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17b25Nb3VzZURvd259XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlVXA9e29uTW91c2VVcH1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VNb3ZlPXtvbk1vdXNlTW92ZX1cclxuICAgICAgICAgICAgICAgIHJlZj17ZGl2MVJlZn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPE1haW4gLz5cclxuICAgICAgICAgICAgICAgIDxXaG9BbUkgLz5cclxuICAgICAgICAgICAgPC9TdHlsZWREaXYxPlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9