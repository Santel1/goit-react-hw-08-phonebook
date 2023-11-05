import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthIsSignedIn } from 'redux/auth.selectors';

const PrivatRoute = ({ children, redirectedTo = '/login' }) => {
  const isLoggedIn = useSelector(selectAuthIsSignedIn);

  return isLoggedIn ? children : <Navigate to={redirectedTo} replace />;
};

export default PrivatRoute;
