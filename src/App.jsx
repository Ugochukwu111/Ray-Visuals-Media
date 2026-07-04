import { Routes, Route } from 'react-router-dom';
import Visuals from './Pages/Visuals';
import TestimonialsPage from './Pages/TestimonialsPage';
import ProjectsPage from './Pages/ProjectsPage';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Visuals />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<ProjectsPage />} />
      </Routes>
    </>
  );
}

export default App;
