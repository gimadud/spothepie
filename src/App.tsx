import { Routes, Route, Outlet } from 'react-router-dom';
import './styles/App.css';
import MainPage from './pages/MainPage/MainPage';
import Radio from './pages/Radio/Radio';
import RecommendationPage from './pages/Radio/RecommendationPage';
import Cassettebox from './pages/Cassettebox/Cassettebox';
import Calendar from './pages/Calendar/Calendar';
import { AnimatePresence } from 'framer-motion';

const Layout = () => (
  <div className="app-container">
    <Outlet />
  </div>
);

function App() {

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="selection" element={<Radio />} />
            <Route path="recommendation" element={<RecommendationPage />} />
            <Route path="cassettebox" element={<Cassettebox />} />
            <Route path="calendar" element={<Calendar />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;