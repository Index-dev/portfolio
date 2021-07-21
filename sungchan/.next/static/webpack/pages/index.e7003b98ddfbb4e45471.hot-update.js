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
var div3KeyFrame1 = (0,styled_components__WEBPACK_IMPORTED_MODULE_4__.keyframes)(["0%{transform:translateY(0);}50%{transform:translateY(-10px);}100%{transform:translateY(0);}"]);
var StyledDiv3 = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div.withConfig({
  displayName: "main__StyledDiv3",
  componentId: "sc-1r8z56n-2"
})(["display:inline-block;cursor:pointer;transition:1s;transform:translateY(0);&:hover{animation:1.8s ", " infinite;transform:translateY(-10px);}"], div3KeyFrame1);
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
                lineNumber: 107,
                columnNumber: 37
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan1, {
                children: "Go \u2192"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 33
            }, _this)
          }, title, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 29
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv1, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTitle, {
          children: "\uAE40\uC131\uCC2C\uC758 Portfolio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSubTitle, {
          children: "Since 2021"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 100,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L21haW4udHN4Il0sIm5hbWVzIjpbIlN0eWxlZERpdjEiLCJzdHlsZWQiLCJTdHlsZWREaXYyIiwicHJvcHMiLCJpbm5lcldpZHRoIiwibWF4V2lkdGgiLCJkaXYzS2V5RnJhbWUxIiwia2V5ZnJhbWVzIiwiU3R5bGVkRGl2MyIsIlN0eWxlZERpdjQiLCJTdHlsZWREaXY1IiwiU3R5bGVkVGl0bGUiLCJTdHlsZWRTdWJUaXRsZSIsIlN0eWxlZEgzXzEiLCJTdHlsZWRTcGFuMSIsIk1haW4iLCJ0aXRsZUFycmF5Iiwib25DbGlja0RpdjMiLCJ0aXRsZSIsInRpdGxlU2VjdGlvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSxvR0FBaEI7S0FBTUQsVTtBQVlOLElBQU1FLFVBQVUsR0FBR0QscUVBQUg7QUFBQTtBQUFBO0FBQUEsc0RBQ0QsVUFBQ0UsS0FBRDtBQUFBLFNBQXlCQSxLQUFLLENBQUNDLFVBQU4sSUFBb0JDLGtEQUFwQixHQUErQixPQUEvQixHQUF5QyxNQUFsRTtBQUFBLENBREMsQ0FBaEI7TUFBTUgsVTtBQU1OLElBQU1JLGFBQWEsR0FBR0MsNERBQUgsaUdBQW5CO0FBY0EsSUFBTUMsVUFBVSxHQUFHUCxxRUFBSDtBQUFBO0FBQUE7QUFBQSxxSkFPVUssYUFQVixDQUFoQjtNQUFNRSxVO0FBWU4sSUFBTUMsVUFBVSxHQUFHUixxRUFBSDtBQUFBO0FBQUE7QUFBQSwwS0FBaEI7TUFBTVEsVTtBQVlOLElBQU1DLFVBQVUsR0FBR1QscUVBQUg7QUFBQTtBQUFBO0FBQUEsNENBQWhCO01BQU1TLFU7QUFLTixJQUFNQyxXQUFXLEdBQUdWLHNFQUFIO0FBQUE7QUFBQTtBQUFBLHNFQUFqQjtNQUFNVSxXO0FBT04sSUFBTUMsY0FBYyxHQUFHWCxzRUFBSDtBQUFBO0FBQUE7QUFBQSxtQ0FBcEI7TUFBTVcsYztBQUtOLElBQU1DLFVBQVUsR0FBR1osb0VBQUg7QUFBQTtBQUFBO0FBQUEsUUFBaEI7TUFBTVksVTtBQUVOLElBQU1DLFdBQVcsR0FBR2Isc0VBQUg7QUFBQTtBQUFBO0FBQUEseUJBQWpCO01BQU1hLFc7O0FBU04sSUFBTUMsSUFBcUIsR0FBRyxTQUF4QkEsSUFBd0IsT0FBNkM7QUFBQSxNQUExQ1gsVUFBMEMsUUFBMUNBLFVBQTBDO0FBQUEsTUFBOUJZLFVBQThCLFFBQTlCQSxVQUE4Qjs7QUFDdkUsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFtQjtBQUNuQyxRQUFNQyxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QkgsS0FBeEIsQ0FBckI7O0FBRUEsUUFBSUMsWUFBSixFQUFrQjtBQUNkQSxrQkFBWSxDQUFDRyxjQUFiLENBQTRCO0FBQUVDLGdCQUFRLEVBQUU7QUFBWixPQUE1QjtBQUNIO0FBQ0osR0FORDs7QUFRQSxzQkFDSSw4REFBQywwQ0FBRDtBQUFNLFVBQU0sRUFBRSxJQUFkO0FBQUEsMkJBQ0ksOERBQUMsVUFBRDtBQUFBLDhCQUNJLDhEQUFDLFVBQUQ7QUFBWSxrQkFBVSxFQUFFbkIsVUFBeEI7QUFBQSxrQkFDS1ksVUFBVSxDQUFDUSxHQUFYLENBQWUsVUFBQ04sS0FBRCxFQUFXO0FBQ3ZCLDhCQUNJLDhEQUFDLFVBQUQ7QUFBd0IsbUJBQU8sRUFBRTtBQUFBLHFCQUFNRCxXQUFXLENBQUNDLEtBQUQsQ0FBakI7QUFBQSxhQUFqQztBQUFBLG1DQUNJLDhEQUFDLFVBQUQ7QUFBQSxzQ0FDSSw4REFBQyxVQUFEO0FBQUEsMEJBQWFBO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUVJLDhEQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosYUFBaUJBLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREo7QUFRSCxTQVRBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBY0ksOERBQUMsVUFBRDtBQUFBLGdDQUNJLDhEQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSSw4REFBQyxjQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXVCSCxDQWhDRDs7T0FBTUgsSTtBQWtDTiwrREFBZUEsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lNzAwM2I5OGRkZmJiNGU0NTQ3MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xyXG5pbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgbWF4V2lkdGggfSBmcm9tICcuLi9zdHlsZS9zdHlsZSc7XHJcblxyXG5jb25zdCBTdHlsZWREaXYxID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogODJweCAwO1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElTdHllbGREaXYyIHtcclxuICAgIGlubmVyV2lkdGg6IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgU3R5bGVkRGl2MiA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiAkeyhwcm9wczogSVN0eWVsZERpdjIpID0+IChwcm9wcy5pbm5lcldpZHRoID49IG1heFdpZHRoID8gJ2Jsb2NrJyA6ICdub25lJyl9O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA2OHB4IDA7XHJcbmA7XHJcblxyXG5jb25zdCBkaXYzS2V5RnJhbWUxID0ga2V5ZnJhbWVzYFxyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIH1cclxuXHJcbiAgICA1MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkRGl2MyA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAxcztcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBhbmltYXRpb246IDEuOHMgJHtkaXYzS2V5RnJhbWUxfSBpbmZpbml0ZTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkRGl2NCA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxNTJweDtcclxuICAgIGhlaWdodDogMTUycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFkMjMyO1xyXG4gICAgbWFyZ2luOiAxNnB4IDMycHg7XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWREaXY1ID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZFRpdGxlID0gc3R5bGVkLnNwYW5gXHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogNC44ZW07XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZFN1YlRpdGxlID0gc3R5bGVkLnNwYW5gXHJcbiAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRIM18xID0gc3R5bGVkLmgzYGA7XHJcblxyXG5jb25zdCBTdHlsZWRTcGFuMSA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSU1haW4ge1xyXG4gICAgaW5uZXJXaWR0aDogbnVtYmVyO1xyXG4gICAgdGl0bGVBcnJheTogc3RyaW5nW107XHJcbn1cclxuXHJcbmNvbnN0IE1haW46IFJlYWN0LkZDPElNYWluPiA9ICh7IGlubmVyV2lkdGgsIHRpdGxlQXJyYXkgfSk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIGNvbnN0IG9uQ2xpY2tEaXYzID0gKHRpdGxlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCB0aXRsZVNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aXRsZSk7XHJcblxyXG4gICAgICAgIGlmICh0aXRsZVNlY3Rpb24pIHtcclxuICAgICAgICAgICAgdGl0bGVTZWN0aW9uLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QmFzZSBpc01haW49e3RydWV9PlxyXG4gICAgICAgICAgICA8U3R5bGVkRGl2NT5cclxuICAgICAgICAgICAgICAgIDxTdHlsZWREaXYyIGlubmVyV2lkdGg9e2lubmVyV2lkdGh9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aXRsZUFycmF5Lm1hcCgodGl0bGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXYzIGtleT17dGl0bGV9IG9uQ2xpY2s9eygpID0+IG9uQ2xpY2tEaXYzKHRpdGxlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZERpdjQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRIM18xPnt0aXRsZX08L1N0eWxlZEgzXzE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMT5HbyDihpI8L1N0eWxlZFNwYW4xPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2ND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2Mz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2Mj5cclxuXHJcbiAgICAgICAgICAgICAgICA8U3R5bGVkRGl2MT5cclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkVGl0bGU+6rmA7ISx7LCs7J2YIFBvcnRmb2xpbzwvU3R5bGVkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFN1YlRpdGxlPlNpbmNlIDIwMjE8L1N0eWxlZFN1YlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPC9TdHlsZWREaXYxPlxyXG4gICAgICAgICAgICA8L1N0eWxlZERpdjU+XHJcbiAgICAgICAgPC9CYXNlPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=