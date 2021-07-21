import * as React from 'react';
import Base from './base';
import styled, { keyframes } from 'styled-components';
import { maxWidth } from '../style/style';

const StyledDiv1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 82px 0;
`;

interface IStyeldDiv2 {
    innerWidth: number;
}

const StyledDiv2 = styled.div`
    display: ${(props: IStyeldDiv2) => (props.innerWidth >= maxWidth ? 'block' : 'none')};
    text-align: center;
    margin: 68px 0;
`;

const div3KeyFrame1 = keyframes`
    50% {
        transform: translateY(-10px);
    }
`;

const StyledDiv3 = styled.div`
    display: inline-block;
    cursor: pointer;

    &:hover {
        animation: 1.8s ${div3KeyFrame1} infinite;
    }
`;

const StyledDiv4 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 152px;
    height: 152px;
    border-radius: 50%;
    background-color: #fad232;
    margin: 16px 32px;
`;

const StyledDiv5 = styled.div`
    display: flex;
    justify-content: center;
`;

const StyledTitle = styled.span`
    font-weight: bold;
    font-size: 4.8em;
    color: #fff;
    text-align: center;
`;

const StyledSubTitle = styled.span`
    font-size: 1.3em;
    color: #fff;
`;

const StyledH3_1 = styled.h3``;

const StyledSpan1 = styled.span`
    font-weight: bold;
`;

interface IMain {
    innerWidth: number;
    titleArray: string[];
}

const Main: React.FC<IMain> = ({ innerWidth, titleArray }): JSX.Element => {
    const onClickDiv3 = (title: string) => {
        const titleSection = document.getElementById(title);

        if (titleSection) {
            titleSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Base isMain={true}>
            <StyledDiv5>
                <StyledDiv2 innerWidth={innerWidth}>
                    {titleArray.map((title) => {
                        return (
                            <StyledDiv3 key={title} onClick={() => onClickDiv3(title)}>
                                <StyledDiv4>
                                    <StyledH3_1>{title}</StyledH3_1>
                                    <StyledSpan1>Go →</StyledSpan1>
                                </StyledDiv4>
                            </StyledDiv3>
                        );
                    })}
                </StyledDiv2>

                <StyledDiv1>
                    <StyledTitle>김성찬의 Portfolio</StyledTitle>
                    <StyledSubTitle>Since 2021</StyledSubTitle>
                </StyledDiv1>
            </StyledDiv5>
        </Base>
    );
};

export default Main;
