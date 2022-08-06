import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import { modalBoxStyle } from './styles'

export const useInfoModal = () => {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const openInfoModal = ({
    info,
    error,
  }: {
    info: string
    error?: boolean
  }) => {
    setMessage(info)
    setOpen(true)
    error && setError(true)
  }

  const infoModal = (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={modalBoxStyle}>
            <Typography
              variant="h6"
              component="h2"
              color={error ? 'error' : 'inherit'}
            >
              {error ? t('modals.error') : t('modals.info')}
            </Typography>
            <Typography id="transition-modal-description" sx={{ my: 2 }}>
              {t(message)}
            </Typography>
            <Button
              variant="contained"
              onClick={handleClose}
              sx={{ alignSelf: 'end' }}
            >
              OK
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  )

  return {
    infoModal,
    openInfoModal,
  }
}
