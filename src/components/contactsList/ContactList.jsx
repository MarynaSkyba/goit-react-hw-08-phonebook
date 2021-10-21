import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import * as phonebookOperation from '../../redux/phonebook/phonebook-operations';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilteredContacts } from '../../redux/phonebook/phonebook-selectors';
// import { Button, ul, Name, i } from './Contactul.styled';
// import { Button } from 'react-bootstrap';
import { ListGroup, Container, Button, ListGroupItem } from 'react-bootstrap';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  console.log('contacts', contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(phonebookOperation.fetchContactsAction());
  }, [dispatch]);

  const onDeleteContacts = id => dispatch(phonebookOperation.deleteContactAction(id));

  return (
    <Container>
      <h2>Список контактов</h2>
      {contacts.map(({ id, name, number }) => (
        <ListGroup>
          <ListGroupItem key={id}>
            {name} : {number}
            <Button onClick={() => onDeleteContacts(id)}>Удалить</Button>
          </ListGroupItem>
        </ListGroup>
      ))}
    </Container>
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
