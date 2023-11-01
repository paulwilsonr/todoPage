import handleTaskChanges from "./handleTaskChanges";

type objType = {
    name: string;
    details: string;
    due: string;
    priority: string;
    project: string;
    id: string;
    completed: boolean;
};

const handleProjectChanges = {
    editProject(
        project: string,
        projectArr: string[],
        setProjectArr: React.Dispatch<React.SetStateAction<string[]>>,
        newProjectName: string,
        taskArr: objType[],
        setTaskArr: React.Dispatch<React.SetStateAction<objType[]>>,
    ) {
        const tempProjectArr = [...projectArr];
        const projectIndex = tempProjectArr.indexOf(project)
        tempProjectArr.splice(projectIndex, 1, newProjectName)

        taskArr.forEach((task) => {
            if (task.project === project) {
                const tempTask = { ...task };
                tempTask.project = newProjectName;
                handleTaskChanges.editTask(tempTask, task, taskArr, setTaskArr)
            }
        })

        setProjectArr(tempProjectArr)

    },
    deleteProject(
        project: string,
        projectArr: string[],
        taskArr: objType[],
        setTaskArr: React.Dispatch<React.SetStateAction<objType[]>>,
        setProjectArr: React.Dispatch<React.SetStateAction<string[]>>
    ) {
        const tempProjectArr = [...projectArr];
        const projectIndex = tempProjectArr.indexOf(project);
        tempProjectArr.splice(projectIndex, 1);
        taskArr.forEach((task) => {
            if (task.project === project) {
                handleTaskChanges.deleteTask(task, taskArr, setTaskArr);
            }
        })
        setProjectArr(tempProjectArr);
    }
}

export default handleProjectChanges;