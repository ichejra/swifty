/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import Login from "./screens/Login";
import Search from "./screens/Search";
import { loginFromLocalStorage } from "./utils";
import UserProfile from "./screens/UserProfile";
import SearchResult from "./screens/SearchResult";
import SplashScreen from "./screens/SplashScreen";

export type MainStackParamList = {
  Search: undefined;
  SearchResult: { username: string };
  UserProfile: { id: string };
};

export type AuthStackParamList = {
  Login: undefined;
};

const mainStack = createNativeStackNavigator<MainStackParamList>();
const authStack = createNativeStackNavigator<AuthStackParamList>();

const getMainStack = () => {
  return (
    <mainStack.Navigator
      initialRouteName="Search"
      screenOptions={{ headerShown: false }}
    >
      <mainStack.Screen name="Search" component={Search} />
      <mainStack.Screen name="SearchResult" component={SearchResult} />
      <mainStack.Screen name="UserProfile" component={UserProfile} />
    </mainStack.Navigator>
  );
};

const getAuthStack = () => {
  return (
    <authStack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <authStack.Screen name="Login" component={Login} />
    </authStack.Navigator>
  );
};

const App = () => {
  const [isSplashLoading, setIsSplashLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsSplashLoading(false);
    }, 2300);
  }, []);

  useEffect(() => {
    loginFromLocalStorage()
      .then(data => {
        //! log
        console.log("data=>", data);
        if (data) setIsAuth(data.isAuth);
      })
      .catch(e => console.log("Cannot login from local storage", e));
  }, []);

  if (isSplashLoading) return <SplashScreen />;

  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: "transparent",
        },
      }}
    >
      <SafeAreaView style={styles.flex1}>
        {isAuth ? getMainStack() : getAuthStack()}
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
});

export default App;
