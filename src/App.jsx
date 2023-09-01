import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Home from './pages/Home';
import Grid from '@mui/material/Grid';
import BioSketch from './pages/BioSketch';
import Publications from './pages/Publications';
import Patents from './pages/Patents';
import Projects from './pages/Projects';
import Students from './pages/Students';
import Courses from './pages/Courses';
import MCP100 from './pages/Mcp100';
import DPMDesign from './pages/MCL747';
import DesignOptimization from './pages/MCL742';
import GIAN from './pages/Gian';
import DPM from './pages/Dpm';

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
              <Route path="/projects" element={<Projects />} />
              <Route path="/students" element={<Students />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/mcp100" element={<MCP100 />} />
              <Route path="/mcl747" element={<DPMDesign />} />
              <Route path="/mcl742" element={<DesignOptimization />} />
              <Route path="/gian" element={<GIAN />} />
              <Route path="/dpm" element={<DPM />} />

            </Routes>
          </MainContent>
        </Grid>
      </Grid>
    </Router>
  );
};

export default App;
