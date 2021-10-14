import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/phonebook/phonebook-selector';
import { changeFilter } from '../../redux/phonebook/phonebook-actions';
import { Label, Input } from './Filter.styled';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = event => dispatch(changeFilter(event.target.value));
  const onBlur = () => dispatch(changeFilter(''));

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
