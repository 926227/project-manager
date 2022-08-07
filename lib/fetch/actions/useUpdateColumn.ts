import { useState } from 'react'
import { ApiUrls } from '../ApiUrls'
import { post, put } from '../requests'
import { getRequestConfigWithToken } from '../../helpers'
import { UpdateColumnInfo } from '../../../components/pages-blocks/boards'

export const useUpdateColumn = () => {
  const [isUpdating, setIsUpdating] = useState(false)

  //TODO: create wrappers for explicit use in diff cases
  /**
   * Updates or creates new column if no columnId is porvided
   * @param column
   * @returns
   */
  const updateColumn = async (column: UpdateColumnInfo) => {
    setIsUpdating(true)
    const { boardId, columnId, title, order } = column

    if (!boardId || !title) {
      throw new Error('boardId and title required')
    }

    //server order >=1
    const serverFormat = order ? order + 1 : 1

    const response = columnId
      ? await put<{ title: string; order: number }>(
          ApiUrls.Board.column(boardId, columnId),
          {
            title,
            order: serverFormat,
          },
          getRequestConfigWithToken(),
        )
      : post<{ title: string }>(
          ApiUrls.Board.columns(boardId),
          { title },
          getRequestConfigWithToken(),
        )

    setIsUpdating(false)

    return response
  }

  return { isUpdating, updateColumn }
}
