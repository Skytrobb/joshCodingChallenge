import {useState, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import styled from '@emotion/styled';
import Link from '@mui/material/Link';

import { RoverCard } from '../components/RoverCard';
import { NewerCard } from '../components/NewerCard';
import { getRovers } from '../modules/restApi';
import { GetRoversResponse } from '../interfaces/rover.interface';
import { CircularProgress } from '@mui/material';

const RoverListingContainer = styled.div`
  display: absolute;
  width: 100%;
`

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function RoverListing() {

  const [rovers, setRovers] = useState<GetRoversResponse>()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    getRovers()
    .then((data) => {
      console.log('data', data)
      setRovers(data)
      setIsLoading(false)
    })
    .catch((err) => {
      console.log()
    })
  }, [])

  if (isLoading) return <CircularProgress />
  return (
    <RoverListingContainer>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Album layout
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Something short and leading about the collection below—its contents,
              the creator, etc. Make it short and sweet, but not too short so folks
              don&apos;t simply skip over it entirely.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {rovers.map((card, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <NewerCard
                  name={card.name}
                  totalPhotos={card.total_photos}
                  launchDate={card.launch_date}
                  landingDate={card.landing_date}
                  cameras={card.cameras}
                  />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      </RoverListingContainer>
  );
}