import { Button, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { LayoutContainer } from '../../layout/common/LayoutContainer'
import { CardAbout } from './CardAbout'

export const About = () => {
  const { t } = useTranslation()
  const router = useRouter()
  return (
    <LayoutContainer>
      <CardAbout src="/pictures/project1.png" text="intro" component="img" />
      <CardAbout
        src="/pictures/project1.png"
        text="intro"
        component="img"
        reverse
      />
      <CardAbout src="/pictures/project1.png" text="intro" component="img" />
    </LayoutContainer>
  )
}
