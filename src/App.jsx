import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { AllProjects } from './pages/AllProjects';
import { ScrollToTop } from './components/ScrollToTop';

export const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/allprojects' element={<AllProjects />} />
      </Routes>
    </Router>
  );
};
