import React from "react";
import {
  Text,
  View,
  Platform,
  ViewStyle,
  StyleProp,
  StyleSheet,
} from "react-native";
import { Button } from "@rneui/base";
import LinearGradient from "react-native-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ChevronLeftIcon } from "../icons";
import { COLORS } from "../../base.style";

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
    bgColor = COLORS.transparent,
    containerStyle,
    color = COLORS.aquaNeon,
    isGradient = false,
  } = props;
  const insets = useSafeAreaInsets();
  const iosStatusBarSpacing = {
    paddingTop: Platform.OS === "ios" ? insets.top : 0,
  };

  return (
    <View
      style={[
        containerStyle,
        iosStatusBarSpacing,
        styles.containerStyle,
        { backgroundColor: bgColor },
      ]}
    >
      <Button
        icon={<ChevronLeftIcon stroke={color} />}
        containerStyle={styles.br100}
        buttonStyle={styles.buttonStyle}
        onPress={goBack}
      />
      <Text style={[styles.titleStyle, { color }]}>{title}</Text>
      {isGradient && (
        <LinearGradient
          style={styles.gradientStyle}
          colors={["#00000042", "#00000000"]}
          start={{ x: 1, y: 0 }}
          end={{ x: 1, y: 1 }}
          locations={[0, 0.9]}
        />
      )}
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  buttonStyle: {
    width: 40,
    height: 40,
    marginLeft: 15,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  titleStyle: {
    marginHorizontal: 5,
    fontSize: 18,
    fontWeight: "bold",
  },
  gradientStyle: {
    zIndex: -99,
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  br100: {
    borderRadius: 100,
  },
  containerStyle: {
    width: "100%",
    minHeight: 80,
    alignItems: "center",
    flexDirection: "row",
  },
});
