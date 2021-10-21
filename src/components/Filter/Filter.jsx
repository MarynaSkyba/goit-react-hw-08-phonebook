import { useSelector, useDispatch } from 'react-redux';
import { Form, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { getFilter } from '../../redux/phonebook/phonebook-selectors';
import { changeFilter } from '../../redux/phonebook/phonebook-actions';
import { getFilteredContacts } from '../../redux/phonebook/phonebook-selectors';

const Filter = () => {
  const contacts = useSelector(getFilteredContacts);
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeHandler = event => dispatch(changeFilter(event.target.value));
  const onBlurHandler = () => dispatch(changeFilter(''));

  if (contacts.length === 0) {
    return <h2></h2>;
  } else {
    return (
      <Container>
        <Form>
          <Form.Group>
            <h2>Найти контакт по имени </h2>
            <Form.Control
              type="text"
              value={value}
              onChange={onChangeHandler}
              onBlur={onBlurHandler}
            />
          </Form.Group>
        </Form>
      </Container>
    );
  }
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};
