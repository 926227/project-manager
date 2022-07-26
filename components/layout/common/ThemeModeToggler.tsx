import { IconButton } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import React, { useContext } from 'react'
import { ColorModeContext } from '../../../lib/context/ThemeProviderWithColorMode'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

export const ThemeModeToggler = () => {
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)

  return (
    <IconButton onClick={colorMode.toggleColorMode} color="inherit">
      {theme.palette.mode === 'dark' ? (
        <Brightness7Icon />
      ) : (
        <Brightness4Icon />
      )}
    </IconButton>
  )
}
