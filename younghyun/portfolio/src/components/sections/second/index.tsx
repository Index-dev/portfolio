import React, { useEffect } from "react";
import styled from "styled-components";

function SecondSection(props: propsIState) {
    const { isPC, isTablet, secContRef, currentSecRef, currentSecScrollRef } =
        props;

    useEffect(() => {
        if (secContRef.current) {
            secContRef.current.addEventListener("scroll", () => {
                if (
                    (currentSecRef.current === 0 &&
                        currentSecScrollRef.current > 0.5) ||
                    (currentSecRef.current === 1 &&
                        currentSecScrollRef.current < 0.5)
                ) {
                    console.log("drawing icon");
                } else {
                    console.log("remove icon");
                }
            });
        }
    });

    return (
        <ScrollSnapWrapper>
            <Conatainer></Conatainer>
        </ScrollSnapWrapper>
    );
}

export default SecondSection;

interface propsIState {
    isPC: boolean;
    isTablet: boolean;
    secContRef: React.RefObject<HTMLDivElement>;
    currentSecRef: React.MutableRefObject<number>;
    currentSecScrollRef: React.MutableRefObject<number>;
}

const ScrollSnapWrapper = styled.section`
    width: 100%;
    height: 100vh;

    flex: none;
    @supports (scroll-snap-align: center) {
        scroll-snap-align: center;
    }

    border: 1px solid ${({ theme }: { theme: ThemeIState }) => theme.secondary};
`;

const Conatainer = styled.div``;
