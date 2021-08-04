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
    0%{ 
        transform: translate3d(100%, 0, 0);
    }
    90% {
        transform: translate3d(20%, 0, 0);
    }
    100% {
        transform: translate3d(0%, 0, 0);
    }
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
    
    transform: translate3d(-100%, 0, 0);
    animation: ${appear} 0.3s linear forwards;

    z-index: 99;
`;