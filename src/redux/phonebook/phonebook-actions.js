import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const newContact = createAction('phonebook/add', (name, number) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

const deleteContacts = createAction('phonebook/delete');

const changeFilter = createAction('phonebook/changeFilter');

export default { newContact, deleteContacts, changeFilter };
