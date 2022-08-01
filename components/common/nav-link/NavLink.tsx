import LinkNext from 'next/link'
import LinkMUI from '@mui/material/Link'
import { useRouter } from 'next/router'
import { useTheme } from '@mui/material/styles'
import { NavLinkProps } from './types'

export const NavLink = ({
  children,
  href,
  sx,
  ...otherProps
}: NavLinkProps) => {
  const router = useRouter()
  const theme = useTheme()

  const isActive = router.asPath.startsWith(href)

  return (
    <LinkNext href={href} passHref {...otherProps}>
      <LinkMUI
        sx={{
          ml: 2,
          color: theme.palette.secondary.main,
          fontWeight: isActive ? 900 : 400,
          textDecoration: 'none',
          transition: 'all 0.3s',
          cursor: isActive ? 'default' : 'pointer',
          '&:hover': {
            color: isActive ? '' : theme.palette.secondary.light,
          },
          boxShadow: isActive
            ? `0px 2px ${theme.palette.secondary.main}`
            : 'none',
          ...sx,
        }}
      >
        {children}
      </LinkMUI>
    </LinkNext>
  )
}
