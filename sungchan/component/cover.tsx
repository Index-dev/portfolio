import * as React from 'react';
import { useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { indexState } from '../modules/indexReducer';
import Base from './base';

const CoverContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100%;
    justify-content: space-evenly;
    align-items: center;
`;

const ContentsDiv = styled.div`
    margin: 0 auto;
    text-align: center;
    position: relative;
`;

interface IArrowSection {
    top: number;
}

const ArrowSection = styled.section`
    position: absolute;
    top: -${(props: IArrowSection) => props.top}px;
    left: 0;
`;

const ArrowDivFrame = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-40px) rotate(-12deg);
    }

    33% {
        opacity: 1;
        transform: rotate(-12deg);
    }
`;

interface IArrowDiv {
    backgroundColor: string;
    arrowWidth: number;
    arrowHeight: number;
}

const ArrowDiv = styled.div`
    display: inline-block;
    background-color: ${(props: IArrowDiv) => props.backgroundColor};
    position: relative;
    width: ${(props: IArrowDiv) => props.arrowWidth}px;
    height: ${(props: IArrowDiv) => props.arrowHeight}px;
    transform: rotate(-12deg);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px 0;
    animation-name: ${ArrowDivFrame};
    animation-duration: 1.5s;
    animation-timing-function: ease-in;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
`;

interface IArrowLeftDiv {
    backgroundColor: string;
    arrowHeight: number;
}

const ArrowLeftDiv = styled.div`
    position: absolute;
    transform: rotate(-45deg);

    ${(props: IArrowLeftDiv) => {
        return `
            top: ${(props.arrowHeight - props.arrowHeight / Math.sqrt(2)) / 2}px;
            left: -${props.arrowHeight / 2 - (props.arrowHeight - props.arrowHeight / Math.sqrt(2)) / 2}px;
            width: ${props.arrowHeight / Math.sqrt(2)}px;
            height: ${props.arrowHeight / Math.sqrt(2)}px;
            background-color: ${props.backgroundColor};
        `;
    }}
`;

interface IArrowRightDiv {
    backgroundColor: string;
    arrowHeight: number;
}

const ArrowRightDiv = styled.div`
    position: absolute;
    transform: rotate(-45deg);
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);

    ${(props: IArrowRightDiv) => {
        return `
            top: ${(props.arrowHeight - props.arrowHeight / Math.sqrt(2)) / 2}px;
            right: -${props.arrowHeight / 2 - (props.arrowHeight - props.arrowHeight / Math.sqrt(2)) / 2}px;
            width: ${props.arrowHeight / Math.sqrt(2)}px;
            height: ${props.arrowHeight / Math.sqrt(2)}px;
            background-color: ${props.backgroundColor};
        `;
    }}
`;

const LogoSection = styled.div``;

const ArrowTitle = styled.span`
    display: block;
    font-size: min(calc(2.2em + 2.8vw), 3.6em);
    font-weight: 600;
    margin-left: 60px;
    position: relative;
    z-index: 1;
    color: rgba(255, 255, 255, 0.8);
`;

const MainTitleFrame = keyframes`
    0%,
    33% {
        opacity: 0;
        transform: translateX(-40px);
    }

    66% {
        opacity: 1;
        transform: initial;
    } 
`;

const MainTitle = styled.span`
    font-weight: 600;
    font-size: min(calc(3.6em + 5.2vw), 6.4em);
    position: relative;
    z-index: 1;
    display: flex;
    animation-name: ${MainTitleFrame};
    animation-duration: 1.5s;
    animation-timing-function: ease-in;
    text-shadow: 3px 3px 3px rgba(255, 255, 255, 0.8);
`;

const LogoImageFrame = keyframes`
    0%,
    33%,
    66% {
        opacity: 0;
        transform: translateX(-40px);
    }

    99% {
        opacity: 1;
        transform: initial;
    } 
`;

const LogoImage = styled.img`
    width: min(9.2em, 6.6em + 7.8vw);
    margin: 12px 0;
    animation-name: ${LogoImageFrame};
    animation-duration: 1.5s;
    animation-timing-funtion: ease-in;
`;

const MainTitleInCline = styled.span`
    transform: rotate(-12deg);
    display: inline-block;
    color: #c19277;
`;

interface ICover {
    componentNo: number;
}

const Cover: React.FC<ICover> = ({ componentNo }): JSX.Element => {
    // redux
    const backgroundColorArray = useSelector((state: indexState) => state.baseReducer.backgroundColorArray);

    // state
    const [arrowWidth, setArrowWidth] = React.useState<number>(0);
    const [arrowHeight, setArrowHeight] = React.useState<number>(100);

    // ref
    const mainTitleRef = React.useRef<HTMLSpanElement>();

    // useEffect
    React.useEffect(() => {
        window.addEventListener('resize', onResize);
        onResize();

        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, []);

    // normal
    const onResize = () => {
        const arrowWidth = Math.min(mainTitleRef.current.offsetWidth - arrowHeight / Math.sqrt(2) / 2, 400);
        setArrowWidth(arrowWidth);
        setArrowHeight(arrowWidth / 4);
    };

    return (
        <>
            <Base componentNo={componentNo}>
                <CoverContainer>
                    <ContentsDiv>
                        <ArrowSection top={arrowHeight}>
                            <ArrowDiv backgroundColor="#62959C" arrowWidth={arrowWidth} arrowHeight={arrowHeight}>
                                <ArrowLeftDiv
                                    backgroundColor={backgroundColorArray[componentNo]}
                                    arrowHeight={arrowHeight}
                                />
                                <ArrowRightDiv backgroundColor="#62959C" arrowHeight={arrowHeight} />
                                <ArrowTitle>김성찬의</ArrowTitle>
                            </ArrowDiv>
                        </ArrowSection>

                        <MainTitle ref={mainTitleRef}>
                            <MainTitleInCline>P</MainTitleInCline>ortfolio
                        </MainTitle>
                    </ContentsDiv>

                    <LogoSection>
                        <LogoImage src="/image/SCLogo2.svg" />
                    </LogoSection>
                </CoverContainer>
            </Base>
        </>
    );
};

export default Cover;
