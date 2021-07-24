import * as React from 'react';
import styled from 'styled-components';
import Main from '../component/main';
import Intro from '../component/intro';
import WhyIt from '../component/whyIt';
import Skills from '../component/skills';
import Career from '../component/career';

const StyledDiv1 = styled.div``;

const Index = (): JSX.Element => {
    const [innerWidth, setInnerWidth] = React.useState<number>(0);

    const titleArray = ['Intro', 'Why It', 'Skills', 'Career', 'Projects', 'More'];

    React.useEffect(() => {
        const changeInnerWidth = () => {
            setInnerWidth(window.innerWidth);
        };

        setInnerWidth(window.innerWidth);
        window.addEventListener('resize', changeInnerWidth);

        return () => {
            window.removeEventListener('resize', changeInnerWidth);
        };
    }, []);

    return (
        <>
            <StyledDiv1>
                <Main innerWidth={innerWidth} titleArray={titleArray} />
                <Intro innerWidth={innerWidth} title={titleArray[0]} />
                <WhyIt title={titleArray[1]} />
                <Skills title={titleArray[2]} />
                <Career title={titleArray[3]} />
            </StyledDiv1>

            <style global jsx>
                {`
                    body {
                        margin: 0;
                        padding: 0;
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
                `}
            </style>
        </>
    );
};

export default Index;
