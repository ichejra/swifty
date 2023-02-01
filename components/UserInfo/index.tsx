import React from "react";
import FastImage from "react-native-fast-image";
import * as Progress from "react-native-progress";
import { StyleSheet, Text, View, Linking } from "react-native";

import {
  AtIcon,
  PhoneIcon,
  MapPinIcon,
  WalletIcon,
  LocationIcon,
} from "../../components/icons";
import Trophy from "../../components/icons/Trophy";
import { COLORS } from "../../base.style";

interface IUserInfoProps {
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
}

const UserInfo = (props: IUserInfoProps) => {
  const {
    personalInfo: {
      login,
      level,
      email,
      phone,
      wallet,
      avatar,
      campus,
      location,
      intraLink,
      displayName,
      correctionPoint,
    },
  } = props;

  const splitLevel = () => {
    const levelFormat = level.toString().split(".");
    const number = levelFormat[0];
    const decimal = levelFormat[1] ? Number("0." + levelFormat[1]) : 0;
    const percent = Math.trunc(decimal * 100);

    return { level: `${number} - ${percent}%`, decimal };
  };

  const openMail = () => {
    Linking.openURL(`mailto:${email}?subject=SendMail&body=Description`);
  };

  return (
    <View style={styles.containerStyle}>
      <FastImage
        source={avatar}
        style={styles.imageStyle}
        resizeMode={"cover"}
      />
      <Text style={styles.nameStyle}>{displayName}</Text>
      <Text style={styles.loginStyle}>{login}</Text>
      <View style={styles.infoContainer}>
        <View style={styles.flex2}>
          <View style={styles.fieldContainer}>
            <MapPinIcon />
            <Text style={styles.campusCityStyle}>{campus}</Text>
          </View>
          {phone !== "hidden" && (
            <View style={styles.fieldContainer}>
              <PhoneIcon />
              <Text
                style={styles.pressableStyle}
                onPress={() => {
                  Linking.openURL(`tel: ${phone}`);
                }}
              >
                {phone}
              </Text>
            </View>
          )}
          <View style={styles.fieldContainer}>
            <AtIcon />
            <Text onPress={openMail} style={styles.pressableStyle}>
              {email}
            </Text>
          </View>
          <View style={styles.fieldContainer}>
            <LocationIcon />
            <Text
              onPress={openMail}
              style={[styles.locationStyle, !location && styles.whiteSmoke]}
            >
              {location ? location : "unavailable"}
            </Text>
          </View>
        </View>
        <View style={styles.justifyCenter}>
          <View style={[styles.row, styles.spaceBetween, styles.alignEnd]}>
            <View style={[styles.row, styles.alignEnd]}>
              <WalletIcon />
              <Text style={styles.keyStyle}>Wallet</Text>
            </View>
            <Text style={styles.valueStyle}>{wallet}</Text>
          </View>
          <View style={[styles.row, styles.spaceBetween, styles.alignEnd]}>
            <View style={[styles.row, styles.alignEnd]}>
              <Trophy />
              <Text style={styles.keyStyle}>Correction</Text>
            </View>
            <Text style={styles.valueStyle}>{correctionPoint}</Text>
          </View>
        </View>
      </View>
      <View style={styles.levelContainer}>
        <Text style={styles.valueStyle}>{splitLevel().level}</Text>
        <Progress.Bar
          progress={splitLevel().decimal}
          width={250}
          borderRadius={2}
          animated
          color={COLORS.aqua}
          style={styles.mt5}
        />
      </View>
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  containerStyle: {
    height: 350,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  imageStyle: {
    width: 100,
    height: 100,
    marginBottom: 5,
    borderRadius: 50,
  },
  nameStyle: {
    color: COLORS.whiteSmoke,
    letterSpacing: 1,
    fontSize: 15,
    fontWeight: "bold",
  },
  loginStyle: {
    color: COLORS.whiteSmoke,
    letterSpacing: 1,
    fontSize: 15,
    marginBottom: 5,
  },
  infoContainer: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  flex2: {
    flex: 2,
  },
  fieldContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 5,
  },
  mt5: {
    marginTop: 5,
  },
  valueStyle: {
    color: COLORS.whiteSmoke,
    fontWeight: "bold",
  },
  keyStyle: {
    color: COLORS.whiteSmoke,
    marginHorizontal: 5,
  },
  levelContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  campusCityStyle: {
    fontWeight: "bold",
    color: COLORS.whiteSmoke,
    marginHorizontal: 5,
  },
  pressableStyle: {
    fontWeight: "bold",
    color: COLORS.aqua,
    marginHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.aqua,
  },
  locationStyle: {
    fontWeight: "bold",
    color: COLORS.aqua,
    marginHorizontal: 5,
  },
  whiteSmoke: {
    color: COLORS.whiteSmoke,
  },
  flex1: {
    flex: 1,
  },
  justifyCenter: {
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  alignEnd: {
    alignItems: "flex-end",
  },
});
