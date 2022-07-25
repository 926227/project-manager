import { SxProps } from '@mui/material'
import Box, { BoxTypeMap } from '@mui/material/Box'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import { ReactNode } from 'react'

type LayoutContainerProps = Omit<
  OverridableComponent<BoxTypeMap<{}, 'div'>>,
  'children'
> & {
  sx?: SxProps
  children: ReactNode
}

export const LayoutContainer = ({
  children,
  sx,
  ...otherProps
}: LayoutContainerProps) => {
  return (
    <Box
      className="LayoutContainer"
      sx={{
        mx: { xs: 1, sm: 8, md: 'auto' },
        maxWidth: { xs: 'calc(100vw - 16px)', sm: '900px' },
        flexGrow: 1,
        ...sx,
      }}
      {...otherProps}
    >
      {children}
    </Box>
  )
}
