import { useState } from 'react'
import { DropResult } from 'react-beautiful-dnd'
import { BoardData, BoardProps } from './types'

export const useBoardLogic = (props: BoardProps) => {
  const { board, updateTaskPosition, updateColumn } = props
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
      updateColumn({
        boardId: board.id,
        columnId: draggableId,
        title: state.columns[draggableId].title,
        order: destination.index,
      })
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

  return {
    state,
    onDragEnd,
  }
}
