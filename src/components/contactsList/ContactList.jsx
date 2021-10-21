import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Button, ListGroupItem } from 'react-bootstrap';
import PropTypes from 'prop-types';
import * as phonebookOperation from '../../redux/phonebook/phonebook-operations';
import { getFilteredContacts } from '../../redux/phonebook/phonebook-selectors';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(phonebookOperation.fetchContactsAction());
  }, [dispatch]);

  const onDeleteContacts = id => dispatch(phonebookOperation.deleteContactAction(id));

  if (contacts.length === 0) {
    return <h2 className="home-title">Контактов в списке нет</h2>;
  } else {
    return (
      <Container>
        <h2>Список контактов</h2>
        {contacts.map(({ id, name, number }) => (
          <ListGroupItem key={id}>
            {name} : {number}
            <Button onClick={() => onDeleteContacts(id)}>Удалить</Button>
          </ListGroupItem>
        ))}
      </Container>
    );
  }
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
