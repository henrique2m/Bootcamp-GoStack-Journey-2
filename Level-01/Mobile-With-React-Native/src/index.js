import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import api from "./services/api";

const App = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("projects").then((response) => setProjects(response.data));
  }, []);

  function handleAddProjects() {
    api
      .post("projects", {
        title: `Novo Projeto${Date.now()}`,
        owner: "Rata",
      })
      .then((response) => setProjects([...projects, response.data]));
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.container}
          data={projects}
          keyExtractor={(project) => project.id}
          renderItem={({ item: project }) => (
            <Text style={styles.title}>{project.title}</Text>
          )}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleAddProjects}
          activeOpacity={0.6}
        >
          <Text style={styles.buttonText}>Adicionar projeto</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7159c1",
  },

  title: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },

  button: {
    backgroundColor: "#FFF",
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default App;
