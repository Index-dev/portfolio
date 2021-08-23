import * as React from 'react';
import Base from './base';
import styled from 'styled-components';

const MoreContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    min-height: 100%;
`;

const HeaderSection = styled.section`
    margin: 24px 0;
    padding: 0 24px;
`;

const UrlSection = styled.section`
    margin: 8px 0;
    padding: 0 24px;
`;

const FooterSection = styled.section`
    margin: 48px 0;
    padding: 0 24px;
`;

const UrlMainDiv = styled.div`
    display: inline-block;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    padding: 12px;
    margin: 0 24px 24px 0;
    cursor: pointer;
    background-color: #fff;
    transition-duration: 0.4s;

    &:hover {
        transform: translateY(-10px);
    }
`;

const UrlSubDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FooterMainDiv = styled.div`
    display: inline-block;
    padding: 12px;
    margin: 0 24px 24px 0;
`;

const FooterSubDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HeaderText = styled.span`
    display: block;
    font-weight: 600;
    font-size: min(1.9em, 1.3em + 1vw);
`;

const UrlText = styled.span`
    font-weight: 600;
    font-size: min(1.2em, 1em + 0.7vw);
    margin: 8px 0;
`;

const FooterText = styled.span`
    display: block;
    font-weight: 600;
    font-size: min(1.5em, 1.1em + 0.9vw);
`;

const UrlImage = styled.img`
    width: min(8em, 5em + 6.4vw);
`;

const LogoImage = styled.img`
    width: min(8em, 5em + 6.4vw);
    margin: 12px 0;
`;

interface IMore {
    componentNo: number;
}

const More: React.FC<IMore> = ({ componentNo }): JSX.Element => {
    // onClick
    const onClickUrlMainDiv = (url: string) => {
        window.open(url);
    };

    return (
        <Base componentNo={componentNo}>
            <MoreContainer>
                <HeaderSection>
                    <HeaderText>김성찬의 Portfolio</HeaderText>
                    <HeaderText>Version 1.0.0</HeaderText>
                    <HeaderText>2021.08.23</HeaderText>
                </HeaderSection>

                <UrlSection>
                    <UrlMainDiv onClick={() => onClickUrlMainDiv('https://github.com/ksccmp')}>
                        <UrlSubDiv>
                            <UrlImage src="/image/github.PNG" />
                            <UrlText>https://github.com/ksccmp</UrlText>
                        </UrlSubDiv>
                    </UrlMainDiv>
                    <UrlMainDiv onClick={() => onClickUrlMainDiv('https://jforj.tistory.com')}>
                        <UrlSubDiv>
                            <UrlImage src="/image/tistory.PNG" />
                            <UrlText>https://jforj.tistory.com</UrlText>
                        </UrlSubDiv>
                    </UrlMainDiv>
                </UrlSection>

                <FooterSection>
                    <FooterMainDiv>
                        <FooterSubDiv>
                            <FooterText>Designed By 김성찬</FooterText>
                            <LogoImage src="/image/SCLogo2.svg" />
                        </FooterSubDiv>
                    </FooterMainDiv>
                </FooterSection>
            </MoreContainer>
        </Base>
    );
};

export default More;
