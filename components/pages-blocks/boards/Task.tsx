import { Draggable } from 'react-beautiful-dnd'
import { TaskUI } from './styles'
import { TaskContainerProps } from './types'
import DeleteIcon from '@mui/icons-material/Delete'
import { IconButton, Stack } from '@mui/material'
import BorderColorIcon from '@mui/icons-material/BorderColor'

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
          <Stack sx={{ position: 'absolute', right: 0, top: 0 }}>
            <IconButton color="success" size="small">
              <BorderColorIcon />
            </IconButton>
            <IconButton color="error" size="small">
              <DeleteIcon />
            </IconButton>
          </Stack>
        </TaskUI>
      )}
    </Draggable>
  )
}
