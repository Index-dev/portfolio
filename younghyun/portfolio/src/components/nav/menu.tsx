import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components';

function Menu(props: propsIState) {
    const { toggleMenu } = props
    return (
        <Container>
            <span onClick={toggleMenu}>
                hi
            </span>
        </Container>
    )
}
export default Menu;

interface propsIState {
    toggleMenu: () => void;
}

const appear = keyframes`
    
`;

const Container = styled.div`
    width: 100%;
    height: 100%;

    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }: { theme: ThemeIState }) => theme.primary};
    color: ${({ theme }: { theme: ThemeIState }) => theme.fourth};

    z-index: 99;
`;