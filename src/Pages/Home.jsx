import DateSelector from 'components/Home/DateSelector/DateSelector';
import Today from 'components/Home/Today/Today';
import React from 'react';

const Home = () => {
  return (
    <div>
      <Today />
      <DateSelector />
    </div>
  );
};

export default Home;
