import useSWR from 'swr'
import { ApiUrls } from '../ApiUrls'
import { boardsListFetcher } from '../fetchers/boardsListFetcher'
import { getToken } from '../../helpers'
import { BoardThumbnailDto } from '../types'
import { AxiosResponse } from 'axios'

export const useBoardsList = () => {
  const token = getToken()

  const { data, error, mutate } = useSWR<AxiosResponse<BoardThumbnailDto[]>>(
    [ApiUrls.boards, token],
    boardsListFetcher,
  )

  return {
    boards: data?.data,
    reloadBoards: mutate,
    isLoading: !error && !data,
    isError: error,
  }
}
