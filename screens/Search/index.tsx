import {Button} from '@rneui/base';

import {StyleSheet, TextInput, Text, View} from 'react-native';
import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import FastImage from 'react-native-fast-image';

type SearchProps = NativeStackScreenProps<RootStackParamList, 'Search'>;

const logoImageSource = require('../../assets/42.png');

const Search = (props: SearchProps) => {
  const {navigation} = props;
  const [username, setUsername] = useState('');

  return (
    <View
      style={{
        backgroundColor: '#212121',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <FastImage
        source={logoImageSource}
        style={{
          height: 100,
          width: '50%',
          marginBottom: 10,
        }}
        resizeMode={'cover'}
      />
      <TextInput
        value={username}
        placeholder="Search..."
        style={{
          width: '80%',
          paddingHorizontal: 10,
          backgroundColor: '#f6f6f6',
          borderRadius: 10,
          marginBottom: 20,
          elevation: 4,
          color: '#01BABC',
          fontSize: 14,
        }}
        onChangeText={value => setUsername(value)}
      />
      <Button
        title="Search"
        buttonStyle={{
          backgroundColor: '#3B3B3B',
          paddingVertical: 10,
        }}
        containerStyle={{
          minWidth: 170,
          borderRadius: 10,
          elevation: 4,
        }}
        onPress={() => navigation.navigate('SearchResult', {username})}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
