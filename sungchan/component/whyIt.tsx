// import * as React from 'react';
// import Base from './base';
// import styled from 'styled-components';

// const StyledDiv1 = styled.div`
//     margin: 0 24px;
//     padding: 22px 0 53px 0;
//     text-align: right;
// `;

// const StyledDiv2 = styled.div`
//     display: inline-block;
//     padding: 32px 24px;
//     text-align: left;
// `;

// const StyledSpan1 = styled.span`
//     display: block;
//     color: #fff;
// `;

// const StyledSpan2 = styled.span`
//     display: block;
//     color: #fff;
// `;

// interface IWhyIt {
//     title: string;
// }

// const WhyIt: React.FC<IWhyIt> = ({ title }): JSX.Element => {
//     return (
//         <Base title={title} backgroundColor="#6A9194">
//             <StyledDiv1>
//                 <StyledDiv2>
//                     <StyledSpan1>IT를 왜 시작하게 되었을까?</StyledSpan1>
//                     <StyledSpan2>이런 이유 때문이다. 이런 이유 때문이다. 이런 이유 때문이다.</StyledSpan2>
//                     <StyledSpan2>이런 이유 때문이다.</StyledSpan2>
//                     <StyledSpan2>이런 이유 때문이다.</StyledSpan2>
//                     <StyledSpan2>이런 이유 때문이다.</StyledSpan2>
//                     <StyledSpan2>이런 이유 때문이다.</StyledSpan2>
//                     <StyledSpan2>이런 이유 때문이다.</StyledSpan2>
//                     <StyledSpan2>이런 이유 때문이다. 이런 이유 때문이다. 이런 이유 때문이다.</StyledSpan2>
//                     <StyledSpan2>이런 이유 때문이다. 이런 이유 때문이다. 이런 이유 때문이다.</StyledSpan2>
//                     <StyledSpan2>이런 이유 때문이다. 이런 이유 때문이다. 이런 이유 때문이다.</StyledSpan2>
//                     <StyledSpan2>이런 이유 때문이다. 이런 이유 때문이다. 이런 이유 때문이다.</StyledSpan2>
//                     <StyledSpan2>이런 이유 때문이다. 이런 이유 때문이다. 이런 이유 때문이다.</StyledSpan2>
//                 </StyledDiv2>
//             </StyledDiv1>
//         </Base>
//     );
// };

// export default WhyIt;

import * as React from 'react';
import Base from './base';
import styled, { keyframes } from 'styled-components';

const WhyItContainer = styled.div`
    padding: 20px;
`;

const TitleContainer = styled.div`
    position: relative;
    margin: 24px 0 52px 0;
`;

const TitleMainDiv = styled.div`
    border-top: 1px solid rgba(0, 0, 0, 0.4);
    padding: 12px 0;
`;

const TitleSubDiv = styled.div`
    position: absolute;
    background-color: #6a9194;
    top: -12px;
    left: 12px;
    padding: 0 4px;
`;

const QAContaier = styled.div`
    width: 100%;
    text-align: center;

    @media screen and (min-width: 860px) {
        display: flex;
        justify-content: center;
    }
`;

const QuestionSection = styled.section`
    padding: 0 20px 0 20px;
`;

const AnswerSection = styled.section`
    padding: 0 20px 0 20px;
`;

const questionNumberKeyframe = keyframes`
    0% {
        transform: rotate(-10deg);
    }

    50% {
        transform: rotate(10deg);
    }

    100% {
        transform: rotate(-10deg);
    }
`;

const QuestionDiv = styled.div`
    background-color: #fff;
    padding: 20px;
    margin: 24px 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    text-align: left;
    box-shadow: 2px 4px 4px #c8c8c8 inset, -2px -4px 4px #c8c8c8 inset;
    cursor: pointer;

    &:hover {
        & > div > span:first-child {
            animation-name: ${questionNumberKeyframe};
            animation-duration: 2s;
            animation-iteration-count: infinite;
        }
    }
`;

const QuestionSubDiv = styled.div`
    display: flex;
    align-items: center;
`;

const AnswerDiv = styled.div`
    min-height: calc(248px + 30vh);
    background-color: #fff;
    padding: 20px;
    margin: 24px 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: 2px 4px 4px #c8c8c8 inset, -2px -4px 4px #c8c8c8 inset;

    @media screen and (min-width: 860px) {
        display: flex;
        justify-content: center;

        width: min(calc(16em + 12vw), 26em);
    }
`;

const MainTitle = styled.span`
    font-weight: 600;
    font-size: min(calc(1.2em + 0.5vw), 1.8em);
`;

const SubTitle = styled.span`
    font-weight: 600;
    font-size: min(calc(0.9em + 0.5vw), 1.1em);
    color: rgba(0, 0, 0, 0.4);
`;

interface IQuestionTitle {
    color: string;
}

const QuestionTitle = styled.span`
    font-weight: 600;
    font-size: min(calc(18px + 0.2vw), 1.4em);
    color: ${(props: IQuestionTitle) => props.color};
`;

const AnswerTitle = styled.span`
    font-weight: 600;
`;

interface IQuestionNumber {
    isClick: boolean;
}

const QuestionNumber = styled.span`
    display: inline-block;
    font-weight: 600;
    font-size: min(calc(24px + 0.6vw), 2em);
    color: #f15e5e;
    transform: rotate(-10deg);
    margin-right: 12px;

    animation-name: ${(props: IQuestionNumber) => (props.isClick ? questionNumberKeyframe : '')};
    animation-duration: 2s;
    animation-iteration-count: infinite;
`;

interface IWhyIt {
    componentNo: number;
}

const WhyIt: React.FC<IWhyIt> = ({ componentNo }): JSX.Element => {
    // state
    const [questionIndex, setQuestionIndex] = React.useState<number>(-1);
    const [typingTimer, setTypingTimer] = React.useState<NodeJS.Timer>();

    // ref
    const answerTitleRef = React.useRef<HTMLSpanElement>();
    const answerDivRef = React.useRef<HTMLDivElement>();

    // variable
    const qnaArray = [
        {
            question: 'IT에 관심가진 시기',
            answer: 'IT에 관심가진 시기',
        },

        {
            question: 'IT에 관심을 가지게 된 계기',
            answer: `IT에 관심을 가지게 된 계기\n\nㅎㅎㅎㅎ`,
        },

        {
            question: '개발자를 선택한 이유',
            answer: '개발자를 선택한 이유',
        },
    ];

    const questionColor = ['#8FC15B', '#F19023', '#63C1A9'];

    // onClick
    const onClickQuestion = (index: number) => {
        setQuestionIndex(index); // 질문 index
        const time = 50; // 글자 나오는 속도

        if (answerTitleRef.current && answerDivRef.current) {
            let charIndex = 0;
            clearInterval(typingTimer); // 기존 interval 종료
            answerTitleRef.current.innerHTML = '';
            answerTitleRef.current.style.color = questionColor[index];
            answerDivRef.current.style.boxShadow = `2px 4px 4px ${questionColor[index]} inset, -2px -4px 4px ${questionColor[index]} inset`;

            const typingInterval = setInterval(() => {
                // 타이핑 처리
                if (qnaArray[index].answer[charIndex] === '\n') {
                    // 개행 문자일 경우
                    answerTitleRef.current.innerHTML += '<br />';
                    charIndex++;
                } else {
                    // 개행 문자가 아닐 경우
                    answerTitleRef.current.innerHTML += qnaArray[index].answer[charIndex++];
                }
            }, time);

            setTypingTimer(typingInterval); // 현재 interval 등록

            // 모든 문자가 처리되는 시간에 도달하면 interval 종료
            setTimeout(() => {
                clearInterval(typingInterval);
            }, qnaArray[index].answer.length * time);
        }
    };

    return (
        <Base componentNo={componentNo}>
            <WhyItContainer>
                <TitleContainer>
                    <TitleSubDiv>
                        <SubTitle>제목</SubTitle>
                    </TitleSubDiv>
                    <TitleMainDiv>
                        <MainTitle>왜 개발자가 되려고 했더라..?</MainTitle>
                    </TitleMainDiv>
                </TitleContainer>

                <TitleContainer>
                    <TitleSubDiv>
                        <SubTitle>내용</SubTitle>
                    </TitleSubDiv>
                    <TitleMainDiv>
                        <QAContaier>
                            <QuestionSection>
                                {qnaArray.map((qna, index) => {
                                    return (
                                        <QuestionDiv key={qna.answer} onClick={(e) => onClickQuestion(index)}>
                                            <QuestionSubDiv>
                                                <QuestionNumber isClick={questionIndex === index}>
                                                    Q{index + 1}.{' '}
                                                </QuestionNumber>
                                                <QuestionTitle color={questionColor[index]}>
                                                    {qna.question}
                                                </QuestionTitle>
                                            </QuestionSubDiv>
                                        </QuestionDiv>
                                    );
                                })}
                            </QuestionSection>

                            <AnswerSection>
                                <AnswerDiv ref={answerDivRef}>
                                    <AnswerTitle ref={answerTitleRef}>
                                        {questionIndex >= 0 ? '' : '궁금하신 질문을 선택해주세요.'}
                                    </AnswerTitle>
                                </AnswerDiv>
                            </AnswerSection>
                        </QAContaier>
                    </TitleMainDiv>
                </TitleContainer>
            </WhyItContainer>
        </Base>
    );
};

export default WhyIt;
