import React, { useContext } from "react";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { NavTitlesContext } from "./NavTitlesContext";

export default function Heading(props) {
  const { navTitles } = useContext(NavTitlesContext);
  return (
    <>
      <div className="header-title">
        <h1>{navTitles.mainTitle}</h1>
        {navTitles.subTitle && (
          <>
            <ArrowForwardIosSharpIcon />
            <h1>{navTitles.subTitle}</h1>
          </>
        )}
      </div>
    </>
  );
}
