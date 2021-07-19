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
  return props.innerWidth * (props.count + 2);
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
  var index = 1;
  var mousePress = false;
  var clientX = 0;
  react__WEBPACK_IMPORTED_MODULE_3__.useEffect(function () {
    setInnerWidth(window.innerWidth);

    var resizeAction = function resizeAction() {
      setInnerWidth(window.innerWidth);
      div1Ref.current.style.transform = "translateX(".concat(-(window.innerWidth * index), "px)");
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

  var onMouseUp = function onMouseUp(e) {
    mousePress = false;

    if (div1Ref.current) {
      if (e.clientX - clientX >= innerWidth / 3) {
        // 우측으로 넘어가는 경우
        index++;

        if (index > count) {
          index = 1;
        }
      } else if (clientX - e.clientX >= innerWidth / 3) {
        // 좌측으로 넘어가는 경우
        index--;

        if (index < 1) {
          index = count;
        }
      }

      div1Ref.current.style.transform = "translateX(".concat(-(innerWidth * index), "px)");
    }
  };

  var onMouseMove = function onMouseMove(e) {
    // 마우스를 눌렀을 때만 이벤트 반응하기
    if (mousePress) {
      if (div1Ref.current) {
        div1Ref.current.style.transform = "translateX(".concat(-(innerWidth * index) + e.clientX - clientX, "px)");
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
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_whoAmI__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_main__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_whoAmI__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_main__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default()), {
      id: "3475621668",
      children: "body{margin:0;padding:0;overflow-x:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcc3R1ZHlcXHBvcnRmb2xpb1xcc3VuZ2NoYW5cXHBhZ2VzXFxpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUdpQixBQUdrQyxTQUNDLFVBQ1Esa0JBQ3RCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcc3R1ZHlcXHBvcnRmb2xpb1xcc3VuZ2NoYW5cXHBhZ2VzXFxpbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgTWFpbiBmcm9tICcuLi9jb21wb25lbnQvbWFpbic7XHJcbmltcG9ydCBXaG9BbUkgZnJvbSAnLi4vY29tcG9uZW50L3dob0FtSSc7XHJcblxyXG5pbnRlcmZhY2UgSVN0eWxlZERpdjEge1xyXG4gICAgaW5uZXJXaWR0aDogbnVtYmVyO1xyXG4gICAgY291bnQ6IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgU3R5bGVkRGl2MSA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6ICR7KHByb3BzOiBJU3R5bGVkRGl2MSkgPT4gcHJvcHMuaW5uZXJXaWR0aCAqIChwcm9wcy5jb3VudCArIDIpfXB4OyAvLyDroZzthYzsnbTshZjsnYQg7JyE7ZW0IDLqsJzrp4ztgbwg642UIOuKmOumrOq4sFxyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuYDtcclxuXHJcbmNvbnN0IEluZGV4ID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIGNvbnN0IFtpbm5lcldpZHRoLCBzZXRJbm5lcldpZHRoXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oMCk7XHJcblxyXG4gICAgY29uc3QgZGl2MVJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuXHJcbiAgICBjb25zdCBjb3VudCA9IDI7XHJcbiAgICBsZXQgaW5kZXggPSAxO1xyXG4gICAgbGV0IG1vdXNlUHJlc3MgPSBmYWxzZTtcclxuICAgIGxldCBjbGllbnRYID0gMDtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldElubmVyV2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xyXG5cclxuICAgICAgICBjb25zdCByZXNpemVBY3Rpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldElubmVyV2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xyXG4gICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHstKHdpbmRvdy5pbm5lcldpZHRoICogaW5kZXgpfXB4KWA7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUFjdGlvbik7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVBY3Rpb24pO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3Qgb25Nb3VzZURvd24gPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcclxuICAgICAgICBtb3VzZVByZXNzID0gdHJ1ZTtcclxuICAgICAgICBjbGllbnRYID0gZS5jbGllbnRYO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvbk1vdXNlVXAgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcclxuICAgICAgICBtb3VzZVByZXNzID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKGRpdjFSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICBpZiAoZS5jbGllbnRYIC0gY2xpZW50WCA+PSBpbm5lcldpZHRoIC8gMykge1xyXG4gICAgICAgICAgICAgICAgLy8g7Jqw7Lih7Jy866GcIOuEmOyWtOqwgOuKlCDqsr3smrBcclxuICAgICAgICAgICAgICAgIGluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiBjb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjbGllbnRYIC0gZS5jbGllbnRYID49IGlubmVyV2lkdGggLyAzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDsoozsuKHsnLzroZwg64SY7Ja06rCA64qUIOqyveyasFxyXG4gICAgICAgICAgICAgICAgaW5kZXgtLTtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA8IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IGNvdW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHstKGlubmVyV2lkdGggKiBpbmRleCl9cHgpYDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG9uTW91c2VNb3ZlID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgLy8g66eI7Jqw7Iqk66W8IOuIjOuggOydhCDrlYzrp4wg7J2067Kk7Yq4IOuwmOydke2VmOq4sFxyXG4gICAgICAgIGlmIChtb3VzZVByZXNzKSB7XHJcbiAgICAgICAgICAgIGlmIChkaXYxUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgIGRpdjFSZWYuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgkey0oaW5uZXJXaWR0aCAqIGluZGV4KSArIGUuY2xpZW50WCAtIGNsaWVudFh9cHgpYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8U3R5bGVkRGl2MVxyXG4gICAgICAgICAgICAgICAgaW5uZXJXaWR0aD17aW5uZXJXaWR0aH1cclxuICAgICAgICAgICAgICAgIGNvdW50PXtjb3VudH1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXtvbk1vdXNlRG93bn1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VVcD17b25Nb3VzZVVwfVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZU1vdmU9e29uTW91c2VNb3ZlfVxyXG4gICAgICAgICAgICAgICAgcmVmPXtkaXYxUmVmfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Lyog66Gc7YWM7J207IWY7J2EIOychO2VnCDrp4jsp4Drp4kg7Lu07Y+s64SM7Yq4IOuTseuhnSAqL31cclxuICAgICAgICAgICAgICAgIDxXaG9BbUkgLz5cclxuXHJcbiAgICAgICAgICAgICAgICB7Lyog7Iuk7KCcIOuztOyXrOyngOuKlCDsu7Ttj6zrhIztirggKi99XHJcbiAgICAgICAgICAgICAgICA8TWFpbiAvPlxyXG4gICAgICAgICAgICAgICAgPFdob0FtSSAvPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiDroZzthYzsnbTshZjsnYQg7JyE7ZWcIOyyqyDrsojsp7gg7Lu07Y+s64SM7Yq4IOuTseuhnSAqL31cclxuICAgICAgICAgICAgICAgIDxNYWluIC8+XHJcbiAgICAgICAgICAgIDwvU3R5bGVkRGl2MT5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\User\\\\Desktop\\\\study\\\\portfolio\\\\sungchan\\\\pages\\\\index.tsx */"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlN0eWxlZERpdjEiLCJzdHlsZWQiLCJwcm9wcyIsImlubmVyV2lkdGgiLCJjb3VudCIsIkluZGV4IiwiUmVhY3QiLCJzZXRJbm5lcldpZHRoIiwiZGl2MVJlZiIsImluZGV4IiwibW91c2VQcmVzcyIsImNsaWVudFgiLCJ3aW5kb3ciLCJyZXNpemVBY3Rpb24iLCJjdXJyZW50Iiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9uTW91c2VEb3duIiwiZSIsIm9uTW91c2VVcCIsIm9uTW91c2VNb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU9BLElBQU1BLFVBQVUsR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsK0RBRUgsVUFBQ0MsS0FBRDtBQUFBLFNBQXdCQSxLQUFLLENBQUNDLFVBQU4sSUFBb0JELEtBQUssQ0FBQ0UsS0FBTixHQUFjLENBQWxDLENBQXhCO0FBQUEsQ0FGRyxDQUFoQjtLQUFNSixVOztBQU9OLElBQU1LLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQW1CO0FBQUE7O0FBQUEsd0JBQ09DLDJDQUFBLENBQXVCLENBQXZCLENBRFA7QUFBQTtBQUFBLE1BQ3RCSCxVQURzQjtBQUFBLE1BQ1ZJLGFBRFU7O0FBRzdCLE1BQU1DLE9BQU8sR0FBR0YseUNBQUEsRUFBaEI7QUFFQSxNQUFNRixLQUFLLEdBQUcsQ0FBZDtBQUNBLE1BQUlLLEtBQUssR0FBRyxDQUFaO0FBQ0EsTUFBSUMsVUFBVSxHQUFHLEtBQWpCO0FBQ0EsTUFBSUMsT0FBTyxHQUFHLENBQWQ7QUFFQUwsOENBQUEsQ0FBZ0IsWUFBTTtBQUNsQkMsaUJBQWEsQ0FBQ0ssTUFBTSxDQUFDVCxVQUFSLENBQWI7O0FBRUEsUUFBTVUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN2Qk4sbUJBQWEsQ0FBQ0ssTUFBTSxDQUFDVCxVQUFSLENBQWI7QUFDQUssYUFBTyxDQUFDTSxPQUFSLENBQWdCQyxLQUFoQixDQUFzQkMsU0FBdEIsd0JBQWdELEVBQUVKLE1BQU0sQ0FBQ1QsVUFBUCxHQUFvQk0sS0FBdEIsQ0FBaEQ7QUFDSCxLQUhEOztBQUtBRyxVQUFNLENBQUNLLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDSixZQUFsQztBQUVBLFdBQU8sWUFBTTtBQUNURCxZQUFNLENBQUNNLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDTCxZQUFyQztBQUNILEtBRkQ7QUFHSCxHQWJELEVBYUcsRUFiSDs7QUFlQSxNQUFNTSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxDQUFELEVBQXlDO0FBQ3pEVixjQUFVLEdBQUcsSUFBYjtBQUNBQyxXQUFPLEdBQUdTLENBQUMsQ0FBQ1QsT0FBWjtBQUNILEdBSEQ7O0FBS0EsTUFBTVUsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0QsQ0FBRCxFQUF5QztBQUN2RFYsY0FBVSxHQUFHLEtBQWI7O0FBQ0EsUUFBSUYsT0FBTyxDQUFDTSxPQUFaLEVBQXFCO0FBQ2pCLFVBQUlNLENBQUMsQ0FBQ1QsT0FBRixHQUFZQSxPQUFaLElBQXVCUixVQUFVLEdBQUcsQ0FBeEMsRUFBMkM7QUFDdkM7QUFDQU0sYUFBSzs7QUFDTCxZQUFJQSxLQUFLLEdBQUdMLEtBQVosRUFBbUI7QUFDZkssZUFBSyxHQUFHLENBQVI7QUFDSDtBQUNKLE9BTkQsTUFNTyxJQUFJRSxPQUFPLEdBQUdTLENBQUMsQ0FBQ1QsT0FBWixJQUF1QlIsVUFBVSxHQUFHLENBQXhDLEVBQTJDO0FBQzlDO0FBQ0FNLGFBQUs7O0FBQ0wsWUFBSUEsS0FBSyxHQUFHLENBQVosRUFBZTtBQUNYQSxlQUFLLEdBQUdMLEtBQVI7QUFDSDtBQUNKOztBQUVESSxhQUFPLENBQUNNLE9BQVIsQ0FBZ0JDLEtBQWhCLENBQXNCQyxTQUF0Qix3QkFBZ0QsRUFBRWIsVUFBVSxHQUFHTSxLQUFmLENBQWhEO0FBQ0g7QUFDSixHQW5CRDs7QUFxQkEsTUFBTWEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0YsQ0FBRCxFQUF5QztBQUN6RDtBQUNBLFFBQUlWLFVBQUosRUFBZ0I7QUFDWixVQUFJRixPQUFPLENBQUNNLE9BQVosRUFBcUI7QUFDakJOLGVBQU8sQ0FBQ00sT0FBUixDQUFnQkMsS0FBaEIsQ0FBc0JDLFNBQXRCLHdCQUFnRCxFQUFFYixVQUFVLEdBQUdNLEtBQWYsSUFBd0JXLENBQUMsQ0FBQ1QsT0FBMUIsR0FBb0NBLE9BQXBGO0FBQ0g7QUFDSjtBQUNKLEdBUEQ7O0FBU0Esc0JBQ0k7QUFBQSw0QkFDSSw4REFBQyxVQUFEO0FBQ0ksZ0JBQVUsRUFBRVIsVUFEaEI7QUFFSSxXQUFLLEVBQUVDLEtBRlg7QUFHSSxpQkFBVyxFQUFFZSxXQUhqQjtBQUlJLGVBQVMsRUFBRUUsU0FKZjtBQUtJLGlCQUFXLEVBQUVDLFdBTGpCO0FBTUksU0FBRyxFQUFFZCxPQU5UO0FBQUEsOEJBU0ksOERBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRKLGVBWUksOERBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVpKLGVBYUksOERBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJKLGVBZ0JJLDhEQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESjtBQWdDSCxDQTVGRDs7R0FBTUgsSzs7TUFBQUEsSztBQThGTiwrREFBZUEsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yMGNhZjY5YTFlZmMwZWFkMmI3Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IE1haW4gZnJvbSAnLi4vY29tcG9uZW50L21haW4nO1xyXG5pbXBvcnQgV2hvQW1JIGZyb20gJy4uL2NvbXBvbmVudC93aG9BbUknO1xyXG5cclxuaW50ZXJmYWNlIElTdHlsZWREaXYxIHtcclxuICAgIGlubmVyV2lkdGg6IG51bWJlcjtcclxuICAgIGNvdW50OiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IFN0eWxlZERpdjEgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAkeyhwcm9wczogSVN0eWxlZERpdjEpID0+IHByb3BzLmlubmVyV2lkdGggKiAocHJvcHMuY291bnQgKyAyKX1weDsgLy8g66Gc7YWM7J207IWY7J2EIOychO2VtCAy6rCc66eM7YG8IOuNlCDripjrpqzquLBcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbmA7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICBjb25zdCBbaW5uZXJXaWR0aCwgc2V0SW5uZXJXaWR0aF0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KDApO1xyXG5cclxuICAgIGNvbnN0IGRpdjFSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KCk7XHJcblxyXG4gICAgY29uc3QgY291bnQgPSAyO1xyXG4gICAgbGV0IGluZGV4ID0gMTtcclxuICAgIGxldCBtb3VzZVByZXNzID0gZmFsc2U7XHJcbiAgICBsZXQgY2xpZW50WCA9IDA7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRJbm5lcldpZHRoKHdpbmRvdy5pbm5lcldpZHRoKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzaXplQWN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJbm5lcldpZHRoKHdpbmRvdy5pbm5lcldpZHRoKTtcclxuICAgICAgICAgICAgZGl2MVJlZi5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7LSh3aW5kb3cuaW5uZXJXaWR0aCAqIGluZGV4KX1weClgO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVBY3Rpb24pO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplQWN0aW9uKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IG9uTW91c2VEb3duID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgbW91c2VQcmVzcyA9IHRydWU7XHJcbiAgICAgICAgY2xpZW50WCA9IGUuY2xpZW50WDtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25Nb3VzZVVwID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgbW91c2VQcmVzcyA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChkaXYxUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgaWYgKGUuY2xpZW50WCAtIGNsaWVudFggPj0gaW5uZXJXaWR0aCAvIDMpIHtcclxuICAgICAgICAgICAgICAgIC8vIOyasOy4oeycvOuhnCDrhJjslrTqsIDripQg6rK97JqwXHJcbiAgICAgICAgICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gY291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2xpZW50WCAtIGUuY2xpZW50WCA+PSBpbm5lcldpZHRoIC8gMykge1xyXG4gICAgICAgICAgICAgICAgLy8g7KKM7Lih7Jy866GcIOuEmOyWtOqwgOuKlCDqsr3smrBcclxuICAgICAgICAgICAgICAgIGluZGV4LS07XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPCAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBjb3VudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZGl2MVJlZi5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7LShpbm5lcldpZHRoICogaW5kZXgpfXB4KWA7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvbk1vdXNlTW92ZSA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xyXG4gICAgICAgIC8vIOuniOyasOyKpOulvCDriIzroIDsnYQg65WM66eMIOydtOuypO2KuCDrsJjsnZHtlZjquLBcclxuICAgICAgICBpZiAobW91c2VQcmVzcykge1xyXG4gICAgICAgICAgICBpZiAoZGl2MVJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHstKGlubmVyV2lkdGggKiBpbmRleCkgKyBlLmNsaWVudFggLSBjbGllbnRYfXB4KWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFN0eWxlZERpdjFcclxuICAgICAgICAgICAgICAgIGlubmVyV2lkdGg9e2lubmVyV2lkdGh9XHJcbiAgICAgICAgICAgICAgICBjb3VudD17Y291bnR9XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17b25Nb3VzZURvd259XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlVXA9e29uTW91c2VVcH1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VNb3ZlPXtvbk1vdXNlTW92ZX1cclxuICAgICAgICAgICAgICAgIHJlZj17ZGl2MVJlZn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgey8qIOuhnO2FjOydtOyFmOydhCDsnITtlZwg66eI7KeA66eJIOy7tO2PrOuEjO2KuCDrk7HroZ0gKi99XHJcbiAgICAgICAgICAgICAgICA8V2hvQW1JIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIOyLpOygnCDrs7Tsl6zsp4DripQg7Lu07Y+s64SM7Yq4ICovfVxyXG4gICAgICAgICAgICAgICAgPE1haW4gLz5cclxuICAgICAgICAgICAgICAgIDxXaG9BbUkgLz5cclxuXHJcbiAgICAgICAgICAgICAgICB7Lyog66Gc7YWM7J207IWY7J2EIOychO2VnCDssqsg67KI7Ke4IOy7tO2PrOuEjO2KuCDrk7HroZ0gKi99XHJcbiAgICAgICAgICAgICAgICA8TWFpbiAvPlxyXG4gICAgICAgICAgICA8L1N0eWxlZERpdjE+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=