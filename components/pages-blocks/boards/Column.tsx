import FolderDeleteIcon from '@mui/icons-material/FolderDelete'
import React from 'react'
import SourceIcon from '@mui/icons-material/Source'
import Tooltip from '@mui/material/Tooltip'
import { ColumnProps } from './types'
import { ContainerColumn, TaskList, Title } from './styles'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { IconButton, Stack } from '@mui/material'
import { Task } from './Task'
import { useTranslation } from 'next-i18next'

export const Column = React.memo(function Column(props: ColumnProps) {
  const { column, index, tasks, boardId, editColumn, deleteColumn } = props
  const { id, title } = column
  const { t } = useTranslation()

  const handleEditColumn = () => {
    editColumn({ boardId, title, columnId: id, order: index })
  }

  const handleDeleteColumn = () => {
    deleteColumn(id, title)
  }

  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <ContainerColumn
          ref={provided.innerRef}
          {...provided.draggableProps}
          isDragging={snapshot.isDragging}
        >
          <Title {...provided.dragHandleProps}>
            {title}{' '}
            <Stack
              sx={{
                position: 'absolute',
                right: 0,
                top: 0,
              }}
            >
              <Tooltip title={t('column.edit')}>
                <IconButton
                  size="small"
                  sx={{ color: '#5f7266' }}
                  onClick={handleEditColumn}
                >
                  <SourceIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title={t('column.delete')}>
                <IconButton
                  color="error"
                  size="small"
                  onClick={handleDeleteColumn}
                >
                  <FolderDeleteIcon />
                </IconButton>
              </Tooltip>
            </Stack>
          </Title>
          <Droppable droppableId={id} type="task">
            {(provided, snapshot) => (
              <TaskList
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {tasks.map((task, index) => (
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
