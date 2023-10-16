import TaskCard from "./TaskCard"

type objType = {
  name: string
  details: string
  due: string
  priority: string
  project: string
  id: string
}
function TaskList ({ tasksArr }: { tasksArr: Array<objType> }) {
  return (
    <div>
      {tasksArr.map(task => {
        return <TaskCard key={task.id} task={task} />
      })}

      
    </div>
  )
}

export default TaskList
