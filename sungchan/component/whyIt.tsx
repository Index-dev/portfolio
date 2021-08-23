import * as React from 'react';
import Base from './base';
import styled, { keyframes } from 'styled-components';
import { useSelector } from 'react-redux';
import { indexState } from '../modules/indexReducer';

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

interface ITitleSubDiv {
    backgroundColor: string;
}

const TitleSubDiv = styled.div`
    position: absolute;
    background-color: ${(props: ITitleSubDiv) => props.backgroundColor};
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
    // redux
    const backgroundColorArray = useSelector((state: indexState) => state.baseReducer.backgroundColorArray);

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
            answer: `IT에 처음 관심을 가지게 된 시기는 대학교 1학년때입니다.`,
        },

        {
            question: 'IT에 관심을 가지게 된 계기',
            answer: `대학교 1학년때 수강했던 C프로그래밍이라는 수업을 듣고 관심가지기 시작했습니다.\n\n
                     컴퓨터를 이용하여 코드를 짜고 원하는 동작을 컴퓨터가 그대로 실행시켜주는 것에 흥미를 느끼며 관심가지기 시작했습니다.`,
        },

        {
            question: '개발자를 선택한 이유',
            answer: `제 생각을 코드로 표현해낼 수 있는 사람이 되고 싶었기 때문입니다.\n\n
                     C프로그래밍 수업을 들은 이후로 관련 공부를 더 해보고 싶어서 혼자서 개발 언어에 대해 독학을 했었습니다.\n\n
                     공부를 해보고 느낀점은 프로그래밍을 하는 것이 신기하고 재밌다! 였습니다.\n\n
                     왜냐하면 컴퓨터가 제가 생각한 동작을 할 수 있도록 논리적으로 생각하며 소스 코드라는 문제를 해결하는 것이 즐거웠기 때문입니다.\n\n
                     미래에 이런 일들을 하는 직업을 선택하게 된다면 즐겁게 업무를 수행해낼 수 있을 것이라고 생각했고, 개발자가 되겠다는 마음을 가지게 되었습니다.
                     `,
        },
    ];

    const questionColor = ['#8FC15B', '#F19023', '#63C1A9'];

    // onClick
    const onClickQuestion = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
        setQuestionIndex(index); // 질문 index
        const time = 35; // 글자 나오는 속도
        e.stopPropagation();

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
                    <TitleSubDiv backgroundColor={backgroundColorArray[componentNo]}>
                        <SubTitle>제목</SubTitle>
                    </TitleSubDiv>
                    <TitleMainDiv>
                        <MainTitle>왜 개발자가 되려고 했더라..?</MainTitle>
                    </TitleMainDiv>
                </TitleContainer>

                <TitleContainer>
                    <TitleSubDiv backgroundColor={backgroundColorArray[componentNo]}>
                        <SubTitle>내용</SubTitle>
                    </TitleSubDiv>
                    <TitleMainDiv>
                        <QAContaier>
                            <QuestionSection>
                                {qnaArray.map((qna, index) => {
                                    return (
                                        <QuestionDiv key={qna.answer} onClick={(e) => onClickQuestion(e, index)}>
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
