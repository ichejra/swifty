import React from "react";
import { StyleSheet, Text, View } from "react-native";

const projects = [
  {
    id: "0",
    title: "Libft Libft Libft",
    score: "100%",
  },
  {
    id: "1",
    title: "ft_services",
    score: "105%",
  },
  {
    id: "2",
    title: "webserv",
    score: "100%",
  },
  {
    id: "3",
    title: "ft_transcendence",
    score: "20%",
  },
  {
    id: "4",
    title: "hypertube",
    score: "80%",
  },
  {
    id: "5",
    title: "C++",
    score: "120%",
  },
];

const UserProjects = () => {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.w90}>
        <Text style={styles.titleStyle}>Projects</Text>
        <View style={styles.paperStyle}>
          {projects.map(project => {
            return (
              <View style={styles.rowStyle} key={project.id}>
                <Text style={styles.projectTitle}>{project.title}</Text>
                <Text style={styles.score}>{project.score}</Text>
              </View>
            );
          })}
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
    marginTop: 10,
    marginBottom: 30,
    width: "100%",
    alignItems: "center",
  },
  titleStyle: {
    fontSize: 16,
    marginBottom: 5,
    letterSpacing: 1,
    fontWeight: "bold",
    color: "#212121",
  },
  paperStyle: {
    padding: 15,
    elevation: 4,
    borderRadius: 15,
    backgroundColor: "#ffffff",
  },
  rowStyle: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  projectTitle: {
    fontSize: 16,
    color: "#313131",
    fontWeight: "bold",
    width: "80%",
  },
  score: {
    width: "20%",
    fontSize: 16,
    color: "#01BABC",
    fontWeight: "bold",
    textAlign: "right",
  },
});
