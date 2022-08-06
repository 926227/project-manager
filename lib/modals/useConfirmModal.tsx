import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Button from '@mui/material/Button'
import { useState } from 'react'
import { modalBoxStyle } from './styles'

export const useConfirmModal = () => {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const openModal = () => {
    setOpen(true)
  }

  const modal = (
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
    openModal,
    modal,
  }
}
