import { Button } from "@rneui/base";
import React, { useState } from "react";
import FastImage from "react-native-fast-image";
import { StyleSheet, TextInput, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { MainStackParamList } from "../../App";

type SearchProps = NativeStackScreenProps<MainStackParamList, "Search">;

const logoImageSource = require("../../assets/42.png");

const Search = (props: SearchProps) => {
  const { navigation } = props;
  const [username, setUsername] = useState("");

  return (
    <View style={styles.containerStyle}>
      <FastImage
        source={logoImageSource}
        style={styles.imageStyle}
        resizeMode={"cover"}
      />
      <TextInput
        value={username}
        placeholder="Search..."
        style={styles.inputStyle}
        onChangeText={value => setUsername(value)}
      />
      <Button
        title="Search"
        buttonStyle={styles.buttonStyle}
        containerStyle={styles.buttonContainerStyle}
        onPress={() => navigation.navigate("SearchResult", { username })}
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
    backgroundColor: "#212121",
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
    borderColor: "#01BABC",
    borderWidth: 2,
    marginBottom: 20,
    color: "#01BABC",
    paddingHorizontal: 10,
    backgroundColor: "#f6f6f6",
  },
  buttonStyle: {
    paddingVertical: 10,
    backgroundColor: "#3B3B3B",
  },
  buttonContainerStyle: {
    elevation: 4,
    minWidth: 170,
  },
});
