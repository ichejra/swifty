import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {Button} from '@rneui/base';
import React, {useState} from 'react';
import FastImage from 'react-native-fast-image';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../App';
import CustomHeader from '../../components/CustomHeader';
import {CircleOffIcon, MapPinIcon} from '../../components/icons';

type SearchResultProps = NativeStackScreenProps<
  RootStackParamList,
  'SearchResult'
>;

const users = [
  {
    id: '0',
    username: 'ichejra',
    campus: 'Khouribga',
    profilePicture: {uri: 'https://zupimages.net/up/22/34/868j.jpg'},
  },
  {
    id: '1',
    username: 'ichejra',
    campus: 'Khouribga',
    profilePicture: {uri: 'https://zupimages.net/up/22/34/868j.jpg'},
  },
  {
    id: '2',
    username: 'ichejra',
    campus: 'Khouribga',
    profilePicture: {uri: 'https://zupimages.net/up/22/34/868j.jpg'},
  },
  {
    id: '3',
    username: 'ichejra',
    campus: 'Khouribga',
    profilePicture: {uri: 'https://zupimages.net/up/22/34/868j.jpg'},
  },
  {
    id: '4',
    username: 'ichejra',
    campus: 'Khouribga',
    profilePicture: {uri: 'https://zupimages.net/up/22/34/868j.jpg'},
  },
  {
    id: '5',
    username: 'ichejra',
    campus: 'Khouribga',
    profilePicture: {uri: 'https://zupimages.net/up/22/34/868j.jpg'},
  },
  {
    id: '6',
    username: 'ichejra',
    campus: 'Khouribga',
    profilePicture: {uri: 'https://zupimages.net/up/22/34/868j.jpg'},
  },
  {
    id: '7',
    username: 'ichejra',
    campus: 'Khouribga',
    profilePicture: {uri: 'https://zupimages.net/up/22/34/868j.jpg'},
  },
  {
    id: '8',
    username: 'ichejra',
    campus: 'Khouribga',
    profilePicture: {uri: 'https://zupimages.net/up/22/34/868j.jpg'},
  },
  {
    id: '9',
    username: 'ichejra',
    campus: 'Khouribga',
    profilePicture: {uri: 'https://zupimages.net/up/22/34/868j.jpg'},
  },
];

const SearchResult = (props: SearchResultProps) => {
  const {navigation, route} = props;
  const [isLoading, setIsLoading] = useState(false);

  console.log(route?.params?.username);

  return (
    <View style={styles.containerStyle}>
      <CustomHeader title="Users" goBack={() => navigation.goBack()} />
      {isLoading && <ActivityIndicator color={'#01BABC'} style={styles.mt25} />}
      {users && users.length === 0 && (
        <View style={styles.noMatchContainerStyles}>
          <CircleOffIcon />
          <Text style={styles.noMatchTextStyle}>No Match Found</Text>
          <Button
            title={'Try again'}
            buttonStyle={styles.buttonStyle}
            containerStyle={styles.buttonContainerStyle}
            onPress={() => navigation.goBack()}
          />
        </View>
      )}
      <ScrollView style={styles.w90} showsVerticalScrollIndicator={false}>
        {users?.map(user => {
          return (
            <Pressable
              onPress={() => {
                navigation.navigate('UserProfile', {id: user.id});
              }}
              style={styles.userCardContainer}
              key={user.id}>
              <FastImage
                source={user.profilePicture}
                style={styles.avatarStyle}
              />
              <View style={[styles.mh10, styles.pv5]}>
                <Text style={styles.usernameStyle}>{user.username}</Text>
                <View style={styles.campusCityContainer}>
                  <MapPinIcon stroke={'#28c8e0'} />
                  <Text style={styles.campusCityTextStyle}>{user.campus}</Text>
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
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3b3b3b',
  },
  mt25: {
    marginTop: 25,
  },
  noMatchContainerStyles: {
    marginTop: 100,
    alignItems: 'center',
  },
  noMatchTextStyle: {
    marginTop: 5,
    fontSize: 16,
    color: '#c0c0c0',
    fontWeight: 'bold',
  },
  buttonStyle: {
    paddingVertical: 10,
    backgroundColor: '#3B3B3B',
  },
  buttonContainerStyle: {
    elevation: 4,
    marginTop: 15,
    minWidth: 120,
    borderRadius: 10,
  },
  w90: {
    width: '90%',
  },
  userCardContainer: {
    padding: 10,
    elevation: 4,
    width: '100%',
    borderRadius: 10,
    marginVertical: 10,
    flexDirection: 'row',
    backgroundColor: '#575757',
  },
  avatarStyle: {
    width: 73,
    height: 73,
    borderWidth: 3,
    borderRadius: 50,
    borderColor: '#01BABC',
  },
  mh10: {
    marginHorizontal: 10,
  },
  pv5: {
    paddingVertical: 5,
  },
  usernameStyle: {
    fontSize: 16,
    marginBottom: 2,
    fontWeight: '600',
    color: '#f6f6f6',
  },
  campusCityContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  campusCityTextStyle: {
    color: '#f6f6f6',
    fontSize: 14,
    marginHorizontal: 3,
  },
});
