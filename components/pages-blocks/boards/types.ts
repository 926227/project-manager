import { BoardThumbnailDto } from '../../../lib/fetch/types'

//Board
export type BoardProps = {
  board: BoardData
  updateTaskPosition: (
    start: UpdateTaskInfo,
    finish: UpdateTaskInfo,
  ) => Promise<void>
  updateColumn: (column: UpdateColumnInfo) => Promise<void>
}

export type BoardData = {
  id: string
  title: string
  description: string
  tasks: Record<string, TaskData>
  columns: Record<string, ColumnData>
  columnOrder: string[]
}

export type BoardThumbnailProps = BoardThumbnailDto

export type BoardsListProps = {
  boards: BoardThumbnailDto[]
}

//Column
export type ColumnProps = {
  column: ColumnData
  tasks: TaskData[]
  index: number
  boardId: string
}

export type ColumnData = {
  id: string
  title: string
  taskIds: string[]
}

export type UpdateColumnInfo = {
  boardId: string
  columnId: string
  title: string
  order: number
}

//Task
export type TaskProps = {
  task: TaskData
  index: number
}

export type TaskData = {
  id: string
  title: string
  content: string
}

export type UpdateTaskInfo = {
  boardId: string
  columnId: string
  taskId: string
  order: number
}
