import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/phonebook/phonebook-selectors';
import { changeFilter } from '../../redux/phonebook/phonebook-actions';
// import { Label, Input } from './Filter.styled';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeHandler = event => dispatch(changeFilter(event.target.value));
  const onBlurHandler = () => dispatch(changeFilter(''));

  return (
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={onChangeHandler} onBlur={onBlurHandler} />
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};
