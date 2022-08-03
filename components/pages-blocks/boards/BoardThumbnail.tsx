import { Paper, Typography } from '@mui/material'
import { IconButton, Stack } from '@mui/material'
import FolderDeleteIcon from '@mui/icons-material/FolderDelete'
import SourceIcon from '@mui/icons-material/Source'
import { BoardThumbnailProps } from './types'
import Link from 'next/link'

export const BoardThumbnail = (props: BoardThumbnailProps) => {
  const { id, title, description } = props

  return (
    <Link href={`/boards/${id}`}>
      <Paper
        className="BoardThumbnail"
        sx={{
          position: 'relative',
          width: '280px',
          minHeight: '85px',
          p: 2,
          pr: 5,
          cursor: 'pointer',
          transition: 'all 0.3s',
          backgroundColor: (theme) => theme.palette.board.main,
          '&:hover': {
            backgroundColor: (theme) => theme.palette.board.dark,
          },
        }}
      >
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
        <Stack
          sx={{
            position: 'absolute',
            right: '5px',
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        >
          <IconButton size="small" sx={{ color: '#5f7266' }}>
            <SourceIcon />
          </IconButton>
          <IconButton color="error" size="small">
            <FolderDeleteIcon />
          </IconButton>
        </Stack>
      </Paper>
    </Link>
  )
}
