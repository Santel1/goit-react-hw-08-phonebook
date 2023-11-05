import React from 'react';
import { StyledHeader } from './Navigation.styled';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthIsSignedIn } from 'redux/auth.selectors';
import { logoutUser } from 'redux/authReducer';

const Navigation = () => {
  const isLoggedIn = useSelector(selectAuthIsSignedIn);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logoutUser());
  };

  return (
    <StyledHeader className="header">
      {isLoggedIn ? (
        <nav className="header-nav">
          <div className="nav-link-container">
            <NavLink className="header-link" to="/contacts">
              Contacts
            </NavLink>
          </div>
          <button onClick={handleLogOut} className="logout-btn">
            Logout
          </button>
        </nav>
      ) : (
        <nav className="header-nav authorization">
          <div className="nav-link-container">
            <NavLink className="header-link" to="/register">
              Register
            </NavLink>
            <NavLink className="header-link" to="/login">
              Login
            </NavLink>
          </div>
        </nav>
      )}
    </StyledHeader>
  );
};

export default Navigation;
