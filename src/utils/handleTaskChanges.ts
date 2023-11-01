type objType = {
  name: string;
  details: string;
  due: string;
  priority: string;
  project: string;
  id: string;
  completed: boolean;

};
const handleTaskChanges = {
  addTask(
    task: objType,
    taskArr: objType[],
    setTaskArr: React.Dispatch<React.SetStateAction<objType[]>>,
  ) {
    const tempTask = { ...task }
    if (tempTask.due === '') {
      tempTask.due = 'N/A';
    }
    const tempTaskArr = [...taskArr];
    tempTaskArr.push(tempTask);
    if (tempTaskArr[0].id === '') {
      tempTaskArr.splice(0, 1);
    }
    setTaskArr(tempTaskArr);
  },
  deleteTask(
    task: objType,
    taskArr: objType[],
    setTaskArr: React.Dispatch<React.SetStateAction<objType[]>>,
  ) {
    const tempTaskArr = [...taskArr];
    const taskIndex = tempTaskArr.indexOf(task);
    if (taskIndex === -1) {
      console.log('Error: Task not found');
      return;
    }
    tempTaskArr.splice(taskIndex, 1);
    setTaskArr(tempTaskArr);
  },
  editTask(
    editedTask: objType,
    prevTask: objType,
    taskArr: objType[],
    setTaskArr: React.Dispatch<React.SetStateAction<objType[]>>,
  ) {
    const tempTaskArr = [...taskArr];
    const taskIndex = tempTaskArr.indexOf(prevTask);
    if (taskIndex === -1) {
      console.log('Error: Task not found');
      return;
    }
    tempTaskArr.splice(taskIndex, 1, editedTask);
    setTaskArr(tempTaskArr);
  },
};

export default handleTaskChanges;
