
import CalendarView from './CalendarView';
import './Calendar.css';
import CalendarHeader from './CalendarHeader';
import CalendarFooter from './CalendarFooter';
import  { useMoodRecorder } from '../../hooks/useMoodRecorder';
import MostFeltMood from './MostFeltMood';
import AnimatedPage from '../../components/AnimatedPage';


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
