import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import FastImage from "react-native-fast-image";
import React, { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { COLORS } from "../../base.style";
import { isTokenExpired } from "../../utils";
import { api, refreshToken } from "../../api";
import { MainStackParamList } from "../../App";
import UserInfo from "../../components/UserInfo";
import Skills from "../../components/UserSkills";
import CustomHeader from "../../components/CustomHeader";
import UserProjects from "../../components/UserProjects";
import { getSessionData } from "../../utils/localStorage";
import { ExclamationMarkIcon } from "../../components/icons";

type UserProfileProps = NativeStackScreenProps<
  MainStackParamList,
  "UserProfile"
>;

const texture = require("../../assets/42_texture.png");

type userInfo = {
  id: string;
  personalInfo: {
    displayName: string;
    login: string;
    email: string;
    phone: string;
    wallet: number;
    location: string;
    correctionPoint: number;
    campus: string;
    avatar: {
      uri: string;
    };
    level: number;
    intraLink: string;
  };
  skills: { id: string; name: string; level: number }[];
  projects: {
    id: string;
    name: string;
    validated: boolean;
    status: string;
    finalMark: number;
  }[];
  achievements: { id: string; name: string; description: string }[];
};

const transformResponse = (user: any): userInfo => {
  return {
    id: user.id,
    personalInfo: {
      displayName: user.displayname,
      login: user.login,
      email: user.email,
      phone: user.phone,
      wallet: user.wallet,
      location: user.location,
      correctionPoint: user.correction_point,
      intraLink: `https://profile.intra.42.fr/users/${user.login}`,
      campus: user.campus[user.campus.length - 1].name,
      level: user.cursus_users[user.cursus_users.length - 1].level,
      avatar: {
        uri: user.image.link,
      },
    },
    skills: user.cursus_users[user.cursus_users.length - 1].skills,
    projects: user.projects_users?.map((project: any) => {
      return {
        id: project.id,
        name: project.project.name,
        validated: project["validated?"],
        status: project.status,
        finalMark: project.final_mark,
      };
    }),
    achievements: user?.achievements?.map((achievement: any) => {
      return {
        id: achievement.id,
        name: achievement.name,
        description: achievement.description,
      };
    }),
  };
};

const UserProfile = (props: UserProfileProps) => {
  const { navigation, route } = props;
  const [userInfo, setUserInfo] = useState<userInfo>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  console.log(route.params.userId);

  const getUserInfo = async () => {
    const sessionData = await getSessionData();

    if (sessionData) {
      if (isTokenExpired(sessionData?.accessTokenExpirationDate)) {
        console.log("EXPIRED", sessionData);
        try {
          await refreshToken(sessionData.refreshToken);
        } catch (error) {
          setIsError(true);
          return;
        }
      }
      api(sessionData.accessToken)
        .get(`/v2/users/${route.params.userId}`)
        .then(response => {
          const userData = transformResponse(response.data);

          setUserInfo(userData);
          setIsLoading(false);
        })
        .catch(err => {
          console.log(err);
          setIsError(true);
          setIsLoading(false);
        });
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <View style={styles.containerStyle}>
      <CustomHeader
        title={"User"}
        goBack={() => navigation.goBack()}
        bgColor={COLORS.transparent}
        containerStyle={styles.headerContainerStyle}
        color={COLORS.white}
        isGradient
      />

      <ScrollView nestedScrollEnabled={true}>
        {isLoading && (
          <ActivityIndicator color={COLORS.aqua} style={styles.mt100} />
        )}
        {isError && ( //! add style
          <View style={{}}>
            <ExclamationMarkIcon />
            <Text style={{}}>Oooops! An error has occured! ☹️</Text>
          </View>
        )}
        {userInfo && !isLoading && !isError && (
          <>
            <FastImage
              source={texture}
              style={styles.imageStyles}
              resizeMode={"cover"}
            />
            <UserInfo personalInfo={userInfo.personalInfo} />
            <Skills skills={userInfo.skills} />
            <UserProjects projects={userInfo.projects} />
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: COLORS.whiteSmoke,
  },
  imageStyles: {
    width: "100%",
    height: 350,
    position: "absolute",
  },
  headerContainerStyle: {
    position: "absolute",
    zIndex: 99,
  },
  mt100: {
    marginTop: 100,
  },
});
