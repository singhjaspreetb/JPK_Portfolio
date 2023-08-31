import { Typography, Paper, List, ListItem, Link, Container, Divider } from '@mui/material';
import { Mechanical } from '../assets/constant';

const DesignOptimization = () => {
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
      <Paper elevation={3} sx={paperStyle}>
        <Typography variant="h4" fontWeight="bolder" marginBottom="1rem">
          DESIGN & OPTIMIZATION
        </Typography>
        <Divider />
        <marquee behavior="alternate" bgcolor="#ADD8E6">
          <Typography variant="h5" color="#4B0082" fontStyle="italic" marginBottom="1rem">
            MCP100 Engineering Visualization & Communication
          </Typography>
        </marquee>
        <Typography variant="h6" marginBottom="0.5rem">
          <Link href="http://web.iitd.ac.in/~jpkhatait" rel="noreferrer" target="_blank" style={linkStyle}>
            Home
          </Link>
        </Typography>
        <Typography variant="h6" marginBottom="0.5rem">
          <Link href="https://moodle.iitd.ac.in/course/view.php?id=14059" rel="noreferrer" target="_blank" style={linkStyle}>
            Moodle
          </Link>
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
        <Typography variant="h6" marginBottom="1rem">
          Course Contents and Lecture Slides
        </Typography>
        <Typography variant="h6" marginBottom="1rem">
          Part I. Design (Advanced)
        </Typography>
        <List>
          <ListItem>
            <Link href="http://web.iitd.ac.in/~jpkhatait/MCL742/slides_failurestatic.pdf" target="_blank">
              Static failure
            </Link>
          </ListItem>
          <ListItem>
            <Link href="http://web.iitd.ac.in/~jpkhatait/MCL742/slides_failurefatigue.pdf" target="_blank">
              Fatigue failure
            </Link>
          </ListItem>
          <ListItem>
            <Link href="http://web.iitd.ac.in/~jpkhatait/MCL742/slides_failuresurface.pdf" target="_blank">
              Surface failure
            </Link>
          </ListItem>
          <ListItem>
            <Link href="http://web.iitd.ac.in/~jpkhatait/MCL742/slides_boltedconnections.pdf" target="_blank">
              Bolted Connections
            </Link>
          </ListItem>
          <ListItem>
            <Link href="http://web.iitd.ac.in/~jpkhatait/MCL742/slides_rollingbearing.pdf" target="_blank">
              Rolling Element Bearing
            </Link>
          </ListItem>
          <ListItem>
            <Link href="http://web.iitd.ac.in/~jpkhatait/MCL742/slides_journalbearing.pdf" target="_blank">
              Journal Bearing
            </Link>
          </ListItem>
        </List>
        <Typography variant="h6" marginBottom="1rem">
          Part II. Optimization
        </Typography>
        <List>
          <ListItem>
            <Link href="http://web.iitd.ac.in/~achawla/courses.htm" target="_blank">
              Optimization (Link to lecture slides of Prof. A. Chawla --&gt; MEL742)
            </Link>
          </ListItem>
        </List>
        <Typography variant="h6" marginBottom="1rem">
          Problems
        </Typography>
        <List>
          <ListItem>
            <Link href="http://web.iitd.ac.in/~jpkhatait/MCL742/lab1_revision.pdf" target="_blank">
              Lab 01 Revision
            </Link>
          </ListItem>
          <ListItem>
            <Link href="http://web.iitd.ac.in/~jpkhatait/MCL742/lab2.pdf" target="_blank">
              Lab 02 Case study
            </Link>
          </ListItem>
          {/* ... Add other labs */}
        </List>
        <Typography variant="h6" marginBottom="1rem">
          Prerequisite
        </Typography>
        <List>
          <ListItem>
            <Link href="http://web.iitd.ac.in/~jpkhatait/mcl211.html" target="_blank">
              MCL211 Design of Machines
            </Link>
          </ListItem>
        </List>
        <Typography variant="h6" marginBottom="1rem">
          Charts
        </Typography>
        <List>
          <ListItem>
            <Link href="http://web.iitd.ac.in/~jpkhatait/MCL211/Charts_Kt_Kts.pdf" target="_blank">
              Theoretical Stress-Concentration Factors
            </Link>
          </ListItem>
        </List>
        <Typography variant="h6" marginBottom="1rem">
          Catalogues
        </Typography>
        <List>
          <ListItem>
            <Link href="http://web.iitd.ac.in/~jpkhatait/MCL211/skf.pdf" target="_blank">
              SKF General Catalogue
            </Link>
          </ListItem>
        </List>
        <Typography variant="h6" marginBottom="1rem">
          Reading Materials
        </Typography>
        {/* ... Add reading materials */}
        <Typography variant="h6" marginBottom="1rem">
          References
        </Typography>
        {/* ... Add references */}
        <Typography variant="h6" marginBottom="1rem">
          Magazines
        </Typography>
        <Typography variant="h6">
          <Link href="http://web.iitd.ernet.in/~jpkhatait/magazines.html" target="_blank" style={linkStyle}>
            <img src={Mechanical} alt="ASME" style={{ width: '128px' }} />
          </Link>
        </Typography>
      </Paper>
  );
};

export default DesignOptimization;
