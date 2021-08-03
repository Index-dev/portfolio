import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

function Loading(props: propsIState) {
  const { setLoading } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (containerRef.current !== null) {
      let count = 0;
      containerRef.current.addEventListener("animationend", () => {
        count++;
        if (count >= 23) {
          setLoading(false);
        }
      });
    }
  }, []);

  return (
    <Container ref={containerRef}>
      <SVG
        width="1052"
        height="385"
        viewBox="0 0 1052 385"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M37.0977 48.536V61.064H68.7777V85.112H37.0977V99.512H73.0977V125H5.1297V23.048H73.0977V48.536H37.0977Z"
          stroke="white"
          stroke-width="10"
          mask="url(#path-1-outside-1)"
        />
        <Path
          d="M171.113 43.784V125H139.145V112.616C136.649 116.456 133.289 119.576 129.065 121.976C124.937 124.376 119.993 125.576 114.233 125.576C104.921 125.576 97.6253 122.456 92.3453 116.216C87.1613 109.976 84.5693 101.528 84.5693 90.872V43.784H116.393V86.84C116.393 90.68 117.401 93.752 119.417 96.056C121.529 98.264 124.313 99.368 127.769 99.368C131.321 99.368 134.105 98.264 136.121 96.056C138.137 93.752 139.145 90.68 139.145 86.84V43.784H171.113Z"
          stroke="white"
          stroke-width="10"
          mask="url(#path-1-outside-1)"
        />
        <Path
          d="M293.984 43.208C304.352 43.208 312.368 46.328 318.032 52.568C323.792 58.808 326.672 67.256 326.672 77.912V125H294.848V81.944C294.848 78.488 293.792 75.8 291.68 73.88C289.664 71.864 286.928 70.856 283.472 70.856C279.92 70.856 277.136 71.864 275.12 73.88C273.104 75.8 272.096 78.488 272.096 81.944V125H240.272V81.944C240.272 78.488 239.216 75.8 237.104 73.88C235.088 71.864 232.352 70.856 228.896 70.856C225.344 70.856 222.56 71.864 220.544 73.88C218.528 75.8 217.52 78.488 217.52 81.944V125H185.552V43.784H217.52V54.728C219.824 51.272 222.944 48.488 226.88 46.376C230.912 44.264 235.616 43.208 240.992 43.208C246.848 43.208 252.032 44.504 256.544 47.096C261.056 49.592 264.656 53.144 267.344 57.752C270.32 53.528 274.112 50.072 278.72 47.384C283.328 44.6 288.416 43.208 293.984 43.208Z"
          stroke="white"
          stroke-width="10"
          mask="url(#path-1-outside-1)"
        />
        <Path
          d="M419.144 83.672C419.144 85.88 419 87.992 418.712 90.008H367.304C367.784 97.016 370.712 100.52 376.088 100.52C379.544 100.52 382.04 98.936 383.576 95.768H417.416C416.264 101.528 413.816 106.712 410.072 111.32C406.424 115.832 401.768 119.432 396.104 122.12C390.536 124.712 384.392 126.008 377.672 126.008C369.608 126.008 362.408 124.328 356.072 120.968C349.832 117.608 344.936 112.808 341.384 106.568C337.928 100.232 336.2 92.84 336.2 84.392C336.2 75.944 337.928 68.6 341.384 62.36C344.936 56.024 349.832 51.176 356.072 47.816C362.408 44.456 369.608 42.776 377.672 42.776C385.736 42.776 392.888 44.456 399.128 47.816C405.464 51.08 410.36 55.784 413.816 61.928C417.368 68.072 419.144 75.32 419.144 83.672ZM386.744 76.04C386.744 73.352 385.88 71.336 384.152 69.992C382.424 68.552 380.264 67.832 377.672 67.832C372.008 67.832 368.696 70.568 367.736 76.04H386.744Z"
          stroke="white"
          stroke-width="10"
          mask="url(#path-1-outside-1)"
        />
        <Path
          d="M461.223 58.76C464.487 54.056 468.471 50.312 473.175 47.528C477.879 44.648 482.775 43.208 487.863 43.208V77.336H478.791C472.743 77.336 468.279 78.392 465.399 80.504C462.615 82.616 461.223 86.36 461.223 91.736V125H429.255V43.784H461.223V58.76Z"
          stroke="white"
          stroke-width="10"
          mask="url(#path-1-outside-1)"
        />
        <Path
          d="M512.601 37.304C507.033 37.304 502.569 35.816 499.209 32.84C495.849 29.864 494.169 26.12 494.169 21.608C494.169 17 495.849 13.208 499.209 10.232C502.569 7.15999 507.033 5.62399 512.601 5.62399C518.073 5.62399 522.489 7.15999 525.849 10.232C529.209 13.208 530.889 17 530.889 21.608C530.889 26.12 529.209 29.864 525.849 32.84C522.489 35.816 518.073 37.304 512.601 37.304ZM528.441 43.784V125H496.473V43.784H528.441Z"
          stroke="white"
          stroke-width="10"
          mask="url(#path-1-outside-1)"
        />
        <Path
          d="M538.56 84.392C538.56 75.944 540.288 68.6 543.744 62.36C547.296 56.024 552.192 51.176 558.432 47.816C564.768 44.456 571.968 42.776 580.032 42.776C590.592 42.776 599.472 45.752 606.672 51.704C613.968 57.656 618.576 65.912 620.496 76.472H586.656C585.408 72.248 582.96 70.136 579.312 70.136C576.72 70.136 574.656 71.336 573.12 73.736C571.68 76.136 570.96 79.688 570.96 84.392C570.96 89.096 571.68 92.648 573.12 95.048C574.656 97.448 576.72 98.648 579.312 98.648C582.96 98.648 585.408 96.536 586.656 92.312H620.496C618.576 102.872 613.968 111.128 606.672 117.08C599.472 123.032 590.592 126.008 580.032 126.008C571.968 126.008 564.768 124.328 558.432 120.968C552.192 117.608 547.296 112.808 543.744 106.568C540.288 100.232 538.56 92.84 538.56 84.392Z"
          stroke="white"
          stroke-width="10"
          mask="url(#path-1-outside-1)"
        />
        <Path
          d="M626.31 84.392C626.31 75.848 627.75 68.456 630.63 62.216C633.606 55.88 637.638 51.08 642.726 47.816C647.814 44.456 653.526 42.776 659.862 42.776C665.142 42.776 669.702 43.88 673.542 46.088C677.382 48.2 680.31 51.128 682.326 54.872V43.784H714.15V125H682.326V113.912C680.31 117.656 677.382 120.632 673.542 122.84C669.702 124.952 665.142 126.008 659.862 126.008C653.526 126.008 647.814 124.376 642.726 121.112C637.638 117.752 633.606 112.952 630.63 106.712C627.75 100.376 626.31 92.936 626.31 84.392ZM682.326 84.392C682.326 80.072 681.222 76.712 679.014 74.312C676.806 71.912 673.974 70.712 670.518 70.712C667.062 70.712 664.23 71.912 662.022 74.312C659.814 76.712 658.71 80.072 658.71 84.392C658.71 88.712 659.814 92.072 662.022 94.472C664.23 96.872 667.062 98.072 670.518 98.072C673.974 98.072 676.806 96.872 679.014 94.472C681.222 92.072 682.326 88.712 682.326 84.392Z"
          stroke="white"
          stroke-width="10"
          mask="url(#path-1-outside-1)"
        />
        <Path
          d="M785.385 43.208C794.697 43.208 801.945 46.328 807.129 52.568C812.409 58.808 815.049 67.256 815.049 77.912V125H783.225V81.944C783.225 78.104 782.169 75.08 780.057 72.872C778.041 70.568 775.305 69.416 771.849 69.416C768.297 69.416 765.513 70.568 763.497 72.872C761.481 75.08 760.473 78.104 760.473 81.944V125H728.505V43.784H760.473V56.168C762.969 52.328 766.281 49.208 770.409 46.808C774.633 44.408 779.625 43.208 785.385 43.208Z"
          stroke="white"
          stroke-width="10"
          mask="url(#path-1-outside-1)"
        />
        <Path
          d="M867.503 126.008C859.343 126.008 851.999 124.328 845.471 120.968C838.943 117.608 833.807 112.808 830.063 106.568C826.415 100.232 824.591 92.84 824.591 84.392C824.591 75.944 826.415 68.6 830.063 62.36C833.807 56.024 838.943 51.176 845.471 47.816C851.999 44.456 859.343 42.776 867.503 42.776C875.663 42.776 883.007 44.456 889.535 47.816C896.063 51.176 901.151 56.024 904.799 62.36C908.543 68.6 910.415 75.944 910.415 84.392C910.415 92.84 908.543 100.232 904.799 106.568C901.151 112.808 896.063 117.608 889.535 120.968C883.007 124.328 875.663 126.008 867.503 126.008ZM867.503 98.36C870.479 98.36 872.975 97.208 874.991 94.904C877.007 92.504 878.015 89 878.015 84.392C878.015 79.784 877.007 76.328 874.991 74.024C872.975 71.624 870.479 70.424 867.503 70.424C864.527 70.424 862.031 71.624 860.015 74.024C857.999 76.328 856.991 79.784 856.991 84.392C856.991 89 857.951 92.504 859.871 94.904C861.887 97.208 864.431 98.36 867.503 98.36Z"
          stroke="white"
          stroke-width="10"
          mask="url(#path-1-outside-1)"
        />
        <Path
          d="M928.81 23.048H960.49L943.498 65.528H922.474L928.81 23.048Z"
          stroke="white"
          stroke-width="10"
          mask="url(#path-1-outside-1)"
        />
        <Path
          d="M1011.02 126.008C1003.34 126.008 996.528 124.76 990.576 122.264C984.72 119.768 980.064 116.312 976.608 111.896C973.152 107.48 971.184 102.488 970.704 96.92H1001.38C1001.76 99.32 1002.77 101.096 1004.4 102.248C1006.13 103.4 1008.29 103.976 1010.88 103.976C1012.51 103.976 1013.81 103.64 1014.77 102.968C1015.73 102.2 1016.21 101.288 1016.21 100.232C1016.21 98.408 1015.2 97.112 1013.18 96.344C1011.17 95.576 1007.76 94.712 1002.96 93.752C997.104 92.6 992.256 91.352 988.416 90.008C984.672 88.664 981.36 86.36 978.48 83.096C975.696 79.832 974.304 75.32 974.304 69.56C974.304 64.568 975.6 60.056 978.192 56.024C980.88 51.896 984.816 48.68 990 46.376C995.184 43.976 1001.47 42.776 1008.86 42.776C1019.81 42.776 1028.35 45.464 1034.5 50.84C1040.74 56.216 1044.48 63.224 1045.73 71.864H1017.36C1016.88 69.656 1015.87 67.976 1014.34 66.824C1012.8 65.576 1010.74 64.952 1008.14 64.952C1006.51 64.952 1005.26 65.288 1004.4 65.96C1003.54 66.536 1003.1 67.448 1003.1 68.696C1003.1 70.328 1004.11 71.576 1006.13 72.44C1008.14 73.208 1011.36 74.024 1015.78 74.888C1021.63 76.04 1026.58 77.336 1030.61 78.776C1034.64 80.216 1038.14 82.712 1041.12 86.264C1044.1 89.72 1045.58 94.52 1045.58 100.664C1045.58 105.464 1044.19 109.784 1041.41 113.624C1038.62 117.464 1034.59 120.488 1029.31 122.696C1024.13 124.904 1018.03 126.008 1011.02 126.008Z"
          stroke="white"
          stroke-width="10"
          mask="url(#path-1-outside-1)"
        />
        <Path
          d="M238.332 270.872C240.348 267.128 243.228 264.2 246.972 262.088C250.812 259.88 255.372 258.776 260.652 258.776C266.988 258.776 272.7 260.456 277.788 263.816C282.876 267.08 286.86 271.88 289.74 278.216C292.716 284.456 294.204 291.848 294.204 300.392C294.204 308.936 292.716 316.376 289.74 322.712C286.86 328.952 282.876 333.752 277.788 337.112C272.7 340.376 266.988 342.008 260.652 342.008C255.372 342.008 250.812 340.952 246.972 338.84C243.228 336.632 240.348 333.656 238.332 329.912V379.88H206.364V259.784H238.332V270.872ZM261.804 300.392C261.804 296.072 260.7 292.712 258.492 290.312C256.284 287.912 253.452 286.712 249.996 286.712C246.54 286.712 243.708 287.912 241.5 290.312C239.292 292.712 238.188 296.072 238.188 300.392C238.188 304.712 239.292 308.072 241.5 310.472C243.708 312.872 246.54 314.072 249.996 314.072C253.452 314.072 256.284 312.872 258.492 310.472C260.7 308.072 261.804 304.712 261.804 300.392Z"
          stroke="white"
          stroke-width="10"
          mask="url(#path-1-outside-1)"
        />
        <Path
          d="M342.831 342.008C334.671 342.008 327.327 340.328 320.799 336.968C314.271 333.608 309.135 328.808 305.391 322.568C301.743 316.232 299.919 308.84 299.919 300.392C299.919 291.944 301.743 284.6 305.391 278.36C309.135 272.024 314.271 267.176 320.799 263.816C327.327 260.456 334.671 258.776 342.831 258.776C350.991 258.776 358.335 260.456 364.863 263.816C371.391 267.176 376.479 272.024 380.127 278.36C383.871 284.6 385.743 291.944 385.743 300.392C385.743 308.84 383.871 316.232 380.127 322.568C376.479 328.808 371.391 333.608 364.863 336.968C358.335 340.328 350.991 342.008 342.831 342.008ZM342.831 314.36C345.807 314.36 348.303 313.208 350.319 310.904C352.335 308.504 353.343 305 353.343 300.392C353.343 295.784 352.335 292.328 350.319 290.024C348.303 287.624 345.807 286.424 342.831 286.424C339.855 286.424 337.359 287.624 335.343 290.024C333.327 292.328 332.319 295.784 332.319 300.392C332.319 305 333.279 308.504 335.199 310.904C337.215 313.208 339.759 314.36 342.831 314.36Z"
          stroke="white"
          stroke-width="10"
          mask="url(#path-1-outside-1)"
        />
        <Path
          d="M427.754 274.76C431.018 270.056 435.002 266.312 439.706 263.528C444.41 260.648 449.306 259.208 454.394 259.208V293.336H445.322C439.274 293.336 434.81 294.392 431.93 296.504C429.146 298.616 427.754 302.36 427.754 307.736V341H395.786V259.784H427.754V274.76Z"
          stroke="white"
          stroke-width="10"
          mask="url(#path-1-outside-1)"
        />
        <Path
          d="M513.549 313.784V341H501.453C479.181 341 468.045 329.912 468.045 307.736V286.424H457.965V259.784H468.045V240.2H500.013V259.784H513.261V286.424H500.013V308.312C500.013 310.232 500.445 311.624 501.309 312.488C502.269 313.352 503.805 313.784 505.917 313.784H513.549Z"
          stroke="white"
          stroke-width="10"
          mask="url(#path-1-outside-1)"
        />
        <Path
          d="M572.523 254.024C570.795 253.832 569.595 253.736 568.923 253.736C566.523 253.736 564.699 254.216 563.451 255.176C562.203 256.04 561.339 257.576 560.859 259.784H572.523V286.424H560.571V341H528.603V286.424H519.963V259.784H528.603C528.795 249.224 532.107 241.064 538.539 235.304C545.067 229.448 554.187 226.52 565.899 226.52C567.243 226.52 569.451 226.616 572.523 226.808V254.024Z"
          stroke="white"
          stroke-width="10"
          mask="url(#path-1-outside-1)"
        />
        <Path
          d="M619.722 342.008C611.562 342.008 604.218 340.328 597.69 336.968C591.162 333.608 586.026 328.808 582.282 322.568C578.634 316.232 576.81 308.84 576.81 300.392C576.81 291.944 578.634 284.6 582.282 278.36C586.026 272.024 591.162 267.176 597.69 263.816C604.218 260.456 611.562 258.776 619.722 258.776C627.882 258.776 635.226 260.456 641.754 263.816C648.282 267.176 653.37 272.024 657.018 278.36C660.762 284.6 662.634 291.944 662.634 300.392C662.634 308.84 660.762 316.232 657.018 322.568C653.37 328.808 648.282 333.608 641.754 336.968C635.226 340.328 627.882 342.008 619.722 342.008ZM619.722 314.36C622.698 314.36 625.194 313.208 627.21 310.904C629.226 308.504 630.234 305 630.234 300.392C630.234 295.784 629.226 292.328 627.21 290.024C625.194 287.624 622.698 286.424 619.722 286.424C616.746 286.424 614.25 287.624 612.234 290.024C610.218 292.328 609.21 295.784 609.21 300.392C609.21 305 610.17 308.504 612.09 310.904C614.106 313.208 616.65 314.36 619.722 314.36Z"
          stroke="white"
          stroke-width="10"
          mask="url(#path-1-outside-1)"
        />
        <Path
          d="M704.645 234.44V341H672.677V234.44H704.645Z"
          stroke="white"
          stroke-width="10"
          mask="url(#path-1-outside-1)"
        />
        <Path
          d="M735.211 253.304C729.643 253.304 725.179 251.816 721.819 248.84C718.459 245.864 716.779 242.12 716.779 237.608C716.779 233 718.459 229.208 721.819 226.232C725.179 223.16 729.643 221.624 735.211 221.624C740.683 221.624 745.099 223.16 748.459 226.232C751.819 229.208 753.499 233 753.499 237.608C753.499 242.12 751.819 245.864 748.459 248.84C745.099 251.816 740.683 253.304 735.211 253.304ZM751.051 259.784V341H719.083V259.784H751.051Z"
          stroke="white"
          stroke-width="10"
          mask="url(#path-1-outside-1)"
        />
        <Path
          d="M804.081 342.008C795.921 342.008 788.577 340.328 782.049 336.968C775.521 333.608 770.385 328.808 766.641 322.568C762.993 316.232 761.169 308.84 761.169 300.392C761.169 291.944 762.993 284.6 766.641 278.36C770.385 272.024 775.521 267.176 782.049 263.816C788.577 260.456 795.921 258.776 804.081 258.776C812.241 258.776 819.585 260.456 826.113 263.816C832.641 267.176 837.729 272.024 841.377 278.36C845.121 284.6 846.993 291.944 846.993 300.392C846.993 308.84 845.121 316.232 841.377 322.568C837.729 328.808 832.641 333.608 826.113 336.968C819.585 340.328 812.241 342.008 804.081 342.008ZM804.081 314.36C807.057 314.36 809.553 313.208 811.569 310.904C813.585 308.504 814.593 305 814.593 300.392C814.593 295.784 813.585 292.328 811.569 290.024C809.553 287.624 807.057 286.424 804.081 286.424C801.105 286.424 798.609 287.624 796.593 290.024C794.577 292.328 793.569 295.784 793.569 300.392C793.569 305 794.529 308.504 796.449 310.904C798.465 313.208 801.009 314.36 804.081 314.36Z"
          stroke="white"
          stroke-width="10"
          mask="url(#path-1-outside-1)"
        />
      </SVG>
    </Container >
  );
}

export default Loading;

interface propsIState {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const zoomIn = keyframes`
      50% {
        transform: translate3d(-50%, -50%, 0) scale(120%);
      }
      56% {
          transform: translate3d(-50%, -50%, 0) scale(120%);
      }
      62% {
          transform: translate3d(-50%, -50%, 0) scale(110%);
      }
      100% {
          transform: translate3d(-50%, -50%, 0) scale(2500%);
      }
  `;

const fill = ({ theme }: { theme: ThemeIState }) => keyframes`
  0% {
        fill: transparent;
      }
      100% {
        fill: ${theme.primary};
      }
  `;

const Container = styled.div`
  max-width: 100vw;
  height: 100vh;
  `;

const SVG = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate3d(-50%, -50%, 0) rotate(-8deg);
  animation: ${zoomIn} 2s 4.6s ease forwards, ${fill} 0.5s 4.2s ease forwards;
  `;

const LineAnimation = keyframes`
    100% {
      stroke-dashoffset: 0;
    }
  `;

const Path = styled.path`
  
  stroke: ${({ theme }: { theme: ThemeIState }) => theme.primary};

  animation: ${LineAnimation} 2s ease forwards;
  &:nth-child(1) {
    stroke-dasharray: 475.2000427246094;
    stroke-dashoffset: 475.2000427246094;
    animation-delay: 0;
  }
  &:nth-child(2) {
    stroke-dasharray: 441.931884765625;
    stroke-dashoffset: 441.931884765625;
    animation-delay: 0.3s;
  }
  &:nth-child(3) {
    stroke-dasharray: 655.3239135742188;
    stroke-dashoffset: 655.3239135742188;
    animation-delay: 0.6s;
  }
  &:nth-child(4) {
    stroke-dasharray: 415.801513671875;
    stroke-dashoffset: 415.801513671875;
    animation-delay: 0.9s;
  }
  &:nth-child(5) {
    stroke-dasharray: 295.03668212890625;
    stroke-dashoffset: 295.03668212890625;
    animation-delay: 1.2s;
  }
  &:nth-child(6) {
    stroke-dasharray: 335.1162414550781;
    stroke-dashoffset: 335.1162414550781;
    animation-delay: 1.4s;
  }
  &:nth-child(7) {
    stroke-dasharray: 373.6043395996094;
    stroke-dashoffset: 373.6043395996094;
    animation-delay: 1.6s;
  }
  &:nth-child(8) {
    stroke-dasharray: 422.2711486816406;
    stroke-dashoffset: 422.2711486816406;
    animation-delay: 1.8s;
  }
  &:nth-child(9) {
    stroke-dasharray: 441.7317199707031;
    stroke-dashoffset: 441.7317199707031;
    animation-delay: 2s;
  }
  &:nth-child(10) {
    stroke-dasharray: 347.76336669921875;
    stroke-dashoffset: 347.76336669921875;
    animation-delay: 2.1s;
  }
  &:nth-child(11) {
    stroke-dasharray: 141.40626525878906;
    stroke-dashoffset: 141.40626525878906;
    animation-delay: 2.2s;
  }
  &:nth-child(12) {
    stroke-dasharray: 419.3233947753906;
    stroke-dashoffset: 419.3233947753906;
    animation-delay: 2.3s;
  }
  &:nth-child(13) {
    stroke-dasharray: 500.01519775390625;
    stroke-dashoffset: 500.01519775390625;
    animation-delay: 0.6s;
  }
  &:nth-child(14) {
    stroke-dasharray: 347.7632141113281;
    stroke-dashoffset: 347.7632141113281;
    animation-delay: 0.9s;
  }
  &:nth-child(15) {
    stroke-dasharray: 295.0367126464844;
    stroke-dashoffset: 295.0367126464844;
    animation-delay: 1.2s;
  }
  &:nth-child(16) {
    stroke-dasharray: 324.7047424316406;
    stroke-dashoffset: 324.7047424316406;
    animation-delay: 1.4s;
  }
  &:nth-child(17) {
    stroke-dasharray: 340.5496826171875;
    stroke-dashoffset: 340.5496826171875;
    animation-delay: 1.6s;
  }
  &:nth-child(18) {
    stroke-dasharray: 347.76336669921875;
    stroke-dashoffset: 347.76336669921875;
    animation-delay: 1.8s;
  }
  &:nth-child(19) {
    stroke-dasharray: 277.0560302734375;
    stroke-dashoffset: 277.0560302734375;
    animation-delay: 2s;
  }
  &:nth-child(20) {
    stroke-dasharray: 335.11669921875;
    stroke-dashoffset: 335.11669921875;
    animation-delay: 2.1s;
  }
  &:nth-child(21) {
    stroke-dasharray: 347.76336669921875;
    stroke-dashoffset: 347.76336669921875;
    animation-delay: 2.2s;
  }
`;
