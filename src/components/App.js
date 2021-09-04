import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactList from './Contacts/ContactList';
import ContactForm from './Contacts/ContactForm';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  formSubmitHandler = (name, number) => {
    const newContact = {
      id: uuidv4(),
      name,
      number,
    };
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.formSubmitHandler}></ContactForm>
        <h2>Contacts</h2>
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
