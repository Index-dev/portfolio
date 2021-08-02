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
var TestDiv = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "main__TestDiv",
  componentId: "sc-1r8z56n-6"
})(["background-color:red;width:calc(100vw - (100vw - 100%));height:100vh;position:absolute;top:calc(100vh - 2px);left:calc(100vw - (100vw - 100%) - 2px) z-index:200;"]);
_c7 = TestDiv;

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
                    lineNumber: 263,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    children: "Go \u2192"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 264,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 262,
                  columnNumber: 37
                }, _this)
              }, menu, false, {
                fileName: _jsxFileName,
                lineNumber: 261,
                columnNumber: 33
              }, _this);
            }
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 17
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleSection, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainTitle, {
            children: "\uAE40\uC131\uCC2C\uC758 Portfolio"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 273,
            columnNumber: 21
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubTitle, {
            children: "Since 2021"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 274,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 272,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TestDiv, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 13
      }, _this)]
    }, void 0, true);
  });
};

_s(Main, "V6gQiDY4afZNDcSHjVFQDeiM1XA=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L21haW4udHN4Il0sIm5hbWVzIjpbIk1lbnVEaXZLZXlGcmFtZSIsImtleWZyYW1lcyIsIk1lbnVEaXYiLCJzdHlsZWQiLCJNZW51U3ViRGl2SG92ZXJLZXlGcmFtZSIsIk1lbnVTdWJEaXYiLCJNZW51U2VjdGlvbiIsInByb3BzIiwiaW5uZXJXaWR0aCIsIm1heFdpZHRoIiwiVGl0bGVTZWN0aW9uS2V5RnJhbWUiLCJUaXRsZVNlY3Rpb24iLCJNYWluVGl0bGUiLCJTdWJUaXRsZSIsIlRlc3REaXYiLCJNYWluIiwiaW5kZXhTdG9yZSIsImJhc2VTdG9yZSIsIm9uQ2xpY2tNZW51RGl2IiwiZSIsImluZGV4Iiwic3RvcFByb3BhZ2F0aW9uIiwid2luZG93Iiwic2Nyb2xsQnkiLCJ0b3AiLCJnZXRBY2N1bXVsYXRlQ29tcG9uZW50SGVpZ2h0Iiwic2Nyb2xsWSIsImJlaGF2aW9yIiwidXNlT2JzZXJ2ZXIiLCJ0aXRsZUFycmF5IiwibWFwIiwibWVudSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtB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QUFBQSxrQ0FDSSw4REFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUksOERBQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBdUJJLDhEQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXZCSjtBQUFBLG9CQURlO0FBQUEsR0FBRCxDQUFsQjtBQTJCSCxDQXhDRDs7R0FBTWhCLEk7VUFhS2EsbUQ7OztNQWJMYixJO0FBMENOLCtEQUFlQSxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjkxNmQ4ODk4YmE4M2I4MmVjMzI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG4vLyBpbXBvcnQgeyBtYXhXaWR0aCB9IGZyb20gJy4uL3N0eWxlL3N0eWxlJztcclxuXHJcbi8vIGNvbnN0IFN0eWxlZFNlY3Rpb24xID0gc3R5bGVkLnNlY3Rpb25gXHJcbi8vICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9pbWFnZS9tYWluSW1hZ2UuanBnJyk7XHJcbi8vICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4vLyAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuLy8gYDtcclxuXHJcbi8vIGNvbnN0IFN0eWxlZERpdjEgPSBzdHlsZWQuZGl2YFxyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICBwYWRkaW5nOiA4MnB4IDA7XHJcbi8vIGA7XHJcblxyXG4vLyBpbnRlcmZhY2UgSVN0eWVsZERpdjIge1xyXG4vLyAgICAgaW5uZXJXaWR0aDogbnVtYmVyO1xyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBTdHlsZWREaXYyID0gc3R5bGVkLmRpdmBcclxuLy8gICAgIGRpc3BsYXk6ICR7KHByb3BzOiBJU3R5ZWxkRGl2MikgPT4gKHByb3BzLmlubmVyV2lkdGggPj0gbWF4V2lkdGggPyAnYmxvY2snIDogJ25vbmUnKX07XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICBtYXJnaW46IDY4cHggMDtcclxuLy8gYDtcclxuXHJcbi8vIGNvbnN0IGRpdjNLZXlGcmFtZTEgPSBrZXlmcmFtZXNgXHJcbi8vICAgICA1MCUge1xyXG4vLyAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XHJcbi8vICAgICB9XHJcbi8vIGA7XHJcblxyXG4vLyBjb25zdCBTdHlsZWREaXYzID0gc3R5bGVkLmRpdmBcclxuLy8gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbi8vICAgICAmOmhvdmVyIHtcclxuLy8gICAgICAgICBhbmltYXRpb246IDEuOHMgJHtkaXYzS2V5RnJhbWUxfSBpbmZpbml0ZTtcclxuLy8gICAgIH1cclxuLy8gYDtcclxuXHJcbi8vIGNvbnN0IFN0eWxlZERpdjQgPSBzdHlsZWQuZGl2YFxyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICB3aWR0aDogMTUycHg7XHJcbi8vICAgICBoZWlnaHQ6IDE1MnB4O1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NhZjBiZTtcclxuLy8gICAgIG1hcmdpbjogMTZweCAzMnB4O1xyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkRGl2NSA9IHN0eWxlZC5kaXZgXHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vIGA7XHJcblxyXG4vLyBjb25zdCBTdHlsZWREaXY2ID0gc3R5bGVkLmRpdmBcclxuLy8gICAgIG1heC13aWR0aDogJHttYXhXaWR0aH1weDtcclxuLy8gICAgIG1hcmdpbjogMCBhdXRvO1xyXG4vLyAgICAgcGFkZGluZzogMCAxNXB4O1xyXG5cclxuLy8gICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7bWF4V2lkdGggKyA1MH1weCkge1xyXG4vLyAgICAgICAgIG1hcmdpbi1ib3R0b206IDg0cHg7XHJcbi8vICAgICB9XHJcbi8vIGA7XHJcblxyXG4vLyBjb25zdCBTdHlsZWRUaXRsZSA9IHN0eWxlZC5zcGFuYFxyXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vICAgICBmb250LXNpemU6IDMuNmVtO1xyXG4vLyAgICAgY29sb3I6ICNmZmY7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4vLyAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIHtcclxuLy8gICAgICAgICBmb250LXNpemU6IDQuOGVtO1xyXG4vLyAgICAgfVxyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkU3ViVGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuLy8gICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbi8vICAgICBjb2xvcjogI2ZmZjtcclxuLy8gYDtcclxuXHJcbi8vIGNvbnN0IFN0eWxlZEgzXzEgPSBzdHlsZWQuaDNgXHJcbi8vICAgICBmb250LXNpemU6IDEuNGVtO1xyXG4vLyAgICAgY29sb3I6ICM2NThjNTk7XHJcbi8vIGA7XHJcblxyXG4vLyBjb25zdCBTdHlsZWRTcGFuMSA9IHN0eWxlZC5zcGFuYFxyXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vICAgICBjb2xvcjogIzNhNTIzMztcclxuLy8gYDtcclxuXHJcbi8vIGludGVyZmFjZSBJTWFpbiB7XHJcbi8vICAgICBpbm5lcldpZHRoOiBudW1iZXI7XHJcbi8vICAgICB0aXRsZUFycmF5OiBzdHJpbmdbXTtcclxuLy8gfVxyXG5cclxuLy8gY29uc3QgTWFpbjogUmVhY3QuRkM8SU1haW4+ID0gKHsgaW5uZXJXaWR0aCwgdGl0bGVBcnJheSB9KTogSlNYLkVsZW1lbnQgPT4ge1xyXG4vLyAgICAgY29uc3Qgb25DbGlja0RpdjMgPSAodGl0bGU6IHN0cmluZykgPT4ge1xyXG4vLyAgICAgICAgIGNvbnN0IHRpdGxlU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRpdGxlKTtcclxuXHJcbi8vICAgICAgICAgaWYgKHRpdGxlU2VjdGlvbikge1xyXG4vLyAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsQnkoeyB0b3A6IHRpdGxlU2VjdGlvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9O1xyXG5cclxuLy8gICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgPFN0eWxlZFNlY3Rpb24xPlxyXG4vLyAgICAgICAgICAgICA8U3R5bGVkRGl2Nj5cclxuLy8gICAgICAgICAgICAgICAgIDxTdHlsZWREaXY1PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXYyIGlubmVyV2lkdGg9e2lubmVyV2lkdGh9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGVBcnJheS5tYXAoKHRpdGxlKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXYzIGtleT17dGl0bGV9IG9uQ2xpY2s9eygpID0+IG9uQ2xpY2tEaXYzKHRpdGxlKX0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXY0PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZEgzXzE+e3RpdGxlfTwvU3R5bGVkSDNfMT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMT5HbyDihpI8L1N0eWxlZFNwYW4xPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZERpdjQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXYzPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXYyPlxyXG5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRGl2MT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFRpdGxlPuq5gOyEseywrOydmCBQb3J0Zm9saW88L1N0eWxlZFRpdGxlPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3ViVGl0bGU+U2luY2UgMjAyMTwvU3R5bGVkU3ViVGl0bGU+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXYxPlxyXG4vLyAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXY1PlxyXG4vLyAgICAgICAgICAgICA8L1N0eWxlZERpdjY+XHJcbi8vICAgICAgICAgPC9TdHlsZWRTZWN0aW9uMT5cclxuLy8gICAgICk7XHJcbi8vIH07XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBNYWluO1xyXG5cclxuaW1wb3J0IHsgdXNlT2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IGluZGV4U3RvcmUgZnJvbSAnLi4vbW9kdWxlcy9pbmRleFN0b3JlJztcclxuaW1wb3J0IHsgbWF4V2lkdGggfSBmcm9tICcuLi9zdHlsZS9zdHlsZSc7XHJcbmltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XHJcblxyXG5jb25zdCBNZW51RGl2S2V5RnJhbWUgPSBrZXlmcmFtZXNgXHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMDBweCkgcm90YXRlKDApO1xyXG4gICAgfVxyXG5cclxuICAgIDkwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpIHJvdGF0ZSg3NTBkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSByb3RhdGUoNzIwZGVnKTtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IE1lbnVEaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIGFuaW1hdGlvbi1uYW1lOiAke01lbnVEaXZLZXlGcmFtZX07XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xyXG5gO1xyXG5cclxuY29uc3QgTWVudVN1YkRpdkhvdmVyS2V5RnJhbWUgPSBrZXlmcmFtZXNgXHJcbiAgICA1MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBNZW51U3ViRGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDE1MnB4O1xyXG4gICAgaGVpZ2h0OiAxNTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYWYwYmU7XHJcbiAgICBtYXJnaW46IDE2cHggMzJweDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBhbmltYXRpb246IDEuOHMgJHtNZW51U3ViRGl2SG92ZXJLZXlGcmFtZX0gaW5maW5pdGU7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSU1lbnVTZWN0aW9uIHtcclxuICAgIGlubmVyV2lkdGg6IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgTWVudVNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6ICR7KHByb3BzOiBJTWVudVNlY3Rpb24pID0+IChwcm9wcy5pbm5lcldpZHRoID49IG1heFdpZHRoID8gJ2Jsb2NrJyA6ICdub25lJyl9O1xyXG5gO1xyXG5cclxuY29uc3QgVGl0bGVTZWN0aW9uS2V5RnJhbWUgPSBrZXlmcmFtZXNgXHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQwcHgpO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmcm9tOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZVNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgIHBhZGRpbmc6IDAgMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBhbmltYXRpb24tbmFtZTogJHtUaXRsZVNlY3Rpb25LZXlGcmFtZX07XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xyXG5gO1xyXG5cclxuY29uc3QgTWFpblRpdGxlID0gc3R5bGVkLnNwYW5gXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogY2FsYyg1NHB4ICsgMS41dncpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuYDtcclxuXHJcbmNvbnN0IFN1YlRpdGxlID0gc3R5bGVkLnNwYW5gXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogY2FsYygyNHB4ICsgMC40dncpO1xyXG5gO1xyXG5cclxuY29uc3QgVGVzdERpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtICgxMDB2dyAtIDEwMCUpKTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IGNhbGMoMTAwdmggLSAycHgpO1xyXG4gICAgbGVmdDogY2FsYygxMDB2dyAtICgxMDB2dyAtIDEwMCUpIC0gMnB4KVxyXG4gICAgei1pbmRleDogMjAwO1xyXG5gO1xyXG5cclxuY29uc3QgTWFpbiA9ICgpOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICAvLyBtb2J4XHJcbiAgICBjb25zdCB7IGJhc2VTdG9yZSB9ID0gaW5kZXhTdG9yZSgpO1xyXG5cclxuICAgIC8vIG9uQ2xpY2tcclxuICAgIGNvbnN0IG9uQ2xpY2tNZW51RGl2ID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQsIE1vdXNlRXZlbnQ+LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsQnkoe1xyXG4gICAgICAgICAgICB0b3A6IGJhc2VTdG9yZS5nZXRBY2N1bXVsYXRlQ29tcG9uZW50SGVpZ2h0KGluZGV4KSAtIGJhc2VTdG9yZS5zY3JvbGxZLFxyXG4gICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB1c2VPYnNlcnZlcigoKSA9PiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEJhc2UgY29udGFpbmVyTm89ezB9PlxyXG4gICAgICAgICAgICAgICAgPE1lbnVTZWN0aW9uIGlubmVyV2lkdGg9e2Jhc2VTdG9yZS5pbm5lcldpZHRofT5cclxuICAgICAgICAgICAgICAgICAgICB7YmFzZVN0b3JlLnRpdGxlQXJyYXkubWFwKChtZW51LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVEaXYga2V5PXttZW51fSBvbkNsaWNrPXsoZSkgPT4gb25DbGlja01lbnVEaXYoZSwgaW5kZXgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVTdWJEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+e21lbnV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkdvIOKGkjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51U3ViRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudURpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvTWVudVNlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgPFRpdGxlU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8TWFpblRpdGxlPuq5gOyEseywrOydmCBQb3J0Zm9saW88L01haW5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8U3ViVGl0bGU+U2luY2UgMjAyMTwvU3ViVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8L1RpdGxlU2VjdGlvbj5cclxuICAgICAgICAgICAgPC9CYXNlPlxyXG5cclxuICAgICAgICAgICAgPFRlc3REaXYgLz5cclxuICAgICAgICA8Lz5cclxuICAgICkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==