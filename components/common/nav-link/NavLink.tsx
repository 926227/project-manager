import LinkNext from 'next/link'
import LinkMUI from '@mui/material/Link'
import { useRouter } from 'next/router'
import { useTheme } from '@mui/material/styles'
import { NavLinkProps } from './types'

export const NavLink = ({ children, href, ...otherProps }: NavLinkProps) => {
  const router = useRouter()
  const theme = useTheme()

  const isActive = router.asPath.startsWith(href)

  return (
    <LinkNext href={href} passHref {...otherProps}>
      <LinkMUI
        sx={{
          pl: 2,
          color: isActive
            ? theme.palette.secondary.main
            : theme.palette.text.primary,
          fontWeight: isActive ? 900 : 'none',
          textDecoration: 'none',
          '&:hover': {
            color: !isActive ? theme.palette.secondary.light : '',
          },
        }}
      >
        {children}
      </LinkMUI>
    </LinkNext>
  )
}
