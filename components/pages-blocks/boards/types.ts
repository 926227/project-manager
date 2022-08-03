import { BoardThumbnailDto } from '../../../lib/fetch/types'

export type ColumnContainerProps = {
  column: ColumnInfo
  tasks: TaskInfo[]
  index: number
}

export type ColumnInfo = {
  id: string
  title: string
  taskIds: string[]
}

export type TaskContainerProps = {
  task: TaskInfo
  index: number
}

export type TaskInfo = {
  id: string
  title: string
  content: string
}

export type BoardData = {
  id: string
  title: string
  description: string
  tasks: Record<string, TaskInfo>
  columns: Record<string, ColumnInfo>
  columnOrder: string[]
}

export type BoardThumbnailProps = BoardThumbnailDto

export type BoardsListProps = {
  boards: BoardThumbnailDto[]
}

export type TaskPosition = {
  boardId: string
  columnId: string
  taskId: string
  order: number
}

export type BoardProps = {
  board: BoardData
  updateTaskPosition: (
    start: TaskPosition,
    finish: TaskPosition,
  ) => Promise<void>
  updateColumnPosition: (
    boardId: string,
    columnId: string,
    title: string,
    order: number,
  ) => Promise<void>
}
