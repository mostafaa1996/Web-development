import { useState } from "react";
import ProjectSidebar from "./components/ProjectSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  const [projectsState, setProjectsState] = useState({
    //selectedProjectId: undefined ==> no project was selected.
    //selectedProjectId: null ==> a new project will be added.
    //selectedProjectId: Id ==> a specific project was selected.
    selectedProjectId: undefined,
    projects: [],
  });

  function handleSelectProject(project) {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: projectId,
    }));
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onAddingProject={handleSelectProject} />
      {/*<NewProject />*/}
      <NoProjectSelected onCreatingProject={handleSelectProject} />
    </main>
  );
}

export default App;
