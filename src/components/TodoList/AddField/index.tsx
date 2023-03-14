import { useState, KeyboardEvent } from 'react'
import { Box, TextField, Button } from '@mui/material'

import * as S from './styles'

type AddFieldTypes = {
  createNewTask: (description: string) => void
}

export default function AddField({ createNewTask }: AddFieldTypes) {
  const [errorMessage, setErrorMessage] = useState('')
  const [descriptionValue, setDescriptionValue] = useState('')

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      submitTask(descriptionValue)
    }
  }

  const submitTask = (description: string): void => {
    if (!description.length) {
      setErrorMessage('Description is empty')

      return
    }

    createNewTask(description)
    setDescriptionValue('')
  }

  return (
    <Box component="section" my={3} data-testid="add-field-section">
      <Box display="flex" width="100%" alignItems="flex-start">
        <TextField
          aria-label="description"
          error={!!errorMessage}
          helperText={errorMessage}
          onChange={(event) => {
            event.preventDefault()
            setDescriptionValue(event.target.value)
            setErrorMessage('')
          }}
          placeholder="Type here..."
          sx={S.TextFieldStyles}
          value={descriptionValue}
          onKeyDown={handleKeyDown}
          inputProps={{
            sx: S.InputStyles,
            'data-testid': 'inside-input'
          }}
        />
        <Button
          role="submit-button"
          variant="contained"
          sx={S.ButtonStyles}
          onClick={() => submitTask(descriptionValue)}
        >
          Submit
        </Button>
      </Box>
    </Box>
  )
}
