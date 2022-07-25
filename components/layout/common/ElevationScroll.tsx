import useScrollTrigger from '@mui/material/useScrollTrigger'
import React from 'react'

export const ElevationScroll = (props: { children: React.ReactElement }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return React.cloneElement(props.children, {
    elevation: trigger ? 6 : 0,
  })
}
