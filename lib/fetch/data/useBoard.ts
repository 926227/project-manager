import useSWR from 'swr'
import { ApiUrls } from '../ApiUrls'
import { getToken, orderBoardToBrowser } from '../../helpers'
import { AxiosResponse } from 'axios'
import { BoardDto } from '../types'
import { boardFetcher } from '../fetchers/boardFetcher'

export const useBoard = (boardId: string) => {
  const token = getToken()

  const { data, error, mutate } = useSWR<AxiosResponse<BoardDto>>(
    [ApiUrls.board(boardId), token],
    boardFetcher,
  )

  return {
    board: data?.data && orderBoardToBrowser(data.data),
    reloadBoard: mutate,
    isLoading: !error && !data,
    isError: error,
  }
}
