import * as React from 'react';
import styled from 'styled-components';
import Base from './base';

const IntroContainer = styled.div`
    height: calc(100% - 56px);
    padding: 28px 22px;
`;

interface IContentsSection {
    height?: number;
}

const ContentsSection = styled.section`
    display: grid;
    grid-template-columns: 3fr 7fr;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    padding-bottom: 8px;
    margin-bottom: 22px;

    height: ${(props: IContentsSection) => props.height}px;
`;

const ContentsTitle = styled.span`
    font-weight: 600;
    font-size: min(calc(0.8em + 0.8vw), 1.1em);
    color: rgba(0, 0, 0, 0.4);
`;

const ContentsDescription = styled.span`
    font-weight: 600;
    font-size: min(calc(1em + 1vw), 1.8em);
`;

interface IIntro {
    componentNo: number;
}

const Intro: React.FC<IIntro> = ({ componentNo }): JSX.Element => {
    // state
    const [addSections, setAddSections] = React.useState<number[]>([]);
    const [addSectionsTimeout, setAddSectionsTimeout] = React.useState<NodeJS.Timeout>();

    // ref
    const introContainerRef = React.useRef<HTMLDivElement>();
    const contentsSectionRef = React.useRef<HTMLDivElement>();

    // variable
    const contentsArray = [
        { title: '이름', description: '김성찬' },
        { title: '생년월일', description: '94.12.09' },
        { title: '이메일', description: 'tjdcksdl00@naver.com' },
        { title: '연락처', description: '010-3361-3633' },
        { title: '학교', description: '한양대 ERICA' },
        { title: '주전공', description: '응용수학' },
        { title: '부전공', description: '컴퓨터공학' },
        { title: '경력', description: '1년' },
        { title: '기술분야', description: 'FE/BE 웹 개발' },
    ];

    // useEffect
    React.useEffect(() => {
        window.addEventListener('resize', getAddSections);
        getAddSections();

        return () => {
            window.removeEventListener('resize', getAddSections);
        };
    }, []);

    // normal
    // contents를 제외한 부가 너비 구하기
    const getAddSections = () => {
        // transition으로 인해 height가 1초 뒤에 올바른 높이를 바라보므로 timeout 구현
        clearTimeout(addSectionsTimeout);

        const timeout = setTimeout(() => {
            const totalCount = introContainerRef.current.clientHeight / (contentsSectionRef.current.clientHeight + 30);

            const addSections = [];
            for (let i = 0; i < totalCount - contentsArray.length; i++) {
                addSections.push(i);
            }

            setAddSections(addSections);
        }, 1000);

        setAddSectionsTimeout(timeout);
    };

    return (
        <Base componentNo={componentNo}>
            <IntroContainer ref={introContainerRef}>
                {contentsArray.map((contents, index) => {
                    if (index === 0) {
                        return (
                            <ContentsSection key={index} ref={contentsSectionRef}>
                                <ContentsTitle>{contents.title}</ContentsTitle>
                                <ContentsDescription>{contents.description}</ContentsDescription>
                            </ContentsSection>
                        );
                    } else {
                        return (
                            <ContentsSection key={index}>
                                <ContentsTitle>{contents.title}</ContentsTitle>
                                <ContentsDescription>{contents.description}</ContentsDescription>
                            </ContentsSection>
                        );
                    }
                })}

                {addSections.map((addSection) => {
                    return (
                        <ContentsSection key={addSection} height={contentsSectionRef.current.clientHeight - 8}>
                            <ContentsTitle />
                            <ContentsDescription />
                        </ContentsSection>
                    );
                })}
            </IntroContainer>
        </Base>
    );
};

export default Intro;
