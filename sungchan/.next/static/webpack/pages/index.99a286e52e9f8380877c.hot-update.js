self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./component/main.tsx":
/*!****************************!*\
  !*** ./component/main.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ "./component/base.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _style_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/style */ "./style/style.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\component\\main.tsx",
    _this = undefined;





var StyledDiv1 = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div.withConfig({
  displayName: "main__StyledDiv1",
  componentId: "sc-1r8z56n-0"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;padding:82px 0;"]);
_c = StyledDiv1;
var StyledDiv2 = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div.withConfig({
  displayName: "main__StyledDiv2",
  componentId: "sc-1r8z56n-1"
})(["display:", ";text-align:center;margin:68px 0;"], function (props) {
  return props.innerWidth >= _style_style__WEBPACK_IMPORTED_MODULE_3__.maxWidth ? 'block' : 'none';
});
_c2 = StyledDiv2;
var div3KeyFrame1 = (0,styled_components__WEBPACK_IMPORTED_MODULE_4__.keyframes)(["0%{transform:translateY(0);}25%{transform:translateY(-25px);}50%{transform:translateY(0);}75%{transfrom:translateY(25px);}100%{transform:translateY(0);}"]);
var StyledDiv3 = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div.withConfig({
  displayName: "main__StyledDiv3",
  componentId: "sc-1r8z56n-2"
})(["display:inline-block;cursor:pointer;&:hover{animate:1s ", ";}"], div3KeyFrame1);
_c3 = StyledDiv3;
var StyledDiv4 = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div.withConfig({
  displayName: "main__StyledDiv4",
  componentId: "sc-1r8z56n-3"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;width:152px;height:152px;border-radius:50%;background-color:#fad232;margin:16px 32px;"]);
_c4 = StyledDiv4;
var StyledDiv5 = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div.withConfig({
  displayName: "main__StyledDiv5",
  componentId: "sc-1r8z56n-4"
})(["display:flex;justify-content:center;"]);
_c5 = StyledDiv5;
var StyledTitle = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.span.withConfig({
  displayName: "main__StyledTitle",
  componentId: "sc-1r8z56n-5"
})(["font-weight:bold;font-size:4.8em;color:#fff;text-align:center;"]);
_c6 = StyledTitle;
var StyledSubTitle = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.span.withConfig({
  displayName: "main__StyledSubTitle",
  componentId: "sc-1r8z56n-6"
})(["font-size:1.3em;color:#fff;"]);
_c7 = StyledSubTitle;
var StyledH3_1 = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.h3.withConfig({
  displayName: "main__StyledH3_1",
  componentId: "sc-1r8z56n-7"
})([""]);
_c8 = StyledH3_1;
var StyledSpan1 = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.span.withConfig({
  displayName: "main__StyledSpan1",
  componentId: "sc-1r8z56n-8"
})(["font-weight:bold;"]);
_c9 = StyledSpan1;

var Main = function Main(_ref) {
  var innerWidth = _ref.innerWidth,
      titleArray = _ref.titleArray;

  var onClickDiv3 = function onClickDiv3(title) {
    var titleSection = document.getElementById(title);

    if (titleSection) {
      titleSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_base__WEBPACK_IMPORTED_MODULE_2__.default, {
    isMain: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv5, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv2, {
        innerWidth: innerWidth,
        children: titleArray.map(function (title) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv3, {
            onClick: function onClick() {
              return onClickDiv3(title);
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv4, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledH3_1, {
                children: title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 37
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan1, {
                children: "Go \u2192"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 33
            }, _this)
          }, title, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 29
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv1, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTitle, {
          children: "\uAE40\uC131\uCC2C\uC758 Portfolio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSubTitle, {
          children: "Since 2021"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 9
  }, _this);
};

_c10 = Main;
/* harmony default export */ __webpack_exports__["default"] = (Main);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;

$RefreshReg$(_c, "StyledDiv1");
$RefreshReg$(_c2, "StyledDiv2");
$RefreshReg$(_c3, "StyledDiv3");
$RefreshReg$(_c4, "StyledDiv4");
$RefreshReg$(_c5, "StyledDiv5");
$RefreshReg$(_c6, "StyledTitle");
$RefreshReg$(_c7, "StyledSubTitle");
$RefreshReg$(_c8, "StyledH3_1");
$RefreshReg$(_c9, "StyledSpan1");
$RefreshReg$(_c10, "Main");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L21haW4udHN4Il0sIm5hbWVzIjpbIlN0eWxlZERpdjEiLCJzdHlsZWQiLCJTdHlsZWREaXYyIiwicHJvcHMiLCJpbm5lcldpZHRoIiwibWF4V2lkdGgiLCJkaXYzS2V5RnJhbWUxIiwia2V5ZnJhbWVzIiwiU3R5bGVkRGl2MyIsIlN0eWxlZERpdjQiLCJTdHlsZWREaXY1IiwiU3R5bGVkVGl0bGUiLCJTdHlsZWRTdWJUaXRsZSIsIlN0eWxlZEgzXzEiLCJTdHlsZWRTcGFuMSIsIk1haW4iLCJ0aXRsZUFycmF5Iiwib25DbGlja0RpdjMiLCJ0aXRsZSIsInRpdGxlU2VjdGlvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSxvR0FBaEI7S0FBTUQsVTtBQVlOLElBQU1FLFVBQVUsR0FBR0QscUVBQUg7QUFBQTtBQUFBO0FBQUEsc0RBQ0QsVUFBQ0UsS0FBRDtBQUFBLFNBQXlCQSxLQUFLLENBQUNDLFVBQU4sSUFBb0JDLGtEQUFwQixHQUErQixPQUEvQixHQUF5QyxNQUFsRTtBQUFBLENBREMsQ0FBaEI7TUFBTUgsVTtBQU1OLElBQU1JLGFBQWEsR0FBR0MsNERBQUgsOEpBQW5CO0FBc0JBLElBQU1DLFVBQVUsR0FBR1AscUVBQUg7QUFBQTtBQUFBO0FBQUEsc0VBS01LLGFBTE4sQ0FBaEI7TUFBTUUsVTtBQVNOLElBQU1DLFVBQVUsR0FBR1IscUVBQUg7QUFBQTtBQUFBO0FBQUEsMEtBQWhCO01BQU1RLFU7QUFZTixJQUFNQyxVQUFVLEdBQUdULHFFQUFIO0FBQUE7QUFBQTtBQUFBLDRDQUFoQjtNQUFNUyxVO0FBS04sSUFBTUMsV0FBVyxHQUFHVixzRUFBSDtBQUFBO0FBQUE7QUFBQSxzRUFBakI7TUFBTVUsVztBQU9OLElBQU1DLGNBQWMsR0FBR1gsc0VBQUg7QUFBQTtBQUFBO0FBQUEsbUNBQXBCO01BQU1XLGM7QUFLTixJQUFNQyxVQUFVLEdBQUdaLG9FQUFIO0FBQUE7QUFBQTtBQUFBLFFBQWhCO01BQU1ZLFU7QUFFTixJQUFNQyxXQUFXLEdBQUdiLHNFQUFIO0FBQUE7QUFBQTtBQUFBLHlCQUFqQjtNQUFNYSxXOztBQVNOLElBQU1DLElBQXFCLEdBQUcsU0FBeEJBLElBQXdCLE9BQTZDO0FBQUEsTUFBMUNYLFVBQTBDLFFBQTFDQSxVQUEwQztBQUFBLE1BQTlCWSxVQUE4QixRQUE5QkEsVUFBOEI7O0FBQ3ZFLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBbUI7QUFDbkMsUUFBTUMsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0JILEtBQXhCLENBQXJCOztBQUVBLFFBQUlDLFlBQUosRUFBa0I7QUFDZEEsa0JBQVksQ0FBQ0csY0FBYixDQUE0QjtBQUFFQyxnQkFBUSxFQUFFO0FBQVosT0FBNUI7QUFDSDtBQUNKLEdBTkQ7O0FBUUEsc0JBQ0ksOERBQUMsMENBQUQ7QUFBTSxVQUFNLEVBQUUsSUFBZDtBQUFBLDJCQUNJLDhEQUFDLFVBQUQ7QUFBQSw4QkFDSSw4REFBQyxVQUFEO0FBQVksa0JBQVUsRUFBRW5CLFVBQXhCO0FBQUEsa0JBQ0tZLFVBQVUsQ0FBQ1EsR0FBWCxDQUFlLFVBQUNOLEtBQUQsRUFBVztBQUN2Qiw4QkFDSSw4REFBQyxVQUFEO0FBQXdCLG1CQUFPLEVBQUU7QUFBQSxxQkFBTUQsV0FBVyxDQUFDQyxLQUFELENBQWpCO0FBQUEsYUFBakM7QUFBQSxtQ0FDSSw4REFBQyxVQUFEO0FBQUEsc0NBQ0ksOERBQUMsVUFBRDtBQUFBLDBCQUFhQTtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFFSSw4REFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLGFBQWlCQSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKO0FBUUgsU0FUQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQWNJLDhEQUFDLFVBQUQ7QUFBQSxnQ0FDSSw4REFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUksOERBQUMsY0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF1QkgsQ0FoQ0Q7O09BQU1ILEk7QUFrQ04sK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTlhMjg2ZTUyZTlmODM4MDg3N2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcclxuaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IG1heFdpZHRoIH0gZnJvbSAnLi4vc3R5bGUvc3R5bGUnO1xyXG5cclxuY29uc3QgU3R5bGVkRGl2MSA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDgycHggMDtcclxuYDtcclxuXHJcbmludGVyZmFjZSBJU3R5ZWxkRGl2MiB7XHJcbiAgICBpbm5lcldpZHRoOiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IFN0eWxlZERpdjIgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogJHsocHJvcHM6IElTdHllbGREaXYyKSA9PiAocHJvcHMuaW5uZXJXaWR0aCA+PSBtYXhXaWR0aCA/ICdibG9jaycgOiAnbm9uZScpfTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogNjhweCAwO1xyXG5gO1xyXG5cclxuY29uc3QgZGl2M0tleUZyYW1lMSA9IGtleWZyYW1lc2BcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgMjUlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI1cHgpO1xyXG4gICAgfVxyXG5cclxuICAgIDUwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgfVxyXG5cclxuICAgIDc1JSB7XHJcbiAgICAgICAgdHJhbnNmcm9tOiB0cmFuc2xhdGVZKDI1cHgpO1xyXG4gICAgfVxyXG5cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZERpdjMgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGFuaW1hdGU6IDFzICR7ZGl2M0tleUZyYW1lMX07XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWREaXY0ID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDE1MnB4O1xyXG4gICAgaGVpZ2h0OiAxNTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWQyMzI7XHJcbiAgICBtYXJnaW46IDE2cHggMzJweDtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZERpdjUgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkVGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiA0LjhlbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkU3ViVGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZEgzXzEgPSBzdHlsZWQuaDNgYDtcclxuXHJcbmNvbnN0IFN0eWxlZFNwYW4xID0gc3R5bGVkLnNwYW5gXHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuYDtcclxuXHJcbmludGVyZmFjZSBJTWFpbiB7XHJcbiAgICBpbm5lcldpZHRoOiBudW1iZXI7XHJcbiAgICB0aXRsZUFycmF5OiBzdHJpbmdbXTtcclxufVxyXG5cclxuY29uc3QgTWFpbjogUmVhY3QuRkM8SU1haW4+ID0gKHsgaW5uZXJXaWR0aCwgdGl0bGVBcnJheSB9KTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgY29uc3Qgb25DbGlja0RpdjMgPSAodGl0bGU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRpdGxlU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRpdGxlKTtcclxuXHJcbiAgICAgICAgaWYgKHRpdGxlU2VjdGlvbikge1xyXG4gICAgICAgICAgICB0aXRsZVNlY3Rpb24uc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCYXNlIGlzTWFpbj17dHJ1ZX0+XHJcbiAgICAgICAgICAgIDxTdHlsZWREaXY1PlxyXG4gICAgICAgICAgICAgICAgPFN0eWxlZERpdjIgaW5uZXJXaWR0aD17aW5uZXJXaWR0aH0+XHJcbiAgICAgICAgICAgICAgICAgICAge3RpdGxlQXJyYXkubWFwKCh0aXRsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZERpdjMga2V5PXt0aXRsZX0gb25DbGljaz17KCkgPT4gb25DbGlja0RpdjModGl0bGUpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRGl2ND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZEgzXzE+e3RpdGxlfTwvU3R5bGVkSDNfMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4xPkdvIOKGkjwvU3R5bGVkU3BhbjE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXY0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXYzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9TdHlsZWREaXYyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxTdHlsZWREaXYxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWRUaXRsZT7quYDshLHssKzsnZggUG9ydGZvbGlvPC9TdHlsZWRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3ViVGl0bGU+U2luY2UgMjAyMTwvU3R5bGVkU3ViVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8L1N0eWxlZERpdjE+XHJcbiAgICAgICAgICAgIDwvU3R5bGVkRGl2NT5cclxuICAgICAgICA8L0Jhc2U+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==