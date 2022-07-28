import styled from '@emotion/styled'

export const TaskUI = styled.div<{ isDragging: boolean }>`
  width: 200px;
  border: 1px solid grey;
  margin-bottom: 8px;
  background-color: ${(props) => (props.isDragging ? 'lightgreen' : 'white')};
  padding: 8px;
`

export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
  width: 250px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  background-color: white;
`

export const ContainerBoards = styled.div`
  display: flex;
`

export const Title = styled.h3`
  padding: 8px;
`
export const TaskList = styled.div<{ isDraggingOver: boolean }>`
  flex-grow: 1;
  padding: 8px;
  min-height: 100px;
  transition: background-color 0.2s ease;
  background-color: ${(props) => (props.isDraggingOver ? 'skyblue' : 'white')};
`
