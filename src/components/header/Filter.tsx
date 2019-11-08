import React, { useContext, useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import { UserContext } from "../../utils/context";

export const Filter = () => {
  const theme = useContext(UserContext);
  const [currentConference, setCurrentConference] = useState<string>("All");
  const handleChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    onFilterChange: (conference: string) => void
  ) => {
    const currentConference = (event.target.value);
    setCurrentConference(currentConference);
    onFilterChange(currentConference);
  };

  return (
    <FormControl className={theme.classes.formControl}>
      <InputLabel htmlFor="sort">Filter :</InputLabel>
      <Select
        value={currentConference}
        onChange={(e: any) => handleChange(e, theme.onFilterChange)}
        inputProps={{
          name: "sort",
          id: "sort"
        }}
      >
        {menuItemMaker(theme.uniqueConferences)}
      </Select>
    </FormControl>
  );
};

const menuItemMaker = (uniqueConferences: string[]) => {
  
  return uniqueConferences.map((item: string, index: number) => {
    return (
      <MenuItem value={item} key={index}>
        {item}
      </MenuItem>
    );
  });
};
