import { Paper, Typography, Grid} from '@mui/material';

function VideoEmbed({ src }) {
  return (
    <iframe
      width="100%"
      height="315"
      src={src}
      frameBorder="0"
      allowFullScreen=""
      title="Embedded Video"
    ></iframe>
  );
}

function Reference({ title, content, link }) {
  return (
    <div>
      <Typography variant="h6">
        <b>{title}</b>
      </Typography>
      <Typography variant="body2">{content}</Typography>
      <Typography variant="body2">
        [<a href={link} target="_blank" rel="noopener noreferrer">
          PDF
        </a>]
      </Typography>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <Grid item xs={12}>
      <Typography variant="h4" gutterBottom>
        <b>{title}</b>
      </Typography>
      <hr style={hrStyle} />
      {children}
    </Grid>
  );
}

const hrStyle = {
  margin: '2rem 0',
  border: 'none',
  borderTop: '1px solid #ccc',
};
function InterestingLinks() {
  const paperStyle = {
    padding: '16px',
    marginBottom: '16px',
    border: '2px solid #336699',
  };
  return (
    <Paper elevation={3} sx={paperStyle}>
      <Grid container spacing={2}>
        <Section title="Medical Robotics">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Reference
                title="References on Surgical Robotics"
                content="Bedem, van den, L. J. M. (2010). Realization of a demonstrator slave for robotic minimally invasive surgery. PhD thesis, Eindhoven: Technische Universiteit Eindhoven, Netherlands. DOI: 10.6100/IR684835"
                link="https://pure.tue.nl/ws/files/3102042/684835.pdf"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1">
                <i>da Vinci Xi</i>
              </Typography>
              <VideoEmbed src="//www.youtube.com/embed/3356900549001" />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="body1">
                <i>da Vinci Surgical System</i>
              </Typography>
              <VideoEmbed src="//www.youtube.com/embed/pXQGxrt0gYw" />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1">
                <i>TeleFLEX - Telemanipulation of Flexible Endoscopic System</i>
              </Typography>
              <VideoEmbed src="//www.youtube.com/embed/tnzAnL6IvLU" />
            </Grid>
          </Grid>
          <hr style={hrStyle} />

        </Section>
       

        <Section title="Semiconductor Manufacturing">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="body1">
                <i>Semiconductor Manufacturing</i>
              </Typography>
              <VideoEmbed src="//www.youtube.com/embed/ShYWUlJ2FZs" />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1">
                <i>Chips of the Future</i>
              </Typography>
              <VideoEmbed src="//www.youtube.com/embed/qBvnkUdFAbk" />
            </Grid>
          </Grid>
        </Section>
      </Grid>
    </Paper>
  );
}

export default InterestingLinks;
