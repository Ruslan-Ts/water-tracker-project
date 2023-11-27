import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/root/selectors';

import { WrapperHomePage } from './HomePage.styled';

import Loader from 'components/Loader';
import { MyDailyNorma } from './components/MyDailyNorma/MyDailyNorma';
import Calendar from './components/Calendar/Calendar';

const HomePage = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className="container">
      <WrapperHomePage>
        {isLoading && <Loader />}
        <MyDailyNorma />
        <Calendar />
      </WrapperHomePage>
    </div>
  );
};

export default HomePage;
