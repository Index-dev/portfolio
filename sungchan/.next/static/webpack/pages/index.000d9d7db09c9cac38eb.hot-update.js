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
var myKeyframes = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.keyframes)(["50%{transform:rotate(0deg);left:0;}100%{top:-100vh;left:0;transform:rotate(0deg);}"]);
var myKeyframes1 = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.keyframes)(["50%{transform:rotate(0deg);left:0;}100%{top:-100vh;left:0;transform:rotate(0deg);}"]);
var TestDiv = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "main__TestDiv",
  componentId: "sc-1r8z56n-6"
})(["background-color:#fff;width:calc(100vw - (100vw - 100%));height:100vh;position:absolute;top:calc(100vh - 250px);left:calc(100vw - (100vw - 100%) - 450px);transform:rotate(-60deg);z-index:200;animation-name:", ";animation-duration:2s;animation-iteration-count:infinite;"], myKeyframes);
_c7 = TestDiv;

var Main = function Main() {
  _s();

  // mobx
  var _indexStore = (0,_modules_indexStore__WEBPACK_IMPORTED_MODULE_2__.default)(),
      baseStore = _indexStore.baseStore;

  var testBase = react__WEBPACK_IMPORTED_MODULE_1__.useRef();
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {
    if (testBase.current) {
      testBase.current.style.animationName = "".concat(myKeyframes1);
      testBase.current.style.animationDuration = '2s';
      testBase.current.style.animationIterationCount = 'infinite';
    }
  }, []); // onClick

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
        ref: testBase,
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
                    lineNumber: 303,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    children: "Go \u2192"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 304,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 302,
                  columnNumber: 37
                }, _this)
              }, menu, false, {
                fileName: _jsxFileName,
                lineNumber: 301,
                columnNumber: 33
              }, _this);
            }
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 297,
          columnNumber: 17
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleSection, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainTitle, {
            children: "\uAE40\uC131\uCC2C\uC758 Portfolio"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 313,
            columnNumber: 21
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubTitle, {
            children: "Since 2021"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 314,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 312,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 296,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TestDiv, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 318,
        columnNumber: 13
      }, _this)]
    }, void 0, true);
  });
};

_s(Main, "L6U2EA1Z6i4PBHmVdjR3YGmHHgc=", false, function () {
  return [mobx_react__WEBPACK_IMPORTED_MODULE_6__.useObserver];
});

_c8 = Main;
/* harmony default export */ __webpack_exports__["default"] = (Main);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;

$RefreshReg$(_c, "MenuDiv");
$RefreshReg$(_c2, "MenuSubDiv");
$RefreshReg$(_c3, "MenuSection");
$RefreshReg$(_c4, "TitleSection");
$RefreshReg$(_c5, "MainTitle");
$RefreshReg$(_c6, "SubTitle");
$RefreshReg$(_c7, "TestDiv");
$RefreshReg$(_c8, "Main");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L21haW4udHN4Il0sIm5hbWVzIjpbIk1lbnVEaXZLZXlGcmFtZSIsImtleWZyYW1lcyIsIk1lbnVEaXYiLCJzdHlsZWQiLCJNZW51U3ViRGl2SG92ZXJLZXlGcmFtZSIsIk1lbnVTdWJEaXYiLCJNZW51U2VjdGlvbiIsInByb3BzIiwiaW5uZXJXaWR0aCIsIm1heFdpZHRoIiwiVGl0bGVTZWN0aW9uS2V5RnJhbWUiLCJUaXRsZVNlY3Rpb24iLCJNYWluVGl0bGUiLCJTdWJUaXRsZSIsIm15S2V5ZnJhbWVzIiwibXlLZXlmcmFtZXMxIiwiVGVzdERpdiIsIk1haW4iLCJpbmRleFN0b3JlIiwiYmFzZVN0b3JlIiwidGVzdEJhc2UiLCJSZWFjdCIsImN1cnJlbnQiLCJzdHlsZSIsImFuaW1hdGlvbk5hbWUiLCJhbmltYXRpb25EdXJhdGlvbiIsImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50Iiwib25DbGlja01lbnVEaXYiLCJlIiwiaW5kZXgiLCJzdG9wUHJvcGFnYXRpb24iLCJ3aW5kb3ciLCJzY3JvbGxCeSIsInRvcCIsImdldEFjY3VtdWxhdGVDb21wb25lbnRIZWlnaHQiLCJzY3JvbGxZIiwiYmVoYXZpb3IiLCJ1c2VPYnNlcnZlciIsInRpdGxlQXJyYXkiLCJtYXAiLCJtZW51Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFD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ZWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbi8vIGltcG9ydCB7IG1heFdpZHRoIH0gZnJvbSAnLi4vc3R5bGUvc3R5bGUnO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkU2VjdGlvbjEgPSBzdHlsZWQuc2VjdGlvbmBcclxuLy8gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2ltYWdlL21haW5JbWFnZS5qcGcnKTtcclxuLy8gICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbi8vICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkRGl2MSA9IHN0eWxlZC5kaXZgXHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgIHBhZGRpbmc6IDgycHggMDtcclxuLy8gYDtcclxuXHJcbi8vIGludGVyZmFjZSBJU3R5ZWxkRGl2MiB7XHJcbi8vICAgICBpbm5lcldpZHRoOiBudW1iZXI7XHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IFN0eWxlZERpdjIgPSBzdHlsZWQuZGl2YFxyXG4vLyAgICAgZGlzcGxheTogJHsocHJvcHM6IElTdHllbGREaXYyKSA9PiAocHJvcHMuaW5uZXJXaWR0aCA+PSBtYXhXaWR0aCA/ICdibG9jaycgOiAnbm9uZScpfTtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIG1hcmdpbjogNjhweCAwO1xyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgZGl2M0tleUZyYW1lMSA9IGtleWZyYW1lc2BcclxuLy8gICAgIDUwJSB7XHJcbi8vICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcclxuLy8gICAgIH1cclxuLy8gYDtcclxuXHJcbi8vIGNvbnN0IFN0eWxlZERpdjMgPSBzdHlsZWQuZGl2YFxyXG4vLyAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuLy8gICAgICY6aG92ZXIge1xyXG4vLyAgICAgICAgIGFuaW1hdGlvbjogMS44cyAke2RpdjNLZXlGcmFtZTF9IGluZmluaXRlO1xyXG4vLyAgICAgfVxyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkRGl2NCA9IHN0eWxlZC5kaXZgXHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgIHdpZHRoOiAxNTJweDtcclxuLy8gICAgIGhlaWdodDogMTUycHg7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2FmMGJlO1xyXG4vLyAgICAgbWFyZ2luOiAxNnB4IDMycHg7XHJcbi8vIGA7XHJcblxyXG4vLyBjb25zdCBTdHlsZWREaXY1ID0gc3R5bGVkLmRpdmBcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gYDtcclxuXHJcbi8vIGNvbnN0IFN0eWxlZERpdjYgPSBzdHlsZWQuZGl2YFxyXG4vLyAgICAgbWF4LXdpZHRoOiAke21heFdpZHRofXB4O1xyXG4vLyAgICAgbWFyZ2luOiAwIGF1dG87XHJcbi8vICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcblxyXG4vLyAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHttYXhXaWR0aCArIDUwfXB4KSB7XHJcbi8vICAgICAgICAgbWFyZ2luLWJvdHRvbTogODRweDtcclxuLy8gICAgIH1cclxuLy8gYDtcclxuXHJcbi8vIGNvbnN0IFN0eWxlZFRpdGxlID0gc3R5bGVkLnNwYW5gXHJcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMy42ZW07XHJcbi8vICAgICBjb2xvcjogI2ZmZjtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbi8vICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCkge1xyXG4vLyAgICAgICAgIGZvbnQtc2l6ZTogNC44ZW07XHJcbi8vICAgICB9XHJcbi8vIGA7XHJcblxyXG4vLyBjb25zdCBTdHlsZWRTdWJUaXRsZSA9IHN0eWxlZC5zcGFuYFxyXG4vLyAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuLy8gICAgIGNvbG9yOiAjZmZmO1xyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkSDNfMSA9IHN0eWxlZC5oM2BcclxuLy8gICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbi8vICAgICBjb2xvcjogIzY1OGM1OTtcclxuLy8gYDtcclxuXHJcbi8vIGNvbnN0IFN0eWxlZFNwYW4xID0gc3R5bGVkLnNwYW5gXHJcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gICAgIGNvbG9yOiAjM2E1MjMzO1xyXG4vLyBgO1xyXG5cclxuLy8gaW50ZXJmYWNlIElNYWluIHtcclxuLy8gICAgIGlubmVyV2lkdGg6IG51bWJlcjtcclxuLy8gICAgIHRpdGxlQXJyYXk6IHN0cmluZ1tdO1xyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBNYWluOiBSZWFjdC5GQzxJTWFpbj4gPSAoeyBpbm5lcldpZHRoLCB0aXRsZUFycmF5IH0pOiBKU1guRWxlbWVudCA9PiB7XHJcbi8vICAgICBjb25zdCBvbkNsaWNrRGl2MyA9ICh0aXRsZTogc3RyaW5nKSA9PiB7XHJcbi8vICAgICAgICAgY29uc3QgdGl0bGVTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGl0bGUpO1xyXG5cclxuLy8gICAgICAgICBpZiAodGl0bGVTZWN0aW9uKSB7XHJcbi8vICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxCeSh7IHRvcDogdGl0bGVTZWN0aW9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH07XHJcblxyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICA8U3R5bGVkU2VjdGlvbjE+XHJcbi8vICAgICAgICAgICAgIDxTdHlsZWREaXY2PlxyXG4vLyAgICAgICAgICAgICAgICAgPFN0eWxlZERpdjU+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZERpdjIgaW5uZXJXaWR0aD17aW5uZXJXaWR0aH0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZUFycmF5Lm1hcCgodGl0bGUpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZERpdjMga2V5PXt0aXRsZX0gb25DbGljaz17KCkgPT4gb25DbGlja0RpdjModGl0bGUpfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZERpdjQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkSDNfMT57dGl0bGV9PC9TdHlsZWRIM18xPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4xPkdvIOKGkjwvU3R5bGVkU3BhbjE+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2ND5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZERpdjM+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuLy8gICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZERpdjI+XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXYxPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkVGl0bGU+6rmA7ISx7LCs7J2YIFBvcnRmb2xpbzwvU3R5bGVkVGl0bGU+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTdWJUaXRsZT5TaW5jZSAyMDIxPC9TdHlsZWRTdWJUaXRsZT5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZERpdjE+XHJcbi8vICAgICAgICAgICAgICAgICA8L1N0eWxlZERpdjU+XHJcbi8vICAgICAgICAgICAgIDwvU3R5bGVkRGl2Nj5cclxuLy8gICAgICAgICA8L1N0eWxlZFNlY3Rpb24xPlxyXG4vLyAgICAgKTtcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IE1haW47XHJcblxyXG5pbXBvcnQgeyB1c2VPYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgaW5kZXhTdG9yZSBmcm9tICcuLi9tb2R1bGVzL2luZGV4U3RvcmUnO1xyXG5pbXBvcnQgeyBtYXhXaWR0aCB9IGZyb20gJy4uL3N0eWxlL3N0eWxlJztcclxuaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcclxuXHJcbmNvbnN0IE1lbnVEaXZLZXlGcmFtZSA9IGtleWZyYW1lc2BcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTMwMHB4KSByb3RhdGUoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgOTAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCkgcm90YXRlKDc1MGRlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHJvdGF0ZSg3MjBkZWcpO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgTWVudURpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgYW5pbWF0aW9uLW5hbWU6ICR7TWVudURpdktleUZyYW1lfTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XHJcbmA7XHJcblxyXG5jb25zdCBNZW51U3ViRGl2SG92ZXJLZXlGcmFtZSA9IGtleWZyYW1lc2BcclxuICAgIDUwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IE1lbnVTdWJEaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTUycHg7XHJcbiAgICBoZWlnaHQ6IDE1MnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NhZjBiZTtcclxuICAgIG1hcmdpbjogMTZweCAzMnB4O1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGFuaW1hdGlvbjogMS44cyAke01lbnVTdWJEaXZIb3ZlcktleUZyYW1lfSBpbmZpbml0ZTtcclxuICAgIH1cclxuYDtcclxuXHJcbmludGVyZmFjZSBJTWVudVNlY3Rpb24ge1xyXG4gICAgaW5uZXJXaWR0aDogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBNZW51U2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogJHsocHJvcHM6IElNZW51U2VjdGlvbikgPT4gKHByb3BzLmlubmVyV2lkdGggPj0gbWF4V2lkdGggPyAnYmxvY2snIDogJ25vbmUnKX07XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZVNlY3Rpb25LZXlGcmFtZSA9IGtleWZyYW1lc2BcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDBweCk7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuXHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zyb206IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IFRpdGxlU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gICAgcGFkZGluZzogMCAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGFuaW1hdGlvbi1uYW1lOiAke1RpdGxlU2VjdGlvbktleUZyYW1lfTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XHJcbmA7XHJcblxyXG5jb25zdCBNYWluVGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiBjYWxjKDU0cHggKyAxLjV2dyk7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG5gO1xyXG5cclxuY29uc3QgU3ViVGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiBjYWxjKDI0cHggKyAwLjR2dyk7XHJcbmA7XHJcblxyXG5jb25zdCBteUtleWZyYW1lcyA9IGtleWZyYW1lc2BcclxuICAgIDUwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgIH1cclxuXHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0b3A6IC0xMDB2aDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgbXlLZXlmcmFtZXMxID0ga2V5ZnJhbWVzYFxyXG4gICAgNTAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRvcDogLTEwMHZoO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBUZXN0RGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtICgxMDB2dyAtIDEwMCUpKTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IGNhbGMoMTAwdmggLSAyNTBweCk7XHJcbiAgICBsZWZ0OiBjYWxjKDEwMHZ3IC0gKDEwMHZ3IC0gMTAwJSkgLSA0NTBweCk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNjBkZWcpO1xyXG4gICAgei1pbmRleDogMjAwO1xyXG5cclxuICAgIGFuaW1hdGlvbi1uYW1lOiAke215S2V5ZnJhbWVzfTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuYDtcclxuXHJcbmNvbnN0IE1haW4gPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgLy8gbW9ieFxyXG4gICAgY29uc3QgeyBiYXNlU3RvcmUgfSA9IGluZGV4U3RvcmUoKTtcclxuXHJcbiAgICBjb25zdCB0ZXN0QmFzZSA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRlc3RCYXNlLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgdGVzdEJhc2UuY3VycmVudC5zdHlsZS5hbmltYXRpb25OYW1lID0gYCR7bXlLZXlmcmFtZXMxfWA7XHJcbiAgICAgICAgICAgIHRlc3RCYXNlLmN1cnJlbnQuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24gPSAnMnMnO1xyXG4gICAgICAgICAgICB0ZXN0QmFzZS5jdXJyZW50LnN0eWxlLmFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50ID0gJ2luZmluaXRlJztcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLy8gb25DbGlja1xyXG4gICAgY29uc3Qgb25DbGlja01lbnVEaXYgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudCwgTW91c2VFdmVudD4sIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxCeSh7XHJcbiAgICAgICAgICAgIHRvcDogYmFzZVN0b3JlLmdldEFjY3VtdWxhdGVDb21wb25lbnRIZWlnaHQoaW5kZXgpIC0gYmFzZVN0b3JlLnNjcm9sbFksXHJcbiAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHVzZU9ic2VydmVyKCgpID0+IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QmFzZSByZWY9e3Rlc3RCYXNlfSBjb250YWluZXJObz17MH0+XHJcbiAgICAgICAgICAgICAgICA8TWVudVNlY3Rpb24gaW5uZXJXaWR0aD17YmFzZVN0b3JlLmlubmVyV2lkdGh9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtiYXNlU3RvcmUudGl0bGVBcnJheS5tYXAoKG1lbnUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudURpdiBrZXk9e21lbnV9IG9uQ2xpY2s9eyhlKSA9PiBvbkNsaWNrTWVudURpdihlLCBpbmRleCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudVN1YkRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57bWVudX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+R28g4oaSPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVTdWJEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51RGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9NZW51U2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8VGl0bGVTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNYWluVGl0bGU+6rmA7ISx7LCs7J2YIFBvcnRmb2xpbzwvTWFpblRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdWJUaXRsZT5TaW5jZSAyMDIxPC9TdWJUaXRsZT5cclxuICAgICAgICAgICAgICAgIDwvVGl0bGVTZWN0aW9uPlxyXG4gICAgICAgICAgICA8L0Jhc2U+XHJcblxyXG4gICAgICAgICAgICA8VGVzdERpdiAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9