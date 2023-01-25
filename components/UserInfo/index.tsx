import React from 'react';
import FastImage from 'react-native-fast-image';
import * as Progress from 'react-native-progress';
import {StyleSheet, Text, View, Linking} from 'react-native';

import {
  AtIcon,
  PhoneIcon,
  MapPinIcon,
  WalletIcon,
} from '../../components/icons';
import Trophy from '../../components/icons/Trophy';

const UserInfo = () => {
  return (
    <View style={styles.containerStyle}>
      <FastImage
        source={{uri: 'https://zupimages.net/up/22/34/868j.jpg'}}
        style={styles.imageStyle}
        resizeMode={'cover'}
      />
      <Text style={styles.nameStyle}>Imane Chejra</Text>
      <Text style={styles.loginStyle}>ichejra</Text>
      <View style={styles.infoContainer}>
        <View style={styles.flex2}>
          <View style={styles.fieldContainer}>
            <MapPinIcon />
            <Text style={styles.campusCityStyle}>Khouribga</Text>
          </View>
          <View style={styles.fieldContainer}>
            <PhoneIcon />
            <Text
              style={styles.pressableStyle}
              onPress={() => {
                Linking.openURL(`tel: +212 650253698`);
              }}>
              +212 650253698
            </Text>
          </View>
          <View style={styles.fieldContainer}>
            <AtIcon />
            <Text
              onPress={() => {
                //!Test This
                Linking.openURL(
                  `mailto:hello@hello.com?subject=SendMail&body=Description`,
                );
              }}
              style={styles.pressableStyle}>
              hello@hello.com
            </Text>
          </View>
        </View>
        <View style={styles.justifyCenter}>
          <View style={[styles.row, styles.spaceBetween]}>
            <View style={[styles.row, styles.alignEnd]}>
              <WalletIcon />
              <Text style={styles.keyStyle}>Wallet</Text>
            </View>
            <Text style={styles.valueStyle}>20</Text>
          </View>
          <View style={[styles.row, styles.spaceBetween]}>
            <View style={[styles.row, styles.alignEnd]}>
              <Trophy />
              <Text style={styles.keyStyle}>Correction</Text>
            </View>
            <Text style={styles.valueStyle}>7</Text>
          </View>
        </View>
      </View>
      <View style={styles.levelContainer}>
        <Text style={styles.valueStyle}>14 - 82%</Text>
        <Progress.Bar
          progress={0.82}
          width={250}
          borderRadius={2}
          animated
          color="#01BABC"
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
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: 100,
    height: 100,
    marginBottom: 5,
    borderRadius: 50,
  },
  nameStyle: {
    color: '#f6f6f6',
    letterSpacing: 1,
    fontSize: 15,
    fontWeight: 'bold',
  },
  loginStyle: {
    color: '#f6f6f6',
    letterSpacing: 1,
    fontSize: 15,
    marginBottom: 5,
  },
  infoContainer: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  flex2: {
    flex: 2,
  },
  fieldContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 5,
  },
  mt5: {
    marginTop: 5,
  },
  valueStyle: {
    color: '#f6f6f6',
    fontWeight: 'bold',
  },
  keyStyle: {
    color: '#f6f6f6',
    marginHorizontal: 5,
  },
  levelContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  campusCityStyle: {
    fontWeight: 'bold',
    color: '#f6f6f6',
    marginHorizontal: 5,
  },
  pressableStyle: {
    fontWeight: 'bold',
    color: '#01BABC',
    marginHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#01BABC',
  },
  flex1: {
    flex: 1,
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
});
