import LoadingButton from '@mui/lab/LoadingButton'
import { ApiUrls } from '../../../lib/fetch/ApiUrls'
import { SigninInputs } from './types'
import { AxiosError, AxiosResponse } from 'axios'
import { Box, Paper, Stack, TextField, Typography } from '@mui/material'
import { useCheckAuthStatus, setAuthToken } from '../../../lib/helpers'
import { ErrorResponse, SigninResponse } from '../../../lib/fetch/types'
import { post } from '../../../lib/fetch/requests'
import { RouterLink } from '../../common/router-link'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Trans, useTranslation } from 'next-i18next'
import { useInfoModal } from '../../../lib/modals/useInfoModal'
import { useRouter } from 'next/router'

export const Signin = () => {
  const isAuth = useCheckAuthStatus()
  const router = useRouter()
  const { t } = useTranslation()
  const { infoModal, openInfoModal } = useInfoModal()

  const defaultValues: SigninInputs = {
    login: '',
    password: '',
  }

  const { register, handleSubmit, formState } = useForm<SigninInputs>({
    defaultValues,
  })
  const { errors, isSubmitting } = formState

  const onSubmit: SubmitHandler<SigninInputs> = async (data) => {
    let response: AxiosResponse<SigninResponse>
    try {
      response = await post<SigninResponse>(ApiUrls.signin, data)
    } catch (e) {
      //TODO: add  type safety with if (axios.isAxiosError(error)) {}
      const error = e as AxiosError<ErrorResponse>
      if (error.response && error.response.data) {
        openInfoModal({ info: error.response.data.message, error: true })
      } else {
        openInfoModal({ info: error.message, error: true })
      }
      return
    }

    if (response && response.data) {
      setAuthToken(response.data.token)
    }
  }

  if (isAuth) {
    router.push('/main')
    return null
  }

  return (
    <Paper
      elevation={6}
      sx={{ width: { xs: '90%', sm: '400px' }, m: '5vh auto 0', p: 4 }}
    >
      {infoModal}
      <Box
        component="form"
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Stack spacing={2}>
          <Typography variant="h4">{t('signin')}</Typography>
          <TextField
            label={t('login')}
            inputProps={{
              ...register('login', { required: t('forms.fill_the_field') }),
            }}
            error={!!errors.login}
            helperText={errors.login?.message ?? ' '}
            fullWidth
          />
          <TextField
            label={t('password')}
            type="password"
            inputProps={{
              ...register('password', { required: t('forms.fill_the_field') }),
            }}
            error={!!errors.password}
            helperText={errors.password?.message ?? ' '}
            fullWidth
          />
          <LoadingButton
            loading={isSubmitting}
            variant="contained"
            type="submit"
            fullWidth
          >
            {t('signin')}
          </LoadingButton>
          <Typography paragraph>
            <Trans
              i18nKey="change_to_signup"
              components={{ lnk: <RouterLink href="/signup" /> }}
            />
          </Typography>
        </Stack>
      </Box>
    </Paper>
  )
}
