import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactIcon from '@mui/icons-material/ContactMail';
import DescriptionIcon from '@mui/icons-material/Description';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import WorkIcon from '@mui/icons-material/Work';
import PeopleIcon from '@mui/icons-material/People';
import ClassIcon from '@mui/icons-material/Class';

const Sidebar = () => {
  return (
    <List>
      <ListItem button component={Link} to="/">
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button component={Link} to="/bioSketch">
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary="Bio-Sketch" />
      </ListItem>
      <ListItem button component={Link} to="/publications">
        <ListItemIcon>
          <DescriptionIcon />
        </ListItemIcon>
        <ListItemText primary="Publications" />
      </ListItem>
      <ListItem button component={Link} to="/patents">
        <ListItemIcon>
          <LibraryBooksIcon />
        </ListItemIcon>
        <ListItemText primary="Patents" />
      </ListItem>
      <ListItem button component={Link} to="/projects">
        <ListItemIcon>
          <WorkIcon />
        </ListItemIcon>
        <ListItemText primary="Projects" />
      </ListItem>
      <ListItem button component={Link} to="/students">
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Students" />
      </ListItem>
      <ListItem button component={Link} to="/courses">
        <ListItemIcon>
          <ClassIcon />
        </ListItemIcon>
        <ListItemText primary="Courses" />
      </ListItem>
      <List component="div" disablePadding>
        <ListItem button component={Link} to="/mcp100">
          <ListItemText primary="MCP100 EV&C" />
        </ListItem>
        <ListItem button component={Link} to="/mcl747">
          <ListItemText primary="MCL747 DPM" />
        </ListItem>
        <ListItem button component={Link} to="/mcl742">
          <ListItemText primary="MCL742 D&O" />
        </ListItem>
        <ListItem button component={Link} to="/gian">
          <ListItemText primary="GIAN" />
        </ListItem>
        <ListItem button component={Link} to="/dpm">
          <ListItemText primary="DPM" />
        </ListItem>
      </List>
      <ListItem button component={Link} to="/contact">
        <ListItemIcon>
          <ContactIcon />
        </ListItemIcon>
        <ListItemText primary="Contact" />
      </ListItem>
      <ListItem button component={Link} to="/links">
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary="Interesting Links" />
      </ListItem>
      <ListItem button component={Link} to="/magazines">
        <ListItemIcon>
          <LibraryBooksIcon />
        </ListItemIcon>
        <ListItemText primary="Magazines" />
      </ListItem>
      <ListItem button component={Link} to="/marvels">
        <ListItemIcon>
          <WorkIcon />
        </ListItemIcon>
        <ListItemText primary="Eng Marvels" />
      </ListItem>
    </List>
  );
};

export default Sidebar;
