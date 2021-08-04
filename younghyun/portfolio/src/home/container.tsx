import React, { useState } from "react";
import Presenter from "home/presenter";

const HomeContainer = (props: propsIState) => {
  const { toggleTheme } = props;
  const [isLoading, setLoading] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false)

  function toggleMenu() {
    if (showMenu) {
      setTimeout(() => {
        setShowMenu(!showMenu)
      }, 300)
    } else {
      setShowMenu(!showMenu)
    }
  }

  return (
    <Presenter
      isLoading={isLoading}
      setLoading={setLoading}
      toggleTheme={toggleTheme}
      showMenu={showMenu}
      toggleMenu={toggleMenu}
    />
  );
};

export default HomeContainer;

interface propsIState {
  toggleTheme: () => void;
}
