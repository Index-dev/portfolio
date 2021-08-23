import * as React from 'react';
import Cover from '../component/cover';
import Intro from '../component/intro';
import WhyIt from '../component/whyIt';
import Skills from '../component/skills';
import Career from '../component/career';
import Init from './init';
import Projects from '../component/projects';
import More from '../component/more';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { indexState } from '../modules/indexReducer';
import { maxWidth } from '../style/style';
import { setIndexSubContainerTranslateXAction, setInnerWidthAction } from '../modules/actions';

const IndexMainContainer = styled.div`
    width: calc(100vw - (100vw - 100%));
    height: 100vh;
    background-image: url(/image/background.jpg);
    position: relative;
`;

const IndexMiddleContainer = styled.div`
    max-width: ${maxWidth}px;
    margin: 0 auto;
    position: relative;
`;

interface IIndexSubContainer {
    translateX: number;
}

const IndexSubContainer = styled.div`
    transform: translate(${(props: IIndexSubContainer) => props.translateX}px, 7vh);
    position: relative;
    transition-duration: 0.3s;
    transition-timing-function: ease-in;
`;

const ComponentContainer = styled.div`
    perspective: 4000px;
    position: relative;
    z-index: 1;
`;

const CoffeeContainer = styled.div`
    position: absolute;
    top: 104px;
    right: -382px;
`;

const CoffeeSection = styled.section`
    display: flex;
    align-items: center;
`;

const CoffeeInner = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #a17c32;
    border: 13px solid #fff;
    overflow: hidden;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4);
`;

const CoffeeMaterial = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #c4973d;
    transform: translate(8px, 48px);
    box-shadow: 1px 1px 6px #a17c32 inset;
`;

const CoffeeOuter = styled.div`
    width: 70px;
    height: 30px;
    background-color: #fff;
    border-radius: 0 8px 8px 0;
    transform: translate(-18px, 60px) rotate(30deg);
    box-shadow: 4px 1px 4px rgba(0, 0, 0, 0.4);
`;

const PencilContainer = styled.div`
    position: absolute;
    top: 474px;
    right: -144px;
    transform: rotate(25deg);
`;

const PencilSection = styled.section`
    display: flex;
    flex-direction: column;
`;

const PencilTopDiv = styled.div`
    z-index: 2;
    display: flex;
`;

const PencilLeftTop = styled.div`
    width: 20px;
    height: 200px;
    background-color: #4877c7;
    border-radius: 8px 0 0 0;
    position: relative;
`;

const PencilRightTop = styled.div`
    width: 20px;
    height: 200px;
    background-color: #52adc7;
    border-radius: 0 8px 0 0;
    position: relative;
    box-shadow: 3px 0 4px rgba(0, 0, 0, 0.4);
`;

const PencilLeftBottom = styled.div`
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 20px;
    height: 10px;
    border-radius: 50%;
    background-color: #e0c7af;
`;
const PencilRightBottom = styled.div`
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 20px;
    height: 10px;
    border-radius: 50%;
    background-color: #e0c7af;
`;

const PencilBottom = styled.div`
    position: relative;
    width: ${40 / Math.sqrt(2)}px;
    height: ${40 / Math.sqrt(2)}px;
    background-color: #e0c7af;
    transform: translate(${(40 - 40 / Math.sqrt(2)) / 2}px, -${40 / Math.sqrt(2) / 2}px) rotate(-45deg);
    z-index: 1;
    box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.4);
`;

const PencilLead = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 0;
    border-top: 12px solid transparent;
    border-left: 12px solid #000;
`;

const CellPhoneContainer = styled.div`
    position: absolute;
    top 363px;
    left: -294px;
    transform: rotate(-4deg);
`;

const CellPhoneSection = styled.section``;

const CellPhoneBody = styled.div`
    position: relative;
    width: 220px;
    height: 420px;
    background-color: #2e2727;
    border-radius: 16px 16px 16px 16px;
    border: 6px solid #cd5c5c;
    box-shadow: 2px 2px 6px 2px rgba(0, 0, 0, 0.4);
`;

const CellPhoneTop = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    width: 220px;
    height: 40px;
    border-radius: 8px 8px 0 0;
    background-color: rgba(0, 0, 0, 0.8);
`;

const CellPhoneTopInner = styled.div`
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: #a3a3a3;
    border: 3px solid rgba(255, 255, 255, 0.6);
    box-shadow: inset -1px -1px 4px rgba(0, 0, 0, 0.6);
`;

const MenuContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
`;

const MenuSection = styled.section``;

const HamburgerImage = styled.img`
    height: 5vh;
    padding: 1vh;
`;

const Index = (): JSX.Element => {
    const dispatch = useDispatch();

    // redux
    const isEnd = useSelector((state: indexState) => state.initReducer.isEnd);
    const innerWidth = useSelector((state: indexState) => state.baseReducer.innerWidth);
    const indexSubContainerTranslateX = useSelector(
        (state: indexState) => state.baseReducer.indexSubContainerTranslateX,
    );

    // useEffect
    React.useEffect(() => {
        window.addEventListener('resize', onResize);
        onResize();

        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, []);

    // onResize
    const onResize = () => {
        dispatch(setInnerWidthAction(window.innerWidth));

        // 모바일에서 화면을 움직였을 경우 원래대로 돌려놓기
        dispatch(setIndexSubContainerTranslateXAction(0));
    };

    // onClick
    const onClickMenuContainer = () => {
        if (indexSubContainerTranslateX !== 0) {
            // 값이 부여된 경우 초기화하여 원래대로 돌려놓기
            dispatch(setIndexSubContainerTranslateXAction(0));
        } else {
            // 값이 부여되지 않은 경우 초과된 범위만큼 움직이기
            if (innerWidth < maxWidth) {
                dispatch(setIndexSubContainerTranslateXAction(110));
            } else {
                dispatch(setIndexSubContainerTranslateXAction((maxWidth + 220 - innerWidth) / 2));
            }
        }
    };

    return (
        <>
            {isEnd ? (
                <>
                    <IndexMainContainer>
                        <IndexMiddleContainer>
                            <IndexSubContainer translateX={indexSubContainerTranslateX}>
                                <ComponentContainer>
                                    <Cover componentNo={0} />
                                    <Intro componentNo={1} />
                                    <WhyIt componentNo={2} />
                                    <Skills componentNo={3} />
                                    <Career componentNo={4} />
                                    <Projects componentNo={5} />
                                    <More componentNo={6} />
                                </ComponentContainer>

                                <CoffeeContainer>
                                    <CoffeeSection>
                                        <CoffeeInner>
                                            <CoffeeMaterial />
                                        </CoffeeInner>
                                        <CoffeeOuter />
                                    </CoffeeSection>
                                </CoffeeContainer>

                                <PencilContainer>
                                    <PencilSection>
                                        <PencilTopDiv>
                                            <PencilLeftTop>
                                                <PencilLeftBottom />
                                            </PencilLeftTop>
                                            <PencilRightTop>
                                                <PencilRightBottom />
                                            </PencilRightTop>
                                        </PencilTopDiv>
                                        <PencilBottom>
                                            <PencilLead />
                                        </PencilBottom>
                                    </PencilSection>
                                </PencilContainer>

                                <CellPhoneContainer>
                                    <CellPhoneSection>
                                        <CellPhoneBody>
                                            <CellPhoneTop>
                                                <CellPhoneTopInner />
                                            </CellPhoneTop>
                                        </CellPhoneBody>
                                    </CellPhoneSection>
                                </CellPhoneContainer>
                            </IndexSubContainer>

                            {innerWidth < maxWidth + 220 && indexSubContainerTranslateX === 0 ? (
                                <MenuContainer onClick={onClickMenuContainer}>
                                    <MenuSection>
                                        <HamburgerImage src="/image/hamburgerBar.svg" />
                                    </MenuSection>
                                </MenuContainer>
                            ) : (
                                ''
                            )}
                        </IndexMiddleContainer>
                    </IndexMainContainer>
                </>
            ) : (
                <Init />
            )}

            <style global jsx>
                {`
                    body {
                        margin: 0;
                        padding: 0;
                        overflow: hidden;
                        -ms-user-select: none;
                        -moz-user-select: -moz-none;
                        -webkit-user-select: none;
                        -khtml-user-select: none;
                        user-select: none;
                    }

                    h1,
                    h2,
                    h3,
                    h4,
                    h5,
                    h6,
                    span,
                    p {
                        font-family: 'AppleSDGothicNeo', 'Noto Sans KR', sans-serif;
                    }

                    @import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');
                `}
            </style>
            <link
                type="text/css"
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1" />
        </>
    );
};

export default Index;
