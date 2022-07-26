import Router from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useEffect } from 'react'
import type { GetStaticProps, NextPage } from 'next'

const Home: NextPage = () => {
  useEffect(() => {
    Router.push('/main')
  }, [])
  return <></>
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
