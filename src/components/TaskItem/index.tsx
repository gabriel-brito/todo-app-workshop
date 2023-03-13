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
  return (
    <ListItem sx={S.ListItemStyles}>
      <Box sx={S.BoxStyles}>
        <Box sx={S.TaskWrapper}>
          <Checkbox
            sx={S.CheckboxStyles}
            checked={task.isDone}
            onClick={() => updateTask(task.id)}
          />

          <Typography>{task.description}</Typography>
        </Box>

        {task.isDone ? (
          <DeleteIcon sx={S.IconStyles} onClick={() => deleteTask(task.id)} />
        ) : null}
      </Box>
    </ListItem>
  )
}
