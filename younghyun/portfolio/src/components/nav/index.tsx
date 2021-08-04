import React, { useEffect, useRef } from "react";
import styled from "styled-components";

function Navigation() {
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.addEventListener("scroll", () => {
            if (navRef.current) {
                const stickyPoint = window.innerHeight * 0.03;
                const absolutePoint = window.innerHeight * 0.08;
                if (stickyPoint <= window.pageYOffset) {
                    navRef.current.style.position = "fixed";
                    navRef.current.style.top = "3vh";
                } else if (absolutePoint >= window.pageYOffset) {
                    navRef.current.style.position = "absolute";
                    navRef.current.style.top = "8vh";
                }
            }
        });
    });

    return <Container ref={navRef}>nav</Container>;
}

export default Navigation;

const Container = styled.div`
    min-width: 40px;
    width: 5vw;
    max-width: 50px;

    min-height: 40px;
    height: 5vw;
    max-height: 50px;

    position: absolute;
    top: 8vh;
    right: 30px;

    border: 1px solid red;
`;
