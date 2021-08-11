self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./component/base.tsx":
/*!****************************!*\
  !*** ./component/base.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_User_Desktop_study_portfolio_sungchan_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _modules_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/actions */ "./modules/actions.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\component\\base.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var transitionDuration = 1;
var BaseContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "base__BaseContainer",
  componentId: "sc-1ugehyd-0"
})(["height:93vh;width:100%;position:relative;display:flex;align-items:center;background-color:", ";transition-duration:", "s;transition-timing-function:ease-in;transform-origin:center top;top:0;box-shadow:0px -1px 4px 4px #888;"], function (props) {
  return props.backgroundColor;
}, transitionDuration);
_c = BaseContainer;
var MainContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "base__MainContainer",
  componentId: "sc-1ugehyd-1"
})(["transition-duration:", "s;height:100%;&::-webkit-scrollbar{display:none;}"], transitionDuration);
_c2 = MainContainer;
var PostItContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "base__PostItContainer",
  componentId: "sc-1ugehyd-2"
})(["position:absolute;top:", "px;left:-110px;"], function (props) {
  return props.componentNo * 33;
});
_c3 = PostItContainer;
var PostItSection = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.section.withConfig({
  displayName: "base__PostItSection",
  componentId: "sc-1ugehyd-3"
})(["display:flex;align-items:center;"]);
_c4 = PostItSection;
var PostItColorDiv = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "base__PostItColorDiv",
  componentId: "sc-1ugehyd-4"
})(["background-color:", ";width:20px;height:30px;"], function (props) {
  return props.backgroundColor;
});
_c5 = PostItColorDiv;
var PostItTextDiv = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "base__PostItTextDiv",
  componentId: "sc-1ugehyd-5"
})(["display:flex;justify-content:center;align-items:center;width:90px;height:30px;background-color:#fbf8e5;"]);
_c6 = PostItTextDiv;
var ChainContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "base__ChainContainer",
  componentId: "sc-1ugehyd-6"
})([""]);
_c7 = ChainContainer;
var Title = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.span.withConfig({
  displayName: "base__Title",
  componentId: "sc-1ugehyd-7"
})(["font-weight:600;transition:", "s;color:rgba(0,0,0,0.6);"], transitionDuration);
_c8 = Title;

var Base = function Base(_ref) {
  _s();

  var children = _ref.children,
      componentNo = _ref.componentNo;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(); // redux

  var currentComponentNo = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.baseReducer.currentComponentNo;
  });
  var titleArray = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.baseReducer.titleArray;
  });
  var backgroundColorArray = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.baseReducer.backgroundColorArray;
  });
  var isPageChanging = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.baseReducer.isPageChanging;
  }); // state

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__.useState(false),
      _React$useState2 = (0,C_Users_User_Desktop_study_portfolio_sungchan_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 2),
      isTop = _React$useState2[0],
      setIsTop = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2__.useState(false),
      _React$useState4 = (0,C_Users_User_Desktop_study_portfolio_sungchan_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState3, 2),
      isBottom = _React$useState4[0],
      setIsBottom = _React$useState4[1]; // ref


  var baseContainerRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef();
  var mainContainerRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef();
  var titleRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(); // useEffect

  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    // 공통
    mainContainerRef.current.style.overflow = 'hidden';

    if (currentComponentNo === componentNo) {
      // 현재 페이지일 경우
      baseContainerRef.current.style.position = 'absolute';
      baseContainerRef.current.style.display = 'block';
      baseContainerRef.current.style.transform = "";
      baseContainerRef.current.style.zIndex = "".concat(100 - componentNo);
      mainContainerRef.current.style.opacity = '';
      mainContainerRef.current.scrollTo(0, 0); // 페이지 스크롤 최상위로

      titleRef.current.style.opacity = '';
      setIsTop(true); // 스크롤은 최상단

      if (mainContainerRef.current.clientHeight === mainContainerRef.current.scrollHeight) {
        // 페이지의 전체크기가 화면 크기와 동일할 경우 스크롤은 최하단도 포함
        setIsBottom(true);
      } else {
        setIsBottom(false);
      }
    } else if (currentComponentNo > componentNo) {
      // 지나간 페이지일 경우
      baseContainerRef.current.style.position = 'fixed';
      baseContainerRef.current.style.display = 'block';
      baseContainerRef.current.style.transform = "rotateX(180deg)";
      baseContainerRef.current.style.zIndex = "".concat(80 + componentNo);
      mainContainerRef.current.style.opacity = '0.05';
      titleRef.current.style.opacity = '0.05';
    } else {
      // 지나가지 않은 페이지일 경우
      baseContainerRef.current.style.position = 'absolute';
      baseContainerRef.current.style.display = 'block';
      baseContainerRef.current.style.transform = "";
      baseContainerRef.current.style.zIndex = "".concat(80 - componentNo);
      mainContainerRef.current.style.opacity = '';
      titleRef.current.style.opacity = '';
    }

    dispatch((0,_modules_actions__WEBPACK_IMPORTED_MODULE_4__.setIsPageChangingAction)(true));
    setTimeout(function () {
      if (currentComponentNo === componentNo) {
        mainContainerRef.current.style.overflow = 'auto';
      }

      dispatch((0,_modules_actions__WEBPACK_IMPORTED_MODULE_4__.setIsPageChangingAction)(false));
    }, transitionDuration * 1000);
  }, [currentComponentNo]); // onClick

  var onClickPostIt = function onClickPostIt(componentNo) {
    // 페이지 이동이 이루어지고 있는 경우
    if (isPageChanging) {
      return;
    }

    dispatch((0,_modules_actions__WEBPACK_IMPORTED_MODULE_4__.setCurrentComponentNoAction)(componentNo));
  }; // onScroll


  var onScrollMainContainer = function onScrollMainContainer(e) {
    // 페이지 이동이 이루어지고 있는 경우
    if (isPageChanging) {
      return;
    } // 현재 페이지가 아닌 경우 스크롤기능 중단


    if (currentComponentNo !== componentNo) {
      return;
    } // 페이지 상단에 있는 경우


    if (e.currentTarget.scrollTop === 0) {
      setIsTop(true);
    } else {
      setIsTop(false);
    } // 페이지 하단에 있는 경우


    if (e.currentTarget.scrollTop + e.currentTarget.clientHeight >= e.currentTarget.scrollHeight) {
      setIsBottom(true);
    } else {
      setIsBottom(false);
    }
  }; // onWheel


  var onWheelMainContainer = function onWheelMainContainer(e) {
    // 페이지 이동이 이루어지고 있는 경우
    if (isPageChanging) {
      return;
    } // 현재 페이지가 아닌 경우 휠기능 중단


    if (currentComponentNo !== componentNo) {
      return;
    } // 페이지의 끝에 도달하고 위로 스크롤 했을 경우


    if (isTop && e.nativeEvent.deltaY < 0) {
      onClickPostIt(componentNo - 1);
    } // 페이지의 끝에 도달하고 아래로 스크롤 했을 경우


    if (isBottom && e.nativeEvent.deltaY > 0) {
      // 현재 컴포넌트 번호가 마지막이 아닐 경우에만 페이지 넘기기
      if (currentComponentNo < titleArray.length - 1) {
        onClickPostIt(componentNo + 1);
      }
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BaseContainer, {
      ref: baseContainerRef,
      backgroundColor: backgroundColorArray[componentNo],
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainContainer, {
        ref: mainContainerRef,
        onScroll: onScrollMainContainer,
        onWheel: onWheelMainContainer,
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostItContainer, {
        componentNo: componentNo,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostItSection, {
          onClick: function onClick() {
            return onClickPostIt(componentNo);
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostItColorDiv, {
            backgroundColor: backgroundColorArray[componentNo]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 229,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostItTextDiv, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {
              ref: titleRef,
              children: titleArray[componentNo]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 231,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainContainer, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 13
    }, _this)
  }, void 0, false);
};

_s(Base, "sleR0Ysdrp3fJtSLue9jiN3s2tA=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector];
});

_c9 = Base;
/* harmony default export */ __webpack_exports__["default"] = (Base);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;

$RefreshReg$(_c, "BaseContainer");
$RefreshReg$(_c2, "MainContainer");
$RefreshReg$(_c3, "PostItContainer");
$RefreshReg$(_c4, "PostItSection");
$RefreshReg$(_c5, "PostItColorDiv");
$RefreshReg$(_c6, "PostItTextDiv");
$RefreshReg$(_c7, "ChainContainer");
$RefreshReg$(_c8, "Title");
$RefreshReg$(_c9, "Base");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2Jhc2UudHN4Il0sIm5hbWVzIjpbInRyYW5zaXRpb25EdXJhdGlvbiIsIkJhc2VDb250YWluZXIiLCJzdHlsZWQiLCJwcm9wcyIsImJhY2tncm91bmRDb2xvciIsIk1haW5Db250YWluZXIiLCJQb3N0SXRDb250YWluZXIiLCJjb21wb25lbnRObyIsIlBvc3RJdFNlY3Rpb24iLCJQb3N0SXRDb2xvckRpdiIsIlBvc3RJdFRleHREaXYiLCJDaGFpbkNvbnRhaW5lciIsIlRpdGxlIiwiQmFzZSIsImNoaWxkcmVuIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImN1cnJlbnRDb21wb25lbnRObyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJiYXNlUmVkdWNlciIsInRpdGxlQXJyYXkiLCJiYWNrZ3JvdW5kQ29sb3JBcnJheSIsImlzUGFnZUNoYW5naW5nIiwiUmVhY3QiLCJpc1RvcCIsInNldElzVG9wIiwiaXNCb3R0b20iLCJzZXRJc0JvdHRvbSIsImJhc2VDb250YWluZXJSZWYiLCJtYWluQ29udGFpbmVyUmVmIiwidGl0bGVSZWYiLCJjdXJyZW50Iiwic3R5bGUiLCJvdmVyZmxvdyIsInBvc2l0aW9uIiwiZGlzcGxheSIsInRyYW5zZm9ybSIsInpJbmRleCIsIm9wYWNpdHkiLCJzY3JvbGxUbyIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsInNldElzUGFnZUNoYW5naW5nQWN0aW9uIiwic2V0VGltZW91dCIsIm9uQ2xpY2tQb3N0SXQiLCJzZXRDdXJyZW50Q29tcG9uZW50Tm9BY3Rpb24iLCJvblNjcm9sbE1haW5Db250YWluZXIiLCJlIiwiY3VycmVudFRhcmdldCIsInNjcm9sbFRvcCIsIm9uV2hlZWxNYWluQ29udGFpbmVyIiwibmF0aXZlRXZlbnQiLCJkZWx0YVkiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBb0JILENBN0pEOztHQUFNTSxJO1VBQ2VHLG9ELEVBR1VFLG9ELEVBQ1JBLG9ELEVBQ1VBLG9ELEVBQ05BLG9EOzs7TUFQckJMLEk7QUErSk4sK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDRlN2ZkMjgyNzhiYmMyYzI4MDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgc2V0Q3VycmVudENvbXBvbmVudE5vQWN0aW9uLCBzZXRJc1BhZ2VDaGFuZ2luZ0FjdGlvbiB9IGZyb20gJy4uL21vZHVsZXMvYWN0aW9ucyc7XHJcbmltcG9ydCB7IGluZGV4U3RhdGUgfSBmcm9tICcuLi9tb2R1bGVzL2luZGV4UmVkdWNlcic7XHJcblxyXG5jb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSAxO1xyXG5cclxuaW50ZXJmYWNlIElCYXNlQ29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBCYXNlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIGhlaWdodDogOTN2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wczogSUJhc2VDb250YWluZXIpID0+IHByb3BzLmJhY2tncm91bmRDb2xvcn07XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAke3RyYW5zaXRpb25EdXJhdGlvbn1zO1xyXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgdG9wO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IC0xcHggNHB4IDRweCAjODg4O1xyXG5gO1xyXG5cclxuY29uc3QgTWFpbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAke3RyYW5zaXRpb25EdXJhdGlvbn1zO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElQb3N0SXRDb250YWluZXIge1xyXG4gICAgY29tcG9uZW50Tm86IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgUG9zdEl0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogJHsocHJvcHM6IElQb3N0SXRDb250YWluZXIpID0+IHByb3BzLmNvbXBvbmVudE5vICogMzN9cHg7XHJcbiAgICBsZWZ0OiAtMTEwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBQb3N0SXRTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmludGVyZmFjZSBJUG9zdEl0Q29sb3JEaXYge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IFBvc3RJdENvbG9yRGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzOiBJUG9zdEl0Q29sb3JEaXYpID0+IHByb3BzLmJhY2tncm91bmRDb2xvcn07XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuYDtcclxuXHJcbmNvbnN0IFBvc3RJdFRleHREaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZjhlNTtcclxuYDtcclxuXHJcbmNvbnN0IENoYWluQ29udGFpbmVyID0gc3R5bGVkLmRpdmBgO1xyXG5cclxuY29uc3QgVGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0cmFuc2l0aW9uOiAke3RyYW5zaXRpb25EdXJhdGlvbn1zO1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuYDtcclxuXHJcbmludGVyZmFjZSBJQmFzZSB7XHJcbiAgICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG4gICAgY29tcG9uZW50Tm86IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgQmFzZTogUmVhY3QuRkM8SUJhc2U+ID0gKHsgY2hpbGRyZW4sIGNvbXBvbmVudE5vIH0pOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgLy8gcmVkdXhcclxuICAgIGNvbnN0IGN1cnJlbnRDb21wb25lbnRObyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogaW5kZXhTdGF0ZSkgPT4gc3RhdGUuYmFzZVJlZHVjZXIuY3VycmVudENvbXBvbmVudE5vKTtcclxuICAgIGNvbnN0IHRpdGxlQXJyYXkgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IGluZGV4U3RhdGUpID0+IHN0YXRlLmJhc2VSZWR1Y2VyLnRpdGxlQXJyYXkpO1xyXG4gICAgY29uc3QgYmFja2dyb3VuZENvbG9yQXJyYXkgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IGluZGV4U3RhdGUpID0+IHN0YXRlLmJhc2VSZWR1Y2VyLmJhY2tncm91bmRDb2xvckFycmF5KTtcclxuICAgIGNvbnN0IGlzUGFnZUNoYW5naW5nID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBpbmRleFN0YXRlKSA9PiBzdGF0ZS5iYXNlUmVkdWNlci5pc1BhZ2VDaGFuZ2luZyk7XHJcblxyXG4gICAgLy8gc3RhdGVcclxuICAgIGNvbnN0IFtpc1RvcCwgc2V0SXNUb3BdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW2lzQm90dG9tLCBzZXRJc0JvdHRvbV0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gICAgLy8gcmVmXHJcbiAgICBjb25zdCBiYXNlQ29udGFpbmVyUmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lclJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuICAgIGNvbnN0IHRpdGxlUmVmID0gUmVhY3QudXNlUmVmPEhUTUxTcGFuRWxlbWVudD4oKTtcclxuXHJcbiAgICAvLyB1c2VFZmZlY3RcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8g6rO17Ya1XHJcbiAgICAgICAgbWFpbkNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcblxyXG4gICAgICAgIGlmIChjdXJyZW50Q29tcG9uZW50Tm8gPT09IGNvbXBvbmVudE5vKSB7XHJcbiAgICAgICAgICAgIC8vIO2YhOyerCDtjpjsnbTsp4Dsnbwg6rK97JqwXHJcbiAgICAgICAgICAgIGJhc2VDb250YWluZXJSZWYuY3VycmVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgICAgIGJhc2VDb250YWluZXJSZWYuY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgYmFzZUNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IGBgO1xyXG4gICAgICAgICAgICBiYXNlQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUuekluZGV4ID0gYCR7MTAwIC0gY29tcG9uZW50Tm99YDtcclxuXHJcbiAgICAgICAgICAgIG1haW5Db250YWluZXJSZWYuY3VycmVudC5zdHlsZS5vcGFjaXR5ID0gJyc7XHJcbiAgICAgICAgICAgIG1haW5Db250YWluZXJSZWYuY3VycmVudC5zY3JvbGxUbygwLCAwKTsgLy8g7Y6Y7J207KeAIOyKpO2BrOuhpCDstZzsg4HsnITroZxcclxuXHJcbiAgICAgICAgICAgIHRpdGxlUmVmLmN1cnJlbnQuc3R5bGUub3BhY2l0eSA9ICcnO1xyXG5cclxuICAgICAgICAgICAgc2V0SXNUb3AodHJ1ZSk7IC8vIOyKpO2BrOuhpOydgCDstZzsg4Hri6hcclxuICAgICAgICAgICAgaWYgKG1haW5Db250YWluZXJSZWYuY3VycmVudC5jbGllbnRIZWlnaHQgPT09IG1haW5Db250YWluZXJSZWYuY3VycmVudC5zY3JvbGxIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIC8vIO2OmOydtOyngOydmCDsoITssrTtgazquLDqsIAg7ZmU66m0IO2BrOq4sOyZgCDrj5nsnbztlaAg6rK97JqwIOyKpO2BrOuhpOydgCDstZztlZjri6jrj4Qg7Y+s7ZWoXHJcbiAgICAgICAgICAgICAgICBzZXRJc0JvdHRvbSh0cnVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldElzQm90dG9tKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudENvbXBvbmVudE5vID4gY29tcG9uZW50Tm8pIHtcclxuICAgICAgICAgICAgLy8g7KeA64KY6rCEIO2OmOydtOyngOydvCDqsr3smrBcclxuICAgICAgICAgICAgYmFzZUNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcclxuICAgICAgICAgICAgYmFzZUNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICBiYXNlQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZVgoMTgwZGVnKWA7XHJcbiAgICAgICAgICAgIGJhc2VDb250YWluZXJSZWYuY3VycmVudC5zdHlsZS56SW5kZXggPSBgJHs4MCArIGNvbXBvbmVudE5vfWA7XHJcblxyXG4gICAgICAgICAgICBtYWluQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUub3BhY2l0eSA9ICcwLjA1JztcclxuXHJcbiAgICAgICAgICAgIHRpdGxlUmVmLmN1cnJlbnQuc3R5bGUub3BhY2l0eSA9ICcwLjA1JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyDsp4DrgpjqsIDsp4Ag7JWK7J2AIO2OmOydtOyngOydvCDqsr3smrBcclxuICAgICAgICAgICAgYmFzZUNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICAgICAgYmFzZUNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICBiYXNlQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYGA7XHJcbiAgICAgICAgICAgIGJhc2VDb250YWluZXJSZWYuY3VycmVudC5zdHlsZS56SW5kZXggPSBgJHs4MCAtIGNvbXBvbmVudE5vfWA7XHJcblxyXG4gICAgICAgICAgICBtYWluQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUub3BhY2l0eSA9ICcnO1xyXG5cclxuICAgICAgICAgICAgdGl0bGVSZWYuY3VycmVudC5zdHlsZS5vcGFjaXR5ID0gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXNwYXRjaChzZXRJc1BhZ2VDaGFuZ2luZ0FjdGlvbih0cnVlKSk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50Q29tcG9uZW50Tm8gPT09IGNvbXBvbmVudE5vKSB7XHJcbiAgICAgICAgICAgICAgICBtYWluQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUub3ZlcmZsb3cgPSAnYXV0byc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldElzUGFnZUNoYW5naW5nQWN0aW9uKGZhbHNlKSk7XHJcbiAgICAgICAgfSwgdHJhbnNpdGlvbkR1cmF0aW9uICogMTAwMCk7XHJcbiAgICB9LCBbY3VycmVudENvbXBvbmVudE5vXSk7XHJcblxyXG4gICAgLy8gb25DbGlja1xyXG4gICAgY29uc3Qgb25DbGlja1Bvc3RJdCA9IChjb21wb25lbnRObykgPT4ge1xyXG4gICAgICAgIC8vIO2OmOydtOyngCDsnbTrj5nsnbQg7J2066Oo7Ja07KeA6rOgIOyeiOuKlCDqsr3smrBcclxuICAgICAgICBpZiAoaXNQYWdlQ2hhbmdpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGlzcGF0Y2goc2V0Q3VycmVudENvbXBvbmVudE5vQWN0aW9uKGNvbXBvbmVudE5vKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIG9uU2Nyb2xsXHJcbiAgICBjb25zdCBvblNjcm9sbE1haW5Db250YWluZXIgPSAoZTogUmVhY3QuVUlFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcclxuICAgICAgICAvLyDtjpjsnbTsp4Ag7J2064+Z7J20IOydtOujqOyWtOyngOqzoCDsnojripQg6rK97JqwXHJcbiAgICAgICAgaWYgKGlzUGFnZUNoYW5naW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIO2YhOyerCDtjpjsnbTsp4DqsIAg7JWE64uMIOqyveyasCDsiqTtgazroaTquLDriqUg7KSR64uoXHJcbiAgICAgICAgaWYgKGN1cnJlbnRDb21wb25lbnRObyAhPT0gY29tcG9uZW50Tm8pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g7Y6Y7J207KeAIOyDgeuLqOyXkCDsnojripQg6rK97JqwXHJcbiAgICAgICAgaWYgKGUuY3VycmVudFRhcmdldC5zY3JvbGxUb3AgPT09IDApIHtcclxuICAgICAgICAgICAgc2V0SXNUb3AodHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0SXNUb3AoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g7Y6Y7J207KeAIO2VmOuLqOyXkCDsnojripQg6rK97JqwXHJcbiAgICAgICAgaWYgKGUuY3VycmVudFRhcmdldC5zY3JvbGxUb3AgKyBlLmN1cnJlbnRUYXJnZXQuY2xpZW50SGVpZ2h0ID49IGUuY3VycmVudFRhcmdldC5zY3JvbGxIZWlnaHQpIHtcclxuICAgICAgICAgICAgc2V0SXNCb3R0b20odHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0SXNCb3R0b20oZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gb25XaGVlbFxyXG4gICAgY29uc3Qgb25XaGVlbE1haW5Db250YWluZXIgPSAoZTogUmVhY3QuV2hlZWxFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcclxuICAgICAgICAvLyDtjpjsnbTsp4Ag7J2064+Z7J20IOydtOujqOyWtOyngOqzoCDsnojripQg6rK97JqwXHJcbiAgICAgICAgaWYgKGlzUGFnZUNoYW5naW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIO2YhOyerCDtjpjsnbTsp4DqsIAg7JWE64uMIOqyveyasCDtnKDquLDriqUg7KSR64uoXHJcbiAgICAgICAgaWYgKGN1cnJlbnRDb21wb25lbnRObyAhPT0gY29tcG9uZW50Tm8pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g7Y6Y7J207KeA7J2YIOuBneyXkCDrj4Tri6ztlZjqs6Ag7JyE66GcIOyKpO2BrOuhpCDtlojsnYQg6rK97JqwXHJcbiAgICAgICAgaWYgKGlzVG9wICYmIGUubmF0aXZlRXZlbnQuZGVsdGFZIDwgMCkge1xyXG4gICAgICAgICAgICBvbkNsaWNrUG9zdEl0KGNvbXBvbmVudE5vIC0gMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDtjpjsnbTsp4DsnZgg64Gd7JeQIOuPhOuLrO2VmOqzoCDslYTrnpjroZwg7Iqk7YGs66GkIO2WiOydhCDqsr3smrBcclxuICAgICAgICBpZiAoaXNCb3R0b20gJiYgZS5uYXRpdmVFdmVudC5kZWx0YVkgPiAwKSB7XHJcbiAgICAgICAgICAgIC8vIO2YhOyerCDsu7Ttj6zrhIztirgg67KI7Zi46rCAIOuniOyngOunieydtCDslYTri5Ag6rK97Jqw7JeQ66eMIO2OmOydtOyngCDrhJjquLDquLBcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRDb21wb25lbnRObyA8IHRpdGxlQXJyYXkubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgb25DbGlja1Bvc3RJdChjb21wb25lbnRObyArIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxCYXNlQ29udGFpbmVyIHJlZj17YmFzZUNvbnRhaW5lclJlZn0gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119PlxyXG4gICAgICAgICAgICAgICAgPE1haW5Db250YWluZXIgcmVmPXttYWluQ29udGFpbmVyUmVmfSBvblNjcm9sbD17b25TY3JvbGxNYWluQ29udGFpbmVyfSBvbldoZWVsPXtvbldoZWVsTWFpbkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9NYWluQ29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxQb3N0SXRDb250YWluZXIgY29tcG9uZW50Tm89e2NvbXBvbmVudE5vfT5cclxuICAgICAgICAgICAgICAgICAgICA8UG9zdEl0U2VjdGlvbiBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrUG9zdEl0KGNvbXBvbmVudE5vKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0SXRDb2xvckRpdiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RJdFRleHREaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGl0bGUgcmVmPXt0aXRsZVJlZn0+e3RpdGxlQXJyYXlbY29tcG9uZW50Tm9dfTwvVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUG9zdEl0VGV4dERpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L1Bvc3RJdFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L1Bvc3RJdENvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgICA8Q2hhaW5Db250YWluZXI+PC9DaGFpbkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9CYXNlQ29udGFpbmVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=