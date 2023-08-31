import { Typography, Paper, List, ListItem, ListItemText} from '@mui/material';
import { coursesData } from '../utils/coursesData';

const Courses = () => {
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
      <Paper elevation={3} sx={{ ...paperStyle }}>
        <Typography variant="h4" fontWeight="bolder">
          Courses
        </Typography>
        <hr style={hrStyle} />

        {coursesData.map((semester, semesterIndex) => (
          <div key={semesterIndex}>
            <Typography variant="body1">
              {semester.Year}, {semester.Semester}
            </Typography>
            <List>
              {semester.CoursesList.map((course, courseIndex) => (
                <ListItem key={courseIndex}>
                  <ListItemText primary={course.CourseCode} secondary={course.CourseTitle} />
                </ListItem>
              ))}
            </List>
            <hr style={hrStyle} />
          </div>
        ))}
      </Paper>
    </div>
  );
};

export default Courses;
