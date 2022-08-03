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

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    board: true
    column: true
    task: true
  }
}

// Update the SvgIcon's color prop options
declare module '@mui/material/SvgIcon' {
  interface SvgIconPropsColorOverrides {
    board: true
    column: true
    task: true
  }
}

declare module '@emotion/react' {
  export interface Theme extends MUITheme {}
}
