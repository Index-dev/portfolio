import React, { useState } from "react";
import Presenter from "home/presenter";

const HomeContainer = (props: propsIState) => {
  const { toggleTheme } = props;
  const [isLoading, setLoading] = useState<boolean>(true);
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [disappearMenu, setDisappearMenu] = useState<boolean>(false)

  function toggleMenu() {
    if (showMenu) {
      setDisappearMenu(true);
      setTimeout(() => {
        setShowMenu(!showMenu)
        setDisappearMenu(false);
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
      disappearMenu={disappearMenu}
      toggleMenu={toggleMenu}
    />
  );
};

export default HomeContainer;

interface propsIState {
  toggleTheme: () => void;
}
