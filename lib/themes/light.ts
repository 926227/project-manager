import { Components, ThemeOptions, PaletteMode } from '@mui/material'
import { TypographyOptions } from '@mui/material/styles/createTypography'

const palette = {
  mode: 'light' as PaletteMode,
  primary: {
    main: '#6667ab',
    contrastText: '#fff',
  },
  secondary: {
    main: '#abaa66',
  },
  error: {
    main: '#884c5e',
  },
  success: {
    main: '#86a293',
  },
}

const typography: TypographyOptions = {}

const components: Components = {
  MuiToolbar: {
    styleOverrides: {
      root: {
        color: palette.primary.contrastText,
      },
    },
  },
}

export const lightTheme: ThemeOptions = {
  palette,
  typography,
  components,
}
