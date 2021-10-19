import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Label, Input, Button } from '../components/ContactsForm/ContactForm.styled';

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  //   const onSubmit = (email, password) =>
  //     dispatch(authOperation.logIn({ email, password }));

  const handleChange = e => {
    const { name, value } = e.target;
    name === 'name' ? setEmail(value) : setPassword(value);
    // switch (name) {
    //   case 'name':
    //     setName(value);
    //     break;
    //   case 'number':
    //     setNumber(value);
    //     break;
    //   default:
    //     return;
    // }
  };

  const handleSubmit = e => {
    e.preventDefault();
    // onSubmit(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <Form
    // onSubmit={handleSubmit}
    >
      <Label>
        Почта
        <Input
          type="text"
          name="email"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={email}
          onChange={handleChange}
        />
      </Label>

      <Label>
        Пароль
        <Input
          type="tel"
          name="password"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={password}
          onChange={handleChange}
        />
      </Label>
      <Button type="submit">Вход</Button>
    </Form>
  );
}
