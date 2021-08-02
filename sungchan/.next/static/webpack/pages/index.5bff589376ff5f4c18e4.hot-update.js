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
/* harmony import */ var C_Users_User_Desktop_study_portfolio_sungchan_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _modules_indexStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/indexStore */ "./modules/indexStore.tsx");
/* harmony import */ var _style_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../style/style */ "./style/style.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\component\\base.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject() {
  var data = (0,C_Users_User_Desktop_study_portfolio_sungchan_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.default)(["\n    50% {\n        transform: rotate(0deg);\n        left: 0;\n    }\n\n    100% {\n        top: -100vh;\n        left: 0;\n        transform: rotate(0deg);\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// import * as React from 'react';
// import styled from 'styled-components';
// import { maxWidth } from '../style/style';
// const StyledSection1 = styled.section``;
// interface IStyledDiv2 {
//     backgroundColor: string;
// }
// const StyledDiv2 = styled.div`
//     max-width: ${maxWidth}px;
//     margin: 0 auto;
//     padding: 0 15px;
//     background-color: ${(props: IStyledDiv2) => props.backgroundColor};
//     @media screen and (min-width: ${maxWidth + 50}px) {
//         margin-bottom: 84px;
//         border-top-left-radius: 18px;
//         border-top-right-radius: 18px;
//         border-bottom-left-radius: 18px;
//         border-bottom-right-radius: 18px;
//         box-shadow: 2px 2px 12px ${(props: IStyledDiv2) => props.backgroundColor};
//     }
// `;
// interface IStyledDiv3 {
//     title: string;
//     showTitle: boolean;
// }
// const StyledDiv3 = styled.div`
//     ${(props: IStyledDiv3) => {
//         if (props.title) {
//             if (props.showTitle) {
//                 return `
//                     dispaly: block;
//                     transform: translateY(0);
//                     opacity: 1;
//                 `;
//             } else {
//                 return `
//                     dispaly: block;
//                     transform: translateY(60px);
//                     opacity: 0;
//                 `;
//             }
//         } else {
//             return `
//                 display: none;
//             `;
//         }
//     }}
//     display: ${(props: IStyledDiv3) => (props.title ? 'block' : 'none')};
//     padding: 24px 0;
//     transition-duration: 1.8s;
//     transition-timing-function: ease-out;
// `;
// const StyledTitle = styled.span`
//     font-weight: bold;
//     font-size: 2.4em;
// `;
// interface IBaseComponent {
//     children: React.ReactNode;
//     title: string;
//     backgroundColor: string;
// }
// const Base: React.FC<IBaseComponent> = ({ children, title, backgroundColor }): JSX.Element => {
//     // state
//     const [showTitle, setShowTitle] = React.useState<boolean>(false);
//     const [isClick, setIsClick] = React.useState<boolean>(false);
//     const [savePosition, setSavePosition] = React.useState<number>(0);
//     // ref
//     const div1Ref = React.useRef<HTMLDivElement>();
//     const div2Ref = React.useRef<HTMLDivElement>();
//     // variable
//     let isClickVariable = false;
//     // useEffect
//     React.useEffect(() => {
//         scrollTitle();
//         resizeSection1();
//         if (div1Ref.current) {
//             div1Ref.current.id = title;
//         }
//     }, []);
//     React.useEffect(() => {
//         isClickVariable = false;
//         window.addEventListener('scroll', scrollTitle);
//         return () => {
//             window.removeEventListener('scroll', scrollTitle);
//         };
//     }, [isClick]);
//     React.useEffect(() => {
//         window.addEventListener('resize', resizeSection1);
//         return () => {
//             window.removeEventListener('resize', resizeSection1);
//         };
//     }, [isClick]);
//     // onClick
//     const onClickDiv2 = () => {
//         if (div1Ref.current) {
//             if (isClick) {
//                 div1Ref.current.style.transition = '';
//                 div1Ref.current.style.transform = '';
//                 div1Ref.current.style.margin = '';
//                 setIsClick(false);
//                 window.scrollTo(0, savePosition);
//             } else {
//                 const scrollY = window.scrollY; // 현재 스크롤 높이
//                 const distance = div1Ref.current && div1Ref.current.getBoundingClientRect().top; // div의 top에 도달할 떄까지 남은 거리
//                 const gabY = (window.innerHeight - (div1Ref.current && div1Ref.current.clientHeight)) / 2; // (화면 높이 - div 높이) / 2
//                 const gabX = (window.innerWidth - (div2Ref.current && div2Ref.current.clientWidth)) / 2; // (화면 너비 - div 너비) / 2
//                 if (gabY > 0 && gabX > 0 && window.innerWidth >= maxWidth + 50) {
//                     setSavePosition(scrollY + distance - gabY); // 중앙 위치
//                     if (gabY > 84) {
//                         window.scrollTo(0, scrollY + distance - gabY + (gabY - 84));
//                     } else {
//                         window.scrollTo(0, scrollY + distance - gabY);
//                     }
//                     const blankY = 1 + (gabY / (div2Ref.current && div2Ref.current.clientHeight)) * 2; // (div 여비 높이 / div 높이) * 2
//                     const blankX = 1 + (gabX / (div2Ref.current && div2Ref.current.clientWidth)) * 2; // (div 여비 너비 / div 너비) * 2
//                     div1Ref.current.style.transition = '1s';
//                     div1Ref.current.style.transform = `scale(${Math.min(blankY, blankX)})`;
//                     div1Ref.current.style.margin = `${gabY}px 0`;
//                     setIsClick(true);
//                 }
//             }
//         }
//     };
//     // normal
//     const resizeSection1 = () => {
//         const gabY = (window.innerHeight - (div1Ref.current && div1Ref.current.clientHeight)) / 2; // (화면 높이 - div 높이) / 2
//         const gabX = (window.innerWidth - (div2Ref.current && div2Ref.current.clientWidth)) / 2; // (화면 너비 - div 너비) / 2
//         if (isClick) {
//             if (gabY > 0 && gabX > 0 && window.innerWidth >= maxWidth + 50) {
//                 const blankY = 1 + (gabY / (div2Ref.current && div2Ref.current.clientHeight)) * 2; // (div 여비 높이 / div 높이) * 2
//                 const blankX = 1 + (gabX / (div2Ref.current && div2Ref.current.clientWidth)) * 2; // (div 여비 너비 / div 너비) * 2
//                 div1Ref.current.style.transition = '';
//                 div1Ref.current.style.transform = `scale(${Math.min(blankY, blankX)})`;
//                 div1Ref.current.style.margin = `${gabY}px 0`;
//             } else {
//                 div1Ref.current.style.transition = '';
//                 div1Ref.current.style.transform = '';
//                 div1Ref.current.style.margin = '';
//             }
//         }
//         if (div2Ref.current) {
//             if (gabY > 0 && gabX > 0 && window.innerWidth >= maxWidth + 50) {
//                 div2Ref.current.style.cursor = 'pointer';
//             } else {
//                 div2Ref.current.style.cursor = '';
//             }
//         }
//     };
//     const scrollTitle = () => {
//         if (div1Ref.current) {
//             if (window.innerHeight >= div1Ref.current.getBoundingClientRect().top + 48) {
//                 setShowTitle(true);
//             } else {
//                 setShowTitle(false);
//             }
//             if (isClickVariable) {
//                 div1Ref.current.style.transition = '';
//                 div1Ref.current.style.transform = '';
//                 div1Ref.current.style.margin = '';
//                 setIsClick(false);
//             }
//             if (isClick) {
//                 isClickVariable = true;
//             }
//         }
//     };
//     return (
//         <>
//             <StyledSection1 ref={div1Ref}>
//                 <StyledDiv2 backgroundColor={backgroundColor} ref={div2Ref} onClick={onClickDiv2}>
//                     <StyledDiv3 title={title} showTitle={showTitle}>
//                         <StyledTitle># {title}</StyledTitle>
//                     </StyledDiv3>
//                     {children}
//                 </StyledDiv2>
//             </StyledSection1>
//         </>
//     );
// };
// export default Base;





var MainContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.div.withConfig({
  displayName: "base__MainContainer",
  componentId: "sc-1ugehyd-0"
})(["width:calc(100vw - (100vw - 100%));min-height:100vh;position:relative;cursor:pointer;background-color:", ";z-index:", ";"], function (props) {
  return props.backgroundColor;
}, function (props) {
  return props.zIndex;
});
_c = MainContainer;
var SubContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.div.withConfig({
  displayName: "base__SubContainer",
  componentId: "sc-1ugehyd-1"
})(["width:calc(100vw - (100vw - 100%));min-height:100vh;display:flex;align-items:center;position:", ";top:", ";"], function (props) {
  return props.isReach ? 'static' : 'fixed';
}, function (props) {
  return props.isReach ? '' : 0;
});
_c2 = SubContainer;
var ComponentContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.div.withConfig({
  displayName: "base__ComponentContainer",
  componentId: "sc-1ugehyd-2"
})(["max-width:", "px;width:100%;margin:0 auto;display:flex;justify-content:center;align-items:center;flex-direction:column;"], _style_style__WEBPACK_IMPORTED_MODULE_5__.maxWidth);
_c3 = ComponentContainer;
var TitleSection = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.div.withConfig({
  displayName: "base__TitleSection",
  componentId: "sc-1ugehyd-3"
})(["padding:38px 0 66px 0;margin-top:32px;"]);
_c4 = TitleSection;
var ComponentSection = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.div.withConfig({
  displayName: "base__ComponentSection",
  componentId: "sc-1ugehyd-4"
})(["display:flex;justify-content:center;align-items:center;width:100%;"]);
_c5 = ComponentSection;
var MainTitle = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.span.withConfig({
  displayName: "base__MainTitle",
  componentId: "sc-1ugehyd-5"
})(["font-weight:600;font-size:calc(48px + 0.9vw);text-shadow:3.5px 3.5px #fff;font-family:'Bungee',cursive;"]);
_c6 = MainTitle;
var myKeyframes = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__.keyframes)(_templateObject());
var TestDiv = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.div.withConfig({
  displayName: "base__TestDiv",
  componentId: "sc-1ugehyd-6"
})(["background-color:#fff;width:calc(100vw - (100vw - 100%));height:100vh;position:absolute;top:calc(100vh - 250px);left:calc(100vw - (100vw - 100%) - 450px);transform:rotate(-60deg);z-index:200;animation-name:", ";animation-duration:10s;animation-iteration-count:infinite;"], myKeyframes);

var Base = function Base(_ref) {
  _s();

  var children = _ref.children,
      containerNo = _ref.containerNo;

  // mobx
  var _indexStore = (0,_modules_indexStore__WEBPACK_IMPORTED_MODULE_4__.default)(),
      baseStore = _indexStore.baseStore; // state


  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__.useState(false),
      _React$useState2 = (0,C_Users_User_Desktop_study_portfolio_sungchan_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 2),
      isReach = _React$useState2[0],
      setIsReach = _React$useState2[1]; // ref


  var mainContainerRef = react__WEBPACK_IMPORTED_MODULE_3__.useRef();
  var subContainerRef = react__WEBPACK_IMPORTED_MODULE_3__.useRef(); // variable

  var backgroundColorArray = ['#757270', '#A5BAA8', '#6A9194', '#b79e6a', '#c68377', '#fff'];
  react__WEBPACK_IMPORTED_MODULE_3__.useEffect(function () {
    window.addEventListener('scroll', onChangeScroll);
    window.addEventListener('resize', onChangeResize);
    onChangeScroll();
    onChangeResize();
    return function () {
      window.removeEventListener('scroll', onChangeScroll);
      window.removeEventListener('resize', onChangeResize);
    };
  }, []);
  react__WEBPACK_IMPORTED_MODULE_3__.useEffect(function () {
    if (mainContainerRef.current) {
      mainContainerRef.current.setAttribute('id', baseStore.titleArray[containerNo]);
      baseStore.setComponentHeight(containerNo, subContainerRef.current.clientHeight);
    }
  }, []); // onChange

  var onChangeScroll = function onChangeScroll() {
    if (mainContainerRef.current) {
      if (mainContainerRef.current.getBoundingClientRect().top >= 1) {
        setIsReach(false);
      } else {
        setIsReach(true);
      }
    }
  };

  var onChangeResize = function onChangeResize() {
    if (mainContainerRef.current) {
      if (mainContainerRef.current.getBoundingClientRect().top >= 1) {
        setIsReach(false);
      } else {
        setIsReach(true);
      }
    }
  }; // onClick


  var onClickMainContainer = function onClickMainContainer() {
    window.scrollBy({
      top: baseStore.getAccumulateComponentHeight(containerNo) - baseStore.scrollY,
      behavior: 'smooth'
    });
  };

  return (0,mobx_react__WEBPACK_IMPORTED_MODULE_7__.useObserver)(function () {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainContainer, {
      ref: mainContainerRef,
      backgroundColor: backgroundColorArray[containerNo],
      zIndex: 100 - containerNo,
      onClick: onClickMainContainer,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubContainer, {
        ref: subContainerRef,
        isReach: isReach,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ComponentContainer, {
          children: [containerNo === 0 ? '' : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleSection, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainTitle, {
              children: ["# ", baseStore.titleArray[containerNo]]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 387,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 386,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ComponentSection, {
            children: children
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 391,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 382,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 381,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 9
    }, _this);
  });
};

_s(Base, "6KIvCv4Egvvrm07dmAaoW8b3Xs8=", false, function () {
  return [mobx_react__WEBPACK_IMPORTED_MODULE_7__.useObserver];
});

_c7 = Base;
/* harmony default export */ __webpack_exports__["default"] = (Base);

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "MainContainer");
$RefreshReg$(_c2, "SubContainer");
$RefreshReg$(_c3, "ComponentContainer");
$RefreshReg$(_c4, "TitleSection");
$RefreshReg$(_c5, "ComponentSection");
$RefreshReg$(_c6, "MainTitle");
$RefreshReg$(_c7, "Base");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2Jhc2UudHN4Il0sIm5hbWVzIjpbIk1haW5Db250YWluZXIiLCJzdHlsZWQiLCJwcm9wcyIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsIlN1YkNvbnRhaW5lciIsImlzUmVhY2giLCJDb21wb25lbnRDb250YWluZXIiLCJtYXhXaWR0aCIsIlRpdGxlU2VjdGlvbiIsIkNvbXBvbmVudFNlY3Rpb24iLCJNYWluVGl0bGUiLCJteUtleWZyYW1lcyIsImtleWZyYW1lcyIsIlRlc3REaXYiLCJCYXNlIiwiY2hpbGRyZW4iLCJjb250YWluZXJObyIsImluZGV4U3RvcmUiLCJiYXNlU3RvcmUiLCJSZWFjdCIsInNldElzUmVhY2giLCJtYWluQ29udGFpbmVyUmVmIiwic3ViQ29udGFpbmVyUmVmIiwiYmFja2dyb3VuZENvbG9yQXJyYXkiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwib25DaGFuZ2VTY3JvbGwiLCJvbkNoYW5nZVJlc2l6ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjdXJyZW50Iiwic2V0QXR0cmlidXRlIiwidGl0bGVBcnJheSIsInNldENvbXBvbmVudEhlaWdodCIsImNsaWVudEhlaWdodCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsIm9uQ2xpY2tNYWluQ29udGFpbmVyIiwic2Nyb2xsQnkiLCJnZXRBY2N1bXVsYXRlQ29tcG9uZW50SGVpZ2h0Iiwic2Nyb2xsWSIsImJlaGF2aW9yIiwidXNlT2JzZXJ2ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQSxJQUFNQSxhQUFhLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLGlJQU1LLFVBQUNDLEtBQUQ7QUFBQSxTQUEyQkEsS0FBSyxDQUFDQyxlQUFqQztBQUFBLENBTkwsRUFPSixVQUFDRCxLQUFEO0FBQUEsU0FBMkJB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O0FBQUE7QUFBQSxtQkFKUixlQVNJLDhEQUFDLGdCQUFEO0FBQUEsc0JBQW1CRDtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRGU7QUFBQSxHQUFELENBQWxCO0FBc0JILENBckZEOztHQUFNRCxJO1VBK0RLMkIsbUQ7OztNQS9ETDNCLEk7QUF1Rk4sK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWJmZjU4OTM3NmZmNWY0YzE4ZTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbi8vIGltcG9ydCB7IG1heFdpZHRoIH0gZnJvbSAnLi4vc3R5bGUvc3R5bGUnO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkU2VjdGlvbjEgPSBzdHlsZWQuc2VjdGlvbmBgO1xyXG5cclxuLy8gaW50ZXJmYWNlIElTdHlsZWREaXYyIHtcclxuLy8gICAgIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBTdHlsZWREaXYyID0gc3R5bGVkLmRpdmBcclxuLy8gICAgIG1heC13aWR0aDogJHttYXhXaWR0aH1weDtcclxuLy8gICAgIG1hcmdpbjogMCBhdXRvO1xyXG4vLyAgICAgcGFkZGluZzogMCAxNXB4O1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHM6IElTdHlsZWREaXYyKSA9PiBwcm9wcy5iYWNrZ3JvdW5kQ29sb3J9O1xyXG5cclxuLy8gICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7bWF4V2lkdGggKyA1MH1weCkge1xyXG4vLyAgICAgICAgIG1hcmdpbi1ib3R0b206IDg0cHg7XHJcbi8vICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMThweDtcclxuLy8gICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMThweDtcclxuLy8gICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxOHB4O1xyXG4vLyAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxOHB4O1xyXG4vLyAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMTJweCAkeyhwcm9wczogSVN0eWxlZERpdjIpID0+IHByb3BzLmJhY2tncm91bmRDb2xvcn07XHJcbi8vICAgICB9XHJcbi8vIGA7XHJcblxyXG4vLyBpbnRlcmZhY2UgSVN0eWxlZERpdjMge1xyXG4vLyAgICAgdGl0bGU6IHN0cmluZztcclxuLy8gICAgIHNob3dUaXRsZTogYm9vbGVhbjtcclxuLy8gfVxyXG5cclxuLy8gY29uc3QgU3R5bGVkRGl2MyA9IHN0eWxlZC5kaXZgXHJcbi8vICAgICAkeyhwcm9wczogSVN0eWxlZERpdjMpID0+IHtcclxuLy8gICAgICAgICBpZiAocHJvcHMudGl0bGUpIHtcclxuLy8gICAgICAgICAgICAgaWYgKHByb3BzLnNob3dUaXRsZSkge1xyXG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIGBcclxuLy8gICAgICAgICAgICAgICAgICAgICBkaXNwYWx5OiBibG9jaztcclxuLy8gICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuLy8gICAgICAgICAgICAgICAgIGA7XHJcbi8vICAgICAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gYFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGRpc3BhbHk6IGJsb2NrO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg2MHB4KTtcclxuLy8gICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4vLyAgICAgICAgICAgICAgICAgYDtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgIHJldHVybiBgXHJcbi8vICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4vLyAgICAgICAgICAgICBgO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH19XHJcblxyXG4vLyAgICAgZGlzcGxheTogJHsocHJvcHM6IElTdHlsZWREaXYzKSA9PiAocHJvcHMudGl0bGUgPyAnYmxvY2snIDogJ25vbmUnKX07XHJcbi8vICAgICBwYWRkaW5nOiAyNHB4IDA7XHJcbi8vICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjhzO1xyXG4vLyAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkVGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4vLyAgICAgZm9udC1zaXplOiAyLjRlbTtcclxuLy8gYDtcclxuXHJcbi8vIGludGVyZmFjZSBJQmFzZUNvbXBvbmVudCB7XHJcbi8vICAgICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG4vLyAgICAgdGl0bGU6IHN0cmluZztcclxuLy8gICAgIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBCYXNlOiBSZWFjdC5GQzxJQmFzZUNvbXBvbmVudD4gPSAoeyBjaGlsZHJlbiwgdGl0bGUsIGJhY2tncm91bmRDb2xvciB9KTogSlNYLkVsZW1lbnQgPT4ge1xyXG4vLyAgICAgLy8gc3RhdGVcclxuLy8gICAgIGNvbnN0IFtzaG93VGl0bGUsIHNldFNob3dUaXRsZV0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbi8vICAgICBjb25zdCBbaXNDbGljaywgc2V0SXNDbGlja10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbi8vICAgICBjb25zdCBbc2F2ZVBvc2l0aW9uLCBzZXRTYXZlUG9zaXRpb25dID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPigwKTtcclxuXHJcbi8vICAgICAvLyByZWZcclxuLy8gICAgIGNvbnN0IGRpdjFSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KCk7XHJcbi8vICAgICBjb25zdCBkaXYyUmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG5cclxuLy8gICAgIC8vIHZhcmlhYmxlXHJcbi8vICAgICBsZXQgaXNDbGlja1ZhcmlhYmxlID0gZmFsc2U7XHJcblxyXG4vLyAgICAgLy8gdXNlRWZmZWN0XHJcbi8vICAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgICAgICAgIHNjcm9sbFRpdGxlKCk7XHJcbi8vICAgICAgICAgcmVzaXplU2VjdGlvbjEoKTtcclxuXHJcbi8vICAgICAgICAgaWYgKGRpdjFSZWYuY3VycmVudCkge1xyXG4vLyAgICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuaWQgPSB0aXRsZTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9LCBbXSk7XHJcblxyXG4vLyAgICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuLy8gICAgICAgICBpc0NsaWNrVmFyaWFibGUgPSBmYWxzZTtcclxuLy8gICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsVGl0bGUpO1xyXG5cclxuLy8gICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4vLyAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsVGl0bGUpO1xyXG4vLyAgICAgICAgIH07XHJcbi8vICAgICB9LCBbaXNDbGlja10pO1xyXG5cclxuLy8gICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbi8vICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZVNlY3Rpb24xKTtcclxuXHJcbi8vICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuLy8gICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZVNlY3Rpb24xKTtcclxuLy8gICAgICAgICB9O1xyXG4vLyAgICAgfSwgW2lzQ2xpY2tdKTtcclxuXHJcbi8vICAgICAvLyBvbkNsaWNrXHJcbi8vICAgICBjb25zdCBvbkNsaWNrRGl2MiA9ICgpID0+IHtcclxuLy8gICAgICAgICBpZiAoZGl2MVJlZi5jdXJyZW50KSB7XHJcbi8vICAgICAgICAgICAgIGlmIChpc0NsaWNrKSB7XHJcbi8vICAgICAgICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xyXG4vLyAgICAgICAgICAgICAgICAgZGl2MVJlZi5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xyXG4vLyAgICAgICAgICAgICAgICAgZGl2MVJlZi5jdXJyZW50LnN0eWxlLm1hcmdpbiA9ICcnO1xyXG4vLyAgICAgICAgICAgICAgICAgc2V0SXNDbGljayhmYWxzZSk7XHJcbi8vICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgc2F2ZVBvc2l0aW9uKTtcclxuLy8gICAgICAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWTsgLy8g7ZiE7J6sIOyKpO2BrOuhpCDrhpLsnbRcclxuLy8gICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gZGl2MVJlZi5jdXJyZW50ICYmIGRpdjFSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7IC8vIGRpduydmCB0b3Dsl5Ag64+E64us7ZWgIOuWhOq5jOyngCDrgqjsnYAg6rGw66asXHJcbi8vICAgICAgICAgICAgICAgICBjb25zdCBnYWJZID0gKHdpbmRvdy5pbm5lckhlaWdodCAtIChkaXYxUmVmLmN1cnJlbnQgJiYgZGl2MVJlZi5jdXJyZW50LmNsaWVudEhlaWdodCkpIC8gMjsgLy8gKO2ZlOuptCDrhpLsnbQgLSBkaXYg64aS7J20KSAvIDJcclxuLy8gICAgICAgICAgICAgICAgIGNvbnN0IGdhYlggPSAod2luZG93LmlubmVyV2lkdGggLSAoZGl2MlJlZi5jdXJyZW50ICYmIGRpdjJSZWYuY3VycmVudC5jbGllbnRXaWR0aCkpIC8gMjsgLy8gKO2ZlOuptCDrhIjruYQgLSBkaXYg64SI67mEKSAvIDJcclxuXHJcbi8vICAgICAgICAgICAgICAgICBpZiAoZ2FiWSA+IDAgJiYgZ2FiWCA+IDAgJiYgd2luZG93LmlubmVyV2lkdGggPj0gbWF4V2lkdGggKyA1MCkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHNldFNhdmVQb3NpdGlvbihzY3JvbGxZICsgZGlzdGFuY2UgLSBnYWJZKTsgLy8g7KSR7JWZIOychOy5mFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGlmIChnYWJZID4gODQpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHNjcm9sbFkgKyBkaXN0YW5jZSAtIGdhYlkgKyAoZ2FiWSAtIDg0KSk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHNjcm9sbFkgKyBkaXN0YW5jZSAtIGdhYlkpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmxhbmtZID0gMSArIChnYWJZIC8gKGRpdjJSZWYuY3VycmVudCAmJiBkaXYyUmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0KSkgKiAyOyAvLyAoZGl2IOyXrOu5hCDrhpLsnbQgLyBkaXYg64aS7J20KSAqIDJcclxuLy8gICAgICAgICAgICAgICAgICAgICBjb25zdCBibGFua1ggPSAxICsgKGdhYlggLyAoZGl2MlJlZi5jdXJyZW50ICYmIGRpdjJSZWYuY3VycmVudC5jbGllbnRXaWR0aCkpICogMjsgLy8gKGRpdiDsl6zruYQg64SI67mEIC8gZGl2IOuEiOu5hCkgKiAyXHJcblxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGRpdjFSZWYuY3VycmVudC5zdHlsZS50cmFuc2l0aW9uID0gJzFzJztcclxuLy8gICAgICAgICAgICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlKCR7TWF0aC5taW4oYmxhbmtZLCBibGFua1gpfSlgO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGRpdjFSZWYuY3VycmVudC5zdHlsZS5tYXJnaW4gPSBgJHtnYWJZfXB4IDBgO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHNldElzQ2xpY2sodHJ1ZSk7XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9O1xyXG5cclxuLy8gICAgIC8vIG5vcm1hbFxyXG4vLyAgICAgY29uc3QgcmVzaXplU2VjdGlvbjEgPSAoKSA9PiB7XHJcbi8vICAgICAgICAgY29uc3QgZ2FiWSA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLSAoZGl2MVJlZi5jdXJyZW50ICYmIGRpdjFSZWYuY3VycmVudC5jbGllbnRIZWlnaHQpKSAvIDI7IC8vICjtmZTrqbQg64aS7J20IC0gZGl2IOuGkuydtCkgLyAyXHJcbi8vICAgICAgICAgY29uc3QgZ2FiWCA9ICh3aW5kb3cuaW5uZXJXaWR0aCAtIChkaXYyUmVmLmN1cnJlbnQgJiYgZGl2MlJlZi5jdXJyZW50LmNsaWVudFdpZHRoKSkgLyAyOyAvLyAo7ZmU66m0IOuEiOu5hCAtIGRpdiDrhIjruYQpIC8gMlxyXG5cclxuLy8gICAgICAgICBpZiAoaXNDbGljaykge1xyXG4vLyAgICAgICAgICAgICBpZiAoZ2FiWSA+IDAgJiYgZ2FiWCA+IDAgJiYgd2luZG93LmlubmVyV2lkdGggPj0gbWF4V2lkdGggKyA1MCkge1xyXG4vLyAgICAgICAgICAgICAgICAgY29uc3QgYmxhbmtZID0gMSArIChnYWJZIC8gKGRpdjJSZWYuY3VycmVudCAmJiBkaXYyUmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0KSkgKiAyOyAvLyAoZGl2IOyXrOu5hCDrhpLsnbQgLyBkaXYg64aS7J20KSAqIDJcclxuLy8gICAgICAgICAgICAgICAgIGNvbnN0IGJsYW5rWCA9IDEgKyAoZ2FiWCAvIChkaXYyUmVmLmN1cnJlbnQgJiYgZGl2MlJlZi5jdXJyZW50LmNsaWVudFdpZHRoKSkgKiAyOyAvLyAoZGl2IOyXrOu5hCDrhIjruYQgLyBkaXYg64SI67mEKSAqIDJcclxuXHJcbi8vICAgICAgICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xyXG4vLyAgICAgICAgICAgICAgICAgZGl2MVJlZi5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZSgke01hdGgubWluKGJsYW5rWSwgYmxhbmtYKX0pYDtcclxuLy8gICAgICAgICAgICAgICAgIGRpdjFSZWYuY3VycmVudC5zdHlsZS5tYXJnaW4gPSBgJHtnYWJZfXB4IDBgO1xyXG4vLyAgICAgICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgICAgICAgZGl2MVJlZi5jdXJyZW50LnN0eWxlLnRyYW5zaXRpb24gPSAnJztcclxuLy8gICAgICAgICAgICAgICAgIGRpdjFSZWYuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSAnJztcclxuLy8gICAgICAgICAgICAgICAgIGRpdjFSZWYuY3VycmVudC5zdHlsZS5tYXJnaW4gPSAnJztcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgaWYgKGRpdjJSZWYuY3VycmVudCkge1xyXG4vLyAgICAgICAgICAgICBpZiAoZ2FiWSA+IDAgJiYgZ2FiWCA+IDAgJiYgd2luZG93LmlubmVyV2lkdGggPj0gbWF4V2lkdGggKyA1MCkge1xyXG4vLyAgICAgICAgICAgICAgICAgZGl2MlJlZi5jdXJyZW50LnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuLy8gICAgICAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgICAgICAgIGRpdjJSZWYuY3VycmVudC5zdHlsZS5jdXJzb3IgPSAnJztcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH07XHJcblxyXG4vLyAgICAgY29uc3Qgc2Nyb2xsVGl0bGUgPSAoKSA9PiB7XHJcbi8vICAgICAgICAgaWYgKGRpdjFSZWYuY3VycmVudCkge1xyXG4vLyAgICAgICAgICAgICBpZiAod2luZG93LmlubmVySGVpZ2h0ID49IGRpdjFSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyA0OCkge1xyXG4vLyAgICAgICAgICAgICAgICAgc2V0U2hvd1RpdGxlKHRydWUpO1xyXG4vLyAgICAgICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgICAgICAgc2V0U2hvd1RpdGxlKGZhbHNlKTtcclxuLy8gICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgICAgaWYgKGlzQ2xpY2tWYXJpYWJsZSkge1xyXG4vLyAgICAgICAgICAgICAgICAgZGl2MVJlZi5jdXJyZW50LnN0eWxlLnRyYW5zaXRpb24gPSAnJztcclxuLy8gICAgICAgICAgICAgICAgIGRpdjFSZWYuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSAnJztcclxuLy8gICAgICAgICAgICAgICAgIGRpdjFSZWYuY3VycmVudC5zdHlsZS5tYXJnaW4gPSAnJztcclxuLy8gICAgICAgICAgICAgICAgIHNldElzQ2xpY2soZmFsc2UpO1xyXG4vLyAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICBpZiAoaXNDbGljaykge1xyXG4vLyAgICAgICAgICAgICAgICAgaXNDbGlja1ZhcmlhYmxlID0gdHJ1ZTtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH07XHJcblxyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICA8PlxyXG4vLyAgICAgICAgICAgICA8U3R5bGVkU2VjdGlvbjEgcmVmPXtkaXYxUmVmfT5cclxuLy8gICAgICAgICAgICAgICAgIDxTdHlsZWREaXYyIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yfSByZWY9e2RpdjJSZWZ9IG9uQ2xpY2s9e29uQ2xpY2tEaXYyfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRGl2MyB0aXRsZT17dGl0bGV9IHNob3dUaXRsZT17c2hvd1RpdGxlfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFRpdGxlPiMge3RpdGxlfTwvU3R5bGVkVGl0bGU+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXYzPlxyXG5cclxuLy8gICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbi8vICAgICAgICAgICAgICAgICA8L1N0eWxlZERpdjI+XHJcbi8vICAgICAgICAgICAgIDwvU3R5bGVkU2VjdGlvbjE+XHJcbi8vICAgICAgICAgPC8+XHJcbi8vICAgICApO1xyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgQmFzZTtcclxuXHJcbmltcG9ydCB7IHVzZU9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBpbmRleFN0b3JlIGZyb20gJy4uL21vZHVsZXMvaW5kZXhTdG9yZSc7XHJcbmltcG9ydCB7IG1heFdpZHRoIH0gZnJvbSAnLi4vc3R5bGUvc3R5bGUnO1xyXG5cclxuaW50ZXJmYWNlIElNYWluQ29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xyXG4gICAgekluZGV4OiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IE1haW5Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAoMTAwdncgLSAxMDAlKSk7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wczogSU1haW5Db250YWluZXIpID0+IHByb3BzLmJhY2tncm91bmRDb2xvcn07XHJcbiAgICB6LWluZGV4OiAkeyhwcm9wczogSU1haW5Db250YWluZXIpID0+IHByb3BzLnpJbmRleH07XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSVN1YkNvbnRhaW5lciB7XHJcbiAgICBpc1JlYWNoOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBTdWJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAoMTAwdncgLSAxMDAlKSk7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIHBvc2l0aW9uOiAkeyhwcm9wczogSVN1YkNvbnRhaW5lcikgPT4gKHByb3BzLmlzUmVhY2ggPyAnc3RhdGljJyA6ICdmaXhlZCcpfTtcclxuICAgIHRvcDogJHsocHJvcHM6IElTdWJDb250YWluZXIpID0+IChwcm9wcy5pc1JlYWNoID8gJycgOiAwKX07XHJcbmA7XHJcblxyXG5jb25zdCBDb21wb25lbnRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWF4LXdpZHRoOiAke21heFdpZHRofXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5gO1xyXG5cclxuY29uc3QgVGl0bGVTZWN0aW9uID0gc3R5bGVkLmRpdmBcclxuICAgIHBhZGRpbmc6IDM4cHggMCA2NnB4IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xyXG5gO1xyXG5cclxuY29uc3QgQ29tcG9uZW50U2VjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbmA7XHJcblxyXG5jb25zdCBNYWluVGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IGNhbGMoNDhweCArIDAuOXZ3KTtcclxuICAgIHRleHQtc2hhZG93OiAzLjVweCAzLjVweCAjZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6ICdCdW5nZWUnLCBjdXJzaXZlO1xyXG5gO1xyXG5cclxuY29uc3QgbXlLZXlmcmFtZXMgPSBrZXlmcmFtZXNgXHJcbiAgICA1MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdG9wOiAtMTAwdmg7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IFRlc3REaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gKDEwMHZ3IC0gMTAwJSkpO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogY2FsYygxMDB2aCAtIDI1MHB4KTtcclxuICAgIGxlZnQ6IGNhbGMoMTAwdncgLSAoMTAwdncgLSAxMDAlKSAtIDQ1MHB4KTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC02MGRlZyk7XHJcbiAgICB6LWluZGV4OiAyMDA7XHJcblxyXG4gICAgYW5pbWF0aW9uLW5hbWU6ICR7bXlLZXlmcmFtZXN9O1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMHM7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuYDtcclxuXHJcbmludGVyZmFjZSBJQmFzZSB7XHJcbiAgICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG4gICAgY29udGFpbmVyTm86IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgQmFzZTogUmVhY3QuRkM8SUJhc2U+ID0gKHsgY2hpbGRyZW4sIGNvbnRhaW5lck5vIH0pOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICAvLyBtb2J4XHJcbiAgICBjb25zdCB7IGJhc2VTdG9yZSB9ID0gaW5kZXhTdG9yZSgpO1xyXG5cclxuICAgIC8vIHN0YXRlXHJcbiAgICBjb25zdCBbaXNSZWFjaCwgc2V0SXNSZWFjaF0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gICAgLy8gcmVmXHJcbiAgICBjb25zdCBtYWluQ29udGFpbmVyUmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG4gICAgY29uc3Qgc3ViQ29udGFpbmVyUmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG5cclxuICAgIC8vIHZhcmlhYmxlXHJcbiAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3JBcnJheSA9IFsnIzc1NzI3MCcsICcjQTVCQUE4JywgJyM2QTkxOTQnLCAnI2I3OWU2YScsICcjYzY4Mzc3JywgJyNmZmYnXTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvbkNoYW5nZVNjcm9sbCk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uQ2hhbmdlUmVzaXplKTtcclxuXHJcbiAgICAgICAgb25DaGFuZ2VTY3JvbGwoKTtcclxuICAgICAgICBvbkNoYW5nZVJlc2l6ZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25DaGFuZ2VTY3JvbGwpO1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25DaGFuZ2VSZXNpemUpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAobWFpbkNvbnRhaW5lclJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIG1haW5Db250YWluZXJSZWYuY3VycmVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgYmFzZVN0b3JlLnRpdGxlQXJyYXlbY29udGFpbmVyTm9dKTtcclxuICAgICAgICAgICAgYmFzZVN0b3JlLnNldENvbXBvbmVudEhlaWdodChjb250YWluZXJObywgc3ViQ29udGFpbmVyUmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLy8gb25DaGFuZ2VcclxuICAgIGNvbnN0IG9uQ2hhbmdlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChtYWluQ29udGFpbmVyUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgaWYgKG1haW5Db250YWluZXJSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgc2V0SXNSZWFjaChmYWxzZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRJc1JlYWNoKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZVJlc2l6ZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAobWFpbkNvbnRhaW5lclJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGlmIChtYWluQ29udGFpbmVyUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wID49IDEpIHtcclxuICAgICAgICAgICAgICAgIHNldElzUmVhY2goZmFsc2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0SXNSZWFjaCh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gb25DbGlja1xyXG4gICAgY29uc3Qgb25DbGlja01haW5Db250YWluZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbEJ5KHtcclxuICAgICAgICAgICAgdG9wOiBiYXNlU3RvcmUuZ2V0QWNjdW11bGF0ZUNvbXBvbmVudEhlaWdodChjb250YWluZXJObykgLSBiYXNlU3RvcmUuc2Nyb2xsWSxcclxuICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdXNlT2JzZXJ2ZXIoKCkgPT4gKFxyXG4gICAgICAgIDxNYWluQ29udGFpbmVyXHJcbiAgICAgICAgICAgIHJlZj17bWFpbkNvbnRhaW5lclJlZn1cclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb250YWluZXJOb119XHJcbiAgICAgICAgICAgIHpJbmRleD17MTAwIC0gY29udGFpbmVyTm99XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2tNYWluQ29udGFpbmVyfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPFN1YkNvbnRhaW5lciByZWY9e3N1YkNvbnRhaW5lclJlZn0gaXNSZWFjaD17aXNSZWFjaH0+XHJcbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb250YWluZXJObyA9PT0gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGl0bGVTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1haW5UaXRsZT4jIHtiYXNlU3RvcmUudGl0bGVBcnJheVtjb250YWluZXJOb119PC9NYWluVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGl0bGVTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnRTZWN0aW9uPntjaGlsZHJlbn08L0NvbXBvbmVudFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L0NvbXBvbmVudENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9TdWJDb250YWluZXI+XHJcbiAgICAgICAgPC9NYWluQ29udGFpbmVyPlxyXG4gICAgKSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYXNlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9