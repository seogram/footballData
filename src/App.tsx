import React, { useState, useEffect } from "react";
import "./App.css";
import { getData } from "./action";
import MainPage from "./components/MainPage";
import { Team ,Conference, NAVIGATION } from "./types";

const App: React.FC = () => {
  const [teams, setTeams] = useState<Team[] | []>([]);
  const [filteredTeams, setFilteredTeams] = useState<Team[] | []>([]);
  const [conferences, setConferences] = useState<Conference[] | []>([]);
  const [uniqueConferences, setUniqueConferences] = useState<string[] | []>([]);
  const [loading, setloading] = useState<boolean>(false);
  const [filterType, setFilterType] = useState< Conference| string>("All");
  const [navigation, setNavigation] = useState<string>(NAVIGATION.TEAMS);
 
  useEffect(() => {
    async function fetchData() {
      setloading(true);
      setTimeout(async () => {
        const res = await getData("getTeams", "/teams");
        setloading(false);
        if (res.data) {
          setTeams(res.data);
          let uniqueConf:string[] = ["All"];
          res.data.forEach((team:Team) =>{
             uniqueConf.push(team.conference);
         });
         setUniqueConferences(uniqueConf.filter((item:string, pos:number)=>{
           return item && uniqueConf.indexOf(item)=== pos;
         }));
        }
      }, 1000);
    }
    fetchData();
  }, []);

  useEffect(() => {
    setloading(true);
    async function fetchData() {
      const action = navigation === NAVIGATION.TEAMS ? "getTeams" : "getConferences";
      const url = navigation === NAVIGATION.TEAMS ? "/teams" : "/conferences";
      setloading(true);
      const res = await getData(action, url);
      setloading(false);
        if (res.data) {
          navigation === NAVIGATION.TEAMS ?
          setTeams(res.data): setConferences(res.data);
        }
    }
    fetchData();
  
  }, [navigation]);

  const onFilterChange = (conference:string): void => {
    if (!conference) return;
      setFilterType(conference);
  };

  useEffect(() => {
    setFilteredTeams(filterType === "All" ? teams : teams.filter((team:Team):Boolean => {
      return team.conference === filterType
    }));
  }, [filterType, teams]);

  const onNavigationChange  = (type: NAVIGATION): void => {
    if (!type) return;
      setNavigation(type);
  };

  return (
    <div className="App">
      <>
        <MainPage
          loading={loading}
          teams={filteredTeams.length ? filteredTeams : teams}
          conferences={conferences}
          uniqueConferences={uniqueConferences}
          onFilterChange={onFilterChange}
          navigation={navigation}
          onNavigationChange={onNavigationChange}
        />
      </>
    </div>
  );
};

export default App;
