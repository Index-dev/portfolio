import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
    setCurrentComponentNoAction,
    setIndexSubContainerTranslateXAction,
    setIsPageChangingAction,
} from '../modules/actions';
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
    transition-timing-function: ease-in;
    transform-origin: center top;
    top: 0;
    box-shadow: 2px 0px 6px rgba(0, 0, 0, 0.1), -2px 0px 6px rgba(0, 0, 0, 0.1);
`;

const MainContainer = styled.div`
    transition-duration: ${transitionDuration}s;
    height: calc(100% - 52px);
    margin-top: 52px;

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

const ChainContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
`;

const ChainSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 32px;
`;

const ChainFrame = styled.div`
    width: 10px;
    display: flex;
    justify-content: space-between;
    z-index: 1;
`;

const Chain = styled.div`
    width: 4px;
    height: 40px;
    background-color: #616161;
    opacity: 0.7;
    border-radius: 0 0 12px 12px;
`;

const ChainCircle = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #fff;
    transform: translateY(-14px);
    box-shadow: inset 1px 0 2px rgba(0, 0, 0, 0.4), inset -1px -2px 2px rgba(0, 0, 0, 0.4);
`;

const Title = styled.span`
    font-weight: 600;
    transition: ${transitionDuration}s;
    color: rgba(0, 0, 0, 0.6);
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
    const backgroundColorArray = useSelector((state: indexState) => state.baseReducer.backgroundColorArray);
    const isPageChanging = useSelector((state: indexState) => state.baseReducer.isPageChanging);

    // state
    const [isTop, setIsTop] = React.useState<boolean>(false);
    const [isBottom, setIsBottom] = React.useState<boolean>(false);
    const [chainArray, setChainArray] = React.useState<number[]>([]);
    const [touchY, setTouchY] = React.useState<number>(0);
    const [isClickContainer, setIsClickContainer] = React.useState<boolean>(false);
    const [containerClientY, setContainerClientY] = React.useState<number>(0);
    const [containerScrollTop, setContainerScrollTop] = React.useState<number>(0);

    // ref
    const baseContainerRef = React.useRef<HTMLDivElement>();
    const mainContainerRef = React.useRef<HTMLDivElement>();
    const titleRef = React.useRef<HTMLSpanElement>();

    // useEffect
    React.useEffect(() => {
        window.addEventListener('resize', onResize);
        onResize();

        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, []);

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
            if (mainContainerRef.current.clientHeight >= mainContainerRef.current.scrollHeight) {
                // 페이지의 전체크기가 화면 크기와 동일하거나 클 경우 스크롤은 최하단도 포함
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

        // 현재 컴포넌트 번호 변경
        dispatch(setCurrentComponentNoAction(componentNo));

        // 메뉴바가 열려있는 경우 닫기
        dispatch(setIndexSubContainerTranslateXAction(0));
    };

    // onScroll
    // 스크롤이 최상단, 최하단에 도달할 경우에만 페이지 넘기게 하기 위해 체크해주기
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
    // 웹에서 마우스 휠을 이용하여 페이지 넘기게 하기
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
            // 현재 컴포넌트 번호가 마지막이 아닐 경우에만 페이지 넘기기
            if (currentComponentNo < titleArray.length - 1) {
                onClickPostIt(componentNo + 1);
            }
        }
    };

    // onResize
    const onResize = () => {
        const count = Math.floor(baseContainerRef.current.clientWidth / 84);
        const chainArray: number[] = [];

        for (let i = 0; i < count; i++) {
            chainArray.push(i);
        }

        setChainArray(chainArray);
    };

    // onTouch
    // 모바일에서 터치로 페이지 넘기게 하기
    const onTouchStartMainContainer = (e: React.TouchEvent<HTMLDivElement>) => {
        // 페이지의 끝에 도달했을 경우만 정상적인 데이터 입력
        if (isTop || isBottom) {
            setTouchY(e.changedTouches[0].clientY);
        } else {
            setTouchY(-1);
        }
    };

    const onTouchEndMainContainer = (e: React.TouchEvent<HTMLDivElement>) => {
        // 페이지 이동이 이루어지고 있는 경우
        if (isPageChanging) {
            return;
        }

        // 현재 페이지가 아닌 경우 휠기능 중단
        if (currentComponentNo !== componentNo) {
            return;
        }

        // 페이지의 끝에 도달한 뒤 스크롤한게 아닌 경우
        if (touchY === -1) {
            return;
        }

        // 페이지의 끝에 도달하고 위로 스크롤 했을 경우
        if (isTop && touchY - e.changedTouches[0].clientY < 0) {
            onClickPostIt(componentNo - 1);
        }

        // 페이지의 끝에 도달하고 아래로 스크롤 했을 경우
        if (isBottom && touchY - e.changedTouches[0].clientY > 0) {
            // 현재 컴포넌트 번호가 마지막이 아닐 경우에만 페이지 넘기기
            if (currentComponentNo < titleArray.length - 1) {
                onClickPostIt(componentNo + 1);
            }
        }
    };

    // onMouse
    // 웹에서 마우스 클릭으로 상하 움직이게 하기
    const onMouseDownMainContainer = (e: React.MouseEvent<HTMLDivElement>) => {
        setContainerClientY(e.clientY);
        setIsClickContainer(true);
        setContainerScrollTop(mainContainerRef.current.scrollTop);
    };

    const onMouseMoveMainContainer = (e: React.MouseEvent<HTMLDivElement>) => {
        if (isClickContainer) {
            mainContainerRef.current.scrollTop = containerScrollTop + (containerClientY - e.clientY);
        }
    };
    const onMouseUpMainContainer = () => {
        setIsClickContainer(false);
    };

    return (
        <>
            <BaseContainer ref={baseContainerRef} backgroundColor={backgroundColorArray[componentNo]}>
                <MainContainer
                    ref={mainContainerRef}
                    onScroll={onScrollMainContainer}
                    onWheel={onWheelMainContainer}
                    onTouchStart={onTouchStartMainContainer}
                    onTouchEnd={onTouchEndMainContainer}
                    onMouseDown={onMouseDownMainContainer}
                    onMouseMove={onMouseMoveMainContainer}
                    onMouseUp={onMouseUpMainContainer}
                >
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

                <ChainContainer>
                    {chainArray.map((value) => {
                        return (
                            <ChainSection key={value}>
                                <ChainFrame>
                                    <Chain />
                                    <Chain />
                                </ChainFrame>
                                <ChainCircle />
                            </ChainSection>
                        );
                    })}
                </ChainContainer>
            </BaseContainer>
        </>
    );
};

export default Base;
