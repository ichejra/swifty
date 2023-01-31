import { Button } from "@rneui/base";
import React, { useState } from "react";
import FastImage from "react-native-fast-image";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { MainStackParamList } from "../../App";
import { COLORS } from "../../base.style";

type SearchProps = NativeStackScreenProps<MainStackParamList, "Search">;

const logoImageSource = require("../../assets/42.png");

const Search = (props: SearchProps) => {
  const { navigation } = props;
  const [login, setLogin] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);

  const onSearch = () => {
    if (!login || !login.trim()) setIsInvalid(true);
    else {
      setIsInvalid(false);
      navigation.navigate("SearchResult", {
        login: login.toLowerCase(),
      });
    }
  };

  return (
    <View style={styles.containerStyle}>
      <FastImage
        source={logoImageSource}
        style={styles.imageStyle}
        resizeMode={"cover"}
      />
      <TextInput
        keyboardType="default"
        value={login}
        placeholder="Search..."
        style={[styles.inputStyle, isInvalid && styles.dangerStyle]}
        onChangeText={value => setLogin(value)}
      />
      {isInvalid && (
        <Text style={styles.dangerText}>Please enter a valid login</Text>
      )}
      <Button
        title="Search"
        buttonStyle={styles.buttonStyle}
        containerStyle={styles.buttonContainerStyle}
        onPress={onSearch}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.lightBlack,
  },
  imageStyle: {
    height: 100,
    width: "50%",
    marginBottom: 10,
  },
  inputStyle: {
    width: "80%",
    fontSize: 14,
    elevation: 4,
    borderColor: COLORS.aqua,
    borderWidth: 2,
    marginBottom: 5,
    color: COLORS.aqua,
    paddingHorizontal: 10,
    backgroundColor: COLORS.whiteSmoke,
  },
  dangerStyle: {
    borderColor: COLORS.dangerRed,
  },
  dangerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.dangerRed,
  },
  buttonStyle: {
    paddingVertical: 10,
    backgroundColor: COLORS.darkGray,
  },
  buttonContainerStyle: {
    marginTop: 20,
    elevation: 4,
    minWidth: 170,
  },
});
