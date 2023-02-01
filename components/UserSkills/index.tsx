import React from "react";
import * as Progress from "react-native-progress";
import { StyleSheet, Text, View } from "react-native";

import { COLORS } from "../../base.style";

interface ISkillsProps {
  skills: {
    id: string;
    name: string;
    level: number;
  }[];
}

const Skills = (props: ISkillsProps) => {
  const { skills } = props;

  return (
    <View style={styles.containerStyle}>
      <View style={styles.w90}>
        <Text style={styles.titleStyle}>Skills</Text>
        <View style={styles.paperStyle}>
          {skills?.map(skill => {
            return (
              <View style={styles.mb10} key={skill.id}>
                <Text style={styles.skillTitle}>
                  {skill.name} - level {skill.level}
                </Text>
                <Progress.Bar
                  progress={skill.level - Math.floor(skill.level)}
                  unfilledColor={COLORS.lightGray}
                  color={COLORS.aqua}
                  borderRadius={0}
                  borderWidth={0}
                  width={290}
                  animated
                />
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default Skills;

const styles = StyleSheet.create({
  w90: {
    width: "90%",
  },
  mb10: {
    marginBottom: 10,
  },
  containerStyle: {
    width: "100%",
    marginVertical: 20,
    alignItems: "center",
  },
  titleStyle: {
    fontSize: 16,
    marginBottom: 5,
    letterSpacing: 1,
    fontWeight: "bold",
    color: COLORS.lightBlack,
  },
  skillTitle: {
    marginBottom: 5,
    fontWeight: "600",
    fontStyle: "italic",
    color: COLORS.darkGray,
  },
  paperStyle: {
    padding: 15,
    elevation: 4,
    borderRadius: 15,
    backgroundColor: COLORS.white,
  },
});
