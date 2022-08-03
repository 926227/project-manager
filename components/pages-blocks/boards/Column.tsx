import { IconButton, Stack } from '@mui/material'
import React from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import { ContainerColumn, TaskList, Title } from './styles'
import { Task } from './Task'
import { ColumnContainerProps } from './types'
import FolderDeleteIcon from '@mui/icons-material/FolderDelete'
import SourceIcon from '@mui/icons-material/Source'

export const Column = React.memo(function Column(props: ColumnContainerProps) {
  const { column, index } = props
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided, snapshot) => (
        <ContainerColumn
          ref={provided.innerRef}
          {...provided.draggableProps}
          isDragging={snapshot.isDragging}
        >
          <Title {...provided.dragHandleProps}>
            {props.column.title}{' '}
            <Stack
              sx={{
                position: 'absolute',
                right: 0,
                top: 0,
              }}
            >
              <IconButton size="small" sx={{ color: '#5f7266' }}>
                <SourceIcon />
              </IconButton>
              <IconButton color="error" size="small">
                <FolderDeleteIcon />
              </IconButton>
            </Stack>
          </Title>
          <Droppable droppableId={props.column.id} type="task">
            {(provided, snapshot) => (
              <TaskList
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {props.tasks.map((task, index) => (
                  <Task key={task.id} task={task} index={index} />
                ))}
                {provided.placeholder}
              </TaskList>
            )}
          </Droppable>
        </ContainerColumn>
      )}
    </Draggable>
  )
})
