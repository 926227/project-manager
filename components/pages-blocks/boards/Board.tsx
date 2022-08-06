import AddIcon from '@mui/icons-material/Add'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { BoardProps } from './types'
import { Box, Button, Stack, Typography } from '@mui/material'
import { Column } from './Column'
import { ContainerBoards } from './styles'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { LayoutContainer } from '../../layout/common/LayoutContainer'
import { RouterLink } from '../../common/router-link'
import { useBoardLogic } from './boardLogic'
import { useColumnModal } from './forms/ColumnModal'
import { useTranslation } from 'next-i18next'

export const Board = (props: BoardProps) => {
  const { board } = props
  const { title, description } = board
  const { t } = useTranslation()

  const { state, onDragEnd } = useBoardLogic(props)
  const { modal: ColumnModal, openModal: openColumnModal } = useColumnModal({
    boardId: board.id,
  })

  return (
    <>
      <LayoutContainer sx={{ height: '100%', mt: 2 }}>
        <Stack direction="row" mb={1}>
          <Button
            variant="outlined"
            href="/boards"
            component={RouterLink}
            sx={{ mr: 2 }}
          >
            <ArrowBackIosIcon fontSize="large" />
          </Button>
          <Stack>
            <Typography variant="h4" component="h1">
              {title}
            </Typography>
            <Typography sx={{ mb: 1 }}>{description}</Typography>
          </Stack>
          <Box sx={{ display: 'flex', justifyContent: 'end', flexGrow: 1 }}>
            <Button
              variant="outlined"
              size="large"
              startIcon={<AddIcon />}
              onClick={openColumnModal}
            >
              {t('column.add')}
            </Button>
          </Box>
        </Stack>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable
            droppableId="all-columns"
            direction="horizontal"
            type="column"
          >
            {(provided) => (
              <ContainerBoards
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {state.columnOrder.map((columnId, index) => {
                  const column = state.columns[columnId]
                  const tasks = column.taskIds.map(
                    (taskId) => state.tasks[taskId],
                  )
                  return (
                    <Column
                      key={column.id}
                      column={column}
                      tasks={tasks}
                      index={index}
                      boardId={board.id}
                    />
                  )
                })}
                {provided.placeholder}
              </ContainerBoards>
            )}
          </Droppable>
        </DragDropContext>
      </LayoutContainer>
      {ColumnModal}
    </>
  )
}
