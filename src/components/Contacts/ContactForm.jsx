import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameId = uuidv4();
  telId = uuidv4();

  handleNameChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    const { name, number } = this.state;
    e.preventDefault();
    this.props.onSubmit(name, number);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameId}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            id={this.nameId}
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </label>

        <label htmlFor={this.telId}>
          Telephone
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            id={this.telId}
            value={this.state.number}
            onChange={this.handleNameChange}
          />
        </label>
        <button type="submit">Add to contacts</button>
      </form>
    );
  }
}
export default ContactForm;
