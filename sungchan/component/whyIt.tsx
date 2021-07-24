import * as React from 'react';
import Base from './base';
import styled from 'styled-components';

const StyledDiv1 = styled.div`
    margin: 0 24px;
    padding: 22px 0 53px 0;
    text-align: right;
`;

const StyledDiv2 = styled.div`
    display: inline-block;
    padding: 32px 24px;
    text-align: left;
`;

const StyledSpan1 = styled.span`
    display: block;
    color: #fff;
`;

const StyledSpan2 = styled.span`
    display: block;
    color: #fff;
`;

interface IWhyIt {
    title: string;
}

const WhyIt: React.FC<IWhyIt> = ({ title }): JSX.Element => {
    return (
        <Base title={title} backgroundColor="#6A9194">
            <StyledDiv1>
                <StyledDiv2>
                    <StyledSpan1>IT를 왜 시작하게 되었을까?</StyledSpan1>
                    <StyledSpan2>이런 이유 때문이다. 이런 이유 때문이다. 이런 이유 때문이다.</StyledSpan2>
                    <StyledSpan2>이런 이유 때문이다.</StyledSpan2>
                    <StyledSpan2>이런 이유 때문이다.</StyledSpan2>
                    <StyledSpan2>이런 이유 때문이다.</StyledSpan2>
                    <StyledSpan2>이런 이유 때문이다.</StyledSpan2>
                    <StyledSpan2>이런 이유 때문이다.</StyledSpan2>
                    <StyledSpan2>이런 이유 때문이다. 이런 이유 때문이다. 이런 이유 때문이다.</StyledSpan2>
                    <StyledSpan2>이런 이유 때문이다. 이런 이유 때문이다. 이런 이유 때문이다.</StyledSpan2>
                    <StyledSpan2>이런 이유 때문이다. 이런 이유 때문이다. 이런 이유 때문이다.</StyledSpan2>
                    <StyledSpan2>이런 이유 때문이다. 이런 이유 때문이다. 이런 이유 때문이다.</StyledSpan2>
                    <StyledSpan2>이런 이유 때문이다. 이런 이유 때문이다. 이런 이유 때문이다.</StyledSpan2>
                </StyledDiv2>
            </StyledDiv1>
        </Base>
    );
};

export default WhyIt;
