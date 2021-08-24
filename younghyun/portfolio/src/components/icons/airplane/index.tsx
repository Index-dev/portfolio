import React from "react";
import styled from "styled-components";

function Airplane(props: propsIState) {
  const { isPC, isTablet, airplaneRef } = props;
  return (
    <Container isPC={isPC} isTablet={isTablet} ref={airplaneRef}>
      <SVG viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg">
        <rect x="8.5" y="2.5" width="3" height="18" rx="1.5" />
        <path d="M10 20V17.5V14V12V10.5V8.5V7V5V4V3" strokeWidth="3" />
        <path
          d="M9 4H8.5618C8.52393 4 8.4893 3.9786 8.47236 3.94472L7.10797 1.21593C7.06812 1.13625 7.14451 1.04817 7.22903 1.07634L9.89062 1.96354C9.94835 1.98278 9.97565 2.0487 9.94844 2.10313L9.52764 2.94472C9.5107 2.9786 9.47607 3 9.4382 3H8.55352C8.52008 3 8.48886 2.98329 8.47031 2.95547L7.64348 1.71522C7.59278 1.63917 7.66226 1.54057 7.75094 1.56273L9.23775 1.93444C9.32781 1.95695 9.34125 2.07937 9.25821 2.12089L8.83983 2.33009M8.83983 2.33009L8.56447 2.46777C8.52597 2.48702 8.47947 2.47947 8.44903 2.44903L8.17071 2.17071C8.10771 2.10771 8.15233 2 8.24142 2H8.45943C8.48545 2 8.51044 2.01014 8.5291 2.02827L8.83983 2.33009Z"
          strokeWidth="0.5"
        />
        <path
          d="M11 4H11.4382C11.4761 4 11.5107 3.9786 11.5276 3.94472L12.892 1.21593C12.9319 1.13625 12.8555 1.04817 12.771 1.07634L10.1094 1.96354C10.0517 1.98278 10.0243 2.0487 10.0516 2.10313L10.4724 2.94472C10.4893 2.9786 10.5239 3 10.5618 3H11.4465C11.4799 3 11.5111 2.98329 11.5297 2.95547L12.3565 1.71522C12.4072 1.63917 12.3377 1.54057 12.2491 1.56273L10.7623 1.93444C10.6722 1.95695 10.6587 2.07937 10.7418 2.12089L11.1602 2.33009M11.1602 2.33009L11.4355 2.46777C11.474 2.48702 11.5205 2.47947 11.551 2.44903L11.8293 2.17071C11.8923 2.10771 11.8477 2 11.7586 2H11.5406C11.5146 2 11.4896 2.01014 11.4709 2.02827L11.1602 2.33009Z"
          strokeWidth="0.5"
        />
        <path
          d="M9 13L1.06489 10.0243C1.02586 10.0097 1 9.97238 1 9.9307V9.5M9 9.5V12.3557C9 12.4255 8.93026 12.4738 8.86489 12.4493L8.45826 12.2968M9 9.5L8.45826 9.39842M9 9.5L8.3905 12.2714M1 9.5V8.12049C1 8.05788 1.05689 8.01067 1.11843 8.02221L1.5 8.09375M1 9.5L1.5 8.09375M1 9.5L1.5 9.6875M1.5 8.09375V9.6875M1.5 8.09375L2.09641 8.20558M1.5 9.6875L2.09641 8.20558M1.5 9.6875L2 9.875M2.09641 8.20558L2 9.875M2.09641 8.20558L2.5 8.28125M2 9.875L2.5 8.28125M2 9.875L2.5 10.0625M2.5 8.28125V10.0625M2.5 8.28125L3 8.375M2.5 10.0625L3 8.375M2.5 10.0625L3 10.25M3 8.375V10.25M3 8.375L3.5 8.46875M3 10.25L3.5 8.46875M3 10.25L3.5 10.4375M3.5 8.46875V10.4375M3.5 8.46875L4 8.5625M3.5 10.4375L4 8.5625M3.5 10.4375L4 10.625M4 8.5625V10.625M4 8.5625L4.5 8.65625M4 10.625L4.48492 8.71564M4 10.625L4.48492 10.8068M4.5 8.65625L4.48492 8.71564M4.5 8.65625L5 8.75M4.48492 8.71564V10.8068M4.48492 10.8068L5 8.75M4.48492 10.8068L5 11M5 8.75V11M5 8.75L5.5 8.84375M5 11L5.5 8.84375M5 11L5.5 11.1875M5.5 8.84375V11.1875M5.5 8.84375L6 8.9375M5.5 11.1875L6 8.9375M5.5 11.1875L6 11.375M6 8.9375V11.375M6 8.9375L6.5 9.03125M6 11.375L6.5 9.03125M6 11.375L6.5 11.5625M6.5 9.03125V11.5625M6.5 9.03125L7 9.125M6.5 11.5625L7 9.125M6.5 11.5625L7 11.75M7 9.125V11.75M7 9.125L7.5 9.21875M7 11.75L7.5 9.21875M7 11.75L7.5 11.9375M7.5 9.21875V11.9375M7.5 9.21875L7.91653 9.29685M7.5 11.9375L7.91653 9.29685M7.5 11.9375L7.91653 12.0937M7.91653 9.29685V12.0937M7.91653 9.29685L8.45826 9.39842M7.91653 12.0937L8.45826 9.39842M7.91653 12.0937L8.3905 12.2714M8.45826 9.39842V12.2968M8.45826 12.2968L8.3905 12.2714"
          strokeWidth="0.5"
        />
        <path
          d="M11 13L18.9351 10.0243C18.9741 10.0097 19 9.97238 19 9.9307V9.5M11 9.5V12.3557C11 12.4255 11.0697 12.4738 11.1351 12.4493L11.5417 12.2968M11 9.5L11.5417 9.39842M11 9.5L11.6095 12.2714M19 9.5V8.12049C19 8.05788 18.9431 8.01067 18.8816 8.02221L18.5 8.09375M19 9.5L18.5 8.09375M19 9.5L18.5 9.6875M18.5 8.09375V9.6875M18.5 8.09375L17.9036 8.20558M18.5 9.6875L17.9036 8.20558M18.5 9.6875L18 9.875M17.9036 8.20558L18 9.875M17.9036 8.20558L17.5 8.28125M18 9.875L17.5 8.28125M18 9.875L17.5 10.0625M17.5 8.28125V10.0625M17.5 8.28125L17 8.375M17.5 10.0625L17 8.375M17.5 10.0625L17 10.25M17 8.375V10.25M17 8.375L16.5 8.46875M17 10.25L16.5 8.46875M17 10.25L16.5 10.4375M16.5 8.46875V10.4375M16.5 8.46875L16 8.5625M16.5 10.4375L16 8.5625M16.5 10.4375L16 10.625M16 8.5625V10.625M16 8.5625L15.5 8.65625M16 10.625L15.5151 8.71564M16 10.625L15.5151 10.8068M15.5 8.65625L15.5151 8.71564M15.5 8.65625L15 8.75M15.5151 8.71564V10.8068M15.5151 10.8068L15 8.75M15.5151 10.8068L15 11M15 8.75V11M15 8.75L14.5 8.84375M15 11L14.5 8.84375M15 11L14.5 11.1875M14.5 8.84375V11.1875M14.5 8.84375L14 8.9375M14.5 11.1875L14 8.9375M14.5 11.1875L14 11.375M14 8.9375V11.375M14 8.9375L13.5 9.03125M14 11.375L13.5 9.03125M14 11.375L13.5 11.5625M13.5 9.03125V11.5625M13.5 9.03125L13 9.125M13.5 11.5625L13 9.125M13.5 11.5625L13 11.75M13 9.125V11.75M13 9.125L12.5 9.21875M13 11.75L12.5 9.21875M13 11.75L12.5 11.9375M12.5 9.21875V11.9375M12.5 9.21875L12.0835 9.29685M12.5 11.9375L12.0835 9.29685M12.5 11.9375L12.0835 12.0937M12.0835 9.29685V12.0937M12.0835 9.29685L11.5417 9.39842M12.0835 12.0937L11.5417 9.39842M12.0835 12.0937L11.6095 12.2714M11.5417 9.39842V12.2968M11.5417 12.2968L11.6095 12.2714"
          strokeWidth="0.5"
        />
      </SVG>
    </Container>
  );
}

export default Airplane;

interface propsIState {
  isPC: boolean;
  isTablet: boolean;
  airplaneRef: React.RefObject<HTMLDivElement>;
}

const Container = styled.div<{ isPC: boolean; isTablet: boolean }>`
  width: ${(props) => (props.isPC ? "10" : props.isTablet ? "20" : "30")}vw;
  height: ${(props) => (props.isPC ? "10" : props.isTablet ? "20" : "30")}vw;

  position: absolute;
  top: 60%;
  left: ${(props) => (props.isPC ? "38" : props.isTablet ? "20" : "13")}%;

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
