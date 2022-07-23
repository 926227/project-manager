import { PaletteMode } from '@mui/material'
import { Components, ThemeOptions, experimental_sx } from '@mui/material/styles'
import { TypographyOptions } from '@mui/material/styles/createTypography'

const palette = {
  mode: 'dark' as PaletteMode,
  primary: {
    main: '#4f4d9d',
  },
  secondary: {
    main: '#abaa66',
  },
  error: {
    main: '#884c5e',
  },
  success: {
    main: '#778f81',
  },
}

const typography: TypographyOptions = {}
const components: Components = {
  MuiToolbar: {
    styleOverrides: {
      root: {
        backgroundColor: palette.primary.main,
      },
    },
  },
}

export const darkTheme: ThemeOptions = {
  palette,
  typography,
  components,
}
