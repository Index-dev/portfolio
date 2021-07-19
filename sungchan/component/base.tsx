import * as React from 'react';
import styled from 'styled-components';
import { maxWidth } from '../style/style';

const StyledDiv1 = styled.div`
    width: 100%;
    border: 1px solid black;
`;

const StyledDiv2 = styled.div`
    max-width: ${maxWidth}px;
    margin: 0 auto;
    border: 1px solid black;
`;

interface IBaseComponent {
    children: React.ReactNode;
}

const Base: React.FC<IBaseComponent> = ({ children }): JSX.Element => {
    return (
        <>
            <StyledDiv1>
                <StyledDiv2>{children}</StyledDiv2>
            </StyledDiv1>
        </>
    );
};

export default Base;
