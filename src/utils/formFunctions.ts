import handleTaskChanges from './handleTaskChanges';
type objType = {
  name: string;
  details: string;
  due: string;
  priority: string;
  project: string;
  id: string;
};

const formFunctions = {
  changePriority(
    choice: string,
    setPriorityChoice: React.Dispatch<React.SetStateAction<string>>,
  ) {
    setPriorityChoice(choice);
  },
  changeTaskData(
    taskKey: string,
    value: string,
    task: objType,
    setTask: React.Dispatch<React.SetStateAction<objType>>,
  ) {
    let tempTask = { ...task };
    tempTask = { ...tempTask, [taskKey]: value };
    setTask(tempTask);
  },
  handleSubmit(
    newTask: boolean,
    task: objType,
    taskArr: objType[],
    setTaskArr: React.Dispatch<React.SetStateAction<objType[]>>,
    currentTask: objType,
    setFilterRange: React.Dispatch<React.SetStateAction<string[]>>,
  ) {
    if (newTask) {
      handleTaskChanges.addTask(task, taskArr, setTaskArr);
      setFilterRange(['all', 'none']);
    } else {
      handleTaskChanges.editTask(task, currentTask, taskArr, setTaskArr);
    }
  },
};

export default formFunctions;
