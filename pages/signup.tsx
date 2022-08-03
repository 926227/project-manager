import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Signup } from '../components/pages-blocks/signup/Signup'

const SignupPage: NextPage = () => {
  return <Signup />
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

export default SignupPage
