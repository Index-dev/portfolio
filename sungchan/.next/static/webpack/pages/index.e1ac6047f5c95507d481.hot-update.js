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
})(["height:93vh;width:100%;position:relative;display:flex;align-items:center;background-color:", ";transition-duration:", "s;transition-timing-function:ease-in;transform-origin:center top;top:0;box-shadow:2px 0px 6px rgba(0,0,0,0.1),-2px 0px 6px rgba(0,0,0,0.1);"], function (props) {
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
})(["position:absolute;display:flex;top:0;left:0;z-index:1000;"]);
_c7 = ChainContainer;
var ChainSection = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.section.withConfig({
  displayName: "base__ChainSection",
  componentId: "sc-1ugehyd-7"
})(["display:flex;flex-direction:column;align-items:center;margin:0 12px;"]);
_c8 = ChainSection;
var ChainFrame = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "base__ChainFrame",
  componentId: "sc-1ugehyd-8"
})(["width:10px;height:40px;background-color:red;z-index:1;border-radius:12px;"]);
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
        lineNumber: 252,
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
            lineNumber: 258,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostItTextDiv, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {
              ref: titleRef,
              children: titleArray[componentNo]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 260,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
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
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainSection, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainFrame, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 267,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainCircle, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 268,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainSection, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainFrame, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 272,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainCircle, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 273,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 271,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainSection, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainFrame, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 276,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainCircle, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 277,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 251,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2Jhc2UudHN4Il0sIm5hbWVzIjpbInRyYW5zaXRpb25EdXJhdGlvbiIsIkJhc2VDb250YWluZXIiLCJzdHlsZWQiLCJwcm9wcyIsImJhY2tncm91bmRDb2xvciIsIk1haW5Db250YWluZXIiLCJQb3N0SXRDb250YWluZXIiLCJjb21wb25lbnRObyIsIlBvc3RJdFNlY3Rpb24iLCJQb3N0SXRDb2xvckRpdiIsIlBvc3RJdFRleHREaXYiLCJDaGFpbkNvbnRhaW5lciIsIkNoYWluU2VjdGlvbiIsIkNoYWluRnJhbWUiLCJDaGFpbkNpcmNsZSIsIlRpdGxlIiwiQmFzZSIsImNoaWxkcmVuIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImN1cnJlbnRDb21wb25lbnRObyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJiYXNlUmVkdWNlciIsInRpdGxlQXJyYXkiLCJiYWNrZ3JvdW5kQ29sb3JBcnJheSIsImlzUGFnZUNoYW5naW5nIiwiUmVhY3QiLCJpc1RvcCIsInNldElzVG9wIiwiaXNCb3R0b20iLCJzZXRJc0JvdHRvbSIsImJhc2VDb250YWluZXJSZWYiLCJtYWluQ29udGFpbmVyUmVmIiwidGl0bGVSZWYiLCJjdXJyZW50Iiwic3R5bGUiLCJvdmVyZmxvdyIsInBvc2l0aW9uIiwiZGlzcGxheSIsInRyYW5zZm9ybSIsInpJbmRleCIsIm9wYWNpdHkiLCJzY3JvbGxUbyIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsInNldElzUGFnZUNoYW5naW5nQWN0aW9uIiwic2V0VGltZW91dCIsIm9uQ2xpY2tQb3N0SXQiLCJzZXRDdXJyZW50Q29tcG9uZW50Tm9BY3Rpb24iLCJvblNjcm9sbE1haW5Db250YWluZXIiLCJlIiwiY3VycmVudFRhcmdldCIsInNjcm9sbFRvcCIsIm9uV2hlZWxNYWluQ29udGFpbmVyIiwibmF0aXZlRXZlbnQiLCJkZWx0YVkiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7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SSw4REFBQyxLQUFEO0FBQU8saUJBQUcsRUFBRTJCLFFBQVo7QUFBQSx3QkFBdUJWLFVBQVUsQ0FBQ2pCLFdBQUQ7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxKLGVBY0ksOERBQUMsY0FBRDtBQUFBLGdDQUNJLDhEQUFDLFlBQUQ7QUFBQSxrQ0FDSSw4REFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSSw4REFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBTUksOERBQUMsWUFBRDtBQUFBLGtDQUNJLDhEQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJLDhEQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkosZUFVSSw4REFBQyxZQUFEO0FBQUEsa0NBQ0ksOERBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUksOERBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQWtDSCxDQTNLRDs7R0FBTVMsSTtVQUNlRyxvRCxFQUdVRSxvRCxFQUNSQSxvRCxFQUNVQSxvRCxFQUNOQSxvRDs7O09BUHJCTCxJO0FBNktOLCtEQUFlQSxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmUxYWM2MDQ3ZjVjOTU1MDdkNDgxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHNldEN1cnJlbnRDb21wb25lbnROb0FjdGlvbiwgc2V0SXNQYWdlQ2hhbmdpbmdBY3Rpb24gfSBmcm9tICcuLi9tb2R1bGVzL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBpbmRleFN0YXRlIH0gZnJvbSAnLi4vbW9kdWxlcy9pbmRleFJlZHVjZXInO1xyXG5cclxuY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gMTtcclxuXHJcbmludGVyZmFjZSBJQmFzZUNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgQmFzZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBoZWlnaHQ6IDkzdmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHM6IElCYXNlQ29udGFpbmVyKSA9PiBwcm9wcy5iYWNrZ3JvdW5kQ29sb3J9O1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogJHt0cmFuc2l0aW9uRHVyYXRpb259cztcclxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIHRvcDtcclxuICAgIHRvcDogMDtcclxuICAgIGJveC1zaGFkb3c6IDJweCAwcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgLTJweCAwcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuYDtcclxuXHJcbmNvbnN0IE1haW5Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogJHt0cmFuc2l0aW9uRHVyYXRpb259cztcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuYDtcclxuXHJcbmludGVyZmFjZSBJUG9zdEl0Q29udGFpbmVyIHtcclxuICAgIGNvbXBvbmVudE5vOiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IFBvc3RJdENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6ICR7KHByb3BzOiBJUG9zdEl0Q29udGFpbmVyKSA9PiBwcm9wcy5jb21wb25lbnRObyAqIDMzfXB4O1xyXG4gICAgbGVmdDogLTExMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgUG9zdEl0U2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSVBvc3RJdENvbG9yRGl2IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBQb3N0SXRDb2xvckRpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wczogSVBvc3RJdENvbG9yRGl2KSA9PiBwcm9wcy5iYWNrZ3JvdW5kQ29sb3J9O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBQb3N0SXRUZXh0RGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogOTBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmY4ZTU7XHJcbmA7XHJcblxyXG5jb25zdCBDaGFpbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbmA7XHJcblxyXG5jb25zdCBDaGFpblNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMCAxMnB4O1xyXG5gO1xyXG5cclxuY29uc3QgQ2hhaW5GcmFtZSA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG5gO1xyXG5cclxuY29uc3QgQ2hhaW5DaXJjbGUgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcclxuYDtcclxuXHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkLnNwYW5gXHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdHJhbnNpdGlvbjogJHt0cmFuc2l0aW9uRHVyYXRpb259cztcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSUJhc2Uge1xyXG4gICAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxuICAgIGNvbXBvbmVudE5vOiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IEJhc2U6IFJlYWN0LkZDPElCYXNlPiA9ICh7IGNoaWxkcmVuLCBjb21wb25lbnRObyB9KTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIC8vIHJlZHV4XHJcbiAgICBjb25zdCBjdXJyZW50Q29tcG9uZW50Tm8gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IGluZGV4U3RhdGUpID0+IHN0YXRlLmJhc2VSZWR1Y2VyLmN1cnJlbnRDb21wb25lbnRObyk7XHJcbiAgICBjb25zdCB0aXRsZUFycmF5ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBpbmRleFN0YXRlKSA9PiBzdGF0ZS5iYXNlUmVkdWNlci50aXRsZUFycmF5KTtcclxuICAgIGNvbnN0IGJhY2tncm91bmRDb2xvckFycmF5ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBpbmRleFN0YXRlKSA9PiBzdGF0ZS5iYXNlUmVkdWNlci5iYWNrZ3JvdW5kQ29sb3JBcnJheSk7XHJcbiAgICBjb25zdCBpc1BhZ2VDaGFuZ2luZyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogaW5kZXhTdGF0ZSkgPT4gc3RhdGUuYmFzZVJlZHVjZXIuaXNQYWdlQ2hhbmdpbmcpO1xyXG5cclxuICAgIC8vIHN0YXRlXHJcbiAgICBjb25zdCBbaXNUb3AsIHNldElzVG9wXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtpc0JvdHRvbSwgc2V0SXNCb3R0b21dID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICAgIC8vIHJlZlxyXG4gICAgY29uc3QgYmFzZUNvbnRhaW5lclJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuICAgIGNvbnN0IG1haW5Db250YWluZXJSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KCk7XHJcbiAgICBjb25zdCB0aXRsZVJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MU3BhbkVsZW1lbnQ+KCk7XHJcblxyXG4gICAgLy8gdXNlRWZmZWN0XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIOqzte2GtVxyXG4gICAgICAgIG1haW5Db250YWluZXJSZWYuY3VycmVudC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG5cclxuICAgICAgICBpZiAoY3VycmVudENvbXBvbmVudE5vID09PSBjb21wb25lbnRObykge1xyXG4gICAgICAgICAgICAvLyDtmITsnqwg7Y6Y7J207KeA7J28IOqyveyasFxyXG4gICAgICAgICAgICBiYXNlQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgICAgICBiYXNlQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIGJhc2VDb250YWluZXJSZWYuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBgYDtcclxuICAgICAgICAgICAgYmFzZUNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLnpJbmRleCA9IGAkezEwMCAtIGNvbXBvbmVudE5vfWA7XHJcblxyXG4gICAgICAgICAgICBtYWluQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUub3BhY2l0eSA9ICcnO1xyXG4gICAgICAgICAgICBtYWluQ29udGFpbmVyUmVmLmN1cnJlbnQuc2Nyb2xsVG8oMCwgMCk7IC8vIO2OmOydtOyngCDsiqTtgazroaQg7LWc7IOB7JyE66GcXHJcblxyXG4gICAgICAgICAgICB0aXRsZVJlZi5jdXJyZW50LnN0eWxlLm9wYWNpdHkgPSAnJztcclxuXHJcbiAgICAgICAgICAgIHNldElzVG9wKHRydWUpOyAvLyDsiqTtgazroaTsnYAg7LWc7IOB64uoXHJcbiAgICAgICAgICAgIGlmIChtYWluQ29udGFpbmVyUmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0ID09PSBtYWluQ29udGFpbmVyUmVmLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyDtjpjsnbTsp4DsnZgg7KCE7LK07YGs6riw6rCAIO2ZlOuptCDtgazquLDsmYAg64+Z7J287ZWgIOqyveyasCDsiqTtgazroaTsnYAg7LWc7ZWY64uo64+EIO2PrO2VqFxyXG4gICAgICAgICAgICAgICAgc2V0SXNCb3R0b20odHJ1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRJc0JvdHRvbShmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRDb21wb25lbnRObyA+IGNvbXBvbmVudE5vKSB7XHJcbiAgICAgICAgICAgIC8vIOyngOuCmOqwhCDtjpjsnbTsp4Dsnbwg6rK97JqwXHJcbiAgICAgICAgICAgIGJhc2VDb250YWluZXJSZWYuY3VycmVudC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XHJcbiAgICAgICAgICAgIGJhc2VDb250YWluZXJSZWYuY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgYmFzZUNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGVYKDE4MGRlZylgO1xyXG4gICAgICAgICAgICBiYXNlQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUuekluZGV4ID0gYCR7ODAgKyBjb21wb25lbnROb31gO1xyXG5cclxuICAgICAgICAgICAgbWFpbkNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLm9wYWNpdHkgPSAnMC4wNSc7XHJcblxyXG4gICAgICAgICAgICB0aXRsZVJlZi5jdXJyZW50LnN0eWxlLm9wYWNpdHkgPSAnMC4wNSc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8g7KeA64KY6rCA7KeAIOyViuydgCDtjpjsnbTsp4Dsnbwg6rK97JqwXHJcbiAgICAgICAgICAgIGJhc2VDb250YWluZXJSZWYuY3VycmVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgICAgIGJhc2VDb250YWluZXJSZWYuY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgYmFzZUNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IGBgO1xyXG4gICAgICAgICAgICBiYXNlQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUuekluZGV4ID0gYCR7ODAgLSBjb21wb25lbnROb31gO1xyXG5cclxuICAgICAgICAgICAgbWFpbkNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLm9wYWNpdHkgPSAnJztcclxuXHJcbiAgICAgICAgICAgIHRpdGxlUmVmLmN1cnJlbnQuc3R5bGUub3BhY2l0eSA9ICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGlzcGF0Y2goc2V0SXNQYWdlQ2hhbmdpbmdBY3Rpb24odHJ1ZSkpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudENvbXBvbmVudE5vID09PSBjb21wb25lbnRObykge1xyXG4gICAgICAgICAgICAgICAgbWFpbkNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLm92ZXJmbG93ID0gJ2F1dG8nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkaXNwYXRjaChzZXRJc1BhZ2VDaGFuZ2luZ0FjdGlvbihmYWxzZSkpO1xyXG4gICAgICAgIH0sIHRyYW5zaXRpb25EdXJhdGlvbiAqIDEwMDApO1xyXG4gICAgfSwgW2N1cnJlbnRDb21wb25lbnROb10pO1xyXG5cclxuICAgIC8vIG9uQ2xpY2tcclxuICAgIGNvbnN0IG9uQ2xpY2tQb3N0SXQgPSAoY29tcG9uZW50Tm8pID0+IHtcclxuICAgICAgICAvLyDtjpjsnbTsp4Ag7J2064+Z7J20IOydtOujqOyWtOyngOqzoCDsnojripQg6rK97JqwXHJcbiAgICAgICAgaWYgKGlzUGFnZUNoYW5naW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKHNldEN1cnJlbnRDb21wb25lbnROb0FjdGlvbihjb21wb25lbnRObykpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBvblNjcm9sbFxyXG4gICAgY29uc3Qgb25TY3JvbGxNYWluQ29udGFpbmVyID0gKGU6IFJlYWN0LlVJRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgLy8g7Y6Y7J207KeAIOydtOuPmeydtCDsnbTro6jslrTsp4Dqs6Ag7J6I64qUIOqyveyasFxyXG4gICAgICAgIGlmIChpc1BhZ2VDaGFuZ2luZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDtmITsnqwg7Y6Y7J207KeA6rCAIOyVhOuLjCDqsr3smrAg7Iqk7YGs66Gk6riw64qlIOykkeuLqFxyXG4gICAgICAgIGlmIChjdXJyZW50Q29tcG9uZW50Tm8gIT09IGNvbXBvbmVudE5vKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIO2OmOydtOyngCDsg4Hri6jsl5Ag7J6I64qUIOqyveyasFxyXG4gICAgICAgIGlmIChlLmN1cnJlbnRUYXJnZXQuc2Nyb2xsVG9wID09PSAwKSB7XHJcbiAgICAgICAgICAgIHNldElzVG9wKHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldElzVG9wKGZhbHNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIO2OmOydtOyngCDtlZjri6jsl5Ag7J6I64qUIOqyveyasFxyXG4gICAgICAgIGlmIChlLmN1cnJlbnRUYXJnZXQuc2Nyb2xsVG9wICsgZS5jdXJyZW50VGFyZ2V0LmNsaWVudEhlaWdodCA+PSBlLmN1cnJlbnRUYXJnZXQuc2Nyb2xsSGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHNldElzQm90dG9tKHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldElzQm90dG9tKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIG9uV2hlZWxcclxuICAgIGNvbnN0IG9uV2hlZWxNYWluQ29udGFpbmVyID0gKGU6IFJlYWN0LldoZWVsRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgLy8g7Y6Y7J207KeAIOydtOuPmeydtCDsnbTro6jslrTsp4Dqs6Ag7J6I64qUIOqyveyasFxyXG4gICAgICAgIGlmIChpc1BhZ2VDaGFuZ2luZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDtmITsnqwg7Y6Y7J207KeA6rCAIOyVhOuLjCDqsr3smrAg7Zyg6riw64qlIOykkeuLqFxyXG4gICAgICAgIGlmIChjdXJyZW50Q29tcG9uZW50Tm8gIT09IGNvbXBvbmVudE5vKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIO2OmOydtOyngOydmCDrgZ3sl5Ag64+E64us7ZWY6rOgIOychOuhnCDsiqTtgazroaQg7ZaI7J2EIOqyveyasFxyXG4gICAgICAgIGlmIChpc1RvcCAmJiBlLm5hdGl2ZUV2ZW50LmRlbHRhWSA8IDApIHtcclxuICAgICAgICAgICAgb25DbGlja1Bvc3RJdChjb21wb25lbnRObyAtIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g7Y6Y7J207KeA7J2YIOuBneyXkCDrj4Tri6ztlZjqs6Ag7JWE656Y66GcIOyKpO2BrOuhpCDtlojsnYQg6rK97JqwXHJcbiAgICAgICAgaWYgKGlzQm90dG9tICYmIGUubmF0aXZlRXZlbnQuZGVsdGFZID4gMCkge1xyXG4gICAgICAgICAgICAvLyDtmITsnqwg7Lu07Y+s64SM7Yq4IOuyiO2YuOqwgCDrp4jsp4Drp4nsnbQg7JWE64uQIOqyveyasOyXkOunjCDtjpjsnbTsp4Ag64SY6riw6riwXHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50Q29tcG9uZW50Tm8gPCB0aXRsZUFycmF5Lmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tQb3N0SXQoY29tcG9uZW50Tm8gKyAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QmFzZUNvbnRhaW5lciByZWY9e2Jhc2VDb250YWluZXJSZWZ9IGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfT5cclxuICAgICAgICAgICAgICAgIDxNYWluQ29udGFpbmVyIHJlZj17bWFpbkNvbnRhaW5lclJlZn0gb25TY3JvbGw9e29uU2Nyb2xsTWFpbkNvbnRhaW5lcn0gb25XaGVlbD17b25XaGVlbE1haW5Db250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvTWFpbkNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgICA8UG9zdEl0Q29udGFpbmVyIGNvbXBvbmVudE5vPXtjb21wb25lbnROb30+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBvc3RJdFNlY3Rpb24gb25DbGljaz17KCkgPT4gb25DbGlja1Bvc3RJdChjb21wb25lbnRObyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9zdEl0Q29sb3JEaXYgYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0SXRUZXh0RGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRpdGxlIHJlZj17dGl0bGVSZWZ9Pnt0aXRsZUFycmF5W2NvbXBvbmVudE5vXX08L1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Bvc3RJdFRleHREaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Qb3N0SXRTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9Qb3N0SXRDb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgPENoYWluQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGFpblNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFpbkZyYW1lIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFpbkNpcmNsZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2hhaW5TZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Q2hhaW5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hhaW5GcmFtZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hhaW5DaXJjbGUgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NoYWluU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2hhaW5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hhaW5GcmFtZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hhaW5DaXJjbGUgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NoYWluU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvQ2hhaW5Db250YWluZXI+XHJcbiAgICAgICAgICAgIDwvQmFzZUNvbnRhaW5lcj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYXNlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9