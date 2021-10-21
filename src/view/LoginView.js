import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/auth-operations';
import { Form, Col, Row, Button, Container } from 'react-bootstrap';

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (email, password) => dispatch(logIn({ email, password }));

  const handleChange = e => {
    const { name, value } = e.target;
    name === 'email' ? setEmail(value) : setPassword(value);
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
    onSubmit(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Row>
            <Col>
              <Form.Label>Почта</Form.Label>
              <Form.Control
                type="email"
                name="email"
                // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                // title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                value={email}
                onChange={handleChange}
              />
            </Col>
          </Row>

          <Form.Label>Пароль</Form.Label>
          <Row>
            <Col>
              <Form.Control
                type="password"
                name="password"
                // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                // title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
                value={password}
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button type="submit">Вход</Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </Container>
  );
}
