import { PaletteMode } from '@mui/material'

export enum LStorage {
  isCookieAccepted = 'isCookieAccepted',
  locale = 'locale',
  colorMode = 'colorMode',
}

export type StorageTypes = {
  [LStorage.isCookieAccepted]: boolean
  [LStorage.locale]: string
  [LStorage.colorMode]: PaletteMode
}
