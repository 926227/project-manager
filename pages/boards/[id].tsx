import type { GetServerSideProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { resetServerContext } from 'react-beautiful-dnd'
import { Board } from '../../components/pages-blocks/boards'
import { useRouter } from 'next/router'
import { useBoard } from '../../lib/fetch/data/useBoard'
import { Loader } from '../../components/common/Loader/Loader'
import { useUpdateTaskPosition } from '../../lib/fetch/actions/useUpdateTaskPosition'
import { useUpdateColumn } from '../../lib/fetch/actions/useUpdateColumn'
import { delete_ } from '../../lib/fetch/requests'
import { ApiUrls } from '../../lib/fetch/ApiUrls'
import { getRequestConfigWithToken } from '../../lib/helpers'
import { useConfirmModal } from '../../lib/modals/useConfirmModal'
import { useTranslation } from 'next-i18next'

const BoardPage: NextPage = () => {
  const { t } = useTranslation()
  const router = useRouter()
  const { id } = router.query
  const boardId = typeof id === 'string' ? id : ''

  const { board, isLoading, isError, reloadBoard } = useBoard(boardId)
  const { modal: ConfirmModal, openModal: openConfirmModal } = useConfirmModal()

  const { isUpdating: taskUpdating, updateTaskPosition } =
    useUpdateTaskPosition()
  const { isUpdating: columnUpdating, updateColumn } = useUpdateColumn()
  const isUpdating = taskUpdating || columnUpdating

  const deleteColumn = (columnId: string, title: string) => {
    const yes = async () => {
      await delete_(
        ApiUrls.Board.column(boardId, columnId),
        getRequestConfigWithToken(),
      )
      reloadBoard(undefined, true)
    }

    const message = `${t('column.delete')} ${title}?`
    openConfirmModal({ message, yes })
  }

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
      <button onClick={() => reloadBoard(undefined, true)}>reload</button>
      <Board
        {...{
          board,
          updateTaskPosition,
          updateColumn,
          reloadBoard,
          deleteColumn,
        }}
      />
      {ConfirmModal}
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
