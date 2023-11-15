import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';
import { selectIsAuth } from 'redux/auth/selectors';

const PrivateRoute = ({ children }) => {
  const isAuth = true;
  const location = useLocation();
  console.log(123);

  return isAuth ? children : <Navigate to="/login" state={location} replace />;
};

export default PrivateRoute;
