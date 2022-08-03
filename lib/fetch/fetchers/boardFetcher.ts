import { get } from '../requests'
import { BoardDto } from '../types'
import { getRequestConfigWithToken } from '../../helpers'

export const boardFetcher = (url: string) => {
  return get<BoardDto>(url, getRequestConfigWithToken())
}
