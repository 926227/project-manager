import Backdrop from '@mui/material/Backdrop'
import Button from '@mui/material/Button'
import Fade from '@mui/material/Fade'
import Modal from '@mui/material/Modal'
import { modalBoxStyle } from '../../../../lib/modals/styles'
import {
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import { UpdateColumnInfo } from '../types'
import { MakeRequired } from '../../../../lib/helpers'

export const useColumnModal = (
  column: MakeRequired<Partial<UpdateColumnInfo>, 'boardId'>,
) => {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()

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
          <Card sx={{ ...modalBoxStyle, alignItems: 'stretch' }}>
            <CardContent>
              <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
                {column.columnId ? t('column.edit') : t('column.create')}
              </Typography>
              <TextField label={t('column.title')} fullWidth />
            </CardContent>
            <CardActions sx={{ justifyContent: 'end' }}>
              <Button variant="contained" onClick={handleClose}>
                {t('create')}
              </Button>
            </CardActions>
          </Card>
        </Fade>
      </Modal>
    </div>
  )

  return {
    openModal,
    modal,
  }
}
