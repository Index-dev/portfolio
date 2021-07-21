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
})(["", ""], props => {
  if (props.isMain) {
    return `
                background-image: url('/image/mainImage.jpg');
                background-repeat: no-repeat;
                background-size: cover;
            `;
  }
});
const StyledDiv2 = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "base__StyledDiv2",
  componentId: "sc-1ugehyd-1"
})(["max-width:", "px;margin:0 auto;padding:0 15px;background-color:", ";@media screen and (min-width:", "px){margin-bottom:82px;", "}"], _style_style__WEBPACK_IMPORTED_MODULE_3__.maxWidth, props => props.isMain ? '' : '#3424', _style_style__WEBPACK_IMPORTED_MODULE_3__.maxWidth + 50, props => {
  if (!props.isMain) {
    return `
                    border-top-left-radius: 18px;
                    border-top-right-radius: 18px;
                    border-bottom-left-radius: 18px;
                    border-bottom-right-radius: 18px;
                `;
  }
});
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
  isMain,
  title
}) => {
  const [showTitle, setShowTitle] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
  const div1Ref = react__WEBPACK_IMPORTED_MODULE_1__.useRef();
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    const changeScroll = () => {
      if (div1Ref.current) {
        if (window.innerHeight >= div1Ref.current.getBoundingClientRect().top + 48) {
          setShowTitle(true);
        } else {
          setShowTitle(false);
        }
      }
    };

    window.addEventListener('scroll', changeScroll);
    changeScroll();

    if (div1Ref.current) {
      div1Ref.current.id = title;
    }

    return () => {
      window.removeEventListener('scroll', changeScroll);
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSection1, {
      ref: div1Ref,
      isMain: isMain,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv2, {
        isMain: isMain,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv3, {
          title: title,
          showTitle: showTitle,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTitle, {
            children: ["# ", title]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 21
        }, undefined), children]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
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

var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\component\\career.tsx";



const Career = ({
  title
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_base__WEBPACK_IMPORTED_MODULE_2__.default, {
    title: title,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "career"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
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
})(["display:inline-block;position:relative;border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-left-radius:10px;border-bottom-right-radius:10px;border:1px solid black;padding:12px;margin:43px 27px;"]);
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
})(["font-size:1.8em;"]);
const StyledSpan2 = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "intro__StyledSpan2",
  componentId: "sc-1aywpbq-6"
})(["font-size:1.5em;border-bottom:2px solid black;"]);

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
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyeldDiv2, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyeldDiv3, {
        innerWidth: innerWidth,
        children: boxArray1.map(box => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv4, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan1, {
              children: box.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv5, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan2, {
                children: box.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 37
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 33
            }, undefined)]
          }, box.description, true, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 29
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
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
              lineNumber: 110,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv6, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan2, {
                children: box.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 37
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 33
            }, undefined)]
          }, box.description, true, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 29
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyeldDiv3, {
        innerWidth: innerWidth,
        children: boxArray3.map(box => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv4, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan1, {
              children: box.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv5, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan2, {
                children: box.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 37
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 33
            }, undefined)]
          }, box.description, true, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 29
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
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
              lineNumber: 136,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv6, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan2, {
                children: box.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 138,
                columnNumber: 37
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 33
            }, undefined)]
          }, box.description, true, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 29
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 91,
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
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ "./component/base.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../style/style */ "./style/style.tsx");

var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\component\\main.tsx";




const StyledDiv1 = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "main__StyledDiv1",
  componentId: "sc-1r8z56n-0"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;padding:82px 0;"]);
const StyledDiv2 = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "main__StyledDiv2",
  componentId: "sc-1r8z56n-1"
})(["display:", ";text-align:center;margin:68px 0;"], props => props.innerWidth >= _style_style__WEBPACK_IMPORTED_MODULE_4__.maxWidth ? 'block' : 'none');
const div3KeyFrame1 = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.keyframes)(["50%{transform:translateY(-10px);}"]);
const StyledDiv3 = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "main__StyledDiv3",
  componentId: "sc-1r8z56n-2"
})(["display:inline-block;cursor:pointer;&:hover{animation:1.8s ", " infinite;}"], div3KeyFrame1);
const StyledDiv4 = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "main__StyledDiv4",
  componentId: "sc-1r8z56n-3"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;width:152px;height:152px;border-radius:50%;background-color:#fad232;margin:16px 32px;"]);
const StyledDiv5 = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "main__StyledDiv5",
  componentId: "sc-1r8z56n-4"
})(["display:flex;justify-content:center;"]);
const StyledTitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "main__StyledTitle",
  componentId: "sc-1r8z56n-5"
})(["font-weight:bold;font-size:4.8em;color:#fff;text-align:center;"]);
const StyledSubTitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "main__StyledSubTitle",
  componentId: "sc-1r8z56n-6"
})(["font-size:1.3em;color:#fff;"]);
const StyledH3_1 = styled_components__WEBPACK_IMPORTED_MODULE_3___default().h3.withConfig({
  displayName: "main__StyledH3_1",
  componentId: "sc-1r8z56n-7"
})([""]);
const StyledSpan1 = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "main__StyledSpan1",
  componentId: "sc-1r8z56n-8"
})(["font-weight:bold;"]);

const Main = ({
  innerWidth,
  titleArray
}) => {
  const onClickDiv3 = title => {
    const titleSection = document.getElementById(title);

    if (titleSection) {
      titleSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_base__WEBPACK_IMPORTED_MODULE_2__.default, {
    isMain: true,
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
                lineNumber: 96,
                columnNumber: 37
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan1, {
                children: "Go \u2192"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 37
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 33
            }, undefined)
          }, title, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 29
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv1, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTitle, {
          children: "\uAE40\uC131\uCC2C\uC758 Portfolio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSubTitle, {
          children: "Since 2021"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 89,
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
})(["display:flex;flex-direction:column;align-items:center;padding:0 22px;@media screen and (min-width:570px){height:960px;flex-wrap:wrap;}@media screen and (min-width:840px){height:640px;flex-wrap:wrap;}"]);
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
})(["font-weight:bold;font-size:1.6em;"]);

const Skills = ({
  title
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_base__WEBPACK_IMPORTED_MODULE_2__.default, {
    title: title,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv1, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv2, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv3, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan1, {
            children: "FE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv4, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/image/fe.PNG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv2, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv3, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan1, {
            children: "Devops"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv4, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/image/devops.PNG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv2, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv3, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan1, {
            children: "Development"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv4, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/image/development.PNG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv2, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv3, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan1, {
            children: "BE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv4, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/image/be.PNG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
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
})(["display:inline-block;padding:32px 24px;background-color:#fff;text-align:left;"]);
const StyledSpan1 = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "whyIt__StyledSpan1",
  componentId: "sc-sy1iui-2"
})(["display:block;"]);
const StyledSpan2 = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "whyIt__StyledSpan2",
  componentId: "sc-sy1iui-3"
})(["display:block;"]);

const WhyIt = ({
  title
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_base__WEBPACK_IMPORTED_MODULE_2__.default, {
    title: title,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv1, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv2, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan1, {
          children: "IT\uB97C \uC65C \uC2DC\uC791\uD558\uAC8C \uB418\uC5C8\uC744\uAE4C?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan2, {
          children: "\uC774\uB7F0 \uC774\uC720 \uB54C\uBB38\uC774\uB2E4. \uC774\uB7F0 \uC774\uC720 \uB54C\uBB38\uC774\uB2E4. \uC774\uB7F0 \uC774\uC720 \uB54C\uBB38\uC774\uB2E4."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan2, {
          children: "\uC774\uB7F0 \uC774\uC720 \uB54C\uBB38\uC774\uB2E4."
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
          children: "\uC774\uB7F0 \uC774\uC720 \uB54C\uBB38\uC774\uB2E4. \uC774\uB7F0 \uC774\uC720 \uB54C\uBB38\uC774\uB2E4. \uC774\uB7F0 \uC774\uC720 \uB54C\uBB38\uC774\uB2E4."
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
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
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
      id: "3192114283",
      children: "body{margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcc3R1ZHlcXHBvcnRmb2xpb1xcc3VuZ2NoYW5cXHBhZ2VzXFxpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUNpQixBQUdrQyxTQUNDLFVBQ2QiLCJmaWxlIjoiQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxzdHVkeVxccG9ydGZvbGlvXFxzdW5nY2hhblxccGFnZXNcXGluZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBNYWluIGZyb20gJy4uL2NvbXBvbmVudC9tYWluJztcclxuaW1wb3J0IEludHJvIGZyb20gJy4uL2NvbXBvbmVudC9pbnRybyc7XHJcbmltcG9ydCBXaHlJdCBmcm9tICcuLi9jb21wb25lbnQvd2h5SXQnO1xyXG5pbXBvcnQgU2tpbGxzIGZyb20gJy4uL2NvbXBvbmVudC9za2lsbHMnO1xyXG5pbXBvcnQgQ2FyZWVyIGZyb20gJy4uL2NvbXBvbmVudC9jYXJlZXInO1xyXG5cclxuY29uc3QgU3R5bGVkRGl2MSA9IHN0eWxlZC5kaXZgYDtcclxuXHJcbmNvbnN0IEluZGV4ID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIGNvbnN0IFtpbm5lcldpZHRoLCBzZXRJbm5lcldpZHRoXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oMCk7XHJcblxyXG4gICAgY29uc3QgdGl0bGVBcnJheSA9IFsnSW50cm8nLCAnV2h5IEl0JywgJ1NraWxscycsICdDYXJlZXInLCAnUHJvamVjdHMnLCAnTW9yZSddO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2hhbmdlSW5uZXJXaWR0aCA9ICgpID0+IHtcclxuICAgICAgICAgICAgc2V0SW5uZXJXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc2V0SW5uZXJXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGNoYW5nZUlubmVyV2lkdGgpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgY2hhbmdlSW5uZXJXaWR0aCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxTdHlsZWREaXYxPlxyXG4gICAgICAgICAgICAgICAgPE1haW4gaW5uZXJXaWR0aD17aW5uZXJXaWR0aH0gdGl0bGVBcnJheT17dGl0bGVBcnJheX0gLz5cclxuICAgICAgICAgICAgICAgIDxJbnRybyBpbm5lcldpZHRoPXtpbm5lcldpZHRofSB0aXRsZT17dGl0bGVBcnJheVswXX0gLz5cclxuICAgICAgICAgICAgICAgIDxXaHlJdCB0aXRsZT17dGl0bGVBcnJheVsxXX0gLz5cclxuICAgICAgICAgICAgICAgIDxTa2lsbHMgdGl0bGU9e3RpdGxlQXJyYXlbMl19IC8+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZWVyIHRpdGxlPXt0aXRsZUFycmF5WzNdfSAvPlxyXG4gICAgICAgICAgICA8L1N0eWxlZERpdjE+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\User\\\\Desktop\\\\study\\\\portfolio\\\\sungchan\\\\pages\\\\index.tsx */"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vLi9jb21wb25lbnQvYmFzZS50c3giLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvLy4vY29tcG9uZW50L2NhcmVlci50c3giLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvLy4vY29tcG9uZW50L2ludHJvLnRzeCIsIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vLi9jb21wb25lbnQvbWFpbi50c3giLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvLy4vY29tcG9uZW50L3NraWxscy50c3giLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvLy4vY29tcG9uZW50L3doeUl0LnRzeCIsIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvLy4vc3R5bGUvc3R5bGUudHN4Iiwid2VicGFjazovL3N1bmdjaGFuX3BvcnRmb2xpby9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiU3R5bGVkU2VjdGlvbjEiLCJzdHlsZWQiLCJwcm9wcyIsImlzTWFpbiIsIlN0eWxlZERpdjIiLCJtYXhXaWR0aCIsIlN0eWxlZERpdjMiLCJ0aXRsZSIsInNob3dUaXRsZSIsIlN0eWxlZFRpdGxlIiwiQmFzZSIsImNoaWxkcmVuIiwic2V0U2hvd1RpdGxlIiwiUmVhY3QiLCJkaXYxUmVmIiwiY2hhbmdlU2Nyb2xsIiwiY3VycmVudCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiYWRkRXZlbnRMaXN0ZW5lciIsImlkIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkNhcmVlciIsIlN0eWVsZERpdjIiLCJTdHllbGREaXYzIiwiaW5uZXJXaWR0aCIsImRpcmVjdGlvbiIsIlN0eWxlZERpdjQiLCJTdHlsZWREaXY1IiwiU3R5bGVkRGl2NiIsIlN0eWxlZFNwYW4xIiwiU3R5bGVkU3BhbjIiLCJJbnRybyIsImJveEFycmF5MSIsImRlc2NyaXB0aW9uIiwiYm94QXJyYXkyIiwiYm94QXJyYXkzIiwiYm94QXJyYXk0IiwibWFwIiwiYm94IiwiU3R5bGVkRGl2MSIsImRpdjNLZXlGcmFtZTEiLCJrZXlmcmFtZXMiLCJTdHlsZWRTdWJUaXRsZSIsIlN0eWxlZEgzXzEiLCJNYWluIiwidGl0bGVBcnJheSIsIm9uQ2xpY2tEaXYzIiwidGl0bGVTZWN0aW9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJTa2lsbHMiLCJXaHlJdCIsIkluZGV4Iiwic2V0SW5uZXJXaWR0aCIsImNoYW5nZUlubmVyV2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQU1BLE1BQU1BLGNBQWMsR0FBR0MsMkVBQUg7QUFBQTtBQUFBO0FBQUEsYUFDYkMsS0FBRCxJQUE0QjtBQUMxQixNQUFJQSxLQUFLLENBQUNDLE1BQVYsRUFBa0I7QUFDZCxXQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLGFBSlk7QUFLSDtBQUNKLENBVGUsQ0FBcEI7QUFnQkEsTUFBTUMsVUFBVSxHQUFHSCx1RUFBSDtBQUFBO0FBQUE7QUFBQSwwSUFDQ0ksa0RBREQsRUFJU0gsS0FBRCxJQUF5QkEsS0FBSyxDQUFDQyxNQUFOLEdBQWUsRUFBZixHQUFvQixPQUpyRCxFQU1vQkUsa0RBQVEsR0FBRyxFQU4vQixFQVFMSCxLQUFELElBQXdCO0FBQ3RCLE1BQUksQ0FBQ0EsS0FB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Q0FBQyxDQUFEO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFHSSw4REFBQyxxREFBRDtBQUFPLGFBQUssRUFBRUEsVUFBVSxDQUFDLENBQUQ7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFISixlQUlJLDhEQUFDLHNEQUFEO0FBQVEsYUFBSyxFQUFFQSxVQUFVLENBQUMsQ0FBRDtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKLGVBS0ksOERBQUMsc0RBQUQ7QUFBUSxhQUFLLEVBQUVBLFVBQVUsQ0FBQyxDQUFEO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREo7QUFvQkgsQ0F0Q0Q7O0FBd0NBLCtEQUFlUyxLQUFmLEU7Ozs7Ozs7Ozs7Ozs7OztBQ2xETyxNQUFNcEQsUUFBUSxHQUFHLEdBQWpCLEM7Ozs7Ozs7Ozs7O0FDQVAsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBtYXhXaWR0aCB9IGZyb20gJy4uL3N0eWxlL3N0eWxlJztcclxuXHJcbmludGVyZmFjZSBJU3R5bGVkU2VjdGlvbjEge1xyXG4gICAgaXNNYWluOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBTdHlsZWRTZWN0aW9uMSA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gICAgJHsocHJvcHM6IElTdHlsZWRTZWN0aW9uMSkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9wcy5pc01haW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2ltYWdlL21haW5JbWFnZS5qcGcnKTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgIH1cclxuICAgIH19XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSVN0eWVsZERpdjIge1xyXG4gICAgaXNNYWluOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBTdHlsZWREaXYyID0gc3R5bGVkLmRpdmBcclxuICAgIG1heC13aWR0aDogJHttYXhXaWR0aH1weDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHM6IElTdHllbGREaXYyKSA9PiAocHJvcHMuaXNNYWluID8gJycgOiAnIzM0MjQnKX07XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHttYXhXaWR0aCArIDUwfXB4KSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogODJweDtcclxuICAgICAgICAkeyhwcm9wczogSVN0eWVsZERpdjIpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFwcm9wcy5pc01haW4pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMThweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMThweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH19XHJcbiAgICB9XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSVN0eWxlZERpdjMge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIHNob3dUaXRsZTogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgU3R5bGVkRGl2MyA9IHN0eWxlZC5kaXZgXHJcbiAgICAkeyhwcm9wczogSVN0eWxlZERpdjMpID0+IHtcclxuICAgICAgICBpZiAocHJvcHMudGl0bGUpIHtcclxuICAgICAgICAgICAgaWYgKHByb3BzLnNob3dUaXRsZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYWx5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhbHk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg2MHB4KTtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgIH1cclxuICAgIH19XHJcblxyXG4gICAgZGlzcGxheTogJHsocHJvcHM6IElTdHlsZWREaXYzKSA9PiAocHJvcHMudGl0bGUgPyAnYmxvY2snIDogJ25vbmUnKX07XHJcbiAgICBwYWRkaW5nOiAyNHB4IDA7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjhzO1xyXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkVGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyLjRlbTtcclxuYDtcclxuXHJcbmludGVyZmFjZSBJQmFzZUNvbXBvbmVudCB7XHJcbiAgICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG4gICAgaXNNYWluPzogYm9vbGVhbjtcclxuICAgIHRpdGxlPzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBCYXNlOiBSZWFjdC5GQzxJQmFzZUNvbXBvbmVudD4gPSAoeyBjaGlsZHJlbiwgaXNNYWluLCB0aXRsZSB9KTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgY29uc3QgW3Nob3dUaXRsZSwgc2V0U2hvd1RpdGxlXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBkaXYxUmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2hhbmdlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGl2MVJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmlubmVySGVpZ2h0ID49IGRpdjFSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyA0OCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFNob3dUaXRsZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1RpdGxlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBjaGFuZ2VTY3JvbGwpO1xyXG4gICAgICAgIGNoYW5nZVNjcm9sbCgpO1xyXG5cclxuICAgICAgICBpZiAoZGl2MVJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGRpdjFSZWYuY3VycmVudC5pZCA9IHRpdGxlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGNoYW5nZVNjcm9sbCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxTdHlsZWRTZWN0aW9uMSByZWY9e2RpdjFSZWZ9IGlzTWFpbj17aXNNYWlufT5cclxuICAgICAgICAgICAgICAgIDxTdHlsZWREaXYyIGlzTWFpbj17aXNNYWlufT5cclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRGl2MyB0aXRsZT17dGl0bGV9IHNob3dUaXRsZT17c2hvd1RpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFRpdGxlPiMge3RpdGxlfTwvU3R5bGVkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXYzPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8L1N0eWxlZERpdjI+XHJcbiAgICAgICAgICAgIDwvU3R5bGVkU2VjdGlvbjE+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFzZTtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmludGVyZmFjZSBJQ2FyZWVyIHtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IENhcmVlcjogUmVhY3QuRkM8SUNhcmVlcj4gPSAoeyB0aXRsZSB9KTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QmFzZSB0aXRsZT17dGl0bGV9PlxyXG4gICAgICAgICAgICA8cD5jYXJlZXI8L3A+XHJcbiAgICAgICAgPC9CYXNlPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmVlcjtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgbWF4V2lkdGggfSBmcm9tICcuLi9zdHlsZS9zdHlsZSc7XHJcblxyXG5jb25zdCBTdHllbGREaXYyID0gc3R5bGVkLmRpdmBcclxuICAgIG1hcmdpbjogMCAzMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE3cHg7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSVN0eWxlZERpdjMge1xyXG4gICAgZGlyZWN0aW9uPzogc3RyaW5nOyAvLyB0cnVl66m0IOyasOy4oSwg6re4IOyZuCDsoozsuKFcclxuICAgIGlubmVyV2lkdGg6IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgU3R5ZWxkRGl2MyA9IHN0eWxlZC5kaXZgXHJcbiAgICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcclxuICAgICR7KHByb3BzOiBJU3R5bGVkRGl2MykgPT4ge1xyXG4gICAgICAgIGlmIChwcm9wcy5pbm5lcldpZHRoIDwgbWF4V2lkdGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYDtcclxuICAgICAgICB9IGVsc2UgaWYgKHByb3BzLmRpcmVjdGlvbiA9PT0gJ3RydWUnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgYDtcclxuICAgICAgICB9XHJcbiAgICB9fVxyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkRGl2NCA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBtYXJnaW46IDQzcHggMjdweDtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZERpdjUgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtNDFweDtcclxuICAgIGxlZnQ6IC00MXB4O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTI1ZGVnKTtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZERpdjYgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtNDFweDtcclxuICAgIHJpZ2h0OiAtNDFweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDI1ZGVnKTtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZFNwYW4xID0gc3R5bGVkLnNwYW5gXHJcbiAgICBmb250LXNpemU6IDEuOGVtO1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkU3BhbjIgPSBzdHlsZWQuc3BhbmBcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSUludHJvIHtcclxuICAgIGlubmVyV2lkdGg6IG51bWJlcjtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IEludHJvOiBSZWFjdC5GQzxJSW50cm8+ID0gKHsgaW5uZXJXaWR0aCwgdGl0bGUgfSk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIGNvbnN0IGJveEFycmF5MSA9IFtcclxuICAgICAgICB7IHRpdGxlOiAn7J2066aEJywgZGVzY3JpcHRpb246ICfquYDshLHssKwnIH0sXHJcbiAgICAgICAgeyB0aXRsZTogJ+yDneuFhOyblOydvCcsIGRlc2NyaXB0aW9uOiAnOTQuMTIuMDknIH0sXHJcbiAgICBdO1xyXG4gICAgY29uc3QgYm94QXJyYXkyID0gW1xyXG4gICAgICAgIHsgdGl0bGU6ICfsnbTrqZTsnbwnLCBkZXNjcmlwdGlvbjogJ3RqZGNrc2RsMDBAbmF2ZXIuY29tJyB9LFxyXG4gICAgICAgIHsgdGl0bGU6ICfsl7Drnb3sspgnLCBkZXNjcmlwdGlvbjogJzAxMC0zMzYxLTM2MzMnIH0sXHJcbiAgICBdO1xyXG4gICAgY29uc3QgYm94QXJyYXkzID0gW1xyXG4gICAgICAgIHsgdGl0bGU6ICftlZnqtZAnLCBkZXNjcmlwdGlvbjogJ+2VnOyWkeuMgCBFUklDQScgfSxcclxuICAgICAgICB7IHRpdGxlOiAn7KO87KCE6rO1JywgZGVzY3JpcHRpb246ICfsnZHsmqnsiJjtlZknIH0sXHJcbiAgICAgICAgeyB0aXRsZTogJ+u2gOyghOqztScsIGRlc2NyaXB0aW9uOiAn7Lu07ZOo7YSw6rO17ZWZJyB9LFxyXG4gICAgXTtcclxuICAgIGNvbnN0IGJveEFycmF5NCA9IFtcclxuICAgICAgICB7IHRpdGxlOiAn6rK966ClJywgZGVzY3JpcHRpb246ICcx64WEIDPqsJzsm5QnIH0sXHJcbiAgICAgICAgeyB0aXRsZTogJ+q4sOyIoOu2hOyVvCcsIGRlc2NyaXB0aW9uOiAnRkUvQkUg7Ju5IOqwnOuwnCcgfSxcclxuICAgIF07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QmFzZSB0aXRsZT17dGl0bGV9PlxyXG4gICAgICAgICAgICA8U3R5ZWxkRGl2Mj5cclxuICAgICAgICAgICAgICAgIDxTdHllbGREaXYzIGlubmVyV2lkdGg9e2lubmVyV2lkdGh9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtib3hBcnJheTEubWFwKChib3gpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXY0IGtleT17Ym94LmRlc2NyaXB0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjE+e2JveC5kZXNjcmlwdGlvbn08L1N0eWxlZFNwYW4xPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXY1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjI+e2JveC50aXRsZX08L1N0eWxlZFNwYW4yPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2NT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2ND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvU3R5ZWxkRGl2Mz5cclxuXHJcbiAgICAgICAgICAgICAgICA8U3R5ZWxkRGl2MyBpbm5lcldpZHRoPXtpbm5lcldpZHRofSBkaXJlY3Rpb249eyd0cnVlJ30+XHJcbiAgICAgICAgICAgICAgICAgICAge2JveEFycmF5Mi5tYXAoKGJveCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZERpdjQga2V5PXtib3guZGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMT57Ym94LmRlc2NyaXB0aW9ufTwvU3R5bGVkU3BhbjE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZERpdjY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMj57Ym94LnRpdGxlfTwvU3R5bGVkU3BhbjI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXY2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXY0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9TdHllbGREaXYzPlxyXG5cclxuICAgICAgICAgICAgICAgIDxTdHllbGREaXYzIGlubmVyV2lkdGg9e2lubmVyV2lkdGh9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtib3hBcnJheTMubWFwKChib3gpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXY0IGtleT17Ym94LmRlc2NyaXB0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjE+e2JveC5kZXNjcmlwdGlvbn08L1N0eWxlZFNwYW4xPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXY1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjI+e2JveC50aXRsZX08L1N0eWxlZFNwYW4yPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2NT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2ND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvU3R5ZWxkRGl2Mz5cclxuXHJcbiAgICAgICAgICAgICAgICA8U3R5ZWxkRGl2MyBpbm5lcldpZHRoPXtpbm5lcldpZHRofSBkaXJlY3Rpb249eyd0cnVlJ30+XHJcbiAgICAgICAgICAgICAgICAgICAge2JveEFycmF5NC5tYXAoKGJveCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZERpdjQga2V5PXtib3guZGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMT57Ym94LmRlc2NyaXB0aW9ufTwvU3R5bGVkU3BhbjE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZERpdjY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMj57Ym94LnRpdGxlfTwvU3R5bGVkU3BhbjI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXY2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXY0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9TdHllbGREaXYzPlxyXG4gICAgICAgICAgICA8L1N0eWVsZERpdjI+XHJcbiAgICAgICAgPC9CYXNlPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEludHJvO1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XHJcbmltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBtYXhXaWR0aCB9IGZyb20gJy4uL3N0eWxlL3N0eWxlJztcclxuXHJcbmNvbnN0IFN0eWxlZERpdjEgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA4MnB4IDA7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSVN0eWVsZERpdjIge1xyXG4gICAgaW5uZXJXaWR0aDogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBTdHlsZWREaXYyID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6ICR7KHByb3BzOiBJU3R5ZWxkRGl2MikgPT4gKHByb3BzLmlubmVyV2lkdGggPj0gbWF4V2lkdGggPyAnYmxvY2snIDogJ25vbmUnKX07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDY4cHggMDtcclxuYDtcclxuXHJcbmNvbnN0IGRpdjNLZXlGcmFtZTEgPSBrZXlmcmFtZXNgXHJcbiAgICA1MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWREaXYzID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBhbmltYXRpb246IDEuOHMgJHtkaXYzS2V5RnJhbWUxfSBpbmZpbml0ZTtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZERpdjQgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTUycHg7XHJcbiAgICBoZWlnaHQ6IDE1MnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZDIzMjtcclxuICAgIG1hcmdpbjogMTZweCAzMnB4O1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkRGl2NSA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRUaXRsZSA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDQuOGVtO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRTdWJUaXRsZSA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkSDNfMSA9IHN0eWxlZC5oM2BgO1xyXG5cclxuY29uc3QgU3R5bGVkU3BhbjEgPSBzdHlsZWQuc3BhbmBcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElNYWluIHtcclxuICAgIGlubmVyV2lkdGg6IG51bWJlcjtcclxuICAgIHRpdGxlQXJyYXk6IHN0cmluZ1tdO1xyXG59XHJcblxyXG5jb25zdCBNYWluOiBSZWFjdC5GQzxJTWFpbj4gPSAoeyBpbm5lcldpZHRoLCB0aXRsZUFycmF5IH0pOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICBjb25zdCBvbkNsaWNrRGl2MyA9ICh0aXRsZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGl0bGVTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGl0bGUpO1xyXG5cclxuICAgICAgICBpZiAodGl0bGVTZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHRpdGxlU2VjdGlvbi5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJhc2UgaXNNYWluPXt0cnVlfT5cclxuICAgICAgICAgICAgPFN0eWxlZERpdjU+XHJcbiAgICAgICAgICAgICAgICA8U3R5bGVkRGl2MiBpbm5lcldpZHRoPXtpbm5lcldpZHRofT5cclxuICAgICAgICAgICAgICAgICAgICB7dGl0bGVBcnJheS5tYXAoKHRpdGxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRGl2MyBrZXk9e3RpdGxlfSBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrRGl2Myh0aXRsZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXY0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkSDNfMT57dGl0bGV9PC9TdHlsZWRIM18xPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjE+R28g4oaSPC9TdHlsZWRTcGFuMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZERpdjQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZERpdjM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L1N0eWxlZERpdjI+XHJcblxyXG4gICAgICAgICAgICAgICAgPFN0eWxlZERpdjE+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFRpdGxlPuq5gOyEseywrOydmCBQb3J0Zm9saW88L1N0eWxlZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTdWJUaXRsZT5TaW5jZSAyMDIxPC9TdHlsZWRTdWJUaXRsZT5cclxuICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2MT5cclxuICAgICAgICAgICAgPC9TdHlsZWREaXY1PlxyXG4gICAgICAgIDwvQmFzZT5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluO1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgU3R5bGVkRGl2MSA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwIDIycHg7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTcwcHgpIHtcclxuICAgICAgICBoZWlnaHQ6IDk2MHB4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4NDBweCkge1xyXG4gICAgICAgIGhlaWdodDogNjQwcHg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkRGl2MiA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogMjQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1NHB4O1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkRGl2MyA9IHN0eWxlZC5kaXZgXHJcbiAgICBwYWRkaW5nOiA4cHggMDtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZERpdjQgPSBzdHlsZWQuZGl2YGA7XHJcblxyXG5jb25zdCBTdHlsZWRTcGFuMSA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEuNmVtO1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElTa2lsbCB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBTa2lsbHM6IFJlYWN0LkZDPElTa2lsbD4gPSAoeyB0aXRsZSB9KTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QmFzZSB0aXRsZT17dGl0bGV9PlxyXG4gICAgICAgICAgICA8U3R5bGVkRGl2MT5cclxuICAgICAgICAgICAgICAgIDxTdHlsZWREaXYyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXYzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjE+RkU8L1N0eWxlZFNwYW4xPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2Mz5cclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRGl2ND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2UvZmUuUE5HXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZERpdjQ+XHJcbiAgICAgICAgICAgICAgICA8L1N0eWxlZERpdjI+XHJcblxyXG4gICAgICAgICAgICAgICAgPFN0eWxlZERpdjI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZERpdjM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMT5EZXZvcHM8L1N0eWxlZFNwYW4xPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2Mz5cclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRGl2ND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2UvZGV2b3BzLlBOR1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXY0PlxyXG4gICAgICAgICAgICAgICAgPC9TdHlsZWREaXYyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxTdHlsZWREaXYyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXYzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjE+RGV2ZWxvcG1lbnQ8L1N0eWxlZFNwYW4xPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2Mz5cclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRGl2ND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2UvZGV2ZWxvcG1lbnQuUE5HXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZERpdjQ+XHJcbiAgICAgICAgICAgICAgICA8L1N0eWxlZERpdjI+XHJcblxyXG4gICAgICAgICAgICAgICAgPFN0eWxlZERpdjI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZERpdjM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMT5CRTwvU3R5bGVkU3BhbjE+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXYzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXY0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZS9iZS5QTkdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2ND5cclxuICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2Mj5cclxuICAgICAgICAgICAgPC9TdHlsZWREaXYxPlxyXG4gICAgICAgIDwvQmFzZT5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTa2lsbHM7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBTdHlsZWREaXYxID0gc3R5bGVkLmRpdmBcclxuICAgIG1hcmdpbjogMCAyNHB4O1xyXG4gICAgcGFkZGluZzogMjJweCAwIDUzcHggMDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkRGl2MiA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAzMnB4IDI0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZFNwYW4xID0gc3R5bGVkLnNwYW5gXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZFNwYW4yID0gc3R5bGVkLnNwYW5gXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuYDtcclxuXHJcbmludGVyZmFjZSBJV2h5SXQge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgV2h5SXQ6IFJlYWN0LkZDPElXaHlJdD4gPSAoeyB0aXRsZSB9KTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QmFzZSB0aXRsZT17dGl0bGV9PlxyXG4gICAgICAgICAgICA8U3R5bGVkRGl2MT5cclxuICAgICAgICAgICAgICAgIDxTdHlsZWREaXYyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMT5JVOulvCDsmZwg7Iuc7J6R7ZWY6rKMIOuQmOyXiOydhOq5jD88L1N0eWxlZFNwYW4xPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMj7snbTrn7Ag7J207JygIOuVjOusuOydtOuLpC4g7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuIOydtOufsCDsnbTsnKAg65WM66y47J2064ukLjwvU3R5bGVkU3BhbjI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4yPuydtOufsCDsnbTsnKAg65WM66y47J2064ukLjwvU3R5bGVkU3BhbjI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4yPuydtOufsCDsnbTsnKAg65WM66y47J2064ukLjwvU3R5bGVkU3BhbjI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4yPuydtOufsCDsnbTsnKAg65WM66y47J2064ukLjwvU3R5bGVkU3BhbjI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4yPuydtOufsCDsnbTsnKAg65WM66y47J2064ukLjwvU3R5bGVkU3BhbjI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4yPuydtOufsCDsnbTsnKAg65WM66y47J2064ukLjwvU3R5bGVkU3BhbjI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4yPuydtOufsCDsnbTsnKAg65WM66y47J2064ukLiDsnbTrn7Ag7J207JygIOuVjOusuOydtOuLpC4g7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuPC9TdHlsZWRTcGFuMj5cclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjI+7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuIOydtOufsCDsnbTsnKAg65WM66y47J2064ukLiDsnbTrn7Ag7J207JygIOuVjOusuOydtOuLpC48L1N0eWxlZFNwYW4yPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMj7snbTrn7Ag7J207JygIOuVjOusuOydtOuLpC4g7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuIOydtOufsCDsnbTsnKAg65WM66y47J2064ukLjwvU3R5bGVkU3BhbjI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4yPuydtOufsCDsnbTsnKAg65WM66y47J2064ukLiDsnbTrn7Ag7J207JygIOuVjOusuOydtOuLpC4g7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuPC9TdHlsZWRTcGFuMj5cclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjI+7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuIOydtOufsCDsnbTsnKAg65WM66y47J2064ukLiDsnbTrn7Ag7J207JygIOuVjOusuOydtOuLpC48L1N0eWxlZFNwYW4yPlxyXG4gICAgICAgICAgICAgICAgPC9TdHlsZWREaXYyPlxyXG4gICAgICAgICAgICA8L1N0eWxlZERpdjE+XHJcbiAgICAgICAgPC9CYXNlPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdoeUl0O1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgTWFpbiBmcm9tICcuLi9jb21wb25lbnQvbWFpbic7XHJcbmltcG9ydCBJbnRybyBmcm9tICcuLi9jb21wb25lbnQvaW50cm8nO1xyXG5pbXBvcnQgV2h5SXQgZnJvbSAnLi4vY29tcG9uZW50L3doeUl0JztcclxuaW1wb3J0IFNraWxscyBmcm9tICcuLi9jb21wb25lbnQvc2tpbGxzJztcclxuaW1wb3J0IENhcmVlciBmcm9tICcuLi9jb21wb25lbnQvY2FyZWVyJztcclxuXHJcbmNvbnN0IFN0eWxlZERpdjEgPSBzdHlsZWQuZGl2YGA7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICBjb25zdCBbaW5uZXJXaWR0aCwgc2V0SW5uZXJXaWR0aF0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KDApO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlQXJyYXkgPSBbJ0ludHJvJywgJ1doeSBJdCcsICdTa2lsbHMnLCAnQ2FyZWVyJywgJ1Byb2plY3RzJywgJ01vcmUnXTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNoYW5nZUlubmVyV2lkdGggPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldElubmVyV2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHNldElubmVyV2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBjaGFuZ2VJbm5lcldpZHRoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGNoYW5nZUlubmVyV2lkdGgpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8U3R5bGVkRGl2MT5cclxuICAgICAgICAgICAgICAgIDxNYWluIGlubmVyV2lkdGg9e2lubmVyV2lkdGh9IHRpdGxlQXJyYXk9e3RpdGxlQXJyYXl9IC8+XHJcbiAgICAgICAgICAgICAgICA8SW50cm8gaW5uZXJXaWR0aD17aW5uZXJXaWR0aH0gdGl0bGU9e3RpdGxlQXJyYXlbMF19IC8+XHJcbiAgICAgICAgICAgICAgICA8V2h5SXQgdGl0bGU9e3RpdGxlQXJyYXlbMV19IC8+XHJcbiAgICAgICAgICAgICAgICA8U2tpbGxzIHRpdGxlPXt0aXRsZUFycmF5WzJdfSAvPlxyXG4gICAgICAgICAgICAgICAgPENhcmVlciB0aXRsZT17dGl0bGVBcnJheVszXX0gLz5cclxuICAgICAgICAgICAgPC9TdHlsZWREaXYxPlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIiwiZXhwb3J0IGNvbnN0IG1heFdpZHRoID0gOTYwO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==