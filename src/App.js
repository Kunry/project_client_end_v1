import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavbarComponent from './components/Navbar/Navbar';
import GaleryPage from './pages/GaleryPage';
import CreatePage from './pages/CreatePage';
import UpdatePage from './pages/UpdatePage';
import CocktailPage from './pages/CocktailPage';

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/galery' element={<GaleryPage />} />
        <Route path='/create' element={<CreatePage />} />
        <Route path='/cocktail/:id' element={<CocktailPage />} />
        <Route path='/cocktail/update/:id' element={<UpdatePage />} />
      </Routes>
    </div>
  );
}

export default App;
