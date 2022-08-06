import type { GetServerSideProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { resetServerContext } from 'react-beautiful-dnd'
import { Board } from '../../components/pages-blocks/boards'
import { useRouter } from 'next/router'
import { useBoard } from '../../lib/fetch/data/useBoard'
import { Loader } from '../../components/common/Loader/Loader'
import { useUpdateTaskPosition } from '../../lib/fetch/actions/useUpdateTaskPosition'
import { useUpdateColumn } from '../../lib/fetch/actions/useUpdateColumn'

const BoardPage: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const boardId = typeof id === 'string' ? id : ''

  const { board, isLoading, isError } = useBoard(boardId)
  const { isUpdating: taskUpdating, updateTaskPosition } =
    useUpdateTaskPosition()
  const { isUpdating: columnUpdating, updateColumn } = useUpdateColumn()
  const isUpdating = taskUpdating || columnUpdating

  if (isLoading) {
    return <Loader />
  }

  if (!board || isError) {
    console.error(isError)
    return null
  }

  return (
    <>
      {isUpdating && <Loader />}
      <Board {...{ board, updateTaskPosition, updateColumn }} />
    </>
  )
}

export default BoardPage

//TODO: check i18 types
export const getServerSideProps = async (
  props: GetServerSideProps & { locale: string },
) => {
  /**
   * The @resetServerContext function should be used when server side rendering (SSR). It ensures context state does not persist across multiple renders on the server which would result in client/server markup mismatches after multiple requests are rendered on the server. https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/reset-server-context.md
   */
  resetServerContext()

  return {
    props: {
      ...(await serverSideTranslations(props.locale, ['common'])),
    },
  }
}
