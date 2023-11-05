import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/authReducer';
import { StyledRegister } from './RegisterPage.styled';

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(registerUser(data));
    console.log(data);
    reset();
  };

  return (
    <StyledRegister onSubmit={handleSubmit(onSubmit)}>
      <label className="registerLabel">
        <span className="registerSpan">Email</span>
        <input
          className="registerInput"
          {...register('email', { required: true })}
          type="email"
        />
        {errors.email && (
          <span className="registerError">This field is required</span>
        )}
      </label>
      <label className="registerLabel">
        <span className="registerSpan">Name</span>
        <input
          className="registerInput"
          {...register('name', { required: true })}
          type="text"
        />
        {errors.name && (
          <span className="registerError">This field is required</span>
        )}
      </label>
      <label className="registerLabel">
        <span className="registerSpan">Password</span>
        <input
          className="registerInput"
          {...register('password', { required: true, minLength: 8 })}
          type="password"
        />
        {errors.password && (
          <span className="registerError">This field is required</span>
        )}
      </label>

      <button className="registerBtn" type="submit">
        Register
      </button>
    </StyledRegister>
  );
};

export default RegisterPage;
