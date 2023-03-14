import { Box, Checkbox, ListItem, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

import { TaskType } from 'types'

import * as S from './styles'

type TaskItemTypes = {
  task: TaskType
  updateTask: (id: string) => void
  deleteTask: (id: string) => void
}

export default function TaskItem({
  task,
  updateTask,
  deleteTask
}: TaskItemTypes) {
  const isDone = task.isDone
  const ID = task.id

  return (
    <ListItem sx={S.ListItemStyles}>
      <Box
        data-testid="task-item"
        sx={{
          ...S.BoxStyles,
          backgroundColor: isDone ? '#ededed' : 'inherit',
          textDecoration: isDone ? 'line-through' : 'none'
        }}
      >
        <Box sx={S.TaskWrapper}>
          <Checkbox
            sx={S.CheckboxStyles}
            checked={isDone}
            onClick={() => updateTask(ID)}
          />

          <Typography>{task.description}</Typography>
        </Box>

        {isDone ? (
          <DeleteIcon sx={S.IconStyles} onClick={() => deleteTask(ID)} />
        ) : null}
      </Box>
    </ListItem>
  )
}
