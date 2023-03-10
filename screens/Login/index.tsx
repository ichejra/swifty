import React from "react";
import { Button } from "@rneui/base";
import FastImage from "react-native-fast-image";
import { StyleSheet, Text, View } from "react-native";
import RNRestart from "react-native-restart";
import { COLORS } from "../../base.style";
import { generateToken } from "../../api";

const blackLogoImageSource = require("../../assets/42_black.png");

const Login = () => {
  const signInWith42 = async () => {
    try {
      await generateToken();
      RNRestart.Restart();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.containerStyle}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Welcome to Swifty</Text>
      </View>
      <View style={styles.contentContainer}>
        <FastImage
          source={blackLogoImageSource}
          style={styles.imageStyle}
          resizeMode={"contain"}
        />
        <Button
          title="Sign in with 42"
          titleStyle={styles.buttonTitle}
          buttonStyle={styles.buttonStyle}
          containerStyle={styles.buttonContainerStyle}
          onPress={() => signInWith42()}
        />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: COLORS.whiteSmoke,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    padding: 10,
    minHeight: 100,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 20,
    color: COLORS.lightBlack,
    fontWeight: "bold",
  },
  imageStyle: {
    height: 200,
    width: "50%",
    marginBottom: 10,
  },
  buttonStyle: {
    minHeight: 50,
    paddingVertical: 10,
    backgroundColor: COLORS.aquaNeon,
  },
  buttonContainerStyle: {
    elevation: 4,
    minWidth: 180,
    marginBottom: 200,
    backgroundColor: COLORS.aquaNeon,
  },
  buttonTitle: {
    fontSize: 16,
    letterSpacing: 1,
    fontWeight: "700",
    color: COLORS.lightBlack,
  },
});
