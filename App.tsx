/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { SafeAreaView, StyleSheet } from "react-native";

import Search from "./screens/Search";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchResult from "./screens/SearchResult";
import Login from "./screens/Login";
import UserProfile from "./screens/UserProfile";

export type RootStackParamList = {
  Login: undefined;
  Search: undefined;
  SearchResult: { username: string };
  UserProfile: { id: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
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
        <Stack.Navigator
          initialRouteName="Search"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="SearchResult" component={SearchResult} />
          <Stack.Screen name="UserProfile" component={UserProfile} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
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
