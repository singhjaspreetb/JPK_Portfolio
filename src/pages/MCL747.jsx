import { Typography, Paper, List, ListItem, Link, ListItemText } from '@mui/material';
import { journals, publications, suggestedBooks, magazines } from '../utils/dmpData';

const DPMDesign = () => {
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
            <Paper elevation={3} sx={paperStyle}>
                <Typography variant="h4" fontWeight="bolder" marginBottom="1rem">
                    DESIGN OF PRECISION MACHINES
                </Typography>
                <hr style={hrStyle} />

                <Typography variant="h5" color="#4B0082" fontStyle="italic" marginBottom="1rem">
                    2202-MCL747 Course Information
                </Typography>

                <Typography variant="h6" marginBottom="0.5rem">
                    <Link href="http://web.iitd.ac.in/~jpkhatait" rel="noreferrer" target="_blank" style={linkStyle}>
                        Home
                    </Link>
                </Typography>

                <Typography variant="h6" marginBottom="0.5rem">
                    <Link href="https://moodle.iitd.ac.in/course/view.php?id=15716" rel="noreferrer" target="_blank" style={linkStyle}>
                        Moodle Course Link
                    </Link>
                </Typography>

                <hr style={hrStyle} />

                <Typography variant="h6" marginBottom="1rem">
                    Course Evaluation
                </Typography>

                <hr style={hrStyle} />
                <Typography variant="h6" marginBottom="0.5rem">
                    Exams
                </Typography>
                <List>
                    <ListItem>
                        <Typography variant="body1">Minor 1</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="body1">Minor 2</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant="body1">Major</Typography>
                    </ListItem>
                </List>

                <hr style={hrStyle} />
                <Typography variant="h6" marginBottom="1rem">
                    Labs
                </Typography>
                <List>
                    <ListItem>
                        <Typography variant="body1">Course projects</Typography>
                    </ListItem>
                </List>

                <hr style={hrStyle} />
                <Typography variant="h6" gutterBottom>
                    Lectures
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText primary={<b>Monday & Thursday</b>} />
                    </ListItem>
                <hr style={hrStyle} />
                    <ListItem>
                        <ListItemText primary={<b>Introduction</b>} />
                        <List>
                            <ListItem>
                                <ListItemText primary="Part 1" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Part 2" />
                            </ListItem>
                        </List>
                    </ListItem>
                <hr style={hrStyle} />
                    <ListItem>
                        <ListItemText primary={<b>Controlling Degrees of Freedom</b>} />
                        <List>
                            <ListItem>
                                <ListItemText
                                    primary={
                                        <>
                                            Part 1/6{' '}
                                            <Link href="http://a.impartus.com/ilc/w/v/VGrT" target="_blank">
                                                impartus
                                            </Link>{' '}
                                            <Link href="https://youtu.be/ZxpA7jpLP38" target="_blank">
                                                youtube
                                            </Link>
                                        </>
                                    }
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary={
                                        <>
                                            Part 2/6{' '}
                                            <Link href="http://a.impartus.com/ilc/w/v/VGrG" target="_blank">
                                                impartus
                                            </Link>{' '}
                                            <Link href="https://youtu.be/fZ4FaJjZ8iQ" target="_blank">
                                                youtube
                                            </Link>
                                        </>
                                    }
                                />
                            </ListItem>
                        </List>
                    </ListItem>
                <hr style={hrStyle} />
                    <ListItem>
                        <ListItemText primary={<b>Flexures</b>} />
                        <List>
                            <ListItem>
                                <ListItemText
                                    primary={
                                        <>
                                            Part 1{' '}
                                            <Link href="http://a.impartus.com/ilc/w/v/VGrR" target="_blank">
                                                impartus
                                            </Link>{' '}
                                            <Link href="https://youtu.be/5YRkhvCbVdY" target="_blank">
                                                youtube
                                            </Link>
                                        </>
                                    }
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary={
                                        <>
                                            Part 2{' '}
                                            <Link href="http://a.impartus.com/ilc/w/v/VGrh" target="_blank">
                                                impartus
                                            </Link>{' '}
                                            <Link href="https://youtu.be/tXcjXWzC8ws" target="_blank">
                                                youtube
                                            </Link>
                                        </>
                                    }
                                />
                            </ListItem>
                        </List>
                    </ListItem>
                </List>

                <hr style={hrStyle} />

                <Typography variant="h6" marginBottom="1rem">
                    Reading Materials
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText
                            primary={
                                <a href="docs/dpm/reading/Schellekens1998_dfp.pdf" target="_blank">
                                    Design for Precision: Current Status and Trends
                                </a>
                            }
                            secondary={
                                <ul style={{ listStyleType: 'circle', paddingLeft: '1em' }}>
                                    <li>
                                        <p>
                                            <i>
                                                <b>Must read... </b>
                                            </i>
                                        </p>
                                    </li>
                                </ul>
                            }
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary={
                                <a href="docs/dpm/reading/Hale1999_PE.pdf" target="_blank">
                                    Precision Engineering Principles
                                </a>
                            }
                            secondary={
                                <ul style={{ listStyleType: 'circle', paddingLeft: '1em' }}>
                                    <li>
                                        <p>
                                            <i>Good read... </i>
                                        </p>
                                    </li>
                                </ul>
                            }
                        />
                    </ListItem>
                </List>

                <hr style={hrStyle} />
                <Typography variant="h6" marginBottom="1rem">
                    Suggested Books and Reference Materials
                </Typography>
                <List>
                    {suggestedBooks.map((book, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={book.title} secondary={book.details} />
                        </ListItem>
                    ))}
                </List>

                <hr style={hrStyle} />

                <Typography variant="h6" gutterBottom>
                    Publications (Out of Lab Projects)
                </Typography>
                <List>
                    {publications.map((publication, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemText
                                primary={publication.title}
                                secondaryTypographyProps={{ component: 'div' }}
                                secondary={
                                    <>
                                        {publication.authors && (
                                            <Typography variant="body1" component="span" fontWeight="bold">
                                                {publication.authors}:
                                            </Typography>
                                        )}{' '}
                                        {publication.title}
                                        {publication.conference && (
                                            <>
                                                <br />
                                                {publication.conference}
                                            </>
                                        )}
                                        {publication.volume && (
                                            <>
                                                <br />
                                                {publication.volume}
                                            </>
                                        )}
                                        {publication.doi && (
                                            <Link href={publication.doi} target="_blank" rel="noopener noreferrer">
                                                DOI: {publication.doi}
                                            </Link>
                                        )}
                                        {publication.pdfLink && (
                                            <Link href={publication.pdfLink} target="_blank" rel="noopener noreferrer">
                                                PDF Link
                                            </Link>
                                        )}
                                    </>
                                }
                            />
                        </ListItem>
                    ))}
                </List>

                <hr style={hrStyle} />
                <Typography variant="h6" gutterBottom>
                    Journals
                </Typography>
                <List>
                    {journals.map((journal, index) => (
                        <ListItem key={index}>
                            <Link href={journal.link} target="_blank" rel="noopener noreferrer">
                                <ListItemText primary={journal.title} />
                            </Link>
                            <Typography variant="body2" color="textSecondary">
                                {journal.description}
                            </Typography>
                        </ListItem>
                    ))}
                </List>

                <hr style={hrStyle} />
                <Typography variant="h6" gutterBottom>
                    Magazines
                </Typography>
                <List>
                    <Link href="http://www.dspe.nl/mikroniek/archive" target="_blank" rel="noopener noreferrer">
                        <ListItemText primary="Magazine" />
                    </Link>
                    The magazine of DSPE, containing technical articles, and information about the precision engineering community

                    {magazines.map((magazine, index) => (
                        <ListItem key={index}>
                            <List>
                                {magazine.issues.map((issue, issueIndex) => (
                                    <ListItem key={issueIndex}>
                                        <Link
                                            href={issue.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ListItemText primary={issue.title} />
                                        </Link>
                                    </ListItem>
                                ))}
                            </List>
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </div>
    );
};

export default DPMDesign;
