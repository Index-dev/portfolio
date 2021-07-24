import * as React from 'react';
import Base from './base';
import styled from 'styled-components';

const StyledDiv1 = styled.div`
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

const StyledDiv2 = styled.div`
    width: 240px;
    text-align: center;
    margin-bottom: 54px;
`;

const StyledDiv3 = styled.div`
    padding: 8px 0;
`;

const StyledDiv4 = styled.div``;

const StyledSpan1 = styled.span`
    font-weight: bold;
    font-size: 1.6em;
    color: #fff;
`;

const StyledImg1 = styled.img`
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;

interface ISkill {
    title: string;
}

const Skills: React.FC<ISkill> = ({ title }): JSX.Element => {
    return (
        <Base title={title} backgroundColor="#b79e6a">
            <StyledDiv1>
                <StyledDiv2>
                    <StyledDiv3>
                        <StyledSpan1>FE</StyledSpan1>
                    </StyledDiv3>
                    <StyledDiv4>
                        <StyledImg1 src="/image/fe.PNG" />
                    </StyledDiv4>
                </StyledDiv2>

                <StyledDiv2>
                    <StyledDiv3>
                        <StyledSpan1>Devops</StyledSpan1>
                    </StyledDiv3>
                    <StyledDiv4>
                        <StyledImg1 src="/image/devops.PNG" />
                    </StyledDiv4>
                </StyledDiv2>

                <StyledDiv2>
                    <StyledDiv3>
                        <StyledSpan1>Development</StyledSpan1>
                    </StyledDiv3>
                    <StyledDiv4>
                        <StyledImg1 src="/image/development.PNG" />
                    </StyledDiv4>
                </StyledDiv2>

                <StyledDiv2>
                    <StyledDiv3>
                        <StyledSpan1>BE</StyledSpan1>
                    </StyledDiv3>
                    <StyledDiv4>
                        <StyledImg1 src="/image/be.PNG" />
                    </StyledDiv4>
                </StyledDiv2>
            </StyledDiv1>
        </Base>
    );
};

export default Skills;
