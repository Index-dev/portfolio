import React, { useEffect, useRef } from "react";
import styled from "styled-components";

function Navigation() {
    const navRef = useRef<HTMLDivElement>(null);
    const svgRef = useRef<SVGSVGElement>(null);
    const topPathRef = useRef<SVGPathElement>(null);
    const middlePathRef = useRef<SVGPathElement>(null);
    const bottomPathRef = useRef<SVGPathElement>(null);

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

    useEffect(() => {
        if (svgRef.current) {
            svgRef.current.addEventListener("mouseover", () => {
                if (topPathRef.current) {
                    topPathRef.current.style.opacity = "0.9";
                    topPathRef.current.style.strokeWidth = "6";
                }
                if (middlePathRef.current) {
                    middlePathRef.current.style.strokeDasharray =
                        "0 12 20.5 12";
                }
                if (bottomPathRef.current) {
                    bottomPathRef.current.style.opacity = "0.9";
                    bottomPathRef.current.style.strokeWidth = "6";
                }
            });
            svgRef.current.addEventListener("mouseout", () => {
                if (topPathRef.current) {
                    topPathRef.current.style.opacity = "0.7";
                    topPathRef.current.style.strokeWidth = "5";
                }
                if (middlePathRef.current) {
                    middlePathRef.current.style.strokeDasharray = "0 0 44.5 0";
                }
                if (bottomPathRef.current) {
                    bottomPathRef.current.style.opacity = "0.7";
                    bottomPathRef.current.style.strokeWidth = "5";
                }
            });
        }
    }, []);

    return (
        <Container ref={navRef}>
            <SVG
                viewBox="0 0 45 40"
                xmlns="http://www.w3.org/2000/svg"
                ref={svgRef}
            >
                <Path d="M0 2.5H44.5" ref={topPathRef} />
                <Path
                    d="M0 19.5H44.5"
                    ref={middlePathRef}
                    strokeDasharray="0 0 44.5 0"
                />
                <Path d="M0 37.5H44.5" ref={bottomPathRef} />
            </SVG>
        </Container>
    );
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
    right: 5vw;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const SVG = styled.svg`
    width: 70%;
    height: 70%;

    fill: ${({ theme }: { theme: ThemeIState }) => theme.primary};

    cursor: pointer;
`;

const Path = styled.path`
    stroke: ${({ theme }: { theme: ThemeIState }) => theme.primary};
    stroke-width: 5;

    opacity: 0.7;
    transition: all 0.2s linear;

    transform: translate3d(0, 10, 0);
`;
