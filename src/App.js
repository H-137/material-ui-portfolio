import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Projects from './Projects';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import ResumeCard from './Resume';

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Projects />}/>
          <Route path="/resume" element={<ResumeCard />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
