import React from "react";
import styled from "styled-components";

function Tower(props: propsIState) {
  const { isPC, isTablet, towerRef } = props;
  return (
    <Container isPC={isPC} isTablet={isTablet} ref={towerRef}>
      <SVG viewBox="0 0 8 24" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2.5 15L2.5 20L5.5 20L5.5 15C5.41845 9.65012 4.5 1 4 1C3.5 1 2.65523 8.72346 2.5 15Z"
          strokeLinecap="round"
        />
        <path
          d="M4.86897 19.3105C4.92603 19.2669 5.02652 19.1409 5.02149 19.1487C4.94995 19.26 4.86043 19.3768 4.76817 19.4723C4.61572 19.6302 4.43581 19.7164 4.2151 19.7164C4.07839 19.7164 4.28575 19.4558 4.31988 19.406C4.43234 19.2419 4.57641 19.1177 4.65941 18.9339C4.72384 18.7912 4.79334 18.6657 4.86897 18.5333C4.98172 18.336 4.53049 18.8367 4.36232 18.9896C4.18909 19.1471 4.00296 19.2372 3.80793 19.3583C3.70585 19.4216 3.57703 19.4869 3.48962 19.5678C3.3207 19.7242 3.54012 19.2432 3.55594 19.2097C3.67026 18.968 3.82348 18.7565 4.01218 18.5678C4.24258 18.3374 4.42891 18.0768 4.65941 17.8463C4.74938 17.7563 4.81279 17.6471 4.89284 17.5492C4.93515 17.4975 4.98484 17.4438 5.03608 17.4007C5.07557 17.3674 4.99321 17.6038 4.98833 17.6155C4.85875 17.928 4.76124 18.259 4.65941 18.5758C4.53522 18.9621 4.14291 19.3204 3.75753 19.4286C3.59985 19.4728 3.4203 19.4804 3.26946 19.544C3.1319 19.6019 3.21595 19.2048 3.22171 19.1567C3.26073 18.8308 3.30157 18.5354 3.49625 18.2614C3.6484 18.0473 3.78635 17.8299 3.92597 17.6076C4.01685 17.4628 4.15085 17.3469 4.24826 17.2044C4.35245 17.052 4.47052 16.9195 4.56392 16.7614C4.65946 16.5997 4.75534 16.4448 4.86897 16.2906C4.89576 16.2542 4.98586 16.1799 4.98833 16.1354C4.99104 16.0866 4.98848 16.0653 4.94324 16.1089C4.78026 16.2659 4.61774 16.4189 4.44455 16.5651C4.21219 16.7613 3.92005 16.9388 3.72438 17.1752C3.5751 17.3556 3.41396 17.5188 3.24824 17.6845C3.19812 17.7346 3.08141 17.9123 3.13152 17.8622C3.2515 17.7422 3.32528 17.5442 3.40341 17.398C3.70668 16.8306 4.03539 16.2746 4.26683 15.6712C4.4521 15.1882 4.68072 14.7236 4.85703 14.2361C4.94018 14.0062 5.01824 13.7921 5.06526 13.5518C5.06742 13.5407 5.0935 13.4034 5.06791 13.4271C4.97996 13.5085 4.89795 13.6283 4.82652 13.7242C4.44105 14.2414 4.32855 14.8632 4.25357 15.4855C4.17944 16.1008 3.92272 16.7008 3.55461 17.1977C3.39219 17.417 3.18254 17.6057 3.00155 17.8012C2.96639 17.8392 2.86646 17.9437 2.91666 17.9312C2.9776 17.916 3.08364 17.7208 3.12755 17.6739C3.25968 17.5327 3.36464 17.376 3.46044 17.2084C3.91236 16.4175 4.35252 15.6214 4.86897 14.8754C5.11203 14.5243 5.01504 14.0606 4.90345 13.6751C4.79978 13.317 4.68287 12.9747 4.60636 12.6101C4.53634 12.2765 4.46312 11.9084 4.46312 11.5663C4.46312 11.5003 4.40823 11.6065 4.40476 11.6127C4.26692 11.8603 4.13854 12.1138 4.00422 12.3634C3.83325 12.6811 3.6542 12.9934 3.5135 13.3263C3.41438 13.5608 3.36181 13.8074 3.29864 14.0531C3.26702 14.1761 2.65125 16.643 2.79199 16.6606C2.86641 16.6699 2.89886 16.8364 2.94717 16.8847C2.9778 16.9154 3.15086 16.646 3.17397 16.6022C3.31836 16.3287 3.50918 16.0728 3.60236 15.7746C3.7094 15.4321 3.76823 15.0838 3.79467 14.7269C3.8333 14.2054 3.95033 13.6789 4.14746 13.1937C4.35251 12.689 4.40441 12.116 4.44057 11.5796C4.46263 11.2523 4.51742 10.942 4.43925 10.6207C4.38091 10.3808 4.38351 10.1315 4.3106 9.89651C4.2898 9.8295 4.35046 9.65019 4.2907 9.68696C4.26111 9.70517 4.21545 9.81389 4.20449 9.83285C4.13131 9.95958 4.05349 10.0834 3.97505 10.2069C3.78194 10.5109 3.58821 10.8147 3.40474 11.1247C3.14994 11.5552 2.86716 12.0639 2.78138 12.5663C2.77018 12.6319 2.6852 13.0319 2.79199 13.0319C2.86454 13.0319 2.90546 13.0131 2.95115 12.951C3.14412 12.6885 3.32992 12.3604 3.44983 12.0584C3.55021 11.8056 3.5928 11.531 3.72305 11.2891C3.87022 11.0158 3.99088 10.7229 4.18062 10.4748C4.34632 10.2581 4.55319 10.063 4.64084 9.79837C4.71087 9.58693 4.7946 9.36881 4.81591 9.14583C4.83041 8.99419 4.84934 8.83966 4.84509 8.68694C4.83812 8.43593 4.70888 8.17545 4.65543 7.93493C4.63236 7.83112 4.59593 7.85367 4.51352 7.92034C4.19955 8.17434 3.9056 8.51683 3.75753 8.89649C3.69967 9.04485 3.63755 9.18036 3.59307 9.33284C3.53591 9.52883 3.54829 9.72902 3.47503 9.92437C3.43499 10.0311 3.41559 10.1344 3.36495 10.2387C3.32386 10.3233 3.29862 10.4147 3.25089 10.496C3.22393 10.5419 3.16933 10.5875 3.1554 10.6392C3.08818 10.8889 3.55466 10.3036 3.70979 10.0968C3.86132 9.89474 4.06079 9.707 4.16471 9.47608C4.29686 9.18241 4.31988 8.87365 4.31988 8.55431C4.31988 8.31829 4.32279 8.08207 4.31988 7.84607C4.31678 7.59463 4.27213 7.34417 4.27213 7.09273C4.27213 6.87517 4.29601 6.65744 4.29601 6.44152C4.29601 6.37837 4.35004 6.1474 4.30927 6.33409C4.23071 6.69381 4.09287 7.07708 3.96178 7.42165C3.90224 7.57816 3.87001 7.78584 3.76814 7.92167C3.65148 8.07722 3.50148 8.19077 3.40739 8.36597C3.39289 8.39297 3.33748 8.44725 3.34506 8.48136C3.35442 8.52348 3.41848 8.46646 3.42596 8.45218C3.49361 8.32303 3.49797 8.1607 3.52145 8.01981C3.54501 7.87844 3.58752 7.74121 3.61562 7.6007C3.69873 7.18514 3.71605 6.73387 3.91404 6.35266C4.03394 6.12181 4.18134 5.88439 4.28142 5.64575C4.3146 5.56662 4.37491 5.46311 4.39017 5.37916C4.40067 5.32144 4.41245 5.25998 4.41537 5.20144C4.41629 5.18312 4.46102 5.02826 4.42201 5.1033C4.29925 5.33936 4.11997 5.54039 3.98566 5.76909C3.92946 5.86477 3.85503 5.99283 3.76549 6.06088C3.66503 6.13723 3.73507 5.80715 3.74692 5.74787C3.78417 5.56163 3.81854 5.34725 3.81854 5.15635C3.81854 5.04249 3.84168 4.89873 3.87159 4.79029C3.9644 4.45386 4.05265 4.04919 3.96709 3.69743C3.89677 3.40835 3.81726 2.98507 3.91404 2.69475"
          strokeLinecap="round"
        />
        <path
          d="M1.43427 20.0927L1.43346 23.0021L6.5548 23.0007L6.55561 20.0913L1.43427 20.0927Z"
          strokeLinecap="round"
        />
        <path
          d="M5.59191 22.7881C5.64823 22.5515 5.83795 22.4987 5.97221 22.3261C6.03095 22.2506 6.14968 22.2132 6.14968 22.1036C6.14968 22.0706 6.16359 21.9942 6.14545 21.9669C6.09328 21.8887 5.80187 22.136 5.75811 22.1655C5.63138 22.251 5.50725 22.3299 5.36232 22.381C5.20248 22.4375 5.02804 22.4222 4.86229 22.4388C4.69677 22.4553 4.4339 22.4399 4.29889 22.5599C4.11367 22.7246 4.7127 22.2872 4.92004 22.1515C5.23457 21.9456 5.4323 21.5954 5.64825 21.2979C5.79274 21.0988 6.01813 20.9722 6.17221 20.7753C6.23652 20.6932 6.26489 20.6596 6.13982 20.7429C5.88712 20.9114 5.63258 21.0835 5.39049 21.2669C5.14552 21.4525 4.88422 21.6593 4.69891 21.9064C4.6077 22.028 4.48058 22.1158 4.38058 22.2303C4.25999 22.3684 4.15409 22.4882 4.00592 22.5994C3.90597 22.6743 3.80096 22.7692 3.69041 22.8275C3.68783 22.8289 3.55808 22.8867 3.60449 22.8867C3.70445 22.8867 3.86691 22.6287 3.92422 22.5684C4.16578 22.3143 4.43435 22.0881 4.6651 21.8233C4.93278 21.5161 5.14613 21.1547 5.42852 20.8613C5.49005 20.7973 5.56734 20.7264 5.61726 20.6528C5.76326 20.4376 5.49448 20.6125 5.41443 20.6683C5.0296 20.9364 4.63091 21.1841 4.24959 21.4571C4.00517 21.632 3.72614 21.8138 3.53829 22.0529C3.38954 22.2422 3.25194 22.4344 3.06221 22.5853C3.02477 22.6151 2.93755 22.7184 3.03122 22.6444C3.10161 22.5889 3.15448 22.4993 3.21433 22.4332C3.34365 22.2904 3.47757 22.1521 3.59885 22.0022C3.89708 21.6334 4.17434 21.2428 4.46228 20.8655C4.54069 20.7627 4.62991 20.6686 4.7144 20.5711C4.86426 20.3982 4.4761 20.618 4.45382 20.6303C3.82628 20.9749 3.196 21.3789 2.70163 21.9007C2.61092 21.9965 2.53871 22.1089 2.43683 22.1923C2.39393 22.2274 2.35202 22.2614 2.30865 22.2951C2.25875 22.3339 2.25862 22.3592 2.30724 22.3092C2.42717 22.1859 2.52496 22.0225 2.63684 21.8895C2.85118 21.6346 3.07504 21.3969 3.25799 21.1176C3.35516 20.9693 3.44488 20.8171 3.5242 20.6584C3.56436 20.5781 3.63459 20.4921 3.66224 20.4091C3.67373 20.3746 3.59689 20.4414 3.56646 20.4612C3.4464 20.5396 3.32634 20.6179 3.20729 20.6979C2.91205 20.8961 2.68305 21.1241 2.4481 21.388C2.28059 21.5763 2.14054 21.8115 2.01709 22.0275C1.95766 22.1315 1.87063 22.1996 1.8044 22.2923C1.75904 22.3558 1.90451 22.1711 1.94103 22.1022C2.02088 21.9513 2.09352 21.7946 2.18189 21.6486C2.31711 21.4252 2.42444 21.159 2.52416 20.9176C2.55387 20.8457 2.60253 20.7648 2.61993 20.6894C2.63508 20.6238 2.34289 20.7763 2.32133 20.7838C2.19585 20.8274 2.01709 20.9478 2.01709 20.7598"
          strokeLinecap="round"
        />
      </SVG>
    </Container>
  );
}

export default Tower;

interface propsIState {
  isPC: boolean;
  isTablet: boolean;
  towerRef: React.RefObject<HTMLDivElement>;
}

const Container = styled.div<{ isPC: boolean; isTablet: boolean }>`
  width: ${(props) => (props.isPC ? "10" : props.isTablet ? "20" : "30")}vw;
  height: ${(props) => (props.isPC ? "10" : props.isTablet ? "20" : "30")}vw;

  position: absolute;
  top: 30%;
  left: 50%;

  transition: all 0.3s linear;
`;

const SVG = styled.svg`
  width: 100%;
  height: 100%;

  fill: none;
  stroke: ${({ theme }: { theme: ThemeIState }) => theme.primary};

  transition: all 0.3s linear;

  &:hover {
    stroke: ${({ theme }: { theme: ThemeIState }) => theme.third};
  }
`;
