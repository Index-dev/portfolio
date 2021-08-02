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
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_main__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_intro__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, _this)]
      }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_init__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
        id: "3889360865",
        children: "@import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');body{margin:0;padding:0;}h1,h2,h3,h4,h5,h6,span,p{font-family:'AppleSDGothicNeo','Noto Sans KR',sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcc3R1ZHlcXHBvcnRmb2xpb1xcc3VuZ2NoYW5cXHBhZ2VzXFxpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbURpQixBQUdrQyxBQVlrRCxBQUdZLFNBZDdELFVBQ2Qsc0NBV0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxzdHVkeVxccG9ydGZvbGlvXFxzdW5nY2hhblxccGFnZXNcXGluZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1haW4gZnJvbSAnLi4vY29tcG9uZW50L21haW4nO1xyXG5pbXBvcnQgSW50cm8gZnJvbSAnLi4vY29tcG9uZW50L2ludHJvJztcclxuaW1wb3J0IFdoeUl0IGZyb20gJy4uL2NvbXBvbmVudC93aHlJdCc7XHJcbmltcG9ydCBTa2lsbHMgZnJvbSAnLi4vY29tcG9uZW50L3NraWxscyc7XHJcbmltcG9ydCBDYXJlZXIgZnJvbSAnLi4vY29tcG9uZW50L2NhcmVlcic7XHJcbmltcG9ydCBJbml0IGZyb20gJy4uL2NvbXBvbmVudC9pbml0JztcclxuaW1wb3J0IGluZGV4U3RvcmUgZnJvbSAnLi4vbW9kdWxlcy9pbmRleFN0b3JlJztcclxuaW1wb3J0IHsgdXNlT2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0JztcclxuaW1wb3J0IFByb2plY3RzIGZyb20gJy4uL2NvbXBvbmVudC9wcm9qZWN0cyc7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICBjb25zdCB7IGluaXRTdG9yZSwgYmFzZVN0b3JlIH0gPSBpbmRleFN0b3JlKCk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25DaGFuZ2VSZXNpemUpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvbkNoYW5nZVNjcm9sbCk7XHJcbiAgICAgICAgb25DaGFuZ2VSZXNpemUoKTtcclxuICAgICAgICBvbkNoYW5nZVNjcm9sbCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25DaGFuZ2VSZXNpemUpO1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25DaGFuZ2VTY3JvbGwpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLy8gb25DaGFuZ2VcclxuICAgIGNvbnN0IG9uQ2hhbmdlUmVzaXplID0gKCkgPT4ge1xyXG4gICAgICAgIGJhc2VTdG9yZS5zZXRJbm5lcldpZHRoKHdpbmRvdy5pbm5lcldpZHRoKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgYmFzZVN0b3JlLnNldFNjcm9sbFkod2luZG93LnNjcm9sbFkpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdXNlT2JzZXJ2ZXIoKCkgPT4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtpbml0U3RvcmUuaXNFbmQgPyAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNYWluIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEludHJvIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxXaHlJdCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTa2lsbHMgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZWVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByb2plY3RzIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8SW5pdCAvPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBoMSxcclxuICAgICAgICAgICAgICAgICAgICBoMixcclxuICAgICAgICAgICAgICAgICAgICBoMyxcclxuICAgICAgICAgICAgICAgICAgICBoNCxcclxuICAgICAgICAgICAgICAgICAgICBoNSxcclxuICAgICAgICAgICAgICAgICAgICBoNixcclxuICAgICAgICAgICAgICAgICAgICBzcGFuLFxyXG4gICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0FwcGxlU0RHb3RoaWNOZW8nLCAnTm90byBTYW5zIEtSJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJ1bmdlZSZkaXNwbGF5PXN3YXAnKTtcclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxyXG4gICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8Lz5cclxuICAgICkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\User\\\\Desktop\\\\study\\\\portfolio\\\\sungchan\\\\pages\\\\index.tsx */"
      }, void 0, false, void 0, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        type: "text/css",
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
        className: "jsx-3889360865"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkluZGV4IiwiaW5kZXhTdG9yZSIsImluaXRTdG9yZSIsImJhc2VTdG9yZSIsIlJlYWN0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uQ2hhbmdlUmVzaXplIiwib25DaGFuZ2VTY3JvbGwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0SW5uZXJXaWR0aCIsImlubmVyV2lkdGgiLCJzZXRTY3JvbGxZIiwic2Nyb2xsWSIsInVzZU9ic2VydmVyIiwiaXNFbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFtQjtBQUFBOztBQUFBLG9CQUNJQyw0REFBVSxFQURkO0FBQUEsTUFDckJDLFNBRHFCLGVBQ3JCQSxTQURxQjtBQUFBLE1BQ1ZDLFNBRFUsZUFDVkEsU0FEVTs7QUFHN0JDLDhDQUFBLENBQWdCLFlBQU07QUFDbEJDLFVBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NDLGNBQWxDO0FBQ0FGLFVBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NFLGNBQWxDO0FBQ0FELGtCQUFjO0FBQ2RDLGtCQUFjO0FBRWQsV0FBTyxZQUFNO0FBQ1RILFlBQU0sQ0FBQ0ksbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNGLGNBQXJDO0FBQ0FGLFlBQU0sQ0FBQ0ksbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNELGNBQXJDO0FBQ0gsS0FIRDtBQUlILEdBVkQsRUFVRyxFQVZILEVBSDZCLENBZTdCOztBQUNBLE1BQU1ELGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUN6QkosYUFBUyxDQUFDTyxhQUFWLENBQXdCTCxNQUFNLENBQUNNLFVBQS9CO0FBQ0gsR0FGRDs7QUFJQSxNQUFNSCxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDekJMLGFBQVMsQ0FBQ1MsVUFBVixDQUFxQlAsTUFBTSxDQUFDUSxPQUE1QjtBQUNILEdBRkQ7O0FBSUEsU0FBT0MsdURBQVcsQ0FBQztBQUFBLHdCQUNmO0FBQUEsaUJBQ0taLFNBQVMsQ0FBQ2EsS0FBVixnQkFDRztBQUFBLGdDQUNJLDhEQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSSw4REFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUEsc0JBREgsZ0JBVUcsOERBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhSO0FBQUE7QUFBQTtBQUFBLHFEQW1DSTtBQUNJLFlBQUksRUFBQyxVQURUO0FBRUksV0FBRyxFQUFDLFlBRlI7QUFHSSxZQUFJLEVBQUMsNkVBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFuQ0o7QUFBQSxvQkFEZTtBQUFBLEdBQUQsQ0FBbEI7QUEyQ0gsQ0FuRUQ7O0dBQU1mLEs7VUF3QktjLG1EOzs7S0F4QkxkLEs7QUFxRU4sK0RBQWVBLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2RmZGQzOWViNWM4OWU5YWYxMTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1haW4gZnJvbSAnLi4vY29tcG9uZW50L21haW4nO1xyXG5pbXBvcnQgSW50cm8gZnJvbSAnLi4vY29tcG9uZW50L2ludHJvJztcclxuaW1wb3J0IFdoeUl0IGZyb20gJy4uL2NvbXBvbmVudC93aHlJdCc7XHJcbmltcG9ydCBTa2lsbHMgZnJvbSAnLi4vY29tcG9uZW50L3NraWxscyc7XHJcbmltcG9ydCBDYXJlZXIgZnJvbSAnLi4vY29tcG9uZW50L2NhcmVlcic7XHJcbmltcG9ydCBJbml0IGZyb20gJy4uL2NvbXBvbmVudC9pbml0JztcclxuaW1wb3J0IGluZGV4U3RvcmUgZnJvbSAnLi4vbW9kdWxlcy9pbmRleFN0b3JlJztcclxuaW1wb3J0IHsgdXNlT2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0JztcclxuaW1wb3J0IFByb2plY3RzIGZyb20gJy4uL2NvbXBvbmVudC9wcm9qZWN0cyc7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICBjb25zdCB7IGluaXRTdG9yZSwgYmFzZVN0b3JlIH0gPSBpbmRleFN0b3JlKCk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25DaGFuZ2VSZXNpemUpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvbkNoYW5nZVNjcm9sbCk7XHJcbiAgICAgICAgb25DaGFuZ2VSZXNpemUoKTtcclxuICAgICAgICBvbkNoYW5nZVNjcm9sbCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25DaGFuZ2VSZXNpemUpO1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25DaGFuZ2VTY3JvbGwpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLy8gb25DaGFuZ2VcclxuICAgIGNvbnN0IG9uQ2hhbmdlUmVzaXplID0gKCkgPT4ge1xyXG4gICAgICAgIGJhc2VTdG9yZS5zZXRJbm5lcldpZHRoKHdpbmRvdy5pbm5lcldpZHRoKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgYmFzZVN0b3JlLnNldFNjcm9sbFkod2luZG93LnNjcm9sbFkpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdXNlT2JzZXJ2ZXIoKCkgPT4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtpbml0U3RvcmUuaXNFbmQgPyAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNYWluIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEludHJvIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxXaHlJdCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTa2lsbHMgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZWVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByb2plY3RzIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8SW5pdCAvPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBoMSxcclxuICAgICAgICAgICAgICAgICAgICBoMixcclxuICAgICAgICAgICAgICAgICAgICBoMyxcclxuICAgICAgICAgICAgICAgICAgICBoNCxcclxuICAgICAgICAgICAgICAgICAgICBoNSxcclxuICAgICAgICAgICAgICAgICAgICBoNixcclxuICAgICAgICAgICAgICAgICAgICBzcGFuLFxyXG4gICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0FwcGxlU0RHb3RoaWNOZW8nLCAnTm90byBTYW5zIEtSJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJ1bmdlZSZkaXNwbGF5PXN3YXAnKTtcclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxyXG4gICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8Lz5cclxuICAgICkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=