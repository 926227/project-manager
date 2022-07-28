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
  content: string
}

export type BoardsData = {
  tasks: Record<string, TaskInfo>
  columns: Record<string, ColumnInfo>
  columnOrder: string[]
}
