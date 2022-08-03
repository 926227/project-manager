import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { resetServerContext } from 'react-beautiful-dnd'
import { Loader } from '../components/common/Loader/Loader'
import { Boards } from '../components/pages-blocks/boards'
import { useBoardsList } from '../lib/fetch/data/useBoardsList'
import { useInfoModal } from '../lib/modals/useInfoModal'

const BoardsPage: NextPage = () => {
  const { boards, isLoading, isError } = useBoardsList()
  const { infoModal, openInfoModal } = useInfoModal()

  if (isLoading) {
    return <Loader />
  }

  if (!boards || isError) {
    openInfoModal({ info: 'Error', error: true })
  }
  return (
    <>
      {infoModal}
      {boards && <Boards boards={boards} />}
    </>
  )
}

//TODO: check i18 types
export const getStaticProps = async (
  props: GetStaticProps & { locale: string },
) => {
  /**
   * The @resetServerContext function should be used when server side rendering (SSR).
   * It ensures context state does not persist across multiple renders on the server which would result in client/server markup mismatches after multiple requests are rendered on the server. https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/reset-server-context.md
   */
  resetServerContext()

  return {
    props: {
      ...(await serverSideTranslations(props.locale, ['common'])),
    },
  }
}

export default BoardsPage
