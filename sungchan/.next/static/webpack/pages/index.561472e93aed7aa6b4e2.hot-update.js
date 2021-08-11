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
})(["position:absolute;top:0;left:0;z-index:1000;"]);
_c7 = ChainContainer;
var ChainSection = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.section.withConfig({
  displayName: "base__ChainSection",
  componentId: "sc-1ugehyd-7"
})(["display:flex;flex-direction:column;align-items:center;"]);
_c8 = ChainSection;
var ChainFrame = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "base__ChainFrame",
  componentId: "sc-1ugehyd-8"
})(["width:10px;height:40px;background-color:red;z-index:1;"]);
_c9 = ChainFrame;
var ChainCircle = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "base__ChainCircle",
  componentId: "sc-1ugehyd-9"
})(["width:20px;height:20px;border-radius:50%;background-color:#fff;transform:translateY(-10px);"]);
_c10 = ChainCircle;
var Title = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.span.withConfig({
  displayName: "base__Title",
  componentId: "sc-1ugehyd-10"
})(["font-weight:600;transition:", "s;color:rgba(0,0,0,0.6);"], transitionDuration);
_c11 = Title;

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
        lineNumber: 249,
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
            lineNumber: 255,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostItTextDiv, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {
              ref: titleRef,
              children: titleArray[componentNo]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 257,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 256,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainContainer, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainSection, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainFrame, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 264,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainCircle, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 265,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 13
    }, _this)
  }, void 0, false);
};

_s(Base, "sleR0Ysdrp3fJtSLue9jiN3s2tA=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector];
});

_c12 = Base;
/* harmony default export */ __webpack_exports__["default"] = (Base);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;

$RefreshReg$(_c, "BaseContainer");
$RefreshReg$(_c2, "MainContainer");
$RefreshReg$(_c3, "PostItContainer");
$RefreshReg$(_c4, "PostItSection");
$RefreshReg$(_c5, "PostItColorDiv");
$RefreshReg$(_c6, "PostItTextDiv");
$RefreshReg$(_c7, "ChainContainer");
$RefreshReg$(_c8, "ChainSection");
$RefreshReg$(_c9, "ChainFrame");
$RefreshReg$(_c10, "ChainCircle");
$RefreshReg$(_c11, "Title");
$RefreshReg$(_c12, "Base");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2Jhc2UudHN4Il0sIm5hbWVzIjpbInRyYW5zaXRpb25EdXJhdGlvbiIsIkJhc2VDb250YWluZXIiLCJzdHlsZWQiLCJwcm9wcyIsImJhY2tncm91bmRDb2xvciIsIk1haW5Db250YWluZXIiLCJQb3N0SXRDb250YWluZXIiLCJjb21wb25lbnRObyIsIlBvc3RJdFNlY3Rpb24iLCJQb3N0SXRDb2xvckRpdiIsIlBvc3RJdFRleHREaXYiLCJDaGFpbkNvbnRhaW5lciIsIkNoYWluU2VjdGlvbiIsIkNoYWluRnJhbWUiLCJDaGFpbkNpcmNsZSIsIlRpdGxlIiwiQmFzZSIsImNoaWxkcmVuIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImN1cnJlbnRDb21wb25lbnRObyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJiYXNlUmVkdWNlciIsInRpdGxlQXJyYXkiLCJiYWNrZ3JvdW5kQ29sb3JBcnJheSIsImlzUGFnZUNoYW5naW5nIiwiUmVhY3QiLCJpc1RvcCIsInNldElzVG9wIiwiaXNCb3R0b20iLCJzZXRJc0JvdHRvbSIsImJhc2VDb250YWluZXJSZWYiLCJtYWluQ29udGFpbmVyUmVmIiwidGl0bGVSZWYiLCJjdXJyZW50Iiwic3R5bGUiLCJvdmVyZmxvdyIsInBvc2l0aW9uIiwiZGlzcGxheSIsInRyYW5zZm9ybSIsInpJbmRleCIsIm9wYWNpdHkiLCJzY3JvbGxUbyIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsInNldElzUGFnZUNoYW5naW5nQWN0aW9uIiwic2V0VGltZW91dCIsIm9uQ2xpY2tQb3N0SXQiLCJzZXRDdXJyZW50Q29tcG9uZW50Tm9BY3Rpb24iLCJvblNjcm9sbE1haW5Db250YWluZXIiLCJlIiwiY3VycmVudFRhcmdldCIsInNjcm9sbFRvcCIsIm9uV2hlZWxNYWluQ29udGFpbmVyIiwibmF0aXZlRXZlbnQiLCJkZWx0YVkiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7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SSw4REFBQyxLQUFEO0FBQU8saUJBQUcsRUFBRTJCLFFBQVo7QUFBQSx3QkFBdUJWLFVBQVUsQ0FBQ2pCLFdBQUQ7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxKLGVBY0ksOERBQUMsY0FBRDtBQUFBLCtCQUNJLDhEQUFDLFlBQUQ7QUFBQSxrQ0FDSSw4REFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSSw4REFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBeUJILENBbEtEOztHQUFNUyxJO1VBQ2VHLG9ELEVBR1VFLG9ELEVBQ1JBLG9ELEVBQ1VBLG9ELEVBQ05BLG9EOzs7T0FQckJMLEk7QUFvS04sK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTYxNDcyZTkzYWVkN2FhNmI0ZTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgc2V0Q3VycmVudENvbXBvbmVudE5vQWN0aW9uLCBzZXRJc1BhZ2VDaGFuZ2luZ0FjdGlvbiB9IGZyb20gJy4uL21vZHVsZXMvYWN0aW9ucyc7XHJcbmltcG9ydCB7IGluZGV4U3RhdGUgfSBmcm9tICcuLi9tb2R1bGVzL2luZGV4UmVkdWNlcic7XHJcblxyXG5jb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSAxO1xyXG5cclxuaW50ZXJmYWNlIElCYXNlQ29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBCYXNlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIGhlaWdodDogOTN2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wczogSUJhc2VDb250YWluZXIpID0+IHByb3BzLmJhY2tncm91bmRDb2xvcn07XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAke3RyYW5zaXRpb25EdXJhdGlvbn1zO1xyXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgdG9wO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IC0xcHggNHB4IDRweCAjODg4O1xyXG5gO1xyXG5cclxuY29uc3QgTWFpbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAke3RyYW5zaXRpb25EdXJhdGlvbn1zO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElQb3N0SXRDb250YWluZXIge1xyXG4gICAgY29tcG9uZW50Tm86IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgUG9zdEl0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogJHsocHJvcHM6IElQb3N0SXRDb250YWluZXIpID0+IHByb3BzLmNvbXBvbmVudE5vICogMzN9cHg7XHJcbiAgICBsZWZ0OiAtMTEwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBQb3N0SXRTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmludGVyZmFjZSBJUG9zdEl0Q29sb3JEaXYge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IFBvc3RJdENvbG9yRGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzOiBJUG9zdEl0Q29sb3JEaXYpID0+IHByb3BzLmJhY2tncm91bmRDb2xvcn07XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuYDtcclxuXHJcbmNvbnN0IFBvc3RJdFRleHREaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZjhlNTtcclxuYDtcclxuXHJcbmNvbnN0IENoYWluQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG5gO1xyXG5cclxuY29uc3QgQ2hhaW5TZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBDaGFpbkZyYW1lID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgei1pbmRleDogMTtcclxuYDtcclxuXHJcbmNvbnN0IENoYWluQ2lyY2xlID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRyYW5zaXRpb246ICR7dHJhbnNpdGlvbkR1cmF0aW9ufXM7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElCYXNlIHtcclxuICAgIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgICBjb21wb25lbnRObzogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBCYXNlOiBSZWFjdC5GQzxJQmFzZT4gPSAoeyBjaGlsZHJlbiwgY29tcG9uZW50Tm8gfSk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICAvLyByZWR1eFxyXG4gICAgY29uc3QgY3VycmVudENvbXBvbmVudE5vID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBpbmRleFN0YXRlKSA9PiBzdGF0ZS5iYXNlUmVkdWNlci5jdXJyZW50Q29tcG9uZW50Tm8pO1xyXG4gICAgY29uc3QgdGl0bGVBcnJheSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogaW5kZXhTdGF0ZSkgPT4gc3RhdGUuYmFzZVJlZHVjZXIudGl0bGVBcnJheSk7XHJcbiAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3JBcnJheSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogaW5kZXhTdGF0ZSkgPT4gc3RhdGUuYmFzZVJlZHVjZXIuYmFja2dyb3VuZENvbG9yQXJyYXkpO1xyXG4gICAgY29uc3QgaXNQYWdlQ2hhbmdpbmcgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IGluZGV4U3RhdGUpID0+IHN0YXRlLmJhc2VSZWR1Y2VyLmlzUGFnZUNoYW5naW5nKTtcclxuXHJcbiAgICAvLyBzdGF0ZVxyXG4gICAgY29uc3QgW2lzVG9wLCBzZXRJc1RvcF0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNCb3R0b20sIHNldElzQm90dG9tXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgICAvLyByZWZcclxuICAgIGNvbnN0IGJhc2VDb250YWluZXJSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KCk7XHJcbiAgICBjb25zdCBtYWluQ29udGFpbmVyUmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG4gICAgY29uc3QgdGl0bGVSZWYgPSBSZWFjdC51c2VSZWY8SFRNTFNwYW5FbGVtZW50PigpO1xyXG5cclxuICAgIC8vIHVzZUVmZmVjdFxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyDqs7XthrVcclxuICAgICAgICBtYWluQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnRDb21wb25lbnRObyA9PT0gY29tcG9uZW50Tm8pIHtcclxuICAgICAgICAgICAgLy8g7ZiE7J6sIO2OmOydtOyngOydvCDqsr3smrBcclxuICAgICAgICAgICAgYmFzZUNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICAgICAgYmFzZUNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICBiYXNlQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYGA7XHJcbiAgICAgICAgICAgIGJhc2VDb250YWluZXJSZWYuY3VycmVudC5zdHlsZS56SW5kZXggPSBgJHsxMDAgLSBjb21wb25lbnROb31gO1xyXG5cclxuICAgICAgICAgICAgbWFpbkNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLm9wYWNpdHkgPSAnJztcclxuICAgICAgICAgICAgbWFpbkNvbnRhaW5lclJlZi5jdXJyZW50LnNjcm9sbFRvKDAsIDApOyAvLyDtjpjsnbTsp4Ag7Iqk7YGs66GkIOy1nOyDgeychOuhnFxyXG5cclxuICAgICAgICAgICAgdGl0bGVSZWYuY3VycmVudC5zdHlsZS5vcGFjaXR5ID0gJyc7XHJcblxyXG4gICAgICAgICAgICBzZXRJc1RvcCh0cnVlKTsgLy8g7Iqk7YGs66Gk7J2AIOy1nOyDgeuLqFxyXG4gICAgICAgICAgICBpZiAobWFpbkNvbnRhaW5lclJlZi5jdXJyZW50LmNsaWVudEhlaWdodCA9PT0gbWFpbkNvbnRhaW5lclJlZi5jdXJyZW50LnNjcm9sbEhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgLy8g7Y6Y7J207KeA7J2YIOyghOyytO2BrOq4sOqwgCDtmZTrqbQg7YGs6riw7JmAIOuPmeydvO2VoCDqsr3smrAg7Iqk7YGs66Gk7J2AIOy1nO2VmOuLqOuPhCDtj6ztlahcclxuICAgICAgICAgICAgICAgIHNldElzQm90dG9tKHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0SXNCb3R0b20oZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50Q29tcG9uZW50Tm8gPiBjb21wb25lbnRObykge1xyXG4gICAgICAgICAgICAvLyDsp4DrgpjqsIQg7Y6Y7J207KeA7J28IOqyveyasFxyXG4gICAgICAgICAgICBiYXNlQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xyXG4gICAgICAgICAgICBiYXNlQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIGJhc2VDb250YWluZXJSZWYuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlWCgxODBkZWcpYDtcclxuICAgICAgICAgICAgYmFzZUNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLnpJbmRleCA9IGAkezgwICsgY29tcG9uZW50Tm99YDtcclxuXHJcbiAgICAgICAgICAgIG1haW5Db250YWluZXJSZWYuY3VycmVudC5zdHlsZS5vcGFjaXR5ID0gJzAuMDUnO1xyXG5cclxuICAgICAgICAgICAgdGl0bGVSZWYuY3VycmVudC5zdHlsZS5vcGFjaXR5ID0gJzAuMDUnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIOyngOuCmOqwgOyngCDslYrsnYAg7Y6Y7J207KeA7J28IOqyveyasFxyXG4gICAgICAgICAgICBiYXNlQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgICAgICBiYXNlQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIGJhc2VDb250YWluZXJSZWYuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBgYDtcclxuICAgICAgICAgICAgYmFzZUNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLnpJbmRleCA9IGAkezgwIC0gY29tcG9uZW50Tm99YDtcclxuXHJcbiAgICAgICAgICAgIG1haW5Db250YWluZXJSZWYuY3VycmVudC5zdHlsZS5vcGFjaXR5ID0gJyc7XHJcblxyXG4gICAgICAgICAgICB0aXRsZVJlZi5jdXJyZW50LnN0eWxlLm9wYWNpdHkgPSAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKHNldElzUGFnZUNoYW5naW5nQWN0aW9uKHRydWUpKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRDb21wb25lbnRObyA9PT0gY29tcG9uZW50Tm8pIHtcclxuICAgICAgICAgICAgICAgIG1haW5Db250YWluZXJSZWYuY3VycmVudC5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZGlzcGF0Y2goc2V0SXNQYWdlQ2hhbmdpbmdBY3Rpb24oZmFsc2UpKTtcclxuICAgICAgICB9LCB0cmFuc2l0aW9uRHVyYXRpb24gKiAxMDAwKTtcclxuICAgIH0sIFtjdXJyZW50Q29tcG9uZW50Tm9dKTtcclxuXHJcbiAgICAvLyBvbkNsaWNrXHJcbiAgICBjb25zdCBvbkNsaWNrUG9zdEl0ID0gKGNvbXBvbmVudE5vKSA9PiB7XHJcbiAgICAgICAgLy8g7Y6Y7J207KeAIOydtOuPmeydtCDsnbTro6jslrTsp4Dqs6Ag7J6I64qUIOqyveyasFxyXG4gICAgICAgIGlmIChpc1BhZ2VDaGFuZ2luZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXNwYXRjaChzZXRDdXJyZW50Q29tcG9uZW50Tm9BY3Rpb24oY29tcG9uZW50Tm8pKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gb25TY3JvbGxcclxuICAgIGNvbnN0IG9uU2Nyb2xsTWFpbkNvbnRhaW5lciA9IChlOiBSZWFjdC5VSUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xyXG4gICAgICAgIC8vIO2OmOydtOyngCDsnbTrj5nsnbQg7J2066Oo7Ja07KeA6rOgIOyeiOuKlCDqsr3smrBcclxuICAgICAgICBpZiAoaXNQYWdlQ2hhbmdpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g7ZiE7J6sIO2OmOydtOyngOqwgCDslYTri4wg6rK97JqwIOyKpO2BrOuhpOq4sOuKpSDspJHri6hcclxuICAgICAgICBpZiAoY3VycmVudENvbXBvbmVudE5vICE9PSBjb21wb25lbnRObykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDtjpjsnbTsp4Ag7IOB64uo7JeQIOyeiOuKlCDqsr3smrBcclxuICAgICAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LnNjcm9sbFRvcCA9PT0gMCkge1xyXG4gICAgICAgICAgICBzZXRJc1RvcCh0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRJc1RvcChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDtjpjsnbTsp4Ag7ZWY64uo7JeQIOyeiOuKlCDqsr3smrBcclxuICAgICAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LnNjcm9sbFRvcCArIGUuY3VycmVudFRhcmdldC5jbGllbnRIZWlnaHQgPj0gZS5jdXJyZW50VGFyZ2V0LnNjcm9sbEhlaWdodCkge1xyXG4gICAgICAgICAgICBzZXRJc0JvdHRvbSh0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRJc0JvdHRvbShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBvbldoZWVsXHJcbiAgICBjb25zdCBvbldoZWVsTWFpbkNvbnRhaW5lciA9IChlOiBSZWFjdC5XaGVlbEV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xyXG4gICAgICAgIC8vIO2OmOydtOyngCDsnbTrj5nsnbQg7J2066Oo7Ja07KeA6rOgIOyeiOuKlCDqsr3smrBcclxuICAgICAgICBpZiAoaXNQYWdlQ2hhbmdpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g7ZiE7J6sIO2OmOydtOyngOqwgCDslYTri4wg6rK97JqwIO2coOq4sOuKpSDspJHri6hcclxuICAgICAgICBpZiAoY3VycmVudENvbXBvbmVudE5vICE9PSBjb21wb25lbnRObykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDtjpjsnbTsp4DsnZgg64Gd7JeQIOuPhOuLrO2VmOqzoCDsnITroZwg7Iqk7YGs66GkIO2WiOydhCDqsr3smrBcclxuICAgICAgICBpZiAoaXNUb3AgJiYgZS5uYXRpdmVFdmVudC5kZWx0YVkgPCAwKSB7XHJcbiAgICAgICAgICAgIG9uQ2xpY2tQb3N0SXQoY29tcG9uZW50Tm8gLSAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIO2OmOydtOyngOydmCDrgZ3sl5Ag64+E64us7ZWY6rOgIOyVhOuemOuhnCDsiqTtgazroaQg7ZaI7J2EIOqyveyasFxyXG4gICAgICAgIGlmIChpc0JvdHRvbSAmJiBlLm5hdGl2ZUV2ZW50LmRlbHRhWSA+IDApIHtcclxuICAgICAgICAgICAgLy8g7ZiE7J6sIOy7tO2PrOuEjO2KuCDrsojtmLjqsIAg66eI7KeA66eJ7J20IOyVhOuLkCDqsr3smrDsl5Drp4wg7Y6Y7J207KeAIOuEmOq4sOq4sFxyXG4gICAgICAgICAgICBpZiAoY3VycmVudENvbXBvbmVudE5vIDwgdGl0bGVBcnJheS5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrUG9zdEl0KGNvbXBvbmVudE5vICsgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEJhc2VDb250YWluZXIgcmVmPXtiYXNlQ29udGFpbmVyUmVmfSBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0+XHJcbiAgICAgICAgICAgICAgICA8TWFpbkNvbnRhaW5lciByZWY9e21haW5Db250YWluZXJSZWZ9IG9uU2Nyb2xsPXtvblNjcm9sbE1haW5Db250YWluZXJ9IG9uV2hlZWw9e29uV2hlZWxNYWluQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8L01haW5Db250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgPFBvc3RJdENvbnRhaW5lciBjb21wb25lbnRObz17Y29tcG9uZW50Tm99PlxyXG4gICAgICAgICAgICAgICAgICAgIDxQb3N0SXRTZWN0aW9uIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2tQb3N0SXQoY29tcG9uZW50Tm8pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RJdENvbG9yRGl2IGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9zdEl0VGV4dERpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaXRsZSByZWY9e3RpdGxlUmVmfT57dGl0bGVBcnJheVtjb21wb25lbnROb119PC9UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Qb3N0SXRUZXh0RGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUG9zdEl0U2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvUG9zdEl0Q29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxDaGFpbkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2hhaW5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hhaW5GcmFtZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hhaW5DaXJjbGUgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NoYWluU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvQ2hhaW5Db250YWluZXI+XHJcbiAgICAgICAgICAgIDwvQmFzZUNvbnRhaW5lcj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYXNlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9