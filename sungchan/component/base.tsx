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

import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setCurrentComponentNoAction, setIsPageChangingAction } from '../modules/actions';
import { indexState } from '../modules/indexReducer';

const transitionDuration = 1;

interface IBaseContainer {
    backgroundColor: string;
}

const BaseContainer = styled.div`
    height: 93vh;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    background-color: ${(props: IBaseContainer) => props.backgroundColor};
    transition-duration: ${transitionDuration}s;
    transform-origin: center top;
    top: 0;
    box-shadow: 0px -1px 4px 4px #888;
`;

const MainContainer = styled.div`
    transition-duration: ${transitionDuration}s;
    height: 100%;

    &::-webkit-scrollbar {
        display: none;
    }
`;

interface IPostItContainer {
    componentNo: number;
}

const PostItContainer = styled.div`
    position: absolute;
    top: ${(props: IPostItContainer) => props.componentNo * 33}px;
    left: -110px;
`;

const PostItSection = styled.section`
    display: flex;
    align-items: center;
`;

interface IPostItColorDiv {
    backgroundColor: string;
}

const PostItColorDiv = styled.div`
    background-color: ${(props: IPostItColorDiv) => props.backgroundColor};
    width: 20px;
    height: 30px;
`;

const PostItTextDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 30px;
    background-color: #fbf8e5;
`;

const Title = styled.span`
    transition: ${transitionDuration}s;
`;

interface IBase {
    children: React.ReactNode;
    componentNo: number;
}

const Base: React.FC<IBase> = ({ children, componentNo }): JSX.Element => {
    const dispatch = useDispatch();

    // redux
    const currentComponentNo = useSelector((state: indexState) => state.baseReducer.currentComponentNo);
    const titleArray = useSelector((state: indexState) => state.baseReducer.titleArray);
    const isPageChanging = useSelector((state: indexState) => state.baseReducer.isPageChanging);

    // state
    const [isTop, setIsTop] = React.useState<boolean>(false);
    const [isBottom, setIsBottom] = React.useState<boolean>(false);

    // ref
    const baseContainerRef = React.useRef<HTMLDivElement>();
    const mainContainerRef = React.useRef<HTMLDivElement>();
    const titleRef = React.useRef<HTMLSpanElement>();

    // variable
    const backgroundColorArray = ['#757270', '#A5BAA8', '#6A9194', '#b79e6a', '#c68377', '#fff'];

    // useEffect
    React.useEffect(() => {
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

        dispatch(setIsPageChangingAction(true));
        setTimeout(() => {
            if (currentComponentNo === componentNo) {
                mainContainerRef.current.style.overflow = 'auto';
            }

            dispatch(setIsPageChangingAction(false));
        }, transitionDuration * 1000);
    }, [currentComponentNo]);

    // onClick
    const onClickPostIt = (componentNo) => {
        // 페이지 이동이 이루어지고 있는 경우
        if (isPageChanging) {
            return;
        }

        dispatch(setCurrentComponentNoAction(componentNo));
    };

    // onScroll
    const onScrollMainContainer = (e: React.UIEvent<HTMLDivElement>) => {
        // 페이지 이동이 이루어지고 있는 경우
        if (isPageChanging) {
            return;
        }

        // 현재 페이지가 아닌 경우 스크롤기능 중단
        if (currentComponentNo !== componentNo) {
            return;
        }

        // 페이지 상단에 있는 경우
        if (e.currentTarget.scrollTop === 0) {
            setIsTop(true);
        } else {
            setIsTop(false);
        }

        // 페이지 하단에 있는 경우
        if (e.currentTarget.scrollTop + e.currentTarget.clientHeight >= e.currentTarget.scrollHeight) {
            setIsBottom(true);
        } else {
            setIsBottom(false);
        }
    };

    // onWheel
    const onWheelMainContainer = (e: React.WheelEvent<HTMLDivElement>) => {
        // 페이지 이동이 이루어지고 있는 경우
        if (isPageChanging) {
            return;
        }

        // 현재 페이지가 아닌 경우 휠기능 중단
        if (currentComponentNo !== componentNo) {
            return;
        }

        // 페이지의 끝에 도달하고 위로 스크롤 했을 경우
        if (isTop && e.nativeEvent.deltaY < 0) {
            onClickPostIt(componentNo - 1);
        }

        // 페이지의 끝에 도달하고 아래로 스크롤 했을 경우
        if (isBottom && e.nativeEvent.deltaY > 0) {
            onClickPostIt(componentNo + 1);
        }
    };

    return (
        <>
            <BaseContainer ref={baseContainerRef} backgroundColor={backgroundColorArray[componentNo]}>
                <MainContainer ref={mainContainerRef} onScroll={onScrollMainContainer} onWheel={onWheelMainContainer}>
                    {children}
                </MainContainer>

                <PostItContainer componentNo={componentNo}>
                    <PostItSection onClick={() => onClickPostIt(componentNo)}>
                        <PostItColorDiv backgroundColor={backgroundColorArray[componentNo]} />
                        <PostItTextDiv>
                            <Title ref={titleRef}>{titleArray[componentNo]}</Title>
                        </PostItTextDiv>
                    </PostItSection>
                </PostItContainer>
            </BaseContainer>
        </>
    );
};

export default Base;
