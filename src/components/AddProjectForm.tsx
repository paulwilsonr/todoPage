import { useState } from 'react';
import handleVisibility from '../utils/handleVisibility';
import handleProjectChanges from '../utils/handleProjectChanges';

type objType = {
  name: string;
  details: string;
  due: string;
  priority: string;
  project: string;
  id: string;
  completed: boolean;
};

function AddProjectForm({
  currentProject,
  projectArr,
  setProjectArr,
  setAddItemVisible,
  setFilterRange,
  newProject,
  taskArr,
  setTaskArr,
}: {
  currentProject: string;
  projectArr: string[];
  setProjectArr: React.Dispatch<React.SetStateAction<string[]>>;
  setAddItemVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setFilterRange: React.Dispatch<React.SetStateAction<string[]>>;
  newProject: boolean;
  taskArr: objType[];
  setTaskArr: React.Dispatch<React.SetStateAction<objType[]>>;
}) {
  const [project, setProject] = useState(currentProject);
  let formHeight = '';

  function handleSubmitNewProject() {
    if (newProject) {
      const tempProjectArr = [...projectArr];
      tempProjectArr.push(project);
      if (tempProjectArr[0] === '') {
        tempProjectArr.splice(0, 1);
      }
      setProjectArr(tempProjectArr);

      setFilterRange(['all', 'none']);
    } else {
      handleProjectChanges.editProject(
        currentProject,
        projectArr,
        setProjectArr,
        project,
        taskArr,
        setTaskArr,
      );
      handleVisibility.hide(setAddItemVisible);
    }
  }

  if (newProject) {
    formHeight = ' h-44 w-[250px]';
  } else {
    formHeight = ' h-24 w-[300px]';
  }

  return (
    <div
      className={'flex  flex-col justify-between bg-white pr-1' + formHeight}
    >
      <label className="mt-2 flex">
        Title:
        <input
          className="ml-1"
          type="text"
          id="projectTitle"
          placeholder="Gym"
          value={project}
          onChange={e => setProject(e.target.value)}
        ></input>
      </label>
      <button
        type="button"
        className="mb-3 place-self-end rounded-md border border-black bg-blue-400 px-2"
        onClick={handleSubmitNewProject}
      >
        {newProject ? 'Create Project' : 'Edit Project'}
      </button>
    </div>
  );
}

export default AddProjectForm;
