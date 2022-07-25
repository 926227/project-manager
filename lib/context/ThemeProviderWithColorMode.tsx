import { createContext, ReactNode, useEffect, useMemo, useState } from 'react'
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles'
import { darkTheme, lightTheme } from '../themes'
import { PaletteMode } from '@mui/material'
import { lsGet, lsSet, LStorage } from '../localStorage'

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const ColorModeContext = createContext({ toggleColorMode: () => {} })

export const ThemeProviderWithColorMode = ({
  children,
}: {
  children: ReactNode
}) => {
  const [mode, setMode] = useState<PaletteMode>(
    lsGet(LStorage.colorMode) || 'light',
  )
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    [],
  )

  useEffect(() => {
    lsSet(LStorage.colorMode, mode)
  }, [mode])

  const theme = useMemo(() => {
    const themeScaffolders: ThemeOptions =
      mode === 'dark' ? darkTheme : lightTheme
    return createTheme(themeScaffolders)
  }, [mode])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  )
}
