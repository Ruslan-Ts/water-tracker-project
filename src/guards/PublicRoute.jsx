import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';
import { selectUserToken } from 'redux/auth/selectors';

const PublicRoute = ({ children }) => {
  const token = useSelector(selectUserToken);
  const location = useLocation();

  return !token ? children : <Navigate to={location.state ?? '/'} />;
};

export default PublicRoute;
