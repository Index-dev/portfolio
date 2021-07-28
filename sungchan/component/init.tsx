import * as React from 'react';
import styled from 'styled-components';
import indexStore from '../modules/indexStore';
import { useObserver } from 'mobx-react';

const Container = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    z-index: 100;
`;

const TitleDiv = styled.div`
    padding: 10px;
    overflow-wrap: anywhere;
`;

const MainSection = styled.section`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const MainTitle = styled.span`
    color: #fff;
    font-size: 1.4em;
`;

interface IColorSpan {
    color: string;
}

const ColorSpan = styled.span`
    color: ${(props: IColorSpan) => props.color};
    font-weight: 600;
`;

const TitleCursor = styled.span`
    border-right: 7px solid #fff;
    border-left: 6px solid #000;
    display: none;
`;

const Init = (): JSX.Element => {
    // mobx
    const { initStore } = indexStore();

    // ref
    const containerRef = React.useRef<HTMLDivElement>();

    const typingStringRef1 = React.useRef<HTMLSpanElement>();
    const typingStringRef2 = React.useRef<HTMLSpanElement>();
    const typingStringRef3 = React.useRef<HTMLSpanElement>();
    const typingStringRef4 = React.useRef<HTMLSpanElement>();
    const typingStringRef5 = React.useRef<HTMLSpanElement>();
    const typingStringRef6 = React.useRef<HTMLSpanElement>();
    const typingStringRef7 = React.useRef<HTMLSpanElement>();
    const typingStringRef8 = React.useRef<HTMLSpanElement>();

    const typingCursor1 = React.useRef<HTMLSpanElement>();
    const typingCursor2 = React.useRef<HTMLSpanElement>();
    const typingCursor3 = React.useRef<HTMLSpanElement>();
    const typingCursor4 = React.useRef<HTMLSpanElement>();

    // variable
    const time = 100;

    const strings = [
        'C:\\Users\\User\\Desktop\\portfolio\\sungchan>',
        'npm',
        ' run start ',
        'ready',
        ' - started portfolio of sungchan, url: https://kscportfolio.com',
        'wait',
        ' - compiling...',
        'event',
        ' - compiled succesfully',
    ];

    const stringObjs = [
        {
            string: strings[0],
            start: 0,
            length: 0,
        },
        {
            string: strings[1],
            start: 0,
            length: time * strings[1].length,
        },
        {
            string: strings[2],
            start: time * strings[1].length,
            length: time * strings[2].length,
        },
        {
            string: strings[3],
            start: time * (strings[1].length + strings[2].length + strings[3].length),
            length: 0,
        },
        {
            string: strings[4],
            start: time * (strings[1].length + strings[2].length + strings[3].length),
            length: 0,
        },
        {
            string: strings[5],
            start: time * (strings[1].length + strings[2].length + strings[3].length + strings[5].length),
            length: 0,
        },
        {
            string: strings[6],
            start: time * (strings[1].length + strings[2].length + strings[3].length + strings[5].length),
            length: 0,
        },
        {
            string: strings[7],
            start:
                time *
                (strings[1].length + strings[2].length + strings[3].length + strings[5].length + strings[7].length),
            length: 0,
        },
        {
            string: strings[8],
            start:
                time *
                (strings[1].length + strings[2].length + strings[3].length + strings[5].length + strings[7].length),
            length: 0,
        },
    ];

    React.useEffect(() => {
        setTypingStringAction1(typingStringRef1, 1);
        setTypingStringAction1(typingStringRef2, 2);
        setTypingStringAction2(typingStringRef3, 3);
        setTypingStringAction2(typingStringRef4, 4);
        setTypingStringAction2(typingStringRef5, 5);
        setTypingStringAction2(typingStringRef6, 6);
        setTypingStringAction2(typingStringRef7, 7);
        setTypingStringAction2(typingStringRef8, 8);

        setTypingCursorAction(typingCursor1, 0, stringObjs[2].start + stringObjs[2].length);
        setTypingCursorAction(typingCursor2, stringObjs[2].start + stringObjs[2].length, stringObjs[3].start);
        setTypingCursorAction(typingCursor3, stringObjs[3].start, stringObjs[5].start);
        setTypingCursorAction(typingCursor4, stringObjs[5].start, stringObjs[7].start);

        setTimeout(() => {
            initStore.setIsEnd(true);
        }, stringObjs[7].start + time * 5);
    }, []);

    // 타이핑 처리가 이루어지는 액션 (글자 하나씩)
    const setTypingStringAction1 = (
        ref: React.MutableRefObject<HTMLSpanElement>, // 타이핑 처리될 ref
        index: number, // 사용될 string obj 인덱스
    ) => {
        if (ref.current) {
            setTimeout(() => {
                let charIndex = 0;
                ref.current.innerHTML = '';

                const typingInterval = setInterval(() => {
                    ref.current.innerHTML = ref.current.innerHTML + stringObjs[index].string[charIndex++];
                }, time);

                setTimeout(() => {
                    clearInterval(typingInterval);
                }, stringObjs[index].length);
            }, stringObjs[index].start);
        }
    };

    // 타이핑 처리가 이루어지는 액션 (문장 하나씩)
    const setTypingStringAction2 = (
        ref: React.MutableRefObject<HTMLSpanElement>, // 타이핑 처리될 ref
        index: number, // 사용될 string obj 인덱스
    ) => {
        if (ref.current) {
            setTimeout(() => {
                ref.current.innerHTML = stringObjs[index].string;
            }, stringObjs[index].start);
        }
    };

    const setTypingCursorAction = (
        ref: React.MutableRefObject<HTMLSpanElement>, // 타이핑 처리될 ref
        start: number, // 액션 시작 시간
        length: number, // 액션 길이
    ) => {
        if (ref.current) {
            setTimeout(() => {
                ref.current.style.display = 'inline';
            }, start);

            setTimeout(() => {
                ref.current.style.display = 'none';
            }, length);
        }
    };

    return useObserver(() => (
        <Container ref={containerRef}>
            <MainSection>
                <TitleDiv>
                    <MainTitle>{stringObjs[0].string}</MainTitle>
                    <MainTitle>
                        <ColorSpan color="#fff100" ref={typingStringRef1} />
                        <span ref={typingStringRef2} />
                    </MainTitle>
                    <TitleCursor ref={typingCursor1} />
                </TitleDiv>

                <TitleDiv>
                    <MainTitle>
                        <ColorSpan color="#229300" ref={typingStringRef3} />
                        <span ref={typingStringRef4} />
                    </MainTitle>
                    <TitleCursor ref={typingCursor2} />
                </TitleDiv>
                <TitleDiv>
                    <MainTitle>
                        <ColorSpan color="#006a7c" ref={typingStringRef5} />
                        <span ref={typingStringRef6} />
                    </MainTitle>
                    <TitleCursor ref={typingCursor3} />
                </TitleDiv>
                <TitleDiv>
                    <MainTitle>
                        <ColorSpan color="#68008a" ref={typingStringRef7} />
                        <span ref={typingStringRef8} />
                    </MainTitle>
                    <TitleCursor ref={typingCursor4} />
                </TitleDiv>
            </MainSection>
        </Container>
    ));
};

export default Init;
