import * as React from 'react';
import Base from './base';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { indexState } from '../modules/indexReducer';

const CareerContainer = styled.div`
    position: relative;
    border-radius: 0 12px 12px 12px;
    background-color: #fff;
    margin: 50px 18px 65px 18px;
    box-shadow: 2px 0 4px #c8c8c8 inset, -2px -4px 4px #c8c8c8 inset;
`;

const ImageDiv = styled.div`
    margin: 18px 25px;
`;

const TitleSection = styled.section`
    position: absolute;
    display: flex;
    align-items: center;
    top: -40px;
    left: 0;
    height: 40px;
    background-color: #fff;
    border-radius: 12px 12px 0 0;
    padding: 0 12px;
    box-shadow: 2px 4px 4px #c8c8c8 inset, -2px 0 4px #c8c8c8 inset;
`;

const ContentsSection = styled.section`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 0 16px;

    @media screen and (min-width: 700px) {
        flex-wrap: nowrap;
    }
`;

const TextDescriptionDiv = styled.div``;

const PictureContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 101;
    top: 0;
    cursor: pointer;
`;

const PuzzleSection = styled.section`
    padding-left: 25px;
`;

const PuzzleDiv = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 50px;
    background-color: #fff;
    margin: 40px 0 100px 0;
    transform: rotate(-16deg);
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

    @media screen and (min-width: 700px) {
        width: 160px;
        height: 60px;
        box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
    }
`;

const PuzzleLeft = styled.div`
    position: absolute;
    background-color: #fff;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    top: 13px;
    left: -13px;
    box-shadow: -2px 1px 2px rgba(0, 0, 0, 0.5);

    @media screen and (min-width: 700px) {
        width: 30px;
        height: 30px;
        left: -15px;
        top: 15px;
    }
`;

interface IPuzzleRight {
    backgroundColor: string;
}

const PuzzleRight = styled.div`
    position: absolute;
    background-color: ${(props: IPuzzleRight) => props.backgroundColor};
    border-radius: 50%;
    width: 24px;
    height: 24px;
    top: 13px;
    right: -13px;
    box-shadow: inset 3px 0 1px rgba(0, 0, 0, 0.5);

    @media screen and (min-width: 700px) {
        width: 30px;
        height: 30px;
        top: 15px;
        right: -15px;
    }
`;

const PuzzleTop = styled.div`
    position: absolute;
    background-color: #fff;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    top: -13px;
    left: 43px;

    @media screen and (min-width: 700px) {
        width: 30px;
        height: 30px;
        top: -15px;
        left: 65px;
    }
`;

interface ICareerTitle {
    color: string;
}

const CareerTitle = styled.span`
    color: ${(props: ICareerTitle) => props.color};
    font-weight: 600;
    font-size: min(1.3em, 0.8em + 1.2vw);
`;

interface ITextDescription {
    backgroundColor: string;
    type?: string;
    src?: string;
}

const TextDescription = styled.span`
    display: block;
    margin: 18px 0;
    font-weight: 600;
    font-size: min(1.1em, 0.7em + 1.1vw);
    padding: 8px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);

    ${(props: ITextDescription) => {
        if (props.type === 'camera') {
            return `
                color: rgba(0, 0, 0, 0.7);
                cursor: url(${props.src}), pointer;
                &:before {
                    display: inline-block;
                    width: 26px;
                    content: '\f030';
                    font-family: FontAwesome;
                    color: ${props.backgroundColor};
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
    }}
`;

const PuzzleTitle = styled.span`
    font-weight: 600;
    font-size: 1.2em;
    transform: translateX(-6px);

    @media screen and (min-width: 700px) {
        font-size: 1.5em;
        transform: translateX(-7.5px);
    }
`;

const CareerImage = styled.img`
    width: min(20em, calc(15em + 10vw));
`;

const PictureImage = styled.img`
    margin: 20px;
    max-width: calc(100% - 28px);
    max-height: calc(100% - 28px);
`;

interface ICareer {
    componentNo: number;
}

const Career: React.FC<ICareer> = ({ componentNo }): JSX.Element => {
    // redux
    const backgroundColorArray = useSelector((state: indexState) => state.baseReducer.backgroundColorArray);

    // state
    const [pictureImage, setPictureImage] = React.useState<string>('');

    // ref
    const pictureContainerRef = React.useRef<HTMLDivElement>();

    // onClick
    const onClickCamera = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, img: string) => {
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

    return (
        <>
            <Base componentNo={componentNo}>
                <PuzzleSection>
                    <PuzzleDiv>
                        <PuzzleLeft />
                        <PuzzleRight backgroundColor={backgroundColorArray[componentNo]} />
                        <PuzzleTop />
                        <PuzzleTitle>??????</PuzzleTitle>
                    </PuzzleDiv>
                </PuzzleSection>

                <CareerContainer>
                    <TitleSection>
                        <CareerTitle color={'#33bdda'}>?????? ?????? ??????????????? ????????????</CareerTitle>
                    </TitleSection>

                    <ContentsSection>
                        <ImageDiv>
                            <CareerImage src="/image/ssafy.PNG" />
                        </ImageDiv>

                        <TextDescriptionDiv>
                            <TextDescription backgroundColor={backgroundColorArray[componentNo]} type="calendar">
                                19.07 ~ 20.03
                            </TextDescription>
                            <TextDescription
                                backgroundColor={backgroundColorArray[componentNo]}
                                type="camera"
                                src="/image/topScore_mini.png"
                                onClick={(e) => onClickCamera(e, '/image/topScore.jpg')}
                            >
                                1?????? ??? ?????? ?????? ????????? ??????
                            </TextDescription>
                            <TextDescription
                                backgroundColor={backgroundColorArray[componentNo]}
                                type="camera"
                                src="/image/abroadEducation_mini.png"
                                onClick={(e) => onClickCamera(e, '/image/abroadEducation.jpg')}
                            >
                                ?????? ?????? ???????????? ??????
                            </TextDescription>
                            <TextDescription backgroundColor={backgroundColorArray[componentNo]}>
                                ??? ?????? ?????? ??? ?????? ?????? ??????
                            </TextDescription>
                            <TextDescription
                                backgroundColor={backgroundColorArray[componentNo]}
                                type="camera"
                                src="/image/swexpertScore_mini.png"
                                onClick={(e) => onClickCamera(e, '/image/swexpertScore.PNG')}
                            >
                                ?????? SW ?????? ????????? A+ ??????
                            </TextDescription>
                        </TextDescriptionDiv>
                    </ContentsSection>
                </CareerContainer>

                <CareerContainer>
                    <TitleSection>
                        <CareerTitle color={'#032970'}>?????? ????????????</CareerTitle>
                    </TitleSection>

                    <ContentsSection>
                        <ImageDiv>
                            <CareerImage src="/image/autoever.PNG" />
                        </ImageDiv>

                        <TextDescriptionDiv>
                            <TextDescription backgroundColor={backgroundColorArray[componentNo]} type="calendar">
                                20.03 ~ ??????
                            </TextDescription>
                            <TextDescription backgroundColor={backgroundColorArray[componentNo]} type="position">
                                ????????? ?????? ?????? ????????? FE/BE ?????? ??? ??????
                            </TextDescription>
                            <TextDescription backgroundColor={backgroundColorArray[componentNo]}>
                                ??? ??? Git ?????? ??? ?????? ??????????????? Git?????? ?????? ?????? ??????
                            </TextDescription>
                            <TextDescription backgroundColor={backgroundColorArray[componentNo]}>
                                ??? ??? ????????? ?????? ??????
                            </TextDescription>
                            <TextDescription backgroundColor={backgroundColorArray[componentNo]}>
                                ????????? ???????????? ?????? ????????? ?????? ???????????? ??????
                            </TextDescription>
                            <TextDescription backgroundColor={backgroundColorArray[componentNo]}>
                                React ????????? ????????? ?????? ????????? ?????? ??????
                            </TextDescription>
                            <TextDescription backgroundColor={backgroundColorArray[componentNo]}>
                                ?????? ???????????? ????????? ?????? ?????? Rest API ??????
                            </TextDescription>
                        </TextDescriptionDiv>
                    </ContentsSection>
                </CareerContainer>
            </Base>

            <PictureContainer ref={pictureContainerRef} onClick={onClickPictureContainer}>
                <PictureImage src={pictureImage} />
            </PictureContainer>
        </>
    );
};

export default Career;
