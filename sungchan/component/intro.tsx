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

import { useObserver } from 'mobx-react';
import * as React from 'react';
import styled from 'styled-components';
import indexStore from '../modules/indexStore';
import { maxWidth } from '../style/style';
import Base from './base';

const BoxSection = styled.section`
    margin: 0 32px;
    padding-bottom: 17px;
`;

interface IBoxContainer {
    direction?: string; // true면 우측, 그 외 좌측
    innerWidth: number;
}

const BoxContainer = styled.div`
    overflow-wrap: anywhere;
    ${(props: IBoxContainer) => {
        if (props.innerWidth < maxWidth) {
            return `
                text-align: center;
            `;
        } else if (props.direction === 'true') {
            return `
                text-align: right;
            `;
        }
    }}
`;

const BoxMainDiv = styled.div`
    display: inline-block;
    position: relative;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 18px;
    margin: 43px 27px;
    background-color: #fff;
    box-shadow: 2px 4px 4px #c8c8c8 inset, -2px -4px 4px #c8c8c8 inset;
`;

const BoxLeftDiv = styled.div`
    position: absolute;
    top: calc(-38px - 0.8vw);
    left: calc(-38px - 0.8vw);
    transform: rotate(-25deg);
`;

const BoxRightDiv = styled.div`
    position: absolute;
    top: calc(-38px - 0.8vw);
    right: calc(-38px - 0.8vw);
    transform: rotate(25deg);
`;

const BoxDescription = styled.span`
    font-size: calc(28px + 0.4vw);
`;

const BoxTitle = styled.span`
    font-size: calc(23px + 0.4vw);
    font-weight: bold;
    border-bottom: 2px solid #c2655a;
    color: #c2655a;
`;

const Intro = (): JSX.Element => {
    // mobx
    const { baseStore } = indexStore();

    // variable
    const boxArray1 = [
        { title: '이름', description: '김성찬' },
        { title: '생년월일', description: '94.12.09' },
    ];
    const boxArray2 = [
        { title: '이메일', description: 'tjdcksdl00@naver.com' },
        { title: '연락처', description: '010-3361-3633' },
    ];
    const boxArray3 = [
        { title: '학교', description: '한양대 ERICA' },
        { title: '주전공', description: '응용수학' },
        { title: '부전공', description: '컴퓨터공학' },
    ];
    const boxArray4 = [
        { title: '경력', description: '1년 3개월' },
        { title: '기술분야', description: 'FE/BE 웹 개발' },
    ];

    return useObserver(() => (
        <Base containerNo={1}>
            <BoxSection>
                <BoxContainer innerWidth={baseStore.innerWidth}>
                    {boxArray1.map((box) => {
                        return (
                            <BoxMainDiv key={box.description}>
                                <BoxDescription>{box.description}</BoxDescription>
                                <BoxLeftDiv>
                                    <BoxTitle>{box.title}</BoxTitle>
                                </BoxLeftDiv>
                            </BoxMainDiv>
                        );
                    })}
                </BoxContainer>

                <BoxContainer innerWidth={baseStore.innerWidth} direction={'true'}>
                    {boxArray2.map((box) => {
                        return (
                            <BoxMainDiv key={box.description}>
                                <BoxDescription>{box.description}</BoxDescription>
                                <BoxRightDiv>
                                    <BoxTitle>{box.title}</BoxTitle>
                                </BoxRightDiv>
                            </BoxMainDiv>
                        );
                    })}
                </BoxContainer>

                <BoxContainer innerWidth={baseStore.innerWidth}>
                    {boxArray3.map((box) => {
                        return (
                            <BoxMainDiv key={box.description}>
                                <BoxDescription>{box.description}</BoxDescription>
                                <BoxLeftDiv>
                                    <BoxTitle>{box.title}</BoxTitle>
                                </BoxLeftDiv>
                            </BoxMainDiv>
                        );
                    })}
                </BoxContainer>

                <BoxContainer innerWidth={baseStore.innerWidth} direction={'true'}>
                    {boxArray4.map((box) => {
                        return (
                            <BoxMainDiv key={box.description}>
                                <BoxDescription>{box.description}</BoxDescription>
                                <BoxRightDiv>
                                    <BoxTitle>{box.title}</BoxTitle>
                                </BoxRightDiv>
                            </BoxMainDiv>
                        );
                    })}
                </BoxContainer>
            </BoxSection>
        </Base>
    ));
};

export default Intro;
