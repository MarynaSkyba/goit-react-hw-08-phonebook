import { Component } from 'react';

import ContactList from './Contacts/ContactList';
import ContactForm from './Contacts/ContactForm';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  formSubmitHandler = data => {
    this.state.contacts.push(data);
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
