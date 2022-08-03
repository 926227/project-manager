/* eslint-disable @typescript-eslint/no-namespace */

const backendUrl = 'https://rs-team-34.herokuapp.com'

export const prependPrefix = (url: string) => {
  return `${backendUrl}${url}`
}

export namespace ApiUrls {
  export const boards = '/boards'
  export const signin = '/signin'
  export const signup = '/signup'

  export const board = (boardId: string) => `${boards}/${boardId}`

  export namespace Board {
    export const columns = (boardId: string) => `${board(boardId)}/columns`
    export const column = (boardId: string, columnId: string) =>
      `${columns(boardId)}/${columnId}`

    export namespace Column {
      export const tasks = (boardId: string, columnId: string) =>
        `${column(boardId, columnId)}/tasks`

      export const task = (boardId: string, columnId: string, taskId: string) =>
        `${tasks(boardId, columnId)}/${taskId}`
    }
  }
}
