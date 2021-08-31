import React, { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";

import { basicTheme, reversedTheme } from "components/theme";
import Presenter from "home/presenter";

const HomeContainer = (props: propsIState) => {
  const { theme, setTheme } = props;
  const [isLoading, setLoading] = useState<boolean>(true);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [disappearMenu, setDisappearMenu] = useState<boolean>(false);

  const contRef = useRef<HTMLDivElement>(null);
  const secContRef = useRef<HTMLDivElement>(null);

  const isPC = useMediaQuery({
    query: "(min-width : 1025px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width : 600px) and (max-width :1024px)",
  });

  useEffect(() => {
    if (contRef.current && isLoading) {
      contRef.current.style.overflow = "hidden";
    } else if (contRef.current) {
      contRef.current.style.overflow = "none";
    }
  }, [isLoading]);

  useEffect(() => {
    if (secContRef.current && secContRef.current.children) {
      secContRef.current.children[2].scrollIntoView({
        block: "start",
      });
    }
  });

  useEffect(() => {
    if (secContRef.current) {
      const secondSecRef = secContRef.current
        .childNodes[4] as HTMLTableSectionElement;
      secContRef.current.addEventListener("scroll", () => {
        console.log(secContRef.current?.scrollTop, window.innerHeight);
      });
    }
  });

  const toggleTheme = () => {
    if (theme === basicTheme) {
      if (secContRef.current && secContRef.current.children) {
        secContRef.current.children[2].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      setTimeout(() => {
        setTheme(reversedTheme);
      }, 200);
    } else {
      if (secContRef.current && secContRef.current.children) {
        secContRef.current.children[2].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      setTimeout(() => {
        setTheme(basicTheme);
      }, 200);
    }
  };

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

  return (
    <Presenter
      isPC={isPC}
      isTablet={isTablet}
      isLoading={isLoading}
      setLoading={setLoading}
      theme={theme}
      toggleTheme={toggleTheme}
      showMenu={showMenu}
      disappearMenu={disappearMenu}
      toggleMenu={toggleMenu}
      contRef={contRef}
      secContRef={secContRef}
    />
  );
};

export default HomeContainer;

interface propsIState {
  theme: ThemeIState;
  setTheme: React.Dispatch<React.SetStateAction<ThemeIState>>;
}
