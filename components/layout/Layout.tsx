import { Box } from '@mui/system'
import { Footer, Header, Main } from './parts'
import { LayoutProps } from './types'

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box>
      <Header />
      <Main>{children}</Main>
      {/* <Footer /> */}
    </Box>
  )
}
