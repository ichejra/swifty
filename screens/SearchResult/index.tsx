import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import FastImage from 'react-native-fast-image';
import Building from '../../assets/Building';
import CircleOff from '../../assets/CircleOff';
import {Button} from '@rneui/base';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import CustomHeader from '../../components/CustomHeader';

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
    <View
      style={{
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
        flex: 1,
      }}>
      <CustomHeader title="Users" goBack={() => navigation.goBack()} />
      {isLoading && (
        <ActivityIndicator color={'#01BABC'} style={{marginTop: 25}} />
      )}
      {users && users.length === 0 && (
        <View
          style={{
            marginTop: 100,
            alignItems: 'center',
          }}>
          <CircleOff />
          <Text
            style={{
              marginTop: 5,
              color: '#c0c0c0',
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            No Match Found
          </Text>
          <Button
            title={'Try again'}
            buttonStyle={{
              backgroundColor: '#3B3B3B',
              paddingVertical: 10,
            }}
            containerStyle={{
              minWidth: 120,
              borderRadius: 10,
              elevation: 4,
              marginTop: 15,
            }}
            onPress={() => navigation.goBack()}
          />
        </View>
      )}
      <ScrollView style={{width: '90%'}} showsVerticalScrollIndicator={false}>
        {users?.map(user => {
          return (
            <Pressable
              onPress={() => {
                navigation.navigate('UserProfile', {id: user.id});
              }}
              style={{
                flexDirection: 'row',
                backgroundColor: '#212121',
                marginVertical: 10,
                width: '100%',
                padding: 10,
                borderRadius: 10,
                elevation: 4,
              }}
              key={user.id}>
              <FastImage
                source={user.profilePicture}
                style={{
                  width: 73,
                  height: 73,
                  borderRadius: 50,
                  borderWidth: 3,
                  borderColor: '#01BABC',
                }}
              />
              <View
                style={{
                  marginHorizontal: 10,
                  paddingVertical: 5,
                }}>
                <Text
                  style={{
                    color: '#f6f6f6',
                    fontSize: 16,
                    fontWeight: '600',
                    marginBottom: 2,
                  }}>
                  {user.username}
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                  <Building />
                  <Text
                    style={{
                      color: '#f6f6f6',
                      fontSize: 14,
                      marginHorizontal: 3,
                    }}>
                    {user.campus}
                  </Text>
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

const styles = StyleSheet.create({});
