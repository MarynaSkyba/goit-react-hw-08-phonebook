import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactAPI from '../../service/contacts-api';

export const fetchContactsAction = createAsyncThunk('contacts/fetchContacts', async () => {
  return await contactAPI.fetchContacts();
});

export const addContactAction = createAsyncThunk('contacts/addContacts', async contact => {
  return await contactAPI.addContacts(contact);
});

export const deleteContactAction = createAsyncThunk('contacts/deleteContacts', async id => {
  await contactAPI.deleteContacts(id);
  return id;
});

//это я оставила для себя какой есть еще вариант

// export const fetchContactsAction =() => async dispatch => {
//     dispatch(contactAction.fetchRequest());
//     try {
//         const contacts = await contactAPI.fetchContacts();
//     dispatch(contactAction.fetchSuccess(contacts));
//     }
//     catch(error){
//         dispatch(contactAction.fetchError(error));
//     }
// };
