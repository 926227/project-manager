import { CardContent, CardMedia, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useTranslation } from 'next-i18next'
import { CardProps, Order } from './types'

export const CardAbout = (props: CardProps) => {
  const { component, src, reverse, text } = props
  const { t } = useTranslation()

  console.log('1:', (reverse && 1) || 0)
  console.log('2:', (reverse && 0) || 1)

  return (
    <Box
      className="CardAbout"
      sx={{
        display: 'flex',
        width: '100%',
        height: '350px',
        p: 1,
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          alignItems: 'center',
          p: 4,
          order: (reverse && Order.last) || Order.first,
        }}
      >
        <Typography>{t(text)}</Typography>
      </CardContent>
      <CardMedia
        component={component}
        src={src}
        sx={{ width: '50%', order: (reverse && Order.first) || Order.last }}
      />
    </Box>
  )
}
