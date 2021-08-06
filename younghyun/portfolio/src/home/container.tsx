import React, { useState, useEffect, useRef } from "react";
import Presenter from "home/presenter";

const HomeContainer = (props: propsIState) => {
  const { toggleTheme } = props;
  const [isLoading, setLoading] = useState<boolean>(true);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [disappearMenu, setDisappearMenu] = useState<boolean>(false);

  const contRef = useRef<HTMLDivElement>(null);
  const secContRef = useRef<HTMLDivElement>(null);

  const navRefs = {
    navRef: useRef<HTMLDivElement>(null),
    topPathRef: useRef<SVGPathElement>(null),
    middlePathRef: useRef<SVGPathElement>(null),
    bottomPathRef: useRef<SVGPathElement>(null),
  };
  const { navRef, topPathRef, middlePathRef, bottomPathRef } = navRefs;

  function toggleMenu() {
    if (showMenu) {
      setDisappearMenu(true);
      setTimeout(() => {
        setShowMenu(!showMenu);
        setDisappearMenu(false);
      }, 300);
    } else {
      setShowMenu(!showMenu);
    }
  }

  useEffect(() => {
    if (contRef.current && isLoading) {
      contRef.current.style.overflow = "hidden";
    } else if (contRef.current) {
      contRef.current.style.overflow = "none";
    }
  }, [isLoading]);

  useEffect(() => {
    if (secContRef.current) {
      window.addEventListener(
        "scroll",
        () => {
          if (secContRef.current) {
            if (navRef.current) {
              const absolutePoint = window.innerHeight * 0.1285;
              const fixedPoint = window.innerHeight * 0.035;
              if (absolutePoint > secContRef.current.scrollTop + fixedPoint) {
                navRef.current.style.position = "absolute";
                navRef.current.style.top = "13vh";
                navRef.current.style.right = "5vw";
                if (topPathRef.current) {
                  topPathRef.current.style.strokeDashoffset = "44.5";
                }
                if (middlePathRef.current) {
                  middlePathRef.current.style.strokeDashoffset = "44.5";
                }
                if (bottomPathRef.current) {
                  bottomPathRef.current.style.strokeDashoffset = "44.5";
                }
              } else {
                navRef.current.style.position = "fixed";
                navRef.current.style.top = "3vh";
                navRef.current.style.right = "5vw";
                if (topPathRef.current) {
                  topPathRef.current.style.strokeDashoffset = "0";
                }
                if (middlePathRef.current) {
                  middlePathRef.current.style.strokeDashoffset = "0";
                }
                if (bottomPathRef.current) {
                  bottomPathRef.current.style.strokeDashoffset = "0";
                }
              }
            }
          }
        },
        true
      );
      if (secContRef.current.children) {
        secContRef.current.children[2].scrollIntoView({
          block: "start",
        });
      }
    }
  });

  useEffect(() => {
    if (navRef.current) {
      navRef.current.addEventListener("mouseover", () => {
        if (topPathRef.current) {
          topPathRef.current.style.strokeWidth = "6";
        }
        if (middlePathRef.current) {
          middlePathRef.current.style.strokeWidth = "6";
        }
        if (bottomPathRef.current) {
          bottomPathRef.current.style.strokeWidth = "6";
        }
      });
      navRef.current.addEventListener("mouseout", () => {
        if (topPathRef.current) {
          topPathRef.current.style.strokeWidth = "4";
        }
        if (middlePathRef.current) {
          middlePathRef.current.style.strokeWidth = "4";
        }
        if (bottomPathRef.current) {
          bottomPathRef.current.style.strokeWidth = "4";
        }
      });
    }
  }, [navRef, topPathRef, middlePathRef, bottomPathRef]);

  return (
    <Presenter
      isLoading={isLoading}
      setLoading={setLoading}
      toggleTheme={toggleTheme}
      showMenu={showMenu}
      disappearMenu={disappearMenu}
      toggleMenu={toggleMenu}
      contRef={contRef}
      secContRef={secContRef}
      navRefs={navRefs}
    />
  );
};

export default HomeContainer;

interface propsIState {
  toggleTheme: () => void;
}
