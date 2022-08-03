import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Signin } from '../components/pages-blocks/signin/Signin'

const SigninPage: NextPage = () => {
  return <Signin />
}

//TODO: check i18 types
export const getStaticProps = async (
  props: GetStaticProps & { locale: string },
) => {
  return {
    props: {
      ...(await serverSideTranslations(props.locale, ['common'])),
    },
  }
}

export default SigninPage
