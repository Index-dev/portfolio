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
})([""]);
_c8 = ChainSection;
var ChainFrame = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "base__ChainFrame",
  componentId: "sc-1ugehyd-8"
})(["width:20px;height:40px;background-color:red;"]);
_c9 = ChainFrame;
var ChainCircle = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "base__ChainCircle",
  componentId: "sc-1ugehyd-9"
})(["width:20px;height:20px;border-radius:50%;background-color:#fff;"]);
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
        lineNumber: 243,
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
            lineNumber: 249,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostItTextDiv, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {
              ref: titleRef,
              children: titleArray[componentNo]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 251,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 250,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainContainer, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainSection, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainFrame, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 258,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainCircle, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 259,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 242,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2Jhc2UudHN4Il0sIm5hbWVzIjpbInRyYW5zaXRpb25EdXJhdGlvbiIsIkJhc2VDb250YWluZXIiLCJzdHlsZWQiLCJwcm9wcyIsImJhY2tncm91bmRDb2xvciIsIk1haW5Db250YWluZXIiLCJQb3N0SXRDb250YWluZXIiLCJjb21wb25lbnRObyIsIlBvc3RJdFNlY3Rpb24iLCJQb3N0SXRDb2xvckRpdiIsIlBvc3RJdFRleHREaXYiLCJDaGFpbkNvbnRhaW5lciIsIkNoYWluU2VjdGlvbiIsIkNoYWluRnJhbWUiLCJDaGFpbkNpcmNsZSIsIlRpdGxlIiwiQmFzZSIsImNoaWxkcmVuIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImN1cnJlbnRDb21wb25lbnRObyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJiYXNlUmVkdWNlciIsInRpdGxlQXJyYXkiLCJiYWNrZ3JvdW5kQ29sb3JBcnJheSIsImlzUGFnZUNoYW5naW5nIiwiUmVhY3QiLCJpc1RvcCIsInNldElzVG9wIiwiaXNCb3R0b20iLCJzZXRJc0JvdHRvbSIsImJhc2VDb250YWluZXJSZWYiLCJtYWluQ29udGFpbmVyUmVmIiwidGl0bGVSZWYiLCJjdXJyZW50Iiwic3R5bGUiLCJvdmVyZmxvdyIsInBvc2l0aW9uIiwiZGlzcGxheSIsInRyYW5zZm9ybSIsInpJbmRleCIsIm9wYWNpdHkiLCJzY3JvbGxUbyIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsInNldElzUGFnZUNoYW5naW5nQWN0aW9uIiwic2V0VGltZW91dCIsIm9uQ2xpY2tQb3N0SXQiLCJzZXRDdXJyZW50Q29tcG9uZW50Tm9BY3Rpb24iLCJvblNjcm9sbE1haW5Db250YWluZXIiLCJlIiwiY3VycmVudFRhcmdldCIsInNjcm9sbFRvcCIsIm9uV2hlZWxNYWluQ29udGFpbmVyIiwibmF0aXZlRXZlbnQiLCJkZWx0YVkiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7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LDhEQUFDLEtBQUQ7QUFBTyxpQkFBRyxFQUFFMkIsUUFBWjtBQUFBLHdCQUF1QlYsVUFBVSxDQUFDakIsV0FBRDtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEosZUFjSSw4REFBQyxjQUFEO0FBQUEsK0JBQ0ksOERBQUMsWUFBRDtBQUFBLGtDQUNJLDhEQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJLDhEQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUF5QkgsQ0FsS0Q7O0dBQU1TLEk7VUFDZUcsb0QsRUFHVUUsb0QsRUFDUkEsb0QsRUFDVUEsb0QsRUFDTkEsb0Q7OztPQVByQkwsSTtBQW9LTiwrREFBZUEsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lNDZhMmFhODBjNzlkNzBkZTI4Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBzZXRDdXJyZW50Q29tcG9uZW50Tm9BY3Rpb24sIHNldElzUGFnZUNoYW5naW5nQWN0aW9uIH0gZnJvbSAnLi4vbW9kdWxlcy9hY3Rpb25zJztcclxuaW1wb3J0IHsgaW5kZXhTdGF0ZSB9IGZyb20gJy4uL21vZHVsZXMvaW5kZXhSZWR1Y2VyJztcclxuXHJcbmNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IDE7XHJcblxyXG5pbnRlcmZhY2UgSUJhc2VDb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IEJhc2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgaGVpZ2h0OiA5M3ZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzOiBJQmFzZUNvbnRhaW5lcikgPT4gcHJvcHMuYmFja2dyb3VuZENvbG9yfTtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246ICR7dHJhbnNpdGlvbkR1cmF0aW9ufXM7XHJcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciB0b3A7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3gtc2hhZG93OiAwcHggLTFweCA0cHggNHB4ICM4ODg7XHJcbmA7XHJcblxyXG5jb25zdCBNYWluQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246ICR7dHJhbnNpdGlvbkR1cmF0aW9ufXM7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSVBvc3RJdENvbnRhaW5lciB7XHJcbiAgICBjb21wb25lbnRObzogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBQb3N0SXRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAkeyhwcm9wczogSVBvc3RJdENvbnRhaW5lcikgPT4gcHJvcHMuY29tcG9uZW50Tm8gKiAzM31weDtcclxuICAgIGxlZnQ6IC0xMTBweDtcclxuYDtcclxuXHJcbmNvbnN0IFBvc3RJdFNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElQb3N0SXRDb2xvckRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgUG9zdEl0Q29sb3JEaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHM6IElQb3N0SXRDb2xvckRpdikgPT4gcHJvcHMuYmFja2dyb3VuZENvbG9yfTtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgUG9zdEl0VGV4dERpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmOGU1O1xyXG5gO1xyXG5cclxuY29uc3QgQ2hhaW5Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbmA7XHJcblxyXG5jb25zdCBDaGFpblNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBgO1xyXG5cclxuY29uc3QgQ2hhaW5GcmFtZSA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuYDtcclxuXHJcbmNvbnN0IENoYWluQ2lyY2xlID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuYDtcclxuXHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkLnNwYW5gXHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdHJhbnNpdGlvbjogJHt0cmFuc2l0aW9uRHVyYXRpb259cztcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSUJhc2Uge1xyXG4gICAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxuICAgIGNvbXBvbmVudE5vOiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IEJhc2U6IFJlYWN0LkZDPElCYXNlPiA9ICh7IGNoaWxkcmVuLCBjb21wb25lbnRObyB9KTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIC8vIHJlZHV4XHJcbiAgICBjb25zdCBjdXJyZW50Q29tcG9uZW50Tm8gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IGluZGV4U3RhdGUpID0+IHN0YXRlLmJhc2VSZWR1Y2VyLmN1cnJlbnRDb21wb25lbnRObyk7XHJcbiAgICBjb25zdCB0aXRsZUFycmF5ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBpbmRleFN0YXRlKSA9PiBzdGF0ZS5iYXNlUmVkdWNlci50aXRsZUFycmF5KTtcclxuICAgIGNvbnN0IGJhY2tncm91bmRDb2xvckFycmF5ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBpbmRleFN0YXRlKSA9PiBzdGF0ZS5iYXNlUmVkdWNlci5iYWNrZ3JvdW5kQ29sb3JBcnJheSk7XHJcbiAgICBjb25zdCBpc1BhZ2VDaGFuZ2luZyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogaW5kZXhTdGF0ZSkgPT4gc3RhdGUuYmFzZVJlZHVjZXIuaXNQYWdlQ2hhbmdpbmcpO1xyXG5cclxuICAgIC8vIHN0YXRlXHJcbiAgICBjb25zdCBbaXNUb3AsIHNldElzVG9wXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtpc0JvdHRvbSwgc2V0SXNCb3R0b21dID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICAgIC8vIHJlZlxyXG4gICAgY29uc3QgYmFzZUNvbnRhaW5lclJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuICAgIGNvbnN0IG1haW5Db250YWluZXJSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KCk7XHJcbiAgICBjb25zdCB0aXRsZVJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MU3BhbkVsZW1lbnQ+KCk7XHJcblxyXG4gICAgLy8gdXNlRWZmZWN0XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIOqzte2GtVxyXG4gICAgICAgIG1haW5Db250YWluZXJSZWYuY3VycmVudC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG5cclxuICAgICAgICBpZiAoY3VycmVudENvbXBvbmVudE5vID09PSBjb21wb25lbnRObykge1xyXG4gICAgICAgICAgICAvLyDtmITsnqwg7Y6Y7J207KeA7J28IOqyveyasFxyXG4gICAgICAgICAgICBiYXNlQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgICAgICBiYXNlQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIGJhc2VDb250YWluZXJSZWYuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBgYDtcclxuICAgICAgICAgICAgYmFzZUNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLnpJbmRleCA9IGAkezEwMCAtIGNvbXBvbmVudE5vfWA7XHJcblxyXG4gICAgICAgICAgICBtYWluQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUub3BhY2l0eSA9ICcnO1xyXG4gICAgICAgICAgICBtYWluQ29udGFpbmVyUmVmLmN1cnJlbnQuc2Nyb2xsVG8oMCwgMCk7IC8vIO2OmOydtOyngCDsiqTtgazroaQg7LWc7IOB7JyE66GcXHJcblxyXG4gICAgICAgICAgICB0aXRsZVJlZi5jdXJyZW50LnN0eWxlLm9wYWNpdHkgPSAnJztcclxuXHJcbiAgICAgICAgICAgIHNldElzVG9wKHRydWUpOyAvLyDsiqTtgazroaTsnYAg7LWc7IOB64uoXHJcbiAgICAgICAgICAgIGlmIChtYWluQ29udGFpbmVyUmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0ID09PSBtYWluQ29udGFpbmVyUmVmLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyDtjpjsnbTsp4DsnZgg7KCE7LK07YGs6riw6rCAIO2ZlOuptCDtgazquLDsmYAg64+Z7J287ZWgIOqyveyasCDsiqTtgazroaTsnYAg7LWc7ZWY64uo64+EIO2PrO2VqFxyXG4gICAgICAgICAgICAgICAgc2V0SXNCb3R0b20odHJ1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRJc0JvdHRvbShmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRDb21wb25lbnRObyA+IGNvbXBvbmVudE5vKSB7XHJcbiAgICAgICAgICAgIC8vIOyngOuCmOqwhCDtjpjsnbTsp4Dsnbwg6rK97JqwXHJcbiAgICAgICAgICAgIGJhc2VDb250YWluZXJSZWYuY3VycmVudC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XHJcbiAgICAgICAgICAgIGJhc2VDb250YWluZXJSZWYuY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgYmFzZUNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGVYKDE4MGRlZylgO1xyXG4gICAgICAgICAgICBiYXNlQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUuekluZGV4ID0gYCR7ODAgKyBjb21wb25lbnROb31gO1xyXG5cclxuICAgICAgICAgICAgbWFpbkNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLm9wYWNpdHkgPSAnMC4wNSc7XHJcblxyXG4gICAgICAgICAgICB0aXRsZVJlZi5jdXJyZW50LnN0eWxlLm9wYWNpdHkgPSAnMC4wNSc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8g7KeA64KY6rCA7KeAIOyViuydgCDtjpjsnbTsp4Dsnbwg6rK97JqwXHJcbiAgICAgICAgICAgIGJhc2VDb250YWluZXJSZWYuY3VycmVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgICAgIGJhc2VDb250YWluZXJSZWYuY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgYmFzZUNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IGBgO1xyXG4gICAgICAgICAgICBiYXNlQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUuekluZGV4ID0gYCR7ODAgLSBjb21wb25lbnROb31gO1xyXG5cclxuICAgICAgICAgICAgbWFpbkNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLm9wYWNpdHkgPSAnJztcclxuXHJcbiAgICAgICAgICAgIHRpdGxlUmVmLmN1cnJlbnQuc3R5bGUub3BhY2l0eSA9ICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGlzcGF0Y2goc2V0SXNQYWdlQ2hhbmdpbmdBY3Rpb24odHJ1ZSkpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudENvbXBvbmVudE5vID09PSBjb21wb25lbnRObykge1xyXG4gICAgICAgICAgICAgICAgbWFpbkNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLm92ZXJmbG93ID0gJ2F1dG8nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkaXNwYXRjaChzZXRJc1BhZ2VDaGFuZ2luZ0FjdGlvbihmYWxzZSkpO1xyXG4gICAgICAgIH0sIHRyYW5zaXRpb25EdXJhdGlvbiAqIDEwMDApO1xyXG4gICAgfSwgW2N1cnJlbnRDb21wb25lbnROb10pO1xyXG5cclxuICAgIC8vIG9uQ2xpY2tcclxuICAgIGNvbnN0IG9uQ2xpY2tQb3N0SXQgPSAoY29tcG9uZW50Tm8pID0+IHtcclxuICAgICAgICAvLyDtjpjsnbTsp4Ag7J2064+Z7J20IOydtOujqOyWtOyngOqzoCDsnojripQg6rK97JqwXHJcbiAgICAgICAgaWYgKGlzUGFnZUNoYW5naW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKHNldEN1cnJlbnRDb21wb25lbnROb0FjdGlvbihjb21wb25lbnRObykpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBvblNjcm9sbFxyXG4gICAgY29uc3Qgb25TY3JvbGxNYWluQ29udGFpbmVyID0gKGU6IFJlYWN0LlVJRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgLy8g7Y6Y7J207KeAIOydtOuPmeydtCDsnbTro6jslrTsp4Dqs6Ag7J6I64qUIOqyveyasFxyXG4gICAgICAgIGlmIChpc1BhZ2VDaGFuZ2luZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDtmITsnqwg7Y6Y7J207KeA6rCAIOyVhOuLjCDqsr3smrAg7Iqk7YGs66Gk6riw64qlIOykkeuLqFxyXG4gICAgICAgIGlmIChjdXJyZW50Q29tcG9uZW50Tm8gIT09IGNvbXBvbmVudE5vKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIO2OmOydtOyngCDsg4Hri6jsl5Ag7J6I64qUIOqyveyasFxyXG4gICAgICAgIGlmIChlLmN1cnJlbnRUYXJnZXQuc2Nyb2xsVG9wID09PSAwKSB7XHJcbiAgICAgICAgICAgIHNldElzVG9wKHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldElzVG9wKGZhbHNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIO2OmOydtOyngCDtlZjri6jsl5Ag7J6I64qUIOqyveyasFxyXG4gICAgICAgIGlmIChlLmN1cnJlbnRUYXJnZXQuc2Nyb2xsVG9wICsgZS5jdXJyZW50VGFyZ2V0LmNsaWVudEhlaWdodCA+PSBlLmN1cnJlbnRUYXJnZXQuc2Nyb2xsSGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHNldElzQm90dG9tKHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldElzQm90dG9tKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIG9uV2hlZWxcclxuICAgIGNvbnN0IG9uV2hlZWxNYWluQ29udGFpbmVyID0gKGU6IFJlYWN0LldoZWVsRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgLy8g7Y6Y7J207KeAIOydtOuPmeydtCDsnbTro6jslrTsp4Dqs6Ag7J6I64qUIOqyveyasFxyXG4gICAgICAgIGlmIChpc1BhZ2VDaGFuZ2luZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDtmITsnqwg7Y6Y7J207KeA6rCAIOyVhOuLjCDqsr3smrAg7Zyg6riw64qlIOykkeuLqFxyXG4gICAgICAgIGlmIChjdXJyZW50Q29tcG9uZW50Tm8gIT09IGNvbXBvbmVudE5vKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIO2OmOydtOyngOydmCDrgZ3sl5Ag64+E64us7ZWY6rOgIOychOuhnCDsiqTtgazroaQg7ZaI7J2EIOqyveyasFxyXG4gICAgICAgIGlmIChpc1RvcCAmJiBlLm5hdGl2ZUV2ZW50LmRlbHRhWSA8IDApIHtcclxuICAgICAgICAgICAgb25DbGlja1Bvc3RJdChjb21wb25lbnRObyAtIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g7Y6Y7J207KeA7J2YIOuBneyXkCDrj4Tri6ztlZjqs6Ag7JWE656Y66GcIOyKpO2BrOuhpCDtlojsnYQg6rK97JqwXHJcbiAgICAgICAgaWYgKGlzQm90dG9tICYmIGUubmF0aXZlRXZlbnQuZGVsdGFZID4gMCkge1xyXG4gICAgICAgICAgICAvLyDtmITsnqwg7Lu07Y+s64SM7Yq4IOuyiO2YuOqwgCDrp4jsp4Drp4nsnbQg7JWE64uQIOqyveyasOyXkOunjCDtjpjsnbTsp4Ag64SY6riw6riwXHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50Q29tcG9uZW50Tm8gPCB0aXRsZUFycmF5Lmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tQb3N0SXQoY29tcG9uZW50Tm8gKyAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QmFzZUNvbnRhaW5lciByZWY9e2Jhc2VDb250YWluZXJSZWZ9IGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfT5cclxuICAgICAgICAgICAgICAgIDxNYWluQ29udGFpbmVyIHJlZj17bWFpbkNvbnRhaW5lclJlZn0gb25TY3JvbGw9e29uU2Nyb2xsTWFpbkNvbnRhaW5lcn0gb25XaGVlbD17b25XaGVlbE1haW5Db250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvTWFpbkNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgICA8UG9zdEl0Q29udGFpbmVyIGNvbXBvbmVudE5vPXtjb21wb25lbnROb30+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBvc3RJdFNlY3Rpb24gb25DbGljaz17KCkgPT4gb25DbGlja1Bvc3RJdChjb21wb25lbnRObyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9zdEl0Q29sb3JEaXYgYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0SXRUZXh0RGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRpdGxlIHJlZj17dGl0bGVSZWZ9Pnt0aXRsZUFycmF5W2NvbXBvbmVudE5vXX08L1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Bvc3RJdFRleHREaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Qb3N0SXRTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9Qb3N0SXRDb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgPENoYWluQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGFpblNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFpbkZyYW1lIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFpbkNpcmNsZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2hhaW5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9DaGFpbkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9CYXNlQ29udGFpbmVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=