import BorderColorIcon from '@mui/icons-material/BorderColor'
import DeleteIcon from '@mui/icons-material/Delete'
import { Draggable } from 'react-beautiful-dnd'
import { IconButton, Stack, Typography } from '@mui/material'
import { TaskProps } from './types'
import { TaskUI } from './styles'

export const Task = ({ task, index }: TaskProps) => {
  const { title, content } = task
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <TaskUI
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}
        >
          <Typography variant="h6">{title}</Typography>
          <Typography paragraph>{content}</Typography>
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
