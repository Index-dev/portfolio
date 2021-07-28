import * as React from 'react';
import Base from './base';
import styled from 'styled-components';

const MainSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 22px;

    @media screen and (min-width: 570px) {
        height: 1080px;
        flex-wrap: wrap;
    }

    @media screen and (min-width: 840px) {
        height: 720px;
        flex-wrap: wrap;
    }
`;

const BoxCotainer = styled.div`
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

const BoxTitle = styled.span`
    font-weight: bold;
    font-size: 1.6em;
    color: #fff;
`;

const BoxImage = styled.img``;

const Skills = (): JSX.Element => {
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
        <Base containerNo={3}>
            <MainSection>
                {skillsArray.map((skill) => {
                    return (
                        <BoxCotainer key={skill.title}>
                            <TitleDiv>
                                <BoxTitle>{skill.title}</BoxTitle>
                            </TitleDiv>
                            <ImageDiv>
                                <BoxImage src={skill.src} />
                            </ImageDiv>
                        </BoxCotainer>
                    );
                })}
            </MainSection>
        </Base>
    );
};

export default Skills;
