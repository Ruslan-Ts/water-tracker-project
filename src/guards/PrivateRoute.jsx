import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';
import { selectIsAuth } from 'redux/auth/selectors';

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(selectIsAuth);
  const location = useLocation();

  return isAuth ? children : <Navigate to="/login" state={location} />;
};

export default PrivateRoute;
