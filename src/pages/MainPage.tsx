import { useNavigate } from 'react-router-dom';
import '../css/MainPage.css';
import RadioIcon from '../images/radioIcon.png';
import CalendarIcon from '../images/CalenderIcon.png';
import CassetteIcon from '../images/CassetteIcon.png';
import MainHeader from '../components/MainHeader';
import MainFooter from '../components/MainFooter';
import LightIcon from '../images/LightIcon.png'
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};


const MainPage = () => {
  const navigate = useNavigate();

  const goToRecommendation = () => {
    navigate('/selection');
  };

  const goToCassettebox = () => {
    navigate('/cassettebox');
  };

  const goToCalendar = () => {
    navigate('/calendar');
  };

  return (
    <>
      <MainHeader />
      <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
      >
        <div className="main-page">
          <img
          src={LightIcon}
          alt="전등 아이콘"
          className="light-icon"
          />
          <h1>감정의 방</h1>
          <p>당신의 오늘을 조용히 담아줄게요.</p>
          <div className='buttons'>
            <button onClick={goToRecommendation}>
              <img
              src={RadioIcon}
              alt="라디오 아이콘"
              className="radio-icon"
              />
              <p className="radio-label">라디오</p>
            </button> 
            <button onClick={goToCassettebox}>
              <img
              src={CassetteIcon}
              alt="카세트 박스 아이콘"
              className="cassette-icon"
              />
              <p className="radio-label">카세트 박스</p>
            </button>
            <button onClick={goToCalendar}>
              <img
              src={CalendarIcon}
              alt="달력 아이콘"
              className="calender-icon"
              />
            <p className="radio-label">달력</p>
            </button>
            </div>
          </div>
        </motion.div>
      <MainFooter />
    </>
  );
};

export default MainPage;
