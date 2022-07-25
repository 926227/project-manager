import { AppBar, Toolbar } from '@mui/material'
import { LocaleSelector } from '../../../common/LocaleSelector'
import { ElevationScroll } from '../../common/ElevationScroll'
import { ThemeModeToggler } from '../../common/ThemeModeToggler'

export const Header = () => {
  return (
    <ElevationScroll>
      <AppBar className="Header" position="fixed">
        <Toolbar>
          <ThemeModeToggler />
          <LocaleSelector />
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  )
}
