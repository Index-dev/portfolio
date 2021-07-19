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
        lineNumber: 88,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_main__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_whoAmI__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_main__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default()), {
      id: "3475621668",
      children: "body{margin:0;padding:0;overflow-x:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcc3R1ZHlcXHBvcnRmb2xpb1xcc3VuZ2NoYW5cXHBhZ2VzXFxpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0dpQixBQUdrQyxTQUNDLFVBQ1Esa0JBQ3RCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcc3R1ZHlcXHBvcnRmb2xpb1xcc3VuZ2NoYW5cXHBhZ2VzXFxpbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgTWFpbiBmcm9tICcuLi9jb21wb25lbnQvbWFpbic7XHJcbmltcG9ydCBXaG9BbUkgZnJvbSAnLi4vY29tcG9uZW50L3dob0FtSSc7XHJcblxyXG5pbnRlcmZhY2UgSVN0eWxlZERpdjEge1xyXG4gICAgaW5uZXJXaWR0aDogbnVtYmVyO1xyXG4gICAgY291bnQ6IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgU3R5bGVkRGl2MSA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6ICR7KHByb3BzOiBJU3R5bGVkRGl2MSkgPT4gcHJvcHMuaW5uZXJXaWR0aCAqIChwcm9wcy5jb3VudCArIDIpfXB4OyAvLyDroZzthYzsnbTshZjsnYQg7JyE7ZW0IDLqsJzrp4ztgbwg642UIOuKmOumrOq4sFxyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuYDtcclxuXHJcbmNvbnN0IEluZGV4ID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIGNvbnN0IFtpbm5lcldpZHRoLCBzZXRJbm5lcldpZHRoXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oMCk7XHJcblxyXG4gICAgY29uc3QgZGl2MVJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuXHJcbiAgICBjb25zdCBjb3VudCA9IDI7XHJcbiAgICBsZXQgaW5kZXggPSAxO1xyXG4gICAgbGV0IG1vdXNlUHJlc3MgPSBmYWxzZTtcclxuICAgIGxldCBjbGllbnRYID0gMDtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldElubmVyV2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xyXG5cclxuICAgICAgICBjb25zdCByZXNpemVBY3Rpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldElubmVyV2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xyXG4gICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHstKHdpbmRvdy5pbm5lcldpZHRoICogaW5kZXgpfXB4KWA7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUFjdGlvbik7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVBY3Rpb24pO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3Qgb25Nb3VzZURvd24gPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcclxuICAgICAgICBtb3VzZVByZXNzID0gdHJ1ZTtcclxuICAgICAgICBjbGllbnRYID0gZS5jbGllbnRYO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvbk1vdXNlVXAgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcclxuICAgICAgICBtb3VzZVByZXNzID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKGRpdjFSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICBpZiAoZS5jbGllbnRYIC0gY2xpZW50WCA+PSBpbm5lcldpZHRoIC8gMykge1xyXG4gICAgICAgICAgICAgICAgLy8g7Jqw7Lih7Jy866GcIOuEmOyWtOqwgOuKlCDqsr3smrBcclxuICAgICAgICAgICAgICAgIGluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiBjb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjbGllbnRYIC0gZS5jbGllbnRYID49IGlubmVyV2lkdGggLyAzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDsoozsuKHsnLzroZwg64SY7Ja06rCA64qUIOqyveyasFxyXG4gICAgICAgICAgICAgICAgaW5kZXgtLTtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA8IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IGNvdW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHstKGlubmVyV2lkdGggKiBpbmRleCl9cHgpYDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG9uTW91c2VNb3ZlID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgaWYgKG1vdXNlUHJlc3MpIHtcclxuICAgICAgICAgICAgaWYgKGRpdjFSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgZGl2MVJlZi5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7LShpbm5lcldpZHRoICogaW5kZXgpICsgZS5jbGllbnRYIC0gY2xpZW50WH1weClgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxTdHlsZWREaXYxXHJcbiAgICAgICAgICAgICAgICBpbm5lcldpZHRoPXtpbm5lcldpZHRofVxyXG4gICAgICAgICAgICAgICAgY291bnQ9e2NvdW50fVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZURvd249e29uTW91c2VEb3dufVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZVVwPXtvbk1vdXNlVXB9XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlTW92ZT17b25Nb3VzZU1vdmV9XHJcbiAgICAgICAgICAgICAgICByZWY9e2RpdjFSZWZ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHsvKiDroZzthYzsnbTshZjsnYQg7JyE7ZWcIOuniOyngOuniSDsu7Ttj6zrhIztirgg65Ox66GdICovfVxyXG4gICAgICAgICAgICAgICAgPFdob0FtSSAvPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiDsi6TsoJwg67O07Jes7KeA64qUIOy7tO2PrOuEjO2KuCAqL31cclxuICAgICAgICAgICAgICAgIDxNYWluIC8+XHJcbiAgICAgICAgICAgICAgICA8V2hvQW1JIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIOuhnO2FjOydtOyFmOydhCDsnITtlZwg7LKrIOuyiOynuCDsu7Ttj6zrhIztirgg65Ox66GdICovfVxyXG4gICAgICAgICAgICAgICAgPE1haW4gLz5cclxuICAgICAgICAgICAgPC9TdHlsZWREaXYxPlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\User\\\\Desktop\\\\study\\\\portfolio\\\\sungchan\\\\pages\\\\index.tsx */"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlN0eWxlZERpdjEiLCJzdHlsZWQiLCJwcm9wcyIsImlubmVyV2lkdGgiLCJjb3VudCIsIkluZGV4IiwiUmVhY3QiLCJzZXRJbm5lcldpZHRoIiwiZGl2MVJlZiIsImluZGV4IiwibW91c2VQcmVzcyIsImNsaWVudFgiLCJ3aW5kb3ciLCJyZXNpemVBY3Rpb24iLCJjdXJyZW50Iiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9uTW91c2VEb3duIiwiZSIsIm9uTW91c2VVcCIsIm9uTW91c2VNb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU9BLElBQU1BLFVBQVUsR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsK0RBRUgsVUFBQ0MsS0FBRDtBQUFBLFNBQXdCQSxLQUFLLENBQUNDLFVBQU4sSUFBb0JELEtBQUssQ0FBQ0UsS0FBTixHQUFjLENBQWxDLENBQXhCO0FBQUEsQ0FGRyxDQUFoQjtLQUFNSixVOztBQU9OLElBQU1LLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQW1CO0FBQUE7O0FBQUEsd0JBQ09DLDJDQUFBLENBQXVCLENBQXZCLENBRFA7QUFBQTtBQUFBLE1BQ3RCSCxVQURzQjtBQUFBLE1BQ1ZJLGFBRFU7O0FBRzdCLE1BQU1DLE9BQU8sR0FBR0YseUNBQUEsRUFBaEI7QUFFQSxNQUFNRixLQUFLLEdBQUcsQ0FBZDtBQUNBLE1BQUlLLEtBQUssR0FBRyxDQUFaO0FBQ0EsTUFBSUMsVUFBVSxHQUFHLEtBQWpCO0FBQ0EsTUFBSUMsT0FBTyxHQUFHLENBQWQ7QUFFQUwsOENBQUEsQ0FBZ0IsWUFBTTtBQUNsQkMsaUJBQWEsQ0FBQ0ssTUFBTSxDQUFDVCxVQUFSLENBQWI7O0FBRUEsUUFBTVUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN2Qk4sbUJBQWEsQ0FBQ0ssTUFBTSxDQUFDVCxVQUFSLENBQWI7QUFDQUssYUFBTyxDQUFDTSxPQUFSLENBQWdCQyxLQUFoQixDQUFzQkMsU0FBdEIsd0JBQWdELEVBQUVKLE1BQU0sQ0FBQ1QsVUFBUCxHQUFvQk0sS0FBdEIsQ0FBaEQ7QUFDSCxLQUhEOztBQUtBRyxVQUFNLENBQUNLLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDSixZQUFsQztBQUVBLFdBQU8sWUFBTTtBQUNURCxZQUFNLENBQUNNLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDTCxZQUFyQztBQUNILEtBRkQ7QUFHSCxHQWJELEVBYUcsRUFiSDs7QUFlQSxNQUFNTSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxDQUFELEVBQXlDO0FBQ3pEVixjQUFVLEdBQUcsSUFBYjtBQUNBQyxXQUFPLEdBQUdTLENBQUMsQ0FBQ1QsT0FBWjtBQUNILEdBSEQ7O0FBS0EsTUFBTVUsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0QsQ0FBRCxFQUF5QztBQUN2RFYsY0FBVSxHQUFHLEtBQWI7O0FBQ0EsUUFBSUYsT0FBTyxDQUFDTSxPQUFaLEVBQXFCO0FBQ2pCLFVBQUlNLENBQUMsQ0FBQ1QsT0FBRixHQUFZQSxPQUFaLElBQXVCUixVQUFVLEdBQUcsQ0FBeEMsRUFBMkM7QUFDdkM7QUFDQU0sYUFBSzs7QUFDTCxZQUFJQSxLQUFLLEdBQUdMLEtBQVosRUFBbUI7QUFDZkssZUFBSyxHQUFHLENBQVI7QUFDSDtBQUNKLE9BTkQsTUFNTyxJQUFJRSxPQUFPLEdBQUdTLENBQUMsQ0FBQ1QsT0FBWixJQUF1QlIsVUFBVSxHQUFHLENBQXhDLEVBQTJDO0FBQzlDO0FBQ0FNLGFBQUs7O0FBQ0wsWUFBSUEsS0FBSyxHQUFHLENBQVosRUFBZTtBQUNYQSxlQUFLLEdBQUdMLEtBQVI7QUFDSDtBQUNKOztBQUVESSxhQUFPLENBQUNNLE9BQVIsQ0FBZ0JDLEtBQWhCLENBQXNCQyxTQUF0Qix3QkFBZ0QsRUFBRWIsVUFBVSxHQUFHTSxLQUFmLENBQWhEO0FBQ0g7QUFDSixHQW5CRDs7QUFxQkEsTUFBTWEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0YsQ0FBRCxFQUF5QztBQUN6RCxRQUFJVixVQUFKLEVBQWdCO0FBQ1osVUFBSUYsT0FBTyxDQUFDTSxPQUFaLEVBQXFCO0FBQ2pCTixlQUFPLENBQUNNLE9BQVIsQ0FBZ0JDLEtBQWhCLENBQXNCQyxTQUF0Qix3QkFBZ0QsRUFBRWIsVUFBVSxHQUFHTSxLQUFmLElBQXdCVyxDQUFDLENBQUNULE9BQTFCLEdBQW9DQSxPQUFwRjtBQUNIO0FBQ0o7QUFDSixHQU5EOztBQVFBLHNCQUNJO0FBQUEsNEJBQ0ksOERBQUMsVUFBRDtBQUNJLGdCQUFVLEVBQUVSLFVBRGhCO0FBRUksV0FBSyxFQUFFQyxLQUZYO0FBR0ksaUJBQVcsRUFBRWUsV0FIakI7QUFJSSxlQUFTLEVBQUVFLFNBSmY7QUFLSSxpQkFBVyxFQUFFQyxXQUxqQjtBQU1JLFNBQUcsRUFBRWQsT0FOVDtBQUFBLDhCQVNJLDhEQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFUSixlQVlJLDhEQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFaSixlQWFJLDhEQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiSixlQWdCSSw4REFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBaEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREo7QUFnQ0gsQ0EzRkQ7O0dBQU1ILEs7O01BQUFBLEs7QUE2Rk4sK0RBQWVBLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzE2ZWJmNTg0MDU4MzYwY2RjNjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBNYWluIGZyb20gJy4uL2NvbXBvbmVudC9tYWluJztcclxuaW1wb3J0IFdob0FtSSBmcm9tICcuLi9jb21wb25lbnQvd2hvQW1JJztcclxuXHJcbmludGVyZmFjZSBJU3R5bGVkRGl2MSB7XHJcbiAgICBpbm5lcldpZHRoOiBudW1iZXI7XHJcbiAgICBjb3VudDogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBTdHlsZWREaXYxID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogJHsocHJvcHM6IElTdHlsZWREaXYxKSA9PiBwcm9wcy5pbm5lcldpZHRoICogKHByb3BzLmNvdW50ICsgMil9cHg7IC8vIOuhnO2FjOydtOyFmOydhCDsnITtlbQgMuqwnOunjO2BvCDrjZQg64qY66as6riwXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5gO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgY29uc3QgW2lubmVyV2lkdGgsIHNldElubmVyV2lkdGhdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPigwKTtcclxuXHJcbiAgICBjb25zdCBkaXYxUmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG5cclxuICAgIGNvbnN0IGNvdW50ID0gMjtcclxuICAgIGxldCBpbmRleCA9IDE7XHJcbiAgICBsZXQgbW91c2VQcmVzcyA9IGZhbHNlO1xyXG4gICAgbGV0IGNsaWVudFggPSAwO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0SW5uZXJXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc2l6ZUFjdGlvbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgc2V0SW5uZXJXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgICAgICAgICAgIGRpdjFSZWYuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgkey0od2luZG93LmlubmVyV2lkdGggKiBpbmRleCl9cHgpYDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplQWN0aW9uKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUFjdGlvbik7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBvbk1vdXNlRG93biA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xyXG4gICAgICAgIG1vdXNlUHJlc3MgPSB0cnVlO1xyXG4gICAgICAgIGNsaWVudFggPSBlLmNsaWVudFg7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG9uTW91c2VVcCA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xyXG4gICAgICAgIG1vdXNlUHJlc3MgPSBmYWxzZTtcclxuICAgICAgICBpZiAoZGl2MVJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGlmIChlLmNsaWVudFggLSBjbGllbnRYID49IGlubmVyV2lkdGggLyAzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDsmrDsuKHsnLzroZwg64SY7Ja06rCA64qUIOqyveyasFxyXG4gICAgICAgICAgICAgICAgaW5kZXgrKztcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IGNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNsaWVudFggLSBlLmNsaWVudFggPj0gaW5uZXJXaWR0aCAvIDMpIHtcclxuICAgICAgICAgICAgICAgIC8vIOyijOy4oeycvOuhnCDrhJjslrTqsIDripQg6rK97JqwXHJcbiAgICAgICAgICAgICAgICBpbmRleC0tO1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4IDwgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gY291bnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRpdjFSZWYuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgkey0oaW5uZXJXaWR0aCAqIGluZGV4KX1weClgO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25Nb3VzZU1vdmUgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcclxuICAgICAgICBpZiAobW91c2VQcmVzcykge1xyXG4gICAgICAgICAgICBpZiAoZGl2MVJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHstKGlubmVyV2lkdGggKiBpbmRleCkgKyBlLmNsaWVudFggLSBjbGllbnRYfXB4KWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFN0eWxlZERpdjFcclxuICAgICAgICAgICAgICAgIGlubmVyV2lkdGg9e2lubmVyV2lkdGh9XHJcbiAgICAgICAgICAgICAgICBjb3VudD17Y291bnR9XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17b25Nb3VzZURvd259XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlVXA9e29uTW91c2VVcH1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VNb3ZlPXtvbk1vdXNlTW92ZX1cclxuICAgICAgICAgICAgICAgIHJlZj17ZGl2MVJlZn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgey8qIOuhnO2FjOydtOyFmOydhCDsnITtlZwg66eI7KeA66eJIOy7tO2PrOuEjO2KuCDrk7HroZ0gKi99XHJcbiAgICAgICAgICAgICAgICA8V2hvQW1JIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIOyLpOygnCDrs7Tsl6zsp4DripQg7Lu07Y+s64SM7Yq4ICovfVxyXG4gICAgICAgICAgICAgICAgPE1haW4gLz5cclxuICAgICAgICAgICAgICAgIDxXaG9BbUkgLz5cclxuXHJcbiAgICAgICAgICAgICAgICB7Lyog66Gc7YWM7J207IWY7J2EIOychO2VnCDssqsg67KI7Ke4IOy7tO2PrOuEjO2KuCDrk7HroZ0gKi99XHJcbiAgICAgICAgICAgICAgICA8TWFpbiAvPlxyXG4gICAgICAgICAgICA8L1N0eWxlZERpdjE+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=