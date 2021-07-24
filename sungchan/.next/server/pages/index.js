(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./component/base.tsx":
/*!****************************!*\
  !*** ./component/base.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/style */ "./style/style.tsx");


var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\component\\base.tsx";



const StyledSection1 = styled_components__WEBPACK_IMPORTED_MODULE_2___default().section.withConfig({
  displayName: "base__StyledSection1",
  componentId: "sc-1ugehyd-0"
})([""]);
const StyledDiv2 = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "base__StyledDiv2",
  componentId: "sc-1ugehyd-1"
})(["max-width:", "px;margin:0 auto;padding:0 15px;background-color:", ";@media screen and (min-width:", "px){margin-bottom:84px;border-top-left-radius:18px;border-top-right-radius:18px;border-bottom-left-radius:18px;border-bottom-right-radius:18px;box-shadow:2px 2px 12px ", ";}"], _style_style__WEBPACK_IMPORTED_MODULE_3__.maxWidth, props => props.backgroundColor, _style_style__WEBPACK_IMPORTED_MODULE_3__.maxWidth + 50, props => props.backgroundColor);
const StyledDiv3 = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "base__StyledDiv3",
  componentId: "sc-1ugehyd-2"
})(["", " display:", ";padding:24px 0;transition-duration:1.8s;transition-timing-function:ease-out;"], props => {
  if (props.title) {
    if (props.showTitle) {
      return `
                    dispaly: block;
                    transform: translateY(0);
                    opacity: 1;
                `;
    } else {
      return `
                    dispaly: block;
                    transform: translateY(60px);
                    opacity: 0;
                `;
    }
  } else {
    return `
                display: none;
            `;
  }
}, props => props.title ? 'block' : 'none');
const StyledTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default().span.withConfig({
  displayName: "base__StyledTitle",
  componentId: "sc-1ugehyd-3"
})(["font-weight:bold;font-size:2.4em;"]);

const Base = ({
  children,
  title,
  backgroundColor
}) => {
  // state
  const [showTitle, setShowTitle] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
  const [isClick, setIsClick] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
  const [savePosition, setSavePosition] = react__WEBPACK_IMPORTED_MODULE_1__.useState(0); // ref

  const div1Ref = react__WEBPACK_IMPORTED_MODULE_1__.useRef();
  const div2Ref = react__WEBPACK_IMPORTED_MODULE_1__.useRef(); // variable

  let isClickVariable = false; // useEffect

  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    scrollTitle();
    resizeSection1();

    if (div1Ref.current) {
      div1Ref.current.id = title;
    }
  }, []);
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    isClickVariable = false;
    window.addEventListener('scroll', scrollTitle);
    return () => {
      window.removeEventListener('scroll', scrollTitle);
    };
  }, [isClick]);
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    window.addEventListener('resize', resizeSection1);
    return () => {
      window.removeEventListener('resize', resizeSection1);
    };
  }, [isClick]); // onClick

  const onClickDiv2 = () => {
    if (div1Ref.current) {
      if (isClick) {
        div1Ref.current.style.transition = '';
        div1Ref.current.style.transform = '';
        div1Ref.current.style.margin = '';
        setIsClick(false);
        window.scrollTo(0, savePosition);
      } else {
        const scrollY = window.scrollY; // 현재 스크롤 높이

        const distance = div1Ref.current && div1Ref.current.getBoundingClientRect().top; // div의 top에 도달할 떄까지 남은 거리

        const gabY = (window.innerHeight - (div1Ref.current && div1Ref.current.clientHeight)) / 2; // (화면 높이 - div 높이) / 2

        const gabX = (window.innerWidth - (div2Ref.current && div2Ref.current.clientWidth)) / 2; // (화면 너비 - div 너비) / 2

        if (gabY > 0 && gabX > 0 && window.innerWidth >= _style_style__WEBPACK_IMPORTED_MODULE_3__.maxWidth + 50) {
          setSavePosition(scrollY + distance - gabY); // 중앙 위치

          if (gabY > 84) {
            window.scrollTo(0, scrollY + distance - gabY + (gabY - 84));
          } else {
            window.scrollTo(0, scrollY + distance - gabY);
          }

          const blankY = 1 + gabY / (div2Ref.current && div2Ref.current.clientHeight) * 2; // (div 여비 높이 / div 높이) * 2

          const blankX = 1 + gabX / (div2Ref.current && div2Ref.current.clientWidth) * 2; // (div 여비 너비 / div 너비) * 2

          div1Ref.current.style.transition = '1s';
          div1Ref.current.style.transform = `scale(${Math.min(blankY, blankX)})`;
          div1Ref.current.style.margin = `${gabY}px 0`;
          setIsClick(true);
        }
      }
    }
  }; // normal


  const resizeSection1 = () => {
    const gabY = (window.innerHeight - (div1Ref.current && div1Ref.current.clientHeight)) / 2; // (화면 높이 - div 높이) / 2

    const gabX = (window.innerWidth - (div2Ref.current && div2Ref.current.clientWidth)) / 2; // (화면 너비 - div 너비) / 2

    if (isClick) {
      if (gabY > 0 && gabX > 0 && window.innerWidth >= _style_style__WEBPACK_IMPORTED_MODULE_3__.maxWidth + 50) {
        const blankY = 1 + gabY / (div2Ref.current && div2Ref.current.clientHeight) * 2; // (div 여비 높이 / div 높이) * 2

        const blankX = 1 + gabX / (div2Ref.current && div2Ref.current.clientWidth) * 2; // (div 여비 너비 / div 너비) * 2

        div1Ref.current.style.transition = '';
        div1Ref.current.style.transform = `scale(${Math.min(blankY, blankX)})`;
        div1Ref.current.style.margin = `${gabY}px 0`;
      } else {
        div1Ref.current.style.transition = '';
        div1Ref.current.style.transform = '';
        div1Ref.current.style.margin = '';
      }
    }

    if (div2Ref.current) {
      if (gabY > 0 && gabX > 0 && window.innerWidth >= _style_style__WEBPACK_IMPORTED_MODULE_3__.maxWidth + 50) {
        div2Ref.current.style.cursor = 'pointer';
      } else {
        div2Ref.current.style.cursor = '';
      }
    }
  };

  const scrollTitle = () => {
    if (div1Ref.current) {
      if (window.innerHeight >= div1Ref.current.getBoundingClientRect().top + 48) {
        setShowTitle(true);
      } else {
        setShowTitle(false);
      }

      if (isClickVariable) {
        div1Ref.current.style.transition = '';
        div1Ref.current.style.transform = '';
        div1Ref.current.style.margin = '';
        setIsClick(false);
      }

      if (isClick) {
        isClickVariable = true;
      }
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSection1, {
      ref: div1Ref,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv2, {
        backgroundColor: backgroundColor,
        ref: div2Ref,
        onClick: onClickDiv2,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv3, {
          title: title,
          showTitle: showTitle,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTitle, {
            children: ["# ", title]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 21
        }, undefined), children]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 13
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Base);

/***/ }),

/***/ "./component/career.tsx":
/*!******************************!*\
  !*** ./component/career.tsx ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ "./component/base.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\component\\career.tsx";



const StyledDiv1 = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "career__StyledDiv1",
  componentId: "sc-10mcn0j-0"
})(["text-align:center;padding:0 18px;@media screen and (min-width:520px){padding:0 54px;}"]);
const StyledDiv2 = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "career__StyledDiv2",
  componentId: "sc-10mcn0j-1"
})(["padding:16px 0 48px 0;@media screen and (min-width:840px){display:flex;justify-content:space-between;}"]);
const StyledDiv3 = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "career__StyledDiv3",
  componentId: "sc-10mcn0j-2"
})(["display:inline-block;margin-bottom:38px;"]);
const StyledDiv4 = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "career__StyledDiv4",
  componentId: "sc-10mcn0j-3"
})(["display:inline-block;"]);
const StyledSpan1 = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "career__StyledSpan1",
  componentId: "sc-10mcn0j-4"
})(["color:#fff;"]);

const Career = ({
  title
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_base__WEBPACK_IMPORTED_MODULE_2__.default, {
    title: title,
    backgroundColor: "#c68377",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv1, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv2, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv3, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            style: {
              width: '232px'
            },
            src: "/image/ssafy.PNG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv4, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan1, {
            children: "\uC2F8\uD53C\uC5D0\uC11C\uB294 \uC774\uB7F0\uAC78 \uD588\uC2B5\uB2C8\uB2E4."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 25
          }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 68
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan1, {
            children: "\uC2F8\uD53C\uC5D0\uC11C\uB294 \uC774\uB7F0\uAC78 \uD588\uC2B5\uB2C8\uB2E4. \uC2F8\uD53C\uC5D0\uC11C\uB294 \uC774\uB7F0\uAC78 \uD588\uC2B5\uB2C8\uB2E4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 25
          }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 83
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan1, {
            children: "\uC2F8\uD53C\uC5D0\uC11C\uB294 \uC774\uB7F0\uAC78 \uD588\uC2B5\uB2C8\uB2E4. \uC2F8\uD53C\uC5D0\uC11C\uB294 \uC774\uB7F0\uAC78 \uD588\uC2B5\uB2C8\uB2E4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 25
          }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 83
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan1, {
            children: "\uC2F8\uD53C\uC5D0\uC11C\uB294 \uC774\uB7F0\uAC78 \uD588\uC2B5\uB2C8\uB2E4. \uC2F8\uD53C\uC5D0\uC11C\uB294 \uC774\uB7F0\uAC78 \uD588\uC2B5\uB2C8\uB2E4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 25
          }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 83
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan1, {
            children: "\uC2F8\uD53C\uC5D0\uC11C\uB294 \uC774\uB7F0\uAC78 \uD588\uC2B5\uB2C8\uB2E4. \uC2F8\uD53C\uC5D0\uC11C\uB294 \uC774\uB7F0\uAC78 \uD588\uC2B5\uB2C8\uB2E4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 83
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan1, {
            children: "\uC2F8\uD53C\uC5D0\uC11C\uB294 \uC774\uB7F0\uAC78 \uD588\uC2B5\uB2C8\uB2E4. \uC2F8\uD53C\uC5D0\uC11C\uB294 \uC774\uB7F0\uAC78 \uD588\uC2B5\uB2C8\uB2E4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 83
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan1, {
            children: "\uC2F8\uD53C\uC5D0\uC11C\uB294 \uC774\uB7F0\uAC78 \uD588\uC2B5\uB2C8\uB2E4. \uC2F8\uD53C\uC5D0\uC11C\uB294 \uC774\uB7F0\uAC78 \uD588\uC2B5\uB2C8\uB2E4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 25
          }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 83
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan1, {
            children: "\uC2F8\uD53C\uC5D0\uC11C\uB294 \uC774\uB7F0\uAC78 \uD588\uC2B5\uB2C8\uB2E4. \uC2F8\uD53C\uC5D0\uC11C\uB294 \uC774\uB7F0\uAC78 \uD588\uC2B5\uB2C8\uB2E4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 25
          }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 83
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan1, {
            children: "\uC2F8\uD53C\uC5D0\uC11C\uB294 \uC774\uB7F0\uAC78 \uD588\uC2B5\uB2C8\uB2E4. \uC2F8\uD53C\uC5D0\uC11C\uB294 \uC774\uB7F0\uAC78 \uD588\uC2B5\uB2C8\uB2E4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 25
          }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 83
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan1, {
            children: "\uC2F8\uD53C\uC5D0\uC11C\uB294 \uC774\uB7F0\uAC78 \uD588\uC2B5\uB2C8\uB2E4. \uC2F8\uD53C\uC5D0\uC11C\uB294 \uC774\uB7F0\uAC78 \uD588\uC2B5\uB2C8\uB2E4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 25
          }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 83
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv2, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv3, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            style: {
              width: '232px'
            },
            src: "/image/autoever.PNG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv4, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan1, {
            children: "\uC624\uD1A0\uC5D0\uBC84\uC5D0\uC11C\uB294 \uC774\uB7F0\uAC78 \uD588\uC2B5\uB2C8\uB2E4."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 25
          }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 70
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan1, {
            children: "\uC624\uD1A0\uC5D0\uBC84\uC5D0\uC11C\uB294 \uC774\uB7F0\uAC78 \uD588\uC2B5\uB2C8\uB2E4.\uC624\uD1A0\uC5D0\uBC84\uC5D0\uC11C\uB294 \uC774\uB7F0\uAC78 \uD588\uC2B5\uB2C8\uB2E4."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 25
          }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 87
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Career);

/***/ }),

/***/ "./component/intro.tsx":
/*!*****************************!*\
  !*** ./component/intro.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ "./component/base.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../style/style */ "./style/style.tsx");

var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\component\\intro.tsx";




const StyeldDiv2 = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "intro__StyeldDiv2",
  componentId: "sc-1aywpbq-0"
})(["margin:0 32px;padding-bottom:17px;"]);
const StyeldDiv3 = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "intro__StyeldDiv3",
  componentId: "sc-1aywpbq-1"
})(["overflow-wrap:anywhere;", ""], props => {
  if (props.innerWidth < _style_style__WEBPACK_IMPORTED_MODULE_4__.maxWidth) {
    return `
                text-align: center;
            `;
  } else if (props.direction === 'true') {
    return `
                text-align: right;
            `;
  }
});
const StyledDiv4 = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "intro__StyledDiv4",
  componentId: "sc-1aywpbq-2"
})(["display:inline-block;position:relative;border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-left-radius:10px;border-bottom-right-radius:10px;padding:12px;margin:43px 27px;background-color:#fff;"]);
const StyledDiv5 = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "intro__StyledDiv5",
  componentId: "sc-1aywpbq-3"
})(["position:absolute;top:-41px;left:-41px;transform:rotate(-25deg);"]);
const StyledDiv6 = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "intro__StyledDiv6",
  componentId: "sc-1aywpbq-4"
})(["position:absolute;top:-41px;right:-41px;transform:rotate(25deg);"]);
const StyledSpan1 = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "intro__StyledSpan1",
  componentId: "sc-1aywpbq-5"
})(["font-size:1.5em;"]);
const StyledSpan2 = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "intro__StyledSpan2",
  componentId: "sc-1aywpbq-6"
})(["font-size:1.5em;font-weight:bold;border-bottom:2px solid #c2655a;color:#c2655a;"]);

const Intro = ({
  innerWidth,
  title
}) => {
  const boxArray1 = [{
    title: '이름',
    description: '김성찬'
  }, {
    title: '생년월일',
    description: '94.12.09'
  }];
  const boxArray2 = [{
    title: '이메일',
    description: 'tjdcksdl00@naver.com'
  }, {
    title: '연락처',
    description: '010-3361-3633'
  }];
  const boxArray3 = [{
    title: '학교',
    description: '한양대 ERICA'
  }, {
    title: '주전공',
    description: '응용수학'
  }, {
    title: '부전공',
    description: '컴퓨터공학'
  }];
  const boxArray4 = [{
    title: '경력',
    description: '1년 3개월'
  }, {
    title: '기술분야',
    description: 'FE/BE 웹 개발'
  }];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_base__WEBPACK_IMPORTED_MODULE_2__.default, {
    title: title,
    backgroundColor: '#A5BAA8',
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyeldDiv2, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyeldDiv3, {
        innerWidth: innerWidth,
        children: boxArray1.map(box => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv4, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan1, {
              children: box.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv5, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan2, {
                children: box.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 37
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 33
            }, undefined)]
          }, box.description, true, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 29
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyeldDiv3, {
        innerWidth: innerWidth,
        direction: 'true',
        children: boxArray2.map(box => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv4, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan1, {
              children: box.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv6, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan2, {
                children: box.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 37
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 33
            }, undefined)]
          }, box.description, true, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 29
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyeldDiv3, {
        innerWidth: innerWidth,
        children: boxArray3.map(box => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv4, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan1, {
              children: box.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv5, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan2, {
                children: box.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 37
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 33
            }, undefined)]
          }, box.description, true, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 29
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyeldDiv3, {
        innerWidth: innerWidth,
        direction: 'true',
        children: boxArray4.map(box => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv4, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan1, {
              children: box.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv6, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan2, {
                children: box.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 37
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 33
            }, undefined)]
          }, box.description, true, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 29
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Intro);

/***/ }),

/***/ "./component/main.tsx":
/*!****************************!*\
  !*** ./component/main.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/style */ "./style/style.tsx");

var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\component\\main.tsx";



const StyledSection1 = styled_components__WEBPACK_IMPORTED_MODULE_2___default().section.withConfig({
  displayName: "main__StyledSection1",
  componentId: "sc-1r8z56n-0"
})(["background-image:url('/image/mainImage.jpg');background-repeat:no-repeat;background-size:cover;"]);
const StyledDiv1 = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "main__StyledDiv1",
  componentId: "sc-1r8z56n-1"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;padding:82px 0;"]);
const StyledDiv2 = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "main__StyledDiv2",
  componentId: "sc-1r8z56n-2"
})(["display:", ";text-align:center;margin:68px 0;"], props => props.innerWidth >= _style_style__WEBPACK_IMPORTED_MODULE_3__.maxWidth ? 'block' : 'none');
const div3KeyFrame1 = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.keyframes)(["50%{transform:translateY(-10px);}"]);
const StyledDiv3 = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "main__StyledDiv3",
  componentId: "sc-1r8z56n-3"
})(["display:inline-block;cursor:pointer;&:hover{animation:1.8s ", " infinite;}"], div3KeyFrame1);
const StyledDiv4 = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "main__StyledDiv4",
  componentId: "sc-1r8z56n-4"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;width:152px;height:152px;border-radius:50%;background-color:#caf0be;margin:16px 32px;"]);
const StyledDiv5 = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "main__StyledDiv5",
  componentId: "sc-1r8z56n-5"
})(["display:flex;justify-content:center;"]);
const StyledDiv6 = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "main__StyledDiv6",
  componentId: "sc-1r8z56n-6"
})(["max-width:", "px;margin:0 auto;padding:0 15px;@media screen and (min-width:", "px){margin-bottom:84px;}"], _style_style__WEBPACK_IMPORTED_MODULE_3__.maxWidth, _style_style__WEBPACK_IMPORTED_MODULE_3__.maxWidth + 50);
const StyledTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default().span.withConfig({
  displayName: "main__StyledTitle",
  componentId: "sc-1r8z56n-7"
})(["font-weight:bold;font-size:3.6em;color:#fff;text-align:center;@media screen and (min-width:480px){font-size:4.8em;}"]);
const StyledSubTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default().span.withConfig({
  displayName: "main__StyledSubTitle",
  componentId: "sc-1r8z56n-8"
})(["font-size:1.3em;color:#fff;"]);
const StyledH3_1 = styled_components__WEBPACK_IMPORTED_MODULE_2___default().h3.withConfig({
  displayName: "main__StyledH3_1",
  componentId: "sc-1r8z56n-9"
})(["font-size:1.4em;color:#658c59;"]);
const StyledSpan1 = styled_components__WEBPACK_IMPORTED_MODULE_2___default().span.withConfig({
  displayName: "main__StyledSpan1",
  componentId: "sc-1r8z56n-10"
})(["font-weight:bold;color:#3a5233;"]);

const Main = ({
  innerWidth,
  titleArray
}) => {
  const onClickDiv3 = title => {
    const titleSection = document.getElementById(title);

    if (titleSection) {
      window.scrollBy({
        top: titleSection.getBoundingClientRect().top,
        behavior: 'smooth'
      });
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSection1, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv6, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv5, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv2, {
          innerWidth: innerWidth,
          children: titleArray.map(title => {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv3, {
              onClick: () => onClickDiv3(title),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv4, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledH3_1, {
                  children: title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 41
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan1, {
                  children: "Go \u2192"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 121,
                  columnNumber: 41
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 37
              }, undefined)
            }, title, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 33
            }, undefined);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv1, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTitle, {
            children: "\uAE40\uC131\uCC2C\uC758 Portfolio"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSubTitle, {
            children: "Since 2021"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 112,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./component/skills.tsx":
/*!******************************!*\
  !*** ./component/skills.tsx ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ "./component/base.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\component\\skills.tsx";



const StyledDiv1 = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "skills__StyledDiv1",
  componentId: "sc-9hegbj-0"
})(["display:flex;flex-direction:column;align-items:center;padding:0 22px;@media screen and (min-width:570px){height:1080px;flex-wrap:wrap;}@media screen and (min-width:840px){height:720px;flex-wrap:wrap;}"]);
const StyledDiv2 = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "skills__StyledDiv2",
  componentId: "sc-9hegbj-1"
})(["width:240px;text-align:center;margin-bottom:54px;"]);
const StyledDiv3 = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "skills__StyledDiv3",
  componentId: "sc-9hegbj-2"
})(["padding:8px 0;"]);
const StyledDiv4 = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "skills__StyledDiv4",
  componentId: "sc-9hegbj-3"
})([""]);
const StyledSpan1 = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "skills__StyledSpan1",
  componentId: "sc-9hegbj-4"
})(["font-weight:bold;font-size:1.6em;color:#fff;"]);
const StyledImg1 = styled_components__WEBPACK_IMPORTED_MODULE_3___default().img.withConfig({
  displayName: "skills__StyledImg1",
  componentId: "sc-9hegbj-5"
})(["border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-left-radius:10px;border-bottom-right-radius:10px;"]);

const Skills = ({
  title
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_base__WEBPACK_IMPORTED_MODULE_2__.default, {
    title: title,
    backgroundColor: "#b79e6a",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv1, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv2, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv3, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan1, {
            children: "FE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv4, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledImg1, {
            src: "/image/fe.PNG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv2, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv3, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan1, {
            children: "Devops"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv4, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledImg1, {
            src: "/image/devops.PNG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv2, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv3, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan1, {
            children: "Development"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv4, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledImg1, {
            src: "/image/development.PNG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv2, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv3, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan1, {
            children: "BE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv4, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledImg1, {
            src: "/image/be.PNG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Skills);

/***/ }),

/***/ "./component/whyIt.tsx":
/*!*****************************!*\
  !*** ./component/whyIt.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ "./component/base.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\component\\whyIt.tsx";



const StyledDiv1 = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "whyIt__StyledDiv1",
  componentId: "sc-sy1iui-0"
})(["margin:0 24px;padding:22px 0 53px 0;text-align:right;"]);
const StyledDiv2 = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "whyIt__StyledDiv2",
  componentId: "sc-sy1iui-1"
})(["display:inline-block;padding:32px 24px;text-align:left;"]);
const StyledSpan1 = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "whyIt__StyledSpan1",
  componentId: "sc-sy1iui-2"
})(["display:block;color:#fff;"]);
const StyledSpan2 = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "whyIt__StyledSpan2",
  componentId: "sc-sy1iui-3"
})(["display:block;color:#fff;"]);

const WhyIt = ({
  title
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_base__WEBPACK_IMPORTED_MODULE_2__.default, {
    title: title,
    backgroundColor: "#6A9194",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv1, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv2, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan1, {
          children: "IT\uB97C \uC65C \uC2DC\uC791\uD558\uAC8C \uB418\uC5C8\uC744\uAE4C?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan2, {
          children: "\uC774\uB7F0 \uC774\uC720 \uB54C\uBB38\uC774\uB2E4. \uC774\uB7F0 \uC774\uC720 \uB54C\uBB38\uC774\uB2E4. \uC774\uB7F0 \uC774\uC720 \uB54C\uBB38\uC774\uB2E4."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan2, {
          children: "\uC774\uB7F0 \uC774\uC720 \uB54C\uBB38\uC774\uB2E4."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan2, {
          children: "\uC774\uB7F0 \uC774\uC720 \uB54C\uBB38\uC774\uB2E4."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan2, {
          children: "\uC774\uB7F0 \uC774\uC720 \uB54C\uBB38\uC774\uB2E4."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan2, {
          children: "\uC774\uB7F0 \uC774\uC720 \uB54C\uBB38\uC774\uB2E4."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan2, {
          children: "\uC774\uB7F0 \uC774\uC720 \uB54C\uBB38\uC774\uB2E4."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan2, {
          children: "\uC774\uB7F0 \uC774\uC720 \uB54C\uBB38\uC774\uB2E4. \uC774\uB7F0 \uC774\uC720 \uB54C\uBB38\uC774\uB2E4. \uC774\uB7F0 \uC774\uC720 \uB54C\uBB38\uC774\uB2E4."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan2, {
          children: "\uC774\uB7F0 \uC774\uC720 \uB54C\uBB38\uC774\uB2E4. \uC774\uB7F0 \uC774\uC720 \uB54C\uBB38\uC774\uB2E4. \uC774\uB7F0 \uC774\uC720 \uB54C\uBB38\uC774\uB2E4."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan2, {
          children: "\uC774\uB7F0 \uC774\uC720 \uB54C\uBB38\uC774\uB2E4. \uC774\uB7F0 \uC774\uC720 \uB54C\uBB38\uC774\uB2E4. \uC774\uB7F0 \uC774\uC720 \uB54C\uBB38\uC774\uB2E4."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan2, {
          children: "\uC774\uB7F0 \uC774\uC720 \uB54C\uBB38\uC774\uB2E4. \uC774\uB7F0 \uC774\uC720 \uB54C\uBB38\uC774\uB2E4. \uC774\uB7F0 \uC774\uC720 \uB54C\uBB38\uC774\uB2E4."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan2, {
          children: "\uC774\uB7F0 \uC774\uC720 \uB54C\uBB38\uC774\uB2E4. \uC774\uB7F0 \uC774\uC720 \uB54C\uBB38\uC774\uB2E4. \uC774\uB7F0 \uC774\uC720 \uB54C\uBB38\uC774\uB2E4."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (WhyIt);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _component_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/main */ "./component/main.tsx");
/* harmony import */ var _component_intro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/intro */ "./component/intro.tsx");
/* harmony import */ var _component_whyIt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/whyIt */ "./component/whyIt.tsx");
/* harmony import */ var _component_skills__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/skills */ "./component/skills.tsx");
/* harmony import */ var _component_career__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../component/career */ "./component/career.tsx");


var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\pages\\index.tsx";








const StyledDiv1 = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "pages__StyledDiv1",
  componentId: "sc-aoyeiy-0"
})([""]);

const Index = () => {
  const [innerWidth, setInnerWidth] = react__WEBPACK_IMPORTED_MODULE_2__.useState(0);
  const titleArray = ['Intro', 'Why It', 'Skills', 'Career', 'Projects', 'More'];
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(() => {
    const changeInnerWidth = () => {
      setInnerWidth(window.innerWidth);
    };

    setInnerWidth(window.innerWidth);
    window.addEventListener('resize', changeInnerWidth);
    return () => {
      window.removeEventListener('resize', changeInnerWidth);
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv1, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_main__WEBPACK_IMPORTED_MODULE_4__.default, {
        innerWidth: innerWidth,
        titleArray: titleArray
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_intro__WEBPACK_IMPORTED_MODULE_5__.default, {
        innerWidth: innerWidth,
        title: titleArray[0]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_whyIt__WEBPACK_IMPORTED_MODULE_6__.default, {
        title: titleArray[1]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_skills__WEBPACK_IMPORTED_MODULE_7__.default, {
        title: titleArray[2]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_career__WEBPACK_IMPORTED_MODULE_8__.default, {
        title: titleArray[3]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "3926330977",
      children: "body{margin:0;padding:0;}h1,h2,h3,h4,h5,h6,span,p{font-family:'AppleSDGothicNeo','Noto Sans KR',sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcc3R1ZHlcXHBvcnRmb2xpb1xcc3VuZ2NoYW5cXHBhZ2VzXFxpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUNpQixBQUdrQyxBQVlrRCxTQVhqRCxVQUNkLHNDQVdBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcc3R1ZHlcXHBvcnRmb2xpb1xcc3VuZ2NoYW5cXHBhZ2VzXFxpbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgTWFpbiBmcm9tICcuLi9jb21wb25lbnQvbWFpbic7XHJcbmltcG9ydCBJbnRybyBmcm9tICcuLi9jb21wb25lbnQvaW50cm8nO1xyXG5pbXBvcnQgV2h5SXQgZnJvbSAnLi4vY29tcG9uZW50L3doeUl0JztcclxuaW1wb3J0IFNraWxscyBmcm9tICcuLi9jb21wb25lbnQvc2tpbGxzJztcclxuaW1wb3J0IENhcmVlciBmcm9tICcuLi9jb21wb25lbnQvY2FyZWVyJztcclxuXHJcbmNvbnN0IFN0eWxlZERpdjEgPSBzdHlsZWQuZGl2YGA7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICBjb25zdCBbaW5uZXJXaWR0aCwgc2V0SW5uZXJXaWR0aF0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KDApO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlQXJyYXkgPSBbJ0ludHJvJywgJ1doeSBJdCcsICdTa2lsbHMnLCAnQ2FyZWVyJywgJ1Byb2plY3RzJywgJ01vcmUnXTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNoYW5nZUlubmVyV2lkdGggPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldElubmVyV2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHNldElubmVyV2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBjaGFuZ2VJbm5lcldpZHRoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGNoYW5nZUlubmVyV2lkdGgpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8U3R5bGVkRGl2MT5cclxuICAgICAgICAgICAgICAgIDxNYWluIGlubmVyV2lkdGg9e2lubmVyV2lkdGh9IHRpdGxlQXJyYXk9e3RpdGxlQXJyYXl9IC8+XHJcbiAgICAgICAgICAgICAgICA8SW50cm8gaW5uZXJXaWR0aD17aW5uZXJXaWR0aH0gdGl0bGU9e3RpdGxlQXJyYXlbMF19IC8+XHJcbiAgICAgICAgICAgICAgICA8V2h5SXQgdGl0bGU9e3RpdGxlQXJyYXlbMV19IC8+XHJcbiAgICAgICAgICAgICAgICA8U2tpbGxzIHRpdGxlPXt0aXRsZUFycmF5WzJdfSAvPlxyXG4gICAgICAgICAgICAgICAgPENhcmVlciB0aXRsZT17dGl0bGVBcnJheVszXX0gLz5cclxuICAgICAgICAgICAgPC9TdHlsZWREaXYxPlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBoMSxcclxuICAgICAgICAgICAgICAgICAgICBoMixcclxuICAgICAgICAgICAgICAgICAgICBoMyxcclxuICAgICAgICAgICAgICAgICAgICBoNCxcclxuICAgICAgICAgICAgICAgICAgICBoNSxcclxuICAgICAgICAgICAgICAgICAgICBoNixcclxuICAgICAgICAgICAgICAgICAgICBzcGFuLFxyXG4gICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0FwcGxlU0RHb3RoaWNOZW8nLCAnTm90byBTYW5zIEtSJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\User\\\\Desktop\\\\study\\\\portfolio\\\\sungchan\\\\pages\\\\index.tsx */"
    }, void 0, false, void 0, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./style/style.tsx":
/*!*************************!*\
  !*** ./style/style.tsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "maxWidth": function() { return /* binding */ maxWidth; }
/* harmony export */ });
const maxWidth = 960;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/style");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vLi9jb21wb25lbnQvYmFzZS50c3giLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvLy4vY29tcG9uZW50L2NhcmVlci50c3giLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvLy4vY29tcG9uZW50L2ludHJvLnRzeCIsIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vLi9jb21wb25lbnQvbWFpbi50c3giLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvLy4vY29tcG9uZW50L3NraWxscy50c3giLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvLy4vY29tcG9uZW50L3doeUl0LnRzeCIsIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvLy4vc3R5bGUvc3R5bGUudHN4Iiwid2VicGFjazovL3N1bmdjaGFuX3BvcnRmb2xpby9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiU3R5bGVkU2VjdGlvbjEiLCJzdHlsZWQiLCJTdHlsZWREaXYyIiwibWF4V2lkdGgiLCJwcm9wcyIsImJhY2tncm91bmRDb2xvciIsIlN0eWxlZERpdjMiLCJ0aXRsZSIsInNob3dUaXRsZSIsIlN0eWxlZFRpdGxlIiwiQmFzZSIsImNoaWxkcmVuIiwic2V0U2hvd1RpdGxlIiwiUmVhY3QiLCJpc0NsaWNrIiwic2V0SXNDbGljayIsInNhdmVQb3NpdGlvbiIsInNldFNhdmVQb3NpdGlvbiIsImRpdjFSZWYiLCJkaXYyUmVmIiwiaXNDbGlja1ZhcmlhYmxlIiwic2Nyb2xsVGl0bGUiLCJyZXNpemVTZWN0aW9uMSIsImN1cnJlbnQiLCJpZCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib25DbGlja0RpdjIiLCJzdHlsZSIsInRyYW5zaXRpb24iLCJ0cmFuc2Zvcm0iLCJtYXJnaW4iLCJzY3JvbGxUbyIsInNjcm9sbFkiLCJkaXN0YW5jZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImdhYlkiLCJpbm5lckhlaWdodCIsImNsaWVudEhlaWdodCIsImdhYlgiLCJpbm5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJibGFua1kiLCJibGFua1giLCJNYXRoIiwibWluIiwiY3Vyc29yIiwiU3R5bGVkRGl2MSIsIlN0eWxlZERpdjQiLCJTdHlsZWRTcGFuMSIsIkNhcmVlciIsIndpZHRoIiwiU3R5ZWxkRGl2MiIsIlN0eWVsZERpdjMiLCJkaXJlY3Rpb24iLCJTdHlsZWREaXY1IiwiU3R5bGVkRGl2NiIsIlN0eWxlZFNwYW4yIiwiSW50cm8iLCJib3hBcnJheTEiLCJkZXNjcmlwdGlvbiIsImJveEFycmF5MiIsImJveEFycmF5MyIsImJveEFycmF5NCIsIm1hcCIsImJveCIsImRpdjNLZXlGcmFtZTEiLCJrZXlmcmFtZXMiLCJTdHlsZWRTdWJUaXRsZSIsIlN0eWxlZEgzXzEiLCJNYWluIiwidGl0bGVBcnJheSIsIm9uQ2xpY2tEaXYzIiwidGl0bGVTZWN0aW9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEJ5IiwiYmVoYXZpb3IiLCJTdHlsZWRJbWcxIiwiU2tpbGxzIiwiV2h5SXQiLCJJbmRleCIsInNldElubmVyV2lkdGgiLCJjaGFuZ2VJbm5lcldpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxjQUFjLEdBQUdDLDJFQUFIO0FB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QUFLLEVBQUUrQixVQUFVLENBQUMsQ0FBRDtBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKLGVBR0ksOERBQUMscURBQUQ7QUFBTyxhQUFLLEVBQUVBLFVBQVUsQ0FBQyxDQUFEO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEosZUFJSSw4REFBQyxzREFBRDtBQUFRLGFBQUssRUFBRUEsVUFBVSxDQUFDLENBQUQ7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSixlQUtJLDhEQUFDLHNEQUFEO0FBQVEsYUFBSyxFQUFFQSxVQUFVLENBQUMsQ0FBRDtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKO0FBK0JILENBakREOztBQW1EQSwrREFBZVUsS0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7QUM3RE8sTUFBTWhGLFFBQVEsR0FBRyxHQUFqQixDOzs7Ozs7Ozs7OztBQ0FQLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgbWF4V2lkdGggfSBmcm9tICcuLi9zdHlsZS9zdHlsZSc7XHJcblxyXG5jb25zdCBTdHlsZWRTZWN0aW9uMSA9IHN0eWxlZC5zZWN0aW9uYGA7XHJcblxyXG5pbnRlcmZhY2UgSVN0eWxlZERpdjIge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IFN0eWxlZERpdjIgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWF4LXdpZHRoOiAke21heFdpZHRofXB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wczogSVN0eWxlZERpdjIpID0+IHByb3BzLmJhY2tncm91bmRDb2xvcn07XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHttYXhXaWR0aCArIDUwfXB4KSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogODRweDtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxOHB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxOHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE4cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE4cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAxMnB4ICR7KHByb3BzOiBJU3R5bGVkRGl2MikgPT4gcHJvcHMuYmFja2dyb3VuZENvbG9yfTtcclxuICAgIH1cclxuYDtcclxuXHJcbmludGVyZmFjZSBJU3R5bGVkRGl2MyB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgc2hvd1RpdGxlOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBTdHlsZWREaXYzID0gc3R5bGVkLmRpdmBcclxuICAgICR7KHByb3BzOiBJU3R5bGVkRGl2MykgPT4ge1xyXG4gICAgICAgIGlmIChwcm9wcy50aXRsZSkge1xyXG4gICAgICAgICAgICBpZiAocHJvcHMuc2hvd1RpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhbHk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGFseTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDYwcHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgfVxyXG4gICAgfX1cclxuXHJcbiAgICBkaXNwbGF5OiAkeyhwcm9wczogSVN0eWxlZERpdjMpID0+IChwcm9wcy50aXRsZSA/ICdibG9jaycgOiAnbm9uZScpfTtcclxuICAgIHBhZGRpbmc6IDI0cHggMDtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDEuOHM7XHJcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRUaXRsZSA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIuNGVtO1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElCYXNlQ29tcG9uZW50IHtcclxuICAgIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IEJhc2U6IFJlYWN0LkZDPElCYXNlQ29tcG9uZW50PiA9ICh7IGNoaWxkcmVuLCB0aXRsZSwgYmFja2dyb3VuZENvbG9yIH0pOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICAvLyBzdGF0ZVxyXG4gICAgY29uc3QgW3Nob3dUaXRsZSwgc2V0U2hvd1RpdGxlXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtpc0NsaWNrLCBzZXRJc0NsaWNrXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtzYXZlUG9zaXRpb24sIHNldFNhdmVQb3NpdGlvbl0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KDApO1xyXG5cclxuICAgIC8vIHJlZlxyXG4gICAgY29uc3QgZGl2MVJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuICAgIGNvbnN0IGRpdjJSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KCk7XHJcblxyXG4gICAgLy8gdmFyaWFibGVcclxuICAgIGxldCBpc0NsaWNrVmFyaWFibGUgPSBmYWxzZTtcclxuXHJcbiAgICAvLyB1c2VFZmZlY3RcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2Nyb2xsVGl0bGUoKTtcclxuICAgICAgICByZXNpemVTZWN0aW9uMSgpO1xyXG5cclxuICAgICAgICBpZiAoZGl2MVJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGRpdjFSZWYuY3VycmVudC5pZCA9IHRpdGxlO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlzQ2xpY2tWYXJpYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxUaXRsZSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxUaXRsZSk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtpc0NsaWNrXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplU2VjdGlvbjEpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplU2VjdGlvbjEpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbaXNDbGlja10pO1xyXG5cclxuICAgIC8vIG9uQ2xpY2tcclxuICAgIGNvbnN0IG9uQ2xpY2tEaXYyID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChkaXYxUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgaWYgKGlzQ2xpY2spIHtcclxuICAgICAgICAgICAgICAgIGRpdjFSZWYuY3VycmVudC5zdHlsZS50cmFuc2l0aW9uID0gJyc7XHJcbiAgICAgICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gJyc7XHJcbiAgICAgICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuc3R5bGUubWFyZ2luID0gJyc7XHJcbiAgICAgICAgICAgICAgICBzZXRJc0NsaWNrKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBzYXZlUG9zaXRpb24pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZOyAvLyDtmITsnqwg7Iqk7YGs66GkIOuGkuydtFxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBkaXYxUmVmLmN1cnJlbnQgJiYgZGl2MVJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDsgLy8gZGl27J2YIHRvcOyXkCDrj4Tri6ztlaAg65aE6rmM7KeAIOuCqOydgCDqsbDrpqxcclxuICAgICAgICAgICAgICAgIGNvbnN0IGdhYlkgPSAod2luZG93LmlubmVySGVpZ2h0IC0gKGRpdjFSZWYuY3VycmVudCAmJiBkaXYxUmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0KSkgLyAyOyAvLyAo7ZmU66m0IOuGkuydtCAtIGRpdiDrhpLsnbQpIC8gMlxyXG4gICAgICAgICAgICAgICAgY29uc3QgZ2FiWCA9ICh3aW5kb3cuaW5uZXJXaWR0aCAtIChkaXYyUmVmLmN1cnJlbnQgJiYgZGl2MlJlZi5jdXJyZW50LmNsaWVudFdpZHRoKSkgLyAyOyAvLyAo7ZmU66m0IOuEiOu5hCAtIGRpdiDrhIjruYQpIC8gMlxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChnYWJZID4gMCAmJiBnYWJYID4gMCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+PSBtYXhXaWR0aCArIDUwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2F2ZVBvc2l0aW9uKHNjcm9sbFkgKyBkaXN0YW5jZSAtIGdhYlkpOyAvLyDspJHslZkg7JyE7LmYXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdhYlkgPiA4NCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgc2Nyb2xsWSArIGRpc3RhbmNlIC0gZ2FiWSArIChnYWJZIC0gODQpKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgc2Nyb2xsWSArIGRpc3RhbmNlIC0gZ2FiWSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBibGFua1kgPSAxICsgKGdhYlkgLyAoZGl2MlJlZi5jdXJyZW50ICYmIGRpdjJSZWYuY3VycmVudC5jbGllbnRIZWlnaHQpKSAqIDI7IC8vIChkaXYg7Jes67mEIOuGkuydtCAvIGRpdiDrhpLsnbQpICogMlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJsYW5rWCA9IDEgKyAoZ2FiWCAvIChkaXYyUmVmLmN1cnJlbnQgJiYgZGl2MlJlZi5jdXJyZW50LmNsaWVudFdpZHRoKSkgKiAyOyAvLyAoZGl2IOyXrOu5hCDrhIjruYQgLyBkaXYg64SI67mEKSAqIDJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGl2MVJlZi5jdXJyZW50LnN0eWxlLnRyYW5zaXRpb24gPSAnMXMnO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdjFSZWYuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoJHtNYXRoLm1pbihibGFua1ksIGJsYW5rWCl9KWA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2MVJlZi5jdXJyZW50LnN0eWxlLm1hcmdpbiA9IGAke2dhYll9cHggMGA7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNDbGljayh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gbm9ybWFsXHJcbiAgICBjb25zdCByZXNpemVTZWN0aW9uMSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBnYWJZID0gKHdpbmRvdy5pbm5lckhlaWdodCAtIChkaXYxUmVmLmN1cnJlbnQgJiYgZGl2MVJlZi5jdXJyZW50LmNsaWVudEhlaWdodCkpIC8gMjsgLy8gKO2ZlOuptCDrhpLsnbQgLSBkaXYg64aS7J20KSAvIDJcclxuICAgICAgICBjb25zdCBnYWJYID0gKHdpbmRvdy5pbm5lcldpZHRoIC0gKGRpdjJSZWYuY3VycmVudCAmJiBkaXYyUmVmLmN1cnJlbnQuY2xpZW50V2lkdGgpKSAvIDI7IC8vICjtmZTrqbQg64SI67mEIC0gZGl2IOuEiOu5hCkgLyAyXHJcblxyXG4gICAgICAgIGlmIChpc0NsaWNrKSB7XHJcbiAgICAgICAgICAgIGlmIChnYWJZID4gMCAmJiBnYWJYID4gMCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+PSBtYXhXaWR0aCArIDUwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBibGFua1kgPSAxICsgKGdhYlkgLyAoZGl2MlJlZi5jdXJyZW50ICYmIGRpdjJSZWYuY3VycmVudC5jbGllbnRIZWlnaHQpKSAqIDI7IC8vIChkaXYg7Jes67mEIOuGkuydtCAvIGRpdiDrhpLsnbQpICogMlxyXG4gICAgICAgICAgICAgICAgY29uc3QgYmxhbmtYID0gMSArIChnYWJYIC8gKGRpdjJSZWYuY3VycmVudCAmJiBkaXYyUmVmLmN1cnJlbnQuY2xpZW50V2lkdGgpKSAqIDI7IC8vIChkaXYg7Jes67mEIOuEiOu5hCAvIGRpdiDrhIjruYQpICogMlxyXG5cclxuICAgICAgICAgICAgICAgIGRpdjFSZWYuY3VycmVudC5zdHlsZS50cmFuc2l0aW9uID0gJyc7XHJcbiAgICAgICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlKCR7TWF0aC5taW4oYmxhbmtZLCBibGFua1gpfSlgO1xyXG4gICAgICAgICAgICAgICAgZGl2MVJlZi5jdXJyZW50LnN0eWxlLm1hcmdpbiA9IGAke2dhYll9cHggMGA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xyXG4gICAgICAgICAgICAgICAgZGl2MVJlZi5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgZGl2MVJlZi5jdXJyZW50LnN0eWxlLm1hcmdpbiA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZGl2MlJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGlmIChnYWJZID4gMCAmJiBnYWJYID4gMCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+PSBtYXhXaWR0aCArIDUwKSB7XHJcbiAgICAgICAgICAgICAgICBkaXYyUmVmLmN1cnJlbnQuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGl2MlJlZi5jdXJyZW50LnN0eWxlLmN1cnNvciA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzY3JvbGxUaXRsZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAoZGl2MVJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJIZWlnaHQgPj0gZGl2MVJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIDQ4KSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTaG93VGl0bGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTaG93VGl0bGUoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNDbGlja1ZhcmlhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xyXG4gICAgICAgICAgICAgICAgZGl2MVJlZi5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgZGl2MVJlZi5jdXJyZW50LnN0eWxlLm1hcmdpbiA9ICcnO1xyXG4gICAgICAgICAgICAgICAgc2V0SXNDbGljayhmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpc0NsaWNrKSB7XHJcbiAgICAgICAgICAgICAgICBpc0NsaWNrVmFyaWFibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxTdHlsZWRTZWN0aW9uMSByZWY9e2RpdjFSZWZ9PlxyXG4gICAgICAgICAgICAgICAgPFN0eWxlZERpdjIgYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3J9IHJlZj17ZGl2MlJlZn0gb25DbGljaz17b25DbGlja0RpdjJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXYzIHRpdGxlPXt0aXRsZX0gc2hvd1RpdGxlPXtzaG93VGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkVGl0bGU+IyB7dGl0bGV9PC9TdHlsZWRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZERpdjM+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2Mj5cclxuICAgICAgICAgICAgPC9TdHlsZWRTZWN0aW9uMT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYXNlO1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgU3R5bGVkRGl2MSA9IHN0eWxlZC5kaXZgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwIDE4cHg7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTIwcHgpIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDU0cHg7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWREaXYyID0gc3R5bGVkLmRpdmBcclxuICAgIHBhZGRpbmc6IDE2cHggMCA0OHB4IDA7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODQwcHgpIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZERpdjMgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzhweDtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZERpdjQgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkU3BhbjEgPSBzdHlsZWQuc3BhbmBcclxuICAgIGNvbG9yOiAjZmZmO1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElDYXJlZXIge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgQ2FyZWVyOiBSZWFjdC5GQzxJQ2FyZWVyPiA9ICh7IHRpdGxlIH0pOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCYXNlIHRpdGxlPXt0aXRsZX0gYmFja2dyb3VuZENvbG9yPVwiI2M2ODM3N1wiPlxyXG4gICAgICAgICAgICA8U3R5bGVkRGl2MT5cclxuICAgICAgICAgICAgICAgIDxTdHlsZWREaXYyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXYzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiAnMjMycHgnIH19IHNyYz1cIi9pbWFnZS9zc2FmeS5QTkdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2Mz5cclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRGl2ND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4xPuyLuO2UvOyXkOyEnOuKlCDsnbTrn7Dqsbgg7ZaI7Iq164uI64ukLjwvU3R5bGVkU3BhbjE+IDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjE+7Iu47ZS87JeQ7ISc64qUIOydtOufsOqxuCDtlojsirXri4jri6QuIOyLuO2UvOyXkOyEnOuKlCDsnbTrn7Dqsbgg7ZaI7Iq164uI64ukPC9TdHlsZWRTcGFuMT4gPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMT7si7jtlLzsl5DshJzripQg7J2065+w6rG4IO2WiOyKteuLiOuLpC4g7Iu47ZS87JeQ7ISc64qUIOydtOufsOqxuCDtlojsirXri4jri6Q8L1N0eWxlZFNwYW4xPiA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4xPuyLuO2UvOyXkOyEnOuKlCDsnbTrn7Dqsbgg7ZaI7Iq164uI64ukLiDsi7jtlLzsl5DshJzripQg7J2065+w6rG4IO2WiOyKteuLiOuLpDwvU3R5bGVkU3BhbjE+IDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjE+7Iu47ZS87JeQ7ISc64qUIOydtOufsOqxuCDtlojsirXri4jri6QuIOyLuO2UvOyXkOyEnOuKlCDsnbTrn7Dqsbgg7ZaI7Iq164uI64ukPC9TdHlsZWRTcGFuMT4gPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMT7si7jtlLzsl5DshJzripQg7J2065+w6rG4IO2WiOyKteuLiOuLpC4g7Iu47ZS87JeQ7ISc64qUIOydtOufsOqxuCDtlojsirXri4jri6Q8L1N0eWxlZFNwYW4xPiA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4xPuyLuO2UvOyXkOyEnOuKlCDsnbTrn7Dqsbgg7ZaI7Iq164uI64ukLiDsi7jtlLzsl5DshJzripQg7J2065+w6rG4IO2WiOyKteuLiOuLpDwvU3R5bGVkU3BhbjE+IDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjE+7Iu47ZS87JeQ7ISc64qUIOydtOufsOqxuCDtlojsirXri4jri6QuIOyLuO2UvOyXkOyEnOuKlCDsnbTrn7Dqsbgg7ZaI7Iq164uI64ukPC9TdHlsZWRTcGFuMT4gPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMT7si7jtlLzsl5DshJzripQg7J2065+w6rG4IO2WiOyKteuLiOuLpC4g7Iu47ZS87JeQ7ISc64qUIOydtOufsOqxuCDtlojsirXri4jri6Q8L1N0eWxlZFNwYW4xPiA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4xPuyLuO2UvOyXkOyEnOuKlCDsnbTrn7Dqsbgg7ZaI7Iq164uI64ukLiDsi7jtlLzsl5DshJzripQg7J2065+w6rG4IO2WiOyKteuLiOuLpDwvU3R5bGVkU3BhbjE+IDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2ND5cclxuICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2Mj5cclxuXHJcbiAgICAgICAgICAgICAgICA8U3R5bGVkRGl2Mj5cclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRGl2Mz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogJzIzMnB4JyB9fSBzcmM9XCIvaW1hZ2UvYXV0b2V2ZXIuUE5HXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZERpdjM+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZERpdjQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMT7smKTthqDsl5DrsoTsl5DshJzripQg7J2065+w6rG4IO2WiOyKteuLiOuLpC48L1N0eWxlZFNwYW4xPiA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4xPuyYpO2GoOyXkOuyhOyXkOyEnOuKlCDsnbTrn7Dqsbgg7ZaI7Iq164uI64ukLuyYpO2GoOyXkOuyhOyXkOyEnOuKlCDsnbTrn7Dqsbgg7ZaI7Iq164uI64ukLjwvU3R5bGVkU3BhbjE+IDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2ND5cclxuICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2Mj5cclxuICAgICAgICAgICAgPC9TdHlsZWREaXYxPlxyXG4gICAgICAgIDwvQmFzZT5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJlZXI7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IG1heFdpZHRoIH0gZnJvbSAnLi4vc3R5bGUvc3R5bGUnO1xyXG5cclxuY29uc3QgU3R5ZWxkRGl2MiA9IHN0eWxlZC5kaXZgXHJcbiAgICBtYXJnaW46IDAgMzJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxN3B4O1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElTdHlsZWREaXYzIHtcclxuICAgIGRpcmVjdGlvbj86IHN0cmluZzsgLy8gdHJ1ZeuptCDsmrDsuKEsIOq3uCDsmbgg7KKM7LihXHJcbiAgICBpbm5lcldpZHRoOiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IFN0eWVsZERpdjMgPSBzdHlsZWQuZGl2YFxyXG4gICAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XHJcbiAgICAkeyhwcm9wczogSVN0eWxlZERpdjMpID0+IHtcclxuICAgICAgICBpZiAocHJvcHMuaW5uZXJXaWR0aCA8IG1heFdpZHRoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wcy5kaXJlY3Rpb24gPT09ICd0cnVlJykge1xyXG4gICAgICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgfVxyXG4gICAgfX1cclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZERpdjQgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIG1hcmdpbjogNDNweCAyN3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZERpdjUgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtNDFweDtcclxuICAgIGxlZnQ6IC00MXB4O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTI1ZGVnKTtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZERpdjYgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtNDFweDtcclxuICAgIHJpZ2h0OiAtNDFweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDI1ZGVnKTtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZFNwYW4xID0gc3R5bGVkLnNwYW5gXHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkU3BhbjIgPSBzdHlsZWQuc3BhbmBcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjYzI2NTVhO1xyXG4gICAgY29sb3I6ICNjMjY1NWE7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSUludHJvIHtcclxuICAgIGlubmVyV2lkdGg6IG51bWJlcjtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IEludHJvOiBSZWFjdC5GQzxJSW50cm8+ID0gKHsgaW5uZXJXaWR0aCwgdGl0bGUgfSk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIGNvbnN0IGJveEFycmF5MSA9IFtcclxuICAgICAgICB7IHRpdGxlOiAn7J2066aEJywgZGVzY3JpcHRpb246ICfquYDshLHssKwnIH0sXHJcbiAgICAgICAgeyB0aXRsZTogJ+yDneuFhOyblOydvCcsIGRlc2NyaXB0aW9uOiAnOTQuMTIuMDknIH0sXHJcbiAgICBdO1xyXG4gICAgY29uc3QgYm94QXJyYXkyID0gW1xyXG4gICAgICAgIHsgdGl0bGU6ICfsnbTrqZTsnbwnLCBkZXNjcmlwdGlvbjogJ3RqZGNrc2RsMDBAbmF2ZXIuY29tJyB9LFxyXG4gICAgICAgIHsgdGl0bGU6ICfsl7Drnb3sspgnLCBkZXNjcmlwdGlvbjogJzAxMC0zMzYxLTM2MzMnIH0sXHJcbiAgICBdO1xyXG4gICAgY29uc3QgYm94QXJyYXkzID0gW1xyXG4gICAgICAgIHsgdGl0bGU6ICftlZnqtZAnLCBkZXNjcmlwdGlvbjogJ+2VnOyWkeuMgCBFUklDQScgfSxcclxuICAgICAgICB7IHRpdGxlOiAn7KO87KCE6rO1JywgZGVzY3JpcHRpb246ICfsnZHsmqnsiJjtlZknIH0sXHJcbiAgICAgICAgeyB0aXRsZTogJ+u2gOyghOqztScsIGRlc2NyaXB0aW9uOiAn7Lu07ZOo7YSw6rO17ZWZJyB9LFxyXG4gICAgXTtcclxuICAgIGNvbnN0IGJveEFycmF5NCA9IFtcclxuICAgICAgICB7IHRpdGxlOiAn6rK966ClJywgZGVzY3JpcHRpb246ICcx64WEIDPqsJzsm5QnIH0sXHJcbiAgICAgICAgeyB0aXRsZTogJ+q4sOyIoOu2hOyVvCcsIGRlc2NyaXB0aW9uOiAnRkUvQkUg7Ju5IOqwnOuwnCcgfSxcclxuICAgIF07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QmFzZSB0aXRsZT17dGl0bGV9IGJhY2tncm91bmRDb2xvcj17JyNBNUJBQTgnfT5cclxuICAgICAgICAgICAgPFN0eWVsZERpdjI+XHJcbiAgICAgICAgICAgICAgICA8U3R5ZWxkRGl2MyBpbm5lcldpZHRoPXtpbm5lcldpZHRofT5cclxuICAgICAgICAgICAgICAgICAgICB7Ym94QXJyYXkxLm1hcCgoYm94KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRGl2NCBrZXk9e2JveC5kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4xPntib3guZGVzY3JpcHRpb259PC9TdHlsZWRTcGFuMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRGl2NT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4yPntib3gudGl0bGV9PC9TdHlsZWRTcGFuMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZERpdjU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZERpdjQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L1N0eWVsZERpdjM+XHJcblxyXG4gICAgICAgICAgICAgICAgPFN0eWVsZERpdjMgaW5uZXJXaWR0aD17aW5uZXJXaWR0aH0gZGlyZWN0aW9uPXsndHJ1ZSd9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtib3hBcnJheTIubWFwKChib3gpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXY0IGtleT17Ym94LmRlc2NyaXB0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjE+e2JveC5kZXNjcmlwdGlvbn08L1N0eWxlZFNwYW4xPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXY2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjI+e2JveC50aXRsZX08L1N0eWxlZFNwYW4yPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2Nj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2ND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvU3R5ZWxkRGl2Mz5cclxuXHJcbiAgICAgICAgICAgICAgICA8U3R5ZWxkRGl2MyBpbm5lcldpZHRoPXtpbm5lcldpZHRofT5cclxuICAgICAgICAgICAgICAgICAgICB7Ym94QXJyYXkzLm1hcCgoYm94KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRGl2NCBrZXk9e2JveC5kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4xPntib3guZGVzY3JpcHRpb259PC9TdHlsZWRTcGFuMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRGl2NT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4yPntib3gudGl0bGV9PC9TdHlsZWRTcGFuMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZERpdjU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZERpdjQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L1N0eWVsZERpdjM+XHJcblxyXG4gICAgICAgICAgICAgICAgPFN0eWVsZERpdjMgaW5uZXJXaWR0aD17aW5uZXJXaWR0aH0gZGlyZWN0aW9uPXsndHJ1ZSd9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtib3hBcnJheTQubWFwKChib3gpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXY0IGtleT17Ym94LmRlc2NyaXB0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjE+e2JveC5kZXNjcmlwdGlvbn08L1N0eWxlZFNwYW4xPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXY2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjI+e2JveC50aXRsZX08L1N0eWxlZFNwYW4yPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2Nj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2ND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvU3R5ZWxkRGl2Mz5cclxuICAgICAgICAgICAgPC9TdHllbGREaXYyPlxyXG4gICAgICAgIDwvQmFzZT5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnRybztcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgbWF4V2lkdGggfSBmcm9tICcuLi9zdHlsZS9zdHlsZSc7XHJcblxyXG5jb25zdCBTdHlsZWRTZWN0aW9uMSA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvaW1hZ2UvbWFpbkltYWdlLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWREaXYxID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogODJweCAwO1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElTdHllbGREaXYyIHtcclxuICAgIGlubmVyV2lkdGg6IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgU3R5bGVkRGl2MiA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiAkeyhwcm9wczogSVN0eWVsZERpdjIpID0+IChwcm9wcy5pbm5lcldpZHRoID49IG1heFdpZHRoID8gJ2Jsb2NrJyA6ICdub25lJyl9O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA2OHB4IDA7XHJcbmA7XHJcblxyXG5jb25zdCBkaXYzS2V5RnJhbWUxID0ga2V5ZnJhbWVzYFxyXG4gICAgNTAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkRGl2MyA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYW5pbWF0aW9uOiAxLjhzICR7ZGl2M0tleUZyYW1lMX0gaW5maW5pdGU7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWREaXY0ID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDE1MnB4O1xyXG4gICAgaGVpZ2h0OiAxNTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYWYwYmU7XHJcbiAgICBtYXJnaW46IDE2cHggMzJweDtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZERpdjUgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkRGl2NiA9IHN0eWxlZC5kaXZgXHJcbiAgICBtYXgtd2lkdGg6ICR7bWF4V2lkdGh9cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke21heFdpZHRoICsgNTB9cHgpIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4NHB4O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkVGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAzLjZlbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAgICAgZm9udC1zaXplOiA0LjhlbTtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZFN1YlRpdGxlID0gc3R5bGVkLnNwYW5gXHJcbiAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRIM18xID0gc3R5bGVkLmgzYFxyXG4gICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgIGNvbG9yOiAjNjU4YzU5O1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkU3BhbjEgPSBzdHlsZWQuc3BhbmBcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMzYTUyMzM7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSU1haW4ge1xyXG4gICAgaW5uZXJXaWR0aDogbnVtYmVyO1xyXG4gICAgdGl0bGVBcnJheTogc3RyaW5nW107XHJcbn1cclxuXHJcbmNvbnN0IE1haW46IFJlYWN0LkZDPElNYWluPiA9ICh7IGlubmVyV2lkdGgsIHRpdGxlQXJyYXkgfSk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIGNvbnN0IG9uQ2xpY2tEaXYzID0gKHRpdGxlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCB0aXRsZVNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aXRsZSk7XHJcblxyXG4gICAgICAgIGlmICh0aXRsZVNlY3Rpb24pIHtcclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbEJ5KHsgdG9wOiB0aXRsZVNlY3Rpb24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTdHlsZWRTZWN0aW9uMT5cclxuICAgICAgICAgICAgPFN0eWxlZERpdjY+XHJcbiAgICAgICAgICAgICAgICA8U3R5bGVkRGl2NT5cclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRGl2MiBpbm5lcldpZHRoPXtpbm5lcldpZHRofT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlQXJyYXkubWFwKCh0aXRsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRGl2MyBrZXk9e3RpdGxlfSBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrRGl2Myh0aXRsZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRGl2ND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRIM18xPnt0aXRsZX08L1N0eWxlZEgzXzE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjE+R28g4oaSPC9TdHlsZWRTcGFuMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXY0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2Mz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2Mj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZERpdjE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRUaXRsZT7quYDshLHssKzsnZggUG9ydGZvbGlvPC9TdHlsZWRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFN1YlRpdGxlPlNpbmNlIDIwMjE8L1N0eWxlZFN1YlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2MT5cclxuICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2NT5cclxuICAgICAgICAgICAgPC9TdHlsZWREaXY2PlxyXG4gICAgICAgIDwvU3R5bGVkU2VjdGlvbjE+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IFN0eWxlZERpdjEgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMCAyMnB4O1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3MHB4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDgwcHg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDg0MHB4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiA3MjBweDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWREaXYyID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiAyNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDU0cHg7XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWREaXYzID0gc3R5bGVkLmRpdmBcclxuICAgIHBhZGRpbmc6IDhweCAwO1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkRGl2NCA9IHN0eWxlZC5kaXZgYDtcclxuXHJcbmNvbnN0IFN0eWxlZFNwYW4xID0gc3R5bGVkLnNwYW5gXHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZEltZzEgPSBzdHlsZWQuaW1nYFxyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElTa2lsbCB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBTa2lsbHM6IFJlYWN0LkZDPElTa2lsbD4gPSAoeyB0aXRsZSB9KTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QmFzZSB0aXRsZT17dGl0bGV9IGJhY2tncm91bmRDb2xvcj1cIiNiNzllNmFcIj5cclxuICAgICAgICAgICAgPFN0eWxlZERpdjE+XHJcbiAgICAgICAgICAgICAgICA8U3R5bGVkRGl2Mj5cclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRGl2Mz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4xPkZFPC9TdHlsZWRTcGFuMT5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZERpdjM+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZERpdjQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRJbWcxIHNyYz1cIi9pbWFnZS9mZS5QTkdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2ND5cclxuICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2Mj5cclxuXHJcbiAgICAgICAgICAgICAgICA8U3R5bGVkRGl2Mj5cclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRGl2Mz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4xPkRldm9wczwvU3R5bGVkU3BhbjE+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXYzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXY0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkSW1nMSBzcmM9XCIvaW1hZ2UvZGV2b3BzLlBOR1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXY0PlxyXG4gICAgICAgICAgICAgICAgPC9TdHlsZWREaXYyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxTdHlsZWREaXYyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXYzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjE+RGV2ZWxvcG1lbnQ8L1N0eWxlZFNwYW4xPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2Mz5cclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRGl2ND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZEltZzEgc3JjPVwiL2ltYWdlL2RldmVsb3BtZW50LlBOR1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXY0PlxyXG4gICAgICAgICAgICAgICAgPC9TdHlsZWREaXYyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxTdHlsZWREaXYyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXYzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjE+QkU8L1N0eWxlZFNwYW4xPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2Mz5cclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRGl2ND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZEltZzEgc3JjPVwiL2ltYWdlL2JlLlBOR1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXY0PlxyXG4gICAgICAgICAgICAgICAgPC9TdHlsZWREaXYyPlxyXG4gICAgICAgICAgICA8L1N0eWxlZERpdjE+XHJcbiAgICAgICAgPC9CYXNlPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNraWxscztcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IFN0eWxlZERpdjEgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWFyZ2luOiAwIDI0cHg7XHJcbiAgICBwYWRkaW5nOiAyMnB4IDAgNTNweCAwO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWREaXYyID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDMycHggMjRweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRTcGFuMSA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZFNwYW4yID0gc3R5bGVkLnNwYW5gXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElXaHlJdCB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBXaHlJdDogUmVhY3QuRkM8SVdoeUl0PiA9ICh7IHRpdGxlIH0pOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCYXNlIHRpdGxlPXt0aXRsZX0gYmFja2dyb3VuZENvbG9yPVwiIzZBOTE5NFwiPlxyXG4gICAgICAgICAgICA8U3R5bGVkRGl2MT5cclxuICAgICAgICAgICAgICAgIDxTdHlsZWREaXYyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMT5JVOulvCDsmZwg7Iuc7J6R7ZWY6rKMIOuQmOyXiOydhOq5jD88L1N0eWxlZFNwYW4xPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMj7snbTrn7Ag7J207JygIOuVjOusuOydtOuLpC4g7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuIOydtOufsCDsnbTsnKAg65WM66y47J2064ukLjwvU3R5bGVkU3BhbjI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4yPuydtOufsCDsnbTsnKAg65WM66y47J2064ukLjwvU3R5bGVkU3BhbjI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4yPuydtOufsCDsnbTsnKAg65WM66y47J2064ukLjwvU3R5bGVkU3BhbjI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4yPuydtOufsCDsnbTsnKAg65WM66y47J2064ukLjwvU3R5bGVkU3BhbjI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4yPuydtOufsCDsnbTsnKAg65WM66y47J2064ukLjwvU3R5bGVkU3BhbjI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4yPuydtOufsCDsnbTsnKAg65WM66y47J2064ukLjwvU3R5bGVkU3BhbjI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4yPuydtOufsCDsnbTsnKAg65WM66y47J2064ukLiDsnbTrn7Ag7J207JygIOuVjOusuOydtOuLpC4g7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuPC9TdHlsZWRTcGFuMj5cclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjI+7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuIOydtOufsCDsnbTsnKAg65WM66y47J2064ukLiDsnbTrn7Ag7J207JygIOuVjOusuOydtOuLpC48L1N0eWxlZFNwYW4yPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMj7snbTrn7Ag7J207JygIOuVjOusuOydtOuLpC4g7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuIOydtOufsCDsnbTsnKAg65WM66y47J2064ukLjwvU3R5bGVkU3BhbjI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4yPuydtOufsCDsnbTsnKAg65WM66y47J2064ukLiDsnbTrn7Ag7J207JygIOuVjOusuOydtOuLpC4g7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuPC9TdHlsZWRTcGFuMj5cclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjI+7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuIOydtOufsCDsnbTsnKAg65WM66y47J2064ukLiDsnbTrn7Ag7J207JygIOuVjOusuOydtOuLpC48L1N0eWxlZFNwYW4yPlxyXG4gICAgICAgICAgICAgICAgPC9TdHlsZWREaXYyPlxyXG4gICAgICAgICAgICA8L1N0eWxlZERpdjE+XHJcbiAgICAgICAgPC9CYXNlPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdoeUl0O1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgTWFpbiBmcm9tICcuLi9jb21wb25lbnQvbWFpbic7XHJcbmltcG9ydCBJbnRybyBmcm9tICcuLi9jb21wb25lbnQvaW50cm8nO1xyXG5pbXBvcnQgV2h5SXQgZnJvbSAnLi4vY29tcG9uZW50L3doeUl0JztcclxuaW1wb3J0IFNraWxscyBmcm9tICcuLi9jb21wb25lbnQvc2tpbGxzJztcclxuaW1wb3J0IENhcmVlciBmcm9tICcuLi9jb21wb25lbnQvY2FyZWVyJztcclxuXHJcbmNvbnN0IFN0eWxlZERpdjEgPSBzdHlsZWQuZGl2YGA7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICBjb25zdCBbaW5uZXJXaWR0aCwgc2V0SW5uZXJXaWR0aF0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KDApO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlQXJyYXkgPSBbJ0ludHJvJywgJ1doeSBJdCcsICdTa2lsbHMnLCAnQ2FyZWVyJywgJ1Byb2plY3RzJywgJ01vcmUnXTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNoYW5nZUlubmVyV2lkdGggPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldElubmVyV2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHNldElubmVyV2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBjaGFuZ2VJbm5lcldpZHRoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGNoYW5nZUlubmVyV2lkdGgpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8U3R5bGVkRGl2MT5cclxuICAgICAgICAgICAgICAgIDxNYWluIGlubmVyV2lkdGg9e2lubmVyV2lkdGh9IHRpdGxlQXJyYXk9e3RpdGxlQXJyYXl9IC8+XHJcbiAgICAgICAgICAgICAgICA8SW50cm8gaW5uZXJXaWR0aD17aW5uZXJXaWR0aH0gdGl0bGU9e3RpdGxlQXJyYXlbMF19IC8+XHJcbiAgICAgICAgICAgICAgICA8V2h5SXQgdGl0bGU9e3RpdGxlQXJyYXlbMV19IC8+XHJcbiAgICAgICAgICAgICAgICA8U2tpbGxzIHRpdGxlPXt0aXRsZUFycmF5WzJdfSAvPlxyXG4gICAgICAgICAgICAgICAgPENhcmVlciB0aXRsZT17dGl0bGVBcnJheVszXX0gLz5cclxuICAgICAgICAgICAgPC9TdHlsZWREaXYxPlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBoMSxcclxuICAgICAgICAgICAgICAgICAgICBoMixcclxuICAgICAgICAgICAgICAgICAgICBoMyxcclxuICAgICAgICAgICAgICAgICAgICBoNCxcclxuICAgICAgICAgICAgICAgICAgICBoNSxcclxuICAgICAgICAgICAgICAgICAgICBoNixcclxuICAgICAgICAgICAgICAgICAgICBzcGFuLFxyXG4gICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0FwcGxlU0RHb3RoaWNOZW8nLCAnTm90byBTYW5zIEtSJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iLCJleHBvcnQgY29uc3QgbWF4V2lkdGggPSA5NjA7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9