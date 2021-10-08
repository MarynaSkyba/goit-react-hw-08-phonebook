import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const newContact = createAction('phonebook/add', (name, number) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

export const deleteContacts = createAction('phonebook/delete');

export const changeFilter = createAction('phonebook/changeFilter');
