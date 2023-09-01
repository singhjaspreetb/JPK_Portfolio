import { Paper, Typography, Divider, Box } from '@mui/material';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import RoomIcon from '@mui/icons-material/Room';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

function Contact() {
  const paperStyle = {
    padding: '16px',
    marginBottom: '16px',
    border: '2px solid #336699',
  };
  return (
    <Paper elevation={3} sx={paperStyle}>
      <Typography variant="h4" gutterBottom>
        <ContactMailIcon /> Contacts
      </Typography>

      <Divider />

      <Box marginTop={2} marginBottom={2}>
            <Typography variant="h6">
              <RoomIcon /> Office:
            </Typography>
            <Typography variant="body2">
              Block II, Room 428 (New Office, moved from Room 354)
            </Typography>
            <Typography variant="body2" marginTop={2}>
              Jitendra Prasad Khatait, PhD
            </Typography>
            <Typography variant="body2">
              Associate Professor
            </Typography>
            <Typography variant="body2">
              Department of Mechanical Engineering
            </Typography>
            <Typography variant="body2">
              Indian Institute of Technology Delhi
            </Typography>
            <Typography variant="body2">
              Hauz Khas, New Delhi 110 016, India
            </Typography>
            <br />
            <Typography variant="body2">
              <EmailIcon /> Email: jpkhatait[AT]mech.iitd.ac.in
            </Typography>
            <Typography variant="body2">
              <PhoneIcon /> Tel: (91)-11-2659-1132
            </Typography>
            <Typography variant="body2">
              <PhoneIcon /> Mobile: (91)-9818068595
            </Typography>
      </Box>

      <Box marginTop={2}>
        <Typography variant="h6">
          <RoomIcon /> Residence:
        </Typography>
        <Typography variant="body2">
          10, G-Street
        </Typography>
        <Typography variant="body2">
          Indian Institute of Technology Delhi
        </Typography>
        <Typography variant="body2">
          Hauz Khas, New Delhi 110 016, India
        </Typography>
      </Box>
    </Paper>
  );
}

export default Contact;
