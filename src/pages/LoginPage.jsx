import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/authReducer';
import { StyledLogin } from './LoginPage.styled';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(loginUser(data));
    console.log(data);
    reset();
  };

  return (
    <StyledLogin onSubmit={handleSubmit(onSubmit)}>
      <label className="loginLabel">
        <span className="loginSpan">Email</span>
        <input
          className="loginInput"
          {...register('email', { required: true })}
          type="email"
        />
        {errors.email && (
          <span className="loginError">This field is required</span>
        )}
      </label>
      <label className="loginLabel">
        <span className="loginSpan">Password</span>
        <input
          className="loginInput"
          {...register('password', { required: true, minLength: 8 })}
          type="password"
        />
        {errors.password && (
          <span className="loginError">This field is required</span>
        )}
      </label>

      <button className="loginBtn" type="submit">
        Login
      </button>
    </StyledLogin>
  );
};

export default LoginPage;
