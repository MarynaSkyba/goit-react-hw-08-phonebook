import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import phonebookActions from '../../redux/phonebook/phonebook-actions';

import { Button, List, Name, Item } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContacts }) => (
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

const getFilteredContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
};

const mapStateToProps = ({ phonebook: { contacts, filter } }) => ({
  contacts: getFilteredContacts(contacts, filter),
});

const mapDispatchtoProps = dispatch => ({
  onDeleteContacts: id => dispatch(phonebookActions.deleteContacts(id)),
});

export default connect(mapStateToProps, mapDispatchtoProps)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  onConDeleteContactshange: PropTypes.func,
};
