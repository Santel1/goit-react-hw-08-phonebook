import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: #a0a0a0;
  padding: 20px;
  margin-bottom: 20px;
  .header-nav {
    display: flex;
    justify-content: space-between;
    &.authorization {
      justify-content: center;
    }
  }
  .nav-link-container {
    display: flex;
    gap: 20px;
  }
  .nav-user-container {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .user-email {
    color: white;
    background-color: #696969;
    border: 1px solid white;
    border-radius: 10px;
    padding: 10px;
    font-size: 22px;
  }
  .header-link {
    color: white;
    border: 1px solid white;
    border-radius: 10px;
    display: inline-block;
    padding: 10px;
    font-size: 22px;
    text-decoration: none;

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

  .logout-btn {
    display: inline-block;
    color: #ffffff;
    border: 1px solid white;
    border-radius: 10px;
    padding: 10px;
    font-size: 22px;
    text-decoration: none;
    margin-right: 15px;
    background-color: transparent;
    transition: all 0.3s;
  }
  .logout-btn:hover,
  .logout-btn:focus {
    border: 1px solid white;
    background-color: #fc5858;
    color: white;
  }
`;
