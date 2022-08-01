import {
  FormControl,
  Select,
  MenuItem,
  Box,
  SelectChangeEvent,
} from '@mui/material'
import { useRouter } from 'next/router'

export const LocaleSelector = () => {
  const router = useRouter()
  const handleChange = (e: SelectChangeEvent<string>) => {
    router.push(router.asPath, router.asPath, { locale: e.target.value })
  }

  return (
    <FormControl>
      <Select
        variant="standard"
        value={router.locale}
        onChange={handleChange}
        sx={{
          '& .MuiInputBase-input': { pl: '8px' },
          '&:before': { content: 'none' },
        }}
      >
        <MenuItem value="ru">
          <Box
            component="img"
            width="20px"
            src="/pictures/ru.png"
            sx={{ filter: 'drop-shadow(0 1px 2px black)' }}
          />
        </MenuItem>
        <MenuItem value="en">
          <Box
            component="img"
            width="20px"
            src="/pictures/en.png"
            sx={{ filter: 'drop-shadow(0 1px 2px black)' }}
          />
        </MenuItem>
      </Select>
    </FormControl>
  )
}
