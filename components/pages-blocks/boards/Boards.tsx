import ControlPointIcon from '@mui/icons-material/ControlPoint'
import { BoardThumbnail } from './BoardThumbnail'
import { Box, Grid } from '@mui/material'
import { LayoutContainer } from '../../layout/common/LayoutContainer'
import { BoardsListProps } from './types'

export const Boards = ({ boards }: BoardsListProps) => {
  return (
    <LayoutContainer sx={{ p: '24px 0' }}>
      <Grid container spacing={2}>
        {boards.map((board) => (
          <Grid item key={board.id}>
            <BoardThumbnail {...board} />
          </Grid>
        ))}
        <Grid item>
          <Box
            sx={{
              width: '270px',
              minHeight: '85px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: (theme) => `2px solid ${theme.palette.board.main}`,
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'all 0.3s',
              '&:hover': {
                backgroundColor: (theme) => theme.palette.board.light,
              },
            }}
          >
            <ControlPointIcon fontSize="large" color="board" />
          </Box>
        </Grid>
      </Grid>
    </LayoutContainer>
  )
}
