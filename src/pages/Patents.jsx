import { Typography, Paper, List, ListItem, ListItemText, Link, Grid } from '@mui/material';
import { patentsApplied, patentsGranted } from '../utils/patents';

const Patents = () => {
  const paperStyle = {
    padding: '16px',
    marginBottom: '16px',
  };

  const hrStyle = {
    margin: '2rem 0',
    border: 'none',
    borderTop: '1px solid #ccc',
  };

  return (
    <Paper elevation={3} sx={{ ...paperStyle }}>
      <Typography variant="h4" fontWeight="bolder">
        Patents
      </Typography>
      <hr style={hrStyle} />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h6">Granted Patents</Typography>
          <List>
            {patentsGranted.map((patent, index) => (
              <ListItem key={index} disablePadding>
                <ListItemText
                  primary={patent.title}
                  secondary={
                    <>
                      Inventors: {patent.inventors} <br />
                      Patent Number: {patent.patentNumber} <br />
                      Date: {patent.date} <br />
                      <Link href={patent.pdfLink.url} target={patent.pdfLink.target}>
                        {patent.pdfLink.linkText}
                      </Link>
                      {patent.latestLink && (
                        <span>
                          {' | '}
                          <Link href={patent.latestLink.url} target={patent.latestLink.target}>
                            {patent.latestLink.linkText}
                          </Link>
                        </span>
                      )}
                    </>
                  }
                  secondaryTypographyProps={{ component: 'div' }}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Applied Patents</Typography>
          <List>
            {patentsApplied.map((patent, index) => (
              <ListItem key={index} disablePadding>
                <ListItemText
                  primary={patent.title}
                  secondary={
                    <>
                      Inventors: {patent.inventors} <br />
                      Application Number: {patent.applicationNumber} <br />
                      Filed Date: {patent.filedDate} <br />
                      Published Date: {patent.publishedDate} <br />
                      {patent.journalNumber && `Journal Number: ${patent.journalNumber} <br />`}
                      {patent.internationalApplicationNumber &&
                        `International Application Number: ${patent.internationalApplicationNumber} <br />`}
                      {patent.internationalFilingDate &&
                        `International Filing Date: ${patent.internationalFilingDate} <br />`}
                      {patent.publicationNumber && `Publication Number: ${patent.publicationNumber} <br />`}
                      {patent.publicationDate && `Publication Date: ${patent.publicationDate} <br />`}
                      {patent.sourceLink && (
                        <Link href={patent.sourceLink.url} target={patent.sourceLink.target}>
                          {patent.sourceLink.linkText}
                        </Link>
                      )}
                      {patent.pdfLink && (
                        <Link href={patent.pdfLink.url} target={patent.pdfLink.target}>
                          {patent.pdfLink.linkText}
                        </Link>
                      )}
                    </>
                  }
                  secondaryTypographyProps={{ component: 'div' }}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Patents;
