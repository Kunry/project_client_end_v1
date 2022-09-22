import { useState } from 'react';
import { Button, Card, ListGroup, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cocktail = ({ cocktail, deleteCocktail }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={cocktail.strDrinkThumb} />
        <Card.Body className='card-body-custom'>
          <Card.Title>{cocktail.strDrink}</Card.Title>
          <Card.Text>{cocktail.strInstructions}</Card.Text>
          <Card.Text>{cocktail.strAlcoholic}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button onClick={handleShow}>Details</Button>
        </Card.Footer>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{cocktail.strDrink}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{cocktail.strInstructions}</p>
          <ListGroup>
            {cocktail.ingredientAndMeasure.map((ingredientAndMeasure) => (
              <ListGroup.Item key={ingredientAndMeasure.strIngredient}>
                <p>Ingredient: {ingredientAndMeasure.strIngredient}</p>
                <p>Measure: {ingredientAndMeasure.strMeasure}</p>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button as='span' variant='secondary'>
            <Link className='link-react' to={`/cocktail/update/${cocktail._id}`}>Update</Link>
          </Button>
          <Button
            variant='primary'
            onClick={() => deleteCocktail(cocktail._id)}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Cocktail;
