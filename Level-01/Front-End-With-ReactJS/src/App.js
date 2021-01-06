import React, { useState, useEffect } from "react";
import Header from "./components/Header";

import logoReact from "./assets/logoReact.png";
import api from "./services/api";

function App() {
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
      <img src={logoReact} alt="logo-react" className="logo" />
      <Header title="Tecnologias" />
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProjects}>
        Adicionar Projetos
      </button>
    </>
  );
}

export default App;
