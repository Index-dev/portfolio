// import * as React from 'react';
// import styled, { keyframes } from 'styled-components';
// import { maxWidth } from '../style/style';

// const StyledSection1 = styled.section`
//     background-image: url('/image/mainImage.jpg');
//     background-repeat: no-repeat;
//     background-size: cover;
// `;

// const StyledDiv1 = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     padding: 82px 0;
// `;

// interface IStyeldDiv2 {
//     innerWidth: number;
// }

// const StyledDiv2 = styled.div`
//     display: ${(props: IStyeldDiv2) => (props.innerWidth >= maxWidth ? 'block' : 'none')};
//     text-align: center;
//     margin: 68px 0;
// `;

// const div3KeyFrame1 = keyframes`
//     50% {
//         transform: translateY(-10px);
//     }
// `;

// const StyledDiv3 = styled.div`
//     display: inline-block;
//     cursor: pointer;

//     &:hover {
//         animation: 1.8s ${div3KeyFrame1} infinite;
//     }
// `;

// const StyledDiv4 = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     width: 152px;
//     height: 152px;
//     border-radius: 50%;
//     background-color: #caf0be;
//     margin: 16px 32px;
// `;

// const StyledDiv5 = styled.div`
//     display: flex;
//     justify-content: center;
// `;

// const StyledDiv6 = styled.div`
//     max-width: ${maxWidth}px;
//     margin: 0 auto;
//     padding: 0 15px;

//     @media screen and (min-width: ${maxWidth + 50}px) {
//         margin-bottom: 84px;
//     }
// `;

// const StyledTitle = styled.span`
//     font-weight: bold;
//     font-size: 3.6em;
//     color: #fff;
//     text-align: center;

//     @media screen and (min-width: 480px) {
//         font-size: 4.8em;
//     }
// `;

// const StyledSubTitle = styled.span`
//     font-size: 1.3em;
//     color: #fff;
// `;

// const StyledH3_1 = styled.h3`
//     font-size: 1.4em;
//     color: #658c59;
// `;

// const StyledSpan1 = styled.span`
//     font-weight: bold;
//     color: #3a5233;
// `;

// interface IMain {
//     innerWidth: number;
//     titleArray: string[];
// }

// const Main: React.FC<IMain> = ({ innerWidth, titleArray }): JSX.Element => {
//     const onClickDiv3 = (title: string) => {
//         const titleSection = document.getElementById(title);

//         if (titleSection) {
//             window.scrollBy({ top: titleSection.getBoundingClientRect().top, behavior: 'smooth' });
//         }
//     };

//     return (
//         <StyledSection1>
//             <StyledDiv6>
//                 <StyledDiv5>
//                     <StyledDiv2 innerWidth={innerWidth}>
//                         {titleArray.map((title) => {
//                             return (
//                                 <StyledDiv3 key={title} onClick={() => onClickDiv3(title)}>
//                                     <StyledDiv4>
//                                         <StyledH3_1>{title}</StyledH3_1>
//                                         <StyledSpan1>Go →</StyledSpan1>
//                                     </StyledDiv4>
//                                 </StyledDiv3>
//                             );
//                         })}
//                     </StyledDiv2>

//                     <StyledDiv1>
//                         <StyledTitle>김성찬의 Portfolio</StyledTitle>
//                         <StyledSubTitle>Since 2021</StyledSubTitle>
//                     </StyledDiv1>
//                 </StyledDiv5>
//             </StyledDiv6>
//         </StyledSection1>
//     );
// };

// export default Main;

import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { maxWidth } from '../style/style';
import Base from './base';

const MenuDivKeyFrame = keyframes`
    0% {
        transform: translateX(-300px) rotate(0);
    }

    90% {
        transform: translateX(30px) rotate(750deg);
    }

    100% {
        transform: translateX(0) rotate(720deg);
    }
`;

const MenuDiv = styled.div`
    display: inline-block;
    cursor: pointer;

    animation-name: ${MenuDivKeyFrame};
    animation-duration: 3s;
`;

const MenuSubDivHoverKeyFrame = keyframes`
    50% {
        transform: translateY(-10px);
    }
`;

const MenuSubDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 152px;
    height: 152px;
    border-radius: 50%;
    background-color: #caf0be;
    margin: 16px 32px;

    &:hover {
        animation: 1.8s ${MenuSubDivHoverKeyFrame} infinite;
    }
`;

const MenuSection = styled.section`
    text-align: center;
`;

const TitleSectionKeyFrame = keyframes`
    0% {
        transform: translateY(40px);
        opacity: 0;
    }

    100% {
        transfrom: translateY(0);
        opacity: 1;
    }
`;

const TitleSection = styled.section`
    padding: 0 30px;
    text-align: center;

    animation-name: ${TitleSectionKeyFrame};
    animation-duration: 3s;
`;

const MainTitle = styled.span`
    display: block;
    font-size: calc(54px + 1.5vw);
    font-weight: 600;
`;

const SubTitle = styled.span`
    display: block;
    font-size: calc(24px + 0.4vw);
`;

interface IMain {
    componentNo: number;
}

const Main: React.FC<IMain> = ({ componentNo }): JSX.Element => {
    return (
        <>
            <Base componentNo={componentNo}>
                <TitleSection>
                    <MainTitle>김성찬의 Portfolio</MainTitle>
                    <SubTitle>Since 2021</SubTitle>
                </TitleSection>
            </Base>
        </>
    );
};

export default Main;
