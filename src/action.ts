import API from "./utils/apiCall";

export const getData = async (
  CALL_TYPE: string,
  API_URL: string
): Promise<any> => {
  //@ts-ignore
  return await API[CALL_TYPE](API_URL);
};

