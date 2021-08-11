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
        lineNumber: 251,
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
            lineNumber: 257,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostItTextDiv, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {
              ref: titleRef,
              children: titleArray[componentNo]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 259,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 258,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainSection, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainFrame, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 266,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainCircle, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 267,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainSection, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainFrame, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 271,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainCircle, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 272,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 270,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainSection, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainFrame, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 275,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainCircle, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 276,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 250,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2Jhc2UudHN4Il0sIm5hbWVzIjpbInRyYW5zaXRpb25EdXJhdGlvbiIsIkJhc2VDb250YWluZXIiLCJzdHlsZWQiLCJwcm9wcyIsImJhY2tncm91bmRDb2xvciIsIk1haW5Db250YWluZXIiLCJQb3N0SXRDb250YWluZXIiLCJjb21wb25lbnRObyIsIlBvc3RJdFNlY3Rpb24iLCJQb3N0SXRDb2xvckRpdiIsIlBvc3RJdFRleHREaXYiLCJDaGFpbkNvbnRhaW5lciIsIkNoYWluU2VjdGlvbiIsIkNoYWluRnJhbWUiLCJDaGFpbkNpcmNsZSIsIlRpdGxlIiwiQmFzZSIsImNoaWxkcmVuIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImN1cnJlbnRDb21wb25lbnRObyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJiYXNlUmVkdWNlciIsInRpdGxlQXJyYXkiLCJiYWNrZ3JvdW5kQ29sb3JBcnJheSIsImlzUGFnZUNoYW5naW5nIiwiUmVhY3QiLCJpc1RvcCIsInNldElzVG9wIiwiaXNCb3R0b20iLCJzZXRJc0JvdHRvbSIsImJhc2VDb250YWluZXJSZWYiLCJtYWluQ29udGFpbmVyUmVmIiwidGl0bGVSZWYiLCJjdXJyZW50Iiwic3R5bGUiLCJvdmVyZmxvdyIsInBvc2l0aW9uIiwiZGlzcGxheSIsInRyYW5zZm9ybSIsInpJbmRleCIsIm9wYWNpdHkiLCJzY3JvbGxUbyIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsInNldElzUGFnZUNoYW5naW5nQWN0aW9uIiwic2V0VGltZW91dCIsIm9uQ2xpY2tQb3N0SXQiLCJzZXRDdXJyZW50Q29tcG9uZW50Tm9BY3Rpb24iLCJvblNjcm9sbE1haW5Db250YWluZXIiLCJlIiwiY3VycmVudFRhcmdldCIsInNjcm9sbFRvcCIsIm9uV2hlZWxNYWluQ29udGFpbmVyIiwibmF0aXZlRXZlbnQiLCJkZWx0YVkiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7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SSw4REFBQyxLQUFEO0FBQU8saUJBQUcsRUFBRTJCLFFBQVo7QUFBQSx3QkFBdUJWLFVBQVUsQ0FBQ2pCLFdBQUQ7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxKLGVBY0ksOERBQUMsY0FBRDtBQUFBLGdDQUNJLDhEQUFDLFlBQUQ7QUFBQSxrQ0FDSSw4REFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSSw4REFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBTUksOERBQUMsWUFBRDtBQUFBLGtDQUNJLDhEQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJLDhEQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkosZUFVSSw4REFBQyxZQUFEO0FBQUEsa0NBQ0ksOERBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUksOERBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQWtDSCxDQTNLRDs7R0FBTVMsSTtVQUNlRyxvRCxFQUdVRSxvRCxFQUNSQSxvRCxFQUNVQSxvRCxFQUNOQSxvRDs7O09BUHJCTCxJO0FBNktOLCtEQUFlQSxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjkyZWE4Y2Y0N2Q5ZmVlMmZhMDYyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHNldEN1cnJlbnRDb21wb25lbnROb0FjdGlvbiwgc2V0SXNQYWdlQ2hhbmdpbmdBY3Rpb24gfSBmcm9tICcuLi9tb2R1bGVzL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBpbmRleFN0YXRlIH0gZnJvbSAnLi4vbW9kdWxlcy9pbmRleFJlZHVjZXInO1xyXG5cclxuY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gMTtcclxuXHJcbmludGVyZmFjZSBJQmFzZUNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgQmFzZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBoZWlnaHQ6IDkzdmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHM6IElCYXNlQ29udGFpbmVyKSA9PiBwcm9wcy5iYWNrZ3JvdW5kQ29sb3J9O1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogJHt0cmFuc2l0aW9uRHVyYXRpb259cztcclxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIHRvcDtcclxuICAgIHRvcDogMDtcclxuICAgIGJveC1zaGFkb3c6IDJweCAwcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgLTJweCAwcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuYDtcclxuXHJcbmNvbnN0IE1haW5Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogJHt0cmFuc2l0aW9uRHVyYXRpb259cztcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuYDtcclxuXHJcbmludGVyZmFjZSBJUG9zdEl0Q29udGFpbmVyIHtcclxuICAgIGNvbXBvbmVudE5vOiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IFBvc3RJdENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6ICR7KHByb3BzOiBJUG9zdEl0Q29udGFpbmVyKSA9PiBwcm9wcy5jb21wb25lbnRObyAqIDMzfXB4O1xyXG4gICAgbGVmdDogLTExMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgUG9zdEl0U2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSVBvc3RJdENvbG9yRGl2IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBQb3N0SXRDb2xvckRpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wczogSVBvc3RJdENvbG9yRGl2KSA9PiBwcm9wcy5iYWNrZ3JvdW5kQ29sb3J9O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBQb3N0SXRUZXh0RGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogOTBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmY4ZTU7XHJcbmA7XHJcblxyXG5jb25zdCBDaGFpbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbmA7XHJcblxyXG5jb25zdCBDaGFpblNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMCAxMnB4O1xyXG5gO1xyXG5cclxuY29uc3QgQ2hhaW5GcmFtZSA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIHotaW5kZXg6IDE7XHJcbmA7XHJcblxyXG5jb25zdCBDaGFpbkNpcmNsZSA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xyXG5gO1xyXG5cclxuY29uc3QgVGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0cmFuc2l0aW9uOiAke3RyYW5zaXRpb25EdXJhdGlvbn1zO1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuYDtcclxuXHJcbmludGVyZmFjZSBJQmFzZSB7XHJcbiAgICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG4gICAgY29tcG9uZW50Tm86IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgQmFzZTogUmVhY3QuRkM8SUJhc2U+ID0gKHsgY2hpbGRyZW4sIGNvbXBvbmVudE5vIH0pOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgLy8gcmVkdXhcclxuICAgIGNvbnN0IGN1cnJlbnRDb21wb25lbnRObyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogaW5kZXhTdGF0ZSkgPT4gc3RhdGUuYmFzZVJlZHVjZXIuY3VycmVudENvbXBvbmVudE5vKTtcclxuICAgIGNvbnN0IHRpdGxlQXJyYXkgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IGluZGV4U3RhdGUpID0+IHN0YXRlLmJhc2VSZWR1Y2VyLnRpdGxlQXJyYXkpO1xyXG4gICAgY29uc3QgYmFja2dyb3VuZENvbG9yQXJyYXkgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IGluZGV4U3RhdGUpID0+IHN0YXRlLmJhc2VSZWR1Y2VyLmJhY2tncm91bmRDb2xvckFycmF5KTtcclxuICAgIGNvbnN0IGlzUGFnZUNoYW5naW5nID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBpbmRleFN0YXRlKSA9PiBzdGF0ZS5iYXNlUmVkdWNlci5pc1BhZ2VDaGFuZ2luZyk7XHJcblxyXG4gICAgLy8gc3RhdGVcclxuICAgIGNvbnN0IFtpc1RvcCwgc2V0SXNUb3BdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW2lzQm90dG9tLCBzZXRJc0JvdHRvbV0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gICAgLy8gcmVmXHJcbiAgICBjb25zdCBiYXNlQ29udGFpbmVyUmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lclJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuICAgIGNvbnN0IHRpdGxlUmVmID0gUmVhY3QudXNlUmVmPEhUTUxTcGFuRWxlbWVudD4oKTtcclxuXHJcbiAgICAvLyB1c2VFZmZlY3RcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8g6rO17Ya1XHJcbiAgICAgICAgbWFpbkNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcblxyXG4gICAgICAgIGlmIChjdXJyZW50Q29tcG9uZW50Tm8gPT09IGNvbXBvbmVudE5vKSB7XHJcbiAgICAgICAgICAgIC8vIO2YhOyerCDtjpjsnbTsp4Dsnbwg6rK97JqwXHJcbiAgICAgICAgICAgIGJhc2VDb250YWluZXJSZWYuY3VycmVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgICAgIGJhc2VDb250YWluZXJSZWYuY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgYmFzZUNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IGBgO1xyXG4gICAgICAgICAgICBiYXNlQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUuekluZGV4ID0gYCR7MTAwIC0gY29tcG9uZW50Tm99YDtcclxuXHJcbiAgICAgICAgICAgIG1haW5Db250YWluZXJSZWYuY3VycmVudC5zdHlsZS5vcGFjaXR5ID0gJyc7XHJcbiAgICAgICAgICAgIG1haW5Db250YWluZXJSZWYuY3VycmVudC5zY3JvbGxUbygwLCAwKTsgLy8g7Y6Y7J207KeAIOyKpO2BrOuhpCDstZzsg4HsnITroZxcclxuXHJcbiAgICAgICAgICAgIHRpdGxlUmVmLmN1cnJlbnQuc3R5bGUub3BhY2l0eSA9ICcnO1xyXG5cclxuICAgICAgICAgICAgc2V0SXNUb3AodHJ1ZSk7IC8vIOyKpO2BrOuhpOydgCDstZzsg4Hri6hcclxuICAgICAgICAgICAgaWYgKG1haW5Db250YWluZXJSZWYuY3VycmVudC5jbGllbnRIZWlnaHQgPT09IG1haW5Db250YWluZXJSZWYuY3VycmVudC5zY3JvbGxIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIC8vIO2OmOydtOyngOydmCDsoITssrTtgazquLDqsIAg7ZmU66m0IO2BrOq4sOyZgCDrj5nsnbztlaAg6rK97JqwIOyKpO2BrOuhpOydgCDstZztlZjri6jrj4Qg7Y+s7ZWoXHJcbiAgICAgICAgICAgICAgICBzZXRJc0JvdHRvbSh0cnVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldElzQm90dG9tKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudENvbXBvbmVudE5vID4gY29tcG9uZW50Tm8pIHtcclxuICAgICAgICAgICAgLy8g7KeA64KY6rCEIO2OmOydtOyngOydvCDqsr3smrBcclxuICAgICAgICAgICAgYmFzZUNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcclxuICAgICAgICAgICAgYmFzZUNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICBiYXNlQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZVgoMTgwZGVnKWA7XHJcbiAgICAgICAgICAgIGJhc2VDb250YWluZXJSZWYuY3VycmVudC5zdHlsZS56SW5kZXggPSBgJHs4MCArIGNvbXBvbmVudE5vfWA7XHJcblxyXG4gICAgICAgICAgICBtYWluQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUub3BhY2l0eSA9ICcwLjA1JztcclxuXHJcbiAgICAgICAgICAgIHRpdGxlUmVmLmN1cnJlbnQuc3R5bGUub3BhY2l0eSA9ICcwLjA1JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyDsp4DrgpjqsIDsp4Ag7JWK7J2AIO2OmOydtOyngOydvCDqsr3smrBcclxuICAgICAgICAgICAgYmFzZUNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICAgICAgYmFzZUNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICBiYXNlQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYGA7XHJcbiAgICAgICAgICAgIGJhc2VDb250YWluZXJSZWYuY3VycmVudC5zdHlsZS56SW5kZXggPSBgJHs4MCAtIGNvbXBvbmVudE5vfWA7XHJcblxyXG4gICAgICAgICAgICBtYWluQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUub3BhY2l0eSA9ICcnO1xyXG5cclxuICAgICAgICAgICAgdGl0bGVSZWYuY3VycmVudC5zdHlsZS5vcGFjaXR5ID0gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXNwYXRjaChzZXRJc1BhZ2VDaGFuZ2luZ0FjdGlvbih0cnVlKSk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50Q29tcG9uZW50Tm8gPT09IGNvbXBvbmVudE5vKSB7XHJcbiAgICAgICAgICAgICAgICBtYWluQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUub3ZlcmZsb3cgPSAnYXV0byc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldElzUGFnZUNoYW5naW5nQWN0aW9uKGZhbHNlKSk7XHJcbiAgICAgICAgfSwgdHJhbnNpdGlvbkR1cmF0aW9uICogMTAwMCk7XHJcbiAgICB9LCBbY3VycmVudENvbXBvbmVudE5vXSk7XHJcblxyXG4gICAgLy8gb25DbGlja1xyXG4gICAgY29uc3Qgb25DbGlja1Bvc3RJdCA9IChjb21wb25lbnRObykgPT4ge1xyXG4gICAgICAgIC8vIO2OmOydtOyngCDsnbTrj5nsnbQg7J2066Oo7Ja07KeA6rOgIOyeiOuKlCDqsr3smrBcclxuICAgICAgICBpZiAoaXNQYWdlQ2hhbmdpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGlzcGF0Y2goc2V0Q3VycmVudENvbXBvbmVudE5vQWN0aW9uKGNvbXBvbmVudE5vKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIG9uU2Nyb2xsXHJcbiAgICBjb25zdCBvblNjcm9sbE1haW5Db250YWluZXIgPSAoZTogUmVhY3QuVUlFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcclxuICAgICAgICAvLyDtjpjsnbTsp4Ag7J2064+Z7J20IOydtOujqOyWtOyngOqzoCDsnojripQg6rK97JqwXHJcbiAgICAgICAgaWYgKGlzUGFnZUNoYW5naW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIO2YhOyerCDtjpjsnbTsp4DqsIAg7JWE64uMIOqyveyasCDsiqTtgazroaTquLDriqUg7KSR64uoXHJcbiAgICAgICAgaWYgKGN1cnJlbnRDb21wb25lbnRObyAhPT0gY29tcG9uZW50Tm8pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g7Y6Y7J207KeAIOyDgeuLqOyXkCDsnojripQg6rK97JqwXHJcbiAgICAgICAgaWYgKGUuY3VycmVudFRhcmdldC5zY3JvbGxUb3AgPT09IDApIHtcclxuICAgICAgICAgICAgc2V0SXNUb3AodHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0SXNUb3AoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g7Y6Y7J207KeAIO2VmOuLqOyXkCDsnojripQg6rK97JqwXHJcbiAgICAgICAgaWYgKGUuY3VycmVudFRhcmdldC5zY3JvbGxUb3AgKyBlLmN1cnJlbnRUYXJnZXQuY2xpZW50SGVpZ2h0ID49IGUuY3VycmVudFRhcmdldC5zY3JvbGxIZWlnaHQpIHtcclxuICAgICAgICAgICAgc2V0SXNCb3R0b20odHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0SXNCb3R0b20oZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gb25XaGVlbFxyXG4gICAgY29uc3Qgb25XaGVlbE1haW5Db250YWluZXIgPSAoZTogUmVhY3QuV2hlZWxFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcclxuICAgICAgICAvLyDtjpjsnbTsp4Ag7J2064+Z7J20IOydtOujqOyWtOyngOqzoCDsnojripQg6rK97JqwXHJcbiAgICAgICAgaWYgKGlzUGFnZUNoYW5naW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIO2YhOyerCDtjpjsnbTsp4DqsIAg7JWE64uMIOqyveyasCDtnKDquLDriqUg7KSR64uoXHJcbiAgICAgICAgaWYgKGN1cnJlbnRDb21wb25lbnRObyAhPT0gY29tcG9uZW50Tm8pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g7Y6Y7J207KeA7J2YIOuBneyXkCDrj4Tri6ztlZjqs6Ag7JyE66GcIOyKpO2BrOuhpCDtlojsnYQg6rK97JqwXHJcbiAgICAgICAgaWYgKGlzVG9wICYmIGUubmF0aXZlRXZlbnQuZGVsdGFZIDwgMCkge1xyXG4gICAgICAgICAgICBvbkNsaWNrUG9zdEl0KGNvbXBvbmVudE5vIC0gMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDtjpjsnbTsp4DsnZgg64Gd7JeQIOuPhOuLrO2VmOqzoCDslYTrnpjroZwg7Iqk7YGs66GkIO2WiOydhCDqsr3smrBcclxuICAgICAgICBpZiAoaXNCb3R0b20gJiYgZS5uYXRpdmVFdmVudC5kZWx0YVkgPiAwKSB7XHJcbiAgICAgICAgICAgIC8vIO2YhOyerCDsu7Ttj6zrhIztirgg67KI7Zi46rCAIOuniOyngOunieydtCDslYTri5Ag6rK97Jqw7JeQ66eMIO2OmOydtOyngCDrhJjquLDquLBcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRDb21wb25lbnRObyA8IHRpdGxlQXJyYXkubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgb25DbGlja1Bvc3RJdChjb21wb25lbnRObyArIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxCYXNlQ29udGFpbmVyIHJlZj17YmFzZUNvbnRhaW5lclJlZn0gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119PlxyXG4gICAgICAgICAgICAgICAgPE1haW5Db250YWluZXIgcmVmPXttYWluQ29udGFpbmVyUmVmfSBvblNjcm9sbD17b25TY3JvbGxNYWluQ29udGFpbmVyfSBvbldoZWVsPXtvbldoZWVsTWFpbkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9NYWluQ29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxQb3N0SXRDb250YWluZXIgY29tcG9uZW50Tm89e2NvbXBvbmVudE5vfT5cclxuICAgICAgICAgICAgICAgICAgICA8UG9zdEl0U2VjdGlvbiBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrUG9zdEl0KGNvbXBvbmVudE5vKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0SXRDb2xvckRpdiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RJdFRleHREaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGl0bGUgcmVmPXt0aXRsZVJlZn0+e3RpdGxlQXJyYXlbY29tcG9uZW50Tm9dfTwvVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUG9zdEl0VGV4dERpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L1Bvc3RJdFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L1Bvc3RJdENvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgICA8Q2hhaW5Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoYWluU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENoYWluRnJhbWUgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENoYWluQ2lyY2xlIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DaGFpblNlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGFpblNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFpbkZyYW1lIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFpbkNpcmNsZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2hhaW5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGFpblNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFpbkZyYW1lIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFpbkNpcmNsZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2hhaW5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9DaGFpbkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9CYXNlQ29udGFpbmVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=