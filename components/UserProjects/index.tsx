import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../base.style";

interface IProjectsProps {
  projects: {
    id: string;
    name: string;
    validated: boolean;
    status: string;
    finalMark: number;
  }[];
}

const UserProjects = (props: IProjectsProps) => {
  const { projects } = props;

  return (
    <View style={styles.containerStyle}>
      <View style={styles.w90}>
        <Text style={styles.titleStyle}>Projects</Text>
        <View style={styles.paperStyle}>
          <ScrollView
            style={styles.scrollViewStyle}
            nestedScrollEnabled
            persistentScrollbar={true}
            showsVerticalScrollIndicator={true}
          >
            <View style={styles.contentContainer}>
              {projects?.map(project => {
                if (!project.finalMark) return;
                return (
                  <View style={styles.rowStyle} key={project.id}>
                    <Text style={styles.projectTitle}>{project.name}</Text>
                    <Text
                      style={[
                        styles.score,
                        !project.validated && styles.failed,
                      ]}
                    >
                      {project.finalMark}%
                    </Text>
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default UserProjects;

const styles = StyleSheet.create({
  w90: {
    width: "90%",
  },
  mb10: {
    marginBottom: 10,
  },
  containerStyle: {
    width: "100%",
    marginTop: 10,
    marginBottom: 30,
    alignItems: "center",
  },
  titleStyle: {
    fontSize: 16,
    marginBottom: 5,
    letterSpacing: 1,
    fontWeight: "bold",
    color: COLORS.lightBlack,
  },
  paperStyle: {
    elevation: 4,
    borderRadius: 5,
    backgroundColor: COLORS.white,
  },
  rowStyle: {
    width: "90%",
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  projectTitle: {
    width: "80%",
    fontSize: 16,
    fontWeight: "600",
    fontStyle: "italic",
    color: COLORS.nightGray,
  },
  score: {
    width: "20%",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "right",
    color: COLORS.successGreen,
  },
  failed: {
    color: COLORS.failureRed,
  },
  contentContainer: {
    width: "100%",
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollViewStyle: {
    width: "100%",
    maxHeight: 200,
  },
});
