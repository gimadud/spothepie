import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Calendar.css';

const Calendar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>달력</h1>
      <button onClick={() => navigate('/')}>메인으로 돌아가기</button>
    </div>
  );
};

export default Calendar;
