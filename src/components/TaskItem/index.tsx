import { Box, Checkbox, ListItem, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

import * as S from './styles'

export default function TaskItem() {
  return (
    <ListItem sx={S.ListItemStyles}>
      <Box sx={S.BoxStyles}>
        <Box sx={S.TaskWrapper}>
          <Checkbox sx={S.CheckboxStyles} />

          <Typography>Task goes here</Typography>
        </Box>

        <DeleteIcon sx={S.IconStyles} />
      </Box>
    </ListItem>
  )
}
