import * as React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CardContainer = styled.div`
  width: 25%;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid grey;
`

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const ArrowCard = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <CardContent>
        <Typography variant="h3" component="div">
          Curiosity
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          1234578 photos
        </Typography>
        <Typography sx={{ color: 'text.secondary'}} variant="h5">
          Launch Date:
        </Typography>
        <Typography sx={{ mb: 1.0 }}>{'01/01/1990'}</Typography>
        <Typography variant="h5">
          Landing Date:
        </Typography>
        <Typography sx={{ mb: 1.0 }}>{'12/12/1991'}</Typography>
      </CardContent>
      <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
          </CardContent>
        </Collapse>
    </>
  );
  }

export function NewCard () {
  return (
    <CardContainer>
      <Box sx={{ minWidth: 275 }}>
        <ArrowCard />
      </Box>
    </CardContainer>
  );
}