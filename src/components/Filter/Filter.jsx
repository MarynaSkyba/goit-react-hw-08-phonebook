import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/phonebook/phonebook-selectors';
import { changeFilter } from '../../redux/phonebook/phonebook-actions';
import { Form, Col, Row, Button, Container } from 'react-bootstrap';

// import { Label, Input } from './Filter.styled';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeHandler = event => dispatch(changeFilter(event.target.value));
  const onBlurHandler = () => dispatch(changeFilter(''));

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
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};
