import { createContext, useState } from "react";

export const NavTitlesContext = createContext();

const NavTitlesProvider = (props) => {
  const [navTitles, setNavTitles] = useState({
    mainTitle: "All Modules",
    subTitle: null
  });

  return (
    <NavTitlesContext.Provider value={{ navTitles, setNavTitles }}>
      {props.children}
    </NavTitlesContext.Provider>
  );
};

export default NavTitlesProvider;