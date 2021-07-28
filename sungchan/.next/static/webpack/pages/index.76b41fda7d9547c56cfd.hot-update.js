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
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxSection, {
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
      }, _this)
    }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2ludHJvLnRzeCJdLCJuYW1lcyI6WyJCb3hTZWN0aW9uIiwic3R5bGVkIiwiQm94Q29udGFpbmVyIiwicHJvcHMiLCJpbm5lcldpZHRoIiwibWF4V2lkdGgiLCJkaXJlY3Rpb24iLCJCb3hNYWluRGl2IiwiQm94TGVmdERpdiIsIkJveFJpZ2h0RGl2IiwiQm94RGVzY3JpcHRpb24iLCJCb3hUaXRsZSIsIkludHJvIiwiaW5kZXhTdG9yZSIsImJhc2VTdG9yZSIsImJveEFycmF5MSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJib3hBcnJheTIiLCJib3hBcnJheTMiLCJib3hBcnJheTQiLCJ1c2VPYnNlcnZlciIsIm1hcCIsImJveCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUE7QUFBQTtBQUFBO0FBQUEsdUJBRko7QUFBQSxlQUFpQk8sR0FBRyxDQUFDTixXQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKO0FBUUgsV0FUQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBM0JKLGVBd0NJLDhEQUFDLFlBQUQ7QUFBYyxvQkFBVSxFQUFFSCxTQUFTLENBQUNWLFVBQXBDO0FBQWdELG1CQUFTLEVBQUUsTUFBM0Q7QUFBQSxvQkFDS2dCLFNBQVMsQ0FBQ0UsR0FBVixDQUFjLFVBQUNDLEdBQUQsRUFBUztBQUNwQixnQ0FDSSw4REFBQyxVQUFEO0FBQUEsc0NBQ0ksOERBQUMsY0FBRDtBQUFBLDBCQUFpQkEsR0FBRyxDQUFDTjtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBRUksOERBQUMsV0FBRDtBQUFBLHVDQUNJLDhEQUFDLFFBQUQ7QUFBQSw0QkFBV00sR0FBRyxDQUFDUDtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKO0FBQUEsZUFBaUJPLEdBQUcsQ0FBQ04sV0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESjtBQVFILFdBVEE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXhDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRGU7QUFBQSxHQUFELENBQWxCO0FBeURILENBaEZEOztHQUFNTCxLO1VBdUJLUyxtRDs7O01BdkJMVCxLO0FBa0ZOLCtEQUFlQSxLQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljc2YjQxZmRhN2Q5NTQ3YzU2Y2ZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XHJcbi8vIGltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG4vLyBpbXBvcnQgeyBtYXhXaWR0aCB9IGZyb20gJy4uL3N0eWxlL3N0eWxlJztcclxuXHJcbi8vIGNvbnN0IFN0eWVsZERpdjIgPSBzdHlsZWQuZGl2YFxyXG4vLyAgICAgbWFyZ2luOiAwIDMycHg7XHJcbi8vICAgICBwYWRkaW5nLWJvdHRvbTogMTdweDtcclxuLy8gYDtcclxuXHJcbi8vIGludGVyZmFjZSBJU3R5bGVkRGl2MyB7XHJcbi8vICAgICBkaXJlY3Rpb24/OiBzdHJpbmc7IC8vIHRydWXrqbQg7Jqw7LihLCDqt7gg7Jm4IOyijOy4oVxyXG4vLyAgICAgaW5uZXJXaWR0aDogbnVtYmVyO1xyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBTdHllbGREaXYzID0gc3R5bGVkLmRpdmBcclxuLy8gICAgIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xyXG4vLyAgICAgJHsocHJvcHM6IElTdHlsZWREaXYzKSA9PiB7XHJcbi8vICAgICAgICAgaWYgKHByb3BzLmlubmVyV2lkdGggPCBtYXhXaWR0aCkge1xyXG4vLyAgICAgICAgICAgICByZXR1cm4gYFxyXG4vLyAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgICAgICAgICBgO1xyXG4vLyAgICAgICAgIH0gZWxzZSBpZiAocHJvcHMuZGlyZWN0aW9uID09PSAndHJ1ZScpIHtcclxuLy8gICAgICAgICAgICAgcmV0dXJuIGBcclxuLy8gICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4vLyAgICAgICAgICAgICBgO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH19XHJcbi8vIGA7XHJcblxyXG4vLyBjb25zdCBTdHlsZWREaXY0ID0gc3R5bGVkLmRpdmBcclxuLy8gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbi8vICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuLy8gICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbi8vICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuLy8gICAgIHBhZGRpbmc6IDEycHg7XHJcbi8vICAgICBtYXJnaW46IDQzcHggMjdweDtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbi8vIGA7XHJcblxyXG4vLyBjb25zdCBTdHlsZWREaXY1ID0gc3R5bGVkLmRpdmBcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIHRvcDogLTQxcHg7XHJcbi8vICAgICBsZWZ0OiAtNDFweDtcclxuLy8gICAgIHRyYW5zZm9ybTogcm90YXRlKC0yNWRlZyk7XHJcbi8vIGA7XHJcblxyXG4vLyBjb25zdCBTdHlsZWREaXY2ID0gc3R5bGVkLmRpdmBcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIHRvcDogLTQxcHg7XHJcbi8vICAgICByaWdodDogLTQxcHg7XHJcbi8vICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNWRlZyk7XHJcbi8vIGA7XHJcblxyXG4vLyBjb25zdCBTdHlsZWRTcGFuMSA9IHN0eWxlZC5zcGFuYFxyXG4vLyAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuLy8gYDtcclxuXHJcbi8vIGNvbnN0IFN0eWxlZFNwYW4yID0gc3R5bGVkLnNwYW5gXHJcbi8vICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2MyNjU1YTtcclxuLy8gICAgIGNvbG9yOiAjYzI2NTVhO1xyXG4vLyBgO1xyXG5cclxuLy8gaW50ZXJmYWNlIElJbnRybyB7XHJcbi8vICAgICBpbm5lcldpZHRoOiBudW1iZXI7XHJcbi8vICAgICB0aXRsZTogc3RyaW5nO1xyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBJbnRybzogUmVhY3QuRkM8SUludHJvPiA9ICh7IGlubmVyV2lkdGgsIHRpdGxlIH0pOiBKU1guRWxlbWVudCA9PiB7XHJcbi8vICAgICBjb25zdCBib3hBcnJheTEgPSBbXHJcbi8vICAgICAgICAgeyB0aXRsZTogJ+ydtOumhCcsIGRlc2NyaXB0aW9uOiAn6rmA7ISx7LCsJyB9LFxyXG4vLyAgICAgICAgIHsgdGl0bGU6ICfsg53rhYTsm5TsnbwnLCBkZXNjcmlwdGlvbjogJzk0LjEyLjA5JyB9LFxyXG4vLyAgICAgXTtcclxuLy8gICAgIGNvbnN0IGJveEFycmF5MiA9IFtcclxuLy8gICAgICAgICB7IHRpdGxlOiAn7J2066mU7J28JywgZGVzY3JpcHRpb246ICd0amRja3NkbDAwQG5hdmVyLmNvbScgfSxcclxuLy8gICAgICAgICB7IHRpdGxlOiAn7Jew65297LKYJywgZGVzY3JpcHRpb246ICcwMTAtMzM2MS0zNjMzJyB9LFxyXG4vLyAgICAgXTtcclxuLy8gICAgIGNvbnN0IGJveEFycmF5MyA9IFtcclxuLy8gICAgICAgICB7IHRpdGxlOiAn7ZWZ6rWQJywgZGVzY3JpcHRpb246ICftlZzslpHrjIAgRVJJQ0EnIH0sXHJcbi8vICAgICAgICAgeyB0aXRsZTogJ+yjvOyghOqztScsIGRlc2NyaXB0aW9uOiAn7J2R7Jqp7IiY7ZWZJyB9LFxyXG4vLyAgICAgICAgIHsgdGl0bGU6ICfrtoDsoITqs7UnLCBkZXNjcmlwdGlvbjogJ+y7tO2TqO2EsOqzte2VmScgfSxcclxuLy8gICAgIF07XHJcbi8vICAgICBjb25zdCBib3hBcnJheTQgPSBbXHJcbi8vICAgICAgICAgeyB0aXRsZTogJ+qyveugpScsIGRlc2NyaXB0aW9uOiAnMeuFhCAz6rCc7JuUJyB9LFxyXG4vLyAgICAgICAgIHsgdGl0bGU6ICfquLDsiKDrtoTslbwnLCBkZXNjcmlwdGlvbjogJ0ZFL0JFIOybuSDqsJzrsJwnIH0sXHJcbi8vICAgICBdO1xyXG5cclxuLy8gICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgPEJhc2UgdGl0bGU9e3RpdGxlfSBiYWNrZ3JvdW5kQ29sb3I9eycjQTVCQUE4J30+XHJcbi8vICAgICAgICAgICAgIDxTdHllbGREaXYyPlxyXG4vLyAgICAgICAgICAgICAgICAgPFN0eWVsZERpdjMgaW5uZXJXaWR0aD17aW5uZXJXaWR0aH0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAge2JveEFycmF5MS5tYXAoKGJveCkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZERpdjQga2V5PXtib3guZGVzY3JpcHRpb259PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMT57Ym94LmRlc2NyaXB0aW9ufTwvU3R5bGVkU3BhbjE+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZERpdjU+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMj57Ym94LnRpdGxlfTwvU3R5bGVkU3BhbjI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXY1PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXY0PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4vLyAgICAgICAgICAgICAgICAgPC9TdHllbGREaXYzPlxyXG5cclxuLy8gICAgICAgICAgICAgICAgIDxTdHllbGREaXYzIGlubmVyV2lkdGg9e2lubmVyV2lkdGh9IGRpcmVjdGlvbj17J3RydWUnfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICB7Ym94QXJyYXkyLm1hcCgoYm94KSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRGl2NCBrZXk9e2JveC5kZXNjcmlwdGlvbn0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4xPntib3guZGVzY3JpcHRpb259PC9TdHlsZWRTcGFuMT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRGl2Nj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4yPntib3gudGl0bGV9PC9TdHlsZWRTcGFuMj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZERpdjY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZERpdjQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbi8vICAgICAgICAgICAgICAgICA8L1N0eWVsZERpdjM+XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgPFN0eWVsZERpdjMgaW5uZXJXaWR0aD17aW5uZXJXaWR0aH0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAge2JveEFycmF5My5tYXAoKGJveCkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZERpdjQga2V5PXtib3guZGVzY3JpcHRpb259PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMT57Ym94LmRlc2NyaXB0aW9ufTwvU3R5bGVkU3BhbjE+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZERpdjU+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMj57Ym94LnRpdGxlfTwvU3R5bGVkU3BhbjI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXY1PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXY0PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4vLyAgICAgICAgICAgICAgICAgPC9TdHllbGREaXYzPlxyXG5cclxuLy8gICAgICAgICAgICAgICAgIDxTdHllbGREaXYzIGlubmVyV2lkdGg9e2lubmVyV2lkdGh9IGRpcmVjdGlvbj17J3RydWUnfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICB7Ym94QXJyYXk0Lm1hcCgoYm94KSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRGl2NCBrZXk9e2JveC5kZXNjcmlwdGlvbn0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4xPntib3guZGVzY3JpcHRpb259PC9TdHlsZWRTcGFuMT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRGl2Nj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4yPntib3gudGl0bGV9PC9TdHlsZWRTcGFuMj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZERpdjY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZERpdjQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbi8vICAgICAgICAgICAgICAgICA8L1N0eWVsZERpdjM+XHJcbi8vICAgICAgICAgICAgIDwvU3R5ZWxkRGl2Mj5cclxuLy8gICAgICAgICA8L0Jhc2U+XHJcbi8vICAgICApO1xyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgSW50cm87XHJcblxyXG5pbXBvcnQgeyB1c2VPYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgaW5kZXhTdG9yZSBmcm9tICcuLi9tb2R1bGVzL2luZGV4U3RvcmUnO1xyXG5pbXBvcnQgeyBtYXhXaWR0aCB9IGZyb20gJy4uL3N0eWxlL3N0eWxlJztcclxuaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcclxuXHJcbmNvbnN0IEJveFNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgIG1hcmdpbjogMCAzMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE3cHg7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSUJveENvbnRhaW5lciB7XHJcbiAgICBkaXJlY3Rpb24/OiBzdHJpbmc7IC8vIHRydWXrqbQg7Jqw7LihLCDqt7gg7Jm4IOyijOy4oVxyXG4gICAgaW5uZXJXaWR0aDogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBCb3hDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XHJcbiAgICAkeyhwcm9wczogSUJveENvbnRhaW5lcikgPT4ge1xyXG4gICAgICAgIGlmIChwcm9wcy5pbm5lcldpZHRoIDwgbWF4V2lkdGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYDtcclxuICAgICAgICB9IGVsc2UgaWYgKHByb3BzLmRpcmVjdGlvbiA9PT0gJ3RydWUnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgYDtcclxuICAgICAgICB9XHJcbiAgICB9fVxyXG5gO1xyXG5cclxuY29uc3QgQm94TWFpbkRpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxOHB4O1xyXG4gICAgbWFyZ2luOiA0M3B4IDI3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDRweCA0cHggI2M4YzhjOCBpbnNldCwgLTJweCAtNHB4IDRweCAjYzhjOGM4IGluc2V0O1xyXG5gO1xyXG5cclxuY29uc3QgQm94TGVmdERpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IGNhbGMoLTM4cHggLSAwLjh2dyk7XHJcbiAgICBsZWZ0OiBjYWxjKC0zOHB4IC0gMC44dncpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTI1ZGVnKTtcclxuYDtcclxuXHJcbmNvbnN0IEJveFJpZ2h0RGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogY2FsYygtMzhweCAtIDAuOHZ3KTtcclxuICAgIHJpZ2h0OiBjYWxjKC0zOHB4IC0gMC44dncpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjVkZWcpO1xyXG5gO1xyXG5cclxuY29uc3QgQm94RGVzY3JpcHRpb24gPSBzdHlsZWQuc3BhbmBcclxuICAgIGZvbnQtc2l6ZTogY2FsYygyOHB4ICsgMC40dncpO1xyXG5gO1xyXG5cclxuY29uc3QgQm94VGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuICAgIGZvbnQtc2l6ZTogY2FsYygyM3B4ICsgMC40dncpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2MyNjU1YTtcclxuICAgIGNvbG9yOiAjYzI2NTVhO1xyXG5gO1xyXG5cclxuY29uc3QgSW50cm8gPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgLy8gbW9ieFxyXG4gICAgY29uc3QgeyBiYXNlU3RvcmUgfSA9IGluZGV4U3RvcmUoKTtcclxuXHJcbiAgICAvLyB2YXJpYWJsZVxyXG4gICAgY29uc3QgYm94QXJyYXkxID0gW1xyXG4gICAgICAgIHsgdGl0bGU6ICfsnbTrpoQnLCBkZXNjcmlwdGlvbjogJ+q5gOyEseywrCcgfSxcclxuICAgICAgICB7IHRpdGxlOiAn7IOd64WE7JuU7J28JywgZGVzY3JpcHRpb246ICc5NC4xMi4wOScgfSxcclxuICAgIF07XHJcbiAgICBjb25zdCBib3hBcnJheTIgPSBbXHJcbiAgICAgICAgeyB0aXRsZTogJ+ydtOuplOydvCcsIGRlc2NyaXB0aW9uOiAndGpkY2tzZGwwMEBuYXZlci5jb20nIH0sXHJcbiAgICAgICAgeyB0aXRsZTogJ+yXsOudveyymCcsIGRlc2NyaXB0aW9uOiAnMDEwLTMzNjEtMzYzMycgfSxcclxuICAgIF07XHJcbiAgICBjb25zdCBib3hBcnJheTMgPSBbXHJcbiAgICAgICAgeyB0aXRsZTogJ+2Vmeq1kCcsIGRlc2NyaXB0aW9uOiAn7ZWc7JaR64yAIEVSSUNBJyB9LFxyXG4gICAgICAgIHsgdGl0bGU6ICfso7zsoITqs7UnLCBkZXNjcmlwdGlvbjogJ+ydkeyaqeyImO2VmScgfSxcclxuICAgICAgICB7IHRpdGxlOiAn67aA7KCE6rO1JywgZGVzY3JpcHRpb246ICfsu7Ttk6jthLDqs7XtlZknIH0sXHJcbiAgICBdO1xyXG4gICAgY29uc3QgYm94QXJyYXk0ID0gW1xyXG4gICAgICAgIHsgdGl0bGU6ICfqsr3roKUnLCBkZXNjcmlwdGlvbjogJzHrhYQgM+qwnOyblCcgfSxcclxuICAgICAgICB7IHRpdGxlOiAn6riw7Iig67aE7JW8JywgZGVzY3JpcHRpb246ICdGRS9CRSDsm7kg6rCc67CcJyB9LFxyXG4gICAgXTtcclxuXHJcbiAgICByZXR1cm4gdXNlT2JzZXJ2ZXIoKCkgPT4gKFxyXG4gICAgICAgIDxCYXNlIGNvbnRhaW5lck5vPXsxfT5cclxuICAgICAgICAgICAgPEJveFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8Qm94Q29udGFpbmVyIGlubmVyV2lkdGg9e2Jhc2VTdG9yZS5pbm5lcldpZHRofT5cclxuICAgICAgICAgICAgICAgICAgICB7Ym94QXJyYXkxLm1hcCgoYm94KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94TWFpbkRpdiBrZXk9e2JveC5kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveERlc2NyaXB0aW9uPntib3guZGVzY3JpcHRpb259PC9Cb3hEZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94TGVmdERpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveFRpdGxlPntib3gudGl0bGV9PC9Cb3hUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveExlZnREaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveE1haW5EaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L0JveENvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgICA8Qm94Q29udGFpbmVyIGlubmVyV2lkdGg9e2Jhc2VTdG9yZS5pbm5lcldpZHRofSBkaXJlY3Rpb249eyd0cnVlJ30+XHJcbiAgICAgICAgICAgICAgICAgICAge2JveEFycmF5Mi5tYXAoKGJveCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveE1haW5EaXYga2V5PXtib3guZGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hEZXNjcmlwdGlvbj57Ym94LmRlc2NyaXB0aW9ufTwvQm94RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveFJpZ2h0RGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94VGl0bGU+e2JveC50aXRsZX08L0JveFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94UmlnaHREaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveE1haW5EaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L0JveENvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgICA8Qm94Q29udGFpbmVyIGlubmVyV2lkdGg9e2Jhc2VTdG9yZS5pbm5lcldpZHRofT5cclxuICAgICAgICAgICAgICAgICAgICB7Ym94QXJyYXkzLm1hcCgoYm94KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94TWFpbkRpdiBrZXk9e2JveC5kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveERlc2NyaXB0aW9uPntib3guZGVzY3JpcHRpb259PC9Cb3hEZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94TGVmdERpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveFRpdGxlPntib3gudGl0bGV9PC9Cb3hUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveExlZnREaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveE1haW5EaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L0JveENvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgICA8Qm94Q29udGFpbmVyIGlubmVyV2lkdGg9e2Jhc2VTdG9yZS5pbm5lcldpZHRofSBkaXJlY3Rpb249eyd0cnVlJ30+XHJcbiAgICAgICAgICAgICAgICAgICAge2JveEFycmF5NC5tYXAoKGJveCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveE1haW5EaXYga2V5PXtib3guZGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hEZXNjcmlwdGlvbj57Ym94LmRlc2NyaXB0aW9ufTwvQm94RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveFJpZ2h0RGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94VGl0bGU+e2JveC50aXRsZX08L0JveFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94UmlnaHREaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveE1haW5EaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L0JveENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9Cb3hTZWN0aW9uPlxyXG4gICAgICAgIDwvQmFzZT5cclxuICAgICkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW50cm87XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=