import { lsGet, lsRemove, lsSet, LStorage } from './localStorage'
import Router from 'next/router'
import { useEffect, useState } from 'react'

export const useCheckAuthStatus = () => {
  const [status, setStatus] = useState(false)

  useEffect(() => setStatus(!!lsGet(LStorage.pmToken)))
  return status
}

export const setAuthToken = (token: string) => {
  lsSet(LStorage.pmToken, token)
}

export const logout = () => {
  lsRemove(LStorage.pmToken)
  Router.push('/main')
}
