import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { resetServerContext } from 'react-beautiful-dnd'
import { Boards } from '../components/pages/boards/Boards'

const Home: NextPage = (props) => {
  return <Boards />
}

//TODO: check i18 types
export const getStaticProps = async (
  props: GetStaticProps & { locale: string },
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

export default Home
