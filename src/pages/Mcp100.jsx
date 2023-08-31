import { Typography, Paper, List, ListItem } from '@mui/material';
import { Mechanical } from '../assets/constant';

const MCP100 = () => {
  const paperStyle = {
    padding: '16px',
    marginBottom: '16px',
    border: '2px solid #336699',
  };

  const hrStyle = {
    margin: '2rem 0',
    border: 'none',
    borderTop: '1px solid #ccc',
  };

  const linkStyle = {
    color: '#336699',
    textDecoration: 'none',
    fontWeight: 'bold',
  };

  return (
    <div>
      <Paper elevation={3} sx={{ ...paperStyle }}>
        <Typography variant="h4" fontWeight="bolder" marginBottom="1rem">
          ENGINEERING VISUALIZATION & COMMUNICATION
        </Typography>
        <hr style={hrStyle} />
        <marquee behavior="alternate" bgcolor="#ADD8E6">
          <Typography variant="h5" color="#4B0082" fontStyle="italic" marginBottom="1rem">
            MCP100 Engineering Visualization & Communication
          </Typography>
        </marquee>
        <Typography variant="h6" marginBottom="0.5rem">
          <a href="http://web.iitd.ac.in/~jpkhatait" rel="noreferrer" target="_blank" style={linkStyle}>
            Home
          </a>
        </Typography>
        <Typography variant="h6" marginBottom="0.5rem">
          <a href="https://moodle.iitd.ac.in/course/view.php?id=14059" rel="noreferrer" target="_blank" style={linkStyle}>
            Moodle
          </a>
        </Typography>
        <Typography variant="h6" marginBottom="1rem">
          Course Evaluation
        </Typography>

        <Typography variant="h6" marginBottom="0.5rem">
          Lectures
        </Typography>
        <List>
          <ListItem>
            <Typography variant="body1">
              <i>Mon, 5:00 PM - 6:30 PM</i>
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              <i>Dogra Hall</i>
            </Typography>
          </ListItem>
        </List>

        <Typography variant="h6" marginBottom="1rem">
          Labs
        </Typography>
        <List>
          <ListItem>
            <Typography variant="body1">
              <i>LH 538 Graphics Lab</i>
            </Typography>
          </ListItem>
        </List>

        {/* Continue with other sections... */}

        <Typography variant="h6" marginBottom="1rem">
          References
        </Typography>

        <Typography variant="h6" marginBottom="1rem">
          <a href="http://web.iitd.ernet.in/~jpkhatait/magazines.html" rel="noreferrer" target="_blank" style={linkStyle}>
            Magazines
            <i> [Check the link for more interesting stuff!!!]</i>
          </a>
        </Typography>
        <Typography variant="h6">
          <a href="http://web.iitd.ernet.in/~jpkhatait/magazines.html" rel="noreferrer" target="_blank" style={linkStyle}>
            <img src={Mechanical} alt="ASME" style={{ width: '128px' }} />
          </a>
        </Typography>
      </Paper>
    </div>
  );
};

export default MCP100;
