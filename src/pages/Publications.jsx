import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
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
    };
    const imageStyle = {
        maxWidth: '100%',
        height: '10rem',
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
            <Paper style={paperStyle}>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={4} style={centerAlignStyle}>
                        <img src={pub1} alt="Robot" style={imageStyle} />
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
                <Typography variant="body1">
                    <ul>
                        {phdThesis.map((thesis, index) => (
                            <li key={index}>
                                {thesis.name}: {thesis.title} ({thesis.status})
                            </li>
                        ))}
                    </ul>
                </Typography>
                <hr style={hrStyle} />

                <Typography variant="h6">Theses</Typography>
                <Typography variant="body1">
                    <ul>
                        {theses.map((thesis, index) => (
                            <li key={index}>
                                {thesis.author}: {thesis.title} ({thesis.degree}, {thesis.university}, {thesis.year})
                                {thesis.doi && (
                                    <a href={`https://doi.org/${thesis.doi}`} target="_blank" rel="noopener noreferrer">
                                        DOI: {thesis.doi}
                                    </a>
                                )}
                                {thesis.pdfLink && (
                                    <a href={thesis.pdfLink} target="_blank" rel="noopener noreferrer">
                                        PDF Link
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </Typography>
                <hr style={hrStyle} />

                <Typography variant="h6">Books and Chapters</Typography>
                <Typography variant="body1">
                    <ul>
                        {booksAndChapters.map((book, index) => (
                            <li key={index}>
                                {book.title} by {book.authors} ({book.year})
                                {book.doi && (
                                    <a href={`https://doi.org/${book.doi}`} target="_blank" rel="noopener noreferrer">
                                        DOI: {book.doi}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </Typography>
                <hr style={hrStyle} />

                <Typography variant="h6">Journal Papers</Typography>
                <Typography variant="body1">
                    <ul>
                        {journalPapers.map((paper, index) => (
                            <li key={index}>
                                {paper.authors.join(', ')}: {paper.title}. {paper.journal}, {paper.date}.
                                {paper.doi && (
                                    <a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer">
                                        DOI: {paper.doi}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </Typography>
                <hr style={hrStyle} />

                <Typography variant="h6">Conference Papers</Typography>
                <Typography variant="body1">
                    <ul>
                        {conferencePapers.map((paper, index) => (
                            <li key={index}>
                                {paper.authors.join(', ')}: {paper.title}. {paper.conference}, {paper.location}, {paper.date}.
                                {paper.doi && (
                                    <a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer">
                                        DOI: {paper.doi}
                                    </a>
                                )}
                                {paper.pages && (
                                    <span> Pages: {paper.pages}</span>
                                )}
                                {paper.pdfLink && (
                                    <a href={paper.pdfLink} target="_blank" rel="noopener noreferrer">
                                        PDF Link
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </Typography>
                <hr style={hrStyle} />

                <Typography variant="h6">Invited Talks</Typography>
                <Typography variant="body1">
                    <ul>
                        {invitedTalks.map((talk, index) => (
                            <li key={index}>
                                {talk.title} ({talk.type}) - {talk.event}, {talk.date}.
                                {talk.link && (
                                    <a href={talk.link} target="_blank" rel="noopener noreferrer">
                                        Link
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </Typography>
                <hr style={hrStyle} />

                <Typography variant="h6">Miscellaneous Technical Reports</Typography>
                <Typography variant="body1">
                    <ul>
                        {miscTechnicalReports.map((report, index) => (
                            <li key={index}>
                                {report.authors.join(', ')}: {report.title}. {report.event}, {report.date}.
                                {report.note}
                                {report.pdfLink && (
                                    <a href={report.pdfLink} target="_blank" rel="noopener noreferrer">
                                        PDF Link
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </Typography>
            </Paper>
        </div>
    );
};

export default Publications;
