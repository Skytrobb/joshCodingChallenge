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
import Josh from '../assets/josh-thicc.png';

import { RoverCard } from '../components/RoverCard';
import { NewerCard } from '../components/NewerCard';
import { getRovers } from '../modules/restApi';
import { GetRoversResponse } from '../interfaces/rover.interface';
import { CircularProgress, Icon } from '@mui/material';

const RoverListingContainer = styled.div`
  display: absolute;
  width: 100%;
`

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
      <AppBar sx={{backgroundColor: 'black'}} position="relative">
        <Toolbar sx={{color: 'white'}}>
          <Icon sx={{mr: 1.0}} >
            <img src={Josh} height={25} width={25}/>
          </Icon>
          <Typography variant="h6" color="inherit" noWrap>
            Coding Challenge
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
              Rover Browser
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Select one of the rovers below to see their photos!
            </Typography>
            <Stack
              sx={{ pt: 1 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 2 }} maxWidth="md">
          {/* End hero unit */}
          <Grid sx={{justifyContent: 'center'}} container spacing={4}>
            {rovers.map((card, index) => (
              <Grid item key={index} xs={12} sm={6} md={5}>
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