import { Typography, Paper, List, ListItem, ListItemText } from '@mui/material';
import {coursesData} from '../utils/coursesData';

function Courses() {
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

  return (
    <div>
      <Paper elevation={3} sx={paperStyle}>
        <Typography variant="h4" fontWeight="bold">
          Courses
        </Typography>
        <hr style={hrStyle} />

        {coursesData.map(({ semester, courses }, semesterIndex) => (
          <div key={semesterIndex}>
            <Typography variant="body1">
              {semester}
            </Typography>
            <List>
              {courses.map(({ courseCode, courseName, courseDetails, courseSlot }, courseIndex) => (
                <ListItem key={courseIndex}>
                  <ListItemText primary={`${courseCode} - ${courseName}`} secondary={`Credit: ${courseDetails}, Slot: ${courseSlot}`} />
                </ListItem>
              ))}
            </List>
            <hr style={hrStyle} />
          </div>
        ))}
      </Paper>
    </div>
  );
}

export default Courses;
