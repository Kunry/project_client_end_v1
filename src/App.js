import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavbarComponent from './components/Navbar/Navbar';
import GaleryPage from './pages/GaleryPage';
import CreatePage from './pages/CreatePage';
import UpdatePage from './pages/UpdatePage';
import CocktailPage from './pages/CocktailPage';
import RegistroPage from './pages/RegistroPage';
import LoginPage from './pages/LoginPage';
import IsPrivate from './components/Routes/isPrivate';

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path='/registro' element={<RegistroPage />} />
        <Route path='/login' element={<LoginPage />} />

        <Route path='/home' element={<HomePage />} />
        <Route
          path='/galery'
          element={
            <IsPrivate>
              <GaleryPage />
            </IsPrivate>
          }
        />
        <Route path='/create' element={<CreatePage />} />
        <Route path='/cocktail/:id' element={<CocktailPage />} />
        <Route path='/cocktail/update/:id' element={<UpdatePage />} />
      </Routes>
    </div>
  );
}

export default App;
