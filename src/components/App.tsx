import {
  Box,
  Container,
  Divider,
  List,
  Typography,
} from '@mui/material'

import AddField from 'components/AddField'
import TaskItem from 'components/TaskItem'

export default function App() {
  return (
    <Container
      maxWidth="xs"
      sx={{
        backgroundColor: 'white',
        borderRadius: 1,
        mt: 8,
        mx: 'auto',
        px: 3,
        py: 4
      }}
    >
      <Typography component="h1" display="block" fontWeight={600} variant="h5">
        Welcome to your ToDo list.
      </Typography>

      <AddField />

      <Divider sx={{ my: 3 }} />

      <Box component="section" my={3}>
        <Typography
          component="h2"
          variant="h6"
          display="block"
          fontWeight={600}
          mb={3}
        >
          My tasks
        </Typography>

        {/* <Typography>Your list is empty...</Typography> */}

        <List>
          <TaskItem />
        </List>
      </Box>
    </Container>
  )
}
