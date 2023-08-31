import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { List, ListItem, ListItemText, Link } from '@mui/material';
import {
    phdThesis,
    theses,
    booksAndChapters,
    journalPapers,
    conferencePapers,
    invitedTalks,
    miscTechnicalReports
} from '../utils/publications';
import { Grid } from '@mui/material';
import { pub1, pub2, pub3, pub4 } from "../assets/constant";

const Publications = () => {
    const paperStyle = {
        padding: '16px',
        marginBottom: '16px',
        border: '2px solid #336699', 
    };

    const imageStyle = {
        maxWidth: '100%',
        height: '15rem',
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
        <Paper elevation={3} sx={{ ...paperStyle }}>
            <Grid container spacing={1}>
                <Grid item xs={12} md={4} style={centerAlignStyle}>
                    <img src={pub1} alt="Robot" style={imageStyle} />
                    <Typography variant='body1'>Recent pictures 2020-2021</Typography>
                </Grid>
                <Grid item xs={12} md={4} style={centerAlignStyle}>
                    <img src={pub2} alt="Robot" style={imageStyle} />
                </Grid>
                <Grid item xs={12} md={2} style={centerAlignStyle}>
                    <img src={pub3} alt="Robot" style={imageStyle} />
                </Grid>
                <Grid item xs={12} md={2} style={centerAlignStyle}>
                    <img src={pub4} alt="Robot" style={imageStyle} />
                </Grid>
            </Grid>
            <hr style={hrStyle} />
            <Typography variant="h4" fontWeight="bolder">
                Publications
            </Typography>
            <hr style={hrStyle} />

            <Typography variant="h6">Ph.D. Thesis</Typography>
            <List>
                {phdThesis.map((thesis, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemText
                            primary={thesis.title}
                            secondaryTypographyProps={{ component: 'div' }}
                            secondary={
                                <>
                                    <Typography variant="body1" component="span" fontWeight="bold">
                                        {thesis.name}:
                                    </Typography>{" "}
                                    {thesis.title} ({thesis.status})
                                </>
                            }
                        />
                    </ListItem>
                ))}
            </List>
            <hr style={hrStyle} />

            <Typography variant="h6">Theses</Typography>
            <List>
                {theses.map((thesis, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemText
                            primary={thesis.title}
                            secondaryTypographyProps={{ component: 'div' }}
                            secondary={
                                <>
                                    <Typography variant="body1" component="span" fontWeight="bold">
                                        {thesis.author}:
                                    </Typography>{" "}
                                    {thesis.title} ({thesis.degree}, {thesis.university}, {thesis.year})
                                    {thesis.doi && (
                                        <Link href={`https://doi.org/${thesis.doi}`} target="_blank" rel="noopener noreferrer">
                                            DOI: {thesis.doi}
                                        </Link>
                                    )}
                                    {thesis.pdfLink && (
                                        <Link href={thesis.pdfLink} target="_blank" rel="noopener noreferrer">
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

            <Typography variant="h6">Books and Chapters</Typography>
            <List>
                {booksAndChapters.map((book, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemText
                            primary={book.title}
                            secondaryTypographyProps={{ component: 'div' }}
                            secondary={
                                <>
                                    <Typography variant="body1" component="span" fontWeight="bold">
                                        {book.authors}:
                                    </Typography>{" "}
                                    {book.title} ({book.year})
                                    {book.doi && (
                                        <Link href={`https://doi.org/${book.doi}`} target="_blank" rel="noopener noreferrer">
                                            DOI: {book.doi}
                                        </Link>
                                    )}
                                </>
                            }
                        />
                    </ListItem>
                ))}
            </List>
            <hr style={hrStyle} />

            <Typography variant="h6">Journal Papers</Typography>
            <List>
                {journalPapers.map((paper, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemText
                            primary={paper.title}
                            secondaryTypographyProps={{ component: 'div' }}
                            secondary={
                                <>
                                    <Typography variant="body1" component="span" fontWeight="bold">
                                        {paper.authors.join(', ')}:
                                    </Typography>{" "}
                                    {paper.title}. {paper.journal}, {paper.date}.
                                    {paper.doi && (
                                        <Link href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer">
                                            DOI: {paper.doi}
                                        </Link>
                                    )}
                                </>
                            }
                        />
                    </ListItem>
                ))}
            </List>
            <hr style={hrStyle} />

            <Typography variant="h6">Conference Papers</Typography>
            <List>
                {conferencePapers.map((paper, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemText
                            primary={paper.title}
                            secondaryTypographyProps={{ component: 'div' }}
                            secondary={
                                <>
                                    <Typography variant="body1" component="span" fontWeight="bold">
                                        {paper.authors.join(', ')}:
                                    </Typography>{" "}
                                    {paper.title}. {paper.conference}, {paper.location}, {paper.date}.
                                    {paper.doi && (
                                        <Link href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer">
                                            DOI: {paper.doi}
                                        </Link>
                                    )}
                                    {paper.pages && (
                                        <span> Pages: {paper.pages}</span>
                                    )}
                                    {paper.pdfLink && (
                                        <Link href={paper.pdfLink} target="_blank" rel="noopener noreferrer">
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

            <Typography variant="h6">Invited Talks</Typography>
            <List>
                {invitedTalks.map((talk, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemText
                            primary={talk.title}
                            secondaryTypographyProps={{ component: 'div' }}
                            secondary={
                                <>
                                    <Typography variant="body1" component="span" fontWeight="bold">
                                        {talk.type}:
                                    </Typography>{" "}
                                    {talk.title} - {talk.event}, {talk.date}.
                                    {talk.link && (
                                        <Link href={talk.link} target="_blank" rel="noopener noreferrer">
                                            Link
                                        </Link>
                                    )}
                                </>
                            }
                        />
                    </ListItem>
                ))}
            </List>
            <hr style={hrStyle} />

            <Typography variant="h6">Miscellaneous Technical Reports</Typography>
            <List>
                {miscTechnicalReports.map((report, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemText
                            primary={report.title}
                            secondaryTypographyProps={{ component: 'div' }}
                            secondary={
                                <>
                                    <Typography variant="body1" component="span" fontWeight="bold">
                                        {report.authors.join(', ')}:
                                    </Typography>{" "}
                                    {report.title}. {report.event}, {report.date}.
                                    {report.note}
                                    {report.pdfLink && (
                                        <Link href={report.pdfLink} target="_blank" rel="noopener noreferrer">
                                            PDF Link
                                        </Link>
                                    )}
                                </>
                            }
                        />
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
};

export default Publications;
