import LinkMUI from '@mui/material/Link'
import LinkNext from 'next/link'
import { forwardRef } from 'react'
import { RouterLinkProps } from './types'

/* One more variant for this component */
// export const RouterLink = (props: RouterLinkProps) => {
//   return <LinkMUI {...props} component={LinkNext} />;
// };

export const RouterLink = forwardRef<HTMLAnchorElement, RouterLinkProps>(
  function RouterLink(
    { children, href, underline, color, sx, ...otherProps },
    ref,
  ) {
    return (
      <LinkNext href={href} passHref>
        <LinkMUI
          ref={ref}
          underline={underline}
          color={color}
          sx={sx}
          {...otherProps}
        >
          {children}
        </LinkMUI>
      </LinkNext>
    )
  },
)
