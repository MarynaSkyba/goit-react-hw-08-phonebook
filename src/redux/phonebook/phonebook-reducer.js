import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from './phonebook-actions';
import { fetchContactsAction, addContactAction, deleteContactAction } from './phonebook-operation';
// import * as contactAction from './phonebook-actions';

// const contacts = createReducer([],
//   {
//     [newContact]: (state, { payload }) => {
//       if (state.find(contact => contact.name.toLowerCase() === payload.name.toLowerCase())) {
//         alert(`${payload.name} is already in contacts`);
//         return state;
//       }
//       return [payload, ...state];
//     },
//     [deleteContacts]: (state, { payload }) => state.filter(({ id }) => id !== payload),
//   },
//   );

const entities = createReducer([], {
  [fetchContactsAction.fulfilled]: (_state, action) => action.payload,
  [addContactAction.fulfilled]: (state, { payload }) => [payload, ...state],
  [deleteContactAction.fulfilled]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

const isLoading = createReducer(false, {
  [fetchContactsAction.pending]: () => true,
  [fetchContactsAction.fulfilled]: () => false,
  [fetchContactsAction.rejected]: () => false,
  [deleteContactAction.fulfilled]: () => false,
  [deleteContactAction.pending]: () => true,
  [deleteContactAction.rejected]: () => false,
  [addContactAction.fulfilled]: () => false,
  [addContactAction.pending]: () => true,
  [addContactAction.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContactsAction.rejected]: (_state, action) => action.payload,
  [fetchContactsAction.pending]: () => null,
  [addContactAction.pending]: () => null,
  [addContactAction.rejected]: (_state, action) => action.payload,
  [deleteContactAction.pending]: () => null,
  [deleteContactAction.rejected]: (_state, action) => action.payload,
});

const filter = createReducer('', {
  [changeFilter]: (_state, { payload }) => payload,
});

export default combineReducers({ entities, isLoading, error, filter });

// { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
// { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
// { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
// { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },

// [addContactAction.fulfilled]: (state, { payload }) => {
//   if (state.find(contact => contact.name.toLowerCase() === payload.name.toLowerCase())) {
//     alert(`${payload.name} is already in contacts`);
//     return state;
//   }
//   return [payload, ...state];
// },
