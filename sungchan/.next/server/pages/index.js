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
})(["width:10px;display:flex;justify-content:space-between;z-index:1;"]);
const Chain = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "base__Chain",
  componentId: "sc-1ugehyd-9"
})(["width:4px;height:40px;background-color:#616161;opacity:0.7;border-radius:0 0 12px 12px;"]);
const ChainCircle = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "base__ChainCircle",
  componentId: "sc-1ugehyd-10"
})(["width:20px;height:20px;border-radius:50%;background-color:#fff;transform:translateY(-14px);box-shadow:inset 1px 0 2px rgba(0,0,0,0.4),inset -1px -2px 2px rgba(0,0,0,0.4);"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "base__Title",
  componentId: "sc-1ugehyd-11"
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
  const [isBottom, setIsBottom] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
  const [chainArray, setChainArray] = react__WEBPACK_IMPORTED_MODULE_1__.useState([]);
  const [touchY, setTouchY] = react__WEBPACK_IMPORTED_MODULE_1__.useState(0); // ref

  const baseContainerRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef();
  const mainContainerRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef();
  const titleRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(); // useEffect

  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    window.addEventListener('resize', onResize);
    onResize();
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);
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
    } // 현재 컴포넌트 번호 변경


    dispatch((0,_modules_actions__WEBPACK_IMPORTED_MODULE_4__.setCurrentComponentNoAction)(componentNo)); // 메뉴바가 열려있는 경우 닫기

    dispatch((0,_modules_actions__WEBPACK_IMPORTED_MODULE_4__.setIndexSubContainerTranslateXAction)(0));
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
  }; // onResize


  const onResize = () => {
    const count = Math.floor(baseContainerRef.current.clientWidth / 84);
    const chainArray = [];

    for (let i = 0; i < count; i++) {
      chainArray.push(i);
    }

    setChainArray(chainArray);
  }; // onTouch


  const onTouchStartMainContainer = e => {
    // 페이지의 끝에 도달했을 경우만 정상적인 데이터 입력
    if (isTop || isBottom) {
      setTouchY(e.changedTouches[0].clientY);
    } else {
      setTouchY(-1);
    }
  };

  const onTouchEndMainContainer = e => {
    // 페이지 이동이 이루어지고 있는 경우
    if (isPageChanging) {
      return;
    } // 현재 페이지가 아닌 경우 휠기능 중단


    if (currentComponentNo !== componentNo) {
      return;
    } // 페이지의 끝에 도달한 뒤 스크롤한게 아닌 경우


    if (touchY === -1) {
      return;
    } // 페이지의 끝에 도달하고 위로 스크롤 했을 경우


    if (isTop && touchY - e.changedTouches[0].clientY < 0) {
      onClickPostIt(componentNo - 1);
    } // 페이지의 끝에 도달하고 아래로 스크롤 했을 경우


    if (isBottom && touchY - e.changedTouches[0].clientY > 0) {
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
        onTouchStart: onTouchStartMainContainer,
        onTouchEnd: onTouchEndMainContainer,
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 334,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostItContainer, {
        componentNo: componentNo,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostItSection, {
          onClick: () => onClickPostIt(componentNo),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostItColorDiv, {
            backgroundColor: backgroundColorArray[componentNo]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 346,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostItTextDiv, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {
              ref: titleRef,
              children: titleArray[componentNo]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 348,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 347,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 345,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 344,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainContainer, {
        children: chainArray.map(value => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainSection, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainFrame, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Chain, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 358,
                columnNumber: 37
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Chain, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 359,
                columnNumber: 37
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 357,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainCircle, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 361,
              columnNumber: 33
            }, undefined)]
          }, value, true, {
            fileName: _jsxFileName,
            lineNumber: 356,
            columnNumber: 29
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 353,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 333,
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
})(["position:relative;display:flex;justify-content:center;align-items:center;width:120px;height:50px;background-color:#fff;margin:40px 0 100px 0;transform:rotate(-16deg);box-shadow:2px 2px 4px rgba(0,0,0,0.5);@media screen and (min-width:700px){width:160px;height:60px;box-shadow:3px 3px 6px rgba(0,0,0,0.5);}"]);
const PuzzleLeft = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "career__PuzzleLeft",
  componentId: "sc-10mcn0j-8"
})(["position:absolute;background-color:#fff;border-radius:50%;width:24px;height:24px;top:13px;left:-13px;box-shadow:-2px 1px 2px rgba(0,0,0,0.5);@media screen and (min-width:700px){width:30px;height:30px;left:-15px;top:15px;}"]);
const PuzzleRight = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "career__PuzzleRight",
  componentId: "sc-10mcn0j-9"
})(["position:absolute;background-color:", ";border-radius:50%;width:24px;height:24px;top:13px;right:-13px;box-shadow:inset 3px 0 1px rgba(0,0,0,0.5);@media screen and (min-width:700px){width:30px;height:30px;top:15px;right:-15px;}"], props => props.backgroundColor);
const PuzzleTop = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "career__PuzzleTop",
  componentId: "sc-10mcn0j-10"
})(["position:absolute;background-color:#fff;border-radius:50%;width:24px;height:24px;top:-13px;left:43px;@media screen and (min-width:700px){width:30px;height:30px;top:-15px;left:65px;}"]);
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
})(["font-weight:600;font-size:1.2em;transform:translateX(-6px);@media screen and (min-width:700px){font-size:1.5em;transform:translateX(-7.5px);}"]);
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
            lineNumber: 269,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PuzzleRight, {
            backgroundColor: backgroundColorArray[componentNo]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 270,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PuzzleTop, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 271,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PuzzleTitle, {
            children: "\uACBD\uB825"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 272,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CareerContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleSection, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CareerTitle, {
            color: '#33bdda',
            children: "\uC0BC\uC131 \uCCAD\uB144 \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uC544\uCE74\uB370\uBBF8"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 278,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 277,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentsSection, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageDiv, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CareerImage, {
              src: "/image/ssafy1.PNG"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 283,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 282,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescriptionDiv, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "calendar",
              children: "19.07 ~ 20.03"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 287,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "camera",
              src: "/image/topScore_mini.png",
              onClick: e => onClickCamera(e, '/image/topScore.jpg'),
              children: "1\uD559\uAE30 \uBC18 \uB300\uD45C \uC131\uC801 \uC6B0\uC218\uC0C1 \uCDE8\uB4DD"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 290,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "camera",
              src: "/image/abroadEducation_mini.png",
              onClick: e => onClickCamera(e, '/image/abroadEducation.jpg'),
              children: "\uD574\uC678 \uC5F0\uC218 \uB300\uC0C1\uC790\uB85C \uBC1C\uD0C1"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 298,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "\uC6F9 \uAE30\uBC18 \uAE30\uCD08 \uBC0F \uC2EC\uD654 \uAD50\uC721 \uC218\uAC15"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 306,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "camera",
              src: "/image/swexpertScore_mini.png",
              onClick: e => onClickCamera(e, '/image/swexpertScore.PNG'),
              children: "\uC0BC\uC131 SW \uC5ED\uB7C9 \uD14C\uC2A4\uD2B8 A+ \uCDE8\uB4DD"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 309,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 286,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CareerContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleSection, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CareerTitle, {
            color: '#032970',
            children: "\uD604\uB300 \uC624\uD1A0\uC5D0\uBC84"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 323,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 322,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentsSection, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageDiv, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CareerImage, {
              src: "/image/autoever1.PNG"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 328,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 327,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescriptionDiv, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "calendar",
              children: "20.03 ~ \uD604\uC7AC"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 332,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "position",
              children: "\uC790\uB3D9\uCC28 \uD488\uC9C8 \uAC1C\uC120 \uC2DC\uC2A4\uD15C FE/BE \uAC1C\uBC1C \uBC0F \uC6B4\uC601"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 335,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "\uD300 \uB0B4 Git \uB3C4\uC785 \uBC0F \uC0AC\uB0B4 \uC9C1\uC6D0\uB4E4\uC5D0\uAC8C Git\uC0AC\uC6A9 \uBC29\uBC95 \uAD50\uC721 \uB2F4\uB2F9"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 338,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "\uD300 \uB0B4 \uC2E0\uAE30\uC220 \uC801\uC6A9 \uB2F4\uB2F9"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 341,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "\uC11C\uBE44\uC2A4 \uD6A8\uC728\uD654\uB97C \uC704\uD55C \uC2DC\uC2A4\uD15C \uAC1C\uD3B8 \uD504\uB85C\uC81D\uD2B8 \uC9C4\uD589"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 344,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "React \uCD5C\uC801\uD654 \uC791\uC5C5\uC744 \uD1B5\uD55C \uC11C\uBE44\uC2A4 \uC18D\uB3C4 \uAC1C\uC120"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 347,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "\uC678\uBD80 \uC2DC\uC2A4\uD15C\uACFC \uC5F0\uACC4\uB97C \uC704\uD55C \uACF5\uC6A9 Rest API \uAC1C\uBC1C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 350,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 331,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 326,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PictureContainer, {
      ref: pictureContainerRef,
      onClick: onClickPictureContainer,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PictureImage, {
        src: pictureImage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 359,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Career);

/***/ }),

/***/ "./component/cover.tsx":
/*!*****************************!*\
  !*** ./component/cover.tsx ***!
  \*****************************/
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
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base */ "./component/base.tsx");


var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\component\\cover.tsx";




const CoverContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "cover__CoverContainer",
  componentId: "sc-13wqpfr-0"
})(["display:flex;flex-direction:column;min-height:100%;justify-content:space-evenly;align-items:center;"]);
const ContentsDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "cover__ContentsDiv",
  componentId: "sc-13wqpfr-1"
})(["margin:0 auto;text-align:center;position:relative;"]);
const ArrowSection = styled_components__WEBPACK_IMPORTED_MODULE_3___default().section.withConfig({
  displayName: "cover__ArrowSection",
  componentId: "sc-13wqpfr-2"
})(["position:absolute;top:-", "px;left:0;"], props => props.top);
const ArrowDivFrame = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.keyframes)(["0%{opacity:0;transform:translateX(-40px) rotate(-12deg);}33%{opacity:1;transform:rotate(-12deg);}"]);
const ArrowDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "cover__ArrowDiv",
  componentId: "sc-13wqpfr-3"
})(["display:inline-block;background-color:", ";position:relative;width:", "px;height:", "px;transform:rotate(-12deg);display:flex;justify-content:center;align-items:center;margin:40px 0;animation-name:", ";animation-duration:1s;animation-timing-function:ease-in;box-shadow:0 2px 4px rgba(0,0,0,0.4);"], props => props.backgroundColor, props => props.arrowWidth, props => props.arrowHeight, ArrowDivFrame);
const ArrowLeftDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "cover__ArrowLeftDiv",
  componentId: "sc-13wqpfr-4"
})(["position:absolute;transform:rotate(-45deg);", ""], props => {
  return `
            top: ${(props.arrowHeight - props.arrowHeight / Math.sqrt(2)) / 2}px;
            left: -${props.arrowHeight / 2 - (props.arrowHeight - props.arrowHeight / Math.sqrt(2)) / 2}px;
            width: ${props.arrowHeight / Math.sqrt(2)}px;
            height: ${props.arrowHeight / Math.sqrt(2)}px;
            background-color: ${props.backgroundColor};
        `;
});
const ArrowRightDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "cover__ArrowRightDiv",
  componentId: "sc-13wqpfr-5"
})(["position:absolute;transform:rotate(-45deg);box-shadow:1px 1px 1px rgba(0,0,0,0.4);", ""], props => {
  return `
            top: ${(props.arrowHeight - props.arrowHeight / Math.sqrt(2)) / 2}px;
            right: -${props.arrowHeight / 2 - (props.arrowHeight - props.arrowHeight / Math.sqrt(2)) / 2}px;
            width: ${props.arrowHeight / Math.sqrt(2)}px;
            height: ${props.arrowHeight / Math.sqrt(2)}px;
            background-color: ${props.backgroundColor};
        `;
});
const LogoSection = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "cover__LogoSection",
  componentId: "sc-13wqpfr-6"
})([""]);
const ArrowTitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "cover__ArrowTitle",
  componentId: "sc-13wqpfr-7"
})(["display:block;font-size:min(calc(2.2em + 2.8vw),3.6em);font-weight:600;margin-left:60px;position:relative;z-index:1;color:rgba(255,255,255,0.8);"]);
const MainTitleFrame = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.keyframes)(["0%,33%{opacity:0;transform:translateX(-40px);}66%{opacity:1;transform:initial;}"]);
const MainTitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "cover__MainTitle",
  componentId: "sc-13wqpfr-8"
})(["font-weight:600;font-size:min(calc(3.6em + 5.2vw),6.4em);position:relative;z-index:1;display:flex;animation-name:", ";animation-duration:1s;animation-timing-function:ease-in;text-shadow:3px 3px 3px rgba(255,255,255,0.8);"], MainTitleFrame);
const LogoImageFrame = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.keyframes)(["0%,33%,66%{opacity:0;transform:translateX(-40px);}99%{opacity:1;transform:initial;}"]);
const LogoImage = styled_components__WEBPACK_IMPORTED_MODULE_3___default().img.withConfig({
  displayName: "cover__LogoImage",
  componentId: "sc-13wqpfr-9"
})(["width:min(9.2em,6.6em + 7.8vw);margin:12px 0;animation-name:", ";animation-duration:1s;animation-timing-funtion:ease-in;"], LogoImageFrame);
const MainTitleInCline = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "cover__MainTitleInCline",
  componentId: "sc-13wqpfr-10"
})(["transform:rotate(-12deg);display:inline-block;color:#c19277;"]);

const Cover = ({
  componentNo
}) => {
  // redux
  const backgroundColorArray = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.baseReducer.backgroundColorArray); // state

  const [arrowWidth, setArrowWidth] = react__WEBPACK_IMPORTED_MODULE_1__.useState(0);
  const [arrowHeight, setArrowHeight] = react__WEBPACK_IMPORTED_MODULE_1__.useState(100); // ref

  const mainTitleRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(); // useEffect

  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    window.addEventListener('resize', onResize);
    onResize();
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []); // normal

  const onResize = () => {
    const arrowWidth = Math.min(mainTitleRef.current.offsetWidth - arrowHeight / Math.sqrt(2) / 2, 400);
    setArrowWidth(arrowWidth);
    setArrowHeight(arrowWidth / 4);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_base__WEBPACK_IMPORTED_MODULE_4__.default, {
      componentNo: componentNo,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CoverContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentsDiv, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ArrowSection, {
            top: arrowHeight,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ArrowDiv, {
              backgroundColor: "#62959C",
              arrowWidth: arrowWidth,
              arrowHeight: arrowHeight,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ArrowLeftDiv, {
                backgroundColor: backgroundColorArray[componentNo],
                arrowHeight: arrowHeight
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 211,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ArrowRightDiv, {
                backgroundColor: "#62959C",
                arrowHeight: arrowHeight
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 215,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ArrowTitle, {
                children: "\uAE40\uC131\uCC2C\uC758"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 216,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 210,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainTitle, {
            ref: mainTitleRef,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainTitleInCline, {
              children: "P"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 221,
              columnNumber: 29
            }, undefined), "ortfolio"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LogoSection, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LogoImage, {
            src: "/image/SCLogo2.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 13
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Cover);

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
  const [addSections, setAddSections] = react__WEBPACK_IMPORTED_MODULE_1__.useState([]);
  const [addSectionsTimeout, setAddSectionsTimeout] = react__WEBPACK_IMPORTED_MODULE_1__.useState(); // ref

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
    window.addEventListener('resize', getAddSections);
    getAddSections();
    return () => {
      window.removeEventListener('resize', getAddSections);
    };
  }, []); // normal
  // contents를 제외한 부가 너비 구하기

  const getAddSections = () => {
    // transition으로 인해 height가 1초 뒤에 올바른 높이를 바라보므로 timeout 구현
    clearTimeout(addSectionsTimeout);
    const timeout = setTimeout(() => {
      const totalCount = introContainerRef.current.clientHeight / (contentsSectionRef.current.clientHeight + 30);
      const addSections = [];

      for (let i = 0; i < totalCount - contentsArray.length; i++) {
        addSections.push(i);
      }

      setAddSections(addSections);
    }, 1000);
    setAddSectionsTimeout(timeout);
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
              lineNumber: 99,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentsDescription, {
              children: contents.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 33
            }, undefined)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 29
          }, undefined);
        } else {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentsSection, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentsTitle, {
              children: contents.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentsDescription, {
              children: contents.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 33
            }, undefined)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 29
          }, undefined);
        }
      }), addSections.map(addSection => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentsSection, {
          height: contentsSectionRef.current.clientHeight - 8,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentsTitle, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentsDescription, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 29
          }, undefined)]
        }, addSection, true, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 25
        }, undefined);
      })]
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
})(["margin:48px 0;padding:0 24px;"]);
const UrlMainDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "more__UrlMainDiv",
  componentId: "sc-16793nn-4"
})(["display:inline-block;box-shadow:2px 2px 4px rgba(0,0,0,0.5);padding:12px;margin:0 24px 24px 0;cursor:pointer;background-color:#fff;transition-duration:0.4s;&:hover{transform:translateY(-10px);}"]);
const UrlSubDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "more__UrlSubDiv",
  componentId: "sc-16793nn-5"
})(["display:flex;flex-direction:column;align-items:center;"]);
const FooterMainDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "more__FooterMainDiv",
  componentId: "sc-16793nn-6"
})(["display:inline-block;padding:12px;margin:0 24px 24px 0;"]);
const FooterSubDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "more__FooterSubDiv",
  componentId: "sc-16793nn-7"
})(["display:flex;flex-direction:column;align-items:center;"]);
const HeaderText = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "more__HeaderText",
  componentId: "sc-16793nn-8"
})(["display:block;font-weight:600;font-size:min(1.9em,1.3em + 1vw);"]);
const UrlText = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "more__UrlText",
  componentId: "sc-16793nn-9"
})(["font-weight:600;font-size:min(1.2em,1em + 0.7vw);margin:8px 0;"]);
const FooterText = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "more__FooterText",
  componentId: "sc-16793nn-10"
})(["display:block;font-weight:600;font-size:min(1.5em,1.1em + 0.9vw);"]);
const UrlImage = styled_components__WEBPACK_IMPORTED_MODULE_3___default().img.withConfig({
  displayName: "more__UrlImage",
  componentId: "sc-16793nn-11"
})(["width:min(8em,5em + 6.4vw);"]);
const LogoImage = styled_components__WEBPACK_IMPORTED_MODULE_3___default().img.withConfig({
  displayName: "more__LogoImage",
  componentId: "sc-16793nn-12"
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
          lineNumber: 100,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderText, {
          children: "Version 1.0.0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderText, {
          children: "2021.08.11"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UrlSection, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UrlMainDiv, {
          onClick: () => onClickUrlMainDiv('https://github.com/ksccmp'),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UrlSubDiv, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UrlImage, {
              src: "/image/github.PNG"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UrlText, {
              children: "https://github.com/ksccmp"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UrlMainDiv, {
          onClick: () => onClickUrlMainDiv('https://jforj.tistory.com'),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UrlSubDiv, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UrlImage, {
              src: "/image/tistory.PNG"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UrlText, {
              children: "https://jforj.tistory.com"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FooterSection, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FooterMainDiv, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FooterSubDiv, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FooterText, {
              children: "Designed By \uAE40\uC131\uCC2C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LogoImage, {
              src: "/image/SCLogo2.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 97,
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
})(["position:relative;display:flex;justify-content:center;align-items:center;width:120px;height:50px;background-color:#fff;margin:40px 0 100px 0;transform:rotate(-16deg);box-shadow:2px 2px 4px rgba(0,0,0,0.5);@media screen and (min-width:700px){width:160px;height:60px;box-shadow:3px 3px 6px rgba(0,0,0,0.5);}"]);
const PuzzleLeft = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "projects__PuzzleLeft",
  componentId: "sc-1k4iihw-8"
})(["position:absolute;background-color:", ";border-radius:50%;width:24px;height:24px;top:13px;left:-13px;box-shadow:3px 1px 1px rgba(0,0,0,0.5);@media screen and (min-width:700px){width:30px;height:30px;left:-15px;top:15px;}"], props => props.backgroundColor);
const PuzzleRight = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "projects__PuzzleRight",
  componentId: "sc-1k4iihw-9"
})(["position:absolute;background-color:#fff;border-radius:50%;width:24px;height:24px;top:13px;right:-13px;box-shadow:3px 1px 2px rgba(0,0,0,0.5);@media screen and (min-width:700px){width:30px;height:30px;top:15px;right:-15px;}"]);
const PuzzleTop = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "projects__PuzzleTop",
  componentId: "sc-1k4iihw-10"
})(["position:absolute;background-color:#fff;border-radius:50%;width:24px;height:24px;top:-13px;left:43px;@media screen and (min-width:700px){width:30px;height:30px;top:-15px;left:65px;}"]);
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
})(["font-weight:600;font-size:1.2em;transform:translateX(6px);@media screen and (min-width:700px){font-size:1.5em;transform:translateX(7.5px);}"]);
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
            lineNumber: 311,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PuzzleRight, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 312,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PuzzleTop, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 313,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PuzzleTitle, {
            children: "\uD504\uB85C\uC81D\uD2B8"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 314,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 310,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 309,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProjectsContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleSection, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CareerTitle, {
            children: "Portfolio"
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
            onClick: () => onClickImageDiv(0),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CareerImage, {
              src: images[0][currentImageIndex[0]]
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
              children: "21.07 ~ 21.08"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 329,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "code",
              children: "FE \u2192 Next / TypeScript / Redux / Hooks / StyledComponent"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 332,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "\uC6F9 \uC0AC\uC774\uD2B8\uC5D0\uC11C \uB098\uB9CC\uC758 \uD3EC\uD2B8\uD3F4\uB9AC\uC624\uB97C \uB204\uAD6C\uB098 \uBCFC \uC218 \uC788\uB3C4\uB85D \uD558\uAE30 \uC704\uD574 \uAC1C\uBC1C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 335,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "\uACF5\uCC45\uC744 \uC8FC\uC694 \uB514\uC790\uC778\uC73C\uB85C \uC0BC\uC544 \uC624\uD504\uB77C\uC778\uC5D0\uC11C \uD3EC\uD2B8\uD3F4\uB9AC\uC624\uB97C \uBCF4\uB294 \uB4EF\uD55C UI/UX\uB97C \uAC1C\uBC1C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 338,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "link",
              children: ["Domain \u2192 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "localhost:8088",
                children: "localhost:8088"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 342,
                columnNumber: 42
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 341,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "link",
              children: ["Git \u2192", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "https://github.com/ksccmp/portfolio",
                children: "https://github.com/ksccmp/portfolio"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 346,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 344,
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
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProjectsContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleSection, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CareerTitle, {
            color: "#E6951A",
            children: "Grouby"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 354,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 353,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentsSection, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageDiv, {
            onClick: () => onClickImageDiv(1),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CareerImage, {
              src: images[1][currentImageIndex[1]]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 359,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 358,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescriptionDiv, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "calendar",
              children: "20.10 ~ 21.01"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 363,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "code",
              children: "FE \u2192 Next / TypeScript / Redux / Hooks / StyledComponent"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 366,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "code",
              children: "BE \u2192 Spring / Mybatis / MySQL"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 369,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "Next\uC0AC\uC6A9 \uACBD\uD5D8\uACFC CSS\uC5ED\uB7C9\uC744 \uB192\uC774\uAE30 \uC704\uD574 \uC9C4\uD589\uD55C \uAC1C\uC778 \uD504\uB85C\uC81D\uD2B8"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 372,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "\uBC29\uBB38\uD588\uC5C8\uB358 \uC7A5\uC18C\uC5D0 \uB300\uD55C \uC6B0\uB9AC\uB9CC\uC758 \uD3C9\uAC00\uB97C \uD558\uC5EC \uC7AC\uBC29\uBB38\uC744 \uC704\uD55C \uC758\uACAC\uC5D0 \uB3C4\uC6C0\uC774 \uB418\uACE0\uC790 \uAC1C\uBC1C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 375,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "\uADF8\uB8F9, \uC2A4\uD31F\uC744 \uC120\uD0DD\uD55C \uB4A4 \uC778\uC2A4\uD0C0\uADF8\uB7A8\uCC98\uB7FC \uC0AC\uC9C4 \uACF5\uC720 \uBC0F \uB313\uAE00 \uAE30\uB2A5 \uAC1C\uBC1C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 378,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "\uBC29\uBB38\uD588\uB358 \uC7A5\uC18C\uC758 \uD3C9\uAC00\uC694\uC18C\uC5D0 \uB530\uB77C \uC810\uC218\uB97C \uBD80\uC5EC\uD558\uC5EC \uD3C9\uAC00\uD560 \uC218 \uC788\uACE0 \uC804\uCCB4 \uD3C9\uC810\uB3C4 \uD655\uC778\uD560 \uC218 \uC788\uB3C4\uB85D \uAC1C\uBC1C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 381,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "\uC124\uACC4 \uB2E8\uACC4\uC5D0\uC11C \uB290\uAEF4\uC84C\uB358 \uBCF5\uC7A1\uD568\uC774 \uC0AC\uC6A9\uD560 \uB54C \uADF8\uB300\uB85C \uB290\uAEF4\uC9C4 \uC544\uC26C\uC6C0\uC774 \uB0A8\uB294 \uD504\uB85C\uC81D\uD2B8"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 385,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "link",
              children: ["Git \u2192 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "https://github.com/ksccmp/Grouby",
                children: "https://github.com/ksccmp/Grouby"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 389,
                columnNumber: 39
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 388,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 362,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 357,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 352,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProjectsContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleSection, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CareerTitle, {
            children: "SCVC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 397,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 396,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentsSection, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageDiv, {
            onClick: () => onClickImageDiv(2),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CareerImage, {
              src: images[2][currentImageIndex[2]]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 402,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 401,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescriptionDiv, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "calendar",
              children: "20.08 ~ 20.09"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 406,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "code",
              children: "FE \u2192 React / TypeScript / Redux / Redux-Saga / Hooks / StyledComponent"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 409,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "code",
              children: "BE \u2192 Spring / Mybatis / MySQL / Node"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 412,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "TypeScript\uC640 Redux-Saga\uC758 \uC0AC\uC6A9 \uACBD\uD5D8\uC744 \uB192\uC774\uAE30 \uC704\uD574 \uC9C4\uD589\uD55C \uAC1C\uC778 \uD504\uB85C\uC81D\uD2B8"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 415,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "\uCD5C\uADFC \uBE44\uB300\uBA74\uC758 \uC911\uC694\uC131\uC774 \uC99D\uAC00\uB428\uC5D0 \uB530\uB77C \uC5ED\uB7C9 \uD655\uBCF4\uB97C \uC704\uD574 \uAD00\uB828 \uAE30\uB2A5 \uAC1C\uBC1C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 418,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "\uC785\uC7A5\uD558\uACE0\uC790 \uD558\uB294 \uBC29\uC744 \uAC80\uC0C9\uD560 \uC218 \uC788\uACE0 \uC815\uD574\uC9C4 \uC778\uC6D0\uB9CC\uD07C\uC758 \uC778\uC6D0\uB9CC \uCC38\uC5EC \uAC00\uB2A5\uD558\uB3C4\uB85D \uAC1C\uBC1C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 421,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "RTCPeerConnection + SocketIO\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC2E4\uC2DC\uAC04 \uD654\uC0C1 \uD68C\uC758 \uBC0F \uCC44\uD305 \uAC1C\uBC1C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 424,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "link",
              children: ["Git \u2192", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "https://github.com/ksccmp/video_chat_typescript",
                children: "https://github.com/ksccmp/video_chat_typescript"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 429,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 427,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 405,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 400,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 395,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProjectsContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleSection, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CareerTitle, {
            color: "#4ac8d9",
            children: "Moyo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 439,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 438,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentsSection, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageDiv, {
            onClick: () => onClickImageDiv(3),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CareerImage, {
              src: images[3][currentImageIndex[3]]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 444,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 443,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescriptionDiv, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "calendar",
              children: "20.01 ~ 20.02"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 448,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "code",
              children: "FE \u2192 React / Redux / Hooks / StyledComponent"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 451,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "code",
              children: "BE \u2192 SpringBoot / Mybatis / MySQL / FireBase"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 454,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "SSAFY\uC5D0\uC11C \uC9C4\uD589\uD55C \uD300 \uD504\uB85C\uC81D\uD2B8 (5\uC778)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 457,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "\uC5EC\uD589 \uB3D9\uD589\uC790\uB97C \uAC04\uD3B8\uD558\uAC8C \uB9E4\uCE6D\uD558\uB294 \uAC83\uC5D0 \uB3C4\uC6C0\uC774 \uB418\uACE0\uC790 \uAC1C\uBC1C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 460,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "React + FireBase\uB97C \uC774\uC6A9\uD558\uC5EC DM\uAE30\uB2A5 \uAC1C\uBC1C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 463,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "\uC790\uC2E0\uC758 \uC704\uCE58\uC5D0 \uAC04\uD3B8\uD558\uAC8C \uB099\uC11C(?)\uD560 \uC218 \uC788\uB294 \uD3EC\uC2A4\uD2B8\uB9F5 \uAE30\uB2A5 \uAC1C\uBC1C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 466,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              children: "\uC0AC\uC6A9\uB418\uB294 Tool\uC758 \uC219\uB828\uB3C4 \uBD80\uC871\uC73C\uB85C \uBAA9\uD45C\uD55C \uAE30\uB2A5\uB4E4\uC744 \uBAA8\uB450 \uAC1C\uBC1C\uD558\uC9C0 \uBABB\uD55C\uAC83\uC5D0 \uB300\uD574 \uC544\uC26C\uC6C0\uC774 \uB0A8\uB294 \uD504\uB85C\uC81D\uD2B8"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 469,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
              backgroundColor: backgroundColorArray[componentNo],
              type: "link",
              children: ["Git \u2192 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "https://github.com/ksccmp/moyo",
                children: "https://github.com/ksccmp/moyo"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 474,
                columnNumber: 39
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 473,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 447,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 442,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 437,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PictureContainer, {
      ref: pictureContainerRef,
      onClick: onClickPictureContainer,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PictureImage, {
        src: pictureImage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 482,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 481,
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
            lineNumber: 226,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleMainDiv, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainTitle, {
            children: "\uC65C \uAC1C\uBC1C\uC790\uAC00 \uB418\uB824\uACE0 \uD588\uB354\uB77C..?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 229,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleSubDiv, {
          backgroundColor: backgroundColorArray[componentNo],
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubTitle, {
            children: "\uB0B4\uC6A9"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 235,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 234,
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
                      lineNumber: 244,
                      columnNumber: 49
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(QuestionTitle, {
                      color: questionColor[index],
                      children: qna.question
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 247,
                      columnNumber: 49
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 243,
                    columnNumber: 45
                  }, undefined)
                }, qna.answer, false, {
                  fileName: _jsxFileName,
                  lineNumber: 242,
                  columnNumber: 41
                }, undefined);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 239,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnswerSection, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnswerDiv, {
                ref: answerDivRef,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnswerTitle, {
                  ref: answerTitleRef,
                  children: questionIndex >= 0 ? '' : '궁금하신 질문을 선택해주세요.'
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 258,
                  columnNumber: 37
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 257,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 256,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 238,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 222,
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
/* harmony export */   "setIsPageChanging": function() { return /* binding */ setIsPageChanging; },
/* harmony export */   "setInnerWidth": function() { return /* binding */ setInnerWidth; },
/* harmony export */   "setIndexSubContainerTranslateX": function() { return /* binding */ setIndexSubContainerTranslateX; }
/* harmony export */ });
// init
const setIsEnd = 'setIsEnd'; // base

const setCurrentComponentNo = 'setCurrentComponentNo';
const setIsPageChanging = 'setIsPageChanging';
const setInnerWidth = 'setInnerWidth';
const setIndexSubContainerTranslateX = 'setIndexSubContainerTranslateX';

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
/* harmony export */   "setIsPageChangingAction": function() { return /* binding */ setIsPageChangingAction; },
/* harmony export */   "setInnerWidthAction": function() { return /* binding */ setInnerWidthAction; },
/* harmony export */   "setIndexSubContainerTranslateXAction": function() { return /* binding */ setIndexSubContainerTranslateXAction; }
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
const setInnerWidthAction = res => {
  return {
    type: _actionType__WEBPACK_IMPORTED_MODULE_0__.setInnerWidth,
    payload: res
  };
};
const setIndexSubContainerTranslateXAction = res => {
  return {
    type: _actionType__WEBPACK_IMPORTED_MODULE_0__.setIndexSubContainerTranslateX,
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
/* harmony import */ var _component_cover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/cover */ "./component/cover.tsx");
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
/* harmony import */ var _modules_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../modules/actions */ "./modules/actions.tsx");


var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\pages\\index.tsx";














const IndexMainContainer = styled_components__WEBPACK_IMPORTED_MODULE_11___default().div.withConfig({
  displayName: "pages__IndexMainContainer",
  componentId: "sc-aoyeiy-0"
})(["width:calc(100vw - (100vw - 100%));height:100vh;background-image:url(/image/test1.jpg);position:relative;"]);
const IndexMiddleContainer = styled_components__WEBPACK_IMPORTED_MODULE_11___default().div.withConfig({
  displayName: "pages__IndexMiddleContainer",
  componentId: "sc-aoyeiy-1"
})(["max-width:", "px;margin:0 auto;position:relative;"], _style_style__WEBPACK_IMPORTED_MODULE_13__.maxWidth);
const IndexSubContainer = styled_components__WEBPACK_IMPORTED_MODULE_11___default().div.withConfig({
  displayName: "pages__IndexSubContainer",
  componentId: "sc-aoyeiy-2"
})(["transform:translate(", "px,7vh);position:relative;transition-duration:0.3s;transition-timing-function:ease-in;"], props => props.translateX);
const ComponentContainer = styled_components__WEBPACK_IMPORTED_MODULE_11___default().div.withConfig({
  displayName: "pages__ComponentContainer",
  componentId: "sc-aoyeiy-3"
})(["perspective:4000px;position:relative;z-index:1;"]);
const CoffeeContainer = styled_components__WEBPACK_IMPORTED_MODULE_11___default().div.withConfig({
  displayName: "pages__CoffeeContainer",
  componentId: "sc-aoyeiy-4"
})(["position:absolute;top:104px;right:-382px;"]);
const CoffeeSection = styled_components__WEBPACK_IMPORTED_MODULE_11___default().section.withConfig({
  displayName: "pages__CoffeeSection",
  componentId: "sc-aoyeiy-5"
})(["display:flex;align-items:center;"]);
const CoffeeInner = styled_components__WEBPACK_IMPORTED_MODULE_11___default().div.withConfig({
  displayName: "pages__CoffeeInner",
  componentId: "sc-aoyeiy-6"
})(["width:200px;height:200px;border-radius:50%;background-color:#a17c32;border:13px solid #fff;overflow:hidden;box-shadow:3px 3px 3px rgba(0,0,0,0.4);"]);
const CoffeeMaterial = styled_components__WEBPACK_IMPORTED_MODULE_11___default().div.withConfig({
  displayName: "pages__CoffeeMaterial",
  componentId: "sc-aoyeiy-7"
})(["width:200px;height:200px;border-radius:50%;background-color:#c4973d;transform:translate(8px,48px);box-shadow:1px 1px 6px #a17c32 inset;"]);
const CoffeeOuter = styled_components__WEBPACK_IMPORTED_MODULE_11___default().div.withConfig({
  displayName: "pages__CoffeeOuter",
  componentId: "sc-aoyeiy-8"
})(["width:70px;height:30px;background-color:#fff;border-radius:0 8px 8px 0;transform:translate(-18px,60px) rotate(30deg);box-shadow:4px 1px 4px rgba(0,0,0,0.4);"]);
const PencilContainer = styled_components__WEBPACK_IMPORTED_MODULE_11___default().div.withConfig({
  displayName: "pages__PencilContainer",
  componentId: "sc-aoyeiy-9"
})(["position:absolute;top:474px;right:-144px;transform:rotate(25deg);"]);
const PencilSection = styled_components__WEBPACK_IMPORTED_MODULE_11___default().section.withConfig({
  displayName: "pages__PencilSection",
  componentId: "sc-aoyeiy-10"
})(["display:flex;flex-direction:column;"]);
const PencilTopDiv = styled_components__WEBPACK_IMPORTED_MODULE_11___default().div.withConfig({
  displayName: "pages__PencilTopDiv",
  componentId: "sc-aoyeiy-11"
})(["z-index:2;display:flex;"]);
const PencilLeftTop = styled_components__WEBPACK_IMPORTED_MODULE_11___default().div.withConfig({
  displayName: "pages__PencilLeftTop",
  componentId: "sc-aoyeiy-12"
})(["width:20px;height:200px;background-color:#4877c7;border-radius:8px 0 0 0;position:relative;"]);
const PencilRightTop = styled_components__WEBPACK_IMPORTED_MODULE_11___default().div.withConfig({
  displayName: "pages__PencilRightTop",
  componentId: "sc-aoyeiy-13"
})(["width:20px;height:200px;background-color:#52adc7;border-radius:0 8px 0 0;position:relative;box-shadow:3px 0 4px rgba(0,0,0,0.4);"]);
const PencilLeftBottom = styled_components__WEBPACK_IMPORTED_MODULE_11___default().div.withConfig({
  displayName: "pages__PencilLeftBottom",
  componentId: "sc-aoyeiy-14"
})(["position:absolute;left:0;bottom:-4px;width:20px;height:10px;border-radius:50%;background-color:#e0c7af;"]);
const PencilRightBottom = styled_components__WEBPACK_IMPORTED_MODULE_11___default().div.withConfig({
  displayName: "pages__PencilRightBottom",
  componentId: "sc-aoyeiy-15"
})(["position:absolute;left:0;bottom:-4px;width:20px;height:10px;border-radius:50%;background-color:#e0c7af;"]);
const PencilBottom = styled_components__WEBPACK_IMPORTED_MODULE_11___default().div.withConfig({
  displayName: "pages__PencilBottom",
  componentId: "sc-aoyeiy-16"
})(["position:relative;width:", "px;height:", "px;background-color:#e0c7af;transform:translate(", "px,-", "px) rotate(-45deg);z-index:1;box-shadow:2px 3px 4px rgba(0,0,0,0.4);"], 40 / Math.sqrt(2), 40 / Math.sqrt(2), (40 - 40 / Math.sqrt(2)) / 2, 40 / Math.sqrt(2) / 2);
const PencilLead = styled_components__WEBPACK_IMPORTED_MODULE_11___default().div.withConfig({
  displayName: "pages__PencilLead",
  componentId: "sc-aoyeiy-17"
})(["position:absolute;left:0;bottom:0;width:0;height:0;border-top:12px solid transparent;border-left:12px solid #000;"]);
const CellPhoneContainer = styled_components__WEBPACK_IMPORTED_MODULE_11___default().div.withConfig({
  displayName: "pages__CellPhoneContainer",
  componentId: "sc-aoyeiy-18"
})(["position:absolute;top 363px;left:-294px;transform:rotate(-4deg);"]);
const CellPhoneSection = styled_components__WEBPACK_IMPORTED_MODULE_11___default().section.withConfig({
  displayName: "pages__CellPhoneSection",
  componentId: "sc-aoyeiy-19"
})([""]);
const CellPhoneBody = styled_components__WEBPACK_IMPORTED_MODULE_11___default().div.withConfig({
  displayName: "pages__CellPhoneBody",
  componentId: "sc-aoyeiy-20"
})(["position:relative;width:220px;height:420px;background-color:#2e2727;border-radius:16px 16px 16px 16px;border:6px solid #cd5c5c;box-shadow:2px 2px 6px 2px rgba(0,0,0,0.4);"]);
const CellPhoneTop = styled_components__WEBPACK_IMPORTED_MODULE_11___default().div.withConfig({
  displayName: "pages__CellPhoneTop",
  componentId: "sc-aoyeiy-21"
})(["position:absolute;display:flex;justify-content:center;align-items:center;top:0;width:220px;height:40px;border-radius:8px 8px 0 0;background-color:rgba(0,0,0,0.8);"]);
const CellPhoneTopInner = styled_components__WEBPACK_IMPORTED_MODULE_11___default().div.withConfig({
  displayName: "pages__CellPhoneTopInner",
  componentId: "sc-aoyeiy-22"
})(["width:18px;height:18px;border-radius:50%;background-color:#a3a3a3;border:3px solid rgba(255,255,255,0.6);box-shadow:inset -1px -1px 4px rgba(0,0,0,0.6);"]);
const MenuContainer = styled_components__WEBPACK_IMPORTED_MODULE_11___default().div.withConfig({
  displayName: "pages__MenuContainer",
  componentId: "sc-aoyeiy-23"
})(["position:absolute;top:0;left:0;"]);
const MenuSection = styled_components__WEBPACK_IMPORTED_MODULE_11___default().section.withConfig({
  displayName: "pages__MenuSection",
  componentId: "sc-aoyeiy-24"
})([""]);
const HamburgerImage = styled_components__WEBPACK_IMPORTED_MODULE_11___default().img.withConfig({
  displayName: "pages__HamburgerImage",
  componentId: "sc-aoyeiy-25"
})(["height:5vh;padding:1vh;"]);

const Index = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useDispatch)(); // redux

  const isEnd = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector)(state => state.initReducer.isEnd);
  const innerWidth = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector)(state => state.baseReducer.innerWidth);
  const indexSubContainerTranslateX = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector)(state => state.baseReducer.indexSubContainerTranslateX); // useEffect

  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(() => {
    window.addEventListener('resize', onResize);
    onResize();
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []); // onResize

  const onResize = () => {
    dispatch((0,_modules_actions__WEBPACK_IMPORTED_MODULE_14__.setInnerWidthAction)(window.innerWidth));
  }; // onClick


  const onClickMenuContainer = () => {
    if (indexSubContainerTranslateX !== 0) {
      // 값이 부여된 경우 초기화하여 원래대로 돌려놓기
      dispatch((0,_modules_actions__WEBPACK_IMPORTED_MODULE_14__.setIndexSubContainerTranslateXAction)(0));
    } else {
      // 값이 부여되지 않은 경우 초과된 범위만큼 움직이기
      if (innerWidth < _style_style__WEBPACK_IMPORTED_MODULE_13__.maxWidth) {
        dispatch((0,_modules_actions__WEBPACK_IMPORTED_MODULE_14__.setIndexSubContainerTranslateXAction)(110));
      } else {
        dispatch((0,_modules_actions__WEBPACK_IMPORTED_MODULE_14__.setIndexSubContainerTranslateXAction)((_style_style__WEBPACK_IMPORTED_MODULE_13__.maxWidth + 220 - innerWidth) / 2));
      }
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [isEnd ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(IndexMainContainer, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(IndexMiddleContainer, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(IndexSubContainer, {
            translateX: indexSubContainerTranslateX,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ComponentContainer, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_cover__WEBPACK_IMPORTED_MODULE_3__.default, {
                componentNo: 0
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 259,
                columnNumber: 37
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_intro__WEBPACK_IMPORTED_MODULE_4__.default, {
                componentNo: 1
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 260,
                columnNumber: 37
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_whyIt__WEBPACK_IMPORTED_MODULE_5__.default, {
                componentNo: 2
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 261,
                columnNumber: 37
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_skills__WEBPACK_IMPORTED_MODULE_6__.default, {
                componentNo: 3
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 262,
                columnNumber: 37
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_career__WEBPACK_IMPORTED_MODULE_7__.default, {
                componentNo: 4
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 263,
                columnNumber: 37
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_projects__WEBPACK_IMPORTED_MODULE_9__.default, {
                componentNo: 5
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 264,
                columnNumber: 37
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_more__WEBPACK_IMPORTED_MODULE_10__.default, {
                componentNo: 6
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 265,
                columnNumber: 37
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 258,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CoffeeContainer, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CoffeeSection, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CoffeeInner, {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CoffeeMaterial, {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 271,
                    columnNumber: 45
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 270,
                  columnNumber: 41
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CoffeeOuter, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 273,
                  columnNumber: 41
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 269,
                columnNumber: 37
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 268,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PencilContainer, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PencilSection, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PencilTopDiv, {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PencilLeftTop, {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PencilLeftBottom, {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 281,
                      columnNumber: 49
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 280,
                    columnNumber: 45
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PencilRightTop, {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PencilRightBottom, {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 284,
                      columnNumber: 49
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 283,
                    columnNumber: 45
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 279,
                  columnNumber: 41
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PencilBottom, {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PencilLead, {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 288,
                    columnNumber: 45
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 287,
                  columnNumber: 41
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 278,
                columnNumber: 37
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 277,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CellPhoneContainer, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CellPhoneSection, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CellPhoneBody, {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CellPhoneTop, {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CellPhoneTopInner, {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 297,
                      columnNumber: 49
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 296,
                    columnNumber: 45
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 295,
                  columnNumber: 41
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 294,
                columnNumber: 37
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 293,
              columnNumber: 33
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 257,
            columnNumber: 29
          }, undefined), innerWidth < _style_style__WEBPACK_IMPORTED_MODULE_13__.maxWidth + 220 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuContainer, {
            onClick: onClickMenuContainer,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuSection, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HamburgerImage, {
                src: "/image/hamburgerBar.svg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 307,
                columnNumber: 41
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 306,
              columnNumber: 37
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 305,
            columnNumber: 33
          }, undefined) : '']
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 21
      }, undefined)
    }, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_init__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 17
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "1710783722",
      children: "@import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');body{margin:0;padding:0;overflow:hidden;}h1,h2,h3,h4,h5,h6,span,p{font-family:'AppleSDGothicNeo','Noto Sans KR',sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcc3R1ZHlcXHBvcnRmb2xpb1xcc3VuZ2NoYW5cXHBhZ2VzXFxpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ1VpQixBQUdrQyxBQWFrRCxBQUdZLFNBZjdELFVBQ00sZ0JBQ3BCLHNCQVdBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcc3R1ZHlcXHBvcnRmb2xpb1xcc3VuZ2NoYW5cXHBhZ2VzXFxpbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb3ZlciBmcm9tICcuLi9jb21wb25lbnQvY292ZXInO1xyXG5pbXBvcnQgSW50cm8gZnJvbSAnLi4vY29tcG9uZW50L2ludHJvJztcclxuaW1wb3J0IFdoeUl0IGZyb20gJy4uL2NvbXBvbmVudC93aHlJdCc7XHJcbmltcG9ydCBTa2lsbHMgZnJvbSAnLi4vY29tcG9uZW50L3NraWxscyc7XHJcbmltcG9ydCBDYXJlZXIgZnJvbSAnLi4vY29tcG9uZW50L2NhcmVlcic7XHJcbmltcG9ydCBJbml0IGZyb20gJy4uL2NvbXBvbmVudC9pbml0JztcclxuaW1wb3J0IFByb2plY3RzIGZyb20gJy4uL2NvbXBvbmVudC9wcm9qZWN0cyc7XHJcbmltcG9ydCBNb3JlIGZyb20gJy4uL2NvbXBvbmVudC9tb3JlJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgaW5kZXhTdGF0ZSB9IGZyb20gJy4uL21vZHVsZXMvaW5kZXhSZWR1Y2VyJztcclxuaW1wb3J0IHsgbWF4V2lkdGggfSBmcm9tICcuLi9zdHlsZS9zdHlsZSc7XHJcbmltcG9ydCB7IHNldEluZGV4U3ViQ29udGFpbmVyVHJhbnNsYXRlWEFjdGlvbiwgc2V0SW5uZXJXaWR0aEFjdGlvbiB9IGZyb20gJy4uL21vZHVsZXMvYWN0aW9ucyc7XHJcblxyXG5jb25zdCBJbmRleE1haW5Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAoMTAwdncgLSAxMDAlKSk7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9pbWFnZS90ZXN0MS5qcGcpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5gO1xyXG5cclxuY29uc3QgSW5kZXhNaWRkbGVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWF4LXdpZHRoOiAke21heFdpZHRofXB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSUluZGV4U3ViQ29udGFpbmVyIHtcclxuICAgIHRyYW5zbGF0ZVg6IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgSW5kZXhTdWJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoJHsocHJvcHM6IElJbmRleFN1YkNvbnRhaW5lcikgPT4gcHJvcHMudHJhbnNsYXRlWH1weCwgN3ZoKTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuYDtcclxuXHJcbmNvbnN0IENvbXBvbmVudENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBwZXJzcGVjdGl2ZTogNDAwMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuYDtcclxuXHJcbmNvbnN0IENvZmZlZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwNHB4O1xyXG4gICAgcmlnaHQ6IC0zODJweDtcclxuYDtcclxuXHJcbmNvbnN0IENvZmZlZVNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgQ29mZmVlSW5uZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhMTdjMzI7XHJcbiAgICBib3JkZXI6IDEzcHggc29saWQgI2ZmZjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbmA7XHJcblxyXG5jb25zdCBDb2ZmZWVNYXRlcmlhbCA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M0OTczZDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDhweCwgNDhweCk7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDZweCAjYTE3YzMyIGluc2V0O1xyXG5gO1xyXG5cclxuY29uc3QgQ29mZmVlT3V0ZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCA4cHggOHB4IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMThweCwgNjBweCkgcm90YXRlKDMwZGVnKTtcclxuICAgIGJveC1zaGFkb3c6IDRweCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuYDtcclxuXHJcbmNvbnN0IFBlbmNpbENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDQ3NHB4O1xyXG4gICAgcmlnaHQ6IC0xNDRweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDI1ZGVnKTtcclxuYDtcclxuXHJcbmNvbnN0IFBlbmNpbFNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5gO1xyXG5cclxuY29uc3QgUGVuY2lsVG9wRGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5gO1xyXG5cclxuY29uc3QgUGVuY2lsTGVmdFRvcCA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDg3N2M3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4IDAgMCAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5gO1xyXG5cclxuY29uc3QgUGVuY2lsUmlnaHRUb3AgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUyYWRjNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgOHB4IDAgMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJveC1zaGFkb3c6IDNweCAwIDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbmA7XHJcblxyXG5jb25zdCBQZW5jaWxMZWZ0Qm90dG9tID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IC00cHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGM3YWY7XHJcbmA7XHJcbmNvbnN0IFBlbmNpbFJpZ2h0Qm90dG9tID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IC00cHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGM3YWY7XHJcbmA7XHJcblxyXG5jb25zdCBQZW5jaWxCb3R0b20gPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6ICR7NDAgLyBNYXRoLnNxcnQoMil9cHg7XHJcbiAgICBoZWlnaHQ6ICR7NDAgLyBNYXRoLnNxcnQoMil9cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBjN2FmO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoJHsoNDAgLSA0MCAvIE1hdGguc3FydCgyKSkgLyAyfXB4LCAtJHs0MCAvIE1hdGguc3FydCgyKSAvIDJ9cHgpIHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJveC1zaGFkb3c6IDJweCAzcHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuYDtcclxuXHJcbmNvbnN0IFBlbmNpbExlYWQgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgYm9yZGVyLXRvcDogMTJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1sZWZ0OiAxMnB4IHNvbGlkICMwMDA7XHJcbmA7XHJcblxyXG5jb25zdCBDZWxsUGhvbmVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wIDM2M3B4O1xyXG4gICAgbGVmdDogLTI5NHB4O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTRkZWcpO1xyXG5gO1xyXG5cclxuY29uc3QgQ2VsbFBob25lU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYGA7XHJcblxyXG5jb25zdCBDZWxsUGhvbmVCb2R5ID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAyMjBweDtcclxuICAgIGhlaWdodDogNDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUyNzI3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweCAxNnB4IDE2cHggMTZweDtcclxuICAgIGJvcmRlcjogNnB4IHNvbGlkICNjZDVjNWM7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDZweCAycHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG5gO1xyXG5cclxuY29uc3QgQ2VsbFBob25lVG9wID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMjIwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuYDtcclxuXHJcbmNvbnN0IENlbGxQaG9uZVRvcElubmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2EzYTNhMztcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggLTFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG5gO1xyXG5cclxuY29uc3QgTWVudUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG5gO1xyXG5cclxuY29uc3QgTWVudVNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBgO1xyXG5cclxuY29uc3QgSGFtYnVyZ2VySW1hZ2UgPSBzdHlsZWQuaW1nYFxyXG4gICAgaGVpZ2h0OiA1dmg7XHJcbiAgICBwYWRkaW5nOiAxdmg7XHJcbmA7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgLy8gcmVkdXhcclxuICAgIGNvbnN0IGlzRW5kID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBpbmRleFN0YXRlKSA9PiBzdGF0ZS5pbml0UmVkdWNlci5pc0VuZCk7XHJcbiAgICBjb25zdCBpbm5lcldpZHRoID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBpbmRleFN0YXRlKSA9PiBzdGF0ZS5iYXNlUmVkdWNlci5pbm5lcldpZHRoKTtcclxuICAgIGNvbnN0IGluZGV4U3ViQ29udGFpbmVyVHJhbnNsYXRlWCA9IHVzZVNlbGVjdG9yKFxyXG4gICAgICAgIChzdGF0ZTogaW5kZXhTdGF0ZSkgPT4gc3RhdGUuYmFzZVJlZHVjZXIuaW5kZXhTdWJDb250YWluZXJUcmFuc2xhdGVYLFxyXG4gICAgKTtcclxuXHJcbiAgICAvLyB1c2VFZmZlY3RcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uUmVzaXplKTtcclxuICAgICAgICBvblJlc2l6ZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25SZXNpemUpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLy8gb25SZXNpemVcclxuICAgIGNvbnN0IG9uUmVzaXplID0gKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHNldElubmVyV2lkdGhBY3Rpb24od2luZG93LmlubmVyV2lkdGgpKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gb25DbGlja1xyXG4gICAgY29uc3Qgb25DbGlja01lbnVDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGluZGV4U3ViQ29udGFpbmVyVHJhbnNsYXRlWCAhPT0gMCkge1xyXG4gICAgICAgICAgICAvLyDqsJLsnbQg67aA7Jes65CcIOqyveyasCDstIjquLDtmZTtlZjsl6wg7JuQ656Y64yA66GcIOuPjOugpOuGk+q4sFxyXG4gICAgICAgICAgICBkaXNwYXRjaChzZXRJbmRleFN1YkNvbnRhaW5lclRyYW5zbGF0ZVhBY3Rpb24oMCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIOqwkuydtCDrtoDsl6zrkJjsp4Ag7JWK7J2AIOqyveyasCDstIjqs7zrkJwg67KU7JyE66eM7YG8IOybgOyngeydtOq4sFxyXG4gICAgICAgICAgICBpZiAoaW5uZXJXaWR0aCA8IG1heFdpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChzZXRJbmRleFN1YkNvbnRhaW5lclRyYW5zbGF0ZVhBY3Rpb24oMTEwKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChzZXRJbmRleFN1YkNvbnRhaW5lclRyYW5zbGF0ZVhBY3Rpb24oKG1heFdpZHRoICsgMjIwIC0gaW5uZXJXaWR0aCkgLyAyKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge2lzRW5kID8gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5kZXhNYWluQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5kZXhNaWRkbGVDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5kZXhTdWJDb250YWluZXIgdHJhbnNsYXRlWD17aW5kZXhTdWJDb250YWluZXJUcmFuc2xhdGVYfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q292ZXIgY29tcG9uZW50Tm89ezB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnRybyBjb21wb25lbnRObz17MX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdoeUl0IGNvbXBvbmVudE5vPXsyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2tpbGxzIGNvbXBvbmVudE5vPXszfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZWVyIGNvbXBvbmVudE5vPXs0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvamVjdHMgY29tcG9uZW50Tm89ezV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb3JlIGNvbXBvbmVudE5vPXs2fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29tcG9uZW50Q29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29mZmVlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29mZmVlU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2ZmZWVJbm5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29mZmVlTWF0ZXJpYWwgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29mZmVlSW5uZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29mZmVlT3V0ZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2ZmZWVTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29mZmVlQ29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVuY2lsQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVuY2lsU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQZW5jaWxUb3BEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlbmNpbExlZnRUb3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQZW5jaWxMZWZ0Qm90dG9tIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QZW5jaWxMZWZ0VG9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQZW5jaWxSaWdodFRvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlbmNpbFJpZ2h0Qm90dG9tIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QZW5jaWxSaWdodFRvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGVuY2lsVG9wRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlbmNpbEJvdHRvbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVuY2lsTGVhZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QZW5jaWxCb3R0b20+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGVuY2lsU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BlbmNpbENvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENlbGxQaG9uZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENlbGxQaG9uZVNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2VsbFBob25lQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2VsbFBob25lVG9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2VsbFBob25lVG9wSW5uZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NlbGxQaG9uZVRvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2VsbFBob25lQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DZWxsUGhvbmVTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2VsbFBob25lQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbmRleFN1YkNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW5uZXJXaWR0aCA8IG1heFdpZHRoICsgMjIwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Q29udGFpbmVyIG9uQ2xpY2s9e29uQ2xpY2tNZW51Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhhbWJ1cmdlckltYWdlIHNyYz1cIi9pbWFnZS9oYW1idXJnZXJCYXIuc3ZnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51U2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0luZGV4TWlkZGxlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW5kZXhNYWluQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8SW5pdCAvPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBoMSxcclxuICAgICAgICAgICAgICAgICAgICBoMixcclxuICAgICAgICAgICAgICAgICAgICBoMyxcclxuICAgICAgICAgICAgICAgICAgICBoNCxcclxuICAgICAgICAgICAgICAgICAgICBoNSxcclxuICAgICAgICAgICAgICAgICAgICBoNixcclxuICAgICAgICAgICAgICAgICAgICBzcGFuLFxyXG4gICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0FwcGxlU0RHb3RoaWNOZW8nLCAnTm90byBTYW5zIEtSJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJ1bmdlZSZkaXNwbGF5PXN3YXAnKTtcclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxyXG4gICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsIG1heGltdW0tc2NhbGU9MSwgbWluaW11bS1zY2FsZT0xXCIgLz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\User\\\\Desktop\\\\study\\\\portfolio\\\\sungchan\\\\pages\\\\index.tsx */"
    }, void 0, false, void 0, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
      type: "text/css",
      rel: "stylesheet",
      href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
      className: "jsx-1710783722"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1",
      className: "jsx-1710783722"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 347,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vLi9jb21wb25lbnQvYmFzZS50c3giLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvLy4vY29tcG9uZW50L2NhcmVlci50c3giLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvLy4vY29tcG9uZW50L2NvdmVyLnRzeCIsIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vLi9jb21wb25lbnQvaW5pdC50c3giLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvLy4vY29tcG9uZW50L2ludHJvLnRzeCIsIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vLi9jb21wb25lbnQvbW9yZS50c3giLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvLy4vY29tcG9uZW50L3Byb2plY3RzLnRzeCIsIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vLi9jb21wb25lbnQvc2tpbGxzLnRzeCIsIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vLi9jb21wb25lbnQvd2h5SXQudHN4Iiwid2VicGFjazovL3N1bmdjaGFuX3BvcnRmb2xpby8uL21vZHVsZXMvYWN0aW9uVHlwZS50c3giLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvLy4vbW9kdWxlcy9hY3Rpb25zLnRzeCIsIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvLy4vc3R5bGUvc3R5bGUudHN4Iiwid2VicGFjazovL3N1bmdjaGFuX3BvcnRmb2xpby9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIiwid2VicGFjazovL3N1bmdjaGFuX3BvcnRmb2xpby9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiJdLCJuYW1lcyI6WyJ0cmFuc2l0aW9uRHVyYXRpb24iLCJCYXNlQ29udGFpbmVyIiwic3R5bGVkIiwicHJvcHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJNYWluQ29udGFpbmVyIiwiUG9zdEl0Q29udGFpbmVyIiwiY29tcG9uZW50Tm8iLCJQb3N0SXRTZWN0aW9uIiwiUG9zdEl0Q29sb3JEaXYiLCJQb3N0SXRUZXh0RGl2IiwiQ2hhaW5Db250YWluZXIiLCJDaGFpblNlY3Rpb24iLCJDaGFpbkZyYW1lIiwiQ2hhaW4iLCJDaGFpbkNpcmNsZSIsIlRpdGxlIiwiQmFzZSIsImNoaWxkcmVuIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImN1cnJlbnRDb21wb25lbnRObyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJiYXNlUmVkdWNlciIsInRpdGxlQXJyYXkiLCJiYWNrZ3JvdW5kQ29sb3JBcnJheSIsImlzUGFnZUNoYW5naW5nIiwiaXNUb3AiLCJzZXRJc1RvcCIsIlJlYWN0IiwiaXNCb3R0b20iLCJzZXRJc0JvdHRvbSIsImNoYWluQXJyYXkiLCJzZXRDaGFpbkFycmF5IiwidG91Y2hZIiwic2V0VG91Y2hZIiwiYmFzZUNvbnRhaW5lclJlZiIsIm1haW5Db250YWluZXJSZWYiLCJ0aXRsZVJlZiIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJvblJlc2l6ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjdXJyZW50Iiwic3R5bGUiLCJvdmVyZmxvdyIsInBvc2l0aW9uIiwiZGlzcGxheSIsInRyYW5zZm9ybSIsInpJbmRleCIsIm9wYWNpdHkiLCJzY3JvbGxUbyIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsInNldElzUGFnZUNoYW5naW5nQWN0aW9uIiwic2V0VGltZW91dCIsIm9uQ2xpY2tQb3N0SXQiLCJzZXRDdXJyZW50Q29tcG9uZW50Tm9BY3Rpb24iLCJzZXRJbmRleFN1YkNvbnRhaW5lclRyYW5zbGF0ZVhBY3Rpb24iLCJvblNjcm9sbE1haW5Db250YWluZXIiLCJlIiwiY3VycmVudFRhcmdldCIsInNjcm9sbFRvcCIsIm9uV2hlZWxNYWluQ29udGFpbmVyIiwibmF0aXZlRXZlbnQiLCJkZWx0YVkiLCJsZW5ndGgiLCJjb3VudCIsIk1hdGgiLCJmbG9vciIsImNsaWVudFdpZHRoIiwiaSIsInB1c2giLCJvblRvdWNoU3RhcnRNYWluQ29udGFpbmVyIiwiY2hhbmdlZFRvdWNoZXMiLCJjbGllbnRZIiwib25Ub3VjaEVuZE1haW5Db250YWluZXIiLCJtYXAiLCJ2YWx1ZSIsIkNhcmVlckNvbnRhaW5lciIsIkltYWdlRGl2IiwiVGl0bGVTZWN0aW9uIiwiQ29udGVudHNTZWN0aW9uIiwiVGV4dERlc2NyaXB0aW9uRGl2IiwiUGljdHVyZUNvbnRhaW5lciIsIlB1enpsZVNlY3Rpb24iLCJQdXp6bGVEaXYiLCJQdXp6bGVMZWZ0IiwiUHV6emxlUmlnaHQiLCJQdXp6bGVUb3AiLCJDYXJlZXJUaXRsZSIsImNvbG9yIiwiVGV4dERlc2NyaXB0aW9uIiwidHlwZSIsInNyYyIsIlB1enpsZVRpdGxlIiwiQ2FyZWVySW1hZ2UiLCJQaWN0dXJlSW1hZ2UiLCJDYXJlZXIiLCJwaWN0dXJlSW1hZ2UiLCJzZXRQaWN0dXJlSW1hZ2UiLCJwaWN0dXJlQ29udGFpbmVyUmVmIiwib25DbGlja0NhbWVyYSIsImltZyIsInN0b3BQcm9wYWdhdGlvbiIsIm9uQ2xpY2tQaWN0dXJlQ29udGFpbmVyIiwiQ292ZXJDb250YWluZXIiLCJDb250ZW50c0RpdiIsIkFycm93U2VjdGlvbiIsInRvcCIsIkFycm93RGl2RnJhbWUiLCJrZXlmcmFtZXMiLCJBcnJvd0RpdiIsImFycm93V2lkdGgiLCJhcnJvd0hlaWdodCIsIkFycm93TGVmdERpdiIsInNxcnQiLCJBcnJvd1JpZ2h0RGl2IiwiTG9nb1NlY3Rpb24iLCJBcnJvd1RpdGxlIiwiTWFpblRpdGxlRnJhbWUiLCJNYWluVGl0bGUiLCJMb2dvSW1hZ2VGcmFtZSIsIkxvZ29JbWFnZSIsIk1haW5UaXRsZUluQ2xpbmUiLCJDb3ZlciIsInNldEFycm93V2lkdGgiLCJzZXRBcnJvd0hlaWdodCIsIm1haW5UaXRsZVJlZiIsIm1pbiIsIm9mZnNldFdpZHRoIiwiQ29udGFpbmVyIiwiVGl0bGVEaXYiLCJNYWluU2VjdGlvbiIsIkNvbG9yU3BhbiIsIlRpdGxlQ3Vyc29yIiwiSW5pdCIsImNvbnRhaW5lclJlZiIsInR5cGluZ1N0cmluZ1JlZjEiLCJ0eXBpbmdTdHJpbmdSZWYyIiwidHlwaW5nU3RyaW5nUmVmMyIsInR5cGluZ1N0cmluZ1JlZjQiLCJ0eXBpbmdTdHJpbmdSZWY1IiwidHlwaW5nU3RyaW5nUmVmNiIsInR5cGluZ1N0cmluZ1JlZjciLCJ0eXBpbmdTdHJpbmdSZWY4IiwidHlwaW5nQ3Vyc29yMSIsInR5cGluZ0N1cnNvcjIiLCJ0eXBpbmdDdXJzb3IzIiwidHlwaW5nQ3Vyc29yNCIsInRpbWUiLCJzdHJpbmdzIiwic3RyaW5nT2JqcyIsInN0cmluZyIsInN0YXJ0Iiwic2V0VHlwaW5nU3RyaW5nQWN0aW9uMSIsInNldFR5cGluZ1N0cmluZ0FjdGlvbjIiLCJzZXRUeXBpbmdDdXJzb3JBY3Rpb24iLCJzZXRJc0VuZEFjdGlvbiIsInJlZiIsImluZGV4IiwiY2hhckluZGV4IiwiaW5uZXJIVE1MIiwidHlwaW5nSW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJJbnRyb0NvbnRhaW5lciIsImhlaWdodCIsIkNvbnRlbnRzVGl0bGUiLCJDb250ZW50c0Rlc2NyaXB0aW9uIiwiSW50cm8iLCJhZGRTZWN0aW9ucyIsInNldEFkZFNlY3Rpb25zIiwiYWRkU2VjdGlvbnNUaW1lb3V0Iiwic2V0QWRkU2VjdGlvbnNUaW1lb3V0IiwiaW50cm9Db250YWluZXJSZWYiLCJjb250ZW50c1NlY3Rpb25SZWYiLCJjb250ZW50c0FycmF5IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImdldEFkZFNlY3Rpb25zIiwiY2xlYXJUaW1lb3V0IiwidGltZW91dCIsInRvdGFsQ291bnQiLCJjb250ZW50cyIsImFkZFNlY3Rpb24iLCJNb3JlQ29udGFpbmVyIiwiSGVhZGVyU2VjdGlvbiIsIlVybFNlY3Rpb24iLCJGb290ZXJTZWN0aW9uIiwiVXJsTWFpbkRpdiIsIlVybFN1YkRpdiIsIkZvb3Rlck1haW5EaXYiLCJGb290ZXJTdWJEaXYiLCJIZWFkZXJUZXh0IiwiVXJsVGV4dCIsIkZvb3RlclRleHQiLCJVcmxJbWFnZSIsIk1vcmUiLCJvbkNsaWNrVXJsTWFpbkRpdiIsInVybCIsIm9wZW4iLCJQcm9qZWN0c0NvbnRhaW5lciIsIlByb2plY3RzIiwiY3VycmVudEltYWdlSW5kZXgiLCJzZXRDdXJyZW50SW1hZ2VJbmRleCIsImltYWdlcyIsIm9uQ2xpY2tJbWFnZURpdiIsInRlbXBDdXJyZW50SW1hZ2VJbmRleCIsInNsaWNlIiwiU2tpbGxzQ29udGFpbmVyIiwiVGl0bGVDb250YWluZXIiLCJUaXRsZU1haW5EaXYiLCJUaXRsZVN1YkRpdiIsIkNvbnRlbnRzQ29udGFpbmVyIiwiU2tpbGxTZWN0aW9uIiwiU3ViVGl0bGUiLCJTa2lsbFRpdGxlIiwiU2tpbGxJbWFnZSIsIlNraWxscyIsInNraWxsc0FycmF5Iiwic2tpbGwiLCJXaHlJdENvbnRhaW5lciIsIlFBQ29udGFpZXIiLCJRdWVzdGlvblNlY3Rpb24iLCJBbnN3ZXJTZWN0aW9uIiwicXVlc3Rpb25OdW1iZXJLZXlmcmFtZSIsIlF1ZXN0aW9uRGl2IiwiUXVlc3Rpb25TdWJEaXYiLCJBbnN3ZXJEaXYiLCJRdWVzdGlvblRpdGxlIiwiQW5zd2VyVGl0bGUiLCJRdWVzdGlvbk51bWJlciIsImlzQ2xpY2siLCJXaHlJdCIsInF1ZXN0aW9uSW5kZXgiLCJzZXRRdWVzdGlvbkluZGV4IiwidHlwaW5nVGltZXIiLCJzZXRUeXBpbmdUaW1lciIsImFuc3dlclRpdGxlUmVmIiwiYW5zd2VyRGl2UmVmIiwicW5hQXJyYXkiLCJxdWVzdGlvbiIsImFuc3dlciIsInF1ZXN0aW9uQ29sb3IiLCJvbkNsaWNrUXVlc3Rpb24iLCJib3hTaGFkb3ciLCJxbmEiLCJzZXRJc0VuZCIsInNldEN1cnJlbnRDb21wb25lbnRObyIsInNldElzUGFnZUNoYW5naW5nIiwic2V0SW5uZXJXaWR0aCIsInNldEluZGV4U3ViQ29udGFpbmVyVHJhbnNsYXRlWCIsInJlcyIsInBheWxvYWQiLCJzZXRJbm5lcldpZHRoQWN0aW9uIiwiSW5kZXhNYWluQ29udGFpbmVyIiwiSW5kZXhNaWRkbGVDb250YWluZXIiLCJtYXhXaWR0aCIsIkluZGV4U3ViQ29udGFpbmVyIiwidHJhbnNsYXRlWCIsIkNvbXBvbmVudENvbnRhaW5lciIsIkNvZmZlZUNvbnRhaW5lciIsIkNvZmZlZVNlY3Rpb24iLCJDb2ZmZWVJbm5lciIsIkNvZmZlZU1hdGVyaWFsIiwiQ29mZmVlT3V0ZXIiLCJQZW5jaWxDb250YWluZXIiLCJQZW5jaWxTZWN0aW9uIiwiUGVuY2lsVG9wRGl2IiwiUGVuY2lsTGVmdFRvcCIsIlBlbmNpbFJpZ2h0VG9wIiwiUGVuY2lsTGVmdEJvdHRvbSIsIlBlbmNpbFJpZ2h0Qm90dG9tIiwiUGVuY2lsQm90dG9tIiwiUGVuY2lsTGVhZCIsIkNlbGxQaG9uZUNvbnRhaW5lciIsIkNlbGxQaG9uZVNlY3Rpb24iLCJDZWxsUGhvbmVCb2R5IiwiQ2VsbFBob25lVG9wIiwiQ2VsbFBob25lVG9wSW5uZXIiLCJNZW51Q29udGFpbmVyIiwiTWVudVNlY3Rpb24iLCJIYW1idXJnZXJJbWFnZSIsIkluZGV4IiwiaXNFbmQiLCJpbml0UmVkdWNlciIsImlubmVyV2lkdGgiLCJpbmRleFN1YkNvbnRhaW5lclRyYW5zbGF0ZVgiLCJvbkNsaWNrTWVudUNvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU9BLE1BQU1BLGtCQUFrQixHQUFHLENBQTNCO0FBTUEsTUFBTUMsYUFBYSxHQUFHQyx1RUFBSDtBQUFB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QUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQXBDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosRUFnREtELFVBQVUsR0FBRzdCLG1EQUFRLEdBQUcsR0FBeEIsZ0JBQ0csOERBQUMsYUFBRDtBQUFlLG1CQUFPLEVBQUUrQixvQkFBeEI7QUFBQSxtQ0FDSSw4REFBQyxXQUFEO0FBQUEscUNBQ0ksOERBQUMsY0FBRDtBQUFnQixtQkFBRyxFQUFDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESCxHQU9HLEVBdkRSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixxQkFERSxnQkFnRUYsOERBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFqRVI7QUFBQTtBQUFBO0FBQUEsdURBMEZJO0FBQ0ksVUFBSSxFQUFDLFVBRFQ7QUFFSSxTQUFHLEVBQUMsWUFGUjtBQUdJLFVBQUksRUFBQyw2RUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkExRkosZUErRkk7QUFBTSxVQUFJLEVBQUMsVUFBWDtBQUFzQixhQUFPLEVBQUMseUVBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQS9GSjtBQUFBLGtCQURKO0FBbUdILENBM0lEOztBQTZJQSwrREFBZUwsS0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7QUMvVk8sTUFBTTFCLFFBQVEsR0FBRyxHQUFqQixDOzs7Ozs7Ozs7OztBQ0FQLG1DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQge1xyXG4gICAgc2V0Q3VycmVudENvbXBvbmVudE5vQWN0aW9uLFxyXG4gICAgc2V0SW5kZXhTdWJDb250YWluZXJUcmFuc2xhdGVYQWN0aW9uLFxyXG4gICAgc2V0SXNQYWdlQ2hhbmdpbmdBY3Rpb24sXHJcbn0gZnJvbSAnLi4vbW9kdWxlcy9hY3Rpb25zJztcclxuaW1wb3J0IHsgaW5kZXhTdGF0ZSB9IGZyb20gJy4uL21vZHVsZXMvaW5kZXhSZWR1Y2VyJztcclxuXHJcbmNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IDE7XHJcblxyXG5pbnRlcmZhY2UgSUJhc2VDb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IEJhc2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgaGVpZ2h0OiA5M3ZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzOiBJQmFzZUNvbnRhaW5lcikgPT4gcHJvcHMuYmFja2dyb3VuZENvbG9yfTtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246ICR7dHJhbnNpdGlvbkR1cmF0aW9ufXM7XHJcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciB0b3A7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3gtc2hhZG93OiAycHggMHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSksIC0ycHggMHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbmA7XHJcblxyXG5jb25zdCBNYWluQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246ICR7dHJhbnNpdGlvbkR1cmF0aW9ufXM7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDUycHgpO1xyXG4gICAgbWFyZ2luLXRvcDogNTJweDtcclxuXHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuYDtcclxuXHJcbmludGVyZmFjZSBJUG9zdEl0Q29udGFpbmVyIHtcclxuICAgIGNvbXBvbmVudE5vOiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IFBvc3RJdENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6ICR7KHByb3BzOiBJUG9zdEl0Q29udGFpbmVyKSA9PiBwcm9wcy5jb21wb25lbnRObyAqIDMzfXB4O1xyXG4gICAgbGVmdDogLTExMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgUG9zdEl0U2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSVBvc3RJdENvbG9yRGl2IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBQb3N0SXRDb2xvckRpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wczogSVBvc3RJdENvbG9yRGl2KSA9PiBwcm9wcy5iYWNrZ3JvdW5kQ29sb3J9O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBQb3N0SXRUZXh0RGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogOTBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmY4ZTU7XHJcbmA7XHJcblxyXG5jb25zdCBDaGFpbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG5gO1xyXG5cclxuY29uc3QgQ2hhaW5TZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgMzJweDtcclxuYDtcclxuXHJcbmNvbnN0IENoYWluRnJhbWUgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgei1pbmRleDogMTtcclxuYDtcclxuXHJcbmNvbnN0IENoYWluID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiA0cHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjE2MTYxO1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDEycHggMTJweDtcclxuYDtcclxuXHJcbmNvbnN0IENoYWluQ2lyY2xlID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTRweCk7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMCAycHggcmdiYSgwLCAwLCAwLCAwLjQpLCBpbnNldCAtMXB4IC0ycHggMnB4IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuYDtcclxuXHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkLnNwYW5gXHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdHJhbnNpdGlvbjogJHt0cmFuc2l0aW9uRHVyYXRpb259cztcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSUJhc2Uge1xyXG4gICAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxuICAgIGNvbXBvbmVudE5vOiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IEJhc2U6IFJlYWN0LkZDPElCYXNlPiA9ICh7IGNoaWxkcmVuLCBjb21wb25lbnRObyB9KTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIC8vIHJlZHV4XHJcbiAgICBjb25zdCBjdXJyZW50Q29tcG9uZW50Tm8gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IGluZGV4U3RhdGUpID0+IHN0YXRlLmJhc2VSZWR1Y2VyLmN1cnJlbnRDb21wb25lbnRObyk7XHJcbiAgICBjb25zdCB0aXRsZUFycmF5ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBpbmRleFN0YXRlKSA9PiBzdGF0ZS5iYXNlUmVkdWNlci50aXRsZUFycmF5KTtcclxuICAgIGNvbnN0IGJhY2tncm91bmRDb2xvckFycmF5ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBpbmRleFN0YXRlKSA9PiBzdGF0ZS5iYXNlUmVkdWNlci5iYWNrZ3JvdW5kQ29sb3JBcnJheSk7XHJcbiAgICBjb25zdCBpc1BhZ2VDaGFuZ2luZyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogaW5kZXhTdGF0ZSkgPT4gc3RhdGUuYmFzZVJlZHVjZXIuaXNQYWdlQ2hhbmdpbmcpO1xyXG5cclxuICAgIC8vIHN0YXRlXHJcbiAgICBjb25zdCBbaXNUb3AsIHNldElzVG9wXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtpc0JvdHRvbSwgc2V0SXNCb3R0b21dID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3QgW2NoYWluQXJyYXksIHNldENoYWluQXJyYXldID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyW10+KFtdKTtcclxuICAgIGNvbnN0IFt0b3VjaFksIHNldFRvdWNoWV0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KDApO1xyXG5cclxuICAgIC8vIHJlZlxyXG4gICAgY29uc3QgYmFzZUNvbnRhaW5lclJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuICAgIGNvbnN0IG1haW5Db250YWluZXJSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KCk7XHJcbiAgICBjb25zdCB0aXRsZVJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MU3BhbkVsZW1lbnQ+KCk7XHJcblxyXG4gICAgLy8gdXNlRWZmZWN0XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvblJlc2l6ZSk7XHJcbiAgICAgICAgb25SZXNpemUoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uUmVzaXplKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8g6rO17Ya1XHJcbiAgICAgICAgbWFpbkNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcblxyXG4gICAgICAgIGlmIChjdXJyZW50Q29tcG9uZW50Tm8gPT09IGNvbXBvbmVudE5vKSB7XHJcbiAgICAgICAgICAgIC8vIO2YhOyerCDtjpjsnbTsp4Dsnbwg6rK97JqwXHJcbiAgICAgICAgICAgIGJhc2VDb250YWluZXJSZWYuY3VycmVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgICAgIGJhc2VDb250YWluZXJSZWYuY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgYmFzZUNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IGBgO1xyXG4gICAgICAgICAgICBiYXNlQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUuekluZGV4ID0gYCR7MTAwIC0gY29tcG9uZW50Tm99YDtcclxuXHJcbiAgICAgICAgICAgIG1haW5Db250YWluZXJSZWYuY3VycmVudC5zdHlsZS5vcGFjaXR5ID0gJyc7XHJcbiAgICAgICAgICAgIG1haW5Db250YWluZXJSZWYuY3VycmVudC5zY3JvbGxUbygwLCAwKTsgLy8g7Y6Y7J207KeAIOyKpO2BrOuhpCDstZzsg4HsnITroZxcclxuXHJcbiAgICAgICAgICAgIHRpdGxlUmVmLmN1cnJlbnQuc3R5bGUub3BhY2l0eSA9ICcnO1xyXG5cclxuICAgICAgICAgICAgc2V0SXNUb3AodHJ1ZSk7IC8vIOyKpO2BrOuhpOydgCDstZzsg4Hri6hcclxuICAgICAgICAgICAgaWYgKG1haW5Db250YWluZXJSZWYuY3VycmVudC5jbGllbnRIZWlnaHQgPT09IG1haW5Db250YWluZXJSZWYuY3VycmVudC5zY3JvbGxIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIC8vIO2OmOydtOyngOydmCDsoITssrTtgazquLDqsIAg7ZmU66m0IO2BrOq4sOyZgCDrj5nsnbztlaAg6rK97JqwIOyKpO2BrOuhpOydgCDstZztlZjri6jrj4Qg7Y+s7ZWoXHJcbiAgICAgICAgICAgICAgICBzZXRJc0JvdHRvbSh0cnVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldElzQm90dG9tKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudENvbXBvbmVudE5vID4gY29tcG9uZW50Tm8pIHtcclxuICAgICAgICAgICAgLy8g7KeA64KY6rCEIO2OmOydtOyngOydvCDqsr3smrBcclxuICAgICAgICAgICAgYmFzZUNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcclxuICAgICAgICAgICAgYmFzZUNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICBiYXNlQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZVgoMTgwZGVnKWA7XHJcbiAgICAgICAgICAgIGJhc2VDb250YWluZXJSZWYuY3VycmVudC5zdHlsZS56SW5kZXggPSBgJHs4MCArIGNvbXBvbmVudE5vfWA7XHJcblxyXG4gICAgICAgICAgICBtYWluQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUub3BhY2l0eSA9ICcwLjA1JztcclxuXHJcbiAgICAgICAgICAgIHRpdGxlUmVmLmN1cnJlbnQuc3R5bGUub3BhY2l0eSA9ICcwLjA1JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyDsp4DrgpjqsIDsp4Ag7JWK7J2AIO2OmOydtOyngOydvCDqsr3smrBcclxuICAgICAgICAgICAgYmFzZUNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICAgICAgYmFzZUNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICBiYXNlQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYGA7XHJcbiAgICAgICAgICAgIGJhc2VDb250YWluZXJSZWYuY3VycmVudC5zdHlsZS56SW5kZXggPSBgJHs4MCAtIGNvbXBvbmVudE5vfWA7XHJcblxyXG4gICAgICAgICAgICBtYWluQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUub3BhY2l0eSA9ICcnO1xyXG5cclxuICAgICAgICAgICAgdGl0bGVSZWYuY3VycmVudC5zdHlsZS5vcGFjaXR5ID0gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXNwYXRjaChzZXRJc1BhZ2VDaGFuZ2luZ0FjdGlvbih0cnVlKSk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50Q29tcG9uZW50Tm8gPT09IGNvbXBvbmVudE5vKSB7XHJcbiAgICAgICAgICAgICAgICBtYWluQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUub3ZlcmZsb3cgPSAnYXV0byc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldElzUGFnZUNoYW5naW5nQWN0aW9uKGZhbHNlKSk7XHJcbiAgICAgICAgfSwgdHJhbnNpdGlvbkR1cmF0aW9uICogMTAwMCk7XHJcbiAgICB9LCBbY3VycmVudENvbXBvbmVudE5vXSk7XHJcblxyXG4gICAgLy8gb25DbGlja1xyXG4gICAgY29uc3Qgb25DbGlja1Bvc3RJdCA9IChjb21wb25lbnRObykgPT4ge1xyXG4gICAgICAgIC8vIO2OmOydtOyngCDsnbTrj5nsnbQg7J2066Oo7Ja07KeA6rOgIOyeiOuKlCDqsr3smrBcclxuICAgICAgICBpZiAoaXNQYWdlQ2hhbmdpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g7ZiE7J6sIOy7tO2PrOuEjO2KuCDrsojtmLgg67OA6rK9XHJcbiAgICAgICAgZGlzcGF0Y2goc2V0Q3VycmVudENvbXBvbmVudE5vQWN0aW9uKGNvbXBvbmVudE5vKSk7XHJcblxyXG4gICAgICAgIC8vIOuplOuJtOuwlOqwgCDsl7TroKTsnojripQg6rK97JqwIOuLq+q4sFxyXG4gICAgICAgIGRpc3BhdGNoKHNldEluZGV4U3ViQ29udGFpbmVyVHJhbnNsYXRlWEFjdGlvbigwKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIG9uU2Nyb2xsXHJcbiAgICBjb25zdCBvblNjcm9sbE1haW5Db250YWluZXIgPSAoZTogUmVhY3QuVUlFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcclxuICAgICAgICAvLyDtjpjsnbTsp4Ag7J2064+Z7J20IOydtOujqOyWtOyngOqzoCDsnojripQg6rK97JqwXHJcbiAgICAgICAgaWYgKGlzUGFnZUNoYW5naW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIO2YhOyerCDtjpjsnbTsp4DqsIAg7JWE64uMIOqyveyasCDsiqTtgazroaTquLDriqUg7KSR64uoXHJcbiAgICAgICAgaWYgKGN1cnJlbnRDb21wb25lbnRObyAhPT0gY29tcG9uZW50Tm8pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g7Y6Y7J207KeAIOyDgeuLqOyXkCDsnojripQg6rK97JqwXHJcbiAgICAgICAgaWYgKGUuY3VycmVudFRhcmdldC5zY3JvbGxUb3AgPT09IDApIHtcclxuICAgICAgICAgICAgc2V0SXNUb3AodHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0SXNUb3AoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g7Y6Y7J207KeAIO2VmOuLqOyXkCDsnojripQg6rK97JqwXHJcbiAgICAgICAgaWYgKGUuY3VycmVudFRhcmdldC5zY3JvbGxUb3AgKyBlLmN1cnJlbnRUYXJnZXQuY2xpZW50SGVpZ2h0ID49IGUuY3VycmVudFRhcmdldC5zY3JvbGxIZWlnaHQpIHtcclxuICAgICAgICAgICAgc2V0SXNCb3R0b20odHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0SXNCb3R0b20oZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gb25XaGVlbFxyXG4gICAgY29uc3Qgb25XaGVlbE1haW5Db250YWluZXIgPSAoZTogUmVhY3QuV2hlZWxFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcclxuICAgICAgICAvLyDtjpjsnbTsp4Ag7J2064+Z7J20IOydtOujqOyWtOyngOqzoCDsnojripQg6rK97JqwXHJcbiAgICAgICAgaWYgKGlzUGFnZUNoYW5naW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIO2YhOyerCDtjpjsnbTsp4DqsIAg7JWE64uMIOqyveyasCDtnKDquLDriqUg7KSR64uoXHJcbiAgICAgICAgaWYgKGN1cnJlbnRDb21wb25lbnRObyAhPT0gY29tcG9uZW50Tm8pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g7Y6Y7J207KeA7J2YIOuBneyXkCDrj4Tri6ztlZjqs6Ag7JyE66GcIOyKpO2BrOuhpCDtlojsnYQg6rK97JqwXHJcbiAgICAgICAgaWYgKGlzVG9wICYmIGUubmF0aXZlRXZlbnQuZGVsdGFZIDwgMCkge1xyXG4gICAgICAgICAgICBvbkNsaWNrUG9zdEl0KGNvbXBvbmVudE5vIC0gMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDtjpjsnbTsp4DsnZgg64Gd7JeQIOuPhOuLrO2VmOqzoCDslYTrnpjroZwg7Iqk7YGs66GkIO2WiOydhCDqsr3smrBcclxuICAgICAgICBpZiAoaXNCb3R0b20gJiYgZS5uYXRpdmVFdmVudC5kZWx0YVkgPiAwKSB7XHJcbiAgICAgICAgICAgIC8vIO2YhOyerCDsu7Ttj6zrhIztirgg67KI7Zi46rCAIOuniOyngOunieydtCDslYTri5Ag6rK97Jqw7JeQ66eMIO2OmOydtOyngCDrhJjquLDquLBcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRDb21wb25lbnRObyA8IHRpdGxlQXJyYXkubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgb25DbGlja1Bvc3RJdChjb21wb25lbnRObyArIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBvblJlc2l6ZVxyXG4gICAgY29uc3Qgb25SZXNpemUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY291bnQgPSBNYXRoLmZsb29yKGJhc2VDb250YWluZXJSZWYuY3VycmVudC5jbGllbnRXaWR0aCAvIDg0KTtcclxuICAgICAgICBjb25zdCBjaGFpbkFycmF5OiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgY2hhaW5BcnJheS5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0Q2hhaW5BcnJheShjaGFpbkFycmF5KTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gb25Ub3VjaFxyXG4gICAgY29uc3Qgb25Ub3VjaFN0YXJ0TWFpbkNvbnRhaW5lciA9IChlOiBSZWFjdC5Ub3VjaEV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xyXG4gICAgICAgIC8vIO2OmOydtOyngOydmCDrgZ3sl5Ag64+E64us7ZaI7J2EIOqyveyasOunjCDsoJXsg4HsoIHsnbgg642w7J207YSwIOyeheugpVxyXG4gICAgICAgIGlmIChpc1RvcCB8fCBpc0JvdHRvbSkge1xyXG4gICAgICAgICAgICBzZXRUb3VjaFkoZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRUb3VjaFkoLTEpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25Ub3VjaEVuZE1haW5Db250YWluZXIgPSAoZTogUmVhY3QuVG91Y2hFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcclxuICAgICAgICAvLyDtjpjsnbTsp4Ag7J2064+Z7J20IOydtOujqOyWtOyngOqzoCDsnojripQg6rK97JqwXHJcbiAgICAgICAgaWYgKGlzUGFnZUNoYW5naW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIO2YhOyerCDtjpjsnbTsp4DqsIAg7JWE64uMIOqyveyasCDtnKDquLDriqUg7KSR64uoXHJcbiAgICAgICAgaWYgKGN1cnJlbnRDb21wb25lbnRObyAhPT0gY29tcG9uZW50Tm8pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g7Y6Y7J207KeA7J2YIOuBneyXkCDrj4Tri6ztlZwg65KkIOyKpO2BrOuhpO2VnOqyjCDslYTri4wg6rK97JqwXHJcbiAgICAgICAgaWYgKHRvdWNoWSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g7Y6Y7J207KeA7J2YIOuBneyXkCDrj4Tri6ztlZjqs6Ag7JyE66GcIOyKpO2BrOuhpCDtlojsnYQg6rK97JqwXHJcbiAgICAgICAgaWYgKGlzVG9wICYmIHRvdWNoWSAtIGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WSA8IDApIHtcclxuICAgICAgICAgICAgb25DbGlja1Bvc3RJdChjb21wb25lbnRObyAtIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g7Y6Y7J207KeA7J2YIOuBneyXkCDrj4Tri6ztlZjqs6Ag7JWE656Y66GcIOyKpO2BrOuhpCDtlojsnYQg6rK97JqwXHJcbiAgICAgICAgaWYgKGlzQm90dG9tICYmIHRvdWNoWSAtIGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WSA+IDApIHtcclxuICAgICAgICAgICAgLy8g7ZiE7J6sIOy7tO2PrOuEjO2KuCDrsojtmLjqsIAg66eI7KeA66eJ7J20IOyVhOuLkCDqsr3smrDsl5Drp4wg7Y6Y7J207KeAIOuEmOq4sOq4sFxyXG4gICAgICAgICAgICBpZiAoY3VycmVudENvbXBvbmVudE5vIDwgdGl0bGVBcnJheS5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrUG9zdEl0KGNvbXBvbmVudE5vICsgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEJhc2VDb250YWluZXIgcmVmPXtiYXNlQ29udGFpbmVyUmVmfSBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0+XHJcbiAgICAgICAgICAgICAgICA8TWFpbkNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17bWFpbkNvbnRhaW5lclJlZn1cclxuICAgICAgICAgICAgICAgICAgICBvblNjcm9sbD17b25TY3JvbGxNYWluQ29udGFpbmVyfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uV2hlZWw9e29uV2hlZWxNYWluQ29udGFpbmVyfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uVG91Y2hTdGFydD17b25Ub3VjaFN0YXJ0TWFpbkNvbnRhaW5lcn1cclxuICAgICAgICAgICAgICAgICAgICBvblRvdWNoRW5kPXtvblRvdWNoRW5kTWFpbkNvbnRhaW5lcn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8L01haW5Db250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgPFBvc3RJdENvbnRhaW5lciBjb21wb25lbnRObz17Y29tcG9uZW50Tm99PlxyXG4gICAgICAgICAgICAgICAgICAgIDxQb3N0SXRTZWN0aW9uIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2tQb3N0SXQoY29tcG9uZW50Tm8pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RJdENvbG9yRGl2IGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9zdEl0VGV4dERpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaXRsZSByZWY9e3RpdGxlUmVmfT57dGl0bGVBcnJheVtjb21wb25lbnROb119PC9UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Qb3N0SXRUZXh0RGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUG9zdEl0U2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvUG9zdEl0Q29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxDaGFpbkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hhaW5BcnJheS5tYXAoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hhaW5TZWN0aW9uIGtleT17dmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFpbkZyYW1lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hhaW4gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoYWluIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DaGFpbkZyYW1lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFpbkNpcmNsZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DaGFpblNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L0NoYWluQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L0Jhc2VDb250YWluZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFzZTtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGluZGV4U3RhdGUgfSBmcm9tICcuLi9tb2R1bGVzL2luZGV4UmVkdWNlcic7XHJcblxyXG5jb25zdCBDYXJlZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAxMnB4IDEycHggMTJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW46IDUwcHggMThweCA2NXB4IDE4cHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggMCA0cHggI2M4YzhjOCBpbnNldCwgLTJweCAtNHB4IDRweCAjYzhjOGM4IGluc2V0O1xyXG5gO1xyXG5cclxuY29uc3QgSW1hZ2VEaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWFyZ2luOiAxOHB4IDI1cHg7XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZVNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdG9wOiAtNDBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4IDAgMDtcclxuICAgIHBhZGRpbmc6IDAgMTJweDtcclxuICAgIGJveC1zaGFkb3c6IDJweCA0cHggNHB4ICNjOGM4YzggaW5zZXQsIC0ycHggMCA0cHggI2M4YzhjOCBpbnNldDtcclxuYDtcclxuXHJcbmNvbnN0IENvbnRlbnRzU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgcGFkZGluZzogMCAxNnB4O1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XHJcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBUZXh0RGVzY3JpcHRpb25EaXYgPSBzdHlsZWQuZGl2YGA7XHJcblxyXG5jb25zdCBQaWN0dXJlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiAxMDE7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBQdXp6bGVTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbmA7XHJcblxyXG5jb25zdCBQdXp6bGVEaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW46IDQwcHggMCAxMDBweCAwO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTE2ZGVnKTtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xyXG4gICAgICAgIHdpZHRoOiAxNjBweDtcclxuICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgUHV6emxlTGVmdCA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICB0b3A6IDEzcHg7XHJcbiAgICBsZWZ0OiAtMTNweDtcclxuICAgIGJveC1zaGFkb3c6IC0ycHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgbGVmdDogLTE1cHg7XHJcbiAgICAgICAgdG9wOiAxNXB4O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElQdXp6bGVSaWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgUHV6emxlUmlnaHQgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHM6IElQdXp6bGVSaWdodCkgPT4gcHJvcHMuYmFja2dyb3VuZENvbG9yfTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgdG9wOiAxM3B4O1xyXG4gICAgcmlnaHQ6IC0xM3B4O1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgM3B4IDAgMXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICB0b3A6IDE1cHg7XHJcbiAgICAgICAgcmlnaHQ6IC0xNXB4O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgUHV6emxlVG9wID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIHRvcDogLTEzcHg7XHJcbiAgICBsZWZ0OiA0M3B4O1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHRvcDogLTE1cHg7XHJcbiAgICAgICAgbGVmdDogNjVweDtcclxuICAgIH1cclxuYDtcclxuXHJcbmludGVyZmFjZSBJQ2FyZWVyVGl0bGUge1xyXG4gICAgY29sb3I6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgQ2FyZWVyVGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuICAgIGNvbG9yOiAkeyhwcm9wczogSUNhcmVlclRpdGxlKSA9PiBwcm9wcy5jb2xvcn07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiBtaW4oMS4zZW0sIDAuOGVtICsgMS4ydncpO1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElUZXh0RGVzY3JpcHRpb24ge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XHJcbiAgICB0eXBlPzogc3RyaW5nO1xyXG4gICAgc3JjPzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBUZXh0RGVzY3JpcHRpb24gPSBzdHlsZWQuc3BhbmBcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAxOHB4IDA7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiBtaW4oMS4xZW0sIDAuN2VtICsgMS4xdncpO1xyXG4gICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG5cclxuICAgICR7KHByb3BzOiBJVGV4dERlc2NyaXB0aW9uKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb3BzLnR5cGUgPT09ICdjYW1lcmEnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjZweDtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnXFxmMDMwJztcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7cHJvcHMuYmFja2dyb3VuZENvbG9yfTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHVybCgke3Byb3BzLnNyY30pLCBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocHJvcHMudHlwZSA9PT0gJ2NhbGVuZGFyJykge1xyXG4gICAgICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ1xcZjI3Mic7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke3Byb3BzLmJhY2tncm91bmRDb2xvcn07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wcy50eXBlID09PSAncG9zaXRpb24nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjZweDtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnXFxmMmJiJztcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7cHJvcHMuYmFja2dyb3VuZENvbG9yfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ1xcZjAwNSc7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke3Byb3BzLmJhY2tncm91bmRDb2xvcn07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgfVxyXG4gICAgfX1cclxuYDtcclxuXHJcbmNvbnN0IFB1enpsZVRpdGxlID0gc3R5bGVkLnNwYW5gXHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNnB4KTtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC03LjVweCk7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBDYXJlZXJJbWFnZSA9IHN0eWxlZC5pbWdgXHJcbiAgICB3aWR0aDogbWluKDIwZW0sIGNhbGMoMTVlbSArIDEwdncpKTtcclxuYDtcclxuXHJcbmNvbnN0IFBpY3R1cmVJbWFnZSA9IHN0eWxlZC5pbWdgXHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDI4cHgpO1xyXG4gICAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMjhweCk7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSUNhcmVlciB7XHJcbiAgICBjb21wb25lbnRObzogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBDYXJlZXI6IFJlYWN0LkZDPElDYXJlZXI+ID0gKHsgY29tcG9uZW50Tm8gfSk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIC8vIHJlZHV4XHJcbiAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3JBcnJheSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogaW5kZXhTdGF0ZSkgPT4gc3RhdGUuYmFzZVJlZHVjZXIuYmFja2dyb3VuZENvbG9yQXJyYXkpO1xyXG5cclxuICAgIC8vIHN0YXRlXHJcbiAgICBjb25zdCBbcGljdHVyZUltYWdlLCBzZXRQaWN0dXJlSW1hZ2VdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignJyk7XHJcblxyXG4gICAgLy8gcmVmXHJcbiAgICBjb25zdCBwaWN0dXJlQ29udGFpbmVyUmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG5cclxuICAgIC8vIG9uQ2xpY2tcclxuICAgIGNvbnN0IG9uQ2xpY2tDYW1lcmEgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MU3BhbkVsZW1lbnQsIE1vdXNlRXZlbnQ+LCBpbWc6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGlmIChwaWN0dXJlQ29udGFpbmVyUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIHNldFBpY3R1cmVJbWFnZShpbWcpO1xyXG4gICAgICAgICAgICBwaWN0dXJlQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG9uQ2xpY2tQaWN0dXJlQ29udGFpbmVyID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChwaWN0dXJlQ29udGFpbmVyUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgc2V0UGljdHVyZUltYWdlKCcnKTtcclxuICAgICAgICAgICAgcGljdHVyZUNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxCYXNlIGNvbXBvbmVudE5vPXtjb21wb25lbnROb30+XHJcbiAgICAgICAgICAgICAgICA8UHV6emxlU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8UHV6emxlRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHV6emxlTGVmdCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHV6emxlUmlnaHQgYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQdXp6bGVUb3AgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFB1enpsZVRpdGxlPuqyveugpTwvUHV6emxlVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9QdXp6bGVEaXY+XHJcbiAgICAgICAgICAgICAgICA8L1B1enpsZVNlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgPENhcmVlckNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8VGl0bGVTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZWVyVGl0bGUgY29sb3I9eycjMzNiZGRhJ30+7IK87ISxIOyyreuFhCDshoztlITtirjsm6jslrQg7JWE7Lm0642w66+4PC9DYXJlZXJUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L1RpdGxlU2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRzU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmVlckltYWdlIHNyYz1cIi9pbWFnZS9zc2FmeTEuUE5HXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbWFnZURpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb25EaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfSB0eXBlPVwiY2FsZW5kYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxOS4wNyB+IDIwLjAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2FtZXJhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2UvdG9wU2NvcmVfbWluaS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBvbkNsaWNrQ2FtZXJhKGUsICcvaW1hZ2UvdG9wU2NvcmUuanBnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMe2Vmeq4sCDrsJgg64yA7ZGcIOyEseyggSDsmrDsiJjsg4Eg7Leo65OdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2FtZXJhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2UvYWJyb2FkRWR1Y2F0aW9uX21pbmkucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gb25DbGlja0NhbWVyYShlLCAnL2ltYWdlL2Ficm9hZEVkdWNhdGlvbi5qcGcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDtlbTsmbgg7Jew7IiYIOuMgOyDgeyekOuhnCDrsJztg4FcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg7Ju5IOq4sOuwmCDquLDstIgg67CPIOyLrO2ZlCDqtZDsnKEg7IiY6rCVXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2FtZXJhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2Uvc3dleHBlcnRTY29yZV9taW5pLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IG9uQ2xpY2tDYW1lcmEoZSwgJy9pbWFnZS9zd2V4cGVydFNjb3JlLlBORycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOyCvOyEsSBTVyDsl63rn4kg7YWM7Iqk7Yq4IEErIOy3qOuTnVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGVudHNTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJlZXJDb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgPENhcmVlckNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8VGl0bGVTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZWVyVGl0bGUgY29sb3I9eycjMDMyOTcwJ30+7ZiE64yAIOyYpO2GoOyXkOuyhDwvQ2FyZWVyVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UaXRsZVNlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxDb250ZW50c1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZURpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJlZXJJbWFnZSBzcmM9XCIvaW1hZ2UvYXV0b2V2ZXIxLlBOR1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW1hZ2VEaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0gdHlwZT1cImNhbGVuZGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjAuMDMgfiDtmITsnqxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0gdHlwZT1cInBvc2l0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg7J6Q64+Z7LCoIO2SiOyniCDqsJzshKAg7Iuc7Iqk7YWcIEZFL0JFIOqwnOuwnCDrsI8g7Jq07JiBXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIO2MgCDrgrQgR2l0IOuPhOyehSDrsI8g7IKs64K0IOyngeybkOuTpOyXkOqyjCBHaXTsgqzsmqkg67Cp67KVIOq1kOycoSDri7Tri7lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg7YyAIOuCtCDsi6DquLDsiKAg7KCB7JqpIOuLtOuLuVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDshJzruYTsiqQg7Zqo7Jyo7ZmU66W8IOychO2VnCDsi5zsiqTthZwg6rCc7Y64IO2UhOuhnOygne2KuCDsp4TtlolcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3Qg7LWc7KCB7ZmUIOyekeyXheydhCDthrXtlZwg7ISc67mE7IqkIOyGjeuPhCDqsJzshKBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg7Jm467aAIOyLnOyKpO2FnOqzvCDsl7Dqs4Trpbwg7JyE7ZWcIOqzteyaqSBSZXN0IEFQSSDqsJzrsJxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbkRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnRzU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZWVyQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L0Jhc2U+XHJcblxyXG4gICAgICAgICAgICA8UGljdHVyZUNvbnRhaW5lciByZWY9e3BpY3R1cmVDb250YWluZXJSZWZ9IG9uQ2xpY2s9e29uQ2xpY2tQaWN0dXJlQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxQaWN0dXJlSW1hZ2Ugc3JjPXtwaWN0dXJlSW1hZ2V9IC8+XHJcbiAgICAgICAgICAgIDwvUGljdHVyZUNvbnRhaW5lcj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJlZXI7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBpbmRleFN0YXRlIH0gZnJvbSAnLi4vbW9kdWxlcy9pbmRleFJlZHVjZXInO1xyXG5pbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xyXG5cclxuY29uc3QgQ292ZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgQ29udGVudHNEaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSUFycm93U2VjdGlvbiB7XHJcbiAgICB0b3A6IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgQXJyb3dTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0keyhwcm9wczogSUFycm93U2VjdGlvbikgPT4gcHJvcHMudG9wfXB4O1xyXG4gICAgbGVmdDogMDtcclxuYDtcclxuXHJcbmNvbnN0IEFycm93RGl2RnJhbWUgPSBrZXlmcmFtZXNgXHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQwcHgpIHJvdGF0ZSgtMTJkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIDMzJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTJkZWcpO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElBcnJvd0RpdiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxuICAgIGFycm93V2lkdGg6IG51bWJlcjtcclxuICAgIGFycm93SGVpZ2h0OiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IEFycm93RGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzOiBJQXJyb3dEaXYpID0+IHByb3BzLmJhY2tncm91bmRDb2xvcn07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogJHsocHJvcHM6IElBcnJvd0RpdikgPT4gcHJvcHMuYXJyb3dXaWR0aH1weDtcclxuICAgIGhlaWdodDogJHsocHJvcHM6IElBcnJvd0RpdikgPT4gcHJvcHMuYXJyb3dIZWlnaHR9cHg7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTJkZWcpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogNDBweCAwO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6ICR7QXJyb3dEaXZGcmFtZX07XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSUFycm93TGVmdERpdiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxuICAgIGFycm93SGVpZ2h0OiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IEFycm93TGVmdERpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG5cclxuICAgICR7KHByb3BzOiBJQXJyb3dMZWZ0RGl2KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgdG9wOiAkeyhwcm9wcy5hcnJvd0hlaWdodCAtIHByb3BzLmFycm93SGVpZ2h0IC8gTWF0aC5zcXJ0KDIpKSAvIDJ9cHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IC0ke3Byb3BzLmFycm93SGVpZ2h0IC8gMiAtIChwcm9wcy5hcnJvd0hlaWdodCAtIHByb3BzLmFycm93SGVpZ2h0IC8gTWF0aC5zcXJ0KDIpKSAvIDJ9cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAke3Byb3BzLmFycm93SGVpZ2h0IC8gTWF0aC5zcXJ0KDIpfXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6ICR7cHJvcHMuYXJyb3dIZWlnaHQgLyBNYXRoLnNxcnQoMil9cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMuYmFja2dyb3VuZENvbG9yfTtcclxuICAgICAgICBgO1xyXG4gICAgfX1cclxuYDtcclxuXHJcbmludGVyZmFjZSBJQXJyb3dSaWdodERpdiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxuICAgIGFycm93SGVpZ2h0OiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IEFycm93UmlnaHREaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuXHJcbiAgICAkeyhwcm9wczogSUFycm93UmlnaHREaXYpID0+IHtcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICB0b3A6ICR7KHByb3BzLmFycm93SGVpZ2h0IC0gcHJvcHMuYXJyb3dIZWlnaHQgLyBNYXRoLnNxcnQoMikpIC8gMn1weDtcclxuICAgICAgICAgICAgcmlnaHQ6IC0ke3Byb3BzLmFycm93SGVpZ2h0IC8gMiAtIChwcm9wcy5hcnJvd0hlaWdodCAtIHByb3BzLmFycm93SGVpZ2h0IC8gTWF0aC5zcXJ0KDIpKSAvIDJ9cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAke3Byb3BzLmFycm93SGVpZ2h0IC8gTWF0aC5zcXJ0KDIpfXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6ICR7cHJvcHMuYXJyb3dIZWlnaHQgLyBNYXRoLnNxcnQoMil9cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMuYmFja2dyb3VuZENvbG9yfTtcclxuICAgICAgICBgO1xyXG4gICAgfX1cclxuYDtcclxuXHJcbmNvbnN0IExvZ29TZWN0aW9uID0gc3R5bGVkLmRpdmBgO1xyXG5cclxuY29uc3QgQXJyb3dUaXRsZSA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IG1pbihjYWxjKDIuMmVtICsgMi44dncpLCAzLjZlbSk7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuYDtcclxuXHJcbmNvbnN0IE1haW5UaXRsZUZyYW1lID0ga2V5ZnJhbWVzYFxyXG4gICAgMCUsXHJcbiAgICAzMyUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00MHB4KTtcclxuICAgIH1cclxuXHJcbiAgICA2NiUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBpbml0aWFsO1xyXG4gICAgfSBcclxuYDtcclxuXHJcbmNvbnN0IE1haW5UaXRsZSA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogbWluKGNhbGMoMy42ZW0gKyA1LjJ2dyksIDYuNGVtKTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6ICR7TWFpblRpdGxlRnJhbWV9O1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICB0ZXh0LXNoYWRvdzogM3B4IDNweCAzcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG5gO1xyXG5cclxuY29uc3QgTG9nb0ltYWdlRnJhbWUgPSBrZXlmcmFtZXNgXHJcbiAgICAwJSxcclxuICAgIDMzJSxcclxuICAgIDY2JSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQwcHgpO1xyXG4gICAgfVxyXG5cclxuICAgIDk5JSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2Zvcm06IGluaXRpYWw7XHJcbiAgICB9IFxyXG5gO1xyXG5cclxuY29uc3QgTG9nb0ltYWdlID0gc3R5bGVkLmltZ2BcclxuICAgIHdpZHRoOiBtaW4oOS4yZW0sIDYuNmVtICsgNy44dncpO1xyXG4gICAgbWFyZ2luOiAxMnB4IDA7XHJcbiAgICBhbmltYXRpb24tbmFtZTogJHtMb2dvSW1hZ2VGcmFtZX07XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW50aW9uOiBlYXNlLWluO1xyXG5gO1xyXG5cclxuY29uc3QgTWFpblRpdGxlSW5DbGluZSA9IHN0eWxlZC5zcGFuYFxyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEyZGVnKTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbG9yOiAjYzE5Mjc3O1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElDb3ZlciB7XHJcbiAgICBjb21wb25lbnRObzogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBDb3ZlcjogUmVhY3QuRkM8SUNvdmVyPiA9ICh7IGNvbXBvbmVudE5vIH0pOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICAvLyByZWR1eFxyXG4gICAgY29uc3QgYmFja2dyb3VuZENvbG9yQXJyYXkgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IGluZGV4U3RhdGUpID0+IHN0YXRlLmJhc2VSZWR1Y2VyLmJhY2tncm91bmRDb2xvckFycmF5KTtcclxuXHJcbiAgICAvLyBzdGF0ZVxyXG4gICAgY29uc3QgW2Fycm93V2lkdGgsIHNldEFycm93V2lkdGhdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPigwKTtcclxuICAgIGNvbnN0IFthcnJvd0hlaWdodCwgc2V0QXJyb3dIZWlnaHRdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPigxMDApO1xyXG5cclxuICAgIC8vIHJlZlxyXG4gICAgY29uc3QgbWFpblRpdGxlUmVmID0gUmVhY3QudXNlUmVmPEhUTUxTcGFuRWxlbWVudD4oKTtcclxuXHJcbiAgICAvLyB1c2VFZmZlY3RcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uUmVzaXplKTtcclxuICAgICAgICBvblJlc2l6ZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25SZXNpemUpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLy8gbm9ybWFsXHJcbiAgICBjb25zdCBvblJlc2l6ZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBhcnJvd1dpZHRoID0gTWF0aC5taW4obWFpblRpdGxlUmVmLmN1cnJlbnQub2Zmc2V0V2lkdGggLSBhcnJvd0hlaWdodCAvIE1hdGguc3FydCgyKSAvIDIsIDQwMCk7XHJcbiAgICAgICAgc2V0QXJyb3dXaWR0aChhcnJvd1dpZHRoKTtcclxuICAgICAgICBzZXRBcnJvd0hlaWdodChhcnJvd1dpZHRoIC8gNCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEJhc2UgY29tcG9uZW50Tm89e2NvbXBvbmVudE5vfT5cclxuICAgICAgICAgICAgICAgIDxDb3ZlckNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29udGVudHNEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcnJvd1NlY3Rpb24gdG9wPXthcnJvd0hlaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dEaXYgYmFja2dyb3VuZENvbG9yPVwiIzYyOTU5Q1wiIGFycm93V2lkdGg9e2Fycm93V2lkdGh9IGFycm93SGVpZ2h0PXthcnJvd0hlaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93TGVmdERpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dIZWlnaHQ9e2Fycm93SGVpZ2h0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93UmlnaHREaXYgYmFja2dyb3VuZENvbG9yPVwiIzYyOTU5Q1wiIGFycm93SGVpZ2h0PXthcnJvd0hlaWdodH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dUaXRsZT7quYDshLHssKzsnZg8L0Fycm93VGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Fycm93RGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Fycm93U2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNYWluVGl0bGUgcmVmPXttYWluVGl0bGVSZWZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1haW5UaXRsZUluQ2xpbmU+UDwvTWFpblRpdGxlSW5DbGluZT5vcnRmb2xpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01haW5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnRzRGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8TG9nb1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2dvSW1hZ2Ugc3JjPVwiL2ltYWdlL1NDTG9nbzIuc3ZnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xvZ29TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9Db3ZlckNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9CYXNlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvdmVyO1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgc2V0SXNFbmRBY3Rpb24gfSBmcm9tICcuLi9tb2R1bGVzL2FjdGlvbnMnO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG5gO1xyXG5cclxuY29uc3QgVGl0bGVEaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xyXG5gO1xyXG5cclxuY29uc3QgTWFpblNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmA7XHJcblxyXG5jb25zdCBNYWluVGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxLjRlbTtcclxuYDtcclxuXHJcbmludGVyZmFjZSBJQ29sb3JTcGFuIHtcclxuICAgIGNvbG9yOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IENvbG9yU3BhbiA9IHN0eWxlZC5zcGFuYFxyXG4gICAgY29sb3I6ICR7KHByb3BzOiBJQ29sb3JTcGFuKSA9PiBwcm9wcy5jb2xvcn07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG5gO1xyXG5cclxuY29uc3QgVGl0bGVDdXJzb3IgPSBzdHlsZWQuc3BhbmBcclxuICAgIGJvcmRlci1yaWdodDogN3B4IHNvbGlkICNmZmY7XHJcbiAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkICMwMDA7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG5gO1xyXG5cclxuY29uc3QgSW5pdCA9ICgpOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgLy8gcmVmXHJcbiAgICBjb25zdCBjb250YWluZXJSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KCk7XHJcblxyXG4gICAgY29uc3QgdHlwaW5nU3RyaW5nUmVmMSA9IFJlYWN0LnVzZVJlZjxIVE1MU3BhbkVsZW1lbnQ+KCk7XHJcbiAgICBjb25zdCB0eXBpbmdTdHJpbmdSZWYyID0gUmVhY3QudXNlUmVmPEhUTUxTcGFuRWxlbWVudD4oKTtcclxuICAgIGNvbnN0IHR5cGluZ1N0cmluZ1JlZjMgPSBSZWFjdC51c2VSZWY8SFRNTFNwYW5FbGVtZW50PigpO1xyXG4gICAgY29uc3QgdHlwaW5nU3RyaW5nUmVmNCA9IFJlYWN0LnVzZVJlZjxIVE1MU3BhbkVsZW1lbnQ+KCk7XHJcbiAgICBjb25zdCB0eXBpbmdTdHJpbmdSZWY1ID0gUmVhY3QudXNlUmVmPEhUTUxTcGFuRWxlbWVudD4oKTtcclxuICAgIGNvbnN0IHR5cGluZ1N0cmluZ1JlZjYgPSBSZWFjdC51c2VSZWY8SFRNTFNwYW5FbGVtZW50PigpO1xyXG4gICAgY29uc3QgdHlwaW5nU3RyaW5nUmVmNyA9IFJlYWN0LnVzZVJlZjxIVE1MU3BhbkVsZW1lbnQ+KCk7XHJcbiAgICBjb25zdCB0eXBpbmdTdHJpbmdSZWY4ID0gUmVhY3QudXNlUmVmPEhUTUxTcGFuRWxlbWVudD4oKTtcclxuXHJcbiAgICBjb25zdCB0eXBpbmdDdXJzb3IxID0gUmVhY3QudXNlUmVmPEhUTUxTcGFuRWxlbWVudD4oKTtcclxuICAgIGNvbnN0IHR5cGluZ0N1cnNvcjIgPSBSZWFjdC51c2VSZWY8SFRNTFNwYW5FbGVtZW50PigpO1xyXG4gICAgY29uc3QgdHlwaW5nQ3Vyc29yMyA9IFJlYWN0LnVzZVJlZjxIVE1MU3BhbkVsZW1lbnQ+KCk7XHJcbiAgICBjb25zdCB0eXBpbmdDdXJzb3I0ID0gUmVhY3QudXNlUmVmPEhUTUxTcGFuRWxlbWVudD4oKTtcclxuXHJcbiAgICAvLyB2YXJpYWJsZVxyXG4gICAgY29uc3QgdGltZSA9IDEwMDtcclxuXHJcbiAgICBjb25zdCBzdHJpbmdzID0gW1xyXG4gICAgICAgICdDOlxcXFxVc2Vyc1xcXFxVc2VyXFxcXERlc2t0b3BcXFxccG9ydGZvbGlvXFxcXHN1bmdjaGFuPicsXHJcbiAgICAgICAgJ25wbScsXHJcbiAgICAgICAgJyBydW4gc3RhcnQgJyxcclxuICAgICAgICAncmVhZHknLFxyXG4gICAgICAgICcgLSBzdGFydGVkIHBvcnRmb2xpbyBvZiBzdW5nY2hhbiwgdXJsOiBodHRwczovL2tzY3BvcnRmb2xpby5jb20nLFxyXG4gICAgICAgICd3YWl0JyxcclxuICAgICAgICAnIC0gY29tcGlsaW5nLi4uJyxcclxuICAgICAgICAnZXZlbnQnLFxyXG4gICAgICAgICcgLSBjb21waWxlZCBzdWNjZXNmdWxseScsXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IHN0cmluZ09ianMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdHJpbmc6IHN0cmluZ3NbMF0sXHJcbiAgICAgICAgICAgIHN0YXJ0OiAwLFxyXG4gICAgICAgICAgICBsZW5ndGg6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0cmluZzogc3RyaW5nc1sxXSxcclxuICAgICAgICAgICAgc3RhcnQ6IDAsXHJcbiAgICAgICAgICAgIGxlbmd0aDogdGltZSAqIHN0cmluZ3NbMV0ubGVuZ3RoLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdHJpbmc6IHN0cmluZ3NbMl0sXHJcbiAgICAgICAgICAgIHN0YXJ0OiB0aW1lICogc3RyaW5nc1sxXS5sZW5ndGgsXHJcbiAgICAgICAgICAgIGxlbmd0aDogdGltZSAqIHN0cmluZ3NbMl0ubGVuZ3RoLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdHJpbmc6IHN0cmluZ3NbM10sXHJcbiAgICAgICAgICAgIHN0YXJ0OiB0aW1lICogKHN0cmluZ3NbMV0ubGVuZ3RoICsgc3RyaW5nc1syXS5sZW5ndGggKyBzdHJpbmdzWzNdLmxlbmd0aCksXHJcbiAgICAgICAgICAgIGxlbmd0aDogMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RyaW5nOiBzdHJpbmdzWzRdLFxyXG4gICAgICAgICAgICBzdGFydDogdGltZSAqIChzdHJpbmdzWzFdLmxlbmd0aCArIHN0cmluZ3NbMl0ubGVuZ3RoICsgc3RyaW5nc1szXS5sZW5ndGgpLFxyXG4gICAgICAgICAgICBsZW5ndGg6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0cmluZzogc3RyaW5nc1s1XSxcclxuICAgICAgICAgICAgc3RhcnQ6IHRpbWUgKiAoc3RyaW5nc1sxXS5sZW5ndGggKyBzdHJpbmdzWzJdLmxlbmd0aCArIHN0cmluZ3NbM10ubGVuZ3RoICsgc3RyaW5nc1s1XS5sZW5ndGgpLFxyXG4gICAgICAgICAgICBsZW5ndGg6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0cmluZzogc3RyaW5nc1s2XSxcclxuICAgICAgICAgICAgc3RhcnQ6IHRpbWUgKiAoc3RyaW5nc1sxXS5sZW5ndGggKyBzdHJpbmdzWzJdLmxlbmd0aCArIHN0cmluZ3NbM10ubGVuZ3RoICsgc3RyaW5nc1s1XS5sZW5ndGgpLFxyXG4gICAgICAgICAgICBsZW5ndGg6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0cmluZzogc3RyaW5nc1s3XSxcclxuICAgICAgICAgICAgc3RhcnQ6XHJcbiAgICAgICAgICAgICAgICB0aW1lICpcclxuICAgICAgICAgICAgICAgIChzdHJpbmdzWzFdLmxlbmd0aCArIHN0cmluZ3NbMl0ubGVuZ3RoICsgc3RyaW5nc1szXS5sZW5ndGggKyBzdHJpbmdzWzVdLmxlbmd0aCArIHN0cmluZ3NbN10ubGVuZ3RoKSxcclxuICAgICAgICAgICAgbGVuZ3RoOiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdHJpbmc6IHN0cmluZ3NbOF0sXHJcbiAgICAgICAgICAgIHN0YXJ0OlxyXG4gICAgICAgICAgICAgICAgdGltZSAqXHJcbiAgICAgICAgICAgICAgICAoc3RyaW5nc1sxXS5sZW5ndGggKyBzdHJpbmdzWzJdLmxlbmd0aCArIHN0cmluZ3NbM10ubGVuZ3RoICsgc3RyaW5nc1s1XS5sZW5ndGggKyBzdHJpbmdzWzddLmxlbmd0aCksXHJcbiAgICAgICAgICAgIGxlbmd0aDogMCxcclxuICAgICAgICB9LFxyXG4gICAgXTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFR5cGluZ1N0cmluZ0FjdGlvbjEodHlwaW5nU3RyaW5nUmVmMSwgMSk7XHJcbiAgICAgICAgc2V0VHlwaW5nU3RyaW5nQWN0aW9uMSh0eXBpbmdTdHJpbmdSZWYyLCAyKTtcclxuICAgICAgICBzZXRUeXBpbmdTdHJpbmdBY3Rpb24yKHR5cGluZ1N0cmluZ1JlZjMsIDMpO1xyXG4gICAgICAgIHNldFR5cGluZ1N0cmluZ0FjdGlvbjIodHlwaW5nU3RyaW5nUmVmNCwgNCk7XHJcbiAgICAgICAgc2V0VHlwaW5nU3RyaW5nQWN0aW9uMih0eXBpbmdTdHJpbmdSZWY1LCA1KTtcclxuICAgICAgICBzZXRUeXBpbmdTdHJpbmdBY3Rpb24yKHR5cGluZ1N0cmluZ1JlZjYsIDYpO1xyXG4gICAgICAgIHNldFR5cGluZ1N0cmluZ0FjdGlvbjIodHlwaW5nU3RyaW5nUmVmNywgNyk7XHJcbiAgICAgICAgc2V0VHlwaW5nU3RyaW5nQWN0aW9uMih0eXBpbmdTdHJpbmdSZWY4LCA4KTtcclxuXHJcbiAgICAgICAgc2V0VHlwaW5nQ3Vyc29yQWN0aW9uKHR5cGluZ0N1cnNvcjEsIDAsIHN0cmluZ09ianNbMl0uc3RhcnQgKyBzdHJpbmdPYmpzWzJdLmxlbmd0aCk7XHJcbiAgICAgICAgc2V0VHlwaW5nQ3Vyc29yQWN0aW9uKHR5cGluZ0N1cnNvcjIsIHN0cmluZ09ianNbMl0uc3RhcnQgKyBzdHJpbmdPYmpzWzJdLmxlbmd0aCwgc3RyaW5nT2Jqc1szXS5zdGFydCk7XHJcbiAgICAgICAgc2V0VHlwaW5nQ3Vyc29yQWN0aW9uKHR5cGluZ0N1cnNvcjMsIHN0cmluZ09ianNbM10uc3RhcnQsIHN0cmluZ09ianNbNV0uc3RhcnQpO1xyXG4gICAgICAgIHNldFR5cGluZ0N1cnNvckFjdGlvbih0eXBpbmdDdXJzb3I0LCBzdHJpbmdPYmpzWzVdLnN0YXJ0LCBzdHJpbmdPYmpzWzddLnN0YXJ0KTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldElzRW5kQWN0aW9uKHRydWUpKTtcclxuICAgICAgICB9LCBzdHJpbmdPYmpzWzddLnN0YXJ0ICsgdGltZSAqIDUpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIC8vIO2DgOydtO2VkSDsspjrpqzqsIAg7J2066Oo7Ja07KeA64qUIOyVoeyFmCAo6riA7J6QIO2VmOuCmOyUqSlcclxuICAgIGNvbnN0IHNldFR5cGluZ1N0cmluZ0FjdGlvbjEgPSAoXHJcbiAgICAgICAgcmVmOiBSZWFjdC5NdXRhYmxlUmVmT2JqZWN0PEhUTUxTcGFuRWxlbWVudD4sIC8vIO2DgOydtO2VkSDsspjrpqzrkKAgcmVmXHJcbiAgICAgICAgaW5kZXg6IG51bWJlciwgLy8g7IKs7Jqp65CgIHN0cmluZyBvYmog7J24642x7IqkXHJcbiAgICApID0+IHtcclxuICAgICAgICBpZiAocmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hhckluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgIHJlZi5jdXJyZW50LmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHR5cGluZ0ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlZi5jdXJyZW50LmlubmVySFRNTCA9IHJlZi5jdXJyZW50LmlubmVySFRNTCArIHN0cmluZ09ianNbaW5kZXhdLnN0cmluZ1tjaGFySW5kZXgrK107XHJcbiAgICAgICAgICAgICAgICB9LCB0aW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHR5cGluZ0ludGVydmFsKTtcclxuICAgICAgICAgICAgICAgIH0sIHN0cmluZ09ianNbaW5kZXhdLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIH0sIHN0cmluZ09ianNbaW5kZXhdLnN0YXJ0KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIO2DgOydtO2VkSDsspjrpqzqsIAg7J2066Oo7Ja07KeA64qUIOyVoeyFmCAo66y47J6lIO2VmOuCmOyUqSlcclxuICAgIGNvbnN0IHNldFR5cGluZ1N0cmluZ0FjdGlvbjIgPSAoXHJcbiAgICAgICAgcmVmOiBSZWFjdC5NdXRhYmxlUmVmT2JqZWN0PEhUTUxTcGFuRWxlbWVudD4sIC8vIO2DgOydtO2VkSDsspjrpqzrkKAgcmVmXHJcbiAgICAgICAgaW5kZXg6IG51bWJlciwgLy8g7IKs7Jqp65CgIHN0cmluZyBvYmog7J24642x7IqkXHJcbiAgICApID0+IHtcclxuICAgICAgICBpZiAocmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWYuY3VycmVudC5pbm5lckhUTUwgPSBzdHJpbmdPYmpzW2luZGV4XS5zdHJpbmc7XHJcbiAgICAgICAgICAgIH0sIHN0cmluZ09ianNbaW5kZXhdLnN0YXJ0KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNldFR5cGluZ0N1cnNvckFjdGlvbiA9IChcclxuICAgICAgICByZWY6IFJlYWN0Lk11dGFibGVSZWZPYmplY3Q8SFRNTFNwYW5FbGVtZW50PiwgLy8g7YOA7J207ZWRIOyymOumrOuQoCByZWZcclxuICAgICAgICBzdGFydDogbnVtYmVyLCAvLyDslaHshZgg7Iuc7J6RIOyLnOqwhFxyXG4gICAgICAgIGxlbmd0aDogbnVtYmVyLCAvLyDslaHshZgg6ri47J20XHJcbiAgICApID0+IHtcclxuICAgICAgICBpZiAocmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWYuY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XHJcbiAgICAgICAgICAgIH0sIHN0YXJ0KTtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgfSwgbGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lciByZWY9e2NvbnRhaW5lclJlZn0+XHJcbiAgICAgICAgICAgIDxNYWluU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxUaXRsZURpdj5cclxuICAgICAgICAgICAgICAgICAgICA8TWFpblRpdGxlPntzdHJpbmdPYmpzWzBdLnN0cmluZ308L01haW5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8TWFpblRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sb3JTcGFuIGNvbG9yPVwiI2ZmZjEwMFwiIHJlZj17dHlwaW5nU3RyaW5nUmVmMX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gcmVmPXt0eXBpbmdTdHJpbmdSZWYyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWFpblRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZUN1cnNvciByZWY9e3R5cGluZ0N1cnNvcjF9IC8+XHJcbiAgICAgICAgICAgICAgICA8L1RpdGxlRGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxUaXRsZURpdj5cclxuICAgICAgICAgICAgICAgICAgICA8TWFpblRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sb3JTcGFuIGNvbG9yPVwiIzIyOTMwMFwiIHJlZj17dHlwaW5nU3RyaW5nUmVmM30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gcmVmPXt0eXBpbmdTdHJpbmdSZWY0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWFpblRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZUN1cnNvciByZWY9e3R5cGluZ0N1cnNvcjJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L1RpdGxlRGl2PlxyXG4gICAgICAgICAgICAgICAgPFRpdGxlRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNYWluVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2xvclNwYW4gY29sb3I9XCIjMDA2YTdjXCIgcmVmPXt0eXBpbmdTdHJpbmdSZWY1fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiByZWY9e3R5cGluZ1N0cmluZ1JlZjZ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NYWluVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlQ3Vyc29yIHJlZj17dHlwaW5nQ3Vyc29yM30gLz5cclxuICAgICAgICAgICAgICAgIDwvVGl0bGVEaXY+XHJcbiAgICAgICAgICAgICAgICA8VGl0bGVEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1haW5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbG9yU3BhbiBjb2xvcj1cIiM2ODAwOGFcIiByZWY9e3R5cGluZ1N0cmluZ1JlZjd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHJlZj17dHlwaW5nU3RyaW5nUmVmOH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L01haW5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8VGl0bGVDdXJzb3IgcmVmPXt0eXBpbmdDdXJzb3I0fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9UaXRsZURpdj5cclxuICAgICAgICAgICAgPC9NYWluU2VjdGlvbj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbml0O1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xyXG5cclxuY29uc3QgSW50cm9Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1NnB4KTtcclxuICAgIHBhZGRpbmc6IDI4cHggMjJweDtcclxuYDtcclxuXHJcbmludGVyZmFjZSBJQ29udGVudHNTZWN0aW9uIHtcclxuICAgIGhlaWdodD86IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgQ29udGVudHNTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgN2ZyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjJweDtcclxuXHJcbiAgICBoZWlnaHQ6ICR7KHByb3BzOiBJQ29udGVudHNTZWN0aW9uKSA9PiBwcm9wcy5oZWlnaHR9cHg7XHJcbmA7XHJcblxyXG5jb25zdCBDb250ZW50c1RpdGxlID0gc3R5bGVkLnNwYW5gXHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiBtaW4oY2FsYygwLjhlbSArIDAuOHZ3KSwgMS4xZW0pO1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuYDtcclxuXHJcbmNvbnN0IENvbnRlbnRzRGVzY3JpcHRpb24gPSBzdHlsZWQuc3BhbmBcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IG1pbihjYWxjKDFlbSArIDF2dyksIDEuOGVtKTtcclxuYDtcclxuXHJcbmludGVyZmFjZSBJSW50cm8ge1xyXG4gICAgY29tcG9uZW50Tm86IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgSW50cm86IFJlYWN0LkZDPElJbnRybz4gPSAoeyBjb21wb25lbnRObyB9KTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgLy8gc3RhdGVcclxuICAgIGNvbnN0IFthZGRTZWN0aW9ucywgc2V0QWRkU2VjdGlvbnNdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyW10+KFtdKTtcclxuICAgIGNvbnN0IFthZGRTZWN0aW9uc1RpbWVvdXQsIHNldEFkZFNlY3Rpb25zVGltZW91dF0gPSBSZWFjdC51c2VTdGF0ZTxOb2RlSlMuVGltZW91dD4oKTtcclxuXHJcbiAgICAvLyByZWZcclxuICAgIGNvbnN0IGludHJvQ29udGFpbmVyUmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG4gICAgY29uc3QgY29udGVudHNTZWN0aW9uUmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG5cclxuICAgIC8vIHZhcmlhYmxlXHJcbiAgICBjb25zdCBjb250ZW50c0FycmF5ID0gW1xyXG4gICAgICAgIHsgdGl0bGU6ICfsnbTrpoQnLCBkZXNjcmlwdGlvbjogJ+q5gOyEseywrCcgfSxcclxuICAgICAgICB7IHRpdGxlOiAn7IOd64WE7JuU7J28JywgZGVzY3JpcHRpb246ICc5NC4xMi4wOScgfSxcclxuICAgICAgICB7IHRpdGxlOiAn7J2066mU7J28JywgZGVzY3JpcHRpb246ICd0amRja3NkbDAwQG5hdmVyLmNvbScgfSxcclxuICAgICAgICB7IHRpdGxlOiAn7Jew65297LKYJywgZGVzY3JpcHRpb246ICcwMTAtMzM2MS0zNjMzJyB9LFxyXG4gICAgICAgIHsgdGl0bGU6ICftlZnqtZAnLCBkZXNjcmlwdGlvbjogJ+2VnOyWkeuMgCBFUklDQScgfSxcclxuICAgICAgICB7IHRpdGxlOiAn7KO87KCE6rO1JywgZGVzY3JpcHRpb246ICfsnZHsmqnsiJjtlZknIH0sXHJcbiAgICAgICAgeyB0aXRsZTogJ+u2gOyghOqztScsIGRlc2NyaXB0aW9uOiAn7Lu07ZOo7YSw6rO17ZWZJyB9LFxyXG4gICAgICAgIHsgdGl0bGU6ICfqsr3roKUnLCBkZXNjcmlwdGlvbjogJzHrhYQgM+qwnOyblCcgfSxcclxuICAgICAgICB7IHRpdGxlOiAn6riw7Iig67aE7JW8JywgZGVzY3JpcHRpb246ICdGRS9CRSDsm7kg6rCc67CcJyB9LFxyXG4gICAgXTtcclxuXHJcbiAgICAvLyB1c2VFZmZlY3RcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGdldEFkZFNlY3Rpb25zKTtcclxuICAgICAgICBnZXRBZGRTZWN0aW9ucygpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZ2V0QWRkU2VjdGlvbnMpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLy8gbm9ybWFsXHJcbiAgICAvLyBjb250ZW50c+ulvCDsoJzsmbjtlZwg67aA6rCAIOuEiOu5hCDqtaztlZjquLBcclxuICAgIGNvbnN0IGdldEFkZFNlY3Rpb25zID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIHRyYW5zaXRpb27snLzroZwg7J247ZW0IGhlaWdodOqwgCAx7LSIIOuSpOyXkCDsmKzrsJTrpbgg64aS7J2066W8IOuwlOudvOuztOuvgOuhnCB0aW1lb3V0IOq1rO2YhFxyXG4gICAgICAgIGNsZWFyVGltZW91dChhZGRTZWN0aW9uc1RpbWVvdXQpO1xyXG5cclxuICAgICAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsQ291bnQgPSBpbnRyb0NvbnRhaW5lclJlZi5jdXJyZW50LmNsaWVudEhlaWdodCAvIChjb250ZW50c1NlY3Rpb25SZWYuY3VycmVudC5jbGllbnRIZWlnaHQgKyAzMCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhZGRTZWN0aW9ucyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvdGFsQ291bnQgLSBjb250ZW50c0FycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBhZGRTZWN0aW9ucy5wdXNoKGkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZXRBZGRTZWN0aW9ucyhhZGRTZWN0aW9ucyk7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcblxyXG4gICAgICAgIHNldEFkZFNlY3Rpb25zVGltZW91dCh0aW1lb3V0KTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QmFzZSBjb21wb25lbnRObz17Y29tcG9uZW50Tm99PlxyXG4gICAgICAgICAgICA8SW50cm9Db250YWluZXIgcmVmPXtpbnRyb0NvbnRhaW5lclJlZn0+XHJcbiAgICAgICAgICAgICAgICB7Y29udGVudHNBcnJheS5tYXAoKGNvbnRlbnRzLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRzU2VjdGlvbiBrZXk9e2luZGV4fSByZWY9e2NvbnRlbnRzU2VjdGlvblJlZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRzVGl0bGU+e2NvbnRlbnRzLnRpdGxlfTwvQ29udGVudHNUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGVudHNEZXNjcmlwdGlvbj57Y29udGVudHMuZGVzY3JpcHRpb259PC9Db250ZW50c0Rlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50c1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50c1NlY3Rpb24ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRzVGl0bGU+e2NvbnRlbnRzLnRpdGxlfTwvQ29udGVudHNUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGVudHNEZXNjcmlwdGlvbj57Y29udGVudHMuZGVzY3JpcHRpb259PC9Db250ZW50c0Rlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50c1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcblxyXG4gICAgICAgICAgICAgICAge2FkZFNlY3Rpb25zLm1hcCgoYWRkU2VjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50c1NlY3Rpb24ga2V5PXthZGRTZWN0aW9ufSBoZWlnaHQ9e2NvbnRlbnRzU2VjdGlvblJlZi5jdXJyZW50LmNsaWVudEhlaWdodCAtIDh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRzVGl0bGUgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50c0Rlc2NyaXB0aW9uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGVudHNTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9JbnRyb0NvbnRhaW5lcj5cclxuICAgICAgICA8L0Jhc2U+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW50cm87XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBNb3JlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG5gO1xyXG5cclxuY29uc3QgSGVhZGVyU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gICAgbWFyZ2luOiAyNHB4IDA7XHJcbiAgICBwYWRkaW5nOiAwIDI0cHg7XHJcbmA7XHJcblxyXG5jb25zdCBVcmxTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgcGFkZGluZzogMCAyNHB4O1xyXG5gO1xyXG5cclxuY29uc3QgRm9vdGVyU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gICAgbWFyZ2luOiA0OHB4IDA7XHJcbiAgICBwYWRkaW5nOiAwIDI0cHg7XHJcbmA7XHJcblxyXG5jb25zdCBVcmxNYWluRGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBtYXJnaW46IDAgMjRweCAyNHB4IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgVXJsU3ViRGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IEZvb3Rlck1haW5EaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIG1hcmdpbjogMCAyNHB4IDI0cHggMDtcclxuYDtcclxuXHJcbmNvbnN0IEZvb3RlclN1YkRpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBIZWFkZXJUZXh0ID0gc3R5bGVkLnNwYW5gXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IG1pbigxLjllbSwgMS4zZW0gKyAxdncpO1xyXG5gO1xyXG5cclxuY29uc3QgVXJsVGV4dCA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogbWluKDEuMmVtLCAxZW0gKyAwLjd2dyk7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG5gO1xyXG5cclxuY29uc3QgRm9vdGVyVGV4dCA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiBtaW4oMS41ZW0sIDEuMWVtICsgMC45dncpO1xyXG5gO1xyXG5cclxuY29uc3QgVXJsSW1hZ2UgPSBzdHlsZWQuaW1nYFxyXG4gICAgd2lkdGg6IG1pbig4ZW0sIDVlbSArIDYuNHZ3KTtcclxuYDtcclxuXHJcbmNvbnN0IExvZ29JbWFnZSA9IHN0eWxlZC5pbWdgXHJcbiAgICB3aWR0aDogbWluKDhlbSwgNWVtICsgNi40dncpO1xyXG4gICAgbWFyZ2luOiAxMnB4IDA7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSU1vcmUge1xyXG4gICAgY29tcG9uZW50Tm86IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgTW9yZTogUmVhY3QuRkM8SU1vcmU+ID0gKHsgY29tcG9uZW50Tm8gfSk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIC8vIG9uQ2xpY2tcclxuICAgIGNvbnN0IG9uQ2xpY2tVcmxNYWluRGl2ID0gKHVybDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgd2luZG93Lm9wZW4odXJsKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QmFzZSBjb21wb25lbnRObz17Y29tcG9uZW50Tm99PlxyXG4gICAgICAgICAgICA8TW9yZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXJTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXJUZXh0Puq5gOyEseywrOydmCBQb3J0Zm9saW88L0hlYWRlclRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlclRleHQ+VmVyc2lvbiAxLjAuMDwvSGVhZGVyVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyVGV4dD4yMDIxLjA4LjExPC9IZWFkZXJUZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkZXJTZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDxVcmxTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxVcmxNYWluRGl2IG9uQ2xpY2s9eygpID0+IG9uQ2xpY2tVcmxNYWluRGl2KCdodHRwczovL2dpdGh1Yi5jb20va3NjY21wJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VXJsU3ViRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFVybEltYWdlIHNyYz1cIi9pbWFnZS9naXRodWIuUE5HXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxVcmxUZXh0Pmh0dHBzOi8vZ2l0aHViLmNvbS9rc2NjbXA8L1VybFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVXJsU3ViRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVXJsTWFpbkRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8VXJsTWFpbkRpdiBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrVXJsTWFpbkRpdignaHR0cHM6Ly9qZm9yai50aXN0b3J5LmNvbScpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFVybFN1YkRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxVcmxJbWFnZSBzcmM9XCIvaW1hZ2UvdGlzdG9yeS5QTkdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFVybFRleHQ+aHR0cHM6Ly9qZm9yai50aXN0b3J5LmNvbTwvVXJsVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9VcmxTdWJEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9VcmxNYWluRGl2PlxyXG4gICAgICAgICAgICAgICAgPC9VcmxTZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDxGb290ZXJTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb290ZXJNYWluRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9vdGVyU3ViRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvb3RlclRleHQ+RGVzaWduZWQgQnkg6rmA7ISx7LCsPC9Gb290ZXJUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvZ29JbWFnZSBzcmM9XCIvaW1hZ2UvU0NMb2dvMi5zdmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvb3RlclN1YkRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvb3Rlck1haW5EaXY+XHJcbiAgICAgICAgICAgICAgICA8L0Zvb3RlclNlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvTW9yZUNvbnRhaW5lcj5cclxuICAgICAgICA8L0Jhc2U+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9yZTtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xyXG5pbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGluZGV4U3RhdGUgfSBmcm9tICcuLi9tb2R1bGVzL2luZGV4UmVkdWNlcic7XHJcblxyXG5jb25zdCBQcm9qZWN0c0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDEycHggMTJweCAxMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbjogNTBweCAxOHB4IDY1cHggMThweDtcclxuICAgIGJveC1zaGFkb3c6IDJweCAwIDRweCAjYzhjOGM4IGluc2V0LCAtMnB4IC00cHggNHB4ICNjOGM4YzggaW5zZXQ7XHJcbmA7XHJcblxyXG5jb25zdCBJbWFnZURpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBtYXJnaW46IDE4cHggMjVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IFRpdGxlU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0b3A6IC00MHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4IDEycHggMCAwO1xyXG4gICAgcGFkZGluZzogMCAxMnB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDRweCA0cHggI2M4YzhjOCBpbnNldCwgLTJweCAwIDRweCAjYzhjOGM4IGluc2V0O1xyXG5gO1xyXG5cclxuY29uc3QgQ29udGVudHNTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHtcclxuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IFRleHREZXNjcmlwdGlvbkRpdiA9IHN0eWxlZC5kaXZgYDtcclxuXHJcbmNvbnN0IFBpY3R1cmVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDEwMTtcclxuICAgIHRvcDogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IFB1enpsZVNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxuYDtcclxuXHJcbmNvbnN0IFB1enpsZURpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbjogNDBweCAwIDEwMHB4IDA7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTZkZWcpO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSVB1enpsZUxlZnQge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IFB1enpsZUxlZnQgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHM6IElQdXp6bGVMZWZ0KSA9PiBwcm9wcy5iYWNrZ3JvdW5kQ29sb3J9O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICB0b3A6IDEzcHg7XHJcbiAgICBsZWZ0OiAtMTNweDtcclxuICAgIGJveC1zaGFkb3c6IDNweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBsZWZ0OiAtMTVweDtcclxuICAgICAgICB0b3A6IDE1cHg7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBQdXp6bGVSaWdodCA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICB0b3A6IDEzcHg7XHJcbiAgICByaWdodDogLTEzcHg7XHJcbiAgICBib3gtc2hhZG93OiAzcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgdG9wOiAxNXB4O1xyXG4gICAgICAgIHJpZ2h0OiAtMTVweDtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IFB1enpsZVRvcCA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICB0b3A6IC0xM3B4O1xyXG4gICAgbGVmdDogNDNweDtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICB0b3A6IC0xNXB4O1xyXG4gICAgICAgIGxlZnQ6IDY1cHg7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSUNhcmVlclRpdGxlIHtcclxuICAgIGNvbG9yPzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBDYXJlZXJUaXRsZSA9IHN0eWxlZC5zcGFuYFxyXG4gICAgY29sb3I6ICR7KHByb3BzOiBJQ2FyZWVyVGl0bGUpID0+IHByb3BzLmNvbG9yfTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IG1pbigxLjNlbSwgMC44ZW0gKyAxLjJ2dyk7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSVRleHREZXNjcmlwdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxuICAgIHR5cGU/OiBzdHJpbmc7XHJcbiAgICBzcmM/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IFRleHREZXNjcmlwdGlvbiA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDE4cHggMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IG1pbigxLjFlbSwgMC43ZW0gKyAxLjF2dyk7XHJcbiAgICBwYWRkaW5nOiA4cHggMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcclxuXHJcbiAgICAkeyhwcm9wczogSVRleHREZXNjcmlwdGlvbikgPT4ge1xyXG4gICAgICAgIGlmIChwcm9wcy50eXBlID09PSAnY2FtZXJhJykge1xyXG4gICAgICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ1xcZjAzMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke3Byb3BzLmJhY2tncm91bmRDb2xvcn07XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiB1cmwoJHtwcm9wcy5zcmN9KSwgcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYDtcclxuICAgICAgICB9IGVsc2UgaWYgKHByb3BzLnR5cGUgPT09ICdjYWxlbmRhcicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdcXGYyNzInO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtwcm9wcy5iYWNrZ3JvdW5kQ29sb3J9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocHJvcHMudHlwZSA9PT0gJ3Bvc2l0aW9uJykge1xyXG4gICAgICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ1xcZjJiYic7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke3Byb3BzLmJhY2tncm91bmRDb2xvcn07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wcy50eXBlID09PSAnbGluaycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdcXGYwYzEnO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtwcm9wcy5iYWNrZ3JvdW5kQ29sb3J9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocHJvcHMudHlwZSA9PT0gJ2NvZGUnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjZweDtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnXFxmMTIxJztcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7cHJvcHMuYmFja2dyb3VuZENvbG9yfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ1xcZjAwNSc7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke3Byb3BzLmJhY2tncm91bmRDb2xvcn07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgfVxyXG4gICAgfX1cclxuYDtcclxuXHJcbmNvbnN0IFB1enpsZVRpdGxlID0gc3R5bGVkLnNwYW5gXHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg2cHgpO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNy41cHgpO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ2FyZWVySW1hZ2UgPSBzdHlsZWQuaW1nYFxyXG4gICAgd2lkdGg6IG1pbigyMGVtLCBjYWxjKDE1ZW0gKyAxMHZ3KSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbmA7XHJcblxyXG5jb25zdCBQaWN0dXJlSW1hZ2UgPSBzdHlsZWQuaW1nYFxyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAyOHB4KTtcclxuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDI4cHgpO1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElQcm9qZWN0cyB7XHJcbiAgICBjb21wb25lbnRObzogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBQcm9qZWN0czogUmVhY3QuRkM8SVByb2plY3RzPiA9ICh7IGNvbXBvbmVudE5vIH0pOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICAvLyByZWR1eFxyXG4gICAgY29uc3QgYmFja2dyb3VuZENvbG9yQXJyYXkgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IGluZGV4U3RhdGUpID0+IHN0YXRlLmJhc2VSZWR1Y2VyLmJhY2tncm91bmRDb2xvckFycmF5KTtcclxuXHJcbiAgICAvLyBzdGF0ZVxyXG4gICAgY29uc3QgW3BpY3R1cmVJbWFnZSwgc2V0UGljdHVyZUltYWdlXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG4gICAgY29uc3QgW2N1cnJlbnRJbWFnZUluZGV4LCBzZXRDdXJyZW50SW1hZ2VJbmRleF0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXJbXT4oWzAsIDAsIDAsIDBdKTtcclxuXHJcbiAgICAvLyByZWZcclxuICAgIGNvbnN0IHBpY3R1cmVDb250YWluZXJSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KCk7XHJcblxyXG4gICAgLy8gdmFyaWFibGVcclxuICAgIGNvbnN0IGltYWdlcyA9IFtcclxuICAgICAgICBbJy9pbWFnZS9zc2FmeTEuUE5HJ10sXHJcbiAgICAgICAgWycvaW1hZ2UvZ3JvdWJ5XzAuUE5HJywgJy9pbWFnZS9ncm91YnlfMS5QTkcnLCAnL2ltYWdlL2dyb3VieV8yLlBORycsICcvaW1hZ2UvZ3JvdWJ5XzMuUE5HJ10sXHJcbiAgICAgICAgWycvaW1hZ2Uvc3NhZnkxLlBORyddLFxyXG4gICAgICAgIFsnL2ltYWdlL21veW9fMC5QTkcnLCAnL2ltYWdlL21veW9fMS5QTkcnLCAnL2ltYWdlL21veW9fMi5QTkcnLCAnL2ltYWdlL21veW9fMy5QTkcnXSxcclxuICAgIF07XHJcblxyXG4gICAgLy8gb25DbGlja1xyXG4gICAgY29uc3Qgb25DbGlja0ltYWdlRGl2ID0gKGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGVtcEN1cnJlbnRJbWFnZUluZGV4ID0gY3VycmVudEltYWdlSW5kZXguc2xpY2UoKTtcclxuICAgICAgICB0ZW1wQ3VycmVudEltYWdlSW5kZXhbaW5kZXhdID0gKHRlbXBDdXJyZW50SW1hZ2VJbmRleFtpbmRleF0gKyAxKSAlIGltYWdlc1tpbmRleF0ubGVuZ3RoO1xyXG5cclxuICAgICAgICBzZXRDdXJyZW50SW1hZ2VJbmRleCh0ZW1wQ3VycmVudEltYWdlSW5kZXgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvbkNsaWNrQ2FtZXJhID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTFNwYW5FbGVtZW50LCBNb3VzZUV2ZW50PiwgaW1nOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBpZiAocGljdHVyZUNvbnRhaW5lclJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICBzZXRQaWN0dXJlSW1hZ2UoaW1nKTtcclxuICAgICAgICAgICAgcGljdHVyZUNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvbkNsaWNrUGljdHVyZUNvbnRhaW5lciA9ICgpID0+IHtcclxuICAgICAgICBpZiAocGljdHVyZUNvbnRhaW5lclJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHNldFBpY3R1cmVJbWFnZSgnJyk7XHJcbiAgICAgICAgICAgIHBpY3R1cmVDb250YWluZXJSZWYuY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QmFzZSBjb21wb25lbnRObz17Y29tcG9uZW50Tm99PlxyXG4gICAgICAgICAgICAgICAgPFB1enpsZVNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPFB1enpsZURpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFB1enpsZUxlZnQgYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQdXp6bGVSaWdodCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHV6emxlVG9wIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQdXp6bGVUaXRsZT7tlITroZzsoJ3tirg8L1B1enpsZVRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUHV6emxlRGl2PlxyXG4gICAgICAgICAgICAgICAgPC9QdXp6bGVTZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDxQcm9qZWN0c0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8VGl0bGVTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZWVyVGl0bGU+UG9ydGZvbGlvPC9DYXJlZXJUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L1RpdGxlU2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRzU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlRGl2IG9uQ2xpY2s9eygpID0+IG9uQ2xpY2tJbWFnZURpdigwKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZWVySW1hZ2Ugc3JjPXtpbWFnZXNbMF1bY3VycmVudEltYWdlSW5kZXhbMF1dfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ltYWdlRGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbkRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119IHR5cGU9XCJjYWxlbmRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIxLjA3IH4gMjEuMDhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0gdHlwZT1cImNvZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGRSDihpIgTmV4dCAvIFR5cGVTY3JpcHQgLyBSZWR1eCAvIEhvb2tzIC8gU3R5bGVkQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOybuSDsgqzsnbTtirjsl5DshJwg64KY66eM7J2YIO2PrO2KuO2PtOumrOyYpOulvCDriITqtazrgpgg67O8IOyImCDsnojrj4TroZ0g7ZWY6riwIOychO2VtCDqsJzrsJxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg6rO17LGF7J2EIOyjvOyalCDrlJTsnpDsnbjsnLzroZwg7IK87JWEIOyYpO2UhOudvOyduOyXkOyEnCDtj6ztirjtj7TrpqzsmKTrpbwg67O064qUIOuTr+2VnCBVSS9VWOulvCDqsJzrsJxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0gdHlwZT1cImxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb21haW4g4oaSIDxhIGhyZWY9XCJsb2NhbGhvc3Q6ODA4OFwiPmxvY2FsaG9zdDo4MDg4PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfSB0eXBlPVwibGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdpdCDihpJ7JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20va3NjY21wL3BvcnRmb2xpb1wiPmh0dHBzOi8vZ2l0aHViLmNvbS9rc2NjbXAvcG9ydGZvbGlvPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGVudHNTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9Qcm9qZWN0c0NvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgICA8UHJvamVjdHNDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmVlclRpdGxlIGNvbG9yPVwiI0U2OTUxQVwiPkdyb3VieTwvQ2FyZWVyVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UaXRsZVNlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxDb250ZW50c1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZURpdiBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrSW1hZ2VEaXYoMSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmVlckltYWdlIHNyYz17aW1hZ2VzWzFdW2N1cnJlbnRJbWFnZUluZGV4WzFdXX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbWFnZURpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb25EaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfSB0eXBlPVwiY2FsZW5kYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMC4xMCB+IDIxLjAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119IHR5cGU9XCJjb2RlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRkUg4oaSIE5leHQgLyBUeXBlU2NyaXB0IC8gUmVkdXggLyBIb29rcyAvIFN0eWxlZENvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfSB0eXBlPVwiY29kZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJFIOKGkiBTcHJpbmcgLyBNeWJhdGlzIC8gTXlTUUxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmV4dOyCrOyaqSDqsr3tl5jqs7wgQ1NT7Jet65+J7J2EIOuGkuydtOq4sCDsnITtlbQg7KeE7ZaJ7ZWcIOqwnOyduCDtlITroZzsoJ3tirhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg67Cp66y47ZaI7JeI642YIOyepeyGjOyXkCDrjIDtlZwg7Jqw66as66eM7J2YIO2PieqwgOulvCDtlZjsl6wg7J6s67Cp66y47J2EIOychO2VnCDsnZjqsqzsl5Ag64+E7JuA7J20IOuQmOqzoOyekCDqsJzrsJxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg6re466O5LCDsiqTtjJ/snYQg7ISg7YOd7ZWcIOuSpCDsnbjsiqTtg4Dqt7jrnqjsspjrn7wg7IKs7KeEIOqzteycoCDrsI8g64yT6riAIOq4sOuKpSDqsJzrsJxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg67Cp66y47ZaI642YIOyepeyGjOydmCDtj4nqsIDsmpTshozsl5Ag65Sw6528IOygkOyImOulvCDrtoDsl6ztlZjsl6wg7Y+J6rCA7ZWgIOyImCDsnojqs6Ag7KCE7LK0IO2PieygkOuPhCDtmZXsnbjtlaAg7IiYXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg7J6I64+E66GdIOqwnOuwnFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDshKTqs4Qg64uo6rOE7JeQ7IScIOuKkOq7tOyhjOuNmCDrs7XsnqHtlajsnbQg7IKs7Jqp7ZWgIOuVjCDqt7jrjIDroZwg64qQ6ru07KeEIOyVhOyJrOybgOydtCDrgqjripQg7ZSE66Gc7KCd7Yq4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119IHR5cGU9XCJsaW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2l0IOKGkiA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2tzY2NtcC9Hcm91YnlcIj5odHRwczovL2dpdGh1Yi5jb20va3NjY21wL0dyb3VieTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbkRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnRzU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvUHJvamVjdHNDb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgPFByb2plY3RzQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZVNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJlZXJUaXRsZT5TQ1ZDPC9DYXJlZXJUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L1RpdGxlU2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRzU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlRGl2IG9uQ2xpY2s9eygpID0+IG9uQ2xpY2tJbWFnZURpdigyKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZWVySW1hZ2Ugc3JjPXtpbWFnZXNbMl1bY3VycmVudEltYWdlSW5kZXhbMl1dfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ltYWdlRGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbkRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119IHR5cGU9XCJjYWxlbmRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIwLjA4IH4gMjAuMDlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0gdHlwZT1cImNvZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGRSDihpIgUmVhY3QgLyBUeXBlU2NyaXB0IC8gUmVkdXggLyBSZWR1eC1TYWdhIC8gSG9va3MgLyBTdHlsZWRDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0gdHlwZT1cImNvZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCRSDihpIgU3ByaW5nIC8gTXliYXRpcyAvIE15U1FMIC8gTm9kZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUeXBlU2NyaXB07JmAIFJlZHV4LVNhZ2HsnZgg7IKs7JqpIOqyve2XmOydhCDrhpLsnbTquLAg7JyE7ZW0IOynhO2Wie2VnCDqsJzsnbgg7ZSE66Gc7KCd7Yq4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOy1nOq3vCDruYTrjIDrqbTsnZgg7KSR7JqU7ISx7J20IOymneqwgOuQqOyXkCDrlLDrnbwg7Jet65+JIO2ZleuztOulvCDsnITtlbQg6rSA66CoIOq4sOuKpSDqsJzrsJxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg7J6F7J6l7ZWY6rOg7J6QIO2VmOuKlCDrsKnsnYQg6rKA7IOJ7ZWgIOyImCDsnojqs6Ag7KCV7ZW07KeEIOyduOybkOunjO2BvOydmCDsnbjsm5Drp4wg7LC47JesIOqwgOuKpe2VmOuPhOuhnSDqsJzrsJxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUlRDUGVlckNvbm5lY3Rpb24gKyBTb2NrZXRJT+ulvCDsgqzsmqntlZjsl6wg7Iuk7Iuc6rCEIO2ZlOyDgSDtmozsnZgg67CPIOyxhO2MhSDqsJzrsJxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0gdHlwZT1cImxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHaXQg4oaSeycgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2tzY2NtcC92aWRlb19jaGF0X3R5cGVzY3JpcHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2tzY2NtcC92aWRlb19jaGF0X3R5cGVzY3JpcHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb25EaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50c1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L1Byb2plY3RzQ29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxQcm9qZWN0c0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8VGl0bGVTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZWVyVGl0bGUgY29sb3I9XCIjNGFjOGQ5XCI+TW95bzwvQ2FyZWVyVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UaXRsZVNlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxDb250ZW50c1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZURpdiBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrSW1hZ2VEaXYoMyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmVlckltYWdlIHNyYz17aW1hZ2VzWzNdW2N1cnJlbnRJbWFnZUluZGV4WzNdXX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbWFnZURpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb25EaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfSB0eXBlPVwiY2FsZW5kYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMC4wMSB+IDIwLjAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119IHR5cGU9XCJjb2RlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRkUg4oaSIFJlYWN0IC8gUmVkdXggLyBIb29rcyAvIFN0eWxlZENvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfSB0eXBlPVwiY29kZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJFIOKGkiBTcHJpbmdCb290IC8gTXliYXRpcyAvIE15U1FMIC8gRmlyZUJhc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU1NBRlnsl5DshJwg7KeE7ZaJ7ZWcIO2MgCDtlITroZzsoJ3tirggKDXsnbgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOyXrO2WiSDrj5ntlonsnpDrpbwg6rCE7Y647ZWY6rKMIOunpOy5re2VmOuKlCDqsoPsl5Ag64+E7JuA7J20IOuQmOqzoOyekCDqsJzrsJxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QgKyBGaXJlQmFzZeulvCDsnbTsmqntlZjsl6wgRE3quLDriqUg6rCc67CcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOyekOyLoOydmCDsnITsuZjsl5Ag6rCE7Y647ZWY6rKMIOuCmeyEnCg/Ke2VoCDsiJgg7J6I64qUIO2PrOyKpO2KuOuntSDquLDriqUg6rCc67CcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOyCrOyaqeuQmOuKlCBUb29s7J2YIOyImeugqOuPhCDrtoDsobHsnLzroZwg66qp7ZGc7ZWcIOq4sOuKpeuTpOydhCDrqqjrkZAg6rCc67Cc7ZWY7KeAIOuqu+2VnOqyg+yXkCDrjIDtlbQg7JWE7Ims7JuA7J20XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg64Ko64qUIO2UhOuhnOygne2KuFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfSB0eXBlPVwibGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdpdCDihpIgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9rc2NjbXAvbW95b1wiPmh0dHBzOi8vZ2l0aHViLmNvbS9rc2NjbXAvbW95bzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbkRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnRzU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvUHJvamVjdHNDb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvQmFzZT5cclxuXHJcbiAgICAgICAgICAgIDxQaWN0dXJlQ29udGFpbmVyIHJlZj17cGljdHVyZUNvbnRhaW5lclJlZn0gb25DbGljaz17b25DbGlja1BpY3R1cmVDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPFBpY3R1cmVJbWFnZSBzcmM9e3BpY3R1cmVJbWFnZX0gLz5cclxuICAgICAgICAgICAgPC9QaWN0dXJlQ29udGFpbmVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgaW5kZXhTdGF0ZSB9IGZyb20gJy4uL21vZHVsZXMvaW5kZXhSZWR1Y2VyJztcclxuXHJcbmNvbnN0IFNraWxsc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgVGl0bGVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAyNHB4IDAgNTJweCAwO1xyXG5gO1xyXG5cclxuY29uc3QgVGl0bGVNYWluRGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDA7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSVRpdGxlU3ViRGl2IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBUaXRsZVN1YkRpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wczogSVRpdGxlU3ViRGl2KSA9PiBwcm9wcy5iYWNrZ3JvdW5kQ29sb3J9O1xyXG4gICAgdG9wOiAtMTJweDtcclxuICAgIGxlZnQ6IDEycHg7XHJcbiAgICBwYWRkaW5nOiAwIDRweDtcclxuYDtcclxuXHJcbmNvbnN0IENvbnRlbnRzQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3MHB4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDgwcHg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDg0MHB4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiA3MjBweDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBTa2lsbFNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgIHdpZHRoOiAyNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDU0cHg7XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZURpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBwYWRkaW5nOiA4cHggMDtcclxuYDtcclxuXHJcbmNvbnN0IEltYWdlRGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggNHB4IDRweCAjYzhjOGM4IGluc2V0LCAtMnB4IC00cHggNHB4ICNjOGM4YzggaW5zZXQ7XHJcbmA7XHJcblxyXG5jb25zdCBNYWluVGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IG1pbihjYWxjKDEuMmVtICsgMC41dncpLCAxLjhlbSk7XHJcbmA7XHJcblxyXG5jb25zdCBTdWJUaXRsZSA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogbWluKGNhbGMoMC45ZW0gKyAwLjV2dyksIDEuMWVtKTtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbmA7XHJcblxyXG5jb25zdCBTa2lsbFRpdGxlID0gc3R5bGVkLnNwYW5gXHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogbWluKDEuNGVtICsgMC40dncsIDEuNmVtKTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG5gO1xyXG5cclxuY29uc3QgU2tpbGxJbWFnZSA9IHN0eWxlZC5pbWdgYDtcclxuXHJcbmludGVyZmFjZSBJU2tpbGxzIHtcclxuICAgIGNvbXBvbmVudE5vOiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IFNraWxsczogUmVhY3QuRkM8SVNraWxscz4gPSAoeyBjb21wb25lbnRObyB9KTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgLy8gcmVkdXhcclxuICAgIGNvbnN0IGJhY2tncm91bmRDb2xvckFycmF5ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBpbmRleFN0YXRlKSA9PiBzdGF0ZS5iYXNlUmVkdWNlci5iYWNrZ3JvdW5kQ29sb3JBcnJheSk7XHJcblxyXG4gICAgLy8gdmFyaWFibGVcclxuICAgIGNvbnN0IHNraWxsc0FycmF5ID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdGRScsXHJcbiAgICAgICAgICAgIHNyYzogJy9pbWFnZS9mZS5QTkcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0Rldm9wcycsXHJcbiAgICAgICAgICAgIHNyYzogJy9pbWFnZS9kZXZvcHMuUE5HJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdEZXZlbG9wbWVudCcsXHJcbiAgICAgICAgICAgIHNyYzogJy9pbWFnZS9kZXZlbG9wbWVudC5QTkcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0JFJyxcclxuICAgICAgICAgICAgc3JjOiAnL2ltYWdlL2JlLlBORycsXHJcbiAgICAgICAgfSxcclxuICAgIF07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QmFzZSBjb21wb25lbnRObz17Y29tcG9uZW50Tm99PlxyXG4gICAgICAgICAgICA8U2tpbGxzQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPFRpdGxlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZVN1YkRpdiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdWJUaXRsZT7soJzrqqk8L1N1YlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGl0bGVTdWJEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlTWFpbkRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1haW5UaXRsZT7quLDsiKDsiqTtg53snbQg662Q6rCAIOyeiOyngC4uPzwvTWFpblRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGl0bGVNYWluRGl2PlxyXG4gICAgICAgICAgICAgICAgPC9UaXRsZUNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgICA8VGl0bGVDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlU3ViRGl2IGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN1YlRpdGxlPuuCtOyaqTwvU3ViVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UaXRsZVN1YkRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8VGl0bGVNYWluRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udGVudHNDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2tpbGxzQXJyYXkubWFwKChza2lsbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTa2lsbFNlY3Rpb24ga2V5PXtza2lsbC50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGl0bGVEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNraWxsVGl0bGU+e3NraWxsLnRpdGxlfTwvU2tpbGxUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGl0bGVEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNraWxsSW1hZ2Ugc3JjPXtza2lsbC5zcmN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ltYWdlRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NraWxsU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGVudHNDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UaXRsZU1haW5EaXY+XHJcbiAgICAgICAgICAgICAgICA8L1RpdGxlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L1NraWxsc0NvbnRhaW5lcj5cclxuICAgICAgICA8L0Jhc2U+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2tpbGxzO1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XHJcbmltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgaW5kZXhTdGF0ZSB9IGZyb20gJy4uL21vZHVsZXMvaW5kZXhSZWR1Y2VyJztcclxuXHJcbmNvbnN0IFdoeUl0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDI0cHggMCA1MnB4IDA7XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZU1haW5EaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgIHBhZGRpbmc6IDEycHggMDtcclxuYDtcclxuXHJcbmludGVyZmFjZSBJVGl0bGVTdWJEaXYge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IFRpdGxlU3ViRGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzOiBJVGl0bGVTdWJEaXYpID0+IHByb3BzLmJhY2tncm91bmRDb2xvcn07XHJcbiAgICB0b3A6IC0xMnB4O1xyXG4gICAgbGVmdDogMTJweDtcclxuICAgIHBhZGRpbmc6IDAgNHB4O1xyXG5gO1xyXG5cclxuY29uc3QgUUFDb250YWllciA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4NjBweCkge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBRdWVzdGlvblNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgIHBhZGRpbmc6IDAgMjBweCAwIDIwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBBbnN3ZXJTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICBwYWRkaW5nOiAwIDIwcHggMCAyMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgcXVlc3Rpb25OdW1iZXJLZXlmcmFtZSA9IGtleWZyYW1lc2BcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIDUwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBRdWVzdGlvbkRpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG1hcmdpbjogMjRweCAwO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJveC1zaGFkb3c6IDJweCA0cHggNHB4ICNjOGM4YzggaW5zZXQsIC0ycHggLTRweCA0cHggI2M4YzhjOCBpbnNldDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICAmID4gZGl2ID4gc3BhbjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiAke3F1ZXN0aW9uTnVtYmVyS2V5ZnJhbWV9O1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xyXG4gICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBRdWVzdGlvblN1YkRpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IEFuc3dlckRpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDI0OHB4ICsgMzB2aCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG1hcmdpbjogMjRweCAwO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDRweCA0cHggI2M4YzhjOCBpbnNldCwgLTJweCAtNHB4IDRweCAjYzhjOGM4IGluc2V0O1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDg2MHB4KSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgd2lkdGg6IG1pbihjYWxjKDE2ZW0gKyAxMnZ3KSwgMjZlbSk7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBNYWluVGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IG1pbihjYWxjKDEuMmVtICsgMC41dncpLCAxLjhlbSk7XHJcbmA7XHJcblxyXG5jb25zdCBTdWJUaXRsZSA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogbWluKGNhbGMoMC45ZW0gKyAwLjV2dyksIDEuMWVtKTtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSVF1ZXN0aW9uVGl0bGUge1xyXG4gICAgY29sb3I6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgUXVlc3Rpb25UaXRsZSA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogbWluKGNhbGMoMThweCArIDAuMnZ3KSwgMS40ZW0pO1xyXG4gICAgY29sb3I6ICR7KHByb3BzOiBJUXVlc3Rpb25UaXRsZSkgPT4gcHJvcHMuY29sb3J9O1xyXG5gO1xyXG5cclxuY29uc3QgQW5zd2VyVGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSVF1ZXN0aW9uTnVtYmVyIHtcclxuICAgIGlzQ2xpY2s6IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IFF1ZXN0aW9uTnVtYmVyID0gc3R5bGVkLnNwYW5gXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiBtaW4oY2FsYygyNHB4ICsgMC42dncpLCAyZW0pO1xyXG4gICAgY29sb3I6ICNmMTVlNWU7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG5cclxuICAgIGFuaW1hdGlvbi1uYW1lOiAkeyhwcm9wczogSVF1ZXN0aW9uTnVtYmVyKSA9PiAocHJvcHMuaXNDbGljayA/IHF1ZXN0aW9uTnVtYmVyS2V5ZnJhbWUgOiAnJyl9O1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElXaHlJdCB7XHJcbiAgICBjb21wb25lbnRObzogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBXaHlJdDogUmVhY3QuRkM8SVdoeUl0PiA9ICh7IGNvbXBvbmVudE5vIH0pOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICAvLyByZWR1eFxyXG4gICAgY29uc3QgYmFja2dyb3VuZENvbG9yQXJyYXkgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IGluZGV4U3RhdGUpID0+IHN0YXRlLmJhc2VSZWR1Y2VyLmJhY2tncm91bmRDb2xvckFycmF5KTtcclxuXHJcbiAgICAvLyBzdGF0ZVxyXG4gICAgY29uc3QgW3F1ZXN0aW9uSW5kZXgsIHNldFF1ZXN0aW9uSW5kZXhdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPigtMSk7XHJcbiAgICBjb25zdCBbdHlwaW5nVGltZXIsIHNldFR5cGluZ1RpbWVyXSA9IFJlYWN0LnVzZVN0YXRlPE5vZGVKUy5UaW1lcj4oKTtcclxuXHJcbiAgICAvLyByZWZcclxuICAgIGNvbnN0IGFuc3dlclRpdGxlUmVmID0gUmVhY3QudXNlUmVmPEhUTUxTcGFuRWxlbWVudD4oKTtcclxuICAgIGNvbnN0IGFuc3dlckRpdlJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuXHJcbiAgICAvLyB2YXJpYWJsZVxyXG4gICAgY29uc3QgcW5hQXJyYXkgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBxdWVzdGlvbjogJ0lU7JeQIOq0gOyLrOqwgOynhCDsi5zquLAnLFxyXG4gICAgICAgICAgICBhbnN3ZXI6ICdJVOyXkCDqtIDsi6zqsIDsp4Qg7Iuc6riwJyxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uOiAnSVTsl5Ag6rSA7Ius7J2EIOqwgOyngOqyjCDrkJwg6rOE6riwJyxcclxuICAgICAgICAgICAgYW5zd2VyOiBgSVTsl5Ag6rSA7Ius7J2EIOqwgOyngOqyjCDrkJwg6rOE6riwXFxuXFxu44WO44WO44WO44WOYCxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uOiAn6rCc67Cc7J6Q66W8IOyEoO2Dne2VnCDsnbTsnKAnLFxyXG4gICAgICAgICAgICBhbnN3ZXI6ICfqsJzrsJzsnpDrpbwg7ISg7YOd7ZWcIOydtOycoCcsXHJcbiAgICAgICAgfSxcclxuICAgIF07XHJcblxyXG4gICAgY29uc3QgcXVlc3Rpb25Db2xvciA9IFsnIzhGQzE1QicsICcjRjE5MDIzJywgJyM2M0MxQTknXTtcclxuXHJcbiAgICAvLyBvbkNsaWNrXHJcbiAgICBjb25zdCBvbkNsaWNrUXVlc3Rpb24gPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHNldFF1ZXN0aW9uSW5kZXgoaW5kZXgpOyAvLyDsp4jrrLggaW5kZXhcclxuICAgICAgICBjb25zdCB0aW1lID0gNTA7IC8vIOq4gOyekCDrgpjsmKTripQg7IaN64+EXHJcblxyXG4gICAgICAgIGlmIChhbnN3ZXJUaXRsZVJlZi5jdXJyZW50ICYmIGFuc3dlckRpdlJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGxldCBjaGFySW5kZXggPSAwO1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHR5cGluZ1RpbWVyKTsgLy8g6riw7KG0IGludGVydmFsIOyiheujjFxyXG4gICAgICAgICAgICBhbnN3ZXJUaXRsZVJlZi5jdXJyZW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICBhbnN3ZXJUaXRsZVJlZi5jdXJyZW50LnN0eWxlLmNvbG9yID0gcXVlc3Rpb25Db2xvcltpbmRleF07XHJcbiAgICAgICAgICAgIGFuc3dlckRpdlJlZi5jdXJyZW50LnN0eWxlLmJveFNoYWRvdyA9IGAycHggNHB4IDRweCAke3F1ZXN0aW9uQ29sb3JbaW5kZXhdfSBpbnNldCwgLTJweCAtNHB4IDRweCAke3F1ZXN0aW9uQ29sb3JbaW5kZXhdfSBpbnNldGA7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0eXBpbmdJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIO2DgOydtO2VkSDsspjrpqxcclxuICAgICAgICAgICAgICAgIGlmIChxbmFBcnJheVtpbmRleF0uYW5zd2VyW2NoYXJJbmRleF0gPT09ICdcXG4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g6rCc7ZaJIOusuOyekOydvCDqsr3smrBcclxuICAgICAgICAgICAgICAgICAgICBhbnN3ZXJUaXRsZVJlZi5jdXJyZW50LmlubmVySFRNTCArPSAnPGJyIC8+JztcclxuICAgICAgICAgICAgICAgICAgICBjaGFySW5kZXgrKztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g6rCc7ZaJIOusuOyekOqwgCDslYTri5Ag6rK97JqwXHJcbiAgICAgICAgICAgICAgICAgICAgYW5zd2VyVGl0bGVSZWYuY3VycmVudC5pbm5lckhUTUwgKz0gcW5hQXJyYXlbaW5kZXhdLmFuc3dlcltjaGFySW5kZXgrK107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIHRpbWUpO1xyXG5cclxuICAgICAgICAgICAgc2V0VHlwaW5nVGltZXIodHlwaW5nSW50ZXJ2YWwpOyAvLyDtmITsnqwgaW50ZXJ2YWwg65Ox66GdXHJcblxyXG4gICAgICAgICAgICAvLyDrqqjrk6Ag66y47J6Q6rCAIOyymOumrOuQmOuKlCDsi5zqsITsl5Ag64+E64us7ZWY66m0IGludGVydmFsIOyiheujjFxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodHlwaW5nSW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICB9LCBxbmFBcnJheVtpbmRleF0uYW5zd2VyLmxlbmd0aCAqIHRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QmFzZSBjb21wb25lbnRObz17Y29tcG9uZW50Tm99PlxyXG4gICAgICAgICAgICA8V2h5SXRDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8VGl0bGVDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlU3ViRGl2IGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN1YlRpdGxlPuygnOuqqTwvU3ViVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UaXRsZVN1YkRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8VGl0bGVNYWluRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWFpblRpdGxlPuyZnCDqsJzrsJzsnpDqsIAg65CY66Ck6rOgIO2WiOuNlOudvC4uPzwvTWFpblRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGl0bGVNYWluRGl2PlxyXG4gICAgICAgICAgICAgICAgPC9UaXRsZUNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgICA8VGl0bGVDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlU3ViRGl2IGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN1YlRpdGxlPuuCtOyaqTwvU3ViVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UaXRsZVN1YkRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8VGl0bGVNYWluRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UUFDb250YWllcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxRdWVzdGlvblNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3FuYUFycmF5Lm1hcCgocW5hLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFF1ZXN0aW9uRGl2IGtleT17cW5hLmFuc3dlcn0gb25DbGljaz17KGUpID0+IG9uQ2xpY2tRdWVzdGlvbihpbmRleCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxRdWVzdGlvblN1YkRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFF1ZXN0aW9uTnVtYmVyIGlzQ2xpY2s9e3F1ZXN0aW9uSW5kZXggPT09IGluZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFF7aW5kZXggKyAxfS57JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1F1ZXN0aW9uTnVtYmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UXVlc3Rpb25UaXRsZSBjb2xvcj17cXVlc3Rpb25Db2xvcltpbmRleF19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3FuYS5xdWVzdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9RdWVzdGlvblRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUXVlc3Rpb25TdWJEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1F1ZXN0aW9uRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9RdWVzdGlvblNlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFuc3dlclNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFuc3dlckRpdiByZWY9e2Fuc3dlckRpdlJlZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbnN3ZXJUaXRsZSByZWY9e2Fuc3dlclRpdGxlUmVmfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtxdWVzdGlvbkluZGV4ID49IDAgPyAnJyA6ICfqtoHquIjtlZjsi6Ag7KeI66y47J2EIOyEoO2Dne2VtOyjvOyEuOyalC4nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Fuc3dlclRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQW5zd2VyRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BbnN3ZXJTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1FBQ29udGFpZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UaXRsZU1haW5EaXY+XHJcbiAgICAgICAgICAgICAgICA8L1RpdGxlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L1doeUl0Q29udGFpbmVyPlxyXG4gICAgICAgIDwvQmFzZT5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaHlJdDtcclxuIiwiLy8gaW5pdFxyXG5leHBvcnQgY29uc3Qgc2V0SXNFbmQgPSAnc2V0SXNFbmQnO1xyXG5cclxuLy8gYmFzZVxyXG5leHBvcnQgY29uc3Qgc2V0Q3VycmVudENvbXBvbmVudE5vID0gJ3NldEN1cnJlbnRDb21wb25lbnRObyc7XHJcbmV4cG9ydCBjb25zdCBzZXRJc1BhZ2VDaGFuZ2luZyA9ICdzZXRJc1BhZ2VDaGFuZ2luZyc7XHJcbmV4cG9ydCBjb25zdCBzZXRJbm5lcldpZHRoID0gJ3NldElubmVyV2lkdGgnO1xyXG5leHBvcnQgY29uc3Qgc2V0SW5kZXhTdWJDb250YWluZXJUcmFuc2xhdGVYID0gJ3NldEluZGV4U3ViQ29udGFpbmVyVHJhbnNsYXRlWCc7XHJcbiIsImltcG9ydCB7XHJcbiAgICBzZXRDdXJyZW50Q29tcG9uZW50Tm8sXHJcbiAgICBzZXRJbmRleFN1YkNvbnRhaW5lclRyYW5zbGF0ZVgsXHJcbiAgICBzZXRJbm5lcldpZHRoLFxyXG4gICAgc2V0SXNFbmQsXHJcbiAgICBzZXRJc1BhZ2VDaGFuZ2luZyxcclxufSBmcm9tICcuL2FjdGlvblR5cGUnO1xyXG5pbXBvcnQge1xyXG4gICAgSXNldEN1cnJlbnRDb21wb25lbnROb0FjdGlvbixcclxuICAgIElzZXRJbmRleFN1YkNvbnRhaW5lclRyYW5zbGF0ZVhBY3Rpb24sXHJcbiAgICBJc2V0SW5uZXJXaWR0aEFjdGlvbixcclxuICAgIElzZXRJc0VuZEFjdGlvbixcclxuICAgIElzZXRJc1BhZ2VDaGFuZ2luZ0FjdGlvbixcclxufSBmcm9tICcuL2FjdGlvbkludGVyZmFjZSc7XHJcblxyXG4vLyBpbml0XHJcbmV4cG9ydCBjb25zdCBzZXRJc0VuZEFjdGlvbiA9IChyZXM6IGJvb2xlYW4pOiBJc2V0SXNFbmRBY3Rpb24gPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBzZXRJc0VuZCxcclxuICAgICAgICBwYXlsb2FkOiByZXMsXHJcbiAgICB9O1xyXG59O1xyXG5cclxuLy8gYmFzZVxyXG5leHBvcnQgY29uc3Qgc2V0Q3VycmVudENvbXBvbmVudE5vQWN0aW9uID0gKHJlczogbnVtYmVyKTogSXNldEN1cnJlbnRDb21wb25lbnROb0FjdGlvbiA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IHNldEN1cnJlbnRDb21wb25lbnRObyxcclxuICAgICAgICBwYXlsb2FkOiByZXMsXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldElzUGFnZUNoYW5naW5nQWN0aW9uID0gKHJlczogYm9vbGVhbik6IElzZXRJc1BhZ2VDaGFuZ2luZ0FjdGlvbiA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IHNldElzUGFnZUNoYW5naW5nLFxyXG4gICAgICAgIHBheWxvYWQ6IHJlcyxcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0SW5uZXJXaWR0aEFjdGlvbiA9IChyZXM6IG51bWJlcik6IElzZXRJbm5lcldpZHRoQWN0aW9uID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogc2V0SW5uZXJXaWR0aCxcclxuICAgICAgICBwYXlsb2FkOiByZXMsXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldEluZGV4U3ViQ29udGFpbmVyVHJhbnNsYXRlWEFjdGlvbiA9IChyZXM6IG51bWJlcik6IElzZXRJbmRleFN1YkNvbnRhaW5lclRyYW5zbGF0ZVhBY3Rpb24gPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBzZXRJbmRleFN1YkNvbnRhaW5lclRyYW5zbGF0ZVgsXHJcbiAgICAgICAgcGF5bG9hZDogcmVzLFxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIGFjdGlvbnMgPVxyXG4gICAgfCBJc2V0SXNFbmRBY3Rpb25cclxuICAgIHwgSXNldEN1cnJlbnRDb21wb25lbnROb0FjdGlvblxyXG4gICAgfCBJc2V0SXNQYWdlQ2hhbmdpbmdBY3Rpb25cclxuICAgIHwgSXNldElubmVyV2lkdGhBY3Rpb25cclxuICAgIHwgSXNldEluZGV4U3ViQ29udGFpbmVyVHJhbnNsYXRlWEFjdGlvbjtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ292ZXIgZnJvbSAnLi4vY29tcG9uZW50L2NvdmVyJztcclxuaW1wb3J0IEludHJvIGZyb20gJy4uL2NvbXBvbmVudC9pbnRybyc7XHJcbmltcG9ydCBXaHlJdCBmcm9tICcuLi9jb21wb25lbnQvd2h5SXQnO1xyXG5pbXBvcnQgU2tpbGxzIGZyb20gJy4uL2NvbXBvbmVudC9za2lsbHMnO1xyXG5pbXBvcnQgQ2FyZWVyIGZyb20gJy4uL2NvbXBvbmVudC9jYXJlZXInO1xyXG5pbXBvcnQgSW5pdCBmcm9tICcuLi9jb21wb25lbnQvaW5pdCc7XHJcbmltcG9ydCBQcm9qZWN0cyBmcm9tICcuLi9jb21wb25lbnQvcHJvamVjdHMnO1xyXG5pbXBvcnQgTW9yZSBmcm9tICcuLi9jb21wb25lbnQvbW9yZSc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGluZGV4U3RhdGUgfSBmcm9tICcuLi9tb2R1bGVzL2luZGV4UmVkdWNlcic7XHJcbmltcG9ydCB7IG1heFdpZHRoIH0gZnJvbSAnLi4vc3R5bGUvc3R5bGUnO1xyXG5pbXBvcnQgeyBzZXRJbmRleFN1YkNvbnRhaW5lclRyYW5zbGF0ZVhBY3Rpb24sIHNldElubmVyV2lkdGhBY3Rpb24gfSBmcm9tICcuLi9tb2R1bGVzL2FjdGlvbnMnO1xyXG5cclxuY29uc3QgSW5kZXhNYWluQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gKDEwMHZ3IC0gMTAwJSkpO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvaW1hZ2UvdGVzdDEuanBnKTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuYDtcclxuXHJcbmNvbnN0IEluZGV4TWlkZGxlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIG1heC13aWR0aDogJHttYXhXaWR0aH1weDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElJbmRleFN1YkNvbnRhaW5lciB7XHJcbiAgICB0cmFuc2xhdGVYOiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IEluZGV4U3ViQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKCR7KHByb3BzOiBJSW5kZXhTdWJDb250YWluZXIpID0+IHByb3BzLnRyYW5zbGF0ZVh9cHgsIDd2aCk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xyXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbmA7XHJcblxyXG5jb25zdCBDb21wb25lbnRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgcGVyc3BlY3RpdmU6IDQwMDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbmA7XHJcblxyXG5jb25zdCBDb2ZmZWVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMDRweDtcclxuICAgIHJpZ2h0OiAtMzgycHg7XHJcbmA7XHJcblxyXG5jb25zdCBDb2ZmZWVTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IENvZmZlZUlubmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTE3YzMyO1xyXG4gICAgYm9yZGVyOiAxM3B4IHNvbGlkICNmZmY7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG5gO1xyXG5cclxuY29uc3QgQ29mZmVlTWF0ZXJpYWwgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNDk3M2Q7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg4cHgsIDQ4cHgpO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA2cHggI2ExN2MzMiBpbnNldDtcclxuYDtcclxuXHJcbmNvbnN0IENvZmZlZU91dGVyID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgOHB4IDhweCAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE4cHgsIDYwcHgpIHJvdGF0ZSgzMGRlZyk7XHJcbiAgICBib3gtc2hhZG93OiA0cHggMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbmA7XHJcblxyXG5jb25zdCBQZW5jaWxDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0NzRweDtcclxuICAgIHJpZ2h0OiAtMTQ0cHg7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNWRlZyk7XHJcbmA7XHJcblxyXG5jb25zdCBQZW5jaWxTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYDtcclxuXHJcbmNvbnN0IFBlbmNpbFRvcERpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuYDtcclxuXHJcbmNvbnN0IFBlbmNpbExlZnRUb3AgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ4NzdjNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweCAwIDAgMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuYDtcclxuXHJcbmNvbnN0IFBlbmNpbFJpZ2h0VG9wID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MmFkYzc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDhweCAwIDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3gtc2hhZG93OiAzcHggMCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG5gO1xyXG5cclxuY29uc3QgUGVuY2lsTGVmdEJvdHRvbSA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAtNHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBjN2FmO1xyXG5gO1xyXG5jb25zdCBQZW5jaWxSaWdodEJvdHRvbSA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAtNHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBjN2FmO1xyXG5gO1xyXG5cclxuY29uc3QgUGVuY2lsQm90dG9tID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAkezQwIC8gTWF0aC5zcXJ0KDIpfXB4O1xyXG4gICAgaGVpZ2h0OiAkezQwIC8gTWF0aC5zcXJ0KDIpfXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwYzdhZjtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKCR7KDQwIC0gNDAgLyBNYXRoLnNxcnQoMikpIC8gMn1weCwgLSR7NDAgLyBNYXRoLnNxcnQoMikgLyAyfXB4KSByb3RhdGUoLTQ1ZGVnKTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBib3gtc2hhZG93OiAycHggM3B4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbmA7XHJcblxyXG5jb25zdCBQZW5jaWxMZWFkID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIGJvcmRlci10b3A6IDEycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItbGVmdDogMTJweCBzb2xpZCAjMDAwO1xyXG5gO1xyXG5cclxuY29uc3QgQ2VsbFBob25lQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcCAzNjNweDtcclxuICAgIGxlZnQ6IC0yOTRweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00ZGVnKTtcclxuYDtcclxuXHJcbmNvbnN0IENlbGxQaG9uZVNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBgO1xyXG5cclxuY29uc3QgQ2VsbFBob25lQm9keSA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMjIwcHg7XHJcbiAgICBoZWlnaHQ6IDQyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJlMjcyNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHggMTZweCAxNnB4IDE2cHg7XHJcbiAgICBib3JkZXI6IDZweCBzb2xpZCAjY2Q1YzVjO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA2cHggMnB4IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuYDtcclxuXHJcbmNvbnN0IENlbGxQaG9uZVRvcCA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwIDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbmA7XHJcblxyXG5jb25zdCBDZWxsUGhvbmVUb3BJbm5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhM2EzYTM7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAtMXB4IC0xcHggNHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuYDtcclxuXHJcbmNvbnN0IE1lbnVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuYDtcclxuXHJcbmNvbnN0IE1lbnVTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gYDtcclxuXHJcbmNvbnN0IEhhbWJ1cmdlckltYWdlID0gc3R5bGVkLmltZ2BcclxuICAgIGhlaWdodDogNXZoO1xyXG4gICAgcGFkZGluZzogMXZoO1xyXG5gO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIC8vIHJlZHV4XHJcbiAgICBjb25zdCBpc0VuZCA9IHVzZVNlbGVjdG9yKChzdGF0ZTogaW5kZXhTdGF0ZSkgPT4gc3RhdGUuaW5pdFJlZHVjZXIuaXNFbmQpO1xyXG4gICAgY29uc3QgaW5uZXJXaWR0aCA9IHVzZVNlbGVjdG9yKChzdGF0ZTogaW5kZXhTdGF0ZSkgPT4gc3RhdGUuYmFzZVJlZHVjZXIuaW5uZXJXaWR0aCk7XHJcbiAgICBjb25zdCBpbmRleFN1YkNvbnRhaW5lclRyYW5zbGF0ZVggPSB1c2VTZWxlY3RvcihcclxuICAgICAgICAoc3RhdGU6IGluZGV4U3RhdGUpID0+IHN0YXRlLmJhc2VSZWR1Y2VyLmluZGV4U3ViQ29udGFpbmVyVHJhbnNsYXRlWCxcclxuICAgICk7XHJcblxyXG4gICAgLy8gdXNlRWZmZWN0XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvblJlc2l6ZSk7XHJcbiAgICAgICAgb25SZXNpemUoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uUmVzaXplKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIC8vIG9uUmVzaXplXHJcbiAgICBjb25zdCBvblJlc2l6ZSA9ICgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChzZXRJbm5lcldpZHRoQWN0aW9uKHdpbmRvdy5pbm5lcldpZHRoKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIG9uQ2xpY2tcclxuICAgIGNvbnN0IG9uQ2xpY2tNZW51Q29udGFpbmVyID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChpbmRleFN1YkNvbnRhaW5lclRyYW5zbGF0ZVggIT09IDApIHtcclxuICAgICAgICAgICAgLy8g6rCS7J20IOu2gOyXrOuQnCDqsr3smrAg7LSI6riw7ZmU7ZWY7JesIOybkOuemOuMgOuhnCDrj4zroKTrhpPquLBcclxuICAgICAgICAgICAgZGlzcGF0Y2goc2V0SW5kZXhTdWJDb250YWluZXJUcmFuc2xhdGVYQWN0aW9uKDApKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyDqsJLsnbQg67aA7Jes65CY7KeAIOyViuydgCDqsr3smrAg7LSI6rO865CcIOuylOychOunjO2BvCDsm4Dsp4HsnbTquLBcclxuICAgICAgICAgICAgaWYgKGlubmVyV2lkdGggPCBtYXhXaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0SW5kZXhTdWJDb250YWluZXJUcmFuc2xhdGVYQWN0aW9uKDExMCkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0SW5kZXhTdWJDb250YWluZXJUcmFuc2xhdGVYQWN0aW9uKChtYXhXaWR0aCArIDIyMCAtIGlubmVyV2lkdGgpIC8gMikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtpc0VuZCA/IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEluZGV4TWFpbkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEluZGV4TWlkZGxlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEluZGV4U3ViQ29udGFpbmVyIHRyYW5zbGF0ZVg9e2luZGV4U3ViQ29udGFpbmVyVHJhbnNsYXRlWH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvdmVyIGNvbXBvbmVudE5vPXswfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW50cm8gY29tcG9uZW50Tm89ezF9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXaHlJdCBjb21wb25lbnRObz17Mn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNraWxscyBjb21wb25lbnRObz17M30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmVlciBjb21wb25lbnRObz17NH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2plY3RzIGNvbXBvbmVudE5vPXs1fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9yZSBjb21wb25lbnRObz17Nn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbXBvbmVudENvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvZmZlZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvZmZlZVNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29mZmVlSW5uZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvZmZlZU1hdGVyaWFsIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvZmZlZUlubmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvZmZlZU91dGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29mZmVlU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvZmZlZUNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlbmNpbENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlbmNpbFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVuY2lsVG9wRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQZW5jaWxMZWZ0VG9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVuY2lsTGVmdEJvdHRvbSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGVuY2lsTGVmdFRvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVuY2lsUmlnaHRUb3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQZW5jaWxSaWdodEJvdHRvbSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGVuY2lsUmlnaHRUb3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BlbmNpbFRvcERpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQZW5jaWxCb3R0b20+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlbmNpbExlYWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGVuY2lsQm90dG9tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BlbmNpbFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QZW5jaWxDb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDZWxsUGhvbmVDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDZWxsUGhvbmVTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENlbGxQaG9uZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENlbGxQaG9uZVRvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENlbGxQaG9uZVRvcElubmVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DZWxsUGhvbmVUb3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NlbGxQaG9uZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2VsbFBob25lU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NlbGxQaG9uZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5kZXhTdWJDb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2lubmVyV2lkdGggPCBtYXhXaWR0aCArIDIyMCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUNvbnRhaW5lciBvbkNsaWNrPXtvbkNsaWNrTWVudUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51U2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIYW1idXJnZXJJbWFnZSBzcmM9XCIvaW1hZ2UvaGFtYnVyZ2VyQmFyLnN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudVNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbmRleE1pZGRsZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8L0luZGV4TWFpbkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPEluaXQgLz5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaDEsXHJcbiAgICAgICAgICAgICAgICAgICAgaDIsXHJcbiAgICAgICAgICAgICAgICAgICAgaDMsXHJcbiAgICAgICAgICAgICAgICAgICAgaDQsXHJcbiAgICAgICAgICAgICAgICAgICAgaDUsXHJcbiAgICAgICAgICAgICAgICAgICAgaDYsXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbixcclxuICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBcHBsZVNER290aGljTmVvJywgJ05vdG8gU2FucyBLUicsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CdW5nZWUmZGlzcGxheT1zd2FwJyk7XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcclxuICAgICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wLCBtYXhpbXVtLXNjYWxlPTEsIG1pbmltdW0tc2NhbGU9MVwiIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiIsImV4cG9ydCBjb25zdCBtYXhXaWR0aCA9IDk2MDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9