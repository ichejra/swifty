import React from 'react';
import {
  Platform,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Button} from '@rneui/base';
import ChevronLeft from '../../assets/ChevronLeft';
import LinearGradient from 'react-native-linear-gradient';

interface ICustomHeaderProps {
  title: string;
  canGoBack?: string;
  goBack?: () => void;
  bgColor?: string;
  containerStyle?: StyleProp<ViewStyle>;
  color?: string;
  isGradient?: boolean;
}

const CustomHeader = (props: ICustomHeaderProps) => {
  const {
    title,
    goBack,
    bgColor = '#212121',
    containerStyle,
    color = '#01dade',
    isGradient = false,
  } = props;
  const insets = useSafeAreaInsets();
  const iosStatusBarSpacing = {
    paddingTop: Platform.OS === 'ios' ? insets.top : 0,
  };
  return (
    <View
      style={[
        {
          width: '100%',
          flexDirection: 'row',
          backgroundColor: bgColor,
          minHeight: 80,
          alignItems: 'center',
          // paddingHorizontal: 15,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        },
        iosStatusBarSpacing,
        containerStyle,
      ]}>
      <Button
        icon={<ChevronLeft stroke={color} />}
        containerStyle={{borderRadius: 100}}
        buttonStyle={{
          width: 40,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'transparent',
          borderRadius: 100,
          marginLeft: 15,
        }}
        onPress={goBack}
      />
      <Text
        style={{
          marginHorizontal: 5,
          color: color,
          fontSize: 18,
          fontWeight: 'bold',
        }}>
        {title}
      </Text>
      {isGradient && (
        <LinearGradient
          style={[
            {
              zIndex: -99,
              height: '100%',
              width: '100%',
              position: 'absolute',
            },
          ]}
          colors={['#00000042', '#00000000']}
          start={{x: 1, y: 0}}
          end={{x: 1, y: 1}}
          locations={[0, 0.9]}
        />
      )}
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({});
