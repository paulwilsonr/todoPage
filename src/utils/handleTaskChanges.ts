type objType = {
  name: string
  details: string
  due: string
  priority: string
  project: string
  id: string
}
const handleTaskChanges = {
  addTask (
    task: objType,
    taskArr: objType[],
    setTaskArr: React.Dispatch<React.SetStateAction<objType[]>>
  ) {
    const tempTaskArr = [...taskArr]
    tempTaskArr.push(task)
    setTaskArr(tempTaskArr)
  },
  deleteTask (
    task: objType,
    taskArr: objType[],
    setTaskArr: React.Dispatch<React.SetStateAction<objType[]>>
  ) {
    const tempTaskArr = [...taskArr]
    const taskIndex = tempTaskArr.indexOf(task)
    if (taskIndex === -1) {
      console.log('Error: Task not found')
      return
    }
    tempTaskArr.splice(taskIndex, 1)
    setTaskArr(tempTaskArr)
  },
  editTask () {}
}

export default handleTaskChanges
