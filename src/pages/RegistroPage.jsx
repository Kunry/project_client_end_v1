import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import authAxios from '../services/authAxios';

const RegistroPage = () => {
  const [newUser, setNewUser] = useState({});
  

  const createNewUser = (eventHTML) => {
    eventHTML.preventDefault();
    authAxios.registro(newUser).then((response) => {
      console.log(response);
    });
  };

  const updateNewUser = (eventHTML) => {
    const { name, value } = eventHTML.target;
    setNewUser({ ...newUser, [name]: value });
  };

  return (
    <Form onSubmit={createNewUser}>
      <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
        <Form.Label>Username</Form.Label>
        <Form.Control
          name='username'
          onChange={updateNewUser}
          type='text'
          placeholder='Pepe'
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type='text'
          placeholder='pepe@pepe.com'
          onChange={updateNewUser}
          name='email'
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
        <Form.Label>Contraseña :D</Form.Label>
        <Form.Control
          type='password'
          name='password'
          onChange={updateNewUser}
        />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Registro
      </Button>
    </Form>
  );
};

export default RegistroPage;
