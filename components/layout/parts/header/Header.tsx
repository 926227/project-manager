import { AppBar, Stack, Toolbar } from '@mui/material'
import { LocaleSelector } from '../../../common/LocaleSelector'
import { ElevationScroll } from '../../common/ElevationScroll'
import { LayoutContainer } from '../../common/LayoutContainer'
import { ThemeModeToggler } from '../../common/ThemeModeToggler'
import { Logo } from './Logo'
import { NavMenu } from './NavMenu'

export const Header = () => {
  return (
    <ElevationScroll>
      <AppBar className="Header" position="fixed">
        <Toolbar>
          <LayoutContainer
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Stack direction="row" sx={{ alignItems: 'center' }}>
              <Logo />
              <NavMenu />
            </Stack>
            <Stack direction="row" sx={{ alignItems: 'center' }}>
              <LocaleSelector />
              <ThemeModeToggler />
            </Stack>
          </LayoutContainer>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  )
}
