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

  var count = 2;
  var mousePress = false;
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
    console.log(e.target);
  };

  var onMouseUp = function onMouseUp(e) {
    mousePress = false;
    console.log(e.target);
  };

  var onMouseMove = function onMouseMove() {
    if (mousePress) {
      console.log('onMouseMove');
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv1, {
      innerWidth: innerWidth,
      count: count,
      onMouseDown: onMouseDown,
      onMouseUp: onMouseUp,
      onMouseMove: onMouseMove,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_main__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_whoAmI__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default()), {
      id: "3475621668",
      children: "body{margin:0;padding:0;overflow-x:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcc3R1ZHlcXHBvcnRmb2xpb1xcc3VuZ2NoYW5cXHBhZ2VzXFxpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUVpQixBQUdrQyxTQUNDLFVBQ1Esa0JBQ3RCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcc3R1ZHlcXHBvcnRmb2xpb1xcc3VuZ2NoYW5cXHBhZ2VzXFxpbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgTWFpbiBmcm9tICcuLi9jb21wb25lbnQvbWFpbic7XHJcbmltcG9ydCBXaG9BbUkgZnJvbSAnLi4vY29tcG9uZW50L3dob0FtSSc7XHJcblxyXG5pbnRlcmZhY2UgSVN0eWxlZERpdjEge1xyXG4gICAgaW5uZXJXaWR0aDogbnVtYmVyO1xyXG4gICAgY291bnQ6IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgU3R5bGVkRGl2MSA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6ICR7KHByb3BzOiBJU3R5bGVkRGl2MSkgPT4gcHJvcHMuaW5uZXJXaWR0aCAqIHByb3BzLmNvdW50fXB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuYDtcclxuXHJcbmNvbnN0IEluZGV4ID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIGNvbnN0IFtpbm5lcldpZHRoLCBzZXRJbm5lcldpZHRoXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oMCk7XHJcblxyXG4gICAgY29uc3QgY291bnQgPSAyO1xyXG4gICAgbGV0IG1vdXNlUHJlc3MgPSBmYWxzZTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldElubmVyV2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xyXG5cclxuICAgICAgICBjb25zdCByZXNpemVBY3Rpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldElubmVyV2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVBY3Rpb24pO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplQWN0aW9uKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IG9uTW91c2VEb3duID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgbW91c2VQcmVzcyA9IHRydWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvbk1vdXNlVXAgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcclxuICAgICAgICBtb3VzZVByZXNzID0gZmFsc2U7XHJcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvbk1vdXNlTW92ZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAobW91c2VQcmVzcykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnb25Nb3VzZU1vdmUnKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFN0eWxlZERpdjFcclxuICAgICAgICAgICAgICAgIGlubmVyV2lkdGg9e2lubmVyV2lkdGh9XHJcbiAgICAgICAgICAgICAgICBjb3VudD17Y291bnR9XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17b25Nb3VzZURvd259XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlVXA9e29uTW91c2VVcH1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VNb3ZlPXtvbk1vdXNlTW92ZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPE1haW4gLz5cclxuICAgICAgICAgICAgICAgIDxXaG9BbUkgLz5cclxuICAgICAgICAgICAgPC9TdHlsZWREaXYxPlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\User\\\\Desktop\\\\study\\\\portfolio\\\\sungchan\\\\pages\\\\index.tsx */"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlN0eWxlZERpdjEiLCJzdHlsZWQiLCJwcm9wcyIsImlubmVyV2lkdGgiLCJjb3VudCIsIkluZGV4IiwiUmVhY3QiLCJzZXRJbm5lcldpZHRoIiwibW91c2VQcmVzcyIsIndpbmRvdyIsInJlc2l6ZUFjdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib25Nb3VzZURvd24iLCJlIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsIm9uTW91c2VVcCIsIm9uTW91c2VNb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU9BLElBQU1BLFVBQVUsR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsK0RBRUgsVUFBQ0MsS0FBRDtBQUFBLFNBQXdCQSxLQUFLLENBQUNDLFVBQU4sR0FBbUJELEtBQUssQ0FBQ0UsS0FBakQ7QUFBQSxDQUZHLENBQWhCO0tBQU1KLFU7O0FBT04sSUFBTUssS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBbUI7QUFBQTs7QUFBQSx3QkFDT0MsMkNBQUEsQ0FBdUIsQ0FBdkIsQ0FEUDtBQUFBO0FBQUEsTUFDdEJILFVBRHNCO0FBQUEsTUFDVkksYUFEVTs7QUFHN0IsTUFBTUgsS0FBSyxHQUFHLENBQWQ7QUFDQSxNQUFJSSxVQUFVLEdBQUcsS0FBakI7QUFFQUYsOENBQUEsQ0FBZ0IsWUFBTTtBQUNsQkMsaUJBQWEsQ0FBQ0UsTUFBTSxDQUFDTixVQUFSLENBQWI7O0FBRUEsUUFBTU8sWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN2QkgsbUJBQWEsQ0FBQ0UsTUFBTSxDQUFDTixVQUFSLENBQWI7QUFDSCxLQUZEOztBQUlBTSxVQUFNLENBQUNFLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDRCxZQUFsQztBQUVBLFdBQU8sWUFBTTtBQUNURCxZQUFNLENBQUNHLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDRixZQUFyQztBQUNILEtBRkQ7QUFHSCxHQVpELEVBWUcsRUFaSDs7QUFjQSxNQUFNRyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxDQUFELEVBQXlDO0FBQ3pETixjQUFVLEdBQUcsSUFBYjtBQUNBTyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBQyxDQUFDRyxNQUFkO0FBQ0gsR0FIRDs7QUFLQSxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDSixDQUFELEVBQXlDO0FBQ3ZETixjQUFVLEdBQUcsS0FBYjtBQUNBTyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBQyxDQUFDRyxNQUFkO0FBQ0gsR0FIRDs7QUFLQSxNQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3RCLFFBQUlYLFVBQUosRUFBZ0I7QUFDWk8sYUFBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUNIO0FBQ0osR0FKRDs7QUFNQSxzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLFVBQUQ7QUFDSSxnQkFBVSxFQUFFYixVQURoQjtBQUVJLFdBQUssRUFBRUMsS0FGWDtBQUdJLGlCQUFXLEVBQUVTLFdBSGpCO0FBSUksZUFBUyxFQUFFSyxTQUpmO0FBS0ksaUJBQVcsRUFBRUMsV0FMakI7QUFBQSw4QkFPSSw4REFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEosZUFRSSw4REFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESjtBQXdCSCxDQTVERDs7R0FBTWQsSzs7TUFBQUEsSztBQThETiwrREFBZUEsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xMzJkOTc4NDdhMjgwZDc2NjVkNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IE1haW4gZnJvbSAnLi4vY29tcG9uZW50L21haW4nO1xyXG5pbXBvcnQgV2hvQW1JIGZyb20gJy4uL2NvbXBvbmVudC93aG9BbUknO1xyXG5cclxuaW50ZXJmYWNlIElTdHlsZWREaXYxIHtcclxuICAgIGlubmVyV2lkdGg6IG51bWJlcjtcclxuICAgIGNvdW50OiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IFN0eWxlZERpdjEgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAkeyhwcm9wczogSVN0eWxlZERpdjEpID0+IHByb3BzLmlubmVyV2lkdGggKiBwcm9wcy5jb3VudH1weDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbmA7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICBjb25zdCBbaW5uZXJXaWR0aCwgc2V0SW5uZXJXaWR0aF0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KDApO1xyXG5cclxuICAgIGNvbnN0IGNvdW50ID0gMjtcclxuICAgIGxldCBtb3VzZVByZXNzID0gZmFsc2U7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRJbm5lcldpZHRoKHdpbmRvdy5pbm5lcldpZHRoKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzaXplQWN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJbm5lcldpZHRoKHdpbmRvdy5pbm5lcldpZHRoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplQWN0aW9uKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUFjdGlvbik7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBvbk1vdXNlRG93biA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xyXG4gICAgICAgIG1vdXNlUHJlc3MgPSB0cnVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25Nb3VzZVVwID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgbW91c2VQcmVzcyA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25Nb3VzZU1vdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKG1vdXNlUHJlc3MpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ29uTW91c2VNb3ZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxTdHlsZWREaXYxXHJcbiAgICAgICAgICAgICAgICBpbm5lcldpZHRoPXtpbm5lcldpZHRofVxyXG4gICAgICAgICAgICAgICAgY291bnQ9e2NvdW50fVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZURvd249e29uTW91c2VEb3dufVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZVVwPXtvbk1vdXNlVXB9XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlTW92ZT17b25Nb3VzZU1vdmV9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxNYWluIC8+XHJcbiAgICAgICAgICAgICAgICA8V2hvQW1JIC8+XHJcbiAgICAgICAgICAgIDwvU3R5bGVkRGl2MT5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==