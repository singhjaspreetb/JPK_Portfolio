import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

import { researchInterest, currentProjects, completedProjects } from '../utils/projectData';

const Projects = () => {
  const paperStyle = {
    padding: '24px',
    marginBottom: '24px',
    border: '2px solid #336699',
  };

  const hrStyle = {
    margin: '2rem 0',
    border: 'none',
    borderTop: '1px solid #ccc',
  };

  const centerAlignStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  };

  return (
    <div>
      <Paper elevation={3} sx={{ ...paperStyle }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Projects
        </Typography>
        <hr style={hrStyle} />

        <Typography variant="body1">{researchInterest}</Typography>
        <hr style={hrStyle} />

        <Typography variant="h6">Current Projects</Typography>
        <List>
          {currentProjects.map((project, index) => (
            <ListItem key={index} disablePadding>
              <ListItemText primary={project.title} secondary={project.duration} />
            </ListItem>
          ))}
        </List>
        <hr style={hrStyle} />

        <Grid container spacing={2}>
          <Grid item xs={12} md={6} style={centerAlignStyle}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/2SOVUEQ1rc4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Grid>
          <Grid item xs={12} md={6} style={centerAlignStyle}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/x8_f4UqFPc0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Grid>
        </Grid>
        <hr style={hrStyle} />

        <Typography variant="h6">Completed Projects</Typography>
        <List>
          {completedProjects.map((project, index) => (
            <ListItem key={index} disablePadding>
              <ListItemText primary={project.title} secondary={project.duration} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </div>
  );
};

export default Projects;
