import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Fade from '@mui/material/Fade'
import Modal from '@mui/material/Modal'
import { modalBoxStyle } from './styles'
import { Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import { ConfirmModalProps } from './types'

export const useConfirmModal = () => {
  const [open, setOpen] = useState(false)
  const [modalMessage, setModalMessage] = useState('')
  const [handleYes, setHandleYes] = useState<(() => void) | undefined>()
  const [handleNo, setHandleNo] = useState<(() => void) | undefined>()
  const { t } = useTranslation()

  const handleCloseWithNo = () => {
    handleNo && handleNo()
    setOpen(false)
  }

  const handleCloseWithYes = () => {
    handleYes && handleYes()
    setOpen(false)
  }

  const openModal = ({ yes, no, message }: ConfirmModalProps) => {
    console.log('{ yes, no, message }', { yes, no, message })
    setModalMessage(message)
    setHandleNo(() => no)
    setHandleYes(() => yes)
    setOpen(true)
  }

  const modal = (
    <div>
      <Modal
        open={open}
        onClose={handleCloseWithNo}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={modalBoxStyle}>
            <Typography variant="h6" component="h2">
              {t('modals.please_confirm')}
            </Typography>
            <Typography my={3}>{modalMessage}</Typography>
            <Stack direction="row" justifyContent="end" sx={{ width: '100%' }}>
              <Button
                variant="outlined"
                onClick={handleCloseWithNo}
                sx={{ mr: 2 }}
              >
                {t('no')}
              </Button>
              <Button variant="contained" onClick={handleCloseWithYes}>
                {t('yes')}
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </div>
  )

  return {
    openModal,
    modal,
  }
}
