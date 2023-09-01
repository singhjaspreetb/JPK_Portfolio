import { Paper, Typography, Divider, Grid, Box } from '@mui/material';

function EngMarvels() {
  const paperStyle = {
    padding: '16px',
    marginBottom: '16px',
    border: '2px solid #336699',
  };
  return (
    <Paper elevation={3} sx={paperStyle}>
      <Typography variant="h4" gutterBottom>
        <b>Engineering Marvels</b>
      </Typography>
      <Divider />

      <Box marginTop={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" >
              <b>How NASA’s Webb Telescope Will Transform Our Place in the Universe</b>
            </Typography>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/shPwW11MEHg"
              title="How NASA’s Webb Telescope Will Transform Our Place in the Universe"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" >
              <b>T-Flex: Compliant Flexure-based Large Range Precision Hexapod</b>
            </Typography>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/tenxq7N5q3k"
              title="T-Flex: Compliant Flexure-based Large Range Precision Hexapod"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}

export default EngMarvels;
