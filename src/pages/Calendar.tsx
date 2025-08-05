
import CalendarView from '../components/CalendarView';
import '../css/Calendar.css';
import CalendarHeader from '../components/CalenderHeader';
import CalendarFooter from '../components/CalenderFooter';
import MostFeltMood from '../components/MostFeltMood';

const CalendarPage = () => {


  return (
    <>
    <CalendarHeader />
    <div className="calendar-page-container">
      <MostFeltMood />
      <CalendarView />
    </div>
    <CalendarFooter />
    </>
  );
};

export default CalendarPage;
