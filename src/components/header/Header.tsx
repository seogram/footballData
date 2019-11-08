import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import { UserContext } from "../../utils/context";

export const Header = () => {
  const theme = useContext(UserContext);
  return (
    <AppBar position="fixed" className={theme.classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={theme.handleDrawerToggle}
          className={theme.classes.menuButton}
        >
          <Icon className={theme.classes.hambugerIcon}>menu</Icon>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
