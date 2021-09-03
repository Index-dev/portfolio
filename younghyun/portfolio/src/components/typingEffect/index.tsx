import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { splitChar } from "components/typingEffect/char";

function TypingEffect(props: PropsIState) {
  const [resultText, setResult] = useState("");

  useEffect(() => {
    setTimeout(() => {
      let result = props.text.split(""); // 한글자씩자름
      let typing = [] as Array<Array<string>>;

      //각글자 초성,중성,종성으로 나눔
      for (let i = 0; i < result.length; i++) {
        typing[i] = splitChar(result[i]);
      }

      let text = "";
      let i = 0;
      let j = -1;

      //총글자수
      let imax = typing.length;

      //setInterval을 이용해 반복적으로 출력
      let inter = setInterval(type, props.intervalTime);

      function type() {
        //글자수만큼 반복후 종료
        if (i <= imax - 1) {
          //각 글자가 초성 중성 종성 순서대로 추가되도록
          let jmax = typing[i].length;
          j++;
          if (typing[i][j] !== undefined) setResult(text + typing[i][j]);
          if (j === jmax) {
            text += typing[i][j - 1];
            //초성중성종성 순서대로 출력된 글자는 저장 ( 다음 글자와 이어붙이기 위해서 )
            i++;
            j = -1;
          }
        } else {
          clearInterval(inter);
        }
      }
    }, props.delay || 0);
  }, [props]);

  return <Text blink={props.blink}>{resultText}</Text>;
}
export default TypingEffect;

interface PropsIState {
  text: string;
  intervalTime: number;
  blink: number;
  delay?: number;
}
const cursorEffect = keyframes`
    0% {
        border-right: 1px solid #000000;
    } 
    50% {
        border-right: 1px solid #f2f2f2;
    } 
    100% {
        border-right: 1px solid #000000;
    }
`;

const Text = styled.div`
  display: inline-block;
  animation: ${cursorEffect} 0.8s;
  animation-iteration-count: ${(props: { blink: number }) => props.blink};
`;
