import { useState } from 'react'
import { ApiUrls } from '../ApiUrls'
import { put } from '../requests'
import { getRequestConfigWithToken } from '../../helpers'
import { UpdateColumnInfo } from '../../../components/pages-blocks/boards'

export const useUpdateColumn = () => {
  const [isUpdating, setIsUpdating] = useState(false)

  const updateColumn = async (column: UpdateColumnInfo) => {
    setIsUpdating(true)
    const { boardId, columnId, title, order } = column

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

  return { isUpdating, updateColumn }
}
