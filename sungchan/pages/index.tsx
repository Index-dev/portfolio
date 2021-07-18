import * as React from 'react';
import styled from 'styled-components';

export const maxWidth = 960;

const StyledNav1 = styled.nav`
    margin: 0 auto;
    max-width: ${maxWidth}px;
`;

const StyledUl1 = styled.ul`
    position: fixed;
    top: 0;
    list-style-type: none;
    margin: 0;
    padding: 0;

    & > li {
        display: inline-block;
        margin: 0 17px;
    }
`;

const StyledA = styled.a`
    text-decoration: none;
    color: #000;
`;

const StyledSection = styled.section`
    background-image: url(/image/mainImage.jpg);
    background-repeat: no-repeat;
    background-size: 100%;
`;

const StyledDiv1 = styled.div`
    margin: 0 auto;
    max-width: ${maxWidth}px;
    height: 580px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const StyledTitle = styled.h1`
    font-size: 5em;
    color: #fff;
    margin: 0;
    padding: 0;
`;

const StyledSubTitle = styled.h3`
    color: #fff;
`;

const StyledH3_1 = styled.h3`
    color: #fff;
`;

const Index = (): JSX.Element => {
    const navTitles = ['Who Am I', 'Why IT', 'Skills', 'Career', 'Projects', 'More'];

    return (
        <>
            <StyledNav1>
                <StyledUl1>
                    {navTitles.map((navTitle) => {
                        return (
                            <li key={navTitle}>
                                <StyledA href="#">
                                    <StyledH3_1>{navTitle}</StyledH3_1>
                                </StyledA>
                            </li>
                        );
                    })}
                </StyledUl1>
            </StyledNav1>

            <StyledSection>
                <StyledDiv1>
                    <StyledTitle>김성찬의 Portfolio</StyledTitle>
                    <StyledSubTitle>Since 2021</StyledSubTitle>
                </StyledDiv1>
            </StyledSection>

            <style global jsx>
                {`
                    body {
                        margin: 0;
                        padding: 0;
                    }
                `}
            </style>
        </>
    );
};

export default Index;
