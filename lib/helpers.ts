import { lsGet, lsRemove, lsSet, LStorage } from './localStorage'
import Router from 'next/router'
import { useEffect, useState } from 'react'
import { BoardDto } from './fetch/types'
import {
  BoardData,
  ColumnData,
  TaskData,
} from '../components/pages-blocks/boards'
import { AxiosRequestConfig } from 'axios'

export const useCheckAuthStatus = () => {
  const [status, setStatus] = useState(false)

  //TODO: do something whith potential infinite chain of updates
  useEffect(() => setStatus(!!lsGet(LStorage.pmToken)))
  return status
}

export const setAuthToken = (token: string) => {
  lsSet(LStorage.pmToken, token)
}

export const getToken = () => lsGet(LStorage.pmToken)

export const getRequestConfigWithToken = (): AxiosRequestConfig => {
  const token = getToken()

  if (!token) {
    throw new Error('No token')
  }

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
}

export const logout = () => {
  lsRemove(LStorage.pmToken)
  Router.push('/main')
}

export const orderBoardToBrowser = (data: BoardDto): BoardData => {
  const tasks: Record<string, TaskData> = {}
  const columns: Record<string, ColumnData> = {}

  data.columns.forEach((column) => {
    //create tasks
    column.tasks.forEach((task) => {
      const { id, title, description } = task
      tasks[task.id] = { id, title, content: description }
    })

    //create columns
    const taskIds = column.tasks
      .slice()
      .sort((a, b) => a.order - b.order)
      .map((task) => task.id)

    const { id, title } = column
    columns[column.id] = { id, title, taskIds }
  })

  //create columnOrder
  const columnOrder: string[] = data.columns
    .slice()
    .sort((a, b) => a.order - b.order)
    .map((column) => column.id)

  const { id, title, description } = data
  return { id, title, description, tasks, columns, columnOrder }
}

export type MakeRequired<T, K extends keyof T> = Omit<T, K> &
  Required<{ [P in K]: T[P] }>
