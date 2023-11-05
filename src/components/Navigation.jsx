import React from 'react';
import { StyledHeader } from './Navigation.styled';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthIsSignedIn, selectAuthUserData } from 'redux/auth.selectors';
import { logoutUser } from 'redux/authReducer';

const Navigation = () => {
  const isLoggedIn = useSelector(selectAuthIsSignedIn);
  const mailUser = useSelector(selectAuthUserData);
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
          <div className="nav-user-container">
            <span className="user-email">{mailUser.email}</span>
            <button onClick={handleLogOut} className="logout-btn">
              Logout
            </button>
          </div>
        </nav>
      ) : (
        <nav className="header-nav authorization">
          <div className="nav-link-container">
            <NavLink className="header-link" to="/register">
              Register
            </NavLink>
            <NavLink className="header-link" to="/">
              Login
            </NavLink>
          </div>
        </nav>
      )}
    </StyledHeader>
  );
};

export default Navigation;
