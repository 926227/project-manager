import type { GetStaticProps, NextPage } from 'next'
import { About } from '../components/pages-blocks/about/About'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const MainPage: NextPage = () => {
  return (
    <>
      <About />
    </>
  )
}

//TODO: check i18 types
export const getStaticProps = async (
  props: GetStaticProps & { locale: string },
) => ({
  props: {
    ...(await serverSideTranslations(props.locale, ['common'])),
  },
})

export default MainPage
