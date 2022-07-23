import { Box, Toolbar } from '@mui/material'
import { MainProps } from './types'

export const Main = ({ children }: MainProps) => {
  return (
    <Box className="Main" component="main">
      <Toolbar />
      {children}
    </Box>
  )
}
