import React, { useEffect, useRef } from "react";
import styled, { css } from "styled-components";

function Landscape(props: propsIState) {
  const { isPC, isTablet, secContRef, currentSecRef, currentSecScrollRef } =
    props;

  const pathRefs = [
    useRef<SVGPathElement>(null),
    useRef<SVGPathElement>(null),
    useRef<SVGPathElement>(null),
    useRef<SVGPathElement>(null),
    useRef<SVGPathElement>(null),
    useRef<SVGPathElement>(null),
    useRef<SVGPathElement>(null),
    useRef<SVGPathElement>(null),
    useRef<SVGPathElement>(null),
    useRef<SVGPathElement>(null),
    useRef<SVGPathElement>(null),
    useRef<SVGPathElement>(null),
    useRef<SVGPathElement>(null),
    useRef<SVGPathElement>(null),
    useRef<SVGPathElement>(null),
  ];

  useEffect(() => {
    if (secContRef.current) {
      secContRef.current.addEventListener("scroll", () => {
        if (
          (currentSecRef.current === 0 && currentSecScrollRef.current > 0.5) ||
          (currentSecRef.current === 1 && currentSecScrollRef.current < 0.5)
        ) {
          pathRefs.forEach((pathRef) => {
            if (pathRef.current) {
              pathRef.current.style.strokeDashoffset = "0";
            }
          });
        } else {
          pathRefs.forEach((pathRef) => {
            if (pathRef.current) {
              const strokeLength = pathRef.current.getTotalLength();
              console.log(strokeLength);
              pathRef.current.style.strokeDashoffset = `${strokeLength}`;
            }
          });
        }
      });
    }
  });

  return (
    <Container isPC={isPC} isTablet={isTablet}>
      <SVG viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M2.50001 20.5L2.00001 21.5L3 22L3.5 21.5L3.5 21L2.50001 20.5Z"
          strokeWidth="0.1"
          ref={pathRefs[0]}
        />
        <Path
          d="M1.99219 22.1797C2.02279 22.1504 2.05815 22.1333 2.09375 22.1115C2.1115 22.1007 2.12411 22.0879 2.14518 22.0801C2.19828 22.0605 2.2412 22.0237 2.29471 22.0059C2.31354 21.9996 2.32571 21.979 2.34375 21.9696C2.38355 21.9489 2.26262 22.0095 2.21919 22.0208C2.09979 22.0521 1.97284 22.0578 1.85156 22.0807C1.79502 22.0914 1.74325 22.1221 1.68663 22.1289C1.61653 22.1374 1.54709 22.1513 1.477 22.1595C1.44517 22.1632 1.49382 22.1513 1.49805 22.1504C1.54929 22.1388 1.60359 22.1308 1.65582 22.1257C1.72356 22.1189 1.79186 22.1219 1.85981 22.1191C1.887 22.1181 1.91611 22.1203 1.94097 22.1079C1.99385 22.0814 2.04796 22.0613 2.10569 22.0471C2.23862 22.0143 2.36874 21.9781 2.47266 21.8828C2.48947 21.8674 2.51113 21.8515 2.53125 21.8407C2.53872 21.8367 2.54745 21.8331 2.55382 21.8273C2.56485 21.8172 2.52398 21.8248 2.50912 21.826C2.43397 21.8316 2.36082 21.8472 2.28689 21.8609C2.19014 21.8788 2.09467 21.8955 1.99913 21.9195C1.91646 21.9403 1.83354 21.9545 1.74957 21.9687C1.68545 21.9796 1.62168 21.9972 1.55686 22.0033C1.47686 22.0107 1.39644 22.0044 1.31641 22.0102C1.28489 22.0125 1.25639 22.0216 1.2257 22.0269C1.22173 22.0276 1.20651 22.0291 1.22092 22.0267C1.26257 22.0198 1.3042 22.0085 1.34549 21.9996C1.40962 21.9857 1.47371 21.9709 1.5382 21.9588C1.62575 21.9423 1.71496 21.9366 1.80295 21.9227C1.86386 21.9132 1.92452 21.9021 1.98524 21.8915C2.04766 21.8806 2.10814 21.8634 2.17014 21.8511C2.21324 21.8426 2.25451 21.8415 2.29601 21.826C2.32404 21.8154 2.3528 21.809 2.38151 21.8008C2.45521 21.7797 2.52952 21.7597 2.60287 21.7374C2.6339 21.728 2.65278 21.7133 2.67752 21.6953C2.6868 21.6886 2.65457 21.6903 2.64323 21.6921C2.53132 21.7098 2.41915 21.7257 2.30708 21.7424C2.08582 21.7754 1.86069 21.7899 1.64757 21.8609C1.60426 21.8753 1.55939 21.8807 1.51432 21.8869C1.42571 21.8992 1.33724 21.9106 1.24783 21.9154C1.20329 21.9178 1.158 21.9159 1.11372 21.9219C1.10636 21.9229 1.09303 21.9231 1.08594 21.9266C1.06276 21.9382 1.05095 21.942 1.08724 21.931C1.14827 21.9125 1.20997 21.8979 1.2717 21.8819C1.35341 21.8608 1.4349 21.8465 1.51736 21.8294C1.62517 21.8071 1.72661 21.7605 1.8355 21.7409C2.02077 21.7074 2.2089 21.6908 2.39063 21.6393C2.42075 21.6308 2.45927 21.6236 2.48459 21.6035C2.49849 21.5925 2.51768 21.583 2.53407 21.5766C2.56722 21.5637 2.60614 21.5619 2.64063 21.5543C2.64697 21.5528 2.66272 21.5456 2.65669 21.5432C2.65163 21.5412 2.63202 21.5436 2.62891 21.5438C2.5779 21.548 2.52737 21.5578 2.477 21.5664C2.3886 21.5815 2.29935 21.5932 2.21181 21.6128C2.10913 21.6359 2.00779 21.6648 1.90712 21.6953C1.77169 21.7364 1.63719 21.7727 1.49653 21.7899C1.40181 21.8015 1.3047 21.8203 1.2092 21.8203C1.17694 21.8203 1.14468 21.8203 1.11241 21.8203C1.10866 21.8203 1.08745 21.8179 1.08659 21.814C1.08209 21.7938 1.17555 21.7574 1.19162 21.7498C1.27251 21.7113 1.36233 21.6916 1.44792 21.666C1.53373 21.6403 1.62286 21.6336 1.71094 21.6191C1.80307 21.604 1.89568 21.5927 1.98785 21.5779C2.10014 21.5599 2.21358 21.5478 2.32465 21.5234C2.33957 21.5202 2.35414 21.5141 2.36893 21.51C2.4052 21.5 2.44114 21.4964 2.4783 21.4913C2.56142 21.4799 2.64891 21.4687 2.72483 21.4297C2.72902 21.4275 2.73335 21.4226 2.7257 21.4221C2.68378 21.4194 2.64094 21.4219 2.59896 21.4219C2.50295 21.4219 2.40581 21.428 2.31077 21.4423C2.13443 21.4688 1.95763 21.4945 1.78147 21.5221C1.70181 21.5347 1.62363 21.5535 1.54362 21.5642C1.48557 21.5721 1.42767 21.5786 1.36979 21.5877C1.26716 21.6038 1.16064 21.6094 1.05686 21.6094C1.03588 21.6094 0.972947 21.6094 0.993925 21.6094C1.07291 21.6094 1.14867 21.5653 1.22526 21.5503C1.40201 21.5157 1.58286 21.5031 1.75998 21.4687C1.86874 21.4477 1.97099 21.4061 2.07965 21.3848C2.18456 21.3641 2.29168 21.3568 2.39627 21.3342C2.4505 21.3225 2.4991 21.3173 2.54666 21.2893C2.56139 21.2806 2.57544 21.2728 2.5918 21.2676C2.59731 21.2658 2.63253 21.2577 2.63412 21.2522C2.63757 21.2401 2.6089 21.2508 2.59636 21.2517C2.5291 21.257 2.46213 21.2672 2.3954 21.2767C2.19292 21.3056 1.99071 21.3366 1.78776 21.3622C1.66147 21.3781 1.53519 21.3823 1.41037 21.406C1.36259 21.4151 1.31146 21.4106 1.26302 21.4143C1.21264 21.4181 1.16291 21.4231 1.11307 21.4312C1.10723 21.4322 1.08977 21.4351 1.09549 21.4336C1.11719 21.4279 1.14025 21.4236 1.16211 21.4195C1.28593 21.3963 1.41338 21.3816 1.53863 21.3685C1.67725 21.3539 1.81836 21.3606 1.95139 21.3142C2.03787 21.2841 2.12418 21.2518 2.21224 21.227C2.28757 21.2057 2.36285 21.188 2.4375 21.1641C2.47259 21.1528 2.508 21.146 2.54123 21.1293C2.54961 21.1252 2.5662 21.1218 2.57335 21.1163C2.5782 21.1126 2.58941 21.1135 2.58941 21.1074C2.58941 21.1072 2.19051 21.161 2.15517 21.1673C1.98754 21.1971 1.81727 21.2161 1.64887 21.2415C1.54211 21.2577 1.43287 21.2539 1.32531 21.2539C1.23459 21.2539 1.14293 21.2682 1.05382 21.286C1.03894 21.289 1.02164 21.2863 1.00781 21.2921C1.00182 21.2946 0.99926 21.2933 1.01085 21.293C1.08131 21.2909 1.1518 21.2792 1.22136 21.2687C1.3677 21.2465 1.51264 21.2366 1.66037 21.2303C1.7267 21.2274 1.7899 21.2164 1.85439 21.2012C1.93317 21.1826 2.01374 21.1777 2.09288 21.1617C2.14647 21.1508 2.19763 21.1301 2.25087 21.1174C2.29115 21.1078 2.33084 21.0975 2.37153 21.0896C2.42816 21.0787 2.48951 21.0696 2.54297 21.0467C2.55877 21.0399 2.55198 21.0374 2.53776 21.0352C2.47014 21.0244 2.40314 21.0199 2.33464 21.0195C2.1891 21.0187 2.04354 21.0195 1.898 21.0195C1.79074 21.0195 1.68263 21.016 1.57552 21.0234C1.52851 21.0267 1.48363 21.0398 1.43707 21.046C1.37728 21.054 1.31766 21.0642 1.25781 21.0716C1.20114 21.0786 1.1439 21.0789 1.08724 21.0859C1.07388 21.0876 1.06024 21.0931 1.04688 21.0937C0.91895 21.0998 1.3033 21.0905 1.43077 21.0781C1.58241 21.0634 1.73501 21.0664 1.88715 21.0664C1.98496 21.0664 2.07761 21.0562 2.17448 21.0412C2.21942 21.0343 2.26751 21.0359 2.30816 21.0148C2.32433 21.0064 2.35009 21.0008 2.36328 20.9883C2.38191 20.9706 2.40423 20.9584 2.42405 20.9423C2.42798 20.9391 2.45852 20.9115 2.4566 20.911C2.45296 20.9101 2.44344 20.9109 2.44097 20.911C2.40683 20.9128 2.37272 20.9135 2.33854 20.9145C2.21321 20.9183 2.09001 20.932 1.96571 20.9473C1.81709 20.9656 1.67197 20.9851 1.52214 20.9881C1.45751 20.9893 1.39277 20.9883 1.32813 20.9883C1.26959 20.9883 1.21296 21 1.15473 21C1.1417 21 1.11828 21.0046 1.1059 21C1.09922 20.9975 1.11941 20.9954 1.12609 20.9928C1.14913 20.9841 1.17195 20.9748 1.19488 20.9657C1.30831 20.9209 1.42676 20.905 1.54731 20.8924C1.87443 20.8581 2.20896 20.8993 2.53255 20.829C2.57046 20.8208 2.60488 20.8129 2.64149 20.799C2.67504 20.7863 2.63644 20.7719 2.62001 20.7658C2.58131 20.7515 2.53973 20.7525 2.49913 20.7496C2.43848 20.7452 2.37964 20.7323 2.31858 20.7309C2.18533 20.7277 2.05168 20.7305 1.9184 20.7305C1.86434 20.7305 1.80955 20.7329 1.75564 20.7279C1.69019 20.7218 1.62615 20.7096 1.56033 20.7053C1.48048 20.7001 1.40078 20.6979 1.32075 20.6992C1.29436 20.6996 1.26836 20.707 1.24219 20.707C1.22515 20.707 1.26299 20.7109 1.26736 20.7109C1.39556 20.7109 1.51839 20.6724 1.64518 20.6604C1.68131 20.6569 1.71664 20.6493 1.75304 20.6465C1.7994 20.6429 1.84596 20.6454 1.89236 20.6421C1.93379 20.6392 1.97394 20.6306 2.01498 20.6252C2.051 20.6205 2.08653 20.6135 2.12283 20.6102C2.15087 20.6077 2.17757 20.6035 2.2053 20.5985C2.23646 20.5929 2.26924 20.5928 2.29948 20.5829C2.30125 20.5823 2.31869 20.5778 2.3086 20.5781C2.24952 20.5798 2.19068 20.5873 2.13151 20.589C1.99697 20.5929 1.86203 20.5898 1.72743 20.5898C1.66884 20.5898 1.61024 20.5898 1.55165 20.5898C1.53841 20.5898 1.52518 20.5898 1.51194 20.5898C1.49559 20.5898 1.52934 20.5877 1.52952 20.5877C1.54897 20.5852 1.56516 20.5778 1.58377 20.5727C1.60764 20.5662 1.63442 20.5721 1.65886 20.5694C1.6945 20.5656 1.72905 20.5544 1.76476 20.5499C1.80889 20.5444 1.8486 20.5347 1.89149 20.5239C1.92884 20.5144 1.96543 20.5032 2.00261 20.4931C2.02787 20.4861 2.06081 20.4745 2.08681 20.4727C2.0922 20.4723 2.11768 20.4643 2.11675 20.464C2.05857 20.4446 1.99173 20.4418 1.93143 20.4323C1.90262 20.4277 1.8735 20.4309 1.84462 20.4266C1.80479 20.4208 1.76685 20.418 1.72656 20.418"
          strokeWidth="0.2"
          strokeLinecap="round"
          ref={pathRefs[1]}
        />
        <Path
          d="M2.48828 23.0703C2.48019 23.0445 2.48432 23.0223 2.4796 22.997C2.47573 22.9762 2.47265 22.9582 2.47265 22.9369C2.47265 22.8647 2.4689 22.7922 2.48046 22.7209C2.4897 22.664 2.50193 22.6046 2.5039 22.5469C2.50457 22.5273 2.51525 22.5115 2.51562 22.4922C2.51587 22.4795 2.51295 22.4637 2.51757 22.4516C2.52529 22.4316 2.51953 22.4023 2.51953 22.3811C2.51953 22.3746 2.51953 22.3682 2.51953 22.3618C2.51953 22.3284 2.49705 22.2935 2.48242 22.2654C2.44894 22.2012 2.41427 22.137 2.37456 22.0764C2.35902 22.0527 2.33388 22.0278 2.32508 22C2.31898 21.9808 2.30767 21.964 2.29514 21.9484C2.27805 21.927 2.25985 21.9048 2.24631 21.8811C2.23159 21.8553 2.25928 21.8998 2.26193 21.9045C2.27681 21.9312 2.29182 21.956 2.31033 21.9803C2.34016 22.0194 2.37188 22.0559 2.40321 22.0938C2.42396 22.1189 2.45391 22.1433 2.46961 22.1719C2.47204 22.1763 2.47568 22.1799 2.47743 22.1845C2.48792 22.2118 2.49921 22.1895 2.523 22.1775C2.59419 22.1416 2.67424 22.1127 2.7322 22.056C2.75877 22.03 2.78685 22.0075 2.81402 21.9826C2.82938 21.9686 2.83624 21.9468 2.84765 21.9297"
          strokeWidth="0.2"
          strokeLinecap="round"
          ref={pathRefs[2]}
        />
        <Path
          d="M4.50001 20.5L4.00001 21.5L5 22L5.5 21.5L5.5 21L4.50001 20.5Z"
          strokeWidth="0.1"
          ref={pathRefs[3]}
        />
        <Path
          d="M3.99219 22.1797C4.02279 22.1504 4.05815 22.1333 4.09375 22.1115C4.1115 22.1007 4.12411 22.0879 4.14518 22.0801C4.19828 22.0605 4.2412 22.0237 4.29471 22.0059C4.31354 21.9996 4.32571 21.979 4.34375 21.9696C4.38355 21.9489 4.26262 22.0095 4.21919 22.0208C4.09979 22.0521 3.97284 22.0578 3.85156 22.0807C3.79502 22.0914 3.74325 22.1221 3.68663 22.1289C3.61653 22.1374 3.54709 22.1513 3.477 22.1595C3.44517 22.1632 3.49382 22.1513 3.49805 22.1504C3.54929 22.1388 3.60359 22.1308 3.65582 22.1257C3.72356 22.1189 3.79186 22.1219 3.85981 22.1191C3.887 22.1181 3.91611 22.1203 3.94097 22.1079C3.99385 22.0814 4.04796 22.0613 4.10569 22.0471C4.23862 22.0143 4.36874 21.9781 4.47266 21.8828C4.48947 21.8674 4.51113 21.8515 4.53125 21.8407C4.53872 21.8367 4.54745 21.8331 4.55382 21.8273C4.56485 21.8172 4.52398 21.8248 4.50912 21.826C4.43397 21.8316 4.36082 21.8472 4.28689 21.8609C4.19014 21.8788 4.09467 21.8955 3.99913 21.9195C3.91646 21.9403 3.83354 21.9545 3.74957 21.9687C3.68545 21.9796 3.62168 21.9972 3.55686 22.0033C3.47686 22.0107 3.39644 22.0044 3.31641 22.0102C3.28489 22.0125 3.25639 22.0216 3.2257 22.0269C3.22173 22.0276 3.20651 22.0291 3.22092 22.0267C3.26257 22.0198 3.3042 22.0085 3.34549 21.9996C3.40962 21.9857 3.47371 21.9709 3.5382 21.9588C3.62575 21.9423 3.71496 21.9366 3.80295 21.9227C3.86386 21.9132 3.92452 21.9021 3.98524 21.8915C4.04766 21.8806 4.10814 21.8634 4.17014 21.8511C4.21324 21.8426 4.25451 21.8415 4.29601 21.826C4.32404 21.8154 4.3528 21.809 4.38151 21.8008C4.45521 21.7797 4.52952 21.7597 4.60287 21.7374C4.6339 21.728 4.65278 21.7133 4.67752 21.6953C4.6868 21.6886 4.65457 21.6903 4.64323 21.6921C4.53132 21.7098 4.41915 21.7257 4.30708 21.7424C4.08582 21.7754 3.86069 21.7899 3.64757 21.8609C3.60426 21.8753 3.55939 21.8807 3.51432 21.8869C3.42571 21.8992 3.33724 21.9106 3.24783 21.9154C3.20329 21.9178 3.158 21.9159 3.11372 21.9219C3.10636 21.9229 3.09303 21.9231 3.08594 21.9266C3.06276 21.9382 3.05095 21.942 3.08724 21.931C3.14827 21.9125 3.20997 21.8979 3.2717 21.8819C3.35341 21.8608 3.4349 21.8465 3.51736 21.8294C3.62517 21.8071 3.72661 21.7605 3.8355 21.7409C4.02077 21.7074 4.2089 21.6908 4.39063 21.6393C4.42075 21.6308 4.45927 21.6236 4.48459 21.6035C4.49849 21.5925 4.51768 21.583 4.53407 21.5766C4.56722 21.5637 4.60614 21.5619 4.64063 21.5543C4.64697 21.5528 4.66272 21.5456 4.65669 21.5432C4.65163 21.5412 4.63202 21.5436 4.62891 21.5438C4.5779 21.548 4.52737 21.5578 4.477 21.5664C4.3886 21.5815 4.29935 21.5932 4.21181 21.6128C4.10913 21.6359 4.00779 21.6648 3.90712 21.6953C3.77169 21.7364 3.63719 21.7727 3.49653 21.7899C3.40181 21.8015 3.3047 21.8203 3.2092 21.8203C3.17694 21.8203 3.14468 21.8203 3.11241 21.8203C3.10866 21.8203 3.08745 21.8179 3.08659 21.814C3.08209 21.7938 3.17555 21.7574 3.19162 21.7498C3.27251 21.7113 3.36233 21.6916 3.44792 21.666C3.53373 21.6403 3.62286 21.6336 3.71094 21.6191C3.80307 21.604 3.89568 21.5927 3.98785 21.5779C4.10014 21.5599 4.21358 21.5478 4.32465 21.5234C4.33957 21.5202 4.35414 21.5141 4.36893 21.51C4.4052 21.5 4.44114 21.4964 4.4783 21.4913C4.56142 21.4799 4.64891 21.4687 4.72483 21.4297C4.72902 21.4275 4.73335 21.4226 4.7257 21.4221C4.68378 21.4194 4.64094 21.4219 4.59896 21.4219C4.50295 21.4219 4.40581 21.428 4.31077 21.4423C4.13443 21.4688 3.95763 21.4945 3.78147 21.5221C3.70181 21.5347 3.62363 21.5535 3.54362 21.5642C3.48557 21.5721 3.42767 21.5786 3.36979 21.5877C3.26716 21.6038 3.16064 21.6094 3.05686 21.6094C3.03588 21.6094 2.97295 21.6094 2.99393 21.6094C3.07291 21.6094 3.14867 21.5653 3.22526 21.5503C3.40201 21.5157 3.58286 21.5031 3.75998 21.4687C3.86874 21.4477 3.97099 21.4061 4.07965 21.3848C4.18456 21.3641 4.29168 21.3568 4.39627 21.3342C4.4505 21.3225 4.4991 21.3173 4.54666 21.2893C4.56139 21.2806 4.57544 21.2728 4.5918 21.2676C4.59731 21.2658 4.63253 21.2577 4.63412 21.2522C4.63757 21.2401 4.6089 21.2508 4.59636 21.2517C4.5291 21.257 4.46213 21.2672 4.3954 21.2767C4.19292 21.3056 3.99071 21.3366 3.78776 21.3622C3.66147 21.3781 3.53519 21.3823 3.41037 21.406C3.36259 21.4151 3.31146 21.4106 3.26302 21.4143C3.21264 21.4181 3.16291 21.4231 3.11307 21.4312C3.10723 21.4322 3.08977 21.4351 3.09549 21.4336C3.11719 21.4279 3.14025 21.4236 3.16211 21.4195C3.28593 21.3963 3.41338 21.3816 3.53863 21.3685C3.67725 21.3539 3.81836 21.3606 3.95139 21.3142C4.03787 21.2841 4.12418 21.2518 4.21224 21.227C4.28757 21.2057 4.36285 21.188 4.4375 21.1641C4.47259 21.1528 4.508 21.146 4.54123 21.1293C4.54961 21.1252 4.5662 21.1218 4.57335 21.1163C4.5782 21.1126 4.58941 21.1135 4.58941 21.1074C4.58941 21.1072 4.19051 21.161 4.15517 21.1673C3.98754 21.1971 3.81727 21.2161 3.64887 21.2415C3.54211 21.2577 3.43287 21.2539 3.32531 21.2539C3.23459 21.2539 3.14293 21.2682 3.05382 21.286C3.03894 21.289 3.02164 21.2863 3.00781 21.2921C3.00182 21.2946 2.99926 21.2933 3.01085 21.293C3.08131 21.2909 3.1518 21.2792 3.22136 21.2687C3.3677 21.2465 3.51264 21.2366 3.66037 21.2303C3.7267 21.2274 3.7899 21.2164 3.85439 21.2012C3.93317 21.1826 4.01374 21.1777 4.09288 21.1617C4.14647 21.1508 4.19763 21.1301 4.25087 21.1174C4.29115 21.1078 4.33084 21.0975 4.37153 21.0896C4.42816 21.0787 4.48951 21.0696 4.54297 21.0467C4.55877 21.0399 4.55198 21.0374 4.53776 21.0352C4.47014 21.0244 4.40314 21.0199 4.33464 21.0195C4.1891 21.0187 4.04354 21.0195 3.898 21.0195C3.79074 21.0195 3.68263 21.016 3.57552 21.0234C3.52851 21.0267 3.48363 21.0398 3.43707 21.046C3.37728 21.054 3.31766 21.0642 3.25781 21.0716C3.20114 21.0786 3.1439 21.0789 3.08724 21.0859C3.07388 21.0876 3.06024 21.0931 3.04688 21.0937C2.91895 21.0998 3.3033 21.0905 3.43077 21.0781C3.58241 21.0634 3.73501 21.0664 3.88715 21.0664C3.98496 21.0664 4.07761 21.0562 4.17448 21.0412C4.21942 21.0343 4.26751 21.0359 4.30816 21.0148C4.32433 21.0064 4.35009 21.0008 4.36328 20.9883C4.38191 20.9706 4.40423 20.9584 4.42405 20.9423C4.42798 20.9391 4.45852 20.9115 4.4566 20.911C4.45296 20.9101 4.44344 20.9109 4.44097 20.911C4.40683 20.9128 4.37272 20.9135 4.33854 20.9145C4.21321 20.9183 4.09001 20.932 3.96571 20.9473C3.81709 20.9656 3.67197 20.9851 3.52214 20.9881C3.45751 20.9893 3.39277 20.9883 3.32813 20.9883C3.26959 20.9883 3.21296 21 3.15473 21C3.1417 21 3.11828 21.0046 3.1059 21C3.09922 20.9975 3.11941 20.9954 3.12609 20.9928C3.14913 20.9841 3.17195 20.9748 3.19488 20.9657C3.30831 20.9209 3.42676 20.905 3.54731 20.8924C3.87443 20.8581 4.20896 20.8993 4.53255 20.829C4.57046 20.8208 4.60488 20.8129 4.64149 20.799C4.67504 20.7863 4.63644 20.7719 4.62001 20.7658C4.58131 20.7515 4.53973 20.7525 4.49913 20.7496C4.43848 20.7452 4.37964 20.7323 4.31858 20.7309C4.18533 20.7277 4.05168 20.7305 3.9184 20.7305C3.86434 20.7305 3.80955 20.7329 3.75564 20.7279C3.69019 20.7218 3.62615 20.7096 3.56033 20.7053C3.48048 20.7001 3.40078 20.6979 3.32075 20.6992C3.29436 20.6996 3.26836 20.707 3.24219 20.707C3.22515 20.707 3.26299 20.7109 3.26736 20.7109C3.39556 20.7109 3.51839 20.6724 3.64518 20.6604C3.68131 20.6569 3.71664 20.6493 3.75304 20.6465C3.7994 20.6429 3.84596 20.6454 3.89236 20.6421C3.93379 20.6392 3.97394 20.6306 4.01498 20.6252C4.051 20.6205 4.08653 20.6135 4.12283 20.6102C4.15087 20.6077 4.17757 20.6035 4.2053 20.5985C4.23646 20.5929 4.26924 20.5928 4.29948 20.5829C4.30125 20.5823 4.31869 20.5778 4.3086 20.5781C4.24952 20.5798 4.19068 20.5873 4.13151 20.589C3.99697 20.5929 3.86203 20.5898 3.72743 20.5898C3.66884 20.5898 3.61024 20.5898 3.55165 20.5898C3.53841 20.5898 3.52518 20.5898 3.51194 20.5898C3.49559 20.5898 3.52934 20.5877 3.52952 20.5877C3.54897 20.5852 3.56516 20.5778 3.58377 20.5727C3.60764 20.5662 3.63442 20.5721 3.65886 20.5694C3.6945 20.5656 3.72905 20.5544 3.76476 20.5499C3.80889 20.5444 3.8486 20.5347 3.89149 20.5239C3.92884 20.5144 3.96543 20.5032 4.00261 20.4931C4.02787 20.4861 4.06081 20.4745 4.08681 20.4727C4.0922 20.4723 4.11768 20.4643 4.11675 20.464C4.05857 20.4446 3.99173 20.4418 3.93143 20.4323C3.90262 20.4277 3.8735 20.4309 3.84462 20.4266C3.80479 20.4208 3.76685 20.418 3.72656 20.418"
          strokeWidth="0.2"
          strokeLinecap="round"
          ref={pathRefs[4]}
        />
        <Path
          d="M4.48828 23.0703C4.48019 23.0445 4.48432 23.0223 4.4796 22.997C4.47573 22.9762 4.47265 22.9582 4.47265 22.9369C4.47265 22.8647 4.4689 22.7922 4.48046 22.7209C4.4897 22.664 4.50193 22.6046 4.5039 22.5469C4.50457 22.5273 4.51525 22.5115 4.51562 22.4922C4.51587 22.4795 4.51295 22.4637 4.51757 22.4516C4.52529 22.4316 4.51953 22.4023 4.51953 22.3811C4.51953 22.3746 4.51953 22.3682 4.51953 22.3618C4.51953 22.3284 4.49705 22.2935 4.48242 22.2654C4.44894 22.2012 4.41427 22.137 4.37456 22.0764C4.35902 22.0527 4.33388 22.0278 4.32508 22C4.31898 21.9808 4.30767 21.964 4.29514 21.9484C4.27805 21.927 4.25985 21.9048 4.24631 21.8811C4.23159 21.8553 4.25928 21.8998 4.26193 21.9045C4.27681 21.9312 4.29182 21.956 4.31033 21.9803C4.34016 22.0194 4.37188 22.0559 4.40321 22.0938C4.42396 22.1189 4.45391 22.1433 4.46961 22.1719C4.47204 22.1763 4.47568 22.1799 4.47743 22.1845C4.48792 22.2118 4.49921 22.1895 4.523 22.1775C4.59419 22.1416 4.67424 22.1127 4.7322 22.056C4.75877 22.03 4.78685 22.0075 4.81402 21.9826C4.82938 21.9686 4.83624 21.9468 4.84765 21.9297"
          strokeWidth="0.2"
          strokeLinecap="round"
          ref={pathRefs[5]}
        />
        <Path
          d="M2.30327 1.05117C2.52753 1.01555 2.75089 1.0232 2.9785 1.02281C3.08427 1.02263 3.23665 0.997544 3.0609 1.07706C2.78675 1.20109 1.82022 1.21518 2.13413 1.21464C2.53136 1.21395 2.90818 1.24586 3.29672 1.30781C3.33206 1.31345 3.51747 1.32556 3.38662 1.36356C3.24714 1.40406 3.07652 1.46538 2.93062 1.48371C2.85949 1.49264 2.77813 1.48548 2.70744 1.4856C2.35305 1.48622 2.00911 1.53175 1.65706 1.54181C1.51467 1.54588 1.37184 1.53848 1.22945 1.54255C1.20518 1.54324 1.08052 1.5877 1.14494 1.59558C1.28838 1.61311 1.38456 1.55901 1.51639 1.54508C1.9356 1.50078 2.40838 1.5352 2.82735 1.5413C3.20642 1.54681 3.56325 1.6201 3.94121 1.61944C4.10625 1.61916 4.27129 1.61887 4.43633 1.61859C4.49884 1.61848 4.56136 1.61837 4.62388 1.61826C4.76016 1.61803 4.35565 1.65861 4.22053 1.67335C3.93084 1.70496 3.64182 1.74076 3.35198 1.77155C3.10283 1.79802 2.84752 1.85865 2.59784 1.86653C2.21862 1.8785 1.82874 1.87704 1.44999 1.89873C1.39566 1.90185 0.788689 1.97844 1.09348 1.97792C1.4327 1.97733 1.75478 2.08555 2.10225 2.08495C2.54272 2.08419 2.98449 2.11062 3.42252 2.10986C3.54783 2.10965 3.91576 2.14956 3.79187 2.16512C3.57339 2.19257 3.42881 2.22401 3.23269 2.30056C3.07902 2.36054 2.93443 2.38612 2.78037 2.45847C2.72755 2.48327 2.64085 2.49195 2.74466 2.49177C2.87458 2.49155 2.99976 2.46614 3.12919 2.46391C3.2866 2.4612 3.44437 2.46337 3.60181 2.46309C3.68238 2.46295 3.76525 2.45835 3.84562 2.46267C3.91726 2.46653 3.96761 2.51685 4.04055 2.51673C4.09291 2.51663 4.14577 2.51486 4.19809 2.51645C4.32572 2.52034 4.19013 2.59569 4.13414 2.60419C4.04768 2.61732 3.45652 2.76162 3.48281 2.85763C3.50832 2.95082 3.88688 3.00651 3.98699 3.00634C4.10827 3.00613 4.22955 3.00592 4.35083 3.00571C4.57201 3.00533 4.78727 2.97776 4.9998 2.97739"
          strokeLinecap="round"
          ref={pathRefs[6]}
        />
        <Path
          d="M21.0678 5.62557C21.2451 5.59775 21.4119 5.65402 21.5892 5.66777C21.9205 5.69348 22.249 5.72849 22.5778 5.7775C22.5855 5.77866 22.734 5.79723 22.6603 5.81127C22.3384 5.87257 22.0291 5.98622 21.7036 6.03636C21.2655 6.10387 20.8379 6.15597 20.3962 6.16579C20.3083 6.16774 20.3464 6.19475 20.4122 6.19861C20.5669 6.20771 20.7243 6.19955 20.8792 6.19955C21.228 6.19955 21.5784 6.18942 21.9269 6.2033C22.0714 6.20906 22.2145 6.23331 22.3592 6.23331C22.3694 6.23331 22.4541 6.22509 22.4277 6.25395C22.3947 6.28997 22.3222 6.28383 22.2795 6.28771C22.1429 6.30013 22.0076 6.32554 21.8715 6.34305C21.6837 6.36722 21.5012 6.41495 21.3135 6.43965C21.2489 6.44815 21.0551 6.46966 21.1203 6.46966C21.2003 6.46966 21.2784 6.48569 21.3585 6.48654C21.4347 6.48735 21.4955 6.47392 21.5573 6.52031"
          strokeWidth="0.5"
          strokeLinecap="round"
          ref={pathRefs[7]}
        />
        <Path
          d="M22.4858 6.84107C22.4999 6.85131 22.6703 6.95881 22.6509 6.98925C22.6339 7.01603 22.5669 6.96093 22.5552 6.95174C22.5098 6.91604 22.4709 6.92133 22.4183 6.94236"
          strokeWidth="0.5"
          strokeLinecap="round"
          ref={pathRefs[8]}
        />
        <Path
          d="M21.8758 22.2524C21.8907 22.2394 22.0749 22.0664 21.9987 22.0646C21.9232 22.0627 21.8829 22.1008 21.8155 22.1214C21.7584 22.1388 21.7279 22.1736 21.6775 22.2002C21.6536 22.2128 21.6286 22.2235 21.6051 22.2367C21.5647 22.2594 21.6414 22.2347 21.6532 22.2269C21.768 22.1503 21.8627 22.0268 21.9361 21.9104C21.9851 21.8325 21.9471 21.8127 21.8735 21.8686C21.7269 21.9799 21.5843 22.1289 21.4005 22.177C21.3271 22.1962 21.2537 22.2019 21.1814 22.2292C21.1669 22.2346 21.1037 22.268 21.1558 22.2483C21.2795 22.2015 21.4013 22.0892 21.506 22.0101C21.573 21.9594 21.6403 21.9064 21.6775 21.8298C21.692 21.8001 21.7062 21.7667 21.7239 21.7388C21.7652 21.6736 21.813 21.6115 21.8572 21.5487C21.8645 21.5383 21.9184 21.4669 21.9134 21.4594C21.9003 21.4397 21.8796 21.4924 21.8619 21.5081C21.778 21.5823 21.6836 21.6461 21.5894 21.7063C21.3739 21.8442 21.1223 21.935 20.8869 22.0309C20.8672 22.0389 20.8541 22.0532 20.8394 22.068C20.7828 22.1246 20.9673 21.9717 21.0341 21.9278C21.1491 21.8522 21.2618 21.7719 21.368 21.6843C21.4199 21.6415 21.456 21.5881 21.5025 21.5406C21.6082 21.4324 21.68 21.307 21.8004 21.209C21.8112 21.2002 21.9144 21.077 21.9129 21.0757C21.8887 21.055 21.6985 21.1594 21.67 21.1713C21.6048 21.1986 21.5465 21.2327 21.4839 21.2646C21.4292 21.2926 21.3748 21.3209 21.3182 21.3446C21.2914 21.3559 21.2552 21.3924 21.2289 21.3968C21.2115 21.3997 21.2026 21.4146 21.1872 21.4223C21.1293 21.4512 21.2095 21.3502 21.215 21.3423C21.3559 21.1405 21.5767 21.0084 21.7065 20.7998C21.7353 20.7535 21.7731 20.7168 21.8074 20.6746C21.8453 20.6277 21.8829 20.5805 21.921 20.5337C21.999 20.4376 21.8989 20.5359 21.8607 20.5633C21.6913 20.6847 21.5193 20.7989 21.3541 20.925C21.2754 20.985 21.191 21.0591 21.106 21.1081C21.1016 21.1107 21.0146 21.1497 21.0179 21.1563C21.0299 21.1803 21.3023 20.9514 21.317 20.9389C21.4115 20.8581 21.5207 20.7719 21.5686 20.6537C21.5947 20.589 21.6286 20.5245 21.6775 20.4728C21.7305 20.4169 21.7627 20.3396 21.8172 20.2821C21.8445 20.2534 21.844 20.256 21.8143 20.2874C21.7398 20.3659 21.6358 20.4297 21.5419 20.4827C21.4678 20.5245 21.3899 20.5596 21.317 20.6038C21.2785 20.6272 21.2452 20.6585 21.204 20.6769C21.1856 20.6851 21.1104 20.7636 21.1692 20.7256C21.2499 20.6734 21.3411 20.5461 21.3535 20.4468C21.3624 20.3753 21.4272 20.2997 21.4694 20.2439C21.5378 20.1534 21.6157 20.0688 21.6799 19.9755C21.7131 19.9272 21.7641 19.9057 21.8004 19.8631C21.8027 19.8604 21.8404 19.8223 21.83 19.8474C21.7909 19.9412 21.6808 20.0319 21.5981 20.0932C21.5394 20.1367 21.4635 20.2032 21.3952 20.2288C21.3416 20.2489 21.266 20.3281 21.3355 20.2091C21.4516 20.0106 21.5249 19.7966 21.692 19.6295C21.735 19.5864 21.8475 19.4427 21.8045 19.4857C21.7303 19.5599 21.6369 19.6114 21.5489 19.6671C21.4954 19.701 21.4485 19.7427 21.3929 19.7732C21.3447 19.7997 21.3101 19.846 21.2561 19.8671C21.2009 19.8887 21.243 19.837 21.2613 19.8167C21.319 19.7527 21.3794 19.6945 21.4306 19.6248C21.4698 19.5715 21.5003 19.5183 21.532 19.4608C21.5563 19.4167 21.5649 19.3567 21.5964 19.3182C21.6156 19.2947 21.6328 19.2713 21.6457 19.2434C21.6711 19.1882 21.7906 19.0482 21.7581 19.0997C21.7025 19.1878 21.5702 19.2528 21.4805 19.3037C21.4472 19.3225 21.4135 19.3413 21.3784 19.3564C21.3682 19.3609 21.3175 19.3971 21.3408 19.3738C21.3987 19.3159 21.4136 19.2162 21.448 19.1426C21.4952 19.0414 21.5556 18.9493 21.6086 18.8516C21.6188 18.8326 21.624 18.8006 21.6462 18.7907C21.6782 18.7765 21.6206 18.8589 21.6167 18.8637C21.5973 18.888 21.5499 18.9029 21.5216 18.9194C21.4968 18.9339 21.4617 18.9658 21.4323 18.9658C21.4104 18.9658 21.4111 18.9698 21.4318 18.9588C21.4705 18.9382 21.4881 18.9108 21.5054 18.8724C21.5382 18.7994 21.5567 18.721 21.5836 18.647C21.5963 18.6122 21.6057 18.5782 21.6155 18.5438C21.6172 18.5379 21.5526 18.5318 21.5315 18.5276"
          strokeWidth="0.3"
          strokeLinecap="round"
          ref={pathRefs[9]}
        />
        <Path
          d="M21.5303 22.8785L21.5303 22.0979"
          strokeWidth="0.3"
          strokeLinecap="round"
          ref={pathRefs[10]}
        />
        <Path
          d="M22.8758 22.2524C22.8907 22.2394 23.0749 22.0664 22.9987 22.0646C22.9232 22.0627 22.8829 22.1008 22.8155 22.1214C22.7584 22.1388 22.7279 22.1736 22.6775 22.2002C22.6536 22.2128 22.6286 22.2235 22.6051 22.2367C22.5647 22.2594 22.6414 22.2347 22.6532 22.2269C22.768 22.1503 22.8627 22.0268 22.9361 21.9104C22.9851 21.8325 22.9471 21.8127 22.8735 21.8686C22.7269 21.9799 22.5843 22.1289 22.4005 22.177C22.3271 22.1962 22.2537 22.2019 22.1814 22.2292C22.1669 22.2346 22.1037 22.268 22.1558 22.2483C22.2795 22.2015 22.4013 22.0892 22.506 22.0101C22.573 21.9594 22.6403 21.9064 22.6775 21.8298C22.692 21.8001 22.7062 21.7667 22.7239 21.7388C22.7652 21.6736 22.813 21.6115 22.8572 21.5487C22.8645 21.5383 22.9184 21.4669 22.9134 21.4594C22.9003 21.4397 22.8796 21.4924 22.8619 21.5081C22.778 21.5823 22.6836 21.6461 22.5894 21.7063C22.3739 21.8442 22.1223 21.935 21.8869 22.0309C21.8672 22.0389 21.8541 22.0532 21.8394 22.068C21.7828 22.1246 21.9673 21.9717 22.0341 21.9278C22.1491 21.8522 22.2618 21.7719 22.368 21.6843C22.4199 21.6415 22.456 21.5881 22.5025 21.5406C22.6082 21.4324 22.68 21.307 22.8004 21.209C22.8112 21.2002 22.9144 21.077 22.9129 21.0757C22.8887 21.055 22.6985 21.1594 22.67 21.1713C22.6048 21.1986 22.5465 21.2327 22.4839 21.2646C22.4292 21.2926 22.3748 21.3209 22.3182 21.3446C22.2914 21.3559 22.2552 21.3924 22.2289 21.3968C22.2115 21.3997 22.2026 21.4146 22.1872 21.4223C22.1293 21.4512 22.2095 21.3502 22.215 21.3423C22.3559 21.1405 22.5767 21.0084 22.7065 20.7998C22.7353 20.7535 22.7731 20.7168 22.8074 20.6746C22.8453 20.6277 22.8829 20.5805 22.921 20.5337C22.999 20.4376 22.8989 20.5359 22.8607 20.5633C22.6913 20.6847 22.5193 20.7989 22.3541 20.925C22.2754 20.985 22.191 21.0591 22.106 21.1081C22.1016 21.1107 22.0146 21.1497 22.0179 21.1563C22.0299 21.1803 22.3023 20.9514 22.317 20.9389C22.4115 20.8581 22.5207 20.7719 22.5686 20.6537C22.5947 20.589 22.6286 20.5245 22.6775 20.4728C22.7305 20.4169 22.7627 20.3396 22.8172 20.2821C22.8445 20.2534 22.844 20.256 22.8143 20.2874C22.7398 20.3659 22.6358 20.4297 22.5419 20.4827C22.4678 20.5245 22.3899 20.5596 22.317 20.6038C22.2785 20.6272 22.2452 20.6585 22.204 20.6769C22.1856 20.6851 22.1104 20.7636 22.1692 20.7256C22.2499 20.6734 22.3411 20.5461 22.3535 20.4468C22.3624 20.3753 22.4272 20.2997 22.4694 20.2439C22.5378 20.1534 22.6157 20.0688 22.6799 19.9755C22.7131 19.9272 22.7641 19.9057 22.8004 19.8631C22.8027 19.8604 22.8404 19.8223 22.83 19.8474C22.7909 19.9412 22.6808 20.0319 22.5981 20.0932C22.5394 20.1367 22.4635 20.2032 22.3952 20.2288C22.3416 20.2489 22.266 20.3281 22.3355 20.2091C22.4516 20.0106 22.5249 19.7966 22.692 19.6295C22.735 19.5864 22.8475 19.4427 22.8045 19.4857C22.7303 19.5599 22.6369 19.6114 22.5489 19.6671C22.4954 19.701 22.4485 19.7427 22.3929 19.7732C22.3447 19.7997 22.3101 19.846 22.2561 19.8671C22.2009 19.8887 22.243 19.837 22.2613 19.8167C22.319 19.7527 22.3794 19.6945 22.4306 19.6248C22.4698 19.5715 22.5003 19.5183 22.532 19.4608C22.5563 19.4167 22.5649 19.3567 22.5964 19.3182C22.6156 19.2947 22.6328 19.2713 22.6457 19.2434C22.6711 19.1882 22.7906 19.0482 22.7581 19.0997C22.7025 19.1878 22.5702 19.2528 22.4805 19.3037C22.4472 19.3225 22.4135 19.3413 22.3784 19.3564C22.3682 19.3609 22.3175 19.3971 22.3408 19.3738C22.3987 19.3159 22.4136 19.2162 22.448 19.1426C22.4952 19.0414 22.5556 18.9493 22.6086 18.8516C22.6188 18.8326 22.624 18.8006 22.6462 18.7907C22.6782 18.7765 22.6206 18.8589 22.6167 18.8637C22.5973 18.888 22.5499 18.9029 22.5216 18.9194C22.4968 18.9339 22.4617 18.9658 22.4323 18.9658C22.4104 18.9658 22.4111 18.9698 22.4318 18.9588C22.4705 18.9382 22.4881 18.9108 22.5054 18.8724C22.5382 18.7994 22.5567 18.721 22.5836 18.647C22.5963 18.6122 22.6057 18.5782 22.6155 18.5438C22.6172 18.5379 22.5526 18.5318 22.5315 18.5276"
          strokeWidth="0.3"
          strokeLinecap="round"
          ref={pathRefs[11]}
        />
        <Path
          d="M22.5303 22.8785L22.5303 22.0979"
          strokeWidth="0.3"
          strokeLinecap="round"
          ref={pathRefs[12]}
        />
        <Path
          d="M20.8758 22.2524C20.8907 22.2394 21.0749 22.0664 20.9987 22.0646C20.9232 22.0627 20.8829 22.1008 20.8155 22.1214C20.7584 22.1388 20.7279 22.1736 20.6775 22.2002C20.6536 22.2128 20.6286 22.2235 20.6051 22.2367C20.5647 22.2594 20.6414 22.2347 20.6532 22.2269C20.768 22.1503 20.8627 22.0268 20.9361 21.9104C20.9851 21.8325 20.9471 21.8127 20.8735 21.8686C20.7269 21.9799 20.5843 22.1289 20.4005 22.177C20.3271 22.1962 20.2537 22.2019 20.1814 22.2292C20.1669 22.2346 20.1037 22.268 20.1558 22.2483C20.2795 22.2015 20.4013 22.0892 20.506 22.0101C20.573 21.9594 20.6403 21.9064 20.6775 21.8298C20.692 21.8001 20.7062 21.7667 20.7239 21.7388C20.7652 21.6736 20.813 21.6115 20.8572 21.5487C20.8645 21.5383 20.9184 21.4669 20.9134 21.4594C20.9003 21.4397 20.8796 21.4924 20.8619 21.5081C20.778 21.5823 20.6836 21.6461 20.5894 21.7063C20.3739 21.8442 20.1223 21.935 19.8869 22.0309C19.8672 22.0389 19.8541 22.0532 19.8394 22.068C19.7828 22.1246 19.9673 21.9717 20.0341 21.9278C20.1491 21.8522 20.2618 21.7719 20.368 21.6843C20.4199 21.6415 20.456 21.5881 20.5025 21.5406C20.6082 21.4324 20.68 21.307 20.8004 21.209C20.8112 21.2002 20.9144 21.077 20.9129 21.0757C20.8887 21.055 20.6985 21.1594 20.67 21.1713C20.6048 21.1986 20.5465 21.2327 20.4839 21.2646C20.4292 21.2926 20.3748 21.3209 20.3182 21.3446C20.2914 21.3559 20.2552 21.3924 20.2289 21.3968C20.2115 21.3997 20.2026 21.4146 20.1872 21.4223C20.1293 21.4512 20.2095 21.3502 20.215 21.3423C20.3559 21.1405 20.5767 21.0084 20.7065 20.7998C20.7353 20.7535 20.7731 20.7168 20.8074 20.6746C20.8453 20.6277 20.8829 20.5805 20.921 20.5337C20.999 20.4376 20.8989 20.5359 20.8607 20.5633C20.6913 20.6847 20.5193 20.7989 20.3541 20.925C20.2754 20.985 20.191 21.0591 20.106 21.1081C20.1016 21.1107 20.0146 21.1497 20.0179 21.1563C20.0299 21.1803 20.3023 20.9514 20.317 20.9389C20.4115 20.8581 20.5207 20.7719 20.5686 20.6537C20.5947 20.589 20.6286 20.5245 20.6775 20.4728C20.7305 20.4169 20.7627 20.3396 20.8172 20.2821C20.8445 20.2534 20.844 20.256 20.8143 20.2874C20.7398 20.3659 20.6358 20.4297 20.5419 20.4827C20.4678 20.5245 20.3899 20.5596 20.317 20.6038C20.2785 20.6272 20.2452 20.6585 20.204 20.6769C20.1856 20.6851 20.1104 20.7636 20.1692 20.7256C20.2499 20.6734 20.3411 20.5461 20.3535 20.4468C20.3624 20.3753 20.4272 20.2997 20.4694 20.2439C20.5378 20.1534 20.6157 20.0688 20.6799 19.9755C20.7131 19.9272 20.7641 19.9057 20.8004 19.8631C20.8027 19.8604 20.8404 19.8223 20.83 19.8474C20.7909 19.9412 20.6808 20.0319 20.5981 20.0932C20.5394 20.1367 20.4635 20.2032 20.3952 20.2288C20.3416 20.2489 20.266 20.3281 20.3355 20.2091C20.4516 20.0106 20.5249 19.7966 20.692 19.6295C20.735 19.5864 20.8475 19.4427 20.8045 19.4857C20.7303 19.5599 20.6369 19.6114 20.5489 19.6671C20.4954 19.701 20.4485 19.7427 20.3929 19.7732C20.3447 19.7997 20.3101 19.846 20.2561 19.8671C20.2009 19.8887 20.243 19.837 20.2613 19.8167C20.319 19.7527 20.3794 19.6945 20.4306 19.6248C20.4698 19.5715 20.5003 19.5183 20.532 19.4608C20.5563 19.4167 20.5649 19.3567 20.5964 19.3182C20.6156 19.2947 20.6328 19.2713 20.6457 19.2434C20.6711 19.1882 20.7906 19.0482 20.7581 19.0997C20.7025 19.1878 20.5702 19.2528 20.4805 19.3037C20.4472 19.3225 20.4135 19.3413 20.3784 19.3564C20.3682 19.3609 20.3175 19.3971 20.3408 19.3738C20.3987 19.3159 20.4136 19.2162 20.448 19.1426C20.4952 19.0414 20.5556 18.9493 20.6086 18.8516C20.6188 18.8326 20.624 18.8006 20.6462 18.7907C20.6782 18.7765 20.6206 18.8589 20.6167 18.8637C20.5973 18.888 20.5499 18.9029 20.5216 18.9194C20.4968 18.9339 20.4617 18.9658 20.4323 18.9658C20.4104 18.9658 20.4111 18.9698 20.4318 18.9588C20.4705 18.9382 20.4881 18.9108 20.5054 18.8724C20.5382 18.7994 20.5567 18.721 20.5836 18.647C20.5963 18.6122 20.6057 18.5782 20.6155 18.5438C20.6172 18.5379 20.5526 18.5318 20.5315 18.5276"
          strokeWidth="0.3"
          strokeLinecap="round"
          ref={pathRefs[13]}
        />
        <Path
          d="M20.5303 22.8785L20.5303 22.0979"
          strokeWidth="0.3"
          strokeLinecap="round"
          ref={pathRefs[14]}
        />
      </SVG>
    </Container>
  );
}

export default Landscape;

interface propsIState {
  isPC: boolean;
  isTablet: boolean;
  secContRef: React.RefObject<HTMLDivElement>;
  currentSecRef: React.MutableRefObject<number>;
  currentSecScrollRef: React.MutableRefObject<number>;
}
const Container = styled.div<{ isPC: boolean; isTablet: boolean }>`
  width: 100%;
  height: ${(props) => (props.isPC ? "90" : props.isTablet ? "75" : "50")}%;

  position: absolute;
  bottom: 0;
  left: ${(props) => (props.isPC ? "100" : "50")}%;

  ${(props) =>
    props.isPC
      ? css`
          transform: translate3d(-80%, 3%, 0);
          opacity: 1;
        `
      : css`
          transform: translate3d(-50%, 3%, 0);
          opacity: 0.5;
        `}
`;
const SVG = styled.svg`
  width: 100%;
  height: 100%;
`;

const Path = styled.path`
  stroke: ${({ theme }: { theme: ThemeIState }) => theme.third};

  transition: all 4.2s ease-in-out;

  &:nth-child(1) {
    stroke-dasharray: 4.561191082000732;
    stroke-dashoffset: 4.561191082000732;
  }
  &:nth-child(2) {
    stroke-dasharray: 31.96586799621582;
    stroke-dashoffset: 31.96586799621582;
  }
  &:nth-child(3) {
    stroke-dasharray: 2.145617961883545;
    stroke-dashoffset: 2.145617961883545;
  }
  &:nth-child(4) {
    stroke-dasharray: 4.561191082000732;
    stroke-dashoffset: 4.561191082000732;
  }
  &:nth-child(5) {
    stroke-dasharray: 31.965843200683594;
    stroke-dashoffset: 31.965843200683594;
  }
  &:nth-child(6) {
    stroke-dasharray: 2.145617723464966;
    stroke-dashoffset: 2.145617723464966;
  }
  &:nth-child(7) {
    stroke-dasharray: 20.842601776123047;
    stroke-dashoffset: 20.842601776123047;
  }
  &:nth-child(8) {
    stroke-dasharray: 7.915527820587158;
    stroke-dashoffset: 7.915527820587158;
  }
  &:nth-child(9) {
    stroke-dasharray: 0.48481228947639465;
    stroke-dashoffset: 0.48481228947639465;
  }
  &:nth-child(10) {
    stroke-dasharray: 17.92450523376465;
    stroke-dashoffset: 17.92450523376465;
  }
  &:nth-child(11) {
    stroke-dasharray: 0.7805995941162109;
    stroke-dashoffset: 0.7805995941162109;
  }
  &:nth-child(12) {
    stroke-dasharray: 17.924503326416016;
    stroke-dashoffset: 17.924503326416016;
  }
  &:nth-child(13) {
    stroke-dasharray: 0.7805995941162109;
    stroke-dashoffset: 0.7805995941162109;
  }
  &:nth-child(14) {
    stroke-dasharray: 17.92450523376465;
    stroke-dashoffset: 17.92450523376465;
  }
  &:nth-child(15) {
    stroke-dasharray: 0.7805995941162109;
    stroke-dashoffset: 0.7805995941162109;
  }
`;
