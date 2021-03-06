import * as React from 'react';
import Base from './base';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { indexState } from '../modules/indexReducer';

const ProjectsContainer = styled.div`
    position: relative;
    border-radius: 0 12px 12px 12px;
    background-color: #fff;
    margin: 50px 18px 65px 18px;
    box-shadow: 2px 0 4px #c8c8c8 inset, -2px -4px 4px #c8c8c8 inset;
`;

const ImageDiv = styled.div`
    display: flex;
    align-items: center;
    margin: 18px 25px;
    position: relative;
    cursor: pointer;
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

interface IPuzzleLeft {
    backgroundColor: string;
}

const PuzzleLeft = styled.div`
    position: absolute;
    background-color: ${(props: IPuzzleLeft) => props.backgroundColor};
    border-radius: 50%;
    width: 24px;
    height: 24px;
    top: 13px;
    left: -13px;
    box-shadow: 3px 1px 1px rgba(0, 0, 0, 0.5);

    @media screen and (min-width: 700px) {
        width: 30px;
        height: 30px;
        left: -15px;
        top: 15px;
    }
`;

const PuzzleRight = styled.div`
    position: absolute;
    background-color: #fff;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    top: 13px;
    right: -13px;
    box-shadow: 3px 1px 2px rgba(0, 0, 0, 0.5);

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
    color?: string;
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
    overflow-wrap: anywhere;

    ${(props: ITextDescription) => {
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
    }}
`;

const PuzzleTitle = styled.span`
    font-weight: 600;
    font-size: 1.2em;
    transform: translateX(6px);

    @media screen and (min-width: 700px) {
        font-size: 1.5em;
        transform: translateX(7.5px);
    }
`;

const CareerImage = styled.img`
    width: min(20em, calc(15em + 10vw));
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
`;

const PictureImage = styled.img`
    margin: 20px;
    max-width: calc(100% - 28px);
    max-height: calc(100% - 28px);
`;

interface IProjects {
    componentNo: number;
}

/*
    ???????????? ?????? ????????? ??? ?????? ??? ??????
    1. currentImageIndex??? 0 ??????
    2. images??? ????????? ??????
    3. infoArray??? ?????? ??????
*/
const Projects: React.FC<IProjects> = ({ componentNo }): JSX.Element => {
    // redux
    const backgroundColorArray = useSelector((state: indexState) => state.baseReducer.backgroundColorArray);

    // state
    const [pictureImage, setPictureImage] = React.useState<string>('');
    const [currentImageIndex, setCurrentImageIndex] = React.useState<number[]>([0, 0, 0, 0, 0]);

    // ref
    const pictureContainerRef = React.useRef<HTMLDivElement>();

    // variable
    const images = [
        [
            '/image/dcollection_0.png',
            '/image/dcollection_1.png',
            '/image/dcollection_2.png',
            '/image/dcollection_3.png',
        ],
        ['/image/portfolio_0.png', '/image/portfolio_1.png', '/image/portfolio_2.png', '/image/portfolio_3.png'],
        ['/image/grouby_0.png', '/image/grouby_1.png', '/image/grouby_2.png', '/image/grouby_3.png'],
        ['/image/scvc_0.png', '/image/scvc_1.png', '/image/scvc_2.png'],
        ['/image/moyo_0.png', '/image/moyo_1.png', '/image/moyo_2.png', '/image/moyo_3.png'],
    ];

    const infoArray = [
        {
            color: '#703A56',
            title: 'D.Collection',
            contentsList: [
                {
                    type: 'calendar',
                    contents: '21.09 ~ 21.10',
                },
                {
                    type: 'code',
                    contents: 'FE ??? Svelte / TypeScript / Scss',
                },
                {
                    contents:
                        '???????????? ???????????? ????????? ??? ?????? ??????????????? ???????????? ???????????? ?????? ??? ???????????? ???????????? ?????? ??????',
                },
                {
                    contents: '?????? ??????????????? ????????? ????????? ?????? ?????????',
                },
                {
                    contents: '?????? ?????? ??? ????????? ?????? ???????????? EmailJS??? ???????????? ???????????? ?????? ?????? ?????? ?????? ??????',
                },
                {
                    type: 'link',
                    contents: 'Domain ??? ',
                    link: 'https://ksc-dcollection.netlify.app',
                },
                {
                    type: 'link',
                    contents: 'Git ??? ',
                    link: 'https://github.com/Index-dev/What_I_Need/tree/master/sungchan',
                },
            ],
        },
        {
            color: '#E3D0B9',
            title: 'Portfolio',
            contentsList: [
                {
                    type: 'calendar',
                    contents: '21.07 ~ 21.08',
                },
                {
                    type: 'code',
                    contents: 'FE ??? Next / TypeScript / Redux / Hooks / StyledComponent',
                },
                {
                    contents: '??? ??????????????? ????????? ?????????????????? ????????? ??? ??? ????????? ?????? ?????? ??????',
                },
                {
                    contents: '????????? ?????? ??????????????? ?????? ?????????????????? ?????????????????? ?????? ?????? ????????? UI/UX??? ??????',
                },
                {
                    type: 'link',
                    contents: 'Domain ??? ',
                    link: 'https://ksc-portfolio.vercel.app',
                },
                {
                    type: 'link',
                    contents: 'Git ??? ',
                    link: 'https://github.com/Index-dev/portfolio/tree/master/sungchan',
                },
            ],
        },
        {
            color: '#E6951A',
            title: 'Grouby',
            contentsList: [
                {
                    type: 'calendar',
                    contents: '20.10 ~ 21.01',
                },
                {
                    type: 'code',
                    contents: 'FE ??? Next / TypeScript / Redux / Hooks / StyledComponent',
                },
                {
                    type: 'code',
                    contents: 'BE ??? Spring / Mybatis / MySQL',
                },
                {
                    contents: 'Next?????? ????????? CSS????????? ????????? ?????? ????????? ?????? ????????????',
                },
                {
                    contents: '??????????????? ????????? ?????? ???????????? ????????? ?????? ???????????? ?????? ????????? ????????? ????????? ??????',
                },
                {
                    contents: '??????, ????????? ????????? ??? ????????????????????? ?????? ?????? ??? ?????? ?????? ??????',
                },
                {
                    contents:
                        '???????????? ????????? ??????????????? ?????? ????????? ???????????? ????????? ??? ?????? ?????? ????????? ????????? ??? ????????? ??????',
                },
                {
                    contents: '?????? ???????????? ???????????? ???????????? ????????? ??? ????????? ????????? ???????????? ?????? ????????????',
                },
                {
                    type: 'link',
                    contents: 'Git ??? ',
                    link: 'https://github.com/ksccmp/Grouby',
                },
            ],
        },
        {
            color: '#c79c76',
            title: 'SCVC',
            contentsList: [
                {
                    type: 'calendar',
                    contents: '20.08 ~ 20.09',
                },
                {
                    type: 'code',
                    contents: 'FE ??? React / TypeScript / Redux / Redux-Saga / Hooks / StyledComponent',
                },
                {
                    type: 'code',
                    contents: 'BE ??? Spring / Mybatis / MySQL / Node',
                },
                {
                    contents: 'TypeScript??? Redux-Saga??? ?????? ????????? ????????? ?????? ????????? ?????? ????????????',
                },
                {
                    contents: '?????? ???????????? ???????????? ???????????? ?????? ?????? ????????? ?????? ?????? ?????? ??????',
                },
                {
                    contents: '??????????????? ?????? ?????? ????????? ??? ?????? ????????? ??????????????? ????????? ?????? ??????????????? ??????',
                },
                {
                    contents: 'RTCPeerConnection + SocketIO??? ???????????? ????????? ?????? ?????? ??? ?????? ??????',
                },
                {
                    type: 'link',
                    contents: 'Git ??? ',
                    link: 'https://github.com/ksccmp/video_chat_typescript',
                },
            ],
        },
        {
            color: '#4ac8d9',
            title: 'Moyo',
            contentsList: [
                {
                    type: 'calendar',
                    contents: '20.01 ~ 20.02',
                },
                {
                    type: 'code',
                    contents: 'FE ??? React / Redux / Hooks / StyledComponent',
                },
                {
                    type: 'code',
                    contents: 'BE ??? SpringBoot / Mybatis / MySQL / FireBase',
                },
                {
                    contents: 'SSAFY?????? ????????? ??? ???????????? (5???)',
                },
                {
                    contents: '?????? ???????????? ???????????? ???????????? ?????? ????????? ????????? ??????',
                },
                {
                    contents: 'React + FireBase??? ???????????? DM?????? ??????',
                },
                {
                    contents: '????????? ????????? ???????????? ??????(?)??? ??? ?????? ???????????? ?????? ??????',
                },
                {
                    contents:
                        '???????????? Tool??? ????????? ???????????? ????????? ???????????? ?????? ???????????? ???????????? ?????? ???????????? ?????? ????????????',
                },
                {
                    type: 'link',
                    contents: 'Git ??? ',
                    link: 'https://github.com/ksccmp/moyo',
                },
            ],
        },
    ];

    // onClick
    const onClickImageDiv = (index) => {
        const tempCurrentImageIndex = currentImageIndex.slice();
        tempCurrentImageIndex[index] = (tempCurrentImageIndex[index] + 1) % images[index].length;

        setCurrentImageIndex(tempCurrentImageIndex);
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
                        <PuzzleLeft backgroundColor={backgroundColorArray[componentNo]} />
                        <PuzzleRight />
                        <PuzzleTop />
                        <PuzzleTitle>????????????</PuzzleTitle>
                    </PuzzleDiv>
                </PuzzleSection>

                {infoArray.map((info, index) => {
                    return (
                        <ProjectsContainer key={info.title}>
                            <TitleSection>
                                <CareerTitle color={info.color}>{info.title}</CareerTitle>
                            </TitleSection>

                            <ContentsSection>
                                <ImageDiv onClick={() => onClickImageDiv(index)}>
                                    <CareerImage src={images[index][currentImageIndex[index]]} />
                                </ImageDiv>

                                <TextDescriptionDiv>
                                    {info.contentsList.map((contents, index) => {
                                        return (
                                            <TextDescription
                                                key={index}
                                                backgroundColor={backgroundColorArray[componentNo]}
                                                type={contents.type ? contents.type : ''}
                                            >
                                                {contents.contents}{' '}
                                                {contents.link ? <a href={contents.link}>{contents.link}</a> : ''}
                                            </TextDescription>
                                        );
                                    })}
                                </TextDescriptionDiv>
                            </ContentsSection>
                        </ProjectsContainer>
                    );
                })}
            </Base>

            <PictureContainer ref={pictureContainerRef} onClick={onClickPictureContainer}>
                <PictureImage src={pictureImage} />
            </PictureContainer>
        </>
    );
};

export default Projects;
