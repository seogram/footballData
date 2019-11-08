import React, { FunctionComponent, useContext } from "react";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import { Navigation } from "./Navigation";
import { UserContext } from "../../utils/context";

export const Sidebar: FunctionComponent = () => {
  const theme = useContext(UserContext);
  const drawer = (
    <div>
      <h2 className={theme.classes.brandText}>Challenge</h2>
      <hr className={theme.classes.hr} />
      <Navigation />
    </div>
  );

  return (
    <nav className={theme.classes.drawer} aria-label="product filters">
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor="left"
          open={theme.mobileOpen}
          onClose={theme.handleDrawerToggle}
          classes={{
            paper: theme.classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden mdDown implementation="css">
        <Drawer
          classes={{
            paper: theme.classes.drawerPaper
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};
