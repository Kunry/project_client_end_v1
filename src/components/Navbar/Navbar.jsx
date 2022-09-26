import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth.context';

const NavbarComponent = () => {
  const { user, isLoading, isLoggedIn, logOut } = useContext(AuthContext);
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand as='span'>Cocktails</Navbar.Brand>
        <Nav className='me-auto'>
          {!isLoading && isLoggedIn && (
            <>
              <Nav.Link as='span'>{user.username}</Nav.Link>
              <Nav.Link as='span' onClick={() => logOut()}>Log out</Nav.Link>
              <Nav.Link as='span'>
              <Link className='link-react' to='/galery'>
                Galery
              </Link>
            </Nav.Link>
            </>
          )}
          <Nav.Link as='span'>
            <Link className='link-react' to='/home'>
              Home
            </Link>
          </Nav.Link>
          <Nav.Link as='span'>
            <Link className='link-react' to='/create'>
              Create
            </Link>
          </Nav.Link>
          <Nav.Link as='span'>
            <Link className='link-react' to='/registro'>
              Registro
            </Link>
          </Nav.Link>
          <Nav.Link as='span'>
            <Link className='link-react' to='/login'>
              Login
            </Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
