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
        style: {
          position: 'absolute',
          width: '400px',
          height: '400px',
          left: 0,
          top: 0,
          backgroundColor: 'red'
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2Jhc2UudHN4Il0sIm5hbWVzIjpbIk1haW5Db250YWluZXIiLCJzdHlsZWQiLCJTdWJDb250YWluZXIiLCJwcm9wcyIsImlzUmVhY2giLCJteUtleWZyYW1lcyIsImtleWZyYW1lcyIsIlRlc3REaXYiLCJCYXNlIiwiY2hpbGRyZW4iLCJjb250YWluZXJObyIsImluZGV4U3RvcmUiLCJiYXNlU3RvcmUiLCJSZWFjdCIsInNldElzUmVhY2giLCJtYWluQ29udGFpbmVyUmVmIiwic3ViQ29udGFpbmVyUmVmIiwiYmFja2dyb3VuZENvbG9yQXJyYXkiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwib25DaGFuZ2VTY3JvbGwiLCJvbkNoYW5nZVJlc2l6ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjdXJyZW50Iiwic2V0QXR0cmlidXRlIiwidGl0bGVBcnJheSIsInNldENvbXBvbmVudEhlaWdodCIsImNsaWVudEhlaWdodCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsIm9uQ2xpY2tNYWluQ29udGFpbmVyIiwic2Nyb2xsQnkiLCJnZXRBY2N1bXVsYXRlQ29tcG9uZW50SGVpZ2h0Iiwic2Nyb2xsWSIsImJlaGF2aW9yIiwidXNlT2JzZXJ2ZXIiLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwibGVmdCIsImJhY2tncm91bmRDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsOEVBQW5CO0tBQU1ELGE7QUFXTixJQUFNRSxZQUFZLEdBQUdELHFFQUFIO0FBQUE7QUFBQTtBQUFBLG9IQU1GLFVBQUNFLEtBQUQ7QUFBQSxTQUEyQkEsS0FBSyxDQUFDQyxPQUFOLEdBQWdCLFFBQWhCLEdBQTJC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VjtBQUNIO0FBQ0o7QUFDSixHQVJELENBN0NzRSxDQXVEdEU7OztBQUNBLE1BQU1nQixvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLEdBQU07QUFDL0JaLFVBQU0sQ0FBQ2EsUUFBUCxDQUFnQjtBQUNaRixTQUFHLEVBQUVqQixTQUFTLENBQUNvQiw0QkFBVixDQUF1Q3RCLFdBQXZDLElBQXNERSxTQUFTLENBQUNxQixPQUR6RDtBQUVaQyxjQUFRLEVBQUU7QUFGRSxLQUFoQjtBQUlILEdBTEQ7O0FBT0EsU0FBT0MsdURBQVcsQ0FBQztBQUFBLHdCQUNmO0FBQUEsOEJBQ0ksOERBQUMsYUFBRDtBQUFBLCtCQUNJLDhEQUFDLFlBQUQ7QUFBYyxpQkFBTyxFQUFFL0I7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUtJO0FBQ0ksYUFBSyxFQUFFO0FBQ0hnQyxrQkFBUSxFQUFFLFVBRFA7QUFFSEMsZUFBSyxFQUFFLE9BRko7QUFHSEMsZ0JBQU0sRUFBRSxPQUhMO0FBSUhDLGNBQUksRUFBRSxDQUpIO0FBS0hWLGFBQUcsRUFBRSxDQUxGO0FBTUhXLHlCQUFlLEVBQUU7QUFOZDtBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMSjtBQUFBLG9CQURlO0FBQUEsR0FBRCxDQUFsQjtBQWtCSCxDQWpGRDs7R0FBTWhDLEk7VUErREsyQixtRDs7O01BL0RMM0IsSTtBQW1GTiwrREFBZUEsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44NjUxZjkzMTU1ZjMyMjFkNzUyYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuLy8gaW1wb3J0IHsgbWF4V2lkdGggfSBmcm9tICcuLi9zdHlsZS9zdHlsZSc7XHJcblxyXG4vLyBjb25zdCBTdHlsZWRTZWN0aW9uMSA9IHN0eWxlZC5zZWN0aW9uYGA7XHJcblxyXG4vLyBpbnRlcmZhY2UgSVN0eWxlZERpdjIge1xyXG4vLyAgICAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IFN0eWxlZERpdjIgPSBzdHlsZWQuZGl2YFxyXG4vLyAgICAgbWF4LXdpZHRoOiAke21heFdpZHRofXB4O1xyXG4vLyAgICAgbWFyZ2luOiAwIGF1dG87XHJcbi8vICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wczogSVN0eWxlZERpdjIpID0+IHByb3BzLmJhY2tncm91bmRDb2xvcn07XHJcblxyXG4vLyAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHttYXhXaWR0aCArIDUwfXB4KSB7XHJcbi8vICAgICAgICAgbWFyZ2luLWJvdHRvbTogODRweDtcclxuLy8gICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxOHB4O1xyXG4vLyAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxOHB4O1xyXG4vLyAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE4cHg7XHJcbi8vICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE4cHg7XHJcbi8vICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAxMnB4ICR7KHByb3BzOiBJU3R5bGVkRGl2MikgPT4gcHJvcHMuYmFja2dyb3VuZENvbG9yfTtcclxuLy8gICAgIH1cclxuLy8gYDtcclxuXHJcbi8vIGludGVyZmFjZSBJU3R5bGVkRGl2MyB7XHJcbi8vICAgICB0aXRsZTogc3RyaW5nO1xyXG4vLyAgICAgc2hvd1RpdGxlOiBib29sZWFuO1xyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBTdHlsZWREaXYzID0gc3R5bGVkLmRpdmBcclxuLy8gICAgICR7KHByb3BzOiBJU3R5bGVkRGl2MykgPT4ge1xyXG4vLyAgICAgICAgIGlmIChwcm9wcy50aXRsZSkge1xyXG4vLyAgICAgICAgICAgICBpZiAocHJvcHMuc2hvd1RpdGxlKSB7XHJcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gYFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGRpc3BhbHk6IGJsb2NrO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4vLyAgICAgICAgICAgICAgICAgYDtcclxuLy8gICAgICAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgICAgICAgIHJldHVybiBgXHJcbi8vICAgICAgICAgICAgICAgICAgICAgZGlzcGFseTogYmxvY2s7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDYwcHgpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbi8vICAgICAgICAgICAgICAgICBgO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgICAgcmV0dXJuIGBcclxuLy8gICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbi8vICAgICAgICAgICAgIGA7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfX1cclxuXHJcbi8vICAgICBkaXNwbGF5OiAkeyhwcm9wczogSVN0eWxlZERpdjMpID0+IChwcm9wcy50aXRsZSA/ICdibG9jaycgOiAnbm9uZScpfTtcclxuLy8gICAgIHBhZGRpbmc6IDI0cHggMDtcclxuLy8gICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDEuOHM7XHJcbi8vICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbi8vIGA7XHJcblxyXG4vLyBjb25zdCBTdHlsZWRUaXRsZSA9IHN0eWxlZC5zcGFuYFxyXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vICAgICBmb250LXNpemU6IDIuNGVtO1xyXG4vLyBgO1xyXG5cclxuLy8gaW50ZXJmYWNlIElCYXNlQ29tcG9uZW50IHtcclxuLy8gICAgIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbi8vICAgICB0aXRsZTogc3RyaW5nO1xyXG4vLyAgICAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IEJhc2U6IFJlYWN0LkZDPElCYXNlQ29tcG9uZW50PiA9ICh7IGNoaWxkcmVuLCB0aXRsZSwgYmFja2dyb3VuZENvbG9yIH0pOiBKU1guRWxlbWVudCA9PiB7XHJcbi8vICAgICAvLyBzdGF0ZVxyXG4vLyAgICAgY29uc3QgW3Nob3dUaXRsZSwgc2V0U2hvd1RpdGxlXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuLy8gICAgIGNvbnN0IFtpc0NsaWNrLCBzZXRJc0NsaWNrXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuLy8gICAgIGNvbnN0IFtzYXZlUG9zaXRpb24sIHNldFNhdmVQb3NpdGlvbl0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KDApO1xyXG5cclxuLy8gICAgIC8vIHJlZlxyXG4vLyAgICAgY29uc3QgZGl2MVJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuLy8gICAgIGNvbnN0IGRpdjJSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KCk7XHJcblxyXG4vLyAgICAgLy8gdmFyaWFibGVcclxuLy8gICAgIGxldCBpc0NsaWNrVmFyaWFibGUgPSBmYWxzZTtcclxuXHJcbi8vICAgICAvLyB1c2VFZmZlY3RcclxuLy8gICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbi8vICAgICAgICAgc2Nyb2xsVGl0bGUoKTtcclxuLy8gICAgICAgICByZXNpemVTZWN0aW9uMSgpO1xyXG5cclxuLy8gICAgICAgICBpZiAoZGl2MVJlZi5jdXJyZW50KSB7XHJcbi8vICAgICAgICAgICAgIGRpdjFSZWYuY3VycmVudC5pZCA9IHRpdGxlO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH0sIFtdKTtcclxuXHJcbi8vICAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgICAgICAgIGlzQ2xpY2tWYXJpYWJsZSA9IGZhbHNlO1xyXG4vLyAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxUaXRsZSk7XHJcblxyXG4vLyAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbi8vICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxUaXRsZSk7XHJcbi8vICAgICAgICAgfTtcclxuLy8gICAgIH0sIFtpc0NsaWNrXSk7XHJcblxyXG4vLyAgICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuLy8gICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplU2VjdGlvbjEpO1xyXG5cclxuLy8gICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4vLyAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplU2VjdGlvbjEpO1xyXG4vLyAgICAgICAgIH07XHJcbi8vICAgICB9LCBbaXNDbGlja10pO1xyXG5cclxuLy8gICAgIC8vIG9uQ2xpY2tcclxuLy8gICAgIGNvbnN0IG9uQ2xpY2tEaXYyID0gKCkgPT4ge1xyXG4vLyAgICAgICAgIGlmIChkaXYxUmVmLmN1cnJlbnQpIHtcclxuLy8gICAgICAgICAgICAgaWYgKGlzQ2xpY2spIHtcclxuLy8gICAgICAgICAgICAgICAgIGRpdjFSZWYuY3VycmVudC5zdHlsZS50cmFuc2l0aW9uID0gJyc7XHJcbi8vICAgICAgICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gJyc7XHJcbi8vICAgICAgICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuc3R5bGUubWFyZ2luID0gJyc7XHJcbi8vICAgICAgICAgICAgICAgICBzZXRJc0NsaWNrKGZhbHNlKTtcclxuLy8gICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBzYXZlUG9zaXRpb24pO1xyXG4vLyAgICAgICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZOyAvLyDtmITsnqwg7Iqk7YGs66GkIOuGkuydtFxyXG4vLyAgICAgICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBkaXYxUmVmLmN1cnJlbnQgJiYgZGl2MVJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDsgLy8gZGl27J2YIHRvcOyXkCDrj4Tri6ztlaAg65aE6rmM7KeAIOuCqOydgCDqsbDrpqxcclxuLy8gICAgICAgICAgICAgICAgIGNvbnN0IGdhYlkgPSAod2luZG93LmlubmVySGVpZ2h0IC0gKGRpdjFSZWYuY3VycmVudCAmJiBkaXYxUmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0KSkgLyAyOyAvLyAo7ZmU66m0IOuGkuydtCAtIGRpdiDrhpLsnbQpIC8gMlxyXG4vLyAgICAgICAgICAgICAgICAgY29uc3QgZ2FiWCA9ICh3aW5kb3cuaW5uZXJXaWR0aCAtIChkaXYyUmVmLmN1cnJlbnQgJiYgZGl2MlJlZi5jdXJyZW50LmNsaWVudFdpZHRoKSkgLyAyOyAvLyAo7ZmU66m0IOuEiOu5hCAtIGRpdiDrhIjruYQpIC8gMlxyXG5cclxuLy8gICAgICAgICAgICAgICAgIGlmIChnYWJZID4gMCAmJiBnYWJYID4gMCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+PSBtYXhXaWR0aCArIDUwKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgc2V0U2F2ZVBvc2l0aW9uKHNjcm9sbFkgKyBkaXN0YW5jZSAtIGdhYlkpOyAvLyDspJHslZkg7JyE7LmYXHJcbi8vICAgICAgICAgICAgICAgICAgICAgaWYgKGdhYlkgPiA4NCkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgc2Nyb2xsWSArIGRpc3RhbmNlIC0gZ2FiWSArIChnYWJZIC0gODQpKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgc2Nyb2xsWSArIGRpc3RhbmNlIC0gZ2FiWSk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgICAgICAgICAgICBjb25zdCBibGFua1kgPSAxICsgKGdhYlkgLyAoZGl2MlJlZi5jdXJyZW50ICYmIGRpdjJSZWYuY3VycmVudC5jbGllbnRIZWlnaHQpKSAqIDI7IC8vIChkaXYg7Jes67mEIOuGkuydtCAvIGRpdiDrhpLsnbQpICogMlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJsYW5rWCA9IDEgKyAoZ2FiWCAvIChkaXYyUmVmLmN1cnJlbnQgJiYgZGl2MlJlZi5jdXJyZW50LmNsaWVudFdpZHRoKSkgKiAyOyAvLyAoZGl2IOyXrOu5hCDrhIjruYQgLyBkaXYg64SI67mEKSAqIDJcclxuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgZGl2MVJlZi5jdXJyZW50LnN0eWxlLnRyYW5zaXRpb24gPSAnMXMnO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGRpdjFSZWYuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoJHtNYXRoLm1pbihibGFua1ksIGJsYW5rWCl9KWA7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgZGl2MVJlZi5jdXJyZW50LnN0eWxlLm1hcmdpbiA9IGAke2dhYll9cHggMGA7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgc2V0SXNDbGljayh0cnVlKTtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH07XHJcblxyXG4vLyAgICAgLy8gbm9ybWFsXHJcbi8vICAgICBjb25zdCByZXNpemVTZWN0aW9uMSA9ICgpID0+IHtcclxuLy8gICAgICAgICBjb25zdCBnYWJZID0gKHdpbmRvdy5pbm5lckhlaWdodCAtIChkaXYxUmVmLmN1cnJlbnQgJiYgZGl2MVJlZi5jdXJyZW50LmNsaWVudEhlaWdodCkpIC8gMjsgLy8gKO2ZlOuptCDrhpLsnbQgLSBkaXYg64aS7J20KSAvIDJcclxuLy8gICAgICAgICBjb25zdCBnYWJYID0gKHdpbmRvdy5pbm5lcldpZHRoIC0gKGRpdjJSZWYuY3VycmVudCAmJiBkaXYyUmVmLmN1cnJlbnQuY2xpZW50V2lkdGgpKSAvIDI7IC8vICjtmZTrqbQg64SI67mEIC0gZGl2IOuEiOu5hCkgLyAyXHJcblxyXG4vLyAgICAgICAgIGlmIChpc0NsaWNrKSB7XHJcbi8vICAgICAgICAgICAgIGlmIChnYWJZID4gMCAmJiBnYWJYID4gMCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+PSBtYXhXaWR0aCArIDUwKSB7XHJcbi8vICAgICAgICAgICAgICAgICBjb25zdCBibGFua1kgPSAxICsgKGdhYlkgLyAoZGl2MlJlZi5jdXJyZW50ICYmIGRpdjJSZWYuY3VycmVudC5jbGllbnRIZWlnaHQpKSAqIDI7IC8vIChkaXYg7Jes67mEIOuGkuydtCAvIGRpdiDrhpLsnbQpICogMlxyXG4vLyAgICAgICAgICAgICAgICAgY29uc3QgYmxhbmtYID0gMSArIChnYWJYIC8gKGRpdjJSZWYuY3VycmVudCAmJiBkaXYyUmVmLmN1cnJlbnQuY2xpZW50V2lkdGgpKSAqIDI7IC8vIChkaXYg7Jes67mEIOuEiOu5hCAvIGRpdiDrhIjruYQpICogMlxyXG5cclxuLy8gICAgICAgICAgICAgICAgIGRpdjFSZWYuY3VycmVudC5zdHlsZS50cmFuc2l0aW9uID0gJyc7XHJcbi8vICAgICAgICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlKCR7TWF0aC5taW4oYmxhbmtZLCBibGFua1gpfSlgO1xyXG4vLyAgICAgICAgICAgICAgICAgZGl2MVJlZi5jdXJyZW50LnN0eWxlLm1hcmdpbiA9IGAke2dhYll9cHggMGA7XHJcbi8vICAgICAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xyXG4vLyAgICAgICAgICAgICAgICAgZGl2MVJlZi5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xyXG4vLyAgICAgICAgICAgICAgICAgZGl2MVJlZi5jdXJyZW50LnN0eWxlLm1hcmdpbiA9ICcnO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICBpZiAoZGl2MlJlZi5jdXJyZW50KSB7XHJcbi8vICAgICAgICAgICAgIGlmIChnYWJZID4gMCAmJiBnYWJYID4gMCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+PSBtYXhXaWR0aCArIDUwKSB7XHJcbi8vICAgICAgICAgICAgICAgICBkaXYyUmVmLmN1cnJlbnQuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4vLyAgICAgICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgICAgICAgZGl2MlJlZi5jdXJyZW50LnN0eWxlLmN1cnNvciA9ICcnO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfTtcclxuXHJcbi8vICAgICBjb25zdCBzY3JvbGxUaXRsZSA9ICgpID0+IHtcclxuLy8gICAgICAgICBpZiAoZGl2MVJlZi5jdXJyZW50KSB7XHJcbi8vICAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJIZWlnaHQgPj0gZGl2MVJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIDQ4KSB7XHJcbi8vICAgICAgICAgICAgICAgICBzZXRTaG93VGl0bGUodHJ1ZSk7XHJcbi8vICAgICAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgICAgICBzZXRTaG93VGl0bGUoZmFsc2UpO1xyXG4vLyAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICBpZiAoaXNDbGlja1ZhcmlhYmxlKSB7XHJcbi8vICAgICAgICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xyXG4vLyAgICAgICAgICAgICAgICAgZGl2MVJlZi5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xyXG4vLyAgICAgICAgICAgICAgICAgZGl2MVJlZi5jdXJyZW50LnN0eWxlLm1hcmdpbiA9ICcnO1xyXG4vLyAgICAgICAgICAgICAgICAgc2V0SXNDbGljayhmYWxzZSk7XHJcbi8vICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgIGlmIChpc0NsaWNrKSB7XHJcbi8vICAgICAgICAgICAgICAgICBpc0NsaWNrVmFyaWFibGUgPSB0cnVlO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfTtcclxuXHJcbi8vICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgIDw+XHJcbi8vICAgICAgICAgICAgIDxTdHlsZWRTZWN0aW9uMSByZWY9e2RpdjFSZWZ9PlxyXG4vLyAgICAgICAgICAgICAgICAgPFN0eWxlZERpdjIgYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3J9IHJlZj17ZGl2MlJlZn0gb25DbGljaz17b25DbGlja0RpdjJ9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXYzIHRpdGxlPXt0aXRsZX0gc2hvd1RpdGxlPXtzaG93VGl0bGV9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkVGl0bGU+IyB7dGl0bGV9PC9TdHlsZWRUaXRsZT5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZERpdjM+XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuLy8gICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2Mj5cclxuLy8gICAgICAgICAgICAgPC9TdHlsZWRTZWN0aW9uMT5cclxuLy8gICAgICAgICA8Lz5cclxuLy8gICAgICk7XHJcbi8vIH07XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBCYXNlO1xyXG5cclxuaW1wb3J0IHsgdXNlT2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IGluZGV4U3RvcmUgZnJvbSAnLi4vbW9kdWxlcy9pbmRleFN0b3JlJztcclxuaW1wb3J0IHsgbWF4V2lkdGggfSBmcm9tICcuLi9zdHlsZS9zdHlsZSc7XHJcblxyXG4vLyBpbnRlcmZhY2UgSU1haW5Db250YWluZXIge1xyXG4vLyAgICAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XHJcbi8vICAgICB6SW5kZXg6IG51bWJlcjtcclxuLy8gfVxyXG5cclxuY29uc3QgTWFpbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtICgxMDB2dyAtIDEwMCUpKTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLy8gY3Vyc29yOiBwb2ludGVyO1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElTdWJDb250YWluZXIge1xyXG4gICAgaXNSZWFjaDogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgU3ViQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gKDEwMHZ3IC0gMTAwJSkpO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBwb3NpdGlvbjogJHsocHJvcHM6IElTdWJDb250YWluZXIpID0+IChwcm9wcy5pc1JlYWNoID8gJ3N0YXRpYycgOiAnZml4ZWQnKX07XHJcbiAgICB0b3A6ICR7KHByb3BzOiBJU3ViQ29udGFpbmVyKSA9PiAocHJvcHMuaXNSZWFjaCA/ICcnIDogMCl9O1xyXG5gO1xyXG5cclxuLy8gY29uc3QgQ29tcG9uZW50Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuLy8gICAgIG1heC13aWR0aDogJHttYXhXaWR0aH1weDtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgbWFyZ2luOiAwIGF1dG87XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuLy8gYDtcclxuXHJcbi8vIGNvbnN0IFRpdGxlU2VjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbi8vICAgICBwYWRkaW5nOiAzOHB4IDAgNjZweCAwO1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMzJweDtcclxuLy8gYDtcclxuXHJcbi8vIGNvbnN0IENvbXBvbmVudFNlY3Rpb24gPSBzdHlsZWQuZGl2YFxyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgTWFpblRpdGxlID0gc3R5bGVkLnNwYW5gXHJcbi8vICAgICBmb250LXdlaWdodDogNjAwO1xyXG4vLyAgICAgZm9udC1zaXplOiBjYWxjKDQ4cHggKyAwLjl2dyk7XHJcbi8vICAgICB0ZXh0LXNoYWRvdzogMy41cHggMy41cHggI2ZmZjtcclxuLy8gICAgIGZvbnQtZmFtaWx5OiAnQnVuZ2VlJywgY3Vyc2l2ZTtcclxuLy8gYDtcclxuXHJcbmNvbnN0IG15S2V5ZnJhbWVzID0ga2V5ZnJhbWVzYFxyXG4gICAgNTAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRvcDogLTEwMHZoO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBUZXN0RGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtICgxMDB2dyAtIDEwMCUpKTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IGNhbGMoMTAwdmggLSAyNTBweCk7XHJcbiAgICBsZWZ0OiBjYWxjKDEwMHZ3IC0gKDEwMHZ3IC0gMTAwJSkgLSA0NTBweCk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNjBkZWcpO1xyXG4gICAgei1pbmRleDogMjAwO1xyXG5cclxuICAgIGFuaW1hdGlvbi1uYW1lOiAke215S2V5ZnJhbWVzfTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTBzO1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSUJhc2Uge1xyXG4gICAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxuICAgIGNvbnRhaW5lck5vOiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IEJhc2U6IFJlYWN0LkZDPElCYXNlPiA9ICh7IGNoaWxkcmVuLCBjb250YWluZXJObyB9KTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgLy8gbW9ieFxyXG4gICAgY29uc3QgeyBiYXNlU3RvcmUgfSA9IGluZGV4U3RvcmUoKTtcclxuXHJcbiAgICAvLyBzdGF0ZVxyXG4gICAgY29uc3QgW2lzUmVhY2gsIHNldElzUmVhY2hdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICAgIC8vIHJlZlxyXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lclJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuICAgIGNvbnN0IHN1YkNvbnRhaW5lclJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuXHJcbiAgICAvLyB2YXJpYWJsZVxyXG4gICAgY29uc3QgYmFja2dyb3VuZENvbG9yQXJyYXkgPSBbJyM3NTcyNzAnLCAnI0E1QkFBOCcsICcjNkE5MTk0JywgJyNiNzllNmEnLCAnI2M2ODM3NycsICcjZmZmJ107XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25DaGFuZ2VTY3JvbGwpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvbkNoYW5nZVJlc2l6ZSk7XHJcblxyXG4gICAgICAgIG9uQ2hhbmdlU2Nyb2xsKCk7XHJcbiAgICAgICAgb25DaGFuZ2VSZXNpemUoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uQ2hhbmdlU2Nyb2xsKTtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uQ2hhbmdlUmVzaXplKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKG1haW5Db250YWluZXJSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICBtYWluQ29udGFpbmVyUmVmLmN1cnJlbnQuc2V0QXR0cmlidXRlKCdpZCcsIGJhc2VTdG9yZS50aXRsZUFycmF5W2NvbnRhaW5lck5vXSk7XHJcbiAgICAgICAgICAgIGJhc2VTdG9yZS5zZXRDb21wb25lbnRIZWlnaHQoY29udGFpbmVyTm8sIHN1YkNvbnRhaW5lclJlZi5jdXJyZW50LmNsaWVudEhlaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIC8vIG9uQ2hhbmdlXHJcbiAgICBjb25zdCBvbkNoYW5nZVNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgICBpZiAobWFpbkNvbnRhaW5lclJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGlmIChtYWluQ29udGFpbmVyUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wID49IDEpIHtcclxuICAgICAgICAgICAgICAgIHNldElzUmVhY2goZmFsc2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0SXNSZWFjaCh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VSZXNpemUgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKG1haW5Db250YWluZXJSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICBpZiAobWFpbkNvbnRhaW5lclJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRJc1JlYWNoKGZhbHNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldElzUmVhY2godHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIG9uQ2xpY2tcclxuICAgIGNvbnN0IG9uQ2xpY2tNYWluQ29udGFpbmVyID0gKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxCeSh7XHJcbiAgICAgICAgICAgIHRvcDogYmFzZVN0b3JlLmdldEFjY3VtdWxhdGVDb21wb25lbnRIZWlnaHQoY29udGFpbmVyTm8pIC0gYmFzZVN0b3JlLnNjcm9sbFksXHJcbiAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHVzZU9ic2VydmVyKCgpID0+IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TWFpbkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxTdWJDb250YWluZXIgaXNSZWFjaD17aXNSZWFjaH0+PC9TdWJDb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvTWFpbkNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc0MDBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNDAwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=