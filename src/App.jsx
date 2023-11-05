import { StyledAppContainer } from 'App.styled';
import { Loader } from 'components/Loader';
import Navigation from 'components/Navigation';
import PrivatRoute from 'components/PrivarRoute';
import RestrictedRoute from 'components/RestrictedRoute';
import { Suspense } from 'react';
import { useEffect } from 'react';
import { lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { selectAuthIsLoading } from 'redux/auth.selectors';
import { refreshUser } from 'redux/authReducer';
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectAuthIsLoading);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <StyledAppContainer>
      <Navigation />
      <Suspense fallback={<Loader />}>
        {isRefreshing ? (
          <Loader />
        ) : (
          <Routes>
            <Route
              path="/contacts"
              element={
                <PrivatRoute>
                  <ContactsPage />
                </PrivatRoute>
              }
            />
            <Route
              path="/"
              element={
                <RestrictedRoute>
                  <LoginPage />
                </RestrictedRoute>
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute>
                  <RegisterPage />
                </RestrictedRoute>
              }
            />
          </Routes>
        )}
      </Suspense>
    </StyledAppContainer>
  );
};
