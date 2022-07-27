import { LinkProps } from 'next/link'

export type NavLinkProps = Omit<LinkProps, 'href'> & {
  href: string
  children: React.ReactNode
}
