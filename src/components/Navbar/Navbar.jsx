import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand as="span">Cocktails</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link as='span'>
            <Link className='link-react' to="/home">Home</Link>
          </Nav.Link>
          <Nav.Link as='span'>
            <Link className='link-react' to="/galery">Galery</Link>
          </Nav.Link>
          <Nav.Link as='span'>
            <Link className='link-react' to="/create">Create</Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
