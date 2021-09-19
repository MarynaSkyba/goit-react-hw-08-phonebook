import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Form, Label, Input, Button } from './ContactForm.styled';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameId = uuidv4();
  const telId = uuidv4();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor={nameId}>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          id={nameId}
          value={name}
          onChange={handleChange}
        />
      </Label>

      <Label htmlFor={telId}>
        Telephone
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          id={telId}
          value={number}
          onChange={handleChange}
        />
      </Label>
      <Button type="submit">Add to contacts</Button>
    </Form>
  );
}

// const useLocalStorage = (key, defaultValue) => {
//   const [state, setState] = useState (()=> {
//     return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
//   });
//   useEffect(()=> {
//     window.localStorage.setItem(key, JSON.stringify(state));

//   })

//   return [state, setState];
// }
