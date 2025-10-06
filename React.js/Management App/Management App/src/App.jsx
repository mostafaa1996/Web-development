import { useState } from "react";
import ProjectSidebar from "./components/ProjectSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

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

  /*************  ✨ Windsurf Command ⭐  *************/
  /**
   * Callback function to save a new project.
   * @param {Function} projectDetailsCallback - a function that returns the project details.

/*******  696099d1-eb1a-4e96-9e33-08d90bb750fa  *******/
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

  function handleDeleteProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter(
        (project) => project.id !== prevState.selectedProjectId
      ),
    }));
  }

  function handleAddTaskToProject(TaskDetails) {
    let Task = {
      id: Date.now() + Math.floor(Math.random() * 1000001),
      text: TaskDetails,
    };
    setProjectsState((prevState) => ({
      ...prevState,
      projects: prevState.projects.map((project) => {
        if (project.id === prevState.selectedProjectId) {
          return {
            ...project,
            tasks: [...project.tasks, Task],
          };
        }
        return project;
      }),
    }));
  }

  function handleDeleteTaskFromProject(taskId) {
    setProjectsState((prevState) => ({
      ...prevState,
      projects: prevState.projects.map((project) => {
        if (project.id === prevState.selectedProjectId) {
          project.tasks = project.tasks.filter((task) => task.id !== taskId);
        }
        return project;
      }),
    }));
  }

  let SelectedProjectElement = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );
  content = (
    <SelectedProject
      project={SelectedProjectElement}
      onDeletingProject={handleDeleteProject}
      onAddingTask={handleAddTaskToProject}
      onDeletingTask={handleDeleteTaskFromProject}
    />
  );

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
