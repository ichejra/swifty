import React from "react";
import { Button } from "@rneui/base";
import { Linking, StyleSheet, Text, View } from "react-native";

import { COLORS } from "../../base.style";

interface IIntraProfileProps {
  intraLink: string;
}

const IntraProfile = (props: IIntraProfileProps) => {
  const { intraLink } = props;

  const onOpenProfileOnIntra = () => {
    Linking.openURL(intraLink);
  };

  return (
    <View style={styles.containerStyle}>
      <View style={styles.contentContainer}>
        <Text style={styles.titleStyle}>Open profile on Intra</Text>
        <Button
          title={"Open"}
          onPress={onOpenProfileOnIntra}
          titleStyle={styles.buttonTitle}
          buttonStyle={styles.buttonStyle}
          containerStyle={styles.buttonContainerStyle}
        />
      </View>
      <View style={styles.divider} />
    </View>
  );
};

export default IntraProfile;

const styles = StyleSheet.create({
  containerStyle: {
    width: "100%",
    marginTop: 20,
    alignItems: "center",
  },
  contentContainer: {
    width: "90%",
    marginBottom: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleStyle: {
    fontSize: 14,
    marginBottom: 5,
    letterSpacing: 1,
    fontWeight: "bold",
    color: COLORS.lightBlack,
  },
  buttonTitle: {
    color: COLORS.aqua,
  },
  buttonStyle: {
    minWidth: 70,
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 5,
    borderColor: COLORS.aqua,
    backgroundColor: "transparent",
  },
  buttonContainerStyle: {
    borderRadius: 10,
  },
  divider: {
    width: "50%",
    borderBottomWidth: 2,
    borderColor: COLORS.lightGray,
  },
});
