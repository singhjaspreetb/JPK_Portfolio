import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Home from './pages/Home';
import Grid from '@mui/material/Grid';
import BioSketch from './pages/BioSketch';
import Publications from './pages/Publications';
import Patents from './pages/Patents';

const App = () => {
  return (
    <Router>
      <Header />
      <Grid container>
        <Grid item xs={12} md={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} md={10}>
          <MainContent>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bioSketch" element={<BioSketch />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/patents" element={<Patents />} />
            </Routes>
          </MainContent>
        </Grid>
      </Grid>
    </Router>
  );
};

export default App;
