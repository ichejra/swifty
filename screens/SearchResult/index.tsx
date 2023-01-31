import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Button } from "@rneui/base";
import React, { useEffect, useState } from "react";
import FastImage from "react-native-fast-image";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { MainStackParamList } from "../../App";
import CustomHeader from "../../components/CustomHeader";
import {
  CircleOffIcon,
  ExclamationMarkIcon,
  PersonIcon,
} from "../../components/icons";
import { COLORS } from "../../base.style";
import { api } from "../../api";

type SearchResultProps = NativeStackScreenProps<
  MainStackParamList,
  "SearchResult"
>;

// const users = [
//   {
//     id: "0",
//     login: "ichejra",
//     displayName: "Imane Chejra",
//     avatar: { uri: "https://zupimages.net/up/22/34/868j.jpg" },
//   },
//   {
//     id: "1",
//     login: "ichejra",
//     displayName: "Imane Chejra",
//     avatar: { uri: "https://zupimages.net/up/22/34/868j.jpg" },
//   },
//   {
//     id: "2",
//     login: "ichejra",
//     displayName: "Imane Chejra",
//     avatar: { uri: "https://zupimages.net/up/22/34/868j.jpg" },
//   },
//   {
//     id: "3",
//     login: "ichejra",
//     displayName: "Imane Chejra",
//     avatar: { uri: "https://zupimages.net/up/22/34/868j.jpg" },
//   },
//   {
//     id: "4",
//     login: "ichejra",
//     displayName: "Imane Chejra",
//     avatar: { uri: "https://zupimages.net/up/22/34/868j.jpg" },
//   },
//   {
//     id: "5",
//     login: "ichejra",
//     displayName: "Imane Chejra",
//     avatar: { uri: "https://zupimages.net/up/22/34/868j.jpg" },
//   },
//   {
//     id: "6",
//     login: "ichejra",
//     displayName: "Imane Chejra",
//     avatar: { uri: "https://zupimages.net/up/22/34/868j.jpg" },
//   },
//   {
//     id: "7",
//     login: "ichejra",
//     displayName: "Imane Chejra",
//     avatar: { uri: "https://zupimages.net/up/22/34/868j.jpg" },
//   },
//   {
//     id: "8",
//     login: "ichejra",
//     displayName: "Imane Chejra",
//     avatar: { uri: "https://zupimages.net/up/22/34/868j.jpg" },
//   },
//   {
//     id: "9",
//     login: "ichejra",
//     displayName: "Imane Chejra",
//     avatar: { uri: "https://zupimages.net/up/22/34/868j.jpg" },
//   },
// ];

type helloType = {
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
  const [hello, setHello] = useState<helloType[]>([]);

  console.log(route?.params?.login);

  const getUsers = async () => {
    api()
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

        setHello(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.log("here");
        console.log(err);
        setIsError(true);
        setIsLoading(false);
      });
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
      {hello && hello.length === 0 && !isLoading && !isError && (
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
      <ScrollView style={styles.w90} showsVerticalScrollIndicator={false}>
        {hello?.map(user => {
          return (
            <Pressable
              onPress={() => {
                navigation.navigate("UserProfile", { id: user.id });
              }}
              style={styles.userCardContainer}
              key={user.id}
            >
              <FastImage source={user.avatar} style={styles.avatarStyle} />
              <View style={[styles.mh10, styles.pv5]}>
                <Text style={styles.displayNameStyle}>{user.displayName}</Text>
                <View style={styles.loginContainer}>
                  <PersonIcon stroke={COLORS.skyBlue} />
                  <Text style={styles.loginStyle}>{user.login}</Text>
                </View>
              </View>
            </Pressable>
          );
        })}
      </ScrollView>
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
    color: "#c0c0c0",
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
