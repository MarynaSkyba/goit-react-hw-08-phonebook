import { Component } from 'react';
// import {uuid} from 'uuidv4';
import ContactList from './Contacts/ContactList';
import ContactForm from './Contacts/ContactForm';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  // handleNameChange = event =>{
  //   this.setState({name: event.currentTarget.value})
  // }

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm></ContactForm>
        <h2>Contacts</h2>
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
