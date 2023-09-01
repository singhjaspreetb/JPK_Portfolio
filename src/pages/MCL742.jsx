import { Typography, Paper, List, ListItem, Link } from '@mui/material';
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
      <hr style={hrStyle} />
      <Typography variant="h5" color="#4B0082" fontStyle="italic" marginBottom="1rem">
        MCP100 Engineering Visualization & Communication
      </Typography>
      <Typography variant="h6" marginBottom="0.5rem">
        <Link href="http://web.iitd.ac.in/~jpkhatait" rel="noreferrer" target="_blank" style={linkStyle}>
          Home
        </Link>
      </Typography>
      <hr style={hrStyle} />  
      <Typography variant="h6" marginBottom="0.5rem">
        Lab
      </Typography>
      <List>
        <ListItem>
          <Typography variant="body1">
            <i>Wed, 11:00 AM - 01:00 PM</i>
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">
            <i>Online</i>
          </Typography>
        </ListItem>
      </List>
      <hr style={hrStyle} />  
      <Typography variant="h6" marginBottom="1rem">
        Course Contents and Lecture Slides
      </Typography>
      <hr style={hrStyle} />  
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
      <hr style={hrStyle} />  
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
      <hr style={hrStyle} />  
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
        <ListItem>
            Lab 03
        </ListItem>
        <ListItem>
            Lab 04
        </ListItem>
        <ListItem>
            Lab 05
        </ListItem>
        <ListItem>
            Lab 06
        </ListItem>
      </List>
      <hr style={hrStyle} />  
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
      <hr style={hrStyle} />  
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
      <hr style={hrStyle} />  
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
      <hr style={hrStyle} />  
      <Typography variant="h6" marginBottom="1rem">
        Reading Materials
      </Typography>
      <Typography variant="h6" marginBottom="1rem">
      <Link href="http://web.iitd.ac.in/~jpkhatait/MCL211/references.pdf" target="_blank">
        References
        </Link>
      </Typography>
      <Typography variant="h6" marginBottom="1rem">
      <Link href="http://web.iitd.ac.in/~jpkhatait/MCL211/skf.pdf" target="_blank">
        Magazines 
        </Link>
         [Check the link for more interesting stuff!!!]
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
