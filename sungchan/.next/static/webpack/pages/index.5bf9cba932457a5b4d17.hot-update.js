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
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _modules_indexStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/indexStore */ "./modules/indexStore.tsx");
/* harmony import */ var _style_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../style/style */ "./style/style.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\component\\base.tsx",
    _this = undefined,
    _s = $RefreshSig$();

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





var MainContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "base__MainContainer",
  componentId: "sc-1ugehyd-0"
})(["width:calc(100vw - (100vw - 100%));min-height:100vh;position:relative;cursor:pointer;background-color:", ";z-index:", ";"], function (props) {
  return props.backgroundColor;
}, function (props) {
  return props.zIndex;
});
_c = MainContainer;
var SubContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "base__SubContainer",
  componentId: "sc-1ugehyd-1"
})(["width:calc(100vw - (100vw - 100%));min-height:100vh;display:flex;align-items:center;position:", ";top:", ";"], function (props) {
  return props.isReach ? 'static' : 'fixed';
}, function (props) {
  return props.isReach ? '' : 0;
});
_c2 = SubContainer;
var ComponentContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "base__ComponentContainer",
  componentId: "sc-1ugehyd-2"
})(["max-width:", "px;width:100%;margin:0 auto;display:flex;justify-content:center;align-items:center;flex-direction:column;"], _style_style__WEBPACK_IMPORTED_MODULE_4__.maxWidth);
_c3 = ComponentContainer;
var TitleSection = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "base__TitleSection",
  componentId: "sc-1ugehyd-3"
})(["padding:38px 0 66px 0;margin-top:32px;"]);
_c4 = TitleSection;
var ComponentSection = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "base__ComponentSection",
  componentId: "sc-1ugehyd-4"
})(["display:flex;justify-content:center;align-items:center;width:100%;"]);
_c5 = ComponentSection;
var MainTitle = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.span.withConfig({
  displayName: "base__MainTitle",
  componentId: "sc-1ugehyd-5"
})(["font-weight:600;font-size:calc(52px + 0.8vw);"]);
_c6 = MainTitle;

var Base = function Base(_ref) {
  _s();

  var children = _ref.children,
      containerNo = _ref.containerNo;

  // mobx
  var _indexStore = (0,_modules_indexStore__WEBPACK_IMPORTED_MODULE_3__.default)(),
      baseStore = _indexStore.baseStore; // state


  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__.useState(false),
      _React$useState2 = (0,C_Users_User_Desktop_study_portfolio_sungchan_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 2),
      isReach = _React$useState2[0],
      setIsReach = _React$useState2[1]; // ref


  var mainContainerRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(); // variable

  var backgroundColorArray = ['#757270', '#A5BAA8', '#6A9194', '#b79e6a', '#c68377'];
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    window.addEventListener('scroll', onChangeScroll);
    window.addEventListener('resize', onChangeResize);
    onChangeScroll();
    onChangeResize();
    return function () {
      window.removeEventListener('scroll', onChangeScroll);
      window.removeEventListener('resize', onChangeResize);
    };
  }, []);
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    if (mainContainerRef.current) {
      mainContainerRef.current.setAttribute('id', baseStore.titleArray[containerNo]);
    }
  }, []); // onChange

  var onChangeScroll = function onChangeScroll() {
    if (mainContainerRef.current) {
      if (mainContainerRef.current.getBoundingClientRect().top > 0) {
        setIsReach(false);
      } else {
        setIsReach(true);
      }
    }
  };

  var onChangeResize = function onChangeResize() {
    if (mainContainerRef.current) {
      if (mainContainerRef.current.getBoundingClientRect().top > 0) {
        setIsReach(false);
      } else {
        setIsReach(true);
      }
    }
  }; // onClick


  var onClickMainContainer = function onClickMainContainer() {
    if (mainContainerRef.current) {
      window.scrollBy({
        top: mainContainerRef.current.getBoundingClientRect().top,
        behavior: 'smooth'
      });
    }
  };

  return (0,mobx_react__WEBPACK_IMPORTED_MODULE_6__.useObserver)(function () {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainContainer, {
      ref: mainContainerRef,
      backgroundColor: backgroundColorArray[containerNo],
      zIndex: 100 - containerNo,
      onClick: onClickMainContainer,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubContainer, {
        isReach: isReach,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ComponentContainer, {
          children: [containerNo === 0 ? '' : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleSection, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainTitle, {
              children: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 354,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainTitle, {
              children: baseStore.titleArray[containerNo]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 355,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 353,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ComponentSection, {
            children: children
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 359,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 349,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 348,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 9
    }, _this);
  });
};

_s(Base, "+q8eOoB6X9joMfsYo8vcTccdG7I=", false, function () {
  return [mobx_react__WEBPACK_IMPORTED_MODULE_6__.useObserver];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2Jhc2UudHN4Il0sIm5hbWVzIjpbIk1haW5Db250YWluZXIiLCJzdHlsZWQiLCJwcm9wcyIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsIlN1YkNvbnRhaW5lciIsImlzUmVhY2giLCJDb21wb25lbnRDb250YWluZXIiLCJtYXhXaWR0aCIsIlRpdGxlU2VjdGlvbiIsIkNvbXBvbmVudFNlY3Rpb24iLCJNYWluVGl0bGUiLCJCYXNlIiwiY2hpbGRyZW4iLCJjb250YWluZXJObyIsImluZGV4U3RvcmUiLCJiYXNlU3RvcmUiLCJSZWFjdCIsInNldElzUmVhY2giLCJtYWluQ29udGFpbmVyUmVmIiwiYmFja2dyb3VuZENvbG9yQXJyYXkiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwib25DaGFuZ2VTY3JvbGwiLCJvbkNoYW5nZVJlc2l6ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjdXJyZW50Iiwic2V0QXR0cmlidXRlIiwidGl0bGVBcnJheSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsIm9uQ2xpY2tNYWluQ29udGFpbmVyIiwic2Nyb2xsQnkiLCJiZWhhdmlvciIsInVzZU9ic2VydmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0EsSUFBTUEsYUFBYSxHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSxpSUFNSyxVQUFDQyxLQUFEO0FBQUEsU0FBMkJBLEtBQUssQ0FBQ0MsZUFBakM7QUFBQSxDQU5MLEVBT0osVUFBQ0QsS0FBRDtBQUFBLFNBQTJCQSxLQUFLLENBQUNFLE1BQWpDO0FBQUEsQ0FQSSxDQUFuQjtLQUFNSixhO0FBY04sSUFBTUssWUFBWSxHQUFHSixxRUFBSDtBQUFBO0FBQUE7QUFBQSxvSEFNRixVQUFDQyxLQUFEO0FBQUEsU0FBMkJBLEtBQUssQ0FBQ0ksT0FBTixHQUFnQixRQUFoQixH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dXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuLy8gaW1wb3J0IHsgbWF4V2lkdGggfSBmcm9tICcuLi9zdHlsZS9zdHlsZSc7XHJcblxyXG4vLyBjb25zdCBTdHlsZWRTZWN0aW9uMSA9IHN0eWxlZC5zZWN0aW9uYGA7XHJcblxyXG4vLyBpbnRlcmZhY2UgSVN0eWxlZERpdjIge1xyXG4vLyAgICAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IFN0eWxlZERpdjIgPSBzdHlsZWQuZGl2YFxyXG4vLyAgICAgbWF4LXdpZHRoOiAke21heFdpZHRofXB4O1xyXG4vLyAgICAgbWFyZ2luOiAwIGF1dG87XHJcbi8vICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wczogSVN0eWxlZERpdjIpID0+IHByb3BzLmJhY2tncm91bmRDb2xvcn07XHJcblxyXG4vLyAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHttYXhXaWR0aCArIDUwfXB4KSB7XHJcbi8vICAgICAgICAgbWFyZ2luLWJvdHRvbTogODRweDtcclxuLy8gICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxOHB4O1xyXG4vLyAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxOHB4O1xyXG4vLyAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE4cHg7XHJcbi8vICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE4cHg7XHJcbi8vICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAxMnB4ICR7KHByb3BzOiBJU3R5bGVkRGl2MikgPT4gcHJvcHMuYmFja2dyb3VuZENvbG9yfTtcclxuLy8gICAgIH1cclxuLy8gYDtcclxuXHJcbi8vIGludGVyZmFjZSBJU3R5bGVkRGl2MyB7XHJcbi8vICAgICB0aXRsZTogc3RyaW5nO1xyXG4vLyAgICAgc2hvd1RpdGxlOiBib29sZWFuO1xyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBTdHlsZWREaXYzID0gc3R5bGVkLmRpdmBcclxuLy8gICAgICR7KHByb3BzOiBJU3R5bGVkRGl2MykgPT4ge1xyXG4vLyAgICAgICAgIGlmIChwcm9wcy50aXRsZSkge1xyXG4vLyAgICAgICAgICAgICBpZiAocHJvcHMuc2hvd1RpdGxlKSB7XHJcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gYFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGRpc3BhbHk6IGJsb2NrO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4vLyAgICAgICAgICAgICAgICAgYDtcclxuLy8gICAgICAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgICAgICAgIHJldHVybiBgXHJcbi8vICAgICAgICAgICAgICAgICAgICAgZGlzcGFseTogYmxvY2s7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDYwcHgpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbi8vICAgICAgICAgICAgICAgICBgO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgICAgcmV0dXJuIGBcclxuLy8gICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbi8vICAgICAgICAgICAgIGA7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfX1cclxuXHJcbi8vICAgICBkaXNwbGF5OiAkeyhwcm9wczogSVN0eWxlZERpdjMpID0+IChwcm9wcy50aXRsZSA/ICdibG9jaycgOiAnbm9uZScpfTtcclxuLy8gICAgIHBhZGRpbmc6IDI0cHggMDtcclxuLy8gICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDEuOHM7XHJcbi8vICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbi8vIGA7XHJcblxyXG4vLyBjb25zdCBTdHlsZWRUaXRsZSA9IHN0eWxlZC5zcGFuYFxyXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vICAgICBmb250LXNpemU6IDIuNGVtO1xyXG4vLyBgO1xyXG5cclxuLy8gaW50ZXJmYWNlIElCYXNlQ29tcG9uZW50IHtcclxuLy8gICAgIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbi8vICAgICB0aXRsZTogc3RyaW5nO1xyXG4vLyAgICAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IEJhc2U6IFJlYWN0LkZDPElCYXNlQ29tcG9uZW50PiA9ICh7IGNoaWxkcmVuLCB0aXRsZSwgYmFja2dyb3VuZENvbG9yIH0pOiBKU1guRWxlbWVudCA9PiB7XHJcbi8vICAgICAvLyBzdGF0ZVxyXG4vLyAgICAgY29uc3QgW3Nob3dUaXRsZSwgc2V0U2hvd1RpdGxlXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuLy8gICAgIGNvbnN0IFtpc0NsaWNrLCBzZXRJc0NsaWNrXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuLy8gICAgIGNvbnN0IFtzYXZlUG9zaXRpb24sIHNldFNhdmVQb3NpdGlvbl0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KDApO1xyXG5cclxuLy8gICAgIC8vIHJlZlxyXG4vLyAgICAgY29uc3QgZGl2MVJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuLy8gICAgIGNvbnN0IGRpdjJSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KCk7XHJcblxyXG4vLyAgICAgLy8gdmFyaWFibGVcclxuLy8gICAgIGxldCBpc0NsaWNrVmFyaWFibGUgPSBmYWxzZTtcclxuXHJcbi8vICAgICAvLyB1c2VFZmZlY3RcclxuLy8gICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbi8vICAgICAgICAgc2Nyb2xsVGl0bGUoKTtcclxuLy8gICAgICAgICByZXNpemVTZWN0aW9uMSgpO1xyXG5cclxuLy8gICAgICAgICBpZiAoZGl2MVJlZi5jdXJyZW50KSB7XHJcbi8vICAgICAgICAgICAgIGRpdjFSZWYuY3VycmVudC5pZCA9IHRpdGxlO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH0sIFtdKTtcclxuXHJcbi8vICAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgICAgICAgIGlzQ2xpY2tWYXJpYWJsZSA9IGZhbHNlO1xyXG4vLyAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxUaXRsZSk7XHJcblxyXG4vLyAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbi8vICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxUaXRsZSk7XHJcbi8vICAgICAgICAgfTtcclxuLy8gICAgIH0sIFtpc0NsaWNrXSk7XHJcblxyXG4vLyAgICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuLy8gICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplU2VjdGlvbjEpO1xyXG5cclxuLy8gICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4vLyAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplU2VjdGlvbjEpO1xyXG4vLyAgICAgICAgIH07XHJcbi8vICAgICB9LCBbaXNDbGlja10pO1xyXG5cclxuLy8gICAgIC8vIG9uQ2xpY2tcclxuLy8gICAgIGNvbnN0IG9uQ2xpY2tEaXYyID0gKCkgPT4ge1xyXG4vLyAgICAgICAgIGlmIChkaXYxUmVmLmN1cnJlbnQpIHtcclxuLy8gICAgICAgICAgICAgaWYgKGlzQ2xpY2spIHtcclxuLy8gICAgICAgICAgICAgICAgIGRpdjFSZWYuY3VycmVudC5zdHlsZS50cmFuc2l0aW9uID0gJyc7XHJcbi8vICAgICAgICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gJyc7XHJcbi8vICAgICAgICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuc3R5bGUubWFyZ2luID0gJyc7XHJcbi8vICAgICAgICAgICAgICAgICBzZXRJc0NsaWNrKGZhbHNlKTtcclxuLy8gICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBzYXZlUG9zaXRpb24pO1xyXG4vLyAgICAgICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZOyAvLyDtmITsnqwg7Iqk7YGs66GkIOuGkuydtFxyXG4vLyAgICAgICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBkaXYxUmVmLmN1cnJlbnQgJiYgZGl2MVJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDsgLy8gZGl27J2YIHRvcOyXkCDrj4Tri6ztlaAg65aE6rmM7KeAIOuCqOydgCDqsbDrpqxcclxuLy8gICAgICAgICAgICAgICAgIGNvbnN0IGdhYlkgPSAod2luZG93LmlubmVySGVpZ2h0IC0gKGRpdjFSZWYuY3VycmVudCAmJiBkaXYxUmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0KSkgLyAyOyAvLyAo7ZmU66m0IOuGkuydtCAtIGRpdiDrhpLsnbQpIC8gMlxyXG4vLyAgICAgICAgICAgICAgICAgY29uc3QgZ2FiWCA9ICh3aW5kb3cuaW5uZXJXaWR0aCAtIChkaXYyUmVmLmN1cnJlbnQgJiYgZGl2MlJlZi5jdXJyZW50LmNsaWVudFdpZHRoKSkgLyAyOyAvLyAo7ZmU66m0IOuEiOu5hCAtIGRpdiDrhIjruYQpIC8gMlxyXG5cclxuLy8gICAgICAgICAgICAgICAgIGlmIChnYWJZID4gMCAmJiBnYWJYID4gMCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+PSBtYXhXaWR0aCArIDUwKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgc2V0U2F2ZVBvc2l0aW9uKHNjcm9sbFkgKyBkaXN0YW5jZSAtIGdhYlkpOyAvLyDspJHslZkg7JyE7LmYXHJcbi8vICAgICAgICAgICAgICAgICAgICAgaWYgKGdhYlkgPiA4NCkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgc2Nyb2xsWSArIGRpc3RhbmNlIC0gZ2FiWSArIChnYWJZIC0gODQpKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgc2Nyb2xsWSArIGRpc3RhbmNlIC0gZ2FiWSk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgICAgICAgICAgICBjb25zdCBibGFua1kgPSAxICsgKGdhYlkgLyAoZGl2MlJlZi5jdXJyZW50ICYmIGRpdjJSZWYuY3VycmVudC5jbGllbnRIZWlnaHQpKSAqIDI7IC8vIChkaXYg7Jes67mEIOuGkuydtCAvIGRpdiDrhpLsnbQpICogMlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJsYW5rWCA9IDEgKyAoZ2FiWCAvIChkaXYyUmVmLmN1cnJlbnQgJiYgZGl2MlJlZi5jdXJyZW50LmNsaWVudFdpZHRoKSkgKiAyOyAvLyAoZGl2IOyXrOu5hCDrhIjruYQgLyBkaXYg64SI67mEKSAqIDJcclxuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgZGl2MVJlZi5jdXJyZW50LnN0eWxlLnRyYW5zaXRpb24gPSAnMXMnO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGRpdjFSZWYuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoJHtNYXRoLm1pbihibGFua1ksIGJsYW5rWCl9KWA7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgZGl2MVJlZi5jdXJyZW50LnN0eWxlLm1hcmdpbiA9IGAke2dhYll9cHggMGA7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgc2V0SXNDbGljayh0cnVlKTtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH07XHJcblxyXG4vLyAgICAgLy8gbm9ybWFsXHJcbi8vICAgICBjb25zdCByZXNpemVTZWN0aW9uMSA9ICgpID0+IHtcclxuLy8gICAgICAgICBjb25zdCBnYWJZID0gKHdpbmRvdy5pbm5lckhlaWdodCAtIChkaXYxUmVmLmN1cnJlbnQgJiYgZGl2MVJlZi5jdXJyZW50LmNsaWVudEhlaWdodCkpIC8gMjsgLy8gKO2ZlOuptCDrhpLsnbQgLSBkaXYg64aS7J20KSAvIDJcclxuLy8gICAgICAgICBjb25zdCBnYWJYID0gKHdpbmRvdy5pbm5lcldpZHRoIC0gKGRpdjJSZWYuY3VycmVudCAmJiBkaXYyUmVmLmN1cnJlbnQuY2xpZW50V2lkdGgpKSAvIDI7IC8vICjtmZTrqbQg64SI67mEIC0gZGl2IOuEiOu5hCkgLyAyXHJcblxyXG4vLyAgICAgICAgIGlmIChpc0NsaWNrKSB7XHJcbi8vICAgICAgICAgICAgIGlmIChnYWJZID4gMCAmJiBnYWJYID4gMCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+PSBtYXhXaWR0aCArIDUwKSB7XHJcbi8vICAgICAgICAgICAgICAgICBjb25zdCBibGFua1kgPSAxICsgKGdhYlkgLyAoZGl2MlJlZi5jdXJyZW50ICYmIGRpdjJSZWYuY3VycmVudC5jbGllbnRIZWlnaHQpKSAqIDI7IC8vIChkaXYg7Jes67mEIOuGkuydtCAvIGRpdiDrhpLsnbQpICogMlxyXG4vLyAgICAgICAgICAgICAgICAgY29uc3QgYmxhbmtYID0gMSArIChnYWJYIC8gKGRpdjJSZWYuY3VycmVudCAmJiBkaXYyUmVmLmN1cnJlbnQuY2xpZW50V2lkdGgpKSAqIDI7IC8vIChkaXYg7Jes67mEIOuEiOu5hCAvIGRpdiDrhIjruYQpICogMlxyXG5cclxuLy8gICAgICAgICAgICAgICAgIGRpdjFSZWYuY3VycmVudC5zdHlsZS50cmFuc2l0aW9uID0gJyc7XHJcbi8vICAgICAgICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlKCR7TWF0aC5taW4oYmxhbmtZLCBibGFua1gpfSlgO1xyXG4vLyAgICAgICAgICAgICAgICAgZGl2MVJlZi5jdXJyZW50LnN0eWxlLm1hcmdpbiA9IGAke2dhYll9cHggMGA7XHJcbi8vICAgICAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xyXG4vLyAgICAgICAgICAgICAgICAgZGl2MVJlZi5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xyXG4vLyAgICAgICAgICAgICAgICAgZGl2MVJlZi5jdXJyZW50LnN0eWxlLm1hcmdpbiA9ICcnO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICBpZiAoZGl2MlJlZi5jdXJyZW50KSB7XHJcbi8vICAgICAgICAgICAgIGlmIChnYWJZID4gMCAmJiBnYWJYID4gMCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+PSBtYXhXaWR0aCArIDUwKSB7XHJcbi8vICAgICAgICAgICAgICAgICBkaXYyUmVmLmN1cnJlbnQuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4vLyAgICAgICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgICAgICAgZGl2MlJlZi5jdXJyZW50LnN0eWxlLmN1cnNvciA9ICcnO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfTtcclxuXHJcbi8vICAgICBjb25zdCBzY3JvbGxUaXRsZSA9ICgpID0+IHtcclxuLy8gICAgICAgICBpZiAoZGl2MVJlZi5jdXJyZW50KSB7XHJcbi8vICAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJIZWlnaHQgPj0gZGl2MVJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIDQ4KSB7XHJcbi8vICAgICAgICAgICAgICAgICBzZXRTaG93VGl0bGUodHJ1ZSk7XHJcbi8vICAgICAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgICAgICBzZXRTaG93VGl0bGUoZmFsc2UpO1xyXG4vLyAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICBpZiAoaXNDbGlja1ZhcmlhYmxlKSB7XHJcbi8vICAgICAgICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xyXG4vLyAgICAgICAgICAgICAgICAgZGl2MVJlZi5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xyXG4vLyAgICAgICAgICAgICAgICAgZGl2MVJlZi5jdXJyZW50LnN0eWxlLm1hcmdpbiA9ICcnO1xyXG4vLyAgICAgICAgICAgICAgICAgc2V0SXNDbGljayhmYWxzZSk7XHJcbi8vICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgIGlmIChpc0NsaWNrKSB7XHJcbi8vICAgICAgICAgICAgICAgICBpc0NsaWNrVmFyaWFibGUgPSB0cnVlO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfTtcclxuXHJcbi8vICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgIDw+XHJcbi8vICAgICAgICAgICAgIDxTdHlsZWRTZWN0aW9uMSByZWY9e2RpdjFSZWZ9PlxyXG4vLyAgICAgICAgICAgICAgICAgPFN0eWxlZERpdjIgYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3J9IHJlZj17ZGl2MlJlZn0gb25DbGljaz17b25DbGlja0RpdjJ9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXYzIHRpdGxlPXt0aXRsZX0gc2hvd1RpdGxlPXtzaG93VGl0bGV9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkVGl0bGU+IyB7dGl0bGV9PC9TdHlsZWRUaXRsZT5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZERpdjM+XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuLy8gICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2Mj5cclxuLy8gICAgICAgICAgICAgPC9TdHlsZWRTZWN0aW9uMT5cclxuLy8gICAgICAgICA8Lz5cclxuLy8gICAgICk7XHJcbi8vIH07XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBCYXNlO1xyXG5cclxuaW1wb3J0IHsgdXNlT2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IGluZGV4U3RvcmUgZnJvbSAnLi4vbW9kdWxlcy9pbmRleFN0b3JlJztcclxuaW1wb3J0IHsgbWF4V2lkdGggfSBmcm9tICcuLi9zdHlsZS9zdHlsZSc7XHJcblxyXG5pbnRlcmZhY2UgSU1haW5Db250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XHJcbiAgICB6SW5kZXg6IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgTWFpbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtICgxMDB2dyAtIDEwMCUpKTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzOiBJTWFpbkNvbnRhaW5lcikgPT4gcHJvcHMuYmFja2dyb3VuZENvbG9yfTtcclxuICAgIHotaW5kZXg6ICR7KHByb3BzOiBJTWFpbkNvbnRhaW5lcikgPT4gcHJvcHMuekluZGV4fTtcclxuYDtcclxuXHJcbmludGVyZmFjZSBJU3ViQ29udGFpbmVyIHtcclxuICAgIGlzUmVhY2g6IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IFN1YkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtICgxMDB2dyAtIDEwMCUpKTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgcG9zaXRpb246ICR7KHByb3BzOiBJU3ViQ29udGFpbmVyKSA9PiAocHJvcHMuaXNSZWFjaCA/ICdzdGF0aWMnIDogJ2ZpeGVkJyl9O1xyXG4gICAgdG9wOiAkeyhwcm9wczogSVN1YkNvbnRhaW5lcikgPT4gKHByb3BzLmlzUmVhY2ggPyAnJyA6IDApfTtcclxuYDtcclxuXHJcbmNvbnN0IENvbXBvbmVudENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBtYXgtd2lkdGg6ICR7bWF4V2lkdGh9cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZVNlY3Rpb24gPSBzdHlsZWQuZGl2YFxyXG4gICAgcGFkZGluZzogMzhweCAwIDY2cHggMDtcclxuICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbmA7XHJcblxyXG5jb25zdCBDb21wb25lbnRTZWN0aW9uID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuYDtcclxuXHJcbmNvbnN0IE1haW5UaXRsZSA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogY2FsYyg1MnB4ICsgMC44dncpO1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElCYXNlIHtcclxuICAgIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgICBjb250YWluZXJObzogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBCYXNlOiBSZWFjdC5GQzxJQmFzZT4gPSAoeyBjaGlsZHJlbiwgY29udGFpbmVyTm8gfSk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIC8vIG1vYnhcclxuICAgIGNvbnN0IHsgYmFzZVN0b3JlIH0gPSBpbmRleFN0b3JlKCk7XHJcblxyXG4gICAgLy8gc3RhdGVcclxuICAgIGNvbnN0IFtpc1JlYWNoLCBzZXRJc1JlYWNoXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgICAvLyByZWZcclxuICAgIGNvbnN0IG1haW5Db250YWluZXJSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KCk7XHJcblxyXG4gICAgLy8gdmFyaWFibGVcclxuICAgIGNvbnN0IGJhY2tncm91bmRDb2xvckFycmF5ID0gWycjNzU3MjcwJywgJyNBNUJBQTgnLCAnIzZBOTE5NCcsICcjYjc5ZTZhJywgJyNjNjgzNzcnXTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvbkNoYW5nZVNjcm9sbCk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uQ2hhbmdlUmVzaXplKTtcclxuXHJcbiAgICAgICAgb25DaGFuZ2VTY3JvbGwoKTtcclxuICAgICAgICBvbkNoYW5nZVJlc2l6ZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25DaGFuZ2VTY3JvbGwpO1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25DaGFuZ2VSZXNpemUpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAobWFpbkNvbnRhaW5lclJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIG1haW5Db250YWluZXJSZWYuY3VycmVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgYmFzZVN0b3JlLnRpdGxlQXJyYXlbY29udGFpbmVyTm9dKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLy8gb25DaGFuZ2VcclxuICAgIGNvbnN0IG9uQ2hhbmdlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChtYWluQ29udGFpbmVyUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgaWYgKG1haW5Db250YWluZXJSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRJc1JlYWNoKGZhbHNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldElzUmVhY2godHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlUmVzaXplID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChtYWluQ29udGFpbmVyUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgaWYgKG1haW5Db250YWluZXJSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRJc1JlYWNoKGZhbHNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldElzUmVhY2godHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIG9uQ2xpY2tcclxuICAgIGNvbnN0IG9uQ2xpY2tNYWluQ29udGFpbmVyID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChtYWluQ29udGFpbmVyUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbEJ5KHsgdG9wOiBtYWluQ29udGFpbmVyUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdXNlT2JzZXJ2ZXIoKCkgPT4gKFxyXG4gICAgICAgIDxNYWluQ29udGFpbmVyXHJcbiAgICAgICAgICAgIHJlZj17bWFpbkNvbnRhaW5lclJlZn1cclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb250YWluZXJOb119XHJcbiAgICAgICAgICAgIHpJbmRleD17MTAwIC0gY29udGFpbmVyTm99XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2tNYWluQ29udGFpbmVyfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPFN1YkNvbnRhaW5lciBpc1JlYWNoPXtpc1JlYWNofT5cclxuICAgICAgICAgICAgICAgIDxDb21wb25lbnRDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvbnRhaW5lck5vID09PSAwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUaXRsZVNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWFpblRpdGxlPiM8L01haW5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYWluVGl0bGU+e2Jhc2VTdG9yZS50aXRsZUFycmF5W2NvbnRhaW5lck5vXX08L01haW5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UaXRsZVNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudFNlY3Rpb24+e2NoaWxkcmVufTwvQ29tcG9uZW50U2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvQ29tcG9uZW50Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L1N1YkNvbnRhaW5lcj5cclxuICAgICAgICA8L01haW5Db250YWluZXI+XHJcbiAgICApKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=