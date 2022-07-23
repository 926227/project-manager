import { createContext, ReactNode, useMemo, useState } from 'react'
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles'
import { darkTheme, lightTheme } from '../themes'

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const ColorModeContext = createContext({ toggleColorMode: () => {} })

export const ThemeProviderWithColorMode = ({
  children,
}: {
  children: ReactNode
}) => {
  const [mode, setMode] = useState<'light' | 'dark'>('dark')
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    [],
  )

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
