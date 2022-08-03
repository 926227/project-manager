import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import AddIcon from '@mui/icons-material/Add'
import { BoardData, BoardProps } from './types'
import { Column } from './Column'
import { ContainerBoards } from './styles'
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd'
import { LayoutContainer } from '../../layout/common/LayoutContainer'
import { Box, Button, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { RouterLink } from '../../common/router-link'
import { useTranslation } from 'next-i18next'

export const Board = (props: BoardProps) => {
  const { board, updateTaskPosition, updateColumnPosition } = props
  const { title, description } = board
  const { t } = useTranslation()
  const [state, setState] = useState<BoardData>(board)

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId, type } = result

    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    //Moving columns
    if (type === 'column') {
      const newColumnOrder = Array.from(state.columnOrder)
      newColumnOrder.splice(source.index, 1)
      newColumnOrder.splice(destination.index, 0, draggableId)

      const newState: BoardData = {
        ...state,
        columnOrder: newColumnOrder,
      }
      updateColumnPosition(
        board.id,
        draggableId,
        state.columns[draggableId].title,
        destination.index,
      )
      setState(newState)
      return
    }

    const start = state.columns[source.droppableId]
    const finish = state.columns[destination.droppableId]

    //Moving task withing one column
    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds)
      newTaskIds.splice(source.index, 1)
      newTaskIds.splice(destination.index, 0, draggableId)

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      }

      const newState: BoardData = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      }

      updateTaskPosition(
        {
          boardId: board.id,
          columnId: start.id,
          taskId: draggableId,
          order: source.index,
        },
        {
          boardId: board.id,
          columnId: finish.id,
          taskId: draggableId,
          order: destination.index,
        },
      )
      setState(newState)
      return
    }

    //Moving task from one column to another
    const startTaskIds = Array.from(start.taskIds)
    startTaskIds.splice(source.index, 1)
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    }

    const finishTaskIds = Array.from(finish.taskIds)
    finishTaskIds.splice(destination.index, 0, draggableId)
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    }

    const newState: BoardData = {
      ...state,
      columns: {
        ...state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    }
    updateTaskPosition(
      {
        boardId: board.id,
        columnId: start.id,
        taskId: draggableId,
        order: source.index,
      },
      {
        boardId: board.id,
        columnId: finish.id,
        taskId: draggableId,
        order: destination.index,
      },
    )
    setState(newState)
  }
  return (
    <LayoutContainer sx={{ height: '100%', mt: 2 }}>
      <Stack direction="row" mb={1}>
        <Button
          variant="outlined"
          href="/boards"
          component={RouterLink}
          sx={{ mr: 2 }}
        >
          <ArrowBackIosIcon fontSize="large" />
        </Button>
        <Stack>
          <Typography variant="h4" component="h1">
            {title}
          </Typography>
          <Typography sx={{ mb: 1 }}>{description}</Typography>
        </Stack>
        <Box sx={{ display: 'flex', justifyContent: 'end', flexGrow: 1 }}>
          <Button variant="outlined" size="large" startIcon={<AddIcon />}>
            {t('add_column')}
          </Button>
        </Box>
      </Stack>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable
          droppableId="all-columns"
          direction="horizontal"
          type="column"
        >
          {(provided) => (
            <ContainerBoards
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {state.columnOrder.map((columnId, index) => {
                const column = state.columns[columnId]
                const tasks = column.taskIds.map(
                  (taskId) => state.tasks[taskId],
                )
                return (
                  <Column
                    key={column.id}
                    column={column}
                    tasks={tasks}
                    index={index}
                  />
                )
              })}
              {provided.placeholder}
            </ContainerBoards>
          )}
        </Droppable>
      </DragDropContext>
    </LayoutContainer>
  )
}
