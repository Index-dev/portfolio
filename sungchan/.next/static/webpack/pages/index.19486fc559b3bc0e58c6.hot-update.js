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
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _modules_indexStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/indexStore */ "./modules/indexStore.tsx");
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




// interface IMainContainer {
//     backgroundColor: string;
//     zIndex: number;
// }
var MainContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "base__MainContainer",
  componentId: "sc-1ugehyd-0"
})(["width:calc(100vw - (100vw - 100%));min-height:100vh;position:relative;"]);
_c = MainContainer;
var SubContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "base__SubContainer",
  componentId: "sc-1ugehyd-1"
})(["width:calc(100vw - (100vw - 100%));min-height:100vh;display:flex;align-items:center;position:", ";top:", ";"], function (props) {
  return props.isReach ? 'static' : 'fixed';
}, function (props) {
  return props.isReach ? '' : 0;
}); // const ComponentContainer = styled.div`
//     max-width: ${maxWidth}px;
//     width: 100%;
//     margin: 0 auto;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
// `;
// const TitleSection = styled.div`
//     padding: 38px 0 66px 0;
//     margin-top: 32px;
// `;
// const ComponentSection = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 100%;
// `;
// const MainTitle = styled.span`
//     font-weight: 600;
//     font-size: calc(48px + 0.9vw);
//     text-shadow: 3.5px 3.5px #fff;
//     font-family: 'Bungee', cursive;
// `;

_c2 = SubContainer;
var myKeyframes = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.keyframes)(_templateObject());
var TestDiv = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "base__TestDiv",
  componentId: "sc-1ugehyd-2"
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

  return (0,mobx_react__WEBPACK_IMPORTED_MODULE_6__.useObserver)(function () {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainContainer, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubContainer, {
          isReach: isReach
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 374,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 373,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            position: 'absolute',
            width: '400px',
            height: '400px',
            left: '1200px',
            top: '800px',
            backgroundColor: 'red'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 378,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 377,
        columnNumber: 13
      }, _this)]
    }, void 0, true);
  });
};

_s(Base, "6KIvCv4Egvvrm07dmAaoW8b3Xs8=", false, function () {
  return [mobx_react__WEBPACK_IMPORTED_MODULE_6__.useObserver];
});

_c3 = Base;
/* harmony default export */ __webpack_exports__["default"] = (Base);

var _c, _c2, _c3;

$RefreshReg$(_c, "MainContainer");
$RefreshReg$(_c2, "SubContainer");
$RefreshReg$(_c3, "Base");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2Jhc2UudHN4Il0sIm5hbWVzIjpbIk1haW5Db250YWluZXIiLCJzdHlsZWQiLCJTdWJDb250YWluZXIiLCJwcm9wcyIsImlzUmVhY2giLCJteUtleWZyYW1lcyIsImtleWZyYW1lcyIsIlRlc3REaXYiLCJCYXNlIiwiY2hpbGRyZW4iLCJjb250YWluZXJObyIsImluZGV4U3RvcmUiLCJiYXNlU3RvcmUiLCJSZWFjdCIsInNldElzUmVhY2giLCJtYWluQ29udGFpbmVyUmVmIiwic3ViQ29udGFpbmVyUmVmIiwiYmFja2dyb3VuZENvbG9yQXJyYXkiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwib25DaGFuZ2VTY3JvbGwiLCJvbkNoYW5nZVJlc2l6ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjdXJyZW50Iiwic2V0QXR0cmlidXRlIiwidGl0bGVBcnJheSIsInNldENvbXBvbmVudEhlaWdodCIsImNsaWVudEhlaWdodCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsIm9uQ2xpY2tNYWluQ29udGFpbmVyIiwic2Nyb2xsQnkiLCJnZXRBY2N1bXVsYXRlQ29tcG9uZW50SGVpZ2h0Iiwic2Nyb2xsWSIsImJlaGF2aW9yIiwidXNlT2JzZXJ2ZXIiLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwibGVmdCIsImJhY2tncm91bmRDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsOEVBQW5CO0tBQU1ELGE7QUFXTixJQUFNRSxZQUFZLEdBQUdELHFFQUFIO0FBQUE7QUFBQTtBQUFBLG9IQU1GLFVBQUNFLEtBQUQ7QUFBQSxTQUEyQkEsS0FBSyxDQUFDQyxPQUFOLEdBQWdCLFFBQWhCLEdBQTJC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VjtBQUNIO0FBQ0o7QUFDSixHQVJELENBN0NzRSxDQXVEdEU7OztBQUNBLE1BQU1nQixvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLEdBQU07QUFDL0JaLFVBQU0sQ0FBQ2EsUUFBUCxDQUFnQjtBQUNaRixTQUFHLEVBQUVqQixTQUFTLENBQUNvQiw0QkFBVixDQUF1Q3RCLFdBQXZDLElBQXNERSxTQUFTLENBQUNxQixPQUR6RDtBQUVaQyxjQUFRLEVBQUU7QUFGRSxLQUFoQjtBQUlILEdBTEQ7O0FBT0EsU0FBT0MsdURBQVcsQ0FBQztBQUFBLHdCQUNmO0FBQUEsOEJBQ0ksOERBQUMsYUFBRDtBQUFBLCtCQUNJLDhEQUFDLFlBQUQ7QUFBYyxpQkFBTyxFQUFFL0I7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUtJO0FBQUEsK0JBQ0k7QUFDSSxlQUFLLEVBQUU7QUFDSGdDLG9CQUFRLEVBQUUsVUFEUDtBQUVIQyxpQkFBSyxFQUFFLE9BRko7QUFHSEMsa0JBQU0sRUFBRSxPQUhMO0FBSUhDLGdCQUFJLEVBQUUsUUFKSDtBQUtIVixlQUFHLEVBQUUsT0FMRjtBQU1IVywyQkFBZSxFQUFFO0FBTmQ7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxKO0FBQUEsb0JBRGU7QUFBQSxHQUFELENBQWxCO0FBb0JILENBbkZEOztHQUFNaEMsSTtVQStESzJCLG1EOzs7TUEvREwzQixJO0FBcUZOLCtEQUFlQSxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjE5NDg2ZmM1NTliM2JjMGU1OGM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG4vLyBpbXBvcnQgeyBtYXhXaWR0aCB9IGZyb20gJy4uL3N0eWxlL3N0eWxlJztcclxuXHJcbi8vIGNvbnN0IFN0eWxlZFNlY3Rpb24xID0gc3R5bGVkLnNlY3Rpb25gYDtcclxuXHJcbi8vIGludGVyZmFjZSBJU3R5bGVkRGl2MiB7XHJcbi8vICAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxuLy8gfVxyXG5cclxuLy8gY29uc3QgU3R5bGVkRGl2MiA9IHN0eWxlZC5kaXZgXHJcbi8vICAgICBtYXgtd2lkdGg6ICR7bWF4V2lkdGh9cHg7XHJcbi8vICAgICBtYXJnaW46IDAgYXV0bztcclxuLy8gICAgIHBhZGRpbmc6IDAgMTVweDtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzOiBJU3R5bGVkRGl2MikgPT4gcHJvcHMuYmFja2dyb3VuZENvbG9yfTtcclxuXHJcbi8vICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke21heFdpZHRoICsgNTB9cHgpIHtcclxuLy8gICAgICAgICBtYXJnaW4tYm90dG9tOiA4NHB4O1xyXG4vLyAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE4cHg7XHJcbi8vICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE4cHg7XHJcbi8vICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMThweDtcclxuLy8gICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMThweDtcclxuLy8gICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDEycHggJHsocHJvcHM6IElTdHlsZWREaXYyKSA9PiBwcm9wcy5iYWNrZ3JvdW5kQ29sb3J9O1xyXG4vLyAgICAgfVxyXG4vLyBgO1xyXG5cclxuLy8gaW50ZXJmYWNlIElTdHlsZWREaXYzIHtcclxuLy8gICAgIHRpdGxlOiBzdHJpbmc7XHJcbi8vICAgICBzaG93VGl0bGU6IGJvb2xlYW47XHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IFN0eWxlZERpdjMgPSBzdHlsZWQuZGl2YFxyXG4vLyAgICAgJHsocHJvcHM6IElTdHlsZWREaXYzKSA9PiB7XHJcbi8vICAgICAgICAgaWYgKHByb3BzLnRpdGxlKSB7XHJcbi8vICAgICAgICAgICAgIGlmIChwcm9wcy5zaG93VGl0bGUpIHtcclxuLy8gICAgICAgICAgICAgICAgIHJldHVybiBgXHJcbi8vICAgICAgICAgICAgICAgICAgICAgZGlzcGFseTogYmxvY2s7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbi8vICAgICAgICAgICAgICAgICBgO1xyXG4vLyAgICAgICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIGBcclxuLy8gICAgICAgICAgICAgICAgICAgICBkaXNwYWx5OiBibG9jaztcclxuLy8gICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNjBweCk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuLy8gICAgICAgICAgICAgICAgIGA7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgICByZXR1cm4gYFxyXG4vLyAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuLy8gICAgICAgICAgICAgYDtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9fVxyXG5cclxuLy8gICAgIGRpc3BsYXk6ICR7KHByb3BzOiBJU3R5bGVkRGl2MykgPT4gKHByb3BzLnRpdGxlID8gJ2Jsb2NrJyA6ICdub25lJyl9O1xyXG4vLyAgICAgcGFkZGluZzogMjRweCAwO1xyXG4vLyAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMS44cztcclxuLy8gICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuLy8gYDtcclxuXHJcbi8vIGNvbnN0IFN0eWxlZFRpdGxlID0gc3R5bGVkLnNwYW5gXHJcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMi40ZW07XHJcbi8vIGA7XHJcblxyXG4vLyBpbnRlcmZhY2UgSUJhc2VDb21wb25lbnQge1xyXG4vLyAgICAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxuLy8gICAgIHRpdGxlOiBzdHJpbmc7XHJcbi8vICAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxuLy8gfVxyXG5cclxuLy8gY29uc3QgQmFzZTogUmVhY3QuRkM8SUJhc2VDb21wb25lbnQ+ID0gKHsgY2hpbGRyZW4sIHRpdGxlLCBiYWNrZ3JvdW5kQ29sb3IgfSk6IEpTWC5FbGVtZW50ID0+IHtcclxuLy8gICAgIC8vIHN0YXRlXHJcbi8vICAgICBjb25zdCBbc2hvd1RpdGxlLCBzZXRTaG93VGl0bGVdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4vLyAgICAgY29uc3QgW2lzQ2xpY2ssIHNldElzQ2xpY2tdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4vLyAgICAgY29uc3QgW3NhdmVQb3NpdGlvbiwgc2V0U2F2ZVBvc2l0aW9uXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oMCk7XHJcblxyXG4vLyAgICAgLy8gcmVmXHJcbi8vICAgICBjb25zdCBkaXYxUmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG4vLyAgICAgY29uc3QgZGl2MlJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuXHJcbi8vICAgICAvLyB2YXJpYWJsZVxyXG4vLyAgICAgbGV0IGlzQ2xpY2tWYXJpYWJsZSA9IGZhbHNlO1xyXG5cclxuLy8gICAgIC8vIHVzZUVmZmVjdFxyXG4vLyAgICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuLy8gICAgICAgICBzY3JvbGxUaXRsZSgpO1xyXG4vLyAgICAgICAgIHJlc2l6ZVNlY3Rpb24xKCk7XHJcblxyXG4vLyAgICAgICAgIGlmIChkaXYxUmVmLmN1cnJlbnQpIHtcclxuLy8gICAgICAgICAgICAgZGl2MVJlZi5jdXJyZW50LmlkID0gdGl0bGU7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfSwgW10pO1xyXG5cclxuLy8gICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbi8vICAgICAgICAgaXNDbGlja1ZhcmlhYmxlID0gZmFsc2U7XHJcbi8vICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbFRpdGxlKTtcclxuXHJcbi8vICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuLy8gICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbFRpdGxlKTtcclxuLy8gICAgICAgICB9O1xyXG4vLyAgICAgfSwgW2lzQ2xpY2tdKTtcclxuXHJcbi8vICAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVTZWN0aW9uMSk7XHJcblxyXG4vLyAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbi8vICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVTZWN0aW9uMSk7XHJcbi8vICAgICAgICAgfTtcclxuLy8gICAgIH0sIFtpc0NsaWNrXSk7XHJcblxyXG4vLyAgICAgLy8gb25DbGlja1xyXG4vLyAgICAgY29uc3Qgb25DbGlja0RpdjIgPSAoKSA9PiB7XHJcbi8vICAgICAgICAgaWYgKGRpdjFSZWYuY3VycmVudCkge1xyXG4vLyAgICAgICAgICAgICBpZiAoaXNDbGljaykge1xyXG4vLyAgICAgICAgICAgICAgICAgZGl2MVJlZi5jdXJyZW50LnN0eWxlLnRyYW5zaXRpb24gPSAnJztcclxuLy8gICAgICAgICAgICAgICAgIGRpdjFSZWYuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSAnJztcclxuLy8gICAgICAgICAgICAgICAgIGRpdjFSZWYuY3VycmVudC5zdHlsZS5tYXJnaW4gPSAnJztcclxuLy8gICAgICAgICAgICAgICAgIHNldElzQ2xpY2soZmFsc2UpO1xyXG4vLyAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHNhdmVQb3NpdGlvbik7XHJcbi8vICAgICAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxZID0gd2luZG93LnNjcm9sbFk7IC8vIO2YhOyerCDsiqTtgazroaQg64aS7J20XHJcbi8vICAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IGRpdjFSZWYuY3VycmVudCAmJiBkaXYxUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wOyAvLyBkaXbsnZggdG9w7JeQIOuPhOuLrO2VoCDrloTquYzsp4Ag64Ko7J2AIOqxsOumrFxyXG4vLyAgICAgICAgICAgICAgICAgY29uc3QgZ2FiWSA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLSAoZGl2MVJlZi5jdXJyZW50ICYmIGRpdjFSZWYuY3VycmVudC5jbGllbnRIZWlnaHQpKSAvIDI7IC8vICjtmZTrqbQg64aS7J20IC0gZGl2IOuGkuydtCkgLyAyXHJcbi8vICAgICAgICAgICAgICAgICBjb25zdCBnYWJYID0gKHdpbmRvdy5pbm5lcldpZHRoIC0gKGRpdjJSZWYuY3VycmVudCAmJiBkaXYyUmVmLmN1cnJlbnQuY2xpZW50V2lkdGgpKSAvIDI7IC8vICjtmZTrqbQg64SI67mEIC0gZGl2IOuEiOu5hCkgLyAyXHJcblxyXG4vLyAgICAgICAgICAgICAgICAgaWYgKGdhYlkgPiAwICYmIGdhYlggPiAwICYmIHdpbmRvdy5pbm5lcldpZHRoID49IG1heFdpZHRoICsgNTApIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBzZXRTYXZlUG9zaXRpb24oc2Nyb2xsWSArIGRpc3RhbmNlIC0gZ2FiWSk7IC8vIOykkeyVmSDsnITsuZhcclxuLy8gICAgICAgICAgICAgICAgICAgICBpZiAoZ2FiWSA+IDg0KSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBzY3JvbGxZICsgZGlzdGFuY2UgLSBnYWJZICsgKGdhYlkgLSA4NCkpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBzY3JvbGxZICsgZGlzdGFuY2UgLSBnYWJZKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJsYW5rWSA9IDEgKyAoZ2FiWSAvIChkaXYyUmVmLmN1cnJlbnQgJiYgZGl2MlJlZi5jdXJyZW50LmNsaWVudEhlaWdodCkpICogMjsgLy8gKGRpdiDsl6zruYQg64aS7J20IC8gZGl2IOuGkuydtCkgKiAyXHJcbi8vICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmxhbmtYID0gMSArIChnYWJYIC8gKGRpdjJSZWYuY3VycmVudCAmJiBkaXYyUmVmLmN1cnJlbnQuY2xpZW50V2lkdGgpKSAqIDI7IC8vIChkaXYg7Jes67mEIOuEiOu5hCAvIGRpdiDrhIjruYQpICogMlxyXG5cclxuLy8gICAgICAgICAgICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNpdGlvbiA9ICcxcyc7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgZGl2MVJlZi5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZSgke01hdGgubWluKGJsYW5rWSwgYmxhbmtYKX0pYDtcclxuLy8gICAgICAgICAgICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuc3R5bGUubWFyZ2luID0gYCR7Z2FiWX1weCAwYDtcclxuLy8gICAgICAgICAgICAgICAgICAgICBzZXRJc0NsaWNrKHRydWUpO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfTtcclxuXHJcbi8vICAgICAvLyBub3JtYWxcclxuLy8gICAgIGNvbnN0IHJlc2l6ZVNlY3Rpb24xID0gKCkgPT4ge1xyXG4vLyAgICAgICAgIGNvbnN0IGdhYlkgPSAod2luZG93LmlubmVySGVpZ2h0IC0gKGRpdjFSZWYuY3VycmVudCAmJiBkaXYxUmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0KSkgLyAyOyAvLyAo7ZmU66m0IOuGkuydtCAtIGRpdiDrhpLsnbQpIC8gMlxyXG4vLyAgICAgICAgIGNvbnN0IGdhYlggPSAod2luZG93LmlubmVyV2lkdGggLSAoZGl2MlJlZi5jdXJyZW50ICYmIGRpdjJSZWYuY3VycmVudC5jbGllbnRXaWR0aCkpIC8gMjsgLy8gKO2ZlOuptCDrhIjruYQgLSBkaXYg64SI67mEKSAvIDJcclxuXHJcbi8vICAgICAgICAgaWYgKGlzQ2xpY2spIHtcclxuLy8gICAgICAgICAgICAgaWYgKGdhYlkgPiAwICYmIGdhYlggPiAwICYmIHdpbmRvdy5pbm5lcldpZHRoID49IG1heFdpZHRoICsgNTApIHtcclxuLy8gICAgICAgICAgICAgICAgIGNvbnN0IGJsYW5rWSA9IDEgKyAoZ2FiWSAvIChkaXYyUmVmLmN1cnJlbnQgJiYgZGl2MlJlZi5jdXJyZW50LmNsaWVudEhlaWdodCkpICogMjsgLy8gKGRpdiDsl6zruYQg64aS7J20IC8gZGl2IOuGkuydtCkgKiAyXHJcbi8vICAgICAgICAgICAgICAgICBjb25zdCBibGFua1ggPSAxICsgKGdhYlggLyAoZGl2MlJlZi5jdXJyZW50ICYmIGRpdjJSZWYuY3VycmVudC5jbGllbnRXaWR0aCkpICogMjsgLy8gKGRpdiDsl6zruYQg64SI67mEIC8gZGl2IOuEiOu5hCkgKiAyXHJcblxyXG4vLyAgICAgICAgICAgICAgICAgZGl2MVJlZi5jdXJyZW50LnN0eWxlLnRyYW5zaXRpb24gPSAnJztcclxuLy8gICAgICAgICAgICAgICAgIGRpdjFSZWYuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoJHtNYXRoLm1pbihibGFua1ksIGJsYW5rWCl9KWA7XHJcbi8vICAgICAgICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuc3R5bGUubWFyZ2luID0gYCR7Z2FiWX1weCAwYDtcclxuLy8gICAgICAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgICAgICAgIGRpdjFSZWYuY3VycmVudC5zdHlsZS50cmFuc2l0aW9uID0gJyc7XHJcbi8vICAgICAgICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gJyc7XHJcbi8vICAgICAgICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuc3R5bGUubWFyZ2luID0gJyc7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIGlmIChkaXYyUmVmLmN1cnJlbnQpIHtcclxuLy8gICAgICAgICAgICAgaWYgKGdhYlkgPiAwICYmIGdhYlggPiAwICYmIHdpbmRvdy5pbm5lcldpZHRoID49IG1heFdpZHRoICsgNTApIHtcclxuLy8gICAgICAgICAgICAgICAgIGRpdjJSZWYuY3VycmVudC5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcbi8vICAgICAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgICAgICBkaXYyUmVmLmN1cnJlbnQuc3R5bGUuY3Vyc29yID0gJyc7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9O1xyXG5cclxuLy8gICAgIGNvbnN0IHNjcm9sbFRpdGxlID0gKCkgPT4ge1xyXG4vLyAgICAgICAgIGlmIChkaXYxUmVmLmN1cnJlbnQpIHtcclxuLy8gICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lckhlaWdodCA+PSBkaXYxUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgNDgpIHtcclxuLy8gICAgICAgICAgICAgICAgIHNldFNob3dUaXRsZSh0cnVlKTtcclxuLy8gICAgICAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgICAgICAgIHNldFNob3dUaXRsZShmYWxzZSk7XHJcbi8vICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgIGlmIChpc0NsaWNrVmFyaWFibGUpIHtcclxuLy8gICAgICAgICAgICAgICAgIGRpdjFSZWYuY3VycmVudC5zdHlsZS50cmFuc2l0aW9uID0gJyc7XHJcbi8vICAgICAgICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gJyc7XHJcbi8vICAgICAgICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuc3R5bGUubWFyZ2luID0gJyc7XHJcbi8vICAgICAgICAgICAgICAgICBzZXRJc0NsaWNrKGZhbHNlKTtcclxuLy8gICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgICAgaWYgKGlzQ2xpY2spIHtcclxuLy8gICAgICAgICAgICAgICAgIGlzQ2xpY2tWYXJpYWJsZSA9IHRydWU7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9O1xyXG5cclxuLy8gICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgPD5cclxuLy8gICAgICAgICAgICAgPFN0eWxlZFNlY3Rpb24xIHJlZj17ZGl2MVJlZn0+XHJcbi8vICAgICAgICAgICAgICAgICA8U3R5bGVkRGl2MiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvcn0gcmVmPXtkaXYyUmVmfSBvbkNsaWNrPXtvbkNsaWNrRGl2Mn0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZERpdjMgdGl0bGU9e3RpdGxlfSBzaG93VGl0bGU9e3Nob3dUaXRsZX0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRUaXRsZT4jIHt0aXRsZX08L1N0eWxlZFRpdGxlPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2Mz5cclxuXHJcbi8vICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4vLyAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXYyPlxyXG4vLyAgICAgICAgICAgICA8L1N0eWxlZFNlY3Rpb24xPlxyXG4vLyAgICAgICAgIDwvPlxyXG4vLyAgICAgKTtcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IEJhc2U7XHJcblxyXG5pbXBvcnQgeyB1c2VPYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgaW5kZXhTdG9yZSBmcm9tICcuLi9tb2R1bGVzL2luZGV4U3RvcmUnO1xyXG5pbXBvcnQgeyBtYXhXaWR0aCB9IGZyb20gJy4uL3N0eWxlL3N0eWxlJztcclxuXHJcbi8vIGludGVyZmFjZSBJTWFpbkNvbnRhaW5lciB7XHJcbi8vICAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxuLy8gICAgIHpJbmRleDogbnVtYmVyO1xyXG4vLyB9XHJcblxyXG5jb25zdCBNYWluQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gKDEwMHZ3IC0gMTAwJSkpO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvLyBjdXJzb3I6IHBvaW50ZXI7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSVN1YkNvbnRhaW5lciB7XHJcbiAgICBpc1JlYWNoOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBTdWJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAoMTAwdncgLSAxMDAlKSk7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIHBvc2l0aW9uOiAkeyhwcm9wczogSVN1YkNvbnRhaW5lcikgPT4gKHByb3BzLmlzUmVhY2ggPyAnc3RhdGljJyA6ICdmaXhlZCcpfTtcclxuICAgIHRvcDogJHsocHJvcHM6IElTdWJDb250YWluZXIpID0+IChwcm9wcy5pc1JlYWNoID8gJycgOiAwKX07XHJcbmA7XHJcblxyXG4vLyBjb25zdCBDb21wb25lbnRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4vLyAgICAgbWF4LXdpZHRoOiAke21heFdpZHRofXB4O1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICBtYXJnaW46IDAgYXV0bztcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgVGl0bGVTZWN0aW9uID0gc3R5bGVkLmRpdmBcclxuLy8gICAgIHBhZGRpbmc6IDM4cHggMCA2NnB4IDA7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAzMnB4O1xyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgQ29tcG9uZW50U2VjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vIGA7XHJcblxyXG4vLyBjb25zdCBNYWluVGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbi8vICAgICBmb250LXNpemU6IGNhbGMoNDhweCArIDAuOXZ3KTtcclxuLy8gICAgIHRleHQtc2hhZG93OiAzLjVweCAzLjVweCAjZmZmO1xyXG4vLyAgICAgZm9udC1mYW1pbHk6ICdCdW5nZWUnLCBjdXJzaXZlO1xyXG4vLyBgO1xyXG5cclxuY29uc3QgbXlLZXlmcmFtZXMgPSBrZXlmcmFtZXNgXHJcbiAgICA1MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdG9wOiAtMTAwdmg7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IFRlc3REaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gKDEwMHZ3IC0gMTAwJSkpO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogY2FsYygxMDB2aCAtIDI1MHB4KTtcclxuICAgIGxlZnQ6IGNhbGMoMTAwdncgLSAoMTAwdncgLSAxMDAlKSAtIDQ1MHB4KTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC02MGRlZyk7XHJcbiAgICB6LWluZGV4OiAyMDA7XHJcblxyXG4gICAgYW5pbWF0aW9uLW5hbWU6ICR7bXlLZXlmcmFtZXN9O1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMHM7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuYDtcclxuXHJcbmludGVyZmFjZSBJQmFzZSB7XHJcbiAgICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG4gICAgY29udGFpbmVyTm86IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgQmFzZTogUmVhY3QuRkM8SUJhc2U+ID0gKHsgY2hpbGRyZW4sIGNvbnRhaW5lck5vIH0pOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICAvLyBtb2J4XHJcbiAgICBjb25zdCB7IGJhc2VTdG9yZSB9ID0gaW5kZXhTdG9yZSgpO1xyXG5cclxuICAgIC8vIHN0YXRlXHJcbiAgICBjb25zdCBbaXNSZWFjaCwgc2V0SXNSZWFjaF0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gICAgLy8gcmVmXHJcbiAgICBjb25zdCBtYWluQ29udGFpbmVyUmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG4gICAgY29uc3Qgc3ViQ29udGFpbmVyUmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG5cclxuICAgIC8vIHZhcmlhYmxlXHJcbiAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3JBcnJheSA9IFsnIzc1NzI3MCcsICcjQTVCQUE4JywgJyM2QTkxOTQnLCAnI2I3OWU2YScsICcjYzY4Mzc3JywgJyNmZmYnXTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvbkNoYW5nZVNjcm9sbCk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uQ2hhbmdlUmVzaXplKTtcclxuXHJcbiAgICAgICAgb25DaGFuZ2VTY3JvbGwoKTtcclxuICAgICAgICBvbkNoYW5nZVJlc2l6ZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25DaGFuZ2VTY3JvbGwpO1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25DaGFuZ2VSZXNpemUpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAobWFpbkNvbnRhaW5lclJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIG1haW5Db250YWluZXJSZWYuY3VycmVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgYmFzZVN0b3JlLnRpdGxlQXJyYXlbY29udGFpbmVyTm9dKTtcclxuICAgICAgICAgICAgYmFzZVN0b3JlLnNldENvbXBvbmVudEhlaWdodChjb250YWluZXJObywgc3ViQ29udGFpbmVyUmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLy8gb25DaGFuZ2VcclxuICAgIGNvbnN0IG9uQ2hhbmdlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChtYWluQ29udGFpbmVyUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgaWYgKG1haW5Db250YWluZXJSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgc2V0SXNSZWFjaChmYWxzZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRJc1JlYWNoKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZVJlc2l6ZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAobWFpbkNvbnRhaW5lclJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGlmIChtYWluQ29udGFpbmVyUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wID49IDEpIHtcclxuICAgICAgICAgICAgICAgIHNldElzUmVhY2goZmFsc2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0SXNSZWFjaCh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gb25DbGlja1xyXG4gICAgY29uc3Qgb25DbGlja01haW5Db250YWluZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbEJ5KHtcclxuICAgICAgICAgICAgdG9wOiBiYXNlU3RvcmUuZ2V0QWNjdW11bGF0ZUNvbXBvbmVudEhlaWdodChjb250YWluZXJObykgLSBiYXNlU3RvcmUuc2Nyb2xsWSxcclxuICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdXNlT2JzZXJ2ZXIoKCkgPT4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxNYWluQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPFN1YkNvbnRhaW5lciBpc1JlYWNoPXtpc1JlYWNofT48L1N1YkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9NYWluQ29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc0MDBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzQwMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogJzEyMDBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogJzgwMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmVkJyxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFzZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==