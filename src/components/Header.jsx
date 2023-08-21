import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { jk_logo } from '../assets/constant';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#2196F3' }}>
      <Toolbar>
        <Box display="flex" alignItems="center">
          <img src={jk_logo} alt="Logo" height="130px" />
          <Box display="" alignItems="center">
            <Typography variant="h4" sx={{ marginLeft: '10px' }}>
              Jitendra Prasad Khatait
            </Typography>
            <Typography variant="h5" sx={{ marginLeft: '10px' }}>
              Department of Mechanical Engineering
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
