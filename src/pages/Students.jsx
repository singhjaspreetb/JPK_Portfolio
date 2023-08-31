import { Typography, Paper, Grid } from '@mui/material';
import { PhDStudents, MasterStudents, BTechStudents } from '../utils/studentsData';
import { List, ListItem, ListItemText, Link } from '@mui/material';
import { aman_setup, phd_aman } from '../assets/constant';

const Students = () => {
    const imageStyle = {
        border: '1px solid #224499',
        height: '200px',
        float: 'right',
        margin: '0 0 1rem 1rem',
    };
    const hrStyle = {
        margin: '2rem 0',
        border: 'none',
        borderTop: '1px solid #ccc',
    };

    return (
        <Paper sx={{ padding: '1rem', marginBottom: '1rem' }}>

            <Typography variant="h4" fontWeight="bolder">
                Amanpreet Singh (2023). <em>Design of a Robotic Manipulator for Minimally Invasive Surgery.</em> PhD thesis,
                Indian Institute of Technology Delhi, India, 2023.
            </Typography>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <img src={phd_aman} alt="Aman's PhD" style={imageStyle} />
                </Grid>
                <Grid item xs={2}>
                    <img src={aman_setup} alt="Aman's Setup" style={imageStyle} />
                </Grid>
                <Grid item xs={4}>
                </Grid>
            </Grid>
            <hr style={hrStyle} />
            <Typography variant="h4" fontWeight="bolder">
                PhD Students
            </Typography>

            <hr style={hrStyle} />
            {PhDStudents.map((student, studentIndex) => (
                <Paper key={studentIndex} sx={{ padding: '1rem', marginBottom: '1rem' }}>
                    <Grid container spacing={1}>
                    <Grid item xs={6}>

                    <Typography variant="h6" fontWeight="bold">
                        {student.Name} ({student.Years})
                    </Typography>
                    <Typography variant="subtitle1" fontStyle="italic">
                        {student.ResearchTopic}
                    </Typography>
                    <Typography variant="body1">
                        {student.Degree} {student.Years}.
                    </Typography>
                    <Typography variant="body2">
                                {student.Status}
                            </Typography>
                    </Grid>
                        <Grid item xs={6}>
                            <img src={student.Image} alt={`${student.Name}'s Image`} style={imageStyle} />
                        </Grid>
                        
                    </Grid>
                </Paper>
            ))}
            <hr style={hrStyle} />
            <Typography variant="h4" fontWeight="bolder">
                Master Students (MTech/MSR)
            </Typography>
            <hr style={hrStyle} />
            {MasterStudents.map((student, studentIndex) => (
                <Paper key={studentIndex} sx={{ padding: '1rem', marginBottom: '1rem' }}>
                    <Typography variant="h6" fontWeight="bold">
                        {student.Name} ({student.Years})
                    </Typography>
                    <Typography variant="subtitle1" fontStyle="italic">
                        {student.ResearchTopic}
                    </Typography>
                    <Typography variant="body1">
                        {student.Degree}, {student.Years}
                    </Typography>
                    <List>
                        <ListItem disablePadding>
                            <ListItemText
                                primary=""
                                secondaryTypographyProps={{ component: 'div' }}
                                secondary={
                                    <>
                                        <Typography variant="body1" component="span" fontWeight="bold">
                                            {student.Name}:
                                        </Typography>{" "}
                                        {student.Supervisor}<br/>
                                        {student.JournalArticle}<br/> {student.Award}<br/> {student.ConferencePaper}<br/> {student.BookChapter}
                                        <br/>
                                        {student.DOI && (
                                            <Link href={`https://doi.org/${student.DOI}`} target="_blank" rel="noopener noreferrer">
                                                DOI: {student.DOI}
                                            </Link>
                                        )}
                                        {student.DOI2 && (
                                            <Link href={`https://doi.org/${student.DOI2}`} target="_blank" rel="noopener noreferrer">
                                                {' | '}DOI2: {student.DOI2}
                                            </Link>
                                        )}
                                        {student.PDFLink && (
                                            <Link href={student.PDFLink} target="_blank" rel="noopener noreferrer">
                                                PDF Link
                                            </Link>
                                        )}
                                    </>
                                }
                            />
                        </ListItem>
                    </List>
                </Paper>
            ))}
            <hr style={hrStyle} />

            <Typography variant="h4" fontWeight="bolder">
                BTech Students
            </Typography>
            <hr style={hrStyle} />
            {BTechStudents.map((student, studentIndex) => (
                <Paper key={studentIndex} sx={{ padding: '1rem', marginBottom: '1rem' }}>
                    <Typography variant="h6" fontWeight="bold">
                        {student.Name} ({student.Year})
                    </Typography>
                    <Typography variant="subtitle1" fontStyle="italic">
                        {student.Title}
                    </Typography>
                    <Typography variant="body1">
                        {student.Programme} {student.Year}
                    </Typography>
                    <List>
                        <ListItem disablePadding>
                            <ListItemText
                                primary=""
                                secondaryTypographyProps={{ component: 'div' }}
                                secondary={
                                    <>
                                        <Typography variant="body1" component="span" fontWeight="bold">
                                            {student.Name}:
                                        </Typography>{" "}
                                        {student.Title}
                                        {student.Remarks}<br/>
                                        {student.DOI && (
                                            <Link href={`https://doi.org/${student.DOI}`} target="_blank" rel="noopener noreferrer">
                                                DOI: {student.DOI}
                                            </Link>
                                        )}
                                        {student.DOI2 && (
                                            <Link href={`https://doi.org/${student.DOI2}`} target="_blank" rel="noopener noreferrer">
                                                {' | '}DOI2: {student.DOI2}
                                            </Link>
                                        )}
                                    </>
                                }
                            />
                        </ListItem>
                    </List>
                </Paper>
            ))}
        </Paper>
    );
};

export default Students;
