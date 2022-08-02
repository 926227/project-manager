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
  board: {
    dark: '#73769d',
    main: '#a2a5ce',
    light: '#d4d6ff',
  },
  column: {
    dark: '#c7cabc',
    main: '#fafdee',
    light: '#ffffff',
  },
  task: {
    dark: '#b4bf70',
    main: '#e7f29f',
    light: '#ffffd1',
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
