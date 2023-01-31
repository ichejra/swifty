import axios from "axios";
import { getToken } from "../utils/localStorage";

export const api = () => {
  const accessToken = getToken();
  let config: any = {
    baseURL: "https://api.intra.42.fr/", //! Add to env
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  console.log("accessToken ==========> ", JSON.stringify(accessToken, null, 2));
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return axios.create(config);
};

export const getUsersList = () => {};
