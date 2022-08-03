import { useState } from 'react'
import { ApiUrls } from '../ApiUrls'
import { put } from '../requests'
import { getRequestConfigWithToken } from '../../helpers'

export const useUpdateColumnPosition = () => {
  const [isUpdating, setIsUpdating] = useState(false)

  const updateColumnPosition = async (
    boardId: string,
    columnId: string,
    title: string,
    order: number,
  ) => {
    setIsUpdating(true)

    const patchedOrder = order + 1
    await put(
      ApiUrls.Board.column(boardId, columnId),
      {
        title,
        order: patchedOrder,
      },
      getRequestConfigWithToken(),
    )

    setIsUpdating(false)
  }

  return { isUpdating, updateColumnPosition }
}
