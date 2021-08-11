self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./component/base.tsx":
/*!****************************!*\
  !*** ./component/base.tsx ***!
  \****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);


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


/***/ }),

/***/ "./component/career.tsx":
/*!******************************!*\
  !*** ./component/career.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_User_Desktop_study_portfolio_sungchan_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base */ "./component/base.tsx");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\component\\career.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var CareerContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "career__CareerContainer",
  componentId: "sc-10mcn0j-0"
})(["position:relative;border-radius:0 12px 12px 12px;background-color:#fff;margin:50px 18px 65px 18px;box-shadow:2px 0 4px #c8c8c8 inset,-2px -4px 4px #c8c8c8 inset;"]);
_c = CareerContainer;
var ImageDiv = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "career__ImageDiv",
  componentId: "sc-10mcn0j-1"
})(["margin:18px 25px;"]);
_c2 = ImageDiv;
var TitleSection = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.section.withConfig({
  displayName: "career__TitleSection",
  componentId: "sc-10mcn0j-2"
})(["position:absolute;display:flex;align-items:center;top:-40px;left:0;height:40px;background-color:#fff;border-radius:12px 12px 0 0;padding:0 12px;box-shadow:2px 4px 4px #c8c8c8 inset,-2px 0 4px #c8c8c8 inset;"]);
_c3 = TitleSection;
var ContentsSection = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.section.withConfig({
  displayName: "career__ContentsSection",
  componentId: "sc-10mcn0j-3"
})(["display:flex;justify-content:space-around;flex-wrap:wrap;padding:0 16px;@media screen and (min-width:700px){flex-wrap:nowrap;}"]);
_c4 = ContentsSection;
var TextDescriptionDiv = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "career__TextDescriptionDiv",
  componentId: "sc-10mcn0j-4"
})([""]);
_c5 = TextDescriptionDiv;
var PictureContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "career__PictureContainer",
  componentId: "sc-10mcn0j-5"
})(["position:fixed;width:100%;height:100vh;background-color:rgba(0,0,0,0.5);display:none;justify-content:center;align-items:center;z-index:101;top:0;cursor:pointer;"]);
_c6 = PictureContainer;
var PuzzleSection = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.section.withConfig({
  displayName: "career__PuzzleSection",
  componentId: "sc-10mcn0j-6"
})(["padding-left:25px;"]);
_c7 = PuzzleSection;
var PuzzleDiv = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "career__PuzzleDiv",
  componentId: "sc-10mcn0j-7"
})(["position:relative;display:flex;justify-content:center;align-items:center;width:100px;height:40px;background-color:#fff;margin:40px 0 100px 0;transform:rotate(-16deg);box-shadow:2px 2px 4px rgba(0,0,0,0.5);@media screen and (min-width:700px){width:160px;height:60px;box-shadow:3px 3px 6px rgba(0,0,0,0.5);}"]);
_c8 = PuzzleDiv;
var PuzzleLeft = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "career__PuzzleLeft",
  componentId: "sc-10mcn0j-8"
})(["position:absolute;background-color:#fff;border-radius:50%;width:20px;height:20px;top:10px;left:-10px;@media screen and (min-width:700px){width:30px;height:30px;left:-15px;top:15px;}"]);
_c9 = PuzzleLeft;
var PuzzleRight = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "career__PuzzleRight",
  componentId: "sc-10mcn0j-9"
})(["position:absolute;background-color:", ";border-radius:50%;width:20px;height:20px;top:10px;right:-10px;box-shadow:inset 2px 1px 0px rgba(0,0,0,0.5);@media screen and (min-width:700px){width:30px;height:30px;top:15px;right:-15px;}"], function (props) {
  return props.backgroundColor;
});
_c10 = PuzzleRight;
var PuzzleTop = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "career__PuzzleTop",
  componentId: "sc-10mcn0j-10"
})(["position:absolute;background-color:#fff;border-radius:50%;width:20px;height:20px;top:-10px;left:40px;@media screen and (min-width:700px){width:30px;height:30px;top:-15px;left:65px;}"]);
_c11 = PuzzleTop;
var CareerTitle = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.span.withConfig({
  displayName: "career__CareerTitle",
  componentId: "sc-10mcn0j-11"
})(["color:", ";font-weight:600;font-size:min(1.3em,0.8em + 1.2vw);"], function (props) {
  return props.color;
});
_c12 = CareerTitle;
var TextDescription = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.span.withConfig({
  displayName: "career__TextDescription",
  componentId: "sc-10mcn0j-12"
})(["display:block;margin:18px 0;font-weight:600;font-size:min(1.1em,0.7em + 1.1vw);padding:8px 0;border-bottom:1px solid rgba(0,0,0,0.4);", ""], function (props) {
  if (props.type === 'camera') {
    return "\n                color: rgba(0, 0, 0, 0.7);\n                &:before {\n                    display: inline-block;\n                    width: 26px;\n                    content: '\f030';\n                    font-family: FontAwesome;\n                    color: ".concat(props.backgroundColor, ";\n                    cursor: url(").concat(props.src, "), pointer;\n                }\n            ");
  } else if (props.type === 'calendar') {
    return "\n                color: rgba(0, 0, 0, 0.7);\n                &:before {\n                    display: inline-block;\n                    width: 26px;\n                    content: '\f272';\n                    font-family: FontAwesome;\n                    color: ".concat(props.backgroundColor, ";\n                }\n            ");
  } else if (props.type === 'position') {
    return "\n                color: rgba(0, 0, 0, 0.7);\n                &:before {\n                    display: inline-block;\n                    width: 26px;\n                    content: '\f2bb';\n                    font-family: FontAwesome;\n                    color: ".concat(props.backgroundColor, ";\n                }\n            ");
  } else {
    return "\n                color: rgba(0, 0, 0, 0.7);\n                &:before {\n                    display: inline-block;\n                    width: 26px;\n                    content: '\f005';\n                    font-family: FontAwesome;\n                    color: ".concat(props.backgroundColor, ";\n                }\n            ");
  }
});
_c13 = TextDescription;
var PuzzleTitle = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.span.withConfig({
  displayName: "career__PuzzleTitle",
  componentId: "sc-10mcn0j-13"
})(["font-weight:600;font-size:1.2em;@media screen and (min-width:700px){font-size:1.5em;}"]);
_c14 = PuzzleTitle;
var CareerImage = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.img.withConfig({
  displayName: "career__CareerImage",
  componentId: "sc-10mcn0j-14"
})(["width:min(20em,calc(15em + 10vw));"]);
_c15 = CareerImage;
var PictureImage = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.img.withConfig({
  displayName: "career__PictureImage",
  componentId: "sc-10mcn0j-15"
})(["margin:20px;max-width:calc(100% - 28px);max-height:calc(100% - 28px);"]);
_c16 = PictureImage;

var Career = function Career(_ref) {
  _s();

  var componentNo = _ref.componentNo;
  // redux
  var backgroundColorArray = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.baseReducer.backgroundColorArray;
  }); // state

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__.useState(''),
      _React$useState2 = (0,C_Users_User_Desktop_study_portfolio_sungchan_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 2),
      pictureImage = _React$useState2[0],
      setPictureImage = _React$useState2[1]; // ref


  var pictureContainerRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(); // onClick

  var onClickCamera = function onClickCamera(e, img) {
    if (pictureContainerRef.current) {
      e.stopPropagation();
      setPictureImage(img);
      pictureContainerRef.current.style.display = 'flex';
    }
  };

  var onClickPictureContainer = function onClickPictureContainer() {
    if (pictureContainerRef.current) {
      setPictureImage('');
      pictureContainerRef.current.style.display = 'none';
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_base__WEBPACK_IMPORTED_MODULE_3___default()), {
      componentNo: componentNo,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PuzzleSection, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PuzzleDiv, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PuzzleLeft, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 266,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PuzzleRight, {
            backgroundColor: backgroundColorArray[componentNo]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 267,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PuzzleTop, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 268,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PuzzleTitle, {
            children: "\uACBD\uB825"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 269,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CareerContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleSection, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CareerTitle, {
            color: '#33bdda',
            children: "\uC0BC\uC131 \uCCAD\uB144 \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uC544\uCE74\uB370\uBBF8"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 275,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentsSection, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageDiv, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CareerImage, {
              src: "/image/ssafy1.PNG"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 280,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 279,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescriptionDiv, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "calendar",
              children: "19.07 ~ 20.03"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 284,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "camera",
              src: "/image/topScore_mini.png",
              onClick: function onClick(e) {
                return onClickCamera(e, '/image/topScore.jpg');
              },
              children: "1\uD559\uAE30 \uBC18 \uB300\uD45C \uC131\uC801 \uC6B0\uC218\uC0C1 \uCDE8\uB4DD"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 287,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "camera",
              src: "/image/abroadEducation_mini.png",
              onClick: function onClick(e) {
                return onClickCamera(e, '/image/abroadEducation.jpg');
              },
              children: "\uD574\uC678 \uC5F0\uC218 \uB300\uC0C1\uC790\uB85C \uBC1C\uD0C1"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 295,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "\uC6F9 \uAE30\uBC18 \uAE30\uCD08 \uBC0F \uC2EC\uD654 \uAD50\uC721 \uC218\uAC15"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 303,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "camera",
              src: "/image/swexpertScore_mini.png",
              onClick: function onClick(e) {
                return onClickCamera(e, '/image/swexpertScore.PNG');
              },
              children: "\uC0BC\uC131 SW \uC5ED\uB7C9 \uD14C\uC2A4\uD2B8 A+ \uCDE8\uB4DD"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 306,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 283,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CareerContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleSection, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CareerTitle, {
            color: '#032970',
            children: "\uD604\uB300 \uC624\uD1A0\uC5D0\uBC84"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 320,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 319,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentsSection, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageDiv, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CareerImage, {
              src: "/image/autoever1.PNG"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 325,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 324,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescriptionDiv, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "calendar",
              children: "20.03 ~ \uD604\uC7AC"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 329,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "position",
              children: "\uC790\uB3D9\uCC28 \uD488\uC9C8 \uAC1C\uC120 \uC2DC\uC2A4\uD15C FE/BE \uAC1C\uBC1C \uBC0F \uC6B4\uC601"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 332,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "\uD300 \uB0B4 Git \uB3C4\uC785 \uBC0F \uC0AC\uB0B4 \uC9C1\uC6D0\uB4E4\uC5D0\uAC8C Git\uC0AC\uC6A9 \uBC29\uBC95 \uAD50\uC721 \uB2F4\uB2F9"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 335,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "\uD300 \uB0B4 \uC2E0\uAE30\uC220 \uC801\uC6A9 \uB2F4\uB2F9"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 338,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "\uC11C\uBE44\uC2A4 \uD6A8\uC728\uD654\uB97C \uC704\uD55C \uC2DC\uC2A4\uD15C \uAC1C\uD3B8 \uD504\uB85C\uC81D\uD2B8 \uC9C4\uD589"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 341,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "React \uCD5C\uC801\uD654 \uC791\uC5C5\uC744 \uD1B5\uD55C \uC11C\uBE44\uC2A4 \uC18D\uB3C4 \uAC1C\uC120"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 344,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "\uC678\uBD80 \uC2DC\uC2A4\uD15C\uACFC \uC5F0\uACC4\uB97C \uC704\uD55C \uACF5\uC6A9 Rest API \uAC1C\uBC1C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 347,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 328,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 323,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 318,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PictureContainer, {
      ref: pictureContainerRef,
      onClick: onClickPictureContainer,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PictureImage, {
        src: pictureImage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 356,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(Career, "gdDVhZqu5DEgDnVUEN9ZE6T9tsY=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector];
});

_c17 = Career;
/* harmony default export */ __webpack_exports__["default"] = (Career);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17;

$RefreshReg$(_c, "CareerContainer");
$RefreshReg$(_c2, "ImageDiv");
$RefreshReg$(_c3, "TitleSection");
$RefreshReg$(_c4, "ContentsSection");
$RefreshReg$(_c5, "TextDescriptionDiv");
$RefreshReg$(_c6, "PictureContainer");
$RefreshReg$(_c7, "PuzzleSection");
$RefreshReg$(_c8, "PuzzleDiv");
$RefreshReg$(_c9, "PuzzleLeft");
$RefreshReg$(_c10, "PuzzleRight");
$RefreshReg$(_c11, "PuzzleTop");
$RefreshReg$(_c12, "CareerTitle");
$RefreshReg$(_c13, "TextDescription");
$RefreshReg$(_c14, "PuzzleTitle");
$RefreshReg$(_c15, "CareerImage");
$RefreshReg$(_c16, "PictureImage");
$RefreshReg$(_c17, "Career");

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


/***/ }),

/***/ "./component/intro.tsx":
/*!*****************************!*\
  !*** ./component/intro.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_User_Desktop_study_portfolio_sungchan_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base */ "./component/base.tsx");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_base__WEBPACK_IMPORTED_MODULE_3__);
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



var IntroContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div.withConfig({
  displayName: "intro__IntroContainer",
  componentId: "sc-1aywpbq-0"
})(["height:calc(100% - 56px);padding:28px 22px;"]);
_c = IntroContainer;
var ContentsSection = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.section.withConfig({
  displayName: "intro__ContentsSection",
  componentId: "sc-1aywpbq-1"
})(["display:grid;grid-template-columns:3fr 7fr;align-items:center;border-bottom:1px solid rgba(0,0,0,0.4);padding-bottom:8px;margin-bottom:22px;height:", "px;"], function (props) {
  return props.height;
});
_c2 = ContentsSection;
var ContentsTitle = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.span.withConfig({
  displayName: "intro__ContentsTitle",
  componentId: "sc-1aywpbq-2"
})(["font-weight:600;font-size:min(calc(0.8em + 0.8vw),1.1em);color:rgba(0,0,0,0.4);"]);
_c3 = ContentsTitle;
var ContentsDescription = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.span.withConfig({
  displayName: "intro__ContentsDescription",
  componentId: "sc-1aywpbq-3"
})(["font-weight:600;font-size:min(calc(1em + 1vw),1.8em);"]);
_c4 = ContentsDescription;

var Intro = function Intro(_ref) {
  _s();

  var componentNo = _ref.componentNo;

  // state
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__.useState([]),
      _React$useState2 = (0,C_Users_User_Desktop_study_portfolio_sungchan_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 2),
      addSections = _React$useState2[0],
      setAddSections = _React$useState2[1]; // ref


  var introContainerRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef();
  var contentsSectionRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(); // variable

  var contentsArray = [{
    title: '이름',
    description: '김성찬'
  }, {
    title: '생년월일',
    description: '94.12.09'
  }, {
    title: '이메일',
    description: 'tjdcksdl00@naver.com'
  }, {
    title: '연락처',
    description: '010-3361-3633'
  }, {
    title: '학교',
    description: '한양대 ERICA'
  }, {
    title: '주전공',
    description: '응용수학'
  }, {
    title: '부전공',
    description: '컴퓨터공학'
  }, {
    title: '경력',
    description: '1년 3개월'
  }, {
    title: '기술분야',
    description: 'FE/BE 웹 개발'
  }]; // useEffect

  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    getAddSections();
  }, []); // normal
  // contents를 제외한 부가 너비 구하기

  var getAddSections = function getAddSections() {
    var totalCount = introContainerRef.current.clientHeight / (contentsSectionRef.current.clientHeight + 30);
    var addSections = [];

    for (var i = 0; i < totalCount - contentsArray.length; i++) {
      addSections.push(i);
    }

    setAddSections(addSections);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_base__WEBPACK_IMPORTED_MODULE_3___default()), {
    componentNo: componentNo,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(IntroContainer, {
      ref: introContainerRef,
      children: [contentsArray.map(function (contents, index) {
        if (index === 0) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentsSection, {
            ref: contentsSectionRef,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentsTitle, {
              children: contents.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 238,
              columnNumber: 33
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentsDescription, {
              children: contents.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 239,
              columnNumber: 33
            }, _this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 237,
            columnNumber: 29
          }, _this);
        } else {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentsSection, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentsTitle, {
              children: contents.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 245,
              columnNumber: 33
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentsDescription, {
              children: contents.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 246,
              columnNumber: 33
            }, _this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 244,
            columnNumber: 29
          }, _this);
        }
      }), addSections.map(function (addSection) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentsSection, {
          height: contentsSectionRef.current.clientHeight - 8,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentsTitle, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 255,
            columnNumber: 29
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentsDescription, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 256,
            columnNumber: 29
          }, _this)]
        }, addSection, true, {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 25
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 232,
    columnNumber: 9
  }, _this);
};

_s(Intro, "punWf1KKCjpE9ttxo0tKyei5nPU=");

_c5 = Intro;
/* harmony default export */ __webpack_exports__["default"] = (Intro);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "IntroContainer");
$RefreshReg$(_c2, "ContentsSection");
$RefreshReg$(_c3, "ContentsTitle");
$RefreshReg$(_c4, "ContentsDescription");
$RefreshReg$(_c5, "Intro");

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


/***/ }),

/***/ "./component/main.tsx":
/*!****************************!*\
  !*** ./component/main.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ "./component/base.tsx");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_base__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\component\\main.tsx",
    _this = undefined;

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



var TitleSectionKeyFrame = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.keyframes)(["0%{transform:translateY(40px);opacity:0;}100%{transfrom:translateY(0);opacity:1;}"]);
var TitleSection = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.section.withConfig({
  displayName: "main__TitleSection",
  componentId: "sc-1r8z56n-0"
})(["padding:0 30px;text-align:center;animation-name:", ";animation-duration:3s;"], TitleSectionKeyFrame);
_c = TitleSection;
var MainTitle = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.span.withConfig({
  displayName: "main__MainTitle",
  componentId: "sc-1r8z56n-1"
})(["display:block;font-size:calc(54px + 1.5vw);font-weight:600;"]);
_c2 = MainTitle;
var SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.span.withConfig({
  displayName: "main__SubTitle",
  componentId: "sc-1r8z56n-2"
})(["display:block;font-size:calc(24px + 0.4vw);"]);
_c3 = SubTitle;

var Main = function Main(_ref) {
  var componentNo = _ref.componentNo;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_base__WEBPACK_IMPORTED_MODULE_2___default()), {
      componentNo: componentNo,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleSection, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainTitle, {
          children: "\uAE40\uC131\uCC2C\uC758 Portfolio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubTitle, {
          children: "Since 2021"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 13
    }, _this)
  }, void 0, false);
};

_c4 = Main;
/* harmony default export */ __webpack_exports__["default"] = (Main);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "TitleSection");
$RefreshReg$(_c2, "MainTitle");
$RefreshReg$(_c3, "SubTitle");
$RefreshReg$(_c4, "Main");

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


/***/ }),

/***/ "./component/more.tsx":
/*!****************************!*\
  !*** ./component/more.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ "./component/base.tsx");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_base__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\component\\more.tsx",
    _this = undefined;




var MoreContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "more__MoreContainer",
  componentId: "sc-16793nn-0"
})(["display:flex;justify-content:center;flex-direction:column;min-height:100%;"]);
_c = MoreContainer;
var HeaderSection = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.section.withConfig({
  displayName: "more__HeaderSection",
  componentId: "sc-16793nn-1"
})(["margin:24px 0;padding:0 24px;"]);
_c2 = HeaderSection;
var UrlSection = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.section.withConfig({
  displayName: "more__UrlSection",
  componentId: "sc-16793nn-2"
})(["margin:8px 0;padding:0 24px;"]);
_c3 = UrlSection;
var FooterSection = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.section.withConfig({
  displayName: "more__FooterSection",
  componentId: "sc-16793nn-3"
})(["margin:24px 0;padding:0 24px;"]);
_c4 = FooterSection;
var UrlMainDiv = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "more__UrlMainDiv",
  componentId: "sc-16793nn-4"
})(["display:inline-block;box-shadow:2px 2px 4px rgba(0,0,0,0.5);padding:12px;margin:0 24px 24px 0;cursor:pointer;background-color:#fff;transition-duration:0.4s;&:hover{transform:translateY(-10px);}"]);
_c5 = UrlMainDiv;
var UrlSubDiv = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "more__UrlSubDiv",
  componentId: "sc-16793nn-5"
})(["display:flex;flex-direction:column;align-items:center;"]);
_c6 = UrlSubDiv;
var HeaderText = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.span.withConfig({
  displayName: "more__HeaderText",
  componentId: "sc-16793nn-6"
})(["display:block;font-weight:600;font-size:min(1.9em,1.3em + 1vw);"]);
_c7 = HeaderText;
var UrlText = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.span.withConfig({
  displayName: "more__UrlText",
  componentId: "sc-16793nn-7"
})(["font-weight:600;font-size:min(1.2em,1em + 0.7vw);margin:8px 0;"]);
_c8 = UrlText;
var FooterText = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.span.withConfig({
  displayName: "more__FooterText",
  componentId: "sc-16793nn-8"
})(["display:block;font-weight:600;font-size:min(1.5em,1.1em + 0.9vw);"]);
_c9 = FooterText;
var UrlImage = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.img.withConfig({
  displayName: "more__UrlImage",
  componentId: "sc-16793nn-9"
})(["width:min(8em,5em + 6.4vw);"]);
_c10 = UrlImage;
var LogoImage = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.img.withConfig({
  displayName: "more__LogoImage",
  componentId: "sc-16793nn-10"
})(["width:min(8em,5em + 6.4vw);margin:12px 0;"]);
_c11 = LogoImage;

var More = function More(_ref) {
  var componentNo = _ref.componentNo;

  // onClick
  var onClickUrlMainDiv = function onClickUrlMainDiv(url) {
    window.open(url);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_base__WEBPACK_IMPORTED_MODULE_2___default()), {
    componentNo: componentNo,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MoreContainer, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderSection, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderText, {
          children: "\uAE40\uC131\uCC2C\uC758 Portfolio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderText, {
          children: "Version 1.0.0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderText, {
          children: "2021.08.11"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UrlSection, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UrlMainDiv, {
          onClick: function onClick() {
            return onClickUrlMainDiv('https://github.com/ksccmp');
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UrlSubDiv, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UrlImage, {
              src: "/image/github.PNG"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UrlText, {
              children: "https://github.com/ksccmp"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UrlMainDiv, {
          onClick: function onClick() {
            return onClickUrlMainDiv('https://jforj.tistory.com');
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UrlSubDiv, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UrlImage, {
              src: "/image/tistory.PNG"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UrlText, {
              children: "https://jforj.tistory.com"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FooterSection, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FooterText, {
          children: "https://kscportfolio.com"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FooterText, {
          children: "Designed By \uAE40\uC131\uCC2C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LogoImage, {
          src: "/image/SCLogo2.svg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 9
  }, _this);
};

_c12 = More;
/* harmony default export */ __webpack_exports__["default"] = (More);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;

$RefreshReg$(_c, "MoreContainer");
$RefreshReg$(_c2, "HeaderSection");
$RefreshReg$(_c3, "UrlSection");
$RefreshReg$(_c4, "FooterSection");
$RefreshReg$(_c5, "UrlMainDiv");
$RefreshReg$(_c6, "UrlSubDiv");
$RefreshReg$(_c7, "HeaderText");
$RefreshReg$(_c8, "UrlText");
$RefreshReg$(_c9, "FooterText");
$RefreshReg$(_c10, "UrlImage");
$RefreshReg$(_c11, "LogoImage");
$RefreshReg$(_c12, "More");

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


/***/ }),

/***/ "./component/projects.tsx":
/*!********************************!*\
  !*** ./component/projects.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_User_Desktop_study_portfolio_sungchan_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base */ "./component/base.tsx");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\component\\projects.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var ProjectsContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "projects__ProjectsContainer",
  componentId: "sc-1k4iihw-0"
})(["position:relative;border-radius:0 12px 12px 12px;background-color:#fff;margin:50px 18px 65px 18px;box-shadow:2px 0 4px #c8c8c8 inset,-2px -4px 4px #c8c8c8 inset;"]);
_c = ProjectsContainer;
var ImageDiv = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "projects__ImageDiv",
  componentId: "sc-1k4iihw-1"
})(["margin:18px 25px;position:relative;cursor:pointer;"]);
_c2 = ImageDiv;
var TitleSection = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.section.withConfig({
  displayName: "projects__TitleSection",
  componentId: "sc-1k4iihw-2"
})(["position:absolute;display:flex;align-items:center;top:-40px;left:0;height:40px;background-color:#fff;border-radius:12px 12px 0 0;padding:0 12px;box-shadow:2px 4px 4px #c8c8c8 inset,-2px 0 4px #c8c8c8 inset;"]);
_c3 = TitleSection;
var ContentsSection = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.section.withConfig({
  displayName: "projects__ContentsSection",
  componentId: "sc-1k4iihw-3"
})(["display:flex;justify-content:space-around;flex-wrap:wrap;padding:0 16px;@media screen and (min-width:700px){flex-wrap:nowrap;}"]);
_c4 = ContentsSection;
var TextDescriptionDiv = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "projects__TextDescriptionDiv",
  componentId: "sc-1k4iihw-4"
})([""]);
_c5 = TextDescriptionDiv;
var PictureContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "projects__PictureContainer",
  componentId: "sc-1k4iihw-5"
})(["position:fixed;width:100%;height:100vh;background-color:rgba(0,0,0,0.5);display:none;justify-content:center;align-items:center;z-index:101;top:0;cursor:pointer;"]);
_c6 = PictureContainer;
var PuzzleSection = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.section.withConfig({
  displayName: "projects__PuzzleSection",
  componentId: "sc-1k4iihw-6"
})(["padding-left:25px;"]);
_c7 = PuzzleSection;
var PuzzleDiv = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "projects__PuzzleDiv",
  componentId: "sc-1k4iihw-7"
})(["position:relative;display:flex;justify-content:center;align-items:center;width:100px;height:40px;background-color:#fff;margin:40px 0 100px 0;transform:rotate(-16deg);box-shadow:2px 2px 4px rgba(0,0,0,0.5);@media screen and (min-width:700px){width:160px;height:60px;box-shadow:3px 3px 6px rgba(0,0,0,0.5);}"]);
_c8 = PuzzleDiv;
var PuzzleLeft = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "projects__PuzzleLeft",
  componentId: "sc-1k4iihw-8"
})(["position:absolute;background-color:", ";border-radius:50%;width:20px;height:20px;top:10px;left:-10px;box-shadow:2px 1px 0px rgba(0,0,0,0.5);@media screen and (min-width:700px){width:30px;height:30px;left:-15px;top:15px;}"], function (props) {
  return props.backgroundColor;
});
_c9 = PuzzleLeft;
var PuzzleRight = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "projects__PuzzleRight",
  componentId: "sc-1k4iihw-9"
})(["position:absolute;background-color:#fff;border-radius:50%;width:20px;height:20px;top:10px;right:-10px;box-shadow:3px 1px 2px rgba(0,0,0,0.5);@media screen and (min-width:700px){width:30px;height:30px;top:15px;right:-15px;}"]);
_c10 = PuzzleRight;
var PuzzleTop = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "projects__PuzzleTop",
  componentId: "sc-1k4iihw-10"
})(["position:absolute;background-color:#fff;border-radius:50%;width:20px;height:20px;top:-10px;left:40px;@media screen and (min-width:700px){width:30px;height:30px;top:-15px;left:65px;}"]);
_c11 = PuzzleTop;
var CareerTitle = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.span.withConfig({
  displayName: "projects__CareerTitle",
  componentId: "sc-1k4iihw-11"
})(["color:", ";font-weight:600;font-size:min(1.3em,0.8em + 1.2vw);"], function (props) {
  return props.color;
});
_c12 = CareerTitle;
var TextDescription = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.span.withConfig({
  displayName: "projects__TextDescription",
  componentId: "sc-1k4iihw-12"
})(["display:block;margin:18px 0;font-weight:600;font-size:min(1.1em,0.7em + 1.1vw);padding:8px 0;border-bottom:1px solid rgba(0,0,0,0.4);overflow-wrap:anywhere;", ""], function (props) {
  if (props.type === 'camera') {
    return "\n                color: rgba(0, 0, 0, 0.7);\n                &:before {\n                    display: inline-block;\n                    width: 26px;\n                    content: '\f030';\n                    font-family: FontAwesome;\n                    color: ".concat(props.backgroundColor, ";\n                    cursor: url(").concat(props.src, "), pointer;\n                }\n            ");
  } else if (props.type === 'calendar') {
    return "\n                color: rgba(0, 0, 0, 0.7);\n                &:before {\n                    display: inline-block;\n                    width: 26px;\n                    content: '\f272';\n                    font-family: FontAwesome;\n                    color: ".concat(props.backgroundColor, ";\n                }\n            ");
  } else if (props.type === 'position') {
    return "\n                color: rgba(0, 0, 0, 0.7);\n                &:before {\n                    display: inline-block;\n                    width: 26px;\n                    content: '\f2bb';\n                    font-family: FontAwesome;\n                    color: ".concat(props.backgroundColor, ";\n                }\n            ");
  } else if (props.type === 'link') {
    return "\n                color: rgba(0, 0, 0, 0.7);\n                &:before {\n                    display: inline-block;\n                    width: 26px;\n                    content: '\f0c1';\n                    font-family: FontAwesome;\n                    color: ".concat(props.backgroundColor, ";\n                }\n            ");
  } else if (props.type === 'code') {
    return "\n                color: rgba(0, 0, 0, 0.7);\n                &:before {\n                    display: inline-block;\n                    width: 26px;\n                    content: '\f121';\n                    font-family: FontAwesome;\n                    color: ".concat(props.backgroundColor, ";\n                }\n            ");
  } else {
    return "\n                color: rgba(0, 0, 0, 0.7);\n                &:before {\n                    display: inline-block;\n                    width: 26px;\n                    content: '\f005';\n                    font-family: FontAwesome;\n                    color: ".concat(props.backgroundColor, ";\n                }\n            ");
  }
});
_c13 = TextDescription;
var PuzzleTitle = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.span.withConfig({
  displayName: "projects__PuzzleTitle",
  componentId: "sc-1k4iihw-13"
})(["font-weight:600;font-size:1.2em;@media screen and (min-width:700px){font-size:1.5em;}"]);
_c14 = PuzzleTitle;
var CareerImage = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.img.withConfig({
  displayName: "projects__CareerImage",
  componentId: "sc-1k4iihw-14"
})(["width:min(20em,calc(15em + 10vw));box-shadow:0px 0px 6px rgba(0,0,0,0.2);"]);
_c15 = CareerImage;
var PictureImage = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.img.withConfig({
  displayName: "projects__PictureImage",
  componentId: "sc-1k4iihw-15"
})(["margin:20px;max-width:calc(100% - 28px);max-height:calc(100% - 28px);"]);
_c16 = PictureImage;

var Projects = function Projects(_ref) {
  _s();

  var componentNo = _ref.componentNo;
  // redux
  var backgroundColorArray = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.baseReducer.backgroundColorArray;
  }); // state

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__.useState(''),
      _React$useState2 = (0,C_Users_User_Desktop_study_portfolio_sungchan_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 2),
      pictureImage = _React$useState2[0],
      setPictureImage = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2__.useState([0, 0, 0, 0]),
      _React$useState4 = (0,C_Users_User_Desktop_study_portfolio_sungchan_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState3, 2),
      currentImageIndex = _React$useState4[0],
      setCurrentImageIndex = _React$useState4[1]; // ref


  var pictureContainerRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(); // variable

  var images = [['/image/ssafy1.PNG'], ['/image/grouby_0.PNG', '/image/grouby_1.PNG', '/image/grouby_2.PNG', '/image/grouby_3.PNG'], ['/image/ssafy1.PNG'], ['/image/moyo_0.PNG', '/image/moyo_1.PNG', '/image/moyo_2.PNG', '/image/moyo_3.PNG']]; // onClick

  var onClickImageDiv = function onClickImageDiv(index) {
    var tempCurrentImageIndex = currentImageIndex.slice();
    tempCurrentImageIndex[index] = (tempCurrentImageIndex[index] + 1) % images[index].length;
    setCurrentImageIndex(tempCurrentImageIndex);
  };

  var onClickCamera = function onClickCamera(e, img) {
    if (pictureContainerRef.current) {
      e.stopPropagation();
      setPictureImage(img);
      pictureContainerRef.current.style.display = 'flex';
    }
  };

  var onClickPictureContainer = function onClickPictureContainer() {
    if (pictureContainerRef.current) {
      setPictureImage('');
      pictureContainerRef.current.style.display = 'none';
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_base__WEBPACK_IMPORTED_MODULE_3___default()), {
      componentNo: componentNo,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PuzzleSection, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PuzzleDiv, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PuzzleLeft, {
            backgroundColor: backgroundColorArray[componentNo]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 309,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PuzzleRight, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 310,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PuzzleTop, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 311,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PuzzleTitle, {
            children: "\uD504\uB85C\uC81D\uD2B8"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 312,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 308,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProjectsContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleSection, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CareerTitle, {
            children: "Portfolio"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 318,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 317,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentsSection, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageDiv, {
            onClick: function onClick() {
              return onClickImageDiv(0);
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CareerImage, {
              src: images[0][currentImageIndex[0]]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 323,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 322,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescriptionDiv, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "calendar",
              children: "21.07 ~ 21.08"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 327,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "code",
              children: "FE \u2192 Next / TypeScript / Redux / Hooks / StyledComponent"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 330,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "\uC6F9 \uC0AC\uC774\uD2B8\uC5D0\uC11C \uB098\uB9CC\uC758 \uD3EC\uD2B8\uD3F4\uB9AC\uC624\uB97C \uB204\uAD6C\uB098 \uBCFC \uC218 \uC788\uB3C4\uB85D \uD558\uAE30 \uC704\uD574 \uAC1C\uBC1C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 333,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "\uACF5\uCC45\uC744 \uC8FC\uC694 \uB514\uC790\uC778\uC73C\uB85C \uC0BC\uC544 \uC624\uD504\uB77C\uC778\uC5D0\uC11C \uD3EC\uD2B8\uD3F4\uB9AC\uC624\uB97C \uBCF4\uB294 \uB4EF\uD55C UI/UX\uB97C \uAC1C\uBC1C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 336,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "link",
              children: ["Domain \u2192 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "localhost:8088",
                children: "localhost:8088"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 340,
                columnNumber: 42
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 339,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "link",
              children: ["Git \u2192", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "https://github.com/ksccmp/portfolio",
                children: "https://github.com/ksccmp/portfolio"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 344,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 342,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 326,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 321,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProjectsContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleSection, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CareerTitle, {
            children: "Grouby"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 352,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 351,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentsSection, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageDiv, {
            onClick: function onClick() {
              return onClickImageDiv(1);
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CareerImage, {
              src: images[1][currentImageIndex[1]]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 357,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 356,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescriptionDiv, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "calendar",
              children: "20.10 ~ 21.01"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 361,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "code",
              children: "FE \u2192 Next / TypeScript / Redux / Hooks / StyledComponent"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 364,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "code",
              children: "BE \u2192 Spring / Mybatis / MySQL"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 367,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "Next\uC0AC\uC6A9 \uACBD\uD5D8\uACFC CSS\uC5ED\uB7C9\uC744 \uB192\uC774\uAE30 \uC704\uD574 \uC9C4\uD589\uD55C \uAC1C\uC778 \uD504\uB85C\uC81D\uD2B8"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 370,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "\uBC29\uBB38\uD588\uC5C8\uB358 \uC7A5\uC18C\uC5D0 \uB300\uD55C \uC6B0\uB9AC\uB9CC\uC758 \uD3C9\uAC00\uB97C \uD558\uC5EC \uC7AC\uBC29\uBB38\uC744 \uC704\uD55C \uC758\uACAC\uC5D0 \uB3C4\uC6C0\uC774 \uB418\uACE0\uC790 \uAC1C\uBC1C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 373,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "\uADF8\uB8F9, \uC2A4\uD31F\uC744 \uC120\uD0DD\uD55C \uB4A4 \uC778\uC2A4\uD0C0\uADF8\uB7A8\uCC98\uB7FC \uC0AC\uC9C4 \uACF5\uC720 \uBC0F \uB313\uAE00 \uAE30\uB2A5 \uAC1C\uBC1C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 376,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "\uBC29\uBB38\uD588\uB358 \uC7A5\uC18C\uC758 \uD3C9\uAC00\uC694\uC18C\uC5D0 \uB530\uB77C \uC810\uC218\uB97C \uBD80\uC5EC\uD558\uC5EC \uD3C9\uAC00\uD560 \uC218 \uC788\uACE0 \uC804\uCCB4 \uD3C9\uC810\uB3C4 \uD655\uC778\uD560 \uC218 \uC788\uB3C4\uB85D \uAC1C\uBC1C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 379,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "\uC124\uACC4 \uB2E8\uACC4\uC5D0\uC11C \uB290\uAEF4\uC84C\uB358 \uBCF5\uC7A1\uD568\uC774 \uC0AC\uC6A9\uD560 \uB54C \uADF8\uB300\uB85C \uB290\uAEF4\uC9C4 \uC544\uC26C\uC6C0\uC774 \uB0A8\uB294 \uD504\uB85C\uC81D\uD2B8"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 383,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "link",
              children: ["Git \u2192 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "https://github.com/ksccmp/Grouby",
                children: "https://github.com/ksccmp/Grouby"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 387,
                columnNumber: 39
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 386,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 360,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 355,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 350,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProjectsContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleSection, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CareerTitle, {
            children: "SCVC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 395,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 394,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentsSection, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageDiv, {
            onClick: function onClick() {
              return onClickImageDiv(2);
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CareerImage, {
              src: images[2][currentImageIndex[2]]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 400,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 399,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescriptionDiv, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "calendar",
              children: "20.08 ~ 20.09"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 404,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "code",
              children: "FE \u2192 React / TypeScript / Redux / Redux-Saga / Hooks / StyledComponent"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 407,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "code",
              children: "BE \u2192 Spring / Mybatis / MySQL / Node"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 410,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "TypeScript\uC640 Redux-Saga\uC758 \uC0AC\uC6A9 \uACBD\uD5D8\uC744 \uB192\uC774\uAE30 \uC704\uD574 \uC9C4\uD589\uD55C \uAC1C\uC778 \uD504\uB85C\uC81D\uD2B8"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 413,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "\uCD5C\uADFC \uBE44\uB300\uBA74\uC758 \uC911\uC694\uC131\uC774 \uC99D\uAC00\uB428\uC5D0 \uB530\uB77C \uC5ED\uB7C9 \uD655\uBCF4\uB97C \uC704\uD574 \uAD00\uB828 \uAE30\uB2A5 \uAC1C\uBC1C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 416,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "\uC785\uC7A5\uD558\uACE0\uC790 \uD558\uB294 \uBC29\uC744 \uAC80\uC0C9\uD560 \uC218 \uC788\uACE0 \uC815\uD574\uC9C4 \uC778\uC6D0\uB9CC\uD07C\uC758 \uC778\uC6D0\uB9CC \uCC38\uC5EC \uAC00\uB2A5\uD558\uB3C4\uB85D \uAC1C\uBC1C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 419,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "RTCPeerConnection + SocketIO\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC2E4\uC2DC\uAC04 \uD654\uC0C1 \uD68C\uC758 \uBC0F \uCC44\uD305 \uAC1C\uBC1C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 422,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "link",
              children: ["Git \u2192", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "https://github.com/ksccmp/video_chat_typescript",
                children: "https://github.com/ksccmp/video_chat_typescript"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 427,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 425,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 403,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 398,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 393,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProjectsContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleSection, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CareerTitle, {
            children: "Moyo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 437,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 436,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentsSection, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageDiv, {
            onClick: function onClick() {
              return onClickImageDiv(3);
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CareerImage, {
              src: images[3][currentImageIndex[3]]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 442,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 441,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescriptionDiv, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "calendar",
              children: "20.01 ~ 20.02"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 446,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "code",
              children: "FE \u2192 React / Redux / Hooks / StyledComponent"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 449,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "code",
              children: "BE \u2192 SpringBoot / Mybatis / MySQL / FireBase"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 452,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "SSAFY\uC5D0\uC11C \uC9C4\uD589\uD55C \uD300 \uD504\uB85C\uC81D\uD2B8 (5\uC778)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 455,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "\uC5EC\uD589 \uB3D9\uD589\uC790\uB97C \uAC04\uD3B8\uD558\uAC8C \uB9E4\uCE6D\uD558\uB294 \uAC83\uC5D0 \uB3C4\uC6C0\uC774 \uB418\uACE0\uC790 \uAC1C\uBC1C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 458,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "React + FireBase\uB97C \uC774\uC6A9\uD558\uC5EC DM\uAE30\uB2A5 \uAC1C\uBC1C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 461,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "\uC790\uC2E0\uC758 \uC704\uCE58\uC5D0 \uAC04\uD3B8\uD558\uAC8C \uB099\uC11C(?)\uD560 \uC218 \uC788\uB294 \uD3EC\uC2A4\uD2B8\uB9F5 \uAE30\uB2A5 \uAC1C\uBC1C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 464,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "\uC0AC\uC6A9\uB418\uB294 Tool\uC758 \uC219\uB828\uB3C4 \uBD80\uC871\uC73C\uB85C \uBAA9\uD45C\uD55C \uAE30\uB2A5\uB4E4\uC744 \uBAA8\uB450 \uAC1C\uBC1C\uD558\uC9C0 \uBABB\uD55C\uAC83\uC5D0 \uB300\uD574 \uC544\uC26C\uC6C0\uC774 \uB0A8\uB294 \uD504\uB85C\uC81D\uD2B8"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 467,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "link",
              children: ["Git \u2192 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "https://github.com/ksccmp/moyo",
                children: "https://github.com/ksccmp/moyo"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 472,
                columnNumber: 39
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 471,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 445,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 440,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 435,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PictureContainer, {
      ref: pictureContainerRef,
      onClick: onClickPictureContainer,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PictureImage, {
        src: pictureImage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 480,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 479,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(Projects, "Znjp6n1Xcrd5cYl1L7l+RO9UA4Q=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector];
});

_c17 = Projects;
/* harmony default export */ __webpack_exports__["default"] = (Projects);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17;

$RefreshReg$(_c, "ProjectsContainer");
$RefreshReg$(_c2, "ImageDiv");
$RefreshReg$(_c3, "TitleSection");
$RefreshReg$(_c4, "ContentsSection");
$RefreshReg$(_c5, "TextDescriptionDiv");
$RefreshReg$(_c6, "PictureContainer");
$RefreshReg$(_c7, "PuzzleSection");
$RefreshReg$(_c8, "PuzzleDiv");
$RefreshReg$(_c9, "PuzzleLeft");
$RefreshReg$(_c10, "PuzzleRight");
$RefreshReg$(_c11, "PuzzleTop");
$RefreshReg$(_c12, "CareerTitle");
$RefreshReg$(_c13, "TextDescription");
$RefreshReg$(_c14, "PuzzleTitle");
$RefreshReg$(_c15, "CareerImage");
$RefreshReg$(_c16, "PictureImage");
$RefreshReg$(_c17, "Projects");

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


/***/ }),

/***/ "./component/skills.tsx":
/*!******************************!*\
  !*** ./component/skills.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ "./component/base.tsx");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_base__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\component\\skills.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var SkillsContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div.withConfig({
  displayName: "skills__SkillsContainer",
  componentId: "sc-9hegbj-0"
})(["padding:20px;"]);
_c = SkillsContainer;
var TitleContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div.withConfig({
  displayName: "skills__TitleContainer",
  componentId: "sc-9hegbj-1"
})(["position:relative;margin:24px 0 52px 0;"]);
_c2 = TitleContainer;
var TitleMainDiv = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div.withConfig({
  displayName: "skills__TitleMainDiv",
  componentId: "sc-9hegbj-2"
})(["border-top:1px solid rgba(0,0,0,0.4);padding:12px 0;"]);
_c3 = TitleMainDiv;
var TitleSubDiv = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div.withConfig({
  displayName: "skills__TitleSubDiv",
  componentId: "sc-9hegbj-3"
})(["position:absolute;background-color:", ";top:-12px;left:12px;padding:0 4px;"], function (props) {
  return props.backgroundColor;
});
_c4 = TitleSubDiv;
var ContentsContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div.withConfig({
  displayName: "skills__ContentsContainer",
  componentId: "sc-9hegbj-4"
})(["width:100%;display:flex;flex-direction:column;align-items:center;@media screen and (min-width:570px){height:1080px;flex-wrap:wrap;}@media screen and (min-width:840px){height:720px;flex-wrap:wrap;}"]);
_c5 = ContentsContainer;
var SkillSection = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.section.withConfig({
  displayName: "skills__SkillSection",
  componentId: "sc-9hegbj-5"
})(["width:240px;text-align:center;margin-bottom:54px;"]);
_c6 = SkillSection;
var TitleDiv = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div.withConfig({
  displayName: "skills__TitleDiv",
  componentId: "sc-9hegbj-6"
})(["padding:8px 0;"]);
_c7 = TitleDiv;
var ImageDiv = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div.withConfig({
  displayName: "skills__ImageDiv",
  componentId: "sc-9hegbj-7"
})(["background-color:#fff;border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-left-radius:10px;border-bottom-right-radius:10px;padding:8px;box-shadow:2px 4px 4px #c8c8c8 inset,-2px -4px 4px #c8c8c8 inset;"]);
_c8 = ImageDiv;
var MainTitle = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.span.withConfig({
  displayName: "skills__MainTitle",
  componentId: "sc-9hegbj-8"
})(["font-weight:600;font-size:min(calc(1.2em + 0.5vw),1.8em);"]);
_c9 = MainTitle;
var SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.span.withConfig({
  displayName: "skills__SubTitle",
  componentId: "sc-9hegbj-9"
})(["font-weight:600;font-size:min(calc(0.9em + 0.5vw),1.1em);color:rgba(0,0,0,0.4);"]);
_c10 = SubTitle;
var SkillTitle = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.span.withConfig({
  displayName: "skills__SkillTitle",
  componentId: "sc-9hegbj-10"
})(["font-weight:bold;font-size:min(1.4em + 0.4vw,1.6em);color:#fff;"]);
_c11 = SkillTitle;
var SkillImage = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.img.withConfig({
  displayName: "skills__SkillImage",
  componentId: "sc-9hegbj-11"
})([""]);
_c12 = SkillImage;

var Skills = function Skills(_ref) {
  _s();

  var componentNo = _ref.componentNo;
  // redux
  var backgroundColorArray = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.baseReducer.backgroundColorArray;
  }); // variable

  var skillsArray = [{
    title: 'FE',
    src: '/image/fe.PNG'
  }, {
    title: 'Devops',
    src: '/image/devops.PNG'
  }, {
    title: 'Development',
    src: '/image/development.PNG'
  }, {
    title: 'BE',
    src: '/image/be.PNG'
  }];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_base__WEBPACK_IMPORTED_MODULE_2___default()), {
    componentNo: componentNo,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SkillsContainer, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleSubDiv, {
          backgroundColor: backgroundColorArray[componentNo],
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubTitle, {
            children: "\uC81C\uBAA9"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleMainDiv, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainTitle, {
            children: "\uAE30\uC220\uC2A4\uD0DD\uC774 \uBB50\uAC00 \uC788\uC9C0..?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleSubDiv, {
          backgroundColor: backgroundColorArray[componentNo],
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubTitle, {
            children: "\uB0B4\uC6A9"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleMainDiv, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentsContainer, {
            children: skillsArray.map(function (skill) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SkillSection, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleDiv, {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SkillTitle, {
                    children: skill.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 139,
                    columnNumber: 45
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 138,
                  columnNumber: 41
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageDiv, {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SkillImage, {
                    src: skill.src
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 142,
                    columnNumber: 45
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 41
                }, _this)]
              }, skill.title, true, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 37
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 118,
    columnNumber: 9
  }, _this);
};

_s(Skills, "i4yx08rz7qPesywaHVSz+i31ufU=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector];
});

_c13 = Skills;
/* harmony default export */ __webpack_exports__["default"] = (Skills);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13;

$RefreshReg$(_c, "SkillsContainer");
$RefreshReg$(_c2, "TitleContainer");
$RefreshReg$(_c3, "TitleMainDiv");
$RefreshReg$(_c4, "TitleSubDiv");
$RefreshReg$(_c5, "ContentsContainer");
$RefreshReg$(_c6, "SkillSection");
$RefreshReg$(_c7, "TitleDiv");
$RefreshReg$(_c8, "ImageDiv");
$RefreshReg$(_c9, "MainTitle");
$RefreshReg$(_c10, "SubTitle");
$RefreshReg$(_c11, "SkillTitle");
$RefreshReg$(_c12, "SkillImage");
$RefreshReg$(_c13, "Skills");

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


/***/ }),

/***/ "./component/whyIt.tsx":
/*!*****************************!*\
  !*** ./component/whyIt.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_User_Desktop_study_portfolio_sungchan_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base */ "./component/base.tsx");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\component\\whyIt.tsx",
    _this = undefined,
    _s = $RefreshSig$();

// import * as React from 'react';
// import Base from './base';
// import styled from 'styled-components';
// const StyledDiv1 = styled.div`
//     margin: 0 24px;
//     padding: 22px 0 53px 0;
//     text-align: right;
// `;
// const StyledDiv2 = styled.div`
//     display: inline-block;
//     padding: 32px 24px;
//     text-align: left;
// `;
// const StyledSpan1 = styled.span`
//     display: block;
//     color: #fff;
// `;
// const StyledSpan2 = styled.span`
//     display: block;
//     color: #fff;
// `;
// interface IWhyIt {
//     title: string;
// }
// const WhyIt: React.FC<IWhyIt> = ({ title }): JSX.Element => {
//     return (
//         <Base title={title} backgroundColor="#6A9194">
//             <StyledDiv1>
//                 <StyledDiv2>
//                     <StyledSpan1>IT를 왜 시작하게 되었을까?</StyledSpan1>
//                     <StyledSpan2>이런 이유 때문이다. 이런 이유 때문이다. 이런 이유 때문이다.</StyledSpan2>
//                     <StyledSpan2>이런 이유 때문이다.</StyledSpan2>
//                     <StyledSpan2>이런 이유 때문이다.</StyledSpan2>
//                     <StyledSpan2>이런 이유 때문이다.</StyledSpan2>
//                     <StyledSpan2>이런 이유 때문이다.</StyledSpan2>
//                     <StyledSpan2>이런 이유 때문이다.</StyledSpan2>
//                     <StyledSpan2>이런 이유 때문이다. 이런 이유 때문이다. 이런 이유 때문이다.</StyledSpan2>
//                     <StyledSpan2>이런 이유 때문이다. 이런 이유 때문이다. 이런 이유 때문이다.</StyledSpan2>
//                     <StyledSpan2>이런 이유 때문이다. 이런 이유 때문이다. 이런 이유 때문이다.</StyledSpan2>
//                     <StyledSpan2>이런 이유 때문이다. 이런 이유 때문이다. 이런 이유 때문이다.</StyledSpan2>
//                     <StyledSpan2>이런 이유 때문이다. 이런 이유 때문이다. 이런 이유 때문이다.</StyledSpan2>
//                 </StyledDiv2>
//             </StyledDiv1>
//         </Base>
//     );
// };
// export default WhyIt;




var WhyItContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "whyIt__WhyItContainer",
  componentId: "sc-sy1iui-0"
})(["padding:20px;"]);
_c = WhyItContainer;
var TitleContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "whyIt__TitleContainer",
  componentId: "sc-sy1iui-1"
})(["position:relative;margin:24px 0 52px 0;"]);
_c2 = TitleContainer;
var TitleMainDiv = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "whyIt__TitleMainDiv",
  componentId: "sc-sy1iui-2"
})(["border-top:1px solid rgba(0,0,0,0.4);padding:12px 0;"]);
_c3 = TitleMainDiv;
var TitleSubDiv = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "whyIt__TitleSubDiv",
  componentId: "sc-sy1iui-3"
})(["position:absolute;background-color:", ";top:-12px;left:12px;padding:0 4px;"], function (props) {
  return props.backgroundColor;
});
_c4 = TitleSubDiv;
var QAContaier = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "whyIt__QAContaier",
  componentId: "sc-sy1iui-4"
})(["width:100%;text-align:center;@media screen and (min-width:860px){display:flex;justify-content:center;}"]);
_c5 = QAContaier;
var QuestionSection = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.section.withConfig({
  displayName: "whyIt__QuestionSection",
  componentId: "sc-sy1iui-5"
})(["padding:0 20px 0 20px;"]);
_c6 = QuestionSection;
var AnswerSection = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.section.withConfig({
  displayName: "whyIt__AnswerSection",
  componentId: "sc-sy1iui-6"
})(["padding:0 20px 0 20px;"]);
_c7 = AnswerSection;
var questionNumberKeyframe = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.keyframes)(["0%{transform:rotate(-10deg);}50%{transform:rotate(10deg);}100%{transform:rotate(-10deg);}"]);
var QuestionDiv = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "whyIt__QuestionDiv",
  componentId: "sc-sy1iui-7"
})(["background-color:#fff;padding:20px;margin:24px 0;border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-left-radius:10px;border-bottom-right-radius:10px;text-align:left;box-shadow:2px 4px 4px #c8c8c8 inset,-2px -4px 4px #c8c8c8 inset;cursor:pointer;&:hover{& > div > span:first-child{animation-name:", ";animation-duration:2s;animation-iteration-count:infinite;}}"], questionNumberKeyframe);
_c8 = QuestionDiv;
var QuestionSubDiv = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "whyIt__QuestionSubDiv",
  componentId: "sc-sy1iui-8"
})(["display:flex;align-items:center;"]);
_c9 = QuestionSubDiv;
var AnswerDiv = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "whyIt__AnswerDiv",
  componentId: "sc-sy1iui-9"
})(["min-height:calc(248px + 30vh);background-color:#fff;padding:20px;margin:24px 0;border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-left-radius:10px;border-bottom-right-radius:10px;box-shadow:2px 4px 4px #c8c8c8 inset,-2px -4px 4px #c8c8c8 inset;@media screen and (min-width:860px){display:flex;justify-content:center;width:min(calc(16em + 12vw),26em);}"]);
_c10 = AnswerDiv;
var MainTitle = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.span.withConfig({
  displayName: "whyIt__MainTitle",
  componentId: "sc-sy1iui-10"
})(["font-weight:600;font-size:min(calc(1.2em + 0.5vw),1.8em);"]);
_c11 = MainTitle;
var SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.span.withConfig({
  displayName: "whyIt__SubTitle",
  componentId: "sc-sy1iui-11"
})(["font-weight:600;font-size:min(calc(0.9em + 0.5vw),1.1em);color:rgba(0,0,0,0.4);"]);
_c12 = SubTitle;
var QuestionTitle = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.span.withConfig({
  displayName: "whyIt__QuestionTitle",
  componentId: "sc-sy1iui-12"
})(["font-weight:600;font-size:min(calc(18px + 0.2vw),1.4em);color:", ";"], function (props) {
  return props.color;
});
_c13 = QuestionTitle;
var AnswerTitle = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.span.withConfig({
  displayName: "whyIt__AnswerTitle",
  componentId: "sc-sy1iui-13"
})(["font-weight:600;"]);
_c14 = AnswerTitle;
var QuestionNumber = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.span.withConfig({
  displayName: "whyIt__QuestionNumber",
  componentId: "sc-sy1iui-14"
})(["display:inline-block;font-weight:600;font-size:min(calc(24px + 0.6vw),2em);color:#f15e5e;transform:rotate(-10deg);margin-right:12px;animation-name:", ";animation-duration:2s;animation-iteration-count:infinite;"], function (props) {
  return props.isClick ? questionNumberKeyframe : '';
});
_c15 = QuestionNumber;

var WhyIt = function WhyIt(_ref) {
  _s();

  var componentNo = _ref.componentNo;
  // redux
  var backgroundColorArray = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.baseReducer.backgroundColorArray;
  }); // state

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__.useState(-1),
      _React$useState2 = (0,C_Users_User_Desktop_study_portfolio_sungchan_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 2),
      questionIndex = _React$useState2[0],
      setQuestionIndex = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2__.useState(),
      _React$useState4 = (0,C_Users_User_Desktop_study_portfolio_sungchan_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState3, 2),
      typingTimer = _React$useState4[0],
      setTypingTimer = _React$useState4[1]; // ref


  var answerTitleRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef();
  var answerDivRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(); // variable

  var qnaArray = [{
    question: 'IT에 관심가진 시기',
    answer: 'IT에 관심가진 시기'
  }, {
    question: 'IT에 관심을 가지게 된 계기',
    answer: "IT\uC5D0 \uAD00\uC2EC\uC744 \uAC00\uC9C0\uAC8C \uB41C \uACC4\uAE30\n\n\u314E\u314E\u314E\u314E"
  }, {
    question: '개발자를 선택한 이유',
    answer: '개발자를 선택한 이유'
  }];
  var questionColor = ['#8FC15B', '#F19023', '#63C1A9']; // onClick

  var onClickQuestion = function onClickQuestion(index) {
    setQuestionIndex(index); // 질문 index

    var time = 50; // 글자 나오는 속도

    if (answerTitleRef.current && answerDivRef.current) {
      var charIndex = 0;
      clearInterval(typingTimer); // 기존 interval 종료

      answerTitleRef.current.innerHTML = '';
      answerTitleRef.current.style.color = questionColor[index];
      answerDivRef.current.style.boxShadow = "2px 4px 4px ".concat(questionColor[index], " inset, -2px -4px 4px ").concat(questionColor[index], " inset");
      var typingInterval = setInterval(function () {
        // 타이핑 처리
        if (qnaArray[index].answer[charIndex] === '\n') {
          // 개행 문자일 경우
          answerTitleRef.current.innerHTML += '<br />';
          charIndex++;
        } else {
          // 개행 문자가 아닐 경우
          answerTitleRef.current.innerHTML += qnaArray[index].answer[charIndex++];
        }
      }, time);
      setTypingTimer(typingInterval); // 현재 interval 등록
      // 모든 문자가 처리되는 시간에 도달하면 interval 종료

      setTimeout(function () {
        clearInterval(typingInterval);
      }, qnaArray[index].answer.length * time);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_base__WEBPACK_IMPORTED_MODULE_3___default()), {
    componentNo: componentNo,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WhyItContainer, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleSubDiv, {
          backgroundColor: backgroundColorArray[componentNo],
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubTitle, {
            children: "\uC81C\uBAA9"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 281,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleMainDiv, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainTitle, {
            children: "\uC65C \uAC1C\uBC1C\uC790\uAC00 \uB418\uB824\uACE0 \uD588\uB354\uB77C..?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 284,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleSubDiv, {
          backgroundColor: backgroundColorArray[componentNo],
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubTitle, {
            children: "\uB0B4\uC6A9"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 290,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleMainDiv, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(QAContaier, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(QuestionSection, {
              children: qnaArray.map(function (qna, index) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(QuestionDiv, {
                  onClick: function onClick(e) {
                    return onClickQuestion(index);
                  },
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(QuestionSubDiv, {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(QuestionNumber, {
                      isClick: questionIndex === index,
                      children: ["Q", index + 1, ".", ' ']
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 299,
                      columnNumber: 49
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(QuestionTitle, {
                      color: questionColor[index],
                      children: qna.question
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 302,
                      columnNumber: 49
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 298,
                    columnNumber: 45
                  }, _this)
                }, qna.answer, false, {
                  fileName: _jsxFileName,
                  lineNumber: 297,
                  columnNumber: 41
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 294,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnswerSection, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnswerDiv, {
                ref: answerDivRef,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnswerTitle, {
                  ref: answerTitleRef,
                  children: questionIndex >= 0 ? '' : '궁금하신 질문을 선택해주세요.'
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 313,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 312,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 311,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 293,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 277,
    columnNumber: 9
  }, _this);
};

_s(WhyIt, "OzvwOaOoAzaAGTLi9fteKk0AqXo=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector];
});

_c16 = WhyIt;
/* harmony default export */ __webpack_exports__["default"] = (WhyIt);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16;

$RefreshReg$(_c, "WhyItContainer");
$RefreshReg$(_c2, "TitleContainer");
$RefreshReg$(_c3, "TitleMainDiv");
$RefreshReg$(_c4, "TitleSubDiv");
$RefreshReg$(_c5, "QAContaier");
$RefreshReg$(_c6, "QuestionSection");
$RefreshReg$(_c7, "AnswerSection");
$RefreshReg$(_c8, "QuestionDiv");
$RefreshReg$(_c9, "QuestionSubDiv");
$RefreshReg$(_c10, "AnswerDiv");
$RefreshReg$(_c11, "MainTitle");
$RefreshReg$(_c12, "SubTitle");
$RefreshReg$(_c13, "QuestionTitle");
$RefreshReg$(_c14, "AnswerTitle");
$RefreshReg$(_c15, "QuestionNumber");
$RefreshReg$(_c16, "WhyIt");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2NhcmVlci50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudC9pbnRyby50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudC9tYWluLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L21vcmUudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnQvcHJvamVjdHMudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnQvc2tpbGxzLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L3doeUl0LnRzeCJdLCJuYW1lcyI6WyJDYXJlZXJDb250YWluZXIiLCJzdHlsZWQiLCJJbWFnZURpdiIsIlRpdGxlU2VjdGlvbiIsIkNvbnRlbnRzU2VjdGlvbiIsIlRleHREZXNjcmlwdGlvbkRpdiIsIlBpY3R1cmVDb250YWluZXIiLCJQdXp6bGVTZWN0aW9uIiwiUHV6emxlRGl2IiwiUHV6emxlTGVmdCIsIlB1enpsZVJpZ2h0IiwicHJvcHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJQdXp6bGVUb3AiLCJDYXJlZXJUaXRsZSIsImNvbG9yIiwiVGV4dERlc2NyaXB0aW9uIiwidHlwZSIsInNyYyIsIlB1enpsZVRpdGxlIiwiQ2FyZWVySW1hZ2UiLCJQaWN0dXJlSW1hZ2UiLCJDYXJlZXIiLCJjb21wb25lbnRObyIsImJhY2tncm91bmRDb2xvckFycmF5IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImJhc2VSZWR1Y2VyIiwiUmVhY3QiLCJwaWN0dXJlSW1hZ2UiLCJzZXRQaWN0dXJlSW1hZ2UiLCJwaWN0dXJlQ29udGFpbmVyUmVmIiwib25DbGlja0NhbWVyYSIsImUiLCJpbWciLCJjdXJyZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwic3R5bGUiLCJkaXNwbGF5Iiwib25DbGlja1BpY3R1cmVDb250YWluZXIiLCJJbnRyb0NvbnRhaW5lciIsImhlaWdodCIsIkNvbnRlbnRzVGl0bGUiLCJDb250ZW50c0Rlc2NyaXB0aW9uIiwiSW50cm8iLCJhZGRTZWN0aW9ucyIsInNldEFkZFNlY3Rpb25zIiwiaW50cm9Db250YWluZXJSZWYiLCJjb250ZW50c1NlY3Rpb25SZWYiLCJjb250ZW50c0FycmF5IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImdldEFkZFNlY3Rpb25zIiwidG90YWxDb3VudCIsImNsaWVudEhlaWdodCIsImkiLCJsZW5ndGgiLCJwdXNoIiwibWFwIiwiY29udGVudHMiLCJpbmRleCIsImFkZFNlY3Rpb24iLCJUaXRsZVNlY3Rpb25LZXlGcmFtZSIsImtleWZyYW1lcyIsIk1haW5UaXRsZSIsIlN1YlRpdGxlIiwiTWFpbiIsIk1vcmVDb250YWluZXIiLCJIZWFkZXJTZWN0aW9uIiwiVXJsU2VjdGlvbiIsIkZvb3RlclNlY3Rpb24iLCJVcmxNYWluRGl2IiwiVXJsU3ViRGl2IiwiSGVhZGVyVGV4dCIsIlVybFRleHQiLCJGb290ZXJUZXh0IiwiVXJsSW1hZ2UiLCJMb2dvSW1hZ2UiLCJNb3JlIiwib25DbGlja1VybE1haW5EaXYiLCJ1cmwiLCJ3aW5kb3ciLCJvcGVuIiwiUHJvamVjdHNDb250YWluZXIiLCJQcm9qZWN0cyIsImN1cnJlbnRJbWFnZUluZGV4Iiwic2V0Q3VycmVudEltYWdlSW5kZXgiLCJpbWFnZXMiLCJvbkNsaWNrSW1hZ2VEaXYiLCJ0ZW1wQ3VycmVudEltYWdlSW5kZXgiLCJzbGljZSIsIlNraWxsc0NvbnRhaW5lciIsIlRpdGxlQ29udGFpbmVyIiwiVGl0bGVNYWluRGl2IiwiVGl0bGVTdWJEaXYiLCJDb250ZW50c0NvbnRhaW5lciIsIlNraWxsU2VjdGlvbiIsIlRpdGxlRGl2IiwiU2tpbGxUaXRsZSIsIlNraWxsSW1hZ2UiLCJTa2lsbHMiLCJza2lsbHNBcnJheSIsInNraWxsIiwiV2h5SXRDb250YWluZXIiLCJRQUNvbnRhaWVyIiwiUXVlc3Rpb25TZWN0aW9uIiwiQW5zd2VyU2VjdGlvbiIsInF1ZXN0aW9uTnVtYmVyS2V5ZnJhbWUiLCJRdWVzdGlvbkRpdiIsIlF1ZXN0aW9uU3ViRGl2IiwiQW5zd2VyRGl2IiwiUXVlc3Rpb25UaXRsZSIsIkFuc3dlclRpdGxlIiwiUXVlc3Rpb25OdW1iZXIiLCJpc0NsaWNrIiwiV2h5SXQiLCJxdWVzdGlvbkluZGV4Iiwic2V0UXVlc3Rpb25JbmRleCIsInR5cGluZ1RpbWVyIiwic2V0VHlwaW5nVGltZXIiLCJhbnN3ZXJUaXRsZVJlZiIsImFuc3dlckRpdlJlZiIsInFuYUFycmF5IiwicXVlc3Rpb24iLCJhbnN3ZXIiLCJxdWVzdGlvbkNvbG9yIiwib25DbGlja1F1ZXN0aW9uIiwidGltZSIsImNoYXJJbmRleCIsImNsZWFySW50ZXJ2YWwiLCJpbm5lckhUTUwiLCJib3hTaGFkb3ciLCJ0eXBpbmdJbnRlcnZhbCIsInNldEludGVydmFsIiwic2V0VGltZW91dCIsInFuYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLGVBQWUsR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEseUtBQXJCO0tBQU1ELGU7QUFRTixJQUFNRSxRQUFRLEdBQUdELHFFQUFIO0FBQUE7QUFBQTtBQUFBLHlCQUFkO01BQU1DLFE7QUFJTixJQUFNQyxZQUFZLEdBQUdGLHlFQUFIO0FBQUE7QUFBQTtBQUFBLHNOQUFsQjtNQUFNRSxZO0FBYU4sSUFBTUMsZUFBZSxHQUFHSCx5RUFBSDtBQUFBO0FBQUE7QUFBQSxzSUFBckI7TUFBTUcsZTtBQVdOLElBQU1DLGtCQUFrQixHQUFHSixxRUFBSDtBQUFBO0FBQUE7QUFBQSxRQUF4QjtNQUFNSSxrQjtBQUVOLElBQU1DLGdCQUFnQixHQUFHTCxxRUFBSDtBQUFBO0FBQUE7QUFBQSx3S0FBdEI7TUFBTUssZ0I7QUFhTixJQUFNQyxhQUFhLEdBQUdOLHlFQUFIO0FBQUE7QUFBQTtBQUFBLDBCQUFuQjtNQUFN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QUEscUJBREosZUFrQkksOERBQUMsYUFBRDtBQUFBLHFDQUNJLDhEQUFDLFNBQUQ7QUFBVyxtQkFBRyxFQUFFSCxZQUFoQjtBQUFBLHVDQUNJLDhEQUFDLFdBQUQ7QUFBYSxxQkFBRyxFQUFFRCxjQUFsQjtBQUFBLDRCQUNLSixhQUFhLElBQUksQ0FBakIsR0FBcUIsRUFBckIsR0FBMEI7QUFEL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWxCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWdESCxDQWpIRDs7R0FBTUQsSztVQUUyQjFGLG9EOzs7T0FGM0IwRixLO0FBbUhOLCtEQUFlQSxLQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVhOGY5NjVlM2IzNzNmMjQ2NTVjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgaW5kZXhTdGF0ZSB9IGZyb20gJy4uL21vZHVsZXMvaW5kZXhSZWR1Y2VyJztcclxuXHJcbmNvbnN0IENhcmVlckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDEycHggMTJweCAxMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbjogNTBweCAxOHB4IDY1cHggMThweDtcclxuICAgIGJveC1zaGFkb3c6IDJweCAwIDRweCAjYzhjOGM4IGluc2V0LCAtMnB4IC00cHggNHB4ICNjOGM4YzggaW5zZXQ7XHJcbmA7XHJcblxyXG5jb25zdCBJbWFnZURpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBtYXJnaW46IDE4cHggMjVweDtcclxuYDtcclxuXHJcbmNvbnN0IFRpdGxlU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0b3A6IC00MHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4IDEycHggMCAwO1xyXG4gICAgcGFkZGluZzogMCAxMnB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDRweCA0cHggI2M4YzhjOCBpbnNldCwgLTJweCAwIDRweCAjYzhjOGM4IGluc2V0O1xyXG5gO1xyXG5cclxuY29uc3QgQ29udGVudHNTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHtcclxuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IFRleHREZXNjcmlwdGlvbkRpdiA9IHN0eWxlZC5kaXZgYDtcclxuXHJcbmNvbnN0IFBpY3R1cmVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDEwMTtcclxuICAgIHRvcDogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IFB1enpsZVNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxuYDtcclxuXHJcbmNvbnN0IFB1enpsZURpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbjogNDBweCAwIDEwMHB4IDA7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTZkZWcpO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBQdXp6bGVMZWZ0ID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHRvcDogMTBweDtcclxuICAgIGxlZnQ6IC0xMHB4O1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGxlZnQ6IC0xNXB4O1xyXG4gICAgICAgIHRvcDogMTVweDtcclxuICAgIH1cclxuYDtcclxuXHJcbmludGVyZmFjZSBJUHV6emxlUmlnaHQge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IFB1enpsZVJpZ2h0ID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzOiBJUHV6emxlUmlnaHQpID0+IHByb3BzLmJhY2tncm91bmRDb2xvcn07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHRvcDogMTBweDtcclxuICAgIHJpZ2h0OiAtMTBweDtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDJweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICB0b3A6IDE1cHg7XHJcbiAgICAgICAgcmlnaHQ6IC0xNXB4O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgUHV6emxlVG9wID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHRvcDogLTEwcHg7XHJcbiAgICBsZWZ0OiA0MHB4O1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHRvcDogLTE1cHg7XHJcbiAgICAgICAgbGVmdDogNjVweDtcclxuICAgIH1cclxuYDtcclxuXHJcbmludGVyZmFjZSBJQ2FyZWVyVGl0bGUge1xyXG4gICAgY29sb3I6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgQ2FyZWVyVGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuICAgIGNvbG9yOiAkeyhwcm9wczogSUNhcmVlclRpdGxlKSA9PiBwcm9wcy5jb2xvcn07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiBtaW4oMS4zZW0sIDAuOGVtICsgMS4ydncpO1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElUZXh0RGVzY3JpcHRpb24ge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XHJcbiAgICB0eXBlPzogc3RyaW5nO1xyXG4gICAgc3JjPzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBUZXh0RGVzY3JpcHRpb24gPSBzdHlsZWQuc3BhbmBcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAxOHB4IDA7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiBtaW4oMS4xZW0sIDAuN2VtICsgMS4xdncpO1xyXG4gICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG5cclxuICAgICR7KHByb3BzOiBJVGV4dERlc2NyaXB0aW9uKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb3BzLnR5cGUgPT09ICdjYW1lcmEnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjZweDtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnXFxmMDMwJztcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7cHJvcHMuYmFja2dyb3VuZENvbG9yfTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHVybCgke3Byb3BzLnNyY30pLCBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocHJvcHMudHlwZSA9PT0gJ2NhbGVuZGFyJykge1xyXG4gICAgICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ1xcZjI3Mic7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke3Byb3BzLmJhY2tncm91bmRDb2xvcn07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wcy50eXBlID09PSAncG9zaXRpb24nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjZweDtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnXFxmMmJiJztcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7cHJvcHMuYmFja2dyb3VuZENvbG9yfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ1xcZjAwNSc7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke3Byb3BzLmJhY2tncm91bmRDb2xvcn07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgfVxyXG4gICAgfX1cclxuYDtcclxuXHJcbmNvbnN0IFB1enpsZVRpdGxlID0gc3R5bGVkLnNwYW5gXHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBDYXJlZXJJbWFnZSA9IHN0eWxlZC5pbWdgXHJcbiAgICB3aWR0aDogbWluKDIwZW0sIGNhbGMoMTVlbSArIDEwdncpKTtcclxuYDtcclxuXHJcbmNvbnN0IFBpY3R1cmVJbWFnZSA9IHN0eWxlZC5pbWdgXHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDI4cHgpO1xyXG4gICAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMjhweCk7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSUNhcmVlciB7XHJcbiAgICBjb21wb25lbnRObzogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBDYXJlZXI6IFJlYWN0LkZDPElDYXJlZXI+ID0gKHsgY29tcG9uZW50Tm8gfSk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIC8vIHJlZHV4XHJcbiAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3JBcnJheSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogaW5kZXhTdGF0ZSkgPT4gc3RhdGUuYmFzZVJlZHVjZXIuYmFja2dyb3VuZENvbG9yQXJyYXkpO1xyXG5cclxuICAgIC8vIHN0YXRlXHJcbiAgICBjb25zdCBbcGljdHVyZUltYWdlLCBzZXRQaWN0dXJlSW1hZ2VdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignJyk7XHJcblxyXG4gICAgLy8gcmVmXHJcbiAgICBjb25zdCBwaWN0dXJlQ29udGFpbmVyUmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG5cclxuICAgIC8vIG9uQ2xpY2tcclxuICAgIGNvbnN0IG9uQ2xpY2tDYW1lcmEgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MU3BhbkVsZW1lbnQsIE1vdXNlRXZlbnQ+LCBpbWc6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGlmIChwaWN0dXJlQ29udGFpbmVyUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIHNldFBpY3R1cmVJbWFnZShpbWcpO1xyXG4gICAgICAgICAgICBwaWN0dXJlQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG9uQ2xpY2tQaWN0dXJlQ29udGFpbmVyID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChwaWN0dXJlQ29udGFpbmVyUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgc2V0UGljdHVyZUltYWdlKCcnKTtcclxuICAgICAgICAgICAgcGljdHVyZUNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxCYXNlIGNvbXBvbmVudE5vPXtjb21wb25lbnROb30+XHJcbiAgICAgICAgICAgICAgICA8UHV6emxlU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8UHV6emxlRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHV6emxlTGVmdCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHV6emxlUmlnaHQgYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQdXp6bGVUb3AgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFB1enpsZVRpdGxlPuqyveugpTwvUHV6emxlVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9QdXp6bGVEaXY+XHJcbiAgICAgICAgICAgICAgICA8L1B1enpsZVNlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgPENhcmVlckNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8VGl0bGVTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZWVyVGl0bGUgY29sb3I9eycjMzNiZGRhJ30+7IK87ISxIOyyreuFhCDshoztlITtirjsm6jslrQg7JWE7Lm0642w66+4PC9DYXJlZXJUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L1RpdGxlU2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRzU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmVlckltYWdlIHNyYz1cIi9pbWFnZS9zc2FmeTEuUE5HXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbWFnZURpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb25EaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfSB0eXBlPVwiY2FsZW5kYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxOS4wNyB+IDIwLjAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2FtZXJhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2UvdG9wU2NvcmVfbWluaS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBvbkNsaWNrQ2FtZXJhKGUsICcvaW1hZ2UvdG9wU2NvcmUuanBnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMe2Vmeq4sCDrsJgg64yA7ZGcIOyEseyggSDsmrDsiJjsg4Eg7Leo65OdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2FtZXJhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2UvYWJyb2FkRWR1Y2F0aW9uX21pbmkucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gb25DbGlja0NhbWVyYShlLCAnL2ltYWdlL2Ficm9hZEVkdWNhdGlvbi5qcGcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDtlbTsmbgg7Jew7IiYIOuMgOyDgeyekOuhnCDrsJztg4FcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg7Ju5IOq4sOuwmCDquLDstIgg67CPIOyLrO2ZlCDqtZDsnKEg7IiY6rCVXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2FtZXJhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2Uvc3dleHBlcnRTY29yZV9taW5pLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IG9uQ2xpY2tDYW1lcmEoZSwgJy9pbWFnZS9zd2V4cGVydFNjb3JlLlBORycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOyCvOyEsSBTVyDsl63rn4kg7YWM7Iqk7Yq4IEErIOy3qOuTnVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGVudHNTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJlZXJDb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgPENhcmVlckNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8VGl0bGVTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZWVyVGl0bGUgY29sb3I9eycjMDMyOTcwJ30+7ZiE64yAIOyYpO2GoOyXkOuyhDwvQ2FyZWVyVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UaXRsZVNlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxDb250ZW50c1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZURpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJlZXJJbWFnZSBzcmM9XCIvaW1hZ2UvYXV0b2V2ZXIxLlBOR1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW1hZ2VEaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0gdHlwZT1cImNhbGVuZGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjAuMDMgfiDtmITsnqxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0gdHlwZT1cInBvc2l0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg7J6Q64+Z7LCoIO2SiOyniCDqsJzshKAg7Iuc7Iqk7YWcIEZFL0JFIOqwnOuwnCDrsI8g7Jq07JiBXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIO2MgCDrgrQgR2l0IOuPhOyehSDrsI8g7IKs64K0IOyngeybkOuTpOyXkOqyjCBHaXTsgqzsmqkg67Cp67KVIOq1kOycoSDri7Tri7lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg7YyAIOuCtCDsi6DquLDsiKAg7KCB7JqpIOuLtOuLuVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDshJzruYTsiqQg7Zqo7Jyo7ZmU66W8IOychO2VnCDsi5zsiqTthZwg6rCc7Y64IO2UhOuhnOygne2KuCDsp4TtlolcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3Qg7LWc7KCB7ZmUIOyekeyXheydhCDthrXtlZwg7ISc67mE7IqkIOyGjeuPhCDqsJzshKBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg7Jm467aAIOyLnOyKpO2FnOqzvCDsl7Dqs4Trpbwg7JyE7ZWcIOqzteyaqSBSZXN0IEFQSSDqsJzrsJxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbkRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnRzU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZWVyQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L0Jhc2U+XHJcblxyXG4gICAgICAgICAgICA8UGljdHVyZUNvbnRhaW5lciByZWY9e3BpY3R1cmVDb250YWluZXJSZWZ9IG9uQ2xpY2s9e29uQ2xpY2tQaWN0dXJlQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxQaWN0dXJlSW1hZ2Ugc3JjPXtwaWN0dXJlSW1hZ2V9IC8+XHJcbiAgICAgICAgICAgIDwvUGljdHVyZUNvbnRhaW5lcj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJlZXI7XHJcbiIsIi8vIGltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcclxuLy8gaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbi8vIGltcG9ydCB7IG1heFdpZHRoIH0gZnJvbSAnLi4vc3R5bGUvc3R5bGUnO1xyXG5cclxuLy8gY29uc3QgU3R5ZWxkRGl2MiA9IHN0eWxlZC5kaXZgXHJcbi8vICAgICBtYXJnaW46IDAgMzJweDtcclxuLy8gICAgIHBhZGRpbmctYm90dG9tOiAxN3B4O1xyXG4vLyBgO1xyXG5cclxuLy8gaW50ZXJmYWNlIElTdHlsZWREaXYzIHtcclxuLy8gICAgIGRpcmVjdGlvbj86IHN0cmluZzsgLy8gdHJ1ZeuptCDsmrDsuKEsIOq3uCDsmbgg7KKM7LihXHJcbi8vICAgICBpbm5lcldpZHRoOiBudW1iZXI7XHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IFN0eWVsZERpdjMgPSBzdHlsZWQuZGl2YFxyXG4vLyAgICAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XHJcbi8vICAgICAkeyhwcm9wczogSVN0eWxlZERpdjMpID0+IHtcclxuLy8gICAgICAgICBpZiAocHJvcHMuaW5uZXJXaWR0aCA8IG1heFdpZHRoKSB7XHJcbi8vICAgICAgICAgICAgIHJldHVybiBgXHJcbi8vICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICAgICAgICAgIGA7XHJcbi8vICAgICAgICAgfSBlbHNlIGlmIChwcm9wcy5kaXJlY3Rpb24gPT09ICd0cnVlJykge1xyXG4vLyAgICAgICAgICAgICByZXR1cm4gYFxyXG4vLyAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbi8vICAgICAgICAgICAgIGA7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfX1cclxuLy8gYDtcclxuXHJcbi8vIGNvbnN0IFN0eWxlZERpdjQgPSBzdHlsZWQuZGl2YFxyXG4vLyAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuLy8gICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4vLyAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuLy8gICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4vLyAgICAgcGFkZGluZzogMTJweDtcclxuLy8gICAgIG1hcmdpbjogNDNweCAyN3B4O1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuLy8gYDtcclxuXHJcbi8vIGNvbnN0IFN0eWxlZERpdjUgPSBzdHlsZWQuZGl2YFxyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgdG9wOiAtNDFweDtcclxuLy8gICAgIGxlZnQ6IC00MXB4O1xyXG4vLyAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTI1ZGVnKTtcclxuLy8gYDtcclxuXHJcbi8vIGNvbnN0IFN0eWxlZERpdjYgPSBzdHlsZWQuZGl2YFxyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgdG9wOiAtNDFweDtcclxuLy8gICAgIHJpZ2h0OiAtNDFweDtcclxuLy8gICAgIHRyYW5zZm9ybTogcm90YXRlKDI1ZGVnKTtcclxuLy8gYDtcclxuXHJcbi8vIGNvbnN0IFN0eWxlZFNwYW4xID0gc3R5bGVkLnNwYW5gXHJcbi8vICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkU3BhbjIgPSBzdHlsZWQuc3BhbmBcclxuLy8gICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjYzI2NTVhO1xyXG4vLyAgICAgY29sb3I6ICNjMjY1NWE7XHJcbi8vIGA7XHJcblxyXG4vLyBpbnRlcmZhY2UgSUludHJvIHtcclxuLy8gICAgIGlubmVyV2lkdGg6IG51bWJlcjtcclxuLy8gICAgIHRpdGxlOiBzdHJpbmc7XHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IEludHJvOiBSZWFjdC5GQzxJSW50cm8+ID0gKHsgaW5uZXJXaWR0aCwgdGl0bGUgfSk6IEpTWC5FbGVtZW50ID0+IHtcclxuLy8gICAgIGNvbnN0IGJveEFycmF5MSA9IFtcclxuLy8gICAgICAgICB7IHRpdGxlOiAn7J2066aEJywgZGVzY3JpcHRpb246ICfquYDshLHssKwnIH0sXHJcbi8vICAgICAgICAgeyB0aXRsZTogJ+yDneuFhOyblOydvCcsIGRlc2NyaXB0aW9uOiAnOTQuMTIuMDknIH0sXHJcbi8vICAgICBdO1xyXG4vLyAgICAgY29uc3QgYm94QXJyYXkyID0gW1xyXG4vLyAgICAgICAgIHsgdGl0bGU6ICfsnbTrqZTsnbwnLCBkZXNjcmlwdGlvbjogJ3RqZGNrc2RsMDBAbmF2ZXIuY29tJyB9LFxyXG4vLyAgICAgICAgIHsgdGl0bGU6ICfsl7Drnb3sspgnLCBkZXNjcmlwdGlvbjogJzAxMC0zMzYxLTM2MzMnIH0sXHJcbi8vICAgICBdO1xyXG4vLyAgICAgY29uc3QgYm94QXJyYXkzID0gW1xyXG4vLyAgICAgICAgIHsgdGl0bGU6ICftlZnqtZAnLCBkZXNjcmlwdGlvbjogJ+2VnOyWkeuMgCBFUklDQScgfSxcclxuLy8gICAgICAgICB7IHRpdGxlOiAn7KO87KCE6rO1JywgZGVzY3JpcHRpb246ICfsnZHsmqnsiJjtlZknIH0sXHJcbi8vICAgICAgICAgeyB0aXRsZTogJ+u2gOyghOqztScsIGRlc2NyaXB0aW9uOiAn7Lu07ZOo7YSw6rO17ZWZJyB9LFxyXG4vLyAgICAgXTtcclxuLy8gICAgIGNvbnN0IGJveEFycmF5NCA9IFtcclxuLy8gICAgICAgICB7IHRpdGxlOiAn6rK966ClJywgZGVzY3JpcHRpb246ICcx64WEIDPqsJzsm5QnIH0sXHJcbi8vICAgICAgICAgeyB0aXRsZTogJ+q4sOyIoOu2hOyVvCcsIGRlc2NyaXB0aW9uOiAnRkUvQkUg7Ju5IOqwnOuwnCcgfSxcclxuLy8gICAgIF07XHJcblxyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICA8QmFzZSB0aXRsZT17dGl0bGV9IGJhY2tncm91bmRDb2xvcj17JyNBNUJBQTgnfT5cclxuLy8gICAgICAgICAgICAgPFN0eWVsZERpdjI+XHJcbi8vICAgICAgICAgICAgICAgICA8U3R5ZWxkRGl2MyBpbm5lcldpZHRoPXtpbm5lcldpZHRofT5cclxuLy8gICAgICAgICAgICAgICAgICAgICB7Ym94QXJyYXkxLm1hcCgoYm94KSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRGl2NCBrZXk9e2JveC5kZXNjcmlwdGlvbn0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4xPntib3guZGVzY3JpcHRpb259PC9TdHlsZWRTcGFuMT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRGl2NT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4yPntib3gudGl0bGV9PC9TdHlsZWRTcGFuMj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZERpdjU+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZERpdjQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbi8vICAgICAgICAgICAgICAgICA8L1N0eWVsZERpdjM+XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgPFN0eWVsZERpdjMgaW5uZXJXaWR0aD17aW5uZXJXaWR0aH0gZGlyZWN0aW9uPXsndHJ1ZSd9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHtib3hBcnJheTIubWFwKChib3gpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXY0IGtleT17Ym94LmRlc2NyaXB0aW9ufT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjE+e2JveC5kZXNjcmlwdGlvbn08L1N0eWxlZFNwYW4xPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXY2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjI+e2JveC50aXRsZX08L1N0eWxlZFNwYW4yPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2Nj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2ND5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICB9KX1cclxuLy8gICAgICAgICAgICAgICAgIDwvU3R5ZWxkRGl2Mz5cclxuXHJcbi8vICAgICAgICAgICAgICAgICA8U3R5ZWxkRGl2MyBpbm5lcldpZHRoPXtpbm5lcldpZHRofT5cclxuLy8gICAgICAgICAgICAgICAgICAgICB7Ym94QXJyYXkzLm1hcCgoYm94KSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRGl2NCBrZXk9e2JveC5kZXNjcmlwdGlvbn0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4xPntib3guZGVzY3JpcHRpb259PC9TdHlsZWRTcGFuMT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRGl2NT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4yPntib3gudGl0bGV9PC9TdHlsZWRTcGFuMj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZERpdjU+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZERpdjQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbi8vICAgICAgICAgICAgICAgICA8L1N0eWVsZERpdjM+XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgPFN0eWVsZERpdjMgaW5uZXJXaWR0aD17aW5uZXJXaWR0aH0gZGlyZWN0aW9uPXsndHJ1ZSd9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHtib3hBcnJheTQubWFwKChib3gpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXY0IGtleT17Ym94LmRlc2NyaXB0aW9ufT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjE+e2JveC5kZXNjcmlwdGlvbn08L1N0eWxlZFNwYW4xPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXY2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjI+e2JveC50aXRsZX08L1N0eWxlZFNwYW4yPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2Nj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2ND5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICB9KX1cclxuLy8gICAgICAgICAgICAgICAgIDwvU3R5ZWxkRGl2Mz5cclxuLy8gICAgICAgICAgICAgPC9TdHllbGREaXYyPlxyXG4vLyAgICAgICAgIDwvQmFzZT5cclxuLy8gICAgICk7XHJcbi8vIH07XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBJbnRybztcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XHJcblxyXG5jb25zdCBJbnRyb0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDU2cHgpO1xyXG4gICAgcGFkZGluZzogMjhweCAyMnB4O1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElDb250ZW50c1NlY3Rpb24ge1xyXG4gICAgaGVpZ2h0PzogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBDb250ZW50c1NlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciA3ZnI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMnB4O1xyXG5cclxuICAgIGhlaWdodDogJHsocHJvcHM6IElDb250ZW50c1NlY3Rpb24pID0+IHByb3BzLmhlaWdodH1weDtcclxuYDtcclxuXHJcbmNvbnN0IENvbnRlbnRzVGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IG1pbihjYWxjKDAuOGVtICsgMC44dncpLCAxLjFlbSk7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG5gO1xyXG5cclxuY29uc3QgQ29udGVudHNEZXNjcmlwdGlvbiA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogbWluKGNhbGMoMWVtICsgMXZ3KSwgMS44ZW0pO1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElJbnRybyB7XHJcbiAgICBjb21wb25lbnRObzogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBJbnRybzogUmVhY3QuRkM8SUludHJvPiA9ICh7IGNvbXBvbmVudE5vIH0pOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICAvLyBzdGF0ZVxyXG4gICAgY29uc3QgW2FkZFNlY3Rpb25zLCBzZXRBZGRTZWN0aW9uc10gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXJbXT4oW10pO1xyXG5cclxuICAgIC8vIHJlZlxyXG4gICAgY29uc3QgaW50cm9Db250YWluZXJSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KCk7XHJcbiAgICBjb25zdCBjb250ZW50c1NlY3Rpb25SZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KCk7XHJcblxyXG4gICAgLy8gdmFyaWFibGVcclxuICAgIGNvbnN0IGNvbnRlbnRzQXJyYXkgPSBbXHJcbiAgICAgICAgeyB0aXRsZTogJ+ydtOumhCcsIGRlc2NyaXB0aW9uOiAn6rmA7ISx7LCsJyB9LFxyXG4gICAgICAgIHsgdGl0bGU6ICfsg53rhYTsm5TsnbwnLCBkZXNjcmlwdGlvbjogJzk0LjEyLjA5JyB9LFxyXG4gICAgICAgIHsgdGl0bGU6ICfsnbTrqZTsnbwnLCBkZXNjcmlwdGlvbjogJ3RqZGNrc2RsMDBAbmF2ZXIuY29tJyB9LFxyXG4gICAgICAgIHsgdGl0bGU6ICfsl7Drnb3sspgnLCBkZXNjcmlwdGlvbjogJzAxMC0zMzYxLTM2MzMnIH0sXHJcbiAgICAgICAgeyB0aXRsZTogJ+2Vmeq1kCcsIGRlc2NyaXB0aW9uOiAn7ZWc7JaR64yAIEVSSUNBJyB9LFxyXG4gICAgICAgIHsgdGl0bGU6ICfso7zsoITqs7UnLCBkZXNjcmlwdGlvbjogJ+ydkeyaqeyImO2VmScgfSxcclxuICAgICAgICB7IHRpdGxlOiAn67aA7KCE6rO1JywgZGVzY3JpcHRpb246ICfsu7Ttk6jthLDqs7XtlZknIH0sXHJcbiAgICAgICAgeyB0aXRsZTogJ+qyveugpScsIGRlc2NyaXB0aW9uOiAnMeuFhCAz6rCc7JuUJyB9LFxyXG4gICAgICAgIHsgdGl0bGU6ICfquLDsiKDrtoTslbwnLCBkZXNjcmlwdGlvbjogJ0ZFL0JFIOybuSDqsJzrsJwnIH0sXHJcbiAgICBdO1xyXG5cclxuICAgIC8vIHVzZUVmZmVjdFxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXRBZGRTZWN0aW9ucygpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIC8vIG5vcm1hbFxyXG4gICAgLy8gY29udGVudHPrpbwg7KCc7Jm47ZWcIOu2gOqwgCDrhIjruYQg6rWs7ZWY6riwXHJcbiAgICBjb25zdCBnZXRBZGRTZWN0aW9ucyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB0b3RhbENvdW50ID0gaW50cm9Db250YWluZXJSZWYuY3VycmVudC5jbGllbnRIZWlnaHQgLyAoY29udGVudHNTZWN0aW9uUmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0ICsgMzApO1xyXG5cclxuICAgICAgICBjb25zdCBhZGRTZWN0aW9ucyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG90YWxDb3VudCAtIGNvbnRlbnRzQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgYWRkU2VjdGlvbnMucHVzaChpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldEFkZFNlY3Rpb25zKGFkZFNlY3Rpb25zKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QmFzZSBjb21wb25lbnRObz17Y29tcG9uZW50Tm99PlxyXG4gICAgICAgICAgICA8SW50cm9Db250YWluZXIgcmVmPXtpbnRyb0NvbnRhaW5lclJlZn0+XHJcbiAgICAgICAgICAgICAgICB7Y29udGVudHNBcnJheS5tYXAoKGNvbnRlbnRzLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRzU2VjdGlvbiBrZXk9e2luZGV4fSByZWY9e2NvbnRlbnRzU2VjdGlvblJlZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRzVGl0bGU+e2NvbnRlbnRzLnRpdGxlfTwvQ29udGVudHNUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGVudHNEZXNjcmlwdGlvbj57Y29udGVudHMuZGVzY3JpcHRpb259PC9Db250ZW50c0Rlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50c1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50c1NlY3Rpb24ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRzVGl0bGU+e2NvbnRlbnRzLnRpdGxlfTwvQ29udGVudHNUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGVudHNEZXNjcmlwdGlvbj57Y29udGVudHMuZGVzY3JpcHRpb259PC9Db250ZW50c0Rlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50c1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcblxyXG4gICAgICAgICAgICAgICAge2FkZFNlY3Rpb25zLm1hcCgoYWRkU2VjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50c1NlY3Rpb24ga2V5PXthZGRTZWN0aW9ufSBoZWlnaHQ9e2NvbnRlbnRzU2VjdGlvblJlZi5jdXJyZW50LmNsaWVudEhlaWdodCAtIDh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRzVGl0bGUgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50c0Rlc2NyaXB0aW9uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGVudHNTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9JbnRyb0NvbnRhaW5lcj5cclxuICAgICAgICA8L0Jhc2U+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW50cm87XHJcbiIsIi8vIGltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbi8vIGltcG9ydCB7IG1heFdpZHRoIH0gZnJvbSAnLi4vc3R5bGUvc3R5bGUnO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkU2VjdGlvbjEgPSBzdHlsZWQuc2VjdGlvbmBcclxuLy8gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2ltYWdlL21haW5JbWFnZS5qcGcnKTtcclxuLy8gICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbi8vICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkRGl2MSA9IHN0eWxlZC5kaXZgXHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgIHBhZGRpbmc6IDgycHggMDtcclxuLy8gYDtcclxuXHJcbi8vIGludGVyZmFjZSBJU3R5ZWxkRGl2MiB7XHJcbi8vICAgICBpbm5lcldpZHRoOiBudW1iZXI7XHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IFN0eWxlZERpdjIgPSBzdHlsZWQuZGl2YFxyXG4vLyAgICAgZGlzcGxheTogJHsocHJvcHM6IElTdHllbGREaXYyKSA9PiAocHJvcHMuaW5uZXJXaWR0aCA+PSBtYXhXaWR0aCA/ICdibG9jaycgOiAnbm9uZScpfTtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIG1hcmdpbjogNjhweCAwO1xyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgZGl2M0tleUZyYW1lMSA9IGtleWZyYW1lc2BcclxuLy8gICAgIDUwJSB7XHJcbi8vICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcclxuLy8gICAgIH1cclxuLy8gYDtcclxuXHJcbi8vIGNvbnN0IFN0eWxlZERpdjMgPSBzdHlsZWQuZGl2YFxyXG4vLyAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuLy8gICAgICY6aG92ZXIge1xyXG4vLyAgICAgICAgIGFuaW1hdGlvbjogMS44cyAke2RpdjNLZXlGcmFtZTF9IGluZmluaXRlO1xyXG4vLyAgICAgfVxyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkRGl2NCA9IHN0eWxlZC5kaXZgXHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgIHdpZHRoOiAxNTJweDtcclxuLy8gICAgIGhlaWdodDogMTUycHg7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2FmMGJlO1xyXG4vLyAgICAgbWFyZ2luOiAxNnB4IDMycHg7XHJcbi8vIGA7XHJcblxyXG4vLyBjb25zdCBTdHlsZWREaXY1ID0gc3R5bGVkLmRpdmBcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gYDtcclxuXHJcbi8vIGNvbnN0IFN0eWxlZERpdjYgPSBzdHlsZWQuZGl2YFxyXG4vLyAgICAgbWF4LXdpZHRoOiAke21heFdpZHRofXB4O1xyXG4vLyAgICAgbWFyZ2luOiAwIGF1dG87XHJcbi8vICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcblxyXG4vLyAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHttYXhXaWR0aCArIDUwfXB4KSB7XHJcbi8vICAgICAgICAgbWFyZ2luLWJvdHRvbTogODRweDtcclxuLy8gICAgIH1cclxuLy8gYDtcclxuXHJcbi8vIGNvbnN0IFN0eWxlZFRpdGxlID0gc3R5bGVkLnNwYW5gXHJcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMy42ZW07XHJcbi8vICAgICBjb2xvcjogI2ZmZjtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbi8vICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCkge1xyXG4vLyAgICAgICAgIGZvbnQtc2l6ZTogNC44ZW07XHJcbi8vICAgICB9XHJcbi8vIGA7XHJcblxyXG4vLyBjb25zdCBTdHlsZWRTdWJUaXRsZSA9IHN0eWxlZC5zcGFuYFxyXG4vLyAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuLy8gICAgIGNvbG9yOiAjZmZmO1xyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkSDNfMSA9IHN0eWxlZC5oM2BcclxuLy8gICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbi8vICAgICBjb2xvcjogIzY1OGM1OTtcclxuLy8gYDtcclxuXHJcbi8vIGNvbnN0IFN0eWxlZFNwYW4xID0gc3R5bGVkLnNwYW5gXHJcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gICAgIGNvbG9yOiAjM2E1MjMzO1xyXG4vLyBgO1xyXG5cclxuLy8gaW50ZXJmYWNlIElNYWluIHtcclxuLy8gICAgIGlubmVyV2lkdGg6IG51bWJlcjtcclxuLy8gICAgIHRpdGxlQXJyYXk6IHN0cmluZ1tdO1xyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBNYWluOiBSZWFjdC5GQzxJTWFpbj4gPSAoeyBpbm5lcldpZHRoLCB0aXRsZUFycmF5IH0pOiBKU1guRWxlbWVudCA9PiB7XHJcbi8vICAgICBjb25zdCBvbkNsaWNrRGl2MyA9ICh0aXRsZTogc3RyaW5nKSA9PiB7XHJcbi8vICAgICAgICAgY29uc3QgdGl0bGVTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGl0bGUpO1xyXG5cclxuLy8gICAgICAgICBpZiAodGl0bGVTZWN0aW9uKSB7XHJcbi8vICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxCeSh7IHRvcDogdGl0bGVTZWN0aW9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH07XHJcblxyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICA8U3R5bGVkU2VjdGlvbjE+XHJcbi8vICAgICAgICAgICAgIDxTdHlsZWREaXY2PlxyXG4vLyAgICAgICAgICAgICAgICAgPFN0eWxlZERpdjU+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZERpdjIgaW5uZXJXaWR0aD17aW5uZXJXaWR0aH0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZUFycmF5Lm1hcCgodGl0bGUpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZERpdjMga2V5PXt0aXRsZX0gb25DbGljaz17KCkgPT4gb25DbGlja0RpdjModGl0bGUpfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZERpdjQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkSDNfMT57dGl0bGV9PC9TdHlsZWRIM18xPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4xPkdvIOKGkjwvU3R5bGVkU3BhbjE+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2ND5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZERpdjM+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuLy8gICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZERpdjI+XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXYxPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkVGl0bGU+6rmA7ISx7LCs7J2YIFBvcnRmb2xpbzwvU3R5bGVkVGl0bGU+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTdWJUaXRsZT5TaW5jZSAyMDIxPC9TdHlsZWRTdWJUaXRsZT5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZERpdjE+XHJcbi8vICAgICAgICAgICAgICAgICA8L1N0eWxlZERpdjU+XHJcbi8vICAgICAgICAgICAgIDwvU3R5bGVkRGl2Nj5cclxuLy8gICAgICAgICA8L1N0eWxlZFNlY3Rpb24xPlxyXG4vLyAgICAgKTtcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IE1haW47XHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xyXG5cclxuY29uc3QgVGl0bGVTZWN0aW9uS2V5RnJhbWUgPSBrZXlmcmFtZXNgXHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQwcHgpO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmcm9tOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZVNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgIHBhZGRpbmc6IDAgMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBhbmltYXRpb24tbmFtZTogJHtUaXRsZVNlY3Rpb25LZXlGcmFtZX07XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xyXG5gO1xyXG5cclxuY29uc3QgTWFpblRpdGxlID0gc3R5bGVkLnNwYW5gXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogY2FsYyg1NHB4ICsgMS41dncpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuYDtcclxuXHJcbmNvbnN0IFN1YlRpdGxlID0gc3R5bGVkLnNwYW5gXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogY2FsYygyNHB4ICsgMC40dncpO1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElNYWluIHtcclxuICAgIGNvbXBvbmVudE5vOiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IE1haW46IFJlYWN0LkZDPElNYWluPiA9ICh7IGNvbXBvbmVudE5vIH0pOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxCYXNlIGNvbXBvbmVudE5vPXtjb21wb25lbnROb30+XHJcbiAgICAgICAgICAgICAgICA8VGl0bGVTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNYWluVGl0bGU+6rmA7ISx7LCs7J2YIFBvcnRmb2xpbzwvTWFpblRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdWJUaXRsZT5TaW5jZSAyMDIxPC9TdWJUaXRsZT5cclxuICAgICAgICAgICAgICAgIDwvVGl0bGVTZWN0aW9uPlxyXG4gICAgICAgICAgICA8L0Jhc2U+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IE1vcmVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbmA7XHJcblxyXG5jb25zdCBIZWFkZXJTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICBtYXJnaW46IDI0cHggMDtcclxuICAgIHBhZGRpbmc6IDAgMjRweDtcclxuYDtcclxuXHJcbmNvbnN0IFVybFNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBwYWRkaW5nOiAwIDI0cHg7XHJcbmA7XHJcblxyXG5jb25zdCBGb290ZXJTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICBtYXJnaW46IDI0cHggMDtcclxuICAgIHBhZGRpbmc6IDAgMjRweDtcclxuYDtcclxuXHJcbmNvbnN0IFVybE1haW5EaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIG1hcmdpbjogMCAyNHB4IDI0cHggMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBVcmxTdWJEaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgSGVhZGVyVGV4dCA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiBtaW4oMS45ZW0sIDEuM2VtICsgMXZ3KTtcclxuYDtcclxuXHJcbmNvbnN0IFVybFRleHQgPSBzdHlsZWQuc3BhbmBcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IG1pbigxLjJlbSwgMWVtICsgMC43dncpO1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuYDtcclxuXHJcbmNvbnN0IEZvb3RlclRleHQgPSBzdHlsZWQuc3BhbmBcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogbWluKDEuNWVtLCAxLjFlbSArIDAuOXZ3KTtcclxuYDtcclxuXHJcbmNvbnN0IFVybEltYWdlID0gc3R5bGVkLmltZ2BcclxuICAgIHdpZHRoOiBtaW4oOGVtLCA1ZW0gKyA2LjR2dyk7XHJcbmA7XHJcblxyXG5jb25zdCBMb2dvSW1hZ2UgPSBzdHlsZWQuaW1nYFxyXG4gICAgd2lkdGg6IG1pbig4ZW0sIDVlbSArIDYuNHZ3KTtcclxuICAgIG1hcmdpbjogMTJweCAwO1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElNb3JlIHtcclxuICAgIGNvbXBvbmVudE5vOiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IE1vcmU6IFJlYWN0LkZDPElNb3JlPiA9ICh7IGNvbXBvbmVudE5vIH0pOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICAvLyBvbkNsaWNrXHJcbiAgICBjb25zdCBvbkNsaWNrVXJsTWFpbkRpdiA9ICh1cmw6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKHVybCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJhc2UgY29tcG9uZW50Tm89e2NvbXBvbmVudE5vfT5cclxuICAgICAgICAgICAgPE1vcmVDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyVGV4dD7quYDshLHssKzsnZggUG9ydGZvbGlvPC9IZWFkZXJUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXJUZXh0PlZlcnNpb24gMS4wLjA8L0hlYWRlclRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlclRleHQ+MjAyMS4wOC4xMTwvSGVhZGVyVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvSGVhZGVyU2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8VXJsU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8VXJsTWFpbkRpdiBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrVXJsTWFpbkRpdignaHR0cHM6Ly9naXRodWIuY29tL2tzY2NtcCcpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFVybFN1YkRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxVcmxJbWFnZSBzcmM9XCIvaW1hZ2UvZ2l0aHViLlBOR1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VXJsVGV4dD5odHRwczovL2dpdGh1Yi5jb20va3NjY21wPC9VcmxUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1VybFN1YkRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L1VybE1haW5EaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFVybE1haW5EaXYgb25DbGljaz17KCkgPT4gb25DbGlja1VybE1haW5EaXYoJ2h0dHBzOi8vamZvcmoudGlzdG9yeS5jb20nKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxVcmxTdWJEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VXJsSW1hZ2Ugc3JjPVwiL2ltYWdlL3Rpc3RvcnkuUE5HXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxVcmxUZXh0Pmh0dHBzOi8vamZvcmoudGlzdG9yeS5jb208L1VybFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVXJsU3ViRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVXJsTWFpbkRpdj5cclxuICAgICAgICAgICAgICAgIDwvVXJsU2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8Rm9vdGVyU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9vdGVyVGV4dD5odHRwczovL2tzY3BvcnRmb2xpby5jb208L0Zvb3RlclRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvb3RlclRleHQ+RGVzaWduZWQgQnkg6rmA7ISx7LCsPC9Gb290ZXJUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2dvSW1hZ2Ugc3JjPVwiL2ltYWdlL1NDTG9nbzIuc3ZnXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvRm9vdGVyU2VjdGlvbj5cclxuICAgICAgICAgICAgPC9Nb3JlQ29udGFpbmVyPlxyXG4gICAgICAgIDwvQmFzZT5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3JlO1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XHJcbmltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgaW5kZXhTdGF0ZSB9IGZyb20gJy4uL21vZHVsZXMvaW5kZXhSZWR1Y2VyJztcclxuXHJcbmNvbnN0IFByb2plY3RzQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMTJweCAxMnB4IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luOiA1MHB4IDE4cHggNjVweCAxOHB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDAgNHB4ICNjOGM4YzggaW5zZXQsIC0ycHggLTRweCA0cHggI2M4YzhjOCBpbnNldDtcclxuYDtcclxuXHJcbmNvbnN0IEltYWdlRGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIG1hcmdpbjogMThweCAyNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5gO1xyXG5cclxuY29uc3QgVGl0bGVTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRvcDogLTQwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHggMTJweCAwIDA7XHJcbiAgICBwYWRkaW5nOiAwIDEycHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggNHB4IDRweCAjYzhjOGM4IGluc2V0LCAtMnB4IDAgNHB4ICNjOGM4YzggaW5zZXQ7XHJcbmA7XHJcblxyXG5jb25zdCBDb250ZW50c1NlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHBhZGRpbmc6IDAgMTZweDtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xyXG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgVGV4dERlc2NyaXB0aW9uRGl2ID0gc3R5bGVkLmRpdmBgO1xyXG5cclxuY29uc3QgUGljdHVyZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgei1pbmRleDogMTAxO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5gO1xyXG5cclxuY29uc3QgUHV6emxlU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG5gO1xyXG5cclxuY29uc3QgUHV6emxlRGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luOiA0MHB4IDAgMTAwcHggMDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xNmRlZyk7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHtcclxuICAgICAgICB3aWR0aDogMTYwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIH1cclxuYDtcclxuXHJcbmludGVyZmFjZSBJUHV6emxlTGVmdCB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgUHV6emxlTGVmdCA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wczogSVB1enpsZUxlZnQpID0+IHByb3BzLmJhY2tncm91bmRDb2xvcn07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHRvcDogMTBweDtcclxuICAgIGxlZnQ6IC0xMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGxlZnQ6IC0xNXB4O1xyXG4gICAgICAgIHRvcDogMTVweDtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IFB1enpsZVJpZ2h0ID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHRvcDogMTBweDtcclxuICAgIHJpZ2h0OiAtMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDNweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICB0b3A6IDE1cHg7XHJcbiAgICAgICAgcmlnaHQ6IC0xNXB4O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgUHV6emxlVG9wID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHRvcDogLTEwcHg7XHJcbiAgICBsZWZ0OiA0MHB4O1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHRvcDogLTE1cHg7XHJcbiAgICAgICAgbGVmdDogNjVweDtcclxuICAgIH1cclxuYDtcclxuXHJcbmludGVyZmFjZSBJQ2FyZWVyVGl0bGUge1xyXG4gICAgY29sb3I/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IENhcmVlclRpdGxlID0gc3R5bGVkLnNwYW5gXHJcbiAgICBjb2xvcjogJHsocHJvcHM6IElDYXJlZXJUaXRsZSkgPT4gcHJvcHMuY29sb3J9O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogbWluKDEuM2VtLCAwLjhlbSArIDEuMnZ3KTtcclxuYDtcclxuXHJcbmludGVyZmFjZSBJVGV4dERlc2NyaXB0aW9uIHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xyXG4gICAgdHlwZT86IHN0cmluZztcclxuICAgIHNyYz86IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgVGV4dERlc2NyaXB0aW9uID0gc3R5bGVkLnNwYW5gXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMThweCAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogbWluKDEuMWVtLCAwLjdlbSArIDEuMXZ3KTtcclxuICAgIHBhZGRpbmc6IDhweCAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xyXG5cclxuICAgICR7KHByb3BzOiBJVGV4dERlc2NyaXB0aW9uKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb3BzLnR5cGUgPT09ICdjYW1lcmEnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjZweDtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnXFxmMDMwJztcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7cHJvcHMuYmFja2dyb3VuZENvbG9yfTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHVybCgke3Byb3BzLnNyY30pLCBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocHJvcHMudHlwZSA9PT0gJ2NhbGVuZGFyJykge1xyXG4gICAgICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ1xcZjI3Mic7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke3Byb3BzLmJhY2tncm91bmRDb2xvcn07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wcy50eXBlID09PSAncG9zaXRpb24nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjZweDtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnXFxmMmJiJztcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7cHJvcHMuYmFja2dyb3VuZENvbG9yfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYDtcclxuICAgICAgICB9IGVsc2UgaWYgKHByb3BzLnR5cGUgPT09ICdsaW5rJykge1xyXG4gICAgICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ1xcZjBjMSc7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke3Byb3BzLmJhY2tncm91bmRDb2xvcn07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wcy50eXBlID09PSAnY29kZScpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdcXGYxMjEnO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtwcm9wcy5iYWNrZ3JvdW5kQ29sb3J9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjZweDtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnXFxmMDA1JztcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7cHJvcHMuYmFja2dyb3VuZENvbG9yfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYDtcclxuICAgICAgICB9XHJcbiAgICB9fVxyXG5gO1xyXG5cclxuY29uc3QgUHV6emxlVGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IENhcmVlckltYWdlID0gc3R5bGVkLmltZ2BcclxuICAgIHdpZHRoOiBtaW4oMjBlbSwgY2FsYygxNWVtICsgMTB2dykpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG5gO1xyXG5cclxuY29uc3QgUGljdHVyZUltYWdlID0gc3R5bGVkLmltZ2BcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMjhweCk7XHJcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAyOHB4KTtcclxuYDtcclxuXHJcbmludGVyZmFjZSBJUHJvamVjdHMge1xyXG4gICAgY29tcG9uZW50Tm86IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgUHJvamVjdHM6IFJlYWN0LkZDPElQcm9qZWN0cz4gPSAoeyBjb21wb25lbnRObyB9KTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgLy8gcmVkdXhcclxuICAgIGNvbnN0IGJhY2tncm91bmRDb2xvckFycmF5ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBpbmRleFN0YXRlKSA9PiBzdGF0ZS5iYXNlUmVkdWNlci5iYWNrZ3JvdW5kQ29sb3JBcnJheSk7XHJcblxyXG4gICAgLy8gc3RhdGVcclxuICAgIGNvbnN0IFtwaWN0dXJlSW1hZ2UsIHNldFBpY3R1cmVJbWFnZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuICAgIGNvbnN0IFtjdXJyZW50SW1hZ2VJbmRleCwgc2V0Q3VycmVudEltYWdlSW5kZXhdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyW10+KFswLCAwLCAwLCAwXSk7XHJcblxyXG4gICAgLy8gcmVmXHJcbiAgICBjb25zdCBwaWN0dXJlQ29udGFpbmVyUmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG5cclxuICAgIC8vIHZhcmlhYmxlXHJcbiAgICBjb25zdCBpbWFnZXMgPSBbXHJcbiAgICAgICAgWycvaW1hZ2Uvc3NhZnkxLlBORyddLFxyXG4gICAgICAgIFsnL2ltYWdlL2dyb3VieV8wLlBORycsICcvaW1hZ2UvZ3JvdWJ5XzEuUE5HJywgJy9pbWFnZS9ncm91YnlfMi5QTkcnLCAnL2ltYWdlL2dyb3VieV8zLlBORyddLFxyXG4gICAgICAgIFsnL2ltYWdlL3NzYWZ5MS5QTkcnXSxcclxuICAgICAgICBbJy9pbWFnZS9tb3lvXzAuUE5HJywgJy9pbWFnZS9tb3lvXzEuUE5HJywgJy9pbWFnZS9tb3lvXzIuUE5HJywgJy9pbWFnZS9tb3lvXzMuUE5HJ10sXHJcbiAgICBdO1xyXG5cclxuICAgIC8vIG9uQ2xpY2tcclxuICAgIGNvbnN0IG9uQ2xpY2tJbWFnZURpdiA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRlbXBDdXJyZW50SW1hZ2VJbmRleCA9IGN1cnJlbnRJbWFnZUluZGV4LnNsaWNlKCk7XHJcbiAgICAgICAgdGVtcEN1cnJlbnRJbWFnZUluZGV4W2luZGV4XSA9ICh0ZW1wQ3VycmVudEltYWdlSW5kZXhbaW5kZXhdICsgMSkgJSBpbWFnZXNbaW5kZXhdLmxlbmd0aDtcclxuXHJcbiAgICAgICAgc2V0Q3VycmVudEltYWdlSW5kZXgodGVtcEN1cnJlbnRJbWFnZUluZGV4KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25DbGlja0NhbWVyYSA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxTcGFuRWxlbWVudCwgTW91c2VFdmVudD4sIGltZzogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgaWYgKHBpY3R1cmVDb250YWluZXJSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgc2V0UGljdHVyZUltYWdlKGltZyk7XHJcbiAgICAgICAgICAgIHBpY3R1cmVDb250YWluZXJSZWYuY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25DbGlja1BpY3R1cmVDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHBpY3R1cmVDb250YWluZXJSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICBzZXRQaWN0dXJlSW1hZ2UoJycpO1xyXG4gICAgICAgICAgICBwaWN0dXJlQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEJhc2UgY29tcG9uZW50Tm89e2NvbXBvbmVudE5vfT5cclxuICAgICAgICAgICAgICAgIDxQdXp6bGVTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQdXp6bGVEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQdXp6bGVMZWZ0IGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHV6emxlUmlnaHQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFB1enpsZVRvcCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHV6emxlVGl0bGU+7ZSE66Gc7KCd7Yq4PC9QdXp6bGVUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L1B1enpsZURpdj5cclxuICAgICAgICAgICAgICAgIDwvUHV6emxlU2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8UHJvamVjdHNDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmVlclRpdGxlPlBvcnRmb2xpbzwvQ2FyZWVyVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UaXRsZVNlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxDb250ZW50c1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZURpdiBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrSW1hZ2VEaXYoMCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmVlckltYWdlIHNyYz17aW1hZ2VzWzBdW2N1cnJlbnRJbWFnZUluZGV4WzBdXX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbWFnZURpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb25EaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfSB0eXBlPVwiY2FsZW5kYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMS4wNyB+IDIxLjA4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119IHR5cGU9XCJjb2RlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRkUg4oaSIE5leHQgLyBUeXBlU2NyaXB0IC8gUmVkdXggLyBIb29rcyAvIFN0eWxlZENvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDsm7kg7IKs7J207Yq47JeQ7IScIOuCmOunjOydmCDtj6ztirjtj7TrpqzsmKTrpbwg64iE6rWs64KYIOuzvCDsiJgg7J6I64+E66GdIO2VmOq4sCDsnITtlbQg6rCc67CcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOqzteyxheydhCDso7zsmpQg65SU7J6Q7J247Jy866GcIOyCvOyVhCDsmKTtlITrnbzsnbjsl5DshJwg7Y+s7Yq47Y+066as7Jik66W8IOuztOuKlCDrk6/tlZwgVUkvVVjrpbwg6rCc67CcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119IHR5cGU9XCJsaW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRG9tYWluIOKGkiA8YSBocmVmPVwibG9jYWxob3N0OjgwODhcIj5sb2NhbGhvc3Q6ODA4ODwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0gdHlwZT1cImxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHaXQg4oaSeycgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2tzY2NtcC9wb3J0Zm9saW9cIj5odHRwczovL2dpdGh1Yi5jb20va3NjY21wL3BvcnRmb2xpbzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbkRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnRzU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvUHJvamVjdHNDb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgPFByb2plY3RzQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZVNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJlZXJUaXRsZT5Hcm91Ynk8L0NhcmVlclRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGl0bGVTZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Q29udGVudHNTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VEaXYgb25DbGljaz17KCkgPT4gb25DbGlja0ltYWdlRGl2KDEpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJlZXJJbWFnZSBzcmM9e2ltYWdlc1sxXVtjdXJyZW50SW1hZ2VJbmRleFsxXV19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW1hZ2VEaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0gdHlwZT1cImNhbGVuZGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjAuMTAgfiAyMS4wMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfSB0eXBlPVwiY29kZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZFIOKGkiBOZXh0IC8gVHlwZVNjcmlwdCAvIFJlZHV4IC8gSG9va3MgLyBTdHlsZWRDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0gdHlwZT1cImNvZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCRSDihpIgU3ByaW5nIC8gTXliYXRpcyAvIE15U1FMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5leHTsgqzsmqkg6rK97ZeY6rO8IENTU+yXreufieydhCDrhpLsnbTquLAg7JyE7ZW0IOynhO2Wie2VnCDqsJzsnbgg7ZSE66Gc7KCd7Yq4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOuwqeusuO2WiOyXiOuNmCDsnqXshozsl5Ag64yA7ZWcIOyasOumrOunjOydmCDtj4nqsIDrpbwg7ZWY7JesIOyerOuwqeusuOydhCDsnITtlZwg7J2Y6rKs7JeQIOuPhOybgOydtCDrkJjqs6DsnpAg6rCc67CcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOq3uOujuSwg7Iqk7Yyf7J2EIOyEoO2Dne2VnCDrkqQg7J247Iqk7YOA6re4656o7LKY65+8IOyCrOynhCDqs7XsnKAg67CPIOuMk+q4gCDquLDriqUg6rCc67CcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOuwqeusuO2WiOuNmCDsnqXshozsnZgg7Y+J6rCA7JqU7IaM7JeQIOuUsOudvCDsoJDsiJjrpbwg67aA7Jes7ZWY7JesIO2PieqwgO2VoCDsiJgg7J6I6rOgIOyghOyytCDtj4nsoJDrj4Qg7ZmV7J247ZWgIOyImFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOyeiOuPhOuhnSDqsJzrsJxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg7ISk6rOEIOuLqOqzhOyXkOyEnCDripDqu7TsoYzrjZgg67O17J6h7ZWo7J20IOyCrOyaqe2VoCDrlYwg6re464yA66GcIOuKkOq7tOynhCDslYTsiazsm4DsnbQg64Ko64qUIO2UhOuhnOygne2KuFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfSB0eXBlPVwibGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdpdCDihpIgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9rc2NjbXAvR3JvdWJ5XCI+aHR0cHM6Ly9naXRodWIuY29tL2tzY2NtcC9Hcm91Ynk8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb25EaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50c1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L1Byb2plY3RzQ29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxQcm9qZWN0c0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8VGl0bGVTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZWVyVGl0bGU+U0NWQzwvQ2FyZWVyVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UaXRsZVNlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxDb250ZW50c1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZURpdiBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrSW1hZ2VEaXYoMil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmVlckltYWdlIHNyYz17aW1hZ2VzWzJdW2N1cnJlbnRJbWFnZUluZGV4WzJdXX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbWFnZURpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb25EaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfSB0eXBlPVwiY2FsZW5kYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMC4wOCB+IDIwLjA5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119IHR5cGU9XCJjb2RlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRkUg4oaSIFJlYWN0IC8gVHlwZVNjcmlwdCAvIFJlZHV4IC8gUmVkdXgtU2FnYSAvIEhvb2tzIC8gU3R5bGVkQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119IHR5cGU9XCJjb2RlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQkUg4oaSIFNwcmluZyAvIE15YmF0aXMgLyBNeVNRTCAvIE5vZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHlwZVNjcmlwdOyZgCBSZWR1eC1TYWdh7J2YIOyCrOyaqSDqsr3tl5jsnYQg64aS7J206riwIOychO2VtCDsp4TtlontlZwg6rCc7J24IO2UhOuhnOygne2KuFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDstZzqt7wg67mE64yA66m07J2YIOykkeyalOyEseydtCDspp3qsIDrkKjsl5Ag65Sw6528IOyXreufiSDtmZXrs7Trpbwg7JyE7ZW0IOq0gOugqCDquLDriqUg6rCc67CcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOyeheyepe2VmOqzoOyekCDtlZjripQg67Cp7J2EIOqygOyDie2VoCDsiJgg7J6I6rOgIOygle2VtOynhCDsnbjsm5Drp4ztgbzsnZgg7J247JuQ66eMIOywuOyXrCDqsIDriqXtlZjrj4TroZ0g6rCc67CcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJUQ1BlZXJDb25uZWN0aW9uICsgU29ja2V0SU/rpbwg7IKs7Jqp7ZWY7JesIOyLpOyLnOqwhCDtmZTsg4Eg7ZqM7J2YIOuwjyDssYTtjIUg6rCc67CcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119IHR5cGU9XCJsaW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2l0IOKGknsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9rc2NjbXAvdmlkZW9fY2hhdF90eXBlc2NyaXB0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9rc2NjbXAvdmlkZW9fY2hhdF90eXBlc2NyaXB0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGVudHNTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9Qcm9qZWN0c0NvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgICA8UHJvamVjdHNDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmVlclRpdGxlPk1veW88L0NhcmVlclRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGl0bGVTZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Q29udGVudHNTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VEaXYgb25DbGljaz17KCkgPT4gb25DbGlja0ltYWdlRGl2KDMpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJlZXJJbWFnZSBzcmM9e2ltYWdlc1szXVtjdXJyZW50SW1hZ2VJbmRleFszXV19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW1hZ2VEaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0gdHlwZT1cImNhbGVuZGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjAuMDEgfiAyMC4wMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfSB0eXBlPVwiY29kZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZFIOKGkiBSZWFjdCAvIFJlZHV4IC8gSG9va3MgLyBTdHlsZWRDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0gdHlwZT1cImNvZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCRSDihpIgU3ByaW5nQm9vdCAvIE15YmF0aXMgLyBNeVNRTCAvIEZpcmVCYXNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNTQUZZ7JeQ7IScIOynhO2Wie2VnCDtjIAg7ZSE66Gc7KCd7Yq4ICg17J24KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDsl6ztlokg64+Z7ZaJ7J6Q66W8IOqwhO2OuO2VmOqyjCDrp6Tsua3tlZjripQg6rKD7JeQIOuPhOybgOydtCDrkJjqs6DsnpAg6rCc67CcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0ICsgRmlyZUJhc2Xrpbwg7J207Jqp7ZWY7JesIERN6riw64qlIOqwnOuwnFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDsnpDsi6DsnZgg7JyE7LmY7JeQIOqwhO2OuO2VmOqyjCDrgpnshJwoPyntlaAg7IiYIOyeiOuKlCDtj6zsiqTtirjrp7Ug6riw64qlIOqwnOuwnFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDsgqzsmqnrkJjripQgVG9vbOydmCDsiJnroKjrj4Qg67aA7KGx7Jy866GcIOuqqe2RnO2VnCDquLDriqXrk6TsnYQg66qo65GQIOqwnOuwnO2VmOyngCDrqrvtlZzqsoPsl5Ag64yA7ZW0IOyVhOyJrOybgOydtFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOuCqOuKlCDtlITroZzsoJ3tirhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0gdHlwZT1cImxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHaXQg4oaSIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20va3NjY21wL21veW9cIj5odHRwczovL2dpdGh1Yi5jb20va3NjY21wL21veW88L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb25EaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50c1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L1Byb2plY3RzQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L0Jhc2U+XHJcblxyXG4gICAgICAgICAgICA8UGljdHVyZUNvbnRhaW5lciByZWY9e3BpY3R1cmVDb250YWluZXJSZWZ9IG9uQ2xpY2s9e29uQ2xpY2tQaWN0dXJlQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxQaWN0dXJlSW1hZ2Ugc3JjPXtwaWN0dXJlSW1hZ2V9IC8+XHJcbiAgICAgICAgICAgIDwvUGljdHVyZUNvbnRhaW5lcj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cztcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGluZGV4U3RhdGUgfSBmcm9tICcuLi9tb2R1bGVzL2luZGV4UmVkdWNlcic7XHJcblxyXG5jb25zdCBTa2lsbHNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgcGFkZGluZzogMjBweDtcclxuYDtcclxuXHJcbmNvbnN0IFRpdGxlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMjRweCAwIDUycHggMDtcclxuYDtcclxuXHJcbmNvbnN0IFRpdGxlTWFpbkRpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgcGFkZGluZzogMTJweCAwO1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElUaXRsZVN1YkRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgVGl0bGVTdWJEaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHM6IElUaXRsZVN1YkRpdikgPT4gcHJvcHMuYmFja2dyb3VuZENvbG9yfTtcclxuICAgIHRvcDogLTEycHg7XHJcbiAgICBsZWZ0OiAxMnB4O1xyXG4gICAgcGFkZGluZzogMCA0cHg7XHJcbmA7XHJcblxyXG5jb25zdCBDb250ZW50c0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzBweCkge1xyXG4gICAgICAgIGhlaWdodDogMTA4MHB4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4NDBweCkge1xyXG4gICAgICAgIGhlaWdodDogNzIwcHg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgU2tpbGxTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICB3aWR0aDogMjQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1NHB4O1xyXG5gO1xyXG5cclxuY29uc3QgVGl0bGVEaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgcGFkZGluZzogOHB4IDA7XHJcbmA7XHJcblxyXG5jb25zdCBJbWFnZURpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDRweCA0cHggI2M4YzhjOCBpbnNldCwgLTJweCAtNHB4IDRweCAjYzhjOGM4IGluc2V0O1xyXG5gO1xyXG5cclxuY29uc3QgTWFpblRpdGxlID0gc3R5bGVkLnNwYW5gXHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiBtaW4oY2FsYygxLjJlbSArIDAuNXZ3KSwgMS44ZW0pO1xyXG5gO1xyXG5cclxuY29uc3QgU3ViVGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IG1pbihjYWxjKDAuOWVtICsgMC41dncpLCAxLjFlbSk7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG5gO1xyXG5cclxuY29uc3QgU2tpbGxUaXRsZSA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IG1pbigxLjRlbSArIDAuNHZ3LCAxLjZlbSk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuYDtcclxuXHJcbmNvbnN0IFNraWxsSW1hZ2UgPSBzdHlsZWQuaW1nYGA7XHJcblxyXG5pbnRlcmZhY2UgSVNraWxscyB7XHJcbiAgICBjb21wb25lbnRObzogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBTa2lsbHM6IFJlYWN0LkZDPElTa2lsbHM+ID0gKHsgY29tcG9uZW50Tm8gfSk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIC8vIHJlZHV4XHJcbiAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3JBcnJheSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogaW5kZXhTdGF0ZSkgPT4gc3RhdGUuYmFzZVJlZHVjZXIuYmFja2dyb3VuZENvbG9yQXJyYXkpO1xyXG5cclxuICAgIC8vIHZhcmlhYmxlXHJcbiAgICBjb25zdCBza2lsbHNBcnJheSA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnRkUnLFxyXG4gICAgICAgICAgICBzcmM6ICcvaW1hZ2UvZmUuUE5HJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdEZXZvcHMnLFxyXG4gICAgICAgICAgICBzcmM6ICcvaW1hZ2UvZGV2b3BzLlBORycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnRGV2ZWxvcG1lbnQnLFxyXG4gICAgICAgICAgICBzcmM6ICcvaW1hZ2UvZGV2ZWxvcG1lbnQuUE5HJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdCRScsXHJcbiAgICAgICAgICAgIHNyYzogJy9pbWFnZS9iZS5QTkcnLFxyXG4gICAgICAgIH0sXHJcbiAgICBdO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJhc2UgY29tcG9uZW50Tm89e2NvbXBvbmVudE5vfT5cclxuICAgICAgICAgICAgPFNraWxsc0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxUaXRsZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8VGl0bGVTdWJEaXYgYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3ViVGl0bGU+7KCc66qpPC9TdWJUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L1RpdGxlU3ViRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZU1haW5EaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNYWluVGl0bGU+6riw7Iig7Iqk7YOd7J20IOutkOqwgCDsnojsp4AuLj88L01haW5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L1RpdGxlTWFpbkRpdj5cclxuICAgICAgICAgICAgICAgIDwvVGl0bGVDb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgPFRpdGxlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZVN1YkRpdiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdWJUaXRsZT7rgrTsmqk8L1N1YlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGl0bGVTdWJEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlTWFpbkRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRzQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NraWxsc0FycmF5Lm1hcCgoc2tpbGwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2tpbGxTZWN0aW9uIGtleT17c2tpbGwudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRpdGxlRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTa2lsbFRpdGxlPntza2lsbC50aXRsZX08L1NraWxsVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RpdGxlRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTa2lsbEltYWdlIHNyYz17c2tpbGwuc3JjfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbWFnZURpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ta2lsbFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnRzQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGl0bGVNYWluRGl2PlxyXG4gICAgICAgICAgICAgICAgPC9UaXRsZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9Ta2lsbHNDb250YWluZXI+XHJcbiAgICAgICAgPC9CYXNlPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNraWxscztcclxuIiwiLy8gaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xyXG4vLyBpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbi8vIGNvbnN0IFN0eWxlZERpdjEgPSBzdHlsZWQuZGl2YFxyXG4vLyAgICAgbWFyZ2luOiAwIDI0cHg7XHJcbi8vICAgICBwYWRkaW5nOiAyMnB4IDAgNTNweCAwO1xyXG4vLyAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbi8vIGA7XHJcblxyXG4vLyBjb25zdCBTdHlsZWREaXYyID0gc3R5bGVkLmRpdmBcclxuLy8gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuLy8gICAgIHBhZGRpbmc6IDMycHggMjRweDtcclxuLy8gICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbi8vIGA7XHJcblxyXG4vLyBjb25zdCBTdHlsZWRTcGFuMSA9IHN0eWxlZC5zcGFuYFxyXG4vLyAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgICBjb2xvcjogI2ZmZjtcclxuLy8gYDtcclxuXHJcbi8vIGNvbnN0IFN0eWxlZFNwYW4yID0gc3R5bGVkLnNwYW5gXHJcbi8vICAgICBkaXNwbGF5OiBibG9jaztcclxuLy8gICAgIGNvbG9yOiAjZmZmO1xyXG4vLyBgO1xyXG5cclxuLy8gaW50ZXJmYWNlIElXaHlJdCB7XHJcbi8vICAgICB0aXRsZTogc3RyaW5nO1xyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBXaHlJdDogUmVhY3QuRkM8SVdoeUl0PiA9ICh7IHRpdGxlIH0pOiBKU1guRWxlbWVudCA9PiB7XHJcbi8vICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgIDxCYXNlIHRpdGxlPXt0aXRsZX0gYmFja2dyb3VuZENvbG9yPVwiIzZBOTE5NFwiPlxyXG4vLyAgICAgICAgICAgICA8U3R5bGVkRGl2MT5cclxuLy8gICAgICAgICAgICAgICAgIDxTdHlsZWREaXYyPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMT5JVOulvCDsmZwg7Iuc7J6R7ZWY6rKMIOuQmOyXiOydhOq5jD88L1N0eWxlZFNwYW4xPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMj7snbTrn7Ag7J207JygIOuVjOusuOydtOuLpC4g7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuIOydtOufsCDsnbTsnKAg65WM66y47J2064ukLjwvU3R5bGVkU3BhbjI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4yPuydtOufsCDsnbTsnKAg65WM66y47J2064ukLjwvU3R5bGVkU3BhbjI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4yPuydtOufsCDsnbTsnKAg65WM66y47J2064ukLjwvU3R5bGVkU3BhbjI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4yPuydtOufsCDsnbTsnKAg65WM66y47J2064ukLjwvU3R5bGVkU3BhbjI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4yPuydtOufsCDsnbTsnKAg65WM66y47J2064ukLjwvU3R5bGVkU3BhbjI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4yPuydtOufsCDsnbTsnKAg65WM66y47J2064ukLjwvU3R5bGVkU3BhbjI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4yPuydtOufsCDsnbTsnKAg65WM66y47J2064ukLiDsnbTrn7Ag7J207JygIOuVjOusuOydtOuLpC4g7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuPC9TdHlsZWRTcGFuMj5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjI+7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuIOydtOufsCDsnbTsnKAg65WM66y47J2064ukLiDsnbTrn7Ag7J207JygIOuVjOusuOydtOuLpC48L1N0eWxlZFNwYW4yPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMj7snbTrn7Ag7J207JygIOuVjOusuOydtOuLpC4g7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuIOydtOufsCDsnbTsnKAg65WM66y47J2064ukLjwvU3R5bGVkU3BhbjI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4yPuydtOufsCDsnbTsnKAg65WM66y47J2064ukLiDsnbTrn7Ag7J207JygIOuVjOusuOydtOuLpC4g7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuPC9TdHlsZWRTcGFuMj5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjI+7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuIOydtOufsCDsnbTsnKAg65WM66y47J2064ukLiDsnbTrn7Ag7J207JygIOuVjOusuOydtOuLpC48L1N0eWxlZFNwYW4yPlxyXG4vLyAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXYyPlxyXG4vLyAgICAgICAgICAgICA8L1N0eWxlZERpdjE+XHJcbi8vICAgICAgICAgPC9CYXNlPlxyXG4vLyAgICAgKTtcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IFdoeUl0O1xyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xyXG5pbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGluZGV4U3RhdGUgfSBmcm9tICcuLi9tb2R1bGVzL2luZGV4UmVkdWNlcic7XHJcblxyXG5jb25zdCBXaHlJdENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgVGl0bGVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAyNHB4IDAgNTJweCAwO1xyXG5gO1xyXG5cclxuY29uc3QgVGl0bGVNYWluRGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDA7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSVRpdGxlU3ViRGl2IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBUaXRsZVN1YkRpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wczogSVRpdGxlU3ViRGl2KSA9PiBwcm9wcy5iYWNrZ3JvdW5kQ29sb3J9O1xyXG4gICAgdG9wOiAtMTJweDtcclxuICAgIGxlZnQ6IDEycHg7XHJcbiAgICBwYWRkaW5nOiAwIDRweDtcclxuYDtcclxuXHJcbmNvbnN0IFFBQ29udGFpZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODYwcHgpIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgUXVlc3Rpb25TZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICBwYWRkaW5nOiAwIDIwcHggMCAyMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgQW5zd2VyU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gICAgcGFkZGluZzogMCAyMHB4IDAgMjBweDtcclxuYDtcclxuXHJcbmNvbnN0IHF1ZXN0aW9uTnVtYmVyS2V5ZnJhbWUgPSBrZXlmcmFtZXNgXHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICA1MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgUXVlc3Rpb25EaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW46IDI0cHggMDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBib3gtc2hhZG93OiAycHggNHB4IDRweCAjYzhjOGM4IGluc2V0LCAtMnB4IC00cHggNHB4ICNjOGM4YzggaW5zZXQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgJiA+IGRpdiA+IHNwYW46Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBhbmltYXRpb24tbmFtZTogJHtxdWVzdGlvbk51bWJlcktleWZyYW1lfTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcclxuICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgUXVlc3Rpb25TdWJEaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBBbnN3ZXJEaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWluLWhlaWdodDogY2FsYygyNDhweCArIDMwdmgpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW46IDI0cHggMDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDJweCA0cHggNHB4ICNjOGM4YzggaW5zZXQsIC0ycHggLTRweCA0cHggI2M4YzhjOCBpbnNldDtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4NjBweCkge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgIHdpZHRoOiBtaW4oY2FsYygxNmVtICsgMTJ2dyksIDI2ZW0pO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgTWFpblRpdGxlID0gc3R5bGVkLnNwYW5gXHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiBtaW4oY2FsYygxLjJlbSArIDAuNXZ3KSwgMS44ZW0pO1xyXG5gO1xyXG5cclxuY29uc3QgU3ViVGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IG1pbihjYWxjKDAuOWVtICsgMC41dncpLCAxLjFlbSk7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElRdWVzdGlvblRpdGxlIHtcclxuICAgIGNvbG9yOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IFF1ZXN0aW9uVGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IG1pbihjYWxjKDE4cHggKyAwLjJ2dyksIDEuNGVtKTtcclxuICAgIGNvbG9yOiAkeyhwcm9wczogSVF1ZXN0aW9uVGl0bGUpID0+IHByb3BzLmNvbG9yfTtcclxuYDtcclxuXHJcbmNvbnN0IEFuc3dlclRpdGxlID0gc3R5bGVkLnNwYW5gXHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElRdWVzdGlvbk51bWJlciB7XHJcbiAgICBpc0NsaWNrOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBRdWVzdGlvbk51bWJlciA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogbWluKGNhbGMoMjRweCArIDAuNnZ3KSwgMmVtKTtcclxuICAgIGNvbG9yOiAjZjE1ZTVlO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcclxuICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuXHJcbiAgICBhbmltYXRpb24tbmFtZTogJHsocHJvcHM6IElRdWVzdGlvbk51bWJlcikgPT4gKHByb3BzLmlzQ2xpY2sgPyBxdWVzdGlvbk51bWJlcktleWZyYW1lIDogJycpfTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuYDtcclxuXHJcbmludGVyZmFjZSBJV2h5SXQge1xyXG4gICAgY29tcG9uZW50Tm86IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgV2h5SXQ6IFJlYWN0LkZDPElXaHlJdD4gPSAoeyBjb21wb25lbnRObyB9KTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgLy8gcmVkdXhcclxuICAgIGNvbnN0IGJhY2tncm91bmRDb2xvckFycmF5ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBpbmRleFN0YXRlKSA9PiBzdGF0ZS5iYXNlUmVkdWNlci5iYWNrZ3JvdW5kQ29sb3JBcnJheSk7XHJcblxyXG4gICAgLy8gc3RhdGVcclxuICAgIGNvbnN0IFtxdWVzdGlvbkluZGV4LCBzZXRRdWVzdGlvbkluZGV4XSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oLTEpO1xyXG4gICAgY29uc3QgW3R5cGluZ1RpbWVyLCBzZXRUeXBpbmdUaW1lcl0gPSBSZWFjdC51c2VTdGF0ZTxOb2RlSlMuVGltZXI+KCk7XHJcblxyXG4gICAgLy8gcmVmXHJcbiAgICBjb25zdCBhbnN3ZXJUaXRsZVJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MU3BhbkVsZW1lbnQ+KCk7XHJcbiAgICBjb25zdCBhbnN3ZXJEaXZSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KCk7XHJcblxyXG4gICAgLy8gdmFyaWFibGVcclxuICAgIGNvbnN0IHFuYUFycmF5ID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcXVlc3Rpb246ICdJVOyXkCDqtIDsi6zqsIDsp4Qg7Iuc6riwJyxcclxuICAgICAgICAgICAgYW5zd2VyOiAnSVTsl5Ag6rSA7Ius6rCA7KeEIOyLnOq4sCcsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBxdWVzdGlvbjogJ0lU7JeQIOq0gOyLrOydhCDqsIDsp4Dqsowg65CcIOqzhOq4sCcsXHJcbiAgICAgICAgICAgIGFuc3dlcjogYElU7JeQIOq0gOyLrOydhCDqsIDsp4Dqsowg65CcIOqzhOq4sFxcblxcbuOFjuOFjuOFjuOFjmAsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBxdWVzdGlvbjogJ+qwnOuwnOyekOulvCDshKDtg53tlZwg7J207JygJyxcclxuICAgICAgICAgICAgYW5zd2VyOiAn6rCc67Cc7J6Q66W8IOyEoO2Dne2VnCDsnbTsnKAnLFxyXG4gICAgICAgIH0sXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IHF1ZXN0aW9uQ29sb3IgPSBbJyM4RkMxNUInLCAnI0YxOTAyMycsICcjNjNDMUE5J107XHJcblxyXG4gICAgLy8gb25DbGlja1xyXG4gICAgY29uc3Qgb25DbGlja1F1ZXN0aW9uID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICBzZXRRdWVzdGlvbkluZGV4KGluZGV4KTsgLy8g7KeI66y4IGluZGV4XHJcbiAgICAgICAgY29uc3QgdGltZSA9IDUwOyAvLyDquIDsnpAg64KY7Jik64qUIOyGjeuPhFxyXG5cclxuICAgICAgICBpZiAoYW5zd2VyVGl0bGVSZWYuY3VycmVudCAmJiBhbnN3ZXJEaXZSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICBsZXQgY2hhckluZGV4ID0gMDtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0eXBpbmdUaW1lcik7IC8vIOq4sOyhtCBpbnRlcnZhbCDsooXro4xcclxuICAgICAgICAgICAgYW5zd2VyVGl0bGVSZWYuY3VycmVudC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgYW5zd2VyVGl0bGVSZWYuY3VycmVudC5zdHlsZS5jb2xvciA9IHF1ZXN0aW9uQ29sb3JbaW5kZXhdO1xyXG4gICAgICAgICAgICBhbnN3ZXJEaXZSZWYuY3VycmVudC5zdHlsZS5ib3hTaGFkb3cgPSBgMnB4IDRweCA0cHggJHtxdWVzdGlvbkNvbG9yW2luZGV4XX0gaW5zZXQsIC0ycHggLTRweCA0cHggJHtxdWVzdGlvbkNvbG9yW2luZGV4XX0gaW5zZXRgO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdHlwaW5nSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyDtg4DsnbTtlZEg7LKY66asXHJcbiAgICAgICAgICAgICAgICBpZiAocW5hQXJyYXlbaW5kZXhdLmFuc3dlcltjaGFySW5kZXhdID09PSAnXFxuJykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOqwnO2WiSDrrLjsnpDsnbwg6rK97JqwXHJcbiAgICAgICAgICAgICAgICAgICAgYW5zd2VyVGl0bGVSZWYuY3VycmVudC5pbm5lckhUTUwgKz0gJzxiciAvPic7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhckluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOqwnO2WiSDrrLjsnpDqsIAg7JWE64uQIOqyveyasFxyXG4gICAgICAgICAgICAgICAgICAgIGFuc3dlclRpdGxlUmVmLmN1cnJlbnQuaW5uZXJIVE1MICs9IHFuYUFycmF5W2luZGV4XS5hbnN3ZXJbY2hhckluZGV4KytdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCB0aW1lKTtcclxuXHJcbiAgICAgICAgICAgIHNldFR5cGluZ1RpbWVyKHR5cGluZ0ludGVydmFsKTsgLy8g7ZiE7J6sIGludGVydmFsIOuTseuhnVxyXG5cclxuICAgICAgICAgICAgLy8g66qo65OgIOusuOyekOqwgCDsspjrpqzrkJjripQg7Iuc6rCE7JeQIOuPhOuLrO2VmOuptCBpbnRlcnZhbCDsooXro4xcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHR5cGluZ0ludGVydmFsKTtcclxuICAgICAgICAgICAgfSwgcW5hQXJyYXlbaW5kZXhdLmFuc3dlci5sZW5ndGggKiB0aW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJhc2UgY29tcG9uZW50Tm89e2NvbXBvbmVudE5vfT5cclxuICAgICAgICAgICAgPFdoeUl0Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPFRpdGxlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZVN1YkRpdiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdWJUaXRsZT7soJzrqqk8L1N1YlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGl0bGVTdWJEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlTWFpbkRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1haW5UaXRsZT7smZwg6rCc67Cc7J6Q6rCAIOuQmOugpOqzoCDtlojrjZTrnbwuLj88L01haW5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L1RpdGxlTWFpbkRpdj5cclxuICAgICAgICAgICAgICAgIDwvVGl0bGVDb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgPFRpdGxlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZVN1YkRpdiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdWJUaXRsZT7rgrTsmqk8L1N1YlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGl0bGVTdWJEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlTWFpbkRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFFBQ29udGFpZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UXVlc3Rpb25TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtxbmFBcnJheS5tYXAoKHFuYSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxRdWVzdGlvbkRpdiBrZXk9e3FuYS5hbnN3ZXJ9IG9uQ2xpY2s9eyhlKSA9PiBvbkNsaWNrUXVlc3Rpb24oaW5kZXgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UXVlc3Rpb25TdWJEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxRdWVzdGlvbk51bWJlciBpc0NsaWNrPXtxdWVzdGlvbkluZGV4ID09PSBpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBRe2luZGV4ICsgMX0ueycgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9RdWVzdGlvbk51bWJlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFF1ZXN0aW9uVGl0bGUgY29sb3I9e3F1ZXN0aW9uQ29sb3JbaW5kZXhdfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtxbmEucXVlc3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUXVlc3Rpb25UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1F1ZXN0aW9uU3ViRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9RdWVzdGlvbkRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUXVlc3Rpb25TZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbnN3ZXJTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbnN3ZXJEaXYgcmVmPXthbnN3ZXJEaXZSZWZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW5zd2VyVGl0bGUgcmVmPXthbnN3ZXJUaXRsZVJlZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cXVlc3Rpb25JbmRleCA+PSAwID8gJycgOiAn6raB6riI7ZWY7IugIOyniOusuOydhCDshKDtg53tlbTso7zshLjsmpQuJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BbnN3ZXJUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Fuc3dlckRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQW5zd2VyU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9RQUNvbnRhaWVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGl0bGVNYWluRGl2PlxyXG4gICAgICAgICAgICAgICAgPC9UaXRsZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9XaHlJdENvbnRhaW5lcj5cclxuICAgICAgICA8L0Jhc2U+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2h5SXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=