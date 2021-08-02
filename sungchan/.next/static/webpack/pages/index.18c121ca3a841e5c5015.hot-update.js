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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/main */ "./component/main.tsx");
/* harmony import */ var _component_intro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/intro */ "./component/intro.tsx");
/* harmony import */ var _component_init__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/init */ "./component/init.tsx");
/* harmony import */ var _modules_indexStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/indexStore */ "./modules/indexStore.tsx");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\pages\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();









var Index = function Index() {
  _s();

  var _indexStore = (0,_modules_indexStore__WEBPACK_IMPORTED_MODULE_6__.default)(),
      initStore = _indexStore.initStore,
      baseStore = _indexStore.baseStore;

  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    window.addEventListener('resize', onChangeResize);
    window.addEventListener('scroll', onChangeScroll);
    onChangeResize();
    onChangeScroll();
    return function () {
      window.removeEventListener('resize', onChangeResize);
      window.removeEventListener('scroll', onChangeScroll);
    };
  }, []); // onChange

  var onChangeResize = function onChangeResize() {
    baseStore.setInnerWidth(window.innerWidth);
  };

  var onChangeScroll = function onChangeScroll() {
    baseStore.setScrollY(window.scrollY);
  };

  return (0,mobx_react__WEBPACK_IMPORTED_MODULE_7__.useObserver)(function () {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [initStore.isEnd ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "jsx-1710783722",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_main__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_intro__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, _this)
      }, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_init__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
        id: "1710783722",
        children: "@import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');body{margin:0;padding:0;overflow:hidden;}h1,h2,h3,h4,h5,h6,span,p{font-family:'AppleSDGothicNeo','Noto Sans KR',sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcc3R1ZHlcXHBvcnRmb2xpb1xcc3VuZ2NoYW5cXHBhZ2VzXFxpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcURpQixBQUdrQyxBQWFrRCxBQUdZLFNBZjdELFVBQ00sZ0JBQ3BCLHNCQVdBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcc3R1ZHlcXHBvcnRmb2xpb1xcc3VuZ2NoYW5cXHBhZ2VzXFxpbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNYWluIGZyb20gJy4uL2NvbXBvbmVudC9tYWluJztcclxuaW1wb3J0IEludHJvIGZyb20gJy4uL2NvbXBvbmVudC9pbnRybyc7XHJcbmltcG9ydCBXaHlJdCBmcm9tICcuLi9jb21wb25lbnQvd2h5SXQnO1xyXG5pbXBvcnQgU2tpbGxzIGZyb20gJy4uL2NvbXBvbmVudC9za2lsbHMnO1xyXG5pbXBvcnQgQ2FyZWVyIGZyb20gJy4uL2NvbXBvbmVudC9jYXJlZXInO1xyXG5pbXBvcnQgSW5pdCBmcm9tICcuLi9jb21wb25lbnQvaW5pdCc7XHJcbmltcG9ydCBpbmRleFN0b3JlIGZyb20gJy4uL21vZHVsZXMvaW5kZXhTdG9yZSc7XHJcbmltcG9ydCB7IHVzZU9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdCc7XHJcbmltcG9ydCBQcm9qZWN0cyBmcm9tICcuLi9jb21wb25lbnQvcHJvamVjdHMnO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgY29uc3QgeyBpbml0U3RvcmUsIGJhc2VTdG9yZSB9ID0gaW5kZXhTdG9yZSgpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uQ2hhbmdlUmVzaXplKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25DaGFuZ2VTY3JvbGwpO1xyXG4gICAgICAgIG9uQ2hhbmdlUmVzaXplKCk7XHJcbiAgICAgICAgb25DaGFuZ2VTY3JvbGwoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uQ2hhbmdlUmVzaXplKTtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uQ2hhbmdlU2Nyb2xsKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIC8vIG9uQ2hhbmdlXHJcbiAgICBjb25zdCBvbkNoYW5nZVJlc2l6ZSA9ICgpID0+IHtcclxuICAgICAgICBiYXNlU3RvcmUuc2V0SW5uZXJXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICAgIGJhc2VTdG9yZS5zZXRTY3JvbGxZKHdpbmRvdy5zY3JvbGxZKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHVzZU9ic2VydmVyKCgpID0+IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7aW5pdFN0b3JlLmlzRW5kID8gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWFpbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW50cm8gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxXaHlJdCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTa2lsbHMgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZWVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByb2plY3RzIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8SW5pdCAvPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBoMSxcclxuICAgICAgICAgICAgICAgICAgICBoMixcclxuICAgICAgICAgICAgICAgICAgICBoMyxcclxuICAgICAgICAgICAgICAgICAgICBoNCxcclxuICAgICAgICAgICAgICAgICAgICBoNSxcclxuICAgICAgICAgICAgICAgICAgICBoNixcclxuICAgICAgICAgICAgICAgICAgICBzcGFuLFxyXG4gICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0FwcGxlU0RHb3RoaWNOZW8nLCAnTm90byBTYW5zIEtSJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJ1bmdlZSZkaXNwbGF5PXN3YXAnKTtcclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxyXG4gICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8Lz5cclxuICAgICkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\User\\\\Desktop\\\\study\\\\portfolio\\\\sungchan\\\\pages\\\\index.tsx */"
      }, void 0, false, void 0, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        type: "text/css",
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
        className: "jsx-1710783722"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 13
      }, _this)]
    }, void 0, true);
  });
};

_s(Index, "u/dbIeyf16gnu8DjpIGAMzPtKuo=", false, function () {
  return [mobx_react__WEBPACK_IMPORTED_MODULE_7__.useObserver];
});

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkluZGV4IiwiaW5kZXhTdG9yZSIsImluaXRTdG9yZSIsImJhc2VTdG9yZSIsIlJlYWN0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uQ2hhbmdlUmVzaXplIiwib25DaGFuZ2VTY3JvbGwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0SW5uZXJXaWR0aCIsImlubmVyV2lkdGgiLCJzZXRTY3JvbGxZIiwic2Nyb2xsWSIsInVzZU9ic2VydmVyIiwiaXNFbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFtQjtBQUFBOztBQUFBLG9CQUNJQyw0REFBVSxFQURkO0FBQUEsTUFDckJDLFNBRHFCLGVBQ3JCQSxTQURxQjtBQUFBLE1BQ1ZDLFNBRFUsZUFDVkEsU0FEVTs7QUFHN0JDLDhDQUFBLENBQWdCLFlBQU07QUFDbEJDLFVBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NDLGNBQWxDO0FBQ0FGLFVBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NFLGNBQWxDO0FBQ0FELGtCQUFjO0FBQ2RDLGtCQUFjO0FBRWQsV0FBTyxZQUFNO0FBQ1RILFlBQU0sQ0FBQ0ksbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNGLGNBQXJDO0FBQ0FGLFlBQU0sQ0FBQ0ksbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNELGNBQXJDO0FBQ0gsS0FIRDtBQUlILEdBVkQsRUFVRyxFQVZILEVBSDZCLENBZTdCOztBQUNBLE1BQU1ELGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUN6QkosYUFBUyxDQUFDTyxhQUFWLENBQXdCTCxNQUFNLENBQUNNLFVBQS9CO0FBQ0gsR0FGRDs7QUFJQSxNQUFNSCxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDekJMLGFBQVMsQ0FBQ1MsVUFBVixDQUFxQlAsTUFBTSxDQUFDUSxPQUE1QjtBQUNILEdBRkQ7O0FBSUEsU0FBT0MsdURBQVcsQ0FBQztBQUFBLHdCQUNmO0FBQUEsaUJBQ0taLFNBQVMsQ0FBQ2EsS0FBVixnQkFDRztBQUFBLCtCQUNJO0FBQUE7QUFBQSxrQ0FDSSw4REFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUksOERBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESix1QkFESCxnQkFZRyw4REFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYlI7QUFBQTtBQUFBO0FBQUEscURBc0NJO0FBQ0ksWUFBSSxFQUFDLFVBRFQ7QUFFSSxXQUFHLEVBQUMsWUFGUjtBQUdJLFlBQUksRUFBQyw2RUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXRDSjtBQUFBLG9CQURlO0FBQUEsR0FBRCxDQUFsQjtBQThDSCxDQXRFRDs7R0FBTWYsSztVQXdCS2MsbUQ7OztLQXhCTGQsSztBQXdFTiwrREFBZUEsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xOGMxMjFjYTNhODQxZTVjNTAxNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTWFpbiBmcm9tICcuLi9jb21wb25lbnQvbWFpbic7XHJcbmltcG9ydCBJbnRybyBmcm9tICcuLi9jb21wb25lbnQvaW50cm8nO1xyXG5pbXBvcnQgV2h5SXQgZnJvbSAnLi4vY29tcG9uZW50L3doeUl0JztcclxuaW1wb3J0IFNraWxscyBmcm9tICcuLi9jb21wb25lbnQvc2tpbGxzJztcclxuaW1wb3J0IENhcmVlciBmcm9tICcuLi9jb21wb25lbnQvY2FyZWVyJztcclxuaW1wb3J0IEluaXQgZnJvbSAnLi4vY29tcG9uZW50L2luaXQnO1xyXG5pbXBvcnQgaW5kZXhTdG9yZSBmcm9tICcuLi9tb2R1bGVzL2luZGV4U3RvcmUnO1xyXG5pbXBvcnQgeyB1c2VPYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QnO1xyXG5pbXBvcnQgUHJvamVjdHMgZnJvbSAnLi4vY29tcG9uZW50L3Byb2plY3RzJztcclxuXHJcbmNvbnN0IEluZGV4ID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIGNvbnN0IHsgaW5pdFN0b3JlLCBiYXNlU3RvcmUgfSA9IGluZGV4U3RvcmUoKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvbkNoYW5nZVJlc2l6ZSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uQ2hhbmdlU2Nyb2xsKTtcclxuICAgICAgICBvbkNoYW5nZVJlc2l6ZSgpO1xyXG4gICAgICAgIG9uQ2hhbmdlU2Nyb2xsKCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvbkNoYW5nZVJlc2l6ZSk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvbkNoYW5nZVNjcm9sbCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICAvLyBvbkNoYW5nZVxyXG4gICAgY29uc3Qgb25DaGFuZ2VSZXNpemUgPSAoKSA9PiB7XHJcbiAgICAgICAgYmFzZVN0b3JlLnNldElubmVyV2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZVNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgICBiYXNlU3RvcmUuc2V0U2Nyb2xsWSh3aW5kb3cuc2Nyb2xsWSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB1c2VPYnNlcnZlcigoKSA9PiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge2luaXRTdG9yZS5pc0VuZCA/IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1haW4gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEludHJvIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8V2h5SXQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8U2tpbGxzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmVlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm9qZWN0cyAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPEluaXQgLz5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaDEsXHJcbiAgICAgICAgICAgICAgICAgICAgaDIsXHJcbiAgICAgICAgICAgICAgICAgICAgaDMsXHJcbiAgICAgICAgICAgICAgICAgICAgaDQsXHJcbiAgICAgICAgICAgICAgICAgICAgaDUsXHJcbiAgICAgICAgICAgICAgICAgICAgaDYsXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbixcclxuICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBcHBsZVNER290aGljTmVvJywgJ05vdG8gU2FucyBLUicsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CdW5nZWUmZGlzcGxheT1zd2FwJyk7XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcclxuICAgICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9