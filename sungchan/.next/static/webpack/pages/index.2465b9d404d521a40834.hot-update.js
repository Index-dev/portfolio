self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./component/intro.tsx":
/*!*****************************!*\
  !*** ./component/intro.tsx ***!
  \*****************************/
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


var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\component\\intro.tsx",
    _this = undefined,
    _s = $RefreshSig$();

// import * as React from 'react';
// import Base from './base';
// import styled from 'styled-components';
// import { maxWidth } from '../style/style';
// const StyeldDiv2 = styled.div`
//     margin: 0 32px;
//     padding-bottom: 17px;
// `;
// interface IStyledDiv3 {
//     direction?: string; // true면 우측, 그 외 좌측
//     innerWidth: number;
// }
// const StyeldDiv3 = styled.div`
//     overflow-wrap: anywhere;
//     ${(props: IStyledDiv3) => {
//         if (props.innerWidth < maxWidth) {
//             return `
//                 text-align: center;
//             `;
//         } else if (props.direction === 'true') {
//             return `
//                 text-align: right;
//             `;
//         }
//     }}
// `;
// const StyledDiv4 = styled.div`
//     display: inline-block;
//     position: relative;
//     border-top-left-radius: 10px;
//     border-top-right-radius: 10px;
//     border-bottom-left-radius: 10px;
//     border-bottom-right-radius: 10px;
//     padding: 12px;
//     margin: 43px 27px;
//     background-color: #fff;
// `;
// const StyledDiv5 = styled.div`
//     position: absolute;
//     top: -41px;
//     left: -41px;
//     transform: rotate(-25deg);
// `;
// const StyledDiv6 = styled.div`
//     position: absolute;
//     top: -41px;
//     right: -41px;
//     transform: rotate(25deg);
// `;
// const StyledSpan1 = styled.span`
//     font-size: 1.5em;
// `;
// const StyledSpan2 = styled.span`
//     font-size: 1.5em;
//     font-weight: bold;
//     border-bottom: 2px solid #c2655a;
//     color: #c2655a;
// `;
// interface IIntro {
//     innerWidth: number;
//     title: string;
// }
// const Intro: React.FC<IIntro> = ({ innerWidth, title }): JSX.Element => {
//     const boxArray1 = [
//         { title: '이름', description: '김성찬' },
//         { title: '생년월일', description: '94.12.09' },
//     ];
//     const boxArray2 = [
//         { title: '이메일', description: 'tjdcksdl00@naver.com' },
//         { title: '연락처', description: '010-3361-3633' },
//     ];
//     const boxArray3 = [
//         { title: '학교', description: '한양대 ERICA' },
//         { title: '주전공', description: '응용수학' },
//         { title: '부전공', description: '컴퓨터공학' },
//     ];
//     const boxArray4 = [
//         { title: '경력', description: '1년 3개월' },
//         { title: '기술분야', description: 'FE/BE 웹 개발' },
//     ];
//     return (
//         <Base title={title} backgroundColor={'#A5BAA8'}>
//             <StyeldDiv2>
//                 <StyeldDiv3 innerWidth={innerWidth}>
//                     {boxArray1.map((box) => {
//                         return (
//                             <StyledDiv4 key={box.description}>
//                                 <StyledSpan1>{box.description}</StyledSpan1>
//                                 <StyledDiv5>
//                                     <StyledSpan2>{box.title}</StyledSpan2>
//                                 </StyledDiv5>
//                             </StyledDiv4>
//                         );
//                     })}
//                 </StyeldDiv3>
//                 <StyeldDiv3 innerWidth={innerWidth} direction={'true'}>
//                     {boxArray2.map((box) => {
//                         return (
//                             <StyledDiv4 key={box.description}>
//                                 <StyledSpan1>{box.description}</StyledSpan1>
//                                 <StyledDiv6>
//                                     <StyledSpan2>{box.title}</StyledSpan2>
//                                 </StyledDiv6>
//                             </StyledDiv4>
//                         );
//                     })}
//                 </StyeldDiv3>
//                 <StyeldDiv3 innerWidth={innerWidth}>
//                     {boxArray3.map((box) => {
//                         return (
//                             <StyledDiv4 key={box.description}>
//                                 <StyledSpan1>{box.description}</StyledSpan1>
//                                 <StyledDiv5>
//                                     <StyledSpan2>{box.title}</StyledSpan2>
//                                 </StyledDiv5>
//                             </StyledDiv4>
//                         );
//                     })}
//                 </StyeldDiv3>
//                 <StyeldDiv3 innerWidth={innerWidth} direction={'true'}>
//                     {boxArray4.map((box) => {
//                         return (
//                             <StyledDiv4 key={box.description}>
//                                 <StyledSpan1>{box.description}</StyledSpan1>
//                                 <StyledDiv6>
//                                     <StyledSpan2>{box.title}</StyledSpan2>
//                                 </StyledDiv6>
//                             </StyledDiv4>
//                         );
//                     })}
//                 </StyeldDiv3>
//             </StyeldDiv2>
//         </Base>
//     );
// };
// export default Intro;






var BoxSection = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.section.withConfig({
  displayName: "intro__BoxSection",
  componentId: "sc-1aywpbq-0"
})(["margin:0 32px;padding-bottom:17px;"]);
_c = BoxSection;
var BoxContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "intro__BoxContainer",
  componentId: "sc-1aywpbq-1"
})(["overflow-wrap:anywhere;", ""], function (props) {
  if (props.innerWidth < _style_style__WEBPACK_IMPORTED_MODULE_3__.maxWidth) {
    return "\n                text-align: center;\n            ";
  } else if (props.direction === 'true') {
    return "\n                text-align: right;\n            ";
  }
});
_c2 = BoxContainer;
var BoxMainDiv = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "intro__BoxMainDiv",
  componentId: "sc-1aywpbq-2"
})(["display:inline-block;position:relative;border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-left-radius:10px;border-bottom-right-radius:10px;padding:18px;margin:43px 27px;background-color:#fff;box-shadow:2px 4px 4px #c8c8c8 inset,-2px -4px 4px #c8c8c8 inset;"]);
_c3 = BoxMainDiv;
var BoxLeftDiv = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "intro__BoxLeftDiv",
  componentId: "sc-1aywpbq-3"
})(["position:absolute;top:calc(-38px - 0.8vw);left:calc(-38px - 0.8vw);transform:rotate(-25deg);"]);
_c4 = BoxLeftDiv;
var BoxRightDiv = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "intro__BoxRightDiv",
  componentId: "sc-1aywpbq-4"
})(["position:absolute;top:calc(-38px - 0.8vw);right:calc(-38px - 0.8vw);transform:rotate(25deg);"]);
_c5 = BoxRightDiv;
var BoxDescription = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.span.withConfig({
  displayName: "intro__BoxDescription",
  componentId: "sc-1aywpbq-5"
})(["font-size:calc(28px + 0.4vw);"]);
_c6 = BoxDescription;
var BoxTitle = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.span.withConfig({
  displayName: "intro__BoxTitle",
  componentId: "sc-1aywpbq-6"
})(["font-size:calc(23px + 0.4vw);font-weight:bold;border-bottom:2px solid #c2655a;color:#c2655a;"]);
_c7 = BoxTitle;

var Intro = function Intro() {
  _s();

  // mobx
  var _indexStore = (0,_modules_indexStore__WEBPACK_IMPORTED_MODULE_2__.default)(),
      baseStore = _indexStore.baseStore; // variable


  var boxArray1 = [{
    title: '이름',
    description: '김성찬'
  }, {
    title: '생년월일',
    description: '94.12.09'
  }];
  var boxArray2 = [{
    title: '이메일',
    description: 'tjdcksdl00@naver.com'
  }, {
    title: '연락처',
    description: '010-3361-3633'
  }];
  var boxArray3 = [{
    title: '학교',
    description: '한양대 ERICA'
  }, {
    title: '주전공',
    description: '응용수학'
  }, {
    title: '부전공',
    description: '컴퓨터공학'
  }];
  var boxArray4 = [{
    title: '경력',
    description: '1년 3개월'
  }, {
    title: '기술분야',
    description: 'FE/BE 웹 개발'
  }];
  return (0,mobx_react__WEBPACK_IMPORTED_MODULE_6__.useObserver)(function () {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_base__WEBPACK_IMPORTED_MODULE_4__.default, {
      containerNo: 1,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxSection, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxContainer, {
          innerWidth: baseStore.innerWidth,
          children: boxArray1.map(function (box) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxMainDiv, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxDescription, {
                children: box.description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 253,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxLeftDiv, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxTitle, {
                  children: box.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 255,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 254,
                columnNumber: 33
              }, _this)]
            }, box.description, true, {
              fileName: _jsxFileName,
              lineNumber: 252,
              columnNumber: 29
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 17
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxContainer, {
          innerWidth: baseStore.innerWidth,
          direction: 'true',
          children: boxArray2.map(function (box) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxMainDiv, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxDescription, {
                children: box.description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 266,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxRightDiv, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxTitle, {
                  children: box.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 268,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 267,
                columnNumber: 33
              }, _this)]
            }, box.description, true, {
              fileName: _jsxFileName,
              lineNumber: 265,
              columnNumber: 29
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 262,
          columnNumber: 17
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxContainer, {
          innerWidth: baseStore.innerWidth,
          children: boxArray3.map(function (box) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxMainDiv, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxDescription, {
                children: box.description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 279,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxLeftDiv, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxTitle, {
                  children: box.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 281,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 280,
                columnNumber: 33
              }, _this)]
            }, box.description, true, {
              fileName: _jsxFileName,
              lineNumber: 278,
              columnNumber: 29
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 17
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxContainer, {
          innerWidth: baseStore.innerWidth,
          direction: 'true',
          children: boxArray4.map(function (box) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxMainDiv, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxDescription, {
                children: box.description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 292,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxRightDiv, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxTitle, {
                  children: box.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 294,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 293,
                columnNumber: 33
              }, _this)]
            }, box.description, true, {
              fileName: _jsxFileName,
              lineNumber: 291,
              columnNumber: 29
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 288,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          backgroundColor: 'red',
          width: 'calc(100vw - (100vw - 100%))',
          height: '100vh'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 9
    }, _this);
  });
};

_s(Intro, "V6gQiDY4afZNDcSHjVFQDeiM1XA=", false, function () {
  return [mobx_react__WEBPACK_IMPORTED_MODULE_6__.useObserver];
});

_c8 = Intro;
/* harmony default export */ __webpack_exports__["default"] = (Intro);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;

$RefreshReg$(_c, "BoxSection");
$RefreshReg$(_c2, "BoxContainer");
$RefreshReg$(_c3, "BoxMainDiv");
$RefreshReg$(_c4, "BoxLeftDiv");
$RefreshReg$(_c5, "BoxRightDiv");
$RefreshReg$(_c6, "BoxDescription");
$RefreshReg$(_c7, "BoxTitle");
$RefreshReg$(_c8, "Intro");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2ludHJvLnRzeCJdLCJuYW1lcyI6WyJCb3hTZWN0aW9uIiwic3R5bGVkIiwiQm94Q29udGFpbmVyIiwicHJvcHMiLCJpbm5lcldpZHRoIiwibWF4V2lkdGgiLCJkaXJlY3Rpb24iLCJCb3hNYWluRGl2IiwiQm94TGVmdERpdiIsIkJveFJpZ2h0RGl2IiwiQm94RGVzY3JpcHRpb24iLCJCb3hUaXRsZSIsIkludHJvIiwiaW5kZXhTdG9yZSIsImJhc2VTdG9yZSIsImJveEFycmF5MSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJib3hBcnJheTIiLCJib3hBcnJheTMiLCJib3hBcnJheTQiLCJ1c2VPYnNlcnZlciIsIm1hcCIsImJveCIsImJhY2tncm91bmRDb2xvciIsIndpZHRoIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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ZDUyMWE0MDgzNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xyXG4vLyBpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuLy8gaW1wb3J0IHsgbWF4V2lkdGggfSBmcm9tICcuLi9zdHlsZS9zdHlsZSc7XHJcblxyXG4vLyBjb25zdCBTdHllbGREaXYyID0gc3R5bGVkLmRpdmBcclxuLy8gICAgIG1hcmdpbjogMCAzMnB4O1xyXG4vLyAgICAgcGFkZGluZy1ib3R0b206IDE3cHg7XHJcbi8vIGA7XHJcblxyXG4vLyBpbnRlcmZhY2UgSVN0eWxlZERpdjMge1xyXG4vLyAgICAgZGlyZWN0aW9uPzogc3RyaW5nOyAvLyB0cnVl66m0IOyasOy4oSwg6re4IOyZuCDsoozsuKFcclxuLy8gICAgIGlubmVyV2lkdGg6IG51bWJlcjtcclxuLy8gfVxyXG5cclxuLy8gY29uc3QgU3R5ZWxkRGl2MyA9IHN0eWxlZC5kaXZgXHJcbi8vICAgICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcclxuLy8gICAgICR7KHByb3BzOiBJU3R5bGVkRGl2MykgPT4ge1xyXG4vLyAgICAgICAgIGlmIChwcm9wcy5pbm5lcldpZHRoIDwgbWF4V2lkdGgpIHtcclxuLy8gICAgICAgICAgICAgcmV0dXJuIGBcclxuLy8gICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgICAgICAgICAgYDtcclxuLy8gICAgICAgICB9IGVsc2UgaWYgKHByb3BzLmRpcmVjdGlvbiA9PT0gJ3RydWUnKSB7XHJcbi8vICAgICAgICAgICAgIHJldHVybiBgXHJcbi8vICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuLy8gICAgICAgICAgICAgYDtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9fVxyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkRGl2NCA9IHN0eWxlZC5kaXZgXHJcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4vLyAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbi8vICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4vLyAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbi8vICAgICBwYWRkaW5nOiAxMnB4O1xyXG4vLyAgICAgbWFyZ2luOiA0M3B4IDI3cHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkRGl2NSA9IHN0eWxlZC5kaXZgXHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICB0b3A6IC00MXB4O1xyXG4vLyAgICAgbGVmdDogLTQxcHg7XHJcbi8vICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjVkZWcpO1xyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkRGl2NiA9IHN0eWxlZC5kaXZgXHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICB0b3A6IC00MXB4O1xyXG4vLyAgICAgcmlnaHQ6IC00MXB4O1xyXG4vLyAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjVkZWcpO1xyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkU3BhbjEgPSBzdHlsZWQuc3BhbmBcclxuLy8gICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbi8vIGA7XHJcblxyXG4vLyBjb25zdCBTdHlsZWRTcGFuMiA9IHN0eWxlZC5zcGFuYFxyXG4vLyAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4vLyAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjMjY1NWE7XHJcbi8vICAgICBjb2xvcjogI2MyNjU1YTtcclxuLy8gYDtcclxuXHJcbi8vIGludGVyZmFjZSBJSW50cm8ge1xyXG4vLyAgICAgaW5uZXJXaWR0aDogbnVtYmVyO1xyXG4vLyAgICAgdGl0bGU6IHN0cmluZztcclxuLy8gfVxyXG5cclxuLy8gY29uc3QgSW50cm86IFJlYWN0LkZDPElJbnRybz4gPSAoeyBpbm5lcldpZHRoLCB0aXRsZSB9KTogSlNYLkVsZW1lbnQgPT4ge1xyXG4vLyAgICAgY29uc3QgYm94QXJyYXkxID0gW1xyXG4vLyAgICAgICAgIHsgdGl0bGU6ICfsnbTrpoQnLCBkZXNjcmlwdGlvbjogJ+q5gOyEseywrCcgfSxcclxuLy8gICAgICAgICB7IHRpdGxlOiAn7IOd64WE7JuU7J28JywgZGVzY3JpcHRpb246ICc5NC4xMi4wOScgfSxcclxuLy8gICAgIF07XHJcbi8vICAgICBjb25zdCBib3hBcnJheTIgPSBbXHJcbi8vICAgICAgICAgeyB0aXRsZTogJ+ydtOuplOydvCcsIGRlc2NyaXB0aW9uOiAndGpkY2tzZGwwMEBuYXZlci5jb20nIH0sXHJcbi8vICAgICAgICAgeyB0aXRsZTogJ+yXsOudveyymCcsIGRlc2NyaXB0aW9uOiAnMDEwLTMzNjEtMzYzMycgfSxcclxuLy8gICAgIF07XHJcbi8vICAgICBjb25zdCBib3hBcnJheTMgPSBbXHJcbi8vICAgICAgICAgeyB0aXRsZTogJ+2Vmeq1kCcsIGRlc2NyaXB0aW9uOiAn7ZWc7JaR64yAIEVSSUNBJyB9LFxyXG4vLyAgICAgICAgIHsgdGl0bGU6ICfso7zsoITqs7UnLCBkZXNjcmlwdGlvbjogJ+ydkeyaqeyImO2VmScgfSxcclxuLy8gICAgICAgICB7IHRpdGxlOiAn67aA7KCE6rO1JywgZGVzY3JpcHRpb246ICfsu7Ttk6jthLDqs7XtlZknIH0sXHJcbi8vICAgICBdO1xyXG4vLyAgICAgY29uc3QgYm94QXJyYXk0ID0gW1xyXG4vLyAgICAgICAgIHsgdGl0bGU6ICfqsr3roKUnLCBkZXNjcmlwdGlvbjogJzHrhYQgM+qwnOyblCcgfSxcclxuLy8gICAgICAgICB7IHRpdGxlOiAn6riw7Iig67aE7JW8JywgZGVzY3JpcHRpb246ICdGRS9CRSDsm7kg6rCc67CcJyB9LFxyXG4vLyAgICAgXTtcclxuXHJcbi8vICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgIDxCYXNlIHRpdGxlPXt0aXRsZX0gYmFja2dyb3VuZENvbG9yPXsnI0E1QkFBOCd9PlxyXG4vLyAgICAgICAgICAgICA8U3R5ZWxkRGl2Mj5cclxuLy8gICAgICAgICAgICAgICAgIDxTdHllbGREaXYzIGlubmVyV2lkdGg9e2lubmVyV2lkdGh9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHtib3hBcnJheTEubWFwKChib3gpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXY0IGtleT17Ym94LmRlc2NyaXB0aW9ufT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjE+e2JveC5kZXNjcmlwdGlvbn08L1N0eWxlZFNwYW4xPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXY1PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjI+e2JveC50aXRsZX08L1N0eWxlZFNwYW4yPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2NT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2ND5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICB9KX1cclxuLy8gICAgICAgICAgICAgICAgIDwvU3R5ZWxkRGl2Mz5cclxuXHJcbi8vICAgICAgICAgICAgICAgICA8U3R5ZWxkRGl2MyBpbm5lcldpZHRoPXtpbm5lcldpZHRofSBkaXJlY3Rpb249eyd0cnVlJ30+XHJcbi8vICAgICAgICAgICAgICAgICAgICAge2JveEFycmF5Mi5tYXAoKGJveCkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZERpdjQga2V5PXtib3guZGVzY3JpcHRpb259PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMT57Ym94LmRlc2NyaXB0aW9ufTwvU3R5bGVkU3BhbjE+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZERpdjY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMj57Ym94LnRpdGxlfTwvU3R5bGVkU3BhbjI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXY2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXY0PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4vLyAgICAgICAgICAgICAgICAgPC9TdHllbGREaXYzPlxyXG5cclxuLy8gICAgICAgICAgICAgICAgIDxTdHllbGREaXYzIGlubmVyV2lkdGg9e2lubmVyV2lkdGh9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHtib3hBcnJheTMubWFwKChib3gpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXY0IGtleT17Ym94LmRlc2NyaXB0aW9ufT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjE+e2JveC5kZXNjcmlwdGlvbn08L1N0eWxlZFNwYW4xPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXY1PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjI+e2JveC50aXRsZX08L1N0eWxlZFNwYW4yPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2NT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2ND5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICB9KX1cclxuLy8gICAgICAgICAgICAgICAgIDwvU3R5ZWxkRGl2Mz5cclxuXHJcbi8vICAgICAgICAgICAgICAgICA8U3R5ZWxkRGl2MyBpbm5lcldpZHRoPXtpbm5lcldpZHRofSBkaXJlY3Rpb249eyd0cnVlJ30+XHJcbi8vICAgICAgICAgICAgICAgICAgICAge2JveEFycmF5NC5tYXAoKGJveCkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZERpdjQga2V5PXtib3guZGVzY3JpcHRpb259PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMT57Ym94LmRlc2NyaXB0aW9ufTwvU3R5bGVkU3BhbjE+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZERpdjY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMj57Ym94LnRpdGxlfTwvU3R5bGVkU3BhbjI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXY2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXY0PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4vLyAgICAgICAgICAgICAgICAgPC9TdHllbGREaXYzPlxyXG4vLyAgICAgICAgICAgICA8L1N0eWVsZERpdjI+XHJcbi8vICAgICAgICAgPC9CYXNlPlxyXG4vLyAgICAgKTtcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IEludHJvO1xyXG5cclxuaW1wb3J0IHsgdXNlT2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IGluZGV4U3RvcmUgZnJvbSAnLi4vbW9kdWxlcy9pbmRleFN0b3JlJztcclxuaW1wb3J0IHsgbWF4V2lkdGggfSBmcm9tICcuLi9zdHlsZS9zdHlsZSc7XHJcbmltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XHJcblxyXG5jb25zdCBCb3hTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICBtYXJnaW46IDAgMzJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxN3B4O1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElCb3hDb250YWluZXIge1xyXG4gICAgZGlyZWN0aW9uPzogc3RyaW5nOyAvLyB0cnVl66m0IOyasOy4oSwg6re4IOyZuCDsoozsuKFcclxuICAgIGlubmVyV2lkdGg6IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgQm94Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xyXG4gICAgJHsocHJvcHM6IElCb3hDb250YWluZXIpID0+IHtcclxuICAgICAgICBpZiAocHJvcHMuaW5uZXJXaWR0aCA8IG1heFdpZHRoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wcy5kaXJlY3Rpb24gPT09ICd0cnVlJykge1xyXG4gICAgICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgfVxyXG4gICAgfX1cclxuYDtcclxuXHJcbmNvbnN0IEJveE1haW5EaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMThweDtcclxuICAgIG1hcmdpbjogNDNweCAyN3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDJweCA0cHggNHB4ICNjOGM4YzggaW5zZXQsIC0ycHggLTRweCA0cHggI2M4YzhjOCBpbnNldDtcclxuYDtcclxuXHJcbmNvbnN0IEJveExlZnREaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiBjYWxjKC0zOHB4IC0gMC44dncpO1xyXG4gICAgbGVmdDogY2FsYygtMzhweCAtIDAuOHZ3KTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0yNWRlZyk7XHJcbmA7XHJcblxyXG5jb25zdCBCb3hSaWdodERpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IGNhbGMoLTM4cHggLSAwLjh2dyk7XHJcbiAgICByaWdodDogY2FsYygtMzhweCAtIDAuOHZ3KTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDI1ZGVnKTtcclxuYDtcclxuXHJcbmNvbnN0IEJveERlc2NyaXB0aW9uID0gc3R5bGVkLnNwYW5gXHJcbiAgICBmb250LXNpemU6IGNhbGMoMjhweCArIDAuNHZ3KTtcclxuYDtcclxuXHJcbmNvbnN0IEJveFRpdGxlID0gc3R5bGVkLnNwYW5gXHJcbiAgICBmb250LXNpemU6IGNhbGMoMjNweCArIDAuNHZ3KTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjMjY1NWE7XHJcbiAgICBjb2xvcjogI2MyNjU1YTtcclxuYDtcclxuXHJcbmNvbnN0IEludHJvID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIC8vIG1vYnhcclxuICAgIGNvbnN0IHsgYmFzZVN0b3JlIH0gPSBpbmRleFN0b3JlKCk7XHJcblxyXG4gICAgLy8gdmFyaWFibGVcclxuICAgIGNvbnN0IGJveEFycmF5MSA9IFtcclxuICAgICAgICB7IHRpdGxlOiAn7J2066aEJywgZGVzY3JpcHRpb246ICfquYDshLHssKwnIH0sXHJcbiAgICAgICAgeyB0aXRsZTogJ+yDneuFhOyblOydvCcsIGRlc2NyaXB0aW9uOiAnOTQuMTIuMDknIH0sXHJcbiAgICBdO1xyXG4gICAgY29uc3QgYm94QXJyYXkyID0gW1xyXG4gICAgICAgIHsgdGl0bGU6ICfsnbTrqZTsnbwnLCBkZXNjcmlwdGlvbjogJ3RqZGNrc2RsMDBAbmF2ZXIuY29tJyB9LFxyXG4gICAgICAgIHsgdGl0bGU6ICfsl7Drnb3sspgnLCBkZXNjcmlwdGlvbjogJzAxMC0zMzYxLTM2MzMnIH0sXHJcbiAgICBdO1xyXG4gICAgY29uc3QgYm94QXJyYXkzID0gW1xyXG4gICAgICAgIHsgdGl0bGU6ICftlZnqtZAnLCBkZXNjcmlwdGlvbjogJ+2VnOyWkeuMgCBFUklDQScgfSxcclxuICAgICAgICB7IHRpdGxlOiAn7KO87KCE6rO1JywgZGVzY3JpcHRpb246ICfsnZHsmqnsiJjtlZknIH0sXHJcbiAgICAgICAgeyB0aXRsZTogJ+u2gOyghOqztScsIGRlc2NyaXB0aW9uOiAn7Lu07ZOo7YSw6rO17ZWZJyB9LFxyXG4gICAgXTtcclxuICAgIGNvbnN0IGJveEFycmF5NCA9IFtcclxuICAgICAgICB7IHRpdGxlOiAn6rK966ClJywgZGVzY3JpcHRpb246ICcx64WEIDPqsJzsm5QnIH0sXHJcbiAgICAgICAgeyB0aXRsZTogJ+q4sOyIoOu2hOyVvCcsIGRlc2NyaXB0aW9uOiAnRkUvQkUg7Ju5IOqwnOuwnCcgfSxcclxuICAgIF07XHJcblxyXG4gICAgcmV0dXJuIHVzZU9ic2VydmVyKCgpID0+IChcclxuICAgICAgICA8QmFzZSBjb250YWluZXJObz17MX0+XHJcbiAgICAgICAgICAgIDxCb3hTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPEJveENvbnRhaW5lciBpbm5lcldpZHRoPXtiYXNlU3RvcmUuaW5uZXJXaWR0aH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2JveEFycmF5MS5tYXAoKGJveCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveE1haW5EaXYga2V5PXtib3guZGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hEZXNjcmlwdGlvbj57Ym94LmRlc2NyaXB0aW9ufTwvQm94RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveExlZnREaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hUaXRsZT57Ym94LnRpdGxlfTwvQm94VGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3hMZWZ0RGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3hNYWluRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9Cb3hDb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgPEJveENvbnRhaW5lciBpbm5lcldpZHRoPXtiYXNlU3RvcmUuaW5uZXJXaWR0aH0gZGlyZWN0aW9uPXsndHJ1ZSd9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtib3hBcnJheTIubWFwKChib3gpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hNYWluRGl2IGtleT17Ym94LmRlc2NyaXB0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94RGVzY3JpcHRpb24+e2JveC5kZXNjcmlwdGlvbn08L0JveERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hSaWdodERpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveFRpdGxlPntib3gudGl0bGV9PC9Cb3hUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveFJpZ2h0RGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3hNYWluRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9Cb3hDb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgPEJveENvbnRhaW5lciBpbm5lcldpZHRoPXtiYXNlU3RvcmUuaW5uZXJXaWR0aH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2JveEFycmF5My5tYXAoKGJveCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveE1haW5EaXYga2V5PXtib3guZGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hEZXNjcmlwdGlvbj57Ym94LmRlc2NyaXB0aW9ufTwvQm94RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveExlZnREaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hUaXRsZT57Ym94LnRpdGxlfTwvQm94VGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3hMZWZ0RGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3hNYWluRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9Cb3hDb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgPEJveENvbnRhaW5lciBpbm5lcldpZHRoPXtiYXNlU3RvcmUuaW5uZXJXaWR0aH0gZGlyZWN0aW9uPXsndHJ1ZSd9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtib3hBcnJheTQubWFwKChib3gpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hNYWluRGl2IGtleT17Ym94LmRlc2NyaXB0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94RGVzY3JpcHRpb24+e2JveC5kZXNjcmlwdGlvbn08L0JveERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hSaWdodERpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveFRpdGxlPntib3gudGl0bGV9PC9Cb3hUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveFJpZ2h0RGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3hNYWluRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9Cb3hDb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvQm94U2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAncmVkJywgd2lkdGg6ICdjYWxjKDEwMHZ3IC0gKDEwMHZ3IC0gMTAwJSkpJywgaGVpZ2h0OiAnMTAwdmgnIH19PjwvZGl2PlxyXG4gICAgICAgIDwvQmFzZT5cclxuICAgICkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW50cm87XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=