import axios from 'axios';

const phonebookInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setToken = token => {
  phonebookInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const requestRegister = async userData => {
  const { data } = await phonebookInstance.post('/users/signup', userData);
  setToken(data.token);
  return data;
};

export const requestLogin = async userData => {
  const { data } = await phonebookInstance.post(`/users/login`, userData);
  setToken(data.token);
  return data;
};

export const requestLoguot = async () => {
  const { data } = await phonebookInstance.post(`/users/logout`);
  return data;
};

export const requestRefreshUser = async () => {
  const { data } = await phonebookInstance.get(`/users/current`);
  return data;
};

export const requestContactsAll = async () => {
  const { data } = await phonebookInstance.get(`/contacts`);
  return data;
};

export const requestContactAdd = async newContact => {
  const { data } = await phonebookInstance.post(`/contacts`, newContact);
  return data;
};

export const requestContactDelete = async contactId => {
  const { data } = await phonebookInstance.delete(`/contacts/${contactId}`);
  return data;
};

//?_______________________________________________________________________
