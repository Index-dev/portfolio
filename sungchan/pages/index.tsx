import * as React from 'react';
import styled from 'styled-components';
import Main from '../component/main';
import WhoAmI from '../component/whoAmI';

interface IStyledDiv1 {
    innerWidth: number;
    count: number;
}

const StyledDiv1 = styled.div`
    display: flex;
    width: ${(props: IStyledDiv1) => props.innerWidth * (props.count + 2)}px; // 로테이션을 위해 2개만큼 더 늘리기
    height: 100%;
    overflow: hidden;
`;

const Index = (): JSX.Element => {
    const [innerWidth, setInnerWidth] = React.useState<number>(0);

    const div1Ref = React.useRef<HTMLDivElement>();

    const count = 2;
    let index = 1;
    let mousePress = false;
    let clientX = 0;

    React.useEffect(() => {
        setInnerWidth(window.innerWidth);

        const resizeAction = () => {
            setInnerWidth(window.innerWidth);
            div1Ref.current.style.transform = `translateX(${-(window.innerWidth * index)}px)`;
        };

        window.addEventListener('resize', resizeAction);

        return () => {
            window.removeEventListener('resize', resizeAction);
        };
    }, []);

    const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        mousePress = true;
        clientX = e.clientX;
    };

    const onMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
        mousePress = false;
        if (div1Ref.current) {
            if (e.clientX - clientX >= innerWidth / 3) {
                // 우측으로 넘어가는 경우
                index++;
                if (index > count) {
                    index = 1;
                }
            } else if (clientX - e.clientX >= innerWidth / 3) {
                // 좌측으로 넘어가는 경우
                index--;
                if (index < 1) {
                    index = count;
                }
            }

            div1Ref.current.style.transform = `translateX(${-(innerWidth * index)}px)`;
        }
    };

    const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        // 마우스를 눌렀을 때만 이벤트 반응하기
        if (mousePress) {
            if (div1Ref.current) {
                div1Ref.current.style.transform = `translateX(${-(innerWidth * index) + e.clientX - clientX}px)`;
            }
        }
    };

    return (
        <>
            <StyledDiv1
                innerWidth={innerWidth}
                count={count}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                onMouseMove={onMouseMove}
                ref={div1Ref}
            >
                {/* 로테이션을 위한 마지막 컴포넌트 등록 */}
                <WhoAmI />

                {/* 실제 보여지는 컴포넌트 */}
                <Main />
                <WhoAmI />

                {/* 로테이션을 위한 첫 번째 컴포넌트 등록 */}
                <Main />
            </StyledDiv1>

            <style global jsx>
                {`
                    body {
                        margin: 0;
                        padding: 0;
                        overflow-x: hidden;
                    }
                `}
            </style>
        </>
    );
};

export default Index;
