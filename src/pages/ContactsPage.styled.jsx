import styled from 'styled-components';

export const StyledPhonebook = styled.div`
  padding: 30px;
  .phonebookTitle {
  }
  .phonebookForm {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 20px;
  }
  .phonebookInput {
    padding: 10px;
    border-radius: 10px;
    outline: none;
    border: 1px solid grey;
    width: 300px;
    transition: border 0.3s;
  }

  .phonebookInput:hover,
  .phonebookInput:focus {
    border: 1px solid #05da05;
  }

  .phonebookAddBtn {
    display: block;
    width: 200px;
    height: 45px;
    align-items: flex-end;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid grey;
    transition: all 0.3s;
  }

  .phonebookAddBtn:hover,
  .phonebookAddBtn:focus {
    background-color: #05da05;
    color: white;
  }

  .phonebookLabel {
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 20px;
  }
  .phonebookList {
    padding: 0 30px;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 20px;
  }

  .phonebookItem {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 20px;
    border: 1px solid grey;
    border-radius: 10px;
  }
  .phonebookDeleteBtn {
    width: 200px;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid grey;
    transition: all 0.3s;
  }

  .phonebookDeleteBtn:hover,
  .phonebookDeleteBtn:focus {
    background-color: red;
    color: white;
  }

  .phonebook {
  }
`;
