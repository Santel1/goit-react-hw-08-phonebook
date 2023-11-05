import styled from 'styled-components';

export const StyledLogin = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-direction: column;
  .loginInput {
    padding: 10px;
    border-radius: 10px;
    outline: none;
    border: 1px solid grey;
    width: 300px;
    transition: border 0.3s;
  }

  .loginInput:hover,
  .loginInput:focus {
    border: 1px solid #05da05;
  }

  .loginLabel {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .loginSpan {
    font-size: 20px;
  }
  .loginError {
    color: red;
    font-size: 15px;
  }
  .loginBtn {
    display: block;
    width: 200px;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid grey;
    transition: all 0.3s;
  }
  .loginBtn:hover,
  .loginBtn:focus {
    background-color: #05da05;
    color: white;
  }
`;
