import styled from '@emotion/styled'

export const TaskUI = styled.div<{ isDragging: boolean }>`
  position: relative;
  width: 100%;
  min-height: 70px;
  padding: 8px;
  padding-right: 36px;
  margin-bottom: 8px;
  border: 1px solid grey;
  border-radius: 5px;
  background-color: ${({ isDragging, theme }) =>
    isDragging ? theme.palette.task.dark : theme.palette.task.main};
`

export const ContainerColumn = styled.div<{ isDragging: boolean }>`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin: 8px;
  width: 280px;
  overflow-y: auto;
  border: 1px solid lightgrey;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.palette.background.paper};
  box-shadow: ${({ isDragging, theme }) =>
    isDragging ? theme.shadows[6] : theme.shadows[1]};
`

export const ContainerBoards = styled.div`
  display: flex;
  justify-content: start;
  overflow: auto;
  max-height: 100%;
  height: 100%;
`

export const Title = styled.h3`
  position: relative;
  margin: 0;
  padding: 16px 8px;
  min-height: 70px;
  color: ${({ theme }) => theme.palette.primary.contrastText};
  background-color: ${({ theme }) => theme.palette.board.main};
  transition: all 0.3s;
  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.palette.board.dark};
  }
`
export const TaskList = styled.div<{ isDraggingOver: boolean }>`
  flex-grow: 1;
  padding: 16px;
  min-height: 100px;
  transition: background-color 0.2s ease;
  background-color: ${({ isDraggingOver, theme }) =>
    isDraggingOver ? theme.palette.column.dark : theme.palette.column.main};
`
