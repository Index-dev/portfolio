import * as React from 'react';
import Main from '../component/main';
import Intro from '../component/intro';
import WhyIt from '../component/whyIt';
import Skills from '../component/skills';
import Career from '../component/career';
import Init from '../component/init';
import Projects from '../component/projects';
import More from '../component/more';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { indexState } from '../modules/indexReducer';
import { maxWidth } from '../style/style';

const IndexMainContainer = styled.div`
    width: calc(100vw - (100vw - 100%));
`;

const IndexSubContainer = styled.div`
    max-width: ${maxWidth}px;
    margin: 0 auto;
    transform: translateY(7vh);
    position: relative;
`;

const ComponentContainer = styled.div`
    perspective: 4000px;
`;

const Index = (): JSX.Element => {
    // redux
    const isEnd = useSelector((state: indexState) => state.initReducer.isEnd);

    return (
        <>
            {isEnd ? (
                <>
                    <IndexMainContainer>
                        <IndexSubContainer>
                            <ComponentContainer>
                                <Main componentNo={0} />
                                <Intro componentNo={1} />
                                <WhyIt componentNo={2} />
                                <Skills componentNo={3} />
                                <Career componentNo={4} />
                                <Projects componentNo={5} />
                                <More componentNo={6} />
                            </ComponentContainer>
                        </IndexSubContainer>
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
