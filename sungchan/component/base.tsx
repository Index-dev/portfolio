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

import { useObserver } from 'mobx-react';
import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import indexStore from '../modules/indexStore';
import { maxWidth } from '../style/style';

interface IMainContainer {
    backgroundColor: string;
    zIndex: number;
}

const MainContainer = styled.div`
    width: calc(100vw - (100vw - 100%));
    min-height: 100vh;
    position: relative;
    cursor: pointer;

    background-color: ${(props: IMainContainer) => props.backgroundColor};
    z-index: ${(props: IMainContainer) => props.zIndex};
`;

interface ISubContainer {
    isReach: boolean;
}

const SubContainer = styled.div`
    width: calc(100vw - (100vw - 100%));
    min-height: 100vh;
    display: flex;
    align-items: center;

    position: ${(props: ISubContainer) => (props.isReach ? 'static' : 'fixed')};
    top: ${(props: ISubContainer) => (props.isReach ? '' : 0)};
`;

const ComponentContainer = styled.div`
    max-width: ${maxWidth}px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const TitleSection = styled.div`
    padding: 38px 0 66px 0;
    margin-top: 32px;
`;

const ComponentSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const MainTitle = styled.span`
    font-weight: 600;
    font-size: calc(48px + 0.9vw);
    text-shadow: 3.5px 3.5px #fff;
    font-family: 'Bungee', cursive;
`;

const myKeyframes = keyframes`
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

const TestDiv = styled.div`
    background-color: #fff;
    width: calc(100vw - (100vw - 100%));
    height: 100vh;
    position: absolute;
    top: calc(100vh - 250px);
    left: calc(100vw - (100vw - 100%) - 450px);
    transform: rotate(-60deg);
    z-index: 200;

    animation-name: ${myKeyframes};
    animation-duration: 10s;
    animation-iteration-count: infinite;
`;

interface IBase {
    children: React.ReactNode;
    containerNo: number;
}

const Base: React.FC<IBase> = ({ children, containerNo }): JSX.Element => {
    // mobx
    const { baseStore } = indexStore();

    // state
    const [isReach, setIsReach] = React.useState<boolean>(false);

    // ref
    const mainContainerRef = React.useRef<HTMLDivElement>();
    const subContainerRef = React.useRef<HTMLDivElement>();

    // variable
    const backgroundColorArray = ['#757270', '#A5BAA8', '#6A9194', '#b79e6a', '#c68377', '#fff'];

    React.useEffect(() => {
        window.addEventListener('scroll', onChangeScroll);
        window.addEventListener('resize', onChangeResize);

        onChangeScroll();
        onChangeResize();

        return () => {
            window.removeEventListener('scroll', onChangeScroll);
            window.removeEventListener('resize', onChangeResize);
        };
    }, []);

    React.useEffect(() => {
        if (mainContainerRef.current) {
            mainContainerRef.current.setAttribute('id', baseStore.titleArray[containerNo]);
            baseStore.setComponentHeight(containerNo, subContainerRef.current.clientHeight);
        }
    }, []);

    // onChange
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
    };

    // onClick
    const onClickMainContainer = () => {
        window.scrollBy({
            top: baseStore.getAccumulateComponentHeight(containerNo) - baseStore.scrollY,
            behavior: 'smooth',
        });
    };

    return useObserver(() => (
        <MainContainer
            ref={mainContainerRef}
            backgroundColor={backgroundColorArray[containerNo]}
            zIndex={100 - containerNo}
            onClick={onClickMainContainer}
        >
            <SubContainer ref={subContainerRef} isReach={isReach}>
                <ComponentContainer>
                    {containerNo === 0 ? (
                        ''
                    ) : (
                        <TitleSection>
                            <MainTitle># {baseStore.titleArray[containerNo]}</MainTitle>
                        </TitleSection>
                    )}

                    <ComponentSection>{children}</ComponentSection>
                </ComponentContainer>
            </SubContainer>
        </MainContainer>
    ));
};

export default Base;
