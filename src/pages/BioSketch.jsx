import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { workExperienceData, educationData, awardsData, interestsData } from '../utils/bioSketch';
import { jpk_pic, jpk_pic2, jpkhatait } from '../assets/constant';

const Biosketch = () => {
  const paperStyle = {
    padding: '24px',
    marginBottom: '24px',
    border: '2px solid #336699',
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
    border: '2px solid #336699',
    borderRadius: '5px',
    boxShadow: '2px 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const hrStyle = {
    margin: '2rem 0',
    border: 'none',
    borderTop: '1px solid #ccc',
  };

  return (
    <div>
      <Paper elevation={3} sx={{ ...paperStyle }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Bio-Sketch
        </Typography>
        <hr style={hrStyle} />
        <Typography variant="h6">Work Experience</Typography>
        <ul>
          {workExperienceData.map((experience, index) => (
            <li key={index}>
              {`${experience.period} ${experience.position} `}
              {experience.link ? (
                <a href={experience.link} target="_blank" rel="noopener noreferrer">
                  {experience.department}
                </a>
              ) : (
                experience.department
              )}
            </li>
          ))}
        </ul>
        <hr style={hrStyle} />

        <Typography variant="h6">Education</Typography>
        <ul>
          {educationData.map((edu, index) => (
            <li key={index}>
              {`${edu.degree} (${edu.field}) `}
              {edu.link ? (
                <a href={edu.link} target="_blank" rel="noopener noreferrer">
                  {edu.university}
                </a>
              ) : (
                edu.university
              )}
              {` ${edu.period}`}
            </li>
          ))}
        </ul>
        <hr style={hrStyle} />

        <Typography variant="h6">Awards/Merits</Typography>
        <ul>
          {awardsData.map((award, index) => (
            <li key={index}>{award}</li>
          ))}
        </ul>
        <hr style={hrStyle} />

        <Typography variant="h6">Area of Interest</Typography>
        <ul>
          {interestsData.areaOfInterest.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
        <hr style={hrStyle} />

        <Typography variant="h6">Other Interests</Typography>
        <ul>
          {interestsData.otherInterests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
        <hr style={hrStyle} />

        <Typography variant="h6">Some Moments</Typography>
        <br />

        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <img src={jpk_pic} alt="Recent Pictures 2020-2021" style={imageStyle} />
            <Typography variant="body1">Recent pictures 2020-2021</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <img src={jpk_pic2} alt="Robot" style={imageStyle} />
          </Grid>
          <Grid item xs={12} md={4}>
            <img src={jpkhatait} alt="Sep 05, 2013" style={imageStyle} />
            <Typography variant="body1">Sep 05, 2013</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Biosketch;
