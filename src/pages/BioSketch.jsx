import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { workExperienceData, educationData, awardsData, interestsData } from '../utils/bioSketch';
import { jpk_pic, jpk_pic2, jpkhatait } from '../assets/constant';

const Biosketch = () => {
    const paperStyle = {
        padding: '16px',
        marginBottom: '16px',
    };
    const imageStyle = {
        maxWidth: '100%',
        height: '15rem',
        border: '2px solid blue',
        borderRadius: '5px',
        boxShadow: '2px 4px 6px rgba(0, 0, 0, 0.1)',
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
                    Bio-Sketch
                </Typography>
                <hr style={hrStyle} />
                <Typography variant="h6">Work Experience</Typography>
                <Typography variant="body1">
                    <ul>
                        {workExperienceData.map((experience, index) => (
                            <li key={index}>
                                {`${experience.period}  ${experience.position}  `}
                                {experience.link ? <a href={experience.link} target="_blank" rel="noopener noreferrer">{experience.department}</a> : experience.department}
                            </li>
                        ))}
                    </ul>
                </Typography>
                <hr style={hrStyle} />

                <Typography variant="h6">Education</Typography>
                <Typography variant="body1">
                    <ul>
                        {educationData.map((edu, index) => (
                            <li key={index}>
                                {`${edu.degree} (${edu.field}) `}
                                {edu.link ? <a href={edu.link} target="_blank" rel="noopener noreferrer">{edu.university}</a> : edu.university}
                                {`  ${edu.period}`}
                            </li>
                        ))}
                    </ul>
                </Typography>
                <hr style={hrStyle} />

                <Typography variant="h6">Awards/Merits</Typography>
                <Typography variant="body1">
                    <ul>
                        {awardsData.map((award, index) => (
                            <li key={index}>{award}</li>
                        ))}
                    </ul>
                </Typography>
                <hr style={hrStyle} />

                <Typography variant="h6">Area of Interest</Typography>
                <Typography variant="body1">
                    <ul>
                        {interestsData.areaOfInterest.map((interest, index) => (
                            <li key={index}>{interest}</li>
                        ))}
                    </ul>
                </Typography>
                <hr style={hrStyle} />

                <Typography variant="h6">Other Interests</Typography>
                <Typography variant="body1">
                    <ul>
                        {interestsData.otherInterests.map((interest, index) => (
                            <li key={index}>{interest}</li>
                        ))}
                    </ul>
                </Typography>
                <hr style={hrStyle} />

                <Typography variant="h6">Some Moments</Typography>
                <br />

                <Grid container spacing={2}>
                    <Grid item xs={12} md={3} style={centerAlignStyle}>
                        <img src={jpk_pic} alt="Robot" style={imageStyle} />
                        <Typography variant='body1'>Recent pictures 2020-2021</Typography>
                    </Grid>
                    <Grid item xs={12} md={6} style={centerAlignStyle}>
                        <img src={jpk_pic2} alt="Robot" style={imageStyle} />
                    </Grid>
                    <Grid item xs={12} md={3} style={centerAlignStyle}>
                        <img src={jpkhatait} alt="Robot" style={imageStyle} />
                        <Typography variant='body1'>Sep 05, 2013</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default Biosketch;
