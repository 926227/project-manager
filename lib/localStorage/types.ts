import { PaletteMode } from '@mui/material'

export enum LStorage {
  pmToken = 'pmToken',
  locale = 'locale',
  colorMode = 'colorMode',
}

export type StorageTypes = {
  [LStorage.pmToken]: string
  [LStorage.locale]: string
  [LStorage.colorMode]: PaletteMode
}
