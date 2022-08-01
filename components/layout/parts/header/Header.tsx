import { AppBar, Button, Stack, Toolbar } from '@mui/material'
import { useCheckAuthStatus, logout } from '../../../../lib/helpers'
import { ElevationScroll } from '../../common/ElevationScroll'
import { LayoutContainer } from '../../common/LayoutContainer'
import { LocaleSelector } from '../../../common/LocaleSelector'
import { Logo } from './Logo'
import { NavLink } from '../../../common/nav-link'
import { NavMenu } from './NavMenu'
import { ThemeModeToggler } from '../../common/ThemeModeToggler'
import { useTranslation } from 'next-i18next'

export const Header = () => {
  const { t } = useTranslation()
  const isAuth = useCheckAuthStatus()

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
              {!isAuth && (
                <NavLink href="/signin" sx={{ mr: 2 }}>
                  {t('menu.signin')}
                </NavLink>
              )}
              {isAuth && (
                <Button color="secondary" onClick={logout} sx={{ mr: 2 }}>
                  {t('menu.signout')}
                </Button>
              )}
              <LocaleSelector />
              <ThemeModeToggler />
            </Stack>
          </LayoutContainer>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  )
}
