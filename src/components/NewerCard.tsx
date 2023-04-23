import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Camera } from '../interfaces/rover.interface';
import { Link } from 'react-router-dom';

import { ListItem, ListItemText, List } from '@mui/material';
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const CameraText = ({ cameras }) => {
  return (
    <List dense={true}>
    {cameras.map((camera, index) => (
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
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export function NewerCard({
  name = "Curiosity",
  totalPhotos = 1122334,
  launchDate = "01/01/1990",
  landingDate = "01/01/1991",
  id,
  cameras,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link style={{ color: 'inherit' }} to={`/rover/${id}`}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: '#575755' }} aria-label="recipe">
            {name[0]}
          </Avatar>
        }
        title={name}
        subheader={`${totalPhotos} photos`}
      />
      <CardContent>
        <div>
        <Typography color='text.secondary' variant="subtitle2">
          Launch Date:
        </Typography>
        <Typography sx={{ mb: 1.0 }}>{launchDate}</Typography>
        </div>
        <Typography color='text.secondary' variant="subtitle2">
          Landing Date:
        </Typography>
        <Typography sx={{ mb: 1.0 }}>{landingDate}</Typography>
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
          <CameraText cameras={cameras} />
        </CardContent>
      </Collapse>
    </Card>
  );
}