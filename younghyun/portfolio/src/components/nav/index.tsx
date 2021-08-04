import React from 'react';
import styled from 'styled-components'

function Navigation() {
    return (
        <Container className="sticky">
            nav
        </Container>
    )
}

export default Navigation;

const Container = styled.div`
    min-width: 30px;
    width: 5vw;
    max-width: 50px;

    min-height: 30px;
    height: 5vw;
    max-height: 50px;
    
    position: sticky;
    top: 30px;
    right: 30px;

    border: 1px solid red;
`;