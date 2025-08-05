
import CalendarView from '../components/CalendarView';
import '../css/Calendar.css';
import CalendarHeader from '../components/CalenderHeader';
import CalendarFooter from '../components/CalenderFooter';

const CalendarPage = () => {


  return (
    <>
    <CalendarHeader />
    <CalendarView />
    <CalendarFooter />
    </>
  );
};

export default CalendarPage;
