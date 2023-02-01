import {
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { Button } from "@rneui/base";
import FastImage from "react-native-fast-image";
import React, { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import {
  CircleOffIcon,
  ExclamationMarkIcon,
  PersonIcon,
} from "../../components/icons";
import { COLORS } from "../../base.style";
import { isTokenExpired } from "../../utils";
import { MainStackParamList } from "../../App";
import { api, generateToken } from "../../api";
import CustomHeader from "../../components/CustomHeader";
import { getSessionData } from "../../utils/localStorage";

type SearchResultProps = NativeStackScreenProps<
  MainStackParamList,
  "SearchResult"
>;

type userType = {
  id: string;
  displayName: string;
  login: string;
  avatar: {
    uri: string;
  };
};

const SearchResult = (props: SearchResultProps) => {
  const { navigation, route } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [users, setUsers] = useState<userType[]>([]);

  const getUsers = async () => {
    const sessionData = await getSessionData();

    if (sessionData) {
      if (isTokenExpired(sessionData?.accessTokenExpirationDate)) {
        await generateToken();
      }
      api(sessionData.accessToken)
        .get(`/v2/users?filter[login]=${route?.params?.login}`)
        .then(response => {
          let data = response.data.map((user: any) => {
            return {
              id: user.id,
              login: user.login,
              displayName: user.displayname,
              avatar: { uri: user.image.link },
            };
          });
          setUsers(data);
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
    getUsers();
  }, []);

  return (
    <View style={styles.containerStyle}>
      <CustomHeader title="Users" goBack={() => navigation.goBack()} />
      {isLoading && (
        <ActivityIndicator color={COLORS.aqua} style={styles.mt25} />
      )}
      {isError && (
        <View style={styles.errorMsgContainer}>
          <ExclamationMarkIcon />
          <Text style={styles.errorText}>Oooops! An error has occured! ☹️</Text>
        </View>
      )}
      {users && users.length === 0 && !isLoading && !isError && (
        <View style={styles.noMatchContainerStyles}>
          <CircleOffIcon />
          <Text style={styles.noMatchTextStyle}>No Match Found</Text>
          <Button
            title={"Try again"}
            titleStyle={styles.buttonTitle}
            buttonStyle={styles.buttonStyle}
            containerStyle={styles.buttonContainerStyle}
            onPress={() => navigation.goBack()}
          />
        </View>
      )}
      <FlatList
        data={users}
        style={styles.w90}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() => {
                navigation.navigate("UserProfile", { userId: item.id });
              }}
              style={styles.userCardContainer}
            >
              <FastImage source={item.avatar} style={styles.avatarStyle} />
              <View style={[styles.mh10, styles.pv5]}>
                <Text style={styles.displayNameStyle}>{item.displayName}</Text>
                <View style={styles.loginContainer}>
                  <PersonIcon stroke={COLORS.skyBlue} />
                  <Text style={styles.loginStyle}>{item.login}</Text>
                </View>
              </View>
            </Pressable>
          );
        }}
      />
    </View>
  );
};

export default SearchResult;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.darkGray,
  },
  mt25: {
    marginTop: 25,
  },
  noMatchContainerStyles: {
    marginTop: 150,
    alignItems: "center",
  },
  noMatchTextStyle: {
    marginTop: 5,
    fontSize: 16,
    color: COLORS.mutedGray,
    fontWeight: "bold",
  },
  buttonTitle: {
    color: COLORS.darkGray,
    fontSize: 16,
  },
  buttonStyle: {
    paddingVertical: 13,
    backgroundColor: COLORS.aquaNeon,
  },
  errorText: {
    fontSize: 20,
    color: COLORS.mutedGray,
  },
  buttonContainerStyle: {
    elevation: 4,
    marginTop: 15,
    minWidth: 150,
    backgroundColor: COLORS.aquaNeon,
  },
  w90: {
    width: "90%",
  },
  userCardContainer: {
    padding: 10,
    elevation: 4,
    width: "100%",
    marginVertical: 10,
    flexDirection: "row",
    backgroundColor: COLORS.gray,
  },
  avatarStyle: {
    width: 73,
    height: 73,
    borderWidth: 3,
    borderRadius: 50,
    borderColor: COLORS.aqua,
  },
  mh10: {
    marginHorizontal: 10,
  },
  pv5: {
    paddingVertical: 5,
  },
  displayNameStyle: {
    fontSize: 16,
    marginBottom: 2,
    fontWeight: "600",
    color: COLORS.whiteSmoke,
  },
  loginStyle: {
    color: COLORS.lightGray,
    letterSpacing: 0.9,
    marginHorizontal: 3,
  },
  errorMsgContainer: {
    alignItems: "center",
    marginTop: 100,
  },
  loginContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
});
