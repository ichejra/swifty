import React from "react";
import FastImage from "react-native-fast-image";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScrollView, StyleSheet, View } from "react-native";

import { MainStackParamList } from "../../App";
import CustomHeader from "../../components/CustomHeader";
import UserInfo from "../../components/UserInfo";
import Skills from "../../components/UserSkills";
import UserProjects from "../../components/UserProjects";
import { COLORS } from "../../base.style";

type UserProfileProps = NativeStackScreenProps<
  MainStackParamList,
  "UserProfile"
>;

const texture = require("../../assets/42_texture.png");

const UserProfile = (props: UserProfileProps) => {
  const { navigation } = props;

  return (
    <View style={styles.whiteSmokeBg}>
      <CustomHeader
        title={"User"}
        goBack={() => navigation.goBack()}
        bgColor={COLORS.transparent}
        containerStyle={styles.headerContainerStyle}
        color={COLORS.white}
        isGradient
      />
      <ScrollView>
        <FastImage
          source={texture}
          style={styles.imageStyles}
          resizeMode={"cover"}
        />
        <UserInfo />
        <Skills />
        <UserProjects />
      </ScrollView>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  imageStyles: {
    width: "100%",
    height: 350,
    position: "absolute",
  },
  whiteSmokeBg: {
    backgroundColor: COLORS.whiteSmoke,
  },
  headerContainerStyle: {
    position: "absolute",
    zIndex: 99,
  },
});
