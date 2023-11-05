import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #a0a0a0;
  padding: 20px;
  margin-bottom: 20px;

  .header-link {
    color: white;
    border: 1px solid white;
    border-radius: 10px;
    display: inline-block;
    padding: 10px;
    font-size: 22px;
    text-decoration: none;
    margin-right: 15px;

    transition: all 0.3s;
    &.active {
      border: 1px solid white;
      background-color: #696969;
      color: white;
      outline: none;
    }
  }
  .header-link:hover,
  .header-link:focus {
    border: 1px solid white;
    background-color: #696969;
    color: white;
  }
`;
