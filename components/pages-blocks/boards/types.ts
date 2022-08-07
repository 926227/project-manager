import { AxiosResponse } from 'axios'
import { KeyedMutator } from 'swr'
import { BoardThumbnailDto } from '../../../lib/fetch/types'

//Board
export type BoardProps = {
  board: BoardData
  updateTaskPosition: (
    start: UpdateTaskInfo,
    finish: UpdateTaskInfo,
  ) => Promise<void>
  updateColumn: (column: UpdateColumnInfo) => Promise<AxiosResponse>
  reloadBoard: KeyedMutator<AxiosResponse>
  deleteColumn: (columnId: string, title: string) => void
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
  editColumn: (column: UpdateColumnInfo) => void
  deleteColumn: (columnId: string, title: string) => void
}

export type ColumnData = {
  id: string
  title: string
  taskIds: string[]
}

export type UpdateColumnInfo = {
  boardId: string
  title: string
  columnId?: string
  order?: number
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

//Modals
export type UseColumnModalProps = {
  updateColumn: (column: UpdateColumnInfo) => Promise<AxiosResponse>
  reloadBoard: KeyedMutator<AxiosResponse>
}
export type ColumnModalInputs = {
  title: string
}
