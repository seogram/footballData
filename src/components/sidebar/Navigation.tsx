import React, { FunctionComponent, useState, useContext } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { UserContext } from "../../utils/context";
import { NAVIGATION } from "../../types";

export const Navigation: FunctionComponent = () => {
  const theme = useContext(UserContext);
  const [navigation, setNavigation] = useState(NAVIGATION.TEAMS);
  return (
    <Container>
      <Grid container spacing={0} className={theme.classes.filterWrapper}>
        <Grid item>
        <div className={theme.classes.root}>
      <List component="nav" aria-label="filters"
       subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          <h3 className={theme.classes.navigationText}>
             Football Data        
          </h3>
        </ListSubheader>
      }
      className={theme.classes.root}
      >
        <ListItem button  
            selected={navigation === NAVIGATION.TEAMS}
            onClick={() => {
              setNavigation(NAVIGATION.TEAMS);
              theme.onNavigationChange(NAVIGATION.TEAMS);
            }}>
          <ListItemText primary="Teams" />
        </ListItem>
        <ListItem button   
            selected={navigation === NAVIGATION.CONFRENCES}
            onClick={() => {
              setNavigation(NAVIGATION.CONFRENCES);
              theme.onNavigationChange(NAVIGATION.CONFRENCES);
            }}>
          <ListItemText primary="Confrences" />
        </ListItem>
      </List>
    </div>
        </Grid>
      </Grid>
    </Container>
  );
};
