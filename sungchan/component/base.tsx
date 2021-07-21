import * as React from 'react';
import styled from 'styled-components';
import { maxWidth } from '../style/style';

interface IStyledSection1 {
    isMain: boolean;
}

const StyledSection1 = styled.section`
    ${(props: IStyledSection1) => {
        if (props.isMain) {
            return `
                background-image: url('/image/mainImage.jpg');
                background-repeat: no-repeat;
                background-size: cover;
            `;
        }
    }}
`;

interface IStyeldDiv2 {
    isMain: boolean;
}

const StyledDiv2 = styled.div`
    max-width: ${maxWidth}px;
    margin: 0 auto;
    padding: 0 15px;
    background-color: ${(props: IStyeldDiv2) => (props.isMain ? '' : '#3424')};

    @media screen and (min-width: ${maxWidth + 50}px) {
        margin-bottom: 82px;
        ${(props: IStyeldDiv2) => {
            if (!props.isMain) {
                return `
                    border-top-left-radius: 18px;
                    border-top-right-radius: 18px;
                    border-bottom-left-radius: 18px;
                    border-bottom-right-radius: 18px;
                `;
            }
        }}
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
    isMain?: boolean;
    title?: string;
}

const Base: React.FC<IBaseComponent> = ({ children, isMain, title }): JSX.Element => {
    const [showTitle, setShowTitle] = React.useState<boolean>(false);

    const div1Ref = React.useRef<HTMLDivElement>();

    React.useEffect(() => {
        const changeScroll = () => {
            if (div1Ref.current) {
                if (window.innerHeight >= div1Ref.current.getBoundingClientRect().top + 48) {
                    setShowTitle(true);
                } else {
                    setShowTitle(false);
                }
            }
        };

        window.addEventListener('scroll', changeScroll);
        changeScroll();

        if (div1Ref.current) {
            div1Ref.current.id = title;
        }

        return () => {
            window.removeEventListener('scroll', changeScroll);
        };
    }, []);

    return (
        <>
            <StyledSection1 ref={div1Ref} isMain={isMain}>
                <StyledDiv2 isMain={isMain}>
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
