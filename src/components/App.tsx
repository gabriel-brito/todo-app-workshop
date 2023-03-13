import {
  Container,
  Divider,
  List,
  ListItem,
  Typography,
  Box,
  Checkbox
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

import AddField from 'components/AddField'

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
          <ListItem sx={{ p: 0, mb: 1 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                justifyContent: 'space-between',
                border: '1px solid rgba(0, 0, 0, 0.15)',
                p: 2
              }}
            >
              <Box
                sx={{ display: 'flex', alignItems: 'center', width: '100%' }}
              >
                <Checkbox sx={{ p: 0, mr: 1 }} />
                <Typography>Task goes here</Typography>
              </Box>
              <DeleteIcon sx={{ color: '#FF7961', cursor: 'pointer' }} />
            </Box>
          </ListItem>
        </List>
      </Box>
    </Container>
  )
}
