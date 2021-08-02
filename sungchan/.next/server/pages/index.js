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
})(["font-weight:600;font-size:calc(48px + 0.9vw);text-shadow:3.5px 3.5px #fff;font-family:'Bungee',cursive;"]);
const myKeyframes = styled_components__WEBPACK_IMPORTED_MODULE_3__.keyframes`
    50% {
        transform: rotate(0deg);
        left: 0;
    }

    100% {
        top: -100vh;
        left: 0;
        transform: rotate(0deg);
    }
`;
const TestDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "base__TestDiv",
  componentId: "sc-1ugehyd-6"
})(["background-color:#fff;width:calc(100vw - (100vw - 100%));height:100vh;position:absolute;top:calc(100vh - 250px);left:calc(100vw - (100vw - 100%) - 450px);transform:rotate(-60deg);z-index:200;animation-name:", ";animation-duration:10s;animation-iteration-count:infinite;"], myKeyframes);

const Base = ({
  children,
  containerNo
}) => {
  // mobx
  const {
    baseStore
  } = (0,_modules_indexStore__WEBPACK_IMPORTED_MODULE_4__.default)(); // state

  const [isReach, setIsReach] = react__WEBPACK_IMPORTED_MODULE_2__.useState(false); // ref

  const mainContainerRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef();
  const subContainerRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(); // variable

  const backgroundColorArray = ['#757270', '#A5BAA8', '#6A9194', '#b79e6a', '#c68377', '#fff'];
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
      baseStore.setComponentHeight(containerNo, subContainerRef.current.clientHeight);
    }
  }, []); // onChange

  const onChangeScroll = () => {
    if (mainContainerRef.current) {
      if (mainContainerRef.current.getBoundingClientRect().top >= 1) {
        setIsReach(false);
      } else {
        setIsReach(true);
      }
    }
  };

  const onChangeResize = () => {
    if (mainContainerRef.current) {
      if (mainContainerRef.current.getBoundingClientRect().top >= 1) {
        setIsReach(false);
      } else {
        setIsReach(true);
      }
    }
  }; // onClick


  const onClickMainContainer = () => {
    window.scrollBy({
      top: baseStore.getAccumulateComponentHeight(containerNo) - baseStore.scrollY,
      behavior: 'smooth'
    });
  };

  return (0,mobx_react__WEBPACK_IMPORTED_MODULE_1__.useObserver)(() => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainContainer, {
    ref: mainContainerRef,
    backgroundColor: backgroundColorArray[containerNo],
    zIndex: 100 - containerNo,
    onClick: onClickMainContainer,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubContainer, {
      ref: subContainerRef,
      isReach: isReach,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ComponentContainer, {
        children: [containerNo === 0 ? '' : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleSection, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainTitle, {
            children: ["# ", baseStore.titleArray[containerNo]]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 387,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 386,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ComponentSection, {
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 391,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 382,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 375,
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
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\component\\career.tsx";




const MainSection = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "career__MainSection",
  componentId: "sc-10mcn0j-0"
})(["text-align:center;"]);
const MainDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "career__MainDiv",
  componentId: "sc-10mcn0j-1"
})(["padding-bottom:54px;display:flex;justify-content:center;flex-wrap:wrap;@media screen and (min-width:620px){flex-wrap:nowrap;}"]);
const ImageDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "career__ImageDiv",
  componentId: "sc-10mcn0j-2"
})(["margin:0 25px 38px 25px;"]);
const TextDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "career__TextDiv",
  componentId: "sc-10mcn0j-3"
})(["margin:0 25px;background-color:#fff;border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-left-radius:10px;border-bottom-right-radius:10px;box-shadow:2px 4px 4px #c8c8c8 inset,-2px -4px 4px #c8c8c8 inset;padding:12px 18px;"]);
const TextTitleDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "career__TextTitleDiv",
  componentId: "sc-10mcn0j-4"
})(["margin-bottom:18px;"]);
const TextDescriptionDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "career__TextDescriptionDiv",
  componentId: "sc-10mcn0j-5"
})(["text-align:left;"]);
const PictureContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "career__PictureContainer",
  componentId: "sc-10mcn0j-6"
})(["position:fixed;width:100vw;height:100vh;background-color:rgba(0,0,0,0.5);display:none;justify-content:center;align-items:center;z-index:101;top:0;cursor:pointer;"]);
const TextTitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "career__TextTitle",
  componentId: "sc-10mcn0j-7"
})(["font-weight:600;font-size:calc(17px + 0.5vw);color:", ";"], props => props.color);
const TextDescription = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "career__TextDescription",
  componentId: "sc-10mcn0j-8"
})(["display:block;margin:23px 0;font-weight:600;font-size:calc(15px + 0.2vw);", ""], props => {
  if (props.type === 'camera') {
    return `
                color: rgba(0, 0, 0, 0.7);
                &:before {
                    display: inline-block;
                    width: 26px;
                    content: '\f030';
                    font-family: FontAwesome;
                    color: #C68377;
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
                    color: #C68377;
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
                    color: #C68377;
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
                    color: #C68377;
                }
            `;
  }
});
const CareerImage = styled_components__WEBPACK_IMPORTED_MODULE_3___default().img.withConfig({
  displayName: "career__CareerImage",
  componentId: "sc-10mcn0j-9"
})(["width:calc(200px + 5.8vw);"]);
const PictureImage = styled_components__WEBPACK_IMPORTED_MODULE_3___default().img.withConfig({
  displayName: "career__PictureImage",
  componentId: "sc-10mcn0j-10"
})(["margin:20px;max-width:calc(100% - 28px);max-height:calc(100% - 28px);"]);

const Career = () => {
  // state
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

  return (0,mobx_react__WEBPACK_IMPORTED_MODULE_4__.useObserver)(() => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_base__WEBPACK_IMPORTED_MODULE_2__.default, {
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
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDiv, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextTitleDiv, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextTitle, {
                color: '#33bdda',
                children: "\uC0BC\uC131 \uCCAD\uB144 \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uC544\uCE74\uB370\uBBF8"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 169,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescriptionDiv, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
                type: "calendar",
                children: "19.07 ~ 20.03"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 173,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
                type: "camera",
                onClick: e => onClickCamera(e, '/image/topScore.jpg'),
                children: "1\uD559\uAE30 \uBC18 \uB300\uD45C \uC131\uC801 \uC6B0\uC218\uC0C1 \uCDE8\uB4DD"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
                type: "camera",
                onClick: e => onClickCamera(e, '/image/abroadEducation.jpg'),
                children: "\uD574\uC678 \uC5F0\uC218 \uB300\uC0C1\uC790\uB85C \uBC1C\uD0C1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 177,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
                children: "\uC6F9 \uAE30\uBC18 \uAE30\uCD08 \uBC0F \uC2EC\uD654 \uAD50\uC721 \uC218\uAC15"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 183,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
                type: "camera",
                onClick: e => onClickCamera(e, '/image/swexpertScore.PNG'),
                children: "\uC0BC\uC131 SW \uC5ED\uB7C9 \uD14C\uC2A4\uD2B8 A+ \uCDE8\uB4DD"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 184,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainDiv, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageDiv, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CareerImage, {
              src: "/image/autoever.PNG"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDiv, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextTitleDiv, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextTitle, {
                color: '#1e2768',
                children: "\uD604\uB300 \uC624\uD1A0\uC5D0\uBC84"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 200,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 199,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescriptionDiv, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
                type: "calendar",
                children: "20.03 ~ \uD604\uC7AC"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 203,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
                type: "position",
                children: "\uC790\uB3D9\uCC28 \uD488\uC9C8 \uAC1C\uC120 \uC2DC\uC2A4\uD15C FE/BE \uAC1C\uBC1C \uBC0F \uC6B4\uC601"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 204,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
                children: "\uD300 \uB0B4 Git \uB3C4\uC785 \uBC0F \uC0AC\uB0B4 \uC9C1\uC6D0\uB4E4\uC5D0\uAC8C Git\uC0AC\uC6A9 \uBC29\uBC95 \uAD50\uC721 \uB2F4\uB2F9"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 207,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
                children: "\uD300 \uB0B4 \uC2E0\uAE30\uC220 \uC801\uC6A9 \uB2F4\uB2F9"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 210,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
                children: "\uC11C\uBE44\uC2A4 \uD6A8\uC728\uD654\uB97C \uC704\uD55C \uC2DC\uC2A4\uD15C \uAC1C\uD3B8 \uD504\uB85C\uC81D\uD2B8 \uC9C4\uD589"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 211,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
                children: "\uC11C\uBE44\uC2A4 \uC18D\uB3C4 \uAC1C\uC120\uC744 \uC704\uD574 React\uB97C \uC774\uC6A9\uD55C \uCD5C\uC801\uD654 \uC791\uC5C5 \uC9C4\uD589"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 212,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextDescription, {
                children: "\uC678\uBD80 \uC2DC\uC2A4\uD15C\uACFC \uC5F0\uACC4\uB97C \uC704\uD55C \uACF5\uC6A9 Rest API \uAC1C\uBC1C"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 215,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PictureContainer, {
      ref: pictureContainerRef,
      onClick: onClickPictureContainer,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PictureImage, {
        src: pictureImage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 13
    }, undefined)]
  }, void 0, true));
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

  const onClickMenuDiv = (e, index) => {
    e.stopPropagation();
    window.scrollBy({
      top: baseStore.getAccumulateComponentHeight(index) - baseStore.scrollY,
      behavior: 'smooth'
    });
  };

  return (0,mobx_react__WEBPACK_IMPORTED_MODULE_1__.useObserver)(() => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_base__WEBPACK_IMPORTED_MODULE_6__.default, {
      containerNo: 0,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuSection, {
        innerWidth: baseStore.innerWidth,
        children: baseStore.titleArray.map((menu, index) => {
          if (index !== 0) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuDiv, {
              onClick: e => onClickMenuDiv(e, index),
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

var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\component\\projects.tsx";



const Projects = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_base__WEBPACK_IMPORTED_MODULE_2__.default, {
    containerNo: 5,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "Projects page"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined);
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
  componentHeights: [0, 0, 0, 0, 0, 0, 0],
  innerWidth: 0,
  scrollY: 0,

  setComponentHeight(index, height) {
    this.componentHeights[index] = height;
  },

  setInnerWidth(innerWidth) {
    this.innerWidth = innerWidth;
  },

  setScrollY(scrollY) {
    this.scrollY = scrollY;
  },

  getAccumulateComponentHeight(index) {
    let count = 0;

    for (let i = 0; i < index; i++) {
      count += this.componentHeights[i];
    }

    return count;
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
  isEnd: true,

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
/* harmony import */ var _component_projects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../component/projects */ "./component/projects.tsx");


var _jsxFileName = "C:\\Users\\User\\Desktop\\study\\portfolio\\sungchan\\pages\\index.tsx";












const Index = () => {
  const {
    initStore,
    baseStore
  } = (0,_modules_indexStore__WEBPACK_IMPORTED_MODULE_9__.default)();
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(() => {
    window.addEventListener('resize', onChangeResize);
    window.addEventListener('scroll', onChangeScroll);
    onChangeResize();
    onChangeScroll();
    return () => {
      window.removeEventListener('resize', onChangeResize);
      window.removeEventListener('scroll', onChangeScroll);
    };
  }, []); // onChange

  const onChangeResize = () => {
    baseStore.setInnerWidth(window.innerWidth);
  };

  const onChangeScroll = () => {
    baseStore.setScrollY(window.scrollY);
  };

  return (0,mobx_react__WEBPACK_IMPORTED_MODULE_10__.useObserver)(() => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [initStore.isEnd ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_main__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_intro__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_whyIt__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_skills__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_career__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_projects__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 21
      }, undefined)]
    }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_init__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "3889360865",
      children: "@import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');body{margin:0;padding:0;}h1,h2,h3,h4,h5,h6,span,p{font-family:'AppleSDGothicNeo','Noto Sans KR',sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcc3R1ZHlcXHBvcnRmb2xpb1xcc3VuZ2NoYW5cXHBhZ2VzXFxpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbURpQixBQUdrQyxBQVlrRCxBQUdZLFNBZDdELFVBQ2Qsc0NBV0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxzdHVkeVxccG9ydGZvbGlvXFxzdW5nY2hhblxccGFnZXNcXGluZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1haW4gZnJvbSAnLi4vY29tcG9uZW50L21haW4nO1xyXG5pbXBvcnQgSW50cm8gZnJvbSAnLi4vY29tcG9uZW50L2ludHJvJztcclxuaW1wb3J0IFdoeUl0IGZyb20gJy4uL2NvbXBvbmVudC93aHlJdCc7XHJcbmltcG9ydCBTa2lsbHMgZnJvbSAnLi4vY29tcG9uZW50L3NraWxscyc7XHJcbmltcG9ydCBDYXJlZXIgZnJvbSAnLi4vY29tcG9uZW50L2NhcmVlcic7XHJcbmltcG9ydCBJbml0IGZyb20gJy4uL2NvbXBvbmVudC9pbml0JztcclxuaW1wb3J0IGluZGV4U3RvcmUgZnJvbSAnLi4vbW9kdWxlcy9pbmRleFN0b3JlJztcclxuaW1wb3J0IHsgdXNlT2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0JztcclxuaW1wb3J0IFByb2plY3RzIGZyb20gJy4uL2NvbXBvbmVudC9wcm9qZWN0cyc7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICBjb25zdCB7IGluaXRTdG9yZSwgYmFzZVN0b3JlIH0gPSBpbmRleFN0b3JlKCk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25DaGFuZ2VSZXNpemUpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvbkNoYW5nZVNjcm9sbCk7XHJcbiAgICAgICAgb25DaGFuZ2VSZXNpemUoKTtcclxuICAgICAgICBvbkNoYW5nZVNjcm9sbCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25DaGFuZ2VSZXNpemUpO1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25DaGFuZ2VTY3JvbGwpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLy8gb25DaGFuZ2VcclxuICAgIGNvbnN0IG9uQ2hhbmdlUmVzaXplID0gKCkgPT4ge1xyXG4gICAgICAgIGJhc2VTdG9yZS5zZXRJbm5lcldpZHRoKHdpbmRvdy5pbm5lcldpZHRoKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgYmFzZVN0b3JlLnNldFNjcm9sbFkod2luZG93LnNjcm9sbFkpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdXNlT2JzZXJ2ZXIoKCkgPT4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtpbml0U3RvcmUuaXNFbmQgPyAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNYWluIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEludHJvIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFdoeUl0IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNraWxscyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJlZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8UHJvamVjdHMgLz5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPEluaXQgLz5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaDEsXHJcbiAgICAgICAgICAgICAgICAgICAgaDIsXHJcbiAgICAgICAgICAgICAgICAgICAgaDMsXHJcbiAgICAgICAgICAgICAgICAgICAgaDQsXHJcbiAgICAgICAgICAgICAgICAgICAgaDUsXHJcbiAgICAgICAgICAgICAgICAgICAgaDYsXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbixcclxuICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBcHBsZVNER290aGljTmVvJywgJ05vdG8gU2FucyBLUicsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CdW5nZWUmZGlzcGxheT1zd2FwJyk7XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcclxuICAgICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\User\\\\Desktop\\\\study\\\\portfolio\\\\sungchan\\\\pages\\\\index.tsx */"
    }, void 0, false, void 0, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
      type: "text/css",
      rel: "stylesheet",
      href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
      className: "jsx-3889360865"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }, undefined)]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vLi9jb21wb25lbnQvYmFzZS50c3giLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvLy4vY29tcG9uZW50L2NhcmVlci50c3giLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvLy4vY29tcG9uZW50L2luaXQudHN4Iiwid2VicGFjazovL3N1bmdjaGFuX3BvcnRmb2xpby8uL2NvbXBvbmVudC9pbnRyby50c3giLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvLy4vY29tcG9uZW50L21haW4udHN4Iiwid2VicGFjazovL3N1bmdjaGFuX3BvcnRmb2xpby8uL2NvbXBvbmVudC9wcm9qZWN0cy50c3giLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvLy4vY29tcG9uZW50L3NraWxscy50c3giLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvLy4vY29tcG9uZW50L3doeUl0LnRzeCIsIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vLi9tb2R1bGVzL2Jhc2VTdG9yZS50c3giLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvLy4vbW9kdWxlcy9pbmRleFN0b3JlLnRzeCIsIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vLi9tb2R1bGVzL2luaXRTdG9yZS50c3giLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovL3N1bmdjaGFuX3BvcnRmb2xpby8uL3N0eWxlL3N0eWxlLnRzeCIsIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJtb2J4XCIiLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvL2V4dGVybmFsIFwibW9ieC1yZWFjdFwiIiwid2VicGFjazovL3N1bmdjaGFuX3BvcnRmb2xpby9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vc3VuZ2NoYW5fcG9ydGZvbGlvL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly9zdW5nY2hhbl9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiTWFpbkNvbnRhaW5lciIsInN0eWxlZCIsInByb3BzIiwiYmFja2dyb3VuZENvbG9yIiwiekluZGV4IiwiU3ViQ29udGFpbmVyIiwiaXNSZWFjaCIsIkNvbXBvbmVudENvbnRhaW5lciIsIm1heFdpZHRoIiwiVGl0bGVTZWN0aW9uIiwiQ29tcG9uZW50U2VjdGlvbiIsIk1haW5UaXRsZSIsIm15S2V5ZnJhbWVzIiwia2V5ZnJhbWVzIiwiVGVzdERpdiIsIkJhc2UiLCJjaGlsZHJlbiIsImNvbnRhaW5lck5vIiwiYmFzZVN0b3JlIiwiaW5kZXhTdG9yZSIsInNldElzUmVhY2giLCJSZWFjdCIsIm1haW5Db250YWluZXJSZWYiLCJzdWJDb250YWluZXJSZWYiLCJiYWNrZ3JvdW5kQ29sb3JBcnJheSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbkNoYW5nZVNjcm9sbCIsIm9uQ2hhbmdlUmVzaXplIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImN1cnJlbnQiLCJzZXRBdHRyaWJ1dGUiLCJ0aXRsZUFycmF5Iiwic2V0Q29tcG9uZW50SGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwib25DbGlja01haW5Db250YWluZXIiLCJzY3JvbGxCeSIsImdldEFjY3VtdWxhdGVDb21wb25lbnRIZWlnaHQiLCJzY3JvbGxZIiwiYmVoYXZpb3IiLCJ1c2VPYnNlcnZlciIsIk1haW5TZWN0aW9uIiwiTWFpbkRpdiIsIkltYWdlRGl2IiwiVGV4dERpdiIsIlRleHRUaXRsZURpdiIsIlRleHREZXNjcmlwdGlvbkRpdiIsIlBpY3R1cmVDb250YWluZXIiLCJUZXh0VGl0bGUiLCJjb2xvciIsIlRleHREZXNjcmlwdGlvbiIsInR5cGUiLCJDYXJlZXJJbWFnZSIsIlBpY3R1cmVJbWFnZSIsIkNhcmVlciIsInBpY3R1cmVJbWFnZSIsInNldFBpY3R1cmVJbWFnZSIsInBpY3R1cmVDb250YWluZXJSZWYiLCJvbkNsaWNrQ2FtZXJhIiwiZSIsImltZyIsInN0b3BQcm9wYWdhdGlvbiIsInN0eWxlIiwiZGlzcGxheSIsIm9uQ2xpY2tQaWN0dXJlQ29udGFpbmVyIiwiQ29udGFpbmVyIiwiVGl0bGVEaXYiLCJDb2xvclNwYW4iLCJUaXRsZUN1cnNvciIsIkluaXQiLCJpbml0U3RvcmUiLCJjb250YWluZXJSZWYiLCJ0eXBpbmdTdHJpbmdSZWYxIiwidHlwaW5nU3RyaW5nUmVmMiIsInR5cGluZ1N0cmluZ1JlZjMiLCJ0eXBpbmdTdHJpbmdSZWY0IiwidHlwaW5nU3RyaW5nUmVmNSIsInR5cGluZ1N0cmluZ1JlZjYiLCJ0eXBpbmdTdHJpbmdSZWY3IiwidHlwaW5nU3RyaW5nUmVmOCIsInR5cGluZ0N1cnNvcjEiLCJ0eXBpbmdDdXJzb3IyIiwidHlwaW5nQ3Vyc29yMyIsInR5cGluZ0N1cnNvcjQiLCJ0aW1lIiwic3RyaW5ncyIsInN0cmluZ09ianMiLCJzdHJpbmciLCJzdGFydCIsImxlbmd0aCIsInNldFR5cGluZ1N0cmluZ0FjdGlvbjEiLCJzZXRUeXBpbmdTdHJpbmdBY3Rpb24yIiwic2V0VHlwaW5nQ3Vyc29yQWN0aW9uIiwic2V0VGltZW91dCIsInNldElzRW5kIiwicmVmIiwiaW5kZXgiLCJjaGFySW5kZXgiLCJpbm5lckhUTUwiLCJ0eXBpbmdJbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIkJveFNlY3Rpb24iLCJCb3hDb250YWluZXIiLCJpbm5lcldpZHRoIiwiZGlyZWN0aW9uIiwiQm94TWFpbkRpdiIsIkJveExlZnREaXYiLCJCb3hSaWdodERpdiIsIkJveERlc2NyaXB0aW9uIiwiQm94VGl0bGUiLCJJbnRybyIsImJveEFycmF5MSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJib3hBcnJheTIiLCJib3hBcnJheTMiLCJib3hBcnJheTQiLCJtYXAiLCJib3giLCJNZW51RGl2S2V5RnJhbWUiLCJNZW51RGl2IiwiTWVudVN1YkRpdkhvdmVyS2V5RnJhbWUiLCJNZW51U3ViRGl2IiwiTWVudVNlY3Rpb24iLCJUaXRsZVNlY3Rpb25LZXlGcmFtZSIsIlN1YlRpdGxlIiwiTWFpbiIsIm9uQ2xpY2tNZW51RGl2IiwibWVudSIsIlByb2plY3RzIiwiQm94Q290YWluZXIiLCJCb3hJbWFnZSIsIlNraWxscyIsInNraWxsc0FycmF5Iiwic3JjIiwic2tpbGwiLCJDb21tb25TZWN0aW9uIiwiUXVlc3Rpb25TZWN0aW9uIiwiQW5zd2VyU2VjdGlvbiIsInF1ZXN0aW9uTnVtYmVyS2V5ZnJhbWUiLCJRdWVzdGlvbkRpdiIsIlF1ZXN0aW9uU3ViRGl2IiwiQW5zd2VyRGl2IiwiUXVlc3Rpb25UaXRsZSIsIkFuc3dlclRpdGxlIiwiUXVlc3Rpb25OdW1iZXIiLCJpc0NsaWNrIiwiV2h5SXQiLCJxdWVzdGlvbkluZGV4Iiwic2V0UXVlc3Rpb25JbmRleCIsInR5cGluZ1RpbWVyIiwic2V0VHlwaW5nVGltZXIiLCJhbnN3ZXJUaXRsZVJlZiIsImFuc3dlckRpdlJlZiIsInFuYUFycmF5IiwicXVlc3Rpb24iLCJhbnN3ZXIiLCJxdWVzdGlvbkNvbG9yIiwib25DbGlja1F1ZXN0aW9uIiwiYm94U2hhZG93IiwicW5hIiwiQmFzZVN0b3JlIiwib2JzZXJ2YWJsZSIsImNvbXBvbmVudEhlaWdodHMiLCJoZWlnaHQiLCJzZXRJbm5lcldpZHRoIiwic2V0U2Nyb2xsWSIsImNvdW50IiwiaSIsIkluaXRTdG9yZSIsImlzRW5kIiwiSW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BLE1BQU1BLGFBQWEsR0FBR0MsdUVBQUg7QUFBQTtBQUFBO0FBQUEsaUlBTU1DLEtBQUQsSUFBMkJBLEtB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OEIsU0FBUyxDQUFDcUcsS0FBVixnQkFDRztBQUFBLDhCQUNJLDhEQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSSw4REFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKLGVBR0ksOERBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFISixlQUlJLDhEQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkosZUFLSSw4REFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxKLGVBTUksOERBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFOSjtBQUFBLG9CQURILGdCQVVHLDhEQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWFI7QUFBQTtBQUFBO0FBQUEsdURBbUNJO0FBQ0ksVUFBSSxFQUFDLFVBRFQ7QUFFSSxTQUFHLEVBQUMsWUFGUjtBQUdJLFVBQUksRUFBQyw2RUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFuQ0o7QUFBQSxrQkFEYyxDQUFsQjtBQTJDSCxDQW5FRDs7QUFxRUEsK0RBQWVDLEtBQWYsRTs7Ozs7Ozs7Ozs7Ozs7O0FDaEZPLE1BQU10SyxRQUFRLEdBQUcsR0FBakIsQzs7Ozs7Ozs7Ozs7QUNBUCxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbi8vIGltcG9ydCB7IG1heFdpZHRoIH0gZnJvbSAnLi4vc3R5bGUvc3R5bGUnO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkU2VjdGlvbjEgPSBzdHlsZWQuc2VjdGlvbmBgO1xyXG5cclxuLy8gaW50ZXJmYWNlIElTdHlsZWREaXYyIHtcclxuLy8gICAgIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBTdHlsZWREaXYyID0gc3R5bGVkLmRpdmBcclxuLy8gICAgIG1heC13aWR0aDogJHttYXhXaWR0aH1weDtcclxuLy8gICAgIG1hcmdpbjogMCBhdXRvO1xyXG4vLyAgICAgcGFkZGluZzogMCAxNXB4O1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHM6IElTdHlsZWREaXYyKSA9PiBwcm9wcy5iYWNrZ3JvdW5kQ29sb3J9O1xyXG5cclxuLy8gICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7bWF4V2lkdGggKyA1MH1weCkge1xyXG4vLyAgICAgICAgIG1hcmdpbi1ib3R0b206IDg0cHg7XHJcbi8vICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMThweDtcclxuLy8gICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMThweDtcclxuLy8gICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxOHB4O1xyXG4vLyAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxOHB4O1xyXG4vLyAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMTJweCAkeyhwcm9wczogSVN0eWxlZERpdjIpID0+IHByb3BzLmJhY2tncm91bmRDb2xvcn07XHJcbi8vICAgICB9XHJcbi8vIGA7XHJcblxyXG4vLyBpbnRlcmZhY2UgSVN0eWxlZERpdjMge1xyXG4vLyAgICAgdGl0bGU6IHN0cmluZztcclxuLy8gICAgIHNob3dUaXRsZTogYm9vbGVhbjtcclxuLy8gfVxyXG5cclxuLy8gY29uc3QgU3R5bGVkRGl2MyA9IHN0eWxlZC5kaXZgXHJcbi8vICAgICAkeyhwcm9wczogSVN0eWxlZERpdjMpID0+IHtcclxuLy8gICAgICAgICBpZiAocHJvcHMudGl0bGUpIHtcclxuLy8gICAgICAgICAgICAgaWYgKHByb3BzLnNob3dUaXRsZSkge1xyXG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIGBcclxuLy8gICAgICAgICAgICAgICAgICAgICBkaXNwYWx5OiBibG9jaztcclxuLy8gICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuLy8gICAgICAgICAgICAgICAgIGA7XHJcbi8vICAgICAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gYFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGRpc3BhbHk6IGJsb2NrO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg2MHB4KTtcclxuLy8gICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4vLyAgICAgICAgICAgICAgICAgYDtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgIHJldHVybiBgXHJcbi8vICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4vLyAgICAgICAgICAgICBgO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH19XHJcblxyXG4vLyAgICAgZGlzcGxheTogJHsocHJvcHM6IElTdHlsZWREaXYzKSA9PiAocHJvcHMudGl0bGUgPyAnYmxvY2snIDogJ25vbmUnKX07XHJcbi8vICAgICBwYWRkaW5nOiAyNHB4IDA7XHJcbi8vICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjhzO1xyXG4vLyAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkVGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4vLyAgICAgZm9udC1zaXplOiAyLjRlbTtcclxuLy8gYDtcclxuXHJcbi8vIGludGVyZmFjZSBJQmFzZUNvbXBvbmVudCB7XHJcbi8vICAgICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG4vLyAgICAgdGl0bGU6IHN0cmluZztcclxuLy8gICAgIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBCYXNlOiBSZWFjdC5GQzxJQmFzZUNvbXBvbmVudD4gPSAoeyBjaGlsZHJlbiwgdGl0bGUsIGJhY2tncm91bmRDb2xvciB9KTogSlNYLkVsZW1lbnQgPT4ge1xyXG4vLyAgICAgLy8gc3RhdGVcclxuLy8gICAgIGNvbnN0IFtzaG93VGl0bGUsIHNldFNob3dUaXRsZV0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbi8vICAgICBjb25zdCBbaXNDbGljaywgc2V0SXNDbGlja10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbi8vICAgICBjb25zdCBbc2F2ZVBvc2l0aW9uLCBzZXRTYXZlUG9zaXRpb25dID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPigwKTtcclxuXHJcbi8vICAgICAvLyByZWZcclxuLy8gICAgIGNvbnN0IGRpdjFSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KCk7XHJcbi8vICAgICBjb25zdCBkaXYyUmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG5cclxuLy8gICAgIC8vIHZhcmlhYmxlXHJcbi8vICAgICBsZXQgaXNDbGlja1ZhcmlhYmxlID0gZmFsc2U7XHJcblxyXG4vLyAgICAgLy8gdXNlRWZmZWN0XHJcbi8vICAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgICAgICAgIHNjcm9sbFRpdGxlKCk7XHJcbi8vICAgICAgICAgcmVzaXplU2VjdGlvbjEoKTtcclxuXHJcbi8vICAgICAgICAgaWYgKGRpdjFSZWYuY3VycmVudCkge1xyXG4vLyAgICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuaWQgPSB0aXRsZTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9LCBbXSk7XHJcblxyXG4vLyAgICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuLy8gICAgICAgICBpc0NsaWNrVmFyaWFibGUgPSBmYWxzZTtcclxuLy8gICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsVGl0bGUpO1xyXG5cclxuLy8gICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4vLyAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsVGl0bGUpO1xyXG4vLyAgICAgICAgIH07XHJcbi8vICAgICB9LCBbaXNDbGlja10pO1xyXG5cclxuLy8gICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbi8vICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZVNlY3Rpb24xKTtcclxuXHJcbi8vICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuLy8gICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZVNlY3Rpb24xKTtcclxuLy8gICAgICAgICB9O1xyXG4vLyAgICAgfSwgW2lzQ2xpY2tdKTtcclxuXHJcbi8vICAgICAvLyBvbkNsaWNrXHJcbi8vICAgICBjb25zdCBvbkNsaWNrRGl2MiA9ICgpID0+IHtcclxuLy8gICAgICAgICBpZiAoZGl2MVJlZi5jdXJyZW50KSB7XHJcbi8vICAgICAgICAgICAgIGlmIChpc0NsaWNrKSB7XHJcbi8vICAgICAgICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xyXG4vLyAgICAgICAgICAgICAgICAgZGl2MVJlZi5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xyXG4vLyAgICAgICAgICAgICAgICAgZGl2MVJlZi5jdXJyZW50LnN0eWxlLm1hcmdpbiA9ICcnO1xyXG4vLyAgICAgICAgICAgICAgICAgc2V0SXNDbGljayhmYWxzZSk7XHJcbi8vICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgc2F2ZVBvc2l0aW9uKTtcclxuLy8gICAgICAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWTsgLy8g7ZiE7J6sIOyKpO2BrOuhpCDrhpLsnbRcclxuLy8gICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gZGl2MVJlZi5jdXJyZW50ICYmIGRpdjFSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7IC8vIGRpduydmCB0b3Dsl5Ag64+E64us7ZWgIOuWhOq5jOyngCDrgqjsnYAg6rGw66asXHJcbi8vICAgICAgICAgICAgICAgICBjb25zdCBnYWJZID0gKHdpbmRvdy5pbm5lckhlaWdodCAtIChkaXYxUmVmLmN1cnJlbnQgJiYgZGl2MVJlZi5jdXJyZW50LmNsaWVudEhlaWdodCkpIC8gMjsgLy8gKO2ZlOuptCDrhpLsnbQgLSBkaXYg64aS7J20KSAvIDJcclxuLy8gICAgICAgICAgICAgICAgIGNvbnN0IGdhYlggPSAod2luZG93LmlubmVyV2lkdGggLSAoZGl2MlJlZi5jdXJyZW50ICYmIGRpdjJSZWYuY3VycmVudC5jbGllbnRXaWR0aCkpIC8gMjsgLy8gKO2ZlOuptCDrhIjruYQgLSBkaXYg64SI67mEKSAvIDJcclxuXHJcbi8vICAgICAgICAgICAgICAgICBpZiAoZ2FiWSA+IDAgJiYgZ2FiWCA+IDAgJiYgd2luZG93LmlubmVyV2lkdGggPj0gbWF4V2lkdGggKyA1MCkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHNldFNhdmVQb3NpdGlvbihzY3JvbGxZICsgZGlzdGFuY2UgLSBnYWJZKTsgLy8g7KSR7JWZIOychOy5mFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGlmIChnYWJZID4gODQpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHNjcm9sbFkgKyBkaXN0YW5jZSAtIGdhYlkgKyAoZ2FiWSAtIDg0KSk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHNjcm9sbFkgKyBkaXN0YW5jZSAtIGdhYlkpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmxhbmtZID0gMSArIChnYWJZIC8gKGRpdjJSZWYuY3VycmVudCAmJiBkaXYyUmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0KSkgKiAyOyAvLyAoZGl2IOyXrOu5hCDrhpLsnbQgLyBkaXYg64aS7J20KSAqIDJcclxuLy8gICAgICAgICAgICAgICAgICAgICBjb25zdCBibGFua1ggPSAxICsgKGdhYlggLyAoZGl2MlJlZi5jdXJyZW50ICYmIGRpdjJSZWYuY3VycmVudC5jbGllbnRXaWR0aCkpICogMjsgLy8gKGRpdiDsl6zruYQg64SI67mEIC8gZGl2IOuEiOu5hCkgKiAyXHJcblxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGRpdjFSZWYuY3VycmVudC5zdHlsZS50cmFuc2l0aW9uID0gJzFzJztcclxuLy8gICAgICAgICAgICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlKCR7TWF0aC5taW4oYmxhbmtZLCBibGFua1gpfSlgO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGRpdjFSZWYuY3VycmVudC5zdHlsZS5tYXJnaW4gPSBgJHtnYWJZfXB4IDBgO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHNldElzQ2xpY2sodHJ1ZSk7XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9O1xyXG5cclxuLy8gICAgIC8vIG5vcm1hbFxyXG4vLyAgICAgY29uc3QgcmVzaXplU2VjdGlvbjEgPSAoKSA9PiB7XHJcbi8vICAgICAgICAgY29uc3QgZ2FiWSA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLSAoZGl2MVJlZi5jdXJyZW50ICYmIGRpdjFSZWYuY3VycmVudC5jbGllbnRIZWlnaHQpKSAvIDI7IC8vICjtmZTrqbQg64aS7J20IC0gZGl2IOuGkuydtCkgLyAyXHJcbi8vICAgICAgICAgY29uc3QgZ2FiWCA9ICh3aW5kb3cuaW5uZXJXaWR0aCAtIChkaXYyUmVmLmN1cnJlbnQgJiYgZGl2MlJlZi5jdXJyZW50LmNsaWVudFdpZHRoKSkgLyAyOyAvLyAo7ZmU66m0IOuEiOu5hCAtIGRpdiDrhIjruYQpIC8gMlxyXG5cclxuLy8gICAgICAgICBpZiAoaXNDbGljaykge1xyXG4vLyAgICAgICAgICAgICBpZiAoZ2FiWSA+IDAgJiYgZ2FiWCA+IDAgJiYgd2luZG93LmlubmVyV2lkdGggPj0gbWF4V2lkdGggKyA1MCkge1xyXG4vLyAgICAgICAgICAgICAgICAgY29uc3QgYmxhbmtZID0gMSArIChnYWJZIC8gKGRpdjJSZWYuY3VycmVudCAmJiBkaXYyUmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0KSkgKiAyOyAvLyAoZGl2IOyXrOu5hCDrhpLsnbQgLyBkaXYg64aS7J20KSAqIDJcclxuLy8gICAgICAgICAgICAgICAgIGNvbnN0IGJsYW5rWCA9IDEgKyAoZ2FiWCAvIChkaXYyUmVmLmN1cnJlbnQgJiYgZGl2MlJlZi5jdXJyZW50LmNsaWVudFdpZHRoKSkgKiAyOyAvLyAoZGl2IOyXrOu5hCDrhIjruYQgLyBkaXYg64SI67mEKSAqIDJcclxuXHJcbi8vICAgICAgICAgICAgICAgICBkaXYxUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xyXG4vLyAgICAgICAgICAgICAgICAgZGl2MVJlZi5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZSgke01hdGgubWluKGJsYW5rWSwgYmxhbmtYKX0pYDtcclxuLy8gICAgICAgICAgICAgICAgIGRpdjFSZWYuY3VycmVudC5zdHlsZS5tYXJnaW4gPSBgJHtnYWJZfXB4IDBgO1xyXG4vLyAgICAgICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgICAgICAgZGl2MVJlZi5jdXJyZW50LnN0eWxlLnRyYW5zaXRpb24gPSAnJztcclxuLy8gICAgICAgICAgICAgICAgIGRpdjFSZWYuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSAnJztcclxuLy8gICAgICAgICAgICAgICAgIGRpdjFSZWYuY3VycmVudC5zdHlsZS5tYXJnaW4gPSAnJztcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgaWYgKGRpdjJSZWYuY3VycmVudCkge1xyXG4vLyAgICAgICAgICAgICBpZiAoZ2FiWSA+IDAgJiYgZ2FiWCA+IDAgJiYgd2luZG93LmlubmVyV2lkdGggPj0gbWF4V2lkdGggKyA1MCkge1xyXG4vLyAgICAgICAgICAgICAgICAgZGl2MlJlZi5jdXJyZW50LnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuLy8gICAgICAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgICAgICAgIGRpdjJSZWYuY3VycmVudC5zdHlsZS5jdXJzb3IgPSAnJztcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH07XHJcblxyXG4vLyAgICAgY29uc3Qgc2Nyb2xsVGl0bGUgPSAoKSA9PiB7XHJcbi8vICAgICAgICAgaWYgKGRpdjFSZWYuY3VycmVudCkge1xyXG4vLyAgICAgICAgICAgICBpZiAod2luZG93LmlubmVySGVpZ2h0ID49IGRpdjFSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyA0OCkge1xyXG4vLyAgICAgICAgICAgICAgICAgc2V0U2hvd1RpdGxlKHRydWUpO1xyXG4vLyAgICAgICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgICAgICAgc2V0U2hvd1RpdGxlKGZhbHNlKTtcclxuLy8gICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgICAgaWYgKGlzQ2xpY2tWYXJpYWJsZSkge1xyXG4vLyAgICAgICAgICAgICAgICAgZGl2MVJlZi5jdXJyZW50LnN0eWxlLnRyYW5zaXRpb24gPSAnJztcclxuLy8gICAgICAgICAgICAgICAgIGRpdjFSZWYuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSAnJztcclxuLy8gICAgICAgICAgICAgICAgIGRpdjFSZWYuY3VycmVudC5zdHlsZS5tYXJnaW4gPSAnJztcclxuLy8gICAgICAgICAgICAgICAgIHNldElzQ2xpY2soZmFsc2UpO1xyXG4vLyAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICBpZiAoaXNDbGljaykge1xyXG4vLyAgICAgICAgICAgICAgICAgaXNDbGlja1ZhcmlhYmxlID0gdHJ1ZTtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH07XHJcblxyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICA8PlxyXG4vLyAgICAgICAgICAgICA8U3R5bGVkU2VjdGlvbjEgcmVmPXtkaXYxUmVmfT5cclxuLy8gICAgICAgICAgICAgICAgIDxTdHlsZWREaXYyIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yfSByZWY9e2RpdjJSZWZ9IG9uQ2xpY2s9e29uQ2xpY2tEaXYyfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRGl2MyB0aXRsZT17dGl0bGV9IHNob3dUaXRsZT17c2hvd1RpdGxlfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFRpdGxlPiMge3RpdGxlfTwvU3R5bGVkVGl0bGU+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXYzPlxyXG5cclxuLy8gICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbi8vICAgICAgICAgICAgICAgICA8L1N0eWxlZERpdjI+XHJcbi8vICAgICAgICAgICAgIDwvU3R5bGVkU2VjdGlvbjE+XHJcbi8vICAgICAgICAgPC8+XHJcbi8vICAgICApO1xyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgQmFzZTtcclxuXHJcbmltcG9ydCB7IHVzZU9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBpbmRleFN0b3JlIGZyb20gJy4uL21vZHVsZXMvaW5kZXhTdG9yZSc7XHJcbmltcG9ydCB7IG1heFdpZHRoIH0gZnJvbSAnLi4vc3R5bGUvc3R5bGUnO1xyXG5cclxuaW50ZXJmYWNlIElNYWluQ29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xyXG4gICAgekluZGV4OiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IE1haW5Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAoMTAwdncgLSAxMDAlKSk7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wczogSU1haW5Db250YWluZXIpID0+IHByb3BzLmJhY2tncm91bmRDb2xvcn07XHJcbiAgICB6LWluZGV4OiAkeyhwcm9wczogSU1haW5Db250YWluZXIpID0+IHByb3BzLnpJbmRleH07XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSVN1YkNvbnRhaW5lciB7XHJcbiAgICBpc1JlYWNoOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBTdWJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAoMTAwdncgLSAxMDAlKSk7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIHBvc2l0aW9uOiAkeyhwcm9wczogSVN1YkNvbnRhaW5lcikgPT4gKHByb3BzLmlzUmVhY2ggPyAnc3RhdGljJyA6ICdmaXhlZCcpfTtcclxuICAgIHRvcDogJHsocHJvcHM6IElTdWJDb250YWluZXIpID0+IChwcm9wcy5pc1JlYWNoID8gJycgOiAwKX07XHJcbmA7XHJcblxyXG5jb25zdCBDb21wb25lbnRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWF4LXdpZHRoOiAke21heFdpZHRofXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5gO1xyXG5cclxuY29uc3QgVGl0bGVTZWN0aW9uID0gc3R5bGVkLmRpdmBcclxuICAgIHBhZGRpbmc6IDM4cHggMCA2NnB4IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xyXG5gO1xyXG5cclxuY29uc3QgQ29tcG9uZW50U2VjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbmA7XHJcblxyXG5jb25zdCBNYWluVGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IGNhbGMoNDhweCArIDAuOXZ3KTtcclxuICAgIHRleHQtc2hhZG93OiAzLjVweCAzLjVweCAjZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6ICdCdW5nZWUnLCBjdXJzaXZlO1xyXG5gO1xyXG5cclxuY29uc3QgbXlLZXlmcmFtZXMgPSBrZXlmcmFtZXNgXHJcbiAgICA1MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdG9wOiAtMTAwdmg7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IFRlc3REaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gKDEwMHZ3IC0gMTAwJSkpO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogY2FsYygxMDB2aCAtIDI1MHB4KTtcclxuICAgIGxlZnQ6IGNhbGMoMTAwdncgLSAoMTAwdncgLSAxMDAlKSAtIDQ1MHB4KTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC02MGRlZyk7XHJcbiAgICB6LWluZGV4OiAyMDA7XHJcblxyXG4gICAgYW5pbWF0aW9uLW5hbWU6ICR7bXlLZXlmcmFtZXN9O1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMHM7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuYDtcclxuXHJcbmludGVyZmFjZSBJQmFzZSB7XHJcbiAgICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG4gICAgY29udGFpbmVyTm86IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgQmFzZTogUmVhY3QuRkM8SUJhc2U+ID0gKHsgY2hpbGRyZW4sIGNvbnRhaW5lck5vIH0pOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICAvLyBtb2J4XHJcbiAgICBjb25zdCB7IGJhc2VTdG9yZSB9ID0gaW5kZXhTdG9yZSgpO1xyXG5cclxuICAgIC8vIHN0YXRlXHJcbiAgICBjb25zdCBbaXNSZWFjaCwgc2V0SXNSZWFjaF0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gICAgLy8gcmVmXHJcbiAgICBjb25zdCBtYWluQ29udGFpbmVyUmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG4gICAgY29uc3Qgc3ViQ29udGFpbmVyUmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG5cclxuICAgIC8vIHZhcmlhYmxlXHJcbiAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3JBcnJheSA9IFsnIzc1NzI3MCcsICcjQTVCQUE4JywgJyM2QTkxOTQnLCAnI2I3OWU2YScsICcjYzY4Mzc3JywgJyNmZmYnXTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvbkNoYW5nZVNjcm9sbCk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uQ2hhbmdlUmVzaXplKTtcclxuXHJcbiAgICAgICAgb25DaGFuZ2VTY3JvbGwoKTtcclxuICAgICAgICBvbkNoYW5nZVJlc2l6ZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25DaGFuZ2VTY3JvbGwpO1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25DaGFuZ2VSZXNpemUpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAobWFpbkNvbnRhaW5lclJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIG1haW5Db250YWluZXJSZWYuY3VycmVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgYmFzZVN0b3JlLnRpdGxlQXJyYXlbY29udGFpbmVyTm9dKTtcclxuICAgICAgICAgICAgYmFzZVN0b3JlLnNldENvbXBvbmVudEhlaWdodChjb250YWluZXJObywgc3ViQ29udGFpbmVyUmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLy8gb25DaGFuZ2VcclxuICAgIGNvbnN0IG9uQ2hhbmdlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChtYWluQ29udGFpbmVyUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgaWYgKG1haW5Db250YWluZXJSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgc2V0SXNSZWFjaChmYWxzZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRJc1JlYWNoKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZVJlc2l6ZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAobWFpbkNvbnRhaW5lclJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGlmIChtYWluQ29udGFpbmVyUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wID49IDEpIHtcclxuICAgICAgICAgICAgICAgIHNldElzUmVhY2goZmFsc2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0SXNSZWFjaCh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gb25DbGlja1xyXG4gICAgY29uc3Qgb25DbGlja01haW5Db250YWluZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbEJ5KHtcclxuICAgICAgICAgICAgdG9wOiBiYXNlU3RvcmUuZ2V0QWNjdW11bGF0ZUNvbXBvbmVudEhlaWdodChjb250YWluZXJObykgLSBiYXNlU3RvcmUuc2Nyb2xsWSxcclxuICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdXNlT2JzZXJ2ZXIoKCkgPT4gKFxyXG4gICAgICAgIDxNYWluQ29udGFpbmVyXHJcbiAgICAgICAgICAgIHJlZj17bWFpbkNvbnRhaW5lclJlZn1cclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3JBcnJheVtjb250YWluZXJOb119XHJcbiAgICAgICAgICAgIHpJbmRleD17MTAwIC0gY29udGFpbmVyTm99XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2tNYWluQ29udGFpbmVyfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPFN1YkNvbnRhaW5lciByZWY9e3N1YkNvbnRhaW5lclJlZn0gaXNSZWFjaD17aXNSZWFjaH0+XHJcbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb250YWluZXJObyA9PT0gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGl0bGVTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1haW5UaXRsZT4jIHtiYXNlU3RvcmUudGl0bGVBcnJheVtjb250YWluZXJOb119PC9NYWluVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGl0bGVTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnRTZWN0aW9uPntjaGlsZHJlbn08L0NvbXBvbmVudFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L0NvbXBvbmVudENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9TdWJDb250YWluZXI+XHJcbiAgICAgICAgPC9NYWluQ29udGFpbmVyPlxyXG4gICAgKSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYXNlO1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB1c2VPYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QnO1xyXG5cclxuY29uc3QgTWFpblNlY3Rpb24gPSBzdHlsZWQuZGl2YFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgTWFpbkRpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTRweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MjBweCkge1xyXG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgSW1hZ2VEaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWFyZ2luOiAwIDI1cHggMzhweCAyNXB4O1xyXG5gO1xyXG5cclxuY29uc3QgVGV4dERpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBtYXJnaW46IDAgMjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggNHB4IDRweCAjYzhjOGM4IGluc2V0LCAtMnB4IC00cHggNHB4ICNjOGM4YzggaW5zZXQ7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE4cHg7XHJcbmA7XHJcblxyXG5jb25zdCBUZXh0VGl0bGVEaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcclxuYDtcclxuXHJcbmNvbnN0IFRleHREZXNjcmlwdGlvbkRpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5gO1xyXG5cclxuY29uc3QgUGljdHVyZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDEwMTtcclxuICAgIHRvcDogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuYDtcclxuXHJcbmludGVyZmFjZSBJVGV4dFRpdGxlIHtcclxuICAgIGNvbG9yOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IFRleHRUaXRsZSA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogY2FsYygxN3B4ICsgMC41dncpO1xyXG4gICAgY29sb3I6ICR7KHByb3BzOiBJVGV4dFRpdGxlKSA9PiBwcm9wcy5jb2xvcn07XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgSVRleHREZXNjcmlwdGlvbiB7XHJcbiAgICB0eXBlPzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBUZXh0RGVzY3JpcHRpb24gPSBzdHlsZWQuc3BhbmBcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAyM3B4IDA7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiBjYWxjKDE1cHggKyAwLjJ2dyk7XHJcblxyXG4gICAgJHsocHJvcHM6IElUZXh0RGVzY3JpcHRpb24pID0+IHtcclxuICAgICAgICBpZiAocHJvcHMudHlwZSA9PT0gJ2NhbWVyYScpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdcXGYwMzAnO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0M2ODM3NztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYDtcclxuICAgICAgICB9IGVsc2UgaWYgKHByb3BzLnR5cGUgPT09ICdjYWxlbmRhcicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdcXGYyNzInO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0M2ODM3NztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYDtcclxuICAgICAgICB9IGVsc2UgaWYgKHByb3BzLnR5cGUgPT09ICdwb3NpdGlvbicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdcXGYyYmInO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0M2ODM3NztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ1xcZjAwNSc7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjQzY4Mzc3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgIH1cclxuICAgIH19XHJcbmA7XHJcblxyXG5jb25zdCBDYXJlZXJJbWFnZSA9IHN0eWxlZC5pbWdgXHJcbiAgICB3aWR0aDogY2FsYygyMDBweCArIDUuOHZ3KTtcclxuYDtcclxuXHJcbmNvbnN0IFBpY3R1cmVJbWFnZSA9IHN0eWxlZC5pbWdgXHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDI4cHgpO1xyXG4gICAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMjhweCk7XHJcbmA7XHJcblxyXG5jb25zdCBDYXJlZXIgPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgLy8gc3RhdGVcclxuICAgIGNvbnN0IFtwaWN0dXJlSW1hZ2UsIHNldFBpY3R1cmVJbWFnZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuXHJcbiAgICAvLyByZWZcclxuICAgIGNvbnN0IHBpY3R1cmVDb250YWluZXJSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KCk7XHJcblxyXG4gICAgLy8gb25DbGlja1xyXG4gICAgY29uc3Qgb25DbGlja0NhbWVyYSA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxTcGFuRWxlbWVudCwgTW91c2VFdmVudD4sIGltZzogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgaWYgKHBpY3R1cmVDb250YWluZXJSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgc2V0UGljdHVyZUltYWdlKGltZyk7XHJcbiAgICAgICAgICAgIHBpY3R1cmVDb250YWluZXJSZWYuY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25DbGlja1BpY3R1cmVDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHBpY3R1cmVDb250YWluZXJSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICBzZXRQaWN0dXJlSW1hZ2UoJycpO1xyXG4gICAgICAgICAgICBwaWN0dXJlQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB1c2VPYnNlcnZlcigoKSA9PiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEJhc2UgY29udGFpbmVyTm89ezR9PlxyXG4gICAgICAgICAgICAgICAgPE1haW5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNYWluRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZWVySW1hZ2Ugc3JjPVwiL2ltYWdlL3NzYWZ5LlBOR1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW1hZ2VEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRUaXRsZURpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFRpdGxlIGNvbG9yPXsnIzMzYmRkYSd9PuyCvOyEsSDssq3rhYQg7IaM7ZSE7Yq47Juo7Ja0IOyVhOy5tOuNsOuvuDwvVGV4dFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0VGl0bGVEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gdHlwZT1cImNhbGVuZGFyXCI+MTkuMDcgfiAyMC4wMzwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gdHlwZT1cImNhbWVyYVwiIG9uQ2xpY2s9eyhlKSA9PiBvbkNsaWNrQ2FtZXJhKGUsICcvaW1hZ2UvdG9wU2NvcmUuanBnJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAx7ZWZ6riwIOuwmCDrjIDtkZwg7ISx7KCBIOyasOyImOyDgSDst6jrk51cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjYW1lcmFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gb25DbGlja0NhbWVyYShlLCAnL2ltYWdlL2Ficm9hZEVkdWNhdGlvbi5qcGcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIO2VtOyZuCDsl7DsiJgg64yA7IOB7J6Q66GcIOuwnO2DgVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24+7Ju5IOq4sOuwmCDquLDstIgg67CPIOyLrO2ZlCDqtZDsnKEg7IiY6rCVPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2FtZXJhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IG9uQ2xpY2tDYW1lcmEoZSwgJy9pbWFnZS9zd2V4cGVydFNjb3JlLlBORycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg7IK87ISxIFNXIOyXreufiSDthYzsiqTtirggQSsg7Leo65OdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbkRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWFpbkRpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPE1haW5EaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZURpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJlZXJJbWFnZSBzcmM9XCIvaW1hZ2UvYXV0b2V2ZXIuUE5HXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbWFnZURpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFRpdGxlRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0VGl0bGUgY29sb3I9eycjMWUyNzY4J30+7ZiE64yAIOyYpO2GoOyXkOuyhDwvVGV4dFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0VGl0bGVEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RGVzY3JpcHRpb24gdHlwZT1cImNhbGVuZGFyXCI+MjAuMDMgfiDtmITsnqw8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uIHR5cGU9XCJwb3NpdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDsnpDrj5nssKgg7ZKI7KeIIOqwnOyEoCDsi5zsiqTthZwgRkUvQkUg6rCc67CcIOuwjyDsmrTsmIFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDtjIAg64K0IEdpdCDrj4TsnoUg67CPIOyCrOuCtCDsp4Hsm5Drk6Tsl5DqsowgR2l07IKs7JqpIOuwqeuylSDqtZDsnKEg64u064u5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbj7tjIAg64K0IOyLoOq4sOyIoCDsoIHsmqkg64u064u5PC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbj7shJzruYTsiqQg7Zqo7Jyo7ZmU66W8IOychO2VnCDsi5zsiqTthZwg6rCc7Y64IO2UhOuhnOygne2KuCDsp4Ttlok8L1RleHREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDshJzruYTsiqQg7IaN64+EIOqwnOyEoOydhCDsnITtlbQgUmVhY3Trpbwg7J207Jqp7ZWcIOy1nOygge2ZlCDsnpHsl4Ug7KeE7ZaJXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHREZXNjcmlwdGlvbj7smbjrtoAg7Iuc7Iqk7YWc6rO8IOyXsOqzhOulvCDsnITtlZwg6rO17JqpIFJlc3QgQVBJIOqwnOuwnDwvVGV4dERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0RGVzY3JpcHRpb25EaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dERpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L01haW5EaXY+XHJcbiAgICAgICAgICAgICAgICA8L01haW5TZWN0aW9uPlxyXG4gICAgICAgICAgICA8L0Jhc2U+XHJcblxyXG4gICAgICAgICAgICA8UGljdHVyZUNvbnRhaW5lciByZWY9e3BpY3R1cmVDb250YWluZXJSZWZ9IG9uQ2xpY2s9e29uQ2xpY2tQaWN0dXJlQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxQaWN0dXJlSW1hZ2Ugc3JjPXtwaWN0dXJlSW1hZ2V9IC8+XHJcbiAgICAgICAgICAgIDwvUGljdHVyZUNvbnRhaW5lcj5cclxuICAgICAgICA8Lz5cclxuICAgICkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZWVyO1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgaW5kZXhTdG9yZSBmcm9tICcuLi9tb2R1bGVzL2luZGV4U3RvcmUnO1xyXG5pbXBvcnQgeyB1c2VPYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QnO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG5gO1xyXG5cclxuY29uc3QgVGl0bGVEaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xyXG5gO1xyXG5cclxuY29uc3QgTWFpblNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmA7XHJcblxyXG5jb25zdCBNYWluVGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxLjRlbTtcclxuYDtcclxuXHJcbmludGVyZmFjZSBJQ29sb3JTcGFuIHtcclxuICAgIGNvbG9yOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IENvbG9yU3BhbiA9IHN0eWxlZC5zcGFuYFxyXG4gICAgY29sb3I6ICR7KHByb3BzOiBJQ29sb3JTcGFuKSA9PiBwcm9wcy5jb2xvcn07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG5gO1xyXG5cclxuY29uc3QgVGl0bGVDdXJzb3IgPSBzdHlsZWQuc3BhbmBcclxuICAgIGJvcmRlci1yaWdodDogN3B4IHNvbGlkICNmZmY7XHJcbiAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkICMwMDA7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG5gO1xyXG5cclxuY29uc3QgSW5pdCA9ICgpOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICAvLyBtb2J4XHJcbiAgICBjb25zdCB7IGluaXRTdG9yZSB9ID0gaW5kZXhTdG9yZSgpO1xyXG5cclxuICAgIC8vIHJlZlxyXG4gICAgY29uc3QgY29udGFpbmVyUmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG5cclxuICAgIGNvbnN0IHR5cGluZ1N0cmluZ1JlZjEgPSBSZWFjdC51c2VSZWY8SFRNTFNwYW5FbGVtZW50PigpO1xyXG4gICAgY29uc3QgdHlwaW5nU3RyaW5nUmVmMiA9IFJlYWN0LnVzZVJlZjxIVE1MU3BhbkVsZW1lbnQ+KCk7XHJcbiAgICBjb25zdCB0eXBpbmdTdHJpbmdSZWYzID0gUmVhY3QudXNlUmVmPEhUTUxTcGFuRWxlbWVudD4oKTtcclxuICAgIGNvbnN0IHR5cGluZ1N0cmluZ1JlZjQgPSBSZWFjdC51c2VSZWY8SFRNTFNwYW5FbGVtZW50PigpO1xyXG4gICAgY29uc3QgdHlwaW5nU3RyaW5nUmVmNSA9IFJlYWN0LnVzZVJlZjxIVE1MU3BhbkVsZW1lbnQ+KCk7XHJcbiAgICBjb25zdCB0eXBpbmdTdHJpbmdSZWY2ID0gUmVhY3QudXNlUmVmPEhUTUxTcGFuRWxlbWVudD4oKTtcclxuICAgIGNvbnN0IHR5cGluZ1N0cmluZ1JlZjcgPSBSZWFjdC51c2VSZWY8SFRNTFNwYW5FbGVtZW50PigpO1xyXG4gICAgY29uc3QgdHlwaW5nU3RyaW5nUmVmOCA9IFJlYWN0LnVzZVJlZjxIVE1MU3BhbkVsZW1lbnQ+KCk7XHJcblxyXG4gICAgY29uc3QgdHlwaW5nQ3Vyc29yMSA9IFJlYWN0LnVzZVJlZjxIVE1MU3BhbkVsZW1lbnQ+KCk7XHJcbiAgICBjb25zdCB0eXBpbmdDdXJzb3IyID0gUmVhY3QudXNlUmVmPEhUTUxTcGFuRWxlbWVudD4oKTtcclxuICAgIGNvbnN0IHR5cGluZ0N1cnNvcjMgPSBSZWFjdC51c2VSZWY8SFRNTFNwYW5FbGVtZW50PigpO1xyXG4gICAgY29uc3QgdHlwaW5nQ3Vyc29yNCA9IFJlYWN0LnVzZVJlZjxIVE1MU3BhbkVsZW1lbnQ+KCk7XHJcblxyXG4gICAgLy8gdmFyaWFibGVcclxuICAgIGNvbnN0IHRpbWUgPSAxMDA7XHJcblxyXG4gICAgY29uc3Qgc3RyaW5ncyA9IFtcclxuICAgICAgICAnQzpcXFxcVXNlcnNcXFxcVXNlclxcXFxEZXNrdG9wXFxcXHBvcnRmb2xpb1xcXFxzdW5nY2hhbj4nLFxyXG4gICAgICAgICducG0nLFxyXG4gICAgICAgICcgcnVuIHN0YXJ0ICcsXHJcbiAgICAgICAgJ3JlYWR5JyxcclxuICAgICAgICAnIC0gc3RhcnRlZCBwb3J0Zm9saW8gb2Ygc3VuZ2NoYW4sIHVybDogaHR0cHM6Ly9rc2Nwb3J0Zm9saW8uY29tJyxcclxuICAgICAgICAnd2FpdCcsXHJcbiAgICAgICAgJyAtIGNvbXBpbGluZy4uLicsXHJcbiAgICAgICAgJ2V2ZW50JyxcclxuICAgICAgICAnIC0gY29tcGlsZWQgc3VjY2VzZnVsbHknLFxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdCBzdHJpbmdPYmpzID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RyaW5nOiBzdHJpbmdzWzBdLFxyXG4gICAgICAgICAgICBzdGFydDogMCxcclxuICAgICAgICAgICAgbGVuZ3RoOiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdHJpbmc6IHN0cmluZ3NbMV0sXHJcbiAgICAgICAgICAgIHN0YXJ0OiAwLFxyXG4gICAgICAgICAgICBsZW5ndGg6IHRpbWUgKiBzdHJpbmdzWzFdLmxlbmd0aCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RyaW5nOiBzdHJpbmdzWzJdLFxyXG4gICAgICAgICAgICBzdGFydDogdGltZSAqIHN0cmluZ3NbMV0ubGVuZ3RoLFxyXG4gICAgICAgICAgICBsZW5ndGg6IHRpbWUgKiBzdHJpbmdzWzJdLmxlbmd0aCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RyaW5nOiBzdHJpbmdzWzNdLFxyXG4gICAgICAgICAgICBzdGFydDogdGltZSAqIChzdHJpbmdzWzFdLmxlbmd0aCArIHN0cmluZ3NbMl0ubGVuZ3RoICsgc3RyaW5nc1szXS5sZW5ndGgpLFxyXG4gICAgICAgICAgICBsZW5ndGg6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0cmluZzogc3RyaW5nc1s0XSxcclxuICAgICAgICAgICAgc3RhcnQ6IHRpbWUgKiAoc3RyaW5nc1sxXS5sZW5ndGggKyBzdHJpbmdzWzJdLmxlbmd0aCArIHN0cmluZ3NbM10ubGVuZ3RoKSxcclxuICAgICAgICAgICAgbGVuZ3RoOiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdHJpbmc6IHN0cmluZ3NbNV0sXHJcbiAgICAgICAgICAgIHN0YXJ0OiB0aW1lICogKHN0cmluZ3NbMV0ubGVuZ3RoICsgc3RyaW5nc1syXS5sZW5ndGggKyBzdHJpbmdzWzNdLmxlbmd0aCArIHN0cmluZ3NbNV0ubGVuZ3RoKSxcclxuICAgICAgICAgICAgbGVuZ3RoOiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdHJpbmc6IHN0cmluZ3NbNl0sXHJcbiAgICAgICAgICAgIHN0YXJ0OiB0aW1lICogKHN0cmluZ3NbMV0ubGVuZ3RoICsgc3RyaW5nc1syXS5sZW5ndGggKyBzdHJpbmdzWzNdLmxlbmd0aCArIHN0cmluZ3NbNV0ubGVuZ3RoKSxcclxuICAgICAgICAgICAgbGVuZ3RoOiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdHJpbmc6IHN0cmluZ3NbN10sXHJcbiAgICAgICAgICAgIHN0YXJ0OlxyXG4gICAgICAgICAgICAgICAgdGltZSAqXHJcbiAgICAgICAgICAgICAgICAoc3RyaW5nc1sxXS5sZW5ndGggKyBzdHJpbmdzWzJdLmxlbmd0aCArIHN0cmluZ3NbM10ubGVuZ3RoICsgc3RyaW5nc1s1XS5sZW5ndGggKyBzdHJpbmdzWzddLmxlbmd0aCksXHJcbiAgICAgICAgICAgIGxlbmd0aDogMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RyaW5nOiBzdHJpbmdzWzhdLFxyXG4gICAgICAgICAgICBzdGFydDpcclxuICAgICAgICAgICAgICAgIHRpbWUgKlxyXG4gICAgICAgICAgICAgICAgKHN0cmluZ3NbMV0ubGVuZ3RoICsgc3RyaW5nc1syXS5sZW5ndGggKyBzdHJpbmdzWzNdLmxlbmd0aCArIHN0cmluZ3NbNV0ubGVuZ3RoICsgc3RyaW5nc1s3XS5sZW5ndGgpLFxyXG4gICAgICAgICAgICBsZW5ndGg6IDAsXHJcbiAgICAgICAgfSxcclxuICAgIF07XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRUeXBpbmdTdHJpbmdBY3Rpb24xKHR5cGluZ1N0cmluZ1JlZjEsIDEpO1xyXG4gICAgICAgIHNldFR5cGluZ1N0cmluZ0FjdGlvbjEodHlwaW5nU3RyaW5nUmVmMiwgMik7XHJcbiAgICAgICAgc2V0VHlwaW5nU3RyaW5nQWN0aW9uMih0eXBpbmdTdHJpbmdSZWYzLCAzKTtcclxuICAgICAgICBzZXRUeXBpbmdTdHJpbmdBY3Rpb24yKHR5cGluZ1N0cmluZ1JlZjQsIDQpO1xyXG4gICAgICAgIHNldFR5cGluZ1N0cmluZ0FjdGlvbjIodHlwaW5nU3RyaW5nUmVmNSwgNSk7XHJcbiAgICAgICAgc2V0VHlwaW5nU3RyaW5nQWN0aW9uMih0eXBpbmdTdHJpbmdSZWY2LCA2KTtcclxuICAgICAgICBzZXRUeXBpbmdTdHJpbmdBY3Rpb24yKHR5cGluZ1N0cmluZ1JlZjcsIDcpO1xyXG4gICAgICAgIHNldFR5cGluZ1N0cmluZ0FjdGlvbjIodHlwaW5nU3RyaW5nUmVmOCwgOCk7XHJcblxyXG4gICAgICAgIHNldFR5cGluZ0N1cnNvckFjdGlvbih0eXBpbmdDdXJzb3IxLCAwLCBzdHJpbmdPYmpzWzJdLnN0YXJ0ICsgc3RyaW5nT2Jqc1syXS5sZW5ndGgpO1xyXG4gICAgICAgIHNldFR5cGluZ0N1cnNvckFjdGlvbih0eXBpbmdDdXJzb3IyLCBzdHJpbmdPYmpzWzJdLnN0YXJ0ICsgc3RyaW5nT2Jqc1syXS5sZW5ndGgsIHN0cmluZ09ianNbM10uc3RhcnQpO1xyXG4gICAgICAgIHNldFR5cGluZ0N1cnNvckFjdGlvbih0eXBpbmdDdXJzb3IzLCBzdHJpbmdPYmpzWzNdLnN0YXJ0LCBzdHJpbmdPYmpzWzVdLnN0YXJ0KTtcclxuICAgICAgICBzZXRUeXBpbmdDdXJzb3JBY3Rpb24odHlwaW5nQ3Vyc29yNCwgc3RyaW5nT2Jqc1s1XS5zdGFydCwgc3RyaW5nT2Jqc1s3XS5zdGFydCk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpbml0U3RvcmUuc2V0SXNFbmQodHJ1ZSk7XHJcbiAgICAgICAgfSwgc3RyaW5nT2Jqc1s3XS5zdGFydCArIHRpbWUgKiA1KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICAvLyDtg4DsnbTtlZEg7LKY66as6rCAIOydtOujqOyWtOyngOuKlCDslaHshZggKOq4gOyekCDtlZjrgpjslKkpXHJcbiAgICBjb25zdCBzZXRUeXBpbmdTdHJpbmdBY3Rpb24xID0gKFxyXG4gICAgICAgIHJlZjogUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxIVE1MU3BhbkVsZW1lbnQ+LCAvLyDtg4DsnbTtlZEg7LKY66as65CgIHJlZlxyXG4gICAgICAgIGluZGV4OiBudW1iZXIsIC8vIOyCrOyaqeuQoCBzdHJpbmcgb2JqIOyduOuNseyKpFxyXG4gICAgKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoYXJJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICByZWYuY3VycmVudC5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0eXBpbmdJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZWYuY3VycmVudC5pbm5lckhUTUwgPSByZWYuY3VycmVudC5pbm5lckhUTUwgKyBzdHJpbmdPYmpzW2luZGV4XS5zdHJpbmdbY2hhckluZGV4KytdO1xyXG4gICAgICAgICAgICAgICAgfSwgdGltZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0eXBpbmdJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgICAgICB9LCBzdHJpbmdPYmpzW2luZGV4XS5sZW5ndGgpO1xyXG4gICAgICAgICAgICB9LCBzdHJpbmdPYmpzW2luZGV4XS5zdGFydCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyDtg4DsnbTtlZEg7LKY66as6rCAIOydtOujqOyWtOyngOuKlCDslaHshZggKOusuOyepSDtlZjrgpjslKkpXHJcbiAgICBjb25zdCBzZXRUeXBpbmdTdHJpbmdBY3Rpb24yID0gKFxyXG4gICAgICAgIHJlZjogUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxIVE1MU3BhbkVsZW1lbnQ+LCAvLyDtg4DsnbTtlZEg7LKY66as65CgIHJlZlxyXG4gICAgICAgIGluZGV4OiBudW1iZXIsIC8vIOyCrOyaqeuQoCBzdHJpbmcgb2JqIOyduOuNseyKpFxyXG4gICAgKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQuaW5uZXJIVE1MID0gc3RyaW5nT2Jqc1tpbmRleF0uc3RyaW5nO1xyXG4gICAgICAgICAgICB9LCBzdHJpbmdPYmpzW2luZGV4XS5zdGFydCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzZXRUeXBpbmdDdXJzb3JBY3Rpb24gPSAoXHJcbiAgICAgICAgcmVmOiBSZWFjdC5NdXRhYmxlUmVmT2JqZWN0PEhUTUxTcGFuRWxlbWVudD4sIC8vIO2DgOydtO2VkSDsspjrpqzrkKAgcmVmXHJcbiAgICAgICAgc3RhcnQ6IG51bWJlciwgLy8g7JWh7IWYIOyLnOyekSDsi5zqsIRcclxuICAgICAgICBsZW5ndGg6IG51bWJlciwgLy8g7JWh7IWYIOq4uOydtFxyXG4gICAgKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xyXG4gICAgICAgICAgICB9LCBzdGFydCk7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlZi5jdXJyZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIH0sIGxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdXNlT2JzZXJ2ZXIoKCkgPT4gKFxyXG4gICAgICAgIDxDb250YWluZXIgcmVmPXtjb250YWluZXJSZWZ9PlxyXG4gICAgICAgICAgICA8TWFpblNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8VGl0bGVEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1haW5UaXRsZT57c3RyaW5nT2Jqc1swXS5zdHJpbmd9PC9NYWluVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1haW5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbG9yU3BhbiBjb2xvcj1cIiNmZmYxMDBcIiByZWY9e3R5cGluZ1N0cmluZ1JlZjF9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHJlZj17dHlwaW5nU3RyaW5nUmVmMn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L01haW5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8VGl0bGVDdXJzb3IgcmVmPXt0eXBpbmdDdXJzb3IxfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9UaXRsZURpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8VGl0bGVEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1haW5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbG9yU3BhbiBjb2xvcj1cIiMyMjkzMDBcIiByZWY9e3R5cGluZ1N0cmluZ1JlZjN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHJlZj17dHlwaW5nU3RyaW5nUmVmNH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L01haW5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8VGl0bGVDdXJzb3IgcmVmPXt0eXBpbmdDdXJzb3IyfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9UaXRsZURpdj5cclxuICAgICAgICAgICAgICAgIDxUaXRsZURpdj5cclxuICAgICAgICAgICAgICAgICAgICA8TWFpblRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sb3JTcGFuIGNvbG9yPVwiIzAwNmE3Y1wiIHJlZj17dHlwaW5nU3RyaW5nUmVmNX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gcmVmPXt0eXBpbmdTdHJpbmdSZWY2fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWFpblRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZUN1cnNvciByZWY9e3R5cGluZ0N1cnNvcjN9IC8+XHJcbiAgICAgICAgICAgICAgICA8L1RpdGxlRGl2PlxyXG4gICAgICAgICAgICAgICAgPFRpdGxlRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNYWluVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2xvclNwYW4gY29sb3I9XCIjNjgwMDhhXCIgcmVmPXt0eXBpbmdTdHJpbmdSZWY3fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiByZWY9e3R5cGluZ1N0cmluZ1JlZjh9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NYWluVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlQ3Vyc29yIHJlZj17dHlwaW5nQ3Vyc29yNH0gLz5cclxuICAgICAgICAgICAgICAgIDwvVGl0bGVEaXY+XHJcbiAgICAgICAgICAgIDwvTWFpblNlY3Rpb24+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluaXQ7XHJcbiIsIi8vIGltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcclxuLy8gaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbi8vIGltcG9ydCB7IG1heFdpZHRoIH0gZnJvbSAnLi4vc3R5bGUvc3R5bGUnO1xyXG5cclxuLy8gY29uc3QgU3R5ZWxkRGl2MiA9IHN0eWxlZC5kaXZgXHJcbi8vICAgICBtYXJnaW46IDAgMzJweDtcclxuLy8gICAgIHBhZGRpbmctYm90dG9tOiAxN3B4O1xyXG4vLyBgO1xyXG5cclxuLy8gaW50ZXJmYWNlIElTdHlsZWREaXYzIHtcclxuLy8gICAgIGRpcmVjdGlvbj86IHN0cmluZzsgLy8gdHJ1ZeuptCDsmrDsuKEsIOq3uCDsmbgg7KKM7LihXHJcbi8vICAgICBpbm5lcldpZHRoOiBudW1iZXI7XHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IFN0eWVsZERpdjMgPSBzdHlsZWQuZGl2YFxyXG4vLyAgICAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XHJcbi8vICAgICAkeyhwcm9wczogSVN0eWxlZERpdjMpID0+IHtcclxuLy8gICAgICAgICBpZiAocHJvcHMuaW5uZXJXaWR0aCA8IG1heFdpZHRoKSB7XHJcbi8vICAgICAgICAgICAgIHJldHVybiBgXHJcbi8vICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICAgICAgICAgIGA7XHJcbi8vICAgICAgICAgfSBlbHNlIGlmIChwcm9wcy5kaXJlY3Rpb24gPT09ICd0cnVlJykge1xyXG4vLyAgICAgICAgICAgICByZXR1cm4gYFxyXG4vLyAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbi8vICAgICAgICAgICAgIGA7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfX1cclxuLy8gYDtcclxuXHJcbi8vIGNvbnN0IFN0eWxlZERpdjQgPSBzdHlsZWQuZGl2YFxyXG4vLyAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuLy8gICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4vLyAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuLy8gICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4vLyAgICAgcGFkZGluZzogMTJweDtcclxuLy8gICAgIG1hcmdpbjogNDNweCAyN3B4O1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuLy8gYDtcclxuXHJcbi8vIGNvbnN0IFN0eWxlZERpdjUgPSBzdHlsZWQuZGl2YFxyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgdG9wOiAtNDFweDtcclxuLy8gICAgIGxlZnQ6IC00MXB4O1xyXG4vLyAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTI1ZGVnKTtcclxuLy8gYDtcclxuXHJcbi8vIGNvbnN0IFN0eWxlZERpdjYgPSBzdHlsZWQuZGl2YFxyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgdG9wOiAtNDFweDtcclxuLy8gICAgIHJpZ2h0OiAtNDFweDtcclxuLy8gICAgIHRyYW5zZm9ybTogcm90YXRlKDI1ZGVnKTtcclxuLy8gYDtcclxuXHJcbi8vIGNvbnN0IFN0eWxlZFNwYW4xID0gc3R5bGVkLnNwYW5gXHJcbi8vICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkU3BhbjIgPSBzdHlsZWQuc3BhbmBcclxuLy8gICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjYzI2NTVhO1xyXG4vLyAgICAgY29sb3I6ICNjMjY1NWE7XHJcbi8vIGA7XHJcblxyXG4vLyBpbnRlcmZhY2UgSUludHJvIHtcclxuLy8gICAgIGlubmVyV2lkdGg6IG51bWJlcjtcclxuLy8gICAgIHRpdGxlOiBzdHJpbmc7XHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IEludHJvOiBSZWFjdC5GQzxJSW50cm8+ID0gKHsgaW5uZXJXaWR0aCwgdGl0bGUgfSk6IEpTWC5FbGVtZW50ID0+IHtcclxuLy8gICAgIGNvbnN0IGJveEFycmF5MSA9IFtcclxuLy8gICAgICAgICB7IHRpdGxlOiAn7J2066aEJywgZGVzY3JpcHRpb246ICfquYDshLHssKwnIH0sXHJcbi8vICAgICAgICAgeyB0aXRsZTogJ+yDneuFhOyblOydvCcsIGRlc2NyaXB0aW9uOiAnOTQuMTIuMDknIH0sXHJcbi8vICAgICBdO1xyXG4vLyAgICAgY29uc3QgYm94QXJyYXkyID0gW1xyXG4vLyAgICAgICAgIHsgdGl0bGU6ICfsnbTrqZTsnbwnLCBkZXNjcmlwdGlvbjogJ3RqZGNrc2RsMDBAbmF2ZXIuY29tJyB9LFxyXG4vLyAgICAgICAgIHsgdGl0bGU6ICfsl7Drnb3sspgnLCBkZXNjcmlwdGlvbjogJzAxMC0zMzYxLTM2MzMnIH0sXHJcbi8vICAgICBdO1xyXG4vLyAgICAgY29uc3QgYm94QXJyYXkzID0gW1xyXG4vLyAgICAgICAgIHsgdGl0bGU6ICftlZnqtZAnLCBkZXNjcmlwdGlvbjogJ+2VnOyWkeuMgCBFUklDQScgfSxcclxuLy8gICAgICAgICB7IHRpdGxlOiAn7KO87KCE6rO1JywgZGVzY3JpcHRpb246ICfsnZHsmqnsiJjtlZknIH0sXHJcbi8vICAgICAgICAgeyB0aXRsZTogJ+u2gOyghOqztScsIGRlc2NyaXB0aW9uOiAn7Lu07ZOo7YSw6rO17ZWZJyB9LFxyXG4vLyAgICAgXTtcclxuLy8gICAgIGNvbnN0IGJveEFycmF5NCA9IFtcclxuLy8gICAgICAgICB7IHRpdGxlOiAn6rK966ClJywgZGVzY3JpcHRpb246ICcx64WEIDPqsJzsm5QnIH0sXHJcbi8vICAgICAgICAgeyB0aXRsZTogJ+q4sOyIoOu2hOyVvCcsIGRlc2NyaXB0aW9uOiAnRkUvQkUg7Ju5IOqwnOuwnCcgfSxcclxuLy8gICAgIF07XHJcblxyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICA8QmFzZSB0aXRsZT17dGl0bGV9IGJhY2tncm91bmRDb2xvcj17JyNBNUJBQTgnfT5cclxuLy8gICAgICAgICAgICAgPFN0eWVsZERpdjI+XHJcbi8vICAgICAgICAgICAgICAgICA8U3R5ZWxkRGl2MyBpbm5lcldpZHRoPXtpbm5lcldpZHRofT5cclxuLy8gICAgICAgICAgICAgICAgICAgICB7Ym94QXJyYXkxLm1hcCgoYm94KSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRGl2NCBrZXk9e2JveC5kZXNjcmlwdGlvbn0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4xPntib3guZGVzY3JpcHRpb259PC9TdHlsZWRTcGFuMT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRGl2NT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4yPntib3gudGl0bGV9PC9TdHlsZWRTcGFuMj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZERpdjU+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZERpdjQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbi8vICAgICAgICAgICAgICAgICA8L1N0eWVsZERpdjM+XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgPFN0eWVsZERpdjMgaW5uZXJXaWR0aD17aW5uZXJXaWR0aH0gZGlyZWN0aW9uPXsndHJ1ZSd9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHtib3hBcnJheTIubWFwKChib3gpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXY0IGtleT17Ym94LmRlc2NyaXB0aW9ufT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjE+e2JveC5kZXNjcmlwdGlvbn08L1N0eWxlZFNwYW4xPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXY2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjI+e2JveC50aXRsZX08L1N0eWxlZFNwYW4yPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2Nj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2ND5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICB9KX1cclxuLy8gICAgICAgICAgICAgICAgIDwvU3R5ZWxkRGl2Mz5cclxuXHJcbi8vICAgICAgICAgICAgICAgICA8U3R5ZWxkRGl2MyBpbm5lcldpZHRoPXtpbm5lcldpZHRofT5cclxuLy8gICAgICAgICAgICAgICAgICAgICB7Ym94QXJyYXkzLm1hcCgoYm94KSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRGl2NCBrZXk9e2JveC5kZXNjcmlwdGlvbn0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4xPntib3guZGVzY3JpcHRpb259PC9TdHlsZWRTcGFuMT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRGl2NT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4yPntib3gudGl0bGV9PC9TdHlsZWRTcGFuMj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZERpdjU+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZERpdjQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbi8vICAgICAgICAgICAgICAgICA8L1N0eWVsZERpdjM+XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgPFN0eWVsZERpdjMgaW5uZXJXaWR0aD17aW5uZXJXaWR0aH0gZGlyZWN0aW9uPXsndHJ1ZSd9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHtib3hBcnJheTQubWFwKChib3gpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXY0IGtleT17Ym94LmRlc2NyaXB0aW9ufT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjE+e2JveC5kZXNjcmlwdGlvbn08L1N0eWxlZFNwYW4xPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXY2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjI+e2JveC50aXRsZX08L1N0eWxlZFNwYW4yPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2Nj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2ND5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICB9KX1cclxuLy8gICAgICAgICAgICAgICAgIDwvU3R5ZWxkRGl2Mz5cclxuLy8gICAgICAgICAgICAgPC9TdHllbGREaXYyPlxyXG4vLyAgICAgICAgIDwvQmFzZT5cclxuLy8gICAgICk7XHJcbi8vIH07XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBJbnRybztcclxuXHJcbmltcG9ydCB7IHVzZU9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBpbmRleFN0b3JlIGZyb20gJy4uL21vZHVsZXMvaW5kZXhTdG9yZSc7XHJcbmltcG9ydCB7IG1heFdpZHRoIH0gZnJvbSAnLi4vc3R5bGUvc3R5bGUnO1xyXG5pbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xyXG5cclxuY29uc3QgQm94U2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gICAgbWFyZ2luOiAwIDMycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTdweDtcclxuYDtcclxuXHJcbmludGVyZmFjZSBJQm94Q29udGFpbmVyIHtcclxuICAgIGRpcmVjdGlvbj86IHN0cmluZzsgLy8gdHJ1ZeuptCDsmrDsuKEsIOq3uCDsmbgg7KKM7LihXHJcbiAgICBpbm5lcldpZHRoOiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IEJveENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcclxuICAgICR7KHByb3BzOiBJQm94Q29udGFpbmVyKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb3BzLmlubmVyV2lkdGggPCBtYXhXaWR0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocHJvcHMuZGlyZWN0aW9uID09PSAndHJ1ZScpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgIH1cclxuICAgIH19XHJcbmA7XHJcblxyXG5jb25zdCBCb3hNYWluRGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDE4cHg7XHJcbiAgICBtYXJnaW46IDQzcHggMjdweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAycHggNHB4IDRweCAjYzhjOGM4IGluc2V0LCAtMnB4IC00cHggNHB4ICNjOGM4YzggaW5zZXQ7XHJcbmA7XHJcblxyXG5jb25zdCBCb3hMZWZ0RGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogY2FsYygtMzhweCAtIDAuOHZ3KTtcclxuICAgIGxlZnQ6IGNhbGMoLTM4cHggLSAwLjh2dyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjVkZWcpO1xyXG5gO1xyXG5cclxuY29uc3QgQm94UmlnaHREaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiBjYWxjKC0zOHB4IC0gMC44dncpO1xyXG4gICAgcmlnaHQ6IGNhbGMoLTM4cHggLSAwLjh2dyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNWRlZyk7XHJcbmA7XHJcblxyXG5jb25zdCBCb3hEZXNjcmlwdGlvbiA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZm9udC1zaXplOiBjYWxjKDI4cHggKyAwLjR2dyk7XHJcbmA7XHJcblxyXG5jb25zdCBCb3hUaXRsZSA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZm9udC1zaXplOiBjYWxjKDIzcHggKyAwLjR2dyk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjYzI2NTVhO1xyXG4gICAgY29sb3I6ICNjMjY1NWE7XHJcbmA7XHJcblxyXG5jb25zdCBJbnRybyA9ICgpOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICAvLyBtb2J4XHJcbiAgICBjb25zdCB7IGJhc2VTdG9yZSB9ID0gaW5kZXhTdG9yZSgpO1xyXG5cclxuICAgIC8vIHZhcmlhYmxlXHJcbiAgICBjb25zdCBib3hBcnJheTEgPSBbXHJcbiAgICAgICAgeyB0aXRsZTogJ+ydtOumhCcsIGRlc2NyaXB0aW9uOiAn6rmA7ISx7LCsJyB9LFxyXG4gICAgICAgIHsgdGl0bGU6ICfsg53rhYTsm5TsnbwnLCBkZXNjcmlwdGlvbjogJzk0LjEyLjA5JyB9LFxyXG4gICAgXTtcclxuICAgIGNvbnN0IGJveEFycmF5MiA9IFtcclxuICAgICAgICB7IHRpdGxlOiAn7J2066mU7J28JywgZGVzY3JpcHRpb246ICd0amRja3NkbDAwQG5hdmVyLmNvbScgfSxcclxuICAgICAgICB7IHRpdGxlOiAn7Jew65297LKYJywgZGVzY3JpcHRpb246ICcwMTAtMzM2MS0zNjMzJyB9LFxyXG4gICAgXTtcclxuICAgIGNvbnN0IGJveEFycmF5MyA9IFtcclxuICAgICAgICB7IHRpdGxlOiAn7ZWZ6rWQJywgZGVzY3JpcHRpb246ICftlZzslpHrjIAgRVJJQ0EnIH0sXHJcbiAgICAgICAgeyB0aXRsZTogJ+yjvOyghOqztScsIGRlc2NyaXB0aW9uOiAn7J2R7Jqp7IiY7ZWZJyB9LFxyXG4gICAgICAgIHsgdGl0bGU6ICfrtoDsoITqs7UnLCBkZXNjcmlwdGlvbjogJ+y7tO2TqO2EsOqzte2VmScgfSxcclxuICAgIF07XHJcbiAgICBjb25zdCBib3hBcnJheTQgPSBbXHJcbiAgICAgICAgeyB0aXRsZTogJ+qyveugpScsIGRlc2NyaXB0aW9uOiAnMeuFhCAz6rCc7JuUJyB9LFxyXG4gICAgICAgIHsgdGl0bGU6ICfquLDsiKDrtoTslbwnLCBkZXNjcmlwdGlvbjogJ0ZFL0JFIOybuSDqsJzrsJwnIH0sXHJcbiAgICBdO1xyXG5cclxuICAgIHJldHVybiB1c2VPYnNlcnZlcigoKSA9PiAoXHJcbiAgICAgICAgPEJhc2UgY29udGFpbmVyTm89ezF9PlxyXG4gICAgICAgICAgICA8Qm94U2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxCb3hDb250YWluZXIgaW5uZXJXaWR0aD17YmFzZVN0b3JlLmlubmVyV2lkdGh9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtib3hBcnJheTEubWFwKChib3gpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hNYWluRGl2IGtleT17Ym94LmRlc2NyaXB0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94RGVzY3JpcHRpb24+e2JveC5kZXNjcmlwdGlvbn08L0JveERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hMZWZ0RGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94VGl0bGU+e2JveC50aXRsZX08L0JveFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94TGVmdERpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94TWFpbkRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvQm94Q29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxCb3hDb250YWluZXIgaW5uZXJXaWR0aD17YmFzZVN0b3JlLmlubmVyV2lkdGh9IGRpcmVjdGlvbj17J3RydWUnfT5cclxuICAgICAgICAgICAgICAgICAgICB7Ym94QXJyYXkyLm1hcCgoYm94KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94TWFpbkRpdiBrZXk9e2JveC5kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveERlc2NyaXB0aW9uPntib3guZGVzY3JpcHRpb259PC9Cb3hEZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94UmlnaHREaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hUaXRsZT57Ym94LnRpdGxlfTwvQm94VGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3hSaWdodERpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94TWFpbkRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvQm94Q29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxCb3hDb250YWluZXIgaW5uZXJXaWR0aD17YmFzZVN0b3JlLmlubmVyV2lkdGh9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtib3hBcnJheTMubWFwKChib3gpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hNYWluRGl2IGtleT17Ym94LmRlc2NyaXB0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94RGVzY3JpcHRpb24+e2JveC5kZXNjcmlwdGlvbn08L0JveERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hMZWZ0RGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94VGl0bGU+e2JveC50aXRsZX08L0JveFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94TGVmdERpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94TWFpbkRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvQm94Q29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxCb3hDb250YWluZXIgaW5uZXJXaWR0aD17YmFzZVN0b3JlLmlubmVyV2lkdGh9IGRpcmVjdGlvbj17J3RydWUnfT5cclxuICAgICAgICAgICAgICAgICAgICB7Ym94QXJyYXk0Lm1hcCgoYm94KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94TWFpbkRpdiBrZXk9e2JveC5kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveERlc2NyaXB0aW9uPntib3guZGVzY3JpcHRpb259PC9Cb3hEZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94UmlnaHREaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hUaXRsZT57Ym94LnRpdGxlfTwvQm94VGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3hSaWdodERpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94TWFpbkRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvQm94Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L0JveFNlY3Rpb24+XHJcbiAgICAgICAgPC9CYXNlPlxyXG4gICAgKSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnRybztcclxuIiwiLy8gaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuLy8gaW1wb3J0IHsgbWF4V2lkdGggfSBmcm9tICcuLi9zdHlsZS9zdHlsZSc7XHJcblxyXG4vLyBjb25zdCBTdHlsZWRTZWN0aW9uMSA9IHN0eWxlZC5zZWN0aW9uYFxyXG4vLyAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvaW1hZ2UvbWFpbkltYWdlLmpwZycpO1xyXG4vLyAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuLy8gICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbi8vIGA7XHJcblxyXG4vLyBjb25zdCBTdHlsZWREaXYxID0gc3R5bGVkLmRpdmBcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICAgcGFkZGluZzogODJweCAwO1xyXG4vLyBgO1xyXG5cclxuLy8gaW50ZXJmYWNlIElTdHllbGREaXYyIHtcclxuLy8gICAgIGlubmVyV2lkdGg6IG51bWJlcjtcclxuLy8gfVxyXG5cclxuLy8gY29uc3QgU3R5bGVkRGl2MiA9IHN0eWxlZC5kaXZgXHJcbi8vICAgICBkaXNwbGF5OiAkeyhwcm9wczogSVN0eWVsZERpdjIpID0+IChwcm9wcy5pbm5lcldpZHRoID49IG1heFdpZHRoID8gJ2Jsb2NrJyA6ICdub25lJyl9O1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgbWFyZ2luOiA2OHB4IDA7XHJcbi8vIGA7XHJcblxyXG4vLyBjb25zdCBkaXYzS2V5RnJhbWUxID0ga2V5ZnJhbWVzYFxyXG4vLyAgICAgNTAlIHtcclxuLy8gICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xyXG4vLyAgICAgfVxyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkRGl2MyA9IHN0eWxlZC5kaXZgXHJcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4vLyAgICAgJjpob3ZlciB7XHJcbi8vICAgICAgICAgYW5pbWF0aW9uOiAxLjhzICR7ZGl2M0tleUZyYW1lMX0gaW5maW5pdGU7XHJcbi8vICAgICB9XHJcbi8vIGA7XHJcblxyXG4vLyBjb25zdCBTdHlsZWREaXY0ID0gc3R5bGVkLmRpdmBcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICAgd2lkdGg6IDE1MnB4O1xyXG4vLyAgICAgaGVpZ2h0OiAxNTJweDtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNjYWYwYmU7XHJcbi8vICAgICBtYXJnaW46IDE2cHggMzJweDtcclxuLy8gYDtcclxuXHJcbi8vIGNvbnN0IFN0eWxlZERpdjUgPSBzdHlsZWQuZGl2YFxyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkRGl2NiA9IHN0eWxlZC5kaXZgXHJcbi8vICAgICBtYXgtd2lkdGg6ICR7bWF4V2lkdGh9cHg7XHJcbi8vICAgICBtYXJnaW46IDAgYXV0bztcclxuLy8gICAgIHBhZGRpbmc6IDAgMTVweDtcclxuXHJcbi8vICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke21heFdpZHRoICsgNTB9cHgpIHtcclxuLy8gICAgICAgICBtYXJnaW4tYm90dG9tOiA4NHB4O1xyXG4vLyAgICAgfVxyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkVGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4vLyAgICAgZm9udC1zaXplOiAzLjZlbTtcclxuLy8gICAgIGNvbG9yOiAjZmZmO1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuLy8gICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSB7XHJcbi8vICAgICAgICAgZm9udC1zaXplOiA0LjhlbTtcclxuLy8gICAgIH1cclxuLy8gYDtcclxuXHJcbi8vIGNvbnN0IFN0eWxlZFN1YlRpdGxlID0gc3R5bGVkLnNwYW5gXHJcbi8vICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4vLyAgICAgY29sb3I6ICNmZmY7XHJcbi8vIGA7XHJcblxyXG4vLyBjb25zdCBTdHlsZWRIM18xID0gc3R5bGVkLmgzYFxyXG4vLyAgICAgZm9udC1zaXplOiAxLjRlbTtcclxuLy8gICAgIGNvbG9yOiAjNjU4YzU5O1xyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkU3BhbjEgPSBzdHlsZWQuc3BhbmBcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4vLyAgICAgY29sb3I6ICMzYTUyMzM7XHJcbi8vIGA7XHJcblxyXG4vLyBpbnRlcmZhY2UgSU1haW4ge1xyXG4vLyAgICAgaW5uZXJXaWR0aDogbnVtYmVyO1xyXG4vLyAgICAgdGl0bGVBcnJheTogc3RyaW5nW107XHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IE1haW46IFJlYWN0LkZDPElNYWluPiA9ICh7IGlubmVyV2lkdGgsIHRpdGxlQXJyYXkgfSk6IEpTWC5FbGVtZW50ID0+IHtcclxuLy8gICAgIGNvbnN0IG9uQ2xpY2tEaXYzID0gKHRpdGxlOiBzdHJpbmcpID0+IHtcclxuLy8gICAgICAgICBjb25zdCB0aXRsZVNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aXRsZSk7XHJcblxyXG4vLyAgICAgICAgIGlmICh0aXRsZVNlY3Rpb24pIHtcclxuLy8gICAgICAgICAgICAgd2luZG93LnNjcm9sbEJ5KHsgdG9wOiB0aXRsZVNlY3Rpb24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfTtcclxuXHJcbi8vICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgIDxTdHlsZWRTZWN0aW9uMT5cclxuLy8gICAgICAgICAgICAgPFN0eWxlZERpdjY+XHJcbi8vICAgICAgICAgICAgICAgICA8U3R5bGVkRGl2NT5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRGl2MiBpbm5lcldpZHRoPXtpbm5lcldpZHRofT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlQXJyYXkubWFwKCh0aXRsZSkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRGl2MyBrZXk9e3RpdGxlfSBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrRGl2Myh0aXRsZSl9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRGl2ND5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRIM18xPnt0aXRsZX08L1N0eWxlZEgzXzE+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjE+R28g4oaSPC9TdHlsZWRTcGFuMT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXY0PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2Mz5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2Mj5cclxuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZERpdjE+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRUaXRsZT7quYDshLHssKzsnZggUG9ydGZvbGlvPC9TdHlsZWRUaXRsZT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFN1YlRpdGxlPlNpbmNlIDIwMjE8L1N0eWxlZFN1YlRpdGxlPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2MT5cclxuLy8gICAgICAgICAgICAgICAgIDwvU3R5bGVkRGl2NT5cclxuLy8gICAgICAgICAgICAgPC9TdHlsZWREaXY2PlxyXG4vLyAgICAgICAgIDwvU3R5bGVkU2VjdGlvbjE+XHJcbi8vICAgICApO1xyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgTWFpbjtcclxuXHJcbmltcG9ydCB7IHVzZU9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBpbmRleFN0b3JlIGZyb20gJy4uL21vZHVsZXMvaW5kZXhTdG9yZSc7XHJcbmltcG9ydCB7IG1heFdpZHRoIH0gZnJvbSAnLi4vc3R5bGUvc3R5bGUnO1xyXG5pbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xyXG5cclxuY29uc3QgTWVudURpdktleUZyYW1lID0ga2V5ZnJhbWVzYFxyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzAwcHgpIHJvdGF0ZSgwKTtcclxuICAgIH1cclxuXHJcbiAgICA5MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KSByb3RhdGUoNzUwZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgcm90YXRlKDcyMGRlZyk7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBNZW51RGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICBhbmltYXRpb24tbmFtZTogJHtNZW51RGl2S2V5RnJhbWV9O1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcclxuYDtcclxuXHJcbmNvbnN0IE1lbnVTdWJEaXZIb3ZlcktleUZyYW1lID0ga2V5ZnJhbWVzYFxyXG4gICAgNTAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgTWVudVN1YkRpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxNTJweDtcclxuICAgIGhlaWdodDogMTUycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2FmMGJlO1xyXG4gICAgbWFyZ2luOiAxNnB4IDMycHg7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYW5pbWF0aW9uOiAxLjhzICR7TWVudVN1YkRpdkhvdmVyS2V5RnJhbWV9IGluZmluaXRlO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElNZW51U2VjdGlvbiB7XHJcbiAgICBpbm5lcldpZHRoOiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IE1lbnVTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiAkeyhwcm9wczogSU1lbnVTZWN0aW9uKSA9PiAocHJvcHMuaW5uZXJXaWR0aCA+PSBtYXhXaWR0aCA/ICdibG9jaycgOiAnbm9uZScpfTtcclxuYDtcclxuXHJcbmNvbnN0IFRpdGxlU2VjdGlvbktleUZyYW1lID0ga2V5ZnJhbWVzYFxyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0MHB4KTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZnJvbTogdHJhbnNsYXRlWSgwKTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgVGl0bGVTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICBwYWRkaW5nOiAwIDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgYW5pbWF0aW9uLW5hbWU6ICR7VGl0bGVTZWN0aW9uS2V5RnJhbWV9O1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcclxuYDtcclxuXHJcbmNvbnN0IE1haW5UaXRsZSA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IGNhbGMoNTRweCArIDEuNXZ3KTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbmA7XHJcblxyXG5jb25zdCBTdWJUaXRsZSA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IGNhbGMoMjRweCArIDAuNHZ3KTtcclxuYDtcclxuXHJcbmNvbnN0IE1haW4gPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgLy8gbW9ieFxyXG4gICAgY29uc3QgeyBiYXNlU3RvcmUgfSA9IGluZGV4U3RvcmUoKTtcclxuXHJcbiAgICAvLyBvbkNsaWNrXHJcbiAgICBjb25zdCBvbkNsaWNrTWVudURpdiA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50LCBNb3VzZUV2ZW50PiwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbEJ5KHtcclxuICAgICAgICAgICAgdG9wOiBiYXNlU3RvcmUuZ2V0QWNjdW11bGF0ZUNvbXBvbmVudEhlaWdodChpbmRleCkgLSBiYXNlU3RvcmUuc2Nyb2xsWSxcclxuICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdXNlT2JzZXJ2ZXIoKCkgPT4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxCYXNlIGNvbnRhaW5lck5vPXswfT5cclxuICAgICAgICAgICAgICAgIDxNZW51U2VjdGlvbiBpbm5lcldpZHRoPXtiYXNlU3RvcmUuaW5uZXJXaWR0aH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2Jhc2VTdG9yZS50aXRsZUFycmF5Lm1hcCgobWVudSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51RGl2IGtleT17bWVudX0gb25DbGljaz17KGUpID0+IG9uQ2xpY2tNZW51RGl2KGUsIGluZGV4KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51U3ViRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnttZW51fTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5HbyDihpI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudVN1YkRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L01lbnVTZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDxUaXRsZVNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1haW5UaXRsZT7quYDshLHssKzsnZggUG9ydGZvbGlvPC9NYWluVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN1YlRpdGxlPlNpbmNlIDIwMjE8L1N1YlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPC9UaXRsZVNlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvQmFzZT5cclxuICAgICAgICA8Lz5cclxuICAgICkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcclxuXHJcbmNvbnN0IFByb2plY3RzID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJhc2UgY29udGFpbmVyTm89ezV9PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHA+UHJvamVjdHMgcGFnZTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9CYXNlPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgTWFpblNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMCAyMnB4O1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3MHB4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDgwcHg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDg0MHB4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiA3MjBweDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBCb3hDb3RhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogMjQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1NHB4O1xyXG5gO1xyXG5cclxuY29uc3QgVGl0bGVEaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgcGFkZGluZzogOHB4IDA7XHJcbmA7XHJcblxyXG5jb25zdCBJbWFnZURpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDRweCA0cHggI2M4YzhjOCBpbnNldCwgLTJweCAtNHB4IDRweCAjYzhjOGM4IGluc2V0O1xyXG5gO1xyXG5cclxuY29uc3QgQm94VGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxLjZlbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG5gO1xyXG5cclxuY29uc3QgQm94SW1hZ2UgPSBzdHlsZWQuaW1nYGA7XHJcblxyXG5jb25zdCBTa2lsbHMgPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgY29uc3Qgc2tpbGxzQXJyYXkgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0ZFJyxcclxuICAgICAgICAgICAgc3JjOiAnL2ltYWdlL2ZlLlBORycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnRGV2b3BzJyxcclxuICAgICAgICAgICAgc3JjOiAnL2ltYWdlL2Rldm9wcy5QTkcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0RldmVsb3BtZW50JyxcclxuICAgICAgICAgICAgc3JjOiAnL2ltYWdlL2RldmVsb3BtZW50LlBORycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQkUnLFxyXG4gICAgICAgICAgICBzcmM6ICcvaW1hZ2UvYmUuUE5HJyxcclxuICAgICAgICB9LFxyXG4gICAgXTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCYXNlIGNvbnRhaW5lck5vPXszfT5cclxuICAgICAgICAgICAgPE1haW5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAge3NraWxsc0FycmF5Lm1hcCgoc2tpbGwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94Q290YWluZXIga2V5PXtza2lsbC50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGl0bGVEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveFRpdGxlPntza2lsbC50aXRsZX08L0JveFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UaXRsZURpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZURpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94SW1hZ2Ugc3JjPXtza2lsbC5zcmN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ltYWdlRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveENvdGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9NYWluU2VjdGlvbj5cclxuICAgICAgICA8L0Jhc2U+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2tpbGxzO1xyXG4iLCIvLyBpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XHJcbi8vIGltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkRGl2MSA9IHN0eWxlZC5kaXZgXHJcbi8vICAgICBtYXJnaW46IDAgMjRweDtcclxuLy8gICAgIHBhZGRpbmc6IDIycHggMCA1M3B4IDA7XHJcbi8vICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuLy8gYDtcclxuXHJcbi8vIGNvbnN0IFN0eWxlZERpdjIgPSBzdHlsZWQuZGl2YFxyXG4vLyAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyAgICAgcGFkZGluZzogMzJweCAyNHB4O1xyXG4vLyAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuLy8gYDtcclxuXHJcbi8vIGNvbnN0IFN0eWxlZFNwYW4xID0gc3R5bGVkLnNwYW5gXHJcbi8vICAgICBkaXNwbGF5OiBibG9jaztcclxuLy8gICAgIGNvbG9yOiAjZmZmO1xyXG4vLyBgO1xyXG5cclxuLy8gY29uc3QgU3R5bGVkU3BhbjIgPSBzdHlsZWQuc3BhbmBcclxuLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgICAgY29sb3I6ICNmZmY7XHJcbi8vIGA7XHJcblxyXG4vLyBpbnRlcmZhY2UgSVdoeUl0IHtcclxuLy8gICAgIHRpdGxlOiBzdHJpbmc7XHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IFdoeUl0OiBSZWFjdC5GQzxJV2h5SXQ+ID0gKHsgdGl0bGUgfSk6IEpTWC5FbGVtZW50ID0+IHtcclxuLy8gICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgPEJhc2UgdGl0bGU9e3RpdGxlfSBiYWNrZ3JvdW5kQ29sb3I9XCIjNkE5MTk0XCI+XHJcbi8vICAgICAgICAgICAgIDxTdHlsZWREaXYxPlxyXG4vLyAgICAgICAgICAgICAgICAgPFN0eWxlZERpdjI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4xPklU66W8IOyZnCDsi5zsnpHtlZjqsowg65CY7JeI7J2E6rmMPzwvU3R5bGVkU3BhbjE+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4yPuydtOufsCDsnbTsnKAg65WM66y47J2064ukLiDsnbTrn7Ag7J207JygIOuVjOusuOydtOuLpC4g7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuPC9TdHlsZWRTcGFuMj5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjI+7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuPC9TdHlsZWRTcGFuMj5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjI+7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuPC9TdHlsZWRTcGFuMj5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjI+7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuPC9TdHlsZWRTcGFuMj5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjI+7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuPC9TdHlsZWRTcGFuMj5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjI+7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuPC9TdHlsZWRTcGFuMj5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjI+7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuIOydtOufsCDsnbTsnKAg65WM66y47J2064ukLiDsnbTrn7Ag7J207JygIOuVjOusuOydtOuLpC48L1N0eWxlZFNwYW4yPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMj7snbTrn7Ag7J207JygIOuVjOusuOydtOuLpC4g7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuIOydtOufsCDsnbTsnKAg65WM66y47J2064ukLjwvU3R5bGVkU3BhbjI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNwYW4yPuydtOufsCDsnbTsnKAg65WM66y47J2064ukLiDsnbTrn7Ag7J207JygIOuVjOusuOydtOuLpC4g7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuPC9TdHlsZWRTcGFuMj5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8U3R5bGVkU3BhbjI+7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuIOydtOufsCDsnbTsnKAg65WM66y47J2064ukLiDsnbTrn7Ag7J207JygIOuVjOusuOydtOuLpC48L1N0eWxlZFNwYW4yPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWRTcGFuMj7snbTrn7Ag7J207JygIOuVjOusuOydtOuLpC4g7J2065+wIOydtOycoCDrlYzrrLjsnbTri6QuIOydtOufsCDsnbTsnKAg65WM66y47J2064ukLjwvU3R5bGVkU3BhbjI+XHJcbi8vICAgICAgICAgICAgICAgICA8L1N0eWxlZERpdjI+XHJcbi8vICAgICAgICAgICAgIDwvU3R5bGVkRGl2MT5cclxuLy8gICAgICAgICA8L0Jhc2U+XHJcbi8vICAgICApO1xyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgV2h5SXQ7XHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XHJcbmltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgQ29tbW9uU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzEwcHgpIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgUXVlc3Rpb25TZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICBwYWRkaW5nOiAwIDIwcHggMCAyMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5gO1xyXG5cclxuY29uc3QgQW5zd2VyU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gICAgcGFkZGluZzogMCAyMHB4IDAgMjBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuYDtcclxuXHJcbmNvbnN0IHF1ZXN0aW9uTnVtYmVyS2V5ZnJhbWUgPSBrZXlmcmFtZXNgXHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICA1MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgUXVlc3Rpb25EaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW46IDI0cHggMDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBib3gtc2hhZG93OiAycHggNHB4IDRweCAjYzhjOGM4IGluc2V0LCAtMnB4IC00cHggNHB4ICNjOGM4YzggaW5zZXQ7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgJiA+IGRpdiA+IHNwYW46Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBhbmltYXRpb24tbmFtZTogJHtxdWVzdGlvbk51bWJlcktleWZyYW1lfTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcclxuICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgUXVlc3Rpb25TdWJEaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBBbnN3ZXJEaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW46IDI0cHggMDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgIG1pbi13aWR0aDogY2FsYygyMjRweCArIDE1dncpO1xyXG4gICAgbWluLWhlaWdodDogY2FsYygyMjRweCArIDE1dmgpO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDRweCA0cHggI2M4YzhjOCBpbnNldCwgLTJweCAtNHB4IDRweCAjYzhjOGM4IGluc2V0O1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElRdWVzdGlvblRpdGxlIHtcclxuICAgIGNvbG9yOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IFF1ZXN0aW9uVGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IGNhbGMoMThweCArIDAuMnZ3KTtcclxuICAgIGNvbG9yOiAkeyhwcm9wczogSVF1ZXN0aW9uVGl0bGUpID0+IHByb3BzLmNvbG9yfTtcclxuYDtcclxuXHJcbmNvbnN0IEFuc3dlclRpdGxlID0gc3R5bGVkLnNwYW5gXHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElRdWVzdGlvbk51bWJlciB7XHJcbiAgICBpc0NsaWNrOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBRdWVzdGlvbk51bWJlciA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogY2FsYygyNHB4ICsgMC42dncpO1xyXG4gICAgY29sb3I6ICNmMTVlNWU7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG5cclxuICAgIGFuaW1hdGlvbi1uYW1lOiAkeyhwcm9wczogSVF1ZXN0aW9uTnVtYmVyKSA9PiAocHJvcHMuaXNDbGljayA/IHF1ZXN0aW9uTnVtYmVyS2V5ZnJhbWUgOiAnJyl9O1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG5gO1xyXG5cclxuY29uc3QgV2h5SXQgPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgLy8gc3RhdGVcclxuICAgIGNvbnN0IFtxdWVzdGlvbkluZGV4LCBzZXRRdWVzdGlvbkluZGV4XSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oLTEpO1xyXG4gICAgY29uc3QgW3R5cGluZ1RpbWVyLCBzZXRUeXBpbmdUaW1lcl0gPSBSZWFjdC51c2VTdGF0ZTxOb2RlSlMuVGltZXI+KCk7XHJcblxyXG4gICAgLy8gcmVmXHJcbiAgICBjb25zdCBhbnN3ZXJUaXRsZVJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MU3BhbkVsZW1lbnQ+KCk7XHJcbiAgICBjb25zdCBhbnN3ZXJEaXZSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KCk7XHJcblxyXG4gICAgLy8gdmFyaWFibGVcclxuICAgIGNvbnN0IHFuYUFycmF5ID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcXVlc3Rpb246ICdJVOyXkCDqtIDsi6zqsIDsp4Qg7Iuc6riwJyxcclxuICAgICAgICAgICAgYW5zd2VyOiAnSVTsl5Ag6rSA7Ius6rCA7KeEIOyLnOq4sCcsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBxdWVzdGlvbjogJ0lU7JeQIOq0gOyLrOydhCDqsIDsp4Dqsowg65CcIOqzhOq4sCcsXHJcbiAgICAgICAgICAgIGFuc3dlcjogYElU7JeQIOq0gOyLrOydhCDqsIDsp4Dqsowg65CcIOqzhOq4sFxcblxcbuOFjuOFjuOFjuOFjmAsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBxdWVzdGlvbjogJ+qwnOuwnOyekOulvCDshKDtg53tlZwg7J207JygJyxcclxuICAgICAgICAgICAgYW5zd2VyOiAn6rCc67Cc7J6Q66W8IOyEoO2Dne2VnCDsnbTsnKAnLFxyXG4gICAgICAgIH0sXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IHF1ZXN0aW9uQ29sb3IgPSBbJyM4RkMxNUInLCAnI0YxOTAyMycsICcjNjNDMUE5J107XHJcblxyXG4gICAgLy8gb25DbGlja1xyXG4gICAgY29uc3Qgb25DbGlja1F1ZXN0aW9uID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICBzZXRRdWVzdGlvbkluZGV4KGluZGV4KTsgLy8g7KeI66y4IGluZGV4XHJcbiAgICAgICAgY29uc3QgdGltZSA9IDUwOyAvLyDquIDsnpAg64KY7Jik64qUIOyGjeuPhFxyXG5cclxuICAgICAgICBpZiAoYW5zd2VyVGl0bGVSZWYuY3VycmVudCAmJiBhbnN3ZXJEaXZSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICBsZXQgY2hhckluZGV4ID0gMDtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0eXBpbmdUaW1lcik7IC8vIOq4sOyhtCBpbnRlcnZhbCDsooXro4xcclxuICAgICAgICAgICAgYW5zd2VyVGl0bGVSZWYuY3VycmVudC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgYW5zd2VyVGl0bGVSZWYuY3VycmVudC5zdHlsZS5jb2xvciA9IHF1ZXN0aW9uQ29sb3JbaW5kZXhdO1xyXG4gICAgICAgICAgICBhbnN3ZXJEaXZSZWYuY3VycmVudC5zdHlsZS5ib3hTaGFkb3cgPSBgMnB4IDRweCA0cHggJHtxdWVzdGlvbkNvbG9yW2luZGV4XX0gaW5zZXQsIC0ycHggLTRweCA0cHggJHtxdWVzdGlvbkNvbG9yW2luZGV4XX0gaW5zZXRgO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdHlwaW5nSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyDtg4DsnbTtlZEg7LKY66asXHJcbiAgICAgICAgICAgICAgICBpZiAocW5hQXJyYXlbaW5kZXhdLmFuc3dlcltjaGFySW5kZXhdID09PSAnXFxuJykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOqwnO2WiSDrrLjsnpDsnbwg6rK97JqwXHJcbiAgICAgICAgICAgICAgICAgICAgYW5zd2VyVGl0bGVSZWYuY3VycmVudC5pbm5lckhUTUwgKz0gJzxiciAvPic7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhckluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOqwnO2WiSDrrLjsnpDqsIAg7JWE64uQIOqyveyasFxyXG4gICAgICAgICAgICAgICAgICAgIGFuc3dlclRpdGxlUmVmLmN1cnJlbnQuaW5uZXJIVE1MICs9IHFuYUFycmF5W2luZGV4XS5hbnN3ZXJbY2hhckluZGV4KytdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCB0aW1lKTtcclxuXHJcbiAgICAgICAgICAgIHNldFR5cGluZ1RpbWVyKHR5cGluZ0ludGVydmFsKTsgLy8g7ZiE7J6sIGludGVydmFsIOuTseuhnVxyXG5cclxuICAgICAgICAgICAgLy8g66qo65OgIOusuOyekOqwgCDsspjrpqzrkJjripQg7Iuc6rCE7JeQIOuPhOuLrO2VmOuptCBpbnRlcnZhbCDsooXro4xcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHR5cGluZ0ludGVydmFsKTtcclxuICAgICAgICAgICAgfSwgcW5hQXJyYXlbaW5kZXhdLmFuc3dlci5sZW5ndGggKiB0aW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJhc2UgY29udGFpbmVyTm89ezJ9PlxyXG4gICAgICAgICAgICA8Q29tbW9uU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxRdWVzdGlvblNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAge3FuYUFycmF5Lm1hcCgocW5hLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFF1ZXN0aW9uRGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtxbmEuYW5zd2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2tRdWVzdGlvbihpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UXVlc3Rpb25TdWJEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxRdWVzdGlvbk51bWJlciBpc0NsaWNrPXtxdWVzdGlvbkluZGV4ID09PSBpbmRleH0+UXtpbmRleCArIDF9LiA8L1F1ZXN0aW9uTnVtYmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UXVlc3Rpb25UaXRsZSBjb2xvcj17cXVlc3Rpb25Db2xvcltpbmRleF19PntxbmEucXVlc3Rpb259PC9RdWVzdGlvblRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUXVlc3Rpb25TdWJEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1F1ZXN0aW9uRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9RdWVzdGlvblNlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgPEFuc3dlclNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFuc3dlckRpdiByZWY9e2Fuc3dlckRpdlJlZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbnN3ZXJUaXRsZSByZWY9e2Fuc3dlclRpdGxlUmVmfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtxdWVzdGlvbkluZGV4ID49IDAgPyAnJyA6ICfqtoHquIjtlZjsi6Ag7KeI66y47J2EIOyEoO2Dne2VtOyjvOyEuOyalC4nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Fuc3dlclRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQW5zd2VyRGl2PlxyXG4gICAgICAgICAgICAgICAgPC9BbnN3ZXJTZWN0aW9uPlxyXG4gICAgICAgICAgICA8L0NvbW1vblNlY3Rpb24+XHJcbiAgICAgICAgPC9CYXNlPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdoeUl0O1xyXG4iLCJpbXBvcnQgeyBvYnNlcnZhYmxlIH0gZnJvbSAnbW9ieCc7XHJcblxyXG5jb25zdCBCYXNlU3RvcmUgPSBvYnNlcnZhYmxlKHtcclxuICAgIC8vIHN0YXRlXHJcbiAgICB0aXRsZUFycmF5OiBbJ01haW4nLCAnSW50cm8nLCAnV2h5IEl0JywgJ1NraWxscycsICdDYXJlZXInLCAnUHJvamVjdHMnLCAnTW9yZSddLFxyXG4gICAgY29tcG9uZW50SGVpZ2h0czogWzAsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgaW5uZXJXaWR0aDogMCxcclxuICAgIHNjcm9sbFk6IDAsXHJcblxyXG4gICAgc2V0Q29tcG9uZW50SGVpZ2h0KGluZGV4LCBoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudEhlaWdodHNbaW5kZXhdID0gaGVpZ2h0O1xyXG4gICAgfSxcclxuXHJcbiAgICBzZXRJbm5lcldpZHRoKGlubmVyV2lkdGgpIHtcclxuICAgICAgICB0aGlzLmlubmVyV2lkdGggPSBpbm5lcldpZHRoO1xyXG4gICAgfSxcclxuXHJcbiAgICBzZXRTY3JvbGxZKHNjcm9sbFkpIHtcclxuICAgICAgICB0aGlzLnNjcm9sbFkgPSBzY3JvbGxZO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXRBY2N1bXVsYXRlQ29tcG9uZW50SGVpZ2h0KGluZGV4KSB7XHJcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGV4OyBpKyspIHtcclxuICAgICAgICAgICAgY291bnQgKz0gdGhpcy5jb21wb25lbnRIZWlnaHRzW2ldO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNvdW50O1xyXG4gICAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYXNlU3RvcmU7XHJcbiIsImltcG9ydCBpbml0U3RvcmUgZnJvbSAnLi9pbml0U3RvcmUnO1xyXG5pbXBvcnQgYmFzZVN0b3JlIGZyb20gJy4vYmFzZVN0b3JlJztcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtbW9kdWxlLWJvdW5kYXJ5LXR5cGVzXHJcbmNvbnN0IGluZGV4U3RvcmUgPSAoKSA9PiAoe1xyXG4gICAgaW5pdFN0b3JlLFxyXG4gICAgYmFzZVN0b3JlLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4U3RvcmU7XHJcbiIsImltcG9ydCB7IG9ic2VydmFibGUgfSBmcm9tICdtb2J4JztcclxuXHJcbmNvbnN0IEluaXRTdG9yZSA9IG9ic2VydmFibGUoe1xyXG4gICAgLy8gc3RhdGVcclxuICAgIGlzRW5kOiB0cnVlLFxyXG5cclxuICAgIHNldElzRW5kKGlzRW5kOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5pc0VuZCA9IGlzRW5kO1xyXG4gICAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbml0U3RvcmU7XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1haW4gZnJvbSAnLi4vY29tcG9uZW50L21haW4nO1xyXG5pbXBvcnQgSW50cm8gZnJvbSAnLi4vY29tcG9uZW50L2ludHJvJztcclxuaW1wb3J0IFdoeUl0IGZyb20gJy4uL2NvbXBvbmVudC93aHlJdCc7XHJcbmltcG9ydCBTa2lsbHMgZnJvbSAnLi4vY29tcG9uZW50L3NraWxscyc7XHJcbmltcG9ydCBDYXJlZXIgZnJvbSAnLi4vY29tcG9uZW50L2NhcmVlcic7XHJcbmltcG9ydCBJbml0IGZyb20gJy4uL2NvbXBvbmVudC9pbml0JztcclxuaW1wb3J0IGluZGV4U3RvcmUgZnJvbSAnLi4vbW9kdWxlcy9pbmRleFN0b3JlJztcclxuaW1wb3J0IHsgdXNlT2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0JztcclxuaW1wb3J0IFByb2plY3RzIGZyb20gJy4uL2NvbXBvbmVudC9wcm9qZWN0cyc7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICBjb25zdCB7IGluaXRTdG9yZSwgYmFzZVN0b3JlIH0gPSBpbmRleFN0b3JlKCk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25DaGFuZ2VSZXNpemUpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvbkNoYW5nZVNjcm9sbCk7XHJcbiAgICAgICAgb25DaGFuZ2VSZXNpemUoKTtcclxuICAgICAgICBvbkNoYW5nZVNjcm9sbCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25DaGFuZ2VSZXNpemUpO1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25DaGFuZ2VTY3JvbGwpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLy8gb25DaGFuZ2VcclxuICAgIGNvbnN0IG9uQ2hhbmdlUmVzaXplID0gKCkgPT4ge1xyXG4gICAgICAgIGJhc2VTdG9yZS5zZXRJbm5lcldpZHRoKHdpbmRvdy5pbm5lcldpZHRoKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgYmFzZVN0b3JlLnNldFNjcm9sbFkod2luZG93LnNjcm9sbFkpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdXNlT2JzZXJ2ZXIoKCkgPT4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtpbml0U3RvcmUuaXNFbmQgPyAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNYWluIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEludHJvIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFdoeUl0IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNraWxscyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJlZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8UHJvamVjdHMgLz5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPEluaXQgLz5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaDEsXHJcbiAgICAgICAgICAgICAgICAgICAgaDIsXHJcbiAgICAgICAgICAgICAgICAgICAgaDMsXHJcbiAgICAgICAgICAgICAgICAgICAgaDQsXHJcbiAgICAgICAgICAgICAgICAgICAgaDUsXHJcbiAgICAgICAgICAgICAgICAgICAgaDYsXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbixcclxuICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBcHBsZVNER290aGljTmVvJywgJ05vdG8gU2FucyBLUicsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CdW5nZWUmZGlzcGxheT1zd2FwJyk7XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcclxuICAgICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iLCJleHBvcnQgY29uc3QgbWF4V2lkdGggPSA5NjA7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vYnhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vYngtcmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9