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
  const [chainArray, setChainArray] = react__WEBPACK_IMPORTED_MODULE_1__.useState([]); // ref

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
  }; // onResize


  const onResize = () => {
    const count = Math.floor(baseContainerRef.current.clientWidth / 84);
    const chainArray = [];

    for (let i = 0; i < count; i++) {
      chainArray.push(i);
    }

    setChainArray(chainArray);
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
        lineNumber: 285,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostItContainer, {
        componentNo: componentNo,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostItSection, {
          onClick: () => onClickPostIt(componentNo),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostItColorDiv, {
            backgroundColor: backgroundColorArray[componentNo]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 291,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostItTextDiv, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {
              ref: titleRef,
              children: titleArray[componentNo]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 293,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 292,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 290,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainContainer, {
        children: chainArray.map(value => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainSection, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainFrame, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Chain, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 303,
                columnNumber: 37
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Chain, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 304,
                columnNumber: 37
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 302,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainCircle, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 306,
              columnNumber: 33
            }, undefined)]
          }, value, true, {
            fileName: _jsxFileName,
            lineNumber: 301,
            columnNumber: 29
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 284,
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
const ArrowDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "main__ArrowDiv",
  componentId: "sc-1r8z56n-1"
})(["display:inline-block;background-color:red;position:relative;width:500px;height:120px;transform:translateX(100px) translateY(100px) rotate(-15deg);display:flex;justify-content:center;align-items:center;margin:40px 0;&:hover{transition:0.5s;transform:translateX(130px) translateY(100px) rotate(-15deg);opacity:0;}"]);
const ArrowLeftDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "main__ArrowLeftDiv",
  componentId: "sc-1r8z56n-2"
})(["position:absolute;top:", "px;left:-", "px;width:", "px;height:", "px;background-color:", ";transform:rotate(-45deg);"], (120 - 120 / Math.sqrt(2)) / 2, 60 - (120 - 120 / Math.sqrt(2)) / 2, 120 / Math.sqrt(2), 120 / Math.sqrt(2), props => props.backgroundColor);
const ArrowRightDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "main__ArrowRightDiv",
  componentId: "sc-1r8z56n-3"
})(["position:absolute;top:", "px;right:-", "px;width:", "px;height:", "px;background-color:", ";transform:rotate(-45deg);"], (120 - 120 / Math.sqrt(2)) / 2, 60 - (120 - 120 / Math.sqrt(2)) / 2, 120 / Math.sqrt(2), 120 / Math.sqrt(2), props => props.backgroundColor);
const MainTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default().span.withConfig({
  displayName: "main__MainTitle",
  componentId: "sc-1r8z56n-4"
})(["display:block;font-size:calc(54px + 1.5vw);font-weight:600;margin-left:", "px;margin-right:", "px;"], props => props.marginLeft, props => props.marginRight);

const Main = ({
  componentNo
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_base__WEBPACK_IMPORTED_MODULE_3__.default, {
      componentNo: componentNo,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ArrowDiv, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ArrowLeftDiv, {
          backgroundColor: "#757270"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ArrowRightDiv, {
          backgroundColor: "red"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainTitle, {
          marginLeft: 60,
          children: "\uAE40\uC131\uCC2C\uC758"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ArrowDiv, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ArrowLeftDiv, {
          backgroundColor: "red"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ArrowRightDiv, {
          backgroundColor: "#757270"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainTitle, {
          marginRight: 60,
          children: "\uAE40\uC131\uCC2C\uC758"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 231,
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
            color: "#E6951A",
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
            color: "#4ac8d9",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vLi9jb21wb25lbnQvYmFzZS50c3giLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvLy4vY29tcG9uZW50L2NhcmVlci50c3giLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvLy4vY29tcG9uZW50L2luaXQudHN4Iiwid2VicGFjazovL3N1bmdjaGFuX3BvcnRmb2xpby8uL2NvbXBvbmVudC9pbnRyby50c3giLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvLy4vY29tcG9uZW50L21haW4udHN4Iiwid2VicGFjazovL3N1bmdjaGFuX3BvcnRmb2xpby8uL2NvbXBvbmVudC9tb3JlLnRzeCIsIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vLi9jb21wb25lbnQvcHJvamVjdHMudHN4Iiwid2VicGFjazovL3N1bmdjaGFuX3BvcnRmb2xpby8uL2NvbXBvbmVudC9za2lsbHMudHN4Iiwid2VicGFjazovL3N1bmdjaGFuX3BvcnRmb2xpby8uL2NvbXBvbmVudC93aHlJdC50c3giLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvLy4vbW9kdWxlcy9hY3Rpb25UeXBlLnRzeCIsIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vLi9tb2R1bGVzL2FjdGlvbnMudHN4Iiwid2VicGFjazovL3N1bmdjaGFuX3BvcnRmb2xpby8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vLi9zdHlsZS9zdHlsZS50c3giLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL3N1bmdjaGFuX3BvcnRmb2xpby9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3N1bmdjaGFuX3BvcnRmb2xpby9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIl0sIm5hbWVzIjpbInRyYW5zaXRpb25EdXJhdGlvbiIsIkJhc2VDb250YWluZXIiLCJzdHlsZWQiLCJwcm9wcyIsImJhY2tncm91bmRDb2xvciIsIk1haW5Db250YWluZXIiLCJQb3N0SXRDb250YWluZXIiLCJjb21wb25lbnRObyIsIlBvc3RJdFNlY3Rpb24iLCJQb3N0SXRDb2xvckRpdiIsIlBvc3RJdFRleHREaXYiLCJDaGFpbkNvbnRhaW5lciIsIkNoYWluU2VjdGlvbiIsIkNoYWluRnJhbWUiLCJDaGFpbiIsIkNoYWluQ2lyY2xlIiwiVGl0bGUiLCJCYXNlIiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiY3VycmVudENvbXBvbmVudE5vIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImJhc2VSZWR1Y2VyIiwidGl0bGVBcnJheSIsImJhY2tncm91bmRDb2xvckFycmF5IiwiaXNQYWdlQ2hhbmdpbmciLCJpc1RvcCIsInNldElzVG9wIiwiUmVhY3QiLCJpc0JvdHRvbSIsInNldElzQm90dG9tIiwiY2hhaW5BcnJheSIsInNldENoYWluQXJyYXkiLCJiYXNlQ29udGFpbmVyUmVmIiwibWFpbkNvbnRhaW5lclJlZiIsInRpdGxlUmVmIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uUmVzaXplIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImN1cnJlbnQiLCJzdHlsZSIsIm92ZXJmbG93IiwicG9zaXRpb24iLCJkaXNwbGF5IiwidHJhbnNmb3JtIiwiekluZGV4Iiwib3BhY2l0eSIsInNjcm9sbFRvIiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0Iiwic2V0SXNQYWdlQ2hhbmdpbmdBY3Rpb24iLCJzZXRUaW1lb3V0Iiwib25DbGlja1Bvc3RJdCIsInNldEN1cnJlbnRDb21wb25lbnROb0FjdGlvbiIsIm9uU2Nyb2xsTWFpbkNvbnRhaW5lciIsImUiLCJjdXJyZW50VGFyZ2V0Iiwic2Nyb2xsVG9wIiwib25XaGVlbE1haW5Db250YWluZXIiLCJuYXRpdmVFdmVudCIsImRlbHRhWSIsImxlbmd0aCIsImNvdW50IiwiTWF0aCIsImZsb29yIiwiY2xpZW50V2lkdGgiLCJpIiwicHVzaCIsIm1hcCIsInZhbHVlIiwiQ2FyZWVyQ29udGFpbmVyIiwiSW1hZ2VEaXYiLCJUaXRsZVNlY3Rpb24iLCJDb250ZW50c1NlY3Rpb24iLCJUZXh0RGVzY3JpcHRpb25EaXYiLCJQaWN0dXJlQ29udGFpbmVyIiwiUHV6emxlU2VjdGlvbiIsIlB1enpsZURpdiIsIlB1enpsZUxlZnQiLCJQdXp6bGVSaWdodCIsIlB1enpsZVRvcCIsIkNhcmVlclRpdGxlIiwiY29sb3IiLCJUZXh0RGVzY3JpcHRpb24iLCJ0eXBlIiwic3JjIiwiUHV6emxlVGl0bGUiLCJDYXJlZXJJbWFnZSIsIlBpY3R1cmVJbWFnZSIsIkNhcmVlciIsInBpY3R1cmVJbWFnZSIsInNldFBpY3R1cmVJbWFnZSIsInBpY3R1cmVDb250YWluZXJSZWYiLCJvbkNsaWNrQ2FtZXJhIiwiaW1nIiwic3RvcFByb3BhZ2F0aW9uIiwib25DbGlja1BpY3R1cmVDb250YWluZXIiLCJDb250YWluZXIiLCJUaXRsZURpdiIsIk1haW5TZWN0aW9uIiwiTWFpblRpdGxlIiwiQ29sb3JTcGFuIiwiVGl0bGVDdXJzb3IiLCJJbml0IiwiY29udGFpbmVyUmVmIiwidHlwaW5nU3RyaW5nUmVmMSIsInR5cGluZ1N0cmluZ1JlZjIiLCJ0eXBpbmdTdHJpbmdSZWYzIiwidHlwaW5nU3RyaW5nUmVmNCIsInR5cGluZ1N0cmluZ1JlZjUiLCJ0eXBpbmdTdHJpbmdSZWY2IiwidHlwaW5nU3RyaW5nUmVmNyIsInR5cGluZ1N0cmluZ1JlZjgiLCJ0eXBpbmdDdXJzb3IxIiwidHlwaW5nQ3Vyc29yMiIsInR5cGluZ0N1cnNvcjMiLCJ0eXBpbmdDdXJzb3I0IiwidGltZSIsInN0cmluZ3MiLCJzdHJpbmdPYmpzIiwic3RyaW5nIiwic3RhcnQiLCJzZXRUeXBpbmdTdHJpbmdBY3Rpb24xIiwic2V0VHlwaW5nU3RyaW5nQWN0aW9uMiIsInNldFR5cGluZ0N1cnNvckFjdGlvbiIsInNldElzRW5kQWN0aW9uIiwicmVmIiwiaW5kZXgiLCJjaGFySW5kZXgiLCJpbm5lckhUTUwiLCJ0eXBpbmdJbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIkludHJvQ29udGFpbmVyIiwiaGVpZ2h0IiwiQ29udGVudHNUaXRsZSIsIkNvbnRlbnRzRGVzY3JpcHRpb24iLCJJbnRybyIsImFkZFNlY3Rpb25zIiwic2V0QWRkU2VjdGlvbnMiLCJhZGRTZWN0aW9uc1RpbWVvdXQiLCJzZXRBZGRTZWN0aW9uc1RpbWVvdXQiLCJpbnRyb0NvbnRhaW5lclJlZiIsImNvbnRlbnRzU2VjdGlvblJlZiIsImNvbnRlbnRzQXJyYXkiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZ2V0QWRkU2VjdGlvbnMiLCJjbGVhclRpbWVvdXQiLCJ0aW1lb3V0IiwidG90YWxDb3VudCIsImNvbnRlbnRzIiwiYWRkU2VjdGlvbiIsIlRpdGxlU2VjdGlvbktleUZyYW1lIiwia2V5ZnJhbWVzIiwiQXJyb3dEaXYiLCJBcnJvd0xlZnREaXYiLCJzcXJ0IiwiQXJyb3dSaWdodERpdiIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsIk1haW4iLCJNb3JlQ29udGFpbmVyIiwiSGVhZGVyU2VjdGlvbiIsIlVybFNlY3Rpb24iLCJGb290ZXJTZWN0aW9uIiwiVXJsTWFpbkRpdiIsIlVybFN1YkRpdiIsIkZvb3Rlck1haW5EaXYiLCJGb290ZXJTdWJEaXYiLCJIZWFkZXJUZXh0IiwiVXJsVGV4dCIsIkZvb3RlclRleHQiLCJVcmxJbWFnZSIsIkxvZ29JbWFnZSIsIk1vcmUiLCJvbkNsaWNrVXJsTWFpbkRpdiIsInVybCIsIm9wZW4iLCJQcm9qZWN0c0NvbnRhaW5lciIsIlByb2plY3RzIiwiY3VycmVudEltYWdlSW5kZXgiLCJzZXRDdXJyZW50SW1hZ2VJbmRleCIsImltYWdlcyIsIm9uQ2xpY2tJbWFnZURpdiIsInRlbXBDdXJyZW50SW1hZ2VJbmRleCIsInNsaWNlIiwiU2tpbGxzQ29udGFpbmVyIiwiVGl0bGVDb250YWluZXIiLCJUaXRsZU1haW5EaXYiLCJUaXRsZVN1YkRpdiIsIkNvbnRlbnRzQ29udGFpbmVyIiwiU2tpbGxTZWN0aW9uIiwiU3ViVGl0bGUiLCJTa2lsbFRpdGxlIiwiU2tpbGxJbWFnZSIsIlNraWxscyIsInNraWxsc0FycmF5Iiwic2tpbGwiLCJXaHlJdENvbnRhaW5lciIsIlFBQ29udGFpZXIiLCJRdWVzdGlvblNlY3Rpb24iLCJBbnN3ZXJTZWN0aW9uIiwicXVlc3Rpb25OdW1iZXJLZXlmcmFtZSIsIlF1ZXN0aW9uRGl2IiwiUXVlc3Rpb25TdWJEaXYiLCJBbnN3ZXJEaXYiLCJRdWVzdGlvblRpdGxlIiwiQW5zd2VyVGl0bGUiLCJRdWVzdGlvbk51bWJlciIsImlzQ2xpY2siLCJXaHlJdCIsInF1ZXN0aW9uSW5kZXgiLCJzZXRRdWVzdGlvbkluZGV4IiwidHlwaW5nVGltZXIiLCJzZXRUeXBpbmdUaW1lciIsImFuc3dlclRpdGxlUmVmIiwiYW5zd2VyRGl2UmVmIiwicW5hQXJyYXkiLCJxdWVzdGlvbiIsImFuc3dlciIsInF1ZXN0aW9uQ29sb3IiLCJvbkNsaWNrUXVlc3Rpb24iLCJib3hTaGFkb3ciLCJxbmEiLCJzZXRJc0VuZCIsInNldEN1cnJlbnRDb21wb25lbnRObyIsInNldElzUGFnZUNoYW5naW5nIiwicmVzIiwicGF5bG9hZCIsIkluZGV4TWFpbkNvbnRhaW5lciIsIkluZGV4U3ViQ29udGFpbmVyIiwibWF4V2lkdGgiLCJDb21wb25lbnRDb250YWluZXIiLCJJbmRleCIsImlzRW5kIiwiaW5pdFJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQSxNQUFNQSxrQkFBa0IsR0FBRyxDQUEzQjtBQU1BLE1B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QTNDSixlQWdESTtBQUFNLFVBQUksRUFBQyxVQUFYO0FBQXNCLGFBQU8sRUFBQyx5RUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaERKO0FBQUEsa0JBREo7QUFvREgsQ0F4REQ7O0FBMERBLCtEQUFlRCxLQUFmLEU7Ozs7Ozs7Ozs7Ozs7OztBQ3ZGTyxNQUFNRixRQUFRLEdBQUcsR0FBakIsQzs7Ozs7Ozs7Ozs7QUNBUCxtQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgc2V0Q3VycmVudENvbXBvbmVudE5vQWN0aW9uLCBzZXRJc1BhZ2VDaGFuZ2luZ0FjdGlvbiB9IGZyb20gJy4uL21vZHVsZXMvYWN0aW9ucyc7XHJcbmltcG9ydCB7IGluZGV4U3RhdGUgfSBmcm9tICcuLi9tb2R1bGVzL2luZGV4UmVkdWNlcic7XHJcblxyXG5jb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSAxO1xyXG5cclxuaW50ZXJmYWNlIElCYXNlQ29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBCYXNlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIGhlaWdodDogOTN2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wczogSUJhc2VDb250YWluZXIpID0+IHByb3BzLmJhY2tncm91bmRDb2xvcn07XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAke3RyYW5zaXRpb25EdXJhdGlvbn1zO1xyXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgdG9wO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDBweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpLCAtMnB4IDBweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG5gO1xyXG5cclxuY29uc3QgTWFpbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAke3RyYW5zaXRpb25EdXJhdGlvbn1zO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1MnB4KTtcclxuICAgIG1hcmdpbi10b3A6IDUycHg7XHJcblxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSVBvc3RJdENvbnRhaW5lciB7XHJcbiAgICBjb21wb25lbnRObzogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBQb3N0SXRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAkeyhwcm9wczogSVBvc3RJdENvbnRhaW5lcikgPT4gcHJvcHMuY29tcG9uZW50Tm8gKiAzM31weDtcclxuICAgIGxlZnQ6IC0xMTBweDtcclxuYDtcclxuXHJcbmNvbnN0IFBvc3RJdFNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElQb3N0SXRDb2xvckRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgUG9zdEl0Q29sb3JEaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHM6IElQb3N0SXRDb2xvckRpdikgPT4gcHJvcHMuYmFja2dyb3VuZENvbG9yfTtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgUG9zdEl0VGV4dERpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmOGU1O1xyXG5gO1xyXG5cclxuY29uc3QgQ2hhaW5Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuYDtcclxuXHJcbmNvbnN0IENoYWluU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwIDMycHg7XHJcbmA7XHJcblxyXG5jb25zdCBDaGFpbkZyYW1lID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHotaW5kZXg6IDE7XHJcbmA7XHJcblxyXG5jb25zdCBDaGFpbiA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogNHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYxNjE2MTtcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMnB4IDEycHg7XHJcbmA7XHJcblxyXG5jb25zdCBDaGFpbkNpcmNsZSA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE0cHgpO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgMnB4IHJnYmEoMCwgMCwgMCwgMC40KSwgaW5zZXQgLTFweCAtMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRyYW5zaXRpb246ICR7dHJhbnNpdGlvbkR1cmF0aW9ufXM7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElCYXNlIHtcclxuICAgIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgICBjb21wb25lbnRObzogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBCYXNlOiBSZWFjdC5GQzxJQmFzZT4gPSAoeyBjaGlsZHJlbiwgY29tcG9uZW50Tm8gfSk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICAvLyByZWR1eFxyXG4gICAgY29uc3QgY3VycmVudENvbXBvbmVudE5vID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBpbmRleFN0YXRlKSA9PiBzdGF0ZS5iYXNlUmVkdWNlci5jdXJyZW50Q29tcG9uZW50Tm8pO1xyXG4gICAgY29uc3QgdGl0bGVBcnJheSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogaW5kZXhTdGF0ZSkgPT4gc3RhdGUuYmFzZVJlZHVjZXIudGl0bGVBcnJheSk7XHJcbiAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3JBcnJheSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogaW5kZXhTdGF0ZSkgPT4gc3RhdGUuYmFzZVJlZHVjZXIuYmFja2dyb3VuZENvbG9yQXJyYXkpO1xyXG4gICAgY29uc3QgaXNQYWdlQ2hhbmdpbmcgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IGluZGV4U3RhdGUpID0+IHN0YXRlLmJhc2VSZWR1Y2VyLmlzUGFnZUNoYW5naW5nKTtcclxuXHJcbiAgICAvLyBzdGF0ZVxyXG4gICAgY29uc3QgW2lzVG9wLCBzZXRJc1RvcF0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNCb3R0b20sIHNldElzQm90dG9tXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtjaGFpbkFycmF5LCBzZXRDaGFpbkFycmF5XSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcltdPihbXSk7XHJcblxyXG4gICAgLy8gcmVmXHJcbiAgICBjb25zdCBiYXNlQ29udGFpbmVyUmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lclJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuICAgIGNvbnN0IHRpdGxlUmVmID0gUmVhY3QudXNlUmVmPEhUTUxTcGFuRWxlbWVudD4oKTtcclxuXHJcbiAgICAvLyB1c2VFZmZlY3RcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uUmVzaXplKTtcclxuICAgICAgICBvblJlc2l6ZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25SZXNpemUpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyDqs7XthrVcclxuICAgICAgICBtYWluQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnRDb21wb25lbnRObyA9PT0gY29tcG9uZW50Tm8pIHtcclxuICAgICAgICAgICAgLy8g7ZiE7J6sIO2OmOydtOyngOydvCDqsr3smrBcclxuICAgICAgICAgICAgYmFzZUNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICAgICAgYmFzZUNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICBiYXNlQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYGA7XHJcbiAgICAgICAgICAgIGJhc2VDb250YWluZXJSZWYuY3VycmVudC5zdHlsZS56SW5kZXggPSBgJHsxMDAgLSBjb21wb25lbnROb31gO1xyXG5cclxuICAgICAgICAgICAgbWFpbkNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLm9wYWNpdHkgPSAnJztcclxuICAgICAgICAgICAgbWFpbkNvbnRhaW5lclJlZi5jdXJyZW50LnNjcm9sbFRvKDAsIDApOyAvLyDtjpjsnbTsp4Ag7Iqk7YGs66GkIOy1nOyDgeychOuhnFxyXG5cclxuICAgICAgICAgICAgdGl0bGVSZWYuY3VycmVudC5zdHlsZS5vcGFjaXR5ID0gJyc7XHJcblxyXG4gICAgICAgICAgICBzZXRJc1RvcCh0cnVlKTsgLy8g7Iqk7YGs66Gk7J2AIOy1nOyDgeuLqFxyXG4gICAgICAgICAgICBpZiAobWFpbkNvbnRhaW5lclJlZi5jdXJyZW50LmNsaWVudEhlaWdodCA9PT0gbWFpbkNvbnRhaW5lclJlZi5jdXJyZW50LnNjcm9sbEhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgLy8g7Y6Y7J207KeA7J2YIOyghOyytO2BrOq4sOqwgCDtmZTrqbQg7YGs6riw7JmAIOuPmeydvO2VoCDqsr3smrAg7Iqk7YGs66Gk7J2AIOy1nO2VmOuLqOuPhCDtj6ztlahcclxuICAgICAgICAgICAgICAgIHNldElzQm90dG9tKHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0SXNCb3R0b20oZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50Q29tcG9uZW50Tm8gPiBjb21wb25lbnRObykge1xyXG4gICAgICAgICAgICAvLyDsp4DrgpjqsIQg7Y6Y7J207KeA7J28IOqyveyasFxyXG4gICAgICAgICAgICBiYXNlQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xyXG4gICAgICAgICAgICBiYXNlQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIGJhc2VDb250YWluZXJSZWYuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlWCgxODBkZWcpYDtcclxuICAgICAgICAgICAgYmFzZUNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLnpJbmRleCA9IGAkezgwICsgY29tcG9uZW50Tm99YDtcclxuXHJcbiAgICAgICAgICAgIG1haW5Db250YWluZXJSZWYuY3VycmVudC5zdHlsZS5vcGFjaXR5ID0gJzAuMDUnO1xyXG5cclxuICAgICAgICAgICAgdGl0bGVSZWYuY3VycmVudC5zdHlsZS5vcGFjaXR5ID0gJzAuMDUnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIOyngOuCmOqwgOyngCDslYrsnYAg7Y6Y7J207KeA7J28IOqyveyasFxyXG4gICAgICAgICAgICBiYXNlQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgICAgICBiYXNlQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIGJhc2VDb250YWluZXJSZWYuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBgYDtcclxuICAgICAgICAgICAgYmFzZUNvbnRhaW5lclJlZi5jdXJyZW50LnN0eWxlLnpJbmRleCA9IGAkezgwIC0gY29tcG9uZW50Tm99YDtcclxuXHJcbiAgICAgICAgICAgIG1haW5Db250YWluZXJSZWYuY3VycmVudC5zdHlsZS5vcGFjaXR5ID0gJyc7XHJcblxyXG4gICAgICAgICAgICB0aXRsZVJlZi5jdXJyZW50LnN0eWxlLm9wYWNpdHkgPSAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKHNldElzUGFnZUNoYW5naW5nQWN0aW9uKHRydWUpKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRDb21wb25lbnRObyA9PT0gY29tcG9uZW50Tm8pIHtcclxuICAgICAgICAgICAgICAgIG1haW5Db250YWluZXJSZWYuY3VycmVudC5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZGlzcGF0Y2goc2V0SXNQYWdlQ2hhbmdpbmdBY3Rpb24oZmFsc2UpKTtcclxuICAgICAgICB9LCB0cmFuc2l0aW9uRHVyYXRpb24gKiAxMDAwKTtcclxuICAgIH0sIFtjdXJyZW50Q29tcG9uZW50Tm9dKTtcclxuXHJcbiAgICAvLyBvbkNsaWNrXHJcbiAgICBjb25zdCBvbkNsaWNrUG9zdEl0ID0gKGNvbXBvbmVudE5vKSA9PiB7XHJcbiAgICAgICAgLy8g7Y6Y7J207KeAIOydtOuPmeydtCDsnbTro6jslrTsp4Dqs6Ag7J6I64qUIOqyveyasFxyXG4gICAgICAgIGlmIChpc1BhZ2VDaGFuZ2luZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXNwYXRjaChzZXRDdXJyZW50Q29tcG9uZW50Tm9BY3Rpb24oY29tcG9uZW50Tm8pKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gb25TY3JvbGxcclxuICAgIGNvbnN0IG9uU2Nyb2xsTWFpbkNvbnRhaW5lciA9IChlOiBSZWFjdC5VSUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xyXG4gICAgICAgIC8vIO2OmOydtOyngCDsnbTrj5nsnbQg7J2066Oo7Ja07KeA6rOgIOyeiOuKlCDqsr3smrBcclxuICAgICAgICBpZiAoaXNQYWdlQ2hhbmdpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g7ZiE7J6sIO2OmOydtOyngOqwgCDslYTri4wg6rK97JqwIOyKpO2BrOuhpOq4sOuKpSDspJHri6hcclxuICAgICAgICBpZiAoY3VycmVudENvbXBvbmVudE5vICE9PSBjb21wb25lbnRObykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDtjpjsnbTsp4Ag7IOB64uo7JeQIOyeiOuKlCDqsr3smrBcclxuICAgICAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LnNjcm9sbFRvcCA9PT0gMCkge1xyXG4gICAgICAgICAgICBzZXRJc1RvcCh0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRJc1RvcChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDtjpjsnbTsp4Ag7ZWY64uo7JeQIOyeiOuKlCDqsr3smrBcclxuICAgICAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LnNjcm9sbFRvcCArIGUuY3VycmVudFRhcmdldC5jbGllbnRIZWlnaHQgPj0gZS5jdXJyZW50VGFyZ2V0LnNjcm9sbEhlaWdodCkge1xyXG4gICAgICAgICAgICBzZXRJc0JvdHRvbSh0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRJc0JvdHRvbShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBvbldoZWVsXHJcbiAgICBjb25zdCBvbldoZWVsTWFpbkNvbnRhaW5lciA9IChlOiBSZWFjdC5XaGVlbEV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xyXG4gICAgICAgIC8vIO2OmOydtOyngCDsnbTrj5nsnbQg7J2066Oo7Ja07KeA6rOgIOyeiOuKlCDqsr3smrBcclxuICAgICAgICBpZiAoaXNQYWdlQ2hhbmdpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g7ZiE7J6sIO2OmOydtOyngOqwgCDslYTri4wg6rK97JqwIO2coOq4sOuKpSDspJHri6hcclxuICAgICAgICBpZiAoY3VycmVudENvbXBvbmVudE5vICE9PSBjb21wb25lbnRObykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDtjpjsnbTsp4DsnZgg64Gd7JeQIOuPhOuLrO2VmOqzoCDsnITroZwg7Iqk7YGs66GkIO2WiOydhCDqsr3smrBcclxuICAgICAgICBpZiAoaXNUb3AgJiYgZS5uYXRpdmVFdmVudC5kZWx0YVkgPCAwKSB7XHJcbiAgICAgICAgICAgIG9uQ2xpY2tQb3N0SXQoY29tcG9uZW50Tm8gLSAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIO2OmOydtOyngOydmCDrgZ3sl5Ag64+E64us7ZWY6rOgIOyVhOuemOuhnCDsiqTtgazroaQg7ZaI7J2EIOqyveyasFxyXG4gICAgICAgIGlmIChpc0JvdHRvbSAmJiBlLm5hdGl2ZUV2ZW50LmRlbHRhWSA+IDApIHtcclxuICAgICAgICAgICAgLy8g7ZiE7J6sIOy7tO2PrOuEjO2KuCDrsojtmLjqsIAg66eI7KeA66eJ7J20IOyVhOuLkCDqsr3smrDsl5Drp4wg7Y6Y7J207KeAIOuEmOq4sOq4sFxyXG4gICAgICAgICAgICBpZiAoY3VycmVudENvbXBvbmVudE5vIDwgdGl0bGVBcnJheS5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrUG9zdEl0KGNvbXBvbmVudE5vICsgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIG9uUmVzaXplXHJcbiAgICBjb25zdCBvblJlc2l6ZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjb3VudCA9IE1hdGguZmxvb3IoYmFzZUNvbnRhaW5lclJlZi5jdXJyZW50LmNsaWVudFdpZHRoIC8gODQpO1xyXG4gICAgICAgIGNvbnN0IGNoYWluQXJyYXk6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBjaGFpbkFycmF5LnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRDaGFpbkFycmF5KGNoYWluQXJyYXkpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxCYXNlQ29udGFpbmVyIHJlZj17YmFzZUNvbnRhaW5lclJlZn0gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119PlxyXG4gICAgICAgICAgICAgICAgPE1haW5Db250YWluZXIgcmVmPXttYWluQ29udGFpbmVyUmVmfSBvblNjcm9sbD17b25TY3JvbGxNYWluQ29udGFpbmVyfSBvbldoZWVsPXtvbldoZWVsTWFpbkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9NYWluQ29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxQb3N0SXRDb250YWluZXIgY29tcG9uZW50Tm89e2NvbXBvbmVudE5vfT5cclxuICAgICAgICAgICAgICAgICAgICA8UG9zdEl0U2VjdGlvbiBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrUG9zdEl0KGNvbXBvbmVudE5vKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0SXRDb2xvckRpdiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RJdFRleHREaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGl0bGUgcmVmPXt0aXRsZVJlZn0+e3RpdGxlQXJyYXlbY29tcG9uZW50Tm9dfTwvVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUG9zdEl0VGV4dERpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L1Bvc3RJdFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L1Bvc3RJdENvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgICA8Q2hhaW5Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoYWluQXJyYXkubWFwKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoYWluU2VjdGlvbiBrZXk9e3ZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hhaW5GcmFtZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoYWluIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFpbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2hhaW5GcmFtZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hhaW5DaXJjbGUgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2hhaW5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9DaGFpbkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9CYXNlQ29udGFpbmVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2U7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBpbmRleFN0YXRlIH0gZnJvbSAnLi4vbW9kdWxlcy9pbmRleFJlZHVjZXInO1xyXG5cclxuY29uc3QgQ2FyZWVyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMTJweCAxMnB4IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luOiA1MHB4IDE4cHggNjVweCAxOHB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDAgNHB4ICNjOGM4YzggaW5zZXQsIC0ycHggLTRweCA0cHggI2M4YzhjOCBpbnNldDtcclxuYDtcclxuXHJcbmNvbnN0IEltYWdlRGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIG1hcmdpbjogMThweCAyNXB4O1xyXG5gO1xyXG5cclxuY29uc3QgVGl0bGVTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRvcDogLTQwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHggMTJweCAwIDA7XHJcbiAgICBwYWRkaW5nOiAwIDEycHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggNHB4IDRweCAjYzhjOGM4IGluc2V0LCAtMnB4IDAgNHB4ICNjOGM4YzggaW5zZXQ7XHJcbmA7XHJcblxyXG5jb25zdCBDb250ZW50c1NlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHBhZGRpbmc6IDAgMTZweDtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xyXG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgVGV4dERlc2NyaXB0aW9uRGl2ID0gc3R5bGVkLmRpdmBgO1xyXG5cclxuY29uc3QgUGljdHVyZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgei1pbmRleDogMTAxO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5gO1xyXG5cclxuY29uc3QgUHV6emxlU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG5gO1xyXG5cclxuY29uc3QgUHV6emxlRGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luOiA0MHB4IDAgMTAwcHggMDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xNmRlZyk7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHtcclxuICAgICAgICB3aWR0aDogMTYwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IFB1enpsZUxlZnQgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgbGVmdDogLTEwcHg7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgbGVmdDogLTE1cHg7XHJcbiAgICAgICAgdG9wOiAxNXB4O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElQdXp6bGVSaWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgUHV6emxlUmlnaHQgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHM6IElQdXp6bGVSaWdodCkgPT4gcHJvcHMuYmFja2dyb3VuZENvbG9yfTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcmlnaHQ6IC0xMHB4O1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMnB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHRvcDogMTVweDtcclxuICAgICAgICByaWdodDogLTE1cHg7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBQdXp6bGVUb3AgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgdG9wOiAtMTBweDtcclxuICAgIGxlZnQ6IDQwcHg7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgdG9wOiAtMTVweDtcclxuICAgICAgICBsZWZ0OiA2NXB4O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElDYXJlZXJUaXRsZSB7XHJcbiAgICBjb2xvcjogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBDYXJlZXJUaXRsZSA9IHN0eWxlZC5zcGFuYFxyXG4gICAgY29sb3I6ICR7KHByb3BzOiBJQ2FyZWVyVGl0bGUpID0+IHByb3BzLmNvbG9yfTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IG1pbigxLjNlbSwgMC44ZW0gKyAxLjJ2dyk7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSVRleHREZXNjcmlwdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxuICAgIHR5cGU/OiBzdHJpbmc7XHJcbiAgICBzcmM/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IFRleHREZXNjcmlwdGlvbiA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDE4cHggMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IG1pbigxLjFlbSwgMC43ZW0gKyAxLjF2dyk7XHJcbiAgICBwYWRkaW5nOiA4cHggMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcblxyXG4gICAgJHsocHJvcHM6IElUZXh0RGVzY3JpcHRpb24pID0+IHtcclxuICAgICAgICBpZiAocHJvcHMudHlwZSA9PT0gJ2NhbWVyYScpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdcXGYwMzAnO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtwcm9wcy5iYWNrZ3JvdW5kQ29sb3J9O1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogdXJsKCR7cHJvcHMuc3JjfSksIHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wcy50eXBlID09PSAnY2FsZW5kYXInKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjZweDtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnXFxmMjcyJztcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7cHJvcHMuYmFja2dyb3VuZENvbG9yfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYDtcclxuICAgICAgICB9IGVsc2UgaWYgKHByb3BzLnR5cGUgPT09ICdwb3NpdGlvbicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdcXGYyYmInO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtwcm9wcy5iYWNrZ3JvdW5kQ29sb3J9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjZweDtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnXFxmMDA1JztcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7cHJvcHMuYmFja2dyb3VuZENvbG9yfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYDtcclxuICAgICAgICB9XHJcbiAgICB9fVxyXG5gO1xyXG5cclxuY29uc3QgUHV6emxlVGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IENhcmVlckltYWdlID0gc3R5bGVkLmltZ2BcclxuICAgIHdpZHRoOiBtaW4oMjBlbSwgY2FsYygxNWVtICsgMTB2dykpO1xyXG5gO1xyXG5cclxuY29uc3QgUGljdHVyZUltYWdlID0gc3R5bGVkLmltZ2BcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMjhweCk7XHJcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAyOHB4KTtcclxuYDtcclxuXHJcbmludGVyZmFjZSBJQ2FyZWVyIHtcclxuICAgIGNvbXBvbmVudE5vOiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IENhcmVlcjogUmVhY3QuRkM8SUNhcmVlcj4gPSAoeyBjb21wb25lbnRObyB9KTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgLy8gcmVkdXhcclxuICAgIGNvbnN0IGJhY2tncm91bmRDb2xvckFycmF5ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBpbmRleFN0YXRlKSA9PiBzdGF0ZS5iYXNlUmVkdWNlci5iYWNrZ3JvdW5kQ29sb3JBcnJheSk7XHJcblxyXG4gICAgLy8gc3RhdGVcclxuICAgIGNvbnN0IFtwaWN0dXJlSW1hZ2UsIHNldFBpY3R1cmVJbWFnZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuXHJcbiAgICAvLyByZWZcclxuICAgIGNvbnN0IHBpY3R1cmVDb250YWluZXJSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KCk7XHJcblxyXG4gICAgLy8gb25DbGlja1xyXG4gICAgY29uc3Qgb25DbGlja0NhbWVyYSA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxTcGFuRWxlbWVudCwgTW91c2VFdmVudD4sIGltZzogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgaWYgKHBpY3R1cmVDb250YWluZXJSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgc2V0UGljdHVyZUltYWdlKGltZyk7XHJcbiAgICAgICAgICAgIHBpY3R1cmVDb250YWluZXJSZWYuY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25DbGlja1BpY3R1cmVDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHBpY3R1cmVDb250YWluZXJSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICBzZXRQaWN0dXJlSW1hZ2UoJycpO1xyXG4gICAgICAgICAgICBwaWN0dXJlQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEJhc2UgY29tcG9uZW50Tm89e2NvbXBvbmVudE5vfT5cclxuICAgICAgICAgICAgICAgIDxQdXp6bGVTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQdXp6bGVEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQdXp6bGVMZWZ0IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQdXp6bGVSaWdodCBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFB1enpsZVRvcCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHV6emxlVGl0bGU+6rK966ClPC9QdXp6bGVUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L1B1enpsZURpdj5cclxuICAgICAgICAgICAgICAgIDwvUHV6emxlU2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8Q2FyZWVyQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZVNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJlZXJUaXRsZSBjb2xvcj17JyMzM2JkZGEnfT7sgrzshLEg7LKt64WEIOyGjO2UhO2KuOybqOyWtCDslYTsubTrjbDrr7g8L0NhcmVlclRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGl0bGVTZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Q29udGVudHNTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZWVySW1hZ2Ugc3JjPVwiL2ltYWdlL3NzYWZ5MS5QTkdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ltYWdlRGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbkRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119IHR5cGU9XCJjYWxlbmRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDE5LjA3IH4gMjAuMDNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjYW1lcmFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZS90b3BTY29yZV9taW5pLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IG9uQ2xpY2tDYW1lcmEoZSwgJy9pbWFnZS90b3BTY29yZS5qcGcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAx7ZWZ6riwIOuwmCDrjIDtkZwg7ISx7KCBIOyasOyImOyDgSDst6jrk51cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjYW1lcmFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZS9hYnJvYWRFZHVjYXRpb25fbWluaS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBvbkNsaWNrQ2FtZXJhKGUsICcvaW1hZ2UvYWJyb2FkRWR1Y2F0aW9uLmpwZycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIO2VtOyZuCDsl7DsiJgg64yA7IOB7J6Q66GcIOuwnO2DgVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDsm7kg6riw67CYIOq4sOy0iCDrsI8g7Ius7ZmUIOq1kOycoSDsiJjqsJVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjYW1lcmFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZS9zd2V4cGVydFNjb3JlX21pbmkucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gb25DbGlja0NhbWVyYShlLCAnL2ltYWdlL3N3ZXhwZXJ0U2NvcmUuUE5HJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg7IK87ISxIFNXIOyXreufiSDthYzsiqTtirggQSsg7Leo65OdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb25EaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50c1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmVlckNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgICA8Q2FyZWVyQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZVNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJlZXJUaXRsZSBjb2xvcj17JyMwMzI5NzAnfT7tmITrjIAg7Jik7Yag7JeQ67KEPC9DYXJlZXJUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L1RpdGxlU2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRzU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmVlckltYWdlIHNyYz1cIi9pbWFnZS9hdXRvZXZlcjEuUE5HXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbWFnZURpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb25EaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfSB0eXBlPVwiY2FsZW5kYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMC4wMyB+IO2YhOyerFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfSB0eXBlPVwicG9zaXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDsnpDrj5nssKgg7ZKI7KeIIOqwnOyEoCDsi5zsiqTthZwgRkUvQkUg6rCc67CcIOuwjyDsmrTsmIFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg7YyAIOuCtCBHaXQg64+E7J6FIOuwjyDsgqzrgrQg7KeB7JuQ65Ok7JeQ6rKMIEdpdOyCrOyaqSDrsKnrspUg6rWQ7JyhIOuLtOuLuVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDtjIAg64K0IOyLoOq4sOyIoCDsoIHsmqkg64u064u5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOyEnOu5hOyKpCDtmqjsnKjtmZTrpbwg7JyE7ZWcIOyLnOyKpO2FnCDqsJztjrgg7ZSE66Gc7KCd7Yq4IOynhO2WiVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdCDstZzsoIHtmZQg7J6R7JeF7J2EIO2Gte2VnCDshJzruYTsiqQg7IaN64+EIOqwnOyEoFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDsmbjrtoAg7Iuc7Iqk7YWc6rO8IOyXsOqzhOulvCDsnITtlZwg6rO17JqpIFJlc3QgQVBJIOqwnOuwnFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGVudHNTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJlZXJDb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvQmFzZT5cclxuXHJcbiAgICAgICAgICAgIDxQaWN0dXJlQ29udGFpbmVyIHJlZj17cGljdHVyZUNvbnRhaW5lclJlZn0gb25DbGljaz17b25DbGlja1BpY3R1cmVDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPFBpY3R1cmVJbWFnZSBzcmM9e3BpY3R1cmVJbWFnZX0gLz5cclxuICAgICAgICAgICAgPC9QaWN0dXJlQ29udGFpbmVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmVlcjtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHNldElzRW5kQWN0aW9uIH0gZnJvbSAnLi4vbW9kdWxlcy9hY3Rpb25zJztcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuYDtcclxuXHJcbmNvbnN0IFRpdGxlRGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcclxuYDtcclxuXHJcbmNvbnN0IE1haW5TZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5gO1xyXG5cclxuY29uc3QgTWFpblRpdGxlID0gc3R5bGVkLnNwYW5gXHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSUNvbG9yU3BhbiB7XHJcbiAgICBjb2xvcjogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBDb2xvclNwYW4gPSBzdHlsZWQuc3BhbmBcclxuICAgIGNvbG9yOiAkeyhwcm9wczogSUNvbG9yU3BhbikgPT4gcHJvcHMuY29sb3J9O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuYDtcclxuXHJcbmNvbnN0IFRpdGxlQ3Vyc29yID0gc3R5bGVkLnNwYW5gXHJcbiAgICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCAjZmZmO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAjMDAwO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuYDtcclxuXHJcbmNvbnN0IEluaXQgPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIC8vIHJlZlxyXG4gICAgY29uc3QgY29udGFpbmVyUmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG5cclxuICAgIGNvbnN0IHR5cGluZ1N0cmluZ1JlZjEgPSBSZWFjdC51c2VSZWY8SFRNTFNwYW5FbGVtZW50PigpO1xyXG4gICAgY29uc3QgdHlwaW5nU3RyaW5nUmVmMiA9IFJlYWN0LnVzZVJlZjxIVE1MU3BhbkVsZW1lbnQ+KCk7XHJcbiAgICBjb25zdCB0eXBpbmdTdHJpbmdSZWYzID0gUmVhY3QudXNlUmVmPEhUTUxTcGFuRWxlbWVudD4oKTtcclxuICAgIGNvbnN0IHR5cGluZ1N0cmluZ1JlZjQgPSBSZWFjdC51c2VSZWY8SFRNTFNwYW5FbGVtZW50PigpO1xyXG4gICAgY29uc3QgdHlwaW5nU3RyaW5nUmVmNSA9IFJlYWN0LnVzZVJlZjxIVE1MU3BhbkVsZW1lbnQ+KCk7XHJcbiAgICBjb25zdCB0eXBpbmdTdHJpbmdSZWY2ID0gUmVhY3QudXNlUmVmPEhUTUxTcGFuRWxlbWVudD4oKTtcclxuICAgIGNvbnN0IHR5cGluZ1N0cmluZ1JlZjcgPSBSZWFjdC51c2VSZWY8SFRNTFNwYW5FbGVtZW50PigpO1xyXG4gICAgY29uc3QgdHlwaW5nU3RyaW5nUmVmOCA9IFJlYWN0LnVzZVJlZjxIVE1MU3BhbkVsZW1lbnQ+KCk7XHJcblxyXG4gICAgY29uc3QgdHlwaW5nQ3Vyc29yMSA9IFJlYWN0LnVzZVJlZjxIVE1MU3BhbkVsZW1lbnQ+KCk7XHJcbiAgICBjb25zdCB0eXBpbmdDdXJzb3IyID0gUmVhY3QudXNlUmVmPEhUTUxTcGFuRWxlbWVudD4oKTtcclxuICAgIGNvbnN0IHR5cGluZ0N1cnNvcjMgPSBSZWFjdC51c2VSZWY8SFRNTFNwYW5FbGVtZW50PigpO1xyXG4gICAgY29uc3QgdHlwaW5nQ3Vyc29yNCA9IFJlYWN0LnVzZVJlZjxIVE1MU3BhbkVsZW1lbnQ+KCk7XHJcblxyXG4gICAgLy8gdmFyaWFibGVcclxuICAgIGNvbnN0IHRpbWUgPSAxMDA7XHJcblxyXG4gICAgY29uc3Qgc3RyaW5ncyA9IFtcclxuICAgICAgICAnQzpcXFxcVXNlcnNcXFxcVXNlclxcXFxEZXNrdG9wXFxcXHBvcnRmb2xpb1xcXFxzdW5nY2hhbj4nLFxyXG4gICAgICAgICducG0nLFxyXG4gICAgICAgICcgcnVuIHN0YXJ0ICcsXHJcbiAgICAgICAgJ3JlYWR5JyxcclxuICAgICAgICAnIC0gc3RhcnRlZCBwb3J0Zm9saW8gb2Ygc3VuZ2NoYW4sIHVybDogaHR0cHM6Ly9rc2Nwb3J0Zm9saW8uY29tJyxcclxuICAgICAgICAnd2FpdCcsXHJcbiAgICAgICAgJyAtIGNvbXBpbGluZy4uLicsXHJcbiAgICAgICAgJ2V2ZW50JyxcclxuICAgICAgICAnIC0gY29tcGlsZWQgc3VjY2VzZnVsbHknLFxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdCBzdHJpbmdPYmpzID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RyaW5nOiBzdHJpbmdzWzBdLFxyXG4gICAgICAgICAgICBzdGFydDogMCxcclxuICAgICAgICAgICAgbGVuZ3RoOiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdHJpbmc6IHN0cmluZ3NbMV0sXHJcbiAgICAgICAgICAgIHN0YXJ0OiAwLFxyXG4gICAgICAgICAgICBsZW5ndGg6IHRpbWUgKiBzdHJpbmdzWzFdLmxlbmd0aCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RyaW5nOiBzdHJpbmdzWzJdLFxyXG4gICAgICAgICAgICBzdGFydDogdGltZSAqIHN0cmluZ3NbMV0ubGVuZ3RoLFxyXG4gICAgICAgICAgICBsZW5ndGg6IHRpbWUgKiBzdHJpbmdzWzJdLmxlbmd0aCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RyaW5nOiBzdHJpbmdzWzNdLFxyXG4gICAgICAgICAgICBzdGFydDogdGltZSAqIChzdHJpbmdzWzFdLmxlbmd0aCArIHN0cmluZ3NbMl0ubGVuZ3RoICsgc3RyaW5nc1szXS5sZW5ndGgpLFxyXG4gICAgICAgICAgICBsZW5ndGg6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0cmluZzogc3RyaW5nc1s0XSxcclxuICAgICAgICAgICAgc3RhcnQ6IHRpbWUgKiAoc3RyaW5nc1sxXS5sZW5ndGggKyBzdHJpbmdzWzJdLmxlbmd0aCArIHN0cmluZ3NbM10ubGVuZ3RoKSxcclxuICAgICAgICAgICAgbGVuZ3RoOiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdHJpbmc6IHN0cmluZ3NbNV0sXHJcbiAgICAgICAgICAgIHN0YXJ0OiB0aW1lICogKHN0cmluZ3NbMV0ubGVuZ3RoICsgc3RyaW5nc1syXS5sZW5ndGggKyBzdHJpbmdzWzNdLmxlbmd0aCArIHN0cmluZ3NbNV0ubGVuZ3RoKSxcclxuICAgICAgICAgICAgbGVuZ3RoOiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdHJpbmc6IHN0cmluZ3NbNl0sXHJcbiAgICAgICAgICAgIHN0YXJ0OiB0aW1lICogKHN0cmluZ3NbMV0ubGVuZ3RoICsgc3RyaW5nc1syXS5sZW5ndGggKyBzdHJpbmdzWzNdLmxlbmd0aCArIHN0cmluZ3NbNV0ubGVuZ3RoKSxcclxuICAgICAgICAgICAgbGVuZ3RoOiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdHJpbmc6IHN0cmluZ3NbN10sXHJcbiAgICAgICAgICAgIHN0YXJ0OlxyXG4gICAgICAgICAgICAgICAgdGltZSAqXHJcbiAgICAgICAgICAgICAgICAoc3RyaW5nc1sxXS5sZW5ndGggKyBzdHJpbmdzWzJdLmxlbmd0aCArIHN0cmluZ3NbM10ubGVuZ3RoICsgc3RyaW5nc1s1XS5sZW5ndGggKyBzdHJpbmdzWzddLmxlbmd0aCksXHJcbiAgICAgICAgICAgIGxlbmd0aDogMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RyaW5nOiBzdHJpbmdzWzhdLFxyXG4gICAgICAgICAgICBzdGFydDpcclxuICAgICAgICAgICAgICAgIHRpbWUgKlxyXG4gICAgICAgICAgICAgICAgKHN0cmluZ3NbMV0ubGVuZ3RoICsgc3RyaW5nc1syXS5sZW5ndGggKyBzdHJpbmdzWzNdLmxlbmd0aCArIHN0cmluZ3NbNV0ubGVuZ3RoICsgc3RyaW5nc1s3XS5sZW5ndGgpLFxyXG4gICAgICAgICAgICBsZW5ndGg6IDAsXHJcbiAgICAgICAgfSxcclxuICAgIF07XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRUeXBpbmdTdHJpbmdBY3Rpb24xKHR5cGluZ1N0cmluZ1JlZjEsIDEpO1xyXG4gICAgICAgIHNldFR5cGluZ1N0cmluZ0FjdGlvbjEodHlwaW5nU3RyaW5nUmVmMiwgMik7XHJcbiAgICAgICAgc2V0VHlwaW5nU3RyaW5nQWN0aW9uMih0eXBpbmdTdHJpbmdSZWYzLCAzKTtcclxuICAgICAgICBzZXRUeXBpbmdTdHJpbmdBY3Rpb24yKHR5cGluZ1N0cmluZ1JlZjQsIDQpO1xyXG4gICAgICAgIHNldFR5cGluZ1N0cmluZ0FjdGlvbjIodHlwaW5nU3RyaW5nUmVmNSwgNSk7XHJcbiAgICAgICAgc2V0VHlwaW5nU3RyaW5nQWN0aW9uMih0eXBpbmdTdHJpbmdSZWY2LCA2KTtcclxuICAgICAgICBzZXRUeXBpbmdTdHJpbmdBY3Rpb24yKHR5cGluZ1N0cmluZ1JlZjcsIDcpO1xyXG4gICAgICAgIHNldFR5cGluZ1N0cmluZ0FjdGlvbjIodHlwaW5nU3RyaW5nUmVmOCwgOCk7XHJcblxyXG4gICAgICAgIHNldFR5cGluZ0N1cnNvckFjdGlvbih0eXBpbmdDdXJzb3IxLCAwLCBzdHJpbmdPYmpzWzJdLnN0YXJ0ICsgc3RyaW5nT2Jqc1syXS5sZW5ndGgpO1xyXG4gICAgICAgIHNldFR5cGluZ0N1cnNvckFjdGlvbih0eXBpbmdDdXJzb3IyLCBzdHJpbmdPYmpzWzJdLnN0YXJ0ICsgc3RyaW5nT2Jqc1syXS5sZW5ndGgsIHN0cmluZ09ianNbM10uc3RhcnQpO1xyXG4gICAgICAgIHNldFR5cGluZ0N1cnNvckFjdGlvbih0eXBpbmdDdXJzb3IzLCBzdHJpbmdPYmpzWzNdLnN0YXJ0LCBzdHJpbmdPYmpzWzVdLnN0YXJ0KTtcclxuICAgICAgICBzZXRUeXBpbmdDdXJzb3JBY3Rpb24odHlwaW5nQ3Vyc29yNCwgc3RyaW5nT2Jqc1s1XS5zdGFydCwgc3RyaW5nT2Jqc1s3XS5zdGFydCk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChzZXRJc0VuZEFjdGlvbih0cnVlKSk7XHJcbiAgICAgICAgfSwgc3RyaW5nT2Jqc1s3XS5zdGFydCArIHRpbWUgKiA1KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICAvLyDtg4DsnbTtlZEg7LKY66as6rCAIOydtOujqOyWtOyngOuKlCDslaHshZggKOq4gOyekCDtlZjrgpjslKkpXHJcbiAgICBjb25zdCBzZXRUeXBpbmdTdHJpbmdBY3Rpb24xID0gKFxyXG4gICAgICAgIHJlZjogUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxIVE1MU3BhbkVsZW1lbnQ+LCAvLyDtg4DsnbTtlZEg7LKY66as65CgIHJlZlxyXG4gICAgICAgIGluZGV4OiBudW1iZXIsIC8vIOyCrOyaqeuQoCBzdHJpbmcgb2JqIOyduOuNseyKpFxyXG4gICAgKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoYXJJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICByZWYuY3VycmVudC5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0eXBpbmdJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZWYuY3VycmVudC5pbm5lckhUTUwgPSByZWYuY3VycmVudC5pbm5lckhUTUwgKyBzdHJpbmdPYmpzW2luZGV4XS5zdHJpbmdbY2hhckluZGV4KytdO1xyXG4gICAgICAgICAgICAgICAgfSwgdGltZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0eXBpbmdJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgICAgICB9LCBzdHJpbmdPYmpzW2luZGV4XS5sZW5ndGgpO1xyXG4gICAgICAgICAgICB9LCBzdHJpbmdPYmpzW2luZGV4XS5zdGFydCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyDtg4DsnbTtlZEg7LKY66as6rCAIOydtOujqOyWtOyngOuKlCDslaHshZggKOusuOyepSDtlZjrgpjslKkpXHJcbiAgICBjb25zdCBzZXRUeXBpbmdTdHJpbmdBY3Rpb24yID0gKFxyXG4gICAgICAgIHJlZjogUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxIVE1MU3BhbkVsZW1lbnQ+LCAvLyDtg4DsnbTtlZEg7LKY66as65CgIHJlZlxyXG4gICAgICAgIGluZGV4OiBudW1iZXIsIC8vIOyCrOyaqeuQoCBzdHJpbmcgb2JqIOyduOuNseyKpFxyXG4gICAgKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQuaW5uZXJIVE1MID0gc3RyaW5nT2Jqc1tpbmRleF0uc3RyaW5nO1xyXG4gICAgICAgICAgICB9LCBzdHJpbmdPYmpzW2luZGV4XS5zdGFydCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzZXRUeXBpbmdDdXJzb3JBY3Rpb24gPSAoXHJcbiAgICAgICAgcmVmOiBSZWFjdC5NdXRhYmxlUmVmT2JqZWN0PEhUTUxTcGFuRWxlbWVudD4sIC8vIO2DgOydtO2VkSDsspjrpqzrkKAgcmVmXHJcbiAgICAgICAgc3RhcnQ6IG51bWJlciwgLy8g7JWh7IWYIOyLnOyekSDsi5zqsIRcclxuICAgICAgICBsZW5ndGg6IG51bWJlciwgLy8g7JWh7IWYIOq4uOydtFxyXG4gICAgKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xyXG4gICAgICAgICAgICB9LCBzdGFydCk7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlZi5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIH0sIGxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXIgcmVmPXtjb250YWluZXJSZWZ9PlxyXG4gICAgICAgICAgICA8TWFpblNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8VGl0bGVEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1haW5UaXRsZT57c3RyaW5nT2Jqc1swXS5zdHJpbmd9PC9NYWluVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1haW5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbG9yU3BhbiBjb2xvcj1cIiNmZmYxMDBcIiByZWY9e3R5cGluZ1N0cmluZ1JlZjF9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHJlZj17dHlwaW5nU3RyaW5nUmVmMn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L01haW5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8VGl0bGVDdXJzb3IgcmVmPXt0eXBpbmdDdXJzb3IxfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9UaXRsZURpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8VGl0bGVEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1haW5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbG9yU3BhbiBjb2xvcj1cIiMyMjkzMDBcIiByZWY9e3R5cGluZ1N0cmluZ1JlZjN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHJlZj17dHlwaW5nU3RyaW5nUmVmNH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L01haW5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8VGl0bGVDdXJzb3IgcmVmPXt0eXBpbmdDdXJzb3IyfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9UaXRsZURpdj5cclxuICAgICAgICAgICAgICAgIDxUaXRsZURpdj5cclxuICAgICAgICAgICAgICAgICAgICA8TWFpblRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sb3JTcGFuIGNvbG9yPVwiIzAwNmE3Y1wiIHJlZj17dHlwaW5nU3RyaW5nUmVmNX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gcmVmPXt0eXBpbmdTdHJpbmdSZWY2fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWFpblRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZUN1cnNvciByZWY9e3R5cGluZ0N1cnNvcjN9IC8+XHJcbiAgICAgICAgICAgICAgICA8L1RpdGxlRGl2PlxyXG4gICAgICAgICAgICAgICAgPFRpdGxlRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNYWluVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2xvclNwYW4gY29sb3I9XCIjNjgwMDhhXCIgcmVmPXt0eXBpbmdTdHJpbmdSZWY3fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiByZWY9e3R5cGluZ1N0cmluZ1JlZjh9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NYWluVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlQ3Vyc29yIHJlZj17dHlwaW5nQ3Vyc29yNH0gLz5cclxuICAgICAgICAgICAgICAgIDwvVGl0bGVEaXY+XHJcbiAgICAgICAgICAgIDwvTWFpblNlY3Rpb24+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5pdDtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcclxuXHJcbmNvbnN0IEludHJvQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNTZweCk7XHJcbiAgICBwYWRkaW5nOiAyOHB4IDIycHg7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSUNvbnRlbnRzU2VjdGlvbiB7XHJcbiAgICBoZWlnaHQ/OiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IENvbnRlbnRzU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDdmcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIycHg7XHJcblxyXG4gICAgaGVpZ2h0OiAkeyhwcm9wczogSUNvbnRlbnRzU2VjdGlvbikgPT4gcHJvcHMuaGVpZ2h0fXB4O1xyXG5gO1xyXG5cclxuY29uc3QgQ29udGVudHNUaXRsZSA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogbWluKGNhbGMoMC44ZW0gKyAwLjh2dyksIDEuMWVtKTtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbmA7XHJcblxyXG5jb25zdCBDb250ZW50c0Rlc2NyaXB0aW9uID0gc3R5bGVkLnNwYW5gXHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiBtaW4oY2FsYygxZW0gKyAxdncpLCAxLjhlbSk7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSUludHJvIHtcclxuICAgIGNvbXBvbmVudE5vOiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IEludHJvOiBSZWFjdC5GQzxJSW50cm8+ID0gKHsgY29tcG9uZW50Tm8gfSk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIC8vIHN0YXRlXHJcbiAgICBjb25zdCBbYWRkU2VjdGlvbnMsIHNldEFkZFNlY3Rpb25zXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcltdPihbXSk7XHJcbiAgICBjb25zdCBbYWRkU2VjdGlvbnNUaW1lb3V0LCBzZXRBZGRTZWN0aW9uc1RpbWVvdXRdID0gUmVhY3QudXNlU3RhdGU8Tm9kZUpTLlRpbWVvdXQ+KCk7XHJcblxyXG4gICAgLy8gcmVmXHJcbiAgICBjb25zdCBpbnRyb0NvbnRhaW5lclJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuICAgIGNvbnN0IGNvbnRlbnRzU2VjdGlvblJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuXHJcbiAgICAvLyB2YXJpYWJsZVxyXG4gICAgY29uc3QgY29udGVudHNBcnJheSA9IFtcclxuICAgICAgICB7IHRpdGxlOiAn7J2066aEJywgZGVzY3JpcHRpb246ICfquYDshLHssKwnIH0sXHJcbiAgICAgICAgeyB0aXRsZTogJ+yDneuFhOyblOydvCcsIGRlc2NyaXB0aW9uOiAnOTQuMTIuMDknIH0sXHJcbiAgICAgICAgeyB0aXRsZTogJ+ydtOuplOydvCcsIGRlc2NyaXB0aW9uOiAndGpkY2tzZGwwMEBuYXZlci5jb20nIH0sXHJcbiAgICAgICAgeyB0aXRsZTogJ+yXsOudveyymCcsIGRlc2NyaXB0aW9uOiAnMDEwLTMzNjEtMzYzMycgfSxcclxuICAgICAgICB7IHRpdGxlOiAn7ZWZ6rWQJywgZGVzY3JpcHRpb246ICftlZzslpHrjIAgRVJJQ0EnIH0sXHJcbiAgICAgICAgeyB0aXRsZTogJ+yjvOyghOqztScsIGRlc2NyaXB0aW9uOiAn7J2R7Jqp7IiY7ZWZJyB9LFxyXG4gICAgICAgIHsgdGl0bGU6ICfrtoDsoITqs7UnLCBkZXNjcmlwdGlvbjogJ+y7tO2TqO2EsOqzte2VmScgfSxcclxuICAgICAgICB7IHRpdGxlOiAn6rK966ClJywgZGVzY3JpcHRpb246ICcx64WEIDPqsJzsm5QnIH0sXHJcbiAgICAgICAgeyB0aXRsZTogJ+q4sOyIoOu2hOyVvCcsIGRlc2NyaXB0aW9uOiAnRkUvQkUg7Ju5IOqwnOuwnCcgfSxcclxuICAgIF07XHJcblxyXG4gICAgLy8gdXNlRWZmZWN0XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBnZXRBZGRTZWN0aW9ucyk7XHJcbiAgICAgICAgZ2V0QWRkU2VjdGlvbnMoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGdldEFkZFNlY3Rpb25zKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIC8vIG5vcm1hbFxyXG4gICAgLy8gY29udGVudHPrpbwg7KCc7Jm47ZWcIOu2gOqwgCDrhIjruYQg6rWs7ZWY6riwXHJcbiAgICBjb25zdCBnZXRBZGRTZWN0aW9ucyA9ICgpID0+IHtcclxuICAgICAgICAvLyB0cmFuc2l0aW9u7Jy866GcIOyduO2VtCBoZWlnaHTqsIAgMey0iCDrkqTsl5Ag7Jis67CU66W4IOuGkuydtOulvCDrsJTrnbzrs7Trr4DroZwgdGltZW91dCDqtaztmIRcclxuICAgICAgICBjbGVhclRpbWVvdXQoYWRkU2VjdGlvbnNUaW1lb3V0KTtcclxuXHJcbiAgICAgICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0b3RhbENvdW50ID0gaW50cm9Db250YWluZXJSZWYuY3VycmVudC5jbGllbnRIZWlnaHQgLyAoY29udGVudHNTZWN0aW9uUmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0ICsgMzApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYWRkU2VjdGlvbnMgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbENvdW50IC0gY29udGVudHNBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgYWRkU2VjdGlvbnMucHVzaChpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2V0QWRkU2VjdGlvbnMoYWRkU2VjdGlvbnMpO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG5cclxuICAgICAgICBzZXRBZGRTZWN0aW9uc1RpbWVvdXQodGltZW91dCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJhc2UgY29tcG9uZW50Tm89e2NvbXBvbmVudE5vfT5cclxuICAgICAgICAgICAgPEludHJvQ29udGFpbmVyIHJlZj17aW50cm9Db250YWluZXJSZWZ9PlxyXG4gICAgICAgICAgICAgICAge2NvbnRlbnRzQXJyYXkubWFwKChjb250ZW50cywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50c1NlY3Rpb24ga2V5PXtpbmRleH0gcmVmPXtjb250ZW50c1NlY3Rpb25SZWZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50c1RpdGxlPntjb250ZW50cy50aXRsZX08L0NvbnRlbnRzVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRzRGVzY3JpcHRpb24+e2NvbnRlbnRzLmRlc2NyaXB0aW9ufTwvQ29udGVudHNEZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGVudHNTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGVudHNTZWN0aW9uIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50c1RpdGxlPntjb250ZW50cy50aXRsZX08L0NvbnRlbnRzVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRzRGVzY3JpcHRpb24+e2NvbnRlbnRzLmRlc2NyaXB0aW9ufTwvQ29udGVudHNEZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGVudHNTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pfVxyXG5cclxuICAgICAgICAgICAgICAgIHthZGRTZWN0aW9ucy5tYXAoKGFkZFNlY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udGVudHNTZWN0aW9uIGtleT17YWRkU2VjdGlvbn0gaGVpZ2h0PXtjb250ZW50c1NlY3Rpb25SZWYuY3VycmVudC5jbGllbnRIZWlnaHQgLSA4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50c1RpdGxlIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGVudHNEZXNjcmlwdGlvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnRzU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvSW50cm9Db250YWluZXI+XHJcbiAgICAgICAgPC9CYXNlPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEludHJvO1xyXG4iLCIvLyBpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG4vLyBpbXBvcnQgeyBtYXhXaWR0aCB9IGZyb20gJy4uL3N0eWxlL3N0eWxlJztcclxuXHJcbi8vIGNvbnN0IFN0eWxlZFNlY3Rpb24xID0gc3R5bGVkLnNlY3Rpb25gXHJcbi8vICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9pbWFnZS9tYWluSW1hZ2UuanBnJyk7XHJcbi8vICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4vLyAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuLy8gYDtcclxuXHJcbi8vIGNvbnN0IFN0eWxlZERpdjEgPSBzdHlsZWQuZGl2YFxyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICBwYWRkaW5nOiA4MnB4IDA7XHJcbi8vIGA7XHJcblxyXG4vLyBpbnRlcmZhY2UgSVN0eWVsZERpdjIge1xyXG4vLyAgICAgaW5uZXJXaWR0aDogbnVtYmVyO1xyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBTdHlsZWREaXYyID0gc3R5bGVkLmRpdmBcclxuLy8gICAgIGRpc3BsYXk6ICR7KHByb3BzOiBJU3R5ZWxkRGl2MikgPT4gKHByb3BzLmlubmVyV2lkdGggPj0gbWF4V2lkdGggPyAnYmxvY2snIDogJ25vbmUnKX07XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICBtYXJnaW46IDY4cHggMDtcclxuLy8gYDtcclxuXHJcbi8vIGNvbnN0IGRpdjNLZXlGcmFtZTEgPSBrZXlmcmFtZXNgXHJcbi8vICAgICA1MCUge1xyXG4vLyAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XHJcbi8vICAgICB9XHJcbi8vIGA7XHJcblxyXG4vLyBjb25zdCBTdHlsZWREaXYzID0gc3R5bGVkLmRpdmBcclxuLy8gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbi8vICAgICAmOmhvdmVyIHtcclxuLy8gICAgICAgICBhbmltYXRpb246IDEuOHMgJHtkaXYzS2V5RnJhbWUxfSBpbmZpbml0ZTtcclxuLy8gICAgIH1cclxuLy8gYDtcclxuXHJcbi8vIGNvbnN0IFN0eWxlZERpdjQgPSBzdHlsZWQuZGl2YFxyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICB3aWR0aDogMTUycHg7XHJcbi8vICAgICBoZWlnaHQ6IDE1MnB4O1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NhZjBiZTtcclxuLy8gICAgIG1hcmdpbjogMTZweCAzMnB4O1xyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkRGl2NSA9IHN0eWxlZC5kaXZgXHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vIGA7XHJcblxyXG4vLyBjb25zdCBTdHlsZWREaXY2ID0gc3R5bGVkLmRpdmBcclxuLy8gICAgIG1heC13aWR0aDogJHttYXhXaWR0aH1weDtcclxuLy8gICAgIG1hcmdpbjogMCBhdXRvO1xyXG4vLyAgICAgcGFkZGluZzogMCAxNXB4O1xyXG5cclxuLy8gICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7bWF4V2lkdGggKyA1MH1weCkge1xyXG4vLyAgICAgICAgIG1hcmdpbi1ib3R0b206IDg0cHg7XHJcbi8vICAgICB9XHJcbi8vIGA7XHJcblxyXG4vLyBjb25zdCBTdHlsZWRUaXRsZSA9IHN0eWxlZC5zcGFuYFxyXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vICAgICBmb250LXNpemU6IDMuNmVtO1xyXG4vLyAgICAgY29sb3I6ICNmZmY7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4vLyAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIHtcclxuLy8gICAgICAgICBmb250LXNpemU6IDQuOGVtO1xyXG4vLyAgICAgfVxyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkU3ViVGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuLy8gICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbi8vICAgICBjb2xvcjogI2ZmZjtcclxuLy8gYDtcclxuXHJcbi8vIGNvbnN0IFN0eWxlZEgzXzEgPSBzdHlsZWQuaDNgXHJcbi8vICAgICBmb250LXNpemU6IDEuNGVtO1xyXG4vLyAgICAgY29sb3I6ICM2NThjNTk7XHJcbi8vIGA7XHJcblxyXG4vLyBjb25zdCBTdHlsZWRTcGFuMSA9IHN0eWxlZC5zcGFuYFxyXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vICAgICBjb2xvcjogIzNhNTIzMztcclxuLy8gYDtcclxuXHJcbi8vIGludGVyZmFjZSBJTWFpbiB7XHJcbi8vICAgICBpbm5lcldpZHRoOiBudW1iZXI7XHJcbi8vICAgICB0aXRsZUFycmF5OiBzdHJpbmdbXTtcclxuLy8gfVxyXG5cclxuLy8gY29uc3QgTWFpbjogUmVhY3QuRkM8SU1haW4+ID0gKHsgaW5uZXJXaWR0aCwgdGl0bGVBcnJheSB9KTogSlNYLkVsZW1lbnQgPT4ge1xyXG4vLyAgICAgY29uc3Qgb25DbGlja0RpdjMgPSAodGl0bGU6IHN0cmluZykgPT4ge1xyXG4vLyAgICAgICAgIGNvbnN0IHRpdGxlU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRpdGxlKTtcclxuXHJcbi8vICAgICAgICAgaWYgKHRpdGxlU2VjdGlvbikge1xyXG4vLyAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsQnkoeyB0b3A6IHRpdGxlU2VjdGlvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9O1xyXG5cclxuLy8gICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgPFN0eWxlZFNlY3Rpb24xPlxyXG4vLyAgICAgICAgICAgICA8U3R5bGVkRGl2Nj5cclxuLy8gICAgICAgICAgICAgICAgIDxTdHlsZWREaXY1PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXYyIGlubmVyV2lkdGg9e2lubmVyV2lkdGh9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGVBcnJheS5tYXAoKHRpdGxlKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXYzIGtleT17dGl0bGV9IG9uQ2xpY2s9eygpID0+IG9uQ2xpY2tEaXYzKHRpdGxlKX0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXY0PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZEgzXzE+e3RpdGxlfTwvU3R5bGVkSDNfMT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMT5HbyDihpI8L1N0eWxlZFNwYW4xPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZERpdjQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXYzPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXYyPlxyXG5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRGl2MT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFRpdGxlPuq5gOyEseywrOydmCBQb3J0Zm9saW88L1N0eWxlZFRpdGxlPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3ViVGl0bGU+U2luY2UgMjAyMTwvU3R5bGVkU3ViVGl0bGU+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXYxPlxyXG4vLyAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXY1PlxyXG4vLyAgICAgICAgICAgICA8L1N0eWxlZERpdjY+XHJcbi8vICAgICAgICAgPC9TdHlsZWRTZWN0aW9uMT5cclxuLy8gICAgICk7XHJcbi8vIH07XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBNYWluO1xyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcclxuXHJcbmNvbnN0IFRpdGxlU2VjdGlvbktleUZyYW1lID0ga2V5ZnJhbWVzYFxyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0MHB4KTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZnJvbTogdHJhbnNsYXRlWSgwKTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgVGl0bGVTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICBwYWRkaW5nOiAwIDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgYW5pbWF0aW9uLW5hbWU6ICR7VGl0bGVTZWN0aW9uS2V5RnJhbWV9O1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcclxuYDtcclxuXHJcbmNvbnN0IEFycm93RGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwcHgpIHRyYW5zbGF0ZVkoMTAwcHgpIHJvdGF0ZSgtMTVkZWcpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogNDBweCAwO1xyXG5cclxuICAgICY6IGhvdmVyIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMzBweCkgdHJhbnNsYXRlWSgxMDBweCkgcm90YXRlKC0xNWRlZyk7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuYDtcclxuXHJcbmludGVyZmFjZSBJQXJyb3dMZWZ0RGl2IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBBcnJvd0xlZnREaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAkeygxMjAgLSAxMjAgLyBNYXRoLnNxcnQoMikpIC8gMn1weDtcclxuICAgIGxlZnQ6IC0kezYwIC0gKDEyMCAtIDEyMCAvIE1hdGguc3FydCgyKSkgLyAyfXB4O1xyXG4gICAgd2lkdGg6ICR7MTIwIC8gTWF0aC5zcXJ0KDIpfXB4O1xyXG4gICAgaGVpZ2h0OiAkezEyMCAvIE1hdGguc3FydCgyKX1weDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzOiBJQXJyb3dMZWZ0RGl2KSA9PiBwcm9wcy5iYWNrZ3JvdW5kQ29sb3J9O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuYDtcclxuXHJcbmludGVyZmFjZSBJQXJyb3dSaWdodERpdiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgQXJyb3dSaWdodERpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6ICR7KDEyMCAtIDEyMCAvIE1hdGguc3FydCgyKSkgLyAyfXB4O1xyXG4gICAgcmlnaHQ6IC0kezYwIC0gKDEyMCAtIDEyMCAvIE1hdGguc3FydCgyKSkgLyAyfXB4O1xyXG4gICAgd2lkdGg6ICR7MTIwIC8gTWF0aC5zcXJ0KDIpfXB4O1xyXG4gICAgaGVpZ2h0OiAkezEyMCAvIE1hdGguc3FydCgyKX1weDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzOiBJQXJyb3dSaWdodERpdikgPT4gcHJvcHMuYmFja2dyb3VuZENvbG9yfTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSU1haW5UaXRsZSB7XHJcbiAgICBtYXJnaW5MZWZ0PzogbnVtYmVyO1xyXG4gICAgbWFyZ2luUmlnaHQ/OiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IE1haW5UaXRsZSA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IGNhbGMoNTRweCArIDEuNXZ3KTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tbGVmdDogJHsocHJvcHM6IElNYWluVGl0bGUpID0+IHByb3BzLm1hcmdpbkxlZnR9cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6ICR7KHByb3BzOiBJTWFpblRpdGxlKSA9PiBwcm9wcy5tYXJnaW5SaWdodH1weDtcclxuYDtcclxuXHJcbmludGVyZmFjZSBJTWFpbiB7XHJcbiAgICBjb21wb25lbnRObzogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBNYWluOiBSZWFjdC5GQzxJTWFpbj4gPSAoeyBjb21wb25lbnRObyB9KTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QmFzZSBjb21wb25lbnRObz17Y29tcG9uZW50Tm99PlxyXG4gICAgICAgICAgICAgICAgPEFycm93RGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBcnJvd0xlZnREaXYgYmFja2dyb3VuZENvbG9yPVwiIzc1NzI3MFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFycm93UmlnaHREaXYgYmFja2dyb3VuZENvbG9yPVwicmVkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8TWFpblRpdGxlIG1hcmdpbkxlZnQ9ezYwfT7quYDshLHssKzsnZg8L01haW5UaXRsZT5cclxuICAgICAgICAgICAgICAgIDwvQXJyb3dEaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPEFycm93RGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBcnJvd0xlZnREaXYgYmFja2dyb3VuZENvbG9yPVwicmVkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8QXJyb3dSaWdodERpdiBiYWNrZ3JvdW5kQ29sb3I9XCIjNzU3MjcwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8TWFpblRpdGxlIG1hcmdpblJpZ2h0PXs2MH0+6rmA7ISx7LCs7J2YPC9NYWluVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8L0Fycm93RGl2PlxyXG4gICAgICAgICAgICA8L0Jhc2U+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IE1vcmVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbmA7XHJcblxyXG5jb25zdCBIZWFkZXJTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICBtYXJnaW46IDI0cHggMDtcclxuICAgIHBhZGRpbmc6IDAgMjRweDtcclxuYDtcclxuXHJcbmNvbnN0IFVybFNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBwYWRkaW5nOiAwIDI0cHg7XHJcbmA7XHJcblxyXG5jb25zdCBGb290ZXJTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICBtYXJnaW46IDQ4cHggMDtcclxuICAgIHBhZGRpbmc6IDAgMjRweDtcclxuYDtcclxuXHJcbmNvbnN0IFVybE1haW5EaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIG1hcmdpbjogMCAyNHB4IDI0cHggMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBVcmxTdWJEaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgRm9vdGVyTWFpbkRpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgbWFyZ2luOiAwIDI0cHggMjRweCAwO1xyXG5gO1xyXG5cclxuY29uc3QgRm9vdGVyU3ViRGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IEhlYWRlclRleHQgPSBzdHlsZWQuc3BhbmBcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogbWluKDEuOWVtLCAxLjNlbSArIDF2dyk7XHJcbmA7XHJcblxyXG5jb25zdCBVcmxUZXh0ID0gc3R5bGVkLnNwYW5gXHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiBtaW4oMS4yZW0sIDFlbSArIDAuN3Z3KTtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbmA7XHJcblxyXG5jb25zdCBGb290ZXJUZXh0ID0gc3R5bGVkLnNwYW5gXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IG1pbigxLjVlbSwgMS4xZW0gKyAwLjl2dyk7XHJcbmA7XHJcblxyXG5jb25zdCBVcmxJbWFnZSA9IHN0eWxlZC5pbWdgXHJcbiAgICB3aWR0aDogbWluKDhlbSwgNWVtICsgNi40dncpO1xyXG5gO1xyXG5cclxuY29uc3QgTG9nb0ltYWdlID0gc3R5bGVkLmltZ2BcclxuICAgIHdpZHRoOiBtaW4oOGVtLCA1ZW0gKyA2LjR2dyk7XHJcbiAgICBtYXJnaW46IDEycHggMDtcclxuYDtcclxuXHJcbmludGVyZmFjZSBJTW9yZSB7XHJcbiAgICBjb21wb25lbnRObzogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBNb3JlOiBSZWFjdC5GQzxJTW9yZT4gPSAoeyBjb21wb25lbnRObyB9KTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgLy8gb25DbGlja1xyXG4gICAgY29uc3Qgb25DbGlja1VybE1haW5EaXYgPSAodXJsOiBzdHJpbmcpID0+IHtcclxuICAgICAgICB3aW5kb3cub3Blbih1cmwpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCYXNlIGNvbXBvbmVudE5vPXtjb21wb25lbnROb30+XHJcbiAgICAgICAgICAgIDxNb3JlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlclNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlclRleHQ+6rmA7ISx7LCs7J2YIFBvcnRmb2xpbzwvSGVhZGVyVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyVGV4dD5WZXJzaW9uIDEuMC4wPC9IZWFkZXJUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXJUZXh0PjIwMjEuMDguMTE8L0hlYWRlclRleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWRlclNlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgPFVybFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPFVybE1haW5EaXYgb25DbGljaz17KCkgPT4gb25DbGlja1VybE1haW5EaXYoJ2h0dHBzOi8vZ2l0aHViLmNvbS9rc2NjbXAnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxVcmxTdWJEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VXJsSW1hZ2Ugc3JjPVwiL2ltYWdlL2dpdGh1Yi5QTkdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFVybFRleHQ+aHR0cHM6Ly9naXRodWIuY29tL2tzY2NtcDwvVXJsVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9VcmxTdWJEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9VcmxNYWluRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxVcmxNYWluRGl2IG9uQ2xpY2s9eygpID0+IG9uQ2xpY2tVcmxNYWluRGl2KCdodHRwczovL2pmb3JqLnRpc3RvcnkuY29tJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VXJsU3ViRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFVybEltYWdlIHNyYz1cIi9pbWFnZS90aXN0b3J5LlBOR1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VXJsVGV4dD5odHRwczovL2pmb3JqLnRpc3RvcnkuY29tPC9VcmxUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1VybFN1YkRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L1VybE1haW5EaXY+XHJcbiAgICAgICAgICAgICAgICA8L1VybFNlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgPEZvb3RlclNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvb3Rlck1haW5EaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb290ZXJTdWJEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9vdGVyVGV4dD5EZXNpZ25lZCBCeSDquYDshLHssKw8L0Zvb3RlclRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9nb0ltYWdlIHNyYz1cIi9pbWFnZS9TQ0xvZ28yLnN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9vdGVyU3ViRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9vdGVyTWFpbkRpdj5cclxuICAgICAgICAgICAgICAgIDwvRm9vdGVyU2VjdGlvbj5cclxuICAgICAgICAgICAgPC9Nb3JlQ29udGFpbmVyPlxyXG4gICAgICAgIDwvQmFzZT5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3JlO1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XHJcbmltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgaW5kZXhTdGF0ZSB9IGZyb20gJy4uL21vZHVsZXMvaW5kZXhSZWR1Y2VyJztcclxuXHJcbmNvbnN0IFByb2plY3RzQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMTJweCAxMnB4IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luOiA1MHB4IDE4cHggNjVweCAxOHB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDAgNHB4ICNjOGM4YzggaW5zZXQsIC0ycHggLTRweCA0cHggI2M4YzhjOCBpbnNldDtcclxuYDtcclxuXHJcbmNvbnN0IEltYWdlRGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIG1hcmdpbjogMThweCAyNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5gO1xyXG5cclxuY29uc3QgVGl0bGVTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRvcDogLTQwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHggMTJweCAwIDA7XHJcbiAgICBwYWRkaW5nOiAwIDEycHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggNHB4IDRweCAjYzhjOGM4IGluc2V0LCAtMnB4IDAgNHB4ICNjOGM4YzggaW5zZXQ7XHJcbmA7XHJcblxyXG5jb25zdCBDb250ZW50c1NlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHBhZGRpbmc6IDAgMTZweDtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xyXG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgVGV4dERlc2NyaXB0aW9uRGl2ID0gc3R5bGVkLmRpdmBgO1xyXG5cclxuY29uc3QgUGljdHVyZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgei1pbmRleDogMTAxO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5gO1xyXG5cclxuY29uc3QgUHV6emxlU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG5gO1xyXG5cclxuY29uc3QgUHV6emxlRGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luOiA0MHB4IDAgMTAwcHggMDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xNmRlZyk7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHtcclxuICAgICAgICB3aWR0aDogMTYwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIH1cclxuYDtcclxuXHJcbmludGVyZmFjZSBJUHV6emxlTGVmdCB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgUHV6emxlTGVmdCA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wczogSVB1enpsZUxlZnQpID0+IHByb3BzLmJhY2tncm91bmRDb2xvcn07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHRvcDogMTBweDtcclxuICAgIGxlZnQ6IC0xMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGxlZnQ6IC0xNXB4O1xyXG4gICAgICAgIHRvcDogMTVweDtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IFB1enpsZVJpZ2h0ID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHRvcDogMTBweDtcclxuICAgIHJpZ2h0OiAtMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDNweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICB0b3A6IDE1cHg7XHJcbiAgICAgICAgcmlnaHQ6IC0xNXB4O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgUHV6emxlVG9wID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHRvcDogLTEwcHg7XHJcbiAgICBsZWZ0OiA0MHB4O1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHRvcDogLTE1cHg7XHJcbiAgICAgICAgbGVmdDogNjVweDtcclxuICAgIH1cclxuYDtcclxuXHJcbmludGVyZmFjZSBJQ2FyZWVyVGl0bGUge1xyXG4gICAgY29sb3I/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IENhcmVlclRpdGxlID0gc3R5bGVkLnNwYW5gXHJcbiAgICBjb2xvcjogJHsocHJvcHM6IElDYXJlZXJUaXRsZSkgPT4gcHJvcHMuY29sb3J9O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogbWluKDEuM2VtLCAwLjhlbSArIDEuMnZ3KTtcclxuYDtcclxuXHJcbmludGVyZmFjZSBJVGV4dERlc2NyaXB0aW9uIHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xyXG4gICAgdHlwZT86IHN0cmluZztcclxuICAgIHNyYz86IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgVGV4dERlc2NyaXB0aW9uID0gc3R5bGVkLnNwYW5gXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMThweCAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogbWluKDEuMWVtLCAwLjdlbSArIDEuMXZ3KTtcclxuICAgIHBhZGRpbmc6IDhweCAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xyXG5cclxuICAgICR7KHByb3BzOiBJVGV4dERlc2NyaXB0aW9uKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb3BzLnR5cGUgPT09ICdjYW1lcmEnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjZweDtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnXFxmMDMwJztcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7cHJvcHMuYmFja2dyb3VuZENvbG9yfTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHVybCgke3Byb3BzLnNyY30pLCBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocHJvcHMudHlwZSA9PT0gJ2NhbGVuZGFyJykge1xyXG4gICAgICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ1xcZjI3Mic7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke3Byb3BzLmJhY2tncm91bmRDb2xvcn07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wcy50eXBlID09PSAncG9zaXRpb24nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjZweDtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnXFxmMmJiJztcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7cHJvcHMuYmFja2dyb3VuZENvbG9yfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYDtcclxuICAgICAgICB9IGVsc2UgaWYgKHByb3BzLnR5cGUgPT09ICdsaW5rJykge1xyXG4gICAgICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ1xcZjBjMSc7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke3Byb3BzLmJhY2tncm91bmRDb2xvcn07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wcy50eXBlID09PSAnY29kZScpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdcXGYxMjEnO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtwcm9wcy5iYWNrZ3JvdW5kQ29sb3J9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjZweDtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnXFxmMDA1JztcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7cHJvcHMuYmFja2dyb3VuZENvbG9yfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYDtcclxuICAgICAgICB9XHJcbiAgICB9fVxyXG5gO1xyXG5cclxuY29uc3QgUHV6emxlVGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IENhcmVlckltYWdlID0gc3R5bGVkLmltZ2BcclxuICAgIHdpZHRoOiBtaW4oMjBlbSwgY2FsYygxNWVtICsgMTB2dykpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG5gO1xyXG5cclxuY29uc3QgUGljdHVyZUltYWdlID0gc3R5bGVkLmltZ2BcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMjhweCk7XHJcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAyOHB4KTtcclxuYDtcclxuXHJcbmludGVyZmFjZSBJUHJvamVjdHMge1xyXG4gICAgY29tcG9uZW50Tm86IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgUHJvamVjdHM6IFJlYWN0LkZDPElQcm9qZWN0cz4gPSAoeyBjb21wb25lbnRObyB9KTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgLy8gcmVkdXhcclxuICAgIGNvbnN0IGJhY2tncm91bmRDb2xvckFycmF5ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBpbmRleFN0YXRlKSA9PiBzdGF0ZS5iYXNlUmVkdWNlci5iYWNrZ3JvdW5kQ29sb3JBcnJheSk7XHJcblxyXG4gICAgLy8gc3RhdGVcclxuICAgIGNvbnN0IFtwaWN0dXJlSW1hZ2UsIHNldFBpY3R1cmVJbWFnZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuICAgIGNvbnN0IFtjdXJyZW50SW1hZ2VJbmRleCwgc2V0Q3VycmVudEltYWdlSW5kZXhdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyW10+KFswLCAwLCAwLCAwXSk7XHJcblxyXG4gICAgLy8gcmVmXHJcbiAgICBjb25zdCBwaWN0dXJlQ29udGFpbmVyUmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG5cclxuICAgIC8vIHZhcmlhYmxlXHJcbiAgICBjb25zdCBpbWFnZXMgPSBbXHJcbiAgICAgICAgWycvaW1hZ2Uvc3NhZnkxLlBORyddLFxyXG4gICAgICAgIFsnL2ltYWdlL2dyb3VieV8wLlBORycsICcvaW1hZ2UvZ3JvdWJ5XzEuUE5HJywgJy9pbWFnZS9ncm91YnlfMi5QTkcnLCAnL2ltYWdlL2dyb3VieV8zLlBORyddLFxyXG4gICAgICAgIFsnL2ltYWdlL3NzYWZ5MS5QTkcnXSxcclxuICAgICAgICBbJy9pbWFnZS9tb3lvXzAuUE5HJywgJy9pbWFnZS9tb3lvXzEuUE5HJywgJy9pbWFnZS9tb3lvXzIuUE5HJywgJy9pbWFnZS9tb3lvXzMuUE5HJ10sXHJcbiAgICBdO1xyXG5cclxuICAgIC8vIG9uQ2xpY2tcclxuICAgIGNvbnN0IG9uQ2xpY2tJbWFnZURpdiA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRlbXBDdXJyZW50SW1hZ2VJbmRleCA9IGN1cnJlbnRJbWFnZUluZGV4LnNsaWNlKCk7XHJcbiAgICAgICAgdGVtcEN1cnJlbnRJbWFnZUluZGV4W2luZGV4XSA9ICh0ZW1wQ3VycmVudEltYWdlSW5kZXhbaW5kZXhdICsgMSkgJSBpbWFnZXNbaW5kZXhdLmxlbmd0aDtcclxuXHJcbiAgICAgICAgc2V0Q3VycmVudEltYWdlSW5kZXgodGVtcEN1cnJlbnRJbWFnZUluZGV4KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25DbGlja0NhbWVyYSA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxTcGFuRWxlbWVudCwgTW91c2VFdmVudD4sIGltZzogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgaWYgKHBpY3R1cmVDb250YWluZXJSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgc2V0UGljdHVyZUltYWdlKGltZyk7XHJcbiAgICAgICAgICAgIHBpY3R1cmVDb250YWluZXJSZWYuY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25DbGlja1BpY3R1cmVDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHBpY3R1cmVDb250YWluZXJSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICBzZXRQaWN0dXJlSW1hZ2UoJycpO1xyXG4gICAgICAgICAgICBwaWN0dXJlQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEJhc2UgY29tcG9uZW50Tm89e2NvbXBvbmVudE5vfT5cclxuICAgICAgICAgICAgICAgIDxQdXp6bGVTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQdXp6bGVEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQdXp6bGVMZWZ0IGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHV6emxlUmlnaHQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFB1enpsZVRvcCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHV6emxlVGl0bGU+7ZSE66Gc7KCd7Yq4PC9QdXp6bGVUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L1B1enpsZURpdj5cclxuICAgICAgICAgICAgICAgIDwvUHV6emxlU2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8UHJvamVjdHNDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmVlclRpdGxlPlBvcnRmb2xpbzwvQ2FyZWVyVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UaXRsZVNlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxDb250ZW50c1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZURpdiBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrSW1hZ2VEaXYoMCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmVlckltYWdlIHNyYz17aW1hZ2VzWzBdW2N1cnJlbnRJbWFnZUluZGV4WzBdXX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbWFnZURpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb25EaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfSB0eXBlPVwiY2FsZW5kYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMS4wNyB+IDIxLjA4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119IHR5cGU9XCJjb2RlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRkUg4oaSIE5leHQgLyBUeXBlU2NyaXB0IC8gUmVkdXggLyBIb29rcyAvIFN0eWxlZENvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDsm7kg7IKs7J207Yq47JeQ7IScIOuCmOunjOydmCDtj6ztirjtj7TrpqzsmKTrpbwg64iE6rWs64KYIOuzvCDsiJgg7J6I64+E66GdIO2VmOq4sCDsnITtlbQg6rCc67CcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOqzteyxheydhCDso7zsmpQg65SU7J6Q7J247Jy866GcIOyCvOyVhCDsmKTtlITrnbzsnbjsl5DshJwg7Y+s7Yq47Y+066as7Jik66W8IOuztOuKlCDrk6/tlZwgVUkvVVjrpbwg6rCc67CcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119IHR5cGU9XCJsaW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRG9tYWluIOKGkiA8YSBocmVmPVwibG9jYWxob3N0OjgwODhcIj5sb2NhbGhvc3Q6ODA4ODwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0gdHlwZT1cImxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHaXQg4oaSeycgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2tzY2NtcC9wb3J0Zm9saW9cIj5odHRwczovL2dpdGh1Yi5jb20va3NjY21wL3BvcnRmb2xpbzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbkRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnRzU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvUHJvamVjdHNDb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgPFByb2plY3RzQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZVNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJlZXJUaXRsZSBjb2xvcj1cIiNFNjk1MUFcIj5Hcm91Ynk8L0NhcmVlclRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGl0bGVTZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Q29udGVudHNTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VEaXYgb25DbGljaz17KCkgPT4gb25DbGlja0ltYWdlRGl2KDEpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJlZXJJbWFnZSBzcmM9e2ltYWdlc1sxXVtjdXJyZW50SW1hZ2VJbmRleFsxXV19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW1hZ2VEaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0gdHlwZT1cImNhbGVuZGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjAuMTAgfiAyMS4wMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfSB0eXBlPVwiY29kZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZFIOKGkiBOZXh0IC8gVHlwZVNjcmlwdCAvIFJlZHV4IC8gSG9va3MgLyBTdHlsZWRDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0gdHlwZT1cImNvZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCRSDihpIgU3ByaW5nIC8gTXliYXRpcyAvIE15U1FMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5leHTsgqzsmqkg6rK97ZeY6rO8IENTU+yXreufieydhCDrhpLsnbTquLAg7JyE7ZW0IOynhO2Wie2VnCDqsJzsnbgg7ZSE66Gc7KCd7Yq4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOuwqeusuO2WiOyXiOuNmCDsnqXshozsl5Ag64yA7ZWcIOyasOumrOunjOydmCDtj4nqsIDrpbwg7ZWY7JesIOyerOuwqeusuOydhCDsnITtlZwg7J2Y6rKs7JeQIOuPhOybgOydtCDrkJjqs6DsnpAg6rCc67CcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOq3uOujuSwg7Iqk7Yyf7J2EIOyEoO2Dne2VnCDrkqQg7J247Iqk7YOA6re4656o7LKY65+8IOyCrOynhCDqs7XsnKAg67CPIOuMk+q4gCDquLDriqUg6rCc67CcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOuwqeusuO2WiOuNmCDsnqXshozsnZgg7Y+J6rCA7JqU7IaM7JeQIOuUsOudvCDsoJDsiJjrpbwg67aA7Jes7ZWY7JesIO2PieqwgO2VoCDsiJgg7J6I6rOgIOyghOyytCDtj4nsoJDrj4Qg7ZmV7J247ZWgIOyImFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOyeiOuPhOuhnSDqsJzrsJxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg7ISk6rOEIOuLqOqzhOyXkOyEnCDripDqu7TsoYzrjZgg67O17J6h7ZWo7J20IOyCrOyaqe2VoCDrlYwg6re464yA66GcIOuKkOq7tOynhCDslYTsiazsm4DsnbQg64Ko64qUIO2UhOuhnOygne2KuFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfSB0eXBlPVwibGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdpdCDihpIgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9rc2NjbXAvR3JvdWJ5XCI+aHR0cHM6Ly9naXRodWIuY29tL2tzY2NtcC9Hcm91Ynk8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb25EaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50c1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L1Byb2plY3RzQ29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxQcm9qZWN0c0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8VGl0bGVTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZWVyVGl0bGU+U0NWQzwvQ2FyZWVyVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UaXRsZVNlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxDb250ZW50c1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZURpdiBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrSW1hZ2VEaXYoMil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmVlckltYWdlIHNyYz17aW1hZ2VzWzJdW2N1cnJlbnRJbWFnZUluZGV4WzJdXX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbWFnZURpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb25EaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfSB0eXBlPVwiY2FsZW5kYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMC4wOCB+IDIwLjA5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119IHR5cGU9XCJjb2RlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRkUg4oaSIFJlYWN0IC8gVHlwZVNjcmlwdCAvIFJlZHV4IC8gUmVkdXgtU2FnYSAvIEhvb2tzIC8gU3R5bGVkQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119IHR5cGU9XCJjb2RlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQkUg4oaSIFNwcmluZyAvIE15YmF0aXMgLyBNeVNRTCAvIE5vZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHlwZVNjcmlwdOyZgCBSZWR1eC1TYWdh7J2YIOyCrOyaqSDqsr3tl5jsnYQg64aS7J206riwIOychO2VtCDsp4TtlontlZwg6rCc7J24IO2UhOuhnOygne2KuFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDstZzqt7wg67mE64yA66m07J2YIOykkeyalOyEseydtCDspp3qsIDrkKjsl5Ag65Sw6528IOyXreufiSDtmZXrs7Trpbwg7JyE7ZW0IOq0gOugqCDquLDriqUg6rCc67CcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOyeheyepe2VmOqzoOyekCDtlZjripQg67Cp7J2EIOqygOyDie2VoCDsiJgg7J6I6rOgIOygle2VtOynhCDsnbjsm5Drp4ztgbzsnZgg7J247JuQ66eMIOywuOyXrCDqsIDriqXtlZjrj4TroZ0g6rCc67CcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJUQ1BlZXJDb25uZWN0aW9uICsgU29ja2V0SU/rpbwg7IKs7Jqp7ZWY7JesIOyLpOyLnOqwhCDtmZTsg4Eg7ZqM7J2YIOuwjyDssYTtjIUg6rCc67CcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119IHR5cGU9XCJsaW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2l0IOKGknsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9rc2NjbXAvdmlkZW9fY2hhdF90eXBlc2NyaXB0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9rc2NjbXAvdmlkZW9fY2hhdF90eXBlc2NyaXB0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGVudHNTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9Qcm9qZWN0c0NvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgICA8UHJvamVjdHNDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmVlclRpdGxlIGNvbG9yPVwiIzRhYzhkOVwiPk1veW88L0NhcmVlclRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGl0bGVTZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Q29udGVudHNTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VEaXYgb25DbGljaz17KCkgPT4gb25DbGlja0ltYWdlRGl2KDMpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJlZXJJbWFnZSBzcmM9e2ltYWdlc1szXVtjdXJyZW50SW1hZ2VJbmRleFszXV19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW1hZ2VEaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0gdHlwZT1cImNhbGVuZGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjAuMDEgfiAyMC4wMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfSB0eXBlPVwiY29kZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZFIOKGkiBSZWFjdCAvIFJlZHV4IC8gSG9va3MgLyBTdHlsZWRDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0gdHlwZT1cImNvZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCRSDihpIgU3ByaW5nQm9vdCAvIE15YmF0aXMgLyBNeVNRTCAvIEZpcmVCYXNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNTQUZZ7JeQ7IScIOynhO2Wie2VnCDtjIAg7ZSE66Gc7KCd7Yq4ICg17J24KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDsl6ztlokg64+Z7ZaJ7J6Q66W8IOqwhO2OuO2VmOqyjCDrp6Tsua3tlZjripQg6rKD7JeQIOuPhOybgOydtCDrkJjqs6DsnpAg6rCc67CcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0ICsgRmlyZUJhc2Xrpbwg7J207Jqp7ZWY7JesIERN6riw64qlIOqwnOuwnFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDsnpDsi6DsnZgg7JyE7LmY7JeQIOqwhO2OuO2VmOqyjCDrgpnshJwoPyntlaAg7IiYIOyeiOuKlCDtj6zsiqTtirjrp7Ug6riw64qlIOqwnOuwnFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29tcG9uZW50Tm9dfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDsgqzsmqnrkJjripQgVG9vbOydmCDsiJnroKjrj4Qg67aA7KGx7Jy866GcIOuqqe2RnO2VnCDquLDriqXrk6TsnYQg66qo65GQIOqwnOuwnO2VmOyngCDrqrvtlZzqsoPsl5Ag64yA7ZW0IOyVhOyJrOybgOydtFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOuCqOuKlCDtlITroZzsoJ3tirhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0gdHlwZT1cImxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHaXQg4oaSIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20va3NjY21wL21veW9cIj5odHRwczovL2dpdGh1Yi5jb20va3NjY21wL21veW88L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb25EaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50c1NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L1Byb2plY3RzQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L0Jhc2U+XHJcblxyXG4gICAgICAgICAgICA8UGljdHVyZUNvbnRhaW5lciByZWY9e3BpY3R1cmVDb250YWluZXJSZWZ9IG9uQ2xpY2s9e29uQ2xpY2tQaWN0dXJlQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxQaWN0dXJlSW1hZ2Ugc3JjPXtwaWN0dXJlSW1hZ2V9IC8+XHJcbiAgICAgICAgICAgIDwvUGljdHVyZUNvbnRhaW5lcj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cztcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGluZGV4U3RhdGUgfSBmcm9tICcuLi9tb2R1bGVzL2luZGV4UmVkdWNlcic7XHJcblxyXG5jb25zdCBTa2lsbHNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgcGFkZGluZzogMjBweDtcclxuYDtcclxuXHJcbmNvbnN0IFRpdGxlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMjRweCAwIDUycHggMDtcclxuYDtcclxuXHJcbmNvbnN0IFRpdGxlTWFpbkRpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgcGFkZGluZzogMTJweCAwO1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElUaXRsZVN1YkRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgVGl0bGVTdWJEaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHM6IElUaXRsZVN1YkRpdikgPT4gcHJvcHMuYmFja2dyb3VuZENvbG9yfTtcclxuICAgIHRvcDogLTEycHg7XHJcbiAgICBsZWZ0OiAxMnB4O1xyXG4gICAgcGFkZGluZzogMCA0cHg7XHJcbmA7XHJcblxyXG5jb25zdCBDb250ZW50c0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzBweCkge1xyXG4gICAgICAgIGhlaWdodDogMTA4MHB4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4NDBweCkge1xyXG4gICAgICAgIGhlaWdodDogNzIwcHg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgU2tpbGxTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICB3aWR0aDogMjQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1NHB4O1xyXG5gO1xyXG5cclxuY29uc3QgVGl0bGVEaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgcGFkZGluZzogOHB4IDA7XHJcbmA7XHJcblxyXG5jb25zdCBJbWFnZURpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDRweCA0cHggI2M4YzhjOCBpbnNldCwgLTJweCAtNHB4IDRweCAjYzhjOGM4IGluc2V0O1xyXG5gO1xyXG5cclxuY29uc3QgTWFpblRpdGxlID0gc3R5bGVkLnNwYW5gXHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiBtaW4oY2FsYygxLjJlbSArIDAuNXZ3KSwgMS44ZW0pO1xyXG5gO1xyXG5cclxuY29uc3QgU3ViVGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IG1pbihjYWxjKDAuOWVtICsgMC41dncpLCAxLjFlbSk7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG5gO1xyXG5cclxuY29uc3QgU2tpbGxUaXRsZSA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IG1pbigxLjRlbSArIDAuNHZ3LCAxLjZlbSk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuYDtcclxuXHJcbmNvbnN0IFNraWxsSW1hZ2UgPSBzdHlsZWQuaW1nYGA7XHJcblxyXG5pbnRlcmZhY2UgSVNraWxscyB7XHJcbiAgICBjb21wb25lbnRObzogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBTa2lsbHM6IFJlYWN0LkZDPElTa2lsbHM+ID0gKHsgY29tcG9uZW50Tm8gfSk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIC8vIHJlZHV4XHJcbiAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3JBcnJheSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogaW5kZXhTdGF0ZSkgPT4gc3RhdGUuYmFzZVJlZHVjZXIuYmFja2dyb3VuZENvbG9yQXJyYXkpO1xyXG5cclxuICAgIC8vIHZhcmlhYmxlXHJcbiAgICBjb25zdCBza2lsbHNBcnJheSA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnRkUnLFxyXG4gICAgICAgICAgICBzcmM6ICcvaW1hZ2UvZmUuUE5HJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdEZXZvcHMnLFxyXG4gICAgICAgICAgICBzcmM6ICcvaW1hZ2UvZGV2b3BzLlBORycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnRGV2ZWxvcG1lbnQnLFxyXG4gICAgICAgICAgICBzcmM6ICcvaW1hZ2UvZGV2ZWxvcG1lbnQuUE5HJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdCRScsXHJcbiAgICAgICAgICAgIHNyYzogJy9pbWFnZS9iZS5QTkcnLFxyXG4gICAgICAgIH0sXHJcbiAgICBdO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJhc2UgY29tcG9uZW50Tm89e2NvbXBvbmVudE5vfT5cclxuICAgICAgICAgICAgPFNraWxsc0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxUaXRsZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8VGl0bGVTdWJEaXYgYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb21wb25lbnROb119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3ViVGl0bGU+7KCc66qpPC9TdWJUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L1RpdGxlU3ViRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZU1haW5EaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNYWluVGl0bGU+6riw7Iig7Iqk7YOd7J20IOutkOqwgCDsnojsp4AuLj88L01haW5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L1RpdGxlTWFpbkRpdj5cclxuICAgICAgICAgICAgICAgIDwvVGl0bGVDb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgPFRpdGxlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZVN1YkRpdiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdWJUaXRsZT7rgrTsmqk8L1N1YlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGl0bGVTdWJEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlTWFpbkRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRzQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NraWxsc0FycmF5Lm1hcCgoc2tpbGwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2tpbGxTZWN0aW9uIGtleT17c2tpbGwudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRpdGxlRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTa2lsbFRpdGxlPntza2lsbC50aXRsZX08L1NraWxsVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RpdGxlRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTa2lsbEltYWdlIHNyYz17c2tpbGwuc3JjfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbWFnZURpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ta2lsbFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnRzQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGl0bGVNYWluRGl2PlxyXG4gICAgICAgICAgICAgICAgPC9UaXRsZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9Ta2lsbHNDb250YWluZXI+XHJcbiAgICAgICAgPC9CYXNlPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNraWxscztcclxuIiwiLy8gaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xyXG4vLyBpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbi8vIGNvbnN0IFN0eWxlZERpdjEgPSBzdHlsZWQuZGl2YFxyXG4vLyAgICAgbWFyZ2luOiAwIDI0cHg7XHJcbi8vICAgICBwYWRkaW5nOiAyMnB4IDAgNTNweCAwO1xyXG4vLyAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbi8vIGA7XHJcblxyXG4vLyBjb25zdCBTdHlsZWREaXYyID0gc3R5bGVkLmRpdmBcclxuLy8gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuLy8gICAgIHBhZGRpbmc6IDMycHggMjRweDtcclxuLy8gICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbi8vIGA7XHJcblxyXG4vLyBjb25zdCBTdHlsZWRTcGFuMSA9IHN0eWxlZC5zcGFuYFxyXG4vLyAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgICBjb2xvcjogI2ZmZjtcclxuLy8gYDtcclxuXHJcbi8vIGNvbnN0IFN0eWxlZFNwYW4yID0gc3R5bGVkLnNwYW5gXHJcbi8vICAgICBkaXNwbGF5OiBibG9jaztcclxuLy8gICAgIGNvbG9yOiAjZmZmO1xyXG4vLyBgO1xyXG5cclxuLy8gaW50ZXJmYWNlIElXaHlJdCB7XHJcbi8vICAgICB0aXRsZTogc3RyaW5nO1xyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBXaHlJdDogUmVhY3QuRkM8SVdoeUl0PiA9ICh7IHRpdGxlIH0pOiBKU1guRWxlbWVudCA9PiB7XHJcbi8vICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgIDxCYXNlIHRpdGxlPXt0aXRsZX0gYmFja2dyb3VuZENvbG9yPVwiIzZBOTE5NFwiPlxyXG4vLyAgICAgICAgICAgICA8U3R5bGVkRGl2MT5cclxuLy8gICAgICAgICAgICAgICAgIDxTdHlsZWREaXYyPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMT5JVOulvCDsmZwg7Iuc7J6R7ZWY6rKMIOuQmOyXiOydhOq5jD88L1N0eWxlZFNwYW4xPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMj7snbTrn7Ag7J207JygIOuVjOusuOydtOuLpC4g7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuIOydtOufsCDsnbTsnKAg65WM66y47J2064ukLjwvU3R5bGVkU3BhbjI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4yPuydtOufsCDsnbTsnKAg65WM66y47J2064ukLjwvU3R5bGVkU3BhbjI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4yPuydtOufsCDsnbTsnKAg65WM66y47J2064ukLjwvU3R5bGVkU3BhbjI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4yPuydtOufsCDsnbTsnKAg65WM66y47J2064ukLjwvU3R5bGVkU3BhbjI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4yPuydtOufsCDsnbTsnKAg65WM66y47J2064ukLjwvU3R5bGVkU3BhbjI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4yPuydtOufsCDsnbTsnKAg65WM66y47J2064ukLjwvU3R5bGVkU3BhbjI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4yPuydtOufsCDsnbTsnKAg65WM66y47J2064ukLiDsnbTrn7Ag7J207JygIOuVjOusuOydtOuLpC4g7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuPC9TdHlsZWRTcGFuMj5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjI+7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuIOydtOufsCDsnbTsnKAg65WM66y47J2064ukLiDsnbTrn7Ag7J207JygIOuVjOusuOydtOuLpC48L1N0eWxlZFNwYW4yPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMj7snbTrn7Ag7J207JygIOuVjOusuOydtOuLpC4g7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuIOydtOufsCDsnbTsnKAg65WM66y47J2064ukLjwvU3R5bGVkU3BhbjI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4yPuydtOufsCDsnbTsnKAg65WM66y47J2064ukLiDsnbTrn7Ag7J207JygIOuVjOusuOydtOuLpC4g7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuPC9TdHlsZWRTcGFuMj5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjI+7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuIOydtOufsCDsnbTsnKAg65WM66y47J2064ukLiDsnbTrn7Ag7J207JygIOuVjOusuOydtOuLpC48L1N0eWxlZFNwYW4yPlxyXG4vLyAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXYyPlxyXG4vLyAgICAgICAgICAgICA8L1N0eWxlZERpdjE+XHJcbi8vICAgICAgICAgPC9CYXNlPlxyXG4vLyAgICAgKTtcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IFdoeUl0O1xyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xyXG5pbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGluZGV4U3RhdGUgfSBmcm9tICcuLi9tb2R1bGVzL2luZGV4UmVkdWNlcic7XHJcblxyXG5jb25zdCBXaHlJdENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgVGl0bGVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAyNHB4IDAgNTJweCAwO1xyXG5gO1xyXG5cclxuY29uc3QgVGl0bGVNYWluRGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDA7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSVRpdGxlU3ViRGl2IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBUaXRsZVN1YkRpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wczogSVRpdGxlU3ViRGl2KSA9PiBwcm9wcy5iYWNrZ3JvdW5kQ29sb3J9O1xyXG4gICAgdG9wOiAtMTJweDtcclxuICAgIGxlZnQ6IDEycHg7XHJcbiAgICBwYWRkaW5nOiAwIDRweDtcclxuYDtcclxuXHJcbmNvbnN0IFFBQ29udGFpZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODYwcHgpIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgUXVlc3Rpb25TZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICBwYWRkaW5nOiAwIDIwcHggMCAyMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgQW5zd2VyU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gICAgcGFkZGluZzogMCAyMHB4IDAgMjBweDtcclxuYDtcclxuXHJcbmNvbnN0IHF1ZXN0aW9uTnVtYmVyS2V5ZnJhbWUgPSBrZXlmcmFtZXNgXHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICA1MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgUXVlc3Rpb25EaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW46IDI0cHggMDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBib3gtc2hhZG93OiAycHggNHB4IDRweCAjYzhjOGM4IGluc2V0LCAtMnB4IC00cHggNHB4ICNjOGM4YzggaW5zZXQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgJiA+IGRpdiA+IHNwYW46Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBhbmltYXRpb24tbmFtZTogJHtxdWVzdGlvbk51bWJlcktleWZyYW1lfTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcclxuICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgUXVlc3Rpb25TdWJEaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBBbnN3ZXJEaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWluLWhlaWdodDogY2FsYygyNDhweCArIDMwdmgpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW46IDI0cHggMDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDJweCA0cHggNHB4ICNjOGM4YzggaW5zZXQsIC0ycHggLTRweCA0cHggI2M4YzhjOCBpbnNldDtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4NjBweCkge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgIHdpZHRoOiBtaW4oY2FsYygxNmVtICsgMTJ2dyksIDI2ZW0pO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgTWFpblRpdGxlID0gc3R5bGVkLnNwYW5gXHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiBtaW4oY2FsYygxLjJlbSArIDAuNXZ3KSwgMS44ZW0pO1xyXG5gO1xyXG5cclxuY29uc3QgU3ViVGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IG1pbihjYWxjKDAuOWVtICsgMC41dncpLCAxLjFlbSk7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElRdWVzdGlvblRpdGxlIHtcclxuICAgIGNvbG9yOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IFF1ZXN0aW9uVGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IG1pbihjYWxjKDE4cHggKyAwLjJ2dyksIDEuNGVtKTtcclxuICAgIGNvbG9yOiAkeyhwcm9wczogSVF1ZXN0aW9uVGl0bGUpID0+IHByb3BzLmNvbG9yfTtcclxuYDtcclxuXHJcbmNvbnN0IEFuc3dlclRpdGxlID0gc3R5bGVkLnNwYW5gXHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElRdWVzdGlvbk51bWJlciB7XHJcbiAgICBpc0NsaWNrOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBRdWVzdGlvbk51bWJlciA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogbWluKGNhbGMoMjRweCArIDAuNnZ3KSwgMmVtKTtcclxuICAgIGNvbG9yOiAjZjE1ZTVlO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcclxuICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuXHJcbiAgICBhbmltYXRpb24tbmFtZTogJHsocHJvcHM6IElRdWVzdGlvbk51bWJlcikgPT4gKHByb3BzLmlzQ2xpY2sgPyBxdWVzdGlvbk51bWJlcktleWZyYW1lIDogJycpfTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuYDtcclxuXHJcbmludGVyZmFjZSBJV2h5SXQge1xyXG4gICAgY29tcG9uZW50Tm86IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgV2h5SXQ6IFJlYWN0LkZDPElXaHlJdD4gPSAoeyBjb21wb25lbnRObyB9KTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgLy8gcmVkdXhcclxuICAgIGNvbnN0IGJhY2tncm91bmRDb2xvckFycmF5ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBpbmRleFN0YXRlKSA9PiBzdGF0ZS5iYXNlUmVkdWNlci5iYWNrZ3JvdW5kQ29sb3JBcnJheSk7XHJcblxyXG4gICAgLy8gc3RhdGVcclxuICAgIGNvbnN0IFtxdWVzdGlvbkluZGV4LCBzZXRRdWVzdGlvbkluZGV4XSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oLTEpO1xyXG4gICAgY29uc3QgW3R5cGluZ1RpbWVyLCBzZXRUeXBpbmdUaW1lcl0gPSBSZWFjdC51c2VTdGF0ZTxOb2RlSlMuVGltZXI+KCk7XHJcblxyXG4gICAgLy8gcmVmXHJcbiAgICBjb25zdCBhbnN3ZXJUaXRsZVJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MU3BhbkVsZW1lbnQ+KCk7XHJcbiAgICBjb25zdCBhbnN3ZXJEaXZSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KCk7XHJcblxyXG4gICAgLy8gdmFyaWFibGVcclxuICAgIGNvbnN0IHFuYUFycmF5ID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcXVlc3Rpb246ICdJVOyXkCDqtIDsi6zqsIDsp4Qg7Iuc6riwJyxcclxuICAgICAgICAgICAgYW5zd2VyOiAnSVTsl5Ag6rSA7Ius6rCA7KeEIOyLnOq4sCcsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBxdWVzdGlvbjogJ0lU7JeQIOq0gOyLrOydhCDqsIDsp4Dqsowg65CcIOqzhOq4sCcsXHJcbiAgICAgICAgICAgIGFuc3dlcjogYElU7JeQIOq0gOyLrOydhCDqsIDsp4Dqsowg65CcIOqzhOq4sFxcblxcbuOFjuOFjuOFjuOFjmAsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBxdWVzdGlvbjogJ+qwnOuwnOyekOulvCDshKDtg53tlZwg7J207JygJyxcclxuICAgICAgICAgICAgYW5zd2VyOiAn6rCc67Cc7J6Q66W8IOyEoO2Dne2VnCDsnbTsnKAnLFxyXG4gICAgICAgIH0sXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IHF1ZXN0aW9uQ29sb3IgPSBbJyM4RkMxNUInLCAnI0YxOTAyMycsICcjNjNDMUE5J107XHJcblxyXG4gICAgLy8gb25DbGlja1xyXG4gICAgY29uc3Qgb25DbGlja1F1ZXN0aW9uID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICBzZXRRdWVzdGlvbkluZGV4KGluZGV4KTsgLy8g7KeI66y4IGluZGV4XHJcbiAgICAgICAgY29uc3QgdGltZSA9IDUwOyAvLyDquIDsnpAg64KY7Jik64qUIOyGjeuPhFxyXG5cclxuICAgICAgICBpZiAoYW5zd2VyVGl0bGVSZWYuY3VycmVudCAmJiBhbnN3ZXJEaXZSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICBsZXQgY2hhckluZGV4ID0gMDtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0eXBpbmdUaW1lcik7IC8vIOq4sOyhtCBpbnRlcnZhbCDsooXro4xcclxuICAgICAgICAgICAgYW5zd2VyVGl0bGVSZWYuY3VycmVudC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgYW5zd2VyVGl0bGVSZWYuY3VycmVudC5zdHlsZS5jb2xvciA9IHF1ZXN0aW9uQ29sb3JbaW5kZXhdO1xyXG4gICAgICAgICAgICBhbnN3ZXJEaXZSZWYuY3VycmVudC5zdHlsZS5ib3hTaGFkb3cgPSBgMnB4IDRweCA0cHggJHtxdWVzdGlvbkNvbG9yW2luZGV4XX0gaW5zZXQsIC0ycHggLTRweCA0cHggJHtxdWVzdGlvbkNvbG9yW2luZGV4XX0gaW5zZXRgO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdHlwaW5nSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyDtg4DsnbTtlZEg7LKY66asXHJcbiAgICAgICAgICAgICAgICBpZiAocW5hQXJyYXlbaW5kZXhdLmFuc3dlcltjaGFySW5kZXhdID09PSAnXFxuJykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOqwnO2WiSDrrLjsnpDsnbwg6rK97JqwXHJcbiAgICAgICAgICAgICAgICAgICAgYW5zd2VyVGl0bGVSZWYuY3VycmVudC5pbm5lckhUTUwgKz0gJzxiciAvPic7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhckluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOqwnO2WiSDrrLjsnpDqsIAg7JWE64uQIOqyveyasFxyXG4gICAgICAgICAgICAgICAgICAgIGFuc3dlclRpdGxlUmVmLmN1cnJlbnQuaW5uZXJIVE1MICs9IHFuYUFycmF5W2luZGV4XS5hbnN3ZXJbY2hhckluZGV4KytdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCB0aW1lKTtcclxuXHJcbiAgICAgICAgICAgIHNldFR5cGluZ1RpbWVyKHR5cGluZ0ludGVydmFsKTsgLy8g7ZiE7J6sIGludGVydmFsIOuTseuhnVxyXG5cclxuICAgICAgICAgICAgLy8g66qo65OgIOusuOyekOqwgCDsspjrpqzrkJjripQg7Iuc6rCE7JeQIOuPhOuLrO2VmOuptCBpbnRlcnZhbCDsooXro4xcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHR5cGluZ0ludGVydmFsKTtcclxuICAgICAgICAgICAgfSwgcW5hQXJyYXlbaW5kZXhdLmFuc3dlci5sZW5ndGggKiB0aW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJhc2UgY29tcG9uZW50Tm89e2NvbXBvbmVudE5vfT5cclxuICAgICAgICAgICAgPFdoeUl0Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPFRpdGxlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZVN1YkRpdiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdWJUaXRsZT7soJzrqqk8L1N1YlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGl0bGVTdWJEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlTWFpbkRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1haW5UaXRsZT7smZwg6rCc67Cc7J6Q6rCAIOuQmOugpOqzoCDtlojrjZTrnbwuLj88L01haW5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L1RpdGxlTWFpbkRpdj5cclxuICAgICAgICAgICAgICAgIDwvVGl0bGVDb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgPFRpdGxlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZVN1YkRpdiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvckFycmF5W2NvbXBvbmVudE5vXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdWJUaXRsZT7rgrTsmqk8L1N1YlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGl0bGVTdWJEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlTWFpbkRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFFBQ29udGFpZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UXVlc3Rpb25TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtxbmFBcnJheS5tYXAoKHFuYSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxRdWVzdGlvbkRpdiBrZXk9e3FuYS5hbnN3ZXJ9IG9uQ2xpY2s9eyhlKSA9PiBvbkNsaWNrUXVlc3Rpb24oaW5kZXgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UXVlc3Rpb25TdWJEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxRdWVzdGlvbk51bWJlciBpc0NsaWNrPXtxdWVzdGlvbkluZGV4ID09PSBpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBRe2luZGV4ICsgMX0ueycgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9RdWVzdGlvbk51bWJlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFF1ZXN0aW9uVGl0bGUgY29sb3I9e3F1ZXN0aW9uQ29sb3JbaW5kZXhdfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtxbmEucXVlc3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUXVlc3Rpb25UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1F1ZXN0aW9uU3ViRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9RdWVzdGlvbkRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUXVlc3Rpb25TZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbnN3ZXJTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbnN3ZXJEaXYgcmVmPXthbnN3ZXJEaXZSZWZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW5zd2VyVGl0bGUgcmVmPXthbnN3ZXJUaXRsZVJlZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cXVlc3Rpb25JbmRleCA+PSAwID8gJycgOiAn6raB6riI7ZWY7IugIOyniOusuOydhCDshKDtg53tlbTso7zshLjsmpQuJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BbnN3ZXJUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Fuc3dlckRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQW5zd2VyU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9RQUNvbnRhaWVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGl0bGVNYWluRGl2PlxyXG4gICAgICAgICAgICAgICAgPC9UaXRsZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9XaHlJdENvbnRhaW5lcj5cclxuICAgICAgICA8L0Jhc2U+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2h5SXQ7XHJcbiIsIi8vIGluaXRcclxuZXhwb3J0IGNvbnN0IHNldElzRW5kID0gJ3NldElzRW5kJztcclxuXHJcbi8vIGJhc2VcclxuZXhwb3J0IGNvbnN0IHNldEN1cnJlbnRDb21wb25lbnRObyA9ICdzZXRDdXJyZW50Q29tcG9uZW50Tm8nO1xyXG5leHBvcnQgY29uc3Qgc2V0SXNQYWdlQ2hhbmdpbmcgPSAnc2V0SXNQYWdlQ2hhbmdpbmcnO1xyXG4iLCJpbXBvcnQgeyBzZXRDdXJyZW50Q29tcG9uZW50Tm8sIHNldElzRW5kLCBzZXRJc1BhZ2VDaGFuZ2luZyB9IGZyb20gJy4vYWN0aW9uVHlwZSc7XHJcbmltcG9ydCB7IElzZXRDdXJyZW50Q29tcG9uZW50Tm9BY3Rpb24sIElzZXRJc0VuZEFjdGlvbiwgSXNldElzUGFnZUNoYW5naW5nQWN0aW9uIH0gZnJvbSAnLi9hY3Rpb25JbnRlcmZhY2UnO1xyXG5cclxuLy8gaW5pdFxyXG5leHBvcnQgY29uc3Qgc2V0SXNFbmRBY3Rpb24gPSAocmVzOiBib29sZWFuKTogSXNldElzRW5kQWN0aW9uID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogc2V0SXNFbmQsXHJcbiAgICAgICAgcGF5bG9hZDogcmVzLFxyXG4gICAgfTtcclxufTtcclxuXHJcbi8vIGJhc2VcclxuZXhwb3J0IGNvbnN0IHNldEN1cnJlbnRDb21wb25lbnROb0FjdGlvbiA9IChyZXM6IG51bWJlcik6IElzZXRDdXJyZW50Q29tcG9uZW50Tm9BY3Rpb24gPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBzZXRDdXJyZW50Q29tcG9uZW50Tm8sXHJcbiAgICAgICAgcGF5bG9hZDogcmVzLFxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRJc1BhZ2VDaGFuZ2luZ0FjdGlvbiA9IChyZXM6IGJvb2xlYW4pOiBJc2V0SXNQYWdlQ2hhbmdpbmdBY3Rpb24gPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBzZXRJc1BhZ2VDaGFuZ2luZyxcclxuICAgICAgICBwYXlsb2FkOiByZXMsXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgYWN0aW9ucyA9IElzZXRJc0VuZEFjdGlvbiB8IElzZXRDdXJyZW50Q29tcG9uZW50Tm9BY3Rpb24gfCBJc2V0SXNQYWdlQ2hhbmdpbmdBY3Rpb247XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1haW4gZnJvbSAnLi4vY29tcG9uZW50L21haW4nO1xyXG5pbXBvcnQgSW50cm8gZnJvbSAnLi4vY29tcG9uZW50L2ludHJvJztcclxuaW1wb3J0IFdoeUl0IGZyb20gJy4uL2NvbXBvbmVudC93aHlJdCc7XHJcbmltcG9ydCBTa2lsbHMgZnJvbSAnLi4vY29tcG9uZW50L3NraWxscyc7XHJcbmltcG9ydCBDYXJlZXIgZnJvbSAnLi4vY29tcG9uZW50L2NhcmVlcic7XHJcbmltcG9ydCBJbml0IGZyb20gJy4uL2NvbXBvbmVudC9pbml0JztcclxuaW1wb3J0IFByb2plY3RzIGZyb20gJy4uL2NvbXBvbmVudC9wcm9qZWN0cyc7XHJcbmltcG9ydCBNb3JlIGZyb20gJy4uL2NvbXBvbmVudC9tb3JlJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBpbmRleFN0YXRlIH0gZnJvbSAnLi4vbW9kdWxlcy9pbmRleFJlZHVjZXInO1xyXG5pbXBvcnQgeyBtYXhXaWR0aCB9IGZyb20gJy4uL3N0eWxlL3N0eWxlJztcclxuXHJcbmNvbnN0IEluZGV4TWFpbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtICgxMDB2dyAtIDEwMCUpKTtcclxuYDtcclxuXHJcbmNvbnN0IEluZGV4U3ViQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIG1heC13aWR0aDogJHttYXhXaWR0aH1weDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDd2aCk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbmA7XHJcblxyXG5jb25zdCBDb21wb25lbnRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgcGVyc3BlY3RpdmU6IDQwMDBweDtcclxuYDtcclxuXHJcbmNvbnN0IEluZGV4ID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIC8vIHJlZHV4XHJcbiAgICBjb25zdCBpc0VuZCA9IHVzZVNlbGVjdG9yKChzdGF0ZTogaW5kZXhTdGF0ZSkgPT4gc3RhdGUuaW5pdFJlZHVjZXIuaXNFbmQpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge2lzRW5kID8gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5kZXhNYWluQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5kZXhTdWJDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYWluIGNvbXBvbmVudE5vPXswfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnRybyBjb21wb25lbnRObz17MX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V2h5SXQgY29tcG9uZW50Tm89ezJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNraWxscyBjb21wb25lbnRObz17M30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZWVyIGNvbXBvbmVudE5vPXs0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9qZWN0cyBjb21wb25lbnRObz17NX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9yZSBjb21wb25lbnRObz17Nn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29tcG9uZW50Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0luZGV4U3ViQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW5kZXhNYWluQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8SW5pdCAvPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBoMSxcclxuICAgICAgICAgICAgICAgICAgICBoMixcclxuICAgICAgICAgICAgICAgICAgICBoMyxcclxuICAgICAgICAgICAgICAgICAgICBoNCxcclxuICAgICAgICAgICAgICAgICAgICBoNSxcclxuICAgICAgICAgICAgICAgICAgICBoNixcclxuICAgICAgICAgICAgICAgICAgICBzcGFuLFxyXG4gICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0FwcGxlU0RHb3RoaWNOZW8nLCAnTm90byBTYW5zIEtSJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJ1bmdlZSZkaXNwbGF5PXN3YXAnKTtcclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxyXG4gICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsIG1heGltdW0tc2NhbGU9MSwgbWluaW11bS1zY2FsZT0xXCIgLz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIiwiZXhwb3J0IGNvbnN0IG1heFdpZHRoID0gOTYwO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=