self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./modules/baseStore.tsx":
/*!*******************************!*\
  !*** ./modules/baseStore.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/dist/mobx.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var BaseStore = (0,mobx__WEBPACK_IMPORTED_MODULE_0__.observable)({
  // state
  titleArray: ['Main', 'Intro', 'Why It', 'Skills', 'Career', 'Projects', 'More'],
  innerWidth: 0,
  innerHeight: 0,
  setInnerWidth: function setInnerWidth(innerWidth) {
    this.innerWidth = innerWidth;
  },
  setInnerHeight: function setInnerHeight(innerHeight) {
    this.innerHeight = innerHeight;
  }
});
/* harmony default export */ __webpack_exports__["default"] = (BaseStore);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9iYXNlU3RvcmUudHN4Il0sIm5hbWVzIjpbIkJhc2VTdG9yZSIsIm9ic2VydmFibGUiLCJ0aXRsZUFycmF5IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0Iiwic2V0SW5uZXJXaWR0aCIsInNldElubmVySGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsZ0RBQVUsQ0FBQztBQUN6QjtBQUNBQyxZQUFVLEVBQUUsQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixRQUFsQixFQUE0QixRQUE1QixFQUFzQyxRQUF0QyxFQUFnRCxVQUFoRCxFQUE0RCxNQUE1RCxDQUZhO0FBR3pCQyxZQUFVLEVBQUUsQ0FIYTtBQUl6QkMsYUFBVyxFQUFFLENBSlk7QUFNekJDLGVBTnlCLHlCQU1YRixVQU5XLEVBTUM7QUFDdEIsU0FBS0EsVUFBTCxHQUFrQkEsVUFBbEI7QUFDSCxHQVJ3QjtBQVV6QkcsZ0JBVnlCLDBCQVVWRixXQVZVLEVBVUc7QUFDeEIsU0FBS0EsV0FBTCxHQUFtQkEsV0FBbkI7QUFDSDtBQVp3QixDQUFELENBQTVCO0FBZUEsK0RBQWVKLFNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjQyNmZhZDcwN2U0ZDI2MTQyMzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG9ic2VydmFibGUgfSBmcm9tICdtb2J4JztcclxuXHJcbmNvbnN0IEJhc2VTdG9yZSA9IG9ic2VydmFibGUoe1xyXG4gICAgLy8gc3RhdGVcclxuICAgIHRpdGxlQXJyYXk6IFsnTWFpbicsICdJbnRybycsICdXaHkgSXQnLCAnU2tpbGxzJywgJ0NhcmVlcicsICdQcm9qZWN0cycsICdNb3JlJ10sXHJcbiAgICBpbm5lcldpZHRoOiAwLFxyXG4gICAgaW5uZXJIZWlnaHQ6IDAsXHJcblxyXG4gICAgc2V0SW5uZXJXaWR0aChpbm5lcldpZHRoKSB7XHJcbiAgICAgICAgdGhpcy5pbm5lcldpZHRoID0gaW5uZXJXaWR0aDtcclxuICAgIH0sXHJcblxyXG4gICAgc2V0SW5uZXJIZWlnaHQoaW5uZXJIZWlnaHQpIHtcclxuICAgICAgICB0aGlzLmlubmVySGVpZ2h0ID0gaW5uZXJIZWlnaHQ7XHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2VTdG9yZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==