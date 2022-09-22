import { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import CocktailAxios from '../services/cocktailAxios';
import { useNavigate } from 'react-router-dom';

const UpdatePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const cocktailAxios = new CocktailAxios();
  const [cocktail, setCocktail] = useState({});

  useEffect(() => {
    cocktailAxios.getOneCocktailById(id).then((cocktail) => {
      setCocktail(cocktail);
    });
  }, []);

  const updateNewCocktail = (eventHTML) => {
    const { value, name } = eventHTML.target;
    setCocktail({ ...cocktail, [name]: value });
  };

  const updateCocktail = (eventHTML) => {
    eventHTML.preventDefault();
    cocktailAxios.updateCocktail(id, cocktail).then(() => {
      navigate(`/cocktail/${id}`);
    })
  }

  return (
    <Form onSubmit={updateCocktail}>
      <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
        <Form.Label>strDrink</Form.Label>
        <Form.Control
          name='strDrink'
          onChange={updateNewCocktail}
          type='text'
          placeholder='strDrink'
          value={cocktail.strDrink}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
        <Form.Label>strDrinkThumb</Form.Label>
        <Form.Control
          type='Text'
          placeholder='image'
          onChange={updateNewCocktail}
          name='strDrinkThumb'
          value={cocktail.strDrinkThumb}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
        <Form.Label>strInstructions</Form.Label>
        <Form.Control
          as='textarea'
          rows={3}
          name='strInstructions'
          value={cocktail.strInstructions}
          onChange={updateNewCocktail}
        />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Update
      </Button>
    </Form>
  );
};

export default UpdatePage;
