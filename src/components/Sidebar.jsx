import { NavLink } from 'react-router-dom';
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
  const menuItems = [
    { to: '/', text: 'Home', icon: <HomeIcon /> },
    { to: '/bioSketch', text: 'Bio-Sketch', icon: <InfoIcon /> },
    { to: '/publications', text: 'Publications', icon: <DescriptionIcon /> },
    { to: '/patents', text: 'Patents', icon: <LibraryBooksIcon /> },
    { to: '/projects', text: 'Projects', icon: <WorkIcon /> },
    { to: '/students', text: 'Students', icon: <PeopleIcon /> },
    { to: '/courses', text: 'Courses', icon: <ClassIcon /> },
    { to: '/mcp100', text: 'MCP100 EV&C', icon: <DescriptionIcon /> },
    { to: '/mcl747', text: 'MCL747 DPM', icon: <DescriptionIcon /> },
    { to: '/mcl742', text: 'MCL742 D&O', icon: <DescriptionIcon /> },
    { to: '/gian', text: 'GIAN', icon: <DescriptionIcon /> },
    { to: '/dpm', text: 'DPM', icon: <DescriptionIcon /> },
    { to: '/contact', text: 'Contact', icon: <ContactIcon /> },
    { to: '/links', text: 'Interesting Links', icon: <InfoIcon /> },
    { to: '/magazines', text: 'Magazines', icon: <LibraryBooksIcon /> },
    { to: '/marvels', text: 'Eng Marvels', icon: <WorkIcon /> },
  ];

  return (
    <List>
      {menuItems.map((item, index) => (
        <ListItem button key={index} component={NavLink} to={item.to}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );
};

export default Sidebar;
