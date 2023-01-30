import AsyncStorage from "@react-native-async-storage/async-storage";
import { isTokenExpired } from ".";

export const saveSession = async (data: any) =>
  await AsyncStorage.setItem("sessionData", JSON.stringify(data));

export const destroySessionData = async () => {
  try {
    await AsyncStorage.removeItem("sessionData");
    return true;
  } catch (err) {
    return false;
  }
};

export const getSessionData = async () => {
  try {
    const sessionData = await AsyncStorage.getItem("sessionData");

    if (!sessionData) {
      return undefined;
    }

    //! Add data type
    const data = JSON.parse(sessionData);

    if (!isTokenExpired(data.access_token)) {
      return data;
    }

    return undefined;
  } catch (err) {
    console.log(err);
  }
};
