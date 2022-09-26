import { useState, useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import authAxios from '../services/authAxios';
import { AuthContext } from '../context/auth.context';

const LoginPage = () => {
  const [user, setUser] = useState({});
  const { storeToken, authentication } = useContext(AuthContext);

  const login = (eventHTML) => {
    eventHTML.preventDefault();
    authAxios.login(user).then((response) => {
      storeToken(response.token);
      authentication();
    })
  };

  const updateUser = (eventHTML) => {
    const { value, name } = eventHTML.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <Form onSubmit={login}>
      <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type='text'
          placeholder='pepe@pepe.com'
          onChange={updateUser}
          name='email'
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
        <Form.Label>Contraseña :D</Form.Label>
        <Form.Control type='password' name='password' onChange={updateUser} />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Registro
      </Button>
    </Form>
  );
};

export default LoginPage;
