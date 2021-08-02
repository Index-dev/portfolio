self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./component/main.tsx":
/*!****************************!*\
  !*** ./component/main.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _modules_indexStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/indexStore */ "./modules/indexStore.tsx");
/* harmony import */ var _style_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/style */ "./style/style.tsx");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base */ "./component/base.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\component\\main.tsx",
    _this = undefined,
    _s = $RefreshSig$();

// import * as React from 'react';
// import styled, { keyframes } from 'styled-components';
// import { maxWidth } from '../style/style';
// const StyledSection1 = styled.section`
//     background-image: url('/image/mainImage.jpg');
//     background-repeat: no-repeat;
//     background-size: cover;
// `;
// const StyledDiv1 = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     padding: 82px 0;
// `;
// interface IStyeldDiv2 {
//     innerWidth: number;
// }
// const StyledDiv2 = styled.div`
//     display: ${(props: IStyeldDiv2) => (props.innerWidth >= maxWidth ? 'block' : 'none')};
//     text-align: center;
//     margin: 68px 0;
// `;
// const div3KeyFrame1 = keyframes`
//     50% {
//         transform: translateY(-10px);
//     }
// `;
// const StyledDiv3 = styled.div`
//     display: inline-block;
//     cursor: pointer;
//     &:hover {
//         animation: 1.8s ${div3KeyFrame1} infinite;
//     }
// `;
// const StyledDiv4 = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     width: 152px;
//     height: 152px;
//     border-radius: 50%;
//     background-color: #caf0be;
//     margin: 16px 32px;
// `;
// const StyledDiv5 = styled.div`
//     display: flex;
//     justify-content: center;
// `;
// const StyledDiv6 = styled.div`
//     max-width: ${maxWidth}px;
//     margin: 0 auto;
//     padding: 0 15px;
//     @media screen and (min-width: ${maxWidth + 50}px) {
//         margin-bottom: 84px;
//     }
// `;
// const StyledTitle = styled.span`
//     font-weight: bold;
//     font-size: 3.6em;
//     color: #fff;
//     text-align: center;
//     @media screen and (min-width: 480px) {
//         font-size: 4.8em;
//     }
// `;
// const StyledSubTitle = styled.span`
//     font-size: 1.3em;
//     color: #fff;
// `;
// const StyledH3_1 = styled.h3`
//     font-size: 1.4em;
//     color: #658c59;
// `;
// const StyledSpan1 = styled.span`
//     font-weight: bold;
//     color: #3a5233;
// `;
// interface IMain {
//     innerWidth: number;
//     titleArray: string[];
// }
// const Main: React.FC<IMain> = ({ innerWidth, titleArray }): JSX.Element => {
//     const onClickDiv3 = (title: string) => {
//         const titleSection = document.getElementById(title);
//         if (titleSection) {
//             window.scrollBy({ top: titleSection.getBoundingClientRect().top, behavior: 'smooth' });
//         }
//     };
//     return (
//         <StyledSection1>
//             <StyledDiv6>
//                 <StyledDiv5>
//                     <StyledDiv2 innerWidth={innerWidth}>
//                         {titleArray.map((title) => {
//                             return (
//                                 <StyledDiv3 key={title} onClick={() => onClickDiv3(title)}>
//                                     <StyledDiv4>
//                                         <StyledH3_1>{title}</StyledH3_1>
//                                         <StyledSpan1>Go →</StyledSpan1>
//                                     </StyledDiv4>
//                                 </StyledDiv3>
//                             );
//                         })}
//                     </StyledDiv2>
//                     <StyledDiv1>
//                         <StyledTitle>김성찬의 Portfolio</StyledTitle>
//                         <StyledSubTitle>Since 2021</StyledSubTitle>
//                     </StyledDiv1>
//                 </StyledDiv5>
//             </StyledDiv6>
//         </StyledSection1>
//     );
// };
// export default Main;






var MenuDivKeyFrame = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.keyframes)(["0%{transform:translateX(-300px) rotate(0);}90%{transform:translateX(30px) rotate(750deg);}100%{transform:translateX(0) rotate(720deg);}"]);
var MenuDiv = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "main__MenuDiv",
  componentId: "sc-1r8z56n-0"
})(["display:inline-block;cursor:pointer;animation-name:", ";animation-duration:3s;"], MenuDivKeyFrame);
_c = MenuDiv;
var MenuSubDivHoverKeyFrame = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.keyframes)(["50%{transform:translateY(-10px);}"]);
var MenuSubDiv = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "main__MenuSubDiv",
  componentId: "sc-1r8z56n-1"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;width:152px;height:152px;border-radius:50%;background-color:#caf0be;margin:16px 32px;&:hover{animation:1.8s ", " infinite;}"], MenuSubDivHoverKeyFrame);
_c2 = MenuSubDiv;
var MenuSection = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.section.withConfig({
  displayName: "main__MenuSection",
  componentId: "sc-1r8z56n-2"
})(["text-align:center;display:", ";"], function (props) {
  return props.innerWidth >= _style_style__WEBPACK_IMPORTED_MODULE_3__.maxWidth ? 'block' : 'none';
});
_c3 = MenuSection;
var TitleSectionKeyFrame = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.keyframes)(["0%{transform:translateY(40px);opacity:0;}100%{transfrom:translateY(0);opacity:1;}"]);
var TitleSection = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.section.withConfig({
  displayName: "main__TitleSection",
  componentId: "sc-1r8z56n-3"
})(["padding:0 30px;text-align:center;animation-name:", ";animation-duration:3s;"], TitleSectionKeyFrame);
_c4 = TitleSection;
var MainTitle = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.span.withConfig({
  displayName: "main__MainTitle",
  componentId: "sc-1r8z56n-4"
})(["display:block;font-size:calc(54px + 1.5vw);font-weight:600;"]);
_c5 = MainTitle;
var SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.span.withConfig({
  displayName: "main__SubTitle",
  componentId: "sc-1r8z56n-5"
})(["display:block;font-size:calc(24px + 0.4vw);"]);
_c6 = SubTitle;

var Main = function Main() {
  _s();

  // mobx
  var _indexStore = (0,_modules_indexStore__WEBPACK_IMPORTED_MODULE_2__.default)(),
      baseStore = _indexStore.baseStore; // onClick


  var onClickMenuDiv = function onClickMenuDiv(e, index) {
    e.stopPropagation();
    window.scrollBy({
      top: baseStore.getAccumulateComponentHeight(index) - baseStore.scrollY,
      behavior: 'smooth'
    });
  };

  return (0,mobx_react__WEBPACK_IMPORTED_MODULE_6__.useObserver)(function () {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_base__WEBPACK_IMPORTED_MODULE_4__.default, {
        containerNo: 0,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuSection, {
          innerWidth: baseStore.innerWidth,
          children: baseStore.titleArray.map(function (menu, index) {
            if (index !== 0) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuDiv, {
                onClick: function onClick(e) {
                  return onClickMenuDiv(e, index);
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuSubDiv, {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                    children: menu
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 253,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    children: "Go \u2192"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 254,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 252,
                  columnNumber: 37
                }, _this)
              }, menu, false, {
                fileName: _jsxFileName,
                lineNumber: 251,
                columnNumber: 33
              }, _this);
            }
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 17
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleSection, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainTitle, {
            children: "\uAE40\uC131\uCC2C\uC758 Portfolio"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 263,
            columnNumber: 21
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubTitle, {
            children: "Since 2021"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 264,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 262,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          backgroundColor: 'red',
          width: 'calc(100vw - (100vw - 100%))',
          height: '100vh',
          position: 'absolute',
          top: 0,
          zIndex: 200
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 13
      }, _this)]
    }, void 0, true);
  });
};

_s(Main, "V6gQiDY4afZNDcSHjVFQDeiM1XA=", false, function () {
  return [mobx_react__WEBPACK_IMPORTED_MODULE_6__.useObserver];
});

_c7 = Main;
/* harmony default export */ __webpack_exports__["default"] = (Main);

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "MenuDiv");
$RefreshReg$(_c2, "MenuSubDiv");
$RefreshReg$(_c3, "MenuSection");
$RefreshReg$(_c4, "TitleSection");
$RefreshReg$(_c5, "MainTitle");
$RefreshReg$(_c6, "SubTitle");
$RefreshReg$(_c7, "Main");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L21haW4udHN4Il0sIm5hbWVzIjpbIk1lbnVEaXZLZXlGcmFtZSIsImtleWZyYW1lcyIsIk1lbnVEaXYiLCJzdHlsZWQiLCJNZW51U3ViRGl2SG92ZXJLZXlGcmFtZSIsIk1lbnVTdWJEaXYiLCJNZW51U2VjdGlvbiIsInByb3BzIiwiaW5uZXJXaWR0aCIsIm1heFdpZHRoIiwiVGl0bGVTZWN0aW9uS2V5RnJhbWUiLCJUaXRsZVNlY3Rpb24iLCJNYWluVGl0bGUiLCJTdWJUaXRsZSIsIk1haW4iLCJpbmRleFN0b3JlIiwiYmFzZVN0b3JlIiwib25DbGlja01lbnVEaXYiLCJlIiwiaW5kZXgiLCJzdG9wUHJvcGFnYXRpb24iLCJ3aW5kb3ciLCJzY3JvbGxCeSIsInRvcCIsImdldEFjY3VtdWxhdGVDb21wb25lbnRIZWlnaHQiLCJzY3JvbGxZIiwiYmVoYXZpb3IiLCJ1c2VPYnNlcnZlciIsInRpdGxlQXJyYXkiLCJtYXAiLCJtZW51IiwiYmFja2dyb3VuZENvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJwb3NpdGlvbiIsInpJbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtB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REFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUksOERBQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBdUJJO0FBQ0ksYUFBSyxFQUFFO0FBQ0hDLHlCQUFlLEVBQUUsS0FEZDtBQUVIQyxlQUFLLEVBQUUsOEJBRko7QUFHSEMsZ0JBQU0sRUFBRSxPQUhMO0FBSUhDLGtCQUFRLEVBQUUsVUFKUDtBQUtIWCxhQUFHLEVBQUUsQ0FMRjtBQU1IWSxnQkFBTSxFQUFFO0FBTkw7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdkJKO0FBQUEsb0JBRGU7QUFBQSxHQUFELENBQWxCO0FBb0NILENBakREOztHQUFNckIsSTtVQWFLYSxtRDs7O01BYkxiLEk7QUFtRE4sK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjQ3Yzk1NjE0YTM2ODM0OTg0ZmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbi8vIGltcG9ydCB7IG1heFdpZHRoIH0gZnJvbSAnLi4vc3R5bGUvc3R5bGUnO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkU2VjdGlvbjEgPSBzdHlsZWQuc2VjdGlvbmBcclxuLy8gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2ltYWdlL21haW5JbWFnZS5qcGcnKTtcclxuLy8gICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbi8vICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkRGl2MSA9IHN0eWxlZC5kaXZgXHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgIHBhZGRpbmc6IDgycHggMDtcclxuLy8gYDtcclxuXHJcbi8vIGludGVyZmFjZSBJU3R5ZWxkRGl2MiB7XHJcbi8vICAgICBpbm5lcldpZHRoOiBudW1iZXI7XHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IFN0eWxlZERpdjIgPSBzdHlsZWQuZGl2YFxyXG4vLyAgICAgZGlzcGxheTogJHsocHJvcHM6IElTdHllbGREaXYyKSA9PiAocHJvcHMuaW5uZXJXaWR0aCA+PSBtYXhXaWR0aCA/ICdibG9jaycgOiAnbm9uZScpfTtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIG1hcmdpbjogNjhweCAwO1xyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgZGl2M0tleUZyYW1lMSA9IGtleWZyYW1lc2BcclxuLy8gICAgIDUwJSB7XHJcbi8vICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcclxuLy8gICAgIH1cclxuLy8gYDtcclxuXHJcbi8vIGNvbnN0IFN0eWxlZERpdjMgPSBzdHlsZWQuZGl2YFxyXG4vLyAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuLy8gICAgICY6aG92ZXIge1xyXG4vLyAgICAgICAgIGFuaW1hdGlvbjogMS44cyAke2RpdjNLZXlGcmFtZTF9IGluZmluaXRlO1xyXG4vLyAgICAgfVxyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkRGl2NCA9IHN0eWxlZC5kaXZgXHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgIHdpZHRoOiAxNTJweDtcclxuLy8gICAgIGhlaWdodDogMTUycHg7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2FmMGJlO1xyXG4vLyAgICAgbWFyZ2luOiAxNnB4IDMycHg7XHJcbi8vIGA7XHJcblxyXG4vLyBjb25zdCBTdHlsZWREaXY1ID0gc3R5bGVkLmRpdmBcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gYDtcclxuXHJcbi8vIGNvbnN0IFN0eWxlZERpdjYgPSBzdHlsZWQuZGl2YFxyXG4vLyAgICAgbWF4LXdpZHRoOiAke21heFdpZHRofXB4O1xyXG4vLyAgICAgbWFyZ2luOiAwIGF1dG87XHJcbi8vICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcblxyXG4vLyAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHttYXhXaWR0aCArIDUwfXB4KSB7XHJcbi8vICAgICAgICAgbWFyZ2luLWJvdHRvbTogODRweDtcclxuLy8gICAgIH1cclxuLy8gYDtcclxuXHJcbi8vIGNvbnN0IFN0eWxlZFRpdGxlID0gc3R5bGVkLnNwYW5gXHJcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMy42ZW07XHJcbi8vICAgICBjb2xvcjogI2ZmZjtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbi8vICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCkge1xyXG4vLyAgICAgICAgIGZvbnQtc2l6ZTogNC44ZW07XHJcbi8vICAgICB9XHJcbi8vIGA7XHJcblxyXG4vLyBjb25zdCBTdHlsZWRTdWJUaXRsZSA9IHN0eWxlZC5zcGFuYFxyXG4vLyAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuLy8gICAgIGNvbG9yOiAjZmZmO1xyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkSDNfMSA9IHN0eWxlZC5oM2BcclxuLy8gICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbi8vICAgICBjb2xvcjogIzY1OGM1OTtcclxuLy8gYDtcclxuXHJcbi8vIGNvbnN0IFN0eWxlZFNwYW4xID0gc3R5bGVkLnNwYW5gXHJcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gICAgIGNvbG9yOiAjM2E1MjMzO1xyXG4vLyBgO1xyXG5cclxuLy8gaW50ZXJmYWNlIElNYWluIHtcclxuLy8gICAgIGlubmVyV2lkdGg6IG51bWJlcjtcclxuLy8gICAgIHRpdGxlQXJyYXk6IHN0cmluZ1tdO1xyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBNYWluOiBSZWFjdC5GQzxJTWFpbj4gPSAoeyBpbm5lcldpZHRoLCB0aXRsZUFycmF5IH0pOiBKU1guRWxlbWVudCA9PiB7XHJcbi8vICAgICBjb25zdCBvbkNsaWNrRGl2MyA9ICh0aXRsZTogc3RyaW5nKSA9PiB7XHJcbi8vICAgICAgICAgY29uc3QgdGl0bGVTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGl0bGUpO1xyXG5cclxuLy8gICAgICAgICBpZiAodGl0bGVTZWN0aW9uKSB7XHJcbi8vICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxCeSh7IHRvcDogdGl0bGVTZWN0aW9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH07XHJcblxyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICA8U3R5bGVkU2VjdGlvbjE+XHJcbi8vICAgICAgICAgICAgIDxTdHlsZWREaXY2PlxyXG4vLyAgICAgICAgICAgICAgICAgPFN0eWxlZERpdjU+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZERpdjIgaW5uZXJXaWR0aD17aW5uZXJXaWR0aH0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZUFycmF5Lm1hcCgodGl0bGUpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZERpdjMga2V5PXt0aXRsZX0gb25DbGljaz17KCkgPT4gb25DbGlja0RpdjModGl0bGUpfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZERpdjQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkSDNfMT57dGl0bGV9PC9TdHlsZWRIM18xPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4xPkdvIOKGkjwvU3R5bGVkU3BhbjE+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2ND5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZERpdjM+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuLy8gICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZERpdjI+XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXYxPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkVGl0bGU+6rmA7ISx7LCs7J2YIFBvcnRmb2xpbzwvU3R5bGVkVGl0bGU+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTdWJUaXRsZT5TaW5jZSAyMDIxPC9TdHlsZWRTdWJUaXRsZT5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZERpdjE+XHJcbi8vICAgICAgICAgICAgICAgICA8L1N0eWxlZERpdjU+XHJcbi8vICAgICAgICAgICAgIDwvU3R5bGVkRGl2Nj5cclxuLy8gICAgICAgICA8L1N0eWxlZFNlY3Rpb24xPlxyXG4vLyAgICAgKTtcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IE1haW47XHJcblxyXG5pbXBvcnQgeyB1c2VPYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgaW5kZXhTdG9yZSBmcm9tICcuLi9tb2R1bGVzL2luZGV4U3RvcmUnO1xyXG5pbXBvcnQgeyBtYXhXaWR0aCB9IGZyb20gJy4uL3N0eWxlL3N0eWxlJztcclxuaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcclxuXHJcbmNvbnN0IE1lbnVEaXZLZXlGcmFtZSA9IGtleWZyYW1lc2BcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTMwMHB4KSByb3RhdGUoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgOTAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCkgcm90YXRlKDc1MGRlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHJvdGF0ZSg3MjBkZWcpO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgTWVudURpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgYW5pbWF0aW9uLW5hbWU6ICR7TWVudURpdktleUZyYW1lfTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XHJcbmA7XHJcblxyXG5jb25zdCBNZW51U3ViRGl2SG92ZXJLZXlGcmFtZSA9IGtleWZyYW1lc2BcclxuICAgIDUwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IE1lbnVTdWJEaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTUycHg7XHJcbiAgICBoZWlnaHQ6IDE1MnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NhZjBiZTtcclxuICAgIG1hcmdpbjogMTZweCAzMnB4O1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGFuaW1hdGlvbjogMS44cyAke01lbnVTdWJEaXZIb3ZlcktleUZyYW1lfSBpbmZpbml0ZTtcclxuICAgIH1cclxuYDtcclxuXHJcbmludGVyZmFjZSBJTWVudVNlY3Rpb24ge1xyXG4gICAgaW5uZXJXaWR0aDogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBNZW51U2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogJHsocHJvcHM6IElNZW51U2VjdGlvbikgPT4gKHByb3BzLmlubmVyV2lkdGggPj0gbWF4V2lkdGggPyAnYmxvY2snIDogJ25vbmUnKX07XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZVNlY3Rpb25LZXlGcmFtZSA9IGtleWZyYW1lc2BcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDBweCk7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuXHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zyb206IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IFRpdGxlU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gICAgcGFkZGluZzogMCAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGFuaW1hdGlvbi1uYW1lOiAke1RpdGxlU2VjdGlvbktleUZyYW1lfTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XHJcbmA7XHJcblxyXG5jb25zdCBNYWluVGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiBjYWxjKDU0cHggKyAxLjV2dyk7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG5gO1xyXG5cclxuY29uc3QgU3ViVGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiBjYWxjKDI0cHggKyAwLjR2dyk7XHJcbmA7XHJcblxyXG5jb25zdCBNYWluID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIC8vIG1vYnhcclxuICAgIGNvbnN0IHsgYmFzZVN0b3JlIH0gPSBpbmRleFN0b3JlKCk7XHJcblxyXG4gICAgLy8gb25DbGlja1xyXG4gICAgY29uc3Qgb25DbGlja01lbnVEaXYgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudCwgTW91c2VFdmVudD4sIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxCeSh7XHJcbiAgICAgICAgICAgIHRvcDogYmFzZVN0b3JlLmdldEFjY3VtdWxhdGVDb21wb25lbnRIZWlnaHQoaW5kZXgpIC0gYmFzZVN0b3JlLnNjcm9sbFksXHJcbiAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHVzZU9ic2VydmVyKCgpID0+IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QmFzZSBjb250YWluZXJObz17MH0+XHJcbiAgICAgICAgICAgICAgICA8TWVudVNlY3Rpb24gaW5uZXJXaWR0aD17YmFzZVN0b3JlLmlubmVyV2lkdGh9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtiYXNlU3RvcmUudGl0bGVBcnJheS5tYXAoKG1lbnUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudURpdiBrZXk9e21lbnV9IG9uQ2xpY2s9eyhlKSA9PiBvbkNsaWNrTWVudURpdihlLCBpbmRleCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudVN1YkRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57bWVudX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+R28g4oaSPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVTdWJEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51RGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9NZW51U2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8VGl0bGVTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNYWluVGl0bGU+6rmA7ISx7LCs7J2YIFBvcnRmb2xpbzwvTWFpblRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdWJUaXRsZT5TaW5jZSAyMDIxPC9TdWJUaXRsZT5cclxuICAgICAgICAgICAgICAgIDwvVGl0bGVTZWN0aW9uPlxyXG4gICAgICAgICAgICA8L0Jhc2U+XHJcblxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICdjYWxjKDEwMHZ3IC0gKDEwMHZ3IC0gMTAwJSkpJyxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogMjAwLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9