import axios from "axios";
import { authorize, refresh } from "react-native-app-auth";

import { BASE_URL } from "@env";
import { authConfig } from "../utils";
import { saveSession } from "../utils/localStorage";

export const api = (accessToken: string) => {
  let config: any = {
    baseURL: BASE_URL,
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

export const refreshToken = async (refToken: string) => {
  const result = await refresh(authConfig, { refreshToken: refToken });

  saveSession(result);
};
