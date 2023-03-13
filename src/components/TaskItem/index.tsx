import { Box, Checkbox, ListItem, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

import { TaskType } from 'types'

import * as S from './styles'

type TaskItemTypes = {
  task: TaskType
}

export default function TaskItem({ task }: TaskItemTypes) {
  return (
    <ListItem sx={S.ListItemStyles}>
      <Box sx={S.BoxStyles}>
        <Box sx={S.TaskWrapper}>
          <Checkbox sx={S.CheckboxStyles} />

          <Typography>{task.description}</Typography>
        </Box>

        <DeleteIcon sx={S.IconStyles} />
      </Box>
    </ListItem>
  )
}
