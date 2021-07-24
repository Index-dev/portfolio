import React, { useState } from "react";
import Presenter from "home/presenter";

const HomeContainer = (props: propsIState) => {
  const { toggleTheme } = props;
  const [isLoading, setLoading] = useState<boolean>(true);

  return <Presenter isLoading={isLoading} toggleTheme={toggleTheme} />;
};

export default HomeContainer;

interface propsIState {
  toggleTheme: () => void;
}
