import * as React from 'react';
import Base from './base';
import styled from 'styled-components';
import { useObserver } from 'mobx-react';

const MainSection = styled.div`
    text-align: center;
`;

const MainDiv = styled.div`
    padding-bottom: 54px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    @media screen and (min-width: 620px) {
        flex-wrap: nowrap;
    }
`;

const ImageDiv = styled.div`
    margin: 0 25px 38px 25px;
`;

const TextDiv = styled.div`
    margin: 0 25px;
    background-color: #fff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: 2px 4px 4px #c8c8c8 inset, -2px -4px 4px #c8c8c8 inset;
    padding: 12px 18px;
`;

const TextTitleDiv = styled.div`
    margin-bottom: 18px;
`;

const TextDescriptionDiv = styled.div`
    text-align: left;
`;

const PictureContainer = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 101;
    top: 0;
    cursor: pointer;
`;

interface ITextTitle {
    color: string;
}

const TextTitle = styled.span`
    font-weight: 600;
    font-size: calc(17px + 0.5vw);
    color: ${(props: ITextTitle) => props.color};
`;

interface ITextDescription {
    type?: string;
}

const TextDescription = styled.span`
    display: block;
    margin: 23px 0;
    font-weight: 600;
    font-size: calc(15px + 0.2vw);

    ${(props: ITextDescription) => {
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
    }}
`;

const CareerImage = styled.img`
    width: calc(200px + 5.8vw);
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
                <MainSection>
                    <MainDiv>
                        <ImageDiv>
                            <CareerImage src="/image/ssafy.PNG" />
                        </ImageDiv>
                        <TextDiv>
                            <TextTitleDiv>
                                <TextTitle color={'#33bdda'}>삼성 청년 소프트웨어 아카데미</TextTitle>
                            </TextTitleDiv>
                            <TextDescriptionDiv>
                                <TextDescription type="calendar">19.07 ~ 20.03</TextDescription>
                                <TextDescription type="camera" onClick={(e) => onClickCamera(e, '/image/topScore.jpg')}>
                                    1학기 반 대표 성적 우수상 취득
                                </TextDescription>
                                <TextDescription
                                    type="camera"
                                    onClick={(e) => onClickCamera(e, '/image/abroadEducation.jpg')}
                                >
                                    해외 연수 대상자로 발탁
                                </TextDescription>
                                <TextDescription>웹 기반 기초 및 심화 교육 수강</TextDescription>
                                <TextDescription
                                    type="camera"
                                    onClick={(e) => onClickCamera(e, '/image/swexpertScore.PNG')}
                                >
                                    삼성 SW 역량 테스트 A+ 취득
                                </TextDescription>
                            </TextDescriptionDiv>
                        </TextDiv>
                    </MainDiv>

                    <MainDiv>
                        <ImageDiv>
                            <CareerImage src="/image/autoever.PNG" />
                        </ImageDiv>
                        <TextDiv>
                            <TextTitleDiv>
                                <TextTitle color={'#1e2768'}>현대 오토에버</TextTitle>
                            </TextTitleDiv>
                            <TextDescriptionDiv>
                                <TextDescription type="calendar">20.03 ~ 현재</TextDescription>
                                <TextDescription type="position">
                                    자동차 품질 개선 시스템 FE/BE 개발 및 운영
                                </TextDescription>
                                <TextDescription>
                                    팀 내 Git 도입 및 사내 직원들에게 Git사용 방법 교육 담당
                                </TextDescription>
                                <TextDescription>팀 내 신기술 적용 담당</TextDescription>
                                <TextDescription>서비스 효율화를 위한 시스템 개편 프로젝트 진행</TextDescription>
                                <TextDescription>
                                    서비스 속도 개선을 위해 React를 이용한 최적화 작업 진행
                                </TextDescription>
                                <TextDescription>외부 시스템과 연계를 위한 공용 Rest API 개발</TextDescription>
                            </TextDescriptionDiv>
                        </TextDiv>
                    </MainDiv>
                </MainSection>
            </Base>

            <PictureContainer ref={pictureContainerRef} onClick={onClickPictureContainer}>
                <PictureImage src={pictureImage} />
            </PictureContainer>
        </>
    );
};

export default Career;
