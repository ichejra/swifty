import axios from "axios";
import { authorize } from "react-native-app-auth";
import { authConfig } from "../utils";
import { saveSession } from "../utils/localStorage";

export const api = (accessToken: string) => {
  console.log(accessToken);

  let config: any = {
    baseURL: "https://api.intra.42.fr/", //! Add to env
    headers: {
      "Content-Type": "application/vnd.api+json",
    },
  };

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return axios.create(config);
};

export const generateToken = async () => {
  const result = await authorize(authConfig);

  saveSession(result);
};
