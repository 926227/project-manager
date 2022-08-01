import { NavLink } from '../../../common/nav-link'
import { useTranslation } from 'next-i18next'
import { useCheckAuthStatus } from '../../../../lib/helpers'

export const NavMenu = () => {
  const { t } = useTranslation()
  const isAuth = useCheckAuthStatus()

  return (
    <>
      <NavLink href="/main">{t('menu.main')}</NavLink>
      {isAuth && <NavLink href="/boards">{t('menu.boards')}</NavLink>}
    </>
  )
}
