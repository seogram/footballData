
export interface Team {
  id: number;
  school: string;
  mascot: string ;
  abbreviation: string ;
  division: string ;
  logos: string[];
  conference: string;
}

export interface Conference {
  id: number;
  name: string;
  "short_name": string;
  abbreviation: string;
}
export enum NAVIGATION {
  ALL = "all",
  TEAMS = "teams",
  CONFRENCES = "confrences"
}
