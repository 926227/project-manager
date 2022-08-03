import { get } from '../requests'
import { BoardThumbnailDto } from '../types'
import { getRequestConfigWithToken } from '../../helpers'

export const boardsListFetcher = (url: string) => {
  return get<BoardThumbnailDto[]>(url, getRequestConfigWithToken())
}
