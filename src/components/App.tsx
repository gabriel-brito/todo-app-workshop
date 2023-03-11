import {
  Container,
  Divider,
  List,
  ListItem,
  Typography,
  Box,
  TextField,
  Button,
  Checkbox
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

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

      <Box component="section" my={3}>
        <Box display="flex" width="100%" alignItems="center">
          <TextField
            placeholder="Type here..."
            sx={{
              borderBottomRightRadius: 0,
              borderTopRightRadius: 0,
              height: '100%',
              width: '70%'
            }}
            inputProps={{
              sx: { py: 1, px: 2 }
            }}
          />
          <Button
            variant="contained"
            sx={{
              borderBottomLeftRadius: 0,
              borderTopLeftRadius: 0,
              fontWeight: 600,
              height: '39px',
              ml: '-1px',
              width: '30%'
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>

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
