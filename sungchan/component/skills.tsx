import * as React from 'react';
import Base from './base';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { indexState } from '../modules/indexReducer';

const SkillsContainer = styled.div`
    padding: 20px;
`;

const TitleContainer = styled.div`
    position: relative;
    margin: 24px 0 36px 0;
`;

const TitleMainDiv = styled.div`
    border-top: 1px solid rgba(0, 0, 0, 0.4);
    padding: 12px 0;
`;

interface ITitleSubDiv {
    backgroundColor: string;
}

const TitleSubDiv = styled.div`
    position: absolute;
    background-color: ${(props: ITitleSubDiv) => props.backgroundColor};
    top: -12px;
    left: 12px;
    padding: 0 4px;
`;

const ContentsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 570px) {
        height: 1180px;
        flex-wrap: wrap;
    }

    @media screen and (min-width: 840px) {
        height: 800px;
        flex-wrap: wrap;
    }
`;

const SkillSection = styled.section`
    width: 240px;
    text-align: center;
    margin-bottom: 54px;
`;

const TitleDiv = styled.div`
    padding: 8px 0;
`;

const ImageDiv = styled.div`
    background-color: #fff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 8px;
    box-shadow: 2px 4px 4px #c8c8c8 inset, -2px -4px 4px #c8c8c8 inset;
`;

const MainTitle = styled.span`
    font-weight: 600;
    font-size: min(calc(1.2em + 0.5vw), 1.8em);
`;

const SubTitle = styled.span`
    font-weight: 600;
    font-size: min(calc(0.9em + 0.5vw), 1.1em);
    color: rgba(0, 0, 0, 0.4);
`;

const SkillTitle = styled.span`
    font-weight: bold;
    font-size: min(1.4em + 0.4vw, 1.6em);
    color: #fff;
`;

const SkillImage = styled.img``;

interface ISkills {
    componentNo: number;
}

const Skills: React.FC<ISkills> = ({ componentNo }): JSX.Element => {
    // redux
    const backgroundColorArray = useSelector((state: indexState) => state.baseReducer.backgroundColorArray);

    // variable
    const skillsArray = [
        {
            title: 'FE',
            src: '/image/fe.PNG',
        },
        {
            title: 'Devops',
            src: '/image/devops.PNG',
        },
        {
            title: 'Development',
            src: '/image/development.PNG',
        },
        {
            title: 'BE',
            src: '/image/be.PNG',
        },
    ];

    return (
        <Base componentNo={componentNo}>
            <SkillsContainer>
                <TitleContainer>
                    <TitleSubDiv backgroundColor={backgroundColorArray[componentNo]}>
                        <SubTitle>제목</SubTitle>
                    </TitleSubDiv>
                    <TitleMainDiv>
                        <MainTitle>기술스택이 뭐가 있지..?</MainTitle>
                    </TitleMainDiv>
                </TitleContainer>

                <TitleContainer>
                    <TitleSubDiv backgroundColor={backgroundColorArray[componentNo]}>
                        <SubTitle>내용</SubTitle>
                    </TitleSubDiv>
                    <TitleMainDiv>
                        <ContentsContainer>
                            {skillsArray.map((skill) => {
                                return (
                                    <SkillSection key={skill.title}>
                                        <TitleDiv>
                                            <SkillTitle>{skill.title}</SkillTitle>
                                        </TitleDiv>
                                        <ImageDiv>
                                            <SkillImage src={skill.src} />
                                        </ImageDiv>
                                    </SkillSection>
                                );
                            })}
                        </ContentsContainer>
                    </TitleMainDiv>
                </TitleContainer>
            </SkillsContainer>
        </Base>
    );
};

export default Skills;
