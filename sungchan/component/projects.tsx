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
    프로젝트 내용 추가할 때 해야 할 행동
    1. currentImageIndex에 0 추가
    2. images에 이미지 추가
    3. infoArray에 내용 추가
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
                    contents: 'FE → Svelte / TypeScript / Scss',
                },
                {
                    contents:
                        '개발하며 유용하게 사용될 수 있는 사이트들을 메모장에 적어두지 않고 웹 페이지에 모아두기 위해 개발',
                },
                {
                    contents: '카드 게임이라는 주제를 가지고 화면 디자인',
                },
                {
                    contents: '정보 추가 및 수정을 위한 목적으로 EmailJS를 이용하여 이메일로 관련 내용 전달 기능 개발',
                },
                {
                    type: 'link',
                    contents: 'Domain → ',
                    link: 'https://ksc-dcollection.netlify.app',
                },
                {
                    type: 'link',
                    contents: 'Git → ',
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
                    contents: 'FE → Next / TypeScript / Redux / Hooks / StyledComponent',
                },
                {
                    contents: '웹 사이트에서 나만의 포트폴리오를 누구나 볼 수 있도록 하기 위해 개발',
                },
                {
                    contents: '공책을 주요 디자인으로 삼아 오프라인에서 포트폴리오를 보는 듯한 느낌의 UI/UX를 개발',
                },
                {
                    type: 'link',
                    contents: 'Domain → ',
                    link: 'https://ksc-portfolio.vercel.app',
                },
                {
                    type: 'link',
                    contents: 'Git → ',
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
                    contents: 'FE → Next / TypeScript / Redux / Hooks / StyledComponent',
                },
                {
                    type: 'code',
                    contents: 'BE → Spring / Mybatis / MySQL',
                },
                {
                    contents: 'Next사용 경험과 CSS역량을 높이기 위해 진행한 개인 프로젝트',
                },
                {
                    contents: '방문했었던 장소에 대한 우리만의 평가를 하여 재방문을 위한 의견에 도움이 되고자 개발',
                },
                {
                    contents: '그룹, 스팟을 선택한 뒤 인스타그램처럼 사진 공유 및 댓글 기능 개발',
                },
                {
                    contents:
                        '방문했던 장소의 평가요소에 따라 점수를 부여하여 평가할 수 있고 전체 평점도 확인할 수 있도록 개발',
                },
                {
                    contents: '설계 단계에서 느껴졌던 복잡함이 사용할 때 그대로 느껴진 아쉬움이 남는 프로젝트',
                },
                {
                    type: 'link',
                    contents: 'Git → ',
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
                    contents: 'FE → React / TypeScript / Redux / Redux-Saga / Hooks / StyledComponent',
                },
                {
                    type: 'code',
                    contents: 'BE → Spring / Mybatis / MySQL / Node',
                },
                {
                    contents: 'TypeScript와 Redux-Saga의 사용 경험을 높이기 위해 진행한 개인 프로젝트',
                },
                {
                    contents: '최근 비대면의 중요성이 증가됨에 따라 역량 확보를 위해 관련 기능 개발',
                },
                {
                    contents: '입장하고자 하는 방을 검색할 수 있고 정해진 인원만큼의 인원만 참여 가능하도록 개발',
                },
                {
                    contents: 'RTCPeerConnection + SocketIO를 사용하여 실시간 화상 회의 및 채팅 개발',
                },
                {
                    type: 'link',
                    contents: 'Git → ',
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
                    contents: 'FE → React / Redux / Hooks / StyledComponent',
                },
                {
                    type: 'code',
                    contents: 'BE → SpringBoot / Mybatis / MySQL / FireBase',
                },
                {
                    contents: 'SSAFY에서 진행한 팀 프로젝트 (5인)',
                },
                {
                    contents: '여행 동행자를 간편하게 매칭하는 것에 도움이 되고자 개발',
                },
                {
                    contents: 'React + FireBase를 이용하여 DM기능 개발',
                },
                {
                    contents: '자신의 위치에 간편하게 낙서(?)할 수 있는 포스트맵 기능 개발',
                },
                {
                    contents:
                        '사용되는 Tool의 숙련도 부족으로 목표한 기능들을 모두 개발하지 못한것에 대해 아쉬움이 남는 프로젝트',
                },
                {
                    type: 'link',
                    contents: 'Git → ',
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
                        <PuzzleTitle>프로젝트</PuzzleTitle>
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
