import Config from "./config";
import axios from "axios";
import {Team , Conference} from "../types";

const { ROOT_URL } = Config;
const axiosClient = axios.create({
  timeout: 120000,
  baseURL: `${ROOT_URL}`
});

export default {
  getTeams: async (endpoint: string):Promise<Team> => {
    return await axiosClient.get(endpoint);
  },
  getConferences: async (endpoint: string):Promise<Conference> => {
    return await axiosClient.get(endpoint);
  }
};