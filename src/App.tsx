import { Routes, Route, Link, Outlet } from 'react-router-dom';
import './css/App.css';
import MainPage from './pages/MainPage';
import Home from './pages/Home';
import RecommendationPage from './pages/RecommendationPage';
// import MyPage from './pages/MyPage'; 나중에 구현할 페이지

const Layout = () => (
  <div className="App">
    <header className="App-header">
      <nav>
        <Link to="/">Room</Link>
        {/* <Link to="/my-page">My Page</Link>  미리 연결만해두고 나중에 구현 */ }
      </nav>
      <Outlet />
    </header>
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="selection" element={<Home />} />
        <Route path="recommendation" element={<RecommendationPage />} />
      </Route>
    </Routes>
  );
}

export default App;