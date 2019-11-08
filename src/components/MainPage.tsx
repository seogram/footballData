import * as React from "react";
import { compose } from "recompose";
import CssBaseline from "@material-ui/core/CssBaseline";
import withStyles from "@material-ui/core/styles/withStyles";
import { createStyles, WithStyles } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { Sidebar } from "./sidebar/Sidebar";
import { Header } from "./header/Header";
import TeamTable from "./TeamTable";
import ConferenceTable from "./ConferenceTable";
import { NAVIGATION ,Team , Conference} from "../types";
import { Provider, AppContextInterface } from "../utils/context";
const styles = (theme: Theme) =>
  createStyles({
    drawer: {
      [theme.breakpoints.up(1250)]: {
        width: 240,
        flexShrink: 0
      }
    },
    appBar: {
      display: "flex",
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(2, 0, 0),
      marginLeft: 240,
      [theme.breakpoints.up(1250)]: {
        width: `calc(100% - ${240}px)`
      }
    },
    brandText: {
      marginBottom :"2rem"
    },
    navigationText : {
      color: "#111"
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(1250)]: {
        display: "none"
      }
    },
    drawerPaper: {
      width: 240
    },
    content: {
      flexGrow: 1,
      marginTop: theme.spacing(10)
    },
    icon: {
      width : "4rem"
    },
    hr : {
      borderTop: "0.2rem solid"
    },
    hambugerIcon: {
      flexGrow: 1,
      color: "#111"
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(4, 0, 4)
    },
    cardGrid: {
      [theme.breakpoints.up(1250)]: {
        marginLeft: "240px"
      },
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8)
    },
    formControl: {
      float: "right",
      margin: theme.spacing(1),
      minWidth: 120
    },
    loader : {
      marginTop: "50px" 
    }
  });

interface Iprops extends WithStyles<typeof styles> {
  loading: boolean;
  onFilterChange: (conference: string) => void;
  navigation : string;
  onNavigationChange : (type: string) => void;
  teams: Team[];
  conferences : Conference[];
  uniqueConferences: string[];
  classes: Record<any, string>;
}

interface Istate {
  teams: Team[];
  conferences: Conference[]
  mobileOpen: boolean;
}
class MainPage extends React.Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props);
    this.state = {
      teams: [],
      conferences : [],
      mobileOpen: false,
    };
  }

  componentDidUpdate(prevProps: Iprops) {
    if (prevProps.teams !== this.props.teams) {
      this.setState({
        teams: this.props.teams
      });
    }

    if (prevProps.conferences !== this.props.conferences) {
      this.setState({
        conferences: this.props.conferences
      });
    }
  }

  render() {
    const handleDrawerToggle = (): void => {
      this.setState(prevState => ({
        mobileOpen: !prevState.mobileOpen
      }));
    };

    const {mobileOpen, teams, conferences} = this.state;
    const {
      classes,     
      loading,
      onFilterChange,
      navigation,
      uniqueConferences,
      onNavigationChange
  } = this.props;
    const appContext: AppContextInterface = {
      classes,
      handleDrawerToggle,
      mobileOpen,
      onFilterChange,
      navigation,
      uniqueConferences,
      onNavigationChange,
      loading,
      newTeams: teams,
      newConferences : conferences,
    };

    const DataGrid = navigation === NAVIGATION.TEAMS ? TeamTable : ConferenceTable
    return (
      <div className={classes.root} id="scrollTo">
        <CssBaseline />
        <Provider value={appContext}>
          <Header />
          <Sidebar />
          <DataGrid />
        </Provider>
      </div>
    );
  }
}

export default compose(
  withStyles(styles)
  //@ts-ignore
)(MainPage);
