import { useState } from 'react'
import { TaskPosition } from '../../../components/pages-blocks/boards'
import { ApiUrls } from '../ApiUrls'
import { get, put } from '../requests'
import { TaskDto } from '../types'
import { getRequestConfigWithToken } from '../../helpers'

export const useUpdateTaskPosition = () => {
  const [isUpdating, setIsUpdating] = useState(false)

  const updateTaskPosition = async (
    start: TaskPosition,
    finish: TaskPosition,
  ) => {
    setIsUpdating(true)

    const currentTask = await (
      await get<TaskDto>(
        ApiUrls.Board.Column.task(start.boardId, start.columnId, start.taskId),
        getRequestConfigWithToken(),
      )
    ).data

    const { title, description, userId } = currentTask
    const patchedNewOrder = finish.order + 1

    const newTask = {
      boardId: finish.boardId,
      columnId: finish.columnId,
      order: patchedNewOrder,
      title,
      description,
      userId,
    }

    await put(
      ApiUrls.Board.Column.task(start.boardId, start.columnId, start.taskId),
      newTask,
      getRequestConfigWithToken(),
    )

    setIsUpdating(false)
  }

  return { isUpdating, updateTaskPosition }
}
