import { Box, Toolbar, Typography } from '@mui/material'

export const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: (theme) => theme.palette.primary.main,
      }}
    >
      <Toolbar>
        <Typography color="inherit">Footer</Typography>
      </Toolbar>
    </Box>
  )
}
