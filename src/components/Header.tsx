import { Toolbar, Icon, AppBar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Josh from '../assets/josh-thicc.png';


const Header = () => (
<AppBar sx={{backgroundColor: 'black'}} position="static">
  <Toolbar sx={{color: 'white'}}>
  <Link style={{color: 'inherit', display: 'flex'}} to={'/'}>
    <Icon sx={{mr: 1.0}} >
      <img src={Josh} height={25} width={25}/>
    </Icon>
    <Typography variant="h6" color="inherit" noWrap>
      Coding Challenge
    </Typography>
  </Link>
  </Toolbar>
</AppBar>
)

export default Header;
