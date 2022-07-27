import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Home: NextPage = (props) => {
  return <>123</>
}

//TODO: check i18 types
export const getStaticProps = async (
  props: GetStaticProps & { locale: string },
) => ({
  props: {
    ...(await serverSideTranslations(props.locale, ['common'])),
  },
})

export default Home
