import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components';

function Menu(props: propsIState) {
    const { toggleNav } = props
    return (
        <Container>
            <span onClick={toggleNav}>
                hi
            </span>
        </Container>
    )
}
export default Menu;

interface propsIState {
    toggleNav: () => void;
}


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