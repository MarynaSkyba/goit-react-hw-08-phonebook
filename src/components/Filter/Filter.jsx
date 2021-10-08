import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import phonebookActions from '../../redux/phonebook/phonebook-actions';

import { Label, Input } from './Filter.styled';

const Filter = ({ value, onChange, onBlur }) => {
  return (
    <Label>
      Find contacts by name
      <Input type="text" value={value} onChange={onChange} onBlur={onBlur} />
    </Label>
  );
};

const mapStateToProps = state => ({
  value: state.phonebook.filter,
});

const mapDispatchtoProps = dispatch => ({
  onChange: event => dispatch(phonebookActions.changeFilter(event.target.value)),
  onBlur: () => dispatch(phonebookActions.changeFilter('')),
});

export default connect(mapStateToProps, mapDispatchtoProps)(Filter);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
