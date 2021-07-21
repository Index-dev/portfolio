import * as React from 'react';
import Base from './base';
import styled from 'styled-components';

const StyledDiv1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 22px;

    @media screen and (min-width: 570px) {
        height: 960px;
        flex-wrap: wrap;
    }

    @media screen and (min-width: 840px) {
        height: 640px;
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
`;

interface ISkill {
    title: string;
}

const Skills: React.FC<ISkill> = ({ title }): JSX.Element => {
    return (
        <Base title={title}>
            <StyledDiv1>
                <StyledDiv2>
                    <StyledDiv3>
                        <StyledSpan1>FE</StyledSpan1>
                    </StyledDiv3>
                    <StyledDiv4>
                        <img src="/image/fe.PNG" />
                    </StyledDiv4>
                </StyledDiv2>

                <StyledDiv2>
                    <StyledDiv3>
                        <StyledSpan1>Devops</StyledSpan1>
                    </StyledDiv3>
                    <StyledDiv4>
                        <img src="/image/devops.PNG" />
                    </StyledDiv4>
                </StyledDiv2>

                <StyledDiv2>
                    <StyledDiv3>
                        <StyledSpan1>Development</StyledSpan1>
                    </StyledDiv3>
                    <StyledDiv4>
                        <img src="/image/development.PNG" />
                    </StyledDiv4>
                </StyledDiv2>

                <StyledDiv2>
                    <StyledDiv3>
                        <StyledSpan1>BE</StyledSpan1>
                    </StyledDiv3>
                    <StyledDiv4>
                        <img src="/image/be.PNG" />
                    </StyledDiv4>
                </StyledDiv2>
            </StyledDiv1>
        </Base>
    );
};

export default Skills;
