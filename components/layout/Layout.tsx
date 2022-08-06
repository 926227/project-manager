import { Box } from '@mui/system'
import { Header, Main } from './parts'
import { LayoutProps } from './types'

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box>
      <Header />
      <Main>{children}</Main>
    </Box>
  )
}
