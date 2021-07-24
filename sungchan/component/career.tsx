import * as React from 'react';
import Base from './base';
import styled from 'styled-components';

const StyledDiv1 = styled.div`
    text-align: center;
    padding: 0 18px;

    @media screen and (min-width: 520px) {
        padding: 0 54px;
    }
`;

const StyledDiv2 = styled.div`
    padding: 16px 0 48px 0;

    @media screen and (min-width: 840px) {
        display: flex;
        justify-content: space-between;
    }
`;

const StyledDiv3 = styled.div`
    display: inline-block;
    margin-bottom: 38px;
`;

const StyledDiv4 = styled.div`
    display: inline-block;
`;

const StyledSpan1 = styled.span`
    color: #fff;
`;

interface ICareer {
    title: string;
}

const Career: React.FC<ICareer> = ({ title }): JSX.Element => {
    return (
        <Base title={title} backgroundColor="#c68377">
            <StyledDiv1>
                <StyledDiv2>
                    <StyledDiv3>
                        <img style={{ width: '232px' }} src="/image/ssafy.PNG" />
                    </StyledDiv3>
                    <StyledDiv4>
                        <StyledSpan1>싸피에서는 이런걸 했습니다.</StyledSpan1> <br />
                        <StyledSpan1>싸피에서는 이런걸 했습니다. 싸피에서는 이런걸 했습니다</StyledSpan1> <br />
                        <StyledSpan1>싸피에서는 이런걸 했습니다. 싸피에서는 이런걸 했습니다</StyledSpan1> <br />
                        <StyledSpan1>싸피에서는 이런걸 했습니다. 싸피에서는 이런걸 했습니다</StyledSpan1> <br />
                        <StyledSpan1>싸피에서는 이런걸 했습니다. 싸피에서는 이런걸 했습니다</StyledSpan1> <br />
                        <StyledSpan1>싸피에서는 이런걸 했습니다. 싸피에서는 이런걸 했습니다</StyledSpan1> <br />
                        <StyledSpan1>싸피에서는 이런걸 했습니다. 싸피에서는 이런걸 했습니다</StyledSpan1> <br />
                        <StyledSpan1>싸피에서는 이런걸 했습니다. 싸피에서는 이런걸 했습니다</StyledSpan1> <br />
                        <StyledSpan1>싸피에서는 이런걸 했습니다. 싸피에서는 이런걸 했습니다</StyledSpan1> <br />
                        <StyledSpan1>싸피에서는 이런걸 했습니다. 싸피에서는 이런걸 했습니다</StyledSpan1> <br />
                    </StyledDiv4>
                </StyledDiv2>

                <StyledDiv2>
                    <StyledDiv3>
                        <img style={{ width: '232px' }} src="/image/autoever.PNG" />
                    </StyledDiv3>
                    <StyledDiv4>
                        <StyledSpan1>오토에버에서는 이런걸 했습니다.</StyledSpan1> <br />
                        <StyledSpan1>오토에버에서는 이런걸 했습니다.오토에버에서는 이런걸 했습니다.</StyledSpan1> <br />
                    </StyledDiv4>
                </StyledDiv2>
            </StyledDiv1>
        </Base>
    );
};

export default Career;
