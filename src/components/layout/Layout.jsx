import { Fragment } from "react";
import MainNavigation from "./MainNavigation";

import classes from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <MainNavigation />
      <main className={classes.main}>{children}</main>
    </Fragment>
  );
};

export default Layout;
