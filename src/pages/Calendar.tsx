
import CalendarView from '../components/CalendarView';
import '../css/Calendar.css';
import CalendarHeader from '../components/CalenderHeader';
import CalendarFooter from '../components/CalenderFooter';
import  { useMoodRecorder } from '../hooks/useMoodRecorder';
import MostFeltMood from '../components/MostFeltMood';
import AnimatedPage from '../components/AnimatedPage';


const CalendarPage = () => {
  const { getMostFeltMoodThisMonth } = useMoodRecorder();
  const mostFeltMood = getMostFeltMoodThisMonth();

  return (
    <>
    <CalendarHeader />
    <AnimatedPage>
    <div className="calendar-content">
      {mostFeltMood && <MostFeltMood mood={mostFeltMood} />}
      <CalendarView />
    </div>
    </AnimatedPage>
    <CalendarFooter />
    </>
  );
};

export default CalendarPage;
