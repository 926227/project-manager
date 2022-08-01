import { Draggable } from 'react-beautiful-dnd'
import { TaskUI } from './styles'
import { TaskContainerProps } from './types'

export const Task = ({ task, index }: TaskContainerProps) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <TaskUI
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}
        >
          {task.content}
        </TaskUI>
      )}
    </Draggable>
  )
}
