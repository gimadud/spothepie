
import CalendarView from '../components/CalendarView';
import '../css/Calendar.css';
import CalendarHeader from '../components/CalenderHeader';
import CalendarFooter from '../components/CalenderFooter';
import  { useMoodRecorder } from '../hooks/useMoodRecorder';
import MostFeltMood from '../components/MostFeltMood';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};


const CalendarPage = () => {
  const { getMostFeltMoodThisMonth } = useMoodRecorder();
  const mostFeltMood = getMostFeltMoodThisMonth();

  return (
    <>
    <CalendarHeader />
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
    <div className="calendar-content">
      {mostFeltMood && <MostFeltMood mood={mostFeltMood} />}
      <CalendarView />
    </div>
    </motion.div>
    <CalendarFooter />
    </>
  );
};

export default CalendarPage;
