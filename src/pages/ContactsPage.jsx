import Error from 'components/Error';
import { Loader } from 'components/Loader';
import React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {
  selectContacts,
  selectContactsError,
  selectContactsFilter,
  selectContactsIsLoading,
} from 'redux/contacts.selectors';
import {
  addNewContact,
  deleteContact,
  fetchAllContacts,
  setFilter,
} from 'redux/contactsReducer';
import { StyledPhonebook } from './ContactsPage.styled';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);
  const filter = useSelector(selectContactsFilter);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = newContact => {
    if (contacts.some(contact => contact.name === newContact.name)) {
      toast.warning(`${newContact.name} is already in contacts.`);
      return;
    } else if (contacts.some(contact => contact.number === newContact.number)) {
      toast.warning(
        `Contact with phone ${newContact.number} is already in contacts.`
      );
      return;
    }
    if (isNaN(newContact.number)) {
      toast.warning('Phone must contain only numbers.');
      return;
    }
    dispatch(addNewContact(newContact));
    reset();
    toast.success('Contact added to phonebook');
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
    toast.success('Contact is deleted');
  };

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const handleFilterContacts = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };

  const filteredContact =
    contacts !== null &&
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );

  return (
    <StyledPhonebook>
      <h1 className="phonebookTitle">Phonebook</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="phonebookForm">
        <label className="phonebookLabel">
          <span>Name:</span>
          <input
            {...register('name', { required: true })}
            type="text"
            className="phonebookInput"
          />
          {errors.name && <span>This field is required</span>}
        </label>
        <label className="phonebookLabel">
          <span>Number:</span>
          <input
            {...register('number', { required: true })}
            type="text"
            className="phonebookInput"
          />
          {errors.number && <span>This field is required</span>}
        </label>

        <button type="submit" className="phonebookAddBtn">
          Add contact
        </button>
      </form>

      <div>
        <h2 className="phonebookTitle">Contacts</h2>
        <input
          onChange={handleFilterContacts}
          className="phonebookInput"
          type="text"
          name="contactFilter"
          id=""
          placeholder="Seatch contact"
        />
      </div>

      {isLoading && <Loader />}
      {error && <Error>{error}</Error>}

      <ul className="phonebookList">
        {filteredContact &&
          filteredContact.map(({ id, name, number }) => {
            return (
              <li key={id} className="phonebookItem">
                <div>
                  <h3>
                    Name: <br /> {name}
                  </h3>
                  <p>Tel: {number}</p>
                </div>
                <button
                  className="phonebookDeleteBtn"
                  onClick={() => handleDeleteContact(id)}
                >
                  Delete contact
                </button>
              </li>
            );
          })}
      </ul>
    </StyledPhonebook>
  );
};

export default ContactsPage;
