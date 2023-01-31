import React from "react";
import FastImage from "react-native-fast-image";
import { View, StyleSheet, Text } from "react-native";
import { COLORS } from "../../base.style";

const logo42Image = require("../../assets/42.png");
const logo1337Image = require("../../assets/1337.png");

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <FastImage
          source={logo42Image}
          style={styles.logo42}
          resizeMode={"contain"}
        />
        <View>
          <Text style={styles.textStyle}>From</Text>
          <FastImage
            source={logo1337Image}
            style={styles.logo1337}
            resizeMode={"cover"}
          />
        </View>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: COLORS.lightBlack,
  },
  contentContainer: {
    width: "100%",
    height: "70%",
    paddingBottom: 40,
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo42: {
    height: 200,
    width: "100%",
  },
  logo1337: {
    height: 20,
    width: 90,
  },
  textStyle: {
    marginBottom: 10,
    fontWeight: "bold",
    color: COLORS.aqua,
    textAlign: "center",
  },
});
