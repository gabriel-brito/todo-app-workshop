import { Container, Typography } from '@mui/material'

export default function App() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        backgroundColor: 'white',
        borderRadius: 1,
        mt: 8,
        mx: 'auto',
        p: 2,
      }}
    >
      <Typography
        component="h1"
        display="block"
        fontWeight={600}
        p={3}
        variant="h5"
      >
        Welcome to your todo list!
      </Typography>
    </Container>
  )
}
