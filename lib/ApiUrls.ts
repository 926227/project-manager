/* eslint-disable @typescript-eslint/no-namespace */

const backendUrl = 'https://rs-team-34.herokuapp.com'

export const prependPrefix = (url: string) => {
  return `${backendUrl}${url}`
}

export namespace ApiUrls {
  export const boards = '/boards'
  export const signin = '/signin'
  export const signup = '/signup'
}
