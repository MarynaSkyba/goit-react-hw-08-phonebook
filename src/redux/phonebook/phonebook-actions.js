import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

// export const newContact = createAction('contacts/add', (name, number) => ({
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// }));

// export const deleteContacts = createAction('contacts/delete');

export const changeFilter = createAction('contacts/changeFilter');

// export const fetchRequest = createAction('contacts/request');
// export const fetchSuccess = createAction('contacts/success');
// export const fetchError = createAction('contacts/error');
