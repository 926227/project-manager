import { useState } from 'react'
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd'
import { LayoutContainer } from '../../layout/common/LayoutContainer'
import { Column } from './Column'
import { initialData } from './mock'
import { ContainerBoards } from './styles'
import { BoardData } from './types'

export const DemoBoard = () => {
  const [state, setState] = useState<BoardData>(initialData)

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

    if (type === 'column') {
      const newColumnOrder = Array.from(state.columnOrder)
      newColumnOrder.splice(source.index, 1)
      newColumnOrder.splice(destination.index, 0, draggableId)

      const newState: BoardData = {
        ...state,
        columnOrder: newColumnOrder,
      }
      setState(newState)
      return
    }

    const start = state.columns[source.droppableId]
    const finish = state.columns[destination.droppableId]

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

      setState(newState)
      return
    }

    //Moving from one column to another
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
    setState(newState)
  }
  return (
    <LayoutContainer>
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
