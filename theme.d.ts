import { Theme as MUITheme } from '@mui/material'

declare module '@mui/material/styles' {
  interface Palette {
    board: Palette['primary']
    column: Palette['primary']
    task: Palette['primary']
  }
  interface PaletteOptions {
    board: PaletteOptions['primary']
    column: PaletteOptions['primary']
    task: PaletteOptions['primary']
  }
}

declare module '@emotion/react' {
  export interface Theme extends MUITheme {}
}
