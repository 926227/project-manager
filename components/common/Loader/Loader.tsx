import { Box } from '@mui/system'
import styles from './styles.module.css'

export const Loader = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <div className={styles.loader}></div>
    </Box>
  )
}
