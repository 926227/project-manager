import { LinkProps } from 'next/link'
import { SxProps } from '@mui/system'

export type NavLinkProps = Omit<LinkProps, 'href'> & {
  href: string
  children: React.ReactNode
  sx?: SxProps
}
