import {useState, useEffect} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import styled from '@emotion/styled';
import { data } from '../roverdata';
import Spinner from '../components/Spinner';

import { RoverCard } from '../components/RoverCard';
import { getRovers } from '../modules/restApi';
import { Rover } from '../interfaces/rover.interface';

const RoverListingContainer = styled.div`
  display: absolute;
  width: 100%;
`

export default function RoverListing() {

  const [rovers, setRovers] = useState<Rover[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    // use this to use static data and get around rate limit

    // setRovers(data.rovers)
    // setIsLoading(false)
    getRovers()
    .then((data) => {
      setRovers(data)
      setIsLoading(false)
    })
    .catch((err) => {
       console.log('failed to get rovers', err)
    })
  }, [])

  if (isLoading) return <Spinner />
  return (
    <RoverListingContainer>
      <CssBaseline />
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
                  <RoverCard
                    rover={card}
                  />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      </RoverListingContainer>
  );
}