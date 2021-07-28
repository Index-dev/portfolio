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
var SharpTitle = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.span.withConfig({
  displayName: "base__SharpTitle",
  componentId: "sc-1ugehyd-6"
})(["font-weight:600;font-size:calc(52px + 0.8vw);box-shadow:2px 2px #000;"]);
_c7 = SharpTitle;

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
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SharpTitle, {
              children: "# "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 360,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainTitle, {
              children: baseStore.titleArray[containerNo]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 361,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 359,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ComponentSection, {
            children: children
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 365,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 355,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 354,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 9
    }, _this);
  });
};

_s(Base, "+q8eOoB6X9joMfsYo8vcTccdG7I=", false, function () {
  return [mobx_react__WEBPACK_IMPORTED_MODULE_6__.useObserver];
});

_c8 = Base;
/* harmony default export */ __webpack_exports__["default"] = (Base);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;

$RefreshReg$(_c, "MainContainer");
$RefreshReg$(_c2, "SubContainer");
$RefreshReg$(_c3, "ComponentContainer");
$RefreshReg$(_c4, "TitleSection");
$RefreshReg$(_c5, "ComponentSection");
$RefreshReg$(_c6, "MainTitle");
$RefreshReg$(_c7, "SharpTitle");
$RefreshReg$(_c8, "Base");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2Jhc2UudHN4Il0sIm5hbWVzIjpbIk1haW5Db250YWluZXIiLCJzdHlsZWQiLCJwcm9wcyIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsIlN1YkNvbnRhaW5lciIsImlzUmVhY2giLCJDb21wb25lbnRDb250YWluZXIiLCJtYXhXaWR0aCIsIlRpdGxlU2VjdGlvbiIsIkNvbXBvbmVudFNlY3Rpb24iLCJNYWluVGl0bGUiLCJTaGFycFRpdGxlIiwiQmFzZSIsImNoaWxkcmVuIiwiY29udGFpbmVyTm8iLCJpbmRleFN0b3JlIiwiYmFzZVN0b3JlIiwiUmVhY3QiLCJzZXRJc1JlYWNoIiwibWFpbkNvbnRhaW5lclJlZiIsImJhY2tncm91bmRDb2xvckFycmF5Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uQ2hhbmdlU2Nyb2xsIiwib25DaGFuZ2VSZXNpemUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY3VycmVudCIsInNldEF0dHJpYnV0ZSIsInRpdGxlQXJyYXkiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJvbkNsaWNrTWFpbkNvbnRhaW5lciIsInNjcm9sbEJ5IiwiYmVoYXZpb3IiLCJ1c2VPYnNlcnZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtB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QUFlQSxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFjZWMyZWQ5MmZjMGUwZTFjZGQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG4vLyBpbXBvcnQgeyBtYXhXaWR0aCB9IGZyb20gJy4uL3N0eWxlL3N0eWxlJztcclxuXHJcbi8vIGNvbnN0IFN0eWxlZFNlY3Rpb24xID0gc3R5bGVkLnNlY3Rpb25gYDtcclxuXHJcbi8vIGludGVyZmFjZSBJU3R5bGVkRGl2MiB7XHJcbi8vICAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxuLy8gfVxyXG5cclxuLy8gY29uc3QgU3R5bGVkRGl2MiA9IHN0eWxlZC5kaXZgXHJcbi8vICAgICBtYXgtd2lkdGg6ICR7bWF4V2lkdGh9cHg7XHJcbi8vICAgICBtYXJnaW46IDAgYXV0bztcclxuLy8gICAgIHBhZGRpbmc6IDAgMTVweDtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzOiBJU3R5bGVkRGl2MikgPT4gcHJvcHMuYmFja2dyb3VuZENvbG9yfTtcclxuXHJcbi8vICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke21heFdpZHRoICsgNTB9cHgpIHtcclxuLy8gICAgICAgICBtYXJnaW4tYm90dG9tOiA4NHB4O1xyXG4vLyAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE4cHg7XHJcbi8vICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE4cHg7XHJcbi8vICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMThweDtcclxuLy8gICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMThweDtcclxuLy8gICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDEycHggJHsocHJvcHM6IElTdHlsZWREaXYyKSA9PiBwcm9wcy5iYWNrZ3JvdW5kQ29sb3J9O1xyXG4vLyAgICAgfVxyXG4vLyBgO1xyXG5cclxuLy8gaW50ZXJmYWNlIElTdHlsZWREaXYzIHtcclxuLy8gICAgIHRpdGxlOiBzdHJpbmc7XHJcbi8vICAgICBzaG93VGl0bGU6IGJvb2xlYW47XHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IFN0eWxlZERpdjMgPSBzdHlsZWQuZGl2YFxyXG4vLyAgICAgJHsocHJvcHM6IElTdHlsZWREaXYzKSA9PiB7XHJcbi8vICAgICAgICAgaWYgKHByb3BzLnRpdGxlKSB7XHJcbi8vICAgICAgICAgICAgIGlmIChwcm9wcy5zaG93VGl0bGUpIHtcclxuLy8gICAgICAgICAgICAgICAgIHJldHVybiBgXHJcbi8vICAgICAgICAgICAgICAgICAgICAgZGlzcGFseTogYmxvY2s7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbi8vICAgICAgICAgICAgICAgICBgO1xyXG4vLyAgICAgICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIGBcclxuLy8gICAgICAgICAgICAgICAgICAgICBkaXNwYWx5OiBibG9jaztcclxuLy8gICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNjBweCk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuLy8gICAgICAgICAgICAgICAgIGA7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgICByZXR1cm4gYFxyXG4vLyAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuLy8gICAgICAgICAgICAgYDtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9fVxyXG5cclxuLy8gICAgIGRpc3BsYXk6ICR7KHByb3BzOiBJU3R5bGVkRGl2MykgPT4gKHByb3BzLnRpdGxlID8gJ2Jsb2NrJyA6ICdub25lJyl9O1xyXG4vLyAgICAgcGFkZGluZzogMjRweCAwO1xyXG4vLyAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMS44cztcclxuLy8gICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuLy8gYDtcclxuXHJcbi8vIGNvbnN0IFN0eWxlZFRpdGxlID0gc3R5bGVkLnNwYW5gXHJcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMi40ZW07XHJcbi8vIGA7XHJcblxyXG4vLyBpbnRlcmZhY2UgSUJhc2VDb21wb25lbnQge1xyXG4vLyAgICAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxuLy8gICAgIHRpdGxlOiBzdHJpbmc7XHJcbi8vICAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxuLy8gfVxyXG5cclxuLy8gY29uc3QgQmFzZTogUmVhY3QuRkM8SUJhc2VDb21wb25lbnQ+ID0gKHsgY2hpbGRyZW4sIHRpdGxlLCBiYWNrZ3JvdW5kQ29sb3IgfSk6IEpTWC5FbGVtZW50ID0+IHtcclxuLy8gICAgIC8vIHN0YXRlXHJcbi8vICAgICBjb25zdCBbc2hvd1RpdGxlLCBzZXRTaG93VGl0bGVdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4vLyAgICAgY29uc3QgW2lzQ2xpY2ssIHNldElzQ2xpY2tdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4vLyAgICAgY29uc3QgW3NhdmVQb3NpdGlvbiwgc2V0U2F2ZVBvc2l0aW9uXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oMCk7XHJcblxyXG4vLyAgICAgLy8gcmVmXHJcbi8vICAgICBjb25zdCBkaXYxUmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG4vLyAgICAgY29uc3QgZGl2MlJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuXHJcbi8vICAgICAvLyB2YXJpYWJsZVxyXG4vLyAgICAgbGV0IGlzQ2xpY2tWYXJpYWJsZSA9IGZhbHNlO1xyXG5cclxuLy8gICAgIC8vIHVzZUVmZmVjdFxyXG4vLyAgICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuLy8gICAgICAgICBzY3JvbGxUaXRsZSgpO1xyXG4vLyAgICAgICAgIHJlc2l6ZVNlY3Rpb24xKCk7XHJcblxyXG4vLyAgICAgICAgIGlmIChkaXYxUmVmLmN1cnJlbnQpIHtcclxuLy8gICAgICAgICAgICAgZGl2MVJlZi5jdXJyZW50LmlkID0gdGl0bGU7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfSwgW10pO1xyXG5cclxuLy8gICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbi8vICAgICAgICAgaXNDbGlja1ZhcmlhYmxlID0gZmFsc2U7XHJcbi8vICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbFRpdGxlKTtcclxuXHJcbi8vICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuLy8gICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbFRpdGxlKTtcclxuLy8gICAgICAgICB9O1xyXG4vLyAgICAgfSwgW2lzQ2xpY2tdKTtcclxuXHJcbi8vICAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVTZWN0aW9uMSk7XHJcblxyXG4vLyAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbi8vICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVTZWN0aW9uMSk7XHJcbi8vICAgICAgICAgfTtcclxuLy8gICAgIH0sIFtpc0NsaWNrXSk7XHJcblxyXG4vLyAgICAgLy8gb25DbGlja1xyXG4vLyAgICAgY29uc3Qgb25DbGlja0RpdjIgPSAoKSA9PiB7XHJcbi8vICAgICAgICAgaWYgKGRpdjFSZWYuY3VycmVudCkge1xyXG4vLyAgICAgICAgICAgICBpZiAoaXNDbGljaykge1xyXG4vLyAgICAgICAgICAgICAgICAgZGl2MVJlZi5jdXJyZW50LnN0eWxlLnRyYW5zaXRpb24gPSAnJztcclxuLy8gICAgICAgICAgICAgICAgIGRpdjFSZWYuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSAnJztcclxuLy8gICAgICAgICAgICAgICAgIGRpdjFSZWYuY3VycmVudC5zdHlsZS5tYXJnaW4gPSAnJztcclxuLy8gICAgICAgICAgICAgICAgIHNldElzQ2xpY2soZmFsc2UpO1xyXG4vLyAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHNhdmVQb3NpdGlvbik7XHJcbi8vICAgICAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxZID0gd2luZG93LnNjcm9sbFk7IC8vIO2YhOyerCDsiqTtgazroaQg64aS7J20XHJcbi8vICAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IGRpdjFSZWYuY3VycmVudCAmJiBkaXYxUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wOyAvLyBkaXbsnZggdG9w7JeQIOuPhOuLrO2VoCDrloTquYzsp4Ag64Ko7J2AIOqxsOumrFxyXG4vLyAgICAgICAgICAgICAgICAgY29uc3QgZ2FiWSA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLSAoZGl2MVJlZi5jdXJyZW50ICYmIGRpdjFSZWYuY3VycmVudC5jbGllbnRIZWlnaHQpKSAvIDI7IC8vICjtmZTrqbQg64aS7J20IC0gZGl2IOuGkuydtCkgLyAyXHJcbi8vICAgICAgICAgICAgICAgICBjb25zdCBnYWJYID0gKHdpbmRvdy5pbm5lcldpZHRoIC0gKGRpdjJSZWYuY3VycmVudCAmJiBkaXYyUmVmLmN1cnJlbnQuY2xpZW50V2lkdGgpKSAvIDI7IC8vICjtmZTrqbQg64SI67mEIC0gZGl2IOuEiOu5hCkgLyAyXHJcblxyXG4vLyAgICAgICAgICAgICAgICAgaWYgKGdhYlkgPiAwICYmIGdhYlggPiAwICYmIHdpbmRvdy5pbm5lcldpZHRoID49IG1heFdpZHRoICsgNTApIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBzZXRTYXZlUG9zaXRpb24oc2Nyb2xsWSArIGRpc3RhbmNlIC0gZ2FiWSk7IC8vIOykkeyVmSDsnITsuZhcclxuLy8gICAgICAgICAgICAgICAgICAgICBpZiAoZ2FiWSA+IDg0KSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBzY3JvbGxZICsgZGlzdGFuY2UgLSBnYWJZICsgKGdhYlkgLSA4NCkpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBzY3JvbGxZICsgZGlzdGFuY2UgLSBnYWJZKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJsYW5rWSA9IDEgKyAoZ2FiWSAvIChkaXYyUmVmLmN1cnJlbnQgJiYgZGl2MlJlZi5jdXJyZW50LmNsaWVudEhlaWdodCkpICogMjsgLy8gKGRpdiDsl6zruYQg64aS7J20IC8gZGl2IOuGkuydtCkgKiAyXHJcbi8vICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmxhbmtYID0gMSArIChnYWJYIC8gKGRpdjJSZWYuY3VycmVudCAmJiBkaXYyUmVmLmN1cnJlbnQuY2xpZW50V2lkdGgpKSAqIDI7IC8vIChkaXYg7Jes67mEIOuEiOu5hCAvIGRpdiDrhIjruYQpICogMlxyXG5cclxuLy8gICAgICAgICAgICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNpdGlvbiA9ICcxcyc7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgZGl2MVJlZi5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZSgke01hdGgubWluKGJsYW5rWSwgYmxhbmtYKX0pYDtcclxuLy8gICAgICAgICAgICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuc3R5bGUubWFyZ2luID0gYCR7Z2FiWX1weCAwYDtcclxuLy8gICAgICAgICAgICAgICAgICAgICBzZXRJc0NsaWNrKHRydWUpO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfTtcclxuXHJcbi8vICAgICAvLyBub3JtYWxcclxuLy8gICAgIGNvbnN0IHJlc2l6ZVNlY3Rpb24xID0gKCkgPT4ge1xyXG4vLyAgICAgICAgIGNvbnN0IGdhYlkgPSAod2luZG93LmlubmVySGVpZ2h0IC0gKGRpdjFSZWYuY3VycmVudCAmJiBkaXYxUmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0KSkgLyAyOyAvLyAo7ZmU66m0IOuGkuydtCAtIGRpdiDrhpLsnbQpIC8gMlxyXG4vLyAgICAgICAgIGNvbnN0IGdhYlggPSAod2luZG93LmlubmVyV2lkdGggLSAoZGl2MlJlZi5jdXJyZW50ICYmIGRpdjJSZWYuY3VycmVudC5jbGllbnRXaWR0aCkpIC8gMjsgLy8gKO2ZlOuptCDrhIjruYQgLSBkaXYg64SI67mEKSAvIDJcclxuXHJcbi8vICAgICAgICAgaWYgKGlzQ2xpY2spIHtcclxuLy8gICAgICAgICAgICAgaWYgKGdhYlkgPiAwICYmIGdhYlggPiAwICYmIHdpbmRvdy5pbm5lcldpZHRoID49IG1heFdpZHRoICsgNTApIHtcclxuLy8gICAgICAgICAgICAgICAgIGNvbnN0IGJsYW5rWSA9IDEgKyAoZ2FiWSAvIChkaXYyUmVmLmN1cnJlbnQgJiYgZGl2MlJlZi5jdXJyZW50LmNsaWVudEhlaWdodCkpICogMjsgLy8gKGRpdiDsl6zruYQg64aS7J20IC8gZGl2IOuGkuydtCkgKiAyXHJcbi8vICAgICAgICAgICAgICAgICBjb25zdCBibGFua1ggPSAxICsgKGdhYlggLyAoZGl2MlJlZi5jdXJyZW50ICYmIGRpdjJSZWYuY3VycmVudC5jbGllbnRXaWR0aCkpICogMjsgLy8gKGRpdiDsl6zruYQg64SI67mEIC8gZGl2IOuEiOu5hCkgKiAyXHJcblxyXG4vLyAgICAgICAgICAgICAgICAgZGl2MVJlZi5jdXJyZW50LnN0eWxlLnRyYW5zaXRpb24gPSAnJztcclxuLy8gICAgICAgICAgICAgICAgIGRpdjFSZWYuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoJHtNYXRoLm1pbihibGFua1ksIGJsYW5rWCl9KWA7XHJcbi8vICAgICAgICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuc3R5bGUubWFyZ2luID0gYCR7Z2FiWX1weCAwYDtcclxuLy8gICAgICAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgICAgICAgIGRpdjFSZWYuY3VycmVudC5zdHlsZS50cmFuc2l0aW9uID0gJyc7XHJcbi8vICAgICAgICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gJyc7XHJcbi8vICAgICAgICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuc3R5bGUubWFyZ2luID0gJyc7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIGlmIChkaXYyUmVmLmN1cnJlbnQpIHtcclxuLy8gICAgICAgICAgICAgaWYgKGdhYlkgPiAwICYmIGdhYlggPiAwICYmIHdpbmRvdy5pbm5lcldpZHRoID49IG1heFdpZHRoICsgNTApIHtcclxuLy8gICAgICAgICAgICAgICAgIGRpdjJSZWYuY3VycmVudC5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcbi8vICAgICAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgICAgICBkaXYyUmVmLmN1cnJlbnQuc3R5bGUuY3Vyc29yID0gJyc7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9O1xyXG5cclxuLy8gICAgIGNvbnN0IHNjcm9sbFRpdGxlID0gKCkgPT4ge1xyXG4vLyAgICAgICAgIGlmIChkaXYxUmVmLmN1cnJlbnQpIHtcclxuLy8gICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lckhlaWdodCA+PSBkaXYxUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgNDgpIHtcclxuLy8gICAgICAgICAgICAgICAgIHNldFNob3dUaXRsZSh0cnVlKTtcclxuLy8gICAgICAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgICAgICAgIHNldFNob3dUaXRsZShmYWxzZSk7XHJcbi8vICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgIGlmIChpc0NsaWNrVmFyaWFibGUpIHtcclxuLy8gICAgICAgICAgICAgICAgIGRpdjFSZWYuY3VycmVudC5zdHlsZS50cmFuc2l0aW9uID0gJyc7XHJcbi8vICAgICAgICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gJyc7XHJcbi8vICAgICAgICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuc3R5bGUubWFyZ2luID0gJyc7XHJcbi8vICAgICAgICAgICAgICAgICBzZXRJc0NsaWNrKGZhbHNlKTtcclxuLy8gICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgICAgaWYgKGlzQ2xpY2spIHtcclxuLy8gICAgICAgICAgICAgICAgIGlzQ2xpY2tWYXJpYWJsZSA9IHRydWU7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9O1xyXG5cclxuLy8gICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgPD5cclxuLy8gICAgICAgICAgICAgPFN0eWxlZFNlY3Rpb24xIHJlZj17ZGl2MVJlZn0+XHJcbi8vICAgICAgICAgICAgICAgICA8U3R5bGVkRGl2MiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvcn0gcmVmPXtkaXYyUmVmfSBvbkNsaWNrPXtvbkNsaWNrRGl2Mn0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZERpdjMgdGl0bGU9e3RpdGxlfSBzaG93VGl0bGU9e3Nob3dUaXRsZX0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRUaXRsZT4jIHt0aXRsZX08L1N0eWxlZFRpdGxlPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2Mz5cclxuXHJcbi8vICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4vLyAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXYyPlxyXG4vLyAgICAgICAgICAgICA8L1N0eWxlZFNlY3Rpb24xPlxyXG4vLyAgICAgICAgIDwvPlxyXG4vLyAgICAgKTtcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IEJhc2U7XHJcblxyXG5pbXBvcnQgeyB1c2VPYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgaW5kZXhTdG9yZSBmcm9tICcuLi9tb2R1bGVzL2luZGV4U3RvcmUnO1xyXG5pbXBvcnQgeyBtYXhXaWR0aCB9IGZyb20gJy4uL3N0eWxlL3N0eWxlJztcclxuXHJcbmludGVyZmFjZSBJTWFpbkNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxuICAgIHpJbmRleDogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBNYWluQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gKDEwMHZ3IC0gMTAwJSkpO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHM6IElNYWluQ29udGFpbmVyKSA9PiBwcm9wcy5iYWNrZ3JvdW5kQ29sb3J9O1xyXG4gICAgei1pbmRleDogJHsocHJvcHM6IElNYWluQ29udGFpbmVyKSA9PiBwcm9wcy56SW5kZXh9O1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElTdWJDb250YWluZXIge1xyXG4gICAgaXNSZWFjaDogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgU3ViQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gKDEwMHZ3IC0gMTAwJSkpO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBwb3NpdGlvbjogJHsocHJvcHM6IElTdWJDb250YWluZXIpID0+IChwcm9wcy5pc1JlYWNoID8gJ3N0YXRpYycgOiAnZml4ZWQnKX07XHJcbiAgICB0b3A6ICR7KHByb3BzOiBJU3ViQ29udGFpbmVyKSA9PiAocHJvcHMuaXNSZWFjaCA/ICcnIDogMCl9O1xyXG5gO1xyXG5cclxuY29uc3QgQ29tcG9uZW50Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIG1heC13aWR0aDogJHttYXhXaWR0aH1weDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYDtcclxuXHJcbmNvbnN0IFRpdGxlU2VjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgICBwYWRkaW5nOiAzOHB4IDAgNjZweCAwO1xyXG4gICAgbWFyZ2luLXRvcDogMzJweDtcclxuYDtcclxuXHJcbmNvbnN0IENvbXBvbmVudFNlY3Rpb24gPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5gO1xyXG5cclxuY29uc3QgTWFpblRpdGxlID0gc3R5bGVkLnNwYW5gXHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiBjYWxjKDUycHggKyAwLjh2dyk7XHJcbmA7XHJcblxyXG5jb25zdCBTaGFycFRpdGxlID0gc3R5bGVkLnNwYW5gXHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiBjYWxjKDUycHggKyAwLjh2dyk7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4ICMwMDA7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSUJhc2Uge1xyXG4gICAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxuICAgIGNvbnRhaW5lck5vOiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IEJhc2U6IFJlYWN0LkZDPElCYXNlPiA9ICh7IGNoaWxkcmVuLCBjb250YWluZXJObyB9KTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgLy8gbW9ieFxyXG4gICAgY29uc3QgeyBiYXNlU3RvcmUgfSA9IGluZGV4U3RvcmUoKTtcclxuXHJcbiAgICAvLyBzdGF0ZVxyXG4gICAgY29uc3QgW2lzUmVhY2gsIHNldElzUmVhY2hdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICAgIC8vIHJlZlxyXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lclJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuXHJcbiAgICAvLyB2YXJpYWJsZVxyXG4gICAgY29uc3QgYmFja2dyb3VuZENvbG9yQXJyYXkgPSBbJyM3NTcyNzAnLCAnI0E1QkFBOCcsICcjNkE5MTk0JywgJyNiNzllNmEnLCAnI2M2ODM3NyddO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uQ2hhbmdlU2Nyb2xsKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25DaGFuZ2VSZXNpemUpO1xyXG5cclxuICAgICAgICBvbkNoYW5nZVNjcm9sbCgpO1xyXG4gICAgICAgIG9uQ2hhbmdlUmVzaXplKCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvbkNoYW5nZVNjcm9sbCk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvbkNoYW5nZVJlc2l6ZSk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChtYWluQ29udGFpbmVyUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgbWFpbkNvbnRhaW5lclJlZi5jdXJyZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBiYXNlU3RvcmUudGl0bGVBcnJheVtjb250YWluZXJOb10pO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICAvLyBvbkNoYW5nZVxyXG4gICAgY29uc3Qgb25DaGFuZ2VTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKG1haW5Db250YWluZXJSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICBpZiAobWFpbkNvbnRhaW5lclJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHNldElzUmVhY2goZmFsc2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0SXNSZWFjaCh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VSZXNpemUgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKG1haW5Db250YWluZXJSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICBpZiAobWFpbkNvbnRhaW5lclJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHNldElzUmVhY2goZmFsc2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0SXNSZWFjaCh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gb25DbGlja1xyXG4gICAgY29uc3Qgb25DbGlja01haW5Db250YWluZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKG1haW5Db250YWluZXJSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsQnkoeyB0b3A6IG1haW5Db250YWluZXJSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB1c2VPYnNlcnZlcigoKSA9PiAoXHJcbiAgICAgICAgPE1haW5Db250YWluZXJcclxuICAgICAgICAgICAgcmVmPXttYWluQ29udGFpbmVyUmVmfVxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbnRhaW5lck5vXX1cclxuICAgICAgICAgICAgekluZGV4PXsxMDAgLSBjb250YWluZXJOb31cclxuICAgICAgICAgICAgb25DbGljaz17b25DbGlja01haW5Db250YWluZXJ9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8U3ViQ29udGFpbmVyIGlzUmVhY2g9e2lzUmVhY2h9PlxyXG4gICAgICAgICAgICAgICAgPENvbXBvbmVudENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICB7Y29udGFpbmVyTm8gPT09IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICcnXHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRpdGxlU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaGFycFRpdGxlPiMgPC9TaGFycFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1haW5UaXRsZT57YmFzZVN0b3JlLnRpdGxlQXJyYXlbY29udGFpbmVyTm9dfTwvTWFpblRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RpdGxlU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50U2VjdGlvbj57Y2hpbGRyZW59PC9Db21wb25lbnRTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9Db21wb25lbnRDb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvU3ViQ29udGFpbmVyPlxyXG4gICAgICAgIDwvTWFpbkNvbnRhaW5lcj5cclxuICAgICkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFzZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==