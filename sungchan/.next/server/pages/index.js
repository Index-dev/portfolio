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
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_indexStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/indexStore */ "./modules/indexStore.tsx");
/* harmony import */ var _style_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../style/style */ "./style/style.tsx");

var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\component\\base.tsx";
// import * as React from 'react';
// import styled from 'styled-components';
// import { maxWidth } from '../style/style';
// const StyledSection1 = styled.section``;
// interface IStyledDiv2 {
//     backgroundColor: string;
// }
// const StyledDiv2 = styled.div`
//     max-width: ${maxWidth}px;
//     margin: 0 auto;
//     padding: 0 15px;
//     background-color: ${(props: IStyledDiv2) => props.backgroundColor};
//     @media screen and (min-width: ${maxWidth + 50}px) {
//         margin-bottom: 84px;
//         border-top-left-radius: 18px;
//         border-top-right-radius: 18px;
//         border-bottom-left-radius: 18px;
//         border-bottom-right-radius: 18px;
//         box-shadow: 2px 2px 12px ${(props: IStyledDiv2) => props.backgroundColor};
//     }
// `;
// interface IStyledDiv3 {
//     title: string;
//     showTitle: boolean;
// }
// const StyledDiv3 = styled.div`
//     ${(props: IStyledDiv3) => {
//         if (props.title) {
//             if (props.showTitle) {
//                 return `
//                     dispaly: block;
//                     transform: translateY(0);
//                     opacity: 1;
//                 `;
//             } else {
//                 return `
//                     dispaly: block;
//                     transform: translateY(60px);
//                     opacity: 0;
//                 `;
//             }
//         } else {
//             return `
//                 display: none;
//             `;
//         }
//     }}
//     display: ${(props: IStyledDiv3) => (props.title ? 'block' : 'none')};
//     padding: 24px 0;
//     transition-duration: 1.8s;
//     transition-timing-function: ease-out;
// `;
// const StyledTitle = styled.span`
//     font-weight: bold;
//     font-size: 2.4em;
// `;
// interface IBaseComponent {
//     children: React.ReactNode;
//     title: string;
//     backgroundColor: string;
// }
// const Base: React.FC<IBaseComponent> = ({ children, title, backgroundColor }): JSX.Element => {
//     // state
//     const [showTitle, setShowTitle] = React.useState<boolean>(false);
//     const [isClick, setIsClick] = React.useState<boolean>(false);
//     const [savePosition, setSavePosition] = React.useState<number>(0);
//     // ref
//     const div1Ref = React.useRef<HTMLDivElement>();
//     const div2Ref = React.useRef<HTMLDivElement>();
//     // variable
//     let isClickVariable = false;
//     // useEffect
//     React.useEffect(() => {
//         scrollTitle();
//         resizeSection1();
//         if (div1Ref.current) {
//             div1Ref.current.id = title;
//         }
//     }, []);
//     React.useEffect(() => {
//         isClickVariable = false;
//         window.addEventListener('scroll', scrollTitle);
//         return () => {
//             window.removeEventListener('scroll', scrollTitle);
//         };
//     }, [isClick]);
//     React.useEffect(() => {
//         window.addEventListener('resize', resizeSection1);
//         return () => {
//             window.removeEventListener('resize', resizeSection1);
//         };
//     }, [isClick]);
//     // onClick
//     const onClickDiv2 = () => {
//         if (div1Ref.current) {
//             if (isClick) {
//                 div1Ref.current.style.transition = '';
//                 div1Ref.current.style.transform = '';
//                 div1Ref.current.style.margin = '';
//                 setIsClick(false);
//                 window.scrollTo(0, savePosition);
//             } else {
//                 const scrollY = window.scrollY; // 현재 스크롤 높이
//                 const distance = div1Ref.current && div1Ref.current.getBoundingClientRect().top; // div의 top에 도달할 떄까지 남은 거리
//                 const gabY = (window.innerHeight - (div1Ref.current && div1Ref.current.clientHeight)) / 2; // (화면 높이 - div 높이) / 2
//                 const gabX = (window.innerWidth - (div2Ref.current && div2Ref.current.clientWidth)) / 2; // (화면 너비 - div 너비) / 2
//                 if (gabY > 0 && gabX > 0 && window.innerWidth >= maxWidth + 50) {
//                     setSavePosition(scrollY + distance - gabY); // 중앙 위치
//                     if (gabY > 84) {
//                         window.scrollTo(0, scrollY + distance - gabY + (gabY - 84));
//                     } else {
//                         window.scrollTo(0, scrollY + distance - gabY);
//                     }
//                     const blankY = 1 + (gabY / (div2Ref.current && div2Ref.current.clientHeight)) * 2; // (div 여비 높이 / div 높이) * 2
//                     const blankX = 1 + (gabX / (div2Ref.current && div2Ref.current.clientWidth)) * 2; // (div 여비 너비 / div 너비) * 2
//                     div1Ref.current.style.transition = '1s';
//                     div1Ref.current.style.transform = `scale(${Math.min(blankY, blankX)})`;
//                     div1Ref.current.style.margin = `${gabY}px 0`;
//                     setIsClick(true);
//                 }
//             }
//         }
//     };
//     // normal
//     const resizeSection1 = () => {
//         const gabY = (window.innerHeight - (div1Ref.current && div1Ref.current.clientHeight)) / 2; // (화면 높이 - div 높이) / 2
//         const gabX = (window.innerWidth - (div2Ref.current && div2Ref.current.clientWidth)) / 2; // (화면 너비 - div 너비) / 2
//         if (isClick) {
//             if (gabY > 0 && gabX > 0 && window.innerWidth >= maxWidth + 50) {
//                 const blankY = 1 + (gabY / (div2Ref.current && div2Ref.current.clientHeight)) * 2; // (div 여비 높이 / div 높이) * 2
//                 const blankX = 1 + (gabX / (div2Ref.current && div2Ref.current.clientWidth)) * 2; // (div 여비 너비 / div 너비) * 2
//                 div1Ref.current.style.transition = '';
//                 div1Ref.current.style.transform = `scale(${Math.min(blankY, blankX)})`;
//                 div1Ref.current.style.margin = `${gabY}px 0`;
//             } else {
//                 div1Ref.current.style.transition = '';
//                 div1Ref.current.style.transform = '';
//                 div1Ref.current.style.margin = '';
//             }
//         }
//         if (div2Ref.current) {
//             if (gabY > 0 && gabX > 0 && window.innerWidth >= maxWidth + 50) {
//                 div2Ref.current.style.cursor = 'pointer';
//             } else {
//                 div2Ref.current.style.cursor = '';
//             }
//         }
//     };
//     const scrollTitle = () => {
//         if (div1Ref.current) {
//             if (window.innerHeight >= div1Ref.current.getBoundingClientRect().top + 48) {
//                 setShowTitle(true);
//             } else {
//                 setShowTitle(false);
//             }
//             if (isClickVariable) {
//                 div1Ref.current.style.transition = '';
//                 div1Ref.current.style.transform = '';
//                 div1Ref.current.style.margin = '';
//                 setIsClick(false);
//             }
//             if (isClick) {
//                 isClickVariable = true;
//             }
//         }
//     };
//     return (
//         <>
//             <StyledSection1 ref={div1Ref}>
//                 <StyledDiv2 backgroundColor={backgroundColor} ref={div2Ref} onClick={onClickDiv2}>
//                     <StyledDiv3 title={title} showTitle={showTitle}>
//                         <StyledTitle># {title}</StyledTitle>
//                     </StyledDiv3>
//                     {children}
//                 </StyledDiv2>
//             </StyledSection1>
//         </>
//     );
// };
// export default Base;





const MainContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "base__MainContainer",
  componentId: "sc-1ugehyd-0"
})(["width:calc(100vw - (100vw - 100%));min-height:100vh;position:relative;cursor:pointer;background-color:", ";z-index:", ";"], props => props.backgroundColor, props => props.zIndex);
const SubContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "base__SubContainer",
  componentId: "sc-1ugehyd-1"
})(["width:calc(100vw - (100vw - 100%));min-height:100vh;display:flex;align-items:center;position:", ";top:", ";"], props => props.isReach ? 'static' : 'fixed', props => props.isReach ? '' : 0);
const ComponentContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "base__ComponentContainer",
  componentId: "sc-1ugehyd-2"
})(["max-width:", "px;width:100%;margin:0 auto;display:flex;justify-content:center;align-items:center;flex-direction:column;"], _style_style__WEBPACK_IMPORTED_MODULE_5__.maxWidth);
const TitleSection = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "base__TitleSection",
  componentId: "sc-1ugehyd-3"
})(["padding:38px 0 66px 0;margin-top:32px;"]);
const ComponentSection = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "base__ComponentSection",
  componentId: "sc-1ugehyd-4"
})(["display:flex;justify-content:center;align-items:center;width:100%;"]);
const MainTitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "base__MainTitle",
  componentId: "sc-1ugehyd-5"
})(["font-weight:600;font-size:calc(52px + 0.8vw);text-shadow:3.5px 3.5px #fff;font-family:'Bungee',cursive;"]);

const Base = ({
  children,
  containerNo
}) => {
  // mobx
  const {
    baseStore
  } = (0,_modules_indexStore__WEBPACK_IMPORTED_MODULE_4__.default)(); // state

  const [isReach, setIsReach] = react__WEBPACK_IMPORTED_MODULE_2__.useState(false); // ref

  const mainContainerRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(); // variable

  const backgroundColorArray = ['#757270', '#A5BAA8', '#6A9194', '#b79e6a', '#c68377'];
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(() => {
    window.addEventListener('scroll', onChangeScroll);
    window.addEventListener('resize', onChangeResize);
    onChangeScroll();
    onChangeResize();
    return () => {
      window.removeEventListener('scroll', onChangeScroll);
      window.removeEventListener('resize', onChangeResize);
    };
  }, []);
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(() => {
    if (mainContainerRef.current) {
      mainContainerRef.current.setAttribute('id', baseStore.titleArray[containerNo]);
    }
  }, []); // onChange

  const onChangeScroll = () => {
    if (mainContainerRef.current) {
      if (mainContainerRef.current.getBoundingClientRect().top > 0) {
        setIsReach(false);
      } else {
        setIsReach(true);
      }
    }
  };

  const onChangeResize = () => {
    if (mainContainerRef.current) {
      if (mainContainerRef.current.getBoundingClientRect().top > 0) {
        setIsReach(false);
      } else {
        setIsReach(true);
      }
    }
  }; // onClick


  const onClickMainContainer = () => {
    if (mainContainerRef.current) {
      window.scrollBy({
        top: mainContainerRef.current.getBoundingClientRect().top,
        behavior: 'smooth'
      });
    }
  };

  return (0,mobx_react__WEBPACK_IMPORTED_MODULE_1__.useObserver)(() => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainContainer, {
    ref: mainContainerRef,
    backgroundColor: backgroundColorArray[containerNo],
    zIndex: 100 - containerNo,
    onClick: onClickMainContainer,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubContainer, {
      isReach: isReach,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ComponentContainer, {
        children: [containerNo === 0 ? '' : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleSection, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainTitle, {
            children: ["# ", baseStore.titleArray[containerNo]]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 356,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 355,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ComponentSection, {
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 360,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 351,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 344,
    columnNumber: 9
  }, undefined));
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

const Career = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_base__WEBPACK_IMPORTED_MODULE_2__.default, {
    containerNo: 4,
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
            lineNumber: 42,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv4, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan1, {
            children: "\uC2F8\uD53C\uC5D0\uC11C\uB294 \uC774\uB7F0\uAC78 \uD588\uC2B5\uB2C8\uB2E4."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 25
          }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 68
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan1, {
            children: "\uC2F8\uD53C\uC5D0\uC11C\uB294 \uC774\uB7F0\uAC78 \uD588\uC2B5\uB2C8\uB2E4. \uC2F8\uD53C\uC5D0\uC11C\uB294 \uC774\uB7F0\uAC78 \uD588\uC2B5\uB2C8\uB2E4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 83
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan1, {
            children: "\uC2F8\uD53C\uC5D0\uC11C\uB294 \uC774\uB7F0\uAC78 \uD588\uC2B5\uB2C8\uB2E4. \uC2F8\uD53C\uC5D0\uC11C\uB294 \uC774\uB7F0\uAC78 \uD588\uC2B5\uB2C8\uB2E4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 25
          }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 83
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan1, {
            children: "\uC2F8\uD53C\uC5D0\uC11C\uB294 \uC774\uB7F0\uAC78 \uD588\uC2B5\uB2C8\uB2E4. \uC2F8\uD53C\uC5D0\uC11C\uB294 \uC774\uB7F0\uAC78 \uD588\uC2B5\uB2C8\uB2E4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 25
          }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 83
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan1, {
            children: "\uC2F8\uD53C\uC5D0\uC11C\uB294 \uC774\uB7F0\uAC78 \uD588\uC2B5\uB2C8\uB2E4. \uC2F8\uD53C\uC5D0\uC11C\uB294 \uC774\uB7F0\uAC78 \uD588\uC2B5\uB2C8\uB2E4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 25
          }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 83
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
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
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
            lineNumber: 60,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv4, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan1, {
            children: "\uC624\uD1A0\uC5D0\uBC84\uC5D0\uC11C\uB294 \uC774\uB7F0\uAC78 \uD588\uC2B5\uB2C8\uB2E4."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 25
          }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 70
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSpan1, {
            children: "\uC624\uD1A0\uC5D0\uBC84\uC5D0\uC11C\uB294 \uC774\uB7F0\uAC78 \uD588\uC2B5\uB2C8\uB2E4.\uC624\uD1A0\uC5D0\uBC84\uC5D0\uC11C\uB294 \uC774\uB7F0\uAC78 \uD588\uC2B5\uB2C8\uB2E4."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 25
          }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 87
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 9
  }, undefined);
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_indexStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/indexStore */ "./modules/indexStore.tsx");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\component\\init.tsx";




const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "init__Container",
  componentId: "sc-tfk24z-0"
})(["position:fixed;width:100vw;height:100vh;background-color:#000;z-index:100;"]);
const TitleDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "init__TitleDiv",
  componentId: "sc-tfk24z-1"
})(["padding:10px;overflow-wrap:anywhere;"]);
const MainSection = styled_components__WEBPACK_IMPORTED_MODULE_2___default().section.withConfig({
  displayName: "init__MainSection",
  componentId: "sc-tfk24z-2"
})(["display:flex;width:100%;height:100%;justify-content:center;align-items:center;flex-direction:column;"]);
const MainTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default().span.withConfig({
  displayName: "init__MainTitle",
  componentId: "sc-tfk24z-3"
})(["color:#fff;font-size:1.4em;"]);
const ColorSpan = styled_components__WEBPACK_IMPORTED_MODULE_2___default().span.withConfig({
  displayName: "init__ColorSpan",
  componentId: "sc-tfk24z-4"
})(["color:", ";font-weight:600;"], props => props.color);
const TitleCursor = styled_components__WEBPACK_IMPORTED_MODULE_2___default().span.withConfig({
  displayName: "init__TitleCursor",
  componentId: "sc-tfk24z-5"
})(["border-right:7px solid #fff;border-left:6px solid #000;display:none;"]);

const Init = () => {
  // mobx
  const {
    initStore
  } = (0,_modules_indexStore__WEBPACK_IMPORTED_MODULE_3__.default)(); // ref

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
      initStore.setIsEnd(true);
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

  return (0,mobx_react__WEBPACK_IMPORTED_MODULE_4__.useObserver)(() => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {
    ref: containerRef,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainSection, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleDiv, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainTitle, {
          children: stringObjs[0].string
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainTitle, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ColorSpan, {
            color: "#fff100",
            ref: typingStringRef1
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            ref: typingStringRef2
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 212,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleCursor, {
          ref: typingCursor1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleDiv, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainTitle, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ColorSpan, {
            color: "#229300",
            ref: typingStringRef3
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            ref: typingStringRef4
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleCursor, {
          ref: typingCursor2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleDiv, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainTitle, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ColorSpan, {
            color: "#006a7c",
            ref: typingStringRef5
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            ref: typingStringRef6
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleCursor, {
          ref: typingCursor3
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleDiv, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainTitle, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ColorSpan, {
            color: "#68008a",
            ref: typingStringRef7
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 233,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            ref: typingStringRef8
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 234,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleCursor, {
          ref: typingCursor4
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 206,
    columnNumber: 9
  }, undefined));
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
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_indexStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/indexStore */ "./modules/indexStore.tsx");
/* harmony import */ var _style_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../style/style */ "./style/style.tsx");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base */ "./component/base.tsx");

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






const BoxSection = styled_components__WEBPACK_IMPORTED_MODULE_3___default().section.withConfig({
  displayName: "intro__BoxSection",
  componentId: "sc-1aywpbq-0"
})(["margin:0 32px;padding-bottom:17px;"]);
const BoxContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "intro__BoxContainer",
  componentId: "sc-1aywpbq-1"
})(["overflow-wrap:anywhere;", ""], props => {
  if (props.innerWidth < _style_style__WEBPACK_IMPORTED_MODULE_5__.maxWidth) {
    return `
                text-align: center;
            `;
  } else if (props.direction === 'true') {
    return `
                text-align: right;
            `;
  }
});
const BoxMainDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "intro__BoxMainDiv",
  componentId: "sc-1aywpbq-2"
})(["display:inline-block;position:relative;border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-left-radius:10px;border-bottom-right-radius:10px;padding:18px;margin:43px 27px;background-color:#fff;box-shadow:2px 4px 4px #c8c8c8 inset,-2px -4px 4px #c8c8c8 inset;"]);
const BoxLeftDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "intro__BoxLeftDiv",
  componentId: "sc-1aywpbq-3"
})(["position:absolute;top:calc(-38px - 0.8vw);left:calc(-38px - 0.8vw);transform:rotate(-25deg);"]);
const BoxRightDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "intro__BoxRightDiv",
  componentId: "sc-1aywpbq-4"
})(["position:absolute;top:calc(-38px - 0.8vw);right:calc(-38px - 0.8vw);transform:rotate(25deg);"]);
const BoxDescription = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "intro__BoxDescription",
  componentId: "sc-1aywpbq-5"
})(["font-size:calc(28px + 0.4vw);"]);
const BoxTitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "intro__BoxTitle",
  componentId: "sc-1aywpbq-6"
})(["font-size:calc(23px + 0.4vw);font-weight:bold;border-bottom:2px solid #c2655a;color:#c2655a;"]);

const Intro = () => {
  // mobx
  const {
    baseStore
  } = (0,_modules_indexStore__WEBPACK_IMPORTED_MODULE_4__.default)(); // variable

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
  return (0,mobx_react__WEBPACK_IMPORTED_MODULE_1__.useObserver)(() => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_base__WEBPACK_IMPORTED_MODULE_6__.default, {
    containerNo: 1,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxSection, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxContainer, {
        innerWidth: baseStore.innerWidth,
        children: boxArray1.map(box => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxMainDiv, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxDescription, {
              children: box.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 253,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxLeftDiv, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxTitle, {
                children: box.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 255,
                columnNumber: 37
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 254,
              columnNumber: 33
            }, undefined)]
          }, box.description, true, {
            fileName: _jsxFileName,
            lineNumber: 252,
            columnNumber: 29
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxContainer, {
        innerWidth: baseStore.innerWidth,
        direction: 'true',
        children: boxArray2.map(box => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxMainDiv, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxDescription, {
              children: box.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 266,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxRightDiv, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxTitle, {
                children: box.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 268,
                columnNumber: 37
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 267,
              columnNumber: 33
            }, undefined)]
          }, box.description, true, {
            fileName: _jsxFileName,
            lineNumber: 265,
            columnNumber: 29
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxContainer, {
        innerWidth: baseStore.innerWidth,
        children: boxArray3.map(box => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxMainDiv, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxDescription, {
              children: box.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 279,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxLeftDiv, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxTitle, {
                children: box.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 281,
                columnNumber: 37
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 280,
              columnNumber: 33
            }, undefined)]
          }, box.description, true, {
            fileName: _jsxFileName,
            lineNumber: 278,
            columnNumber: 29
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxContainer, {
        innerWidth: baseStore.innerWidth,
        direction: 'true',
        children: boxArray4.map(box => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxMainDiv, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxDescription, {
              children: box.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 292,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxRightDiv, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxTitle, {
                children: box.title
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
          }, box.description, true, {
            fileName: _jsxFileName,
            lineNumber: 291,
            columnNumber: 29
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 247,
    columnNumber: 9
  }, undefined));
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
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_indexStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/indexStore */ "./modules/indexStore.tsx");
/* harmony import */ var _style_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../style/style */ "./style/style.tsx");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base */ "./component/base.tsx");


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






const MenuDivKeyFrame = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.keyframes)(["0%{transform:translateX(-300px) rotate(0);}90%{transform:translateX(30px) rotate(750deg);}100%{transform:translateX(0) rotate(720deg);}"]);
const MenuDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "main__MenuDiv",
  componentId: "sc-1r8z56n-0"
})(["display:inline-block;cursor:pointer;animation-name:", ";animation-duration:3s;"], MenuDivKeyFrame);
const MenuSubDivHoverKeyFrame = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.keyframes)(["50%{transform:translateY(-10px);}"]);
const MenuSubDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "main__MenuSubDiv",
  componentId: "sc-1r8z56n-1"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;width:152px;height:152px;border-radius:50%;background-color:#caf0be;margin:16px 32px;&:hover{animation:1.8s ", " infinite;}"], MenuSubDivHoverKeyFrame);
const MenuSection = styled_components__WEBPACK_IMPORTED_MODULE_3___default().section.withConfig({
  displayName: "main__MenuSection",
  componentId: "sc-1r8z56n-2"
})(["text-align:center;display:", ";"], props => props.innerWidth >= _style_style__WEBPACK_IMPORTED_MODULE_5__.maxWidth ? 'block' : 'none');
const TitleSectionKeyFrame = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.keyframes)(["0%{transform:translateY(40px);opacity:0;}100%{transfrom:translateY(0);opacity:1;}"]);
const TitleSection = styled_components__WEBPACK_IMPORTED_MODULE_3___default().section.withConfig({
  displayName: "main__TitleSection",
  componentId: "sc-1r8z56n-3"
})(["padding:0 30px;text-align:center;animation-name:", ";animation-duration:3s;"], TitleSectionKeyFrame);
const MainTitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "main__MainTitle",
  componentId: "sc-1r8z56n-4"
})(["display:block;font-size:calc(54px + 1.5vw);font-weight:600;"]);
const SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "main__SubTitle",
  componentId: "sc-1r8z56n-5"
})(["display:block;font-size:calc(24px + 0.4vw);"]);

const Main = () => {
  // mobx
  const {
    baseStore
  } = (0,_modules_indexStore__WEBPACK_IMPORTED_MODULE_4__.default)(); // onClick

  const onClickMenuDiv = title => {
    const titleContianer = document.getElementById(title);

    if (titleContianer) {
      window.scrollBy({
        top: titleContianer.getBoundingClientRect().top,
        behavior: 'smooth'
      });
    }
  };

  return (0,mobx_react__WEBPACK_IMPORTED_MODULE_1__.useObserver)(() => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_base__WEBPACK_IMPORTED_MODULE_6__.default, {
      containerNo: 0,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuSection, {
        innerWidth: baseStore.innerWidth,
        children: baseStore.titleArray.map((menu, index) => {
          if (index !== 0) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuDiv, {
              onClick: () => onClickMenuDiv(menu),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuSubDiv, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                  children: menu
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 253,
                  columnNumber: 41
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  children: "Go \u2192"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 254,
                  columnNumber: 41
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 252,
                columnNumber: 37
              }, undefined)
            }, menu, false, {
              fileName: _jsxFileName,
              lineNumber: 251,
              columnNumber: 33
            }, undefined);
          }
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleSection, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainTitle, {
          children: "\uAE40\uC131\uCC2C\uC758 Portfolio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubTitle, {
          children: "Since 2021"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 13
    }, undefined)
  }, void 0, false));
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



const MainSection = styled_components__WEBPACK_IMPORTED_MODULE_3___default().section.withConfig({
  displayName: "skills__MainSection",
  componentId: "sc-9hegbj-0"
})(["width:100%;display:flex;flex-direction:column;align-items:center;padding:0 22px;@media screen and (min-width:570px){height:1080px;flex-wrap:wrap;}@media screen and (min-width:840px){height:720px;flex-wrap:wrap;}"]);
const BoxCotainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "skills__BoxCotainer",
  componentId: "sc-9hegbj-1"
})(["width:240px;text-align:center;margin-bottom:54px;"]);
const TitleDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "skills__TitleDiv",
  componentId: "sc-9hegbj-2"
})(["padding:8px 0;"]);
const ImageDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "skills__ImageDiv",
  componentId: "sc-9hegbj-3"
})(["background-color:#fff;border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-left-radius:10px;border-bottom-right-radius:10px;padding:8px;box-shadow:2px 4px 4px #c8c8c8 inset,-2px -4px 4px #c8c8c8 inset;"]);
const BoxTitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "skills__BoxTitle",
  componentId: "sc-9hegbj-4"
})(["font-weight:bold;font-size:1.6em;color:#fff;"]);
const BoxImage = styled_components__WEBPACK_IMPORTED_MODULE_3___default().img.withConfig({
  displayName: "skills__BoxImage",
  componentId: "sc-9hegbj-5"
})([""]);

const Skills = () => {
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
    containerNo: 3,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainSection, {
      children: skillsArray.map(skill => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxCotainer, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleDiv, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxTitle, {
              children: skill.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 33
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageDiv, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BoxImage, {
              src: skill.src
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 33
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 29
          }, undefined)]
        }, skill.title, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 25
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 72,
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



const CommonSection = styled_components__WEBPACK_IMPORTED_MODULE_3___default().section.withConfig({
  displayName: "whyIt__CommonSection",
  componentId: "sc-sy1iui-0"
})(["width:100%;text-align:center;@media screen and (min-width:710px){display:flex;justify-content:center;}"]);
const QuestionSection = styled_components__WEBPACK_IMPORTED_MODULE_3___default().section.withConfig({
  displayName: "whyIt__QuestionSection",
  componentId: "sc-sy1iui-1"
})(["padding:0 20px 0 20px;display:inline-block;"]);
const AnswerSection = styled_components__WEBPACK_IMPORTED_MODULE_3___default().section.withConfig({
  displayName: "whyIt__AnswerSection",
  componentId: "sc-sy1iui-2"
})(["padding:0 20px 0 20px;display:inline-block;"]);
const questionNumberKeyframe = styled_components__WEBPACK_IMPORTED_MODULE_3__.keyframes`
    0% {
        transform: rotate(-10deg);
    }

    50% {
        transform: rotate(10deg);
    }

    100% {
        transform: rotate(-10deg);
    }
`;
const QuestionDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "whyIt__QuestionDiv",
  componentId: "sc-sy1iui-3"
})(["background-color:#fff;padding:20px;margin:24px 0;border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-left-radius:10px;border-bottom-right-radius:10px;text-align:left;box-shadow:2px 4px 4px #c8c8c8 inset,-2px -4px 4px #c8c8c8 inset;&:hover{& > div > span:first-child{animation-name:", ";animation-duration:2s;animation-iteration-count:infinite;}}"], questionNumberKeyframe);
const QuestionSubDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "whyIt__QuestionSubDiv",
  componentId: "sc-sy1iui-4"
})(["display:flex;align-items:center;"]);
const AnswerDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "whyIt__AnswerDiv",
  componentId: "sc-sy1iui-5"
})(["background-color:#fff;padding:20px;margin:24px 0;border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-left-radius:10px;border-bottom-right-radius:10px;min-width:calc(224px + 15vw);min-height:calc(224px + 15vh);box-shadow:2px 4px 4px #c8c8c8 inset,-2px -4px 4px #c8c8c8 inset;"]);
const QuestionTitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "whyIt__QuestionTitle",
  componentId: "sc-sy1iui-6"
})(["font-weight:600;font-size:calc(18px + 0.2vw);color:", ";"], props => props.color);
const AnswerTitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "whyIt__AnswerTitle",
  componentId: "sc-sy1iui-7"
})(["font-weight:600;"]);
const QuestionNumber = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "whyIt__QuestionNumber",
  componentId: "sc-sy1iui-8"
})(["display:inline-block;font-weight:600;font-size:calc(24px + 0.6vw);color:#f15e5e;transform:rotate(-10deg);margin-right:12px;animation-name:", ";animation-duration:2s;animation-iteration-count:infinite;"], props => props.isClick ? questionNumberKeyframe : '');

const WhyIt = () => {
  // state
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
    containerNo: 2,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CommonSection, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(QuestionSection, {
        children: qnaArray.map((qna, index) => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(QuestionDiv, {
            onClick: e => {
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
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(QuestionTitle, {
                color: questionColor[index],
                children: qna.question
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 240,
                columnNumber: 37
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 238,
              columnNumber: 33
            }, undefined)
          }, qna.answer, false, {
            fileName: _jsxFileName,
            lineNumber: 231,
            columnNumber: 29
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnswerSection, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnswerDiv, {
          ref: answerDivRef,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnswerTitle, {
            ref: answerTitleRef,
            children: questionIndex >= 0 ? '' : '궁금하신 질문을 선택해주세요.'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 249,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 226,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (WhyIt);

/***/ }),

/***/ "./modules/baseStore.tsx":
/*!*******************************!*\
  !*** ./modules/baseStore.tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);

const BaseStore = (0,mobx__WEBPACK_IMPORTED_MODULE_0__.observable)({
  // state
  titleArray: ['Main', 'Intro', 'Why It', 'Skills', 'Career', 'Projects', 'More'],
  innerWidth: 0,
  innerHeight: 0,

  setInnerWidth(innerWidth) {
    this.innerWidth = innerWidth;
  },

  setInnerHeight(innerHeight) {
    this.innerHeight = innerHeight;
  }

});
/* harmony default export */ __webpack_exports__["default"] = (BaseStore);

/***/ }),

/***/ "./modules/indexStore.tsx":
/*!********************************!*\
  !*** ./modules/indexStore.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initStore */ "./modules/initStore.tsx");
/* harmony import */ var _baseStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseStore */ "./modules/baseStore.tsx");

 // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

const indexStore = () => ({
  initStore: _initStore__WEBPACK_IMPORTED_MODULE_0__.default,
  baseStore: _baseStore__WEBPACK_IMPORTED_MODULE_1__.default
});

/* harmony default export */ __webpack_exports__["default"] = (indexStore);

/***/ }),

/***/ "./modules/initStore.tsx":
/*!*******************************!*\
  !*** ./modules/initStore.tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);

const InitStore = (0,mobx__WEBPACK_IMPORTED_MODULE_0__.observable)({
  // state
  isEnd: false,

  setIsEnd(isEnd) {
    this.isEnd = isEnd;
  }

});
/* harmony default export */ __webpack_exports__["default"] = (InitStore);

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
/* harmony import */ var _modules_indexStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modules/indexStore */ "./modules/indexStore.tsx");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_10__);


var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\pages\\index.tsx";











const Index = () => {
  const {
    initStore,
    baseStore
  } = (0,_modules_indexStore__WEBPACK_IMPORTED_MODULE_9__.default)();
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(() => {
    window.addEventListener('resize', onChangeResize);
    onChangeResize();
    return () => {
      window.removeEventListener('resize', onChangeResize);
    };
  }, []); // onChange

  const onChangeResize = () => {
    baseStore.setInnerWidth(window.innerWidth);
    baseStore.setInnerHeight(window.innerHeight);
  };

  return (0,mobx_react__WEBPACK_IMPORTED_MODULE_10__.useObserver)(() => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [initStore.isEnd ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_main__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_intro__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_whyIt__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_skills__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_career__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 21
      }, undefined)]
    }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_init__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "3889360865",
      children: "@import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');body{margin:0;padding:0;}h1,h2,h3,h4,h5,h6,span,p{font-family:'AppleSDGothicNeo','Noto Sans KR',sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcc3R1ZHlcXHBvcnRmb2xpb1xcc3VuZ2NoYW5cXHBhZ2VzXFxpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNENpQixBQUdrQyxBQVlrRCxBQUdZLFNBZDdELFVBQ2Qsc0NBV0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxzdHVkeVxccG9ydGZvbGlvXFxzdW5nY2hhblxccGFnZXNcXGluZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBNYWluIGZyb20gJy4uL2NvbXBvbmVudC9tYWluJztcclxuaW1wb3J0IEludHJvIGZyb20gJy4uL2NvbXBvbmVudC9pbnRybyc7XHJcbmltcG9ydCBXaHlJdCBmcm9tICcuLi9jb21wb25lbnQvd2h5SXQnO1xyXG5pbXBvcnQgU2tpbGxzIGZyb20gJy4uL2NvbXBvbmVudC9za2lsbHMnO1xyXG5pbXBvcnQgQ2FyZWVyIGZyb20gJy4uL2NvbXBvbmVudC9jYXJlZXInO1xyXG5pbXBvcnQgSW5pdCBmcm9tICcuLi9jb21wb25lbnQvaW5pdCc7XHJcbmltcG9ydCBpbmRleFN0b3JlIGZyb20gJy4uL21vZHVsZXMvaW5kZXhTdG9yZSc7XHJcbmltcG9ydCB7IHVzZU9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdCc7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICBjb25zdCB7IGluaXRTdG9yZSwgYmFzZVN0b3JlIH0gPSBpbmRleFN0b3JlKCk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25DaGFuZ2VSZXNpemUpO1xyXG4gICAgICAgIG9uQ2hhbmdlUmVzaXplKCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvbkNoYW5nZVJlc2l6ZSk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICAvLyBvbkNoYW5nZVxyXG4gICAgY29uc3Qgb25DaGFuZ2VSZXNpemUgPSAoKSA9PiB7XHJcbiAgICAgICAgYmFzZVN0b3JlLnNldElubmVyV2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xyXG4gICAgICAgIGJhc2VTdG9yZS5zZXRJbm5lckhlaWdodCh3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdXNlT2JzZXJ2ZXIoKCkgPT4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtpbml0U3RvcmUuaXNFbmQgPyAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNYWluIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEludHJvIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFdoeUl0IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNraWxscyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJlZXIgLz5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPEluaXQgLz5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaDEsXHJcbiAgICAgICAgICAgICAgICAgICAgaDIsXHJcbiAgICAgICAgICAgICAgICAgICAgaDMsXHJcbiAgICAgICAgICAgICAgICAgICAgaDQsXHJcbiAgICAgICAgICAgICAgICAgICAgaDUsXHJcbiAgICAgICAgICAgICAgICAgICAgaDYsXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbixcclxuICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBcHBsZVNER290aGljTmVvJywgJ05vdG8gU2FucyBLUicsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CdW5nZWUmZGlzcGxheT1zd2FwJyk7XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\User\\\\Desktop\\\\study\\\\portfolio\\\\sungchan\\\\pages\\\\index.tsx */"
    }, void 0, false, void 0, undefined)]
  }, void 0, true));
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

/***/ "mobx":
/*!***********************!*\
  !*** external "mobx" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("mobx");;

/***/ }),

/***/ "mobx-react":
/*!*****************************!*\
  !*** external "mobx-react" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("mobx-react");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vLi9jb21wb25lbnQvYmFzZS50c3giLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvLy4vY29tcG9uZW50L2NhcmVlci50c3giLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvLy4vY29tcG9uZW50L2luaXQudHN4Iiwid2VicGFjazovL3N1bmdjaGFuX3BvcnRmb2xpby8uL2NvbXBvbmVudC9pbnRyby50c3giLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvLy4vY29tcG9uZW50L21haW4udHN4Iiwid2VicGFjazovL3N1bmdjaGFuX3BvcnRmb2xpby8uL2NvbXBvbmVudC9za2lsbHMudHN4Iiwid2VicGFjazovL3N1bmdjaGFuX3BvcnRmb2xpby8uL2NvbXBvbmVudC93aHlJdC50c3giLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvLy4vbW9kdWxlcy9iYXNlU3RvcmUudHN4Iiwid2VicGFjazovL3N1bmdjaGFuX3BvcnRmb2xpby8uL21vZHVsZXMvaW5kZXhTdG9yZS50c3giLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvLy4vbW9kdWxlcy9pbml0U3RvcmUudHN4Iiwid2VicGFjazovL3N1bmdjaGFuX3BvcnRmb2xpby8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vLi9zdHlsZS9zdHlsZS50c3giLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvL2V4dGVybmFsIFwibW9ieFwiIiwid2VicGFjazovL3N1bmdjaGFuX3BvcnRmb2xpby9leHRlcm5hbCBcIm1vYngtcmVhY3RcIiIsIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3N1bmdjaGFuX3BvcnRmb2xpby9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3N1bmdjaGFuX3BvcnRmb2xpby9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIl0sIm5hbWVzIjpbIk1haW5Db250YWluZXIiLCJzdHlsZWQiLCJwcm9wcyIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsIlN1YkNvbnRhaW5lciIsImlzUmVhY2giLCJDb21wb25lbnRDb250YWluZXIiLCJtYXhXaWR0aCIsIlRpdGxlU2VjdGlvbiIsIkNvbXBvbmVudFNlY3Rpb24iLCJNYWluVGl0bGUiLCJCYXNlIiwiY2hpbGRyZW4iLCJjb250YWluZXJObyIsImJhc2VTdG9yZSIsImluZGV4U3RvcmUiLCJzZXRJc1JlYWNoIiwiUmVhY3QiLCJtYWluQ29udGFpbmVyUmVmIiwiYmFja2dyb3VuZENvbG9yQXJyYXkiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwib25DaGFuZ2VTY3JvbGwiLCJvbkNoYW5nZVJlc2l6ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjdXJyZW50Iiwic2V0QXR0cmlidXRlIiwidGl0bGVBcnJheSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsIm9uQ2xpY2tNYWluQ29udGFpbmVyIiwic2Nyb2xsQnkiLCJiZWhhdmlvciIsInVzZU9ic2VydmVyIiwiU3R5bGVkRGl2MSIsIlN0eWxlZERpdjIiLCJTdHlsZWREaXYzIiwiU3R5bGVkRGl2NCIsIlN0eWxlZFNwYW4xIiwiQ2FyZWVyIiwid2lkdGgiLCJDb250YWluZXIiLCJUaXRsZURpdiIsIk1haW5TZWN0aW9uIiwiQ29sb3JTcGFuIiwiY29sb3IiLCJUaXRsZUN1cnNvciIsIkluaXQiLCJpbml0U3RvcmUiLCJjb250YWluZXJSZWYiLCJ0eXBpbmdTdHJpbmdSZWYxIiwidHlwaW5nU3RyaW5nUmVmMiIsInR5cGluZ1N0cmluZ1JlZjMiLCJ0eXBpbmdTdHJpbmdSZWY0IiwidHlwaW5nU3RyaW5nUmVmNSIsInR5cGluZ1N0cmluZ1JlZjYiLCJ0eXBpbmdTdHJpbmdSZWY3IiwidHlwaW5nU3RyaW5nUmVmOCIsInR5cGluZ0N1cnNvcjEiLCJ0eXBpbmdDdXJzb3IyIiwidHlwaW5nQ3Vyc29yMyIsInR5cGluZ0N1cnNvcjQiLCJ0aW1lIiwic3RyaW5ncyIsInN0cmluZ09ianMiLCJzdHJpbmciLCJzdGFydCIsImxlbmd0aCIsInNldFR5cGluZ1N0cmluZ0FjdGlvbjEiLCJzZXRUeXBpbmdTdHJpbmdBY3Rpb24yIiwic2V0VHlwaW5nQ3Vyc29yQWN0aW9uIiwic2V0VGltZW91dCIsInNldElzRW5kIiwicmVmIiwiaW5kZXgiLCJjaGFySW5kZXgiLCJpbm5lckhUTUwiLCJ0eXBpbmdJbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInN0eWxlIiwiZGlzcGxheSIsIkJveFNlY3Rpb24iLCJCb3hDb250YWluZXIiLCJpbm5lcldpZHRoIiwiZGlyZWN0aW9uIiwiQm94TWFpbkRpdiIsIkJveExlZnREaXYiLCJCb3hSaWdodERpdiIsIkJveERlc2NyaXB0aW9uIiwiQm94VGl0bGUiLCJJbnRybyIsImJveEFycmF5MSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJib3hBcnJheTIiLCJib3hBcnJheTMiLCJib3hBcnJheTQiLCJtYXAiLCJib3giLCJNZW51RGl2S2V5RnJhbWUiLCJrZXlmcmFtZXMiLCJNZW51RGl2IiwiTWVudVN1YkRpdkhvdmVyS2V5RnJhbWUiLCJNZW51U3ViRGl2IiwiTWVudVNlY3Rpb24iLCJUaXRsZVNlY3Rpb25LZXlGcmFtZSIsIlN1YlRpdGxlIiwiTWFpbiIsIm9uQ2xpY2tNZW51RGl2IiwidGl0bGVDb250aWFuZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibWVudSIsIkJveENvdGFpbmVyIiwiSW1hZ2VEaXYiLCJCb3hJbWFnZSIsIlNraWxscyIsInNraWxsc0FycmF5Iiwic3JjIiwic2tpbGwiLCJDb21tb25TZWN0aW9uIiwiUXVlc3Rpb25TZWN0aW9uIiwiQW5zd2VyU2VjdGlvbiIsInF1ZXN0aW9uTnVtYmVyS2V5ZnJhbWUiLCJRdWVzdGlvbkRpdiIsIlF1ZXN0aW9uU3ViRGl2IiwiQW5zd2VyRGl2IiwiUXVlc3Rpb25UaXRsZSIsIkFuc3dlclRpdGxlIiwiUXVlc3Rpb25OdW1iZXIiLCJpc0NsaWNrIiwiV2h5SXQiLCJxdWVzdGlvbkluZGV4Iiwic2V0UXVlc3Rpb25JbmRleCIsInR5cGluZ1RpbWVyIiwic2V0VHlwaW5nVGltZXIiLCJhbnN3ZXJUaXRsZVJlZiIsImFuc3dlckRpdlJlZiIsInFuYUFycmF5IiwicXVlc3Rpb24iLCJhbnN3ZXIiLCJxdWVzdGlvbkNvbG9yIiwib25DbGlja1F1ZXN0aW9uIiwiYm94U2hhZG93IiwicW5hIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsIkJhc2VTdG9yZSIsIm9ic2VydmFibGUiLCJpbm5lckhlaWdodCIsInNldElubmVyV2lkdGgiLCJzZXRJbm5lckhlaWdodCIsIkluaXRTdG9yZSIsImlzRW5kIiwiSW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FB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STtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF4Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURjLENBQWxCO0FBb0NILENBak1EOztBQW1NQSwrREFBZWQsSUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbFBBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTW1DLFVBQVUsR0FBR2xGLDJFQUFIO0FBQUE7QUFBQTtBQUFBLDBDQUFoQjtBQVVBLE1BQU1tRixZQUFZLEdBQUduRix1RUFBSDtBQUFBO0FBQUE7QUFBQSxvQ0FFWEMsS0FBRCxJQUEwQjtBQUN4QixNQUFJQSxLQUFLLENBQUNtRixVQUFOLEdBQW1CN0Usa0RBQXZCLEVBQWlDO0FBQzdCLFdBQVE7QUFDcEI7QUFDQSxhQUZZO0FBR0gsR0FKRCxNQUlPLElBQUlOLEtBQUssQ0FBQ29GLFNBQU4sS0FBb0IsTUFBeEIsRUFBZ0M7QUFDbkMsV0FBUTtBQUNwQjtBQUNBLGFBRlk7QUFHSDtBQUNKLENBWmEsQ0FBbEI7QUFlQSxNQUFNQyxVQUFVLEdBQUd0Rix1RUFBSDtBQUFBO0FBQUE7QUFBQSw0UkFBaEI7QUFhQSxNQUFNdUYsVUFBVSxHQUFHdkYsdUVBQUg7QUFBQTtBQUFBO0FBQUEsb0dBQWhCO0FBT0EsTUFBTXdGLFdBQVcsR0FBR3hGLHVFQUFIO0FBQUE7QUFBQTtBQUFBLG9HQUFqQjtBQU9BLE1BQU15RixjQUFjLEdBQUd6Rix3RUFBSDtBQUFBO0FBQUE7QUFBQSxxQ0FBcEI7QUFJQSxNQUFNMEYsUUFBUSxHQUFHMUYsd0VBQUg7QUFBQTtBQUFBO0FBQUEsb0dBQWQ7O0FBT0EsTUFBTTJGLEtBQUssR0FBRyxNQUFtQjtBQUM3QjtBQUNBLFFBQU07QUFBRTdFO0FBQUYsTUFBZ0JDLDREQUFVLEVBQWhDLENBRjZCLENBSTdCOztBQUNBLFFBQU02RSxTQUFTLEdBQUcsQ0FDZDtBQUFFQyxTQUFLLEVBQUUsSUFBVDtBQUFlQyxlQUFXLEVBQUU7QUFBNUIsR0FEYyxFQUVkO0FBQUVELFNBQUssRUFBRSxNQUFUO0FBQWlCQyxlQUFXLEVBQUU7QUFBOUIsR0FGYyxDQUFsQjtBQUlBLFFBQU1DLFNBQVMsR0FBRyxDQUNkO0FBQUVGLFNBQUssRUFBRSxLQUFUO0FBQWdCQyxlQUFXLEVBQUU7QUFBN0IsR0FEYyxFQUVkO0FBQUVELFNBQUssRUFBRSxLQUFUO0FBQWdCQyxlQUFXLEVBQUU7QUFBN0IsR0FGYyxDQUFsQjtBQUlBLFFBQU1FLFNBQVMsR0FBRyxDQUNkO0FBQUVILFNBQUssRUFBRSxJQUFUO0FBQWVDLGVBQVcsRUFBRTtBQUE1QixHQURjLEVBRWQ7QUFBRUQsU0FBSyxFQUFFLEtBQVQ7QUFBZ0JDLGVBQVcsRUFBRTtBQUE3QixHQUZjLEVBR2Q7QUFBRUQsU0FBSyxFQUFFLEtBQVQ7QUFBZ0JDLGVBQVcsRUFBRTtBQUE3QixHQUhjLENBQWxCO0FBS0EsUUFBTUcsU0FBUyxHQUFHLENBQ2Q7QUFBRUosU0FBSyxFQUFFLElBQVQ7QUFBZUMsZUFBVyxFQUFFO0FBQTVCLEdBRGMsRUFFZDtBQUFFRCxTQUFLLEVBQUUsTUFBVDtBQUFpQkMsZUFBVyxFQUFFO0FBQTlCLEdBRmMsQ0FBbEI7QUFLQSxTQUFPN0QsdURBQVcsQ0FBQyxtQkFDZiw4REFBQywwQ0FBRDtBQUFNLGVBQVcsRUFBRSxDQUFuQjtBQUFBLDJCQUNJLDhEQUFDLFVBQUQ7QUFBQSw4QkFDSSw4REFBQyxZQUFEO0FBQWMsa0JBQVUsRUFBRW5CLFNBQVMsQ0FBQ3NFLFVBQXBDO0FBQUEsa0JBQ0tRLFNBQVMsQ0FBQ00sR0FBVixDQUFlQyxHQUFELElBQVM7QUFDcEIsOEJBQ0ksOERBQUMsVUFBRDtBQUFBLG9DQUNJLDhEQUFDLGNBQUQ7QUFBQSx3QkFBaUJBLEdBQUcsQ0FBQ0w7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixlQUVJLDhEQUFDLFVBQUQ7QUFBQSxxQ0FDSSw4REFBQyxRQUFEO0FBQUEsMEJBQVdLLEdBQUcsQ0FBQ047QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGSjtBQUFBLGFBQWlCTSxHQUFHLENBQUNMLFdBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREo7QUFRSCxTQVRBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQWNJLDhEQUFDLFlBQUQ7QUFBYyxrQkFBVSxFQUFFaEYsU0FBUyxDQUFDc0UsVUFBcEM7QUFBZ0QsaUJBQVMsRUFBRSxNQUEzRDtBQUFBLGtCQUNLVyxTQUFTLENBQUNHLEdBQVYsQ0FBZUMsR0FBRCxJQUFTO0FBQ3BCLDhCQUNJLDhEQUFDLFVBQUQ7QUFBQSxvQ0FDSSw4REFBQyxjQUFEO0FBQUEsd0JBQWlCQSxHQUFHLENBQUNMO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREosZUFFSSw4REFBQyxXQUFEO0FBQUEscUNBQ0ksOERBQUMsUUFBRDtBQUFBLDBCQUFXSyxHQUFHLENBQUNOO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRko7QUFBQSxhQUFpQk0sR0FBRyxDQUFDTCxXQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKO0FBUUgsU0FUQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZEosZUEyQkksOERBQUMsWUFBRDtBQUFjLGtCQUFVLEVBQUVoRixTQUFTLENBQUNzRSxVQUFwQztBQUFBLGtCQUNLWSxTQUFTLENBQUNFLEdBQVYsQ0FBZUMsR0FBRCxJQUFTO0FBQ3BCLDhCQUNJLDhEQUFDLFVBQUQ7QUFBQSxvQ0FDSSw4REFBQyxjQUFEO0FBQUEsd0JBQWlCQSxHQUFHLENBQUNMO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREosZUFFSSw4REFBQyxVQUFEO0FBQUEscUNBQ0ksOERBQUMsUUFBRDtBQUFBLDBCQUFXSyxHQUFHLENBQUNOO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRko7QUFBQSxhQUFpQk0sR0FBRyxDQUFDTCxXQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKO0FBUUgsU0FUQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBM0JKLGVBd0NJLDhEQUFDLFlBQUQ7QUFBYyxrQkFBVSxFQUFFaEYsU0FBUyxDQUFDc0UsVUFBcEM7QUFBZ0QsaUJBQVMsRUFBRSxNQUEzRDtBQUFBLGtCQUNLYSxTQUFTLENBQUNDLEdBQVYsQ0FBZUMsR0FBRCxJQUFTO0FBQ3BCLDhCQUNJLDhEQUFDLFVBQUQ7QUFBQSxvQ0FDSSw4REFBQyxjQUFEO0FBQUEsd0JBQWlCQSxHQUFHLENBQUNMO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREosZUFFSSw4REFBQyxXQUFEO0FBQUEscUNBQ0ksOERBQUMsUUFBRDtBQUFBLDBCQUFXSyxHQUFHLENBQUNOO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRko7QUFBQSxhQUFpQk0sR0FBRyxDQUFDTCxXQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKO0FBUUgsU0FUQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBeENKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEYyxDQUFsQjtBQXlESCxDQWhGRDs7QUFrRkEsK0RBQWVILEtBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoVEE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1TLGVBQWUsR0FBR0MsNERBQUgsNklBQXJCO0FBY0EsTUFBTUMsT0FBTyxHQUFHdEcsdUVBQUg7QUFBQTtBQUFBO0FBQUEsdUZBSVNvRyxlQUpULENBQWI7QUFRQSxNQUFNRyx1QkFBdUIsR0FBR0YsNERBQUgsdUNBQTdCO0FBTUEsTUFBTUcsVUFBVSxHQUFHeEcsdUVBQUg7QUFBQTtBQUFBO0FBQUEsaU5BWVV1Ryx1QkFaVixDQUFoQjtBQW9CQSxNQUFNRSxXQUFXLEdBQUd6RywyRUFBSDtBQUFBO0FBQUE7QUFBQSx3Q0FFREMsS0FBRCxJQUEwQkEsS0FBSyxDQUFDbUYsVUFBTixJQUFvQjdFLGtEQUFwQixHQUErQixPQUEvQixHQUF5QyxNQUZqRSxDQUFqQjtBQUtBLE1BQU1tRyxvQkFBb0IsR0FBR0wsNERBQUgsdUZBQTFCO0FBWUEsTUFBTTdGLFlBQVksR0FBR1IsMkVBQUg7QUFBQTtBQUFBO0FBQUEsb0ZBSUkwRyxvQkFKSixDQUFsQjtBQVFBLE1BQU1oRyxTQUFTLEdBQUdWLHdFQUFIO0FBQUE7QUFBQTtBQUFBLG1FQUFmO0FBTUEsTUFBTTJHLFFBQVEsR0FBRzNHLHdFQUFIO0FBQUE7QUFBQTtBQUFBLG1EQUFkOztBQUtBLE1BQU00RyxJQUFJLEdBQUcsTUFBbUI7QUFDNUI7QUFDQSxRQUFNO0FBQUU5RjtBQUFGLE1BQWdCQyw0REFBVSxFQUFoQyxDQUY0QixDQUk1Qjs7QUFDQSxRQUFNOEYsY0FBYyxHQUFJaEIsS0FBRCxJQUFtQjtBQUN0QyxVQUFNaUIsY0FBYyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0JuQixLQUF4QixDQUF2Qjs7QUFFQSxRQUFJaUIsY0FBSixFQUFvQjtBQUNoQjFGLFlBQU0sQ0FBQ1csUUFBUCxDQUFnQjtBQUFFRixXQUFHLEVBQUVpRixjQUFjLENBQUNsRixxQkFBZixHQUF1Q0MsR0FBOUM7QUFBbURHLGdCQUFRLEVBQUU7QUFBN0QsT0FBaEI7QUFDSDtBQUNKLEdBTkQ7O0FBUUEsU0FBT0MsdURBQVcsQ0FBQyxtQkFDZjtBQUFBLDJCQUNJLDhEQUFDLDBDQUFEO0FBQU0saUJBQVcsRUFBRSxDQUFuQjtBQUFBLDhCQUNJLDhEQUFDLFdBQUQ7QUFBYSxrQkFBVSxFQUFFbkIsU0FBUyxDQUFDc0UsVUFBbkM7QUFBQSxrQkFDS3RFLFNBQVMsQ0FBQ2EsVUFBVixDQUFxQnVFLEdBQXJCLENBQXlCLENBQUNlLElBQUQsRUFBT3ZDLEtBQVAsS0FBaUI7QUFDdkMsY0FBSUEsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDYixnQ0FDSSw4REFBQyxPQUFEO0FBQW9CLHFCQUFPLEVBQUUsTUFBTW1DLGNBQWMsQ0FBQ0ksSUFBRCxDQUFqRDtBQUFBLHFDQUNJLDhEQUFDLFVBQUQ7QUFBQSx3Q0FDSTtBQUFBLDRCQUFLQTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixlQUFjQSxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREo7QUFRSDtBQUNKLFNBWEE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBZ0JJLDhEQUFDLFlBQUQ7QUFBQSxnQ0FDSSw4REFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBRUksOERBQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBaEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURjLENBQWxCO0FBeUJILENBdENEOztBQXdDQSwrREFBZUwsSUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5UUE7QUFDQTtBQUNBO0FBRUEsTUFBTWpFLFdBQVcsR0FBRzNDLDJFQUFIO0FBQUE7QUFBQTtBQUFBLDJOQUFqQjtBQWtCQSxNQUFNa0gsV0FBVyxHQUFHbEgsdUVBQUg7QUFBQTtBQUFBO0FBQUEseURBQWpCO0FBTUEsTUFBTTBDLFFBQVEsR0FBRzFDLHVFQUFIO0FBQUE7QUFBQTtBQUFBLHNCQUFkO0FBSUEsTUFBTW1ILFFBQVEsR0FBR25ILHVFQUFIO0FBQUE7QUFBQTtBQUFBLG1PQUFkO0FBVUEsTUFBTTBGLFFBQVEsR0FBRzFGLHdFQUFIO0FBQUE7QUFBQTtBQUFBLG9EQUFkO0FBTUEsTUFBTW9ILFFBQVEsR0FBR3BILHVFQUFIO0FBQUE7QUFBQTtBQUFBLFFBQWQ7O0FBRUEsTUFBTXFILE1BQU0sR0FBRyxNQUFtQjtBQUM5QixRQUFNQyxXQUFXLEdBQUcsQ0FDaEI7QUFDSXpCLFNBQUssRUFBRSxJQURYO0FBRUkwQixPQUFHLEVBQUU7QUFGVCxHQURnQixFQUtoQjtBQUNJMUIsU0FBSyxFQUFFLFFBRFg7QUFFSTBCLE9BQUcsRUFBRTtBQUZULEdBTGdCLEVBU2hCO0FBQ0kxQixTQUFLLEVBQUUsYUFEWDtBQUVJMEIsT0FBRyxFQUFFO0FBRlQsR0FUZ0IsRUFhaEI7QUFDSTFCLFNBQUssRUFBRSxJQURYO0FBRUkwQixPQUFHLEVBQUU7QUFGVCxHQWJnQixDQUFwQjtBQW1CQSxzQkFDSSw4REFBQywwQ0FBRDtBQUFNLGVBQVcsRUFBRSxDQUFuQjtBQUFBLDJCQUNJLDhEQUFDLFdBQUQ7QUFBQSxnQkFDS0QsV0FBVyxDQUFDcEIsR0FBWixDQUFpQnNCLEtBQUQsSUFBVztBQUN4Qiw0QkFDSSw4REFBQyxXQUFEO0FBQUEsa0NBQ0ksOERBQUMsUUFBRDtBQUFBLG1DQUNJLDhEQUFDLFFBQUQ7QUFBQSx3QkFBV0EsS0FBSyxDQUFDM0I7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFJSSw4REFBQyxRQUFEO0FBQUEsbUNBQ0ksOERBQUMsUUFBRDtBQUFVLGlCQUFHLEVBQUUyQixLQUFLLENBQUNEO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpKO0FBQUEsV0FBa0JDLEtBQUssQ0FBQzNCLEtBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREo7QUFVSCxPQVhBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQWtCSCxDQXRDRDs7QUF3Q0EsK0RBQWV3QixNQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFGQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUEsTUFBTUksYUFBYSxHQUFHekgsMkVBQUg7QUFBQTtBQUFBO0FBQUEsOEdBQW5CO0FBVUEsTUFBTTBILGVBQWUsR0FBRzFILDJFQUFIO0FBQUE7QUFBQTtBQUFBLG1EQUFyQjtBQUtBLE1BQU0ySCxhQUFhLEdBQUczSCwyRUFBSDtBQUFBO0FBQUE7QUFBQSxtREFBbkI7QUFLQSxNQUFNNEgsc0JBQXNCLEdBQUd2Qix3REFBVTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FaQTtBQWNBLE1BQU13QixXQUFXLEdBQUc3SCx1RUFBSDtBQUFBO0FBQUE7QUFBQSxxWEFhYTRILHNCQWJiLENBQWpCO0FBb0JBLE1BQU1FLGNBQWMsR0FBRzlILHVFQUFIO0FBQUE7QUFBQTtBQUFBLHdDQUFwQjtBQUtBLE1BQU0rSCxTQUFTLEdBQUcvSCx1RUFBSDtBQUFBO0FBQUE7QUFBQSw2U0FBZjtBQWlCQSxNQUFNZ0ksYUFBYSxHQUFHaEksd0VBQUg7QUFBQTtBQUFBO0FBQUEsaUVBR0xDLEtBQUQsSUFBMkJBLEtBQUssQ0FBQzRDLEtBSDNCLENBQW5CO0FBTUEsTUFBTW9GLFdBQVcsR0FBR2pJLHdFQUFIO0FBQUE7QUFBQTtBQUFBLHdCQUFqQjtBQVFBLE1BQU1rSSxjQUFjLEdBQUdsSSx3RUFBSDtBQUFBO0FBQUE7QUFBQSxpTkFRR0MsS0FBRCxJQUE2QkEsS0FBSyxDQUFDa0ksT0FBTixHQUFnQlAsc0JBQWhCLEdBQXlDLEVBUnhFLENBQXBCOztBQWFBLE1BQU1RLEtBQUssR0FBRyxNQUFtQjtBQUM3QjtBQUNBLFFBQU0sQ0FBQ0MsYUFBRCxFQUFnQkMsZ0JBQWhCLElBQW9DckgsMkNBQUEsQ0FBdUIsQ0FBQyxDQUF4QixDQUExQztBQUNBLFFBQU0sQ0FBQ3NILFdBQUQsRUFBY0MsY0FBZCxJQUFnQ3ZILDJDQUFBLEVBQXRDLENBSDZCLENBSzdCOztBQUNBLFFBQU13SCxjQUFjLEdBQUd4SCx5Q0FBQSxFQUF2QjtBQUNBLFFBQU15SCxZQUFZLEdBQUd6SCx5Q0FBQSxFQUFyQixDQVA2QixDQVM3Qjs7QUFDQSxRQUFNMEgsUUFBUSxHQUFHLENBQ2I7QUFDSUMsWUFBUSxFQUFFLGFBRGQ7QUFFSUMsVUFBTSxFQUFFO0FBRlosR0FEYSxFQU1iO0FBQ0lELFlBQVEsRUFBRSxrQkFEZDtBQUVJQyxVQUFNLEVBQUc7QUFGYixHQU5hLEVBV2I7QUFDSUQsWUFBUSxFQUFFLGFBRGQ7QUFFSUMsVUFBTSxFQUFFO0FBRlosR0FYYSxDQUFqQjtBQWlCQSxRQUFNQyxhQUFhLEdBQUcsQ0FBQyxTQUFELEVBQVksU0FBWixFQUF1QixTQUF2QixDQUF0QixDQTNCNkIsQ0E2QjdCOztBQUNBLFFBQU1DLGVBQWUsR0FBSXJFLEtBQUQsSUFBbUI7QUFDdkM0RCxvQkFBZ0IsQ0FBQzVELEtBQUQsQ0FBaEIsQ0FEdUMsQ0FDZDs7QUFDekIsVUFBTVosSUFBSSxHQUFHLEVBQWIsQ0FGdUMsQ0FFdEI7O0FBRWpCLFFBQUkyRSxjQUFjLENBQUNoSCxPQUFmLElBQTBCaUgsWUFBWSxDQUFDakgsT0FBM0MsRUFBb0Q7QUFDaEQsVUFBSWtELFNBQVMsR0FBRyxDQUFoQjtBQUNBSSxtQkFBYSxDQUFDd0QsV0FBRCxDQUFiLENBRmdELENBRXBCOztBQUM1QkUsb0JBQWMsQ0FBQ2hILE9BQWYsQ0FBdUJtRCxTQUF2QixHQUFtQyxFQUFuQztBQUNBNkQsb0JBQWMsQ0FBQ2hILE9BQWYsQ0FBdUJ1RCxLQUF2QixDQUE2Qm5DLEtBQTdCLEdBQXFDaUcsYUFBYSxDQUFDcEUsS0FBRCxDQUFsRDtBQUNBZ0Usa0JBQVksQ0FBQ2pILE9BQWIsQ0FBcUJ1RCxLQUFyQixDQUEyQmdFLFNBQTNCLEdBQXdDLGVBQWNGLGFBQWEsQ0FBQ3BFLEtBQUQsQ0FBUSx5QkFBd0JvRSxhQUFhLENBQUNwRSxLQUFELENBQVEsUUFBeEg7QUFFQSxZQUFNRyxjQUFjLEdBQUdDLFdBQVcsQ0FBQyxNQUFNO0FBQ3JDO0FBQ0EsWUFBSTZELFFBQVEsQ0FBQ2pFLEtBQUQsQ0FBUixDQUFnQm1FLE1BQWhCLENBQXVCbEUsU0FBdkIsTUFBc0MsSUFBMUMsRUFBZ0Q7QUFDNUM7QUFDQThELHdCQUFjLENBQUNoSCxPQUFmLENBQXVCbUQsU0FBdkIsSUFBb0MsUUFBcEM7QUFDQUQsbUJBQVM7QUFDWixTQUpELE1BSU87QUFDSDtBQUNBOEQsd0JBQWMsQ0FBQ2hILE9BQWYsQ0FBdUJtRCxTQUF2QixJQUFvQytELFFBQVEsQ0FBQ2pFLEtBQUQsQ0FBUixDQUFnQm1FLE1BQWhCLENBQXVCbEUsU0FBUyxFQUFoQyxDQUFwQztBQUNIO0FBQ0osT0FWaUMsRUFVL0JiLElBVitCLENBQWxDO0FBWUEwRSxvQkFBYyxDQUFDM0QsY0FBRCxDQUFkLENBbkJnRCxDQW1CaEI7QUFFaEM7O0FBQ0FOLGdCQUFVLENBQUMsTUFBTTtBQUNiUSxxQkFBYSxDQUFDRixjQUFELENBQWI7QUFDSCxPQUZTLEVBRVA4RCxRQUFRLENBQUNqRSxLQUFELENBQVIsQ0FBZ0JtRSxNQUFoQixDQUF1QjFFLE1BQXZCLEdBQWdDTCxJQUZ6QixDQUFWO0FBR0g7QUFDSixHQTlCRDs7QUFnQ0Esc0JBQ0ksOERBQUMsMENBQUQ7QUFBTSxlQUFXLEVBQUUsQ0FBbkI7QUFBQSwyQkFDSSw4REFBQyxhQUFEO0FBQUEsOEJBQ0ksOERBQUMsZUFBRDtBQUFBLGtCQUNLNkUsUUFBUSxDQUFDekMsR0FBVCxDQUFhLENBQUMrQyxHQUFELEVBQU12RSxLQUFOLEtBQWdCO0FBQzFCLDhCQUNJLDhEQUFDLFdBQUQ7QUFFSSxtQkFBTyxFQUFHd0UsQ0FBRCxJQUFPO0FBQ1pILDZCQUFlLENBQUNyRSxLQUFELENBQWY7QUFDQXdFLGVBQUMsQ0FBQ0MsZUFBRjtBQUNILGFBTEw7QUFBQSxtQ0FPSSw4REFBQyxjQUFEO0FBQUEsc0NBQ0ksOERBQUMsY0FBRDtBQUFnQix1QkFBTyxFQUFFZCxhQUFhLEtBQUszRCxLQUEzQztBQUFBLGdDQUFvREEsS0FBSyxHQUFHLENBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFESixlQUVJLDhEQUFDLGFBQUQ7QUFBZSxxQkFBSyxFQUFFb0UsYUFBYSxDQUFDcEUsS0FBRCxDQUFuQztBQUFBLDBCQUE2Q3VFLEdBQUcsQ0FBQ0w7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQSixhQUNTSyxHQUFHLENBQUNKLE1BRGI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESjtBQWNILFNBZkE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBb0JJLDhEQUFDLGFBQUQ7QUFBQSwrQkFDSSw4REFBQyxTQUFEO0FBQVcsYUFBRyxFQUFFSCxZQUFoQjtBQUFBLGlDQUNJLDhEQUFDLFdBQUQ7QUFBYSxlQUFHLEVBQUVELGNBQWxCO0FBQUEsc0JBQ0tKLGFBQWEsSUFBSSxDQUFqQixHQUFxQixFQUFyQixHQUEwQjtBQUQvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBcEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQWdDSCxDQTlGRDs7QUFnR0EsK0RBQWVELEtBQWYsRTs7Ozs7Ozs7Ozs7Ozs7QUNsUUE7QUFFQSxNQUFNZ0IsU0FBUyxHQUFHQyxnREFBVSxDQUFDO0FBQ3pCO0FBQ0ExSCxZQUFVLEVBQUUsQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixRQUFsQixFQUE0QixRQUE1QixFQUFzQyxRQUF0QyxFQUFnRCxVQUFoRCxFQUE0RCxNQUE1RCxDQUZhO0FBR3pCeUQsWUFBVSxFQUFFLENBSGE7QUFJekJrRSxhQUFXLEVBQUUsQ0FKWTs7QUFNekJDLGVBQWEsQ0FBQ25FLFVBQUQsRUFBYTtBQUN0QixTQUFLQSxVQUFMLEdBQWtCQSxVQUFsQjtBQUNILEdBUndCOztBQVV6Qm9FLGdCQUFjLENBQUNGLFdBQUQsRUFBYztBQUN4QixTQUFLQSxXQUFMLEdBQW1CQSxXQUFuQjtBQUNIOztBQVp3QixDQUFELENBQTVCO0FBZUEsK0RBQWVGLFNBQWYsRTs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7Q0FHQTs7QUFDQSxNQUFNckksVUFBVSxHQUFHLE9BQU87QUFDdEJpQyxXQURzQjtBQUV0QmxDLFdBQVNBO0FBRmEsQ0FBUCxDQUFuQjs7QUFLQSwrREFBZUMsVUFBZixFOzs7Ozs7Ozs7Ozs7OztBQ1RBO0FBRUEsTUFBTTBJLFNBQVMsR0FBR0osZ0RBQVUsQ0FBQztBQUN6QjtBQUNBSyxPQUFLLEVBQUUsS0FGa0I7O0FBSXpCbEYsVUFBUSxDQUFDa0YsS0FBRCxFQUFpQjtBQUNyQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDSDs7QUFOd0IsQ0FBRCxDQUE1QjtBQVNBLCtEQUFlRCxTQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUUsS0FBSyxHQUFHLE1BQW1CO0FBQzdCLFFBQU07QUFBRTNHLGFBQUY7QUFBYWxDO0FBQWIsTUFBMkJDLDREQUFVLEVBQTNDO0FBRUFFLDhDQUFBLENBQWdCLE1BQU07QUFDbEJHLFVBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NFLGNBQWxDO0FBQ0FBLGtCQUFjO0FBRWQsV0FBTyxNQUFNO0FBQ1RILFlBQU0sQ0FBQ0ksbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNELGNBQXJDO0FBQ0gsS0FGRDtBQUdILEdBUEQsRUFPRyxFQVBILEVBSDZCLENBWTdCOztBQUNBLFFBQU1BLGNBQWMsR0FBRyxNQUFNO0FBQ3pCVCxhQUFTLENBQUN5SSxhQUFWLENBQXdCbkksTUFBTSxDQUFDZ0UsVUFBL0I7QUFDQXRFLGFBQVMsQ0FBQzBJLGNBQVYsQ0FBeUJwSSxNQUFNLENBQUNrSSxXQUFoQztBQUNILEdBSEQ7O0FBS0EsU0FBT3JILHdEQUFXLENBQUMsbUJBQ2Y7QUFBQSxlQUNLZSxTQUFTLENBQUMwRyxLQUFWLGdCQUNHO0FBQUEsOEJBQ0ksOERBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJLDhEQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFHSSw4REFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhKLGVBSUksOERBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSixlQUtJLDhEQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEo7QUFBQSxvQkFESCxnQkFTRyw4REFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZSO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRGMsQ0FBbEI7QUFxQ0gsQ0F2REQ7O0FBeURBLCtEQUFlQyxLQUFmLEU7Ozs7Ozs7Ozs7Ozs7OztBQ3BFTyxNQUFNcEosUUFBUSxHQUFHLEdBQWpCLEM7Ozs7Ozs7Ozs7O0FDQVAsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG4vLyBpbXBvcnQgeyBtYXhXaWR0aCB9IGZyb20gJy4uL3N0eWxlL3N0eWxlJztcclxuXHJcbi8vIGNvbnN0IFN0eWxlZFNlY3Rpb24xID0gc3R5bGVkLnNlY3Rpb25gYDtcclxuXHJcbi8vIGludGVyZmFjZSBJU3R5bGVkRGl2MiB7XHJcbi8vICAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxuLy8gfVxyXG5cclxuLy8gY29uc3QgU3R5bGVkRGl2MiA9IHN0eWxlZC5kaXZgXHJcbi8vICAgICBtYXgtd2lkdGg6ICR7bWF4V2lkdGh9cHg7XHJcbi8vICAgICBtYXJnaW46IDAgYXV0bztcclxuLy8gICAgIHBhZGRpbmc6IDAgMTVweDtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzOiBJU3R5bGVkRGl2MikgPT4gcHJvcHMuYmFja2dyb3VuZENvbG9yfTtcclxuXHJcbi8vICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke21heFdpZHRoICsgNTB9cHgpIHtcclxuLy8gICAgICAgICBtYXJnaW4tYm90dG9tOiA4NHB4O1xyXG4vLyAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE4cHg7XHJcbi8vICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE4cHg7XHJcbi8vICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMThweDtcclxuLy8gICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMThweDtcclxuLy8gICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDEycHggJHsocHJvcHM6IElTdHlsZWREaXYyKSA9PiBwcm9wcy5iYWNrZ3JvdW5kQ29sb3J9O1xyXG4vLyAgICAgfVxyXG4vLyBgO1xyXG5cclxuLy8gaW50ZXJmYWNlIElTdHlsZWREaXYzIHtcclxuLy8gICAgIHRpdGxlOiBzdHJpbmc7XHJcbi8vICAgICBzaG93VGl0bGU6IGJvb2xlYW47XHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IFN0eWxlZERpdjMgPSBzdHlsZWQuZGl2YFxyXG4vLyAgICAgJHsocHJvcHM6IElTdHlsZWREaXYzKSA9PiB7XHJcbi8vICAgICAgICAgaWYgKHByb3BzLnRpdGxlKSB7XHJcbi8vICAgICAgICAgICAgIGlmIChwcm9wcy5zaG93VGl0bGUpIHtcclxuLy8gICAgICAgICAgICAgICAgIHJldHVybiBgXHJcbi8vICAgICAgICAgICAgICAgICAgICAgZGlzcGFseTogYmxvY2s7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbi8vICAgICAgICAgICAgICAgICBgO1xyXG4vLyAgICAgICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIGBcclxuLy8gICAgICAgICAgICAgICAgICAgICBkaXNwYWx5OiBibG9jaztcclxuLy8gICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNjBweCk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuLy8gICAgICAgICAgICAgICAgIGA7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgICByZXR1cm4gYFxyXG4vLyAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuLy8gICAgICAgICAgICAgYDtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9fVxyXG5cclxuLy8gICAgIGRpc3BsYXk6ICR7KHByb3BzOiBJU3R5bGVkRGl2MykgPT4gKHByb3BzLnRpdGxlID8gJ2Jsb2NrJyA6ICdub25lJyl9O1xyXG4vLyAgICAgcGFkZGluZzogMjRweCAwO1xyXG4vLyAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMS44cztcclxuLy8gICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuLy8gYDtcclxuXHJcbi8vIGNvbnN0IFN0eWxlZFRpdGxlID0gc3R5bGVkLnNwYW5gXHJcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMi40ZW07XHJcbi8vIGA7XHJcblxyXG4vLyBpbnRlcmZhY2UgSUJhc2VDb21wb25lbnQge1xyXG4vLyAgICAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxuLy8gICAgIHRpdGxlOiBzdHJpbmc7XHJcbi8vICAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxuLy8gfVxyXG5cclxuLy8gY29uc3QgQmFzZTogUmVhY3QuRkM8SUJhc2VDb21wb25lbnQ+ID0gKHsgY2hpbGRyZW4sIHRpdGxlLCBiYWNrZ3JvdW5kQ29sb3IgfSk6IEpTWC5FbGVtZW50ID0+IHtcclxuLy8gICAgIC8vIHN0YXRlXHJcbi8vICAgICBjb25zdCBbc2hvd1RpdGxlLCBzZXRTaG93VGl0bGVdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4vLyAgICAgY29uc3QgW2lzQ2xpY2ssIHNldElzQ2xpY2tdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4vLyAgICAgY29uc3QgW3NhdmVQb3NpdGlvbiwgc2V0U2F2ZVBvc2l0aW9uXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oMCk7XHJcblxyXG4vLyAgICAgLy8gcmVmXHJcbi8vICAgICBjb25zdCBkaXYxUmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG4vLyAgICAgY29uc3QgZGl2MlJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuXHJcbi8vICAgICAvLyB2YXJpYWJsZVxyXG4vLyAgICAgbGV0IGlzQ2xpY2tWYXJpYWJsZSA9IGZhbHNlO1xyXG5cclxuLy8gICAgIC8vIHVzZUVmZmVjdFxyXG4vLyAgICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuLy8gICAgICAgICBzY3JvbGxUaXRsZSgpO1xyXG4vLyAgICAgICAgIHJlc2l6ZVNlY3Rpb24xKCk7XHJcblxyXG4vLyAgICAgICAgIGlmIChkaXYxUmVmLmN1cnJlbnQpIHtcclxuLy8gICAgICAgICAgICAgZGl2MVJlZi5jdXJyZW50LmlkID0gdGl0bGU7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfSwgW10pO1xyXG5cclxuLy8gICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbi8vICAgICAgICAgaXNDbGlja1ZhcmlhYmxlID0gZmFsc2U7XHJcbi8vICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbFRpdGxlKTtcclxuXHJcbi8vICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuLy8gICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbFRpdGxlKTtcclxuLy8gICAgICAgICB9O1xyXG4vLyAgICAgfSwgW2lzQ2xpY2tdKTtcclxuXHJcbi8vICAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVTZWN0aW9uMSk7XHJcblxyXG4vLyAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbi8vICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVTZWN0aW9uMSk7XHJcbi8vICAgICAgICAgfTtcclxuLy8gICAgIH0sIFtpc0NsaWNrXSk7XHJcblxyXG4vLyAgICAgLy8gb25DbGlja1xyXG4vLyAgICAgY29uc3Qgb25DbGlja0RpdjIgPSAoKSA9PiB7XHJcbi8vICAgICAgICAgaWYgKGRpdjFSZWYuY3VycmVudCkge1xyXG4vLyAgICAgICAgICAgICBpZiAoaXNDbGljaykge1xyXG4vLyAgICAgICAgICAgICAgICAgZGl2MVJlZi5jdXJyZW50LnN0eWxlLnRyYW5zaXRpb24gPSAnJztcclxuLy8gICAgICAgICAgICAgICAgIGRpdjFSZWYuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSAnJztcclxuLy8gICAgICAgICAgICAgICAgIGRpdjFSZWYuY3VycmVudC5zdHlsZS5tYXJnaW4gPSAnJztcclxuLy8gICAgICAgICAgICAgICAgIHNldElzQ2xpY2soZmFsc2UpO1xyXG4vLyAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHNhdmVQb3NpdGlvbik7XHJcbi8vICAgICAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxZID0gd2luZG93LnNjcm9sbFk7IC8vIO2YhOyerCDsiqTtgazroaQg64aS7J20XHJcbi8vICAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IGRpdjFSZWYuY3VycmVudCAmJiBkaXYxUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wOyAvLyBkaXbsnZggdG9w7JeQIOuPhOuLrO2VoCDrloTquYzsp4Ag64Ko7J2AIOqxsOumrFxyXG4vLyAgICAgICAgICAgICAgICAgY29uc3QgZ2FiWSA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLSAoZGl2MVJlZi5jdXJyZW50ICYmIGRpdjFSZWYuY3VycmVudC5jbGllbnRIZWlnaHQpKSAvIDI7IC8vICjtmZTrqbQg64aS7J20IC0gZGl2IOuGkuydtCkgLyAyXHJcbi8vICAgICAgICAgICAgICAgICBjb25zdCBnYWJYID0gKHdpbmRvdy5pbm5lcldpZHRoIC0gKGRpdjJSZWYuY3VycmVudCAmJiBkaXYyUmVmLmN1cnJlbnQuY2xpZW50V2lkdGgpKSAvIDI7IC8vICjtmZTrqbQg64SI67mEIC0gZGl2IOuEiOu5hCkgLyAyXHJcblxyXG4vLyAgICAgICAgICAgICAgICAgaWYgKGdhYlkgPiAwICYmIGdhYlggPiAwICYmIHdpbmRvdy5pbm5lcldpZHRoID49IG1heFdpZHRoICsgNTApIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBzZXRTYXZlUG9zaXRpb24oc2Nyb2xsWSArIGRpc3RhbmNlIC0gZ2FiWSk7IC8vIOykkeyVmSDsnITsuZhcclxuLy8gICAgICAgICAgICAgICAgICAgICBpZiAoZ2FiWSA+IDg0KSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBzY3JvbGxZICsgZGlzdGFuY2UgLSBnYWJZICsgKGdhYlkgLSA4NCkpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBzY3JvbGxZICsgZGlzdGFuY2UgLSBnYWJZKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJsYW5rWSA9IDEgKyAoZ2FiWSAvIChkaXYyUmVmLmN1cnJlbnQgJiYgZGl2MlJlZi5jdXJyZW50LmNsaWVudEhlaWdodCkpICogMjsgLy8gKGRpdiDsl6zruYQg64aS7J20IC8gZGl2IOuGkuydtCkgKiAyXHJcbi8vICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmxhbmtYID0gMSArIChnYWJYIC8gKGRpdjJSZWYuY3VycmVudCAmJiBkaXYyUmVmLmN1cnJlbnQuY2xpZW50V2lkdGgpKSAqIDI7IC8vIChkaXYg7Jes67mEIOuEiOu5hCAvIGRpdiDrhIjruYQpICogMlxyXG5cclxuLy8gICAgICAgICAgICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNpdGlvbiA9ICcxcyc7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgZGl2MVJlZi5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZSgke01hdGgubWluKGJsYW5rWSwgYmxhbmtYKX0pYDtcclxuLy8gICAgICAgICAgICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuc3R5bGUubWFyZ2luID0gYCR7Z2FiWX1weCAwYDtcclxuLy8gICAgICAgICAgICAgICAgICAgICBzZXRJc0NsaWNrKHRydWUpO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfTtcclxuXHJcbi8vICAgICAvLyBub3JtYWxcclxuLy8gICAgIGNvbnN0IHJlc2l6ZVNlY3Rpb24xID0gKCkgPT4ge1xyXG4vLyAgICAgICAgIGNvbnN0IGdhYlkgPSAod2luZG93LmlubmVySGVpZ2h0IC0gKGRpdjFSZWYuY3VycmVudCAmJiBkaXYxUmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0KSkgLyAyOyAvLyAo7ZmU66m0IOuGkuydtCAtIGRpdiDrhpLsnbQpIC8gMlxyXG4vLyAgICAgICAgIGNvbnN0IGdhYlggPSAod2luZG93LmlubmVyV2lkdGggLSAoZGl2MlJlZi5jdXJyZW50ICYmIGRpdjJSZWYuY3VycmVudC5jbGllbnRXaWR0aCkpIC8gMjsgLy8gKO2ZlOuptCDrhIjruYQgLSBkaXYg64SI67mEKSAvIDJcclxuXHJcbi8vICAgICAgICAgaWYgKGlzQ2xpY2spIHtcclxuLy8gICAgICAgICAgICAgaWYgKGdhYlkgPiAwICYmIGdhYlggPiAwICYmIHdpbmRvdy5pbm5lcldpZHRoID49IG1heFdpZHRoICsgNTApIHtcclxuLy8gICAgICAgICAgICAgICAgIGNvbnN0IGJsYW5rWSA9IDEgKyAoZ2FiWSAvIChkaXYyUmVmLmN1cnJlbnQgJiYgZGl2MlJlZi5jdXJyZW50LmNsaWVudEhlaWdodCkpICogMjsgLy8gKGRpdiDsl6zruYQg64aS7J20IC8gZGl2IOuGkuydtCkgKiAyXHJcbi8vICAgICAgICAgICAgICAgICBjb25zdCBibGFua1ggPSAxICsgKGdhYlggLyAoZGl2MlJlZi5jdXJyZW50ICYmIGRpdjJSZWYuY3VycmVudC5jbGllbnRXaWR0aCkpICogMjsgLy8gKGRpdiDsl6zruYQg64SI67mEIC8gZGl2IOuEiOu5hCkgKiAyXHJcblxyXG4vLyAgICAgICAgICAgICAgICAgZGl2MVJlZi5jdXJyZW50LnN0eWxlLnRyYW5zaXRpb24gPSAnJztcclxuLy8gICAgICAgICAgICAgICAgIGRpdjFSZWYuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoJHtNYXRoLm1pbihibGFua1ksIGJsYW5rWCl9KWA7XHJcbi8vICAgICAgICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuc3R5bGUubWFyZ2luID0gYCR7Z2FiWX1weCAwYDtcclxuLy8gICAgICAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgICAgICAgIGRpdjFSZWYuY3VycmVudC5zdHlsZS50cmFuc2l0aW9uID0gJyc7XHJcbi8vICAgICAgICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gJyc7XHJcbi8vICAgICAgICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuc3R5bGUubWFyZ2luID0gJyc7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIGlmIChkaXYyUmVmLmN1cnJlbnQpIHtcclxuLy8gICAgICAgICAgICAgaWYgKGdhYlkgPiAwICYmIGdhYlggPiAwICYmIHdpbmRvdy5pbm5lcldpZHRoID49IG1heFdpZHRoICsgNTApIHtcclxuLy8gICAgICAgICAgICAgICAgIGRpdjJSZWYuY3VycmVudC5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcbi8vICAgICAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgICAgICBkaXYyUmVmLmN1cnJlbnQuc3R5bGUuY3Vyc29yID0gJyc7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9O1xyXG5cclxuLy8gICAgIGNvbnN0IHNjcm9sbFRpdGxlID0gKCkgPT4ge1xyXG4vLyAgICAgICAgIGlmIChkaXYxUmVmLmN1cnJlbnQpIHtcclxuLy8gICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lckhlaWdodCA+PSBkaXYxUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgNDgpIHtcclxuLy8gICAgICAgICAgICAgICAgIHNldFNob3dUaXRsZSh0cnVlKTtcclxuLy8gICAgICAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgICAgICAgIHNldFNob3dUaXRsZShmYWxzZSk7XHJcbi8vICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgIGlmIChpc0NsaWNrVmFyaWFibGUpIHtcclxuLy8gICAgICAgICAgICAgICAgIGRpdjFSZWYuY3VycmVudC5zdHlsZS50cmFuc2l0aW9uID0gJyc7XHJcbi8vICAgICAgICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gJyc7XHJcbi8vICAgICAgICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuc3R5bGUubWFyZ2luID0gJyc7XHJcbi8vICAgICAgICAgICAgICAgICBzZXRJc0NsaWNrKGZhbHNlKTtcclxuLy8gICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgICAgaWYgKGlzQ2xpY2spIHtcclxuLy8gICAgICAgICAgICAgICAgIGlzQ2xpY2tWYXJpYWJsZSA9IHRydWU7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9O1xyXG5cclxuLy8gICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgPD5cclxuLy8gICAgICAgICAgICAgPFN0eWxlZFNlY3Rpb24xIHJlZj17ZGl2MVJlZn0+XHJcbi8vICAgICAgICAgICAgICAgICA8U3R5bGVkRGl2MiBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvcn0gcmVmPXtkaXYyUmVmfSBvbkNsaWNrPXtvbkNsaWNrRGl2Mn0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZERpdjMgdGl0bGU9e3RpdGxlfSBzaG93VGl0bGU9e3Nob3dUaXRsZX0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRUaXRsZT4jIHt0aXRsZX08L1N0eWxlZFRpdGxlPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2Mz5cclxuXHJcbi8vICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4vLyAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXYyPlxyXG4vLyAgICAgICAgICAgICA8L1N0eWxlZFNlY3Rpb24xPlxyXG4vLyAgICAgICAgIDwvPlxyXG4vLyAgICAgKTtcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IEJhc2U7XHJcblxyXG5pbXBvcnQgeyB1c2VPYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgaW5kZXhTdG9yZSBmcm9tICcuLi9tb2R1bGVzL2luZGV4U3RvcmUnO1xyXG5pbXBvcnQgeyBtYXhXaWR0aCB9IGZyb20gJy4uL3N0eWxlL3N0eWxlJztcclxuXHJcbmludGVyZmFjZSBJTWFpbkNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxuICAgIHpJbmRleDogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBNYWluQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gKDEwMHZ3IC0gMTAwJSkpO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHM6IElNYWluQ29udGFpbmVyKSA9PiBwcm9wcy5iYWNrZ3JvdW5kQ29sb3J9O1xyXG4gICAgei1pbmRleDogJHsocHJvcHM6IElNYWluQ29udGFpbmVyKSA9PiBwcm9wcy56SW5kZXh9O1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElTdWJDb250YWluZXIge1xyXG4gICAgaXNSZWFjaDogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgU3ViQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gKDEwMHZ3IC0gMTAwJSkpO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBwb3NpdGlvbjogJHsocHJvcHM6IElTdWJDb250YWluZXIpID0+IChwcm9wcy5pc1JlYWNoID8gJ3N0YXRpYycgOiAnZml4ZWQnKX07XHJcbiAgICB0b3A6ICR7KHByb3BzOiBJU3ViQ29udGFpbmVyKSA9PiAocHJvcHMuaXNSZWFjaCA/ICcnIDogMCl9O1xyXG5gO1xyXG5cclxuY29uc3QgQ29tcG9uZW50Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIG1heC13aWR0aDogJHttYXhXaWR0aH1weDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYDtcclxuXHJcbmNvbnN0IFRpdGxlU2VjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgICBwYWRkaW5nOiAzOHB4IDAgNjZweCAwO1xyXG4gICAgbWFyZ2luLXRvcDogMzJweDtcclxuYDtcclxuXHJcbmNvbnN0IENvbXBvbmVudFNlY3Rpb24gPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5gO1xyXG5cclxuY29uc3QgTWFpblRpdGxlID0gc3R5bGVkLnNwYW5gXHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiBjYWxjKDUycHggKyAwLjh2dyk7XHJcbiAgICB0ZXh0LXNoYWRvdzogMy41cHggMy41cHggI2ZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiAnQnVuZ2VlJywgY3Vyc2l2ZTtcclxuYDtcclxuXHJcbmludGVyZmFjZSBJQmFzZSB7XHJcbiAgICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG4gICAgY29udGFpbmVyTm86IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgQmFzZTogUmVhY3QuRkM8SUJhc2U+ID0gKHsgY2hpbGRyZW4sIGNvbnRhaW5lck5vIH0pOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICAvLyBtb2J4XHJcbiAgICBjb25zdCB7IGJhc2VTdG9yZSB9ID0gaW5kZXhTdG9yZSgpO1xyXG5cclxuICAgIC8vIHN0YXRlXHJcbiAgICBjb25zdCBbaXNSZWFjaCwgc2V0SXNSZWFjaF0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gICAgLy8gcmVmXHJcbiAgICBjb25zdCBtYWluQ29udGFpbmVyUmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG5cclxuICAgIC8vIHZhcmlhYmxlXHJcbiAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3JBcnJheSA9IFsnIzc1NzI3MCcsICcjQTVCQUE4JywgJyM2QTkxOTQnLCAnI2I3OWU2YScsICcjYzY4Mzc3J107XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25DaGFuZ2VTY3JvbGwpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvbkNoYW5nZVJlc2l6ZSk7XHJcblxyXG4gICAgICAgIG9uQ2hhbmdlU2Nyb2xsKCk7XHJcbiAgICAgICAgb25DaGFuZ2VSZXNpemUoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uQ2hhbmdlU2Nyb2xsKTtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uQ2hhbmdlUmVzaXplKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKG1haW5Db250YWluZXJSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICBtYWluQ29udGFpbmVyUmVmLmN1cnJlbnQuc2V0QXR0cmlidXRlKCdpZCcsIGJhc2VTdG9yZS50aXRsZUFycmF5W2NvbnRhaW5lck5vXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIC8vIG9uQ2hhbmdlXHJcbiAgICBjb25zdCBvbkNoYW5nZVNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgICBpZiAobWFpbkNvbnRhaW5lclJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGlmIChtYWluQ29udGFpbmVyUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wID4gMCkge1xyXG4gICAgICAgICAgICAgICAgc2V0SXNSZWFjaChmYWxzZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRJc1JlYWNoKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZVJlc2l6ZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAobWFpbkNvbnRhaW5lclJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGlmIChtYWluQ29udGFpbmVyUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wID4gMCkge1xyXG4gICAgICAgICAgICAgICAgc2V0SXNSZWFjaChmYWxzZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRJc1JlYWNoKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBvbkNsaWNrXHJcbiAgICBjb25zdCBvbkNsaWNrTWFpbkNvbnRhaW5lciA9ICgpID0+IHtcclxuICAgICAgICBpZiAobWFpbkNvbnRhaW5lclJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxCeSh7IHRvcDogbWFpbkNvbnRhaW5lclJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHVzZU9ic2VydmVyKCgpID0+IChcclxuICAgICAgICA8TWFpbkNvbnRhaW5lclxyXG4gICAgICAgICAgICByZWY9e21haW5Db250YWluZXJSZWZ9XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yQXJyYXlbY29udGFpbmVyTm9dfVxyXG4gICAgICAgICAgICB6SW5kZXg9ezEwMCAtIGNvbnRhaW5lck5vfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrTWFpbkNvbnRhaW5lcn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxTdWJDb250YWluZXIgaXNSZWFjaD17aXNSZWFjaH0+XHJcbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb250YWluZXJObyA9PT0gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGl0bGVTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1haW5UaXRsZT4jIHtiYXNlU3RvcmUudGl0bGVBcnJheVtjb250YWluZXJOb119PC9NYWluVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGl0bGVTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnRTZWN0aW9uPntjaGlsZHJlbn08L0NvbXBvbmVudFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L0NvbXBvbmVudENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9TdWJDb250YWluZXI+XHJcbiAgICAgICAgPC9NYWluQ29udGFpbmVyPlxyXG4gICAgKSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYXNlO1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgU3R5bGVkRGl2MSA9IHN0eWxlZC5kaXZgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwIDE4cHg7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTIwcHgpIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDU0cHg7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWREaXYyID0gc3R5bGVkLmRpdmBcclxuICAgIHBhZGRpbmc6IDE2cHggMCA0OHB4IDA7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODQwcHgpIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZERpdjMgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzhweDtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZERpdjQgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkU3BhbjEgPSBzdHlsZWQuc3BhbmBcclxuICAgIGNvbG9yOiAjZmZmO1xyXG5gO1xyXG5cclxuY29uc3QgQ2FyZWVyID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJhc2UgY29udGFpbmVyTm89ezR9PlxyXG4gICAgICAgICAgICA8U3R5bGVkRGl2MT5cclxuICAgICAgICAgICAgICAgIDxTdHlsZWREaXYyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXYzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiAnMjMycHgnIH19IHNyYz1cIi9pbWFnZS9zc2FmeS5QTkdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2Mz5cclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRGl2ND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4xPuyLuO2UvOyXkOyEnOuKlCDsnbTrn7Dqsbgg7ZaI7Iq164uI64ukLjwvU3R5bGVkU3BhbjE+IDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjE+7Iu47ZS87JeQ7ISc64qUIOydtOufsOqxuCDtlojsirXri4jri6QuIOyLuO2UvOyXkOyEnOuKlCDsnbTrn7Dqsbgg7ZaI7Iq164uI64ukPC9TdHlsZWRTcGFuMT4gPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMT7si7jtlLzsl5DshJzripQg7J2065+w6rG4IO2WiOyKteuLiOuLpC4g7Iu47ZS87JeQ7ISc64qUIOydtOufsOqxuCDtlojsirXri4jri6Q8L1N0eWxlZFNwYW4xPiA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4xPuyLuO2UvOyXkOyEnOuKlCDsnbTrn7Dqsbgg7ZaI7Iq164uI64ukLiDsi7jtlLzsl5DshJzripQg7J2065+w6rG4IO2WiOyKteuLiOuLpDwvU3R5bGVkU3BhbjE+IDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjE+7Iu47ZS87JeQ7ISc64qUIOydtOufsOqxuCDtlojsirXri4jri6QuIOyLuO2UvOyXkOyEnOuKlCDsnbTrn7Dqsbgg7ZaI7Iq164uI64ukPC9TdHlsZWRTcGFuMT4gPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMT7si7jtlLzsl5DshJzripQg7J2065+w6rG4IO2WiOyKteuLiOuLpC4g7Iu47ZS87JeQ7ISc64qUIOydtOufsOqxuCDtlojsirXri4jri6Q8L1N0eWxlZFNwYW4xPiA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4xPuyLuO2UvOyXkOyEnOuKlCDsnbTrn7Dqsbgg7ZaI7Iq164uI64ukLiDsi7jtlLzsl5DshJzripQg7J2065+w6rG4IO2WiOyKteuLiOuLpDwvU3R5bGVkU3BhbjE+IDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjE+7Iu47ZS87JeQ7ISc64qUIOydtOufsOqxuCDtlojsirXri4jri6QuIOyLuO2UvOyXkOyEnOuKlCDsnbTrn7Dqsbgg7ZaI7Iq164uI64ukPC9TdHlsZWRTcGFuMT4gPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMT7si7jtlLzsl5DshJzripQg7J2065+w6rG4IO2WiOyKteuLiOuLpC4g7Iu47ZS87JeQ7ISc64qUIOydtOufsOqxuCDtlojsirXri4jri6Q8L1N0eWxlZFNwYW4xPiA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4xPuyLuO2UvOyXkOyEnOuKlCDsnbTrn7Dqsbgg7ZaI7Iq164uI64ukLiDsi7jtlLzsl5DshJzripQg7J2065+w6rG4IO2WiOyKteuLiOuLpDwvU3R5bGVkU3BhbjE+IDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2ND5cclxuICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2Mj5cclxuXHJcbiAgICAgICAgICAgICAgICA8U3R5bGVkRGl2Mj5cclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRGl2Mz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogJzIzMnB4JyB9fSBzcmM9XCIvaW1hZ2UvYXV0b2V2ZXIuUE5HXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZERpdjM+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZERpdjQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMT7smKTthqDsl5DrsoTsl5DshJzripQg7J2065+w6rG4IO2WiOyKteuLiOuLpC48L1N0eWxlZFNwYW4xPiA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4xPuyYpO2GoOyXkOuyhOyXkOyEnOuKlCDsnbTrn7Dqsbgg7ZaI7Iq164uI64ukLuyYpO2GoOyXkOuyhOyXkOyEnOuKlCDsnbTrn7Dqsbgg7ZaI7Iq164uI64ukLjwvU3R5bGVkU3BhbjE+IDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2ND5cclxuICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2Mj5cclxuICAgICAgICAgICAgPC9TdHlsZWREaXYxPlxyXG4gICAgICAgIDwvQmFzZT5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJlZXI7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBpbmRleFN0b3JlIGZyb20gJy4uL21vZHVsZXMvaW5kZXhTdG9yZSc7XHJcbmltcG9ydCB7IHVzZU9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdCc7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZURpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XHJcbmA7XHJcblxyXG5jb25zdCBNYWluU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYDtcclxuXHJcbmNvbnN0IE1haW5UaXRsZSA9IHN0eWxlZC5zcGFuYFxyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDEuNGVtO1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElDb2xvclNwYW4ge1xyXG4gICAgY29sb3I6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgQ29sb3JTcGFuID0gc3R5bGVkLnNwYW5gXHJcbiAgICBjb2xvcjogJHsocHJvcHM6IElDb2xvclNwYW4pID0+IHByb3BzLmNvbG9yfTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZUN1cnNvciA9IHN0eWxlZC5zcGFuYFxyXG4gICAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgI2ZmZjtcclxuICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgIzAwMDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbmA7XHJcblxyXG5jb25zdCBJbml0ID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIC8vIG1vYnhcclxuICAgIGNvbnN0IHsgaW5pdFN0b3JlIH0gPSBpbmRleFN0b3JlKCk7XHJcblxyXG4gICAgLy8gcmVmXHJcbiAgICBjb25zdCBjb250YWluZXJSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KCk7XHJcblxyXG4gICAgY29uc3QgdHlwaW5nU3RyaW5nUmVmMSA9IFJlYWN0LnVzZVJlZjxIVE1MU3BhbkVsZW1lbnQ+KCk7XHJcbiAgICBjb25zdCB0eXBpbmdTdHJpbmdSZWYyID0gUmVhY3QudXNlUmVmPEhUTUxTcGFuRWxlbWVudD4oKTtcclxuICAgIGNvbnN0IHR5cGluZ1N0cmluZ1JlZjMgPSBSZWFjdC51c2VSZWY8SFRNTFNwYW5FbGVtZW50PigpO1xyXG4gICAgY29uc3QgdHlwaW5nU3RyaW5nUmVmNCA9IFJlYWN0LnVzZVJlZjxIVE1MU3BhbkVsZW1lbnQ+KCk7XHJcbiAgICBjb25zdCB0eXBpbmdTdHJpbmdSZWY1ID0gUmVhY3QudXNlUmVmPEhUTUxTcGFuRWxlbWVudD4oKTtcclxuICAgIGNvbnN0IHR5cGluZ1N0cmluZ1JlZjYgPSBSZWFjdC51c2VSZWY8SFRNTFNwYW5FbGVtZW50PigpO1xyXG4gICAgY29uc3QgdHlwaW5nU3RyaW5nUmVmNyA9IFJlYWN0LnVzZVJlZjxIVE1MU3BhbkVsZW1lbnQ+KCk7XHJcbiAgICBjb25zdCB0eXBpbmdTdHJpbmdSZWY4ID0gUmVhY3QudXNlUmVmPEhUTUxTcGFuRWxlbWVudD4oKTtcclxuXHJcbiAgICBjb25zdCB0eXBpbmdDdXJzb3IxID0gUmVhY3QudXNlUmVmPEhUTUxTcGFuRWxlbWVudD4oKTtcclxuICAgIGNvbnN0IHR5cGluZ0N1cnNvcjIgPSBSZWFjdC51c2VSZWY8SFRNTFNwYW5FbGVtZW50PigpO1xyXG4gICAgY29uc3QgdHlwaW5nQ3Vyc29yMyA9IFJlYWN0LnVzZVJlZjxIVE1MU3BhbkVsZW1lbnQ+KCk7XHJcbiAgICBjb25zdCB0eXBpbmdDdXJzb3I0ID0gUmVhY3QudXNlUmVmPEhUTUxTcGFuRWxlbWVudD4oKTtcclxuXHJcbiAgICAvLyB2YXJpYWJsZVxyXG4gICAgY29uc3QgdGltZSA9IDEwMDtcclxuXHJcbiAgICBjb25zdCBzdHJpbmdzID0gW1xyXG4gICAgICAgICdDOlxcXFxVc2Vyc1xcXFxVc2VyXFxcXERlc2t0b3BcXFxccG9ydGZvbGlvXFxcXHN1bmdjaGFuPicsXHJcbiAgICAgICAgJ25wbScsXHJcbiAgICAgICAgJyBydW4gc3RhcnQgJyxcclxuICAgICAgICAncmVhZHknLFxyXG4gICAgICAgICcgLSBzdGFydGVkIHBvcnRmb2xpbyBvZiBzdW5nY2hhbiwgdXJsOiBodHRwczovL2tzY3BvcnRmb2xpby5jb20nLFxyXG4gICAgICAgICd3YWl0JyxcclxuICAgICAgICAnIC0gY29tcGlsaW5nLi4uJyxcclxuICAgICAgICAnZXZlbnQnLFxyXG4gICAgICAgICcgLSBjb21waWxlZCBzdWNjZXNmdWxseScsXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IHN0cmluZ09ianMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdHJpbmc6IHN0cmluZ3NbMF0sXHJcbiAgICAgICAgICAgIHN0YXJ0OiAwLFxyXG4gICAgICAgICAgICBsZW5ndGg6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0cmluZzogc3RyaW5nc1sxXSxcclxuICAgICAgICAgICAgc3RhcnQ6IDAsXHJcbiAgICAgICAgICAgIGxlbmd0aDogdGltZSAqIHN0cmluZ3NbMV0ubGVuZ3RoLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdHJpbmc6IHN0cmluZ3NbMl0sXHJcbiAgICAgICAgICAgIHN0YXJ0OiB0aW1lICogc3RyaW5nc1sxXS5sZW5ndGgsXHJcbiAgICAgICAgICAgIGxlbmd0aDogdGltZSAqIHN0cmluZ3NbMl0ubGVuZ3RoLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdHJpbmc6IHN0cmluZ3NbM10sXHJcbiAgICAgICAgICAgIHN0YXJ0OiB0aW1lICogKHN0cmluZ3NbMV0ubGVuZ3RoICsgc3RyaW5nc1syXS5sZW5ndGggKyBzdHJpbmdzWzNdLmxlbmd0aCksXHJcbiAgICAgICAgICAgIGxlbmd0aDogMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RyaW5nOiBzdHJpbmdzWzRdLFxyXG4gICAgICAgICAgICBzdGFydDogdGltZSAqIChzdHJpbmdzWzFdLmxlbmd0aCArIHN0cmluZ3NbMl0ubGVuZ3RoICsgc3RyaW5nc1szXS5sZW5ndGgpLFxyXG4gICAgICAgICAgICBsZW5ndGg6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0cmluZzogc3RyaW5nc1s1XSxcclxuICAgICAgICAgICAgc3RhcnQ6IHRpbWUgKiAoc3RyaW5nc1sxXS5sZW5ndGggKyBzdHJpbmdzWzJdLmxlbmd0aCArIHN0cmluZ3NbM10ubGVuZ3RoICsgc3RyaW5nc1s1XS5sZW5ndGgpLFxyXG4gICAgICAgICAgICBsZW5ndGg6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0cmluZzogc3RyaW5nc1s2XSxcclxuICAgICAgICAgICAgc3RhcnQ6IHRpbWUgKiAoc3RyaW5nc1sxXS5sZW5ndGggKyBzdHJpbmdzWzJdLmxlbmd0aCArIHN0cmluZ3NbM10ubGVuZ3RoICsgc3RyaW5nc1s1XS5sZW5ndGgpLFxyXG4gICAgICAgICAgICBsZW5ndGg6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0cmluZzogc3RyaW5nc1s3XSxcclxuICAgICAgICAgICAgc3RhcnQ6XHJcbiAgICAgICAgICAgICAgICB0aW1lICpcclxuICAgICAgICAgICAgICAgIChzdHJpbmdzWzFdLmxlbmd0aCArIHN0cmluZ3NbMl0ubGVuZ3RoICsgc3RyaW5nc1szXS5sZW5ndGggKyBzdHJpbmdzWzVdLmxlbmd0aCArIHN0cmluZ3NbN10ubGVuZ3RoKSxcclxuICAgICAgICAgICAgbGVuZ3RoOiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdHJpbmc6IHN0cmluZ3NbOF0sXHJcbiAgICAgICAgICAgIHN0YXJ0OlxyXG4gICAgICAgICAgICAgICAgdGltZSAqXHJcbiAgICAgICAgICAgICAgICAoc3RyaW5nc1sxXS5sZW5ndGggKyBzdHJpbmdzWzJdLmxlbmd0aCArIHN0cmluZ3NbM10ubGVuZ3RoICsgc3RyaW5nc1s1XS5sZW5ndGggKyBzdHJpbmdzWzddLmxlbmd0aCksXHJcbiAgICAgICAgICAgIGxlbmd0aDogMCxcclxuICAgICAgICB9LFxyXG4gICAgXTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFR5cGluZ1N0cmluZ0FjdGlvbjEodHlwaW5nU3RyaW5nUmVmMSwgMSk7XHJcbiAgICAgICAgc2V0VHlwaW5nU3RyaW5nQWN0aW9uMSh0eXBpbmdTdHJpbmdSZWYyLCAyKTtcclxuICAgICAgICBzZXRUeXBpbmdTdHJpbmdBY3Rpb24yKHR5cGluZ1N0cmluZ1JlZjMsIDMpO1xyXG4gICAgICAgIHNldFR5cGluZ1N0cmluZ0FjdGlvbjIodHlwaW5nU3RyaW5nUmVmNCwgNCk7XHJcbiAgICAgICAgc2V0VHlwaW5nU3RyaW5nQWN0aW9uMih0eXBpbmdTdHJpbmdSZWY1LCA1KTtcclxuICAgICAgICBzZXRUeXBpbmdTdHJpbmdBY3Rpb24yKHR5cGluZ1N0cmluZ1JlZjYsIDYpO1xyXG4gICAgICAgIHNldFR5cGluZ1N0cmluZ0FjdGlvbjIodHlwaW5nU3RyaW5nUmVmNywgNyk7XHJcbiAgICAgICAgc2V0VHlwaW5nU3RyaW5nQWN0aW9uMih0eXBpbmdTdHJpbmdSZWY4LCA4KTtcclxuXHJcbiAgICAgICAgc2V0VHlwaW5nQ3Vyc29yQWN0aW9uKHR5cGluZ0N1cnNvcjEsIDAsIHN0cmluZ09ianNbMl0uc3RhcnQgKyBzdHJpbmdPYmpzWzJdLmxlbmd0aCk7XHJcbiAgICAgICAgc2V0VHlwaW5nQ3Vyc29yQWN0aW9uKHR5cGluZ0N1cnNvcjIsIHN0cmluZ09ianNbMl0uc3RhcnQgKyBzdHJpbmdPYmpzWzJdLmxlbmd0aCwgc3RyaW5nT2Jqc1szXS5zdGFydCk7XHJcbiAgICAgICAgc2V0VHlwaW5nQ3Vyc29yQWN0aW9uKHR5cGluZ0N1cnNvcjMsIHN0cmluZ09ianNbM10uc3RhcnQsIHN0cmluZ09ianNbNV0uc3RhcnQpO1xyXG4gICAgICAgIHNldFR5cGluZ0N1cnNvckFjdGlvbih0eXBpbmdDdXJzb3I0LCBzdHJpbmdPYmpzWzVdLnN0YXJ0LCBzdHJpbmdPYmpzWzddLnN0YXJ0KTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGluaXRTdG9yZS5zZXRJc0VuZCh0cnVlKTtcclxuICAgICAgICB9LCBzdHJpbmdPYmpzWzddLnN0YXJ0ICsgdGltZSAqIDUpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIC8vIO2DgOydtO2VkSDsspjrpqzqsIAg7J2066Oo7Ja07KeA64qUIOyVoeyFmCAo6riA7J6QIO2VmOuCmOyUqSlcclxuICAgIGNvbnN0IHNldFR5cGluZ1N0cmluZ0FjdGlvbjEgPSAoXHJcbiAgICAgICAgcmVmOiBSZWFjdC5NdXRhYmxlUmVmT2JqZWN0PEhUTUxTcGFuRWxlbWVudD4sIC8vIO2DgOydtO2VkSDsspjrpqzrkKAgcmVmXHJcbiAgICAgICAgaW5kZXg6IG51bWJlciwgLy8g7IKs7Jqp65CgIHN0cmluZyBvYmog7J24642x7IqkXHJcbiAgICApID0+IHtcclxuICAgICAgICBpZiAocmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hhckluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgIHJlZi5jdXJyZW50LmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHR5cGluZ0ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlZi5jdXJyZW50LmlubmVySFRNTCA9IHJlZi5jdXJyZW50LmlubmVySFRNTCArIHN0cmluZ09ianNbaW5kZXhdLnN0cmluZ1tjaGFySW5kZXgrK107XHJcbiAgICAgICAgICAgICAgICB9LCB0aW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHR5cGluZ0ludGVydmFsKTtcclxuICAgICAgICAgICAgICAgIH0sIHN0cmluZ09ianNbaW5kZXhdLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIH0sIHN0cmluZ09ianNbaW5kZXhdLnN0YXJ0KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIO2DgOydtO2VkSDsspjrpqzqsIAg7J2066Oo7Ja07KeA64qUIOyVoeyFmCAo66y47J6lIO2VmOuCmOyUqSlcclxuICAgIGNvbnN0IHNldFR5cGluZ1N0cmluZ0FjdGlvbjIgPSAoXHJcbiAgICAgICAgcmVmOiBSZWFjdC5NdXRhYmxlUmVmT2JqZWN0PEhUTUxTcGFuRWxlbWVudD4sIC8vIO2DgOydtO2VkSDsspjrpqzrkKAgcmVmXHJcbiAgICAgICAgaW5kZXg6IG51bWJlciwgLy8g7IKs7Jqp65CgIHN0cmluZyBvYmog7J24642x7IqkXHJcbiAgICApID0+IHtcclxuICAgICAgICBpZiAocmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWYuY3VycmVudC5pbm5lckhUTUwgPSBzdHJpbmdPYmpzW2luZGV4XS5zdHJpbmc7XHJcbiAgICAgICAgICAgIH0sIHN0cmluZ09ianNbaW5kZXhdLnN0YXJ0KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNldFR5cGluZ0N1cnNvckFjdGlvbiA9IChcclxuICAgICAgICByZWY6IFJlYWN0Lk11dGFibGVSZWZPYmplY3Q8SFRNTFNwYW5FbGVtZW50PiwgLy8g7YOA7J207ZWRIOyymOumrOuQoCByZWZcclxuICAgICAgICBzdGFydDogbnVtYmVyLCAvLyDslaHshZgg7Iuc7J6RIOyLnOqwhFxyXG4gICAgICAgIGxlbmd0aDogbnVtYmVyLCAvLyDslaHshZgg6ri47J20XHJcbiAgICApID0+IHtcclxuICAgICAgICBpZiAocmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWYuY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XHJcbiAgICAgICAgICAgIH0sIHN0YXJ0KTtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgfSwgbGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB1c2VPYnNlcnZlcigoKSA9PiAoXHJcbiAgICAgICAgPENvbnRhaW5lciByZWY9e2NvbnRhaW5lclJlZn0+XHJcbiAgICAgICAgICAgIDxNYWluU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxUaXRsZURpdj5cclxuICAgICAgICAgICAgICAgICAgICA8TWFpblRpdGxlPntzdHJpbmdPYmpzWzBdLnN0cmluZ308L01haW5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8TWFpblRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sb3JTcGFuIGNvbG9yPVwiI2ZmZjEwMFwiIHJlZj17dHlwaW5nU3RyaW5nUmVmMX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gcmVmPXt0eXBpbmdTdHJpbmdSZWYyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWFpblRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZUN1cnNvciByZWY9e3R5cGluZ0N1cnNvcjF9IC8+XHJcbiAgICAgICAgICAgICAgICA8L1RpdGxlRGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxUaXRsZURpdj5cclxuICAgICAgICAgICAgICAgICAgICA8TWFpblRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sb3JTcGFuIGNvbG9yPVwiIzIyOTMwMFwiIHJlZj17dHlwaW5nU3RyaW5nUmVmM30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gcmVmPXt0eXBpbmdTdHJpbmdSZWY0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWFpblRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZUN1cnNvciByZWY9e3R5cGluZ0N1cnNvcjJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L1RpdGxlRGl2PlxyXG4gICAgICAgICAgICAgICAgPFRpdGxlRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNYWluVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2xvclNwYW4gY29sb3I9XCIjMDA2YTdjXCIgcmVmPXt0eXBpbmdTdHJpbmdSZWY1fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiByZWY9e3R5cGluZ1N0cmluZ1JlZjZ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NYWluVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlQ3Vyc29yIHJlZj17dHlwaW5nQ3Vyc29yM30gLz5cclxuICAgICAgICAgICAgICAgIDwvVGl0bGVEaXY+XHJcbiAgICAgICAgICAgICAgICA8VGl0bGVEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1haW5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbG9yU3BhbiBjb2xvcj1cIiM2ODAwOGFcIiByZWY9e3R5cGluZ1N0cmluZ1JlZjd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHJlZj17dHlwaW5nU3RyaW5nUmVmOH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L01haW5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8VGl0bGVDdXJzb3IgcmVmPXt0eXBpbmdDdXJzb3I0fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9UaXRsZURpdj5cclxuICAgICAgICAgICAgPC9NYWluU2VjdGlvbj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5pdDtcclxuIiwiLy8gaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xyXG4vLyBpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuLy8gaW1wb3J0IHsgbWF4V2lkdGggfSBmcm9tICcuLi9zdHlsZS9zdHlsZSc7XHJcblxyXG4vLyBjb25zdCBTdHllbGREaXYyID0gc3R5bGVkLmRpdmBcclxuLy8gICAgIG1hcmdpbjogMCAzMnB4O1xyXG4vLyAgICAgcGFkZGluZy1ib3R0b206IDE3cHg7XHJcbi8vIGA7XHJcblxyXG4vLyBpbnRlcmZhY2UgSVN0eWxlZERpdjMge1xyXG4vLyAgICAgZGlyZWN0aW9uPzogc3RyaW5nOyAvLyB0cnVl66m0IOyasOy4oSwg6re4IOyZuCDsoozsuKFcclxuLy8gICAgIGlubmVyV2lkdGg6IG51bWJlcjtcclxuLy8gfVxyXG5cclxuLy8gY29uc3QgU3R5ZWxkRGl2MyA9IHN0eWxlZC5kaXZgXHJcbi8vICAgICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcclxuLy8gICAgICR7KHByb3BzOiBJU3R5bGVkRGl2MykgPT4ge1xyXG4vLyAgICAgICAgIGlmIChwcm9wcy5pbm5lcldpZHRoIDwgbWF4V2lkdGgpIHtcclxuLy8gICAgICAgICAgICAgcmV0dXJuIGBcclxuLy8gICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgICAgICAgICAgYDtcclxuLy8gICAgICAgICB9IGVsc2UgaWYgKHByb3BzLmRpcmVjdGlvbiA9PT0gJ3RydWUnKSB7XHJcbi8vICAgICAgICAgICAgIHJldHVybiBgXHJcbi8vICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuLy8gICAgICAgICAgICAgYDtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9fVxyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkRGl2NCA9IHN0eWxlZC5kaXZgXHJcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4vLyAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbi8vICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4vLyAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbi8vICAgICBwYWRkaW5nOiAxMnB4O1xyXG4vLyAgICAgbWFyZ2luOiA0M3B4IDI3cHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkRGl2NSA9IHN0eWxlZC5kaXZgXHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICB0b3A6IC00MXB4O1xyXG4vLyAgICAgbGVmdDogLTQxcHg7XHJcbi8vICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjVkZWcpO1xyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkRGl2NiA9IHN0eWxlZC5kaXZgXHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICB0b3A6IC00MXB4O1xyXG4vLyAgICAgcmlnaHQ6IC00MXB4O1xyXG4vLyAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjVkZWcpO1xyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkU3BhbjEgPSBzdHlsZWQuc3BhbmBcclxuLy8gICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbi8vIGA7XHJcblxyXG4vLyBjb25zdCBTdHlsZWRTcGFuMiA9IHN0eWxlZC5zcGFuYFxyXG4vLyAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4vLyAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjMjY1NWE7XHJcbi8vICAgICBjb2xvcjogI2MyNjU1YTtcclxuLy8gYDtcclxuXHJcbi8vIGludGVyZmFjZSBJSW50cm8ge1xyXG4vLyAgICAgaW5uZXJXaWR0aDogbnVtYmVyO1xyXG4vLyAgICAgdGl0bGU6IHN0cmluZztcclxuLy8gfVxyXG5cclxuLy8gY29uc3QgSW50cm86IFJlYWN0LkZDPElJbnRybz4gPSAoeyBpbm5lcldpZHRoLCB0aXRsZSB9KTogSlNYLkVsZW1lbnQgPT4ge1xyXG4vLyAgICAgY29uc3QgYm94QXJyYXkxID0gW1xyXG4vLyAgICAgICAgIHsgdGl0bGU6ICfsnbTrpoQnLCBkZXNjcmlwdGlvbjogJ+q5gOyEseywrCcgfSxcclxuLy8gICAgICAgICB7IHRpdGxlOiAn7IOd64WE7JuU7J28JywgZGVzY3JpcHRpb246ICc5NC4xMi4wOScgfSxcclxuLy8gICAgIF07XHJcbi8vICAgICBjb25zdCBib3hBcnJheTIgPSBbXHJcbi8vICAgICAgICAgeyB0aXRsZTogJ+ydtOuplOydvCcsIGRlc2NyaXB0aW9uOiAndGpkY2tzZGwwMEBuYXZlci5jb20nIH0sXHJcbi8vICAgICAgICAgeyB0aXRsZTogJ+yXsOudveyymCcsIGRlc2NyaXB0aW9uOiAnMDEwLTMzNjEtMzYzMycgfSxcclxuLy8gICAgIF07XHJcbi8vICAgICBjb25zdCBib3hBcnJheTMgPSBbXHJcbi8vICAgICAgICAgeyB0aXRsZTogJ+2Vmeq1kCcsIGRlc2NyaXB0aW9uOiAn7ZWc7JaR64yAIEVSSUNBJyB9LFxyXG4vLyAgICAgICAgIHsgdGl0bGU6ICfso7zsoITqs7UnLCBkZXNjcmlwdGlvbjogJ+ydkeyaqeyImO2VmScgfSxcclxuLy8gICAgICAgICB7IHRpdGxlOiAn67aA7KCE6rO1JywgZGVzY3JpcHRpb246ICfsu7Ttk6jthLDqs7XtlZknIH0sXHJcbi8vICAgICBdO1xyXG4vLyAgICAgY29uc3QgYm94QXJyYXk0ID0gW1xyXG4vLyAgICAgICAgIHsgdGl0bGU6ICfqsr3roKUnLCBkZXNjcmlwdGlvbjogJzHrhYQgM+qwnOyblCcgfSxcclxuLy8gICAgICAgICB7IHRpdGxlOiAn6riw7Iig67aE7JW8JywgZGVzY3JpcHRpb246ICdGRS9CRSDsm7kg6rCc67CcJyB9LFxyXG4vLyAgICAgXTtcclxuXHJcbi8vICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgIDxCYXNlIHRpdGxlPXt0aXRsZX0gYmFja2dyb3VuZENvbG9yPXsnI0E1QkFBOCd9PlxyXG4vLyAgICAgICAgICAgICA8U3R5ZWxkRGl2Mj5cclxuLy8gICAgICAgICAgICAgICAgIDxTdHllbGREaXYzIGlubmVyV2lkdGg9e2lubmVyV2lkdGh9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHtib3hBcnJheTEubWFwKChib3gpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXY0IGtleT17Ym94LmRlc2NyaXB0aW9ufT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjE+e2JveC5kZXNjcmlwdGlvbn08L1N0eWxlZFNwYW4xPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXY1PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjI+e2JveC50aXRsZX08L1N0eWxlZFNwYW4yPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2NT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2ND5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICB9KX1cclxuLy8gICAgICAgICAgICAgICAgIDwvU3R5ZWxkRGl2Mz5cclxuXHJcbi8vICAgICAgICAgICAgICAgICA8U3R5ZWxkRGl2MyBpbm5lcldpZHRoPXtpbm5lcldpZHRofSBkaXJlY3Rpb249eyd0cnVlJ30+XHJcbi8vICAgICAgICAgICAgICAgICAgICAge2JveEFycmF5Mi5tYXAoKGJveCkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZERpdjQga2V5PXtib3guZGVzY3JpcHRpb259PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMT57Ym94LmRlc2NyaXB0aW9ufTwvU3R5bGVkU3BhbjE+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZERpdjY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMj57Ym94LnRpdGxlfTwvU3R5bGVkU3BhbjI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXY2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXY0PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4vLyAgICAgICAgICAgICAgICAgPC9TdHllbGREaXYzPlxyXG5cclxuLy8gICAgICAgICAgICAgICAgIDxTdHllbGREaXYzIGlubmVyV2lkdGg9e2lubmVyV2lkdGh9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHtib3hBcnJheTMubWFwKChib3gpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXY0IGtleT17Ym94LmRlc2NyaXB0aW9ufT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjE+e2JveC5kZXNjcmlwdGlvbn08L1N0eWxlZFNwYW4xPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXY1PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjI+e2JveC50aXRsZX08L1N0eWxlZFNwYW4yPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2NT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2ND5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICB9KX1cclxuLy8gICAgICAgICAgICAgICAgIDwvU3R5ZWxkRGl2Mz5cclxuXHJcbi8vICAgICAgICAgICAgICAgICA8U3R5ZWxkRGl2MyBpbm5lcldpZHRoPXtpbm5lcldpZHRofSBkaXJlY3Rpb249eyd0cnVlJ30+XHJcbi8vICAgICAgICAgICAgICAgICAgICAge2JveEFycmF5NC5tYXAoKGJveCkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZERpdjQga2V5PXtib3guZGVzY3JpcHRpb259PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMT57Ym94LmRlc2NyaXB0aW9ufTwvU3R5bGVkU3BhbjE+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZERpdjY+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMj57Ym94LnRpdGxlfTwvU3R5bGVkU3BhbjI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXY2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXY0PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4vLyAgICAgICAgICAgICAgICAgPC9TdHllbGREaXYzPlxyXG4vLyAgICAgICAgICAgICA8L1N0eWVsZERpdjI+XHJcbi8vICAgICAgICAgPC9CYXNlPlxyXG4vLyAgICAgKTtcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IEludHJvO1xyXG5cclxuaW1wb3J0IHsgdXNlT2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IGluZGV4U3RvcmUgZnJvbSAnLi4vbW9kdWxlcy9pbmRleFN0b3JlJztcclxuaW1wb3J0IHsgbWF4V2lkdGggfSBmcm9tICcuLi9zdHlsZS9zdHlsZSc7XHJcbmltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XHJcblxyXG5jb25zdCBCb3hTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICBtYXJnaW46IDAgMzJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxN3B4O1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElCb3hDb250YWluZXIge1xyXG4gICAgZGlyZWN0aW9uPzogc3RyaW5nOyAvLyB0cnVl66m0IOyasOy4oSwg6re4IOyZuCDsoozsuKFcclxuICAgIGlubmVyV2lkdGg6IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgQm94Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xyXG4gICAgJHsocHJvcHM6IElCb3hDb250YWluZXIpID0+IHtcclxuICAgICAgICBpZiAocHJvcHMuaW5uZXJXaWR0aCA8IG1heFdpZHRoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wcy5kaXJlY3Rpb24gPT09ICd0cnVlJykge1xyXG4gICAgICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgfVxyXG4gICAgfX1cclxuYDtcclxuXHJcbmNvbnN0IEJveE1haW5EaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMThweDtcclxuICAgIG1hcmdpbjogNDNweCAyN3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDJweCA0cHggNHB4ICNjOGM4YzggaW5zZXQsIC0ycHggLTRweCA0cHggI2M4YzhjOCBpbnNldDtcclxuYDtcclxuXHJcbmNvbnN0IEJveExlZnREaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiBjYWxjKC0zOHB4IC0gMC44dncpO1xyXG4gICAgbGVmdDogY2FsYygtMzhweCAtIDAuOHZ3KTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0yNWRlZyk7XHJcbmA7XHJcblxyXG5jb25zdCBCb3hSaWdodERpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IGNhbGMoLTM4cHggLSAwLjh2dyk7XHJcbiAgICByaWdodDogY2FsYygtMzhweCAtIDAuOHZ3KTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDI1ZGVnKTtcclxuYDtcclxuXHJcbmNvbnN0IEJveERlc2NyaXB0aW9uID0gc3R5bGVkLnNwYW5gXHJcbiAgICBmb250LXNpemU6IGNhbGMoMjhweCArIDAuNHZ3KTtcclxuYDtcclxuXHJcbmNvbnN0IEJveFRpdGxlID0gc3R5bGVkLnNwYW5gXHJcbiAgICBmb250LXNpemU6IGNhbGMoMjNweCArIDAuNHZ3KTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjMjY1NWE7XHJcbiAgICBjb2xvcjogI2MyNjU1YTtcclxuYDtcclxuXHJcbmNvbnN0IEludHJvID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIC8vIG1vYnhcclxuICAgIGNvbnN0IHsgYmFzZVN0b3JlIH0gPSBpbmRleFN0b3JlKCk7XHJcblxyXG4gICAgLy8gdmFyaWFibGVcclxuICAgIGNvbnN0IGJveEFycmF5MSA9IFtcclxuICAgICAgICB7IHRpdGxlOiAn7J2066aEJywgZGVzY3JpcHRpb246ICfquYDshLHssKwnIH0sXHJcbiAgICAgICAgeyB0aXRsZTogJ+yDneuFhOyblOydvCcsIGRlc2NyaXB0aW9uOiAnOTQuMTIuMDknIH0sXHJcbiAgICBdO1xyXG4gICAgY29uc3QgYm94QXJyYXkyID0gW1xyXG4gICAgICAgIHsgdGl0bGU6ICfsnbTrqZTsnbwnLCBkZXNjcmlwdGlvbjogJ3RqZGNrc2RsMDBAbmF2ZXIuY29tJyB9LFxyXG4gICAgICAgIHsgdGl0bGU6ICfsl7Drnb3sspgnLCBkZXNjcmlwdGlvbjogJzAxMC0zMzYxLTM2MzMnIH0sXHJcbiAgICBdO1xyXG4gICAgY29uc3QgYm94QXJyYXkzID0gW1xyXG4gICAgICAgIHsgdGl0bGU6ICftlZnqtZAnLCBkZXNjcmlwdGlvbjogJ+2VnOyWkeuMgCBFUklDQScgfSxcclxuICAgICAgICB7IHRpdGxlOiAn7KO87KCE6rO1JywgZGVzY3JpcHRpb246ICfsnZHsmqnsiJjtlZknIH0sXHJcbiAgICAgICAgeyB0aXRsZTogJ+u2gOyghOqztScsIGRlc2NyaXB0aW9uOiAn7Lu07ZOo7YSw6rO17ZWZJyB9LFxyXG4gICAgXTtcclxuICAgIGNvbnN0IGJveEFycmF5NCA9IFtcclxuICAgICAgICB7IHRpdGxlOiAn6rK966ClJywgZGVzY3JpcHRpb246ICcx64WEIDPqsJzsm5QnIH0sXHJcbiAgICAgICAgeyB0aXRsZTogJ+q4sOyIoOu2hOyVvCcsIGRlc2NyaXB0aW9uOiAnRkUvQkUg7Ju5IOqwnOuwnCcgfSxcclxuICAgIF07XHJcblxyXG4gICAgcmV0dXJuIHVzZU9ic2VydmVyKCgpID0+IChcclxuICAgICAgICA8QmFzZSBjb250YWluZXJObz17MX0+XHJcbiAgICAgICAgICAgIDxCb3hTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPEJveENvbnRhaW5lciBpbm5lcldpZHRoPXtiYXNlU3RvcmUuaW5uZXJXaWR0aH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2JveEFycmF5MS5tYXAoKGJveCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveE1haW5EaXYga2V5PXtib3guZGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hEZXNjcmlwdGlvbj57Ym94LmRlc2NyaXB0aW9ufTwvQm94RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveExlZnREaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hUaXRsZT57Ym94LnRpdGxlfTwvQm94VGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3hMZWZ0RGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3hNYWluRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9Cb3hDb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgPEJveENvbnRhaW5lciBpbm5lcldpZHRoPXtiYXNlU3RvcmUuaW5uZXJXaWR0aH0gZGlyZWN0aW9uPXsndHJ1ZSd9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtib3hBcnJheTIubWFwKChib3gpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hNYWluRGl2IGtleT17Ym94LmRlc2NyaXB0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94RGVzY3JpcHRpb24+e2JveC5kZXNjcmlwdGlvbn08L0JveERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hSaWdodERpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveFRpdGxlPntib3gudGl0bGV9PC9Cb3hUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveFJpZ2h0RGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3hNYWluRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9Cb3hDb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgPEJveENvbnRhaW5lciBpbm5lcldpZHRoPXtiYXNlU3RvcmUuaW5uZXJXaWR0aH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2JveEFycmF5My5tYXAoKGJveCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveE1haW5EaXYga2V5PXtib3guZGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hEZXNjcmlwdGlvbj57Ym94LmRlc2NyaXB0aW9ufTwvQm94RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveExlZnREaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hUaXRsZT57Ym94LnRpdGxlfTwvQm94VGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3hMZWZ0RGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3hNYWluRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9Cb3hDb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgPEJveENvbnRhaW5lciBpbm5lcldpZHRoPXtiYXNlU3RvcmUuaW5uZXJXaWR0aH0gZGlyZWN0aW9uPXsndHJ1ZSd9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtib3hBcnJheTQubWFwKChib3gpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hNYWluRGl2IGtleT17Ym94LmRlc2NyaXB0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94RGVzY3JpcHRpb24+e2JveC5kZXNjcmlwdGlvbn08L0JveERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hSaWdodERpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveFRpdGxlPntib3gudGl0bGV9PC9Cb3hUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveFJpZ2h0RGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3hNYWluRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9Cb3hDb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvQm94U2VjdGlvbj5cclxuICAgICAgICA8L0Jhc2U+XHJcbiAgICApKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEludHJvO1xyXG4iLCIvLyBpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG4vLyBpbXBvcnQgeyBtYXhXaWR0aCB9IGZyb20gJy4uL3N0eWxlL3N0eWxlJztcclxuXHJcbi8vIGNvbnN0IFN0eWxlZFNlY3Rpb24xID0gc3R5bGVkLnNlY3Rpb25gXHJcbi8vICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9pbWFnZS9tYWluSW1hZ2UuanBnJyk7XHJcbi8vICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4vLyAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuLy8gYDtcclxuXHJcbi8vIGNvbnN0IFN0eWxlZERpdjEgPSBzdHlsZWQuZGl2YFxyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICBwYWRkaW5nOiA4MnB4IDA7XHJcbi8vIGA7XHJcblxyXG4vLyBpbnRlcmZhY2UgSVN0eWVsZERpdjIge1xyXG4vLyAgICAgaW5uZXJXaWR0aDogbnVtYmVyO1xyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBTdHlsZWREaXYyID0gc3R5bGVkLmRpdmBcclxuLy8gICAgIGRpc3BsYXk6ICR7KHByb3BzOiBJU3R5ZWxkRGl2MikgPT4gKHByb3BzLmlubmVyV2lkdGggPj0gbWF4V2lkdGggPyAnYmxvY2snIDogJ25vbmUnKX07XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICBtYXJnaW46IDY4cHggMDtcclxuLy8gYDtcclxuXHJcbi8vIGNvbnN0IGRpdjNLZXlGcmFtZTEgPSBrZXlmcmFtZXNgXHJcbi8vICAgICA1MCUge1xyXG4vLyAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XHJcbi8vICAgICB9XHJcbi8vIGA7XHJcblxyXG4vLyBjb25zdCBTdHlsZWREaXYzID0gc3R5bGVkLmRpdmBcclxuLy8gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbi8vICAgICAmOmhvdmVyIHtcclxuLy8gICAgICAgICBhbmltYXRpb246IDEuOHMgJHtkaXYzS2V5RnJhbWUxfSBpbmZpbml0ZTtcclxuLy8gICAgIH1cclxuLy8gYDtcclxuXHJcbi8vIGNvbnN0IFN0eWxlZERpdjQgPSBzdHlsZWQuZGl2YFxyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICB3aWR0aDogMTUycHg7XHJcbi8vICAgICBoZWlnaHQ6IDE1MnB4O1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NhZjBiZTtcclxuLy8gICAgIG1hcmdpbjogMTZweCAzMnB4O1xyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkRGl2NSA9IHN0eWxlZC5kaXZgXHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vIGA7XHJcblxyXG4vLyBjb25zdCBTdHlsZWREaXY2ID0gc3R5bGVkLmRpdmBcclxuLy8gICAgIG1heC13aWR0aDogJHttYXhXaWR0aH1weDtcclxuLy8gICAgIG1hcmdpbjogMCBhdXRvO1xyXG4vLyAgICAgcGFkZGluZzogMCAxNXB4O1xyXG5cclxuLy8gICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7bWF4V2lkdGggKyA1MH1weCkge1xyXG4vLyAgICAgICAgIG1hcmdpbi1ib3R0b206IDg0cHg7XHJcbi8vICAgICB9XHJcbi8vIGA7XHJcblxyXG4vLyBjb25zdCBTdHlsZWRUaXRsZSA9IHN0eWxlZC5zcGFuYFxyXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vICAgICBmb250LXNpemU6IDMuNmVtO1xyXG4vLyAgICAgY29sb3I6ICNmZmY7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4vLyAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIHtcclxuLy8gICAgICAgICBmb250LXNpemU6IDQuOGVtO1xyXG4vLyAgICAgfVxyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkU3ViVGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuLy8gICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbi8vICAgICBjb2xvcjogI2ZmZjtcclxuLy8gYDtcclxuXHJcbi8vIGNvbnN0IFN0eWxlZEgzXzEgPSBzdHlsZWQuaDNgXHJcbi8vICAgICBmb250LXNpemU6IDEuNGVtO1xyXG4vLyAgICAgY29sb3I6ICM2NThjNTk7XHJcbi8vIGA7XHJcblxyXG4vLyBjb25zdCBTdHlsZWRTcGFuMSA9IHN0eWxlZC5zcGFuYFxyXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vICAgICBjb2xvcjogIzNhNTIzMztcclxuLy8gYDtcclxuXHJcbi8vIGludGVyZmFjZSBJTWFpbiB7XHJcbi8vICAgICBpbm5lcldpZHRoOiBudW1iZXI7XHJcbi8vICAgICB0aXRsZUFycmF5OiBzdHJpbmdbXTtcclxuLy8gfVxyXG5cclxuLy8gY29uc3QgTWFpbjogUmVhY3QuRkM8SU1haW4+ID0gKHsgaW5uZXJXaWR0aCwgdGl0bGVBcnJheSB9KTogSlNYLkVsZW1lbnQgPT4ge1xyXG4vLyAgICAgY29uc3Qgb25DbGlja0RpdjMgPSAodGl0bGU6IHN0cmluZykgPT4ge1xyXG4vLyAgICAgICAgIGNvbnN0IHRpdGxlU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRpdGxlKTtcclxuXHJcbi8vICAgICAgICAgaWYgKHRpdGxlU2VjdGlvbikge1xyXG4vLyAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsQnkoeyB0b3A6IHRpdGxlU2VjdGlvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9O1xyXG5cclxuLy8gICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgPFN0eWxlZFNlY3Rpb24xPlxyXG4vLyAgICAgICAgICAgICA8U3R5bGVkRGl2Nj5cclxuLy8gICAgICAgICAgICAgICAgIDxTdHlsZWREaXY1PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXYyIGlubmVyV2lkdGg9e2lubmVyV2lkdGh9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGVBcnJheS5tYXAoKHRpdGxlKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXYzIGtleT17dGl0bGV9IG9uQ2xpY2s9eygpID0+IG9uQ2xpY2tEaXYzKHRpdGxlKX0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXY0PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZEgzXzE+e3RpdGxlfTwvU3R5bGVkSDNfMT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMT5HbyDihpI8L1N0eWxlZFNwYW4xPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZERpdjQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXYzPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXYyPlxyXG5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRGl2MT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFRpdGxlPuq5gOyEseywrOydmCBQb3J0Zm9saW88L1N0eWxlZFRpdGxlPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3ViVGl0bGU+U2luY2UgMjAyMTwvU3R5bGVkU3ViVGl0bGU+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXYxPlxyXG4vLyAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXY1PlxyXG4vLyAgICAgICAgICAgICA8L1N0eWxlZERpdjY+XHJcbi8vICAgICAgICAgPC9TdHlsZWRTZWN0aW9uMT5cclxuLy8gICAgICk7XHJcbi8vIH07XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBNYWluO1xyXG5cclxuaW1wb3J0IHsgdXNlT2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IGluZGV4U3RvcmUgZnJvbSAnLi4vbW9kdWxlcy9pbmRleFN0b3JlJztcclxuaW1wb3J0IHsgbWF4V2lkdGggfSBmcm9tICcuLi9zdHlsZS9zdHlsZSc7XHJcbmltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XHJcblxyXG5jb25zdCBNZW51RGl2S2V5RnJhbWUgPSBrZXlmcmFtZXNgXHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMDBweCkgcm90YXRlKDApO1xyXG4gICAgfVxyXG5cclxuICAgIDkwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpIHJvdGF0ZSg3NTBkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSByb3RhdGUoNzIwZGVnKTtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IE1lbnVEaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIGFuaW1hdGlvbi1uYW1lOiAke01lbnVEaXZLZXlGcmFtZX07XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xyXG5gO1xyXG5cclxuY29uc3QgTWVudVN1YkRpdkhvdmVyS2V5RnJhbWUgPSBrZXlmcmFtZXNgXHJcbiAgICA1MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBNZW51U3ViRGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDE1MnB4O1xyXG4gICAgaGVpZ2h0OiAxNTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYWYwYmU7XHJcbiAgICBtYXJnaW46IDE2cHggMzJweDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBhbmltYXRpb246IDEuOHMgJHtNZW51U3ViRGl2SG92ZXJLZXlGcmFtZX0gaW5maW5pdGU7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSU1lbnVTZWN0aW9uIHtcclxuICAgIGlubmVyV2lkdGg6IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgTWVudVNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6ICR7KHByb3BzOiBJTWVudVNlY3Rpb24pID0+IChwcm9wcy5pbm5lcldpZHRoID49IG1heFdpZHRoID8gJ2Jsb2NrJyA6ICdub25lJyl9O1xyXG5gO1xyXG5cclxuY29uc3QgVGl0bGVTZWN0aW9uS2V5RnJhbWUgPSBrZXlmcmFtZXNgXHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQwcHgpO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmcm9tOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZVNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgIHBhZGRpbmc6IDAgMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBhbmltYXRpb24tbmFtZTogJHtUaXRsZVNlY3Rpb25LZXlGcmFtZX07XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xyXG5gO1xyXG5cclxuY29uc3QgTWFpblRpdGxlID0gc3R5bGVkLnNwYW5gXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogY2FsYyg1NHB4ICsgMS41dncpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuYDtcclxuXHJcbmNvbnN0IFN1YlRpdGxlID0gc3R5bGVkLnNwYW5gXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogY2FsYygyNHB4ICsgMC40dncpO1xyXG5gO1xyXG5cclxuY29uc3QgTWFpbiA9ICgpOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICAvLyBtb2J4XHJcbiAgICBjb25zdCB7IGJhc2VTdG9yZSB9ID0gaW5kZXhTdG9yZSgpO1xyXG5cclxuICAgIC8vIG9uQ2xpY2tcclxuICAgIGNvbnN0IG9uQ2xpY2tNZW51RGl2ID0gKHRpdGxlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCB0aXRsZUNvbnRpYW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRpdGxlKTtcclxuXHJcbiAgICAgICAgaWYgKHRpdGxlQ29udGlhbmVyKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxCeSh7IHRvcDogdGl0bGVDb250aWFuZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdXNlT2JzZXJ2ZXIoKCkgPT4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxCYXNlIGNvbnRhaW5lck5vPXswfT5cclxuICAgICAgICAgICAgICAgIDxNZW51U2VjdGlvbiBpbm5lcldpZHRoPXtiYXNlU3RvcmUuaW5uZXJXaWR0aH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2Jhc2VTdG9yZS50aXRsZUFycmF5Lm1hcCgobWVudSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51RGl2IGtleT17bWVudX0gb25DbGljaz17KCkgPT4gb25DbGlja01lbnVEaXYobWVudSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudVN1YkRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57bWVudX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+R28g4oaSPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVTdWJEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51RGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9NZW51U2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8VGl0bGVTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNYWluVGl0bGU+6rmA7ISx7LCs7J2YIFBvcnRmb2xpbzwvTWFpblRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdWJUaXRsZT5TaW5jZSAyMDIxPC9TdWJUaXRsZT5cclxuICAgICAgICAgICAgICAgIDwvVGl0bGVTZWN0aW9uPlxyXG4gICAgICAgICAgICA8L0Jhc2U+XHJcbiAgICAgICAgPC8+XHJcbiAgICApKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW47XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBNYWluU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwIDIycHg7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTcwcHgpIHtcclxuICAgICAgICBoZWlnaHQ6IDEwODBweDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODQwcHgpIHtcclxuICAgICAgICBoZWlnaHQ6IDcyMHB4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IEJveENvdGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiAyNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDU0cHg7XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZURpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBwYWRkaW5nOiA4cHggMDtcclxuYDtcclxuXHJcbmNvbnN0IEltYWdlRGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggNHB4IDRweCAjYzhjOGM4IGluc2V0LCAtMnB4IC00cHggNHB4ICNjOGM4YzggaW5zZXQ7XHJcbmA7XHJcblxyXG5jb25zdCBCb3hUaXRsZSA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEuNmVtO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbmA7XHJcblxyXG5jb25zdCBCb3hJbWFnZSA9IHN0eWxlZC5pbWdgYDtcclxuXHJcbmNvbnN0IFNraWxscyA9ICgpOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICBjb25zdCBza2lsbHNBcnJheSA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnRkUnLFxyXG4gICAgICAgICAgICBzcmM6ICcvaW1hZ2UvZmUuUE5HJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdEZXZvcHMnLFxyXG4gICAgICAgICAgICBzcmM6ICcvaW1hZ2UvZGV2b3BzLlBORycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnRGV2ZWxvcG1lbnQnLFxyXG4gICAgICAgICAgICBzcmM6ICcvaW1hZ2UvZGV2ZWxvcG1lbnQuUE5HJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdCRScsXHJcbiAgICAgICAgICAgIHNyYzogJy9pbWFnZS9iZS5QTkcnLFxyXG4gICAgICAgIH0sXHJcbiAgICBdO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJhc2UgY29udGFpbmVyTm89ezN9PlxyXG4gICAgICAgICAgICA8TWFpblNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICB7c2tpbGxzQXJyYXkubWFwKChza2lsbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hDb3RhaW5lciBrZXk9e3NraWxsLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaXRsZURpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94VGl0bGU+e3NraWxsLnRpdGxlfTwvQm94VGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RpdGxlRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hJbWFnZSBzcmM9e3NraWxsLnNyY30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW1hZ2VEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94Q290YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L01haW5TZWN0aW9uPlxyXG4gICAgICAgIDwvQmFzZT5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTa2lsbHM7XHJcbiIsIi8vIGltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcclxuLy8gaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG4vLyBjb25zdCBTdHlsZWREaXYxID0gc3R5bGVkLmRpdmBcclxuLy8gICAgIG1hcmdpbjogMCAyNHB4O1xyXG4vLyAgICAgcGFkZGluZzogMjJweCAwIDUzcHggMDtcclxuLy8gICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkRGl2MiA9IHN0eWxlZC5kaXZgXHJcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vICAgICBwYWRkaW5nOiAzMnB4IDI0cHg7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkU3BhbjEgPSBzdHlsZWQuc3BhbmBcclxuLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgICAgY29sb3I6ICNmZmY7XHJcbi8vIGA7XHJcblxyXG4vLyBjb25zdCBTdHlsZWRTcGFuMiA9IHN0eWxlZC5zcGFuYFxyXG4vLyAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgICBjb2xvcjogI2ZmZjtcclxuLy8gYDtcclxuXHJcbi8vIGludGVyZmFjZSBJV2h5SXQge1xyXG4vLyAgICAgdGl0bGU6IHN0cmluZztcclxuLy8gfVxyXG5cclxuLy8gY29uc3QgV2h5SXQ6IFJlYWN0LkZDPElXaHlJdD4gPSAoeyB0aXRsZSB9KTogSlNYLkVsZW1lbnQgPT4ge1xyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICA8QmFzZSB0aXRsZT17dGl0bGV9IGJhY2tncm91bmRDb2xvcj1cIiM2QTkxOTRcIj5cclxuLy8gICAgICAgICAgICAgPFN0eWxlZERpdjE+XHJcbi8vICAgICAgICAgICAgICAgICA8U3R5bGVkRGl2Mj5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjE+SVTrpbwg7JmcIOyLnOyeke2VmOqyjCDrkJjsl4jsnYTquYw/PC9TdHlsZWRTcGFuMT5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjI+7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuIOydtOufsCDsnbTsnKAg65WM66y47J2064ukLiDsnbTrn7Ag7J207JygIOuVjOusuOydtOuLpC48L1N0eWxlZFNwYW4yPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMj7snbTrn7Ag7J207JygIOuVjOusuOydtOuLpC48L1N0eWxlZFNwYW4yPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMj7snbTrn7Ag7J207JygIOuVjOusuOydtOuLpC48L1N0eWxlZFNwYW4yPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMj7snbTrn7Ag7J207JygIOuVjOusuOydtOuLpC48L1N0eWxlZFNwYW4yPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMj7snbTrn7Ag7J207JygIOuVjOusuOydtOuLpC48L1N0eWxlZFNwYW4yPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMj7snbTrn7Ag7J207JygIOuVjOusuOydtOuLpC48L1N0eWxlZFNwYW4yPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMj7snbTrn7Ag7J207JygIOuVjOusuOydtOuLpC4g7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuIOydtOufsCDsnbTsnKAg65WM66y47J2064ukLjwvU3R5bGVkU3BhbjI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4yPuydtOufsCDsnbTsnKAg65WM66y47J2064ukLiDsnbTrn7Ag7J207JygIOuVjOusuOydtOuLpC4g7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuPC9TdHlsZWRTcGFuMj5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjI+7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuIOydtOufsCDsnbTsnKAg65WM66y47J2064ukLiDsnbTrn7Ag7J207JygIOuVjOusuOydtOuLpC48L1N0eWxlZFNwYW4yPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMj7snbTrn7Ag7J207JygIOuVjOusuOydtOuLpC4g7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuIOydtOufsCDsnbTsnKAg65WM66y47J2064ukLjwvU3R5bGVkU3BhbjI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4yPuydtOufsCDsnbTsnKAg65WM66y47J2064ukLiDsnbTrn7Ag7J207JygIOuVjOusuOydtOuLpC4g7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuPC9TdHlsZWRTcGFuMj5cclxuLy8gICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2Mj5cclxuLy8gICAgICAgICAgICAgPC9TdHlsZWREaXYxPlxyXG4vLyAgICAgICAgIDwvQmFzZT5cclxuLy8gICAgICk7XHJcbi8vIH07XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBXaHlJdDtcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcclxuaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBDb21tb25TZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MTBweCkge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBRdWVzdGlvblNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgIHBhZGRpbmc6IDAgMjBweCAwIDIwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbmA7XHJcblxyXG5jb25zdCBBbnN3ZXJTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICBwYWRkaW5nOiAwIDIwcHggMCAyMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5gO1xyXG5cclxuY29uc3QgcXVlc3Rpb25OdW1iZXJLZXlmcmFtZSA9IGtleWZyYW1lc2BcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIDUwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBRdWVzdGlvbkRpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG1hcmdpbjogMjRweCAwO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJveC1zaGFkb3c6IDJweCA0cHggNHB4ICNjOGM4YzggaW5zZXQsIC0ycHggLTRweCA0cHggI2M4YzhjOCBpbnNldDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICAmID4gZGl2ID4gc3BhbjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiAke3F1ZXN0aW9uTnVtYmVyS2V5ZnJhbWV9O1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xyXG4gICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBRdWVzdGlvblN1YkRpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IEFuc3dlckRpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG1hcmdpbjogMjRweCAwO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgbWluLXdpZHRoOiBjYWxjKDIyNHB4ICsgMTV2dyk7XHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDIyNHB4ICsgMTV2aCk7XHJcbiAgICBib3gtc2hhZG93OiAycHggNHB4IDRweCAjYzhjOGM4IGluc2V0LCAtMnB4IC00cHggNHB4ICNjOGM4YzggaW5zZXQ7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSVF1ZXN0aW9uVGl0bGUge1xyXG4gICAgY29sb3I6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgUXVlc3Rpb25UaXRsZSA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogY2FsYygxOHB4ICsgMC4ydncpO1xyXG4gICAgY29sb3I6ICR7KHByb3BzOiBJUXVlc3Rpb25UaXRsZSkgPT4gcHJvcHMuY29sb3J9O1xyXG5gO1xyXG5cclxuY29uc3QgQW5zd2VyVGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSVF1ZXN0aW9uTnVtYmVyIHtcclxuICAgIGlzQ2xpY2s6IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IFF1ZXN0aW9uTnVtYmVyID0gc3R5bGVkLnNwYW5gXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiBjYWxjKDI0cHggKyAwLjZ2dyk7XHJcbiAgICBjb2xvcjogI2YxNWU1ZTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcblxyXG4gICAgYW5pbWF0aW9uLW5hbWU6ICR7KHByb3BzOiBJUXVlc3Rpb25OdW1iZXIpID0+IChwcm9wcy5pc0NsaWNrID8gcXVlc3Rpb25OdW1iZXJLZXlmcmFtZSA6ICcnKX07XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbmA7XHJcblxyXG5jb25zdCBXaHlJdCA9ICgpOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICAvLyBzdGF0ZVxyXG4gICAgY29uc3QgW3F1ZXN0aW9uSW5kZXgsIHNldFF1ZXN0aW9uSW5kZXhdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPigtMSk7XHJcbiAgICBjb25zdCBbdHlwaW5nVGltZXIsIHNldFR5cGluZ1RpbWVyXSA9IFJlYWN0LnVzZVN0YXRlPE5vZGVKUy5UaW1lcj4oKTtcclxuXHJcbiAgICAvLyByZWZcclxuICAgIGNvbnN0IGFuc3dlclRpdGxlUmVmID0gUmVhY3QudXNlUmVmPEhUTUxTcGFuRWxlbWVudD4oKTtcclxuICAgIGNvbnN0IGFuc3dlckRpdlJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuXHJcbiAgICAvLyB2YXJpYWJsZVxyXG4gICAgY29uc3QgcW5hQXJyYXkgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBxdWVzdGlvbjogJ0lU7JeQIOq0gOyLrOqwgOynhCDsi5zquLAnLFxyXG4gICAgICAgICAgICBhbnN3ZXI6ICdJVOyXkCDqtIDsi6zqsIDsp4Qg7Iuc6riwJyxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uOiAnSVTsl5Ag6rSA7Ius7J2EIOqwgOyngOqyjCDrkJwg6rOE6riwJyxcclxuICAgICAgICAgICAgYW5zd2VyOiBgSVTsl5Ag6rSA7Ius7J2EIOqwgOyngOqyjCDrkJwg6rOE6riwXFxuXFxu44WO44WO44WO44WOYCxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uOiAn6rCc67Cc7J6Q66W8IOyEoO2Dne2VnCDsnbTsnKAnLFxyXG4gICAgICAgICAgICBhbnN3ZXI6ICfqsJzrsJzsnpDrpbwg7ISg7YOd7ZWcIOydtOycoCcsXHJcbiAgICAgICAgfSxcclxuICAgIF07XHJcblxyXG4gICAgY29uc3QgcXVlc3Rpb25Db2xvciA9IFsnIzhGQzE1QicsICcjRjE5MDIzJywgJyM2M0MxQTknXTtcclxuXHJcbiAgICAvLyBvbkNsaWNrXHJcbiAgICBjb25zdCBvbkNsaWNrUXVlc3Rpb24gPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHNldFF1ZXN0aW9uSW5kZXgoaW5kZXgpOyAvLyDsp4jrrLggaW5kZXhcclxuICAgICAgICBjb25zdCB0aW1lID0gNTA7IC8vIOq4gOyekCDrgpjsmKTripQg7IaN64+EXHJcblxyXG4gICAgICAgIGlmIChhbnN3ZXJUaXRsZVJlZi5jdXJyZW50ICYmIGFuc3dlckRpdlJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGxldCBjaGFySW5kZXggPSAwO1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHR5cGluZ1RpbWVyKTsgLy8g6riw7KG0IGludGVydmFsIOyiheujjFxyXG4gICAgICAgICAgICBhbnN3ZXJUaXRsZVJlZi5jdXJyZW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICBhbnN3ZXJUaXRsZVJlZi5jdXJyZW50LnN0eWxlLmNvbG9yID0gcXVlc3Rpb25Db2xvcltpbmRleF07XHJcbiAgICAgICAgICAgIGFuc3dlckRpdlJlZi5jdXJyZW50LnN0eWxlLmJveFNoYWRvdyA9IGAycHggNHB4IDRweCAke3F1ZXN0aW9uQ29sb3JbaW5kZXhdfSBpbnNldCwgLTJweCAtNHB4IDRweCAke3F1ZXN0aW9uQ29sb3JbaW5kZXhdfSBpbnNldGA7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0eXBpbmdJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIO2DgOydtO2VkSDsspjrpqxcclxuICAgICAgICAgICAgICAgIGlmIChxbmFBcnJheVtpbmRleF0uYW5zd2VyW2NoYXJJbmRleF0gPT09ICdcXG4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g6rCc7ZaJIOusuOyekOydvCDqsr3smrBcclxuICAgICAgICAgICAgICAgICAgICBhbnN3ZXJUaXRsZVJlZi5jdXJyZW50LmlubmVySFRNTCArPSAnPGJyIC8+JztcclxuICAgICAgICAgICAgICAgICAgICBjaGFySW5kZXgrKztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g6rCc7ZaJIOusuOyekOqwgCDslYTri5Ag6rK97JqwXHJcbiAgICAgICAgICAgICAgICAgICAgYW5zd2VyVGl0bGVSZWYuY3VycmVudC5pbm5lckhUTUwgKz0gcW5hQXJyYXlbaW5kZXhdLmFuc3dlcltjaGFySW5kZXgrK107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIHRpbWUpO1xyXG5cclxuICAgICAgICAgICAgc2V0VHlwaW5nVGltZXIodHlwaW5nSW50ZXJ2YWwpOyAvLyDtmITsnqwgaW50ZXJ2YWwg65Ox66GdXHJcblxyXG4gICAgICAgICAgICAvLyDrqqjrk6Ag66y47J6Q6rCAIOyymOumrOuQmOuKlCDsi5zqsITsl5Ag64+E64us7ZWY66m0IGludGVydmFsIOyiheujjFxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodHlwaW5nSW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICB9LCBxbmFBcnJheVtpbmRleF0uYW5zd2VyLmxlbmd0aCAqIHRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QmFzZSBjb250YWluZXJObz17Mn0+XHJcbiAgICAgICAgICAgIDxDb21tb25TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPFF1ZXN0aW9uU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICB7cW5hQXJyYXkubWFwKChxbmEsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UXVlc3Rpb25EaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3FuYS5hbnN3ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGlja1F1ZXN0aW9uKGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxRdWVzdGlvblN1YkRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFF1ZXN0aW9uTnVtYmVyIGlzQ2xpY2s9e3F1ZXN0aW9uSW5kZXggPT09IGluZGV4fT5Re2luZGV4ICsgMX0uIDwvUXVlc3Rpb25OdW1iZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxRdWVzdGlvblRpdGxlIGNvbG9yPXtxdWVzdGlvbkNvbG9yW2luZGV4XX0+e3FuYS5xdWVzdGlvbn08L1F1ZXN0aW9uVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9RdWVzdGlvblN1YkRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUXVlc3Rpb25EaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L1F1ZXN0aW9uU2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8QW5zd2VyU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8QW5zd2VyRGl2IHJlZj17YW5zd2VyRGl2UmVmfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFuc3dlclRpdGxlIHJlZj17YW5zd2VyVGl0bGVSZWZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3F1ZXN0aW9uSW5kZXggPj0gMCA/ICcnIDogJ+q2geq4iO2VmOyLoCDsp4jrrLjsnYQg7ISg7YOd7ZW07KO87IS47JqULid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQW5zd2VyVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9BbnN3ZXJEaXY+XHJcbiAgICAgICAgICAgICAgICA8L0Fuc3dlclNlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvQ29tbW9uU2VjdGlvbj5cclxuICAgICAgICA8L0Jhc2U+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2h5SXQ7XHJcbiIsImltcG9ydCB7IG9ic2VydmFibGUgfSBmcm9tICdtb2J4JztcclxuXHJcbmNvbnN0IEJhc2VTdG9yZSA9IG9ic2VydmFibGUoe1xyXG4gICAgLy8gc3RhdGVcclxuICAgIHRpdGxlQXJyYXk6IFsnTWFpbicsICdJbnRybycsICdXaHkgSXQnLCAnU2tpbGxzJywgJ0NhcmVlcicsICdQcm9qZWN0cycsICdNb3JlJ10sXHJcbiAgICBpbm5lcldpZHRoOiAwLFxyXG4gICAgaW5uZXJIZWlnaHQ6IDAsXHJcblxyXG4gICAgc2V0SW5uZXJXaWR0aChpbm5lcldpZHRoKSB7XHJcbiAgICAgICAgdGhpcy5pbm5lcldpZHRoID0gaW5uZXJXaWR0aDtcclxuICAgIH0sXHJcblxyXG4gICAgc2V0SW5uZXJIZWlnaHQoaW5uZXJIZWlnaHQpIHtcclxuICAgICAgICB0aGlzLmlubmVySGVpZ2h0ID0gaW5uZXJIZWlnaHQ7XHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2VTdG9yZTtcclxuIiwiaW1wb3J0IGluaXRTdG9yZSBmcm9tICcuL2luaXRTdG9yZSc7XHJcbmltcG9ydCBiYXNlU3RvcmUgZnJvbSAnLi9iYXNlU3RvcmUnO1xyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1tb2R1bGUtYm91bmRhcnktdHlwZXNcclxuY29uc3QgaW5kZXhTdG9yZSA9ICgpID0+ICh7XHJcbiAgICBpbml0U3RvcmUsXHJcbiAgICBiYXNlU3RvcmUsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXhTdG9yZTtcclxuIiwiaW1wb3J0IHsgb2JzZXJ2YWJsZSB9IGZyb20gJ21vYngnO1xyXG5cclxuY29uc3QgSW5pdFN0b3JlID0gb2JzZXJ2YWJsZSh7XHJcbiAgICAvLyBzdGF0ZVxyXG4gICAgaXNFbmQ6IGZhbHNlLFxyXG5cclxuICAgIHNldElzRW5kKGlzRW5kOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5pc0VuZCA9IGlzRW5kO1xyXG4gICAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbml0U3RvcmU7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBNYWluIGZyb20gJy4uL2NvbXBvbmVudC9tYWluJztcclxuaW1wb3J0IEludHJvIGZyb20gJy4uL2NvbXBvbmVudC9pbnRybyc7XHJcbmltcG9ydCBXaHlJdCBmcm9tICcuLi9jb21wb25lbnQvd2h5SXQnO1xyXG5pbXBvcnQgU2tpbGxzIGZyb20gJy4uL2NvbXBvbmVudC9za2lsbHMnO1xyXG5pbXBvcnQgQ2FyZWVyIGZyb20gJy4uL2NvbXBvbmVudC9jYXJlZXInO1xyXG5pbXBvcnQgSW5pdCBmcm9tICcuLi9jb21wb25lbnQvaW5pdCc7XHJcbmltcG9ydCBpbmRleFN0b3JlIGZyb20gJy4uL21vZHVsZXMvaW5kZXhTdG9yZSc7XHJcbmltcG9ydCB7IHVzZU9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdCc7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICBjb25zdCB7IGluaXRTdG9yZSwgYmFzZVN0b3JlIH0gPSBpbmRleFN0b3JlKCk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25DaGFuZ2VSZXNpemUpO1xyXG4gICAgICAgIG9uQ2hhbmdlUmVzaXplKCk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvbkNoYW5nZVJlc2l6ZSk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICAvLyBvbkNoYW5nZVxyXG4gICAgY29uc3Qgb25DaGFuZ2VSZXNpemUgPSAoKSA9PiB7XHJcbiAgICAgICAgYmFzZVN0b3JlLnNldElubmVyV2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xyXG4gICAgICAgIGJhc2VTdG9yZS5zZXRJbm5lckhlaWdodCh3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdXNlT2JzZXJ2ZXIoKCkgPT4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtpbml0U3RvcmUuaXNFbmQgPyAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNYWluIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEludHJvIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFdoeUl0IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNraWxscyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJlZXIgLz5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPEluaXQgLz5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaDEsXHJcbiAgICAgICAgICAgICAgICAgICAgaDIsXHJcbiAgICAgICAgICAgICAgICAgICAgaDMsXHJcbiAgICAgICAgICAgICAgICAgICAgaDQsXHJcbiAgICAgICAgICAgICAgICAgICAgaDUsXHJcbiAgICAgICAgICAgICAgICAgICAgaDYsXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbixcclxuICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBcHBsZVNER290aGljTmVvJywgJ05vdG8gU2FucyBLUicsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CdW5nZWUmZGlzcGxheT1zd2FwJyk7XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIiwiZXhwb3J0IGNvbnN0IG1heFdpZHRoID0gOTYwO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb2J4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb2J4LXJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==