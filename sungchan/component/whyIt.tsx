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
    margin: 24px 0 36px 0;
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
            question: 'IT??? ???????????? ??????',
            answer: `IT??? ?????? ????????? ????????? ??? ????????? ????????? 1??????????????????.`,
        },

        {
            question: 'IT??? ????????? ????????? ??? ??????',
            answer: `????????? 1????????? ???????????? C???????????????????????? ????????? ?????? ??????????????? ??????????????????.\n\n
                     ???????????? ???????????? ????????? ?????? ????????? ????????? ???????????? ????????? ?????????????????? ?????? ????????? ????????? ??????????????? ??????????????????.`,
        },

        {
            question: '???????????? ????????? ??????',
            answer: `??? ????????? ????????? ???????????? ??? ?????? ????????? ?????? ????????? ???????????????.\n\n
                     C??????????????? ????????? ?????? ????????? ?????? ????????? ??? ????????? ????????? ????????? ?????? ????????? ?????? ????????? ???????????????.\n\n
                     ????????? ????????? ???????????? ?????????????????? ?????? ?????? ???????????? ?????????! ????????????.\n\n
                     ???????????? ???????????? ?????? ????????? ????????? ??? ??? ????????? ??????????????? ???????????? ?????? ???????????? ????????? ???????????? ?????? ???????????? ???????????????.\n\n
                     ????????? ?????? ????????? ?????? ????????? ???????????? ????????? ????????? ????????? ???????????? ??? ?????? ???????????? ????????????, ???????????? ???????????? ????????? ????????? ???????????????.
                     `,
        },
    ];

    const questionColor = ['#8FC15B', '#F19023', '#63C1A9'];

    // onClick
    const onClickQuestion = (index: number) => {
        setQuestionIndex(index); // ?????? index
        const time = 35; // ?????? ????????? ??????

        if (answerTitleRef.current && answerDivRef.current) {
            let charIndex = 0;
            clearInterval(typingTimer); // ?????? interval ??????
            answerTitleRef.current.innerHTML = '';
            answerTitleRef.current.style.color = questionColor[index];
            answerDivRef.current.style.boxShadow = `2px 4px 4px ${questionColor[index]} inset, -2px -4px 4px ${questionColor[index]} inset`;

            const typingInterval = setInterval(() => {
                // ????????? ??????
                if (qnaArray[index].answer[charIndex] === '\n') {
                    // ?????? ????????? ??????
                    answerTitleRef.current.innerHTML += '<br />';
                    charIndex++;
                } else {
                    // ?????? ????????? ?????? ??????
                    answerTitleRef.current.innerHTML += qnaArray[index].answer[charIndex++];
                }
            }, time);

            setTypingTimer(typingInterval); // ?????? interval ??????

            // ?????? ????????? ???????????? ????????? ???????????? interval ??????
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
                        <SubTitle>??????</SubTitle>
                    </TitleSubDiv>
                    <TitleMainDiv>
                        <MainTitle>??? ???????????? ????????? ?????????..?</MainTitle>
                    </TitleMainDiv>
                </TitleContainer>

                <TitleContainer>
                    <TitleSubDiv backgroundColor={backgroundColorArray[componentNo]}>
                        <SubTitle>??????</SubTitle>
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
                                        {questionIndex >= 0 ? '' : '???????????? ????????? ??????????????????.'}
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
