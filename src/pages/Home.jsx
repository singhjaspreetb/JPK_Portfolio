import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleScholarIcon from '@mui/icons-material/Google';
import ResearchGateIcon from '@mui/icons-material/Troubleshoot';
import { phd_aman, aman_setup, jpk, certificate } from '../assets/constant';
import { publicationData } from '../utils/publications';
import { patentsData } from '../utils/patents';

const Home = () => {
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

  const profileInfoStyle = {
    marginBottom: '2rem',
  };

  return (
    <div>
      <Paper elevation={3} sx={{ ...paperStyle }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Freedom and Constraints - Way to Design Systems with Precision and Performance
        </Typography>
        <hr style={hrStyle} />

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" color="textSecondary" textAlign="center">
              Amanpreet Singh (2023). Design of a Robotic Manipulator for Minimally Invasive Surgery.
              PhD thesis, Indian Institute of Technology Delhi, India, 2023.
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <img src={aman_setup} alt="Robot" style={imageStyle} />
          </Grid>
          <Grid item xs={12} md={3}>
            <img src={phd_aman} alt="Robot" style={imageStyle} />
          </Grid>
        </Grid>
        <hr style={hrStyle} />
        <Typography variant="h5">Profile Information</Typography>
        <Grid container spacing={2} style={profileInfoStyle}>
          <Grid item xs={12} md={7}>
            <Typography variant="body1" color="textSecondary">
              Jitendra P. Khatait is currently working as an Associate Professor at the Department of Mechanical Engineering, Indian Institute of Technology Delhi. He has joined the institute as an Assistant Professor in April 2014.
              <br />
              <br />
              He obtained his Ph.D. degree from Faculty of Engineering Technology, University of Twente, Netherlands in 2013. He received his B.E.(Mechanical) from Indian Institute of Technology Roorkee (then University of Roorkee) in 2000 and M.Tech.(Design of Mechanical Equipments) from Indian Institute of Technology Delhi in 2002. He later received M.T.D.(Mechatronics) jointly from National University of Singapore and Eindhoven University of Technology, Netherlands in 2005.
              <br />
              <br />
              He worked as a Design Engineer at ASML, Netherlands (2013-2014) and as a Research Engineer in Singapore Institute of Manufacturing Technology, Singapore (2005-2008).
              <br />
              <br />
              His research interests are, but not limited to, in precision machine design, medical devices, flexible surgical instrument, and medical robotics.
              <br />
              <br />
              His other interests include painting, running, playing sports, etc. He is running a knowledge centre in his village to provide a good learning environment to the village kids.
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <img src={jpk} alt="Robot" style={imageStyle} />
          </Grid>
          <Grid item xs={12} md={2}>
            <img src={certificate} alt="Robot" style={imageStyle} />
          </Grid>
        </Grid>
        <Grid container spacing={2} style={profileInfoStyle}>
          <Grid item xs={12} md={6}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/2SOVUEQ1rc4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </Grid>
          <Grid item xs={12} md={6}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/x8_f4UqFPc0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </Grid>
        </Grid>
        <hr style={hrStyle} />
        <Typography variant="h5" sx={{ marginTop: '1rem' }}>
          LATEST PUBLICATIONS
        </Typography>
        <ul>
          {publicationData.map((publication, index) => (
            <li key={index}>
              <Typography variant="body1" component="p">
                <strong>{publication.title}</strong>
                <br />
                {publication.authors} ({publication.year})
                <br />
                {publication.journal}. {publication.volume}.
                {' [DOI: '}
                <a
                  href={`https://doi.org/${publication.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {publication.doi}
                </a>
                {'] '}
                {publication.description && <strong>[{publication.description}]</strong>}
              </Typography>
            </li>
          ))}
        </ul>

        <hr style={hrStyle} />

        <Typography variant="h5" sx={{ marginTop: '1rem' }}>
          LATEST PATENTS APPLIED
        </Typography>
        <ul>
          {patentsData.map((patent, index) => (
            <li key={index}>
              <Typography variant="body1" component="p">
                <strong>{patent.title}</strong>
                <br />
                {patent.inventors} ({patent.filedDate})
                <br />
                {patent.applicationNo}.
                {patent.affiliations && <>{patent.affiliations}. </>}
                {patent.description && <strong>[{patent.description}]</strong>}
              </Typography>
            </li>
          ))}
        </ul>
        <hr style={hrStyle} />
        <Typography variant="body1">
          To know more about professional activities, please check:
        </Typography>
        <br />
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Link href="http://www.linkedin.com/in/khatait" target="_blank" rel="noopener">
              <LinkedInIcon sx={{ fontSize: 20, marginRight: 1 }} />
              LinkedIn profile
            </Link>
          </Grid>
          <Grid item xs={12} md={4}>
            <Link href="http://scholar.google.com/citations?user=dF7gmc4AAAAJ&amp;hl=en" target="_blank" rel="noopener">
              <GoogleScholarIcon sx={{ fontSize: 20, marginRight: 1 }} />
              Google scholar profile
            </Link>
          </Grid>
          <Grid item xs={12} md={4}>
            <Link href="https://www.researchgate.net/profile/Jitendra_Khatait" target="_blank" rel="noopener">
              <ResearchGateIcon sx={{ fontSize: 20, marginRight: 1 }} />
              ResearchGate profile
            </Link>
          </Grid>
        </Grid>
        <br />
      </Paper>
    </div>
  );
};

export default Home;
