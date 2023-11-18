import { MyDailyNorma } from 'components/Home/MyDailyNorma/MyDailyNorma';
import Calendar from '../components/Home/Calendar/Calendar';

import React from 'react';

const HomePage = () => {
  return (
    <div className="container">
      <MyDailyNorma />
      <Calendar />
    </div>
  );
};

export default HomePage;
