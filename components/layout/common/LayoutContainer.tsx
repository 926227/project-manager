import { SxProps } from '@mui/material';
import Box, { BoxTypeMap } from '@mui/material/Box';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { ReactNode } from 'react';

type LayoutContainerProps = Omit<
  OverridableComponent<BoxTypeMap<{}, 'div'>>,
  'children'
> & {
  sx?: SxProps;
  children: ReactNode;
};

export const LayoutContainer = ({
  children,
  sx,
  ...otherProps
}: LayoutContainerProps) => {
  return (
    <Box
      className='LayoutContainer'
      sx={{
        ml: { xs: 2, sm: 8, md: 16 },
        mr: { xs: 2, sm: 8, md: 16 },
        maxWidth: { xs: 'calc(100vw - 16px)', sm: '900px' },
        flexGrow: 1,
        ...sx,
      }}
      {...otherProps}
    >
      {children}
    </Box>
  );
};
