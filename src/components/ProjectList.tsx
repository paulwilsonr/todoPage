import ProjectCard from './ProjectCard';

type objType = {
  name: string;
  details: string;
  due: string;
  priority: string;
  project: string;
  id: string;
  completed: boolean;
};

function ProjectList({
  taskArr,
  setTaskArr,
  projectArr,
  setFilterRange,
  setProjectArr,
}: {
  taskArr: Array<objType>;
  setTaskArr: React.Dispatch<React.SetStateAction<objType[]>>;
  projectArr: string[];
  setFilterRange: React.Dispatch<React.SetStateAction<string[]>>;
  setProjectArr: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  let projectKey = 0;
  return (
    <div className="mb-32 ml-2">
      <h2 className="text-2xl sm:text-4xl">Projects</h2>
      {projectArr.length === 0 ? (
        <p className="my-2 ml-4 sm:text-2xl">No Projects</p>
      ) : projectArr.length === 1 && projectArr[0] === '' ? (
        <p className="my-2 ml-4 sm:text-2xl">No Projects</p>
      ) : (
        projectArr.map(project => {
          projectKey++;

          if (project !== '') {
            return (
              <ProjectCard
                key={projectKey}
                project={project}
                taskArr={taskArr}
                setTaskArr={setTaskArr}
                projectArr={projectArr}
                setFilterRange={setFilterRange}
                setProjectArr={setProjectArr}
              />
            );
          }
        })
      )}
    </div>
  );
}

export default ProjectList;
