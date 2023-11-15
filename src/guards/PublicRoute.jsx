import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';
import { selectIsAuth } from 'redux/auth/selectors';

const PublicRoute = ({ children }) => {
  const isAuth = true;
  const location = useLocation();

  return !isAuth ? children : <Navigate to={location.state ?? '/'} />;
};

export default PublicRoute;
