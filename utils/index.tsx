import { getSessionData } from "./localStorage";
import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URL } from "@env";

export const loginFromLocalStorage = async () => {
  let sessionData = await getSessionData();
  let isAuth = false;

  console.log("tokens", sessionData); //! log

  if (sessionData) {
    isAuth = true;
  }
  return { isAuth };
};

export const config = {
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  redirectUrl: REDIRECT_URL,
  scopes: ["public"],
  serviceConfiguration: {
    authorizationEndpoint: "https://api.intra.42.fr/oauth/authorize",
    tokenEndpoint: "https://api.intra.42.fr/oauth/token",
    // revocationEndpoint: "https://api.intra.42.fr/oauth/revoke",
  },
};

export const isTokenExpired = (expirationDate: string) => {
  //! To be tested
  return Date.now() >= new Date(expirationDate).getTime();
};
