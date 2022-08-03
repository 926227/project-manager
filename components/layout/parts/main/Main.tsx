import { Box, Toolbar } from '@mui/material'
import { constants } from '../../../../lib/constants'
import { MainProps } from './types'

export const Main = ({ children }: MainProps) => {
  return (
    <Box
      className="Main"
      component="main"
      sx={{ height: `calc(100vh - ${constants.toolbarHeight})` }}
    >
      <Toolbar />
      {children}
    </Box>
  )
}
