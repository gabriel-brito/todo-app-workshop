import { Box, Checkbox, ListItem, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

import * as S from './styles'

type TaskItemTypes = {
  task: {
    id: string
    description: string
    isDone: boolean
  }
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
