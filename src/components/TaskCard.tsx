import TrashCan from "./SVGs/TrashSVG"
import EditSVG from "./SVGs/EditSVG"
import TaskDetails from "./Modals/TaskDetails"
import { useState } from "react"
import handleVisibility from "../utils/handleVisibility"

type objType = {
    name: string
    details: string
    due: string
    priority: string
    project: string
    id: number
  }

function TaskCard({task}:{task: objType}) {
    const [detailsVisible, setDetailsVisible] = useState(false)

    return(
        <div className="flex justify-between px-1 mx-2 border-black border-2" key={task.id}>
            <div className="flex px-1">
            <input type="checkbox" name="taskDone" id="taskDone" />
            <h2 className="ml-1">{task.name}</h2>
            </div>
            <div className="flex">
            <button onClick={()=> handleVisibility.open(setDetailsVisible)} className="ml-1">Details</button>
            <p className="ml-1" >{task.due}</p>
            <EditSVG classes='ml-1' />
            <TrashCan classes='ml-1' />
            </div>
            {detailsVisible? <TaskDetails setDetailsVisible={setDetailsVisible} task={task} />: '' }
            
        </div>
    )
}

export default TaskCard;