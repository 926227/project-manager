import { NavLink } from '../../../common/nav-link'
import { useTranslation } from 'next-i18next'

export const NavMenu = () => {
  const { t } = useTranslation()

  return (
    <>
      <NavLink href="/main">{t('menu.main')}</NavLink>
      <NavLink href="/boards">{t('menu.boards')}</NavLink>
    </>
  )
}
