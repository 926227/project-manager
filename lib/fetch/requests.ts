import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { prependPrefix } from '../ApiUrls'

export const get = <Data = unknown, R = AxiosResponse<Data>>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<R> => {
  return axios.get<Data, R>(prependPrefix(url), config)
}

export const post = <Data = unknown, R = AxiosResponse<Data>>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig,
): Promise<R> => {
  return axios.post<Data, R>(prependPrefix(url), data, config)
}

export const patch = <Data = unknown, R = AxiosResponse<Data>>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig,
): Promise<R> => {
  return axios.patch<Data, R>(prependPrefix(url), data, config)
}

export const delete_ = <Data = unknown, R = AxiosResponse<Data>>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<R> => {
  return axios.delete<Data, R>(prependPrefix(url), config)
}
