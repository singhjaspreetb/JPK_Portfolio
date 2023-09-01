import { Paper, Typography, Divider, Link, List, ListItem, ListItemText, ListItemIcon, Grid } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import {magazineData} from '../utils/magazine';

function Magazine() {
  const paperStyle = {
    padding: '16px',
    marginBottom: '16px',
    border: '2px solid #336699',
  };
  return (
    <Paper elevation={3} sx={paperStyle}>
      <Typography variant="h4" >
        <b>Magazines on Mechanical Engineering and Precision Machine Design</b>
      </Typography>
      <Divider />

      <Grid container spacing={2}>
        {magazineData.map((magazine, index) => (
          <Grid item xs={12} md={6} key={index}>
            <h3>
              <Link href={magazine.magazineLink} target="_blank" rel="noopener noreferrer">
                {magazine.magazineName}
              </Link>
            </h3>
            {magazine.issues.map((issue, i) => (
              <div key={i}>
                <h4>{issue.year}</h4>
                <List>
                  {issue.months.map((month, j) => (
                    <ListItem key={j}>
                      <ListItemIcon>
                        <CheckCircle color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Link href={month.link} target="_blank" rel="noopener noreferrer">
                            {month.month}
                          </Link>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </div>
            ))}
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}

export default Magazine;
