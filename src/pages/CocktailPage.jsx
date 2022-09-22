import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cocktail from '../components/Cocktail/Cocktail';
import CocktailAxios from '../services/cocktailAxios';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const CocktailPage = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState();
  const navigate = useNavigate();
  const cocktailAxios = new CocktailAxios();
  useEffect(() => {
    cocktailAxios.getOneCocktailById(id).then((cocktail) => {
      setCocktail(cocktail);
    });
  }, []);

  const deleteCocktail = (id) => {
    cocktailAxios.deleteCocktail(id).then(() => {
      navigate('/galery');
    });
  };
  console.log(cocktail);
  if (!cocktail) {
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    );
  }
  return <Cocktail cocktail={cocktail} deleteCocktail={deleteCocktail} />;
};

export default CocktailPage;
