import React from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import { ContainerColumn, TaskList, Title } from './styles'
import { Task } from './Task'
import { ColumnContainerProps } from './types'

export const Column = React.memo(function Column(props: ColumnContainerProps) {
  const { column, index } = props
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => (
        <ContainerColumn ref={provided.innerRef} {...provided.draggableProps}>
          <Title {...provided.dragHandleProps}>{props.column.title}</Title>
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
