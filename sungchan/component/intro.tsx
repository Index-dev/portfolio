// import * as React from 'react';
// import Base from './base';
// import styled from 'styled-components';
// import { maxWidth } from '../style/style';

// const StyeldDiv2 = styled.div`
//     margin: 0 32px;
//     padding-bottom: 17px;
// `;

// interface IStyledDiv3 {
//     direction?: string; // true면 우측, 그 외 좌측
//     innerWidth: number;
// }

// const StyeldDiv3 = styled.div`
//     overflow-wrap: anywhere;
//     ${(props: IStyledDiv3) => {
//         if (props.innerWidth < maxWidth) {
//             return `
//                 text-align: center;
//             `;
//         } else if (props.direction === 'true') {
//             return `
//                 text-align: right;
//             `;
//         }
//     }}
// `;

// const StyledDiv4 = styled.div`
//     display: inline-block;
//     position: relative;
//     border-top-left-radius: 10px;
//     border-top-right-radius: 10px;
//     border-bottom-left-radius: 10px;
//     border-bottom-right-radius: 10px;
//     padding: 12px;
//     margin: 43px 27px;
//     background-color: #fff;
// `;

// const StyledDiv5 = styled.div`
//     position: absolute;
//     top: -41px;
//     left: -41px;
//     transform: rotate(-25deg);
// `;

// const StyledDiv6 = styled.div`
//     position: absolute;
//     top: -41px;
//     right: -41px;
//     transform: rotate(25deg);
// `;

// const StyledSpan1 = styled.span`
//     font-size: 1.5em;
// `;

// const StyledSpan2 = styled.span`
//     font-size: 1.5em;
//     font-weight: bold;
//     border-bottom: 2px solid #c2655a;
//     color: #c2655a;
// `;

// interface IIntro {
//     innerWidth: number;
//     title: string;
// }

// const Intro: React.FC<IIntro> = ({ innerWidth, title }): JSX.Element => {
//     const boxArray1 = [
//         { title: '이름', description: '김성찬' },
//         { title: '생년월일', description: '94.12.09' },
//     ];
//     const boxArray2 = [
//         { title: '이메일', description: 'tjdcksdl00@naver.com' },
//         { title: '연락처', description: '010-3361-3633' },
//     ];
//     const boxArray3 = [
//         { title: '학교', description: '한양대 ERICA' },
//         { title: '주전공', description: '응용수학' },
//         { title: '부전공', description: '컴퓨터공학' },
//     ];
//     const boxArray4 = [
//         { title: '경력', description: '1년 3개월' },
//         { title: '기술분야', description: 'FE/BE 웹 개발' },
//     ];

//     return (
//         <Base title={title} backgroundColor={'#A5BAA8'}>
//             <StyeldDiv2>
//                 <StyeldDiv3 innerWidth={innerWidth}>
//                     {boxArray1.map((box) => {
//                         return (
//                             <StyledDiv4 key={box.description}>
//                                 <StyledSpan1>{box.description}</StyledSpan1>
//                                 <StyledDiv5>
//                                     <StyledSpan2>{box.title}</StyledSpan2>
//                                 </StyledDiv5>
//                             </StyledDiv4>
//                         );
//                     })}
//                 </StyeldDiv3>

//                 <StyeldDiv3 innerWidth={innerWidth} direction={'true'}>
//                     {boxArray2.map((box) => {
//                         return (
//                             <StyledDiv4 key={box.description}>
//                                 <StyledSpan1>{box.description}</StyledSpan1>
//                                 <StyledDiv6>
//                                     <StyledSpan2>{box.title}</StyledSpan2>
//                                 </StyledDiv6>
//                             </StyledDiv4>
//                         );
//                     })}
//                 </StyeldDiv3>

//                 <StyeldDiv3 innerWidth={innerWidth}>
//                     {boxArray3.map((box) => {
//                         return (
//                             <StyledDiv4 key={box.description}>
//                                 <StyledSpan1>{box.description}</StyledSpan1>
//                                 <StyledDiv5>
//                                     <StyledSpan2>{box.title}</StyledSpan2>
//                                 </StyledDiv5>
//                             </StyledDiv4>
//                         );
//                     })}
//                 </StyeldDiv3>

//                 <StyeldDiv3 innerWidth={innerWidth} direction={'true'}>
//                     {boxArray4.map((box) => {
//                         return (
//                             <StyledDiv4 key={box.description}>
//                                 <StyledSpan1>{box.description}</StyledSpan1>
//                                 <StyledDiv6>
//                                     <StyledSpan2>{box.title}</StyledSpan2>
//                                 </StyledDiv6>
//                             </StyledDiv4>
//                         );
//                     })}
//                 </StyeldDiv3>
//             </StyeldDiv2>
//         </Base>
//     );
// };

// export default Intro;

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
        { title: '경력', description: '1년 3개월' },
        { title: '기술분야', description: 'FE/BE 웹 개발' },
    ];

    // useEffect
    React.useEffect(() => {
        getAddSections();
    }, []);

    // normal
    // contents를 제외한 부가 너비 구하기
    const getAddSections = () => {
        const totalCount = introContainerRef.current.clientHeight / (contentsSectionRef.current.clientHeight + 30);

        const addSections = [];
        for (let i = 0; i < totalCount - contentsArray.length; i++) {
            addSections.push(i);
        }

        setAddSections(addSections);
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
