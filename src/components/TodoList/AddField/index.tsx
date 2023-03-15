import { Box, TextField, Button } from '@mui/material'

import * as S from './styles'

export default function AddField() {
  return (
    <Box component="section" my={3}>
      <Box display="flex" width="100%" alignItems="center">
        <TextField
          placeholder="Type here..."
          sx={S.TextFieldStyles}
          inputProps={{
            sx: S.InputStyles
          }}
        />
        <Button variant="contained" sx={S.ButtonStyles}>
          Submit
        </Button>
      </Box>
    </Box>
  )
}
