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
import {
  ColumnModalInputs,
  UpdateColumnInfo,
  UseColumnModalProps,
} from '../types'
import axios, { AxiosError, AxiosResponse } from 'axios'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useInfoModal } from '../../../../lib/modals/useInfoModal'
import { ErrorResponse } from '../../../../lib/fetch/types'

export const useColumnModal = ({
  updateColumn,
  reloadBoard,
}: UseColumnModalProps) => {
  const [open, setOpen] = useState(false)
  const [column, setColumn] = useState<UpdateColumnInfo | null>(null)
  const { t } = useTranslation()
  const { infoModal, openInfoModal } = useInfoModal()

  const defaultValues = {
    title: '',
  }
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ColumnModalInputs>({
    defaultValues,
  })

  const onSubmit: SubmitHandler<ColumnModalInputs> = async (data) => {
    if (!column) {
      return
    }

    let response: AxiosResponse<ColumnModalInputs>
    try {
      response = await updateColumn({ ...column, ...data })

      if (response) {
        handleClose()
        reloadBoard(undefined, true)
        openInfoModal({ info: t('column.created') })
      }
    } catch (e) {
      if (!axios.isAxiosError(e)) {
        console.error(e)
      }

      const error = e as AxiosError<ErrorResponse>
      if (error.response && error.response.data) {
        openInfoModal({ info: error.response.data.message, error: true })
      } else {
        openInfoModal({ info: error.message, error: true })
      }
    }
  }

  const handleClose = () => {
    setColumn(null)
    setOpen(false)
  }

  const openModal = (column: UpdateColumnInfo) => {
    column.title && setValue('title', column.title)
    setColumn(column)
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <CardContent>
                <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
                  {column && column.columnId
                    ? t('column.edit')
                    : t('column.create')}
                </Typography>
                <TextField
                  inputProps={{
                    ...register('title', {
                      required: t('forms.fill_the_field'),
                    }),
                  }}
                  label={t('column.title')}
                  error={!!errors.title}
                  helperText={errors.title?.message ?? ' '}
                  fullWidth
                />
              </CardContent>
              <CardActions sx={{ justifyContent: 'end' }}>
                <Button variant="contained" type="submit">
                  {column && column.columnId ? t('save') : t('create')}
                </Button>
              </CardActions>
            </form>
          </Card>
        </Fade>
      </Modal>
      {infoModal}
    </div>
  )

  return {
    openModal,
    modal,
  }
}
