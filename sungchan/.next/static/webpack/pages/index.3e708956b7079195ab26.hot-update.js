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
})(["width:10px;height:40px;background-color:red;"]);
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
        lineNumber: 244,
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
            lineNumber: 250,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostItTextDiv, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {
              ref: titleRef,
              children: titleArray[componentNo]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 252,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 251,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainContainer, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainSection, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainFrame, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 259,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainCircle, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 260,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 243,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2Jhc2UudHN4Il0sIm5hbWVzIjpbInRyYW5zaXRpb25EdXJhdGlvbiIsIkJhc2VDb250YWluZXIiLCJzdHlsZWQiLCJwcm9wcyIsImJhY2tncm91bmRDb2xvciIsIk1haW5Db250YWluZXIiLCJQb3N0SXRDb250YWluZXIiLCJjb21wb25lbnRObyIsIlBvc3RJdFNlY3Rpb24iLCJQb3N0SXRDb2xvckRpdiIsIlBvc3RJdFRleHREaXYiLCJDaGFpbkNvbnRhaW5lciIsIkNoYWluU2VjdGlvbiIsIkNoYWluRnJhbWUiLCJDaGFpbkNpcmNsZSIsIlRpdGxlIiwiQmFzZSIsImNoaWxkcmVuIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImN1cnJlbnRDb21wb25lbnRObyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJiYXNlUmVkdWNlciIsInRpdGxlQXJyYXkiLCJiYWNrZ3JvdW5kQ29sb3JBcnJheSIsImlzUGFnZUNoYW5naW5nIiwiUmVhY3QiLCJpc1RvcCIsInNldElzVG9wIiwiaXNCb3R0b20iLCJzZXRJc0JvdHRvbSIsImJhc2VDb250YWluZXJSZWYiLCJtYWluQ29udGFpbmVyUmVmIiwidGl0bGVSZWYiLCJjdXJyZW50Iiwic3R5bGUiLCJvdmVyZmxvdyIsInBvc2l0aW9uIiwiZGlzcGxheSIsInRyYW5zZm9ybSIsInpJbmRleCIsIm9wYWNpdHkiLCJzY3JvbGxUbyIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsInNldElzUGFnZUNoYW5naW5nQWN0aW9uIiwic2V0VGltZW91dCIsIm9uQ2xpY2tQb3N0SXQiLCJzZXRDdXJyZW50Q29tcG9uZW50Tm9BY3Rpb24iLCJvblNjcm9sbE1haW5Db250YWluZXIiLCJlIiwiY3VycmVudFRhcmdldCIsInNjcm9sbFRvcCIsIm9uV2hlZWxNYWluQ29udGFpbmVyIiwibmF0aXZlRXZlbnQiLCJkZWx0YVkiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7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LDhEQUFDLEtBQUQ7QUFBTyxpQkFBRyxFQUFFMkIsUUFBWjtBQUFBLHdCQUF1QlYsVUFBVSxDQUFDakIsV0FBRDtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEosZUFjSSw4REFBQyxjQUFEO0FBQUEsK0JBQ0ksOERBQUMsWUFBRDtBQUFBLGtDQUNJLDhEQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJLDhEQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUF5QkgsQ0FsS0Q7O0dBQU1TLEk7VUFDZUcsb0QsRUFHVUUsb0QsRUFDUkEsb0QsRUFDVUEsb0QsRUFDTkEsb0Q7OztPQVByQkwsSTtBQW9LTiwrREFBZUEsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zZTcwODk1NmI3MDc5MTk1YWIyNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBzZXRDdXJyZW50Q29tcG9uZW50Tm9BY3Rpb24sIHNldElzUGFnZUNoYW5naW5nQWN0aW9uIH0gZnJvbSAnLi4vbW9kdWxlcy9hY3Rpb25zJztcclxuaW1wb3J0IHsgaW5kZXhTdGF0ZSB9IGZyb20gJy4uL21vZHVsZXMvaW5kZXhSZWR1Y2VyJztcclxuXHJcbmNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IDE7XHJcblxyXG5pbnRlcmZhY2UgSUJhc2VDb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IEJhc2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgaGVpZ2h0OiA5M3ZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzOiBJQmFzZUNvbnRhaW5lcikgPT4gcHJvcHMuYmFja2dyb3VuZENvbG9yfTtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246ICR7dHJhbnNpdGlvbkR1cmF0aW9ufXM7XHJcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciB0b3A7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3gtc2hhZG93OiAwcHggLTFweCA0cHggNHB4ICM4ODg7XHJcbmA7XHJcblxyXG5jb25zdCBNYWluQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246ICR7dHJhbnNpdGlvbkR1cmF0aW9ufXM7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSVBvc3RJdENvbnRhaW5lciB7XHJcbiAgICBjb21wb25lbnRObzogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBQb3N0SXRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAkeyhwcm9wczogSVBvc3RJdENvbnRhaW5lcikgPT4gcHJvcHMuY29tcG9uZW50Tm8gKiAzM31weDtcclxuICAgIGxlZnQ6IC0xMTBweDtcclxuYDtcclxuXHJcbmNvbnN0IFBvc3RJdFNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElQb3N0SXRDb2xvckRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgUG9zdEl0Q29sb3JEaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHM6IElQb3N0SXRDb2xvckRpdikgPT4gcHJvcHMuYmFja2dyb3VuZENvbG9yfTtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgUG9zdEl0VGV4dERpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmOGU1O1xyXG5gO1xyXG5cclxuY29uc3QgQ2hhaW5Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbmA7XHJcblxyXG5jb25zdCBDaGFpblNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBgO1xyXG5cclxuY29uc3QgQ2hhaW5GcmFtZSA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuYDtcclxuXHJcbmNvbnN0IENoYWluQ2lyY2xlID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRyYW5zaXRpb246ICR7dHJhbnNpdGlvbkR1cmF0aW9ufXM7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElCYXNlIHtcclxuICAgIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgICBjb21wb25lbnRObzogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBCYXNlOiBSZWFjdC5GQzxJQmFzZT4gPSAoeyBjaGlsZHJlbiwgY29tcG9uZW50Tm8gfSk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICAvLyByZWR1eFxyXG4gICAgY29uc3QgY3VycmVudENvbXBvbmVudE5vID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBpbmRleFN0YXRlKSA9PiBzdGF0ZS5iYXNlUmVkdWNlci5jdXJyZW50Q29tcG9uZW50Tm8pO1xyXG4gICAgY29uc3QgdGl0bGVBcnJheSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogaW5kZXhTdGF0ZSkgPT4gc3RhdGUuYmFzZVJlZHVjZXIudGl0bGVBcnJheSk7XHJcbiAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3JBcnJheSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogaW5kZXhTdGF0ZSkgPT4gc3RhdGUuYmFzZVJlZHVjZXIuYmFja2dyb3VuZENvbG9yQXJyYXkpO1xyXG4gICAgY29uc3QgaXNQYWdlQ2hhbmdpbmcgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IGluZGV4U3RhdGUpID0+IHN0YXRlLmJhc2VSZWR1Y2VyLmlzUGFnZUNoYW5naW5nKTtcclxuXHJcbiAgICAvLyBzdGF0ZVxyXG4gICAgY29uc3QgW2lzVG9wLCBzZXRJc1RvcF0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNCb3R0b20sIHNldElzQm90dG9tXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgICAvLyByZWZcclxuICAgIGNvbnN0IGJhc2VDb250YWluZXJSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KCk7XHJcbiAgICBjb25zdCBtYWluQ29udGFpbmVyUmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG4gICAgY29uc3QgdGl0bGVSZWYgPSBSZWFjdC51c2VSZWY8SFRNTFNwYW5FbGVtZW50PigpO1xyXG5cclxuICAgIC8vIHVzZUVmZmVjdFxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyDqs7XthrVcclxuICAgICAgICBtYWluQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnRDb21wb25lbnRObyA9PT0gY29tcG9uZW50Tm8pIHtcclxuICAgICAgICAgICAgLy8g7ZiE7J6sIO2OmOydtOyngOydvCDqsr3smrBcclxuICAgICAgICAgICAgYmFzZUNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICAgICAgYmFzZUNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICBiYXNlQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYGA7XHJcbiAgICAgICAgICAgIGJhc2VDb250YWluZXJSZWYuY3VycmVudC5zdHlsZS56SW5kZXggPSBgJHsxMDAgLSBjb21wb25lbnROb31gO1xyXG5cclxuICAgICAgICAgICAgbWFpbkNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLm9wYWNpdHkgPSAnJztcclxuICAgICAgICAgICAgbWFpbkNvbnRhaW5lclJlZi5jdXJyZW50LnNjcm9sbFRvKDAsIDApOyAvLyDtjpjsnbTsp4Ag7Iqk7YGs66GkIOy1nOyDgeychOuhnFxyXG5cclxuICAgICAgICAgICAgdGl0bGVSZWYuY3VycmVudC5zdHlsZS5vcGFjaXR5ID0gJyc7XHJcblxyXG4gICAgICAgICAgICBzZXRJc1RvcCh0cnVlKTsgLy8g7Iqk7YGs66Gk7J2AIOy1nOyDgeuLqFxyXG4gICAgICAgICAgICBpZiAobWFpbkNvbnRhaW5lclJlZi5jdXJyZW50LmNsaWVudEhlaWdodCA9PT0gbWFpbkNvbnRhaW5lclJlZi5jdXJyZW50LnNjcm9sbEhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgLy8g7Y6Y7J207KeA7J2YIOyghOyytO2BrOq4sOqwgCDtmZTrqbQg7YGs6riw7JmAIOuPmeydvO2VoCDqsr3smrAg7Iqk7YGs66Gk7J2AIOy1nO2VmOuLqOuPhCDtj6ztlahcclxuICAgICAgICAgICAgICAgIHNldElzQm90dG9tKHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0SXNCb3R0b20oZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50Q29tcG9uZW50Tm8gPiBjb21wb25lbnRObykge1xyXG4gICAgICAgICAgICAvLyDsp4DrgpjqsIQg7Y6Y7J207KeA7J28IOqyveyasFxyXG4gICAgICAgICAgICBiYXNlQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xyXG4gICAgICAgICAgICBiYXNlQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIGJhc2VDb250YWluZXJSZWYuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlWCgxODBkZWcpYDtcclxuICAgICAgICAgICAgYmFzZUNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLnpJbmRleCA9IGAkezgwICsgY29tcG9uZW50Tm99YDtcclxuXHJcbiAgICAgICAgICAgIG1haW5Db250YWluZXJSZWYuY3VycmVudC5zdHlsZS5vcGFjaXR5ID0gJzAuMDUnO1xyXG5cclxuICAgICAgICAgICAgdGl0bGVSZWYuY3VycmVudC5zdHlsZS5vcGFjaXR5ID0gJzAuMDUnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIOyngOuCmOqwgOyngCDslYrsnYAg7Y6Y7J207KeA7J28IOqyveyasFxyXG4gICAgICAgICAgICBiYXNlQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgICAgICBiYXNlQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIGJhc2VDb250YWluZXJSZWYuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBgYDtcclxuICAgICAgICAgICAgYmFzZUNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLnpJbmRleCA9IGAkezgwIC0gY29tcG9uZW50Tm99YDtcclxuXHJcbiAgICAgICAgICAgIG1haW5Db250YWluZXJSZWYuY3VycmVudC5zdHlsZS5vcGFjaXR5ID0gJyc7XHJcblxyXG4gICAgICAgICAgICB0aXRsZVJlZi5jdXJyZW50LnN0eWxlLm9wYWNpdHkgPSAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKHNldElzUGFnZUNoYW5naW5nQWN0aW9uKHRydWUpKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRDb21wb25lbnRObyA9PT0gY29tcG9uZW50Tm8pIHtcclxuICAgICAgICAgICAgICAgIG1haW5Db250YWluZXJSZWYuY3VycmVudC5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZGlzcGF0Y2goc2V0SXNQYWdlQ2hhbmdpbmdBY3Rpb24oZmFsc2UpKTtcclxuICAgICAgICB9LCB0cmFuc2l0aW9uRHVyYXRpb24gKiAxMDAwKTtcclxuICAgIH0sIFtjdXJyZW50Q29tcG9uZW50Tm9dKTtcclxuXHJcbiAgICAvLyBvbkNsaWNrXHJcbiAgICBjb25zdCBvbkNsaWNrUG9zdEl0ID0gKGNvbXBvbmVudE5vKSA9PiB7XHJcbiAgICAgICAgLy8g7Y6Y7J207KeAIOydtOuPmeydtCDsnbTro6jslrTsp4Dqs6Ag7J6I64qUIOqyveyasFxyXG4gICAgICAgIGlmIChpc1BhZ2VDaGFuZ2luZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXNwYXRjaChzZXRDdXJyZW50Q29tcG9uZW50Tm9BY3Rpb24oY29tcG9uZW50Tm8pKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gb25TY3JvbGxcclxuICAgIGNvbnN0IG9uU2Nyb2xsTWFpbkNvbnRhaW5lciA9IChlOiBSZWFjdC5VSUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xyXG4gICAgICAgIC8vIO2OmOydtOyngCDsnbTrj5nsnbQg7J2066Oo7Ja07KeA6rOgIOyeiOuKlCDqsr3smrBcclxuICAgICAgICBpZiAoaXNQYWdlQ2hhbmdpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g7ZiE7J6sIO2OmOydtOyngOqwgCDslYTri4wg6rK97JqwIOyKpO2BrOuhpOq4sOuKpSDspJHri6hcclxuICAgICAgICBpZiAoY3VycmVudENvbXBvbmVudE5vICE9PSBjb21wb25lbnRObykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDtjpjsnbTsp4Ag7IOB64uo7JeQIOyeiOuKlCDqsr3smrBcclxuICAgICAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LnNjcm9sbFRvcCA9PT0gMCkge1xyXG4gICAgICAgICAgICBzZXRJc1RvcCh0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRJc1RvcChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDtjpjsnbTsp4Ag7ZWY64uo7JeQIOyeiOuKlCDqsr3smrBcclxuICAgICAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LnNjcm9sbFRvcCArIGUuY3VycmVudFRhcmdldC5jbGllbnRIZWlnaHQgPj0gZS5jdXJyZW50VGFyZ2V0LnNjcm9sbEhlaWdodCkge1xyXG4gICAgICAgICAgICBzZXRJc0JvdHRvbSh0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRJc0JvdHRvbShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBvbldoZWVsXHJcbiAgICBjb25zdCBvbldoZWVsTWFpbkNvbnRhaW5lciA9IChlOiBSZWFjdC5XaGVlbEV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xyXG4gICAgICAgIC8vIO2OmOydtOyngCDsnbTrj5nsnbQg7J2066Oo7Ja07KeA6rOgIOyeiOuKlCDqsr3smrBcclxuICAgICAgICBpZiAoaXNQYWdlQ2hhbmdpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g7ZiE7J6sIO2OmOydtOyngOqwgCDslYTri4wg6rK97JqwIO2coOq4sOuKpSDspJHri6hcclxuICAgICAgICBpZiAoY3VycmVudENvbXBvbmVudE5vICE9PSBjb21wb25lbnRObykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDtjpjsnbTsp4DsnZgg64Gd7JeQIOuPhOuLrO2VmOqzoCDsnITroZwg7Iqk7YGs66GkIO2WiOydhCDqsr3smrBcclxuICAgICAgICBpZiAoaXNUb3AgJiYgZS5uYXRpdmVFdmVudC5kZWx0YVkgPCAwKSB7XHJcbiAgICAgICAgICAgIG9uQ2xpY2tQb3N0SXQoY29tcG9uZW50Tm8gLSAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIO2OmOydtOyngOydmCDrgZ3sl5Ag64+E64us7ZWY6rOgIOyVhOuemOuhnCDsiqTtgazroaQg7ZaI7J2EIOqyveyasFxyXG4gICAgICAgIGlmIChpc0JvdHRvbSAmJiBlLm5hdGl2ZUV2ZW50LmRlbHRhWSA+IDApIHtcclxuICAgICAgICAgICAgLy8g7ZiE7J6sIOy7tO2PrOuEjO2KuCDrsojtmLjqsIAg66eI7KeA66eJ7J20IOyVhOuLkCDqsr3smrDsl5Drp4wg7Y6Y7J207KeAIOuEmOq4sOq4sFxyXG4gICAgICAgICAgICBpZiAoY3VycmVudENvbXBvbmVudE5vIDwgdGl0bGVBcnJheS5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrUG9zdEl0KGNvbXBvbmVudE5vICsgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEJhc2VDb250YWluZXIgcmVmPXtiYXNlQ29udGFpbmVyUmVmfSBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0+XHJcbiAgICAgICAgICAgICAgICA8TWFpbkNvbnRhaW5lciByZWY9e21haW5Db250YWluZXJSZWZ9IG9uU2Nyb2xsPXtvblNjcm9sbE1haW5Db250YWluZXJ9IG9uV2hlZWw9e29uV2hlZWxNYWluQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8L01haW5Db250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgPFBvc3RJdENvbnRhaW5lciBjb21wb25lbnRObz17Y29tcG9uZW50Tm99PlxyXG4gICAgICAgICAgICAgICAgICAgIDxQb3N0SXRTZWN0aW9uIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2tQb3N0SXQoY29tcG9uZW50Tm8pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RJdENvbG9yRGl2IGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9zdEl0VGV4dERpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaXRsZSByZWY9e3RpdGxlUmVmfT57dGl0bGVBcnJheVtjb21wb25lbnROb119PC9UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Qb3N0SXRUZXh0RGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUG9zdEl0U2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvUG9zdEl0Q29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxDaGFpbkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2hhaW5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hhaW5GcmFtZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hhaW5DaXJjbGUgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NoYWluU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvQ2hhaW5Db250YWluZXI+XHJcbiAgICAgICAgICAgIDwvQmFzZUNvbnRhaW5lcj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYXNlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9