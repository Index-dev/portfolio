self["webpackHotUpdate_N_E"]("pages/index",{

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\component\\career.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var MainSection = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div.withConfig({
  displayName: "career__MainSection",
  componentId: "sc-10mcn0j-0"
})(["text-align:center;"]);
_c = MainSection;
var MainDiv = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div.withConfig({
  displayName: "career__MainDiv",
  componentId: "sc-10mcn0j-1"
})(["padding-bottom:54px;display:flex;justify-content:center;flex-wrap:wrap;@media screen and (min-width:620px){flex-wrap:nowrap;}"]);
_c2 = MainDiv;
var ImageDiv = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div.withConfig({
  displayName: "career__ImageDiv",
  componentId: "sc-10mcn0j-2"
})(["margin:0 25px 38px 25px;"]);
_c3 = ImageDiv;
var TextDiv = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div.withConfig({
  displayName: "career__TextDiv",
  componentId: "sc-10mcn0j-3"
})(["margin:0 25px;background-color:#fff;border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-left-radius:10px;border-bottom-right-radius:10px;box-shadow:2px 4px 4px #c8c8c8 inset,-2px -4px 4px #c8c8c8 inset;padding:12px 18px;"]);
_c4 = TextDiv;
var TextTitleDiv = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div.withConfig({
  displayName: "career__TextTitleDiv",
  componentId: "sc-10mcn0j-4"
})(["margin-bottom:18px;"]);
_c5 = TextTitleDiv;
var TextDescriptionDiv = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div.withConfig({
  displayName: "career__TextDescriptionDiv",
  componentId: "sc-10mcn0j-5"
})(["text-align:left;"]);
_c6 = TextDescriptionDiv;
var PictureContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div.withConfig({
  displayName: "career__PictureContainer",
  componentId: "sc-10mcn0j-6"
})(["position:fixed;width:100vw;height:100vh;background-color:rgba(0,0,0,0.5);display:none;justify-content:center;align-items:center;z-index:101;top:0;cursor:pointer;"]);
_c7 = PictureContainer;
var TextTitle = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.span.withConfig({
  displayName: "career__TextTitle",
  componentId: "sc-10mcn0j-7"
})(["font-weight:600;font-size:calc(17px + 0.5vw);color:", ";"], function (props) {
  return props.color;
});
_c8 = TextTitle;
var TextDescription = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.span.withConfig({
  displayName: "career__TextDescription",
  componentId: "sc-10mcn0j-8"
})(["display:block;margin:23px 0;font-weight:600;font-size:calc(15px + 0.2vw);", ""], function (props) {
  if (props.type === 'camera') {
    return "\n                color: rgba(0, 0, 0, 0.7);\n                &:before {\n                    display: inline-block;\n                    width: 26px;\n                    content: '\f030';\n                    font-family: FontAwesome;\n                    color: #C68377;\n                }\n            ";
  } else if (props.type === 'calendar') {
    return "\n                color: rgba(0, 0, 0, 0.7);\n                &:before {\n                    display: inline-block;\n                    width: 26px;\n                    content: '\f272';\n                    font-family: FontAwesome;\n                    color: #C68377;\n                }\n            ";
  } else if (props.type === 'position') {
    return "\n                color: rgba(0, 0, 0, 0.7);\n                &:before {\n                    display: inline-block;\n                    width: 26px;\n                    content: '\f2bb';\n                    font-family: FontAwesome;\n                    color: #C68377;\n                }\n            ";
  } else {
    return "\n                color: rgba(0, 0, 0, 0.7);\n                &:before {\n                    display: inline-block;\n                    width: 26px;\n                    content: '\f005';\n                    font-family: FontAwesome;\n                    color: #C68377;\n                }\n            ";
  }
});
_c9 = TextDescription;
var CareerImage = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.img.withConfig({
  displayName: "career__CareerImage",
  componentId: "sc-10mcn0j-9"
})(["width:calc(200px + 5.8vw);"]);
_c10 = CareerImage;
var PictureImage = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.img.withConfig({
  displayName: "career__PictureImage",
  componentId: "sc-10mcn0j-10"
})(["margin:20px;max-width:calc(100% - 28px);max-height:calc(100% - 28px);"]);
_c11 = PictureImage;

var Career = function Career() {
  _s();

  // state
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

  return (0,mobx_react__WEBPACK_IMPORTED_MODULE_5__.useObserver)(function () {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_base__WEBPACK_IMPORTED_MODULE_3__.default, {
        containerNo: 4,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainSection, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainDiv, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageDiv, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CareerImage, {
                src: "/image/ssafy.PNG"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 166,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 25
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDiv, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextTitleDiv, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextTitle, {
                  color: '#33bdda',
                  children: "\uC0BC\uC131 \uCCAD\uB144 \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uC544\uCE74\uB370\uBBF8"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 170,
                  columnNumber: 33
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 169,
                columnNumber: 29
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescriptionDiv, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
                  type: "calendar",
                  children: "19.07 ~ 20.03"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 173,
                  columnNumber: 33
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
                  type: "camera",
                  onClick: function onClick(e) {
                    return onClickCamera(e, '/image/topScore.jpg');
                  },
                  children: "1\uD559\uAE30 \uBC18 \uB300\uD45C \uC131\uC801 \uC6B0\uC218\uC0C1 \uCDE8\uB4DD"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 174,
                  columnNumber: 33
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
                  type: "camera",
                  onClick: function onClick(e) {
                    return onClickCamera(e, '/image/abroadEducation.jpg');
                  },
                  children: "\uD574\uC678 \uC5F0\uC218 \uB300\uC0C1\uC790\uB85C \uBC1C\uD0C1"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 177,
                  columnNumber: 33
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
                  children: "\uC6F9 \uAE30\uBC18 \uAE30\uCD08 \uBC0F \uC2EC\uD654 \uAD50\uC721 \uC218\uAC15"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 183,
                  columnNumber: 33
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
                  type: "camera",
                  onClick: function onClick(e) {
                    return onClickCamera(e, '/image/swexpertScore.PNG');
                  },
                  children: "\uC0BC\uC131 SW \uC5ED\uB7C9 \uD14C\uC2A4\uD2B8 A+ \uCDE8\uB4DD"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 184,
                  columnNumber: 33
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 172,
                columnNumber: 29
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 21
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainDiv, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageDiv, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CareerImage, {
                src: "/image/autoever.PNG"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 196,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 25
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDiv, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextTitleDiv, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextTitle, {
                  color: '#1e2768',
                  children: "\uD604\uB300 \uC624\uD1A0\uC5D0\uBC84"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 200,
                  columnNumber: 33
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 199,
                columnNumber: 29
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescriptionDiv, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
                  type: "calendar",
                  children: "20.03 ~ \uD604\uC7AC"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 203,
                  columnNumber: 33
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
                  type: "position",
                  children: "\uC790\uB3D9\uCC28 \uD488\uC9C8 \uAC1C\uC120 \uC2DC\uC2A4\uD15C FE/BE \uAC1C\uBC1C \uBC0F \uC6B4\uC601"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 204,
                  columnNumber: 33
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
                  children: "\uD300 \uB0B4 Git \uB3C4\uC785 \uBC0F \uC0AC\uB0B4 \uC9C1\uC6D0\uB4E4\uC5D0\uAC8C Git\uC0AC\uC6A9 \uBC29\uBC95 \uAD50\uC721 \uB2F4\uB2F9"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 207,
                  columnNumber: 33
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
                  children: "\uD300 \uB0B4 \uC2E0\uAE30\uC220 \uC801\uC6A9 \uB2F4\uB2F9"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 210,
                  columnNumber: 33
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
                  children: "\uC11C\uBE44\uC2A4 \uD6A8\uC728\uD654\uB97C \uC704\uD55C \uC2DC\uC2A4\uD15C \uAC1C\uD3B8 \uD504\uB85C\uC81D\uD2B8 \uC9C4\uD589"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 211,
                  columnNumber: 33
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
                  children: "\uC11C\uBE44\uC2A4 \uC18D\uB3C4 \uAC1C\uC120\uC744 \uC704\uD574 React\uB97C \uC774\uC6A9\uD55C \uCD5C\uC801\uD654 \uC791\uC5C5 \uC9C4\uD589"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 212,
                  columnNumber: 33
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
                  children: "\uC678\uBD80 \uC2DC\uC2A4\uD15C\uACFC \uC5F0\uACC4\uB97C \uC704\uD55C \uACF5\uC6A9 Rest API \uAC1C\uBC1C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 215,
                  columnNumber: 33
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 202,
                columnNumber: 29
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PictureContainer, {
        ref: pictureContainerRef,
        onClick: onClickPictureContainer,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PictureImage, {
          src: pictureImage
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 13
      }, _this)]
    }, void 0, true);
  });
};

_s(Career, "rIgMGrpgxe+vwgLjaiNrUP7Z2WY=", false, function () {
  return [mobx_react__WEBPACK_IMPORTED_MODULE_5__.useObserver];
});

_c12 = Career;
/* harmony default export */ __webpack_exports__["default"] = (Career);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;

$RefreshReg$(_c, "MainSection");
$RefreshReg$(_c2, "MainDiv");
$RefreshReg$(_c3, "ImageDiv");
$RefreshReg$(_c4, "TextDiv");
$RefreshReg$(_c5, "TextTitleDiv");
$RefreshReg$(_c6, "TextDescriptionDiv");
$RefreshReg$(_c7, "PictureContainer");
$RefreshReg$(_c8, "TextTitle");
$RefreshReg$(_c9, "TextDescription");
$RefreshReg$(_c10, "CareerImage");
$RefreshReg$(_c11, "PictureImage");
$RefreshReg$(_c12, "Career");

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ "./component/base.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\component\\projects.tsx",
    _this = undefined;




var Projects = function Projects() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_base__WEBPACK_IMPORTED_MODULE_2__.default, {
    containerNo: 5,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "Projects page"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, _this);
};

_c = Projects;
/* harmony default export */ __webpack_exports__["default"] = (Projects);

var _c;

$RefreshReg$(_c, "Projects");

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\component\\skills.tsx",
    _this = undefined;




var MainSection = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.section.withConfig({
  displayName: "skills__MainSection",
  componentId: "sc-9hegbj-0"
})(["width:100%;display:flex;flex-direction:column;align-items:center;padding:0 22px;@media screen and (min-width:570px){height:1080px;flex-wrap:wrap;}@media screen and (min-width:840px){height:720px;flex-wrap:wrap;}"]);
_c = MainSection;
var BoxCotainer = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "skills__BoxCotainer",
  componentId: "sc-9hegbj-1"
})(["width:240px;text-align:center;margin-bottom:54px;"]);
_c2 = BoxCotainer;
var TitleDiv = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "skills__TitleDiv",
  componentId: "sc-9hegbj-2"
})(["padding:8px 0;"]);
_c3 = TitleDiv;
var ImageDiv = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "skills__ImageDiv",
  componentId: "sc-9hegbj-3"
})(["background-color:#fff;border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-left-radius:10px;border-bottom-right-radius:10px;padding:8px;box-shadow:2px 4px 4px #c8c8c8 inset,-2px -4px 4px #c8c8c8 inset;"]);
_c4 = ImageDiv;
var BoxTitle = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.span.withConfig({
  displayName: "skills__BoxTitle",
  componentId: "sc-9hegbj-4"
})(["font-weight:bold;font-size:1.6em;color:#fff;"]);
_c5 = BoxTitle;
var BoxImage = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.img.withConfig({
  displayName: "skills__BoxImage",
  componentId: "sc-9hegbj-5"
})([""]);
_c6 = BoxImage;

var Skills = function Skills() {
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_base__WEBPACK_IMPORTED_MODULE_2__.default, {
    containerNo: 3,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainSection, {
      children: skillsArray.map(function (skill) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxCotainer, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleDiv, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxTitle, {
              children: skill.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 29
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageDiv, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxImage, {
              src: skill.src
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 29
          }, _this)]
        }, skill.title, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 25
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 9
  }, _this);
};

_c7 = Skills;
/* harmony default export */ __webpack_exports__["default"] = (Skills);

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "MainSection");
$RefreshReg$(_c2, "BoxCotainer");
$RefreshReg$(_c3, "TitleDiv");
$RefreshReg$(_c4, "ImageDiv");
$RefreshReg$(_c5, "BoxTitle");
$RefreshReg$(_c6, "BoxImage");
$RefreshReg$(_c7, "Skills");

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
/* harmony import */ var C_Users_User_Desktop_study_portfolio_sungchan_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base */ "./component/base.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\component\\whyIt.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject() {
  var data = (0,C_Users_User_Desktop_study_portfolio_sungchan_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.default)(["\n    0% {\n        transform: rotate(-10deg);\n    }\n\n    50% {\n        transform: rotate(10deg);\n    }\n\n    100% {\n        transform: rotate(-10deg);\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

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



var CommonSection = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.section.withConfig({
  displayName: "whyIt__CommonSection",
  componentId: "sc-sy1iui-0"
})(["width:100%;text-align:center;@media screen and (min-width:710px){display:flex;justify-content:center;}"]);
_c = CommonSection;
var QuestionSection = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.section.withConfig({
  displayName: "whyIt__QuestionSection",
  componentId: "sc-sy1iui-1"
})(["padding:0 20px 0 20px;display:inline-block;"]);
_c2 = QuestionSection;
var AnswerSection = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.section.withConfig({
  displayName: "whyIt__AnswerSection",
  componentId: "sc-sy1iui-2"
})(["padding:0 20px 0 20px;display:inline-block;"]);
_c3 = AnswerSection;
var questionNumberKeyframe = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__.keyframes)(_templateObject());
var QuestionDiv = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "whyIt__QuestionDiv",
  componentId: "sc-sy1iui-3"
})(["background-color:#fff;padding:20px;margin:24px 0;border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-left-radius:10px;border-bottom-right-radius:10px;text-align:left;box-shadow:2px 4px 4px #c8c8c8 inset,-2px -4px 4px #c8c8c8 inset;&:hover{& > div > span:first-child{animation-name:", ";animation-duration:2s;animation-iteration-count:infinite;}}"], questionNumberKeyframe);
_c4 = QuestionDiv;
var QuestionSubDiv = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "whyIt__QuestionSubDiv",
  componentId: "sc-sy1iui-4"
})(["display:flex;align-items:center;"]);
_c5 = QuestionSubDiv;
var AnswerDiv = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "whyIt__AnswerDiv",
  componentId: "sc-sy1iui-5"
})(["background-color:#fff;padding:20px;margin:24px 0;border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-left-radius:10px;border-bottom-right-radius:10px;min-width:calc(224px + 15vw);min-height:calc(224px + 15vh);box-shadow:2px 4px 4px #c8c8c8 inset,-2px -4px 4px #c8c8c8 inset;"]);
_c6 = AnswerDiv;
var QuestionTitle = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.span.withConfig({
  displayName: "whyIt__QuestionTitle",
  componentId: "sc-sy1iui-6"
})(["font-weight:600;font-size:calc(18px + 0.2vw);color:", ";"], function (props) {
  return props.color;
});
_c7 = QuestionTitle;
var AnswerTitle = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.span.withConfig({
  displayName: "whyIt__AnswerTitle",
  componentId: "sc-sy1iui-7"
})(["font-weight:600;"]);
_c8 = AnswerTitle;
var QuestionNumber = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.span.withConfig({
  displayName: "whyIt__QuestionNumber",
  componentId: "sc-sy1iui-8"
})(["display:inline-block;font-weight:600;font-size:calc(24px + 0.6vw);color:#f15e5e;transform:rotate(-10deg);margin-right:12px;animation-name:", ";animation-duration:2s;animation-iteration-count:infinite;"], function (props) {
  return props.isClick ? questionNumberKeyframe : '';
});
_c9 = QuestionNumber;

var WhyIt = function WhyIt() {
  _s();

  // state
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__.useState(-1),
      _React$useState2 = (0,C_Users_User_Desktop_study_portfolio_sungchan_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 2),
      questionIndex = _React$useState2[0],
      setQuestionIndex = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3__.useState(),
      _React$useState4 = (0,C_Users_User_Desktop_study_portfolio_sungchan_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState3, 2),
      typingTimer = _React$useState4[0],
      setTypingTimer = _React$useState4[1]; // ref


  var answerTitleRef = react__WEBPACK_IMPORTED_MODULE_3__.useRef();
  var answerDivRef = react__WEBPACK_IMPORTED_MODULE_3__.useRef(); // variable

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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_base__WEBPACK_IMPORTED_MODULE_4__.default, {
    containerNo: 2,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CommonSection, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(QuestionSection, {
        children: qnaArray.map(function (qna, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(QuestionDiv, {
            onClick: function onClick(e) {
              onClickQuestion(index);
              e.stopPropagation();
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(QuestionSubDiv, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(QuestionNumber, {
                isClick: questionIndex === index,
                children: ["Q", index + 1, ". "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 239,
                columnNumber: 37
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(QuestionTitle, {
                color: questionColor[index],
                children: qna.question
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 240,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 238,
              columnNumber: 33
            }, _this)
          }, qna.answer, false, {
            fileName: _jsxFileName,
            lineNumber: 231,
            columnNumber: 29
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnswerSection, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnswerDiv, {
          ref: answerDivRef,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnswerTitle, {
            ref: answerTitleRef,
            children: questionIndex >= 0 ? '' : '궁금하신 질문을 선택해주세요.'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 249,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 226,
    columnNumber: 9
  }, _this);
};

_s(WhyIt, "pRot/W34ZCmXlSPjgSmfGw4LxnI=");

_c10 = WhyIt;
/* harmony default export */ __webpack_exports__["default"] = (WhyIt);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;

$RefreshReg$(_c, "CommonSection");
$RefreshReg$(_c2, "QuestionSection");
$RefreshReg$(_c3, "AnswerSection");
$RefreshReg$(_c4, "QuestionDiv");
$RefreshReg$(_c5, "QuestionSubDiv");
$RefreshReg$(_c6, "AnswerDiv");
$RefreshReg$(_c7, "QuestionTitle");
$RefreshReg$(_c8, "AnswerTitle");
$RefreshReg$(_c9, "QuestionNumber");
$RefreshReg$(_c10, "WhyIt");

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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/main */ "./component/main.tsx");
/* harmony import */ var _component_intro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/intro */ "./component/intro.tsx");
/* harmony import */ var _component_whyIt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/whyIt */ "./component/whyIt.tsx");
/* harmony import */ var _component_skills__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/skills */ "./component/skills.tsx");
/* harmony import */ var _component_career__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/career */ "./component/career.tsx");
/* harmony import */ var _component_init__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../component/init */ "./component/init.tsx");
/* harmony import */ var _modules_indexStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modules/indexStore */ "./modules/indexStore.tsx");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _component_projects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../component/projects */ "./component/projects.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\pages\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();













var Index = function Index() {
  _s();

  var _indexStore = (0,_modules_indexStore__WEBPACK_IMPORTED_MODULE_9__.default)(),
      initStore = _indexStore.initStore,
      baseStore = _indexStore.baseStore;

  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    window.addEventListener('resize', onChangeResize);
    window.addEventListener('scroll', onChangeScroll);
    onChangeResize();
    onChangeScroll();
    return function () {
      window.removeEventListener('resize', onChangeResize);
      window.removeEventListener('scroll', onChangeScroll);
    };
  }, []); // onChange

  var onChangeResize = function onChangeResize() {
    baseStore.setInnerWidth(window.innerWidth);
  };

  var onChangeScroll = function onChangeScroll() {
    baseStore.setScrollY(window.scrollY);
  };

  return (0,mobx_react__WEBPACK_IMPORTED_MODULE_11__.useObserver)(function () {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [initStore.isEnd ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_main__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_intro__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_whyIt__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_skills__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_career__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_projects__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, _this)]
      }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_init__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
        id: "3889360865",
        children: "@import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');body{margin:0;padding:0;}h1,h2,h3,h4,h5,h6,span,p{font-family:'AppleSDGothicNeo','Noto Sans KR',sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcc3R1ZHlcXHBvcnRmb2xpb1xcc3VuZ2NoYW5cXHBhZ2VzXFxpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbURpQixBQUdrQyxBQVlrRCxBQUdZLFNBZDdELFVBQ2Qsc0NBV0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxzdHVkeVxccG9ydGZvbGlvXFxzdW5nY2hhblxccGFnZXNcXGluZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1haW4gZnJvbSAnLi4vY29tcG9uZW50L21haW4nO1xyXG5pbXBvcnQgSW50cm8gZnJvbSAnLi4vY29tcG9uZW50L2ludHJvJztcclxuaW1wb3J0IFdoeUl0IGZyb20gJy4uL2NvbXBvbmVudC93aHlJdCc7XHJcbmltcG9ydCBTa2lsbHMgZnJvbSAnLi4vY29tcG9uZW50L3NraWxscyc7XHJcbmltcG9ydCBDYXJlZXIgZnJvbSAnLi4vY29tcG9uZW50L2NhcmVlcic7XHJcbmltcG9ydCBJbml0IGZyb20gJy4uL2NvbXBvbmVudC9pbml0JztcclxuaW1wb3J0IGluZGV4U3RvcmUgZnJvbSAnLi4vbW9kdWxlcy9pbmRleFN0b3JlJztcclxuaW1wb3J0IHsgdXNlT2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0JztcclxuaW1wb3J0IFByb2plY3RzIGZyb20gJy4uL2NvbXBvbmVudC9wcm9qZWN0cyc7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICBjb25zdCB7IGluaXRTdG9yZSwgYmFzZVN0b3JlIH0gPSBpbmRleFN0b3JlKCk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25DaGFuZ2VSZXNpemUpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvbkNoYW5nZVNjcm9sbCk7XHJcbiAgICAgICAgb25DaGFuZ2VSZXNpemUoKTtcclxuICAgICAgICBvbkNoYW5nZVNjcm9sbCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25DaGFuZ2VSZXNpemUpO1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25DaGFuZ2VTY3JvbGwpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLy8gb25DaGFuZ2VcclxuICAgIGNvbnN0IG9uQ2hhbmdlUmVzaXplID0gKCkgPT4ge1xyXG4gICAgICAgIGJhc2VTdG9yZS5zZXRJbm5lcldpZHRoKHdpbmRvdy5pbm5lcldpZHRoKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgYmFzZVN0b3JlLnNldFNjcm9sbFkod2luZG93LnNjcm9sbFkpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdXNlT2JzZXJ2ZXIoKCkgPT4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtpbml0U3RvcmUuaXNFbmQgPyAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNYWluIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEludHJvIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFdoeUl0IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNraWxscyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJlZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8UHJvamVjdHMgLz5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPEluaXQgLz5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaDEsXHJcbiAgICAgICAgICAgICAgICAgICAgaDIsXHJcbiAgICAgICAgICAgICAgICAgICAgaDMsXHJcbiAgICAgICAgICAgICAgICAgICAgaDQsXHJcbiAgICAgICAgICAgICAgICAgICAgaDUsXHJcbiAgICAgICAgICAgICAgICAgICAgaDYsXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbixcclxuICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBcHBsZVNER290aGljTmVvJywgJ05vdG8gU2FucyBLUicsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CdW5nZWUmZGlzcGxheT1zd2FwJyk7XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcclxuICAgICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\User\\\\Desktop\\\\study\\\\portfolio\\\\sungchan\\\\pages\\\\index.tsx */"
      }, void 0, false, void 0, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        type: "text/css",
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
        className: "jsx-3889360865"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 13
      }, _this)]
    }, void 0, true);
  });
};

_s(Index, "u/dbIeyf16gnu8DjpIGAMzPtKuo=", false, function () {
  return [mobx_react__WEBPACK_IMPORTED_MODULE_11__.useObserver];
});

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2NhcmVlci50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudC9wcm9qZWN0cy50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudC9za2lsbHMudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnQvd2h5SXQudHN4Iiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOlsiTWFpblNlY3Rpb24iLCJzdHlsZWQiLCJNYWluRGl2IiwiSW1hZ2VEaXYiLCJUZXh0RGl2IiwiVGV4dFRpdGxlRGl2IiwiVGV4dERlc2NyaXB0aW9uRGl2IiwiUGljdHVyZUNvbnRhaW5lciIsIlRleHRUaXRsZSIsInByb3BzIiwiY29sb3IiLCJUZXh0RGVzY3JpcHRpb24iLCJ0eXBlIiwiQ2FyZWVySW1hZ2UiLCJQaWN0dXJlSW1hZ2UiLCJDYXJlZXIiLCJSZWFjdCIsInBpY3R1cmVJbWFnZSIsInNldFBpY3R1cmVJbWFnZSIsInBpY3R1cmVDb250YWluZXJSZWYiLCJvbkNsaWNrQ2FtZXJhIiwiZSIsImltZyIsImN1cnJlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJzdHlsZSIsImRpc3BsYXkiLCJvbkNsaWNrUGljdHVyZUNvbnRhaW5lciIsInVzZU9ic2VydmVyIiwiUHJvamVjdHMiLCJCb3hDb3RhaW5lciIsIlRpdGxlRGl2IiwiQm94VGl0bGUiLCJCb3hJbWFnZSIsIlNraWxscyIsInNraWxsc0FycmF5IiwidGl0bGUiLCJzcmMiLCJtYXAiLCJza2lsbCIsIkNvbW1vblNlY3Rpb24iLCJRdWVzdGlvblNlY3Rpb24iLCJBbnN3ZXJTZWN0aW9uIiwicXVlc3Rpb25OdW1iZXJLZXlmcmFtZSIsImtleWZyYW1lcyIsIlF1ZXN0aW9uRGl2IiwiUXVlc3Rpb25TdWJEaXYiLCJBbnN3ZXJEaXYiLCJRdWVzdGlvblRpdGxlIiwiQW5zd2VyVGl0bGUiLCJRdWVzdGlvbk51bWJlciIsImlzQ2xpY2siLCJXaHlJdCIsInF1ZXN0aW9uSW5kZXgiLCJzZXRRdWVzdGlvbkluZGV4IiwidHlwaW5nVGltZXIiLCJzZXRUeXBpbmdUaW1lciIsImFuc3dlclRpdGxlUmVmIiwiYW5zd2VyRGl2UmVmIiwicW5hQXJyYXkiLCJxdWVzdGlvbiIsImFuc3dlciIsInF1ZXN0aW9uQ29sb3IiLCJvbkNsaWNrUXVlc3Rpb24iLCJpbmRleCIsInRpbWUiLCJjaGFySW5kZXgiLCJjbGVhckludGVydmFsIiwiaW5uZXJIVE1MIiwiYm94U2hhZG93IiwidHlwaW5nSW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInNldFRpbWVvdXQiLCJsZW5ndGgiLCJxbmEiLCJJbmRleCIsImluZGV4U3RvcmUiLCJpbml0U3RvcmUiLCJiYXNlU3RvcmUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwib25DaGFuZ2VSZXNpemUiLCJvbkNoYW5nZVNjcm9sbCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXRJbm5lcldpZHRoIiwiaW5uZXJXaWR0aCIsInNldFNjcm9sbFkiLCJzY3JvbGxZIiwiaXNFbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSwwQkFBakI7S0FBTUQsVztBQUlOLElBQU1FLE9BQU8sR0FBR0QscUVBQUg7QUFBQTtBQUFBO0FBQUEscUlBQWI7TUFBTUMsTztBQVdOLElBQU1DLFFBQVEsR0FBR0YscUVBQUg7QUFBQTtBQUFBO0FBQUEsZ0NBQWQ7TUFBTUUsUTtBQUlOLElBQU1DLE9BQU8sR0FBR0gscUVBQUg7QUFBQTtBQUFBO0FBQUEsdVBBQWI7TUFBTUcsTztBQVdOLElBQU1DLFlBQVksR0FBR0oscUVBQUg7QUFBQTtBQUFBO0FBQUEsMkJBQWxCO01BQU1JLFk7QUFJTixJQUFNQyxrQkFBa0IsR0FBR0wscUVBQUg7QUFBQTtBQUFBO0FBQUEsd0JBQXhCO01BQU1LLGtCO0FBSU4sSUFBTUMsZ0JBQWdCLEdBQUdOLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHlLQUF0QjtNQUFNTSxnQjtBQWlCTixJQUFNQyxTQUFTLEdBQUdQLHNFQUFIO0FBQUE7QUFBQTtBQUFBLGlFQUdGLFVBQUNRLEtBQUQ7QUFBQSxTQUF1QkEsS0FBSyxDQUFDQyxLQUE3QjtBQUFBLENBSEUsQ0FBZjtNQUFNRixTO0FBVU4sSUFBTUcsZUFBZSxHQUFHVixzRUFBSDtBQUFBO0FBQUE7QUFBQSxzRkFNZixVQUFDUSxLQUFELEVBQTZCO0FBQzNCLE1BQUlBLEtBQUssQ0FBQ0csSUFBTixLQUFlLFFBQW5CLEVBQTZCO0FBQ3pCO0FBVUgsR0FYRCxNQVdPLElBQUlILEtBQUssQ0FBQ0csSUFBTixLQUFlLFVBQW5CLEVBQStCO0FBQ2xDO0FBVUgsR0FYTSxNQVdBLElBQUlILEtBQUssQ0FBQ0csSUFBTixLQUFlLFVBQW5CLEVBQStCO0FBQ2xDO0FBVUgsR0FYTSxNQVdBO0FBQ0g7QUFVSDtBQUNKLENBcERnQixDQUFyQjtNQUFNRCxlO0FBdUROLElBQU1FLFdBQVcsR0FBR1oscUVBQUg7QUFBQTtBQUFBO0FBQUEsa0NBQWpCO09BQU1ZLFc7QUFJTixJQUFNQyxZQUFZLEdBQUdiLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDZFQUFsQjtPQUFNYSxZOztBQU1OLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQW1CO0FBQUE7O0FBQzlCO0FBRDhCLHdCQUVVQywyQ0FBQSxDQUF1QixFQUF2QixDQUZWO0FBQUE7QUFBQSxNQUV2QkMsWUFGdUI7QUFBQSxNQUVUQyxlQUZTLHdCQUk5Qjs7O0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUdILHlDQUFBLEVBQTVCLENBTDhCLENBTzlCOztBQUNBLE1BQU1JLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsQ0FBRCxFQUFtREMsR0FBbkQsRUFBbUU7QUFDckYsUUFBSUgsbUJBQW1CLENBQUNJLE9BQXhCLEVBQWlDO0FBQzdCRixPQUFDLENBQUNHLGVBQUY7QUFFQU4scUJBQWUsQ0FBQ0ksR0FBRCxDQUFmO0FBQ0FILHlCQUFtQixDQUFDSSxPQUFwQixDQUE0QkUsS0FBNUIsQ0FBa0NDLE9BQWxDLEdBQTRDLE1BQTVDO0FBQ0g7QUFDSixHQVBEOztBQVNBLE1BQU1DLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsR0FBTTtBQUNsQyxRQUFJUixtQkFBbUIsQ0FBQ0ksT0FBeEIsRUFBaUM7QUFDN0JMLHFCQUFlLENBQUMsRUFBRCxDQUFmO0FBQ0FDLHlCQUFtQixDQUFDSSxPQUFwQixDQUE0QkUsS0FBNUIsQ0FBa0NDLE9BQWxDLEdBQTRDLE1BQTVDO0FBQ0g7QUFDSixHQUxEOztBQU9BLFNBQU9FLHVEQUFXLENBQUM7QUFBQSx3QkFDZjtBQUFBLDhCQUNJLDhEQUFDLDBDQUFEO0FBQU0sbUJBQVcsRUFBRSxDQUFuQjtBQUFBLCtCQUNJLDhEQUFDLFdBQUQ7QUFBQSxrQ0FDSSw4REFBQyxPQUFEO0FBQUEsb0NBQ0ksOERBQUMsUUFBRDtBQUFBLHFDQUNJLDhEQUFDLFdBQUQ7QUFBYSxtQkFBRyxFQUFDO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBSUksOERBQUMsT0FBRDtBQUFBLHNDQUNJLDhEQUFDLFlBQUQ7QUFBQSx1Q0FDSSw4REFBQyxTQUFEO0FBQVcsdUJBQUssRUFBRSxTQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFJSSw4REFBQyxrQkFBRDtBQUFBLHdDQUNJLDhEQUFDLGVBQUQ7QUFBaUIsc0JBQUksRUFBQyxVQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixlQUVJLDhEQUFDLGVBQUQ7QUFBaUIsc0JBQUksRUFBQyxRQUF0QjtBQUErQix5QkFBTyxFQUFFLGlCQUFDUCxDQUFEO0FBQUEsMkJBQU9ELGFBQWEsQ0FBQ0MsQ0FBRCxFQUFJLHFCQUFKLENBQXBCO0FBQUEsbUJBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZKLGVBS0ksOERBQUMsZUFBRDtBQUNJLHNCQUFJLEVBQUMsUUFEVDtBQUVJLHlCQUFPLEVBQUUsaUJBQUNBLENBQUQ7QUFBQSwyQkFBT0QsYUFBYSxDQUFDQyxDQUFELEVBQUksNEJBQUosQ0FBcEI7QUFBQSxtQkFGYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFMSixlQVdJLDhEQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBWEosZUFZSSw4REFBQyxlQUFEO0FBQ0ksc0JBQUksRUFBQyxRQURUO0FBRUkseUJBQU8sRUFBRSxpQkFBQ0EsQ0FBRDtBQUFBLDJCQUFPRCxhQUFhLENBQUNDLENBQUQsRUFBSSwwQkFBSixDQUFwQjtBQUFBLG1CQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBK0JJLDhEQUFDLE9BQUQ7QUFBQSxvQ0FDSSw4REFBQyxRQUFEO0FBQUEscUNBQ0ksOERBQUMsV0FBRDtBQUFhLG1CQUFHLEVBQUM7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFJSSw4REFBQyxPQUFEO0FBQUEsc0NBQ0ksOERBQUMsWUFBRDtBQUFBLHVDQUNJLDhEQUFDLFNBQUQ7QUFBVyx1QkFBSyxFQUFFLFNBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUlJLDhEQUFDLGtCQUFEO0FBQUEsd0NBQ0ksOERBQUMsZUFBRDtBQUFpQixzQkFBSSxFQUFDLFVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKLGVBRUksOERBQUMsZUFBRDtBQUFpQixzQkFBSSxFQUFDLFVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZKLGVBS0ksOERBQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFMSixlQVFJLDhEQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBUkosZUFTSSw4REFBQyxlQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVRKLGVBVUksOERBQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFWSixlQWFJLDhEQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBL0JKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQTZESSw4REFBQyxnQkFBRDtBQUFrQixXQUFHLEVBQUVGLG1CQUF2QjtBQUE0QyxlQUFPLEVBQUVRLHVCQUFyRDtBQUFBLCtCQUNJLDhEQUFDLFlBQUQ7QUFBYyxhQUFHLEVBQUVWO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBN0RKO0FBQUEsb0JBRGU7QUFBQSxHQUFELENBQWxCO0FBbUVILENBM0ZEOztHQUFNRixNO1VBd0JLYSxtRDs7O09BeEJMYixNO0FBNkZOLCtEQUFlQSxNQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcE9BO0FBRUE7O0FBRUEsSUFBTWMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBbUI7QUFDaEMsc0JBQ0ksOERBQUMsMENBQUQ7QUFBTSxlQUFXLEVBQUUsQ0FBbkI7QUFBQSwyQkFDSTtBQUFBLDZCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQU9ILENBUkQ7O0tBQU1BLFE7QUFVTiwrREFBZUEsUUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBRUEsSUFBTTdCLFdBQVcsR0FBR0MseUVBQUg7QUFBQTtBQUFBO0FBQUEsMk5BQWpCO0tBQU1ELFc7QUFrQk4sSUFBTThCLFdBQVcsR0FBRzdCLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHlEQUFqQjtNQUFNNkIsVztBQU1OLElBQU1DLFFBQVEsR0FBRzlCLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHNCQUFkO01BQU04QixRO0FBSU4sSUFBTTVCLFFBQVEsR0FBR0YscUVBQUg7QUFBQTtBQUFBO0FBQUEsbU9BQWQ7TUFBTUUsUTtBQVVOLElBQU02QixRQUFRLEdBQUcvQixzRUFBSDtBQUFBO0FBQUE7QUFBQSxvREFBZDtNQUFNK0IsUTtBQU1OLElBQU1DLFFBQVEsR0FBR2hDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLFFBQWQ7TUFBTWdDLFE7O0FBRU4sSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBbUI7QUFDOUIsTUFBTUMsV0FBVyxHQUFHLENBQ2hCO0FBQ0lDLFNBQUssRUFBRSxJQURYO0FBRUlDLE9BQUcsRUFBRTtBQUZULEdBRGdCLEVBS2hCO0FBQ0lELFNBQUssRUFBRSxRQURYO0FBRUlDLE9BQUcsRUFBRTtBQUZULEdBTGdCLEVBU2hCO0FBQ0lELFNBQUssRUFBRSxhQURYO0FBRUlDLE9BQUcsRUFBRTtBQUZULEdBVGdCLEVBYWhCO0FBQ0lELFNBQUssRUFBRSxJQURYO0FBRUlDLE9BQUcsRUFBRTtBQUZULEdBYmdCLENBQXBCO0FBbUJBLHNCQUNJLDhEQUFDLDBDQUFEO0FBQU0sZUFBVyxFQUFFLENBQW5CO0FBQUEsMkJBQ0ksOERBQUMsV0FBRDtBQUFBLGdCQUNLRixXQUFXLENBQUNHLEdBQVosQ0FBZ0IsVUFBQ0MsS0FBRCxFQUFXO0FBQ3hCLDRCQUNJLDhEQUFDLFdBQUQ7QUFBQSxrQ0FDSSw4REFBQyxRQUFEO0FBQUEsbUNBQ0ksOERBQUMsUUFBRDtBQUFBLHdCQUFXQSxLQUFLLENBQUNIO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBSUksOERBQUMsUUFBRDtBQUFBLG1DQUNJLDhEQUFDLFFBQUQ7QUFBVSxpQkFBRyxFQUFFRyxLQUFLLENBQUNGO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKO0FBQUEsV0FBa0JFLEtBQUssQ0FBQ0gsS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESjtBQVVILE9BWEE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBa0JILENBdENEOztNQUFNRixNO0FBd0NOLCtEQUFlQSxNQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1NLGFBQWEsR0FBR3ZDLHlFQUFIO0FBQUE7QUFBQTtBQUFBLDhHQUFuQjtLQUFNdUMsYTtBQVVOLElBQU1DLGVBQWUsR0FBR3hDLHlFQUFIO0FBQUE7QUFBQTtBQUFBLG1EQUFyQjtNQUFNd0MsZTtBQUtOLElBQU1DLGFBQWEsR0FBR3pDLHlFQUFIO0FBQUE7QUFBQTtBQUFBLG1EQUFuQjtNQUFNeUMsYTtBQUtOLElBQU1DLHNCQUFzQixHQUFHQyw0REFBSCxtQkFBNUI7QUFjQSxJQUFNQyxXQUFXLEdBQUc1QyxxRUFBSDtBQUFBO0FBQUE7QUFBQSxxWEFhYTBDLHNCQWJiLENBQWpCO01BQU1FLFc7QUFvQk4sSUFBTUMsY0FBYyxHQUFHN0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsd0NBQXBCO01BQU02QyxjO0FBS04sSUFBTUMsU0FBUyxHQUFHOUMscUVBQUg7QUFBQTtBQUFBO0FBQUEsNlNBQWY7TUFBTThDLFM7QUFpQk4sSUFBTUMsYUFBYSxHQUFHL0Msc0VBQUg7QUFBQTtBQUFBO0FBQUEsaUVBR04sVUFBQ1EsS0FBRDtBQUFBLFNBQTJCQSxLQUFLLENBQUNDLEtBQWpDO0FBQUEsQ0FITSxDQUFuQjtNQUFNc0MsYTtBQU1OLElBQU1DLFdBQVcsR0FBR2hELHNFQUFIO0FBQUE7QUFBQTtBQUFBLHdCQUFqQjtNQUFNZ0QsVztBQVFOLElBQU1DLGNBQWMsR0FBR2pELHNFQUFIO0FBQUE7QUFBQTtBQUFBLGlOQVFFLFVBQUNRLEtBQUQ7QUFBQSxTQUE2QkEsS0FBSyxDQUFDMEMsT0FBTixHQUFnQlIsc0JBQWhCLEdBQXlDLEVBQXRFO0FBQUEsQ0FSRixDQUFwQjtNQUFNTyxjOztBQWFOLElBQU1FLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQW1CO0FBQUE7O0FBQzdCO0FBRDZCLHdCQUVhcEMsMkNBQUEsQ0FBdUIsQ0FBQyxDQUF4QixDQUZiO0FBQUE7QUFBQSxNQUV0QnFDLGFBRnNCO0FBQUEsTUFFUEMsZ0JBRk87O0FBQUEseUJBR1N0QywyQ0FBQSxFQUhUO0FBQUE7QUFBQSxNQUd0QnVDLFdBSHNCO0FBQUEsTUFHVEMsY0FIUyx3QkFLN0I7OztBQUNBLE1BQU1DLGNBQWMsR0FBR3pDLHlDQUFBLEVBQXZCO0FBQ0EsTUFBTTBDLFlBQVksR0FBRzFDLHlDQUFBLEVBQXJCLENBUDZCLENBUzdCOztBQUNBLE1BQU0yQyxRQUFRLEdBQUcsQ0FDYjtBQUNJQyxZQUFRLEVBQUUsYUFEZDtBQUVJQyxVQUFNLEVBQUU7QUFGWixHQURhLEVBTWI7QUFDSUQsWUFBUSxFQUFFLGtCQURkO0FBRUlDLFVBQU07QUFGVixHQU5hLEVBV2I7QUFDSUQsWUFBUSxFQUFFLGFBRGQ7QUFFSUMsVUFBTSxFQUFFO0FBRlosR0FYYSxDQUFqQjtBQWlCQSxNQUFNQyxhQUFhLEdBQUcsQ0FBQyxTQUFELEVBQVksU0FBWixFQUF1QixTQUF2QixDQUF0QixDQTNCNkIsQ0E2QjdCOztBQUNBLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFtQjtBQUN2Q1Ysb0JBQWdCLENBQUNVLEtBQUQsQ0FBaEIsQ0FEdUMsQ0FDZDs7QUFDekIsUUFBTUMsSUFBSSxHQUFHLEVBQWIsQ0FGdUMsQ0FFdEI7O0FBRWpCLFFBQUlSLGNBQWMsQ0FBQ2xDLE9BQWYsSUFBMEJtQyxZQUFZLENBQUNuQyxPQUEzQyxFQUFvRDtBQUNoRCxVQUFJMkMsU0FBUyxHQUFHLENBQWhCO0FBQ0FDLG1CQUFhLENBQUNaLFdBQUQsQ0FBYixDQUZnRCxDQUVwQjs7QUFDNUJFLG9CQUFjLENBQUNsQyxPQUFmLENBQXVCNkMsU0FBdkIsR0FBbUMsRUFBbkM7QUFDQVgsb0JBQWMsQ0FBQ2xDLE9BQWYsQ0FBdUJFLEtBQXZCLENBQTZCZixLQUE3QixHQUFxQ29ELGFBQWEsQ0FBQ0UsS0FBRCxDQUFsRDtBQUNBTixrQkFBWSxDQUFDbkMsT0FBYixDQUFxQkUsS0FBckIsQ0FBMkI0QyxTQUEzQix5QkFBc0RQLGFBQWEsQ0FBQ0UsS0FBRCxDQUFuRSxtQ0FBbUdGLGFBQWEsQ0FBQ0UsS0FBRCxDQUFoSDtBQUVBLFVBQU1NLGNBQWMsR0FBR0MsV0FBVyxDQUFDLFlBQU07QUFDckM7QUFDQSxZQUFJWixRQUFRLENBQUNLLEtBQUQsQ0FBUixDQUFnQkgsTUFBaEIsQ0FBdUJLLFNBQXZCLE1BQXNDLElBQTFDLEVBQWdEO0FBQzVDO0FBQ0FULHdCQUFjLENBQUNsQyxPQUFmLENBQXVCNkMsU0FBdkIsSUFBb0MsUUFBcEM7QUFDQUYsbUJBQVM7QUFDWixTQUpELE1BSU87QUFDSDtBQUNBVCx3QkFBYyxDQUFDbEMsT0FBZixDQUF1QjZDLFNBQXZCLElBQW9DVCxRQUFRLENBQUNLLEtBQUQsQ0FBUixDQUFnQkgsTUFBaEIsQ0FBdUJLLFNBQVMsRUFBaEMsQ0FBcEM7QUFDSDtBQUNKLE9BVmlDLEVBVS9CRCxJQVYrQixDQUFsQztBQVlBVCxvQkFBYyxDQUFDYyxjQUFELENBQWQsQ0FuQmdELENBbUJoQjtBQUVoQzs7QUFDQUUsZ0JBQVUsQ0FBQyxZQUFNO0FBQ2JMLHFCQUFhLENBQUNHLGNBQUQsQ0FBYjtBQUNILE9BRlMsRUFFUFgsUUFBUSxDQUFDSyxLQUFELENBQVIsQ0FBZ0JILE1BQWhCLENBQXVCWSxNQUF2QixHQUFnQ1IsSUFGekIsQ0FBVjtBQUdIO0FBQ0osR0E5QkQ7O0FBZ0NBLHNCQUNJLDhEQUFDLDBDQUFEO0FBQU0sZUFBVyxFQUFFLENBQW5CO0FBQUEsMkJBQ0ksOERBQUMsYUFBRDtBQUFBLDhCQUNJLDhEQUFDLGVBQUQ7QUFBQSxrQkFDS04sUUFBUSxDQUFDckIsR0FBVCxDQUFhLFVBQUNvQyxHQUFELEVBQU1WLEtBQU4sRUFBZ0I7QUFDMUIsOEJBQ0ksOERBQUMsV0FBRDtBQUVJLG1CQUFPLEVBQUUsaUJBQUMzQyxDQUFELEVBQU87QUFDWjBDLDZCQUFlLENBQUNDLEtBQUQsQ0FBZjtBQUNBM0MsZUFBQyxDQUFDRyxlQUFGO0FBQ0gsYUFMTDtBQUFBLG1DQU9JLDhEQUFDLGNBQUQ7QUFBQSxzQ0FDSSw4REFBQyxjQUFEO0FBQWdCLHVCQUFPLEVBQUU2QixhQUFhLEtBQUtXLEtBQTNDO0FBQUEsZ0NBQW9EQSxLQUFLLEdBQUcsQ0FBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBRUksOERBQUMsYUFBRDtBQUFlLHFCQUFLLEVBQUVGLGFBQWEsQ0FBQ0UsS0FBRCxDQUFuQztBQUFBLDBCQUE2Q1UsR0FBRyxDQUFDZDtBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBKLGFBQ1NjLEdBQUcsQ0FBQ2IsTUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKO0FBY0gsU0FmQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQW9CSSw4REFBQyxhQUFEO0FBQUEsK0JBQ0ksOERBQUMsU0FBRDtBQUFXLGFBQUcsRUFBRUgsWUFBaEI7QUFBQSxpQ0FDSSw4REFBQyxXQUFEO0FBQWEsZUFBRyxFQUFFRCxjQUFsQjtBQUFBLHNCQUNLSixhQUFhLElBQUksQ0FBakIsR0FBcUIsRUFBckIsR0FBMEI7QUFEL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBcEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWdDSCxDQTlGRDs7R0FBTUQsSzs7T0FBQUEsSztBQWdHTiwrREFBZUEsS0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbFFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU11QixLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFtQjtBQUFBOztBQUFBLG9CQUNJQyw0REFBVSxFQURkO0FBQUEsTUFDckJDLFNBRHFCLGVBQ3JCQSxTQURxQjtBQUFBLE1BQ1ZDLFNBRFUsZUFDVkEsU0FEVTs7QUFHN0I5RCw4Q0FBQSxDQUFnQixZQUFNO0FBQ2xCK0QsVUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0MsY0FBbEM7QUFDQUYsVUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0UsY0FBbEM7QUFDQUQsa0JBQWM7QUFDZEMsa0JBQWM7QUFFZCxXQUFPLFlBQU07QUFDVEgsWUFBTSxDQUFDSSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ0YsY0FBckM7QUFDQUYsWUFBTSxDQUFDSSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ0QsY0FBckM7QUFDSCxLQUhEO0FBSUgsR0FWRCxFQVVHLEVBVkgsRUFINkIsQ0FlN0I7O0FBQ0EsTUFBTUQsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQ3pCSCxhQUFTLENBQUNNLGFBQVYsQ0FBd0JMLE1BQU0sQ0FBQ00sVUFBL0I7QUFDSCxHQUZEOztBQUlBLE1BQU1ILGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUN6QkosYUFBUyxDQUFDUSxVQUFWLENBQXFCUCxNQUFNLENBQUNRLE9BQTVCO0FBQ0gsR0FGRDs7QUFJQSxTQUFPM0Qsd0RBQVcsQ0FBQztBQUFBLHdCQUNmO0FBQUEsaUJBQ0tpRCxTQUFTLENBQUNXLEtBQVYsZ0JBQ0c7QUFBQSxnQ0FDSSw4REFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUksOERBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQUdJLDhEQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEosZUFJSSw4REFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKLGVBS0ksOERBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMSixlQU1JLDhEQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTko7QUFBQSxzQkFESCxnQkFVRyw4REFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWFI7QUFBQTtBQUFBO0FBQUEscURBbUNJO0FBQ0ksWUFBSSxFQUFDLFVBRFQ7QUFFSSxXQUFHLEVBQUMsWUFGUjtBQUdJLFlBQUksRUFBQyw2RUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQW5DSjtBQUFBLG9CQURlO0FBQUEsR0FBRCxDQUFsQjtBQTJDSCxDQW5FRDs7R0FBTWIsSztVQXdCSy9DLG9EOzs7S0F4QkwrQyxLO0FBcUVOLCtEQUFlQSxLQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmE3NzQ3ZjI3OTRkZTViY2IyY2NmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB1c2VPYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QnO1xyXG5cclxuY29uc3QgTWFpblNlY3Rpb24gPSBzdHlsZWQuZGl2YFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgTWFpbkRpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTRweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MjBweCkge1xyXG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgSW1hZ2VEaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWFyZ2luOiAwIDI1cHggMzhweCAyNXB4O1xyXG5gO1xyXG5cclxuY29uc3QgVGV4dERpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBtYXJnaW46IDAgMjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggNHB4IDRweCAjYzhjOGM4IGluc2V0LCAtMnB4IC00cHggNHB4ICNjOGM4YzggaW5zZXQ7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE4cHg7XHJcbmA7XHJcblxyXG5jb25zdCBUZXh0VGl0bGVEaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcclxuYDtcclxuXHJcbmNvbnN0IFRleHREZXNjcmlwdGlvbkRpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5gO1xyXG5cclxuY29uc3QgUGljdHVyZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDEwMTtcclxuICAgIHRvcDogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuYDtcclxuXHJcbmludGVyZmFjZSBJVGV4dFRpdGxlIHtcclxuICAgIGNvbG9yOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IFRleHRUaXRsZSA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogY2FsYygxN3B4ICsgMC41dncpO1xyXG4gICAgY29sb3I6ICR7KHByb3BzOiBJVGV4dFRpdGxlKSA9PiBwcm9wcy5jb2xvcn07XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSVRleHREZXNjcmlwdGlvbiB7XHJcbiAgICB0eXBlPzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBUZXh0RGVzY3JpcHRpb24gPSBzdHlsZWQuc3BhbmBcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAyM3B4IDA7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiBjYWxjKDE1cHggKyAwLjJ2dyk7XHJcblxyXG4gICAgJHsocHJvcHM6IElUZXh0RGVzY3JpcHRpb24pID0+IHtcclxuICAgICAgICBpZiAocHJvcHMudHlwZSA9PT0gJ2NhbWVyYScpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdcXGYwMzAnO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0M2ODM3NztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYDtcclxuICAgICAgICB9IGVsc2UgaWYgKHByb3BzLnR5cGUgPT09ICdjYWxlbmRhcicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdcXGYyNzInO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0M2ODM3NztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYDtcclxuICAgICAgICB9IGVsc2UgaWYgKHByb3BzLnR5cGUgPT09ICdwb3NpdGlvbicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdcXGYyYmInO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0M2ODM3NztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ1xcZjAwNSc7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjQzY4Mzc3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgIH1cclxuICAgIH19XHJcbmA7XHJcblxyXG5jb25zdCBDYXJlZXJJbWFnZSA9IHN0eWxlZC5pbWdgXHJcbiAgICB3aWR0aDogY2FsYygyMDBweCArIDUuOHZ3KTtcclxuYDtcclxuXHJcbmNvbnN0IFBpY3R1cmVJbWFnZSA9IHN0eWxlZC5pbWdgXHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDI4cHgpO1xyXG4gICAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMjhweCk7XHJcbmA7XHJcblxyXG5jb25zdCBDYXJlZXIgPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgLy8gc3RhdGVcclxuICAgIGNvbnN0IFtwaWN0dXJlSW1hZ2UsIHNldFBpY3R1cmVJbWFnZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuXHJcbiAgICAvLyByZWZcclxuICAgIGNvbnN0IHBpY3R1cmVDb250YWluZXJSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KCk7XHJcblxyXG4gICAgLy8gb25DbGlja1xyXG4gICAgY29uc3Qgb25DbGlja0NhbWVyYSA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxTcGFuRWxlbWVudCwgTW91c2VFdmVudD4sIGltZzogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgaWYgKHBpY3R1cmVDb250YWluZXJSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgc2V0UGljdHVyZUltYWdlKGltZyk7XHJcbiAgICAgICAgICAgIHBpY3R1cmVDb250YWluZXJSZWYuY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25DbGlja1BpY3R1cmVDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHBpY3R1cmVDb250YWluZXJSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICBzZXRQaWN0dXJlSW1hZ2UoJycpO1xyXG4gICAgICAgICAgICBwaWN0dXJlQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB1c2VPYnNlcnZlcigoKSA9PiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEJhc2UgY29udGFpbmVyTm89ezR9PlxyXG4gICAgICAgICAgICAgICAgPE1haW5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNYWluRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZWVySW1hZ2Ugc3JjPVwiL2ltYWdlL3NzYWZ5LlBOR1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW1hZ2VEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRUaXRsZURpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFRpdGxlIGNvbG9yPXsnIzMzYmRkYSd9PuyCvOyEsSDssq3rhYQg7IaM7ZSE7Yq47Juo7Ja0IOyVhOy5tOuNsOuvuDwvVGV4dFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0VGl0bGVEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gdHlwZT1cImNhbGVuZGFyXCI+MTkuMDcgfiAyMC4wMzwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gdHlwZT1cImNhbWVyYVwiIG9uQ2xpY2s9eyhlKSA9PiBvbkNsaWNrQ2FtZXJhKGUsICcvaW1hZ2UvdG9wU2NvcmUuanBnJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAx7ZWZ6riwIOuwmCDrjIDtkZwg7ISx7KCBIOyasOyImOyDgSDst6jrk51cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjYW1lcmFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gb25DbGlja0NhbWVyYShlLCAnL2ltYWdlL2Ficm9hZEVkdWNhdGlvbi5qcGcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIO2VtOyZuCDsl7DsiJgg64yA7IOB7J6Q66GcIOuwnO2DgVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24+7Ju5IOq4sOuwmCDquLDstIgg67CPIOyLrO2ZlCDqtZDsnKEg7IiY6rCVPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2FtZXJhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IG9uQ2xpY2tDYW1lcmEoZSwgJy9pbWFnZS9zd2V4cGVydFNjb3JlLlBORycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg7IK87ISxIFNXIOyXreufiSDthYzsiqTtirggQSsg7Leo65OdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbkRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWFpbkRpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPE1haW5EaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZURpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJlZXJJbWFnZSBzcmM9XCIvaW1hZ2UvYXV0b2V2ZXIuUE5HXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbWFnZURpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFRpdGxlRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0VGl0bGUgY29sb3I9eycjMWUyNzY4J30+7ZiE64yAIOyYpO2GoOyXkOuyhDwvVGV4dFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0VGl0bGVEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gdHlwZT1cImNhbGVuZGFyXCI+MjAuMDMgfiDtmITsnqw8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIHR5cGU9XCJwb3NpdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDsnpDrj5nssKgg7ZKI7KeIIOqwnOyEoCDsi5zsiqTthZwgRkUvQkUg6rCc67CcIOuwjyDsmrTsmIFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDtjIAg64K0IEdpdCDrj4TsnoUg67CPIOyCrOuCtCDsp4Hsm5Drk6Tsl5DqsowgR2l07IKs7JqpIOuwqeuylSDqtZDsnKEg64u064u5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbj7tjIAg64K0IOyLoOq4sOyIoCDsoIHsmqkg64u064u5PC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbj7shJzruYTsiqQg7Zqo7Jyo7ZmU66W8IOychO2VnCDsi5zsiqTthZwg6rCc7Y64IO2UhOuhnOygne2KuCDsp4Ttlok8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDshJzruYTsiqQg7IaN64+EIOqwnOyEoOydhCDsnITtlbQgUmVhY3Trpbwg7J207Jqp7ZWcIOy1nOygge2ZlCDsnpHsl4Ug7KeE7ZaJXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbj7smbjrtoAg7Iuc7Iqk7YWc6rO8IOyXsOqzhOulvCDsnITtlZwg6rO17JqpIFJlc3QgQVBJIOqwnOuwnDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb25EaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L01haW5EaXY+XHJcbiAgICAgICAgICAgICAgICA8L01haW5TZWN0aW9uPlxyXG4gICAgICAgICAgICA8L0Jhc2U+XHJcblxyXG4gICAgICAgICAgICA8UGljdHVyZUNvbnRhaW5lciByZWY9e3BpY3R1cmVDb250YWluZXJSZWZ9IG9uQ2xpY2s9e29uQ2xpY2tQaWN0dXJlQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxQaWN0dXJlSW1hZ2Ugc3JjPXtwaWN0dXJlSW1hZ2V9IC8+XHJcbiAgICAgICAgICAgIDwvUGljdHVyZUNvbnRhaW5lcj5cclxuICAgICAgICA8Lz5cclxuICAgICkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZWVyO1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xyXG5cclxuY29uc3QgUHJvamVjdHMgPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QmFzZSBjb250YWluZXJObz17NX0+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8cD5Qcm9qZWN0cyBwYWdlPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0Jhc2U+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBNYWluU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwIDIycHg7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTcwcHgpIHtcclxuICAgICAgICBoZWlnaHQ6IDEwODBweDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODQwcHgpIHtcclxuICAgICAgICBoZWlnaHQ6IDcyMHB4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IEJveENvdGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiAyNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDU0cHg7XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZURpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBwYWRkaW5nOiA4cHggMDtcclxuYDtcclxuXHJcbmNvbnN0IEltYWdlRGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggNHB4IDRweCAjYzhjOGM4IGluc2V0LCAtMnB4IC00cHggNHB4ICNjOGM4YzggaW5zZXQ7XHJcbmA7XHJcblxyXG5jb25zdCBCb3hUaXRsZSA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEuNmVtO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbmA7XHJcblxyXG5jb25zdCBCb3hJbWFnZSA9IHN0eWxlZC5pbWdgYDtcclxuXHJcbmNvbnN0IFNraWxscyA9ICgpOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICBjb25zdCBza2lsbHNBcnJheSA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnRkUnLFxyXG4gICAgICAgICAgICBzcmM6ICcvaW1hZ2UvZmUuUE5HJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdEZXZvcHMnLFxyXG4gICAgICAgICAgICBzcmM6ICcvaW1hZ2UvZGV2b3BzLlBORycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnRGV2ZWxvcG1lbnQnLFxyXG4gICAgICAgICAgICBzcmM6ICcvaW1hZ2UvZGV2ZWxvcG1lbnQuUE5HJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdCRScsXHJcbiAgICAgICAgICAgIHNyYzogJy9pbWFnZS9iZS5QTkcnLFxyXG4gICAgICAgIH0sXHJcbiAgICBdO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJhc2UgY29udGFpbmVyTm89ezN9PlxyXG4gICAgICAgICAgICA8TWFpblNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICB7c2tpbGxzQXJyYXkubWFwKChza2lsbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hDb3RhaW5lciBrZXk9e3NraWxsLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaXRsZURpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94VGl0bGU+e3NraWxsLnRpdGxlfTwvQm94VGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RpdGxlRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hJbWFnZSBzcmM9e3NraWxsLnNyY30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW1hZ2VEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94Q290YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L01haW5TZWN0aW9uPlxyXG4gICAgICAgIDwvQmFzZT5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTa2lsbHM7XHJcbiIsIi8vIGltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcclxuLy8gaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG4vLyBjb25zdCBTdHlsZWREaXYxID0gc3R5bGVkLmRpdmBcclxuLy8gICAgIG1hcmdpbjogMCAyNHB4O1xyXG4vLyAgICAgcGFkZGluZzogMjJweCAwIDUzcHggMDtcclxuLy8gICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkRGl2MiA9IHN0eWxlZC5kaXZgXHJcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vICAgICBwYWRkaW5nOiAzMnB4IDI0cHg7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkU3BhbjEgPSBzdHlsZWQuc3BhbmBcclxuLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgICAgY29sb3I6ICNmZmY7XHJcbi8vIGA7XHJcblxyXG4vLyBjb25zdCBTdHlsZWRTcGFuMiA9IHN0eWxlZC5zcGFuYFxyXG4vLyAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgICBjb2xvcjogI2ZmZjtcclxuLy8gYDtcclxuXHJcbi8vIGludGVyZmFjZSBJV2h5SXQge1xyXG4vLyAgICAgdGl0bGU6IHN0cmluZztcclxuLy8gfVxyXG5cclxuLy8gY29uc3QgV2h5SXQ6IFJlYWN0LkZDPElXaHlJdD4gPSAoeyB0aXRsZSB9KTogSlNYLkVsZW1lbnQgPT4ge1xyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICA8QmFzZSB0aXRsZT17dGl0bGV9IGJhY2tncm91bmRDb2xvcj1cIiM2QTkxOTRcIj5cclxuLy8gICAgICAgICAgICAgPFN0eWxlZERpdjE+XHJcbi8vICAgICAgICAgICAgICAgICA8U3R5bGVkRGl2Mj5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjE+SVTrpbwg7JmcIOyLnOyeke2VmOqyjCDrkJjsl4jsnYTquYw/PC9TdHlsZWRTcGFuMT5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjI+7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuIOydtOufsCDsnbTsnKAg65WM66y47J2064ukLiDsnbTrn7Ag7J207JygIOuVjOusuOydtOuLpC48L1N0eWxlZFNwYW4yPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMj7snbTrn7Ag7J207JygIOuVjOusuOydtOuLpC48L1N0eWxlZFNwYW4yPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMj7snbTrn7Ag7J207JygIOuVjOusuOydtOuLpC48L1N0eWxlZFNwYW4yPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMj7snbTrn7Ag7J207JygIOuVjOusuOydtOuLpC48L1N0eWxlZFNwYW4yPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMj7snbTrn7Ag7J207JygIOuVjOusuOydtOuLpC48L1N0eWxlZFNwYW4yPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMj7snbTrn7Ag7J207JygIOuVjOusuOydtOuLpC48L1N0eWxlZFNwYW4yPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMj7snbTrn7Ag7J207JygIOuVjOusuOydtOuLpC4g7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuIOydtOufsCDsnbTsnKAg65WM66y47J2064ukLjwvU3R5bGVkU3BhbjI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4yPuydtOufsCDsnbTsnKAg65WM66y47J2064ukLiDsnbTrn7Ag7J207JygIOuVjOusuOydtOuLpC4g7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuPC9TdHlsZWRTcGFuMj5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjI+7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuIOydtOufsCDsnbTsnKAg65WM66y47J2064ukLiDsnbTrn7Ag7J207JygIOuVjOusuOydtOuLpC48L1N0eWxlZFNwYW4yPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMj7snbTrn7Ag7J207JygIOuVjOusuOydtOuLpC4g7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuIOydtOufsCDsnbTsnKAg65WM66y47J2064ukLjwvU3R5bGVkU3BhbjI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4yPuydtOufsCDsnbTsnKAg65WM66y47J2064ukLiDsnbTrn7Ag7J207JygIOuVjOusuOydtOuLpC4g7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuPC9TdHlsZWRTcGFuMj5cclxuLy8gICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2Mj5cclxuLy8gICAgICAgICAgICAgPC9TdHlsZWREaXYxPlxyXG4vLyAgICAgICAgIDwvQmFzZT5cclxuLy8gICAgICk7XHJcbi8vIH07XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBXaHlJdDtcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcclxuaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBDb21tb25TZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MTBweCkge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBRdWVzdGlvblNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgIHBhZGRpbmc6IDAgMjBweCAwIDIwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbmA7XHJcblxyXG5jb25zdCBBbnN3ZXJTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICBwYWRkaW5nOiAwIDIwcHggMCAyMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5gO1xyXG5cclxuY29uc3QgcXVlc3Rpb25OdW1iZXJLZXlmcmFtZSA9IGtleWZyYW1lc2BcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIDUwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBRdWVzdGlvbkRpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG1hcmdpbjogMjRweCAwO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJveC1zaGFkb3c6IDJweCA0cHggNHB4ICNjOGM4YzggaW5zZXQsIC0ycHggLTRweCA0cHggI2M4YzhjOCBpbnNldDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICAmID4gZGl2ID4gc3BhbjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiAke3F1ZXN0aW9uTnVtYmVyS2V5ZnJhbWV9O1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xyXG4gICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBRdWVzdGlvblN1YkRpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IEFuc3dlckRpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG1hcmdpbjogMjRweCAwO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgbWluLXdpZHRoOiBjYWxjKDIyNHB4ICsgMTV2dyk7XHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDIyNHB4ICsgMTV2aCk7XHJcbiAgICBib3gtc2hhZG93OiAycHggNHB4IDRweCAjYzhjOGM4IGluc2V0LCAtMnB4IC00cHggNHB4ICNjOGM4YzggaW5zZXQ7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSVF1ZXN0aW9uVGl0bGUge1xyXG4gICAgY29sb3I6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgUXVlc3Rpb25UaXRsZSA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogY2FsYygxOHB4ICsgMC4ydncpO1xyXG4gICAgY29sb3I6ICR7KHByb3BzOiBJUXVlc3Rpb25UaXRsZSkgPT4gcHJvcHMuY29sb3J9O1xyXG5gO1xyXG5cclxuY29uc3QgQW5zd2VyVGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSVF1ZXN0aW9uTnVtYmVyIHtcclxuICAgIGlzQ2xpY2s6IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IFF1ZXN0aW9uTnVtYmVyID0gc3R5bGVkLnNwYW5gXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiBjYWxjKDI0cHggKyAwLjZ2dyk7XHJcbiAgICBjb2xvcjogI2YxNWU1ZTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcblxyXG4gICAgYW5pbWF0aW9uLW5hbWU6ICR7KHByb3BzOiBJUXVlc3Rpb25OdW1iZXIpID0+IChwcm9wcy5pc0NsaWNrID8gcXVlc3Rpb25OdW1iZXJLZXlmcmFtZSA6ICcnKX07XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbmA7XHJcblxyXG5jb25zdCBXaHlJdCA9ICgpOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICAvLyBzdGF0ZVxyXG4gICAgY29uc3QgW3F1ZXN0aW9uSW5kZXgsIHNldFF1ZXN0aW9uSW5kZXhdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPigtMSk7XHJcbiAgICBjb25zdCBbdHlwaW5nVGltZXIsIHNldFR5cGluZ1RpbWVyXSA9IFJlYWN0LnVzZVN0YXRlPE5vZGVKUy5UaW1lcj4oKTtcclxuXHJcbiAgICAvLyByZWZcclxuICAgIGNvbnN0IGFuc3dlclRpdGxlUmVmID0gUmVhY3QudXNlUmVmPEhUTUxTcGFuRWxlbWVudD4oKTtcclxuICAgIGNvbnN0IGFuc3dlckRpdlJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuXHJcbiAgICAvLyB2YXJpYWJsZVxyXG4gICAgY29uc3QgcW5hQXJyYXkgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBxdWVzdGlvbjogJ0lU7JeQIOq0gOyLrOqwgOynhCDsi5zquLAnLFxyXG4gICAgICAgICAgICBhbnN3ZXI6ICdJVOyXkCDqtIDsi6zqsIDsp4Qg7Iuc6riwJyxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uOiAnSVTsl5Ag6rSA7Ius7J2EIOqwgOyngOqyjCDrkJwg6rOE6riwJyxcclxuICAgICAgICAgICAgYW5zd2VyOiBgSVTsl5Ag6rSA7Ius7J2EIOqwgOyngOqyjCDrkJwg6rOE6riwXFxuXFxu44WO44WO44WO44WOYCxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uOiAn6rCc67Cc7J6Q66W8IOyEoO2Dne2VnCDsnbTsnKAnLFxyXG4gICAgICAgICAgICBhbnN3ZXI6ICfqsJzrsJzsnpDrpbwg7ISg7YOd7ZWcIOydtOycoCcsXHJcbiAgICAgICAgfSxcclxuICAgIF07XHJcblxyXG4gICAgY29uc3QgcXVlc3Rpb25Db2xvciA9IFsnIzhGQzE1QicsICcjRjE5MDIzJywgJyM2M0MxQTknXTtcclxuXHJcbiAgICAvLyBvbkNsaWNrXHJcbiAgICBjb25zdCBvbkNsaWNrUXVlc3Rpb24gPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHNldFF1ZXN0aW9uSW5kZXgoaW5kZXgpOyAvLyDsp4jrrLggaW5kZXhcclxuICAgICAgICBjb25zdCB0aW1lID0gNTA7IC8vIOq4gOyekCDrgpjsmKTripQg7IaN64+EXHJcblxyXG4gICAgICAgIGlmIChhbnN3ZXJUaXRsZVJlZi5jdXJyZW50ICYmIGFuc3dlckRpdlJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGxldCBjaGFySW5kZXggPSAwO1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHR5cGluZ1RpbWVyKTsgLy8g6riw7KG0IGludGVydmFsIOyiheujjFxyXG4gICAgICAgICAgICBhbnN3ZXJUaXRsZVJlZi5jdXJyZW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICBhbnN3ZXJUaXRsZVJlZi5jdXJyZW50LnN0eWxlLmNvbG9yID0gcXVlc3Rpb25Db2xvcltpbmRleF07XHJcbiAgICAgICAgICAgIGFuc3dlckRpdlJlZi5jdXJyZW50LnN0eWxlLmJveFNoYWRvdyA9IGAycHggNHB4IDRweCAke3F1ZXN0aW9uQ29sb3JbaW5kZXhdfSBpbnNldCwgLTJweCAtNHB4IDRweCAke3F1ZXN0aW9uQ29sb3JbaW5kZXhdfSBpbnNldGA7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0eXBpbmdJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIO2DgOydtO2VkSDsspjrpqxcclxuICAgICAgICAgICAgICAgIGlmIChxbmFBcnJheVtpbmRleF0uYW5zd2VyW2NoYXJJbmRleF0gPT09ICdcXG4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g6rCc7ZaJIOusuOyekOydvCDqsr3smrBcclxuICAgICAgICAgICAgICAgICAgICBhbnN3ZXJUaXRsZVJlZi5jdXJyZW50LmlubmVySFRNTCArPSAnPGJyIC8+JztcclxuICAgICAgICAgICAgICAgICAgICBjaGFySW5kZXgrKztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g6rCc7ZaJIOusuOyekOqwgCDslYTri5Ag6rK97JqwXHJcbiAgICAgICAgICAgICAgICAgICAgYW5zd2VyVGl0bGVSZWYuY3VycmVudC5pbm5lckhUTUwgKz0gcW5hQXJyYXlbaW5kZXhdLmFuc3dlcltjaGFySW5kZXgrK107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIHRpbWUpO1xyXG5cclxuICAgICAgICAgICAgc2V0VHlwaW5nVGltZXIodHlwaW5nSW50ZXJ2YWwpOyAvLyDtmITsnqwgaW50ZXJ2YWwg65Ox66GdXHJcblxyXG4gICAgICAgICAgICAvLyDrqqjrk6Ag66y47J6Q6rCAIOyymOumrOuQmOuKlCDsi5zqsITsl5Ag64+E64us7ZWY66m0IGludGVydmFsIOyiheujjFxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodHlwaW5nSW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICB9LCBxbmFBcnJheVtpbmRleF0uYW5zd2VyLmxlbmd0aCAqIHRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QmFzZSBjb250YWluZXJObz17Mn0+XHJcbiAgICAgICAgICAgIDxDb21tb25TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPFF1ZXN0aW9uU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICB7cW5hQXJyYXkubWFwKChxbmEsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UXVlc3Rpb25EaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3FuYS5hbnN3ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGlja1F1ZXN0aW9uKGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxRdWVzdGlvblN1YkRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFF1ZXN0aW9uTnVtYmVyIGlzQ2xpY2s9e3F1ZXN0aW9uSW5kZXggPT09IGluZGV4fT5Re2luZGV4ICsgMX0uIDwvUXVlc3Rpb25OdW1iZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxRdWVzdGlvblRpdGxlIGNvbG9yPXtxdWVzdGlvbkNvbG9yW2luZGV4XX0+e3FuYS5xdWVzdGlvbn08L1F1ZXN0aW9uVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9RdWVzdGlvblN1YkRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUXVlc3Rpb25EaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L1F1ZXN0aW9uU2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8QW5zd2VyU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8QW5zd2VyRGl2IHJlZj17YW5zd2VyRGl2UmVmfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFuc3dlclRpdGxlIHJlZj17YW5zd2VyVGl0bGVSZWZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3F1ZXN0aW9uSW5kZXggPj0gMCA/ICcnIDogJ+q2geq4iO2VmOyLoCDsp4jrrLjsnYQg7ISg7YOd7ZW07KO87IS47JqULid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQW5zd2VyVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9BbnN3ZXJEaXY+XHJcbiAgICAgICAgICAgICAgICA8L0Fuc3dlclNlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvQ29tbW9uU2VjdGlvbj5cclxuICAgICAgICA8L0Jhc2U+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2h5SXQ7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1haW4gZnJvbSAnLi4vY29tcG9uZW50L21haW4nO1xyXG5pbXBvcnQgSW50cm8gZnJvbSAnLi4vY29tcG9uZW50L2ludHJvJztcclxuaW1wb3J0IFdoeUl0IGZyb20gJy4uL2NvbXBvbmVudC93aHlJdCc7XHJcbmltcG9ydCBTa2lsbHMgZnJvbSAnLi4vY29tcG9uZW50L3NraWxscyc7XHJcbmltcG9ydCBDYXJlZXIgZnJvbSAnLi4vY29tcG9uZW50L2NhcmVlcic7XHJcbmltcG9ydCBJbml0IGZyb20gJy4uL2NvbXBvbmVudC9pbml0JztcclxuaW1wb3J0IGluZGV4U3RvcmUgZnJvbSAnLi4vbW9kdWxlcy9pbmRleFN0b3JlJztcclxuaW1wb3J0IHsgdXNlT2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0JztcclxuaW1wb3J0IFByb2plY3RzIGZyb20gJy4uL2NvbXBvbmVudC9wcm9qZWN0cyc7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICBjb25zdCB7IGluaXRTdG9yZSwgYmFzZVN0b3JlIH0gPSBpbmRleFN0b3JlKCk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25DaGFuZ2VSZXNpemUpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvbkNoYW5nZVNjcm9sbCk7XHJcbiAgICAgICAgb25DaGFuZ2VSZXNpemUoKTtcclxuICAgICAgICBvbkNoYW5nZVNjcm9sbCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25DaGFuZ2VSZXNpemUpO1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25DaGFuZ2VTY3JvbGwpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLy8gb25DaGFuZ2VcclxuICAgIGNvbnN0IG9uQ2hhbmdlUmVzaXplID0gKCkgPT4ge1xyXG4gICAgICAgIGJhc2VTdG9yZS5zZXRJbm5lcldpZHRoKHdpbmRvdy5pbm5lcldpZHRoKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgYmFzZVN0b3JlLnNldFNjcm9sbFkod2luZG93LnNjcm9sbFkpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdXNlT2JzZXJ2ZXIoKCkgPT4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtpbml0U3RvcmUuaXNFbmQgPyAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNYWluIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEludHJvIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFdoeUl0IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNraWxscyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJlZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8UHJvamVjdHMgLz5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPEluaXQgLz5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaDEsXHJcbiAgICAgICAgICAgICAgICAgICAgaDIsXHJcbiAgICAgICAgICAgICAgICAgICAgaDMsXHJcbiAgICAgICAgICAgICAgICAgICAgaDQsXHJcbiAgICAgICAgICAgICAgICAgICAgaDUsXHJcbiAgICAgICAgICAgICAgICAgICAgaDYsXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbixcclxuICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBcHBsZVNER290aGljTmVvJywgJ05vdG8gU2FucyBLUicsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CdW5nZWUmZGlzcGxheT1zd2FwJyk7XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcclxuICAgICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9