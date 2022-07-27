import LinkMUI from '@mui/material/Link'
import LinkNext from 'next/link'
import { RouterLinkProps } from './types'

/* One more variant for this component */
// export const RouterLink = (props: RouterLinkProps) => {
//   return <LinkMUI {...props} component={LinkNext} />;
// };

export const RouterLink = ({
  children,
  href,
  underline,
  color,
  ...otherProps
}: React.PropsWithChildren<RouterLinkProps>) => {
  return (
    <LinkNext href={href} passHref {...otherProps}>
      <LinkMUI underline={underline} color={color}>
        {children}
      </LinkMUI>
    </LinkNext>
  )
}
