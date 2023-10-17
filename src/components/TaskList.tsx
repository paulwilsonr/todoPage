import TaskCard from './TaskCard'

type objType = {
  name: string
  details: string
  due: string
  priority: string
  project: string
  id: string
}
function TaskList ({
  tasksArr,
  setTaskArr
}: {
  tasksArr: Array<objType>
  setTaskArr: React.Dispatch<React.SetStateAction<objType[]>>
}) {
  return (
    <div>
      {tasksArr.map(task => {
        return (
          <TaskCard
            key={task.id}
            task={task}
            taskArr={tasksArr}
            setTaskArr={setTaskArr}
          />
        )
      })}
    </div>
  )
}

export default TaskList
