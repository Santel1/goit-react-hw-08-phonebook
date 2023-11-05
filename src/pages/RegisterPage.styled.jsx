import styled from 'styled-components';

export const StyledRegister = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-direction: column;
  .registerInput {
    padding: 10px;
    border-radius: 10px;
    outline: none;
    border: 1px solid grey;
    width: 300px;
    transition: border 0.3s;
  }

  .registerInput:hover,
  .registerInput:focus {
    border: 1px solid #05da05;
  }

  .registerLabel {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .registerSpan {
    font-size: 20px;
  }
  .registerError {
    color: red;
    font-size: 15px;
  }
  .registerBtn {
    display: block;
    width: 200px;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid grey;
    transition: all 0.3s;
  }
  .registerBtn:hover,
  .registerBtn:focus {
    background-color: #05da05;
    color: white;
  }
`;
