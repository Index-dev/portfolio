import * as React from 'react';
import styled from 'styled-components';
import { maxWidth } from '../style/style';

const StyledSection1 = styled.section``;

interface IStyledDiv2 {
    backgroundColor: string;
}

const StyledDiv2 = styled.div`
    max-width: ${maxWidth}px;
    margin: 0 auto;
    padding: 0 15px;
    background-color: ${(props: IStyledDiv2) => props.backgroundColor};

    @media screen and (min-width: ${maxWidth + 50}px) {
        margin-bottom: 84px;
        border-top-left-radius: 18px;
        border-top-right-radius: 18px;
        border-bottom-left-radius: 18px;
        border-bottom-right-radius: 18px;
        box-shadow: 2px 2px 12px ${(props: IStyledDiv2) => props.backgroundColor};
    }
`;

interface IStyledDiv3 {
    title: string;
    showTitle: boolean;
}

const StyledDiv3 = styled.div`
    ${(props: IStyledDiv3) => {
        if (props.title) {
            if (props.showTitle) {
                return `
                    dispaly: block;
                    transform: translateY(0);
                    opacity: 1;
                `;
            } else {
                return `
                    dispaly: block;
                    transform: translateY(60px);
                    opacity: 0;
                `;
            }
        } else {
            return `
                display: none;
            `;
        }
    }}

    display: ${(props: IStyledDiv3) => (props.title ? 'block' : 'none')};
    padding: 24px 0;
    transition-duration: 1.8s;
    transition-timing-function: ease-out;
`;

const StyledTitle = styled.span`
    font-weight: bold;
    font-size: 2.4em;
`;

interface IBaseComponent {
    children: React.ReactNode;
    title: string;
    backgroundColor: string;
}

const Base: React.FC<IBaseComponent> = ({ children, title, backgroundColor }): JSX.Element => {
    // state
    const [showTitle, setShowTitle] = React.useState<boolean>(false);
    const [isClick, setIsClick] = React.useState<boolean>(false);
    const [savePosition, setSavePosition] = React.useState<number>(0);

    // ref
    const div1Ref = React.useRef<HTMLDivElement>();
    const div2Ref = React.useRef<HTMLDivElement>();

    // variable
    let isClickVariable = false;

    // useEffect
    React.useEffect(() => {
        scrollTitle();
        resizeSection1();

        if (div1Ref.current) {
            div1Ref.current.id = title;
        }
    }, []);

    React.useEffect(() => {
        isClickVariable = false;
        window.addEventListener('scroll', scrollTitle);

        return () => {
            window.removeEventListener('scroll', scrollTitle);
        };
    }, [isClick]);

    React.useEffect(() => {
        window.addEventListener('resize', resizeSection1);

        return () => {
            window.removeEventListener('resize', resizeSection1);
        };
    }, [isClick]);

    // onClick
    const onClickDiv2 = () => {
        if (div1Ref.current) {
            if (isClick) {
                div1Ref.current.style.transition = '';
                div1Ref.current.style.transform = '';
                div1Ref.current.style.margin = '';
                setIsClick(false);
                window.scrollTo(0, savePosition);
            } else {
                const scrollY = window.scrollY; // 현재 스크롤 높이
                const distance = div1Ref.current && div1Ref.current.getBoundingClientRect().top; // div의 top에 도달할 떄까지 남은 거리
                const gabY = (window.innerHeight - (div1Ref.current && div1Ref.current.clientHeight)) / 2; // (화면 높이 - div 높이) / 2
                const gabX = (window.innerWidth - (div2Ref.current && div2Ref.current.clientWidth)) / 2; // (화면 너비 - div 너비) / 2

                if (gabY > 0 && gabX > 0 && window.innerWidth >= maxWidth + 50) {
                    setSavePosition(scrollY + distance - gabY); // 중앙 위치
                    if (gabY > 84) {
                        window.scrollTo(0, scrollY + distance - gabY + (gabY - 84));
                    } else {
                        window.scrollTo(0, scrollY + distance - gabY);
                    }

                    const blankY = 1 + (gabY / (div2Ref.current && div2Ref.current.clientHeight)) * 2; // (div 여비 높이 / div 높이) * 2
                    const blankX = 1 + (gabX / (div2Ref.current && div2Ref.current.clientWidth)) * 2; // (div 여비 너비 / div 너비) * 2

                    div1Ref.current.style.transition = '1s';
                    div1Ref.current.style.transform = `scale(${Math.min(blankY, blankX)})`;
                    div1Ref.current.style.margin = `${gabY}px 0`;
                    setIsClick(true);
                }
            }
        }
    };

    // normal
    const resizeSection1 = () => {
        const gabY = (window.innerHeight - (div1Ref.current && div1Ref.current.clientHeight)) / 2; // (화면 높이 - div 높이) / 2
        const gabX = (window.innerWidth - (div2Ref.current && div2Ref.current.clientWidth)) / 2; // (화면 너비 - div 너비) / 2

        if (isClick) {
            if (gabY > 0 && gabX > 0 && window.innerWidth >= maxWidth + 50) {
                const blankY = 1 + (gabY / (div2Ref.current && div2Ref.current.clientHeight)) * 2; // (div 여비 높이 / div 높이) * 2
                const blankX = 1 + (gabX / (div2Ref.current && div2Ref.current.clientWidth)) * 2; // (div 여비 너비 / div 너비) * 2

                div1Ref.current.style.transition = '';
                div1Ref.current.style.transform = `scale(${Math.min(blankY, blankX)})`;
                div1Ref.current.style.margin = `${gabY}px 0`;
            } else {
                div1Ref.current.style.transition = '';
                div1Ref.current.style.transform = '';
                div1Ref.current.style.margin = '';
            }
        }

        if (div2Ref.current) {
            if (gabY > 0 && gabX > 0 && window.innerWidth >= maxWidth + 50) {
                div2Ref.current.style.cursor = 'pointer';
            } else {
                div2Ref.current.style.cursor = '';
            }
        }
    };

    const scrollTitle = () => {
        if (div1Ref.current) {
            if (window.innerHeight >= div1Ref.current.getBoundingClientRect().top + 48) {
                setShowTitle(true);
            } else {
                setShowTitle(false);
            }

            if (isClickVariable) {
                div1Ref.current.style.transition = '';
                div1Ref.current.style.transform = '';
                div1Ref.current.style.margin = '';
                setIsClick(false);
            }

            if (isClick) {
                isClickVariable = true;
            }
        }
    };

    return (
        <>
            <StyledSection1 ref={div1Ref}>
                <StyledDiv2 backgroundColor={backgroundColor} ref={div2Ref} onClick={onClickDiv2}>
                    <StyledDiv3 title={title} showTitle={showTitle}>
                        <StyledTitle># {title}</StyledTitle>
                    </StyledDiv3>

                    {children}
                </StyledDiv2>
            </StyledSection1>
        </>
    );
};

export default Base;
