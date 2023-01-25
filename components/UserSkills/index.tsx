import React from "react";
import * as Progress from "react-native-progress";
import { StyleSheet, Text, View } from "react-native";

const skills = [
  {
    id: "0",
    title: "Unix",
    level: 12.5,
  },
  {
    id: "1",
    title: "Algorithms & AI",
    level: 8.57,
  },
  {
    id: "2",
    title: "Group & interpersonal",
    level: 8.37,
  },
  {
    id: "3",
    title: "Organization",
    level: 8.06,
  },
];

const Skills = () => {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.w90}>
        <Text style={styles.titleStyle}>Skills</Text>
        <View style={styles.paperStyle}>
          {skills.map(skill => {
            return (
              <View style={styles.mb10}>
                <Text style={styles.skillTitle}>
                  {skill.title} - level {skill.level}
                </Text>
                <Progress.Bar
                  progress={skill.level - Math.floor(skill.level)}
                  unfilledColor={"#d2d1d1"}
                  color="#01BABC"
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
    marginVertical: 20,
    width: "100%",
    alignItems: "center",
  },
  titleStyle: {
    color: "#212121",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
    letterSpacing: 1,
  },
  skillTitle: {
    color: "#212121",
    fontWeight: "bold",
    marginBottom: 5,
  },
  paperStyle: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 15,
    elevation: 4,
  },
});
