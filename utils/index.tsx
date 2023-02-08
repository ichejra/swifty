import { getSessionData } from "./localStorage";
import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URL } from "@env";

export const loginFromLocalStorage = async () => {
  let sessionData = await getSessionData();
  let isAuth = false;

  if (sessionData) {
    isAuth = true;
  }
  return { isAuth };
};

export const authConfig = {
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  redirectUrl: REDIRECT_URL,
  scopes: ["public"],
  serviceConfiguration: {
    authorizationEndpoint: "https://api.intra.42.fr/oauth/authorize",
    tokenEndpoint: "https://api.intra.42.fr/oauth/token",
  },
};

export const isTokenExpired = (expirationDate: string | number | Date) => {
  return Date.now() >= new Date(expirationDate).getTime();
};

export const checkToken = (expirationDate: string | number | Date) => {
  return Date.now() >= new Date(expirationDate).getTime() - 3600000;
};
