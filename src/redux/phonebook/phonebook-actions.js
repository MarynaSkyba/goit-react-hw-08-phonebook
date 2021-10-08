import types from './phonedook-types';
import { v4 as uuidv4 } from 'uuid';

const newContact = (name, number) => ({
  type: types.ADD,
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});

const deleteContacts = contactId => ({
  type: types.DELETE,
  payload: contactId,
});

const changeFilter = value => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

export default { newContact, deleteContacts, changeFilter };
