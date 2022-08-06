import LoadingButton from '@mui/lab/LoadingButton'
import { ApiUrls } from '../../../lib/fetch/ApiUrls'
import { SignupInputs } from './types'
import { AxiosError, AxiosResponse } from 'axios'
import { Box, Paper, Stack, TextField, Typography } from '@mui/material'
import { useCheckAuthStatus, setAuthToken } from '../../../lib/helpers'
import {
  ErrorResponse,
  SigninResponse,
  SignupResponse,
} from '../../../lib/fetch/types'
import { post } from '../../../lib/fetch/requests'
import { RouterLink } from '../../common/router-link'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Trans, useTranslation } from 'next-i18next'
import { useInfoModal } from '../../../lib/modals/useInfoModal'
import { useRouter } from 'next/router'

export const Signup = () => {
  const isAuth = useCheckAuthStatus()
  const router = useRouter()
  const { t } = useTranslation()
  const { infoModal, openInfoModal } = useInfoModal()

  const defaultValues: SignupInputs = {
    name: '',
    login: '',
    password: '',
  }

  const { register, handleSubmit, formState } = useForm<SignupInputs>({
    defaultValues,
  })
  const { errors, isSubmitting } = formState

  const onSubmit: SubmitHandler<SignupInputs> = async (signupData) => {
    const signinData = {
      login: signupData.login,
      password: signupData.password,
    }

    let signinResponse: AxiosResponse<SigninResponse>
    try {
      await post<SignupResponse>(ApiUrls.signup, signupData)
      signinResponse = await post<SigninResponse>(ApiUrls.signin, signinData)
    } catch (e) {
      const error = e as AxiosError<ErrorResponse>
      //TODO: translate signup error messages
      if (error.response && error.response.data) {
        openInfoModal({ info: error.response.data.message, error: true })
      } else {
        openInfoModal({ info: error.message, error: true })
      }
      return
    }

    if (signinResponse && signinResponse.data) {
      setAuthToken(signinResponse.data.token)
    }
  }

  if (isAuth) {
    router.push('/main')
    return null
  } else {
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
            <Typography variant="h4">{t('registration')}</Typography>
            <TextField
              label={t('name')}
              inputProps={{
                ...register('name', { required: t('forms.fill_the_field') }),
              }}
              error={!!errors.name}
              helperText={errors.name?.message ?? ' '}
              fullWidth
            />
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
                ...register('password', {
                  required: t('forms.fill_the_field'),
                }),
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
              {t('registration')}
            </LoadingButton>
            <Typography paragraph>
              <Trans
                i18nKey="change_to_signin"
                components={{ lnk: <RouterLink href="/signin" /> }}
              />
            </Typography>
          </Stack>
        </Box>
      </Paper>
    )
  }
}
