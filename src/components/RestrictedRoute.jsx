import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthIsSignedIn } from 'redux/auth.selectors';

const RestrictedRoute = ({ children, redirectedTo = '/contacts' }) => {
  const isLoggedIn = useSelector(selectAuthIsSignedIn);

  return isLoggedIn ? <Navigate to={redirectedTo} replace /> : children;
};

export default RestrictedRoute;
