import { useState } from "react";
import ProjectSidebar from "./components/ProjectSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  let content;
  const [projectsState, setProjectsState] = useState({
    //selectedProjectId: undefined ==> no project was selected.
    //selectedProjectId: null ==> a new project will be added.
    //selectedProjectId: Id ==> a specific project was selected.
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartProject(projectId) {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: projectId,
    }));
  }

  function onSaveProject(projectDetailsCallback) {
    const projectDetails = projectDetailsCallback();
    if (projectDetails === undefined) return;
    setProjectsState((prevState) => ({
      ...prevState,
      projects: [...prevState.projects, projectDetails],
      selectedProjectId: undefined,
    }));
  }

  function handleCancellation() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  }

  function handleInSelectProject(projectId) {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: projectId,
    }));
  }

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject
        onSaveProject={onSaveProject}
        onCancellation={handleCancellation}
      />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onCreatingProject={handleStartProject} />;
  }
  console.log(projectsState);
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onAddingProject={handleStartProject}
        projects={projectsState.projects}
        onSelectProject={handleInSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
