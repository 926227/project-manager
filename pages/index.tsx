import { Button } from '@mui/material'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      main file{' '}
      <Button color="primary" variant="contained">
        OK
      </Button>
      <Button color="success" variant="contained">
        OK
      </Button>
      <Button color="error" variant="contained">
        OK
      </Button>
      <Button>NO</Button>
    </>
  )
}

export default Home
