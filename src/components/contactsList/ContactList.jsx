import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import * as phonebookOperation from '../../redux/phonebook/phonebook-operations';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from '../../redux/phonebook/phonebook-selectors';
import { Button, List, Name, Item } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(phonebookOperation.fetchContactsAction());
  }, [dispatch]);

  const onDeleteContacts = id => dispatch(phonebookOperation.deleteContactAction(id));

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <Name>
            {name} : {number}
          </Name>
          <Button onClick={() => onDeleteContacts(id)}>Delete</Button>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  onDeleteContacts: PropTypes.func,
};
