import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/phonebook/phonebook-selectors';
import { changeFilter } from '../../redux/phonebook/phonebook-actions';
import { Label, Input } from './Filter.styled';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeHandler = event => dispatch(changeFilter(event.target.value));
  const onBlurHandler = () => dispatch(changeFilter(''));

  return (
    <Label>
      Find contacts by name
      <Input type="text" value={value} onChange={onChangeHandler} onBlur={onBlurHandler} />
    </Label>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};
