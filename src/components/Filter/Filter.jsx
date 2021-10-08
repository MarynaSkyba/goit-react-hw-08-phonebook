import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/phonebook/phonebook-selector';
import phonebookActions from '../../redux/phonebook/phonebook-actions';
import { Label, Input } from './Filter.styled';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = event => dispatch(phonebookActions.changeFilter(event.target.value));
  const onBlur = () => dispatch(phonebookActions.changeFilter(''));

  return (
    <Label>
      Find contacts by name
      <Input type="text" value={value} onChange={onChange} onBlur={onBlur} />
    </Label>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};
