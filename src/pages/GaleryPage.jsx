import { useEffect, useState } from 'react';
import CocktailAxios from '../services/cocktailAxios';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {
  Button,
  Col,
  Container,
  Modal,
  Pagination,
  Row,
} from 'react-bootstrap';
import Cocktail from '../components/Cocktail/Cocktail';

const GaleryPage = () => {
  const cocktailAxios = new CocktailAxios();
  const [cocktails, setCocktails] = useState([]);
  const [pagination, setPagination] = useState({
    page: 0,
    maxPage: 0,
  });

  const paginationCocktail = (page) => {
    cocktailAxios
      .getAllCocktails({ page })
      .then((cocktails) => {
        setCocktails(cocktails.results);
        setPagination({ page: cocktails.page, maxPage: cocktails.maxPage });
      });
  };

  const deleteCocktail = (id) => {
    console.log(id);
    cocktailAxios
      .deleteCocktail(id)
      .then(() => {
        paginationCocktail(pagination.page)
      });
  };
  useEffect(() => {
    paginationCocktail(0)
  }, []);


  return (
    <div className='galery'>
      <Container>
        <Row xs={1} md={3} className='g-4'>
          {cocktails.map((cocktail) => (
            <Col key={cocktail._id}>
              <Cocktail cocktail={cocktail} deleteCocktail={deleteCocktail} />
            </Col>
          ))}
        </Row>
      </Container>
      <Pagination>
        <Pagination.First onClick={() => paginationCocktail(0)} />
        <Pagination.Prev onClick={() => paginationCocktail(pagination.page - 1)} />
        <Pagination.Next onClick={() => paginationCocktail(pagination.page + 1)} />
        <Pagination.Last onClick={() => paginationCocktail(pagination.maxPage)} />
      </Pagination>
    </div>
  );
};

export default GaleryPage;
