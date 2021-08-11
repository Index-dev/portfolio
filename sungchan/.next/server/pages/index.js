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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/actions */ "./modules/actions.tsx");


var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\component\\base.tsx";




const transitionDuration = 1;
const BaseContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "base__BaseContainer",
  componentId: "sc-1ugehyd-0"
})(["height:93vh;width:100%;position:relative;display:flex;align-items:center;background-color:", ";transition-duration:", "s;transition-timing-function:ease-in;transform-origin:center top;top:0;box-shadow:2px 0px 6px rgba(0,0,0,0.1),-2px 0px 6px rgba(0,0,0,0.1);"], props => props.backgroundColor, transitionDuration);
const MainContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "base__MainContainer",
  componentId: "sc-1ugehyd-1"
})(["transition-duration:", "s;height:calc(100% - 52px);margin-top:52px;&::-webkit-scrollbar{display:none;}"], transitionDuration);
const PostItContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "base__PostItContainer",
  componentId: "sc-1ugehyd-2"
})(["position:absolute;top:", "px;left:-110px;"], props => props.componentNo * 33);
const PostItSection = styled_components__WEBPACK_IMPORTED_MODULE_3___default().section.withConfig({
  displayName: "base__PostItSection",
  componentId: "sc-1ugehyd-3"
})(["display:flex;align-items:center;"]);
const PostItColorDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "base__PostItColorDiv",
  componentId: "sc-1ugehyd-4"
})(["background-color:", ";width:20px;height:30px;"], props => props.backgroundColor);
const PostItTextDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "base__PostItTextDiv",
  componentId: "sc-1ugehyd-5"
})(["display:flex;justify-content:center;align-items:center;width:90px;height:30px;background-color:#fbf8e5;"]);
const ChainContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "base__ChainContainer",
  componentId: "sc-1ugehyd-6"
})(["position:absolute;display:flex;justify-content:center;top:0;left:0;right:0;z-index:1000;"]);
const ChainSection = styled_components__WEBPACK_IMPORTED_MODULE_3___default().section.withConfig({
  displayName: "base__ChainSection",
  componentId: "sc-1ugehyd-7"
})(["display:flex;flex-direction:column;align-items:center;margin:0 32px;"]);
const ChainFrame = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "base__ChainFrame",
  componentId: "sc-1ugehyd-8"
})(["width:10px;height:40px;background-color:red;z-index:1;border-radius:0 0 12px 12px;"]);
const ChainCircle = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "base__ChainCircle",
  componentId: "sc-1ugehyd-9"
})(["width:20px;height:20px;border-radius:50%;background-color:#fff;transform:translateY(-14px);"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "base__Title",
  componentId: "sc-1ugehyd-10"
})(["font-weight:600;transition:", "s;color:rgba(0,0,0,0.6);"], transitionDuration);

const Base = ({
  children,
  componentNo
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(); // redux

  const currentComponentNo = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.baseReducer.currentComponentNo);
  const titleArray = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.baseReducer.titleArray);
  const backgroundColorArray = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.baseReducer.backgroundColorArray);
  const isPageChanging = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.baseReducer.isPageChanging); // state

  const [isTop, setIsTop] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
  const [isBottom, setIsBottom] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false); // ref

  const baseContainerRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef();
  const mainContainerRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef();
  const titleRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(); // useEffect

  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    // 공통
    mainContainerRef.current.style.overflow = 'hidden';

    if (currentComponentNo === componentNo) {
      // 현재 페이지일 경우
      baseContainerRef.current.style.position = 'absolute';
      baseContainerRef.current.style.display = 'block';
      baseContainerRef.current.style.transform = ``;
      baseContainerRef.current.style.zIndex = `${100 - componentNo}`;
      mainContainerRef.current.style.opacity = '';
      mainContainerRef.current.scrollTo(0, 0); // 페이지 스크롤 최상위로

      titleRef.current.style.opacity = '';
      setIsTop(true); // 스크롤은 최상단

      if (mainContainerRef.current.clientHeight === mainContainerRef.current.scrollHeight) {
        // 페이지의 전체크기가 화면 크기와 동일할 경우 스크롤은 최하단도 포함
        setIsBottom(true);
      } else {
        setIsBottom(false);
      }
    } else if (currentComponentNo > componentNo) {
      // 지나간 페이지일 경우
      baseContainerRef.current.style.position = 'fixed';
      baseContainerRef.current.style.display = 'block';
      baseContainerRef.current.style.transform = `rotateX(180deg)`;
      baseContainerRef.current.style.zIndex = `${80 + componentNo}`;
      mainContainerRef.current.style.opacity = '0.05';
      titleRef.current.style.opacity = '0.05';
    } else {
      // 지나가지 않은 페이지일 경우
      baseContainerRef.current.style.position = 'absolute';
      baseContainerRef.current.style.display = 'block';
      baseContainerRef.current.style.transform = ``;
      baseContainerRef.current.style.zIndex = `${80 - componentNo}`;
      mainContainerRef.current.style.opacity = '';
      titleRef.current.style.opacity = '';
    }

    dispatch((0,_modules_actions__WEBPACK_IMPORTED_MODULE_4__.setIsPageChangingAction)(true));
    setTimeout(() => {
      if (currentComponentNo === componentNo) {
        mainContainerRef.current.style.overflow = 'auto';
      }

      dispatch((0,_modules_actions__WEBPACK_IMPORTED_MODULE_4__.setIsPageChangingAction)(false));
    }, transitionDuration * 1000);
  }, [currentComponentNo]); // onClick

  const onClickPostIt = componentNo => {
    // 페이지 이동이 이루어지고 있는 경우
    if (isPageChanging) {
      return;
    }

    dispatch((0,_modules_actions__WEBPACK_IMPORTED_MODULE_4__.setCurrentComponentNoAction)(componentNo));
  }; // onScroll


  const onScrollMainContainer = e => {
    // 페이지 이동이 이루어지고 있는 경우
    if (isPageChanging) {
      return;
    } // 현재 페이지가 아닌 경우 스크롤기능 중단


    if (currentComponentNo !== componentNo) {
      return;
    } // 페이지 상단에 있는 경우


    if (e.currentTarget.scrollTop === 0) {
      setIsTop(true);
    } else {
      setIsTop(false);
    } // 페이지 하단에 있는 경우


    if (e.currentTarget.scrollTop + e.currentTarget.clientHeight >= e.currentTarget.scrollHeight) {
      setIsBottom(true);
    } else {
      setIsBottom(false);
    }
  }; // onWheel


  const onWheelMainContainer = e => {
    // 페이지 이동이 이루어지고 있는 경우
    if (isPageChanging) {
      return;
    } // 현재 페이지가 아닌 경우 휠기능 중단


    if (currentComponentNo !== componentNo) {
      return;
    } // 페이지의 끝에 도달하고 위로 스크롤 했을 경우


    if (isTop && e.nativeEvent.deltaY < 0) {
      onClickPostIt(componentNo - 1);
    } // 페이지의 끝에 도달하고 아래로 스크롤 했을 경우


    if (isBottom && e.nativeEvent.deltaY > 0) {
      // 현재 컴포넌트 번호가 마지막이 아닐 경우에만 페이지 넘기기
      if (currentComponentNo < titleArray.length - 1) {
        onClickPostIt(componentNo + 1);
      }
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BaseContainer, {
      ref: baseContainerRef,
      backgroundColor: backgroundColorArray[componentNo],
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainContainer, {
        ref: mainContainerRef,
        onScroll: onScrollMainContainer,
        onWheel: onWheelMainContainer,
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostItContainer, {
        componentNo: componentNo,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostItSection, {
          onClick: () => onClickPostIt(componentNo),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostItColorDiv, {
            backgroundColor: backgroundColorArray[componentNo]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 261,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostItTextDiv, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {
              ref: titleRef,
              children: titleArray[componentNo]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 263,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 262,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 260,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainSection, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainFrame, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 270,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainCircle, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 271,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainSection, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainFrame, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 274,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainCircle, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 275,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 273,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainSection, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainFrame, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 278,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainCircle, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 279,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 277,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainSection, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainFrame, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 282,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainCircle, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 283,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainSection, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainFrame, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 286,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainCircle, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 287,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainSection, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainFrame, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 290,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainCircle, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 291,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainSection, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainFrame, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 294,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainCircle, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 295,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 293,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainSection, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainFrame, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 298,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainCircle, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 299,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 297,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainSection, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainFrame, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 302,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainCircle, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 303,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 301,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainSection, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainFrame, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 306,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainCircle, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 307,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 305,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainSection, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainFrame, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 310,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainCircle, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 311,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 309,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 254,
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\component\\career.tsx";




const CareerContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "career__CareerContainer",
  componentId: "sc-10mcn0j-0"
})(["position:relative;border-radius:0 12px 12px 12px;background-color:#fff;margin:50px 18px 65px 18px;box-shadow:2px 0 4px #c8c8c8 inset,-2px -4px 4px #c8c8c8 inset;"]);
const ImageDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "career__ImageDiv",
  componentId: "sc-10mcn0j-1"
})(["margin:18px 25px;"]);
const TitleSection = styled_components__WEBPACK_IMPORTED_MODULE_3___default().section.withConfig({
  displayName: "career__TitleSection",
  componentId: "sc-10mcn0j-2"
})(["position:absolute;display:flex;align-items:center;top:-40px;left:0;height:40px;background-color:#fff;border-radius:12px 12px 0 0;padding:0 12px;box-shadow:2px 4px 4px #c8c8c8 inset,-2px 0 4px #c8c8c8 inset;"]);
const ContentsSection = styled_components__WEBPACK_IMPORTED_MODULE_3___default().section.withConfig({
  displayName: "career__ContentsSection",
  componentId: "sc-10mcn0j-3"
})(["display:flex;justify-content:space-around;flex-wrap:wrap;padding:0 16px;@media screen and (min-width:700px){flex-wrap:nowrap;}"]);
const TextDescriptionDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "career__TextDescriptionDiv",
  componentId: "sc-10mcn0j-4"
})([""]);
const PictureContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "career__PictureContainer",
  componentId: "sc-10mcn0j-5"
})(["position:fixed;width:100%;height:100vh;background-color:rgba(0,0,0,0.5);display:none;justify-content:center;align-items:center;z-index:101;top:0;cursor:pointer;"]);
const PuzzleSection = styled_components__WEBPACK_IMPORTED_MODULE_3___default().section.withConfig({
  displayName: "career__PuzzleSection",
  componentId: "sc-10mcn0j-6"
})(["padding-left:25px;"]);
const PuzzleDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "career__PuzzleDiv",
  componentId: "sc-10mcn0j-7"
})(["position:relative;display:flex;justify-content:center;align-items:center;width:100px;height:40px;background-color:#fff;margin:40px 0 100px 0;transform:rotate(-16deg);box-shadow:2px 2px 4px rgba(0,0,0,0.5);@media screen and (min-width:700px){width:160px;height:60px;box-shadow:3px 3px 6px rgba(0,0,0,0.5);}"]);
const PuzzleLeft = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "career__PuzzleLeft",
  componentId: "sc-10mcn0j-8"
})(["position:absolute;background-color:#fff;border-radius:50%;width:20px;height:20px;top:10px;left:-10px;@media screen and (min-width:700px){width:30px;height:30px;left:-15px;top:15px;}"]);
const PuzzleRight = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "career__PuzzleRight",
  componentId: "sc-10mcn0j-9"
})(["position:absolute;background-color:", ";border-radius:50%;width:20px;height:20px;top:10px;right:-10px;box-shadow:inset 2px 1px 0px rgba(0,0,0,0.5);@media screen and (min-width:700px){width:30px;height:30px;top:15px;right:-15px;}"], props => props.backgroundColor);
const PuzzleTop = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "career__PuzzleTop",
  componentId: "sc-10mcn0j-10"
})(["position:absolute;background-color:#fff;border-radius:50%;width:20px;height:20px;top:-10px;left:40px;@media screen and (min-width:700px){width:30px;height:30px;top:-15px;left:65px;}"]);
const CareerTitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "career__CareerTitle",
  componentId: "sc-10mcn0j-11"
})(["color:", ";font-weight:600;font-size:min(1.3em,0.8em + 1.2vw);"], props => props.color);
const TextDescription = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "career__TextDescription",
  componentId: "sc-10mcn0j-12"
})(["display:block;margin:18px 0;font-weight:600;font-size:min(1.1em,0.7em + 1.1vw);padding:8px 0;border-bottom:1px solid rgba(0,0,0,0.4);", ""], props => {
  if (props.type === 'camera') {
    return `
                color: rgba(0, 0, 0, 0.7);
                &:before {
                    display: inline-block;
                    width: 26px;
                    content: '\f030';
                    font-family: FontAwesome;
                    color: ${props.backgroundColor};
                    cursor: url(${props.src}), pointer;
                }
            `;
  } else if (props.type === 'calendar') {
    return `
                color: rgba(0, 0, 0, 0.7);
                &:before {
                    display: inline-block;
                    width: 26px;
                    content: '\f272';
                    font-family: FontAwesome;
                    color: ${props.backgroundColor};
                }
            `;
  } else if (props.type === 'position') {
    return `
                color: rgba(0, 0, 0, 0.7);
                &:before {
                    display: inline-block;
                    width: 26px;
                    content: '\f2bb';
                    font-family: FontAwesome;
                    color: ${props.backgroundColor};
                }
            `;
  } else {
    return `
                color: rgba(0, 0, 0, 0.7);
                &:before {
                    display: inline-block;
                    width: 26px;
                    content: '\f005';
                    font-family: FontAwesome;
                    color: ${props.backgroundColor};
                }
            `;
  }
});
const PuzzleTitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "career__PuzzleTitle",
  componentId: "sc-10mcn0j-13"
})(["font-weight:600;font-size:1.2em;@media screen and (min-width:700px){font-size:1.5em;}"]);
const CareerImage = styled_components__WEBPACK_IMPORTED_MODULE_3___default().img.withConfig({
  displayName: "career__CareerImage",
  componentId: "sc-10mcn0j-14"
})(["width:min(20em,calc(15em + 10vw));"]);
const PictureImage = styled_components__WEBPACK_IMPORTED_MODULE_3___default().img.withConfig({
  displayName: "career__PictureImage",
  componentId: "sc-10mcn0j-15"
})(["margin:20px;max-width:calc(100% - 28px);max-height:calc(100% - 28px);"]);

const Career = ({
  componentNo
}) => {
  // redux
  const backgroundColorArray = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.baseReducer.backgroundColorArray); // state

  const [pictureImage, setPictureImage] = react__WEBPACK_IMPORTED_MODULE_1__.useState(''); // ref

  const pictureContainerRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(); // onClick

  const onClickCamera = (e, img) => {
    if (pictureContainerRef.current) {
      e.stopPropagation();
      setPictureImage(img);
      pictureContainerRef.current.style.display = 'flex';
    }
  };

  const onClickPictureContainer = () => {
    if (pictureContainerRef.current) {
      setPictureImage('');
      pictureContainerRef.current.style.display = 'none';
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_base__WEBPACK_IMPORTED_MODULE_2__.default, {
      componentNo: componentNo,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PuzzleSection, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PuzzleDiv, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PuzzleLeft, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 266,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PuzzleRight, {
            backgroundColor: backgroundColorArray[componentNo]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 267,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PuzzleTop, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 268,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PuzzleTitle, {
            children: "\uACBD\uB825"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 269,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CareerContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleSection, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CareerTitle, {
            color: '#33bdda',
            children: "\uC0BC\uC131 \uCCAD\uB144 \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uC544\uCE74\uB370\uBBF8"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 275,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentsSection, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageDiv, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CareerImage, {
              src: "/image/ssafy1.PNG"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 280,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 279,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescriptionDiv, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "calendar",
              children: "19.07 ~ 20.03"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 284,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "camera",
              src: "/image/topScore_mini.png",
              onClick: e => onClickCamera(e, '/image/topScore.jpg'),
              children: "1\uD559\uAE30 \uBC18 \uB300\uD45C \uC131\uC801 \uC6B0\uC218\uC0C1 \uCDE8\uB4DD"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 287,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "camera",
              src: "/image/abroadEducation_mini.png",
              onClick: e => onClickCamera(e, '/image/abroadEducation.jpg'),
              children: "\uD574\uC678 \uC5F0\uC218 \uB300\uC0C1\uC790\uB85C \uBC1C\uD0C1"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 295,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "\uC6F9 \uAE30\uBC18 \uAE30\uCD08 \uBC0F \uC2EC\uD654 \uAD50\uC721 \uC218\uAC15"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 303,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "camera",
              src: "/image/swexpertScore_mini.png",
              onClick: e => onClickCamera(e, '/image/swexpertScore.PNG'),
              children: "\uC0BC\uC131 SW \uC5ED\uB7C9 \uD14C\uC2A4\uD2B8 A+ \uCDE8\uB4DD"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 306,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 283,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CareerContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleSection, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CareerTitle, {
            color: '#032970',
            children: "\uD604\uB300 \uC624\uD1A0\uC5D0\uBC84"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 320,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 319,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentsSection, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageDiv, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CareerImage, {
              src: "/image/autoever1.PNG"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 325,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 324,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescriptionDiv, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "calendar",
              children: "20.03 ~ \uD604\uC7AC"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 329,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "position",
              children: "\uC790\uB3D9\uCC28 \uD488\uC9C8 \uAC1C\uC120 \uC2DC\uC2A4\uD15C FE/BE \uAC1C\uBC1C \uBC0F \uC6B4\uC601"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 332,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "\uD300 \uB0B4 Git \uB3C4\uC785 \uBC0F \uC0AC\uB0B4 \uC9C1\uC6D0\uB4E4\uC5D0\uAC8C Git\uC0AC\uC6A9 \uBC29\uBC95 \uAD50\uC721 \uB2F4\uB2F9"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 335,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "\uD300 \uB0B4 \uC2E0\uAE30\uC220 \uC801\uC6A9 \uB2F4\uB2F9"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 338,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "\uC11C\uBE44\uC2A4 \uD6A8\uC728\uD654\uB97C \uC704\uD55C \uC2DC\uC2A4\uD15C \uAC1C\uD3B8 \uD504\uB85C\uC81D\uD2B8 \uC9C4\uD589"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 341,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "React \uCD5C\uC801\uD654 \uC791\uC5C5\uC744 \uD1B5\uD55C \uC11C\uBE44\uC2A4 \uC18D\uB3C4 \uAC1C\uC120"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 344,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "\uC678\uBD80 \uC2DC\uC2A4\uD15C\uACFC \uC5F0\uACC4\uB97C \uC704\uD55C \uACF5\uC6A9 Rest API \uAC1C\uBC1C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 347,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 328,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 323,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 318,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PictureContainer, {
      ref: pictureContainerRef,
      onClick: onClickPictureContainer,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PictureImage, {
        src: pictureImage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 356,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Career);

/***/ }),

/***/ "./component/init.tsx":
/*!****************************!*\
  !*** ./component/init.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/actions */ "./modules/actions.tsx");

var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\component\\init.tsx";




const Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "init__Container",
  componentId: "sc-tfk24z-0"
})(["position:fixed;width:100vw;height:100vh;background-color:#000;z-index:100;"]);
const TitleDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "init__TitleDiv",
  componentId: "sc-tfk24z-1"
})(["padding:10px;overflow-wrap:anywhere;"]);
const MainSection = styled_components__WEBPACK_IMPORTED_MODULE_3___default().section.withConfig({
  displayName: "init__MainSection",
  componentId: "sc-tfk24z-2"
})(["display:flex;width:100%;height:100%;justify-content:center;align-items:center;flex-direction:column;"]);
const MainTitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "init__MainTitle",
  componentId: "sc-tfk24z-3"
})(["color:#fff;font-size:1.4em;"]);
const ColorSpan = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "init__ColorSpan",
  componentId: "sc-tfk24z-4"
})(["color:", ";font-weight:600;"], props => props.color);
const TitleCursor = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "init__TitleCursor",
  componentId: "sc-tfk24z-5"
})(["border-right:7px solid #fff;border-left:6px solid #000;display:none;"]);

const Init = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(); // ref

  const containerRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef();
  const typingStringRef1 = react__WEBPACK_IMPORTED_MODULE_1__.useRef();
  const typingStringRef2 = react__WEBPACK_IMPORTED_MODULE_1__.useRef();
  const typingStringRef3 = react__WEBPACK_IMPORTED_MODULE_1__.useRef();
  const typingStringRef4 = react__WEBPACK_IMPORTED_MODULE_1__.useRef();
  const typingStringRef5 = react__WEBPACK_IMPORTED_MODULE_1__.useRef();
  const typingStringRef6 = react__WEBPACK_IMPORTED_MODULE_1__.useRef();
  const typingStringRef7 = react__WEBPACK_IMPORTED_MODULE_1__.useRef();
  const typingStringRef8 = react__WEBPACK_IMPORTED_MODULE_1__.useRef();
  const typingCursor1 = react__WEBPACK_IMPORTED_MODULE_1__.useRef();
  const typingCursor2 = react__WEBPACK_IMPORTED_MODULE_1__.useRef();
  const typingCursor3 = react__WEBPACK_IMPORTED_MODULE_1__.useRef();
  const typingCursor4 = react__WEBPACK_IMPORTED_MODULE_1__.useRef(); // variable

  const time = 100;
  const strings = ['C:\\Users\\User\\Desktop\\portfolio\\sungchan>', 'npm', ' run start ', 'ready', ' - started portfolio of sungchan, url: https://kscportfolio.com', 'wait', ' - compiling...', 'event', ' - compiled succesfully'];
  const stringObjs = [{
    string: strings[0],
    start: 0,
    length: 0
  }, {
    string: strings[1],
    start: 0,
    length: time * strings[1].length
  }, {
    string: strings[2],
    start: time * strings[1].length,
    length: time * strings[2].length
  }, {
    string: strings[3],
    start: time * (strings[1].length + strings[2].length + strings[3].length),
    length: 0
  }, {
    string: strings[4],
    start: time * (strings[1].length + strings[2].length + strings[3].length),
    length: 0
  }, {
    string: strings[5],
    start: time * (strings[1].length + strings[2].length + strings[3].length + strings[5].length),
    length: 0
  }, {
    string: strings[6],
    start: time * (strings[1].length + strings[2].length + strings[3].length + strings[5].length),
    length: 0
  }, {
    string: strings[7],
    start: time * (strings[1].length + strings[2].length + strings[3].length + strings[5].length + strings[7].length),
    length: 0
  }, {
    string: strings[8],
    start: time * (strings[1].length + strings[2].length + strings[3].length + strings[5].length + strings[7].length),
    length: 0
  }];
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    setTypingStringAction1(typingStringRef1, 1);
    setTypingStringAction1(typingStringRef2, 2);
    setTypingStringAction2(typingStringRef3, 3);
    setTypingStringAction2(typingStringRef4, 4);
    setTypingStringAction2(typingStringRef5, 5);
    setTypingStringAction2(typingStringRef6, 6);
    setTypingStringAction2(typingStringRef7, 7);
    setTypingStringAction2(typingStringRef8, 8);
    setTypingCursorAction(typingCursor1, 0, stringObjs[2].start + stringObjs[2].length);
    setTypingCursorAction(typingCursor2, stringObjs[2].start + stringObjs[2].length, stringObjs[3].start);
    setTypingCursorAction(typingCursor3, stringObjs[3].start, stringObjs[5].start);
    setTypingCursorAction(typingCursor4, stringObjs[5].start, stringObjs[7].start);
    setTimeout(() => {
      dispatch((0,_modules_actions__WEBPACK_IMPORTED_MODULE_4__.setIsEndAction)(true));
    }, stringObjs[7].start + time * 5);
  }, []); // 타이핑 처리가 이루어지는 액션 (글자 하나씩)

  const setTypingStringAction1 = (ref, index) => // 사용될 string obj 인덱스
  {
    if (ref.current) {
      setTimeout(() => {
        let charIndex = 0;
        ref.current.innerHTML = '';
        const typingInterval = setInterval(() => {
          ref.current.innerHTML = ref.current.innerHTML + stringObjs[index].string[charIndex++];
        }, time);
        setTimeout(() => {
          clearInterval(typingInterval);
        }, stringObjs[index].length);
      }, stringObjs[index].start);
    }
  }; // 타이핑 처리가 이루어지는 액션 (문장 하나씩)


  const setTypingStringAction2 = (ref, index) => // 사용될 string obj 인덱스
  {
    if (ref.current) {
      setTimeout(() => {
        ref.current.innerHTML = stringObjs[index].string;
      }, stringObjs[index].start);
    }
  };

  const setTypingCursorAction = (ref, start, length) => // 액션 길이
  {
    if (ref.current) {
      setTimeout(() => {
        ref.current.style.display = 'inline';
      }, start);
      setTimeout(() => {
        ref.current.style.display = 'none';
      }, length);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {
    ref: containerRef,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainSection, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleDiv, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainTitle, {
          children: stringObjs[0].string
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainTitle, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ColorSpan, {
            color: "#fff100",
            ref: typingStringRef1
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            ref: typingStringRef2
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleCursor, {
          ref: typingCursor1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleDiv, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainTitle, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ColorSpan, {
            color: "#229300",
            ref: typingStringRef3
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 218,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            ref: typingStringRef4
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleCursor, {
          ref: typingCursor2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleDiv, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainTitle, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ColorSpan, {
            color: "#006a7c",
            ref: typingStringRef5
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            ref: typingStringRef6
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleCursor, {
          ref: typingCursor3
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleDiv, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainTitle, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ColorSpan, {
            color: "#68008a",
            ref: typingStringRef7
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 232,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            ref: typingStringRef8
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 233,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleCursor, {
          ref: typingCursor4
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 205,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Init);

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base */ "./component/base.tsx");

var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\component\\intro.tsx";
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



const IntroContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "intro__IntroContainer",
  componentId: "sc-1aywpbq-0"
})(["height:calc(100% - 56px);padding:28px 22px;"]);
const ContentsSection = styled_components__WEBPACK_IMPORTED_MODULE_2___default().section.withConfig({
  displayName: "intro__ContentsSection",
  componentId: "sc-1aywpbq-1"
})(["display:grid;grid-template-columns:3fr 7fr;align-items:center;border-bottom:1px solid rgba(0,0,0,0.4);padding-bottom:8px;margin-bottom:22px;height:", "px;"], props => props.height);
const ContentsTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default().span.withConfig({
  displayName: "intro__ContentsTitle",
  componentId: "sc-1aywpbq-2"
})(["font-weight:600;font-size:min(calc(0.8em + 0.8vw),1.1em);color:rgba(0,0,0,0.4);"]);
const ContentsDescription = styled_components__WEBPACK_IMPORTED_MODULE_2___default().span.withConfig({
  displayName: "intro__ContentsDescription",
  componentId: "sc-1aywpbq-3"
})(["font-weight:600;font-size:min(calc(1em + 1vw),1.8em);"]);

const Intro = ({
  componentNo
}) => {
  // state
  const [addSections, setAddSections] = react__WEBPACK_IMPORTED_MODULE_1__.useState([]); // ref

  const introContainerRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef();
  const contentsSectionRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(); // variable

  const contentsArray = [{
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

  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    getAddSections();
  }, []); // normal
  // contents를 제외한 부가 너비 구하기

  const getAddSections = () => {
    const totalCount = introContainerRef.current.clientHeight / (contentsSectionRef.current.clientHeight + 30);
    const addSections = [];

    for (let i = 0; i < totalCount - contentsArray.length; i++) {
      addSections.push(i);
    }

    setAddSections(addSections);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_base__WEBPACK_IMPORTED_MODULE_3__.default, {
    componentNo: componentNo,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(IntroContainer, {
      ref: introContainerRef,
      children: [contentsArray.map((contents, index) => {
        if (index === 0) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentsSection, {
            ref: contentsSectionRef,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentsTitle, {
              children: contents.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 238,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentsDescription, {
              children: contents.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 239,
              columnNumber: 33
            }, undefined)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 237,
            columnNumber: 29
          }, undefined);
        } else {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentsSection, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentsTitle, {
              children: contents.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 245,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentsDescription, {
              children: contents.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 246,
              columnNumber: 33
            }, undefined)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 244,
            columnNumber: 29
          }, undefined);
        }
      }), addSections.map(addSection => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentsSection, {
          height: contentsSectionRef.current.clientHeight - 8,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentsTitle, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 255,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentsDescription, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 256,
            columnNumber: 29
          }, undefined)]
        }, addSection, true, {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 25
        }, undefined);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 232,
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
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base */ "./component/base.tsx");


var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\component\\main.tsx";
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



const TitleSectionKeyFrame = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.keyframes)(["0%{transform:translateY(40px);opacity:0;}100%{transfrom:translateY(0);opacity:1;}"]);
const TitleSection = styled_components__WEBPACK_IMPORTED_MODULE_2___default().section.withConfig({
  displayName: "main__TitleSection",
  componentId: "sc-1r8z56n-0"
})(["padding:0 30px;text-align:center;animation-name:", ";animation-duration:3s;"], TitleSectionKeyFrame);
const MainTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default().span.withConfig({
  displayName: "main__MainTitle",
  componentId: "sc-1r8z56n-1"
})(["display:block;font-size:calc(54px + 1.5vw);font-weight:600;"]);
const SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default().span.withConfig({
  displayName: "main__SubTitle",
  componentId: "sc-1r8z56n-2"
})(["display:block;font-size:calc(24px + 0.4vw);"]);

const Main = ({
  componentNo
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_base__WEBPACK_IMPORTED_MODULE_3__.default, {
      componentNo: componentNo,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleSection, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainTitle, {
          children: "\uAE40\uC131\uCC2C\uC758 Portfolio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubTitle, {
          children: "Since 2021"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 13
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./component/more.tsx":
/*!****************************!*\
  !*** ./component/more.tsx ***!
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

var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\component\\more.tsx";



const MoreContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "more__MoreContainer",
  componentId: "sc-16793nn-0"
})(["display:flex;justify-content:center;flex-direction:column;min-height:100%;"]);
const HeaderSection = styled_components__WEBPACK_IMPORTED_MODULE_3___default().section.withConfig({
  displayName: "more__HeaderSection",
  componentId: "sc-16793nn-1"
})(["margin:24px 0;padding:0 24px;"]);
const UrlSection = styled_components__WEBPACK_IMPORTED_MODULE_3___default().section.withConfig({
  displayName: "more__UrlSection",
  componentId: "sc-16793nn-2"
})(["margin:8px 0;padding:0 24px;"]);
const FooterSection = styled_components__WEBPACK_IMPORTED_MODULE_3___default().section.withConfig({
  displayName: "more__FooterSection",
  componentId: "sc-16793nn-3"
})(["margin:24px 0;padding:0 24px;"]);
const UrlMainDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "more__UrlMainDiv",
  componentId: "sc-16793nn-4"
})(["display:inline-block;box-shadow:2px 2px 4px rgba(0,0,0,0.5);padding:12px;margin:0 24px 24px 0;cursor:pointer;background-color:#fff;transition-duration:0.4s;&:hover{transform:translateY(-10px);}"]);
const UrlSubDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "more__UrlSubDiv",
  componentId: "sc-16793nn-5"
})(["display:flex;flex-direction:column;align-items:center;"]);
const HeaderText = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "more__HeaderText",
  componentId: "sc-16793nn-6"
})(["display:block;font-weight:600;font-size:min(1.9em,1.3em + 1vw);"]);
const UrlText = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "more__UrlText",
  componentId: "sc-16793nn-7"
})(["font-weight:600;font-size:min(1.2em,1em + 0.7vw);margin:8px 0;"]);
const FooterText = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "more__FooterText",
  componentId: "sc-16793nn-8"
})(["display:block;font-weight:600;font-size:min(1.5em,1.1em + 0.9vw);"]);
const UrlImage = styled_components__WEBPACK_IMPORTED_MODULE_3___default().img.withConfig({
  displayName: "more__UrlImage",
  componentId: "sc-16793nn-9"
})(["width:min(8em,5em + 6.4vw);"]);
const LogoImage = styled_components__WEBPACK_IMPORTED_MODULE_3___default().img.withConfig({
  displayName: "more__LogoImage",
  componentId: "sc-16793nn-10"
})(["width:min(8em,5em + 6.4vw);margin:12px 0;"]);

const More = ({
  componentNo
}) => {
  // onClick
  const onClickUrlMainDiv = url => {
    window.open(url);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_base__WEBPACK_IMPORTED_MODULE_2__.default, {
    componentNo: componentNo,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MoreContainer, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderSection, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderText, {
          children: "\uAE40\uC131\uCC2C\uC758 Portfolio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderText, {
          children: "Version 1.0.0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderText, {
          children: "2021.08.11"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UrlSection, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UrlMainDiv, {
          onClick: () => onClickUrlMainDiv('https://github.com/ksccmp'),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UrlSubDiv, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UrlImage, {
              src: "/image/github.PNG"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UrlText, {
              children: "https://github.com/ksccmp"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UrlMainDiv, {
          onClick: () => onClickUrlMainDiv('https://jforj.tistory.com'),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UrlSubDiv, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UrlImage, {
              src: "/image/tistory.PNG"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UrlText, {
              children: "https://jforj.tistory.com"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FooterSection, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FooterText, {
          children: "https://kscportfolio.com"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FooterText, {
          children: "Designed By \uAE40\uC131\uCC2C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LogoImage, {
          src: "/image/SCLogo2.svg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (More);

/***/ }),

/***/ "./component/projects.tsx":
/*!********************************!*\
  !*** ./component/projects.tsx ***!
  \********************************/
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\component\\projects.tsx";




const ProjectsContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "projects__ProjectsContainer",
  componentId: "sc-1k4iihw-0"
})(["position:relative;border-radius:0 12px 12px 12px;background-color:#fff;margin:50px 18px 65px 18px;box-shadow:2px 0 4px #c8c8c8 inset,-2px -4px 4px #c8c8c8 inset;"]);
const ImageDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "projects__ImageDiv",
  componentId: "sc-1k4iihw-1"
})(["margin:18px 25px;position:relative;cursor:pointer;"]);
const TitleSection = styled_components__WEBPACK_IMPORTED_MODULE_3___default().section.withConfig({
  displayName: "projects__TitleSection",
  componentId: "sc-1k4iihw-2"
})(["position:absolute;display:flex;align-items:center;top:-40px;left:0;height:40px;background-color:#fff;border-radius:12px 12px 0 0;padding:0 12px;box-shadow:2px 4px 4px #c8c8c8 inset,-2px 0 4px #c8c8c8 inset;"]);
const ContentsSection = styled_components__WEBPACK_IMPORTED_MODULE_3___default().section.withConfig({
  displayName: "projects__ContentsSection",
  componentId: "sc-1k4iihw-3"
})(["display:flex;justify-content:space-around;flex-wrap:wrap;padding:0 16px;@media screen and (min-width:700px){flex-wrap:nowrap;}"]);
const TextDescriptionDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "projects__TextDescriptionDiv",
  componentId: "sc-1k4iihw-4"
})([""]);
const PictureContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "projects__PictureContainer",
  componentId: "sc-1k4iihw-5"
})(["position:fixed;width:100%;height:100vh;background-color:rgba(0,0,0,0.5);display:none;justify-content:center;align-items:center;z-index:101;top:0;cursor:pointer;"]);
const PuzzleSection = styled_components__WEBPACK_IMPORTED_MODULE_3___default().section.withConfig({
  displayName: "projects__PuzzleSection",
  componentId: "sc-1k4iihw-6"
})(["padding-left:25px;"]);
const PuzzleDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "projects__PuzzleDiv",
  componentId: "sc-1k4iihw-7"
})(["position:relative;display:flex;justify-content:center;align-items:center;width:100px;height:40px;background-color:#fff;margin:40px 0 100px 0;transform:rotate(-16deg);box-shadow:2px 2px 4px rgba(0,0,0,0.5);@media screen and (min-width:700px){width:160px;height:60px;box-shadow:3px 3px 6px rgba(0,0,0,0.5);}"]);
const PuzzleLeft = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "projects__PuzzleLeft",
  componentId: "sc-1k4iihw-8"
})(["position:absolute;background-color:", ";border-radius:50%;width:20px;height:20px;top:10px;left:-10px;box-shadow:2px 1px 0px rgba(0,0,0,0.5);@media screen and (min-width:700px){width:30px;height:30px;left:-15px;top:15px;}"], props => props.backgroundColor);
const PuzzleRight = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "projects__PuzzleRight",
  componentId: "sc-1k4iihw-9"
})(["position:absolute;background-color:#fff;border-radius:50%;width:20px;height:20px;top:10px;right:-10px;box-shadow:3px 1px 2px rgba(0,0,0,0.5);@media screen and (min-width:700px){width:30px;height:30px;top:15px;right:-15px;}"]);
const PuzzleTop = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "projects__PuzzleTop",
  componentId: "sc-1k4iihw-10"
})(["position:absolute;background-color:#fff;border-radius:50%;width:20px;height:20px;top:-10px;left:40px;@media screen and (min-width:700px){width:30px;height:30px;top:-15px;left:65px;}"]);
const CareerTitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "projects__CareerTitle",
  componentId: "sc-1k4iihw-11"
})(["color:", ";font-weight:600;font-size:min(1.3em,0.8em + 1.2vw);"], props => props.color);
const TextDescription = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "projects__TextDescription",
  componentId: "sc-1k4iihw-12"
})(["display:block;margin:18px 0;font-weight:600;font-size:min(1.1em,0.7em + 1.1vw);padding:8px 0;border-bottom:1px solid rgba(0,0,0,0.4);overflow-wrap:anywhere;", ""], props => {
  if (props.type === 'camera') {
    return `
                color: rgba(0, 0, 0, 0.7);
                &:before {
                    display: inline-block;
                    width: 26px;
                    content: '\f030';
                    font-family: FontAwesome;
                    color: ${props.backgroundColor};
                    cursor: url(${props.src}), pointer;
                }
            `;
  } else if (props.type === 'calendar') {
    return `
                color: rgba(0, 0, 0, 0.7);
                &:before {
                    display: inline-block;
                    width: 26px;
                    content: '\f272';
                    font-family: FontAwesome;
                    color: ${props.backgroundColor};
                }
            `;
  } else if (props.type === 'position') {
    return `
                color: rgba(0, 0, 0, 0.7);
                &:before {
                    display: inline-block;
                    width: 26px;
                    content: '\f2bb';
                    font-family: FontAwesome;
                    color: ${props.backgroundColor};
                }
            `;
  } else if (props.type === 'link') {
    return `
                color: rgba(0, 0, 0, 0.7);
                &:before {
                    display: inline-block;
                    width: 26px;
                    content: '\f0c1';
                    font-family: FontAwesome;
                    color: ${props.backgroundColor};
                }
            `;
  } else if (props.type === 'code') {
    return `
                color: rgba(0, 0, 0, 0.7);
                &:before {
                    display: inline-block;
                    width: 26px;
                    content: '\f121';
                    font-family: FontAwesome;
                    color: ${props.backgroundColor};
                }
            `;
  } else {
    return `
                color: rgba(0, 0, 0, 0.7);
                &:before {
                    display: inline-block;
                    width: 26px;
                    content: '\f005';
                    font-family: FontAwesome;
                    color: ${props.backgroundColor};
                }
            `;
  }
});
const PuzzleTitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "projects__PuzzleTitle",
  componentId: "sc-1k4iihw-13"
})(["font-weight:600;font-size:1.2em;@media screen and (min-width:700px){font-size:1.5em;}"]);
const CareerImage = styled_components__WEBPACK_IMPORTED_MODULE_3___default().img.withConfig({
  displayName: "projects__CareerImage",
  componentId: "sc-1k4iihw-14"
})(["width:min(20em,calc(15em + 10vw));box-shadow:0px 0px 6px rgba(0,0,0,0.2);"]);
const PictureImage = styled_components__WEBPACK_IMPORTED_MODULE_3___default().img.withConfig({
  displayName: "projects__PictureImage",
  componentId: "sc-1k4iihw-15"
})(["margin:20px;max-width:calc(100% - 28px);max-height:calc(100% - 28px);"]);

const Projects = ({
  componentNo
}) => {
  // redux
  const backgroundColorArray = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.baseReducer.backgroundColorArray); // state

  const [pictureImage, setPictureImage] = react__WEBPACK_IMPORTED_MODULE_1__.useState('');
  const [currentImageIndex, setCurrentImageIndex] = react__WEBPACK_IMPORTED_MODULE_1__.useState([0, 0, 0, 0]); // ref

  const pictureContainerRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(); // variable

  const images = [['/image/ssafy1.PNG'], ['/image/grouby_0.PNG', '/image/grouby_1.PNG', '/image/grouby_2.PNG', '/image/grouby_3.PNG'], ['/image/ssafy1.PNG'], ['/image/moyo_0.PNG', '/image/moyo_1.PNG', '/image/moyo_2.PNG', '/image/moyo_3.PNG']]; // onClick

  const onClickImageDiv = index => {
    const tempCurrentImageIndex = currentImageIndex.slice();
    tempCurrentImageIndex[index] = (tempCurrentImageIndex[index] + 1) % images[index].length;
    setCurrentImageIndex(tempCurrentImageIndex);
  };

  const onClickCamera = (e, img) => {
    if (pictureContainerRef.current) {
      e.stopPropagation();
      setPictureImage(img);
      pictureContainerRef.current.style.display = 'flex';
    }
  };

  const onClickPictureContainer = () => {
    if (pictureContainerRef.current) {
      setPictureImage('');
      pictureContainerRef.current.style.display = 'none';
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_base__WEBPACK_IMPORTED_MODULE_2__.default, {
      componentNo: componentNo,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PuzzleSection, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PuzzleDiv, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PuzzleLeft, {
            backgroundColor: backgroundColorArray[componentNo]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 309,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PuzzleRight, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 310,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PuzzleTop, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 311,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PuzzleTitle, {
            children: "\uD504\uB85C\uC81D\uD2B8"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 312,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 308,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProjectsContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleSection, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CareerTitle, {
            children: "Portfolio"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 318,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 317,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentsSection, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageDiv, {
            onClick: () => onClickImageDiv(0),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CareerImage, {
              src: images[0][currentImageIndex[0]]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 323,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 322,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescriptionDiv, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "calendar",
              children: "21.07 ~ 21.08"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 327,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "code",
              children: "FE \u2192 Next / TypeScript / Redux / Hooks / StyledComponent"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 330,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "\uC6F9 \uC0AC\uC774\uD2B8\uC5D0\uC11C \uB098\uB9CC\uC758 \uD3EC\uD2B8\uD3F4\uB9AC\uC624\uB97C \uB204\uAD6C\uB098 \uBCFC \uC218 \uC788\uB3C4\uB85D \uD558\uAE30 \uC704\uD574 \uAC1C\uBC1C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 333,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "\uACF5\uCC45\uC744 \uC8FC\uC694 \uB514\uC790\uC778\uC73C\uB85C \uC0BC\uC544 \uC624\uD504\uB77C\uC778\uC5D0\uC11C \uD3EC\uD2B8\uD3F4\uB9AC\uC624\uB97C \uBCF4\uB294 \uB4EF\uD55C UI/UX\uB97C \uAC1C\uBC1C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 336,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "link",
              children: ["Domain \u2192 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "localhost:8088",
                children: "localhost:8088"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 340,
                columnNumber: 42
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 339,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "link",
              children: ["Git \u2192", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "https://github.com/ksccmp/portfolio",
                children: "https://github.com/ksccmp/portfolio"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 344,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 342,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 326,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 321,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProjectsContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleSection, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CareerTitle, {
            children: "Grouby"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 352,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 351,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentsSection, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageDiv, {
            onClick: () => onClickImageDiv(1),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CareerImage, {
              src: images[1][currentImageIndex[1]]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 357,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 356,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescriptionDiv, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "calendar",
              children: "20.10 ~ 21.01"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 361,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "code",
              children: "FE \u2192 Next / TypeScript / Redux / Hooks / StyledComponent"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 364,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "code",
              children: "BE \u2192 Spring / Mybatis / MySQL"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 367,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "Next\uC0AC\uC6A9 \uACBD\uD5D8\uACFC CSS\uC5ED\uB7C9\uC744 \uB192\uC774\uAE30 \uC704\uD574 \uC9C4\uD589\uD55C \uAC1C\uC778 \uD504\uB85C\uC81D\uD2B8"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 370,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "\uBC29\uBB38\uD588\uC5C8\uB358 \uC7A5\uC18C\uC5D0 \uB300\uD55C \uC6B0\uB9AC\uB9CC\uC758 \uD3C9\uAC00\uB97C \uD558\uC5EC \uC7AC\uBC29\uBB38\uC744 \uC704\uD55C \uC758\uACAC\uC5D0 \uB3C4\uC6C0\uC774 \uB418\uACE0\uC790 \uAC1C\uBC1C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 373,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "\uADF8\uB8F9, \uC2A4\uD31F\uC744 \uC120\uD0DD\uD55C \uB4A4 \uC778\uC2A4\uD0C0\uADF8\uB7A8\uCC98\uB7FC \uC0AC\uC9C4 \uACF5\uC720 \uBC0F \uB313\uAE00 \uAE30\uB2A5 \uAC1C\uBC1C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 376,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "\uBC29\uBB38\uD588\uB358 \uC7A5\uC18C\uC758 \uD3C9\uAC00\uC694\uC18C\uC5D0 \uB530\uB77C \uC810\uC218\uB97C \uBD80\uC5EC\uD558\uC5EC \uD3C9\uAC00\uD560 \uC218 \uC788\uACE0 \uC804\uCCB4 \uD3C9\uC810\uB3C4 \uD655\uC778\uD560 \uC218 \uC788\uB3C4\uB85D \uAC1C\uBC1C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 379,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "\uC124\uACC4 \uB2E8\uACC4\uC5D0\uC11C \uB290\uAEF4\uC84C\uB358 \uBCF5\uC7A1\uD568\uC774 \uC0AC\uC6A9\uD560 \uB54C \uADF8\uB300\uB85C \uB290\uAEF4\uC9C4 \uC544\uC26C\uC6C0\uC774 \uB0A8\uB294 \uD504\uB85C\uC81D\uD2B8"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 383,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "link",
              children: ["Git \u2192 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "https://github.com/ksccmp/Grouby",
                children: "https://github.com/ksccmp/Grouby"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 387,
                columnNumber: 39
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 386,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 360,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 355,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 350,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProjectsContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleSection, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CareerTitle, {
            children: "SCVC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 395,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 394,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentsSection, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageDiv, {
            onClick: () => onClickImageDiv(2),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CareerImage, {
              src: images[2][currentImageIndex[2]]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 400,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 399,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescriptionDiv, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "calendar",
              children: "20.08 ~ 20.09"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 404,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "code",
              children: "FE \u2192 React / TypeScript / Redux / Redux-Saga / Hooks / StyledComponent"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 407,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "code",
              children: "BE \u2192 Spring / Mybatis / MySQL / Node"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 410,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "TypeScript\uC640 Redux-Saga\uC758 \uC0AC\uC6A9 \uACBD\uD5D8\uC744 \uB192\uC774\uAE30 \uC704\uD574 \uC9C4\uD589\uD55C \uAC1C\uC778 \uD504\uB85C\uC81D\uD2B8"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 413,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "\uCD5C\uADFC \uBE44\uB300\uBA74\uC758 \uC911\uC694\uC131\uC774 \uC99D\uAC00\uB428\uC5D0 \uB530\uB77C \uC5ED\uB7C9 \uD655\uBCF4\uB97C \uC704\uD574 \uAD00\uB828 \uAE30\uB2A5 \uAC1C\uBC1C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 416,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "\uC785\uC7A5\uD558\uACE0\uC790 \uD558\uB294 \uBC29\uC744 \uAC80\uC0C9\uD560 \uC218 \uC788\uACE0 \uC815\uD574\uC9C4 \uC778\uC6D0\uB9CC\uD07C\uC758 \uC778\uC6D0\uB9CC \uCC38\uC5EC \uAC00\uB2A5\uD558\uB3C4\uB85D \uAC1C\uBC1C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 419,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "RTCPeerConnection + SocketIO\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC2E4\uC2DC\uAC04 \uD654\uC0C1 \uD68C\uC758 \uBC0F \uCC44\uD305 \uAC1C\uBC1C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 422,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "link",
              children: ["Git \u2192", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "https://github.com/ksccmp/video_chat_typescript",
                children: "https://github.com/ksccmp/video_chat_typescript"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 427,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 425,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 403,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 398,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 393,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProjectsContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleSection, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CareerTitle, {
            children: "Moyo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 437,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 436,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentsSection, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageDiv, {
            onClick: () => onClickImageDiv(3),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CareerImage, {
              src: images[3][currentImageIndex[3]]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 442,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 441,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescriptionDiv, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "calendar",
              children: "20.01 ~ 20.02"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 446,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "code",
              children: "FE \u2192 React / Redux / Hooks / StyledComponent"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 449,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "code",
              children: "BE \u2192 SpringBoot / Mybatis / MySQL / FireBase"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 452,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "SSAFY\uC5D0\uC11C \uC9C4\uD589\uD55C \uD300 \uD504\uB85C\uC81D\uD2B8 (5\uC778)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 455,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "\uC5EC\uD589 \uB3D9\uD589\uC790\uB97C \uAC04\uD3B8\uD558\uAC8C \uB9E4\uCE6D\uD558\uB294 \uAC83\uC5D0 \uB3C4\uC6C0\uC774 \uB418\uACE0\uC790 \uAC1C\uBC1C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 458,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "React + FireBase\uB97C \uC774\uC6A9\uD558\uC5EC DM\uAE30\uB2A5 \uAC1C\uBC1C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 461,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "\uC790\uC2E0\uC758 \uC704\uCE58\uC5D0 \uAC04\uD3B8\uD558\uAC8C \uB099\uC11C(?)\uD560 \uC218 \uC788\uB294 \uD3EC\uC2A4\uD2B8\uB9F5 \uAE30\uB2A5 \uAC1C\uBC1C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 464,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "\uC0AC\uC6A9\uB418\uB294 Tool\uC758 \uC219\uB828\uB3C4 \uBD80\uC871\uC73C\uB85C \uBAA9\uD45C\uD55C \uAE30\uB2A5\uB4E4\uC744 \uBAA8\uB450 \uAC1C\uBC1C\uD558\uC9C0 \uBABB\uD55C\uAC83\uC5D0 \uB300\uD574 \uC544\uC26C\uC6C0\uC774 \uB0A8\uB294 \uD504\uB85C\uC81D\uD2B8"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 467,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "link",
              children: ["Git \u2192 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "https://github.com/ksccmp/moyo",
                children: "https://github.com/ksccmp/moyo"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 472,
                columnNumber: 39
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 471,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 445,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 440,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 435,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PictureContainer, {
      ref: pictureContainerRef,
      onClick: onClickPictureContainer,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PictureImage, {
        src: pictureImage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 480,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 479,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\component\\skills.tsx";




const SkillsContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "skills__SkillsContainer",
  componentId: "sc-9hegbj-0"
})(["padding:20px;"]);
const TitleContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "skills__TitleContainer",
  componentId: "sc-9hegbj-1"
})(["position:relative;margin:24px 0 52px 0;"]);
const TitleMainDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "skills__TitleMainDiv",
  componentId: "sc-9hegbj-2"
})(["border-top:1px solid rgba(0,0,0,0.4);padding:12px 0;"]);
const TitleSubDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "skills__TitleSubDiv",
  componentId: "sc-9hegbj-3"
})(["position:absolute;background-color:", ";top:-12px;left:12px;padding:0 4px;"], props => props.backgroundColor);
const ContentsContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "skills__ContentsContainer",
  componentId: "sc-9hegbj-4"
})(["width:100%;display:flex;flex-direction:column;align-items:center;@media screen and (min-width:570px){height:1080px;flex-wrap:wrap;}@media screen and (min-width:840px){height:720px;flex-wrap:wrap;}"]);
const SkillSection = styled_components__WEBPACK_IMPORTED_MODULE_3___default().section.withConfig({
  displayName: "skills__SkillSection",
  componentId: "sc-9hegbj-5"
})(["width:240px;text-align:center;margin-bottom:54px;"]);
const TitleDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "skills__TitleDiv",
  componentId: "sc-9hegbj-6"
})(["padding:8px 0;"]);
const ImageDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "skills__ImageDiv",
  componentId: "sc-9hegbj-7"
})(["background-color:#fff;border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-left-radius:10px;border-bottom-right-radius:10px;padding:8px;box-shadow:2px 4px 4px #c8c8c8 inset,-2px -4px 4px #c8c8c8 inset;"]);
const MainTitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "skills__MainTitle",
  componentId: "sc-9hegbj-8"
})(["font-weight:600;font-size:min(calc(1.2em + 0.5vw),1.8em);"]);
const SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "skills__SubTitle",
  componentId: "sc-9hegbj-9"
})(["font-weight:600;font-size:min(calc(0.9em + 0.5vw),1.1em);color:rgba(0,0,0,0.4);"]);
const SkillTitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "skills__SkillTitle",
  componentId: "sc-9hegbj-10"
})(["font-weight:bold;font-size:min(1.4em + 0.4vw,1.6em);color:#fff;"]);
const SkillImage = styled_components__WEBPACK_IMPORTED_MODULE_3___default().img.withConfig({
  displayName: "skills__SkillImage",
  componentId: "sc-9hegbj-11"
})([""]);

const Skills = ({
  componentNo
}) => {
  // redux
  const backgroundColorArray = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.baseReducer.backgroundColorArray); // variable

  const skillsArray = [{
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
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleMainDiv, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainTitle, {
            children: "\uAE30\uC220\uC2A4\uD0DD\uC774 \uBB50\uAC00 \uC788\uC9C0..?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleSubDiv, {
          backgroundColor: backgroundColorArray[componentNo],
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubTitle, {
            children: "\uB0B4\uC6A9"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleMainDiv, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentsContainer, {
            children: skillsArray.map(skill => {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SkillSection, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleDiv, {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SkillTitle, {
                    children: skill.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 139,
                    columnNumber: 45
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 138,
                  columnNumber: 41
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageDiv, {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SkillImage, {
                    src: skill.src
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 142,
                    columnNumber: 45
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 41
                }, undefined)]
              }, skill.title, true, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 37
              }, undefined);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 118,
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\component\\whyIt.tsx";
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




const WhyItContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "whyIt__WhyItContainer",
  componentId: "sc-sy1iui-0"
})(["padding:20px;"]);
const TitleContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "whyIt__TitleContainer",
  componentId: "sc-sy1iui-1"
})(["position:relative;margin:24px 0 52px 0;"]);
const TitleMainDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "whyIt__TitleMainDiv",
  componentId: "sc-sy1iui-2"
})(["border-top:1px solid rgba(0,0,0,0.4);padding:12px 0;"]);
const TitleSubDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "whyIt__TitleSubDiv",
  componentId: "sc-sy1iui-3"
})(["position:absolute;background-color:", ";top:-12px;left:12px;padding:0 4px;"], props => props.backgroundColor);
const QAContaier = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "whyIt__QAContaier",
  componentId: "sc-sy1iui-4"
})(["width:100%;text-align:center;@media screen and (min-width:860px){display:flex;justify-content:center;}"]);
const QuestionSection = styled_components__WEBPACK_IMPORTED_MODULE_3___default().section.withConfig({
  displayName: "whyIt__QuestionSection",
  componentId: "sc-sy1iui-5"
})(["padding:0 20px 0 20px;"]);
const AnswerSection = styled_components__WEBPACK_IMPORTED_MODULE_3___default().section.withConfig({
  displayName: "whyIt__AnswerSection",
  componentId: "sc-sy1iui-6"
})(["padding:0 20px 0 20px;"]);
const questionNumberKeyframe = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.keyframes)(["0%{transform:rotate(-10deg);}50%{transform:rotate(10deg);}100%{transform:rotate(-10deg);}"]);
const QuestionDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "whyIt__QuestionDiv",
  componentId: "sc-sy1iui-7"
})(["background-color:#fff;padding:20px;margin:24px 0;border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-left-radius:10px;border-bottom-right-radius:10px;text-align:left;box-shadow:2px 4px 4px #c8c8c8 inset,-2px -4px 4px #c8c8c8 inset;cursor:pointer;&:hover{& > div > span:first-child{animation-name:", ";animation-duration:2s;animation-iteration-count:infinite;}}"], questionNumberKeyframe);
const QuestionSubDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "whyIt__QuestionSubDiv",
  componentId: "sc-sy1iui-8"
})(["display:flex;align-items:center;"]);
const AnswerDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "whyIt__AnswerDiv",
  componentId: "sc-sy1iui-9"
})(["min-height:calc(248px + 30vh);background-color:#fff;padding:20px;margin:24px 0;border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-left-radius:10px;border-bottom-right-radius:10px;box-shadow:2px 4px 4px #c8c8c8 inset,-2px -4px 4px #c8c8c8 inset;@media screen and (min-width:860px){display:flex;justify-content:center;width:min(calc(16em + 12vw),26em);}"]);
const MainTitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "whyIt__MainTitle",
  componentId: "sc-sy1iui-10"
})(["font-weight:600;font-size:min(calc(1.2em + 0.5vw),1.8em);"]);
const SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "whyIt__SubTitle",
  componentId: "sc-sy1iui-11"
})(["font-weight:600;font-size:min(calc(0.9em + 0.5vw),1.1em);color:rgba(0,0,0,0.4);"]);
const QuestionTitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "whyIt__QuestionTitle",
  componentId: "sc-sy1iui-12"
})(["font-weight:600;font-size:min(calc(18px + 0.2vw),1.4em);color:", ";"], props => props.color);
const AnswerTitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "whyIt__AnswerTitle",
  componentId: "sc-sy1iui-13"
})(["font-weight:600;"]);
const QuestionNumber = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "whyIt__QuestionNumber",
  componentId: "sc-sy1iui-14"
})(["display:inline-block;font-weight:600;font-size:min(calc(24px + 0.6vw),2em);color:#f15e5e;transform:rotate(-10deg);margin-right:12px;animation-name:", ";animation-duration:2s;animation-iteration-count:infinite;"], props => props.isClick ? questionNumberKeyframe : '');

const WhyIt = ({
  componentNo
}) => {
  // redux
  const backgroundColorArray = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.baseReducer.backgroundColorArray); // state

  const [questionIndex, setQuestionIndex] = react__WEBPACK_IMPORTED_MODULE_1__.useState(-1);
  const [typingTimer, setTypingTimer] = react__WEBPACK_IMPORTED_MODULE_1__.useState(); // ref

  const answerTitleRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef();
  const answerDivRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(); // variable

  const qnaArray = [{
    question: 'IT에 관심가진 시기',
    answer: 'IT에 관심가진 시기'
  }, {
    question: 'IT에 관심을 가지게 된 계기',
    answer: `IT에 관심을 가지게 된 계기\n\nㅎㅎㅎㅎ`
  }, {
    question: '개발자를 선택한 이유',
    answer: '개발자를 선택한 이유'
  }];
  const questionColor = ['#8FC15B', '#F19023', '#63C1A9']; // onClick

  const onClickQuestion = index => {
    setQuestionIndex(index); // 질문 index

    const time = 50; // 글자 나오는 속도

    if (answerTitleRef.current && answerDivRef.current) {
      let charIndex = 0;
      clearInterval(typingTimer); // 기존 interval 종료

      answerTitleRef.current.innerHTML = '';
      answerTitleRef.current.style.color = questionColor[index];
      answerDivRef.current.style.boxShadow = `2px 4px 4px ${questionColor[index]} inset, -2px -4px 4px ${questionColor[index]} inset`;
      const typingInterval = setInterval(() => {
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

      setTimeout(() => {
        clearInterval(typingInterval);
      }, qnaArray[index].answer.length * time);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_base__WEBPACK_IMPORTED_MODULE_2__.default, {
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
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleMainDiv, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainTitle, {
            children: "\uC65C \uAC1C\uBC1C\uC790\uAC00 \uB418\uB824\uACE0 \uD588\uB354\uB77C..?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 284,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleSubDiv, {
          backgroundColor: backgroundColorArray[componentNo],
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubTitle, {
            children: "\uB0B4\uC6A9"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 290,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleMainDiv, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(QAContaier, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(QuestionSection, {
              children: qnaArray.map((qna, index) => {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(QuestionDiv, {
                  onClick: e => onClickQuestion(index),
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(QuestionSubDiv, {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(QuestionNumber, {
                      isClick: questionIndex === index,
                      children: ["Q", index + 1, ".", ' ']
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 299,
                      columnNumber: 49
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(QuestionTitle, {
                      color: questionColor[index],
                      children: qna.question
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 302,
                      columnNumber: 49
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 298,
                    columnNumber: 45
                  }, undefined)
                }, qna.answer, false, {
                  fileName: _jsxFileName,
                  lineNumber: 297,
                  columnNumber: 41
                }, undefined);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 294,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnswerSection, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnswerDiv, {
                ref: answerDivRef,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnswerTitle, {
                  ref: answerTitleRef,
                  children: questionIndex >= 0 ? '' : '궁금하신 질문을 선택해주세요.'
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 313,
                  columnNumber: 37
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 312,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 311,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 293,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 277,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (WhyIt);

/***/ }),

/***/ "./modules/actionType.tsx":
/*!********************************!*\
  !*** ./modules/actionType.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setIsEnd": function() { return /* binding */ setIsEnd; },
/* harmony export */   "setCurrentComponentNo": function() { return /* binding */ setCurrentComponentNo; },
/* harmony export */   "setIsPageChanging": function() { return /* binding */ setIsPageChanging; }
/* harmony export */ });
// init
const setIsEnd = 'setIsEnd'; // base

const setCurrentComponentNo = 'setCurrentComponentNo';
const setIsPageChanging = 'setIsPageChanging';

/***/ }),

/***/ "./modules/actions.tsx":
/*!*****************************!*\
  !*** ./modules/actions.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setIsEndAction": function() { return /* binding */ setIsEndAction; },
/* harmony export */   "setCurrentComponentNoAction": function() { return /* binding */ setCurrentComponentNoAction; },
/* harmony export */   "setIsPageChangingAction": function() { return /* binding */ setIsPageChangingAction; }
/* harmony export */ });
/* harmony import */ var _actionType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionType */ "./modules/actionType.tsx");

// init
const setIsEndAction = res => {
  return {
    type: _actionType__WEBPACK_IMPORTED_MODULE_0__.setIsEnd,
    payload: res
  };
}; // base

const setCurrentComponentNoAction = res => {
  return {
    type: _actionType__WEBPACK_IMPORTED_MODULE_0__.setCurrentComponentNo,
    payload: res
  };
};
const setIsPageChangingAction = res => {
  return {
    type: _actionType__WEBPACK_IMPORTED_MODULE_0__.setIsPageChanging,
    payload: res
  };
};

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
/* harmony import */ var _component_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/main */ "./component/main.tsx");
/* harmony import */ var _component_intro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/intro */ "./component/intro.tsx");
/* harmony import */ var _component_whyIt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/whyIt */ "./component/whyIt.tsx");
/* harmony import */ var _component_skills__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/skills */ "./component/skills.tsx");
/* harmony import */ var _component_career__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/career */ "./component/career.tsx");
/* harmony import */ var _component_init__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../component/init */ "./component/init.tsx");
/* harmony import */ var _component_projects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../component/projects */ "./component/projects.tsx");
/* harmony import */ var _component_more__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../component/more */ "./component/more.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _style_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../style/style */ "./style/style.tsx");


var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\pages\\index.tsx";













const IndexMainContainer = styled_components__WEBPACK_IMPORTED_MODULE_11___default().div.withConfig({
  displayName: "pages__IndexMainContainer",
  componentId: "sc-aoyeiy-0"
})(["width:calc(100vw - (100vw - 100%));"]);
const IndexSubContainer = styled_components__WEBPACK_IMPORTED_MODULE_11___default().div.withConfig({
  displayName: "pages__IndexSubContainer",
  componentId: "sc-aoyeiy-1"
})(["max-width:", "px;margin:0 auto;transform:translateY(7vh);position:relative;"], _style_style__WEBPACK_IMPORTED_MODULE_13__.maxWidth);
const ComponentContainer = styled_components__WEBPACK_IMPORTED_MODULE_11___default().div.withConfig({
  displayName: "pages__ComponentContainer",
  componentId: "sc-aoyeiy-2"
})(["perspective:4000px;"]);

const Index = () => {
  // redux
  const isEnd = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector)(state => state.initReducer.isEnd);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [isEnd ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(IndexMainContainer, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(IndexSubContainer, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ComponentContainer, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_main__WEBPACK_IMPORTED_MODULE_3__.default, {
              componentNo: 0
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_intro__WEBPACK_IMPORTED_MODULE_4__.default, {
              componentNo: 1
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_whyIt__WEBPACK_IMPORTED_MODULE_5__.default, {
              componentNo: 2
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_skills__WEBPACK_IMPORTED_MODULE_6__.default, {
              componentNo: 3
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_career__WEBPACK_IMPORTED_MODULE_7__.default, {
              componentNo: 4
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_projects__WEBPACK_IMPORTED_MODULE_9__.default, {
              componentNo: 5
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_more__WEBPACK_IMPORTED_MODULE_10__.default, {
              componentNo: 6
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 33
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 21
      }, undefined)
    }, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_init__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "1710783722",
      children: "@import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');body{margin:0;padding:0;overflow:hidden;}h1,h2,h3,h4,h5,h6,span,p{font-family:'AppleSDGothicNeo','Noto Sans KR',sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcc3R1ZHlcXHBvcnRmb2xpb1xcc3VuZ2NoYW5cXHBhZ2VzXFxpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0RpQixBQUdrQyxBQWFrRCxBQUdZLFNBZjdELFVBQ00sZ0JBQ3BCLHNCQVdBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcc3R1ZHlcXHBvcnRmb2xpb1xcc3VuZ2NoYW5cXHBhZ2VzXFxpbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNYWluIGZyb20gJy4uL2NvbXBvbmVudC9tYWluJztcclxuaW1wb3J0IEludHJvIGZyb20gJy4uL2NvbXBvbmVudC9pbnRybyc7XHJcbmltcG9ydCBXaHlJdCBmcm9tICcuLi9jb21wb25lbnQvd2h5SXQnO1xyXG5pbXBvcnQgU2tpbGxzIGZyb20gJy4uL2NvbXBvbmVudC9za2lsbHMnO1xyXG5pbXBvcnQgQ2FyZWVyIGZyb20gJy4uL2NvbXBvbmVudC9jYXJlZXInO1xyXG5pbXBvcnQgSW5pdCBmcm9tICcuLi9jb21wb25lbnQvaW5pdCc7XHJcbmltcG9ydCBQcm9qZWN0cyBmcm9tICcuLi9jb21wb25lbnQvcHJvamVjdHMnO1xyXG5pbXBvcnQgTW9yZSBmcm9tICcuLi9jb21wb25lbnQvbW9yZSc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgaW5kZXhTdGF0ZSB9IGZyb20gJy4uL21vZHVsZXMvaW5kZXhSZWR1Y2VyJztcclxuaW1wb3J0IHsgbWF4V2lkdGggfSBmcm9tICcuLi9zdHlsZS9zdHlsZSc7XHJcblxyXG5jb25zdCBJbmRleE1haW5Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAoMTAwdncgLSAxMDAlKSk7XHJcbmA7XHJcblxyXG5jb25zdCBJbmRleFN1YkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBtYXgtd2lkdGg6ICR7bWF4V2lkdGh9cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg3dmgpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5gO1xyXG5cclxuY29uc3QgQ29tcG9uZW50Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHBlcnNwZWN0aXZlOiA0MDAwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICAvLyByZWR1eFxyXG4gICAgY29uc3QgaXNFbmQgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IGluZGV4U3RhdGUpID0+IHN0YXRlLmluaXRSZWR1Y2VyLmlzRW5kKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtpc0VuZCA/IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEluZGV4TWFpbkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEluZGV4U3ViQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWFpbiBjb21wb25lbnRObz17MH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW50cm8gY29tcG9uZW50Tm89ezF9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdoeUl0IGNvbXBvbmVudE5vPXsyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTa2lsbHMgY29tcG9uZW50Tm89ezN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmVlciBjb21wb25lbnRObz17NH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvamVjdHMgY29tcG9uZW50Tm89ezV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vcmUgY29tcG9uZW50Tm89ezZ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbXBvbmVudENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbmRleFN1YkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8L0luZGV4TWFpbkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPEluaXQgLz5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaDEsXHJcbiAgICAgICAgICAgICAgICAgICAgaDIsXHJcbiAgICAgICAgICAgICAgICAgICAgaDMsXHJcbiAgICAgICAgICAgICAgICAgICAgaDQsXHJcbiAgICAgICAgICAgICAgICAgICAgaDUsXHJcbiAgICAgICAgICAgICAgICAgICAgaDYsXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbixcclxuICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBcHBsZVNER290aGljTmVvJywgJ05vdG8gU2FucyBLUicsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CdW5nZWUmZGlzcGxheT1zd2FwJyk7XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcclxuICAgICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wLCBtYXhpbXVtLXNjYWxlPTEsIG1pbmltdW0tc2NhbGU9MVwiIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\User\\\\Desktop\\\\study\\\\portfolio\\\\sungchan\\\\pages\\\\index.tsx */"
    }, void 0, false, void 0, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
      type: "text/css",
      rel: "stylesheet",
      href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
      className: "jsx-1710783722"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1",
      className: "jsx-1710783722"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }, undefined)]
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

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vLi9jb21wb25lbnQvYmFzZS50c3giLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvLy4vY29tcG9uZW50L2NhcmVlci50c3giLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvLy4vY29tcG9uZW50L2luaXQudHN4Iiwid2VicGFjazovL3N1bmdjaGFuX3BvcnRmb2xpby8uL2NvbXBvbmVudC9pbnRyby50c3giLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvLy4vY29tcG9uZW50L21haW4udHN4Iiwid2VicGFjazovL3N1bmdjaGFuX3BvcnRmb2xpby8uL2NvbXBvbmVudC9tb3JlLnRzeCIsIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vLi9jb21wb25lbnQvcHJvamVjdHMudHN4Iiwid2VicGFjazovL3N1bmdjaGFuX3BvcnRmb2xpby8uL2NvbXBvbmVudC9za2lsbHMudHN4Iiwid2VicGFjazovL3N1bmdjaGFuX3BvcnRmb2xpby8uL2NvbXBvbmVudC93aHlJdC50c3giLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvLy4vbW9kdWxlcy9hY3Rpb25UeXBlLnRzeCIsIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vLi9tb2R1bGVzL2FjdGlvbnMudHN4Iiwid2VicGFjazovL3N1bmdjaGFuX3BvcnRmb2xpby8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vLi9zdHlsZS9zdHlsZS50c3giLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL3N1bmdjaGFuX3BvcnRmb2xpby9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3N1bmdjaGFuX3BvcnRmb2xpby9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIl0sIm5hbWVzIjpbInRyYW5zaXRpb25EdXJhdGlvbiIsIkJhc2VDb250YWluZXIiLCJzdHlsZWQiLCJwcm9wcyIsImJhY2tncm91bmRDb2xvciIsIk1haW5Db250YWluZXIiLCJQb3N0SXRDb250YWluZXIiLCJjb21wb25lbnRObyIsIlBvc3RJdFNlY3Rpb24iLCJQb3N0SXRDb2xvckRpdiIsIlBvc3RJdFRleHREaXYiLCJDaGFpbkNvbnRhaW5lciIsIkNoYWluU2VjdGlvbiIsIkNoYWluRnJhbWUiLCJDaGFpbkNpcmNsZSIsIlRpdGxlIiwiQmFzZSIsImNoaWxkcmVuIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImN1cnJlbnRDb21wb25lbnRObyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJiYXNlUmVkdWNlciIsInRpdGxlQXJyYXkiLCJiYWNrZ3JvdW5kQ29sb3JBcnJheSIsImlzUGFnZUNoYW5naW5nIiwiaXNUb3AiLCJzZXRJc1RvcCIsIlJlYWN0IiwiaXNCb3R0b20iLCJzZXRJc0JvdHRvbSIsImJhc2VDb250YWluZXJSZWYiLCJtYWluQ29udGFpbmVyUmVmIiwidGl0bGVSZWYiLCJjdXJyZW50Iiwic3R5bGUiLCJvdmVyZmxvdyIsInBvc2l0aW9uIiwiZGlzcGxheSIsInRyYW5zZm9ybSIsInpJbmRleCIsIm9wYWNpdHkiLCJzY3JvbGxUbyIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsInNldElzUGFnZUNoYW5naW5nQWN0aW9uIiwic2V0VGltZW91dCIsIm9uQ2xpY2tQb3N0SXQiLCJzZXRDdXJyZW50Q29tcG9uZW50Tm9BY3Rpb24iLCJvblNjcm9sbE1haW5Db250YWluZXIiLCJlIiwiY3VycmVudFRhcmdldCIsInNjcm9sbFRvcCIsIm9uV2hlZWxNYWluQ29udGFpbmVyIiwibmF0aXZlRXZlbnQiLCJkZWx0YVkiLCJsZW5ndGgiLCJDYXJlZXJDb250YWluZXIiLCJJbWFnZURpdiIsIlRpdGxlU2VjdGlvbiIsIkNvbnRlbnRzU2VjdGlvbiIsIlRleHREZXNjcmlwdGlvbkRpdiIsIlBpY3R1cmVDb250YWluZXIiLCJQdXp6bGVTZWN0aW9uIiwiUHV6emxlRGl2IiwiUHV6emxlTGVmdCIsIlB1enpsZVJpZ2h0IiwiUHV6emxlVG9wIiwiQ2FyZWVyVGl0bGUiLCJjb2xvciIsIlRleHREZXNjcmlwdGlvbiIsInR5cGUiLCJzcmMiLCJQdXp6bGVUaXRsZSIsIkNhcmVlckltYWdlIiwiUGljdHVyZUltYWdlIiwiQ2FyZWVyIiwicGljdHVyZUltYWdlIiwic2V0UGljdHVyZUltYWdlIiwicGljdHVyZUNvbnRhaW5lclJlZiIsIm9uQ2xpY2tDYW1lcmEiLCJpbWciLCJzdG9wUHJvcGFnYXRpb24iLCJvbkNsaWNrUGljdHVyZUNvbnRhaW5lciIsIkNvbnRhaW5lciIsIlRpdGxlRGl2IiwiTWFpblNlY3Rpb24iLCJNYWluVGl0bGUiLCJDb2xvclNwYW4iLCJUaXRsZUN1cnNvciIsIkluaXQiLCJjb250YWluZXJSZWYiLCJ0eXBpbmdTdHJpbmdSZWYxIiwidHlwaW5nU3RyaW5nUmVmMiIsInR5cGluZ1N0cmluZ1JlZjMiLCJ0eXBpbmdTdHJpbmdSZWY0IiwidHlwaW5nU3RyaW5nUmVmNSIsInR5cGluZ1N0cmluZ1JlZjYiLCJ0eXBpbmdTdHJpbmdSZWY3IiwidHlwaW5nU3RyaW5nUmVmOCIsInR5cGluZ0N1cnNvcjEiLCJ0eXBpbmdDdXJzb3IyIiwidHlwaW5nQ3Vyc29yMyIsInR5cGluZ0N1cnNvcjQiLCJ0aW1lIiwic3RyaW5ncyIsInN0cmluZ09ianMiLCJzdHJpbmciLCJzdGFydCIsInNldFR5cGluZ1N0cmluZ0FjdGlvbjEiLCJzZXRUeXBpbmdTdHJpbmdBY3Rpb24yIiwic2V0VHlwaW5nQ3Vyc29yQWN0aW9uIiwic2V0SXNFbmRBY3Rpb24iLCJyZWYiLCJpbmRleCIsImNoYXJJbmRleCIsImlubmVySFRNTCIsInR5cGluZ0ludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiSW50cm9Db250YWluZXIiLCJoZWlnaHQiLCJDb250ZW50c1RpdGxlIiwiQ29udGVudHNEZXNjcmlwdGlvbiIsIkludHJvIiwiYWRkU2VjdGlvbnMiLCJzZXRBZGRTZWN0aW9ucyIsImludHJvQ29udGFpbmVyUmVmIiwiY29udGVudHNTZWN0aW9uUmVmIiwiY29udGVudHNBcnJheSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJnZXRBZGRTZWN0aW9ucyIsInRvdGFsQ291bnQiLCJpIiwicHVzaCIsIm1hcCIsImNvbnRlbnRzIiwiYWRkU2VjdGlvbiIsIlRpdGxlU2VjdGlvbktleUZyYW1lIiwia2V5ZnJhbWVzIiwiU3ViVGl0bGUiLCJNYWluIiwiTW9yZUNvbnRhaW5lciIsIkhlYWRlclNlY3Rpb24iLCJVcmxTZWN0aW9uIiwiRm9vdGVyU2VjdGlvbiIsIlVybE1haW5EaXYiLCJVcmxTdWJEaXYiLCJIZWFkZXJUZXh0IiwiVXJsVGV4dCIsIkZvb3RlclRleHQiLCJVcmxJbWFnZSIsIkxvZ29JbWFnZSIsIk1vcmUiLCJvbkNsaWNrVXJsTWFpbkRpdiIsInVybCIsIndpbmRvdyIsIm9wZW4iLCJQcm9qZWN0c0NvbnRhaW5lciIsIlByb2plY3RzIiwiY3VycmVudEltYWdlSW5kZXgiLCJzZXRDdXJyZW50SW1hZ2VJbmRleCIsImltYWdlcyIsIm9uQ2xpY2tJbWFnZURpdiIsInRlbXBDdXJyZW50SW1hZ2VJbmRleCIsInNsaWNlIiwiU2tpbGxzQ29udGFpbmVyIiwiVGl0bGVDb250YWluZXIiLCJUaXRsZU1haW5EaXYiLCJUaXRsZVN1YkRpdiIsIkNvbnRlbnRzQ29udGFpbmVyIiwiU2tpbGxTZWN0aW9uIiwiU2tpbGxUaXRsZSIsIlNraWxsSW1hZ2UiLCJTa2lsbHMiLCJza2lsbHNBcnJheSIsInNraWxsIiwiV2h5SXRDb250YWluZXIiLCJRQUNvbnRhaWVyIiwiUXVlc3Rpb25TZWN0aW9uIiwiQW5zd2VyU2VjdGlvbiIsInF1ZXN0aW9uTnVtYmVyS2V5ZnJhbWUiLCJRdWVzdGlvbkRpdiIsIlF1ZXN0aW9uU3ViRGl2IiwiQW5zd2VyRGl2IiwiUXVlc3Rpb25UaXRsZSIsIkFuc3dlclRpdGxlIiwiUXVlc3Rpb25OdW1iZXIiLCJpc0NsaWNrIiwiV2h5SXQiLCJxdWVzdGlvbkluZGV4Iiwic2V0UXVlc3Rpb25JbmRleCIsInR5cGluZ1RpbWVyIiwic2V0VHlwaW5nVGltZXIiLCJhbnN3ZXJUaXRsZVJlZiIsImFuc3dlckRpdlJlZiIsInFuYUFycmF5IiwicXVlc3Rpb24iLCJhbnN3ZXIiLCJxdWVzdGlvbkNvbG9yIiwib25DbGlja1F1ZXN0aW9uIiwiYm94U2hhZG93IiwicW5hIiwic2V0SXNFbmQiLCJzZXRDdXJyZW50Q29tcG9uZW50Tm8iLCJzZXRJc1BhZ2VDaGFuZ2luZyIsInJlcyIsInBheWxvYWQiLCJJbmRleE1haW5Db250YWluZXIiLCJJbmRleFN1YkNvbnRhaW5lciIsIm1heFdpZHRoIiwiQ29tcG9uZW50Q29udGFpbmVyIiwiSW5kZXgiLCJpc0VuZCIsImluaXRSZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsTUFBTUEsa0JBQWtCLEdBQUcsQ0FBM0I7QUFNQSxNQUFNQyxhQUFhLEdBQUdDLHVFQUFIO0FBQUE7QUFBQTtBQUFBLDJRQU1NQyxLQUFELElBQTJCQSxLQUFLLENBQUNDLGVBTnRDLEVBT1FKLGtCQVBSLENBQW5CO0FBY0EsTUFBTUssYUFBYSxHQUFHSCx1RUFBSDtBQUFBO0FBQUE7QUFBQSwrR0FDUUYsa0JBRFIsQ0FBbkI7QUFjQSxNQUFNTSxlQUFlLEdBQUdKLHVFQUFIO0FBQUE7QUFBQTtBQUFBLGtEQUVUQyxLQUFELElBQTZCQSxLQUFLLENBQUNJLFdBQU4sR0FBb0IsRUFGdkMsQ0FBckI7QUFNQSxNQUFNQyxhQUFhLEdBQUdOLDJFQUFIO0FBQUE7QUFBQTtBQUFBLHdDQUFuQjtBQVNBLE1BQU1PLGNBQWMsR0FBR1AsdUVBQUg7QUFBQTtBQUFBO0FBQUEsc0RBQ0tDLEtBQUQsSUFBNEJBLEtBQUssQ0FBQ0MsZUFEdEMsQ0FBcEI7QUFNQSxNQUFNTSxhQUFhLEdBQUdSLHVFQUFIO0FBQUE7QUFBQTtBQUFBLCtHQUFuQjtBQVNBLE1BQU1TLGNBQWMsR0FBR1QsdUVBQUg7QUFBQTtBQUFBO0FBQUEsZ0dBQXBCO0FBVUEsTUFBTVUsWUFBWSxHQUFHViwyRUFBSDtBQUFBO0FBQUE7QUFBQSw0RUFBbEI7QUFPQSxNQUFNVyxVQUFVLEdBQUdYLHVFQUFIO0FBQUE7QUFBQTtBQUFBLDBGQUFoQjtBQVFBLE1BQU1ZLFdBQVcsR0FBR1osdUVBQUg7QUFBQTtBQUFBO0FBQUEsbUdBQWpCO0FBUUEsTUFBTWEsS0FBSyxHQUFHYix3RUFBSDtBQUFBO0FBQUE7QUFBQSxnRUFFT0Ysa0JBRlAsQ0FBWDs7QUFXQSxNQUFNZ0IsSUFBcUIsR0FBRyxDQUFDO0FBQUVDLFVBQUY7QUFBWVY7QUFBWixDQUFELEtBQTRDO0FBQ3RFLFFBQU1XLFFBQVEsR0FBR0Msd0RBQVcsRUFBNUIsQ0FEc0UsQ0FHdEU7O0FBQ0EsUUFBTUMsa0JBQWtCLEdBQUdDLHdEQUFXLENBQUVDLEtBQUQsSUFBdUJBLEtBQUssQ0FBQ0MsV0FBTixDQUFrQkgsa0JBQTFDLENBQXRDO0FBQ0EsUUFBTUksVUFBVSxHQUFHSCx3REFBVyxDQUFFQyxLQUFELElBQXVCQSxLQUFLLENBQUNDLFdBQU4sQ0FBa0JDLFVBQTFDLENBQTlCO0FBQ0EsUUFBTUMsb0JBQW9CLEdBQUdKLHdEQUFXLENBQUVDLEtBQUQsSUFBdUJBLEtBQUssQ0FBQ0MsV0FBTixDQUFrQkUsb0JBQTFDLENBQXhDO0FBQ0EsUUFBTUMsY0FBYyxHQUFHTCx3REFBVyxDQUFFQyxLQUFELElBQXVCQSxLQUFLLENBQUNDLFdBQU4sQ0FBa0JHLGNBQTFDLENBQWxDLENBUHNFLENBU3RFOztBQUNBLFFBQU0sQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLElBQW9CQywyQ0FBQSxDQUF3QixLQUF4QixDQUExQjtBQUNBLFFBQU0sQ0FBQ0MsUUFBRCxFQUFXQyxXQUFYLElBQTBCRiwyQ0FBQSxDQUF3QixLQUF4QixDQUFoQyxDQVhzRSxDQWF0RTs7QUFDQSxRQUFNRyxnQkFBZ0IsR0FBR0gseUNBQUEsRUFBekI7QUFDQSxRQUFNSSxnQkFBZ0IsR0FBR0oseUNBQUEsRUFBekI7QUFDQSxRQUFNSyxRQUFRLEdBQUdMLHlDQUFBLEVBQWpCLENBaEJzRSxDQWtCdEU7O0FBQ0FBLDhDQUFBLENBQWdCLE1BQU07QUFDbEI7QUFDQUksb0JBQWdCLENBQUNFLE9BQWpCLENBQXlCQyxLQUF6QixDQUErQkMsUUFBL0IsR0FBMEMsUUFBMUM7O0FBRUEsUUFBSWpCLGtCQUFrQixLQUFLYixXQUEzQixFQUF3QztBQUNwQztBQUNBeUIsc0JBQWdCLENBQUNHLE9BQWpCLENBQXlCQyxLQUF6QixDQUErQkUsUUFBL0IsR0FBMEMsVUFBMUM7QUFDQU4sc0JBQWdCLENBQUNHLE9BQWpCLENBQXlCQyxLQUF6QixDQUErQkcsT0FBL0IsR0FBeUMsT0FBekM7QUFDQVAsc0JBQWdCLENBQUNHLE9BQWpCLENBQXlCQyxLQUF6QixDQUErQkksU0FBL0IsR0FBNEMsRUFBNUM7QUFDQVIsc0JBQWdCLENBQUNHLE9BQWpCLENBQXlCQyxLQUF6QixDQUErQkssTUFBL0IsR0FBeUMsR0FBRSxNQUFNbEMsV0FBWSxFQUE3RDtBQUVBMEIsc0JBQWdCLENBQUNFLE9BQWpCLENBQXlCQyxLQUF6QixDQUErQk0sT0FBL0IsR0FBeUMsRUFBekM7QUFDQVQsc0JBQWdCLENBQUNFLE9BQWpCLENBQXlCUSxRQUF6QixDQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxFQVJvQyxDQVFLOztBQUV6Q1QsY0FBUSxDQUFDQyxPQUFULENBQWlCQyxLQUFqQixDQUF1Qk0sT0FBdkIsR0FBaUMsRUFBakM7QUFFQWQsY0FBUSxDQUFDLElBQUQsQ0FBUixDQVpvQyxDQVlwQjs7QUFDaEIsVUFBSUssZ0JBQWdCLENBQUNFLE9BQWpCLENBQXlCUyxZQUF6QixLQUEwQ1gsZ0JBQWdCLENBQUNFLE9BQWpCLENBQXlCVSxZQUF2RSxFQUFxRjtBQUNqRjtBQUNBZCxtQkFBVyxDQUFDLElBQUQsQ0FBWDtBQUNILE9BSEQsTUFHTztBQUNIQSxtQkFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNIO0FBQ0osS0FuQkQsTUFtQk8sSUFBSVgsa0JBQWtCLEdBQUdiLFdBQXpCLEVBQXNDO0FBQ3pDO0FBQ0F5QixzQkFBZ0IsQ0FBQ0csT0FBakIsQ0FBeUJDLEtBQXpCLENBQStCRSxRQUEvQixHQUEwQyxPQUExQztBQUNBTixzQkFBZ0IsQ0FBQ0csT0FBakIsQ0FBeUJDLEtBQXpCLENBQStCRyxPQUEvQixHQUF5QyxPQUF6QztBQUNBUCxzQkFBZ0IsQ0FBQ0csT0FBakIsQ0FBeUJDLEtBQXpCLENBQStCSSxTQUEvQixHQUE0QyxpQkFBNUM7QUFDQVIsc0JBQWdCLENBQUNHLE9BQWpCLENBQXlCQyxLQUF6QixDQUErQkssTUFBL0IsR0FBeUMsR0FBRSxLQUFLbEMsV0FBWSxFQUE1RDtBQUVBMEIsc0JBQWdCLENBQUNFLE9BQWpCLENBQXlCQyxLQUF6QixDQUErQk0sT0FBL0IsR0FBeUMsTUFBekM7QUFFQVIsY0FBUSxDQUFDQyxPQUFULENBQWlCQyxLQUFqQixDQUF1Qk0sT0FBdkIsR0FBaUMsTUFBakM7QUFDSCxLQVZNLE1BVUE7QUFDSDtBQUNBVixzQkFBZ0IsQ0FBQ0csT0FBakIsQ0FBeUJDLEtBQXpCLENBQStCRSxRQUEvQixHQUEwQyxVQUExQztBQUNBTixzQkFBZ0IsQ0FBQ0csT0FBakIsQ0FBeUJDLEtBQXpCLENBQStCRyxPQUEvQixHQUF5QyxPQUF6QztBQUNBUCxzQkFBZ0IsQ0FBQ0csT0FBakIsQ0FBeUJDLEtBQXpCLENBQStCSSxTQUEvQixHQUE0QyxFQUE1QztBQUNBUixzQkFBZ0IsQ0FBQ0csT0FBakIsQ0FBeUJDLEtBQXpCLENBQStCSyxNQUEvQixHQUF5QyxHQUFFLEtBQUtsQyxXQUFZLEVBQTVEO0FBRUEwQixzQkFBZ0IsQ0FBQ0UsT0FBakIsQ0FBeUJDLEtBQXpCLENBQStCTSxPQUEvQixHQUF5QyxFQUF6QztBQUVBUixjQUFRLENBQUNDLE9BQVQsQ0FBaUJDLEtBQWpCLENBQXVCTSxPQUF2QixHQUFpQyxFQUFqQztBQUNIOztBQUVEeEIsWUFBUSxDQUFDNEIseUVBQXVCLENBQUMsSUFBRCxDQUF4QixDQUFSO0FBQ0FDLGNBQVUsQ0FBQyxNQUFNO0FBQ2IsVUFBSTNCLGtCQUFrQixLQUFLYixXQUEzQixFQUF3QztBQUNwQzBCLHdCQUFnQixDQUFDRSxPQUFqQixDQUF5QkMsS0FBekIsQ0FBK0JDLFFBQS9CLEdBQTBDLE1BQTFDO0FBQ0g7O0FBRURuQixjQUFRLENBQUM0Qix5RUFBdUIsQ0FBQyxLQUFELENBQXhCLENBQVI7QUFDSCxLQU5TLEVBTVA5QyxrQkFBa0IsR0FBRyxJQU5kLENBQVY7QUFPSCxHQXJERCxFQXFERyxDQUFDb0Isa0JBQUQsQ0FyREgsRUFuQnNFLENBMEV0RTs7QUFDQSxRQUFNNEIsYUFBYSxHQUFJekMsV0FBRCxJQUFpQjtBQUNuQztBQUNBLFFBQUltQixjQUFKLEVBQW9CO0FBQ2hCO0FBQ0g7O0FBRURSLFlBQVEsQ0FBQytCLDZFQUEyQixDQUFDMUMsV0FBRCxDQUE1QixDQUFSO0FBQ0gsR0FQRCxDQTNFc0UsQ0FvRnRFOzs7QUFDQSxRQUFNMkMscUJBQXFCLEdBQUlDLENBQUQsSUFBc0M7QUFDaEU7QUFDQSxRQUFJekIsY0FBSixFQUFvQjtBQUNoQjtBQUNILEtBSitELENBTWhFOzs7QUFDQSxRQUFJTixrQkFBa0IsS0FBS2IsV0FBM0IsRUFBd0M7QUFDcEM7QUFDSCxLQVQrRCxDQVdoRTs7O0FBQ0EsUUFBSTRDLENBQUMsQ0FBQ0MsYUFBRixDQUFnQkMsU0FBaEIsS0FBOEIsQ0FBbEMsRUFBcUM7QUFDakN6QixjQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0gsS0FGRCxNQUVPO0FBQ0hBLGNBQVEsQ0FBQyxLQUFELENBQVI7QUFDSCxLQWhCK0QsQ0FrQmhFOzs7QUFDQSxRQUFJdUIsQ0FBQyxDQUFDQyxhQUFGLENBQWdCQyxTQUFoQixHQUE0QkYsQ0FBQyxDQUFDQyxhQUFGLENBQWdCUixZQUE1QyxJQUE0RE8sQ0FBQyxDQUFDQyxhQUFGLENBQWdCUCxZQUFoRixFQUE4RjtBQUMxRmQsaUJBQVcsQ0FBQyxJQUFELENBQVg7QUFDSCxLQUZELE1BRU87QUFDSEEsaUJBQVcsQ0FBQyxLQUFELENBQVg7QUFDSDtBQUNKLEdBeEJELENBckZzRSxDQStHdEU7OztBQUNBLFFBQU11QixvQkFBb0IsR0FBSUgsQ0FBRCxJQUF5QztBQUNsRTtBQUNBLFFBQUl6QixjQUFKLEVBQW9CO0FBQ2hCO0FBQ0gsS0FKaUUsQ0FNbEU7OztBQUNBLFFBQUlOLGtCQUFrQixLQUFLYixXQUEzQixFQUF3QztBQUNwQztBQUNILEtBVGlFLENBV2xFOzs7QUFDQSxRQUFJb0IsS0FBSyxJQUFJd0IsQ0FBQyxDQUFDSSxXQUFGLENBQWNDLE1BQWQsR0FBdUIsQ0FBcEMsRUFBdUM7QUFDbkNSLG1CQUFhLENBQUN6QyxXQUFXLEdBQUcsQ0FBZixDQUFiO0FBQ0gsS0FkaUUsQ0FnQmxFOzs7QUFDQSxRQUFJdUIsUUFBUSxJQUFJcUIsQ0FBQyxDQUFDSSxXQUFGLENBQWNDLE1BQWQsR0FBdUIsQ0FBdkMsRUFBMEM7QUFDdEM7QUFDQSxVQUFJcEMsa0JBQWtCLEdBQUdJLFVBQVUsQ0FBQ2lDLE1BQVgsR0FBb0IsQ0FBN0MsRUFBZ0Q7QUFDNUNULHFCQUFhLENBQUN6QyxXQUFXLEdBQUcsQ0FBZixDQUFiO0FBQ0g7QUFDSjtBQUNKLEdBdkJEOztBQXlCQSxzQkFDSTtBQUFBLDJCQUNJLDhEQUFDLGFBQUQ7QUFBZSxTQUFHLEVBQUV5QixnQkFBcEI7QUFBc0MscUJBQWUsRUFBRVAsb0JBQW9CLENBQUNsQixXQUFELENBQTNFO0FBQUEsOEJBQ0ksOERBQUMsYUFBRDtBQUFlLFdBQUcsRUFBRTBCLGdCQUFwQjtBQUFzQyxnQkFBUSxFQUFFaUIscUJBQWhEO0FBQXVFLGVBQU8sRUFBRUksb0JBQWhGO0FBQUEsa0JBQ0tyQztBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFLSSw4REFBQyxlQUFEO0FBQWlCLG1CQUFXLEVBQUVWLFdBQTlCO0FBQUEsK0JBQ0ksOERBQUMsYUFBRDtBQUFlLGlCQUFPLEVBQUUsTUFBTXlDLGFBQWEsQ0FBQ3pDLFdBQUQsQ0FBM0M7QUFBQSxrQ0FDSSw4REFBQyxjQUFEO0FBQWdCLDJCQUFlLEVBQUVrQixvQkFBb0IsQ0FBQ2xCLFdBQUQ7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUVJLDhEQUFDLGFBQUQ7QUFBQSxtQ0FDSSw4REFBQyxLQUFEO0FBQU8saUJBQUcsRUFBRTJCLFFBQVo7QUFBQSx3QkFBdUJWLFVBQVUsQ0FBQ2pCLFdBQUQ7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMSixlQWNJLDhEQUFDLGNBQUQ7QUFBQSxnQ0FDSSw4REFBQyxZQUFEO0FBQUEsa0NBQ0ksOERBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBRUksOERBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUtJLDhEQUFDLFlBQUQ7QUFBQSxrQ0FDSSw4REFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFFSSw4REFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxKLGVBU0ksOERBQUMsWUFBRDtBQUFBLGtDQUNJLDhEQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUVJLDhEQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVEosZUFhSSw4REFBQyxZQUFEO0FBQUEsa0NBQ0ksOERBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBRUksOERBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFiSixlQWlCSSw4REFBQyxZQUFEO0FBQUEsa0NBQ0ksOERBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBRUksOERBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFqQkosZUFxQkksOERBQUMsWUFBRDtBQUFBLGtDQUNJLDhEQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUVJLDhEQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBckJKLGVBeUJJLDhEQUFDLFlBQUQ7QUFBQSxrQ0FDSSw4REFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFFSSw4REFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXpCSixlQTZCSSw4REFBQyxZQUFEO0FBQUEsa0NBQ0ksOERBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBRUksOERBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkE3QkosZUFpQ0ksOERBQUMsWUFBRDtBQUFBLGtDQUNJLDhEQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUVJLDhEQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBakNKLGVBcUNJLDhEQUFDLFlBQUQ7QUFBQSxrQ0FDSSw4REFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFFSSw4REFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXJDSixlQXlDSSw4REFBQyxZQUFEO0FBQUEsa0NBQ0ksOERBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBRUksOERBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF6Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBaUVILENBMU1EOztBQTRNQSwrREFBZVMsSUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5VEE7QUFDQTtBQUNBO0FBQ0E7QUFHQSxNQUFNMEMsZUFBZSxHQUFHeEQsdUVBQUg7QUFBQTtBQUFBO0FBQUEseUtBQXJCO0FBUUEsTUFBTXlELFFBQVEsR0FBR3pELHVFQUFIO0FBQUE7QUFBQTtBQUFBLHlCQUFkO0FBSUEsTUFBTTBELFlBQVksR0FBRzFELDJFQUFIO0FBQUE7QUFBQTtBQUFBLHNOQUFsQjtBQWFBLE1BQU0yRCxlQUFlLEdBQUczRCwyRUFBSDtBQUFBO0FBQUE7QUFBQSxzSUFBckI7QUFXQSxNQUFNNEQsa0JBQWtCLEdBQUc1RCx1RUFBSDtBQUFBO0FBQUE7QUFBQSxRQUF4QjtBQUVBLE1BQU02RCxnQkFBZ0IsR0FBRzdELHVFQUFIO0FBQUE7QUFBQTtBQUFBLHdLQUF0QjtBQWFBLE1BQU04RCxhQUFhLEdBQUc5RCwyRUFBSDtBQUFBO0FBQUE7QUFBQSwwQkFBbkI7QUFJQSxNQUFNK0QsU0FBUyxHQUFHL0QsdUVBQUg7QUFBQTtBQUFBO0FBQUEseVRBQWY7QUFtQkEsTUFBTWdFLFVBQVUsR0FBR2hFLHVFQUFIO0FBQUE7QUFBQTtBQUFBLDZMQUFoQjtBQXFCQSxNQUFNaUUsV0FBVyxHQUFHakUsdUVBQUg7QUFBQTtBQUFBO0FBQUEsNk9BRVFDLEtBQUQsSUFBeUJBLEtBQUssQ0FBQ0MsZUFGdEMsQ0FBakI7QUFrQkEsTUFBTWdFLFNBQVMsR0FBR2xFLHVFQUFIO0FBQUE7QUFBQTtBQUFBLDZMQUFmO0FBcUJBLE1BQU1tRSxXQUFXLEdBQUduRSx3RUFBSDtBQUFBO0FBQUE7QUFBQSx1RUFDSEMsS0FBRCxJQUF5QkEsS0FBSyxDQUFDbUUsS0FEM0IsQ0FBakI7QUFZQSxNQUFNQyxlQUFlLEdBQUdyRSx3RUFBSDtBQUFBO0FBQUE7QUFBQSxrSkFRZEMsS0FBRCxJQUE2QjtBQUMzQixNQUFJQSxLQUFLLENBQUNxRSxJQUFOLEtBQWUsUUFBbkIsRUFBNkI7QUFDekIsV0FBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkJyRSxLQUFLLENBQUNDLGVBQWdCO0FBQ25ELGtDQUFrQ0QsS0FBSyxDQUFDc0UsR0FBSTtBQUM1QztBQUNBLGFBVlk7QUFXSCxHQVpELE1BWU8sSUFBSXRFLEtBQUssQ0FBQ3FFLElBQU4sS0FBZSxVQUFuQixFQUErQjtBQUNsQyxXQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QnJFLEtBQUssQ0FBQ0MsZUFBZ0I7QUFDbkQ7QUFDQSxhQVRZO0FBVUgsR0FYTSxNQVdBLElBQUlELEtBQUssQ0FBQ3FFLElBQU4sS0FBZSxVQUFuQixFQUErQjtBQUNsQyxXQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QnJFLEtBQUssQ0FBQ0MsZUFBZ0I7QUFDbkQ7QUFDQSxhQVRZO0FBVUgsR0FYTSxNQVdBO0FBQ0gsV0FBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkJELEtBQUssQ0FBQ0MsZUFBZ0I7QUFDbkQ7QUFDQSxhQVRZO0FBVUg7QUFDSixDQXZEZ0IsQ0FBckI7QUEwREEsTUFBTXNFLFdBQVcsR0FBR3hFLHdFQUFIO0FBQUE7QUFBQTtBQUFBLDZGQUFqQjtBQVNBLE1BQU15RSxXQUFXLEdBQUd6RSx1RUFBSDtBQUFBO0FBQUE7QUFBQSwwQ0FBakI7QUFJQSxNQUFNMEUsWUFBWSxHQUFHMUUsdUVBQUg7QUFBQTtBQUFBO0FBQUEsNkVBQWxCOztBQVVBLE1BQU0yRSxNQUF5QixHQUFHLENBQUM7QUFBRXRFO0FBQUYsQ0FBRCxLQUFrQztBQUNoRTtBQUNBLFFBQU1rQixvQkFBb0IsR0FBR0osd0RBQVcsQ0FBRUMsS0FBRCxJQUF1QkEsS0FBSyxDQUFDQyxXQUFOLENBQWtCRSxvQkFBMUMsQ0FBeEMsQ0FGZ0UsQ0FJaEU7O0FBQ0EsUUFBTSxDQUFDcUQsWUFBRCxFQUFlQyxlQUFmLElBQWtDbEQsMkNBQUEsQ0FBdUIsRUFBdkIsQ0FBeEMsQ0FMZ0UsQ0FPaEU7O0FBQ0EsUUFBTW1ELG1CQUFtQixHQUFHbkQseUNBQUEsRUFBNUIsQ0FSZ0UsQ0FVaEU7O0FBQ0EsUUFBTW9ELGFBQWEsR0FBRyxDQUFDOUIsQ0FBRCxFQUFtRCtCLEdBQW5ELEtBQW1FO0FBQ3JGLFFBQUlGLG1CQUFtQixDQUFDN0MsT0FBeEIsRUFBaUM7QUFDN0JnQixPQUFDLENBQUNnQyxlQUFGO0FBRUFKLHFCQUFlLENBQUNHLEdBQUQsQ0FBZjtBQUNBRix5QkFBbUIsQ0FBQzdDLE9BQXBCLENBQTRCQyxLQUE1QixDQUFrQ0csT0FBbEMsR0FBNEMsTUFBNUM7QUFDSDtBQUNKLEdBUEQ7O0FBU0EsUUFBTTZDLHVCQUF1QixHQUFHLE1BQU07QUFDbEMsUUFBSUosbUJBQW1CLENBQUM3QyxPQUF4QixFQUFpQztBQUM3QjRDLHFCQUFlLENBQUMsRUFBRCxDQUFmO0FBQ0FDLHlCQUFtQixDQUFDN0MsT0FBcEIsQ0FBNEJDLEtBQTVCLENBQWtDRyxPQUFsQyxHQUE0QyxNQUE1QztBQUNIO0FBQ0osR0FMRDs7QUFPQSxzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLDBDQUFEO0FBQU0saUJBQVcsRUFBRWhDLFdBQW5CO0FBQUEsOEJBQ0ksOERBQUMsYUFBRDtBQUFBLCtCQUNJLDhEQUFDLFNBQUQ7QUFBQSxrQ0FDSSw4REFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFFSSw4REFBQyxXQUFEO0FBQWEsMkJBQWUsRUFBRWtCLG9CQUFvQixDQUFDbEIsV0FBRDtBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKLGVBR0ksOERBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUhKLGVBSUksOERBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBVUksOERBQUMsZUFBRDtBQUFBLGdDQUNJLDhEQUFDLFlBQUQ7QUFBQSxpQ0FDSSw4REFBQyxXQUFEO0FBQWEsaUJBQUssRUFBRSxTQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFLSSw4REFBQyxlQUFEO0FBQUEsa0NBQ0ksOERBQUMsUUFBRDtBQUFBLG1DQUNJLDhEQUFDLFdBQUQ7QUFBYSxpQkFBRyxFQUFDO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBS0ksOERBQUMsa0JBQUQ7QUFBQSxvQ0FDSSw4REFBQyxlQUFEO0FBQWlCLDZCQUFlLEVBQUVrQixvQkFBb0IsQ0FBQ2xCLFdBQUQsQ0FBdEQ7QUFBcUUsa0JBQUksRUFBQyxVQUExRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixlQUlJLDhEQUFDLGVBQUQ7QUFDSSw2QkFBZSxFQUFFa0Isb0JBQW9CLENBQUNsQixXQUFELENBRHpDO0FBRUksa0JBQUksRUFBQyxRQUZUO0FBR0ksaUJBQUcsRUFBQywwQkFIUjtBQUlJLHFCQUFPLEVBQUc0QyxDQUFELElBQU84QixhQUFhLENBQUM5QixDQUFELEVBQUkscUJBQUosQ0FKakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSkosZUFZSSw4REFBQyxlQUFEO0FBQ0ksNkJBQWUsRUFBRTFCLG9CQUFvQixDQUFDbEIsV0FBRCxDQUR6QztBQUVJLGtCQUFJLEVBQUMsUUFGVDtBQUdJLGlCQUFHLEVBQUMsaUNBSFI7QUFJSSxxQkFBTyxFQUFHNEMsQ0FBRCxJQUFPOEIsYUFBYSxDQUFDOUIsQ0FBRCxFQUFJLDRCQUFKLENBSmpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVpKLGVBb0JJLDhEQUFDLGVBQUQ7QUFBaUIsNkJBQWUsRUFBRTFCLG9CQUFvQixDQUFDbEIsV0FBRCxDQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFwQkosZUF1QkksOERBQUMsZUFBRDtBQUNJLDZCQUFlLEVBQUVrQixvQkFBb0IsQ0FBQ2xCLFdBQUQsQ0FEekM7QUFFSSxrQkFBSSxFQUFDLFFBRlQ7QUFHSSxpQkFBRyxFQUFDLCtCQUhSO0FBSUkscUJBQU8sRUFBRzRDLENBQUQsSUFBTzhCLGFBQWEsQ0FBQzlCLENBQUQsRUFBSSwwQkFBSixDQUpqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkF2Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVkosZUF1REksOERBQUMsZUFBRDtBQUFBLGdDQUNJLDhEQUFDLFlBQUQ7QUFBQSxpQ0FDSSw4REFBQyxXQUFEO0FBQWEsaUJBQUssRUFBRSxTQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFLSSw4REFBQyxlQUFEO0FBQUEsa0NBQ0ksOERBQUMsUUFBRDtBQUFBLG1DQUNJLDhEQUFDLFdBQUQ7QUFBYSxpQkFBRyxFQUFDO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBS0ksOERBQUMsa0JBQUQ7QUFBQSxvQ0FDSSw4REFBQyxlQUFEO0FBQWlCLDZCQUFlLEVBQUUxQixvQkFBb0IsQ0FBQ2xCLFdBQUQsQ0FBdEQ7QUFBcUUsa0JBQUksRUFBQyxVQUExRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixlQUlJLDhEQUFDLGVBQUQ7QUFBaUIsNkJBQWUsRUFBRWtCLG9CQUFvQixDQUFDbEIsV0FBRCxDQUF0RDtBQUFxRSxrQkFBSSxFQUFDLFVBQTFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUpKLGVBT0ksOERBQUMsZUFBRDtBQUFpQiw2QkFBZSxFQUFFa0Isb0JBQW9CLENBQUNsQixXQUFELENBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVBKLGVBVUksOERBQUMsZUFBRDtBQUFpQiw2QkFBZSxFQUFFa0Isb0JBQW9CLENBQUNsQixXQUFELENBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVZKLGVBYUksOERBQUMsZUFBRDtBQUFpQiw2QkFBZSxFQUFFa0Isb0JBQW9CLENBQUNsQixXQUFELENBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQWJKLGVBZ0JJLDhEQUFDLGVBQUQ7QUFBaUIsNkJBQWUsRUFBRWtCLG9CQUFvQixDQUFDbEIsV0FBRCxDQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFoQkosZUFtQkksOERBQUMsZUFBRDtBQUFpQiw2QkFBZSxFQUFFa0Isb0JBQW9CLENBQUNsQixXQUFELENBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQW5CSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF2REo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBNkZJLDhEQUFDLGdCQUFEO0FBQWtCLFNBQUcsRUFBRXlFLG1CQUF2QjtBQUE0QyxhQUFPLEVBQUVJLHVCQUFyRDtBQUFBLDZCQUNJLDhEQUFDLFlBQUQ7QUFBYyxXQUFHLEVBQUVOO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTdGSjtBQUFBLGtCQURKO0FBbUdILENBOUhEOztBQWdJQSwrREFBZUQsTUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pXQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1RLFNBQVMsR0FBR25GLHVFQUFIO0FBQUE7QUFBQTtBQUFBLGtGQUFmO0FBUUEsTUFBTW9GLFFBQVEsR0FBR3BGLHVFQUFIO0FBQUE7QUFBQTtBQUFBLDRDQUFkO0FBS0EsTUFBTXFGLFdBQVcsR0FBR3JGLDJFQUFIO0FBQUE7QUFBQTtBQUFBLDRHQUFqQjtBQVNBLE1BQU1zRixTQUFTLEdBQUd0Rix3RUFBSDtBQUFBO0FBQUE7QUFBQSxtQ0FBZjtBQVNBLE1BQU11RixTQUFTLEdBQUd2Rix3RUFBSDtBQUFBO0FBQUE7QUFBQSxvQ0FDREMsS0FBRCxJQUF1QkEsS0FBSyxDQUFDbUUsS0FEM0IsQ0FBZjtBQUtBLE1BQU1vQixXQUFXLEdBQUd4Rix3RUFBSDtBQUFBO0FBQUE7QUFBQSw0RUFBakI7O0FBTUEsTUFBTXlGLElBQUksR0FBRyxNQUFtQjtBQUM1QixRQUFNekUsUUFBUSxHQUFHQyx3REFBVyxFQUE1QixDQUQ0QixDQUc1Qjs7QUFDQSxRQUFNeUUsWUFBWSxHQUFHL0QseUNBQUEsRUFBckI7QUFFQSxRQUFNZ0UsZ0JBQWdCLEdBQUdoRSx5Q0FBQSxFQUF6QjtBQUNBLFFBQU1pRSxnQkFBZ0IsR0FBR2pFLHlDQUFBLEVBQXpCO0FBQ0EsUUFBTWtFLGdCQUFnQixHQUFHbEUseUNBQUEsRUFBekI7QUFDQSxRQUFNbUUsZ0JBQWdCLEdBQUduRSx5Q0FBQSxFQUF6QjtBQUNBLFFBQU1vRSxnQkFBZ0IsR0FBR3BFLHlDQUFBLEVBQXpCO0FBQ0EsUUFBTXFFLGdCQUFnQixHQUFHckUseUNBQUEsRUFBekI7QUFDQSxRQUFNc0UsZ0JBQWdCLEdBQUd0RSx5Q0FBQSxFQUF6QjtBQUNBLFFBQU11RSxnQkFBZ0IsR0FBR3ZFLHlDQUFBLEVBQXpCO0FBRUEsUUFBTXdFLGFBQWEsR0FBR3hFLHlDQUFBLEVBQXRCO0FBQ0EsUUFBTXlFLGFBQWEsR0FBR3pFLHlDQUFBLEVBQXRCO0FBQ0EsUUFBTTBFLGFBQWEsR0FBRzFFLHlDQUFBLEVBQXRCO0FBQ0EsUUFBTTJFLGFBQWEsR0FBRzNFLHlDQUFBLEVBQXRCLENBbEI0QixDQW9CNUI7O0FBQ0EsUUFBTTRFLElBQUksR0FBRyxHQUFiO0FBRUEsUUFBTUMsT0FBTyxHQUFHLENBQ1osZ0RBRFksRUFFWixLQUZZLEVBR1osYUFIWSxFQUlaLE9BSlksRUFLWixpRUFMWSxFQU1aLE1BTlksRUFPWixpQkFQWSxFQVFaLE9BUlksRUFTWix5QkFUWSxDQUFoQjtBQVlBLFFBQU1DLFVBQVUsR0FBRyxDQUNmO0FBQ0lDLFVBQU0sRUFBRUYsT0FBTyxDQUFDLENBQUQsQ0FEbkI7QUFFSUcsU0FBSyxFQUFFLENBRlg7QUFHSXBELFVBQU0sRUFBRTtBQUhaLEdBRGUsRUFNZjtBQUNJbUQsVUFBTSxFQUFFRixPQUFPLENBQUMsQ0FBRCxDQURuQjtBQUVJRyxTQUFLLEVBQUUsQ0FGWDtBQUdJcEQsVUFBTSxFQUFFZ0QsSUFBSSxHQUFHQyxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdqRDtBQUg5QixHQU5lLEVBV2Y7QUFDSW1ELFVBQU0sRUFBRUYsT0FBTyxDQUFDLENBQUQsQ0FEbkI7QUFFSUcsU0FBSyxFQUFFSixJQUFJLEdBQUdDLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV2pELE1BRjdCO0FBR0lBLFVBQU0sRUFBRWdELElBQUksR0FBR0MsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXakQ7QUFIOUIsR0FYZSxFQWdCZjtBQUNJbUQsVUFBTSxFQUFFRixPQUFPLENBQUMsQ0FBRCxDQURuQjtBQUVJRyxTQUFLLEVBQUVKLElBQUksSUFBSUMsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXakQsTUFBWCxHQUFvQmlELE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV2pELE1BQS9CLEdBQXdDaUQsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXakQsTUFBdkQsQ0FGZjtBQUdJQSxVQUFNLEVBQUU7QUFIWixHQWhCZSxFQXFCZjtBQUNJbUQsVUFBTSxFQUFFRixPQUFPLENBQUMsQ0FBRCxDQURuQjtBQUVJRyxTQUFLLEVBQUVKLElBQUksSUFBSUMsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXakQsTUFBWCxHQUFvQmlELE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV2pELE1BQS9CLEdBQXdDaUQsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXakQsTUFBdkQsQ0FGZjtBQUdJQSxVQUFNLEVBQUU7QUFIWixHQXJCZSxFQTBCZjtBQUNJbUQsVUFBTSxFQUFFRixPQUFPLENBQUMsQ0FBRCxDQURuQjtBQUVJRyxTQUFLLEVBQUVKLElBQUksSUFBSUMsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXakQsTUFBWCxHQUFvQmlELE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV2pELE1BQS9CLEdBQXdDaUQsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXakQsTUFBbkQsR0FBNERpRCxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdqRCxNQUEzRSxDQUZmO0FBR0lBLFVBQU0sRUFBRTtBQUhaLEdBMUJlLEVBK0JmO0FBQ0ltRCxVQUFNLEVBQUVGLE9BQU8sQ0FBQyxDQUFELENBRG5CO0FBRUlHLFNBQUssRUFBRUosSUFBSSxJQUFJQyxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdqRCxNQUFYLEdBQW9CaUQsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXakQsTUFBL0IsR0FBd0NpRCxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdqRCxNQUFuRCxHQUE0RGlELE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV2pELE1BQTNFLENBRmY7QUFHSUEsVUFBTSxFQUFFO0FBSFosR0EvQmUsRUFvQ2Y7QUFDSW1ELFVBQU0sRUFBRUYsT0FBTyxDQUFDLENBQUQsQ0FEbkI7QUFFSUcsU0FBSyxFQUNESixJQUFJLElBQ0hDLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV2pELE1BQVgsR0FBb0JpRCxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdqRCxNQUEvQixHQUF3Q2lELE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV2pELE1BQW5ELEdBQTREaUQsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXakQsTUFBdkUsR0FBZ0ZpRCxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdqRCxNQUR4RixDQUhaO0FBS0lBLFVBQU0sRUFBRTtBQUxaLEdBcENlLEVBMkNmO0FBQ0ltRCxVQUFNLEVBQUVGLE9BQU8sQ0FBQyxDQUFELENBRG5CO0FBRUlHLFNBQUssRUFDREosSUFBSSxJQUNIQyxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdqRCxNQUFYLEdBQW9CaUQsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXakQsTUFBL0IsR0FBd0NpRCxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdqRCxNQUFuRCxHQUE0RGlELE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV2pELE1BQXZFLEdBQWdGaUQsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXakQsTUFEeEYsQ0FIWjtBQUtJQSxVQUFNLEVBQUU7QUFMWixHQTNDZSxDQUFuQjtBQW9EQTVCLDhDQUFBLENBQWdCLE1BQU07QUFDbEJpRiwwQkFBc0IsQ0FBQ2pCLGdCQUFELEVBQW1CLENBQW5CLENBQXRCO0FBQ0FpQiwwQkFBc0IsQ0FBQ2hCLGdCQUFELEVBQW1CLENBQW5CLENBQXRCO0FBQ0FpQiwwQkFBc0IsQ0FBQ2hCLGdCQUFELEVBQW1CLENBQW5CLENBQXRCO0FBQ0FnQiwwQkFBc0IsQ0FBQ2YsZ0JBQUQsRUFBbUIsQ0FBbkIsQ0FBdEI7QUFDQWUsMEJBQXNCLENBQUNkLGdCQUFELEVBQW1CLENBQW5CLENBQXRCO0FBQ0FjLDBCQUFzQixDQUFDYixnQkFBRCxFQUFtQixDQUFuQixDQUF0QjtBQUNBYSwwQkFBc0IsQ0FBQ1osZ0JBQUQsRUFBbUIsQ0FBbkIsQ0FBdEI7QUFDQVksMEJBQXNCLENBQUNYLGdCQUFELEVBQW1CLENBQW5CLENBQXRCO0FBRUFZLHlCQUFxQixDQUFDWCxhQUFELEVBQWdCLENBQWhCLEVBQW1CTSxVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNFLEtBQWQsR0FBc0JGLFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY2xELE1BQXZELENBQXJCO0FBQ0F1RCx5QkFBcUIsQ0FBQ1YsYUFBRCxFQUFnQkssVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjRSxLQUFkLEdBQXNCRixVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNsRCxNQUFwRCxFQUE0RGtELFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY0UsS0FBMUUsQ0FBckI7QUFDQUcseUJBQXFCLENBQUNULGFBQUQsRUFBZ0JJLFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY0UsS0FBOUIsRUFBcUNGLFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY0UsS0FBbkQsQ0FBckI7QUFDQUcseUJBQXFCLENBQUNSLGFBQUQsRUFBZ0JHLFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY0UsS0FBOUIsRUFBcUNGLFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY0UsS0FBbkQsQ0FBckI7QUFFQTlELGNBQVUsQ0FBQyxNQUFNO0FBQ2I3QixjQUFRLENBQUMrRixnRUFBYyxDQUFDLElBQUQsQ0FBZixDQUFSO0FBQ0gsS0FGUyxFQUVQTixVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNFLEtBQWQsR0FBc0JKLElBQUksR0FBRyxDQUZ0QixDQUFWO0FBR0gsR0FsQkQsRUFrQkcsRUFsQkgsRUF2RjRCLENBMkc1Qjs7QUFDQSxRQUFNSyxzQkFBc0IsR0FBRyxDQUMzQkksR0FEMkIsRUFFM0JDLEtBRjJCLEtBRVo7QUFDZDtBQUNELFFBQUlELEdBQUcsQ0FBQy9FLE9BQVIsRUFBaUI7QUFDYlksZ0JBQVUsQ0FBQyxNQUFNO0FBQ2IsWUFBSXFFLFNBQVMsR0FBRyxDQUFoQjtBQUNBRixXQUFHLENBQUMvRSxPQUFKLENBQVlrRixTQUFaLEdBQXdCLEVBQXhCO0FBRUEsY0FBTUMsY0FBYyxHQUFHQyxXQUFXLENBQUMsTUFBTTtBQUNyQ0wsYUFBRyxDQUFDL0UsT0FBSixDQUFZa0YsU0FBWixHQUF3QkgsR0FBRyxDQUFDL0UsT0FBSixDQUFZa0YsU0FBWixHQUF3QlYsVUFBVSxDQUFDUSxLQUFELENBQVYsQ0FBa0JQLE1BQWxCLENBQXlCUSxTQUFTLEVBQWxDLENBQWhEO0FBQ0gsU0FGaUMsRUFFL0JYLElBRitCLENBQWxDO0FBSUExRCxrQkFBVSxDQUFDLE1BQU07QUFDYnlFLHVCQUFhLENBQUNGLGNBQUQsQ0FBYjtBQUNILFNBRlMsRUFFUFgsVUFBVSxDQUFDUSxLQUFELENBQVYsQ0FBa0IxRCxNQUZYLENBQVY7QUFHSCxPQVhTLEVBV1BrRCxVQUFVLENBQUNRLEtBQUQsQ0FBVixDQUFrQk4sS0FYWCxDQUFWO0FBWUg7QUFDSixHQWxCRCxDQTVHNEIsQ0FnSTVCOzs7QUFDQSxRQUFNRSxzQkFBc0IsR0FBRyxDQUMzQkcsR0FEMkIsRUFFM0JDLEtBRjJCLEtBRVo7QUFDZDtBQUNELFFBQUlELEdBQUcsQ0FBQy9FLE9BQVIsRUFBaUI7QUFDYlksZ0JBQVUsQ0FBQyxNQUFNO0FBQ2JtRSxXQUFHLENBQUMvRSxPQUFKLENBQVlrRixTQUFaLEdBQXdCVixVQUFVLENBQUNRLEtBQUQsQ0FBVixDQUFrQlAsTUFBMUM7QUFDSCxPQUZTLEVBRVBELFVBQVUsQ0FBQ1EsS0FBRCxDQUFWLENBQWtCTixLQUZYLENBQVY7QUFHSDtBQUNKLEdBVEQ7O0FBV0EsUUFBTUcscUJBQXFCLEdBQUcsQ0FDMUJFLEdBRDBCLEVBRTFCTCxLQUYwQixFQUcxQnBELE1BSDBCLEtBR1Y7QUFDZjtBQUNELFFBQUl5RCxHQUFHLENBQUMvRSxPQUFSLEVBQWlCO0FBQ2JZLGdCQUFVLENBQUMsTUFBTTtBQUNibUUsV0FBRyxDQUFDL0UsT0FBSixDQUFZQyxLQUFaLENBQWtCRyxPQUFsQixHQUE0QixRQUE1QjtBQUNILE9BRlMsRUFFUHNFLEtBRk8sQ0FBVjtBQUlBOUQsZ0JBQVUsQ0FBQyxNQUFNO0FBQ2JtRSxXQUFHLENBQUMvRSxPQUFKLENBQVlDLEtBQVosQ0FBa0JHLE9BQWxCLEdBQTRCLE1BQTVCO0FBQ0gsT0FGUyxFQUVQa0IsTUFGTyxDQUFWO0FBR0g7QUFDSixHQWREOztBQWdCQSxzQkFDSSw4REFBQyxTQUFEO0FBQVcsT0FBRyxFQUFFbUMsWUFBaEI7QUFBQSwyQkFDSSw4REFBQyxXQUFEO0FBQUEsOEJBQ0ksOERBQUMsUUFBRDtBQUFBLGdDQUNJLDhEQUFDLFNBQUQ7QUFBQSxvQkFBWWUsVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjQztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBRUksOERBQUMsU0FBRDtBQUFBLGtDQUNJLDhEQUFDLFNBQUQ7QUFBVyxpQkFBSyxFQUFDLFNBQWpCO0FBQTJCLGVBQUcsRUFBRWY7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUVJO0FBQU0sZUFBRyxFQUFFQztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKLGVBTUksOERBQUMsV0FBRDtBQUFhLGFBQUcsRUFBRU87QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFVSSw4REFBQyxRQUFEO0FBQUEsZ0NBQ0ksOERBQUMsU0FBRDtBQUFBLGtDQUNJLDhEQUFDLFNBQUQ7QUFBVyxpQkFBSyxFQUFDLFNBQWpCO0FBQTJCLGVBQUcsRUFBRU47QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUVJO0FBQU0sZUFBRyxFQUFFQztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBS0ksOERBQUMsV0FBRDtBQUFhLGFBQUcsRUFBRU07QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVkosZUFpQkksOERBQUMsUUFBRDtBQUFBLGdDQUNJLDhEQUFDLFNBQUQ7QUFBQSxrQ0FDSSw4REFBQyxTQUFEO0FBQVcsaUJBQUssRUFBQyxTQUFqQjtBQUEyQixlQUFHLEVBQUVMO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFFSTtBQUFNLGVBQUcsRUFBRUM7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUtJLDhEQUFDLFdBQUQ7QUFBYSxhQUFHLEVBQUVLO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWpCSixlQXdCSSw4REFBQyxRQUFEO0FBQUEsZ0NBQ0ksOERBQUMsU0FBRDtBQUFBLGtDQUNJLDhEQUFDLFNBQUQ7QUFBVyxpQkFBSyxFQUFDLFNBQWpCO0FBQTJCLGVBQUcsRUFBRUo7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUVJO0FBQU0sZUFBRyxFQUFFQztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBS0ksOERBQUMsV0FBRDtBQUFhLGFBQUcsRUFBRUk7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBeEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQW9DSCxDQWhNRDs7QUFrTUEsK0RBQWViLElBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDalBBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUEsTUFBTThCLGNBQWMsR0FBR3ZILHVFQUFIO0FBQUE7QUFBQTtBQUFBLG1EQUFwQjtBQVNBLE1BQU0yRCxlQUFlLEdBQUczRCwyRUFBSDtBQUFBO0FBQUE7QUFBQSxtS0FRTkMsS0FBRCxJQUE2QkEsS0FBSyxDQUFDdUgsTUFSNUIsQ0FBckI7QUFXQSxNQUFNQyxhQUFhLEdBQUd6SCx3RUFBSDtBQUFBO0FBQUE7QUFBQSx1RkFBbkI7QUFNQSxNQUFNMEgsbUJBQW1CLEdBQUcxSCx3RUFBSDtBQUFBO0FBQUE7QUFBQSw2REFBekI7O0FBU0EsTUFBTTJILEtBQXVCLEdBQUcsQ0FBQztBQUFFdEg7QUFBRixDQUFELEtBQWtDO0FBQzlEO0FBQ0EsUUFBTSxDQUFDdUgsV0FBRCxFQUFjQyxjQUFkLElBQWdDbEcsMkNBQUEsQ0FBeUIsRUFBekIsQ0FBdEMsQ0FGOEQsQ0FJOUQ7O0FBQ0EsUUFBTW1HLGlCQUFpQixHQUFHbkcseUNBQUEsRUFBMUI7QUFDQSxRQUFNb0csa0JBQWtCLEdBQUdwRyx5Q0FBQSxFQUEzQixDQU44RCxDQVE5RDs7QUFDQSxRQUFNcUcsYUFBYSxHQUFHLENBQ2xCO0FBQUVDLFNBQUssRUFBRSxJQUFUO0FBQWVDLGVBQVcsRUFBRTtBQUE1QixHQURrQixFQUVsQjtBQUFFRCxTQUFLLEVBQUUsTUFBVDtBQUFpQkMsZUFBVyxFQUFFO0FBQTlCLEdBRmtCLEVBR2xCO0FBQUVELFNBQUssRUFBRSxLQUFUO0FBQWdCQyxlQUFXLEVBQUU7QUFBN0IsR0FIa0IsRUFJbEI7QUFBRUQsU0FBSyxFQUFFLEtBQVQ7QUFBZ0JDLGVBQVcsRUFBRTtBQUE3QixHQUprQixFQUtsQjtBQUFFRCxTQUFLLEVBQUUsSUFBVDtBQUFlQyxlQUFXLEVBQUU7QUFBNUIsR0FMa0IsRUFNbEI7QUFBRUQsU0FBSyxFQUFFLEtBQVQ7QUFBZ0JDLGVBQVcsRUFBRTtBQUE3QixHQU5rQixFQU9sQjtBQUFFRCxTQUFLLEVBQUUsS0FBVDtBQUFnQkMsZUFBVyxFQUFFO0FBQTdCLEdBUGtCLEVBUWxCO0FBQUVELFNBQUssRUFBRSxJQUFUO0FBQWVDLGVBQVcsRUFBRTtBQUE1QixHQVJrQixFQVNsQjtBQUFFRCxTQUFLLEVBQUUsTUFBVDtBQUFpQkMsZUFBVyxFQUFFO0FBQTlCLEdBVGtCLENBQXRCLENBVDhELENBcUI5RDs7QUFDQXZHLDhDQUFBLENBQWdCLE1BQU07QUFDbEJ3RyxrQkFBYztBQUNqQixHQUZELEVBRUcsRUFGSCxFQXRCOEQsQ0EwQjlEO0FBQ0E7O0FBQ0EsUUFBTUEsY0FBYyxHQUFHLE1BQU07QUFDekIsVUFBTUMsVUFBVSxHQUFHTixpQkFBaUIsQ0FBQzdGLE9BQWxCLENBQTBCUyxZQUExQixJQUEwQ3FGLGtCQUFrQixDQUFDOUYsT0FBbkIsQ0FBMkJTLFlBQTNCLEdBQTBDLEVBQXBGLENBQW5CO0FBRUEsVUFBTWtGLFdBQVcsR0FBRyxFQUFwQjs7QUFDQSxTQUFLLElBQUlTLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELFVBQVUsR0FBR0osYUFBYSxDQUFDekUsTUFBL0MsRUFBdUQ4RSxDQUFDLEVBQXhELEVBQTREO0FBQ3hEVCxpQkFBVyxDQUFDVSxJQUFaLENBQWlCRCxDQUFqQjtBQUNIOztBQUVEUixrQkFBYyxDQUFDRCxXQUFELENBQWQ7QUFDSCxHQVREOztBQVdBLHNCQUNJLDhEQUFDLDBDQUFEO0FBQU0sZUFBVyxFQUFFdkgsV0FBbkI7QUFBQSwyQkFDSSw4REFBQyxjQUFEO0FBQWdCLFNBQUcsRUFBRXlILGlCQUFyQjtBQUFBLGlCQUNLRSxhQUFhLENBQUNPLEdBQWQsQ0FBa0IsQ0FBQ0MsUUFBRCxFQUFXdkIsS0FBWCxLQUFxQjtBQUNwQyxZQUFJQSxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNiLDhCQUNJLDhEQUFDLGVBQUQ7QUFBNkIsZUFBRyxFQUFFYyxrQkFBbEM7QUFBQSxvQ0FDSSw4REFBQyxhQUFEO0FBQUEsd0JBQWdCUyxRQUFRLENBQUNQO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREosZUFFSSw4REFBQyxtQkFBRDtBQUFBLHdCQUFzQk8sUUFBUSxDQUFDTjtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZKO0FBQUEsYUFBc0JqQixLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKO0FBTUgsU0FQRCxNQU9PO0FBQ0gsOEJBQ0ksOERBQUMsZUFBRDtBQUFBLG9DQUNJLDhEQUFDLGFBQUQ7QUFBQSx3QkFBZ0J1QixRQUFRLENBQUNQO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREosZUFFSSw4REFBQyxtQkFBRDtBQUFBLHdCQUFzQk8sUUFBUSxDQUFDTjtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZKO0FBQUEsYUFBc0JqQixLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKO0FBTUg7QUFDSixPQWhCQSxDQURMLEVBbUJLVyxXQUFXLENBQUNXLEdBQVosQ0FBaUJFLFVBQUQsSUFBZ0I7QUFDN0IsNEJBQ0ksOERBQUMsZUFBRDtBQUFrQyxnQkFBTSxFQUFFVixrQkFBa0IsQ0FBQzlGLE9BQW5CLENBQTJCUyxZQUEzQixHQUEwQyxDQUFwRjtBQUFBLGtDQUNJLDhEQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUVJLDhEQUFDLG1CQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRko7QUFBQSxXQUFzQitGLFVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREo7QUFNSCxPQVBBLENBbkJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQWdDSCxDQXZFRDs7QUF5RUEsK0RBQWVkLEtBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hRQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUEsTUFBTWUsb0JBQW9CLEdBQUdDLDREQUFILHVGQUExQjtBQVlBLE1BQU1qRixZQUFZLEdBQUcxRCwyRUFBSDtBQUFBO0FBQUE7QUFBQSxvRkFJSTBJLG9CQUpKLENBQWxCO0FBUUEsTUFBTXBELFNBQVMsR0FBR3RGLHdFQUFIO0FBQUE7QUFBQTtBQUFBLG1FQUFmO0FBTUEsTUFBTTRJLFFBQVEsR0FBRzVJLHdFQUFIO0FBQUE7QUFBQTtBQUFBLG1EQUFkOztBQVNBLE1BQU02SSxJQUFxQixHQUFHLENBQUM7QUFBRXhJO0FBQUYsQ0FBRCxLQUFrQztBQUM1RCxzQkFDSTtBQUFBLDJCQUNJLDhEQUFDLDBDQUFEO0FBQU0saUJBQVcsRUFBRUEsV0FBbkI7QUFBQSw2QkFDSSw4REFBQyxZQUFEO0FBQUEsZ0NBQ0ksOERBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJLDhEQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBVUgsQ0FYRDs7QUFhQSwrREFBZXdJLElBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0xBO0FBQ0E7QUFDQTtBQUVBLE1BQU1DLGFBQWEsR0FBRzlJLHVFQUFIO0FBQUE7QUFBQTtBQUFBLGtGQUFuQjtBQU9BLE1BQU0rSSxhQUFhLEdBQUcvSSwyRUFBSDtBQUFBO0FBQUE7QUFBQSxxQ0FBbkI7QUFLQSxNQUFNZ0osVUFBVSxHQUFHaEosMkVBQUg7QUFBQTtBQUFBO0FBQUEsb0NBQWhCO0FBS0EsTUFBTWlKLGFBQWEsR0FBR2pKLDJFQUFIO0FBQUE7QUFBQTtBQUFBLHFDQUFuQjtBQUtBLE1BQU1rSixVQUFVLEdBQUdsSix1RUFBSDtBQUFBO0FBQUE7QUFBQSx5TUFBaEI7QUFjQSxNQUFNbUosU0FBUyxHQUFHbkosdUVBQUg7QUFBQTtBQUFBO0FBQUEsOERBQWY7QUFNQSxNQUFNb0osVUFBVSxHQUFHcEosd0VBQUg7QUFBQTtBQUFBO0FBQUEsdUVBQWhCO0FBTUEsTUFBTXFKLE9BQU8sR0FBR3JKLHdFQUFIO0FBQUE7QUFBQTtBQUFBLHNFQUFiO0FBTUEsTUFBTXNKLFVBQVUsR0FBR3RKLHdFQUFIO0FBQUE7QUFBQTtBQUFBLHlFQUFoQjtBQU1BLE1BQU11SixRQUFRLEdBQUd2Six1RUFBSDtBQUFBO0FBQUE7QUFBQSxtQ0FBZDtBQUlBLE1BQU13SixTQUFTLEdBQUd4Six1RUFBSDtBQUFBO0FBQUE7QUFBQSxpREFBZjs7QUFTQSxNQUFNeUosSUFBcUIsR0FBRyxDQUFDO0FBQUVwSjtBQUFGLENBQUQsS0FBa0M7QUFDNUQ7QUFDQSxRQUFNcUosaUJBQWlCLEdBQUlDLEdBQUQsSUFBaUI7QUFDdkNDLFVBQU0sQ0FBQ0MsSUFBUCxDQUFZRixHQUFaO0FBQ0gsR0FGRDs7QUFJQSxzQkFDSSw4REFBQywwQ0FBRDtBQUFNLGVBQVcsRUFBRXRKLFdBQW5CO0FBQUEsMkJBQ0ksOERBQUMsYUFBRDtBQUFBLDhCQUNJLDhEQUFDLGFBQUQ7QUFBQSxnQ0FDSSw4REFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBRUksOERBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSixlQUdJLDhEQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBT0ksOERBQUMsVUFBRDtBQUFBLGdDQUNJLDhEQUFDLFVBQUQ7QUFBWSxpQkFBTyxFQUFFLE1BQU1xSixpQkFBaUIsQ0FBQywyQkFBRCxDQUE1QztBQUFBLGlDQUNJLDhEQUFDLFNBQUQ7QUFBQSxvQ0FDSSw4REFBQyxRQUFEO0FBQVUsaUJBQUcsRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREosZUFFSSw4REFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFPSSw4REFBQyxVQUFEO0FBQVksaUJBQU8sRUFBRSxNQUFNQSxpQkFBaUIsQ0FBQywyQkFBRCxDQUE1QztBQUFBLGlDQUNJLDhEQUFDLFNBQUQ7QUFBQSxvQ0FDSSw4REFBQyxRQUFEO0FBQVUsaUJBQUcsRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREosZUFFSSw4REFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBKLGVBc0JJLDhEQUFDLGFBQUQ7QUFBQSxnQ0FDSSw4REFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBRUksOERBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSixlQUdJLDhEQUFDLFNBQUQ7QUFBVyxhQUFHLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF0Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBZ0NILENBdENEOztBQXdDQSwrREFBZUQsSUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySEE7QUFDQTtBQUNBO0FBQ0E7QUFHQSxNQUFNSyxpQkFBaUIsR0FBRzlKLHVFQUFIO0FBQUE7QUFBQTtBQUFBLHlLQUF2QjtBQVFBLE1BQU15RCxRQUFRLEdBQUd6RCx1RUFBSDtBQUFBO0FBQUE7QUFBQSwwREFBZDtBQU1BLE1BQU0wRCxZQUFZLEdBQUcxRCwyRUFBSDtBQUFBO0FBQUE7QUFBQSxzTkFBbEI7QUFhQSxNQUFNMkQsZUFBZSxHQUFHM0QsMkVBQUg7QUFBQTtBQUFBO0FBQUEsc0lBQXJCO0FBV0EsTUFBTTRELGtCQUFrQixHQUFHNUQsdUVBQUg7QUFBQTtBQUFBO0FBQUEsUUFBeEI7QUFFQSxNQUFNNkQsZ0JBQWdCLEdBQUc3RCx1RUFBSDtBQUFBO0FBQUE7QUFBQSx3S0FBdEI7QUFhQSxNQUFNOEQsYUFBYSxHQUFHOUQsMkVBQUg7QUFBQTtBQUFBO0FBQUEsMEJBQW5CO0FBSUEsTUFBTStELFNBQVMsR0FBRy9ELHVFQUFIO0FBQUE7QUFBQTtBQUFBLHlUQUFmO0FBdUJBLE1BQU1nRSxVQUFVLEdBQUdoRSx1RUFBSDtBQUFBO0FBQUE7QUFBQSxxT0FFU0MsS0FBRCxJQUF3QkEsS0FBSyxDQUFDQyxlQUZ0QyxDQUFoQjtBQWtCQSxNQUFNK0QsV0FBVyxHQUFHakUsdUVBQUg7QUFBQTtBQUFBO0FBQUEsc09BQWpCO0FBa0JBLE1BQU1rRSxTQUFTLEdBQUdsRSx1RUFBSDtBQUFBO0FBQUE7QUFBQSw2TEFBZjtBQXFCQSxNQUFNbUUsV0FBVyxHQUFHbkUsd0VBQUg7QUFBQTtBQUFBO0FBQUEsdUVBQ0hDLEtBQUQsSUFBeUJBLEtBQUssQ0FBQ21FLEtBRDNCLENBQWpCO0FBWUEsTUFBTUMsZUFBZSxHQUFHckUsd0VBQUg7QUFBQTtBQUFBO0FBQUEseUtBU2RDLEtBQUQsSUFBNkI7QUFDM0IsTUFBSUEsS0FBSyxDQUFDcUUsSUFBTixLQUFlLFFBQW5CLEVBQTZCO0FBQ3pCLFdBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCckUsS0FBSyxDQUFDQyxlQUFnQjtBQUNuRCxrQ0FBa0NELEtBQUssQ0FBQ3NFLEdBQUk7QUFDNUM7QUFDQSxhQVZZO0FBV0gsR0FaRCxNQVlPLElBQUl0RSxLQUFLLENBQUNxRSxJQUFOLEtBQWUsVUFBbkIsRUFBK0I7QUFDbEMsV0FBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkJyRSxLQUFLLENBQUNDLGVBQWdCO0FBQ25EO0FBQ0EsYUFUWTtBQVVILEdBWE0sTUFXQSxJQUFJRCxLQUFLLENBQUNxRSxJQUFOLEtBQWUsVUFBbkIsRUFBK0I7QUFDbEMsV0FBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkJyRSxLQUFLLENBQUNDLGVBQWdCO0FBQ25EO0FBQ0EsYUFUWTtBQVVILEdBWE0sTUFXQSxJQUFJRCxLQUFLLENBQUNxRSxJQUFOLEtBQWUsTUFBbkIsRUFBMkI7QUFDOUIsV0FBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkJyRSxLQUFLLENBQUNDLGVBQWdCO0FBQ25EO0FBQ0EsYUFUWTtBQVVILEdBWE0sTUFXQSxJQUFJRCxLQUFLLENBQUNxRSxJQUFOLEtBQWUsTUFBbkIsRUFBMkI7QUFDOUIsV0FBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkJyRSxLQUFLLENBQUNDLGVBQWdCO0FBQ25EO0FBQ0EsYUFUWTtBQVVILEdBWE0sTUFXQTtBQUNILFdBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCRCxLQUFLLENBQUNDLGVBQWdCO0FBQ25EO0FBQ0EsYUFUWTtBQVVIO0FBQ0osQ0E5RWdCLENBQXJCO0FBaUZBLE1BQU1zRSxXQUFXLEdBQUd4RSx3RUFBSDtBQUFBO0FBQUE7QUFBQSw2RkFBakI7QUFTQSxNQUFNeUUsV0FBVyxHQUFHekUsdUVBQUg7QUFBQTtBQUFBO0FBQUEsaUZBQWpCO0FBS0EsTUFBTTBFLFlBQVksR0FBRzFFLHVFQUFIO0FBQUE7QUFBQTtBQUFBLDZFQUFsQjs7QUFVQSxNQUFNK0osUUFBNkIsR0FBRyxDQUFDO0FBQUUxSjtBQUFGLENBQUQsS0FBa0M7QUFDcEU7QUFDQSxRQUFNa0Isb0JBQW9CLEdBQUdKLHdEQUFXLENBQUVDLEtBQUQsSUFBdUJBLEtBQUssQ0FBQ0MsV0FBTixDQUFrQkUsb0JBQTFDLENBQXhDLENBRm9FLENBSXBFOztBQUNBLFFBQU0sQ0FBQ3FELFlBQUQsRUFBZUMsZUFBZixJQUFrQ2xELDJDQUFBLENBQXVCLEVBQXZCLENBQXhDO0FBQ0EsUUFBTSxDQUFDcUksaUJBQUQsRUFBb0JDLG9CQUFwQixJQUE0Q3RJLDJDQUFBLENBQXlCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixDQUF6QixDQUFsRCxDQU5vRSxDQVFwRTs7QUFDQSxRQUFNbUQsbUJBQW1CLEdBQUduRCx5Q0FBQSxFQUE1QixDQVRvRSxDQVdwRTs7QUFDQSxRQUFNdUksTUFBTSxHQUFHLENBQ1gsQ0FBQyxtQkFBRCxDQURXLEVBRVgsQ0FBQyxxQkFBRCxFQUF3QixxQkFBeEIsRUFBK0MscUJBQS9DLEVBQXNFLHFCQUF0RSxDQUZXLEVBR1gsQ0FBQyxtQkFBRCxDQUhXLEVBSVgsQ0FBQyxtQkFBRCxFQUFzQixtQkFBdEIsRUFBMkMsbUJBQTNDLEVBQWdFLG1CQUFoRSxDQUpXLENBQWYsQ0Fab0UsQ0FtQnBFOztBQUNBLFFBQU1DLGVBQWUsR0FBSWxELEtBQUQsSUFBVztBQUMvQixVQUFNbUQscUJBQXFCLEdBQUdKLGlCQUFpQixDQUFDSyxLQUFsQixFQUE5QjtBQUNBRCx5QkFBcUIsQ0FBQ25ELEtBQUQsQ0FBckIsR0FBK0IsQ0FBQ21ELHFCQUFxQixDQUFDbkQsS0FBRCxDQUFyQixHQUErQixDQUFoQyxJQUFxQ2lELE1BQU0sQ0FBQ2pELEtBQUQsQ0FBTixDQUFjMUQsTUFBbEY7QUFFQTBHLHdCQUFvQixDQUFDRyxxQkFBRCxDQUFwQjtBQUNILEdBTEQ7O0FBT0EsUUFBTXJGLGFBQWEsR0FBRyxDQUFDOUIsQ0FBRCxFQUFtRCtCLEdBQW5ELEtBQW1FO0FBQ3JGLFFBQUlGLG1CQUFtQixDQUFDN0MsT0FBeEIsRUFBaUM7QUFDN0JnQixPQUFDLENBQUNnQyxlQUFGO0FBRUFKLHFCQUFlLENBQUNHLEdBQUQsQ0FBZjtBQUNBRix5QkFBbUIsQ0FBQzdDLE9BQXBCLENBQTRCQyxLQUE1QixDQUFrQ0csT0FBbEMsR0FBNEMsTUFBNUM7QUFDSDtBQUNKLEdBUEQ7O0FBU0EsUUFBTTZDLHVCQUF1QixHQUFHLE1BQU07QUFDbEMsUUFBSUosbUJBQW1CLENBQUM3QyxPQUF4QixFQUFpQztBQUM3QjRDLHFCQUFlLENBQUMsRUFBRCxDQUFmO0FBQ0FDLHlCQUFtQixDQUFDN0MsT0FBcEIsQ0FBNEJDLEtBQTVCLENBQWtDRyxPQUFsQyxHQUE0QyxNQUE1QztBQUNIO0FBQ0osR0FMRDs7QUFPQSxzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLDBDQUFEO0FBQU0saUJBQVcsRUFBRWhDLFdBQW5CO0FBQUEsOEJBQ0ksOERBQUMsYUFBRDtBQUFBLCtCQUNJLDhEQUFDLFNBQUQ7QUFBQSxrQ0FDSSw4REFBQyxVQUFEO0FBQVksMkJBQWUsRUFBRWtCLG9CQUFvQixDQUFDbEIsV0FBRDtBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBRUksOERBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKLGVBR0ksOERBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUhKLGVBSUksOERBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBVUksOERBQUMsaUJBQUQ7QUFBQSxnQ0FDSSw4REFBQyxZQUFEO0FBQUEsaUNBQ0ksOERBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFLSSw4REFBQyxlQUFEO0FBQUEsa0NBQ0ksOERBQUMsUUFBRDtBQUFVLG1CQUFPLEVBQUUsTUFBTThKLGVBQWUsQ0FBQyxDQUFELENBQXhDO0FBQUEsbUNBQ0ksOERBQUMsV0FBRDtBQUFhLGlCQUFHLEVBQUVELE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVUYsaUJBQWlCLENBQUMsQ0FBRCxDQUEzQjtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUtJLDhEQUFDLGtCQUFEO0FBQUEsb0NBQ0ksOERBQUMsZUFBRDtBQUFpQiw2QkFBZSxFQUFFekksb0JBQW9CLENBQUNsQixXQUFELENBQXREO0FBQXFFLGtCQUFJLEVBQUMsVUFBMUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREosZUFJSSw4REFBQyxlQUFEO0FBQWlCLDZCQUFlLEVBQUVrQixvQkFBb0IsQ0FBQ2xCLFdBQUQsQ0FBdEQ7QUFBcUUsa0JBQUksRUFBQyxNQUExRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFKSixlQU9JLDhEQUFDLGVBQUQ7QUFBaUIsNkJBQWUsRUFBRWtCLG9CQUFvQixDQUFDbEIsV0FBRCxDQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFQSixlQVVJLDhEQUFDLGVBQUQ7QUFBaUIsNkJBQWUsRUFBRWtCLG9CQUFvQixDQUFDbEIsV0FBRCxDQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFWSixlQWFJLDhEQUFDLGVBQUQ7QUFBaUIsNkJBQWUsRUFBRWtCLG9CQUFvQixDQUFDbEIsV0FBRCxDQUF0RDtBQUFxRSxrQkFBSSxFQUFDLE1BQTFFO0FBQUEsd0RBQ2E7QUFBRyxvQkFBSSxFQUFDLGdCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFiSixlQWdCSSw4REFBQyxlQUFEO0FBQWlCLDZCQUFlLEVBQUVrQixvQkFBb0IsQ0FBQ2xCLFdBQUQsQ0FBdEQ7QUFBcUUsa0JBQUksRUFBQyxNQUExRTtBQUFBLHVDQUNVLEdBRFYsZUFFSTtBQUFHLG9CQUFJLEVBQUMscUNBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWSixlQTRDSSw4REFBQyxpQkFBRDtBQUFBLGdDQUNJLDhEQUFDLFlBQUQ7QUFBQSxpQ0FDSSw4REFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUtJLDhEQUFDLGVBQUQ7QUFBQSxrQ0FDSSw4REFBQyxRQUFEO0FBQVUsbUJBQU8sRUFBRSxNQUFNOEosZUFBZSxDQUFDLENBQUQsQ0FBeEM7QUFBQSxtQ0FDSSw4REFBQyxXQUFEO0FBQWEsaUJBQUcsRUFBRUQsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVRixpQkFBaUIsQ0FBQyxDQUFELENBQTNCO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBS0ksOERBQUMsa0JBQUQ7QUFBQSxvQ0FDSSw4REFBQyxlQUFEO0FBQWlCLDZCQUFlLEVBQUV6SSxvQkFBb0IsQ0FBQ2xCLFdBQUQsQ0FBdEQ7QUFBcUUsa0JBQUksRUFBQyxVQUExRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixlQUlJLDhEQUFDLGVBQUQ7QUFBaUIsNkJBQWUsRUFBRWtCLG9CQUFvQixDQUFDbEIsV0FBRCxDQUF0RDtBQUFxRSxrQkFBSSxFQUFDLE1BQTFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUpKLGVBT0ksOERBQUMsZUFBRDtBQUFpQiw2QkFBZSxFQUFFa0Isb0JBQW9CLENBQUNsQixXQUFELENBQXREO0FBQXFFLGtCQUFJLEVBQUMsTUFBMUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBUEosZUFVSSw4REFBQyxlQUFEO0FBQWlCLDZCQUFlLEVBQUVrQixvQkFBb0IsQ0FBQ2xCLFdBQUQsQ0FBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBVkosZUFhSSw4REFBQyxlQUFEO0FBQWlCLDZCQUFlLEVBQUVrQixvQkFBb0IsQ0FBQ2xCLFdBQUQsQ0FBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBYkosZUFnQkksOERBQUMsZUFBRDtBQUFpQiw2QkFBZSxFQUFFa0Isb0JBQW9CLENBQUNsQixXQUFELENBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQWhCSixlQW1CSSw4REFBQyxlQUFEO0FBQWlCLDZCQUFlLEVBQUVrQixvQkFBb0IsQ0FBQ2xCLFdBQUQsQ0FBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBbkJKLGVBdUJJLDhEQUFDLGVBQUQ7QUFBaUIsNkJBQWUsRUFBRWtCLG9CQUFvQixDQUFDbEIsV0FBRCxDQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkF2QkosZUEwQkksOERBQUMsZUFBRDtBQUFpQiw2QkFBZSxFQUFFa0Isb0JBQW9CLENBQUNsQixXQUFELENBQXREO0FBQXFFLGtCQUFJLEVBQUMsTUFBMUU7QUFBQSxxREFDVTtBQUFHLG9CQUFJLEVBQUMsa0NBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQTFCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkE1Q0osZUF1RkksOERBQUMsaUJBQUQ7QUFBQSxnQ0FDSSw4REFBQyxZQUFEO0FBQUEsaUNBQ0ksOERBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFLSSw4REFBQyxlQUFEO0FBQUEsa0NBQ0ksOERBQUMsUUFBRDtBQUFVLG1CQUFPLEVBQUUsTUFBTThKLGVBQWUsQ0FBQyxDQUFELENBQXhDO0FBQUEsbUNBQ0ksOERBQUMsV0FBRDtBQUFhLGlCQUFHLEVBQUVELE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVUYsaUJBQWlCLENBQUMsQ0FBRCxDQUEzQjtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUtJLDhEQUFDLGtCQUFEO0FBQUEsb0NBQ0ksOERBQUMsZUFBRDtBQUFpQiw2QkFBZSxFQUFFekksb0JBQW9CLENBQUNsQixXQUFELENBQXREO0FBQXFFLGtCQUFJLEVBQUMsVUFBMUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREosZUFJSSw4REFBQyxlQUFEO0FBQWlCLDZCQUFlLEVBQUVrQixvQkFBb0IsQ0FBQ2xCLFdBQUQsQ0FBdEQ7QUFBcUUsa0JBQUksRUFBQyxNQUExRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFKSixlQU9JLDhEQUFDLGVBQUQ7QUFBaUIsNkJBQWUsRUFBRWtCLG9CQUFvQixDQUFDbEIsV0FBRCxDQUF0RDtBQUFxRSxrQkFBSSxFQUFDLE1BQTFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVBKLGVBVUksOERBQUMsZUFBRDtBQUFpQiw2QkFBZSxFQUFFa0Isb0JBQW9CLENBQUNsQixXQUFELENBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVZKLGVBYUksOERBQUMsZUFBRDtBQUFpQiw2QkFBZSxFQUFFa0Isb0JBQW9CLENBQUNsQixXQUFELENBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQWJKLGVBZ0JJLDhEQUFDLGVBQUQ7QUFBaUIsNkJBQWUsRUFBRWtCLG9CQUFvQixDQUFDbEIsV0FBRCxDQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFoQkosZUFtQkksOERBQUMsZUFBRDtBQUFpQiw2QkFBZSxFQUFFa0Isb0JBQW9CLENBQUNsQixXQUFELENBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQW5CSixlQXNCSSw4REFBQyxlQUFEO0FBQWlCLDZCQUFlLEVBQUVrQixvQkFBb0IsQ0FBQ2xCLFdBQUQsQ0FBdEQ7QUFBcUUsa0JBQUksRUFBQyxNQUExRTtBQUFBLHVDQUNVLEdBRFYsZUFFSTtBQUFHLG9CQUFJLEVBQUMsaURBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQXRCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF2RkosZUFpSUksOERBQUMsaUJBQUQ7QUFBQSxnQ0FDSSw4REFBQyxZQUFEO0FBQUEsaUNBQ0ksOERBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFLSSw4REFBQyxlQUFEO0FBQUEsa0NBQ0ksOERBQUMsUUFBRDtBQUFVLG1CQUFPLEVBQUUsTUFBTThKLGVBQWUsQ0FBQyxDQUFELENBQXhDO0FBQUEsbUNBQ0ksOERBQUMsV0FBRDtBQUFhLGlCQUFHLEVBQUVELE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVUYsaUJBQWlCLENBQUMsQ0FBRCxDQUEzQjtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUtJLDhEQUFDLGtCQUFEO0FBQUEsb0NBQ0ksOERBQUMsZUFBRDtBQUFpQiw2QkFBZSxFQUFFekksb0JBQW9CLENBQUNsQixXQUFELENBQXREO0FBQXFFLGtCQUFJLEVBQUMsVUFBMUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREosZUFJSSw4REFBQyxlQUFEO0FBQWlCLDZCQUFlLEVBQUVrQixvQkFBb0IsQ0FBQ2xCLFdBQUQsQ0FBdEQ7QUFBcUUsa0JBQUksRUFBQyxNQUExRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFKSixlQU9JLDhEQUFDLGVBQUQ7QUFBaUIsNkJBQWUsRUFBRWtCLG9CQUFvQixDQUFDbEIsV0FBRCxDQUF0RDtBQUFxRSxrQkFBSSxFQUFDLE1BQTFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVBKLGVBVUksOERBQUMsZUFBRDtBQUFpQiw2QkFBZSxFQUFFa0Isb0JBQW9CLENBQUNsQixXQUFELENBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVZKLGVBYUksOERBQUMsZUFBRDtBQUFpQiw2QkFBZSxFQUFFa0Isb0JBQW9CLENBQUNsQixXQUFELENBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQWJKLGVBZ0JJLDhEQUFDLGVBQUQ7QUFBaUIsNkJBQWUsRUFBRWtCLG9CQUFvQixDQUFDbEIsV0FBRCxDQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFoQkosZUFtQkksOERBQUMsZUFBRDtBQUFpQiw2QkFBZSxFQUFFa0Isb0JBQW9CLENBQUNsQixXQUFELENBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQW5CSixlQXNCSSw4REFBQyxlQUFEO0FBQWlCLDZCQUFlLEVBQUVrQixvQkFBb0IsQ0FBQ2xCLFdBQUQsQ0FBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBdEJKLGVBMEJJLDhEQUFDLGVBQUQ7QUFBaUIsNkJBQWUsRUFBRWtCLG9CQUFvQixDQUFDbEIsV0FBRCxDQUF0RDtBQUFxRSxrQkFBSSxFQUFDLE1BQTFFO0FBQUEscURBQ1U7QUFBRyxvQkFBSSxFQUFDLGdDQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkExQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBaklKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQThLSSw4REFBQyxnQkFBRDtBQUFrQixTQUFHLEVBQUV5RSxtQkFBdkI7QUFBNEMsYUFBTyxFQUFFSSx1QkFBckQ7QUFBQSw2QkFDSSw4REFBQyxZQUFEO0FBQWMsV0FBRyxFQUFFTjtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE5S0o7QUFBQSxrQkFESjtBQW9MSCxDQS9ORDs7QUFpT0EsK0RBQWVtRixRQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcmVBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsTUFBTU8sZUFBZSxHQUFHdEssdUVBQUg7QUFBQTtBQUFBO0FBQUEscUJBQXJCO0FBSUEsTUFBTXVLLGNBQWMsR0FBR3ZLLHVFQUFIO0FBQUE7QUFBQTtBQUFBLCtDQUFwQjtBQUtBLE1BQU13SyxZQUFZLEdBQUd4Syx1RUFBSDtBQUFBO0FBQUE7QUFBQSw0REFBbEI7QUFTQSxNQUFNeUssV0FBVyxHQUFHekssdUVBQUg7QUFBQTtBQUFBO0FBQUEsbUZBRVFDLEtBQUQsSUFBeUJBLEtBQUssQ0FBQ0MsZUFGdEMsQ0FBakI7QUFRQSxNQUFNd0ssaUJBQWlCLEdBQUcxSyx1RUFBSDtBQUFBO0FBQUE7QUFBQSw0TUFBdkI7QUFpQkEsTUFBTTJLLFlBQVksR0FBRzNLLDJFQUFIO0FBQUE7QUFBQTtBQUFBLHlEQUFsQjtBQU1BLE1BQU1vRixRQUFRLEdBQUdwRix1RUFBSDtBQUFBO0FBQUE7QUFBQSxzQkFBZDtBQUlBLE1BQU15RCxRQUFRLEdBQUd6RCx1RUFBSDtBQUFBO0FBQUE7QUFBQSxtT0FBZDtBQVVBLE1BQU1zRixTQUFTLEdBQUd0Rix3RUFBSDtBQUFBO0FBQUE7QUFBQSxpRUFBZjtBQUtBLE1BQU00SSxRQUFRLEdBQUc1SSx3RUFBSDtBQUFBO0FBQUE7QUFBQSx1RkFBZDtBQU1BLE1BQU00SyxVQUFVLEdBQUc1Syx3RUFBSDtBQUFBO0FBQUE7QUFBQSx1RUFBaEI7QUFNQSxNQUFNNkssVUFBVSxHQUFHN0ssdUVBQUg7QUFBQTtBQUFBO0FBQUEsUUFBaEI7O0FBTUEsTUFBTThLLE1BQXlCLEdBQUcsQ0FBQztBQUFFeks7QUFBRixDQUFELEtBQWtDO0FBQ2hFO0FBQ0EsUUFBTWtCLG9CQUFvQixHQUFHSix3REFBVyxDQUFFQyxLQUFELElBQXVCQSxLQUFLLENBQUNDLFdBQU4sQ0FBa0JFLG9CQUExQyxDQUF4QyxDQUZnRSxDQUloRTs7QUFDQSxRQUFNd0osV0FBVyxHQUFHLENBQ2hCO0FBQ0k5QyxTQUFLLEVBQUUsSUFEWDtBQUVJMUQsT0FBRyxFQUFFO0FBRlQsR0FEZ0IsRUFLaEI7QUFDSTBELFNBQUssRUFBRSxRQURYO0FBRUkxRCxPQUFHLEVBQUU7QUFGVCxHQUxnQixFQVNoQjtBQUNJMEQsU0FBSyxFQUFFLGFBRFg7QUFFSTFELE9BQUcsRUFBRTtBQUZULEdBVGdCLEVBYWhCO0FBQ0kwRCxTQUFLLEVBQUUsSUFEWDtBQUVJMUQsT0FBRyxFQUFFO0FBRlQsR0FiZ0IsQ0FBcEI7QUFtQkEsc0JBQ0ksOERBQUMsMENBQUQ7QUFBTSxlQUFXLEVBQUVsRSxXQUFuQjtBQUFBLDJCQUNJLDhEQUFDLGVBQUQ7QUFBQSw4QkFDSSw4REFBQyxjQUFEO0FBQUEsZ0NBQ0ksOERBQUMsV0FBRDtBQUFhLHlCQUFlLEVBQUVrQixvQkFBb0IsQ0FBQ2xCLFdBQUQsQ0FBbEQ7QUFBQSxpQ0FDSSw4REFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUlJLDhEQUFDLFlBQUQ7QUFBQSxpQ0FDSSw4REFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFVSSw4REFBQyxjQUFEO0FBQUEsZ0NBQ0ksOERBQUMsV0FBRDtBQUFhLHlCQUFlLEVBQUVrQixvQkFBb0IsQ0FBQ2xCLFdBQUQsQ0FBbEQ7QUFBQSxpQ0FDSSw4REFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUlJLDhEQUFDLFlBQUQ7QUFBQSxpQ0FDSSw4REFBQyxpQkFBRDtBQUFBLHNCQUNLMEssV0FBVyxDQUFDeEMsR0FBWixDQUFpQnlDLEtBQUQsSUFBVztBQUN4QixrQ0FDSSw4REFBQyxZQUFEO0FBQUEsd0NBQ0ksOERBQUMsUUFBRDtBQUFBLHlDQUNJLDhEQUFDLFVBQUQ7QUFBQSw4QkFBYUEsS0FBSyxDQUFDL0M7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREosZUFJSSw4REFBQyxRQUFEO0FBQUEseUNBQ0ksOERBQUMsVUFBRDtBQUFZLHVCQUFHLEVBQUUrQyxLQUFLLENBQUN6RztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFKSjtBQUFBLGlCQUFtQnlHLEtBQUssQ0FBQy9DLEtBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREo7QUFVSCxhQVhBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQW9DSCxDQTVERDs7QUE4REEsK0RBQWU2QyxNQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUpBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLE1BQU1HLGNBQWMsR0FBR2pMLHVFQUFIO0FBQUE7QUFBQTtBQUFBLHFCQUFwQjtBQUlBLE1BQU11SyxjQUFjLEdBQUd2Syx1RUFBSDtBQUFBO0FBQUE7QUFBQSwrQ0FBcEI7QUFLQSxNQUFNd0ssWUFBWSxHQUFHeEssdUVBQUg7QUFBQTtBQUFBO0FBQUEsNERBQWxCO0FBU0EsTUFBTXlLLFdBQVcsR0FBR3pLLHVFQUFIO0FBQUE7QUFBQTtBQUFBLG1GQUVRQyxLQUFELElBQXlCQSxLQUFLLENBQUNDLGVBRnRDLENBQWpCO0FBUUEsTUFBTWdMLFVBQVUsR0FBR2xMLHVFQUFIO0FBQUE7QUFBQTtBQUFBLDhHQUFoQjtBQVVBLE1BQU1tTCxlQUFlLEdBQUduTCwyRUFBSDtBQUFBO0FBQUE7QUFBQSw4QkFBckI7QUFJQSxNQUFNb0wsYUFBYSxHQUFHcEwsMkVBQUg7QUFBQTtBQUFBO0FBQUEsOEJBQW5CO0FBSUEsTUFBTXFMLHNCQUFzQixHQUFHMUMsNERBQUgsK0ZBQTVCO0FBY0EsTUFBTTJDLFdBQVcsR0FBR3RMLHVFQUFIO0FBQUE7QUFBQTtBQUFBLG9ZQWNhcUwsc0JBZGIsQ0FBakI7QUFxQkEsTUFBTUUsY0FBYyxHQUFHdkwsdUVBQUg7QUFBQTtBQUFBO0FBQUEsd0NBQXBCO0FBS0EsTUFBTXdMLFNBQVMsR0FBR3hMLHVFQUFIO0FBQUE7QUFBQTtBQUFBLDJYQUFmO0FBbUJBLE1BQU1zRixTQUFTLEdBQUd0Rix3RUFBSDtBQUFBO0FBQUE7QUFBQSxpRUFBZjtBQUtBLE1BQU00SSxRQUFRLEdBQUc1SSx3RUFBSDtBQUFBO0FBQUE7QUFBQSx1RkFBZDtBQVVBLE1BQU15TCxhQUFhLEdBQUd6TCx3RUFBSDtBQUFBO0FBQUE7QUFBQSw0RUFHTEMsS0FBRCxJQUEyQkEsS0FBSyxDQUFDbUUsS0FIM0IsQ0FBbkI7QUFNQSxNQUFNc0gsV0FBVyxHQUFHMUwsd0VBQUg7QUFBQTtBQUFBO0FBQUEsd0JBQWpCO0FBUUEsTUFBTTJMLGNBQWMsR0FBRzNMLHdFQUFIO0FBQUE7QUFBQTtBQUFBLDBOQVFHQyxLQUFELElBQTZCQSxLQUFLLENBQUMyTCxPQUFOLEdBQWdCUCxzQkFBaEIsR0FBeUMsRUFSeEUsQ0FBcEI7O0FBaUJBLE1BQU1RLEtBQXVCLEdBQUcsQ0FBQztBQUFFeEw7QUFBRixDQUFELEtBQWtDO0FBQzlEO0FBQ0EsUUFBTWtCLG9CQUFvQixHQUFHSix3REFBVyxDQUFFQyxLQUFELElBQXVCQSxLQUFLLENBQUNDLFdBQU4sQ0FBa0JFLG9CQUExQyxDQUF4QyxDQUY4RCxDQUk5RDs7QUFDQSxRQUFNLENBQUN1SyxhQUFELEVBQWdCQyxnQkFBaEIsSUFBb0NwSywyQ0FBQSxDQUF1QixDQUFDLENBQXhCLENBQTFDO0FBQ0EsUUFBTSxDQUFDcUssV0FBRCxFQUFjQyxjQUFkLElBQWdDdEssMkNBQUEsRUFBdEMsQ0FOOEQsQ0FROUQ7O0FBQ0EsUUFBTXVLLGNBQWMsR0FBR3ZLLHlDQUFBLEVBQXZCO0FBQ0EsUUFBTXdLLFlBQVksR0FBR3hLLHlDQUFBLEVBQXJCLENBVjhELENBWTlEOztBQUNBLFFBQU15SyxRQUFRLEdBQUcsQ0FDYjtBQUNJQyxZQUFRLEVBQUUsYUFEZDtBQUVJQyxVQUFNLEVBQUU7QUFGWixHQURhLEVBTWI7QUFDSUQsWUFBUSxFQUFFLGtCQURkO0FBRUlDLFVBQU0sRUFBRztBQUZiLEdBTmEsRUFXYjtBQUNJRCxZQUFRLEVBQUUsYUFEZDtBQUVJQyxVQUFNLEVBQUU7QUFGWixHQVhhLENBQWpCO0FBaUJBLFFBQU1DLGFBQWEsR0FBRyxDQUFDLFNBQUQsRUFBWSxTQUFaLEVBQXVCLFNBQXZCLENBQXRCLENBOUI4RCxDQWdDOUQ7O0FBQ0EsUUFBTUMsZUFBZSxHQUFJdkYsS0FBRCxJQUFtQjtBQUN2QzhFLG9CQUFnQixDQUFDOUUsS0FBRCxDQUFoQixDQUR1QyxDQUNkOztBQUN6QixVQUFNVixJQUFJLEdBQUcsRUFBYixDQUZ1QyxDQUV0Qjs7QUFFakIsUUFBSTJGLGNBQWMsQ0FBQ2pLLE9BQWYsSUFBMEJrSyxZQUFZLENBQUNsSyxPQUEzQyxFQUFvRDtBQUNoRCxVQUFJaUYsU0FBUyxHQUFHLENBQWhCO0FBQ0FJLG1CQUFhLENBQUMwRSxXQUFELENBQWIsQ0FGZ0QsQ0FFcEI7O0FBQzVCRSxvQkFBYyxDQUFDakssT0FBZixDQUF1QmtGLFNBQXZCLEdBQW1DLEVBQW5DO0FBQ0ErRSxvQkFBYyxDQUFDakssT0FBZixDQUF1QkMsS0FBdkIsQ0FBNkJrQyxLQUE3QixHQUFxQ21JLGFBQWEsQ0FBQ3RGLEtBQUQsQ0FBbEQ7QUFDQWtGLGtCQUFZLENBQUNsSyxPQUFiLENBQXFCQyxLQUFyQixDQUEyQnVLLFNBQTNCLEdBQXdDLGVBQWNGLGFBQWEsQ0FBQ3RGLEtBQUQsQ0FBUSx5QkFBd0JzRixhQUFhLENBQUN0RixLQUFELENBQVEsUUFBeEg7QUFFQSxZQUFNRyxjQUFjLEdBQUdDLFdBQVcsQ0FBQyxNQUFNO0FBQ3JDO0FBQ0EsWUFBSStFLFFBQVEsQ0FBQ25GLEtBQUQsQ0FBUixDQUFnQnFGLE1BQWhCLENBQXVCcEYsU0FBdkIsTUFBc0MsSUFBMUMsRUFBZ0Q7QUFDNUM7QUFDQWdGLHdCQUFjLENBQUNqSyxPQUFmLENBQXVCa0YsU0FBdkIsSUFBb0MsUUFBcEM7QUFDQUQsbUJBQVM7QUFDWixTQUpELE1BSU87QUFDSDtBQUNBZ0Ysd0JBQWMsQ0FBQ2pLLE9BQWYsQ0FBdUJrRixTQUF2QixJQUFvQ2lGLFFBQVEsQ0FBQ25GLEtBQUQsQ0FBUixDQUFnQnFGLE1BQWhCLENBQXVCcEYsU0FBUyxFQUFoQyxDQUFwQztBQUNIO0FBQ0osT0FWaUMsRUFVL0JYLElBVitCLENBQWxDO0FBWUEwRixvQkFBYyxDQUFDN0UsY0FBRCxDQUFkLENBbkJnRCxDQW1CaEI7QUFFaEM7O0FBQ0F2RSxnQkFBVSxDQUFDLE1BQU07QUFDYnlFLHFCQUFhLENBQUNGLGNBQUQsQ0FBYjtBQUNILE9BRlMsRUFFUGdGLFFBQVEsQ0FBQ25GLEtBQUQsQ0FBUixDQUFnQnFGLE1BQWhCLENBQXVCL0ksTUFBdkIsR0FBZ0NnRCxJQUZ6QixDQUFWO0FBR0g7QUFDSixHQTlCRDs7QUFnQ0Esc0JBQ0ksOERBQUMsMENBQUQ7QUFBTSxlQUFXLEVBQUVsRyxXQUFuQjtBQUFBLDJCQUNJLDhEQUFDLGNBQUQ7QUFBQSw4QkFDSSw4REFBQyxjQUFEO0FBQUEsZ0NBQ0ksOERBQUMsV0FBRDtBQUFhLHlCQUFlLEVBQUVrQixvQkFBb0IsQ0FBQ2xCLFdBQUQsQ0FBbEQ7QUFBQSxpQ0FDSSw4REFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUlJLDhEQUFDLFlBQUQ7QUFBQSxpQ0FDSSw4REFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFVSSw4REFBQyxjQUFEO0FBQUEsZ0NBQ0ksOERBQUMsV0FBRDtBQUFhLHlCQUFlLEVBQUVrQixvQkFBb0IsQ0FBQ2xCLFdBQUQsQ0FBbEQ7QUFBQSxpQ0FDSSw4REFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUlJLDhEQUFDLFlBQUQ7QUFBQSxpQ0FDSSw4REFBQyxVQUFEO0FBQUEsb0NBQ0ksOERBQUMsZUFBRDtBQUFBLHdCQUNLK0wsUUFBUSxDQUFDN0QsR0FBVCxDQUFhLENBQUNtRSxHQUFELEVBQU16RixLQUFOLEtBQWdCO0FBQzFCLG9DQUNJLDhEQUFDLFdBQUQ7QUFBOEIseUJBQU8sRUFBR2hFLENBQUQsSUFBT3VKLGVBQWUsQ0FBQ3ZGLEtBQUQsQ0FBN0Q7QUFBQSx5Q0FDSSw4REFBQyxjQUFEO0FBQUEsNENBQ0ksOERBQUMsY0FBRDtBQUFnQiw2QkFBTyxFQUFFNkUsYUFBYSxLQUFLN0UsS0FBM0M7QUFBQSxzQ0FDTUEsS0FBSyxHQUFHLENBRGQsT0FDa0IsR0FEbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURKLGVBSUksOERBQUMsYUFBRDtBQUFlLDJCQUFLLEVBQUVzRixhQUFhLENBQUN0RixLQUFELENBQW5DO0FBQUEsZ0NBQ0t5RixHQUFHLENBQUNMO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFBa0JLLEdBQUcsQ0FBQ0osTUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFESjtBQVlILGVBYkE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKLGVBa0JJLDhEQUFDLGFBQUQ7QUFBQSxxQ0FDSSw4REFBQyxTQUFEO0FBQVcsbUJBQUcsRUFBRUgsWUFBaEI7QUFBQSx1Q0FDSSw4REFBQyxXQUFEO0FBQWEscUJBQUcsRUFBRUQsY0FBbEI7QUFBQSw0QkFDS0osYUFBYSxJQUFJLENBQWpCLEdBQXFCLEVBQXJCLEdBQTBCO0FBRC9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFsQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBZ0RILENBakhEOztBQW1IQSwrREFBZUQsS0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JVQTtBQUNPLE1BQU1jLFFBQVEsR0FBRyxVQUFqQixDLENBRVA7O0FBQ08sTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xQO0FBR0E7QUFDTyxNQUFNOUYsY0FBYyxHQUFJK0YsR0FBRCxJQUFtQztBQUM3RCxTQUFPO0FBQ0h4SSxRQUFJLEVBQUVxSSxpREFESDtBQUVISSxXQUFPLEVBQUVEO0FBRk4sR0FBUDtBQUlILENBTE0sQyxDQU9QOztBQUNPLE1BQU0vSiwyQkFBMkIsR0FBSStKLEdBQUQsSUFBK0M7QUFDdEYsU0FBTztBQUNIeEksUUFBSSxFQUFFc0ksOERBREg7QUFFSEcsV0FBTyxFQUFFRDtBQUZOLEdBQVA7QUFJSCxDQUxNO0FBT0EsTUFBTWxLLHVCQUF1QixHQUFJa0ssR0FBRCxJQUE0QztBQUMvRSxTQUFPO0FBQ0h4SSxRQUFJLEVBQUV1SSwwREFESDtBQUVIRSxXQUFPLEVBQUVEO0FBRk4sR0FBUDtBQUlILENBTE0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsTUFBTUUsa0JBQWtCLEdBQUdoTix3RUFBSDtBQUFBO0FBQUE7QUFBQSwyQ0FBeEI7QUFJQSxNQUFNaU4saUJBQWlCLEdBQUdqTix3RUFBSDtBQUFBO0FBQUE7QUFBQSxvRkFDTmtOLG1EQURNLENBQXZCO0FBT0EsTUFBTUMsa0JBQWtCLEdBQUduTix3RUFBSDtBQUFBO0FBQUE7QUFBQSwyQkFBeEI7O0FBSUEsTUFBTW9OLEtBQUssR0FBRyxNQUFtQjtBQUM3QjtBQUNBLFFBQU1DLEtBQUssR0FBR2xNLHlEQUFXLENBQUVDLEtBQUQsSUFBdUJBLEtBQUssQ0FBQ2tNLFdBQU4sQ0FBa0JELEtBQTFDLENBQXpCO0FBRUEsc0JBQ0k7QUFBQSxlQUNLQSxLQUFLLGdCQUNGO0FBQUEsNkJBQ0ksOERBQUMsa0JBQUQ7QUFBQSwrQkFDSSw4REFBQyxpQkFBRDtBQUFBLGlDQUNJLDhEQUFDLGtCQUFEO0FBQUEsb0NBQ0ksOERBQUMsb0RBQUQ7QUFBTSx5QkFBVyxFQUFFO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREosZUFFSSw4REFBQyxxREFBRDtBQUFPLHlCQUFXLEVBQUU7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGSixlQUdJLDhEQUFDLHFEQUFEO0FBQU8seUJBQVcsRUFBRTtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUhKLGVBSUksOERBQUMsc0RBQUQ7QUFBUSx5QkFBVyxFQUFFO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSkosZUFLSSw4REFBQyxzREFBRDtBQUFRLHlCQUFXLEVBQUU7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFMSixlQU1JLDhEQUFDLHdEQUFEO0FBQVUseUJBQVcsRUFBRTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQU5KLGVBT0ksOERBQUMscURBQUQ7QUFBTSx5QkFBVyxFQUFFO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixxQkFERSxnQkFpQkYsOERBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsQlI7QUFBQTtBQUFBO0FBQUEsdURBMkNJO0FBQ0ksVUFBSSxFQUFDLFVBRFQ7QUFFSSxTQUFHLEVBQUMsWUFGUjtBQUdJLFVBQUksRUFBQyw2RUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEzQ0osZUFnREk7QUFBTSxVQUFJLEVBQUMsVUFBWDtBQUFzQixhQUFPLEVBQUMseUVBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhESjtBQUFBLGtCQURKO0FBb0RILENBeEREOztBQTBEQSwrREFBZUQsS0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7QUN2Rk8sTUFBTUYsUUFBUSxHQUFHLEdBQWpCLEM7Ozs7Ozs7Ozs7O0FDQVAsbUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHNldEN1cnJlbnRDb21wb25lbnROb0FjdGlvbiwgc2V0SXNQYWdlQ2hhbmdpbmdBY3Rpb24gfSBmcm9tICcuLi9tb2R1bGVzL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBpbmRleFN0YXRlIH0gZnJvbSAnLi4vbW9kdWxlcy9pbmRleFJlZHVjZXInO1xyXG5cclxuY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gMTtcclxuXHJcbmludGVyZmFjZSBJQmFzZUNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgQmFzZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBoZWlnaHQ6IDkzdmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHM6IElCYXNlQ29udGFpbmVyKSA9PiBwcm9wcy5iYWNrZ3JvdW5kQ29sb3J9O1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogJHt0cmFuc2l0aW9uRHVyYXRpb259cztcclxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIHRvcDtcclxuICAgIHRvcDogMDtcclxuICAgIGJveC1zaGFkb3c6IDJweCAwcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgLTJweCAwcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuYDtcclxuXHJcbmNvbnN0IE1haW5Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogJHt0cmFuc2l0aW9uRHVyYXRpb259cztcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNTJweCk7XHJcbiAgICBtYXJnaW4tdG9wOiA1MnB4O1xyXG5cclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElQb3N0SXRDb250YWluZXIge1xyXG4gICAgY29tcG9uZW50Tm86IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgUG9zdEl0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogJHsocHJvcHM6IElQb3N0SXRDb250YWluZXIpID0+IHByb3BzLmNvbXBvbmVudE5vICogMzN9cHg7XHJcbiAgICBsZWZ0OiAtMTEwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBQb3N0SXRTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmludGVyZmFjZSBJUG9zdEl0Q29sb3JEaXYge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IFBvc3RJdENvbG9yRGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzOiBJUG9zdEl0Q29sb3JEaXYpID0+IHByb3BzLmJhY2tncm91bmRDb2xvcn07XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuYDtcclxuXHJcbmNvbnN0IFBvc3RJdFRleHREaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZjhlNTtcclxuYDtcclxuXHJcbmNvbnN0IENoYWluQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbmA7XHJcblxyXG5jb25zdCBDaGFpblNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMCAzMnB4O1xyXG5gO1xyXG5cclxuY29uc3QgQ2hhaW5GcmFtZSA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMTJweCAxMnB4O1xyXG5gO1xyXG5cclxuY29uc3QgQ2hhaW5DaXJjbGUgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNHB4KTtcclxuYDtcclxuXHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkLnNwYW5gXHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdHJhbnNpdGlvbjogJHt0cmFuc2l0aW9uRHVyYXRpb259cztcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSUJhc2Uge1xyXG4gICAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxuICAgIGNvbXBvbmVudE5vOiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IEJhc2U6IFJlYWN0LkZDPElCYXNlPiA9ICh7IGNoaWxkcmVuLCBjb21wb25lbnRObyB9KTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIC8vIHJlZHV4XHJcbiAgICBjb25zdCBjdXJyZW50Q29tcG9uZW50Tm8gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IGluZGV4U3RhdGUpID0+IHN0YXRlLmJhc2VSZWR1Y2VyLmN1cnJlbnRDb21wb25lbnRObyk7XHJcbiAgICBjb25zdCB0aXRsZUFycmF5ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBpbmRleFN0YXRlKSA9PiBzdGF0ZS5iYXNlUmVkdWNlci50aXRsZUFycmF5KTtcclxuICAgIGNvbnN0IGJhY2tncm91bmRDb2xvckFycmF5ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBpbmRleFN0YXRlKSA9PiBzdGF0ZS5iYXNlUmVkdWNlci5iYWNrZ3JvdW5kQ29sb3JBcnJheSk7XHJcbiAgICBjb25zdCBpc1BhZ2VDaGFuZ2luZyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogaW5kZXhTdGF0ZSkgPT4gc3RhdGUuYmFzZVJlZHVjZXIuaXNQYWdlQ2hhbmdpbmcpO1xyXG5cclxuICAgIC8vIHN0YXRlXHJcbiAgICBjb25zdCBbaXNUb3AsIHNldElzVG9wXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtpc0JvdHRvbSwgc2V0SXNCb3R0b21dID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICAgIC8vIHJlZlxyXG4gICAgY29uc3QgYmFzZUNvbnRhaW5lclJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuICAgIGNvbnN0IG1haW5Db250YWluZXJSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KCk7XHJcbiAgICBjb25zdCB0aXRsZVJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MU3BhbkVsZW1lbnQ+KCk7XHJcblxyXG4gICAgLy8gdXNlRWZmZWN0XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIOqzte2GtVxyXG4gICAgICAgIG1haW5Db250YWluZXJSZWYuY3VycmVudC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG5cclxuICAgICAgICBpZiAoY3VycmVudENvbXBvbmVudE5vID09PSBjb21wb25lbnRObykge1xyXG4gICAgICAgICAgICAvLyDtmITsnqwg7Y6Y7J207KeA7J28IOqyveyasFxyXG4gICAgICAgICAgICBiYXNlQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgICAgICBiYXNlQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIGJhc2VDb250YWluZXJSZWYuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBgYDtcclxuICAgICAgICAgICAgYmFzZUNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLnpJbmRleCA9IGAkezEwMCAtIGNvbXBvbmVudE5vfWA7XHJcblxyXG4gICAgICAgICAgICBtYWluQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUub3BhY2l0eSA9ICcnO1xyXG4gICAgICAgICAgICBtYWluQ29udGFpbmVyUmVmLmN1cnJlbnQuc2Nyb2xsVG8oMCwgMCk7IC8vIO2OmOydtOyngCDsiqTtgazroaQg7LWc7IOB7JyE66GcXHJcblxyXG4gICAgICAgICAgICB0aXRsZVJlZi5jdXJyZW50LnN0eWxlLm9wYWNpdHkgPSAnJztcclxuXHJcbiAgICAgICAgICAgIHNldElzVG9wKHRydWUpOyAvLyDsiqTtgazroaTsnYAg7LWc7IOB64uoXHJcbiAgICAgICAgICAgIGlmIChtYWluQ29udGFpbmVyUmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0ID09PSBtYWluQ29udGFpbmVyUmVmLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyDtjpjsnbTsp4DsnZgg7KCE7LK07YGs6riw6rCAIO2ZlOuptCDtgazquLDsmYAg64+Z7J287ZWgIOqyveyasCDsiqTtgazroaTsnYAg7LWc7ZWY64uo64+EIO2PrO2VqFxyXG4gICAgICAgICAgICAgICAgc2V0SXNCb3R0b20odHJ1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRJc0JvdHRvbShmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRDb21wb25lbnRObyA+IGNvbXBvbmVudE5vKSB7XHJcbiAgICAgICAgICAgIC8vIOyngOuCmOqwhCDtjpjsnbTsp4Dsnbwg6rK97JqwXHJcbiAgICAgICAgICAgIGJhc2VDb250YWluZXJSZWYuY3VycmVudC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XHJcbiAgICAgICAgICAgIGJhc2VDb250YWluZXJSZWYuY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgYmFzZUNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGVYKDE4MGRlZylgO1xyXG4gICAgICAgICAgICBiYXNlQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUuekluZGV4ID0gYCR7ODAgKyBjb21wb25lbnROb31gO1xyXG5cclxuICAgICAgICAgICAgbWFpbkNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLm9wYWNpdHkgPSAnMC4wNSc7XHJcblxyXG4gICAgICAgICAgICB0aXRsZVJlZi5jdXJyZW50LnN0eWxlLm9wYWNpdHkgPSAnMC4wNSc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8g7KeA64KY6rCA7KeAIOyViuydgCDtjpjsnbTsp4Dsnbwg6rK97JqwXHJcbiAgICAgICAgICAgIGJhc2VDb250YWluZXJSZWYuY3VycmVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgICAgIGJhc2VDb250YWluZXJSZWYuY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgYmFzZUNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IGBgO1xyXG4gICAgICAgICAgICBiYXNlQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUuekluZGV4ID0gYCR7ODAgLSBjb21wb25lbnROb31gO1xyXG5cclxuICAgICAgICAgICAgbWFpbkNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLm9wYWNpdHkgPSAnJztcclxuXHJcbiAgICAgICAgICAgIHRpdGxlUmVmLmN1cnJlbnQuc3R5bGUub3BhY2l0eSA9ICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGlzcGF0Y2goc2V0SXNQYWdlQ2hhbmdpbmdBY3Rpb24odHJ1ZSkpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudENvbXBvbmVudE5vID09PSBjb21wb25lbnRObykge1xyXG4gICAgICAgICAgICAgICAgbWFpbkNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLm92ZXJmbG93ID0gJ2F1dG8nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkaXNwYXRjaChzZXRJc1BhZ2VDaGFuZ2luZ0FjdGlvbihmYWxzZSkpO1xyXG4gICAgICAgIH0sIHRyYW5zaXRpb25EdXJhdGlvbiAqIDEwMDApO1xyXG4gICAgfSwgW2N1cnJlbnRDb21wb25lbnROb10pO1xyXG5cclxuICAgIC8vIG9uQ2xpY2tcclxuICAgIGNvbnN0IG9uQ2xpY2tQb3N0SXQgPSAoY29tcG9uZW50Tm8pID0+IHtcclxuICAgICAgICAvLyDtjpjsnbTsp4Ag7J2064+Z7J20IOydtOujqOyWtOyngOqzoCDsnojripQg6rK97JqwXHJcbiAgICAgICAgaWYgKGlzUGFnZUNoYW5naW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKHNldEN1cnJlbnRDb21wb25lbnROb0FjdGlvbihjb21wb25lbnRObykpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBvblNjcm9sbFxyXG4gICAgY29uc3Qgb25TY3JvbGxNYWluQ29udGFpbmVyID0gKGU6IFJlYWN0LlVJRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgLy8g7Y6Y7J207KeAIOydtOuPmeydtCDsnbTro6jslrTsp4Dqs6Ag7J6I64qUIOqyveyasFxyXG4gICAgICAgIGlmIChpc1BhZ2VDaGFuZ2luZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDtmITsnqwg7Y6Y7J207KeA6rCAIOyVhOuLjCDqsr3smrAg7Iqk7YGs66Gk6riw64qlIOykkeuLqFxyXG4gICAgICAgIGlmIChjdXJyZW50Q29tcG9uZW50Tm8gIT09IGNvbXBvbmVudE5vKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIO2OmOydtOyngCDsg4Hri6jsl5Ag7J6I64qUIOqyveyasFxyXG4gICAgICAgIGlmIChlLmN1cnJlbnRUYXJnZXQuc2Nyb2xsVG9wID09PSAwKSB7XHJcbiAgICAgICAgICAgIHNldElzVG9wKHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldElzVG9wKGZhbHNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIO2OmOydtOyngCDtlZjri6jsl5Ag7J6I64qUIOqyveyasFxyXG4gICAgICAgIGlmIChlLmN1cnJlbnRUYXJnZXQuc2Nyb2xsVG9wICsgZS5jdXJyZW50VGFyZ2V0LmNsaWVudEhlaWdodCA+PSBlLmN1cnJlbnRUYXJnZXQuc2Nyb2xsSGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHNldElzQm90dG9tKHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldElzQm90dG9tKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIG9uV2hlZWxcclxuICAgIGNvbnN0IG9uV2hlZWxNYWluQ29udGFpbmVyID0gKGU6IFJlYWN0LldoZWVsRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgLy8g7Y6Y7J207KeAIOydtOuPmeydtCDsnbTro6jslrTsp4Dqs6Ag7J6I64qUIOqyveyasFxyXG4gICAgICAgIGlmIChpc1BhZ2VDaGFuZ2luZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDtmITsnqwg7Y6Y7J207KeA6rCAIOyVhOuLjCDqsr3smrAg7Zyg6riw64qlIOykkeuLqFxyXG4gICAgICAgIGlmIChjdXJyZW50Q29tcG9uZW50Tm8gIT09IGNvbXBvbmVudE5vKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIO2OmOydtOyngOydmCDrgZ3sl5Ag64+E64us7ZWY6rOgIOychOuhnCDsiqTtgazroaQg7ZaI7J2EIOqyveyasFxyXG4gICAgICAgIGlmIChpc1RvcCAmJiBlLm5hdGl2ZUV2ZW50LmRlbHRhWSA8IDApIHtcclxuICAgICAgICAgICAgb25DbGlja1Bvc3RJdChjb21wb25lbnRObyAtIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g7Y6Y7J207KeA7J2YIOuBneyXkCDrj4Tri6ztlZjqs6Ag7JWE656Y66GcIOyKpO2BrOuhpCDtlojsnYQg6rK97JqwXHJcbiAgICAgICAgaWYgKGlzQm90dG9tICYmIGUubmF0aXZlRXZlbnQuZGVsdGFZID4gMCkge1xyXG4gICAgICAgICAgICAvLyDtmITsnqwg7Lu07Y+s64SM7Yq4IOuyiO2YuOqwgCDrp4jsp4Drp4nsnbQg7JWE64uQIOqyveyasOyXkOunjCDtjpjsnbTsp4Ag64SY6riw6riwXHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50Q29tcG9uZW50Tm8gPCB0aXRsZUFycmF5Lmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tQb3N0SXQoY29tcG9uZW50Tm8gKyAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QmFzZUNvbnRhaW5lciByZWY9e2Jhc2VDb250YWluZXJSZWZ9IGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfT5cclxuICAgICAgICAgICAgICAgIDxNYWluQ29udGFpbmVyIHJlZj17bWFpbkNvbnRhaW5lclJlZn0gb25TY3JvbGw9e29uU2Nyb2xsTWFpbkNvbnRhaW5lcn0gb25XaGVlbD17b25XaGVlbE1haW5Db250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvTWFpbkNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgICA8UG9zdEl0Q29udGFpbmVyIGNvbXBvbmVudE5vPXtjb21wb25lbnROb30+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBvc3RJdFNlY3Rpb24gb25DbGljaz17KCkgPT4gb25DbGlja1Bvc3RJdChjb21wb25lbnRObyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9zdEl0Q29sb3JEaXYgYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0SXRUZXh0RGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRpdGxlIHJlZj17dGl0bGVSZWZ9Pnt0aXRsZUFycmF5W2NvbXBvbmVudE5vXX08L1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Bvc3RJdFRleHREaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Qb3N0SXRTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9Qb3N0SXRDb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgPENoYWluQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGFpblNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFpbkZyYW1lIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFpbkNpcmNsZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2hhaW5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGFpblNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFpbkZyYW1lIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFpbkNpcmNsZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2hhaW5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGFpblNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFpbkZyYW1lIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFpbkNpcmNsZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2hhaW5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGFpblNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFpbkZyYW1lIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFpbkNpcmNsZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2hhaW5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGFpblNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFpbkZyYW1lIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFpbkNpcmNsZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2hhaW5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGFpblNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFpbkZyYW1lIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFpbkNpcmNsZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2hhaW5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGFpblNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFpbkZyYW1lIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFpbkNpcmNsZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2hhaW5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGFpblNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFpbkZyYW1lIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFpbkNpcmNsZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2hhaW5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGFpblNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFpbkZyYW1lIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFpbkNpcmNsZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2hhaW5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGFpblNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFpbkZyYW1lIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFpbkNpcmNsZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2hhaW5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGFpblNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFpbkZyYW1lIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFpbkNpcmNsZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2hhaW5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9DaGFpbkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9CYXNlQ29udGFpbmVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2U7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBpbmRleFN0YXRlIH0gZnJvbSAnLi4vbW9kdWxlcy9pbmRleFJlZHVjZXInO1xyXG5cclxuY29uc3QgQ2FyZWVyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMTJweCAxMnB4IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luOiA1MHB4IDE4cHggNjVweCAxOHB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDAgNHB4ICNjOGM4YzggaW5zZXQsIC0ycHggLTRweCA0cHggI2M4YzhjOCBpbnNldDtcclxuYDtcclxuXHJcbmNvbnN0IEltYWdlRGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIG1hcmdpbjogMThweCAyNXB4O1xyXG5gO1xyXG5cclxuY29uc3QgVGl0bGVTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRvcDogLTQwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHggMTJweCAwIDA7XHJcbiAgICBwYWRkaW5nOiAwIDEycHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggNHB4IDRweCAjYzhjOGM4IGluc2V0LCAtMnB4IDAgNHB4ICNjOGM4YzggaW5zZXQ7XHJcbmA7XHJcblxyXG5jb25zdCBDb250ZW50c1NlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHBhZGRpbmc6IDAgMTZweDtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xyXG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgVGV4dERlc2NyaXB0aW9uRGl2ID0gc3R5bGVkLmRpdmBgO1xyXG5cclxuY29uc3QgUGljdHVyZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgei1pbmRleDogMTAxO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5gO1xyXG5cclxuY29uc3QgUHV6emxlU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG5gO1xyXG5cclxuY29uc3QgUHV6emxlRGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luOiA0MHB4IDAgMTAwcHggMDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xNmRlZyk7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHtcclxuICAgICAgICB3aWR0aDogMTYwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IFB1enpsZUxlZnQgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgbGVmdDogLTEwcHg7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgbGVmdDogLTE1cHg7XHJcbiAgICAgICAgdG9wOiAxNXB4O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElQdXp6bGVSaWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgUHV6emxlUmlnaHQgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHM6IElQdXp6bGVSaWdodCkgPT4gcHJvcHMuYmFja2dyb3VuZENvbG9yfTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcmlnaHQ6IC0xMHB4O1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMnB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHRvcDogMTVweDtcclxuICAgICAgICByaWdodDogLTE1cHg7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBQdXp6bGVUb3AgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgdG9wOiAtMTBweDtcclxuICAgIGxlZnQ6IDQwcHg7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgdG9wOiAtMTVweDtcclxuICAgICAgICBsZWZ0OiA2NXB4O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElDYXJlZXJUaXRsZSB7XHJcbiAgICBjb2xvcjogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBDYXJlZXJUaXRsZSA9IHN0eWxlZC5zcGFuYFxyXG4gICAgY29sb3I6ICR7KHByb3BzOiBJQ2FyZWVyVGl0bGUpID0+IHByb3BzLmNvbG9yfTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IG1pbigxLjNlbSwgMC44ZW0gKyAxLjJ2dyk7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSVRleHREZXNjcmlwdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxuICAgIHR5cGU/OiBzdHJpbmc7XHJcbiAgICBzcmM/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IFRleHREZXNjcmlwdGlvbiA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDE4cHggMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IG1pbigxLjFlbSwgMC43ZW0gKyAxLjF2dyk7XHJcbiAgICBwYWRkaW5nOiA4cHggMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcblxyXG4gICAgJHsocHJvcHM6IElUZXh0RGVzY3JpcHRpb24pID0+IHtcclxuICAgICAgICBpZiAocHJvcHMudHlwZSA9PT0gJ2NhbWVyYScpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdcXGYwMzAnO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtwcm9wcy5iYWNrZ3JvdW5kQ29sb3J9O1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogdXJsKCR7cHJvcHMuc3JjfSksIHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wcy50eXBlID09PSAnY2FsZW5kYXInKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjZweDtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnXFxmMjcyJztcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7cHJvcHMuYmFja2dyb3VuZENvbG9yfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYDtcclxuICAgICAgICB9IGVsc2UgaWYgKHByb3BzLnR5cGUgPT09ICdwb3NpdGlvbicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdcXGYyYmInO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtwcm9wcy5iYWNrZ3JvdW5kQ29sb3J9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjZweDtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnXFxmMDA1JztcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7cHJvcHMuYmFja2dyb3VuZENvbG9yfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYDtcclxuICAgICAgICB9XHJcbiAgICB9fVxyXG5gO1xyXG5cclxuY29uc3QgUHV6emxlVGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IENhcmVlckltYWdlID0gc3R5bGVkLmltZ2BcclxuICAgIHdpZHRoOiBtaW4oMjBlbSwgY2FsYygxNWVtICsgMTB2dykpO1xyXG5gO1xyXG5cclxuY29uc3QgUGljdHVyZUltYWdlID0gc3R5bGVkLmltZ2BcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMjhweCk7XHJcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAyOHB4KTtcclxuYDtcclxuXHJcbmludGVyZmFjZSBJQ2FyZWVyIHtcclxuICAgIGNvbXBvbmVudE5vOiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IENhcmVlcjogUmVhY3QuRkM8SUNhcmVlcj4gPSAoeyBjb21wb25lbnRObyB9KTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgLy8gcmVkdXhcclxuICAgIGNvbnN0IGJhY2tncm91bmRDb2xvckFycmF5ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBpbmRleFN0YXRlKSA9PiBzdGF0ZS5iYXNlUmVkdWNlci5iYWNrZ3JvdW5kQ29sb3JBcnJheSk7XHJcblxyXG4gICAgLy8gc3RhdGVcclxuICAgIGNvbnN0IFtwaWN0dXJlSW1hZ2UsIHNldFBpY3R1cmVJbWFnZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuXHJcbiAgICAvLyByZWZcclxuICAgIGNvbnN0IHBpY3R1cmVDb250YWluZXJSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KCk7XHJcblxyXG4gICAgLy8gb25DbGlja1xyXG4gICAgY29uc3Qgb25DbGlja0NhbWVyYSA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxTcGFuRWxlbWVudCwgTW91c2VFdmVudD4sIGltZzogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgaWYgKHBpY3R1cmVDb250YWluZXJSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgc2V0UGljdHVyZUltYWdlKGltZyk7XHJcbiAgICAgICAgICAgIHBpY3R1cmVDb250YWluZXJSZWYuY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25DbGlja1BpY3R1cmVDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHBpY3R1cmVDb250YWluZXJSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICBzZXRQaWN0dXJlSW1hZ2UoJycpO1xyXG4gICAgICAgICAgICBwaWN0dXJlQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEJhc2UgY29tcG9uZW50Tm89e2NvbXBvbmVudE5vfT5cclxuICAgICAgICAgICAgICAgIDxQdXp6bGVTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQdXp6bGVEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQdXp6bGVMZWZ0IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQdXp6bGVSaWdodCBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFB1enpsZVRvcCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHV6emxlVGl0bGU+6rK966ClPC9QdXp6bGVUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L1B1enpsZURpdj5cclxuICAgICAgICAgICAgICAgIDwvUHV6emxlU2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8Q2FyZWVyQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZVNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJlZXJUaXRsZSBjb2xvcj17JyMzM2JkZGEnfT7sgrzshLEg7LKt64WEIOyGjO2UhO2KuOybqOyWtCDslYTsubTrjbDrr7g8L0NhcmVlclRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGl0bGVTZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Q29udGVudHNTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZWVySW1hZ2Ugc3JjPVwiL2ltYWdlL3NzYWZ5MS5QTkdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ltYWdlRGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbkRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119IHR5cGU9XCJjYWxlbmRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDE5LjA3IH4gMjAuMDNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjYW1lcmFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZS90b3BTY29yZV9taW5pLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IG9uQ2xpY2tDYW1lcmEoZSwgJy9pbWFnZS90b3BTY29yZS5qcGcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAx7ZWZ6riwIOuwmCDrjIDtkZwg7ISx7KCBIOyasOyImOyDgSDst6jrk51cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjYW1lcmFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZS9hYnJvYWRFZHVjYXRpb25fbWluaS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBvbkNsaWNrQ2FtZXJhKGUsICcvaW1hZ2UvYWJyb2FkRWR1Y2F0aW9uLmpwZycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIO2VtOyZuCDsl7DsiJgg64yA7IOB7J6Q66GcIOuwnO2DgVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDsm7kg6riw67CYIOq4sOy0iCDrsI8g7Ius7ZmUIOq1kOycoSDsiJjqsJVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjYW1lcmFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZS9zd2V4cGVydFNjb3JlX21pbmkucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gb25DbGlja0NhbWVyYShlLCAnL2ltYWdlL3N3ZXhwZXJ0U2NvcmUuUE5HJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg7IK87ISxIFNXIOyXreufiSDthYzsiqTtirggQSsg7Leo65OdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb25EaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50c1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmVlckNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgICA8Q2FyZWVyQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZVNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJlZXJUaXRsZSBjb2xvcj17JyMwMzI5NzAnfT7tmITrjIAg7Jik7Yag7JeQ67KEPC9DYXJlZXJUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L1RpdGxlU2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRzU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmVlckltYWdlIHNyYz1cIi9pbWFnZS9hdXRvZXZlcjEuUE5HXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbWFnZURpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb25EaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfSB0eXBlPVwiY2FsZW5kYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMC4wMyB+IO2YhOyerFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfSB0eXBlPVwicG9zaXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDsnpDrj5nssKgg7ZKI7KeIIOqwnOyEoCDsi5zsiqTthZwgRkUvQkUg6rCc67CcIOuwjyDsmrTsmIFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg7YyAIOuCtCBHaXQg64+E7J6FIOuwjyDsgqzrgrQg7KeB7JuQ65Ok7JeQ6rKMIEdpdOyCrOyaqSDrsKnrspUg6rWQ7JyhIOuLtOuLuVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDtjIAg64K0IOyLoOq4sOyIoCDsoIHsmqkg64u064u5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOyEnOu5hOyKpCDtmqjsnKjtmZTrpbwg7JyE7ZWcIOyLnOyKpO2FnCDqsJztjrgg7ZSE66Gc7KCd7Yq4IOynhO2WiVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdCDstZzsoIHtmZQg7J6R7JeF7J2EIO2Gte2VnCDshJzruYTsiqQg7IaN64+EIOqwnOyEoFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDsmbjrtoAg7Iuc7Iqk7YWc6rO8IOyXsOqzhOulvCDsnITtlZwg6rO17JqpIFJlc3QgQVBJIOqwnOuwnFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGVudHNTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJlZXJDb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvQmFzZT5cclxuXHJcbiAgICAgICAgICAgIDxQaWN0dXJlQ29udGFpbmVyIHJlZj17cGljdHVyZUNvbnRhaW5lclJlZn0gb25DbGljaz17b25DbGlja1BpY3R1cmVDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPFBpY3R1cmVJbWFnZSBzcmM9e3BpY3R1cmVJbWFnZX0gLz5cclxuICAgICAgICAgICAgPC9QaWN0dXJlQ29udGFpbmVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmVlcjtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHNldElzRW5kQWN0aW9uIH0gZnJvbSAnLi4vbW9kdWxlcy9hY3Rpb25zJztcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuYDtcclxuXHJcbmNvbnN0IFRpdGxlRGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcclxuYDtcclxuXHJcbmNvbnN0IE1haW5TZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5gO1xyXG5cclxuY29uc3QgTWFpblRpdGxlID0gc3R5bGVkLnNwYW5gXHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSUNvbG9yU3BhbiB7XHJcbiAgICBjb2xvcjogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBDb2xvclNwYW4gPSBzdHlsZWQuc3BhbmBcclxuICAgIGNvbG9yOiAkeyhwcm9wczogSUNvbG9yU3BhbikgPT4gcHJvcHMuY29sb3J9O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuYDtcclxuXHJcbmNvbnN0IFRpdGxlQ3Vyc29yID0gc3R5bGVkLnNwYW5gXHJcbiAgICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCAjZmZmO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAjMDAwO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuYDtcclxuXHJcbmNvbnN0IEluaXQgPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIC8vIHJlZlxyXG4gICAgY29uc3QgY29udGFpbmVyUmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG5cclxuICAgIGNvbnN0IHR5cGluZ1N0cmluZ1JlZjEgPSBSZWFjdC51c2VSZWY8SFRNTFNwYW5FbGVtZW50PigpO1xyXG4gICAgY29uc3QgdHlwaW5nU3RyaW5nUmVmMiA9IFJlYWN0LnVzZVJlZjxIVE1MU3BhbkVsZW1lbnQ+KCk7XHJcbiAgICBjb25zdCB0eXBpbmdTdHJpbmdSZWYzID0gUmVhY3QudXNlUmVmPEhUTUxTcGFuRWxlbWVudD4oKTtcclxuICAgIGNvbnN0IHR5cGluZ1N0cmluZ1JlZjQgPSBSZWFjdC51c2VSZWY8SFRNTFNwYW5FbGVtZW50PigpO1xyXG4gICAgY29uc3QgdHlwaW5nU3RyaW5nUmVmNSA9IFJlYWN0LnVzZVJlZjxIVE1MU3BhbkVsZW1lbnQ+KCk7XHJcbiAgICBjb25zdCB0eXBpbmdTdHJpbmdSZWY2ID0gUmVhY3QudXNlUmVmPEhUTUxTcGFuRWxlbWVudD4oKTtcclxuICAgIGNvbnN0IHR5cGluZ1N0cmluZ1JlZjcgPSBSZWFjdC51c2VSZWY8SFRNTFNwYW5FbGVtZW50PigpO1xyXG4gICAgY29uc3QgdHlwaW5nU3RyaW5nUmVmOCA9IFJlYWN0LnVzZVJlZjxIVE1MU3BhbkVsZW1lbnQ+KCk7XHJcblxyXG4gICAgY29uc3QgdHlwaW5nQ3Vyc29yMSA9IFJlYWN0LnVzZVJlZjxIVE1MU3BhbkVsZW1lbnQ+KCk7XHJcbiAgICBjb25zdCB0eXBpbmdDdXJzb3IyID0gUmVhY3QudXNlUmVmPEhUTUxTcGFuRWxlbWVudD4oKTtcclxuICAgIGNvbnN0IHR5cGluZ0N1cnNvcjMgPSBSZWFjdC51c2VSZWY8SFRNTFNwYW5FbGVtZW50PigpO1xyXG4gICAgY29uc3QgdHlwaW5nQ3Vyc29yNCA9IFJlYWN0LnVzZVJlZjxIVE1MU3BhbkVsZW1lbnQ+KCk7XHJcblxyXG4gICAgLy8gdmFyaWFibGVcclxuICAgIGNvbnN0IHRpbWUgPSAxMDA7XHJcblxyXG4gICAgY29uc3Qgc3RyaW5ncyA9IFtcclxuICAgICAgICAnQzpcXFxcVXNlcnNcXFxcVXNlclxcXFxEZXNrdG9wXFxcXHBvcnRmb2xpb1xcXFxzdW5nY2hhbj4nLFxyXG4gICAgICAgICducG0nLFxyXG4gICAgICAgICcgcnVuIHN0YXJ0ICcsXHJcbiAgICAgICAgJ3JlYWR5JyxcclxuICAgICAgICAnIC0gc3RhcnRlZCBwb3J0Zm9saW8gb2Ygc3VuZ2NoYW4sIHVybDogaHR0cHM6Ly9rc2Nwb3J0Zm9saW8uY29tJyxcclxuICAgICAgICAnd2FpdCcsXHJcbiAgICAgICAgJyAtIGNvbXBpbGluZy4uLicsXHJcbiAgICAgICAgJ2V2ZW50JyxcclxuICAgICAgICAnIC0gY29tcGlsZWQgc3VjY2VzZnVsbHknLFxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdCBzdHJpbmdPYmpzID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RyaW5nOiBzdHJpbmdzWzBdLFxyXG4gICAgICAgICAgICBzdGFydDogMCxcclxuICAgICAgICAgICAgbGVuZ3RoOiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdHJpbmc6IHN0cmluZ3NbMV0sXHJcbiAgICAgICAgICAgIHN0YXJ0OiAwLFxyXG4gICAgICAgICAgICBsZW5ndGg6IHRpbWUgKiBzdHJpbmdzWzFdLmxlbmd0aCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RyaW5nOiBzdHJpbmdzWzJdLFxyXG4gICAgICAgICAgICBzdGFydDogdGltZSAqIHN0cmluZ3NbMV0ubGVuZ3RoLFxyXG4gICAgICAgICAgICBsZW5ndGg6IHRpbWUgKiBzdHJpbmdzWzJdLmxlbmd0aCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RyaW5nOiBzdHJpbmdzWzNdLFxyXG4gICAgICAgICAgICBzdGFydDogdGltZSAqIChzdHJpbmdzWzFdLmxlbmd0aCArIHN0cmluZ3NbMl0ubGVuZ3RoICsgc3RyaW5nc1szXS5sZW5ndGgpLFxyXG4gICAgICAgICAgICBsZW5ndGg6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0cmluZzogc3RyaW5nc1s0XSxcclxuICAgICAgICAgICAgc3RhcnQ6IHRpbWUgKiAoc3RyaW5nc1sxXS5sZW5ndGggKyBzdHJpbmdzWzJdLmxlbmd0aCArIHN0cmluZ3NbM10ubGVuZ3RoKSxcclxuICAgICAgICAgICAgbGVuZ3RoOiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdHJpbmc6IHN0cmluZ3NbNV0sXHJcbiAgICAgICAgICAgIHN0YXJ0OiB0aW1lICogKHN0cmluZ3NbMV0ubGVuZ3RoICsgc3RyaW5nc1syXS5sZW5ndGggKyBzdHJpbmdzWzNdLmxlbmd0aCArIHN0cmluZ3NbNV0ubGVuZ3RoKSxcclxuICAgICAgICAgICAgbGVuZ3RoOiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdHJpbmc6IHN0cmluZ3NbNl0sXHJcbiAgICAgICAgICAgIHN0YXJ0OiB0aW1lICogKHN0cmluZ3NbMV0ubGVuZ3RoICsgc3RyaW5nc1syXS5sZW5ndGggKyBzdHJpbmdzWzNdLmxlbmd0aCArIHN0cmluZ3NbNV0ubGVuZ3RoKSxcclxuICAgICAgICAgICAgbGVuZ3RoOiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdHJpbmc6IHN0cmluZ3NbN10sXHJcbiAgICAgICAgICAgIHN0YXJ0OlxyXG4gICAgICAgICAgICAgICAgdGltZSAqXHJcbiAgICAgICAgICAgICAgICAoc3RyaW5nc1sxXS5sZW5ndGggKyBzdHJpbmdzWzJdLmxlbmd0aCArIHN0cmluZ3NbM10ubGVuZ3RoICsgc3RyaW5nc1s1XS5sZW5ndGggKyBzdHJpbmdzWzddLmxlbmd0aCksXHJcbiAgICAgICAgICAgIGxlbmd0aDogMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RyaW5nOiBzdHJpbmdzWzhdLFxyXG4gICAgICAgICAgICBzdGFydDpcclxuICAgICAgICAgICAgICAgIHRpbWUgKlxyXG4gICAgICAgICAgICAgICAgKHN0cmluZ3NbMV0ubGVuZ3RoICsgc3RyaW5nc1syXS5sZW5ndGggKyBzdHJpbmdzWzNdLmxlbmd0aCArIHN0cmluZ3NbNV0ubGVuZ3RoICsgc3RyaW5nc1s3XS5sZW5ndGgpLFxyXG4gICAgICAgICAgICBsZW5ndGg6IDAsXHJcbiAgICAgICAgfSxcclxuICAgIF07XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRUeXBpbmdTdHJpbmdBY3Rpb24xKHR5cGluZ1N0cmluZ1JlZjEsIDEpO1xyXG4gICAgICAgIHNldFR5cGluZ1N0cmluZ0FjdGlvbjEodHlwaW5nU3RyaW5nUmVmMiwgMik7XHJcbiAgICAgICAgc2V0VHlwaW5nU3RyaW5nQWN0aW9uMih0eXBpbmdTdHJpbmdSZWYzLCAzKTtcclxuICAgICAgICBzZXRUeXBpbmdTdHJpbmdBY3Rpb24yKHR5cGluZ1N0cmluZ1JlZjQsIDQpO1xyXG4gICAgICAgIHNldFR5cGluZ1N0cmluZ0FjdGlvbjIodHlwaW5nU3RyaW5nUmVmNSwgNSk7XHJcbiAgICAgICAgc2V0VHlwaW5nU3RyaW5nQWN0aW9uMih0eXBpbmdTdHJpbmdSZWY2LCA2KTtcclxuICAgICAgICBzZXRUeXBpbmdTdHJpbmdBY3Rpb24yKHR5cGluZ1N0cmluZ1JlZjcsIDcpO1xyXG4gICAgICAgIHNldFR5cGluZ1N0cmluZ0FjdGlvbjIodHlwaW5nU3RyaW5nUmVmOCwgOCk7XHJcblxyXG4gICAgICAgIHNldFR5cGluZ0N1cnNvckFjdGlvbih0eXBpbmdDdXJzb3IxLCAwLCBzdHJpbmdPYmpzWzJdLnN0YXJ0ICsgc3RyaW5nT2Jqc1syXS5sZW5ndGgpO1xyXG4gICAgICAgIHNldFR5cGluZ0N1cnNvckFjdGlvbih0eXBpbmdDdXJzb3IyLCBzdHJpbmdPYmpzWzJdLnN0YXJ0ICsgc3RyaW5nT2Jqc1syXS5sZW5ndGgsIHN0cmluZ09ianNbM10uc3RhcnQpO1xyXG4gICAgICAgIHNldFR5cGluZ0N1cnNvckFjdGlvbih0eXBpbmdDdXJzb3IzLCBzdHJpbmdPYmpzWzNdLnN0YXJ0LCBzdHJpbmdPYmpzWzVdLnN0YXJ0KTtcclxuICAgICAgICBzZXRUeXBpbmdDdXJzb3JBY3Rpb24odHlwaW5nQ3Vyc29yNCwgc3RyaW5nT2Jqc1s1XS5zdGFydCwgc3RyaW5nT2Jqc1s3XS5zdGFydCk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChzZXRJc0VuZEFjdGlvbih0cnVlKSk7XHJcbiAgICAgICAgfSwgc3RyaW5nT2Jqc1s3XS5zdGFydCArIHRpbWUgKiA1KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICAvLyDtg4DsnbTtlZEg7LKY66as6rCAIOydtOujqOyWtOyngOuKlCDslaHshZggKOq4gOyekCDtlZjrgpjslKkpXHJcbiAgICBjb25zdCBzZXRUeXBpbmdTdHJpbmdBY3Rpb24xID0gKFxyXG4gICAgICAgIHJlZjogUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxIVE1MU3BhbkVsZW1lbnQ+LCAvLyDtg4DsnbTtlZEg7LKY66as65CgIHJlZlxyXG4gICAgICAgIGluZGV4OiBudW1iZXIsIC8vIOyCrOyaqeuQoCBzdHJpbmcgb2JqIOyduOuNseyKpFxyXG4gICAgKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoYXJJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICByZWYuY3VycmVudC5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0eXBpbmdJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZWYuY3VycmVudC5pbm5lckhUTUwgPSByZWYuY3VycmVudC5pbm5lckhUTUwgKyBzdHJpbmdPYmpzW2luZGV4XS5zdHJpbmdbY2hhckluZGV4KytdO1xyXG4gICAgICAgICAgICAgICAgfSwgdGltZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0eXBpbmdJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgICAgICB9LCBzdHJpbmdPYmpzW2luZGV4XS5sZW5ndGgpO1xyXG4gICAgICAgICAgICB9LCBzdHJpbmdPYmpzW2luZGV4XS5zdGFydCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyDtg4DsnbTtlZEg7LKY66as6rCAIOydtOujqOyWtOyngOuKlCDslaHshZggKOusuOyepSDtlZjrgpjslKkpXHJcbiAgICBjb25zdCBzZXRUeXBpbmdTdHJpbmdBY3Rpb24yID0gKFxyXG4gICAgICAgIHJlZjogUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxIVE1MU3BhbkVsZW1lbnQ+LCAvLyDtg4DsnbTtlZEg7LKY66as65CgIHJlZlxyXG4gICAgICAgIGluZGV4OiBudW1iZXIsIC8vIOyCrOyaqeuQoCBzdHJpbmcgb2JqIOyduOuNseyKpFxyXG4gICAgKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQuaW5uZXJIVE1MID0gc3RyaW5nT2Jqc1tpbmRleF0uc3RyaW5nO1xyXG4gICAgICAgICAgICB9LCBzdHJpbmdPYmpzW2luZGV4XS5zdGFydCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzZXRUeXBpbmdDdXJzb3JBY3Rpb24gPSAoXHJcbiAgICAgICAgcmVmOiBSZWFjdC5NdXRhYmxlUmVmT2JqZWN0PEhUTUxTcGFuRWxlbWVudD4sIC8vIO2DgOydtO2VkSDsspjrpqzrkKAgcmVmXHJcbiAgICAgICAgc3RhcnQ6IG51bWJlciwgLy8g7JWh7IWYIOyLnOyekSDsi5zqsIRcclxuICAgICAgICBsZW5ndGg6IG51bWJlciwgLy8g7JWh7IWYIOq4uOydtFxyXG4gICAgKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xyXG4gICAgICAgICAgICB9LCBzdGFydCk7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlZi5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIH0sIGxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXIgcmVmPXtjb250YWluZXJSZWZ9PlxyXG4gICAgICAgICAgICA8TWFpblNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8VGl0bGVEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1haW5UaXRsZT57c3RyaW5nT2Jqc1swXS5zdHJpbmd9PC9NYWluVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1haW5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbG9yU3BhbiBjb2xvcj1cIiNmZmYxMDBcIiByZWY9e3R5cGluZ1N0cmluZ1JlZjF9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHJlZj17dHlwaW5nU3RyaW5nUmVmMn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L01haW5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8VGl0bGVDdXJzb3IgcmVmPXt0eXBpbmdDdXJzb3IxfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9UaXRsZURpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8VGl0bGVEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1haW5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbG9yU3BhbiBjb2xvcj1cIiMyMjkzMDBcIiByZWY9e3R5cGluZ1N0cmluZ1JlZjN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHJlZj17dHlwaW5nU3RyaW5nUmVmNH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L01haW5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8VGl0bGVDdXJzb3IgcmVmPXt0eXBpbmdDdXJzb3IyfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9UaXRsZURpdj5cclxuICAgICAgICAgICAgICAgIDxUaXRsZURpdj5cclxuICAgICAgICAgICAgICAgICAgICA8TWFpblRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sb3JTcGFuIGNvbG9yPVwiIzAwNmE3Y1wiIHJlZj17dHlwaW5nU3RyaW5nUmVmNX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gcmVmPXt0eXBpbmdTdHJpbmdSZWY2fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWFpblRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZUN1cnNvciByZWY9e3R5cGluZ0N1cnNvcjN9IC8+XHJcbiAgICAgICAgICAgICAgICA8L1RpdGxlRGl2PlxyXG4gICAgICAgICAgICAgICAgPFRpdGxlRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNYWluVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2xvclNwYW4gY29sb3I9XCIjNjgwMDhhXCIgcmVmPXt0eXBpbmdTdHJpbmdSZWY3fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiByZWY9e3R5cGluZ1N0cmluZ1JlZjh9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NYWluVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlQ3Vyc29yIHJlZj17dHlwaW5nQ3Vyc29yNH0gLz5cclxuICAgICAgICAgICAgICAgIDwvVGl0bGVEaXY+XHJcbiAgICAgICAgICAgIDwvTWFpblNlY3Rpb24+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5pdDtcclxuIiwiLy8gaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xyXG4vLyBpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuLy8gaW1wb3J0IHsgbWF4V2lkdGggfSBmcm9tICcuLi9zdHlsZS9zdHlsZSc7XHJcblxyXG4vLyBjb25zdCBTdHllbGREaXYyID0gc3R5bGVkLmRpdmBcclxuLy8gICAgIG1hcmdpbjogMCAzMnB4O1xyXG4vLyAgICAgcGFkZGluZy1ib3R0b206IDE3cHg7XHJcbi8vIGA7XHJcblxyXG4vLyBpbnRlcmZhY2UgSVN0eWxlZERpdjMge1xyXG4vLyAgICAgZGlyZWN0aW9uPzogc3RyaW5nOyAvLyB0cnVl66m0IOyasOy4oSwg6re4IOyZuCDsoozsuKFcclxuLy8gICAgIGlubmVyV2lkdGg6IG51bWJlcjtcclxuLy8gfVxyXG5cclxuLy8gY29uc3QgU3R5ZWxkRGl2MyA9IHN0eWxlZC5kaXZgXHJcbi8vICAgICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcclxuLy8gICAgICR7KHByb3BzOiBJU3R5bGVkRGl2MykgPT4ge1xyXG4vLyAgICAgICAgIGlmIChwcm9wcy5pbm5lcldpZHRoIDwgbWF4V2lkdGgpIHtcclxuLy8gICAgICAgICAgICAgcmV0dXJuIGBcclxuLy8gICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgICAgICAgICAgYDtcclxuLy8gICAgICAgICB9IGVsc2UgaWYgKHByb3BzLmRpcmVjdGlvbiA9PT0gJ3RydWUnKSB7XHJcbi8vICAgICAgICAgICAgIHJldHVybiBgXHJcbi8vICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuLy8gICAgICAgICAgICAgYDtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9fVxyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkRGl2NCA9IHN0eWxlZC5kaXZgXHJcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4vLyAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbi8vICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4vLyAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbi8vICAgICBwYWRkaW5nOiAxMnB4O1xyXG4vLyAgICAgbWFyZ2luOiA0M3B4IDI3cHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkRGl2NSA9IHN0eWxlZC5kaXZgXHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICB0b3A6IC00MXB4O1xyXG4vLyAgICAgbGVmdDogLTQxcHg7XHJcbi8vICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjVkZWcpO1xyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkRGl2NiA9IHN0eWxlZC5kaXZgXHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICB0b3A6IC00MXB4O1xyXG4vLyAgICAgcmlnaHQ6IC00MXB4O1xyXG4vLyAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjVkZWcpO1xyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkU3BhbjEgPSBzdHlsZWQuc3BhbmBcclxuLy8gICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbi8vIGA7XHJcblxyXG4vLyBjb25zdCBTdHlsZWRTcGFuMiA9IHN0eWxlZC5zcGFuYFxyXG4vLyAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4vLyAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjMjY1NWE7XHJcbi8vICAgICBjb2xvcjogI2MyNjU1YTtcclxuLy8gYDtcclxuXHJcbi8vIGludGVyZmFjZSBJSW50cm8ge1xyXG4vLyAgICAgaW5uZXJXaWR0aDogbnVtYmVyO1xyXG4vLyAgICAgdGl0bGU6IHN0cmluZztcclxuLy8gfVxyXG5cclxuLy8gY29uc3QgSW50cm86IFJlYWN0LkZDPElJbnRybz4gPSAoeyBpbm5lcldpZHRoLCB0aXRsZSB9KTogSlNYLkVsZW1lbnQgPT4ge1xyXG4vLyAgICAgY29uc3QgYm94QXJyYXkxID0gW1xyXG4vLyAgICAgICAgIHsgdGl0bGU6ICfsnbTrpoQnLCBkZXNjcmlwdGlvbjogJ+q5gOyEseywrCcgfSxcclxuLy8gICAgICAgICB7IHRpdGxlOiAn7IOd64WE7JuU7J28JywgZGVzY3JpcHRpb246ICc5NC4xMi4wOScgfSxcclxuLy8gICAgIF07XHJcbi8vICAgICBjb25zdCBib3hBcnJheTIgPSBbXHJcbi8vICAgICAgICAgeyB0aXRsZTogJ+ydtOuplOydvCcsIGRlc2NyaXB0aW9uOiAndGpkY2tzZGwwMEBuYXZlci5jb20nIH0sXHJcbi8vICAgICAgICAgeyB0aXRsZTogJ+yXsOudveyymCcsIGRlc2NyaXB0aW9uOiAnMDEwLTMzNjEtMzYzMycgfSxcclxuLy8gICAgIF07XHJcbi8vICAgICBjb25zdCBib3hBcnJheTMgPSBbXHJcbi8vICAgICAgICAgeyB0aXRsZTogJ+2Vmeq1kCcsIGRlc2NyaXB0aW9uOiAn7ZWc7JaR64yAIEVSSUNBJyB9LFxyXG4vLyAgICAgICAgIHsgdGl0bGU6ICfso7zsoITqs7UnLCBkZXNjcmlwdGlvbjogJ+ydkeyaqeyImO2VmScgfSxcclxuLy8gICAgICAgICB7IHRpdGxlOiAn67aA7KCE6rO1JywgZGVzY3JpcHRpb246ICfsu7Ttk6jthLDqs7XtlZknIH0sXHJcbi8vICAgICBdO1xyXG4vLyAgICAgY29uc3QgYm94QXJyYXk0ID0gW1xyXG4vLyAgICAgICAgIHsgdGl0bGU6ICfqsr3roKUnLCBkZXNjcmlwdGlvbjogJzHrhYQgM+qwnOyblCcgfSxcclxuLy8gICAgICAgICB7IHRpdGxlOiAn6riw7Iig67aE7JW8JywgZGVzY3JpcHRpb246ICdGRS9CRSDsm7kg6rCc67CcJyB9LFxyXG4vLyAgICAgXTtcclxuXHJcbi8vICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgIDxCYXNlIHRpdGxlPXt0aXRsZX0gYmFja2dyb3VuZENvbG9yPXsnI0E1QkFBOCd9PlxyXG4vLyAgICAgICAgICAgICA8U3R5ZWxkRGl2Mj5cclxuLy8gICAgICAgICAgICAgICAgIDxTdHllbGREaXYzIGlubmVyV2lkdGg9e2lubmVyV2lkdGh9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHtib3hBcnJheTEubWFwKChib3gpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXY0IGtleT17Ym94LmRlc2NyaXB0aW9ufT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjE+e2JveC5kZXNjcmlwdGlvbn08L1N0eWxlZFNwYW4xPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXY1PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjI+e2JveC50aXRsZX08L1N0eWxlZFNwYW4yPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2NT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2ND5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICB9KX1cclxuLy8gICAgICAgICAgICAgICAgIDwvU3R5ZWxkRGl2Mz5cclxuXHJcbi8vICAgICAgICAgICAgICAgICA8U3R5ZWxkRGl2MyBpbm5lcldpZHRoPXtpbm5lcldpZHRofSBkaXJlY3Rpb249eyd0cnVlJ30+XHJcbi8vICAgICAgICAgICAgICAgICAgICAge2JveEFycmF5Mi5tYXAoKGJveCkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZERpdjQga2V5PXtib3guZGVzY3JpcHRpb259PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMT57Ym94LmRlc2NyaXB0aW9ufTwvU3R5bGVkU3BhbjE+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZERpdjY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMj57Ym94LnRpdGxlfTwvU3R5bGVkU3BhbjI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXY2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXY0PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4vLyAgICAgICAgICAgICAgICAgPC9TdHllbGREaXYzPlxyXG5cclxuLy8gICAgICAgICAgICAgICAgIDxTdHllbGREaXYzIGlubmVyV2lkdGg9e2lubmVyV2lkdGh9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHtib3hBcnJheTMubWFwKChib3gpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXY0IGtleT17Ym94LmRlc2NyaXB0aW9ufT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjE+e2JveC5kZXNjcmlwdGlvbn08L1N0eWxlZFNwYW4xPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXY1PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjI+e2JveC50aXRsZX08L1N0eWxlZFNwYW4yPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2NT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2ND5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICB9KX1cclxuLy8gICAgICAgICAgICAgICAgIDwvU3R5ZWxkRGl2Mz5cclxuXHJcbi8vICAgICAgICAgICAgICAgICA8U3R5ZWxkRGl2MyBpbm5lcldpZHRoPXtpbm5lcldpZHRofSBkaXJlY3Rpb249eyd0cnVlJ30+XHJcbi8vICAgICAgICAgICAgICAgICAgICAge2JveEFycmF5NC5tYXAoKGJveCkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZERpdjQga2V5PXtib3guZGVzY3JpcHRpb259PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMT57Ym94LmRlc2NyaXB0aW9ufTwvU3R5bGVkU3BhbjE+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZERpdjY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMj57Ym94LnRpdGxlfTwvU3R5bGVkU3BhbjI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXY2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXY0PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4vLyAgICAgICAgICAgICAgICAgPC9TdHllbGREaXYzPlxyXG4vLyAgICAgICAgICAgICA8L1N0eWVsZERpdjI+XHJcbi8vICAgICAgICAgPC9CYXNlPlxyXG4vLyAgICAgKTtcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IEludHJvO1xyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcclxuXHJcbmNvbnN0IEludHJvQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNTZweCk7XHJcbiAgICBwYWRkaW5nOiAyOHB4IDIycHg7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSUNvbnRlbnRzU2VjdGlvbiB7XHJcbiAgICBoZWlnaHQ/OiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IENvbnRlbnRzU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDdmcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIycHg7XHJcblxyXG4gICAgaGVpZ2h0OiAkeyhwcm9wczogSUNvbnRlbnRzU2VjdGlvbikgPT4gcHJvcHMuaGVpZ2h0fXB4O1xyXG5gO1xyXG5cclxuY29uc3QgQ29udGVudHNUaXRsZSA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogbWluKGNhbGMoMC44ZW0gKyAwLjh2dyksIDEuMWVtKTtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbmA7XHJcblxyXG5jb25zdCBDb250ZW50c0Rlc2NyaXB0aW9uID0gc3R5bGVkLnNwYW5gXHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiBtaW4oY2FsYygxZW0gKyAxdncpLCAxLjhlbSk7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSUludHJvIHtcclxuICAgIGNvbXBvbmVudE5vOiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IEludHJvOiBSZWFjdC5GQzxJSW50cm8+ID0gKHsgY29tcG9uZW50Tm8gfSk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIC8vIHN0YXRlXHJcbiAgICBjb25zdCBbYWRkU2VjdGlvbnMsIHNldEFkZFNlY3Rpb25zXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcltdPihbXSk7XHJcblxyXG4gICAgLy8gcmVmXHJcbiAgICBjb25zdCBpbnRyb0NvbnRhaW5lclJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuICAgIGNvbnN0IGNvbnRlbnRzU2VjdGlvblJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuXHJcbiAgICAvLyB2YXJpYWJsZVxyXG4gICAgY29uc3QgY29udGVudHNBcnJheSA9IFtcclxuICAgICAgICB7IHRpdGxlOiAn7J2066aEJywgZGVzY3JpcHRpb246ICfquYDshLHssKwnIH0sXHJcbiAgICAgICAgeyB0aXRsZTogJ+yDneuFhOyblOydvCcsIGRlc2NyaXB0aW9uOiAnOTQuMTIuMDknIH0sXHJcbiAgICAgICAgeyB0aXRsZTogJ+ydtOuplOydvCcsIGRlc2NyaXB0aW9uOiAndGpkY2tzZGwwMEBuYXZlci5jb20nIH0sXHJcbiAgICAgICAgeyB0aXRsZTogJ+yXsOudveyymCcsIGRlc2NyaXB0aW9uOiAnMDEwLTMzNjEtMzYzMycgfSxcclxuICAgICAgICB7IHRpdGxlOiAn7ZWZ6rWQJywgZGVzY3JpcHRpb246ICftlZzslpHrjIAgRVJJQ0EnIH0sXHJcbiAgICAgICAgeyB0aXRsZTogJ+yjvOyghOqztScsIGRlc2NyaXB0aW9uOiAn7J2R7Jqp7IiY7ZWZJyB9LFxyXG4gICAgICAgIHsgdGl0bGU6ICfrtoDsoITqs7UnLCBkZXNjcmlwdGlvbjogJ+y7tO2TqO2EsOqzte2VmScgfSxcclxuICAgICAgICB7IHRpdGxlOiAn6rK966ClJywgZGVzY3JpcHRpb246ICcx64WEIDPqsJzsm5QnIH0sXHJcbiAgICAgICAgeyB0aXRsZTogJ+q4sOyIoOu2hOyVvCcsIGRlc2NyaXB0aW9uOiAnRkUvQkUg7Ju5IOqwnOuwnCcgfSxcclxuICAgIF07XHJcblxyXG4gICAgLy8gdXNlRWZmZWN0XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldEFkZFNlY3Rpb25zKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLy8gbm9ybWFsXHJcbiAgICAvLyBjb250ZW50c+ulvCDsoJzsmbjtlZwg67aA6rCAIOuEiOu5hCDqtaztlZjquLBcclxuICAgIGNvbnN0IGdldEFkZFNlY3Rpb25zID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvdGFsQ291bnQgPSBpbnRyb0NvbnRhaW5lclJlZi5jdXJyZW50LmNsaWVudEhlaWdodCAvIChjb250ZW50c1NlY3Rpb25SZWYuY3VycmVudC5jbGllbnRIZWlnaHQgKyAzMCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGFkZFNlY3Rpb25zID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbENvdW50IC0gY29udGVudHNBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBhZGRTZWN0aW9ucy5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0QWRkU2VjdGlvbnMoYWRkU2VjdGlvbnMpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCYXNlIGNvbXBvbmVudE5vPXtjb21wb25lbnROb30+XHJcbiAgICAgICAgICAgIDxJbnRyb0NvbnRhaW5lciByZWY9e2ludHJvQ29udGFpbmVyUmVmfT5cclxuICAgICAgICAgICAgICAgIHtjb250ZW50c0FycmF5Lm1hcCgoY29udGVudHMsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGVudHNTZWN0aW9uIGtleT17aW5kZXh9IHJlZj17Y29udGVudHNTZWN0aW9uUmVmfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGVudHNUaXRsZT57Y29udGVudHMudGl0bGV9PC9Db250ZW50c1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50c0Rlc2NyaXB0aW9uPntjb250ZW50cy5kZXNjcmlwdGlvbn08L0NvbnRlbnRzRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnRzU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRzU2VjdGlvbiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGVudHNUaXRsZT57Y29udGVudHMudGl0bGV9PC9Db250ZW50c1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50c0Rlc2NyaXB0aW9uPntjb250ZW50cy5kZXNjcmlwdGlvbn08L0NvbnRlbnRzRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnRzU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgICAgICAgICB7YWRkU2VjdGlvbnMubWFwKChhZGRTZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRzU2VjdGlvbiBrZXk9e2FkZFNlY3Rpb259IGhlaWdodD17Y29udGVudHNTZWN0aW9uUmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0IC0gOH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGVudHNUaXRsZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRzRGVzY3JpcHRpb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50c1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L0ludHJvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvQmFzZT5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnRybztcclxuIiwiLy8gaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuLy8gaW1wb3J0IHsgbWF4V2lkdGggfSBmcm9tICcuLi9zdHlsZS9zdHlsZSc7XHJcblxyXG4vLyBjb25zdCBTdHlsZWRTZWN0aW9uMSA9IHN0eWxlZC5zZWN0aW9uYFxyXG4vLyAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvaW1hZ2UvbWFpbkltYWdlLmpwZycpO1xyXG4vLyAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuLy8gICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbi8vIGA7XHJcblxyXG4vLyBjb25zdCBTdHlsZWREaXYxID0gc3R5bGVkLmRpdmBcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICAgcGFkZGluZzogODJweCAwO1xyXG4vLyBgO1xyXG5cclxuLy8gaW50ZXJmYWNlIElTdHllbGREaXYyIHtcclxuLy8gICAgIGlubmVyV2lkdGg6IG51bWJlcjtcclxuLy8gfVxyXG5cclxuLy8gY29uc3QgU3R5bGVkRGl2MiA9IHN0eWxlZC5kaXZgXHJcbi8vICAgICBkaXNwbGF5OiAkeyhwcm9wczogSVN0eWVsZERpdjIpID0+IChwcm9wcy5pbm5lcldpZHRoID49IG1heFdpZHRoID8gJ2Jsb2NrJyA6ICdub25lJyl9O1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgbWFyZ2luOiA2OHB4IDA7XHJcbi8vIGA7XHJcblxyXG4vLyBjb25zdCBkaXYzS2V5RnJhbWUxID0ga2V5ZnJhbWVzYFxyXG4vLyAgICAgNTAlIHtcclxuLy8gICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xyXG4vLyAgICAgfVxyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkRGl2MyA9IHN0eWxlZC5kaXZgXHJcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4vLyAgICAgJjpob3ZlciB7XHJcbi8vICAgICAgICAgYW5pbWF0aW9uOiAxLjhzICR7ZGl2M0tleUZyYW1lMX0gaW5maW5pdGU7XHJcbi8vICAgICB9XHJcbi8vIGA7XHJcblxyXG4vLyBjb25zdCBTdHlsZWREaXY0ID0gc3R5bGVkLmRpdmBcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICAgd2lkdGg6IDE1MnB4O1xyXG4vLyAgICAgaGVpZ2h0OiAxNTJweDtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNjYWYwYmU7XHJcbi8vICAgICBtYXJnaW46IDE2cHggMzJweDtcclxuLy8gYDtcclxuXHJcbi8vIGNvbnN0IFN0eWxlZERpdjUgPSBzdHlsZWQuZGl2YFxyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkRGl2NiA9IHN0eWxlZC5kaXZgXHJcbi8vICAgICBtYXgtd2lkdGg6ICR7bWF4V2lkdGh9cHg7XHJcbi8vICAgICBtYXJnaW46IDAgYXV0bztcclxuLy8gICAgIHBhZGRpbmc6IDAgMTVweDtcclxuXHJcbi8vICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke21heFdpZHRoICsgNTB9cHgpIHtcclxuLy8gICAgICAgICBtYXJnaW4tYm90dG9tOiA4NHB4O1xyXG4vLyAgICAgfVxyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkVGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4vLyAgICAgZm9udC1zaXplOiAzLjZlbTtcclxuLy8gICAgIGNvbG9yOiAjZmZmO1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuLy8gICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSB7XHJcbi8vICAgICAgICAgZm9udC1zaXplOiA0LjhlbTtcclxuLy8gICAgIH1cclxuLy8gYDtcclxuXHJcbi8vIGNvbnN0IFN0eWxlZFN1YlRpdGxlID0gc3R5bGVkLnNwYW5gXHJcbi8vICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4vLyAgICAgY29sb3I6ICNmZmY7XHJcbi8vIGA7XHJcblxyXG4vLyBjb25zdCBTdHlsZWRIM18xID0gc3R5bGVkLmgzYFxyXG4vLyAgICAgZm9udC1zaXplOiAxLjRlbTtcclxuLy8gICAgIGNvbG9yOiAjNjU4YzU5O1xyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkU3BhbjEgPSBzdHlsZWQuc3BhbmBcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4vLyAgICAgY29sb3I6ICMzYTUyMzM7XHJcbi8vIGA7XHJcblxyXG4vLyBpbnRlcmZhY2UgSU1haW4ge1xyXG4vLyAgICAgaW5uZXJXaWR0aDogbnVtYmVyO1xyXG4vLyAgICAgdGl0bGVBcnJheTogc3RyaW5nW107XHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IE1haW46IFJlYWN0LkZDPElNYWluPiA9ICh7IGlubmVyV2lkdGgsIHRpdGxlQXJyYXkgfSk6IEpTWC5FbGVtZW50ID0+IHtcclxuLy8gICAgIGNvbnN0IG9uQ2xpY2tEaXYzID0gKHRpdGxlOiBzdHJpbmcpID0+IHtcclxuLy8gICAgICAgICBjb25zdCB0aXRsZVNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aXRsZSk7XHJcblxyXG4vLyAgICAgICAgIGlmICh0aXRsZVNlY3Rpb24pIHtcclxuLy8gICAgICAgICAgICAgd2luZG93LnNjcm9sbEJ5KHsgdG9wOiB0aXRsZVNlY3Rpb24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfTtcclxuXHJcbi8vICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgIDxTdHlsZWRTZWN0aW9uMT5cclxuLy8gICAgICAgICAgICAgPFN0eWxlZERpdjY+XHJcbi8vICAgICAgICAgICAgICAgICA8U3R5bGVkRGl2NT5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRGl2MiBpbm5lcldpZHRoPXtpbm5lcldpZHRofT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlQXJyYXkubWFwKCh0aXRsZSkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRGl2MyBrZXk9e3RpdGxlfSBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrRGl2Myh0aXRsZSl9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRGl2ND5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRIM18xPnt0aXRsZX08L1N0eWxlZEgzXzE+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjE+R28g4oaSPC9TdHlsZWRTcGFuMT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXY0PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2Mz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2Mj5cclxuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZERpdjE+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRUaXRsZT7quYDshLHssKzsnZggUG9ydGZvbGlvPC9TdHlsZWRUaXRsZT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFN1YlRpdGxlPlNpbmNlIDIwMjE8L1N0eWxlZFN1YlRpdGxlPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2MT5cclxuLy8gICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2NT5cclxuLy8gICAgICAgICAgICAgPC9TdHlsZWREaXY2PlxyXG4vLyAgICAgICAgIDwvU3R5bGVkU2VjdGlvbjE+XHJcbi8vICAgICApO1xyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgTWFpbjtcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XHJcblxyXG5jb25zdCBUaXRsZVNlY3Rpb25LZXlGcmFtZSA9IGtleWZyYW1lc2BcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDBweCk7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuXHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zyb206IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IFRpdGxlU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gICAgcGFkZGluZzogMCAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGFuaW1hdGlvbi1uYW1lOiAke1RpdGxlU2VjdGlvbktleUZyYW1lfTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XHJcbmA7XHJcblxyXG5jb25zdCBNYWluVGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiBjYWxjKDU0cHggKyAxLjV2dyk7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG5gO1xyXG5cclxuY29uc3QgU3ViVGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiBjYWxjKDI0cHggKyAwLjR2dyk7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSU1haW4ge1xyXG4gICAgY29tcG9uZW50Tm86IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgTWFpbjogUmVhY3QuRkM8SU1haW4+ID0gKHsgY29tcG9uZW50Tm8gfSk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEJhc2UgY29tcG9uZW50Tm89e2NvbXBvbmVudE5vfT5cclxuICAgICAgICAgICAgICAgIDxUaXRsZVNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1haW5UaXRsZT7quYDshLHssKzsnZggUG9ydGZvbGlvPC9NYWluVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN1YlRpdGxlPlNpbmNlIDIwMjE8L1N1YlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPC9UaXRsZVNlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvQmFzZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluO1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgTW9yZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuYDtcclxuXHJcbmNvbnN0IEhlYWRlclNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgIG1hcmdpbjogMjRweCAwO1xyXG4gICAgcGFkZGluZzogMCAyNHB4O1xyXG5gO1xyXG5cclxuY29uc3QgVXJsU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICAgIHBhZGRpbmc6IDAgMjRweDtcclxuYDtcclxuXHJcbmNvbnN0IEZvb3RlclNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgIG1hcmdpbjogMjRweCAwO1xyXG4gICAgcGFkZGluZzogMCAyNHB4O1xyXG5gO1xyXG5cclxuY29uc3QgVXJsTWFpbkRpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgbWFyZ2luOiAwIDI0cHggMjRweCAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IFVybFN1YkRpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBIZWFkZXJUZXh0ID0gc3R5bGVkLnNwYW5gXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IG1pbigxLjllbSwgMS4zZW0gKyAxdncpO1xyXG5gO1xyXG5cclxuY29uc3QgVXJsVGV4dCA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogbWluKDEuMmVtLCAxZW0gKyAwLjd2dyk7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG5gO1xyXG5cclxuY29uc3QgRm9vdGVyVGV4dCA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiBtaW4oMS41ZW0sIDEuMWVtICsgMC45dncpO1xyXG5gO1xyXG5cclxuY29uc3QgVXJsSW1hZ2UgPSBzdHlsZWQuaW1nYFxyXG4gICAgd2lkdGg6IG1pbig4ZW0sIDVlbSArIDYuNHZ3KTtcclxuYDtcclxuXHJcbmNvbnN0IExvZ29JbWFnZSA9IHN0eWxlZC5pbWdgXHJcbiAgICB3aWR0aDogbWluKDhlbSwgNWVtICsgNi40dncpO1xyXG4gICAgbWFyZ2luOiAxMnB4IDA7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSU1vcmUge1xyXG4gICAgY29tcG9uZW50Tm86IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgTW9yZTogUmVhY3QuRkM8SU1vcmU+ID0gKHsgY29tcG9uZW50Tm8gfSk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIC8vIG9uQ2xpY2tcclxuICAgIGNvbnN0IG9uQ2xpY2tVcmxNYWluRGl2ID0gKHVybDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgd2luZG93Lm9wZW4odXJsKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QmFzZSBjb21wb25lbnRObz17Y29tcG9uZW50Tm99PlxyXG4gICAgICAgICAgICA8TW9yZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXJTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXJUZXh0Puq5gOyEseywrOydmCBQb3J0Zm9saW88L0hlYWRlclRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlclRleHQ+VmVyc2lvbiAxLjAuMDwvSGVhZGVyVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyVGV4dD4yMDIxLjA4LjExPC9IZWFkZXJUZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkZXJTZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDxVcmxTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxVcmxNYWluRGl2IG9uQ2xpY2s9eygpID0+IG9uQ2xpY2tVcmxNYWluRGl2KCdodHRwczovL2dpdGh1Yi5jb20va3NjY21wJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VXJsU3ViRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFVybEltYWdlIHNyYz1cIi9pbWFnZS9naXRodWIuUE5HXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxVcmxUZXh0Pmh0dHBzOi8vZ2l0aHViLmNvbS9rc2NjbXA8L1VybFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVXJsU3ViRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVXJsTWFpbkRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8VXJsTWFpbkRpdiBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrVXJsTWFpbkRpdignaHR0cHM6Ly9qZm9yai50aXN0b3J5LmNvbScpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFVybFN1YkRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxVcmxJbWFnZSBzcmM9XCIvaW1hZ2UvdGlzdG9yeS5QTkdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFVybFRleHQ+aHR0cHM6Ly9qZm9yai50aXN0b3J5LmNvbTwvVXJsVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9VcmxTdWJEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9VcmxNYWluRGl2PlxyXG4gICAgICAgICAgICAgICAgPC9VcmxTZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDxGb290ZXJTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb290ZXJUZXh0Pmh0dHBzOi8va3NjcG9ydGZvbGlvLmNvbTwvRm9vdGVyVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9vdGVyVGV4dD5EZXNpZ25lZCBCeSDquYDshLHssKw8L0Zvb3RlclRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvZ29JbWFnZSBzcmM9XCIvaW1hZ2UvU0NMb2dvMi5zdmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb290ZXJTZWN0aW9uPlxyXG4gICAgICAgICAgICA8L01vcmVDb250YWluZXI+XHJcbiAgICAgICAgPC9CYXNlPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vcmU7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcclxuaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBpbmRleFN0YXRlIH0gZnJvbSAnLi4vbW9kdWxlcy9pbmRleFJlZHVjZXInO1xyXG5cclxuY29uc3QgUHJvamVjdHNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAxMnB4IDEycHggMTJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW46IDUwcHggMThweCA2NXB4IDE4cHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggMCA0cHggI2M4YzhjOCBpbnNldCwgLTJweCAtNHB4IDRweCAjYzhjOGM4IGluc2V0O1xyXG5gO1xyXG5cclxuY29uc3QgSW1hZ2VEaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWFyZ2luOiAxOHB4IDI1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZVNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdG9wOiAtNDBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4IDAgMDtcclxuICAgIHBhZGRpbmc6IDAgMTJweDtcclxuICAgIGJveC1zaGFkb3c6IDJweCA0cHggNHB4ICNjOGM4YzggaW5zZXQsIC0ycHggMCA0cHggI2M4YzhjOCBpbnNldDtcclxuYDtcclxuXHJcbmNvbnN0IENvbnRlbnRzU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgcGFkZGluZzogMCAxNnB4O1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XHJcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBUZXh0RGVzY3JpcHRpb25EaXYgPSBzdHlsZWQuZGl2YGA7XHJcblxyXG5jb25zdCBQaWN0dXJlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiAxMDE7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBQdXp6bGVTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbmA7XHJcblxyXG5jb25zdCBQdXp6bGVEaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW46IDQwcHggMCAxMDBweCAwO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTE2ZGVnKTtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xyXG4gICAgICAgIHdpZHRoOiAxNjBweDtcclxuICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElQdXp6bGVMZWZ0IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBQdXp6bGVMZWZ0ID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzOiBJUHV6emxlTGVmdCkgPT4gcHJvcHMuYmFja2dyb3VuZENvbG9yfTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgbGVmdDogLTEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgbGVmdDogLTE1cHg7XHJcbiAgICAgICAgdG9wOiAxNXB4O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgUHV6emxlUmlnaHQgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcmlnaHQ6IC0xMHB4O1xyXG4gICAgYm94LXNoYWRvdzogM3B4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHRvcDogMTVweDtcclxuICAgICAgICByaWdodDogLTE1cHg7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBQdXp6bGVUb3AgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgdG9wOiAtMTBweDtcclxuICAgIGxlZnQ6IDQwcHg7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgdG9wOiAtMTVweDtcclxuICAgICAgICBsZWZ0OiA2NXB4O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElDYXJlZXJUaXRsZSB7XHJcbiAgICBjb2xvcj86IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgQ2FyZWVyVGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuICAgIGNvbG9yOiAkeyhwcm9wczogSUNhcmVlclRpdGxlKSA9PiBwcm9wcy5jb2xvcn07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiBtaW4oMS4zZW0sIDAuOGVtICsgMS4ydncpO1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElUZXh0RGVzY3JpcHRpb24ge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XHJcbiAgICB0eXBlPzogc3RyaW5nO1xyXG4gICAgc3JjPzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBUZXh0RGVzY3JpcHRpb24gPSBzdHlsZWQuc3BhbmBcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAxOHB4IDA7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiBtaW4oMS4xZW0sIDAuN2VtICsgMS4xdncpO1xyXG4gICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XHJcblxyXG4gICAgJHsocHJvcHM6IElUZXh0RGVzY3JpcHRpb24pID0+IHtcclxuICAgICAgICBpZiAocHJvcHMudHlwZSA9PT0gJ2NhbWVyYScpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdcXGYwMzAnO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtwcm9wcy5iYWNrZ3JvdW5kQ29sb3J9O1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogdXJsKCR7cHJvcHMuc3JjfSksIHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wcy50eXBlID09PSAnY2FsZW5kYXInKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjZweDtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnXFxmMjcyJztcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7cHJvcHMuYmFja2dyb3VuZENvbG9yfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYDtcclxuICAgICAgICB9IGVsc2UgaWYgKHByb3BzLnR5cGUgPT09ICdwb3NpdGlvbicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdcXGYyYmInO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtwcm9wcy5iYWNrZ3JvdW5kQ29sb3J9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocHJvcHMudHlwZSA9PT0gJ2xpbmsnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjZweDtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnXFxmMGMxJztcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7cHJvcHMuYmFja2dyb3VuZENvbG9yfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYDtcclxuICAgICAgICB9IGVsc2UgaWYgKHByb3BzLnR5cGUgPT09ICdjb2RlJykge1xyXG4gICAgICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ1xcZjEyMSc7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke3Byb3BzLmJhY2tncm91bmRDb2xvcn07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdcXGYwMDUnO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtwcm9wcy5iYWNrZ3JvdW5kQ29sb3J9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgIH1cclxuICAgIH19XHJcbmA7XHJcblxyXG5jb25zdCBQdXp6bGVUaXRsZSA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHtcclxuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ2FyZWVySW1hZ2UgPSBzdHlsZWQuaW1nYFxyXG4gICAgd2lkdGg6IG1pbigyMGVtLCBjYWxjKDE1ZW0gKyAxMHZ3KSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbmA7XHJcblxyXG5jb25zdCBQaWN0dXJlSW1hZ2UgPSBzdHlsZWQuaW1nYFxyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAyOHB4KTtcclxuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDI4cHgpO1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElQcm9qZWN0cyB7XHJcbiAgICBjb21wb25lbnRObzogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBQcm9qZWN0czogUmVhY3QuRkM8SVByb2plY3RzPiA9ICh7IGNvbXBvbmVudE5vIH0pOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICAvLyByZWR1eFxyXG4gICAgY29uc3QgYmFja2dyb3VuZENvbG9yQXJyYXkgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IGluZGV4U3RhdGUpID0+IHN0YXRlLmJhc2VSZWR1Y2VyLmJhY2tncm91bmRDb2xvckFycmF5KTtcclxuXHJcbiAgICAvLyBzdGF0ZVxyXG4gICAgY29uc3QgW3BpY3R1cmVJbWFnZSwgc2V0UGljdHVyZUltYWdlXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG4gICAgY29uc3QgW2N1cnJlbnRJbWFnZUluZGV4LCBzZXRDdXJyZW50SW1hZ2VJbmRleF0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXJbXT4oWzAsIDAsIDAsIDBdKTtcclxuXHJcbiAgICAvLyByZWZcclxuICAgIGNvbnN0IHBpY3R1cmVDb250YWluZXJSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KCk7XHJcblxyXG4gICAgLy8gdmFyaWFibGVcclxuICAgIGNvbnN0IGltYWdlcyA9IFtcclxuICAgICAgICBbJy9pbWFnZS9zc2FmeTEuUE5HJ10sXHJcbiAgICAgICAgWycvaW1hZ2UvZ3JvdWJ5XzAuUE5HJywgJy9pbWFnZS9ncm91YnlfMS5QTkcnLCAnL2ltYWdlL2dyb3VieV8yLlBORycsICcvaW1hZ2UvZ3JvdWJ5XzMuUE5HJ10sXHJcbiAgICAgICAgWycvaW1hZ2Uvc3NhZnkxLlBORyddLFxyXG4gICAgICAgIFsnL2ltYWdlL21veW9fMC5QTkcnLCAnL2ltYWdlL21veW9fMS5QTkcnLCAnL2ltYWdlL21veW9fMi5QTkcnLCAnL2ltYWdlL21veW9fMy5QTkcnXSxcclxuICAgIF07XHJcblxyXG4gICAgLy8gb25DbGlja1xyXG4gICAgY29uc3Qgb25DbGlja0ltYWdlRGl2ID0gKGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGVtcEN1cnJlbnRJbWFnZUluZGV4ID0gY3VycmVudEltYWdlSW5kZXguc2xpY2UoKTtcclxuICAgICAgICB0ZW1wQ3VycmVudEltYWdlSW5kZXhbaW5kZXhdID0gKHRlbXBDdXJyZW50SW1hZ2VJbmRleFtpbmRleF0gKyAxKSAlIGltYWdlc1tpbmRleF0ubGVuZ3RoO1xyXG5cclxuICAgICAgICBzZXRDdXJyZW50SW1hZ2VJbmRleCh0ZW1wQ3VycmVudEltYWdlSW5kZXgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvbkNsaWNrQ2FtZXJhID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTFNwYW5FbGVtZW50LCBNb3VzZUV2ZW50PiwgaW1nOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBpZiAocGljdHVyZUNvbnRhaW5lclJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICBzZXRQaWN0dXJlSW1hZ2UoaW1nKTtcclxuICAgICAgICAgICAgcGljdHVyZUNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvbkNsaWNrUGljdHVyZUNvbnRhaW5lciA9ICgpID0+IHtcclxuICAgICAgICBpZiAocGljdHVyZUNvbnRhaW5lclJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHNldFBpY3R1cmVJbWFnZSgnJyk7XHJcbiAgICAgICAgICAgIHBpY3R1cmVDb250YWluZXJSZWYuY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QmFzZSBjb21wb25lbnRObz17Y29tcG9uZW50Tm99PlxyXG4gICAgICAgICAgICAgICAgPFB1enpsZVNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPFB1enpsZURpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFB1enpsZUxlZnQgYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQdXp6bGVSaWdodCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHV6emxlVG9wIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQdXp6bGVUaXRsZT7tlITroZzsoJ3tirg8L1B1enpsZVRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUHV6emxlRGl2PlxyXG4gICAgICAgICAgICAgICAgPC9QdXp6bGVTZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDxQcm9qZWN0c0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8VGl0bGVTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZWVyVGl0bGU+UG9ydGZvbGlvPC9DYXJlZXJUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L1RpdGxlU2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRzU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlRGl2IG9uQ2xpY2s9eygpID0+IG9uQ2xpY2tJbWFnZURpdigwKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZWVySW1hZ2Ugc3JjPXtpbWFnZXNbMF1bY3VycmVudEltYWdlSW5kZXhbMF1dfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ltYWdlRGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbkRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119IHR5cGU9XCJjYWxlbmRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIxLjA3IH4gMjEuMDhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0gdHlwZT1cImNvZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGRSDihpIgTmV4dCAvIFR5cGVTY3JpcHQgLyBSZWR1eCAvIEhvb2tzIC8gU3R5bGVkQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOybuSDsgqzsnbTtirjsl5DshJwg64KY66eM7J2YIO2PrO2KuO2PtOumrOyYpOulvCDriITqtazrgpgg67O8IOyImCDsnojrj4TroZ0g7ZWY6riwIOychO2VtCDqsJzrsJxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg6rO17LGF7J2EIOyjvOyalCDrlJTsnpDsnbjsnLzroZwg7IK87JWEIOyYpO2UhOudvOyduOyXkOyEnCDtj6ztirjtj7TrpqzsmKTrpbwg67O064qUIOuTr+2VnCBVSS9VWOulvCDqsJzrsJxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0gdHlwZT1cImxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb21haW4g4oaSIDxhIGhyZWY9XCJsb2NhbGhvc3Q6ODA4OFwiPmxvY2FsaG9zdDo4MDg4PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfSB0eXBlPVwibGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdpdCDihpJ7JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20va3NjY21wL3BvcnRmb2xpb1wiPmh0dHBzOi8vZ2l0aHViLmNvbS9rc2NjbXAvcG9ydGZvbGlvPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGVudHNTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9Qcm9qZWN0c0NvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgICA8UHJvamVjdHNDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmVlclRpdGxlPkdyb3VieTwvQ2FyZWVyVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UaXRsZVNlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxDb250ZW50c1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZURpdiBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrSW1hZ2VEaXYoMSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmVlckltYWdlIHNyYz17aW1hZ2VzWzFdW2N1cnJlbnRJbWFnZUluZGV4WzFdXX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbWFnZURpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb25EaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfSB0eXBlPVwiY2FsZW5kYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMC4xMCB+IDIxLjAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119IHR5cGU9XCJjb2RlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRkUg4oaSIE5leHQgLyBUeXBlU2NyaXB0IC8gUmVkdXggLyBIb29rcyAvIFN0eWxlZENvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfSB0eXBlPVwiY29kZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJFIOKGkiBTcHJpbmcgLyBNeWJhdGlzIC8gTXlTUUxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmV4dOyCrOyaqSDqsr3tl5jqs7wgQ1NT7Jet65+J7J2EIOuGkuydtOq4sCDsnITtlbQg7KeE7ZaJ7ZWcIOqwnOyduCDtlITroZzsoJ3tirhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg67Cp66y47ZaI7JeI642YIOyepeyGjOyXkCDrjIDtlZwg7Jqw66as66eM7J2YIO2PieqwgOulvCDtlZjsl6wg7J6s67Cp66y47J2EIOychO2VnCDsnZjqsqzsl5Ag64+E7JuA7J20IOuQmOqzoOyekCDqsJzrsJxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg6re466O5LCDsiqTtjJ/snYQg7ISg7YOd7ZWcIOuSpCDsnbjsiqTtg4Dqt7jrnqjsspjrn7wg7IKs7KeEIOqzteycoCDrsI8g64yT6riAIOq4sOuKpSDqsJzrsJxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg67Cp66y47ZaI642YIOyepeyGjOydmCDtj4nqsIDsmpTshozsl5Ag65Sw6528IOygkOyImOulvCDrtoDsl6ztlZjsl6wg7Y+J6rCA7ZWgIOyImCDsnojqs6Ag7KCE7LK0IO2PieygkOuPhCDtmZXsnbjtlaAg7IiYXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg7J6I64+E66GdIOqwnOuwnFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDshKTqs4Qg64uo6rOE7JeQ7IScIOuKkOq7tOyhjOuNmCDrs7XsnqHtlajsnbQg7IKs7Jqp7ZWgIOuVjCDqt7jrjIDroZwg64qQ6ru07KeEIOyVhOyJrOybgOydtCDrgqjripQg7ZSE66Gc7KCd7Yq4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119IHR5cGU9XCJsaW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2l0IOKGkiA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2tzY2NtcC9Hcm91YnlcIj5odHRwczovL2dpdGh1Yi5jb20va3NjY21wL0dyb3VieTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbkRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnRzU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvUHJvamVjdHNDb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgPFByb2plY3RzQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZVNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJlZXJUaXRsZT5TQ1ZDPC9DYXJlZXJUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L1RpdGxlU2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRzU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlRGl2IG9uQ2xpY2s9eygpID0+IG9uQ2xpY2tJbWFnZURpdigyKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZWVySW1hZ2Ugc3JjPXtpbWFnZXNbMl1bY3VycmVudEltYWdlSW5kZXhbMl1dfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ltYWdlRGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbkRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119IHR5cGU9XCJjYWxlbmRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIwLjA4IH4gMjAuMDlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0gdHlwZT1cImNvZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGRSDihpIgUmVhY3QgLyBUeXBlU2NyaXB0IC8gUmVkdXggLyBSZWR1eC1TYWdhIC8gSG9va3MgLyBTdHlsZWRDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0gdHlwZT1cImNvZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCRSDihpIgU3ByaW5nIC8gTXliYXRpcyAvIE15U1FMIC8gTm9kZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUeXBlU2NyaXB07JmAIFJlZHV4LVNhZ2HsnZgg7IKs7JqpIOqyve2XmOydhCDrhpLsnbTquLAg7JyE7ZW0IOynhO2Wie2VnCDqsJzsnbgg7ZSE66Gc7KCd7Yq4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOy1nOq3vCDruYTrjIDrqbTsnZgg7KSR7JqU7ISx7J20IOymneqwgOuQqOyXkCDrlLDrnbwg7Jet65+JIO2ZleuztOulvCDsnITtlbQg6rSA66CoIOq4sOuKpSDqsJzrsJxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg7J6F7J6l7ZWY6rOg7J6QIO2VmOuKlCDrsKnsnYQg6rKA7IOJ7ZWgIOyImCDsnojqs6Ag7KCV7ZW07KeEIOyduOybkOunjO2BvOydmCDsnbjsm5Drp4wg7LC47JesIOqwgOuKpe2VmOuPhOuhnSDqsJzrsJxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUlRDUGVlckNvbm5lY3Rpb24gKyBTb2NrZXRJT+ulvCDsgqzsmqntlZjsl6wg7Iuk7Iuc6rCEIO2ZlOyDgSDtmozsnZgg67CPIOyxhO2MhSDqsJzrsJxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0gdHlwZT1cImxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHaXQg4oaSeycgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2tzY2NtcC92aWRlb19jaGF0X3R5cGVzY3JpcHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2tzY2NtcC92aWRlb19jaGF0X3R5cGVzY3JpcHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb25EaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50c1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L1Byb2plY3RzQ29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxQcm9qZWN0c0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8VGl0bGVTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZWVyVGl0bGU+TW95bzwvQ2FyZWVyVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UaXRsZVNlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxDb250ZW50c1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZURpdiBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrSW1hZ2VEaXYoMyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmVlckltYWdlIHNyYz17aW1hZ2VzWzNdW2N1cnJlbnRJbWFnZUluZGV4WzNdXX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbWFnZURpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb25EaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfSB0eXBlPVwiY2FsZW5kYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMC4wMSB+IDIwLjAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119IHR5cGU9XCJjb2RlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRkUg4oaSIFJlYWN0IC8gUmVkdXggLyBIb29rcyAvIFN0eWxlZENvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfSB0eXBlPVwiY29kZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJFIOKGkiBTcHJpbmdCb290IC8gTXliYXRpcyAvIE15U1FMIC8gRmlyZUJhc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU1NBRlnsl5DshJwg7KeE7ZaJ7ZWcIO2MgCDtlITroZzsoJ3tirggKDXsnbgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOyXrO2WiSDrj5ntlonsnpDrpbwg6rCE7Y647ZWY6rKMIOunpOy5re2VmOuKlCDqsoPsl5Ag64+E7JuA7J20IOuQmOqzoOyekCDqsJzrsJxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QgKyBGaXJlQmFzZeulvCDsnbTsmqntlZjsl6wgRE3quLDriqUg6rCc67CcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOyekOyLoOydmCDsnITsuZjsl5Ag6rCE7Y647ZWY6rKMIOuCmeyEnCg/Ke2VoCDsiJgg7J6I64qUIO2PrOyKpO2KuOuntSDquLDriqUg6rCc67CcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOyCrOyaqeuQmOuKlCBUb29s7J2YIOyImeugqOuPhCDrtoDsobHsnLzroZwg66qp7ZGc7ZWcIOq4sOuKpeuTpOydhCDrqqjrkZAg6rCc67Cc7ZWY7KeAIOuqu+2VnOqyg+yXkCDrjIDtlbQg7JWE7Ims7JuA7J20XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg64Ko64qUIO2UhOuhnOygne2KuFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfSB0eXBlPVwibGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdpdCDihpIgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9rc2NjbXAvbW95b1wiPmh0dHBzOi8vZ2l0aHViLmNvbS9rc2NjbXAvbW95bzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbkRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnRzU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvUHJvamVjdHNDb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvQmFzZT5cclxuXHJcbiAgICAgICAgICAgIDxQaWN0dXJlQ29udGFpbmVyIHJlZj17cGljdHVyZUNvbnRhaW5lclJlZn0gb25DbGljaz17b25DbGlja1BpY3R1cmVDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPFBpY3R1cmVJbWFnZSBzcmM9e3BpY3R1cmVJbWFnZX0gLz5cclxuICAgICAgICAgICAgPC9QaWN0dXJlQ29udGFpbmVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgaW5kZXhTdGF0ZSB9IGZyb20gJy4uL21vZHVsZXMvaW5kZXhSZWR1Y2VyJztcclxuXHJcbmNvbnN0IFNraWxsc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgVGl0bGVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAyNHB4IDAgNTJweCAwO1xyXG5gO1xyXG5cclxuY29uc3QgVGl0bGVNYWluRGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDA7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSVRpdGxlU3ViRGl2IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBUaXRsZVN1YkRpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wczogSVRpdGxlU3ViRGl2KSA9PiBwcm9wcy5iYWNrZ3JvdW5kQ29sb3J9O1xyXG4gICAgdG9wOiAtMTJweDtcclxuICAgIGxlZnQ6IDEycHg7XHJcbiAgICBwYWRkaW5nOiAwIDRweDtcclxuYDtcclxuXHJcbmNvbnN0IENvbnRlbnRzQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3MHB4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDgwcHg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDg0MHB4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiA3MjBweDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBTa2lsbFNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgIHdpZHRoOiAyNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDU0cHg7XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZURpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBwYWRkaW5nOiA4cHggMDtcclxuYDtcclxuXHJcbmNvbnN0IEltYWdlRGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggNHB4IDRweCAjYzhjOGM4IGluc2V0LCAtMnB4IC00cHggNHB4ICNjOGM4YzggaW5zZXQ7XHJcbmA7XHJcblxyXG5jb25zdCBNYWluVGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IG1pbihjYWxjKDEuMmVtICsgMC41dncpLCAxLjhlbSk7XHJcbmA7XHJcblxyXG5jb25zdCBTdWJUaXRsZSA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogbWluKGNhbGMoMC45ZW0gKyAwLjV2dyksIDEuMWVtKTtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbmA7XHJcblxyXG5jb25zdCBTa2lsbFRpdGxlID0gc3R5bGVkLnNwYW5gXHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogbWluKDEuNGVtICsgMC40dncsIDEuNmVtKTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG5gO1xyXG5cclxuY29uc3QgU2tpbGxJbWFnZSA9IHN0eWxlZC5pbWdgYDtcclxuXHJcbmludGVyZmFjZSBJU2tpbGxzIHtcclxuICAgIGNvbXBvbmVudE5vOiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IFNraWxsczogUmVhY3QuRkM8SVNraWxscz4gPSAoeyBjb21wb25lbnRObyB9KTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgLy8gcmVkdXhcclxuICAgIGNvbnN0IGJhY2tncm91bmRDb2xvckFycmF5ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBpbmRleFN0YXRlKSA9PiBzdGF0ZS5iYXNlUmVkdWNlci5iYWNrZ3JvdW5kQ29sb3JBcnJheSk7XHJcblxyXG4gICAgLy8gdmFyaWFibGVcclxuICAgIGNvbnN0IHNraWxsc0FycmF5ID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdGRScsXHJcbiAgICAgICAgICAgIHNyYzogJy9pbWFnZS9mZS5QTkcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0Rldm9wcycsXHJcbiAgICAgICAgICAgIHNyYzogJy9pbWFnZS9kZXZvcHMuUE5HJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdEZXZlbG9wbWVudCcsXHJcbiAgICAgICAgICAgIHNyYzogJy9pbWFnZS9kZXZlbG9wbWVudC5QTkcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0JFJyxcclxuICAgICAgICAgICAgc3JjOiAnL2ltYWdlL2JlLlBORycsXHJcbiAgICAgICAgfSxcclxuICAgIF07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QmFzZSBjb21wb25lbnRObz17Y29tcG9uZW50Tm99PlxyXG4gICAgICAgICAgICA8U2tpbGxzQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPFRpdGxlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZVN1YkRpdiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdWJUaXRsZT7soJzrqqk8L1N1YlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGl0bGVTdWJEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlTWFpbkRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1haW5UaXRsZT7quLDsiKDsiqTtg53snbQg662Q6rCAIOyeiOyngC4uPzwvTWFpblRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGl0bGVNYWluRGl2PlxyXG4gICAgICAgICAgICAgICAgPC9UaXRsZUNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgICA8VGl0bGVDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlU3ViRGl2IGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN1YlRpdGxlPuuCtOyaqTwvU3ViVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UaXRsZVN1YkRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8VGl0bGVNYWluRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udGVudHNDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2tpbGxzQXJyYXkubWFwKChza2lsbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTa2lsbFNlY3Rpb24ga2V5PXtza2lsbC50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGl0bGVEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNraWxsVGl0bGU+e3NraWxsLnRpdGxlfTwvU2tpbGxUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGl0bGVEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNraWxsSW1hZ2Ugc3JjPXtza2lsbC5zcmN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ltYWdlRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NraWxsU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGVudHNDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UaXRsZU1haW5EaXY+XHJcbiAgICAgICAgICAgICAgICA8L1RpdGxlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L1NraWxsc0NvbnRhaW5lcj5cclxuICAgICAgICA8L0Jhc2U+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2tpbGxzO1xyXG4iLCIvLyBpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XHJcbi8vIGltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkRGl2MSA9IHN0eWxlZC5kaXZgXHJcbi8vICAgICBtYXJnaW46IDAgMjRweDtcclxuLy8gICAgIHBhZGRpbmc6IDIycHggMCA1M3B4IDA7XHJcbi8vICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuLy8gYDtcclxuXHJcbi8vIGNvbnN0IFN0eWxlZERpdjIgPSBzdHlsZWQuZGl2YFxyXG4vLyAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyAgICAgcGFkZGluZzogMzJweCAyNHB4O1xyXG4vLyAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuLy8gYDtcclxuXHJcbi8vIGNvbnN0IFN0eWxlZFNwYW4xID0gc3R5bGVkLnNwYW5gXHJcbi8vICAgICBkaXNwbGF5OiBibG9jaztcclxuLy8gICAgIGNvbG9yOiAjZmZmO1xyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkU3BhbjIgPSBzdHlsZWQuc3BhbmBcclxuLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgICAgY29sb3I6ICNmZmY7XHJcbi8vIGA7XHJcblxyXG4vLyBpbnRlcmZhY2UgSVdoeUl0IHtcclxuLy8gICAgIHRpdGxlOiBzdHJpbmc7XHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IFdoeUl0OiBSZWFjdC5GQzxJV2h5SXQ+ID0gKHsgdGl0bGUgfSk6IEpTWC5FbGVtZW50ID0+IHtcclxuLy8gICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgPEJhc2UgdGl0bGU9e3RpdGxlfSBiYWNrZ3JvdW5kQ29sb3I9XCIjNkE5MTk0XCI+XHJcbi8vICAgICAgICAgICAgIDxTdHlsZWREaXYxPlxyXG4vLyAgICAgICAgICAgICAgICAgPFN0eWxlZERpdjI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4xPklU66W8IOyZnCDsi5zsnpHtlZjqsowg65CY7JeI7J2E6rmMPzwvU3R5bGVkU3BhbjE+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4yPuydtOufsCDsnbTsnKAg65WM66y47J2064ukLiDsnbTrn7Ag7J207JygIOuVjOusuOydtOuLpC4g7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuPC9TdHlsZWRTcGFuMj5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjI+7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuPC9TdHlsZWRTcGFuMj5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjI+7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuPC9TdHlsZWRTcGFuMj5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjI+7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuPC9TdHlsZWRTcGFuMj5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjI+7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuPC9TdHlsZWRTcGFuMj5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjI+7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuPC9TdHlsZWRTcGFuMj5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjI+7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuIOydtOufsCDsnbTsnKAg65WM66y47J2064ukLiDsnbTrn7Ag7J207JygIOuVjOusuOydtOuLpC48L1N0eWxlZFNwYW4yPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMj7snbTrn7Ag7J207JygIOuVjOusuOydtOuLpC4g7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuIOydtOufsCDsnbTsnKAg65WM66y47J2064ukLjwvU3R5bGVkU3BhbjI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4yPuydtOufsCDsnbTsnKAg65WM66y47J2064ukLiDsnbTrn7Ag7J207JygIOuVjOusuOydtOuLpC4g7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuPC9TdHlsZWRTcGFuMj5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjI+7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuIOydtOufsCDsnbTsnKAg65WM66y47J2064ukLiDsnbTrn7Ag7J207JygIOuVjOusuOydtOuLpC48L1N0eWxlZFNwYW4yPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMj7snbTrn7Ag7J207JygIOuVjOusuOydtOuLpC4g7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuIOydtOufsCDsnbTsnKAg65WM66y47J2064ukLjwvU3R5bGVkU3BhbjI+XHJcbi8vICAgICAgICAgICAgICAgICA8L1N0eWxlZERpdjI+XHJcbi8vICAgICAgICAgICAgIDwvU3R5bGVkRGl2MT5cclxuLy8gICAgICAgICA8L0Jhc2U+XHJcbi8vICAgICApO1xyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgV2h5SXQ7XHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XHJcbmltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgaW5kZXhTdGF0ZSB9IGZyb20gJy4uL21vZHVsZXMvaW5kZXhSZWR1Y2VyJztcclxuXHJcbmNvbnN0IFdoeUl0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDI0cHggMCA1MnB4IDA7XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZU1haW5EaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgIHBhZGRpbmc6IDEycHggMDtcclxuYDtcclxuXHJcbmludGVyZmFjZSBJVGl0bGVTdWJEaXYge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IFRpdGxlU3ViRGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzOiBJVGl0bGVTdWJEaXYpID0+IHByb3BzLmJhY2tncm91bmRDb2xvcn07XHJcbiAgICB0b3A6IC0xMnB4O1xyXG4gICAgbGVmdDogMTJweDtcclxuICAgIHBhZGRpbmc6IDAgNHB4O1xyXG5gO1xyXG5cclxuY29uc3QgUUFDb250YWllciA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4NjBweCkge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBRdWVzdGlvblNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgIHBhZGRpbmc6IDAgMjBweCAwIDIwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBBbnN3ZXJTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICBwYWRkaW5nOiAwIDIwcHggMCAyMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgcXVlc3Rpb25OdW1iZXJLZXlmcmFtZSA9IGtleWZyYW1lc2BcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIDUwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBRdWVzdGlvbkRpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG1hcmdpbjogMjRweCAwO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJveC1zaGFkb3c6IDJweCA0cHggNHB4ICNjOGM4YzggaW5zZXQsIC0ycHggLTRweCA0cHggI2M4YzhjOCBpbnNldDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICAmID4gZGl2ID4gc3BhbjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiAke3F1ZXN0aW9uTnVtYmVyS2V5ZnJhbWV9O1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xyXG4gICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBRdWVzdGlvblN1YkRpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IEFuc3dlckRpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDI0OHB4ICsgMzB2aCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG1hcmdpbjogMjRweCAwO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDRweCA0cHggI2M4YzhjOCBpbnNldCwgLTJweCAtNHB4IDRweCAjYzhjOGM4IGluc2V0O1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDg2MHB4KSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgd2lkdGg6IG1pbihjYWxjKDE2ZW0gKyAxMnZ3KSwgMjZlbSk7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBNYWluVGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IG1pbihjYWxjKDEuMmVtICsgMC41dncpLCAxLjhlbSk7XHJcbmA7XHJcblxyXG5jb25zdCBTdWJUaXRsZSA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogbWluKGNhbGMoMC45ZW0gKyAwLjV2dyksIDEuMWVtKTtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSVF1ZXN0aW9uVGl0bGUge1xyXG4gICAgY29sb3I6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgUXVlc3Rpb25UaXRsZSA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogbWluKGNhbGMoMThweCArIDAuMnZ3KSwgMS40ZW0pO1xyXG4gICAgY29sb3I6ICR7KHByb3BzOiBJUXVlc3Rpb25UaXRsZSkgPT4gcHJvcHMuY29sb3J9O1xyXG5gO1xyXG5cclxuY29uc3QgQW5zd2VyVGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSVF1ZXN0aW9uTnVtYmVyIHtcclxuICAgIGlzQ2xpY2s6IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IFF1ZXN0aW9uTnVtYmVyID0gc3R5bGVkLnNwYW5gXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiBtaW4oY2FsYygyNHB4ICsgMC42dncpLCAyZW0pO1xyXG4gICAgY29sb3I6ICNmMTVlNWU7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG5cclxuICAgIGFuaW1hdGlvbi1uYW1lOiAkeyhwcm9wczogSVF1ZXN0aW9uTnVtYmVyKSA9PiAocHJvcHMuaXNDbGljayA/IHF1ZXN0aW9uTnVtYmVyS2V5ZnJhbWUgOiAnJyl9O1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElXaHlJdCB7XHJcbiAgICBjb21wb25lbnRObzogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBXaHlJdDogUmVhY3QuRkM8SVdoeUl0PiA9ICh7IGNvbXBvbmVudE5vIH0pOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICAvLyByZWR1eFxyXG4gICAgY29uc3QgYmFja2dyb3VuZENvbG9yQXJyYXkgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IGluZGV4U3RhdGUpID0+IHN0YXRlLmJhc2VSZWR1Y2VyLmJhY2tncm91bmRDb2xvckFycmF5KTtcclxuXHJcbiAgICAvLyBzdGF0ZVxyXG4gICAgY29uc3QgW3F1ZXN0aW9uSW5kZXgsIHNldFF1ZXN0aW9uSW5kZXhdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPigtMSk7XHJcbiAgICBjb25zdCBbdHlwaW5nVGltZXIsIHNldFR5cGluZ1RpbWVyXSA9IFJlYWN0LnVzZVN0YXRlPE5vZGVKUy5UaW1lcj4oKTtcclxuXHJcbiAgICAvLyByZWZcclxuICAgIGNvbnN0IGFuc3dlclRpdGxlUmVmID0gUmVhY3QudXNlUmVmPEhUTUxTcGFuRWxlbWVudD4oKTtcclxuICAgIGNvbnN0IGFuc3dlckRpdlJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuXHJcbiAgICAvLyB2YXJpYWJsZVxyXG4gICAgY29uc3QgcW5hQXJyYXkgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBxdWVzdGlvbjogJ0lU7JeQIOq0gOyLrOqwgOynhCDsi5zquLAnLFxyXG4gICAgICAgICAgICBhbnN3ZXI6ICdJVOyXkCDqtIDsi6zqsIDsp4Qg7Iuc6riwJyxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uOiAnSVTsl5Ag6rSA7Ius7J2EIOqwgOyngOqyjCDrkJwg6rOE6riwJyxcclxuICAgICAgICAgICAgYW5zd2VyOiBgSVTsl5Ag6rSA7Ius7J2EIOqwgOyngOqyjCDrkJwg6rOE6riwXFxuXFxu44WO44WO44WO44WOYCxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uOiAn6rCc67Cc7J6Q66W8IOyEoO2Dne2VnCDsnbTsnKAnLFxyXG4gICAgICAgICAgICBhbnN3ZXI6ICfqsJzrsJzsnpDrpbwg7ISg7YOd7ZWcIOydtOycoCcsXHJcbiAgICAgICAgfSxcclxuICAgIF07XHJcblxyXG4gICAgY29uc3QgcXVlc3Rpb25Db2xvciA9IFsnIzhGQzE1QicsICcjRjE5MDIzJywgJyM2M0MxQTknXTtcclxuXHJcbiAgICAvLyBvbkNsaWNrXHJcbiAgICBjb25zdCBvbkNsaWNrUXVlc3Rpb24gPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHNldFF1ZXN0aW9uSW5kZXgoaW5kZXgpOyAvLyDsp4jrrLggaW5kZXhcclxuICAgICAgICBjb25zdCB0aW1lID0gNTA7IC8vIOq4gOyekCDrgpjsmKTripQg7IaN64+EXHJcblxyXG4gICAgICAgIGlmIChhbnN3ZXJUaXRsZVJlZi5jdXJyZW50ICYmIGFuc3dlckRpdlJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGxldCBjaGFySW5kZXggPSAwO1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHR5cGluZ1RpbWVyKTsgLy8g6riw7KG0IGludGVydmFsIOyiheujjFxyXG4gICAgICAgICAgICBhbnN3ZXJUaXRsZVJlZi5jdXJyZW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICBhbnN3ZXJUaXRsZVJlZi5jdXJyZW50LnN0eWxlLmNvbG9yID0gcXVlc3Rpb25Db2xvcltpbmRleF07XHJcbiAgICAgICAgICAgIGFuc3dlckRpdlJlZi5jdXJyZW50LnN0eWxlLmJveFNoYWRvdyA9IGAycHggNHB4IDRweCAke3F1ZXN0aW9uQ29sb3JbaW5kZXhdfSBpbnNldCwgLTJweCAtNHB4IDRweCAke3F1ZXN0aW9uQ29sb3JbaW5kZXhdfSBpbnNldGA7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0eXBpbmdJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIO2DgOydtO2VkSDsspjrpqxcclxuICAgICAgICAgICAgICAgIGlmIChxbmFBcnJheVtpbmRleF0uYW5zd2VyW2NoYXJJbmRleF0gPT09ICdcXG4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g6rCc7ZaJIOusuOyekOydvCDqsr3smrBcclxuICAgICAgICAgICAgICAgICAgICBhbnN3ZXJUaXRsZVJlZi5jdXJyZW50LmlubmVySFRNTCArPSAnPGJyIC8+JztcclxuICAgICAgICAgICAgICAgICAgICBjaGFySW5kZXgrKztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g6rCc7ZaJIOusuOyekOqwgCDslYTri5Ag6rK97JqwXHJcbiAgICAgICAgICAgICAgICAgICAgYW5zd2VyVGl0bGVSZWYuY3VycmVudC5pbm5lckhUTUwgKz0gcW5hQXJyYXlbaW5kZXhdLmFuc3dlcltjaGFySW5kZXgrK107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIHRpbWUpO1xyXG5cclxuICAgICAgICAgICAgc2V0VHlwaW5nVGltZXIodHlwaW5nSW50ZXJ2YWwpOyAvLyDtmITsnqwgaW50ZXJ2YWwg65Ox66GdXHJcblxyXG4gICAgICAgICAgICAvLyDrqqjrk6Ag66y47J6Q6rCAIOyymOumrOuQmOuKlCDsi5zqsITsl5Ag64+E64us7ZWY66m0IGludGVydmFsIOyiheujjFxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodHlwaW5nSW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICB9LCBxbmFBcnJheVtpbmRleF0uYW5zd2VyLmxlbmd0aCAqIHRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QmFzZSBjb21wb25lbnRObz17Y29tcG9uZW50Tm99PlxyXG4gICAgICAgICAgICA8V2h5SXRDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8VGl0bGVDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlU3ViRGl2IGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN1YlRpdGxlPuygnOuqqTwvU3ViVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UaXRsZVN1YkRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8VGl0bGVNYWluRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWFpblRpdGxlPuyZnCDqsJzrsJzsnpDqsIAg65CY66Ck6rOgIO2WiOuNlOudvC4uPzwvTWFpblRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGl0bGVNYWluRGl2PlxyXG4gICAgICAgICAgICAgICAgPC9UaXRsZUNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgICA8VGl0bGVDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlU3ViRGl2IGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN1YlRpdGxlPuuCtOyaqTwvU3ViVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UaXRsZVN1YkRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8VGl0bGVNYWluRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UUFDb250YWllcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxRdWVzdGlvblNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3FuYUFycmF5Lm1hcCgocW5hLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFF1ZXN0aW9uRGl2IGtleT17cW5hLmFuc3dlcn0gb25DbGljaz17KGUpID0+IG9uQ2xpY2tRdWVzdGlvbihpbmRleCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxRdWVzdGlvblN1YkRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFF1ZXN0aW9uTnVtYmVyIGlzQ2xpY2s9e3F1ZXN0aW9uSW5kZXggPT09IGluZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFF7aW5kZXggKyAxfS57JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1F1ZXN0aW9uTnVtYmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UXVlc3Rpb25UaXRsZSBjb2xvcj17cXVlc3Rpb25Db2xvcltpbmRleF19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3FuYS5xdWVzdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9RdWVzdGlvblRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUXVlc3Rpb25TdWJEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1F1ZXN0aW9uRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9RdWVzdGlvblNlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFuc3dlclNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFuc3dlckRpdiByZWY9e2Fuc3dlckRpdlJlZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbnN3ZXJUaXRsZSByZWY9e2Fuc3dlclRpdGxlUmVmfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtxdWVzdGlvbkluZGV4ID49IDAgPyAnJyA6ICfqtoHquIjtlZjsi6Ag7KeI66y47J2EIOyEoO2Dne2VtOyjvOyEuOyalC4nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Fuc3dlclRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQW5zd2VyRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BbnN3ZXJTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1FBQ29udGFpZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UaXRsZU1haW5EaXY+XHJcbiAgICAgICAgICAgICAgICA8L1RpdGxlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L1doeUl0Q29udGFpbmVyPlxyXG4gICAgICAgIDwvQmFzZT5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaHlJdDtcclxuIiwiLy8gaW5pdFxyXG5leHBvcnQgY29uc3Qgc2V0SXNFbmQgPSAnc2V0SXNFbmQnO1xyXG5cclxuLy8gYmFzZVxyXG5leHBvcnQgY29uc3Qgc2V0Q3VycmVudENvbXBvbmVudE5vID0gJ3NldEN1cnJlbnRDb21wb25lbnRObyc7XHJcbmV4cG9ydCBjb25zdCBzZXRJc1BhZ2VDaGFuZ2luZyA9ICdzZXRJc1BhZ2VDaGFuZ2luZyc7XHJcbiIsImltcG9ydCB7IHNldEN1cnJlbnRDb21wb25lbnRObywgc2V0SXNFbmQsIHNldElzUGFnZUNoYW5naW5nIH0gZnJvbSAnLi9hY3Rpb25UeXBlJztcclxuaW1wb3J0IHsgSXNldEN1cnJlbnRDb21wb25lbnROb0FjdGlvbiwgSXNldElzRW5kQWN0aW9uLCBJc2V0SXNQYWdlQ2hhbmdpbmdBY3Rpb24gfSBmcm9tICcuL2FjdGlvbkludGVyZmFjZSc7XHJcblxyXG4vLyBpbml0XHJcbmV4cG9ydCBjb25zdCBzZXRJc0VuZEFjdGlvbiA9IChyZXM6IGJvb2xlYW4pOiBJc2V0SXNFbmRBY3Rpb24gPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBzZXRJc0VuZCxcclxuICAgICAgICBwYXlsb2FkOiByZXMsXHJcbiAgICB9O1xyXG59O1xyXG5cclxuLy8gYmFzZVxyXG5leHBvcnQgY29uc3Qgc2V0Q3VycmVudENvbXBvbmVudE5vQWN0aW9uID0gKHJlczogbnVtYmVyKTogSXNldEN1cnJlbnRDb21wb25lbnROb0FjdGlvbiA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IHNldEN1cnJlbnRDb21wb25lbnRObyxcclxuICAgICAgICBwYXlsb2FkOiByZXMsXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldElzUGFnZUNoYW5naW5nQWN0aW9uID0gKHJlczogYm9vbGVhbik6IElzZXRJc1BhZ2VDaGFuZ2luZ0FjdGlvbiA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IHNldElzUGFnZUNoYW5naW5nLFxyXG4gICAgICAgIHBheWxvYWQ6IHJlcyxcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBhY3Rpb25zID0gSXNldElzRW5kQWN0aW9uIHwgSXNldEN1cnJlbnRDb21wb25lbnROb0FjdGlvbiB8IElzZXRJc1BhZ2VDaGFuZ2luZ0FjdGlvbjtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTWFpbiBmcm9tICcuLi9jb21wb25lbnQvbWFpbic7XHJcbmltcG9ydCBJbnRybyBmcm9tICcuLi9jb21wb25lbnQvaW50cm8nO1xyXG5pbXBvcnQgV2h5SXQgZnJvbSAnLi4vY29tcG9uZW50L3doeUl0JztcclxuaW1wb3J0IFNraWxscyBmcm9tICcuLi9jb21wb25lbnQvc2tpbGxzJztcclxuaW1wb3J0IENhcmVlciBmcm9tICcuLi9jb21wb25lbnQvY2FyZWVyJztcclxuaW1wb3J0IEluaXQgZnJvbSAnLi4vY29tcG9uZW50L2luaXQnO1xyXG5pbXBvcnQgUHJvamVjdHMgZnJvbSAnLi4vY29tcG9uZW50L3Byb2plY3RzJztcclxuaW1wb3J0IE1vcmUgZnJvbSAnLi4vY29tcG9uZW50L21vcmUnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGluZGV4U3RhdGUgfSBmcm9tICcuLi9tb2R1bGVzL2luZGV4UmVkdWNlcic7XHJcbmltcG9ydCB7IG1heFdpZHRoIH0gZnJvbSAnLi4vc3R5bGUvc3R5bGUnO1xyXG5cclxuY29uc3QgSW5kZXhNYWluQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gKDEwMHZ3IC0gMTAwJSkpO1xyXG5gO1xyXG5cclxuY29uc3QgSW5kZXhTdWJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWF4LXdpZHRoOiAke21heFdpZHRofXB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoN3ZoKTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuYDtcclxuXHJcbmNvbnN0IENvbXBvbmVudENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBwZXJzcGVjdGl2ZTogNDAwMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgLy8gcmVkdXhcclxuICAgIGNvbnN0IGlzRW5kID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBpbmRleFN0YXRlKSA9PiBzdGF0ZS5pbml0UmVkdWNlci5pc0VuZCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7aXNFbmQgPyAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbmRleE1haW5Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbmRleFN1YkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnRDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1haW4gY29tcG9uZW50Tm89ezB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEludHJvIGNvbXBvbmVudE5vPXsxfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXaHlJdCBjb21wb25lbnRObz17Mn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2tpbGxzIGNvbXBvbmVudE5vPXszfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJlZXIgY29tcG9uZW50Tm89ezR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2plY3RzIGNvbXBvbmVudE5vPXs1fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb3JlIGNvbXBvbmVudE5vPXs2fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db21wb25lbnRDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5kZXhTdWJDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JbmRleE1haW5Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxJbml0IC8+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGgxLFxyXG4gICAgICAgICAgICAgICAgICAgIGgyLFxyXG4gICAgICAgICAgICAgICAgICAgIGgzLFxyXG4gICAgICAgICAgICAgICAgICAgIGg0LFxyXG4gICAgICAgICAgICAgICAgICAgIGg1LFxyXG4gICAgICAgICAgICAgICAgICAgIGg2LFxyXG4gICAgICAgICAgICAgICAgICAgIHNwYW4sXHJcbiAgICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQXBwbGVTREdvdGhpY05lbycsICdOb3RvIFNhbnMgS1InLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QnVuZ2VlJmRpc3BsYXk9c3dhcCcpO1xyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0L2Nzc1wiXHJcbiAgICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCwgbWF4aW11bS1zY2FsZT0xLCBtaW5pbXVtLXNjYWxlPTFcIiAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iLCJleHBvcnQgY29uc3QgbWF4V2lkdGggPSA5NjA7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==