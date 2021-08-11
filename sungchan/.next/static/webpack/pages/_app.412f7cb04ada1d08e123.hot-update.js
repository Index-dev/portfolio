self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./modules/baseReducer.tsx":
/*!*********************************!*\
  !*** ./modules/baseReducer.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_User_Desktop_study_portfolio_sungchan_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _actionType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionType */ "./modules/actionType.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_User_Desktop_study_portfolio_sungchan_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var baseState = {
  currentComponentNo: 0,
  titleArray: ['Main', 'Intro', 'Why It', 'Skills', 'Career', 'Projects', 'More'],
  backgroundColorArray: ['#757270', '#A5BAA8', '#6A9194', '#b79e6a', '#c68377', '#648ab9', '#F8FFEF'],
  isPageChanging: false
}; // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

var baseReducer = function baseReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : baseState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actionType__WEBPACK_IMPORTED_MODULE_1__.setCurrentComponentNo:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          currentComponentNo: action.payload
        });
      }

    case _actionType__WEBPACK_IMPORTED_MODULE_1__.setIsPageChanging:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isPageChanging: action.payload
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (baseReducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9iYXNlUmVkdWNlci50c3giXSwibmFtZXMiOlsiYmFzZVN0YXRlIiwiY3VycmVudENvbXBvbmVudE5vIiwidGl0bGVBcnJheSIsImJhY2tncm91bmRDb2xvckFycmF5IiwiaXNQYWdlQ2hhbmdpbmciLCJiYXNlUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInNldEN1cnJlbnRDb21wb25lbnRObyIsInBheWxvYWQiLCJzZXRJc1BhZ2VDaGFuZ2luZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBU0EsSUFBTUEsU0FBcUIsR0FBRztBQUMxQkMsb0JBQWtCLEVBQUUsQ0FETTtBQUUxQkMsWUFBVSxFQUFFLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsUUFBbEIsRUFBNEIsUUFBNUIsRUFBc0MsUUFBdEMsRUFBZ0QsVUFBaEQsRUFBNEQsTUFBNUQsQ0FGYztBQUcxQkMsc0JBQW9CLEVBQUUsQ0FBQyxTQUFELEVBQVksU0FBWixFQUF1QixTQUF2QixFQUFrQyxTQUFsQyxFQUE2QyxTQUE3QyxFQUF3RCxTQUF4RCxFQUFtRSxTQUFuRSxDQUhJO0FBSTFCQyxnQkFBYyxFQUFFO0FBSlUsQ0FBOUIsQyxDQU9BOztBQUNBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQW9EO0FBQUEsTUFBbkRDLEtBQW1ELHVFQUEvQk4sU0FBK0I7QUFBQSxNQUFwQk8sTUFBb0I7O0FBQ3BFLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNJLFNBQUtDLDhEQUFMO0FBQTRCO0FBQ3hCLCtDQUNPSCxLQURQO0FBRUlMLDRCQUFrQixFQUFHTSxNQUFELENBQXlDRztBQUZqRTtBQUlIOztBQUVELFNBQUtDLDBEQUFMO0FBQXdCO0FBQ3BCLCtDQUNPTCxLQURQO0FBRUlGLHdCQUFjLEVBQUdHLE1BQUQsQ0FBcUNHO0FBRnpEO0FBSUg7O0FBRUQ7QUFBUztBQUNMLGlDQUNPSixLQURQO0FBR0g7QUFuQkw7QUFxQkgsQ0F0QkQ7O0FBd0JBLCtEQUFlRCxXQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNDEyZjdjYjA0YWRhMWQwOGUxMjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElzZXRDdXJyZW50Q29tcG9uZW50Tm9BY3Rpb24sIElzZXRJc1BhZ2VDaGFuZ2luZ0FjdGlvbiB9IGZyb20gJy4vYWN0aW9uSW50ZXJmYWNlJztcclxuaW1wb3J0IHsgYWN0aW9ucyB9IGZyb20gJy4vYWN0aW9ucyc7XHJcbmltcG9ydCB7IHNldEN1cnJlbnRDb21wb25lbnRObywgc2V0SXNQYWdlQ2hhbmdpbmcgfSBmcm9tICcuL2FjdGlvblR5cGUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJYmFzZVN0YXRlIHtcclxuICAgIGN1cnJlbnRDb21wb25lbnRObzogbnVtYmVyO1xyXG4gICAgdGl0bGVBcnJheTogc3RyaW5nW107XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3JBcnJheTogc3RyaW5nW107XHJcbiAgICBpc1BhZ2VDaGFuZ2luZzogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgYmFzZVN0YXRlOiBJYmFzZVN0YXRlID0ge1xyXG4gICAgY3VycmVudENvbXBvbmVudE5vOiAwLFxyXG4gICAgdGl0bGVBcnJheTogWydNYWluJywgJ0ludHJvJywgJ1doeSBJdCcsICdTa2lsbHMnLCAnQ2FyZWVyJywgJ1Byb2plY3RzJywgJ01vcmUnXSxcclxuICAgIGJhY2tncm91bmRDb2xvckFycmF5OiBbJyM3NTcyNzAnLCAnI0E1QkFBOCcsICcjNkE5MTk0JywgJyNiNzllNmEnLCAnI2M2ODM3NycsICcjNjQ4YWI5JywgJyNGOEZGRUYnXSxcclxuICAgIGlzUGFnZUNoYW5naW5nOiBmYWxzZSxcclxufTtcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtbW9kdWxlLWJvdW5kYXJ5LXR5cGVzXHJcbmNvbnN0IGJhc2VSZWR1Y2VyID0gKHN0YXRlOiBJYmFzZVN0YXRlID0gYmFzZVN0YXRlLCBhY3Rpb246IGFjdGlvbnMpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIHNldEN1cnJlbnRDb21wb25lbnRObzoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Q29tcG9uZW50Tm86IChhY3Rpb24gYXMgSXNldEN1cnJlbnRDb21wb25lbnROb0FjdGlvbikucGF5bG9hZCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhc2Ugc2V0SXNQYWdlQ2hhbmdpbmc6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaXNQYWdlQ2hhbmdpbmc6IChhY3Rpb24gYXMgSXNldElzUGFnZUNoYW5naW5nQWN0aW9uKS5wYXlsb2FkLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYmFzZVJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=