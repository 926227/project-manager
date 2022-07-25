import { AppBar, Toolbar } from '@mui/material'
import { LocaleSelector } from '../../../common/LocaleSelector'
import { ElevationScroll } from '../../common/ElevationScroll'
import { LayoutContainer } from '../../common/LayoutContainer'
import { ThemeModeToggler } from '../../common/ThemeModeToggler'

export const Header = () => {
  return (
    <ElevationScroll>
      <AppBar className="Header" position="fixed">
        <Toolbar>
          <LayoutContainer>
            <ThemeModeToggler />
            <LocaleSelector />
          </LayoutContainer>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  )
}
