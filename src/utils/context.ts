import React from "react";
import { Team , Conference } from "../types";
export const UserContext = React.createContext<AppContextInterface>({
  classes: {
    drawer: "",
    appBar: "",
    brandText: "",
    menuButton: "",
    drawerPaper: "",
    content: "",
    icon: "",
    hambugerIcon: "",
    heroContent: "",
    filterWrapper: "",
    cardGrid: "",
    loader: "",
    hr: "",
    navigationText: "",
    formControl: "",
  },
  handleDrawerToggle: () => {},
  mobileOpen: false,
  navigation: "",
  uniqueConferences: [],
  onFilterChange: (conference: string) => {},
  onNavigationChange: (type : string) => {}, 
  loading: false,
  newTeams: [],
  newConferences : [],
});
export const Provider = UserContext.Provider;
export const Consumer = UserContext.Consumer;

export interface AppContextInterface {
  classes: {
    [key: string]: string;
  };
  handleDrawerToggle: () => void;
  mobileOpen: boolean;
  navigation : string;
  uniqueConferences: string[];
  onFilterChange: (conference: string) => void;
  onNavigationChange :(type: string) => void;
  loading: boolean;
  newTeams: Team[];
  newConferences : Conference[];
}
