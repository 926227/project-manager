export type ErrorResponse = {
  message: string
}

export type SigninResponse = {
  token: string
}

export type SignupResponse = {
  id: string
  name: string
  login: string
}

export type BoardThumbnailDto = {
  id: string
  title: string
  description: string
}

export type BoardDto = {
  id: string
  title: string
  description: string
  columns: ColumnDto[]
}

export type ColumnDto = {
  id: string
  title: string
  order: number
  tasks: TaskDto[]
}

export type TaskDto = {
  id: string
  title: string
  order: number
  description: string
  userId: string
  files: []
}
