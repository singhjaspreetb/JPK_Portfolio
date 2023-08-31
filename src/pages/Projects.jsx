import { Typography, Paper, List, ListItem, ListItemText, Grid } from '@mui/material';
import {researchInterest, currentProjects, completedProjects} from '../utils/projectData';

const Projects = () => {
    const paperStyle = {
        padding: '16px',
        marginBottom: '16px',
        border: '2px solid #336699', 
    };
    const centerAlignStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    };
    const hrStyle = {
        margin: '2rem 0',
        border: 'none',
        borderTop: '1px solid #ccc',
      };
    return (
        <div>
      <Paper elevation={3} sx={{ ...paperStyle }}>
            <Typography variant="h4" fontWeight="bolder">
                Projects
            </Typography>
      <hr style={hrStyle} />

                <Typography variant="body1">
                    {researchInterest}
                </Typography>
                <hr style={hrStyle} />

                <Typography variant="h6">CURRENT PROJECTS</Typography>
                <List>
                    {currentProjects.map((project, index) => (
                        <ListItem key={index}>
                            <ListItemText
                                primary={project.title}
                                secondary={project.duration}
                            />
                        </ListItem>
                    ))}
                </List>
                <hr style={hrStyle} />

                <Grid container spacing={2}>
          <Grid item xs={12} md={6} style={centerAlignStyle}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/2SOVUEQ1rc4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </Grid>
          <Grid item xs={12} md={6} style={centerAlignStyle}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/x8_f4UqFPc0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </Grid>
        </Grid>
        <hr style={hrStyle} />
                
                {/* Completed Projects */}
                <Typography variant="h6">COMPLETED PROJECTS</Typography>
                <List>
                    {completedProjects.map((project, index) => (
                        <ListItem key={index}>
                            <ListItemText
                                primary={project.title}
                                secondary={project.duration}
                            />
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </div>
    );
};

export default Projects;
