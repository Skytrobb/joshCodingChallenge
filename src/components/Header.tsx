import { Toolbar, Icon, AppBar, Typography } from '@mui/material';
import Josh from '../assets/josh-thicc.png';


const Header = () => (
<AppBar sx={{backgroundColor: 'black'}} position="static">
  <Toolbar sx={{color: 'white'}}>
    <Icon sx={{mr: 1.0}} >
      <img src={Josh} height={25} width={25}/>
    </Icon>
    <Typography variant="h6" color="inherit" noWrap>
      Coding Challenge
    </Typography>
  </Toolbar>
</AppBar>
)

export default Header;
