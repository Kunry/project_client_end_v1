import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import CocktailAxios from '../services/cocktailAxios';
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
  const navigate = useNavigate();
  const cocktailAxios = new CocktailAxios();
  const [newCocktail, setNewCocktail] = useState({});

  const updateNewCocktail = (eventHTML) => {
    const { name, value } = eventHTML.target;
    setNewCocktail({ ...newCocktail,  [name]: value });
  };

  const createNewCocktail = (eventHTML) => {
    eventHTML.preventDefault();
    cocktailAxios.createCocktail(newCocktail).then(() => {
      navigate('/galery');
    })
  }

  
  return (
    <>
      <Form onSubmit={createNewCocktail}>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>strDrink</Form.Label>
          <Form.Control
            name='strDrink'
            onChange={updateNewCocktail}
            type='text'
            placeholder='strDrink'
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>strDrinkThumb</Form.Label>
          <Form.Control
            type='Text'
            placeholder='image'
            onChange={updateNewCocktail}
            name='strDrinkThumb'
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>strInstructions</Form.Label>
          <Form.Control
            as='textarea'
            rows={3}
            name='strInstructions'
            onChange={updateNewCocktail}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Create
        </Button>
      </Form>
    </>
  );
};

export default CreatePage;
