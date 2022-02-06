import React from "react";
import NavItem from "./NavItem";

const SideDrawer = (props) => (
  <nav className="side-drawer">
    <NavItem
      navItemRoute="/"
      navItemIcon="fa fa-fw fa-book icon"
      navItemName="All Modules"
      onClick={props.click}
    />

    <NavItem
      navItemRoute="saved-modules"
      navItemIcon="fa fa-fw fa-calendar icon"
      navItemName="Saved Modules"
      onClick={props.click}
    />
  </nav>
);

export default SideDrawer;
