import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Camera, Rover } from '../interfaces/rover.interface';
import { Link } from 'react-router-dom';

import { ListItem, ListItemText, List } from '@mui/material';
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

interface CameraTextProps {
  cameras: Camera[]
}

const CameraText = (props: CameraTextProps) => {
  return (
    <List dense={true}>
    {props.cameras.map((camera, index) => (
        <ListItem key={index}>
            <ListItemText
              primary={camera.full_name}
              secondary={camera.name}
            />
        </ListItem>
      )
    )
   }
   </List>
  )
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export function RoverCard({ rover }: { rover: Rover}) {
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link style={{ color: 'inherit' }} to={`/rover/${rover.id}`} state={{ rover }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: '#575755' }} aria-label="recipe">
            {rover.name[0]}
          </Avatar>
        }
        title={rover.name}
        subheader={`${rover.total_photos} photos`}
      />
      <CardContent>
        <div>
        <Typography color='text.secondary' variant="subtitle2">
          Launch Date:
        </Typography>
        <Typography sx={{ mb: 1.0 }}>{rover.launch_date}</Typography>
        </div>
        <Typography color='text.secondary' variant="subtitle2">
          Landing Date:
        </Typography>
        <Typography sx={{ mb: 1.0 }}>{rover.landing_date}</Typography>
      </CardContent>
      </Link>
      <CardActions disableSpacing>
      <Typography sx={{ ml: 1.0 }} variant='h6'>Cameras</Typography>
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
          <CameraText cameras={rover.cameras} />
        </CardContent>
      </Collapse>
    </Card>
  );
}